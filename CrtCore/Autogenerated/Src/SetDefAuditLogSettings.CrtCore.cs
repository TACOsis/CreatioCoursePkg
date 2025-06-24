 namespace Terrasoft.Configuration 
{ 
	using Terrasoft.Core; 
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings; 
	
	public class SetDefAuditLogSettings : IInstallScriptExecutor 
	{ 
		public void Execute(UserConnection userConnection) {
			CoreSysSettings.SetDefValue(userConnection, "UseUserAuthorizationLog", true);
			CoreSysSettings.SetDefValue(userConnection, "UseAdminUserLog", true);
			CoreSysSettings.SetDefValue(userConnection, "UseAdminOperationAuditLog", true);
			CoreSysSettings.SetDefValue(userConnection, "UseAdminSettingsLog", true);
		}
	}
}
