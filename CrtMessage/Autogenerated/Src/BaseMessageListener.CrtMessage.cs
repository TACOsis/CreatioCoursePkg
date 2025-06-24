using System;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Messaging.Common;

namespace Terrasoft.Configuration
{
	using System.Linq;
	using global::Common.Logging;

	#region Class: BaseMessageListener

	public abstract class BaseMessageListener : IMessageListener
	{

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("BaseMessageListener");
		private Guid _messageHistoryId = Guid.Empty;
		private IMessageNotifier _notifier;
		private const string SimpleMessageBody = "{{ \"entityId\": \"{0}\", \"messageHistoryId\":\"{1}\"}}";
		private readonly UserConnection _userConnection;
		private Guid _messageNotifierId = Guid.Empty;

		#endregion

		#region Fields: Protected

		protected string HistorySchemaName = string.Empty;
		protected string HistorySchemaReferenceColumnName = string.Empty;
		protected Guid ListenerSchemaUId = Guid.Empty;
		protected bool NeedCheckExistenceOfRecord = false;

		#endregion

		#region Properties: Protected

		protected Guid MessageHistoryId => _messageHistoryId;

		protected MessageInfo NotifierMessageInfo => _notifier.MessageInfo;

		protected Guid MessageNotifierId => _messageNotifierId;

		private IMsgChannel _messageChannel;
		/// <summary>
		/// Message channel.
		/// </summary>
		public IMsgChannel MessageChannel {
			get {
				return _messageChannel ?? (_messageChannel
					= MsgChannelManager.Instance.FindItemByUId(_userConnection.CurrentUser.Id));
			}
			set {
				_messageChannel = value;
			}
		}

		#endregion

		#region Constructors: Protected

		protected BaseMessageListener(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Inserts message to the history table.
		/// </summary>
		/// <returns>True if message inserted, otherwise - false</returns>
		protected virtual bool InsertMessage() {
			var shortStack = System.Environment.StackTrace.Split('\n').Take(30);
			_log.Debug($"BaseMessageListener/InsertMessage called for record {_notifier.MessageInfo.NotifierRecordId}.\n" +
				$"Call stack is:\n{string.Join("\n", shortStack)}\n");
			_log.Debug($"BaseMessageListener/InsertMessage NeedCheckExistenceOfRecord [{_notifier.MessageInfo.NotifierRecordId}] = {NeedCheckExistenceOfRecord}");
			if (NeedCheckExistenceOfRecord && CheckExistenceOfRecord()) {
				_log.Debug($"BaseMessageListener/InsertMessage CheckExistenceOfRecord [{_notifier.MessageInfo.NotifierRecordId}] = true");
				return false;
			}
			_messageHistoryId = Guid.NewGuid();
			var messageInfo = _notifier.MessageInfo;
			DateTime createdOn = GetMessageCreatedDate(messageInfo);
			_messageNotifierId = GetMessageNotifierId(messageInfo.SchemaUId);
			var insert = new Insert(_userConnection)
				.Into(HistorySchemaName)
				.Set("Id", Column.Parameter(_messageHistoryId))
				.Set("CreatedById", Column.Parameter(messageInfo.CreatedById))
				.Set("CreatedOn", new QueryParameter(createdOn))
				.Set("HasAttachment", new QueryParameter(messageInfo.HasAttachment))
				.Set("Message", new QueryParameter(messageInfo.Message))
				.Set("RecordId", Column.Parameter(messageInfo.NotifierRecordId))
				.Set(HistorySchemaReferenceColumnName, Column.Parameter(messageInfo.ListenersData[ListenerSchemaUId]))
				.Set("MessageNotifierId", Column.Parameter(_messageNotifierId));
			return insert.Execute() == 1;
		}

		/// <summary>
		/// Updates message in the history table.
		/// </summary>
		/// <returns>True if message inserted, otherwise - false</returns>
		protected virtual bool UpdateMessage() {
			var messageInfo = _notifier.MessageInfo;
			DateTime createdOn = GetMessageCreatedDate(messageInfo);
			_messageNotifierId = GetMessageNotifierId(messageInfo.SchemaUId);
			var update = new Update(_userConnection, HistorySchemaName)
				.Set("ModifiedById", Column.Parameter(messageInfo.ModifiedById))
				.Set("ModifiedOn", new QueryParameter(messageInfo.ModifiedOn))
				.Set("HasAttachment", new QueryParameter(messageInfo.HasAttachment))
				.Set("Message", new QueryParameter(messageInfo.Message))
					.Where("RecordId")
						.IsEqual(Column.Parameter(messageInfo.NotifierRecordId))
					.And(HistorySchemaReferenceColumnName)
						.IsEqual(Column.Parameter(messageInfo.ListenersData[ListenerSchemaUId]))
					.And("MessageNotifierId")
						.IsEqual(Column.Parameter(_messageNotifierId));
			return update.Execute() > 0 ? true : InsertMessage();
		}

		/// <summary>
		/// Deletes message from the history table.
		/// </summary>
		/// <returns>True if message inserted, otherwise - false</returns>
		protected virtual bool DeleteMessage() {
			var messageInfo = _notifier.MessageInfo;
			_messageNotifierId = GetMessageNotifierId(messageInfo.SchemaUId);
			var delete = new Delete(_userConnection)
				.From(HistorySchemaName)
					.Where("RecordId")
						.IsEqual(Column.Parameter(messageInfo.NotifierRecordId))
					.And(HistorySchemaReferenceColumnName)
						.IsEqual(Column.Parameter(messageInfo.ListenersData[ListenerSchemaUId]))
					.And("MessageNotifierId")
						.IsEqual(Column.Parameter(_messageNotifierId));
			return delete.Execute() > 0;
		}

		/// <summary>
		/// Executes CRUD operation on the message.
		/// </summary>
		protected virtual void ModifyMessage() {
			bool needNotifyClient;
			switch (_notifier.MessageInfo.EntityState) {
				case EntityChangeType.Inserted: {
						needNotifyClient = InsertMessage();
						break;
					}
				case EntityChangeType.Updated: {
						needNotifyClient = UpdateMessage();
						break;
					}
				case EntityChangeType.Deleted: {
						needNotifyClient = DeleteMessage();
						break;
					}
				default: {
						needNotifyClient = InsertMessage();
						break;
					}
			}
			if (needNotifyClient) {
				NotifyClient();
			}
		}

		#endregion

		#region Methods: Private

		private DateTime GetMessageCreatedDate(MessageInfo messageInfo) {
			var messageHistoryCreatedOn = messageInfo.MessageHistoryCreatedOn;
			DateTime createdOn = DateTime.UtcNow;
			if (messageHistoryCreatedOn != DateTime.MinValue) {
				var userTimeZone = _userConnection.CurrentUser.TimeZone;
				createdOn = TimeZoneInfo.ConvertTimeToUtc(messageHistoryCreatedOn, userTimeZone);
			}
			return createdOn;
		}

		private bool CheckExistenceOfRecord() {
			var messageInfo = _notifier.MessageInfo;
			var existenceOfRecordSelect = new Select(_userConnection)
				.Column(Func.Count(Column.Const(1))).As("ExistenceRecord")
				.From(HistorySchemaName)
					.Where("RecordId")
						.IsEqual(new QueryParameter(messageInfo.NotifierRecordId))
					.And(HistorySchemaReferenceColumnName)
						.IsEqual(new QueryParameter(messageInfo.ListenersData[ListenerSchemaUId]))
					.And(Func.Len("Message"))
						.IsEqual(Column.Parameter(messageInfo.Message.Length)) as Select;
			return existenceOfRecordSelect.ExecuteScalar<int>() > 0;
		}

		private Guid GetMessageNotifierId(Guid schemaUId) {
			var select = new Select(_userConnection)
				.Column("Id")
				.From("MessageNotifier")
				.Where("SchemaUId").IsEqual(new QueryParameter(schemaUId)) as Select;
			return select.ExecuteScalar<Guid>();
		}

		private string GetMessageChannelBody() {
			_messageHistoryId = _userConnection.GetIsFeatureEnabled("CanUpdateHistoryMessage")
				? _notifier.MessageInfo.NotifierRecordId
				: _messageHistoryId;
			return string.Format(SimpleMessageBody,
				_notifier.MessageInfo.ListenersData[ListenerSchemaUId], _messageHistoryId);
		}

		private void NotifyClient() {
			if (MessageChannel == null) {
				return;
			}
			var simpleMessage = new SimpleMessage {
				Id = _userConnection.CurrentUser.Id,
				Body = GetMessageChannelBody()
			};
			simpleMessage.Header.Sender = "UpdateMessageHistory";
			try {
				MessageChannel.PostMessage(simpleMessage);
			} catch (Exception e) {
				_log.Error($"An error occurred while posting websocket message: {e.Message}");
			}
		}

		#endregion

		#region Methods: Public

		public virtual void Update(IMessageNotifier notifier) {
			if (!string.IsNullOrEmpty(HistorySchemaName) && !string.IsNullOrEmpty(HistorySchemaReferenceColumnName)
				&& ListenerSchemaUId != Guid.Empty) {
				if (notifier == null) {
					string errorMessage = string.Format("Message notifier should be initialized.");
					throw new NullReferenceException(errorMessage);
				}
				_notifier = notifier;
				if (_notifier.MessageInfo.ListenersData.ContainsKey(ListenerSchemaUId)) {
					if (_userConnection.GetIsFeatureEnabled("CanUpdateHistoryMessage")) {
						ModifyMessage();
					} else {
						if (InsertMessage()) {
							NotifyClient();
						}
					}
				}
			}
		}

		#endregion

	}

	#endregion

	#region Interface: IMessageListener

	public interface IMessageListener
	{
		void Update(IMessageNotifier notifier);
	}

	#endregion

}
