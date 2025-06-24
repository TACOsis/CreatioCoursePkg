namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	public class UpdateSysSettingsForExternalUsersInstallScriptExecutor: IInstallScriptExecutor
	{

		public void Execute(UserConnection userConnection) {
			var sysSettingsList= new List<Dictionary<string, object>> {
				new Dictionary<string, object> {
					{ "Code", "MinPasswordLength"}
				},
				new Dictionary<string, object> {
					{ "Code", "MinPasswordSpecialCharCount"}
				},
				new Dictionary<string, object> {
					{ "Code", "MinPasswordNumericCharCount"}
				},
				new Dictionary<string, object> {
					{ "Code", "MinPasswordLowercaseCharCount"}
				},
				new Dictionary<string, object> {
					{ "Code", "MinPasswordUppercaseCharCount"}
				},
				new Dictionary<string, object> {
					{ "Code", "UseNewShell"}
				},
				new Dictionary<string, object> {
					{ "Code", "PasswordHistoryRecordCount"}
				},
				new Dictionary<string, object> {
					{ "Code", "UseGoogleTagManager"}
				},
				new Dictionary<string, object> {
					{ "Code", "UseFaviconFromSysSettings"}
				},
				new Dictionary<string, object> {
					{ "Code", "DisableAdvancedVisualEffects"}
				},
				new Dictionary<string, object> {
					{ "Code", "PasswordNotEqualToUserLogin"}
				},
				new Dictionary<string, object> {
					{ "Code", "FileExtensionsDenyList"}
				},
			};
			foreach (var sysSettingCondition in sysSettingsList) {
				Entity sysSettingEntity = userConnection.EntitySchemaManager.GetEntityByName("SysSettings", userConnection);
				if (sysSettingEntity.FetchFromDB(sysSettingCondition)) {
					sysSettingEntity.SetColumnValue("IsSSPAvailable", true);
					sysSettingEntity.Save();
				}
			}
		}
	}
}

