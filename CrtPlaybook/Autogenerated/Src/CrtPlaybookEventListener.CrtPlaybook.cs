namespace Terrasoft.Configuration
{
	using System;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	[EntityEventListener(SchemaName = "CrtPlaybook")]
	public class CrtPlaybookEventListener : BaseEntityEventListener
	{

		#region Methods: private

		private void CleanupStages(UserConnection userConnection, Guid playbookId) {
			(new Delete(userConnection).From("PlaybookStage")
				.Where("PlaybookId").IsEqual(Column.Parameter(playbookId)) as Delete).Execute();
		}

		private void PopulateStages(UserConnection userConnection, Guid playbookId, Guid dcmCaseId) {
			if(dcmCaseId == Guid.Empty) {
				return; 
			}
			var playbookStageLoader = new PlaybookStageLoader(userConnection);
			var stages = playbookStageLoader.GetDcmLookupValues(dcmCaseId);
			stages.ForEach(stage => {
				AddPlaybookStage(userConnection, playbookId, stage.Value);
			});
		}

		private void AddPlaybookStage(UserConnection userConnection, Guid playBookId, Guid stageId) {
			var newStage = userConnection.EntitySchemaManager.GetInstanceByName("PlaybookStage").CreateEntity(userConnection);
			newStage.SetDefColumnValues();
			newStage.SetColumnValue("PlaybookId", playBookId);
			newStage.SetColumnValue("DcmStageValue", stageId);
			newStage.Save();
		}

		private bool IsDcmSourceChanged(EntityAfterEventArgs e) {
			return e.ModifiedColumnValues.Any(x => new[] { "ObjectId", "DcmCaseId" }.Contains(x.Name));
		}

		#endregion

		#region Methods: public

		/// <inheritdoc cref="BaseEntityEventListener.OnInserted(object, EntityAfterEventArgs)"/>
		public override void OnInserted(object sender, EntityAfterEventArgs e) {
			base.OnInserted(sender, e);		
			Entity entity = (Entity)sender;
			var userConnection = entity.UserConnection;
			var playbookId = entity.PrimaryColumnValue;
			var dcmCaseId = entity.GetTypedColumnValue<Guid>("DcmCaseId");
			PopulateStages(userConnection, playbookId, dcmCaseId);
		}

		/// <inheritdoc cref="BaseEntityEventListener.OnUpdated(object, EntityAfterEventArgs)"/>
		public override void OnUpdated(object sender, EntityAfterEventArgs e) {
			Entity entity = (Entity)sender;
			var userConnection = entity.UserConnection;
			var playbookId = entity.PrimaryColumnValue;
			var dcmCaseId = entity.GetTypedColumnValue<Guid>("DcmCaseId");
			base.OnUpdated(sender, e);
			if (IsDcmSourceChanged(e)) {
				CleanupStages(userConnection, playbookId);
				PopulateStages(userConnection, playbookId, dcmCaseId);
			}
		}

		#endregion
	
	}
}
