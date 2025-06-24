 namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
    using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: ClassicPageUITypeForFreedomHostInstallScriptExecutor

	internal class ClassicPageUITypeForFreedomHostInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Constants: Private

		private const string ClassicUIPagesId = "D823260D-75BE-44EE-8E3A-669BB83A5CE4";

		#endregion

		#region Methods: Private
		
		private bool HasSysLic(UserConnection userConnection) {
			var select = new Select(userConnection)
				.Column(Func.Count(Column.Asterisk()))
				.From("SysLic");
			return select.ExecuteScalar<int>() > 0;
		}

		#endregion
		
		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			if (!HasSysLic(userConnection)) {
				return;
			}
			CoreSysSettings.SetValue(userConnection, "EditPagesUITypeForFreedomHost", ClassicUIPagesId);
		}

		#endregion

	}

	#endregion

}
