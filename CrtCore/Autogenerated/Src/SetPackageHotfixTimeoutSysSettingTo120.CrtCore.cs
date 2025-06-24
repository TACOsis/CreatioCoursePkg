namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: SetPackageHotfixTimeoutSysSettingTo120InstallScript

	public class SetPackageHotfixTimeoutSysSettingTo120InstallScript : IInstallScriptExecutor
	{

		#region Fields: Private

		private readonly Guid _packageHotfixTimeoutId = Guid.Parse("44f312dd-6c5e-4b86-b9ee-0f4c25265b56");
		private readonly int _packageHotfixTimeoutValue = 120;

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			var update = new Update(userConnection, "SysSettingsValue")
				.Set("IntegerValue", Column.Parameter(_packageHotfixTimeoutValue))
				.Where("SysSettingsId").IsEqual(Column.Parameter(_packageHotfixTimeoutId))
				.And("IntegerValue").IsLess(Column.Parameter(_packageHotfixTimeoutValue));
			update.Execute();
		}

		#endregion
	}

	#endregion

}

