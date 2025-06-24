namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: RenameSidePanelExtensionsInstallScript

	public class RenameSidePanelExtensionsInstallScript : IInstallScriptExecutor
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

		private static void UpdateSidePanelExtensionsFeature(Entity featureEntity) {
			featureEntity.SetColumnValue("Code", "SidebarExtensions");
			featureEntity.SetColumnValue("Name", "SidebarExtensions");
			featureEntity.SetColumnValue("Description", "Ability of extending the sidebar");
			featureEntity.Save();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Script for the renaming SidePanelExtensions feature to SidebarExtensions one.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="UserConnection"/> type.</param>
		public void Execute(UserConnection userConnection) {
			Entity featureEntity = FindEntity(userConnection, "Feature", "Code", "SidePanelExtensions");
			if (featureEntity == null) {
				return;
			}
			UpdateSidePanelExtensionsFeature(featureEntity);
		}

		#endregion

	}

	#endregion

}
