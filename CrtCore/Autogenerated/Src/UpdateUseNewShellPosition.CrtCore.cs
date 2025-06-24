namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	public class UpdateUseNewShellPosition : IInstallScriptExecutor
	{

		private readonly Guid _useNewShellId = Guid.Parse("ED0B9CD0-BADA-4D9F-B62C-E06065229855");
		private readonly Guid _allExternalUsers = Guid.Parse("720B771C-E7A7-4F31-9CFB-52CD21C3739F");
		private readonly Guid _allEmployees = Guid.Parse("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private readonly int _maxPosition = 2147483647;

		private void UpdatePosition(UserConnection userConnection, Guid recordId, int position) {
			var update = new Update(userConnection, "SysSettingsValue")
				.Set("Position", Column.Parameter(position))
				.Where("Id").IsEqual(Column.Parameter(recordId));
			update.Execute();
		}

		public void Execute(UserConnection userConnection) {
			var select = new Select(userConnection).From("SysSettingsValue").As("SSV")
				.Column("SSV", "Id")
				.Column("SSV", "SysAdminUnitId")
				.Where("SSV", "SysSettingsId").IsEqual(Column.Parameter(_useNewShellId)) as Select;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (IDataReader r = select.ExecuteReader(dbExecutor)) {
					while (r.Read()) {
						if (r.GetColumnValue<Guid>("SysAdminUnitId") == _allExternalUsers) {
							UpdatePosition(userConnection, r.GetColumnValue<Guid>("Id"), _maxPosition);
						} else if (r.GetColumnValue<Guid>("SysAdminUnitId") == _allEmployees) {
							UpdatePosition(userConnection, r.GetColumnValue<Guid>("Id"), _maxPosition - 1);
						}
					}
				}
			}
		}
	}
}
