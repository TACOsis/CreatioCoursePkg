namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	public class UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Fields: Private

		private UserConnection _userConnection;
		private EntitySchemaManager _entitySchemaManager;

		#endregion

		#region Methods: Private

		private void ChangeSoftkeyKnowledgeBaseNotes() {
			Entity knowledgeBaseEntity = _entitySchemaManager.GetEntityByName("KnowledgeBase", _userConnection);
			Guid softkeyRecordId = new Guid("E73D04AB-2A61-4582-99F3-B0AB020D524C");
			var conditions = new Dictionary<string, object> {
				{ "Id", softkeyRecordId}
			};
			if (!knowledgeBaseEntity.FetchFromDB(conditions)) {
				return;
			}
			string notes = knowledgeBaseEntity.GetTypedColumnValue<string>("Notes");
			if (notes.IsNullOrEmpty()) {
				return;
			}
			notes = notes.Replace("flex-direction: column;height: 100px;min-width: 300px;", "flex-direction: column;min-width: 300px;");
			knowledgeBaseEntity.SetColumnValue("Notes", notes);
			knowledgeBaseEntity.Save(false);
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			_userConnection = userConnection;
			_entitySchemaManager = userConnection.EntitySchemaManager;
			ChangeSoftkeyKnowledgeBaseNotes();
		}

		#endregion

	}
}

