namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	public class DeleteUseNewShellForExternalUsersSysSettingISE : IInstallScriptExecutor
	{

		private readonly Guid _useNewShellId = Guid.Parse("ED0B9CD0-BADA-4D9F-B62C-E06065229855");
		private readonly Guid _allExternalUsers = Guid.Parse("720B771C-E7A7-4F31-9CFB-52CD21C3739F");

		public void Execute(UserConnection userConnection) {
			var ssCode = "UseNewShellForExternalUsers";
			var select = new Select(userConnection).From("SysSettings").Column("Id").Where("Code")
				.IsEqual(Column.Parameter(ssCode)) as Select;
			var ssId = select.ExecuteScalar<Guid>();

			if (ssId.IsNotEmpty()) {
				var selectOldValue = new Select(userConnection).From("SysSettingsValue")
					.Column("BooleanValue")
					.Where("SysSettingsId")
						.IsEqual(Column.Parameter(ssId)) as Select;
				selectOldValue.ExecuteReader((reader) => {
					var oldValue = reader.GetColumnValue<bool>("BooleanValue");
					new Update(userConnection, "SysSettingsValue")
						.Set("BooleanValue", Column.Parameter(oldValue))
						.Where("SysSettingsId").IsEqual(Column.Parameter(_useNewShellId))
							.And("SysAdminUnitId").IsEqual(Column.Parameter(_allExternalUsers)).Execute();
				});

				new Delete(userConnection).From("SysSettingsValue").Where("SysSettingsId")
					.IsEqual(Column.Parameter(ssId)).Execute();

				new Delete(userConnection).From("SysSettings").Where("Id")
					.IsEqual(Column.Parameter(ssId)).Execute();
			}
		}
	}
}
