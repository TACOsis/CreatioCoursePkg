 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: UpdateEntitySchemaOperationRightsSysModuleVisaScript

	public class UpdateEntitySchemaOperationRightsSysModuleVisaScript : IInstallScriptExecutor
	{

		#region Fields: Private

		private static readonly Guid _sysModuleVisaSchemaUId = new Guid("1980906b-3a10-489c-b67c-30d74100b8cb");
		private static readonly string _operationRightSchemaName = "SysEntitySchemaOperationRight";

		private static readonly Guid _allEmployeesRoleId = new Guid("a29a3ba5-4b0d-de11-9a51-005056c00008");
		private static readonly Guid _allExternalUsersRoleId = new Guid("720b771c-e7a7-4f31-9cfb-52cd21c3739f");

		private static readonly Guid _recordInCrtBaseForAllEmployees =
			new Guid("6b31f09c-af7a-453a-a228-4c1fb26de831");
		private static readonly Guid _recordInSSPForAllExternals =
			new Guid("849c3bda-3190-40b8-ae42-4b5219f63847");

		#endregion

		#region Methods: Private
		
		private static EntitySchema GetEntitySchema(UserConnection userConnection, string schemaName) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			ISchemaManagerItem<EntitySchema> managerItem = entitySchemaManager.GetItemByName(schemaName);
			return entitySchemaManager.GetRuntimeInstanceFromMetadata(managerItem.UId);
		}
		
		private static void DeleteRecords(IEnumerable<Entity> entities) {
			foreach (Entity entity in entities) {
				entity.Delete();
			}
		}

		private static IReadOnlyCollection<Entity> GetOperationRightRecordsSortedByPosition(
			UserConnection userConnection,
			Guid sysAdminUnitId
		) {
			EntitySchema operationRightEntitySchema = GetEntitySchema(userConnection, _operationRightSchemaName);
			var esq = new EntitySchemaQuery(operationRightEntitySchema);
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.AddColumn("Position").OrderByAsc();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SubjectSchemaUId",
				_sysModuleVisaSchemaUId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SysAdminUnit", sysAdminUnitId));
			EntityCollection entities = esq.GetEntityCollection(userConnection);
			return entities.ToList();
		}

		private static void OverrideAllOperationRightRecordsWithOne(
			UserConnection userConnection,
			Guid sysAdminUnitId,
			Guid actualRightRecordId
		) {
			IReadOnlyCollection<Entity> operationRightRecords =
				GetOperationRightRecordsSortedByPosition(userConnection, sysAdminUnitId);
			if (operationRightRecords.Count <= 1) {
				return;
			}
			Entity actualRightRecord =
				operationRightRecords.FirstOrDefault(entity => entity.PrimaryColumnValue == actualRightRecordId);
			Entity highestRightRecord;
			if (actualRightRecord == null) {
				highestRightRecord = operationRightRecords.First();
				actualRightRecordId = highestRightRecord.PrimaryColumnValue;
				actualRightRecord = highestRightRecord;
			} else {
				highestRightRecord = operationRightRecords.First(x => x.PrimaryColumnValue != actualRightRecordId);
			}
			int highestRightRecordPosition = highestRightRecord.GetTypedColumnValue<int>("Position");
			int actualRecordPosition = actualRightRecord.GetTypedColumnValue<int>("Position");
			IEnumerable<Entity> recordsToDelete =
				operationRightRecords.Where(entity => entity.PrimaryColumnValue != actualRightRecordId);
			DeleteRecords(recordsToDelete);
			if (highestRightRecordPosition == actualRecordPosition) {
				return;
			}
			actualRightRecord.SetColumnValue("Position", highestRightRecordPosition);
			actualRightRecord.Save();
		}

		/// <summary>
		/// Adds and removes a dummy record to trigger a logic that removes gaps in the Position column.
		/// </summary>
		/// <param name="userConnection"></param>
		private static void RemoveOperationRightPositionGaps(UserConnection userConnection) {
			const int dummyRecordPosition = 10000;
			EntitySchema operationRightEntitySchema = GetEntitySchema(userConnection, _operationRightSchemaName);
			Entity operationRightEntity = operationRightEntitySchema.CreateEntity(userConnection);
			operationRightEntity.SetDefColumnValues();
			operationRightEntity.SetColumnValue("SubjectSchemaUId", _sysModuleVisaSchemaUId);
			operationRightEntity.SetColumnValue("SysAdminUnitId", _allEmployeesRoleId);
			operationRightEntity.SetColumnValue("Position", dummyRecordPosition);
			operationRightEntity.Save(validateRequired: false);
			operationRightEntity.Delete();
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			OverrideAllOperationRightRecordsWithOne(userConnection, _allEmployeesRoleId,
				_recordInCrtBaseForAllEmployees);
			OverrideAllOperationRightRecordsWithOne(userConnection, _allExternalUsersRoleId,
				_recordInSSPForAllExternals);
			RemoveOperationRightPositionGaps(userConnection);
		}

		#endregion

	}

	#endregion

}

