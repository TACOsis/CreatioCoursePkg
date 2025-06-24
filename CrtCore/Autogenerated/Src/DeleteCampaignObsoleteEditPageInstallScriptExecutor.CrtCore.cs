 namespace Terrasoft.Configuration {
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;

    public static class CampaignPages {
       public static readonly Guid OldCampaign = new Guid("591B0118-B3CC-4824-B4B3-ECF007C91389");
    }

    public class DeleteCampaignObsoleteEditPageInstallScriptExecutor : IInstallScriptExecutor {
        
        private void _deleteCampaignObsoleteEditPage(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity sysModuleEdit = entitySchemaManager.GetEntityByName("SysModuleEdit", userConnection);
			var conditions = new Dictionary<string, object> {
				{ "Id", CampaignPages.OldCampaign }
			};
			 if (!sysModuleEdit.FetchFromDB(conditions)) {
				 return;
			 };
			sysModuleEdit.Delete();
        }
 
        public void Execute(UserConnection userConnection) {
            this._deleteCampaignObsoleteEditPage(userConnection);
        }
    }
}
