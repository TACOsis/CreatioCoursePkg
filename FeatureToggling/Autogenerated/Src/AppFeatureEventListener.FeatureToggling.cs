namespace Terrasoft.AppFeatures
{
	using System.Collections.ObjectModel;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: AppFeatureEventListener

	[EntityEventListener(SchemaName = "AppFeature")]
	public class AppFeatureEventListener: BaseEntityEventListener
	{

		#region Methods: Private

		private static Entity CreateDataEntity(UserConnection userConnection) {
			EntitySchema featureSchema = userConnection.EntitySchemaManager.GetInstanceByName("Feature");
			return featureSchema.CreateEntity(userConnection);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			base.OnDeleting(sender, e);
			var appFeature = (Entity)sender;
			UserConnection userConnection = appFeature.UserConnection;
			if (appFeature.StoringState == StoringObjectState.New ||
					appFeature.StoringState == StoringObjectState.Deleted) {
				return;
			}
			Entity featureEntity = CreateDataEntity(userConnection);
			var code = appFeature.GetTypedColumnValue<string>("Code");
			AppFeatureQueryExecutor.RemoveFeatureIdFromCache(userConnection, code);
			if (!featureEntity.FetchFromDB("Code", code)) {
				return;
			}
			new Delete(userConnection)
				.From("AdminUnitFeatureState")
				.Where("FeatureId").IsEqual(Column.Parameter(featureEntity.PrimaryColumnValue))
				.Execute();
			featureEntity.Delete();
		}

		/// <inheritdoc />
		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			var appFeature = (Entity)sender;
			UserConnection userConnection = appFeature.UserConnection;
			Entity featureEntity = CreateDataEntity(userConnection);
			var code = appFeature.GetTypedColumnValue<string>("Code");
			if (appFeature.StoringState == StoringObjectState.New || !featureEntity.FetchFromDB("Code", code)) {
				appFeature.Process.SetPropertyValue("ProcessSchemaListeners",
					new Collection<ProcessSchemaListener>());
				AppFeatureQueryExecutor.RemoveFeatureIdFromCache(userConnection, code);
				featureEntity.SetDefColumnValues();
				featureEntity.PrimaryColumnValue = appFeature.PrimaryColumnValue;
				featureEntity.SetColumnValue("Code", code);
				featureEntity.SetColumnValue("Name", code);
				appFeature.SetColumnValue("Name", code);
			}
			var defState = appFeature.GetTypedColumnValue<bool>("State");
			featureEntity.SetColumnValue("DefaultState", defState ? 1 : 0);
			var description = appFeature.GetTypedColumnValue<string>("Description");
			featureEntity.SetColumnValue("Description", description);
			featureEntity.Save();
		}

		#endregion

	}

	#endregion

}

