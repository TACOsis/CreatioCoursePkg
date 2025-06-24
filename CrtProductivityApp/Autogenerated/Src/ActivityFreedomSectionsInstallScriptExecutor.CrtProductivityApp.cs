namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;


	#region Class: ActivityFreedomSectionsInstallScriptExecutor

	///Class ActivityFreedomSectionsInstallScriptExecutor
	internal class ActivityFreedomSectionsInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Constants: Private

		private readonly Guid _productivityWorkplaceId = Guid.Parse("B2B4C478-E30B-48DA-8DA1-776401BB38CE");
		private readonly Guid _calendarSysModuleId = Guid.Parse("C87BBA65-57C0-4728-B672-F464238A22D7");
		private readonly Guid _tasksSysModuleId = Guid.Parse("021D26B9-C326-4795-9B95-FBED6FA41E83");
		private readonly Guid _activitySectionSchemaUId = Guid.Parse("569AAF1A-5943-4F87-AB47-948D941E4920");

		#endregion

		#region Methods: Private

		private bool HasSysLic(UserConnection userConnection) {
			var select = new Select(userConnection)
				.Column(Func.Count(Column.Asterisk()))
				.From("SysLic");
			return select.ExecuteScalar<int>() > 0;
		}

		private bool IsStudioProduct(UserConnection userConnection) {
			var select = new Select(userConnection)
				.Column(Func.Count(Column.Asterisk()))
				.From("SysPackage")
				.Where("Name").IsEqual(Column.Parameter("Studio")) as Select;
			return select.ExecuteScalar<int>() > 0;
		}

		private Select GetSysModuleInWorkplaceSelect(UserConnection uc) {
			return new Select(uc)
				.Column("SysModuleInWorkplace", "Id")
				.Column("SysModuleInWorkplace", "SysWorkplaceId")
				.Column("SysModuleInWorkplace", "SysModuleId")
				.From("SysModuleInWorkplace");
		}

		private List<Guid> GetActivitySMIW(UserConnection uc) {
			var select = GetSysModuleInWorkplaceSelect(uc);
			select
				.InnerJoin("SysModule").On("SysModule", "Id").IsEqual("SysModuleInWorkplace", "SysModuleId")
				.Where("SysModule", "SectionSchemaUId").IsEqual(Column.Parameter(_activitySectionSchemaUId));
			var result = new List<Guid>();
			using (DBExecutor dbExecutor = uc.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						result.Add(dataReader.GetColumnValue<Guid>("SysWorkplaceId")); 
					}
				}
			}
			return result;
		}

		private void RemoveProductivityWokplace(UserConnection uc) {
			var SysWorkplacedeleteQuery = new Delete(uc)
							.From("SysWorkplace")
							.Where("Id").IsEqual(Column.Parameter(_productivityWorkplaceId)) as Delete;
			SysWorkplacedeleteQuery.Execute();
		}

		private void AddCalendarAndTaskSectionsToWorkplaces(UserConnection uc, List<Guid> workplaceIds) {
			workplaceIds.ForEach(workplaceId => {
				AddSectionToWorkplaceIfDoesNotExist(uc, workplaceId, _calendarSysModuleId);
				AddSectionToWorkplaceIfDoesNotExist(uc, workplaceId, _tasksSysModuleId);
			});
		}

		private void AddSectionToWorkplaceIfDoesNotExist(UserConnection uc, Guid workplaceId, Guid sectionId) {
			var sectionToWorkplaceRowsCount = new Select(uc)
				.Column(Func.Count(Column.Asterisk()))
				.From("SysModuleInWorkplace")
				.Where("SysWorkplaceId").IsEqual(Column.Parameter(workplaceId))
				.And("SysModuleId").IsEqual(Column.Parameter(sectionId)) as Select;
			var rowCount = sectionToWorkplaceRowsCount.ExecuteScalar<int>();
			if(rowCount == 0) {
				new Insert(uc)
					.Into("SysModuleInWorkplace")
					.Set("SysWorkplaceId", Column.Parameter(workplaceId))
					.Set("SysModuleId", Column.Parameter(sectionId))
					.Execute();
			}
		}

		private void RemoveActivitySectionFromWorkplaces(UserConnection uc, List<Guid> workplaceIds) {
			if (!workplaceIds.Any()) {
				return;
			}
			var SysWorkplacedeleteQuery = new Delete(uc)
							.From("SysModuleInWorkplace")
							.Where("SysWorkplaceId").In(Column.Parameters(workplaceIds))
							.And("SysModuleId").In(new Select(uc)
								.Column("SysModule", "Id")
								.From("SysModule")
								.Where("SysModule", "SectionSchemaUId").IsEqual(Column.Parameter(_activitySectionSchemaUId))
								) as Delete;
			SysWorkplacedeleteQuery.Execute();
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			if (HasSysLic(userConnection)) {
				return;
			}
			RemoveProductivityWokplace(userConnection);
			if (IsStudioProduct(userConnection)) {
				return;
			}
			var activityWorkplaces = GetActivitySMIW(userConnection);
			AddCalendarAndTaskSectionsToWorkplaces(userConnection, activityWorkplaces);
			RemoveActivitySectionFromWorkplaces(userConnection, activityWorkplaces);
		}

		#endregion

	}

	#endregion

}
