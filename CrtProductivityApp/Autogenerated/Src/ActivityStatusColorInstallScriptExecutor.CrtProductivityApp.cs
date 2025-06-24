namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: ActivityStatusColorInstallScriptExecutor

	internal class ActivityStatusColorInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			new Dictionary<Guid, string> {
				{ new Guid("384D4B84-58E6-DF11-971B-001D60E938C6"), "#B87CCF"},
				{ new Guid("394D4B84-58E6-DF11-971B-001D60E938C6"), "#0058EF"},
				{ new Guid("4BDBB88F-58E6-DF11-971B-001D60E938C6"), "#98CB00"},
				{ new Guid("201CFBA8-58E6-DF11-971B-001D60E938C6"), "#FF6534"}
			}.ForEach(kvp => {
				Entity activityStatus = entitySchemaManager.GetEntityByName("ActivityStatus", userConnection);
				if (activityStatus.FetchFromDB(kvp.Key)) {
					activityStatus.SetColumnValue("Color", kvp.Value);
					activityStatus.Save();
				}
			});
		}

		#endregion

	}

	#endregion

}

