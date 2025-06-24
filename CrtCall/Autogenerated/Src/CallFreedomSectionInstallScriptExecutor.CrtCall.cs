 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;


	#region Class: CallFreedomSectionInstallScriptExecutor

	internal class CallFreedomSectionInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Constants: Private

		private readonly Guid _classicUICallsSysModuleId = Guid.Parse("8CC66ACC-72C1-4B3B-AF83-977C3129104A");
		private readonly Guid _freedomUICallsSysModuleId = Guid.Parse("7B566532-366A-4D6B-95E8-CD904397CFCF");

		#endregion

		#region Methods: Private

		private bool IsUpdateMode(UserConnection userConnection) {
			var select =
				new Select(userConnection)
					.Column(Func.Count(Column.Asterisk()))
				.From("SysLic");
			return select.ExecuteScalar<int>() > 0;
		}

		private Select GetSysModuleInWorkplaceSelect(UserConnection userConnection) {
			return new Select(userConnection)
					.Column("SysWorkplaceId")
					.Column("Position")
				.Distinct()
				.From("SysModuleInWorkplace").As("smiw")
				.Where("smiw", "SysModuleId").IsEqual(Column.Parameter(_classicUICallsSysModuleId))
					.And().Not().Exists(
						new Select(userConnection).Top(1)
							.Column(Column.Asterisk())
						.From("SysModuleInWorkplace").As("smiw2")
						.Where("smiw2", "SysModuleId").IsEqual(Column.Parameter(_freedomUICallsSysModuleId))
							.And("smiw2", "SysWorkplaceId").IsEqual("smiw", "SysWorkplaceId")
					)
				as Select;
		}

		private void AddSectionToWorkplace(UserConnection uc, Guid workplaceId, int position) {
			new Insert(uc)
				.Into("SysModuleInWorkplace")
					.Set("SysWorkplaceId", Column.Parameter(workplaceId))
					.Set("SysModuleId", Column.Parameter(_freedomUICallsSysModuleId))
					.Set("Position", Column.Parameter(position))
				.Execute();
		}

		private void RemoveClassicUICallsModulesFromWorkplaces(UserConnection userConnection, List<Guid> workplaceIds) {
			var delete =
				new Delete(userConnection)
				.From("SysModuleInWorkplace")
				.Where("SysWorkplaceId").In(Column.Parameters(workplaceIds))
					.And("SysModuleId").IsEqual(Column.Parameter(_classicUICallsSysModuleId)) as Delete;
			delete.Execute();
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			var isUpdateMode = IsUpdateMode(userConnection);
			var select = GetSysModuleInWorkplaceSelect(userConnection);
			List<Guid> workplaceIds = new List<Guid>();
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						var workplaceId = dataReader.GetColumnValue<Guid>("SysWorkplaceId");
						AddSectionToWorkplace(userConnection, workplaceId, dataReader.GetColumnValue<int>("Position"));
						if (!isUpdateMode) {
							workplaceIds.Add(workplaceId);
						}
					}
				}
			}
			if (workplaceIds.Any()) {
				RemoveClassicUICallsModulesFromWorkplaces(userConnection, workplaceIds);
			}
		}

		#endregion

	}

	#endregion

}
