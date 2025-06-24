namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: UpdateUseAdminSettingsLogInstallScriptExecutor

	internal class UpdateUseAdminSettingsLogInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			CoreSysSettings.SetValue(userConnection, "UseAdminSettingsLog", true);
		}

		#endregion

	}

	#endregion

}
