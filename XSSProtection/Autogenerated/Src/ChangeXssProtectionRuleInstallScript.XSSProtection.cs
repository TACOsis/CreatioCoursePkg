namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	
	#region Class: ChangeXssProtectionRuleInstallScript
	
	public class ChangeXssProtectionRuleInstallScript : IInstallScriptExecutor
	{
		
		#region Methods: Public
		
		public static Entity GetXssProtectionRule(UserConnection userConnection, Guid id) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity xssProtectionRuleEntity = entitySchemaManager.GetEntityByName("SysXssProtectionRule", userConnection);
			var conditions = new Dictionary<string, object> {
				{ "Id", id }
			};
			return !xssProtectionRuleEntity.FetchFromDB(conditions) ? null : xssProtectionRuleEntity;
		}

		public void Execute(UserConnection userConnection) {
			var xssProtectionRuleEntity = GetXssProtectionRule(userConnection, new Guid("{302BA912-A9A4-4157-AFD3-539072A6E800}"));
			if (xssProtectionRuleEntity != null) {
				xssProtectionRuleEntity.SetColumnValue("Value", "(?:<|\\uff1c)\\s*\\/?((\\w*:)?)script");
				xssProtectionRuleEntity.Save();
			}
		}
		
		#endregion
		
	}
	
	#endregion
	
}

