namespace Terrasoft.Configuration
{
	extern alias NewtonsoftOriginal;

	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using global::Common.Logging;
	using IntegrationApi.Interfaces;
	using IntegrationApi.MailboxDomain.Interfaces;
	using NewtonsoftOriginal.Newtonsoft.Json;
	using NewtonsoftOriginal.Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Messaging.Common;

	#region Class: EmailMessageHelper

	[DefaultBinding(typeof(IEmailMessageHelper))]
	public class EmailMessageHelper : IEmailMessageHelper
	{

		#region Class: EmailRelationsDTO

		/// <summary>
		/// Email relations data transfer object.
		/// </summary>
		protected class EmailRelationsDTO
		{

			#region Properties: Public

			/// <summary>
			/// <see cref="Activity"/> instance identifier collection.
			/// </summary>
			public List<Guid> EmailIds { get; set; } = new List<Guid>();

			/// <summary>
			/// Email relations column names and values dictionary.
			/// </summary>
			public Dictionary<string, Guid> ColumnValues { get; set; } = new Dictionary<string, Guid>();

			#endregion

		}

		#endregion

		#region Fields: Private

		/// <summary>
		/// <see cref="ILog"/> implementation instance. Uses common log appender.
		/// </summary>
		private static readonly ILog _log = LogManager.GetLogger("EmailSync");

		#endregion

		#region Fields: Private

		/// <summary>
		/// <see cref="ActivityParticipantRole"/> instance with code "From" unique identifier.
		/// </summary>
		private readonly Guid _fromRoleId = ActivityConsts.ActivityParticipantRoleFrom;

		/// <summary>
		/// <see cref="ActivityParticipantRole"/> instance with code "To" unique identifier.
		/// </summary>
		private readonly Guid _toRoleId = ActivityConsts.ActivityParticipantRoleTo;

		/// <summary>
		/// <see cref="ActivityParticipantRole"/> instance with code "Bcc" unique identifier.
		/// </summary>
		private readonly Guid _bccRoleId = ActivityConsts.ActivityParticipantRoleBcc;

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		private UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public EmailMessageHelper(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private static TValue TryGetAndReturn<TKey, TValue>(IDictionary<TKey, TValue> dictionary, TKey key) {
			TValue obj;
			if (!dictionary.TryGetValue(key, out obj)) {
				obj = default(TValue);
			}
			return obj;
		}

		/// <summary>
		/// Returns child <see cref="EmailMessageData"/> unique identifiers for <paramref name="email"/>.
		/// Child <see cref="EmailMessageData"/> selected using <paramref name="email"/> headers.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <returns><see cref="EmailMessageData"/> unique identifiers collection.</returns>
		/// <remarks>Only <see cref="EmailMessageData"/> with empty <see cref="EmailMessageData.ParentMessageId"/>
		/// column selected.</remarks>
		private IEnumerable<Guid> GetChildEmailMessageIds(Entity email) {
			QueryCondition selectChildIds = new Select(_userConnection)
				.Column("Id")
				.From("EmailMessageData").Where();
			Query query = AddFilterByMessageId(email, selectChildIds, false);
			Select childIdsSelect = query.And("ParentMessageId").IsNull() as Select;
			List<Guid> childIds = new List<Guid>();
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = childIdsSelect.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						childIds.Add(dataReader.GetColumnValue<Guid>("Id"));
					}
				}
			}
			return childIds;
		}

		/// <summary>
		/// Creates parent message query body part.
		/// </summary>
		/// <returns><see cref="QueryCondition"/> instance.</returns>
		private QueryCondition GetParentMessageSelectBody() {
			return new Select(_userConnection).Top(1)
				.Column("Id")
				.From("EmailMessageData").WithHints(new NoLockHint()).Where();
		}

		/// <summary>
		/// Creates message record rights, using current mailbox as rights source.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		private void ActualizeMessageRights(Entity emailMessageData) {
			EmailRightsManager rightsManager = ClassFactory.Get<EmailRightsManager>(
				new ConstructorArgument("userConnection", _userConnection));
			rightsManager.SetRecordRightsFromMailbox(emailMessageData);
		}

		/// <summary>
		/// Sends notification message for users.
		/// </summary>
		/// <param name="messageData"><see cref="JObject"/> instance.</param>
		/// <param name="users"><see cref="SysAdminUnit"/> unique identifiers list.</param>
		private void SendSocketMessage(JObject messageData, IEnumerable<Guid> users) {
			try {
				var msgManager = MsgChannelManager.Instance;
				var simpleMessage = new SimpleMessage {
					Body = Json.FormatJsonString(Json.Serialize(messageData), Formatting.Indented)
				};
				simpleMessage.Header.Sender = "NewEmail";
				msgManager.Post(users, simpleMessage);
			} catch (InvalidOperationException e) {
				_log.Warn($"Error while posting WS message to users: {string.Join(", ", users)}.", e);
			}
		}

		/// <summary>
		/// Creates email conversation identifiers select.
		/// If slow select feature enabled. <paramref name="email"/> identifier
		/// will be searched in refereces column of all exisiting emails.
		/// This aproach provides more chanses to find related emails, but slows down message save.
		/// </summary>
		/// <param name="email">Email <see cref="Entity"/> instance.</param>
		/// <param name="references">Email reverenced messages identifiers.</param>
		/// <returns><see cref="Select"/> instance.</returns>
		private Select GetConversationIdSelect(Entity email, IEnumerable<string> references) {
			string messageId = email.GetTypedColumnValue<string>("MessageId");
			var select = new Select(_userConnection).Top(1)
					.Column("ConversationId")
				.From("EmailMessageData")
				.Where().OpenBlock("MessageId").In(Column.Parameters(references))
					.Or("ParentMessageId").IsEqual(Column.Parameter(email.PrimaryColumnValue));
			if (_userConnection.GetIsFeatureEnabled("RelatedEmailsSlow") && messageId.IsNotEmpty()) {
				select = select.Or("References").IsLike(Column.Parameter("%" + messageId + "%"));
			}
			select = select.CloseBlock()
				.And("ConversationId").Not().IsNull();
			return select as Select;
		}

		/// <summary>
		/// Returns <see cref="EmailMessageData"/> record identifier from <paramref name="mailboxId"/> for
		/// <paramref name="activityId"/>.
		/// </summary>
		/// <param name="activityId"><see cref="Activity"/> record identifier.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> record identifier.</param>
		/// <returns><see cref="EmailMessageData"/> record identifier.</returns>
		private Guid GetEmailMessageId(Guid activityId, Guid mailboxId) {
			Select select = new Select(_userConnection).Top(1)
					.Column("Id")
					.From("EmailMessageData")
					.Where("OwnerId").IsEqual(Column.Parameter(_userConnection.CurrentUser.ContactId))
					.And("ActivityId").IsEqual(Column.Parameter(activityId))
				as Select;
			if (!mailboxId.IsEmpty()) {
				select = select.And("MailboxSyncSettings").IsEqual(Column.Parameter(mailboxId)) as Select;
			} else {
				select = select.And("MailboxSyncSettings").IsNull() as Select;
			}
			return select.ExecuteScalar<Guid>();
		}

		/// <summary>
		/// Returns <see cref="EmailMessageData"/> instance from <paramref name="mailboxId"/> for
		/// <paramref name="activityId"/>. Creates new instance if record not exists.
		/// </summary>
		/// <param name="activityId"><see cref="Activity"/> record identifier.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> record identifier.</param>
		/// <returns><see cref="EmailMessageData"/> instance.</returns>
		private Entity GetEmail(Guid activityId, Guid mailboxId) {
			var emailId = GetEmailMessageId(activityId, mailboxId);
			EntitySchema schema = _userConnection.EntitySchemaManager.GetInstanceByName("EmailMessageData");
			Entity email = schema.CreateEntity(_userConnection);
			email.UseAdminRights = GlobalAppSettings.FeatureUseAdminRightsInEmbeddedLogic;
			if (emailId.IsEmpty()) {
				email.SetDefColumnValues();
				return email;
			}
			if (email.FetchFromDB(emailId)) {
				return email;
			}
			return null;
		}

		/// <summary>
		/// Checks is message headers set.
		/// </summary>
		/// <param name="entity"><see cref="EmailMessageData"/> record identifier.</param>
		/// <returns><c>True</c> if headers set. Otherwise returns <c>false</c>.</returns>
		private bool CheckHeadersSet(Entity entity) {
			if (entity.StoringState == StoringObjectState.New) {
				return false;
			}
			var messageId = entity.GetTypedColumnValue<string>("MessageId");
			return messageId.IsNotNullOrEmpty();
		}

		/// <summary>
		/// Need to skip message processing.
		/// </summary>
		/// <returns><c>True</c> if need to skip. Otherwise returns <c>false</c>.</returns>
		private bool IsForceSetNeedProcess() {
			return Core.Configuration.SysSettings.GetValue(_userConnection, "ForceSetNeedProcess", false);
		}

		/// <summary>
		/// Checks is <paramref name="mailboxId"/> shared mailbox or not.
		/// </summary>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <returns><c>True</c> if <paramref name="mailboxId"/> shared, <c>false</c> otherwise.</returns>
		private bool IsMailboxShared(Guid mailboxId) {
			Select select = new Select(_userConnection).Top(1)
					.Column("IsShared")
				.From("MailboxSyncSettings")
				.Where("Id").IsEqual(Column.Parameter(mailboxId)) as Select;
			return select.ExecuteScalar<bool>();
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Returns <see cref="Select"/> instance for <see cref="Activity"/> <paramref name="columnName">column</paramref>
		/// value.
		/// </summary>
		/// <param name="activityId"><see cref="Activity"/> instance unique identifier.</param>
		/// <param name="columnName"><see cref="Activity"/> entity column name.</param>
		/// <returns><see cref="Select"/> instance.</returns>
		protected virtual Select GetActivityColumnSelect(Guid activityId, string columnName) {
			if (activityId.IsEmpty()) {
				return null;
			}
			Select select = new Select(_userConnection).Top(1)
					.Column(columnName)
				.From("Activity")
				.Where("Id").IsEqual(Column.Parameter(activityId)) as Select;
			return select;
		}

		/// <summary>
		/// Returns <see cref="Activity.IsNeedProcess"/> column value for <paramref name="emailMessageData"/>.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <returns><see cref="Activity.IsNeedProcess"/> column value.</returns>
		protected virtual bool GetActivityIsNeedProcess(Entity emailMessageData) {
			Guid activityId = emailMessageData.GetTypedColumnValue<Guid>("ActivityId");
			Select isActivityProcessedSelect = GetActivityColumnSelect(activityId, "IsNeedProcess");
			if (isActivityProcessedSelect == null) {
				return false;
			}
			return isActivityProcessedSelect.ExecuteScalar<bool>();
		}

		/// <summary>
		/// Checks if activity is draft for <paramref name="emailMessageData"/>.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <returns><c>True</c> if activity is draft, <c>false</c> otherwise.</returns>
		protected virtual bool GetIsActivityDraft(Entity emailMessageData) {
			Guid activityId = emailMessageData.GetTypedColumnValue<Guid>("ActivityId");
			Select activitySendDateSelect = GetActivityColumnSelect(activityId, "SendDate");
			if (activitySendDateSelect == null) {
				return true;
			}
			return activitySendDateSelect.ExecuteScalar<DateTime>().Equals(DateTime.MinValue);
		}

		/// <summary>
		/// Returns <see cref="MailboxSyncSettings.ActualizeMessageRelations"/> column value for <paramref name="email"/> 
		/// message.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <returns><see cref="MailboxSyncSettings.ActualizeMessageRelations"/> column value.</returns>
		protected virtual bool GetIsActualizeMessageRelationsAllowed(Entity email) {
			Guid mailboxId = email.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			Select select = new Select(_userConnection)
					.Column("ActualizeMessageRelations")
				.From("MailboxSyncSettings")
				.Where("Id").IsEqual(Column.Parameter(mailboxId)) as Select;
			return select.ExecuteScalar<bool>();
		}

		/// <summary>
		/// Returns current user role for <paramref name="activity"/>.
		/// </summary>
		/// <param name="activity"><see cref="Entity"/> instance.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance identifier.</param>
		/// <returns><see cref="_fromRoleId"/> if current user has sender email,
		/// <see cref="_toRoleId"/> otherwise.</returns>
		protected Guid GetCurrentUserRole(Entity activity, Guid mailboxId) {
			if (mailboxId.IsEmpty()) {
				return GetCurrentUserRole(activity);
			}
			var mailboxService = ClassFactory.Get<IMailboxService>(new ConstructorArgument("uc", _userConnection));
			var mailboxEmails = mailboxService.GetEmails(mailboxId);
			var senderEmail = GetSenderEmail(activity.GetTypedColumnValue<string>("Sender"));
			if (mailboxEmails.Contains(senderEmail)) {
				return _fromRoleId;
			}
			if (_userConnection.GetIsFeatureEnabled("UseBccRole")) {
				var to = activity.GetTypedColumnValue<string>("Recepient").ToLower();
				var cc = activity.GetTypedColumnValue<string>("CopyRecepient").ToLower();
				if (mailboxEmails.All(me => !to.Contains(me) && !cc.Contains(me))) {
					return _bccRoleId;
				}
			}
			return _toRoleId;
		}

		/// <summary>
		/// Returns current user role for <paramref name="activity"/>.
		/// </summary>
		/// <param name="activity"><see cref="Entity"/> instance.</param>
		/// <returns><see cref="_fromRoleId"/> if current user has sender email,
		/// <see cref="_toRoleId"/> otherwise.</returns>
		protected virtual Guid GetCurrentUserRole(Entity activity) {
			string senderEmail = GetSenderEmail(activity.GetTypedColumnValue<string>("Sender"));
			var senderContacts = ContactUtilities.GetContactsByEmails(_userConnection, new List<string> {
				senderEmail
			});
			if (senderContacts.ContainsKey(_userConnection.CurrentUser.ContactId)) {
				return _fromRoleId;
			}
			return _toRoleId;
		}

		/// <summary>
		/// Gets sender email.
		/// </summary>
		/// <param name="sender"></param>
		/// <returns>Sender email.</returns>
		protected virtual string GetSenderEmail(string sender) {
			var senderList = sender.ParseEmailAddress();
			return senderList.Count == 1 ? senderList[0].ToLower() : string.Empty;
		}

		/// <summary>
		/// Gets <see cref="IMsgChannel"/> instance for <paramref name="sysAdminUnitId"/>.
		/// </summary>
		/// <param name="sysAdminUnitId"><see cref="SysAdminUnit"/> instance unique identifier.</param>
		/// <returns><see cref="IMsgChannel"/> instance.</returns>
		protected virtual IMsgChannel GetMessageChannel(Guid sysAdminUnitId) {
			return MsgChannelManager.Instance.FindItemByUId(sysAdminUnitId);
		}

		/// <summary>
		/// Sets message headers from <paramref name="headers"/> to <paramref name="email"/> instance.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="headers">Message headers dictionary.</param>
		protected virtual void SetHeaders(Entity email, Dictionary<string, string> headers) {
			if (headers.IsNullOrEmpty() || CheckHeadersSet(email)) {
				return;
			}
			email.SetColumnValue("References", TryGetAndReturn(headers, "References"));
			email.SetColumnValue("MessageId", TryGetAndReturn(headers, "MessageId"));
			email.SetColumnValue("InReplyTo", TryGetAndReturn(headers, "InReplyTo"));
			email.SetColumnValue("SyncSessionId", TryGetAndReturn(headers, "SyncSessionId"));
			SetSendDate(email, headers);
		}

		/// <summary>
		/// Sets SendDate column value in <paramref name="email"/>.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="headers">Email headers collection.</param>
		protected void SetSendDate(Entity email, Dictionary<string, string> headers) {
			if (!headers.ContainsKey("SendDateTicks")) {
				return;
			}
			var ticks = long.Parse(headers["SendDateTicks"]);
			var sendDate = ActivityUtils.GetSendDateFromTicks(_userConnection, ticks);
			email.SetColumnValue("SendDate", sendDate);
		}

		/// <summary>
		/// Updates <paramref name="email"/> chain properties.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		protected virtual void ActualizeMessageChain(Entity email) {
			bool disableActivityRelationsActualization = !GetIsActualizeMessageRelationsAllowed(email);
			if (disableActivityRelationsActualization) {
				return;
			}
			string messageId = email.GetTypedColumnValue<string>("MessageId");
			string inReplyTo = email.GetTypedColumnValue<string>("InReplyTo");
			if (inReplyTo.IsNotEmpty()) {
				SetParentMessageId(email);
			}
			if (messageId.IsNotEmpty()) {
				UpdateChildMessages(email);
			}
			SetConversationId(email);
		}

		/// <summary>
		/// Updates <see cref="Activity"/> relations using <paramref name="email"/> chain properties.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		protected virtual void ActualizeMessageRelations(Entity email) {
			IEnumerable<EntitySchemaColumn> columns = GetActivityRelationColumns();
			bool isActivityDraft = GetIsActivityDraft(email);
			bool disableActivityRelationsActualization = !GetIsActualizeMessageRelationsAllowed(email);
			if (isActivityDraft || disableActivityRelationsActualization || columns.IsEmpty()) {
				return;
			}
			if (_userConnection.GetIsFeatureEnabled("RelatedEmails")) {
				ActualizeMessageRelationsByConversationId(email.GetTypedColumnValue<Guid>("ConversationId"), columns);
				return;
			}
			bool isRootMessage = email.GetTypedColumnValue<Guid>("ParentMessageId").IsEmpty();
			if (isRootMessage) {
				return;
			}
			foreach (EntitySchemaColumn column in columns) {
				if (!(column.DataValueType is GuidDataValueType)) {
					continue;
				}
				var actualizeRelations = new StoredProcedure(_userConnection, "tsp_UpdEmailChainRelations")
					.WithParameter("startId", email.PrimaryColumnValue)
					.WithParameter("columnName", column.ColumnValueName) as StoredProcedure;
				actualizeRelations.InitializeParameters();
				try {
					using (var dbExecutor = _userConnection.EnsureDBConnection()) {
						actualizeRelations.Execute(dbExecutor);
					}
				} catch (Exception e) {
					_log.Error(string.Format("[{0} - sync session: {1}] Error on actualizing email {2} column for {3} email message data.",
						_userConnection.CurrentUser.Name, email.GetTypedColumnValue<string>("SyncSessionId"),
						column.ColumnValueName, email.PrimaryColumnValue), e);
				}
			}
		}

		/// <summary>
		/// Actualize activity relations by conversation identifier.
		/// </summary>
		/// <param name="conversationId"><see cref="EmailMessageData"/> instance conversation identifier.</param>
		/// <param name="columns">Activity relations <see cref="EntitySchemaColumn"/> instance collection.</param>
		protected void ActualizeMessageRelationsByConversationId(Guid conversationId, IEnumerable<EntitySchemaColumn> columns) {
			var emailMessageDataSelect = (Select)new Select(_userConnection).Distinct()
				.Column("ActivityId")
				.From("EmailMessageData")
				.Where("ConversationId").IsEqual(Column.Parameter(conversationId));
			var activitySelect = new Select(_userConnection).Distinct()
				.Column("Activity", "Id")
				.Column("Activity", "SendDate")
				.From("Activity")
				.Where("Id").In(emailMessageDataSelect)
				.OrderByDesc("Activity", "SendDate") as Select;
			foreach (EntitySchemaColumn column in columns) {
				if (!(column.DataValueType is GuidDataValueType)) {
					continue;
				}
				activitySelect.Column("Activity", column.ColumnValueName);
			}
			EmailRelationsDTO emailRealations;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = activitySelect.ExecuteReader(dbExecutor)) {
					emailRealations = GetActivityRelationsValues(dataReader, columns);
				}
			}
			SaveActivityRelations(emailRealations);
		}

		/// <summary>
		/// Gets relation values collection.
		/// </summary>
		/// <param name="dataReader"><see cref="IDataReader"/> instance.</param>
		/// <param name="columns">Activity relations <see cref="EntitySchemaColumn"/> instance collection.</param>
		/// <returns><see cref="Activity"/> identifier collection and email relations column names and values dictionary.</returns>
		protected EmailRelationsDTO GetActivityRelationsValues(IDataReader dataReader, IEnumerable<EntitySchemaColumn> columns) {
			var emailRealations = new EmailRelationsDTO();
			List<Guid> emailIds = emailRealations.EmailIds;
			Dictionary<string, Guid> columnValues = emailRealations.ColumnValues;
			while (dataReader.Read()) {
				emailIds.Add(dataReader.GetColumnValue<Guid>("Id"));
				foreach (EntitySchemaColumn column in columns) {
					string columnName = column.ColumnValueName;
					if (columnValues.ContainsKey(columnName) || !(column.DataValueType is GuidDataValueType)) {
						continue;
					}
					var columnValue = dataReader.GetColumnValue<Guid>(columnName);
					if (columnValue.IsEmpty()) {
						continue;
					}
					columnValues.Add(columnName, columnValue);
					if (columnValues.Count == columns.Count()) {
						break;
					}
				}
				if (columnValues.Count == columns.Count()) {
					break;
				}
			}
			return emailRealations;
		}

		/// <summary>
		/// Saves relation values to activity collection.
		/// </summary>
		/// <param name="items"><see cref="Activity"/> identifier collection and email relations column names and values dictionary.</param>
		protected void SaveActivityRelations(EmailRelationsDTO emailRealations) {
			EntitySchema schema = _userConnection.EntitySchemaManager.GetInstanceByName("Activity");
			foreach (Guid activityId in emailRealations.EmailIds) {
				Entity activity = schema.CreateEntity(_userConnection);
				if (activity.FetchFromDB(activityId, false)) {
					try {
						foreach (KeyValuePair<string, Guid> columnValue in emailRealations.ColumnValues) {
							if (activity.GetTypedColumnValue<Guid>(columnValue.Key).IsEmpty()) {
								activity.SetColumnValue(columnValue.Key, columnValue.Value);
							}
						}
						activity.Save();
					}
					catch (Exception e) {
						_log.Error(string.Format(
							"[{0} - title: {1}] Error on actualizing relations for {2} activity.",
							_userConnection.CurrentUser.Name, activity.GetTypedColumnValue<string>("Title"),
							activity.PrimaryColumnValue), e);
					}
				}
			}
		}

		/// <summary>
		/// Creates <see cref="Query"/> filters for message chain search using message-id and in-reply-to propertries.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="queryCondition"><see cref="QueryCondition"/> instance.</param>
		/// <param name="parentSelect">Search direction. When <c>true</c> parent message filters created, 
		/// when <c>false</c> child messages filters created.</param>
		/// <returns><see cref="Query"/> instance with filters for message chain search.</returns>
		protected virtual Query AddFilterByMessageId(Entity email, QueryCondition queryCondition, bool parentSelect) {
			string filterColumnName = parentSelect ? "MessageId" : "InReplyTo";
			string emailColumnName = parentSelect ? "InReplyTo" : "MessageId";
			string filterValue = email.GetTypedColumnValue<string>(emailColumnName);
			return queryCondition
				.OpenBlock(filterColumnName).IsEqual(Column.Parameter(filterValue))
					.And(filterColumnName).IsNotEqual(Func.IsNull(Column.Const(string.Empty), Column.Const("null")))
						.And(filterColumnName).Not().IsNull()
				.CloseBlock();
		}

		/// <summary>
		/// Creates <see cref="Query"/> sorting condition using <paramref name="email"/> mailbox unique identifier.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="query"><see cref="Query"/> instance.</param>
		/// <returns><see cref="Query"/> instance with sorting condition.</returns>
		protected virtual Query AddMailboxSorting(Entity email, Query query) {
			var queryCase = new QueryCase();
			Guid mailboxId = email.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			var queryCondition = new QueryCondition(QueryConditionType.Equal) {
				LeftExpression = new QueryColumnExpression("MailboxSyncSettings")
			};
			queryCondition.RightExpressions.Add(new QueryParameter(mailboxId));
			queryCase.AddWhenItem(queryCondition, Column.Parameter(1));
			queryCase.ElseExpression = Column.Parameter(2);
			return query.OrderBy(OrderDirectionStrict.Ascending, new QueryColumnExpression(queryCase));
		}

		/// <summary>
		/// Sets <paramref name="email"/> parent message id in chain.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <remarks>When changing this method, check that DB test ActualizeEmailParentMessageId_Base_Tests is up to date.
		/// </remarks>
		protected virtual void SetParentMessageId(Entity email) {
			if (!GetIsChainHeadersExists(email, "InReplyTo")) {
				return;
			}
			Guid parentId = Guid.Empty;
			string messageIdHeader = email.GetTypedColumnValue<string>("InReplyTo");
			if (messageIdHeader.IsNotNullOrEmpty()) {
				QueryCondition selectBody = GetParentMessageSelectBody();
				Select parentIdSelect = AddFilterByMessageId(email, selectBody, true) as Select;
				parentIdSelect = AddMailboxSorting(email, parentIdSelect) as Select;
				parentId = parentIdSelect.ExecuteScalar<Guid>();
			}
			if (parentId.IsNotEmpty()) {
				email.SetColumnValue("ParentMessageId", parentId);
			}
		}

		/// <summary>
		/// Sets <paramref name="email"/> message id as parent message id for child messages in chain.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <remarks>When changing this method, check that DB test ActualizeEmailChildMessages_Base_Tests is up to date.
		/// </remarks>
		protected virtual void UpdateChildMessages(Entity email) {
			if (!GetIsChainHeadersExists(email, "MessageId")) {
				return;
			}
			IEnumerable<Guid> childIds = GetChildEmailMessageIds(email);
			if (childIds.IsEmpty()) {
				return;
			}
			var parentIdUpdate = new Update(_userConnection, "EmailMessageData")
					.WithHints(new RowLockHint())
					.Set("ParentMessageId", Column.Parameter(email.PrimaryColumnValue))
				.Where("Id").In(Column.Parameters(childIds)) as Update;
			parentIdUpdate.Execute();
		}

		/// <summary>
		/// Checks <paramref name="email"/> chain headers.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="messageIdHeaderName">Chain header name.</param>
		/// <returns><c>True</c> if chain headers exists, <c>false</c> otherwise.</returns>
		protected virtual bool GetIsChainHeadersExists(Entity email, string messageIdHeaderName) {
			string messageIdHeader = email.GetTypedColumnValue<string>(messageIdHeaderName);
			return messageIdHeader.IsNotNullOrEmpty();
		}

		/// <summary>
		/// Returns <see cref="Activity"/> relation columns collection.
		/// </summary>
		/// <returns><see cref="Activity"/> relation columns collection.</returns>
		/// <remarks>Relation columns list defined by <see cref="EntityCollection"/> lookup.</remarks>
		protected IEnumerable<EntitySchemaColumn> GetActivityRelationColumns() {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "EntityConnection") {
				UseAdminRights = false,
				CacheItemName = "EntityConnectionColumns"
			};
			string columnUIdName = esq.AddColumn("ColumnUId").Name;
			EntitySchema activitySchema = _userConnection.EntitySchemaManager.GetInstanceByName("Activity");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SysEntitySchemaUId",
					activitySchema.UId));
			EntityCollection activityConnections = esq.GetEntityCollection(_userConnection);
			return activityConnections.Select(connection =>
					activitySchema.Columns.FindByUId(connection.GetTypedColumnValue<Guid>(columnUIdName))).Where(column => column != null);
		}

		/// <summary>
		/// Sends notification message for new <paramref name="email"/> instance.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		protected virtual void SendUserMessage(Entity email) {
			if (!GetNeedSendNotification(email)) {
				return;
			}
			Guid mailboxId = email.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			bool isNeedProcess = email.GetTypedColumnValue<bool>("IsNeedProcess");
			Guid role = email.GetTypedColumnValue<Guid>("RoleId");
			bool isMessageIncoming = !role.Equals(_fromRoleId);
			bool isMessageDraft = GetIsActivityDraft(email);
			JObject messageData = new JObject();
			messageData["IsNeedProcess"] = isNeedProcess;
			messageData["IsMessageIncoming"] = isMessageIncoming;
			messageData["IsMessageDraft"] = isMessageDraft;
			messageData["MailboxSyncSettings"] = mailboxId;
			var users = GetUsersForNotificationList(email);
			if (users.Any()) {
				SendSocketMessage(messageData, users);
			}
		}

		/// <summary>
		/// Creates new <see cref="FinishedSyncSession"/> instance with <paramref name="sessionId"/>.
		/// </summary>
		/// <param name="sessionId">Synchronization session unique identifier.</param>
		protected virtual void AddFinishedSyncSession(string sessionId) {
			if (_userConnection.GetIsFeatureEnabled("OldEmailIntegration") 
				&& (GetIsSessionExists(sessionId) || GetSessionMessagesCount(sessionId) == 0)) {
				return;
			}
			_log.Info(string.Format("[{0} - sync session: {1}] Session finished, FinishedSyncSession need to be saved.",
						_userConnection.CurrentUser.Name, sessionId));
			try {
				EntitySchema finishedSessionSchema = _userConnection.EntitySchemaManager
					.GetInstanceByName("FinishedSyncSession");
				Entity finishedSession = finishedSessionSchema.CreateEntity(_userConnection);
				finishedSession.UseAdminRights = false;
				finishedSession.SetDefColumnValues();
				finishedSession.SetColumnValue("SyncSessionId", sessionId);
				finishedSession.Save();
				_log.Info(string.Format("[{0} - sync session: {1}] FinishedSyncSession saved, record id: {2}.",
						_userConnection.CurrentUser.Name, sessionId, finishedSession.PrimaryColumnValue));
			} catch (Exception e) {
				_log.Error(string.Format("[{0} - sync session: {1}] Error on saving FinishedSyncSession.",
						_userConnection.CurrentUser.Name, sessionId), e);
				throw;
			}
			
		}

		/// <summary>
		/// Checks is finished synchronization session with <paramref name="sessionId"/> exists.
		/// </summary>
		/// <param name="sessionId">Synchronization session unique identifier.</param>
		/// <returns><c>True</c> if finished synchronization session exists, <c>false</c> otherwise.</returns>
		protected virtual bool GetIsSessionExists(string sessionId) {
			Select select = new Select(_userConnection).Top(1)
				.Column("Id")
			.From("FinishedSyncSession")
			.Where("SyncSessionId").IsEqual(Column.Parameter(sessionId)) as Select;
			return select.ExecuteScalar<Guid>().IsNotEmpty();
		}

		/// <summary>
		/// Returns messages count for finished synchronization session with <paramref name="sessionId"/>.
		/// </summary>
		/// <param name="sessionId">Synchronization session unique identifier.</param>
		/// <returns>Messages count for finished synchronization session.</returns>
		protected virtual int GetSessionMessagesCount(string sessionId) {
			Select select = new Select(_userConnection)
				.Column(Func.Count("SyncSessionId"))
			.From("EmailMessageData")
			.Where("SyncSessionId").IsEqual(Column.Parameter(sessionId)) as Select;
			return select.ExecuteScalar<int>();
		}
		
		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers. List contains 
		/// identifiers of users which has read rights for <paramref name="emailMessageData"/> related mailbox.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers of users which has read rights
		/// for <paramref name="emailMessageData"/> related mailbox.</returns>
		protected virtual IEnumerable<Guid> GetMailboxUsersList(Entity emailMessageData) {
			EmailRightsManager rightsManager = ClassFactory.Get<EmailRightsManager>(
				new ConstructorArgument("userConnection", _userConnection));
			return rightsManager.GetUsersWithExplicitRights(emailMessageData);
		}

		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers for new email notifification.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers for new email notification.</returns>
		protected virtual IEnumerable<Guid> GetUsersForNotificationList(Entity email) {
			var result = new List<Guid> { _userConnection.CurrentUser.Id };
			Guid mailboxId = email.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			if (mailboxId.IsNotEmpty() && IsMailboxShared(mailboxId)) {
				return result.Union(GetMailboxUsersList(email)).Distinct();
			}
			return result;
		}

		/// <summary>
		/// Check is <paramref name="email"/> related mailbox allows to send new email user notifications.
		/// </summary>
		/// <param name="email"><see cref="EmailMessageData"/> instance.</param>
		/// <returns><c>True</c> when <paramref name="email"/> related mailbox allows to send new email user
		/// notifications. Otherwise returns <c>false</c>.</returns>
		protected virtual bool GetNeedSendNotification(Entity email) {
			Guid mailboxId = email.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			var select = new Select(_userConnection).Top(1)
				.Column("SendWebsocketNotifications")
				.From("MailboxSyncSettings")
				.Where("Id").IsEqual(Column.Parameter(mailboxId)) as Select;
			return select.ExecuteScalar<bool>();
		}

		/// <summary>
		/// Updates <paramref name="email"/> conversation identifier.
		/// </summary>
		/// <param name="email">Email <see cref="Entity"/> instance.</param>
		protected void SetConversationId(Entity email) {
			if (!_userConnection.GetIsFeatureEnabled("RelatedEmails")) {
				return;
			}
			var referencesList = GetReferences(email);
			if (referencesList.IsEmpty()) {
				return;
			}
			var conversationId = GetConversationId(email, referencesList);
			_log.Debug($"[{_userConnection.CurrentUser.Name}] conversation id for " +
				$"EMD id = {email.PrimaryColumnValue} is {conversationId}");
			UpdateConversationId(email, referencesList, conversationId);
		}

		/// <summary>
		/// Returns <paramref name="email"/> referenced emails identifiers list.
		/// </summary>
		/// <param name="email">Email <see cref="Entity"/> instance.</param>
		/// <returns>Referenced emails identifiers list.</returns>
		protected IEnumerable<string> GetReferences(Entity email) {
			string references = email.GetTypedColumnValue<string>("References");
			string messageId = email.GetTypedColumnValue<string>("MessageId");
			string inReplyTo = email.GetTypedColumnValue<string>("InReplyTo");
			List<string> referencesList = new List<string>();
			if (references.IsNotEmpty()) {
				referencesList.AddRangeIfNotExists(references
					.Replace("><", ">,<")
					.Split(new char[] {' ', ','}, StringSplitOptions.RemoveEmptyEntries).Select(r => r.Trim()));
				_log.Debug($"[{_userConnection.CurrentUser.Name}] references for " +
					$"EMD id = {email.PrimaryColumnValue} is {references}, parced {referencesList.Count} identifiers");
			}
			if (messageId.IsNotEmpty()) {
				_log.Debug($"[{_userConnection.CurrentUser.Name}] add messageId {messageId}" +
					$" to references for EMD id = {email.PrimaryColumnValue}");
				referencesList.AddIfNotExists(messageId);
			}
			if (inReplyTo.IsNotEmpty()) {
				_log.Debug($"[{_userConnection.CurrentUser.Name}] add inReplyTo {inReplyTo}" +
					$" to references for EMD id = {email.PrimaryColumnValue}");
				referencesList.AddIfNotExists(inReplyTo);
			}
			return referencesList;
		}

		/// <summary>
		/// Returns <paramref name="email"/> conversation identifier.
		/// </summary>
		/// <param name="email">Email <see cref="Entity"/> instance.</param>
		/// <param name="references">Referenced emails identifiers list.</param>
		/// <returns>Email conversation identifier.</returns>
		protected Guid GetConversationId(Entity email, IEnumerable<string> references) {
			var conversationId = email.GetIsColumnValueLoaded("ConversationId") 
					? email.GetTypedColumnValue<Guid>("ConversationId")
					: Guid.Empty;
			if (conversationId.IsNotEmpty()) {
				return conversationId;
			}
			var select = GetConversationIdSelect(email, references);
			conversationId = select.ExecuteScalar<Guid>();
			return conversationId.IsNotEmpty() ? conversationId : Guid.NewGuid();
		}

		/// <summary>
		/// Updates <paramref name="email"/> conversation identifier.
		/// </summary>
		/// <param name="email">Email <see cref="Entity"/> instance.</param>
		/// <param name="references">Referenced emails identifiers list.</param>
		/// <param name="conversationId">Email conversation identifier.</param>
		protected void UpdateConversationId(Entity email, IEnumerable<string> references, Guid conversationId) {
			email.SetColumnValue("ConversationId", conversationId);
			var conversationIdUpdate = new Update(_userConnection, "EmailMessageData")
				.WithHints(new RowLockHint())
				.Set("ConversationId", Column.Parameter(conversationId))
				.Where("MessageId").In(Column.Parameters(references))
				.And("MessageId").Not().IsNull()
				.And("MessageId").IsNotEqual(Column.Parameter(string.Empty)) as Update;
			conversationIdUpdate.BuildParametersAsValue = true;
			_log.Debug($"[{_userConnection.CurrentUser.Name}] UpdateConversationId query is: \n" +
				$"{conversationIdUpdate.GetSqlText()}");
			conversationIdUpdate.Execute();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Creates <see cref="EmailMessageData"/> instance for current user in mailbox.
		/// </summary>
		/// <param name="activity"><see cref="Entity"/> instance.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <returns>new <see cref="EmailMessageData"/> instance, <c>null</c> if <see cref="EmailMessageData"/>
		/// instance for current user in mailbox already exists.</returns>
		public virtual Entity CreateEmailMessage(Entity activity, Guid mailboxId) {
			return CreateEmailMessage(activity, mailboxId, null);
		}

		/// <summary>
		/// Creates <see cref="EmailMessageData"/> instance for current user in mailbox.
		/// </summary>
		/// <param name="activity"><see cref="Entity"/> instance.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <param name="headers">Message inet headers dictionary.</param>
		/// <param name="save">Save new <see cref="EmailMessageData"/> instance flag.</param>
		/// <returns>new <see cref="EmailMessageData"/> instance, <c>null</c> if <see cref="EmailMessageData"/>
		/// instance for current user in mailbox already exists.</returns>
		public virtual Entity CreateEmailMessage(Entity activity, Guid mailboxId, Dictionary<string, string> headers,
				bool save = true) {
			Guid activityId = activity.PrimaryColumnValue;
			Entity email = GetEmail(activityId, mailboxId);
			if (email == null) {
				return null;
			}
			if (email.StoringState == StoringObjectState.New) {
				Guid participantRoleId = mailboxId.IsEmpty() ? _fromRoleId : GetCurrentUserRole(activity, mailboxId);
				email.SetColumnValue("OwnerId", _userConnection.CurrentUser.ContactId);
				email.SetColumnValue("RoleId", participantRoleId);
				email.SetColumnValue("ActivityId", activityId);
				email.SetColumnValue("IsNeedProcess",
					IsForceSetNeedProcess() || activity.GetTypedColumnValue<bool>("IsNeedProcess"));
			} else if (mailboxId.IsEmpty()) {
				var senderEmail = activity.GetTypedColumnValue<string>("Sender").ExtractEmailAddress();
				var mailboxEsq = GetMailboxEsq(senderEmail, true);
				var mailboxes = mailboxEsq.GetEntityCollection(_userConnection);
				mailboxId = mailboxes.Count == 0 ? Guid.Empty : mailboxes[0].PrimaryColumnValue;
			}
			if (!mailboxId.IsEmpty()) {
				email.SetColumnValue("MailboxSyncSettings", mailboxId);
			}
			SetHeaders(email, headers);
			if (save) {
				email.Save();
			}
			return email;
		}

		/// <summary>
		/// <see cref="EmailMessageData"/> instance on inserting event handler.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		public virtual void OnEmailMessageDataInserting(Entity emailMessageData) {
			if (emailMessageData.GetTypedColumnValue<Guid>("MailboxSyncSettings").IsEmpty()) {
				return;
			}
			if (emailMessageData.StoringState == StoringObjectState.New) {
				var isNeedProcess = IsForceSetNeedProcess() || GetActivityIsNeedProcess(emailMessageData);
				emailMessageData.SetColumnValue("IsNeedProcess", isNeedProcess);
			}
			ActualizeMessageChain(emailMessageData);
		}

		/// <summary>
		/// <see cref="EmailMessageData"/> instance on inserted event handler.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		public virtual void OnEmailMessageDataInserted(Entity emailMessageData) {
			if (emailMessageData.GetTypedColumnValue<Guid>("MailboxSyncSettings").IsEmpty()) {
				return;
			}
			if (emailMessageData.StoringState == StoringObjectState.New) {
				ActualizeMessageRights(emailMessageData);
				ActualizeMessageRelations(emailMessageData);
				SendUserMessage(emailMessageData);
			} else {
				ActualizeMessageRelations(emailMessageData);
			}
		}

		/// <summary>
		/// Sends synchronization session end event with <paramref name="syncSessionId"/>.
		/// </summary>
		/// <param name="syncSessionId">Synchronization session unique identifier.</param>
		public virtual void SendSyncSessionFinished(string syncSessionId) {
			AddFinishedSyncSession(syncSessionId);
		}

		/// <summary>
		/// Returns mailbox instance by <paramref name="senderEmailAddress"/> query.
		/// </summary>
		/// <param name="senderEmailAddress"><see cref="MailboxSyncSettings"/> sender email address column filter.</param>
		/// <param name="ignoreRights">Ignore query rights flag.</param>
		/// <returns><see cref="EntitySchemaQuery"/> instance.</returns>
		public EntitySchemaQuery GetMailboxEsq(string senderEmailAddress, bool ignoreRights = false) {
			var mailboxESQ = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "MailboxSyncSettings");
			mailboxESQ.Filters.Add(mailboxESQ.
				CreateFilterWithParameters(FilterComparisonType.Contain, "SenderEmailAddress", senderEmailAddress));
			mailboxESQ.PrimaryQueryColumn.IsAlwaysSelect = true;
			if (ignoreRights) {
				mailboxESQ.UseAdminRights = false;
			} else {
				AddMailboxRightsFilters(mailboxESQ, _userConnection.CurrentUser.Id);
			}
			return mailboxESQ;
		}

		/// <summary>
		/// Adds mailbox rigths filters to mailbox query.
		/// </summary>
		/// <param name="esq"><see cref="EntitySchemaQuery"/> instance.</param>
		/// <param name="currentUserId">Current user identifier.</param>
		public void AddMailboxRightsFilters(EntitySchemaQuery esq, Guid currentUserId) {
			var filterGroup = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or) {
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SysAdminUnit", currentUserId)
			};
			IEntitySchemaQueryFilterItem isSharedMailFilter = esq
				.CreateFilterWithParameters(FilterComparisonType.Equal, "IsShared", true);
			filterGroup.Add(isSharedMailFilter);
			esq.Filters.Add(filterGroup);
		}

		#endregion

	}

	#endregion

}
