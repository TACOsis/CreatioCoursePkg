namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;

	[DefaultBinding(typeof(ICopilotHistoryStorage))]
	internal class CopilotHistoryStorage : ICopilotHistoryStorage
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public CopilotHistoryStorage(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		private static Dictionary<string, Guid> _roleMapping;
		private Dictionary<string, Guid> RoleMapping => _roleMapping ?? (_roleMapping = LoadRoleMapping());

		#endregion

		#region Methods: Private

		private Dictionary<string,Guid> LoadRoleMapping() {
			var result = new Dictionary<string, Guid>();
			Select select = new Select(_userConnection)
				.Column("Id")
				.Column("Code")
				.From("CopilotMessageRoleEnt");
			select.ExecuteReader(dataReader => result.Add(
				dataReader.GetColumnValue<string>("Code"), dataReader.GetColumnValue<Guid>("Id")));
			return result;
		}

		private Guid InternalSaveCopilotRequest(CopilotRequestInfo requestInfo) {
			Entity requestEntity = 
				_userConnection.EntitySchemaManager.GetEntityByName("CopilotRequestEnt", _userConnection);
			requestEntity.UseAdminRights = false;
			requestEntity.SetDefColumnValues();
			requestEntity.PrimaryColumnValue = Guid.NewGuid();
			requestEntity.SetColumnValue("Error", requestInfo.Error);
			requestEntity.SetColumnValue("IsFailed", requestInfo.IsFailed);
			requestEntity.SetColumnValue("Duration", requestInfo.Duration);
			requestEntity.SetColumnValue("CreatedOn", requestInfo.StartDate);
			requestEntity.SetColumnValue("TotalTokens", requestInfo.TotalTokens);
			requestEntity.SetColumnValue("PromptTokens", requestInfo.PromptTokens);
			requestEntity.SetColumnValue("CompletionTokens", requestInfo.CompletionTokens);
			requestEntity.Save();
			return requestEntity.PrimaryColumnValue;
		}

		private void InternalSaveSession(CopilotSession copilotSession) {
			Entity sessionEntity = 
				_userConnection.EntitySchemaManager.GetEntityByName("CopilotSessionEnt", _userConnection);
			sessionEntity.UseAdminRights = false;
			if (!sessionEntity.FetchFromDB(copilotSession.Id)) {
				sessionEntity.SetDefColumnValues();
				sessionEntity.PrimaryColumnValue = copilotSession.Id;
			}
			sessionEntity.SetColumnValue("StartDate", copilotSession.StartDate);
			sessionEntity.SetColumnValue("EndDate", copilotSession.EndDate);
			sessionEntity.SetColumnValue("UserId", copilotSession.UserId);
			sessionEntity.SetColumnValue("StateId", copilotSession.State);
			sessionEntity.SetColumnValue("CurrentIntentId", copilotSession.CurrentIntentId);
			sessionEntity.SetColumnValue("RootIntentId", copilotSession.RootIntentId);
			sessionEntity.Save();
		}

		private void InternalSaveMessage(CopilotMessage copilotMessage, Guid copilotSessionId) {
			if (copilotMessage.IsSaved) {
				return;
			}
			Entity messageEntity = 
				_userConnection.EntitySchemaManager.GetEntityByName("CopilotMessageEnt", _userConnection);
			messageEntity.UseAdminRights = false;
			if (!messageEntity.FetchFromDB(copilotMessage.Id)) {
				messageEntity.SetDefColumnValues();
				messageEntity.PrimaryColumnValue = copilotMessage.Id;
			} else {
				DeleteToolCalls(copilotMessage.Id);
			}
			messageEntity.SetColumnValue("ToolCallId", copilotMessage.ToolCallId);
			messageEntity.SetColumnValue("Content", copilotMessage.Content);
			messageEntity.SetColumnValue("RoleId", RoleMapping[copilotMessage.Role]);
			messageEntity.SetColumnValue("CreatedOn", copilotMessage.Date);
			messageEntity.SetColumnValue("IntentId", copilotMessage.IntentId);
			messageEntity.SetColumnValue("CopilotRequestId", copilotMessage.CopilotRequestId);
			messageEntity.SetColumnValue("CopilotSessionId", copilotSessionId);
			copilotMessage.IsSaved = messageEntity.Save();
			InternalSaveToolCalls(copilotMessage);
		}

		private void InternalSaveToolCalls(CopilotMessage copilotMessage) {
			EntitySchema toolCallEntitySchema = 
				_userConnection.EntitySchemaManager.GetInstanceByName("CopilotToolCallEnt");
			foreach (ToolCall toolCall in copilotMessage.ToolCalls) {
				Entity toolCallEntity = toolCallEntitySchema.CreateEntity(_userConnection);
				toolCallEntity.UseAdminRights = false;
				toolCallEntity.SetDefColumnValues();
				toolCallEntity.SetColumnValue("ToolCallId", toolCall.Id);
				toolCallEntity.SetColumnValue("Arguments", toolCall.FunctionCall?.Arguments);
				toolCallEntity.SetColumnValue("FunctionName", toolCall.FunctionCall?.Name);
				toolCallEntity.SetColumnValue("CopilotMessageId", copilotMessage.Id);
				toolCallEntity.Save();
			}
		}

		private void DeleteToolCalls(Guid copilotMessageId) {
			new Delete(_userConnection)
				.From("CopilotToolCallEnt")
				.Where("CopilotMessageId").IsEqual(Column.Parameter(copilotMessageId))
				.Execute();
		}

		#endregion

		#region Methods: Public

		public Guid SaveCopilotRequest(CopilotRequestInfo requestInfo) {
			return InternalSaveCopilotRequest(requestInfo);
		}

		public void SaveSession(CopilotSession copilotSession) {
			InternalSaveSession(copilotSession);
			foreach (CopilotMessage copilotMessage in copilotSession.Messages) {
				InternalSaveMessage(copilotMessage, copilotSession.Id);
			}
		}

		#endregion

	}
}

