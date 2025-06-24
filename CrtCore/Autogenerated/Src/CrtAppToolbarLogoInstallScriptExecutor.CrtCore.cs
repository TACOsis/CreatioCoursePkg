namespace Terrasoft.Configuration
{
	using System;
	using global::Common.Logging;
	using Terrasoft.Core;
	using Terrasoft.Common;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: CrtAppToolbarLogoInstallScriptExecutor

	internal class CrtAppToolbarLogoInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Constants: Private

		private const string DefaultUnderlayColor = "white";
		private const string OldDefaultHeaderLogoImageHash = "9d2ac13e57b35e9a47906935fa45e169";

		#endregion
		
		private readonly ILog _log = LogManager.GetLogger("Packages");

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			const string logPrefix = nameof(CrtAppToolbarLogoInstallScriptExecutor) + ": ";
			if (!CoreSysSettings.TryGetValue(userConnection, "HeaderLogoImage", out object headerLogoImageValue) 
					|| FileUtilities.GetMD5Hash((byte[])headerLogoImageValue) == OldDefaultHeaderLogoImageHash ||
					((byte[])headerLogoImageValue).Length == 0) {
				_log.InfoFormat("{0}Current logo is default, shell logo will not be changed (length: {1})",
					logPrefix, (headerLogoImageValue as byte[])?.Length ?? -1);
				return;
			}
			if (CoreSysSettings.TryGetValue(userConnection, "CrtAppToolbarLogo", out object appToolbarLogoValue) 
					&& ((byte[])appToolbarLogoValue).Length != 0) {
				_log.InfoFormat("{0}Shell logo is already filled in and will not be changed", logPrefix);
				return;
			}
			CoreSysSettings.SetDefValue(userConnection, "CrtAppToolbarLogoUnderlayColor", DefaultUnderlayColor);
			CoreSysSettings.SetDefValue(userConnection, "CrtAppToolbarLogo",
				Convert.ToBase64String((byte[])headerLogoImageValue));
			_log.InfoFormat("{0}Shell logo has been successfully replaced with old logo (length: {1})", logPrefix,
				((byte[])headerLogoImageValue).Length);
		}

		#endregion

	}

	#endregion

}
