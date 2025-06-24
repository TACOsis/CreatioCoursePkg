namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: EnableSidebarFeaturesInstallScript

	public class EnableSidebarFeaturesInstallScript : IInstallScriptExecutor
	{

		#region Methods: Private

		private static Entity FindEntity(UserConnection userConnection, string entityName, string key, string value) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity entity = entitySchemaManager.GetEntityByName(entityName, userConnection);
			var entityCondition = new Dictionary<string, object> {
					{ key, value }
				};
			return entity.FetchFromDB(entityCondition) ? entity : null;
		}

		private static void EnableDefaultState(Entity featureEntity) {
			featureEntity.SetColumnValue("DefaultState", 1);
			featureEntity.Save();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Script for the enabling SidebarExtensions and ShowPageAddonsPropertiesPanel features.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="UserConnection"/> type.</param>
		public void Execute(UserConnection userConnection) {
			string[] sidebarFeatureCodes = {"SidebarExtensions", "ShowPageAddonsPropertiesPanel"};
			foreach (string featureCode in sidebarFeatureCodes) {
				Entity featureEntity = FindEntity(userConnection, "Feature", "Code", featureCode);
				if (featureEntity != null) {
					EnableDefaultState(featureEntity);
				}
			}
		}

		#endregion

	}

	#endregion

}
