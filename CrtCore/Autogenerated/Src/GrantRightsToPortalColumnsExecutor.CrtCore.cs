namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	public class GrantRightsToPortalColumnsExecutor : IInstallScriptExecutor
	{

		#region Fields: Private

		private UserConnection _userConnection;
		private EntitySchemaManager _entitySchemaManager;
		private readonly Guid _portalRoleGuid = new Guid("720B771C-E7A7-4F31-9CFB-52CD21C3739F");
		private readonly Guid _allEmployesRoleGuid = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private List<string> _systemColumns = new List<string> { "EBF6BB93-8AA6-4A01-900D-C6EA67AFFE21","3015559E-CBC6-406A-88AF-07F7930BE832",
			"9928EDEC-4272-425A-93BB-48743FEE4B04","E80190A5-03B2-4095-90F7-A193A960ADEE"};

		#endregion

		#region Methods: Private

		private List<(string SchemaUId, string ColumnUId)> GetColumns() {
			var columns = new List<(string SchemaUId, string columnUId)>();
			var select =
				new Select(_userConnection)
					.Column("PortalSchemaAccessList", "SchemaUId").As("SchemaUId")
					.Column("PortalColumnAccessList", "ColumnUId").As("ColumnUId")
				.From("PortalSchemaAccessList")
					.InnerJoin("PortalColumnAccessList").On("PortalColumnAccessList", "PortalSchemaListId")
						.IsEqual("PortalSchemaAccessList", "Id")
					 as Select;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						columns.Add((
							 dataReader.GetColumnValue<string>("SchemaUId"),
							 dataReader.GetColumnValue<string>("ColumnUId")
						));
					}
				}
				var schemaUids = columns.Select(column => column.SchemaUId).Distinct().ToList();
				foreach (var schemaUId in schemaUids) {
					foreach (var columnUId in _systemColumns) {
						columns.Add((schemaUId, columnUId));
					}
				}
				return columns;
			}
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

		private void GrantRights() {
			Entity portalColumnAccessListEntity = _entitySchemaManager.GetEntityByName("PortalColumnAccessList", _userConnection);
			if (portalColumnAccessListEntity == null) {
				return;
			}
			List<(string SchemaUId, string ColumnUId)> columns = GetColumns();
			foreach (var column in columns) {
				if (!string.IsNullOrEmpty(column.SchemaUId) && !string.IsNullOrEmpty(column.ColumnUId)) {
					SetEntitySchemaColumnRightLevel(
						_portalRoleGuid, 
						Guid.Parse(column.SchemaUId), 
						Guid.Parse(column.ColumnUId), 
						EntitySchemaColumnRightLevel.CanEdit);
					SetEntitySchemaColumnRightLevel(
						_allEmployesRoleGuid,
						Guid.Parse(column.SchemaUId),
						Guid.Parse(column.ColumnUId),
						EntitySchemaColumnRightLevel.CanEdit);
				}
			}
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			_userConnection = userConnection;
			_entitySchemaManager = userConnection.EntitySchemaManager;
			GrantRights();
		}

		#endregion

	}
}

