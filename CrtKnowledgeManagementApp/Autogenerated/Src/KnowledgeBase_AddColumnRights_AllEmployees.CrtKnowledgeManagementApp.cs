namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;

	public class KnowledgeBase_AddColumnRights_AllEmployees : IInstallScriptExecutor
	{
		private readonly Guid sysAdminUnit_allEmployees =
			Guid.Parse("A29A3BA5-4B0D-DE11-9A51-005056C00008");

		private UserConnection _userConnection;

		public void Execute(UserConnection userConnection) {
			this._userConnection = userConnection;
			var knowledgeBaseEntity = userConnection.EntitySchemaManager
				.GetEntityByName("KnowledgeBase", userConnection);
			if(knowledgeBaseEntity == null) {
				return;
			}
			var knowledgeBaseSchema = knowledgeBaseEntity.Schema;
			if (!knowledgeBaseSchema.AdministratedByColumns) {
				return;
			}
			knowledgeBaseSchema.Columns.ForEach(column => {
				SetEntitySchemaColumnRightLevel(
					sysAdminUnit_allEmployees,
					knowledgeBaseSchema.UId,
					column.UId,
					knowledgeBaseSchema.AdministratedByOperations ? EntitySchemaColumnRightLevel.CanEdit : EntitySchemaColumnRightLevel.All
				);
			});
		}

		private void SetEntitySchemaColumnRightLevel(Guid adminUnitId, Guid schemaUId, Guid columnUId,
		EntitySchemaColumnRightLevel rightLevel, int? position = null) {
			Select recordIdSelect =
				new Select(_userConnection)
					.Column("Id")
				.From("SysEntitySchemaColumnRight")
				.Where("SubjectSchemaUId")
					.IsEqual(Column.Parameter(schemaUId))
				.And("SubjectColumnUId")
					.IsEqual(Column.Parameter(columnUId))
				.And("SysAdminUnitId")
					.IsEqual(Column.Parameter(adminUnitId)) as Select;
			Guid recordId = Guid.Empty;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = recordIdSelect.ExecuteReader(dbExecutor)) {
					if (dataReader.Read()) {
						recordId = _userConnection.DBTypeConverter.DBValueToGuid(dataReader[0]);
					}
				}
			}
			if (!recordId.Equals(Guid.Empty)) {
				return;
			}
			recordId = Guid.NewGuid();
			Insert columnRightsInsert =
				new Insert(_userConnection)
					.Into("SysEntitySchemaColumnRight")
					.Set("Id", Column.Parameter(recordId))
					.Set("CreatedOn", Column.Parameter(DateTime.Now))
					.Set("CreatedById", Column.Parameter(_userConnection.CurrentUser.Id))
					.Set("ModifiedOn", Column.Parameter(DateTime.Now))
					.Set("ModifiedById", Column.Parameter(_userConnection.CurrentUser.Id))
					.Set("SubjectSchemaUId", Column.Parameter(schemaUId))
					.Set("SubjectColumnUId", Column.Parameter(columnUId))
					.Set("SysAdminUnitId", Column.Parameter(adminUnitId))
					.Set("RightLevel", Column.Parameter(rightLevel));
			StoredProcedure setRecordPositionProcedure =
				new StoredProcedure(_userConnection, "tsp_SetRecordPosition")
					.WithParameter("TableName", "SysEntitySchemaColumnRight")
					.WithParameter("PrimaryColumnName", "Id")
					.WithParameter("PrimaryColumnValue", recordId)
					.WithParameter("GrouppingColumnNames", "SubjectSchemaUId, SubjectColumnUId")
					.WithParameter("Position", position ?? 0) as StoredProcedure;
			setRecordPositionProcedure.PackageName = _userConnection.DBEngine.SystemPackageName;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				columnRightsInsert.Execute(dbExecutor);
				setRecordPositionProcedure.Execute(dbExecutor);
				dbExecutor.CommitTransaction();
			}
		}

	}
}
