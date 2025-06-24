namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using IntegrationApi.Interfaces;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Mail;
	using Terrasoft.Messaging.Common;
	using Terrasoft.Web.Http.Abstractions;

	#region Class: SynchronizationErrorHelper

	[DefaultBinding(typeof(ISynchronizationErrorHelper))]
	public class SynchronizationErrorHelper: ISynchronizationErrorHelper
	{

		////TODO #RND-19098
		/// <summary>
		/// Region below is kinda temporary workaround.
		/// Some constants were copied from Exchange package due to package referecnes constraints (Base package sould not refer on child packages).
		/// Please refactor it
		/// </summary>
		#region Classes: Private

		private class ExchangeConsts
		{

			/// <summary>
			/// Type of provider - Exchange.
			/// </summary>
			public static readonly Guid ExchangeMailServerTypeId = new Guid("3490BD45-4F4D-4613-AA06-454546F3342A");

			/// <summary>
			/// Meeting and tasks sync process name.
			/// </summary>
			public static readonly string ActivitySyncProcessName = "SyncExchangeActivitiesProcess";

			/// <summary>
			/// Contacts sync process name.
			/// </summary>
			public static readonly string ContactSyncProcessName = "SyncExchangeContactsProcess";
		}

		private static class ExchangeUtility
		{

			/// <summary>
			/// Meeting and tasks sync process name.
			/// </summary>
			public static readonly string ActivitySyncProcessName = ExchangeConsts.ActivitySyncProcessName;

			/// <summary>
			/// Contacts sync process name.
			/// </summary>
			public static readonly string ContactSyncProcessName = ExchangeConsts.ContactSyncProcessName;
		}

		#endregion

		#region Fields: Private

		/// <summary>
		/// <see cref="EntitySchemaManager"/> instance.
		/// </summary>
		private EntitySchemaManager _schemaManager;

		/// <summary>
		/// Synchronization error handler cache name.
		/// </summary>
		private readonly string _errorHandlersCacheName = "SynchronizationHandlers";

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor. Sets reference to <see cref="Terrasoft.Core.UserConnection"/> instance.
		/// </summary>
		/// <param name="userConnection"><see cref="Terrasoft.Core.UserConnection"/> instance.</param>
		public SynchronizationErrorHelper(UserConnection userConnection) {
			UserConnection = userConnection;
			_schemaManager = userConnection.EntitySchemaManager;
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		protected UserConnection UserConnection { get; set; }

		#endregion

		#region Methods: Private

		/// <summary>
		/// Executes error handling for specific mailbox.
		/// </summary>
		/// <param name="errorHandler"><see cref="Entity"/> instance.</param>
		/// <param name="mailbox"><see cref="Entity"/> instance.</param>
		/// <param name="senderEmailAddress">Specific sender email address.</param>
		/// <param name="ignoreMaxRetryCount">Ignore RetryCount option.</param>
		private void FireErrorHandler(Entity errorHandler, Entity mailbox, string senderEmailAddress, bool ignoreMaxRetryCount, string transientExtraData) {
			int maxRetryCount = errorHandler.GetTypedColumnValue<int>("RetryCount");
			Guid? currentErrorCodeId = mailbox.GetColumnValue("ErrorCodeId") as Guid?;
			Guid? currentWarningCodeId = mailbox.GetColumnValue("WarningCodeId") as Guid?;
			Guid errorCodeId = errorHandler.GetTypedColumnValue<Guid>("ErrorCodeId");
			bool hasErrorCode = currentErrorCodeId.HasValue && currentErrorCodeId.Value.Equals(errorCodeId);
			bool hasWarningCode = currentWarningCodeId.HasValue && currentWarningCodeId.Value.Equals(errorCodeId);
			if (( hasErrorCode || hasWarningCode) && string.IsNullOrEmpty(transientExtraData)) {
				return;
			}
			int attemptNumber = mailbox.GetTypedColumnValue<int>("RetryCounter");
			Guid serverId = mailbox.GetTypedColumnValue<Guid>("MailServerId");
			Guid serverTypeId = GetServerTypeId(serverId);
			if (!ignoreMaxRetryCount && maxRetryCount > -1 && attemptNumber < maxRetryCount) {
				UpdateRetryCounter(mailbox, ++attemptNumber);
				return;
			}
			var stopped = false;
			if (maxRetryCount > -1 && (ignoreMaxRetryCount || attemptNumber >= maxRetryCount)
				&& !errorHandler.GetTypedColumnValue<bool>("NotStopSyncing")) {
				stopped = true;
				StopSyncProcess(senderEmailAddress, serverTypeId);
			}
			var errorMessage = GetSyncErrorMessageByCode(errorCodeId);
			if (errorMessage?.GetTypedColumnValue<string>("Code") == "DailySendingQuotaExceeded") {
				return;
			}
			if (errorMessage?.GetTypedColumnValue<string>("Code") == "LicException") {
				ProcessLicError(mailbox);
			}
			var isWarning = errorHandler.GetTypedColumnValue<string>("ExceptionClass").Contains("WarningException");
			WriteErrorCode(mailbox, errorCodeId, stopped, isWarning, transientExtraData);
		}

		private void CleanUpSynchronizationError(string senderEmailAddress, bool isWarning = false) {
			var mailbox = GetMailboxSynSettingEntity(senderEmailAddress);
			if (mailbox == null) {
				return;
			}
			var codeId = isWarning
				? mailbox.GetTypedColumnValue<Guid>("WarningCodeId")
				: mailbox.GetTypedColumnValue<Guid>("ErrorCodeId");
			if (codeId != Guid.Empty) {
				WriteErrorCode(mailbox, null, isWarning: isWarning);
			}
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Gets <see cref="IMsgChannel"/> instance for <paramref name="sysAdminUnitId"/>.
		/// </summary>
		/// <param name="sysAdminUnitId"><see cref="SysAdminUnit"/> instance unique identifier.</param>
		/// <returns><see cref="IMsgChannel"/> instance.</returns>
		protected virtual IMsgChannel GetMessageChannel(Guid sysAdminUnitId) {
			return MsgChannelManager.Instance.FindItemByUId(sysAdminUnitId);
		}

		/// <summary>
		/// Returns <see cref="SyncErrorMessage"/> instance filtered by <paramref name="errorCode"/>.z
		/// </summary>
		/// <param name="errorCode"><see cref="SyncErrorMessage.Code"/> column value.</param>
		/// <returns><see cref="SyncErrorMessage"/> instance.</returns>
		protected Entity GetSyncErrorMessageByCode(Guid errorCodeId) {
			EntitySchema syncErrorMessageSchema = _schemaManager.GetInstanceByName("SyncErrorMessage");
			Entity syncErrorMessage = syncErrorMessageSchema.CreateEntity(UserConnection);
			if (syncErrorMessage.FetchFromDB(errorCodeId, false)) {
				return syncErrorMessage;
			}
			return null;
		}

		/// <summary>
		/// Creates json message with error info.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		/// <returns>Json string.</returns>
		protected virtual string GetErrorMessage(Entity mailbox, string transientExtraData = null) {
			Guid? errorCodeId = mailbox.GetColumnValue("ErrorCodeId") as Guid?;
			Guid mailboxId = mailbox.PrimaryColumnValue;
			JObject message = new JObject();
			message["MailboxId"] = mailboxId.ToString();
			if (!string.IsNullOrEmpty(transientExtraData)) {
				message["TransientExtraData"] = transientExtraData;
			}
			if (errorCodeId.HasValue) {
				Entity syncErrorMessage = GetSyncErrorMessageByCode(errorCodeId.Value);
				if (syncErrorMessage != null) {
					string userText = syncErrorMessage.GetTypedColumnValue<string>("UserMessage");
					message["UserMessage"] = userText;
				}
			}
			return Json.FormatJsonString(Json.Serialize(message), Formatting.Indented);
		}

		/// <summary>
		/// Retrieves <see cref="SysAdminUnit"/> identifiers list.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		/// <returns><see cref="SysAdminUnit"/> identifiers list.</returns>
		protected virtual IEnumerable<Guid> GetMailboxOwners(Entity mailbox) {
			return ContactUtilities.GetUsersByEmails(UserConnection, new List<string> {
				mailbox.GetTypedColumnValue<string>("SenderEmailAddress")
			}).Select(kvp => kvp.Key);
		}

		/// <summary>
		/// Sends error notification to users.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		protected virtual void SendErrorNotification(Entity mailbox, string transientExtraData = null) {
			string message = GetErrorMessage(mailbox, transientExtraData);
			if (message.IsNullOrEmpty()) {
				return;
			}
			foreach (Guid subscriberId in GetMailboxOwners(mailbox)) {
				IMsgChannel channel = GetMessageChannel(subscriberId);
				if (channel == null) {
					continue;
				}
				var simpleMessage = new SimpleMessage();
				simpleMessage.Body = message;
				simpleMessage.Id = channel.Id;
				simpleMessage.Header.Sender = "SynchronizationError";
				channel.PostMessage(simpleMessage);
			}
		}

		/// <summary>
		/// Returns error handler for occurred exception.
		/// </summary>
		/// <param name="exceptionClassName"><see cref="Exception"/> class name.</param>
		/// <param name="exceptionMessage"><see cref="Exception"/> message.</param>
		/// <returns><see cref="Entity"/> instance of <see cref="SyncErrorHandler"/> entity type.</returns>
		protected virtual Entity GetErrorHandler(string exceptionClassName, string exceptionMessage) {
			EntityCollection handlers = GetSyncErrorHandlers();
			var exceptionMessageLower = exceptionMessage.ToLower();
			var filteredHandlers = handlers
				.Where(h => {
					var handlerExceptionClass = h.GetTypedColumnValue<string>("ExceptionClass");
					var isFullExceptionClassName = exceptionClassName.Contains(".");
					if (isFullExceptionClassName) {
						var exceptionClass = exceptionClassName.Split('.').Last();
						return exceptionClass.Equals(handlerExceptionClass, StringComparison.CurrentCultureIgnoreCase);
					} else {
						return handlerExceptionClass.IsNotNullOrEmpty()
							&& exceptionClassName.EndsWith(handlerExceptionClass, StringComparison.InvariantCultureIgnoreCase);
					}
				});
			var errorHandlerEntity = filteredHandlers
				.FirstOrDefault(h => { var messageFilter = h.GetTypedColumnValue<string>("MessageFilter").ToLower();
					return messageFilter.IsNotNullOrEmpty() && exceptionMessageLower.Contains(messageFilter);
				});
			if (errorHandlerEntity == null) {
				errorHandlerEntity = filteredHandlers
					.FirstOrDefault(h => h.GetTypedColumnValue<string>("MessageFilter").IsNullOrEmpty());
			}
			return errorHandlerEntity;
		}

		/// <summary>
		/// Returns mailbox synchronization setting for the specific sender email address.
		/// </summary>
		/// <param name="senderEmailAddress">Sender email address.</param>
		/// <returns><see cref="Terrasoft.Core.Entities.Entity"/> instance of <see cref="MailboxSyncSettings"/> entity type.</returns>
		protected virtual Entity GetMailboxSynSettingEntity(string senderEmailAddress) {
			EntitySchema entitySchema = _schemaManager.GetInstanceByName("MailboxSyncSettings");
			Entity mailbox = entitySchema.CreateEntity(UserConnection);
			return mailbox.FetchFromDB("SenderEmailAddress", senderEmailAddress, false) ? mailbox : null;
		}

		/// <summary>
		/// Returns synchronization error handler by error code.
		/// </summary>
		/// <param name="errorCodeId">Specific error code identifier.</param>
		/// <returns><see cref="Terrasoft.Core.Entities.Entity"/> instance of <see cref="MailboxSyncSettings"/> entity type.</returns>
		protected virtual EntityCollection GetSyncErrorHandlers() {
			EntitySchemaQuery esq = new EntitySchemaQuery(_schemaManager, "SyncErrorHandler");
			esq.CacheItemName = _errorHandlersCacheName;
			esq.AddColumn("ExceptionClass");
			esq.AddColumn("MessageFilter");
			esq.AddColumn("RetryCount");
			esq.AddColumn("ErrorCode");
			esq.AddColumn("NotStopSyncing");
			EntityCollection handlers = esq.GetEntityCollection(UserConnection);
			return handlers;
		}

		/// <summary>
		/// Returns <see cref="SyncErrorMessage"/> instance.
		/// </summary>
		/// <param name="messageId"><see cref="SyncErrorMessage"/> instance identifier.</param>
		/// <returns><see cref="SyncErrorMessage"/> instance.</returns>
		protected Entity GetSyncErrorMessage(Guid messageId) {
			EntitySchema entitySchema = _schemaManager.GetInstanceByName("SyncErrorMessage");
			Entity mailbox = entitySchema.CreateEntity(UserConnection);
			return mailbox.FetchFromDB(messageId) ? mailbox : null;
		}

		/// <summary>
		/// Writes synchronization error code and corresponding message to the <see cref="MailboxSyncSettings"/> entity.
		/// </summary>
		/// <param name="mailbox"><see cref="Terrasoft.Core.Entities.Entity"/> instance of <see cref="MailboxSyncSettings"/> entity.</param>
		/// <param name="errorCodeId">Error code.</param>
		/// <param name="errorMessage">Error message.</param>
		protected virtual void WriteErrorCode(Entity mailbox, Guid? errorCodeId, bool synchronizationStopped = false, bool isWarning = false,
				string transientExtraData = null) {
			mailbox.UseAdminRights = false;
			var codeValue = errorCodeId != Guid.Empty ? errorCodeId : null;
			var codeColumnName = isWarning ? "WarningCodeId" : "ErrorCodeId";
			mailbox.SetColumnValue(codeColumnName, codeValue);
			mailbox.SetColumnValue("RetryCounter", 0);
			mailbox.SetColumnValue("SynchronizationStopped", synchronizationStopped);
			mailbox.Save();
			SendSynchronizationStatus(mailbox, transientExtraData);
		}

		/// <summary>
		/// Updates the counter of retry synchronization attempts.
		/// </summary>
		/// <param name="mailbox"><see cref="Terrasoft.Core.Entities.Entity"/> instance of <see cref="MailboxSyncSettings"/> entity.</param>
		/// <param name="counter">New counter value.</param>
		protected virtual void UpdateRetryCounter(Entity mailbox, int counter) {
			mailbox.UseAdminRights = false;
			mailbox.SetColumnValue("RetryCounter", counter);
			mailbox.Save();
		}

		/// <summary>
		/// Returns mail server type identifier for the specific server.
		/// </summary>
		/// <param name="serverId">Mail server identifier.</param>
		/// <returns><see cref="System.Guid"/> instance.</returns>
		protected virtual Guid GetServerTypeId(Guid serverId) {
			EntitySchema schema = _schemaManager.GetInstanceByName("MailServer");
			Entity server = schema.CreateEntity(UserConnection);
			if (server.FetchFromDB(serverId, false)) {
				return server.GetTypedColumnValue<Guid>("TypeId");
			} else {
				return Guid.Empty;
			}
		}

		/// <summary>
		/// Stops synchronization process for the specific sender email.
		/// </summary>
		/// <param name="senderEmailAddress">Sender email address.</param>
		/// <param name="serverTypeId">Mail server type identifier.</param>
		protected virtual void StopSyncProcess(string senderEmailAddress, Guid serverTypeId) {
			var parameters = new Dictionary<string, object> {
						{ "SenderEmailAddress", senderEmailAddress },
						{ "CurrentUserId", UserConnection.CurrentUser.Id }
					};
			var scheduler = ClassFactory.Get<IImapSyncJobScheduler>();
			scheduler.RemoveSyncJob(UserConnection, parameters);
			if (serverTypeId == ExchangeConsts.ExchangeMailServerTypeId) {
				var syncJobScheduler = ClassFactory.Get<ISyncJobScheduler>();
				syncJobScheduler.RemoveSyncJob(UserConnection, senderEmailAddress, ExchangeUtility.ActivitySyncProcessName);
				syncJobScheduler.RemoveSyncJob(UserConnection, senderEmailAddress, ExchangeUtility.ContactSyncProcessName);
			}
		}

		/// <summary>
		/// Process license operation error.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		protected virtual void ProcessLicError(Entity mailbox) {
			mailbox.SetColumnValue("EnableMailSynhronization", false);
			var managerFactory = ClassFactory.Get<IListenerManagerFactory>();
			var listenerManager = managerFactory.GetExchangeListenerManager(UserConnection);
			listenerManager.StopListener(mailbox.PrimaryColumnValue);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns <see cref="Terrasoft.Configuration.SynchronizationErrorHelper"/> instance.
		/// </summary>
		/// <param name="userConnection"><see cref="Terrasoft.Core.UserConnection"/> instance.</param>
		/// <returns>Return new <see cref="Terrasoft.Configuration.SynchronizationErrorHelper"/> instance.</returns>
		public static SynchronizationErrorHelper GetInstance(UserConnection userConnection) {
			ConstructorArgument argument = new ConstructorArgument("userConnection", userConnection);
			return ClassFactory.Get<SynchronizationErrorHelper>(argument);
		}

		/// <summary>
		/// Sends error notification to mailbox owners.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		public void SendSynchronizationStatus(Entity mailbox) {
			SendErrorNotification(mailbox, null);
		}

		/// <summary>
		/// Sends error notification to mailbox owners with extra data.
		/// </summary>
		/// <param name="mailbox"><see cref="MailboxSyncSettings"/> instance.</param>
		public void SendSynchronizationStatus(Entity mailbox, string transientExtraData) {
			SendErrorNotification(mailbox, transientExtraData);
		}

		/// <summary>
		/// Processes synchronization error.
		/// </summary>
		/// <param name="senderEmailAddress">Specific sender email address.</param>
		/// <param name="syncExeption">An <see cref="Exception"/> occurred during synchronization.</param>
		/// <param name="ignoreMaxRetryCount">Ignore RetryCount option.</param>
		public virtual void ProcessSynchronizationError(string senderEmailAddress, Exception syncExeption, bool ignoreMaxRetryCount = false) {
			ignoreMaxRetryCount = ignoreMaxRetryCount || HttpContext.Current != null;
			var mailbox = GetMailboxSynSettingEntity(senderEmailAddress);
			if (mailbox == null) {
				return;
			}
			Entity errorHandler = GetErrorHandler(syncExeption.GetType().ToString(), syncExeption.Message);
			if (errorHandler == null) {
				var isExist = syncExeption.Data.Contains("InnerExceptionClassName");
				if (isExist) {
					var innerExClassName = syncExeption.Data["InnerExceptionClassName"];
					errorHandler = GetErrorHandler(innerExClassName.ToString(), syncExeption.Message);
				}
			}
			if (errorHandler != null) {
				string transientExtraData = syncExeption.Data.Contains("TransientExtraData") ? syncExeption.Data["TransientExtraData"].ToString() : null;
				FireErrorHandler(errorHandler, mailbox, senderEmailAddress, ignoreMaxRetryCount, transientExtraData);
			}
		}

		/// <summary>
		/// Processes synchronization error.
		/// </summary>
		/// <param name="senderEmailAddress">Specific sender email address.</param>
		/// <param name="exceptionClassName">Exception classname.</param>
		/// <param name="exceptionMessage">Exception message.</param>
		/// <param name="ignoreMaxRetryCount">Ignore RetryCount option.</param>
		public virtual void ProcessSynchronizationError(string senderEmailAddress, string exceptionClassName,
				string exceptionMessage, bool ignoreMaxRetryCount = false) {
			ignoreMaxRetryCount = ignoreMaxRetryCount || HttpContext.Current != null;
			var mailbox = GetMailboxSynSettingEntity(senderEmailAddress);
			if (mailbox == null) {
				return;
			}
			Entity errorHandler = GetErrorHandler(exceptionClassName, exceptionMessage);
			if (errorHandler != null) {
				FireErrorHandler(errorHandler, mailbox, senderEmailAddress, ignoreMaxRetryCount, null);
			}
		}

		/// <summary>
		/// Clears synchronization error information.
		/// </summary>
		/// <param name="senderEmailAddress">Specific sender email address.</param>
		public virtual void CleanUpSynchronizationError(string senderEmailAddress) {
			CleanUpSynchronizationError(senderEmailAddress, isWarning: false);
		}

		/// <summary>
		/// Clears synchronization warning information.
		/// </summary>
		/// <param name="senderEmailAddress">Specific sender email address.</param>
		public virtual void CleanUpSynchronizationWarning(string senderEmailAddress) {
			CleanUpSynchronizationError(senderEmailAddress, isWarning: true);
		}

		/// <summary>
		/// Returns <see cref="SyncErrorMessage"/> instance for occurred exception.
		/// </summary>
		/// <param name="exceptionClassName"><see cref="Exception"/> class name.</param>
		/// <param name="exceptionMessage"><see cref="Exception"/> message.</param>
		/// <returns><see cref="Entity"/> instance of <see cref="SyncErrorMessage"/> entity type.</returns>
		public Entity GetExceptionMessage(string exceptionClassName, string exceptionMessage) {
			Entity errorHandler = GetErrorHandler(exceptionClassName, exceptionMessage);
			if (errorHandler != null) {
				return GetSyncErrorMessage(errorHandler.GetTypedColumnValue<Guid>("ErrorCodeId"));
			}
			return null;
		}

		#endregion

	}

	#endregion

}

