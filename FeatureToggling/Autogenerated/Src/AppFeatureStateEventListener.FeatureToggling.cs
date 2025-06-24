namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using Creatio.FeatureToggling;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: AppFeatureStateEventListener

	[EntityEventListener(SchemaName = "AppFeatureState")]
	internal class AppFeatureStateEventListener : BaseEntityEventListener
	{

		#region Methods: Private

		private static Entity CreateAdminUnitFeatureStateEntity(UserConnection userConnection) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByName("AdminUnitFeatureState");
			return schema.CreateEntity(userConnection);
		}

		private static Entity CreateFeatureEntity(UserConnection userConnection) {
			EntitySchema featureSchema = userConnection.EntitySchemaManager.GetInstanceByName("Feature");
			return featureSchema.CreateEntity(userConnection);
		}

		private static string FindFeatureName(UserConnection userConnection, Guid featureId) {
			Dictionary<string, Guid> cache = AppFeatureQueryExecutor.GetNameToIdMap(userConnection);
			foreach (KeyValuePair<string, Guid> keyValuePair in cache) {
				if (keyValuePair.Value == featureId) {
					return keyValuePair.Key;
				}
			}
			return null;
		}

		#endregion

		#region Methods: Public

		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			base.OnDeleting(sender, e);
			var appFeatureState = (Entity)sender;
			UserConnection userConnection = appFeatureState.UserConnection;
			if (appFeatureState.StoringState == StoringObjectState.New ||
					appFeatureState.StoringState == StoringObjectState.Deleted) {
				return;
			}
			Entity featureEntity = CreateAdminUnitFeatureStateEntity(userConnection);
			if (featureEntity.FetchFromDB(appFeatureState.PrimaryColumnValue)) {
				featureEntity.Delete();
			}
		}

		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			var appFeatureState = (Entity)sender;
			UserConnection userConnection = appFeatureState.UserConnection;
			Entity adminUnitFeatureStateEntity = CreateAdminUnitFeatureStateEntity(userConnection);
			var featureId = appFeatureState.GetTypedColumnValue<Guid>("FeatureId");
			Entity featureEntity = CreateFeatureEntity(userConnection);
			if (!featureEntity.FetchFromDB(featureId)) {
				string featureName = FindFeatureName(userConnection, featureId);
				bool defState = Features.GetIsEnabled(featureName, null);
				featureEntity.SetDefColumnValues();
				featureEntity.PrimaryColumnValue = featureId;
				featureEntity.SetColumnValue("Code", featureName);
				featureEntity.SetColumnValue("Name", featureName);
				featureEntity.SetColumnValue("DefaultState", defState ? 1 : 0);
				featureEntity.Save();
			}
			if (appFeatureState.StoringState == StoringObjectState.New ||
					!adminUnitFeatureStateEntity.FetchFromDB(appFeatureState.PrimaryColumnValue)) {
				var listeners = new Collection<ProcessSchemaListener>();
				appFeatureState.Process.SetPropertyValue("ProcessSchemaListeners", listeners);
				adminUnitFeatureStateEntity.SetDefColumnValues();
				adminUnitFeatureStateEntity.PrimaryColumnValue = appFeatureState.PrimaryColumnValue;
			}
			adminUnitFeatureStateEntity.SetColumnValue("FeatureId", featureId);
			var state = appFeatureState.GetTypedColumnValue<bool>("FeatureState");
			adminUnitFeatureStateEntity.SetColumnValue("FeatureState", state ? 1 : 0);
			var adminUnitId = appFeatureState.GetTypedColumnValue<Guid>("AdminUnitId");
			adminUnitFeatureStateEntity.SetColumnValue("SysAdminUnitId", adminUnitId);
			adminUnitFeatureStateEntity.Save();
		}

		#endregion

	}

	#endregion

}

