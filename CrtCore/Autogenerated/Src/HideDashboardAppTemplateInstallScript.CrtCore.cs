namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: HideDashboardAppTemplateInstallScript

	public class HideDashboardAppTemplateInstallScript : IInstallScriptExecutor
	{

		#region Methods: Private

		private static void UpdateSysAppTemplate(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity entity = entitySchemaManager.GetEntityByName("SysAppTemplate", userConnection);
			var entityCondition = new Dictionary<string, object> {
				{ "Code", "AppWithHomePage" }
			};
			if (entity.FetchFromDB(entityCondition)) {
				entity.SetColumnValue("IsHidden", true);
				entity.Save();
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Execute script for hide the app template "Dashboard" for creating.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="UserConnection"/> type.</param>
		public void Execute(UserConnection userConnection) {
			UpdateSysAppTemplate(userConnection);
		}

		#endregion

	}

	#endregion

}
