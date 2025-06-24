 namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	public class UpdateSysSettingWebToObjectApiUrlInstallScriptExecutor: IInstallScriptExecutor
	{
		private const string _oldScriptUrl = "https://webtracking-v01.bpmonline.com/JS/create-object.js";
		private const string _newScriptUrl = "https://webtracking-v01.creatio.com/JS/create-object.js";

		public void Execute(UserConnection userConnection) {
			var value = (string)CoreSysSettings.GetValue(userConnection, "ApiUrl");
			if (value == _oldScriptUrl) {
				CoreSysSettings.SetDefValue(userConnection, "ApiUrl", _newScriptUrl);
			}
		}
	}
}

