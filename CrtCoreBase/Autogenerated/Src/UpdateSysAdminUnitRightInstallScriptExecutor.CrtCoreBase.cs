namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.OperationLog;

	#region Class: UpdateSysAdminUnitRightInstallScriptExecutor

	internal class UpdateSysAdminUnitRightInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Class: EntitySchemaColumnRightDto

		private class EntitySchemaColumnRightDto
		{

			#region Properties: Public

			public Guid SysAdminUnitId { get; set; }

			public EntitySchemaColumnRightLevel RightLevel { get; set; }

			#endregion

		}

		#endregion

		#region Class: EntitySchemaColumnRightsDto

		private class EntitySchemaColumnRightsDto
		{

			#region Properties: Public

			public Guid ColumnUId { get; set; }

			public List<EntitySchemaColumnRightDto> Rights { get; set; }

			#endregion

		}

		#endregion

		#region Fields: Private

		private readonly List<string> _prohibitedColumns = new List<string> {
			"SourceControlLogin",
			"SourceControlPassword",
			"UserPassword",
			"PasswordExpireDate",
			"LoginAttemptCount",
			"UnblockTime",
			"ForceChangePassword",
			"Email",
			"Phone"
		};

		private readonly Guid _allEmployeesId = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private readonly Guid _systemAdministratorsId = new Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD");
		private readonly Guid _allExternalUsersId = new Guid("720B771C-E7A7-4F31-9CFB-52CD21C3739F");

		#endregion

		#region Methods: Private

		private bool IsDefaultColumnRight(EntitySchemaColumnRightDto columnRight) {
			return columnRight.SysAdminUnitId == _allEmployeesId &&
				columnRight.RightLevel == EntitySchemaColumnRightLevel.CanEdit;
		}

		private bool IsRedefinedDefaultColumnRights(EntitySchemaColumnRightDto[] columnRights) {
			return columnRights.Length == 3 &&
				columnRights.Any(r =>
					r.SysAdminUnitId == _allEmployeesId && r.RightLevel == EntitySchemaColumnRightLevel.CanRead) &&
				columnRights.Any(r =>
					r.SysAdminUnitId == _allExternalUsersId && r.RightLevel == EntitySchemaColumnRightLevel.CanRead) &&
				columnRights.Any(r =>
					r.SysAdminUnitId == _systemAdministratorsId &&
					r.RightLevel == EntitySchemaColumnRightLevel.CanEdit);
		}

		private EntitySchemaColumnRightsDto[] GetNotDefaultColumnsRights(
			IEnumerable<EntitySchemaColumnRightsDto> entitySchemaColumnsRights) {
			return entitySchemaColumnsRights.Where(r => r.Rights.Count != 1 || !IsDefaultColumnRight(r.Rights[0]))
				.ToArray();
		}

		private List<EntitySchemaColumnRightsDto> GetEmptyEntitySchemaColumnsRights(UserConnection userConnection,
				EntitySchema entitySchema) {
			return entitySchema.Columns.Select(c => new EntitySchemaColumnRightsDto {
				ColumnUId = c.UId,
				Rights = new List<EntitySchemaColumnRightDto>()
			}).ToList();
		}

		private EntitySchemaColumnRightsDto[] GetEntitySchemaColumnsRights(UserConnection userConnection,
				EntitySchema entitySchema) {
			if (!entitySchema.AdministratedByColumns) {
				return Array.Empty<EntitySchemaColumnRightsDto>();
			}
			Select select = new Select(userConnection)
				.Column("ColumnRights", "SysAdminUnitId").As("SysAdminUnitId")
				.Column("ColumnRights", "SubjectColumnUId").As("ColumnUId")
				.Column("ColumnRights", "RightLevel").As("RightLevel")
				.From("SysEntitySchemaColumnRight").As("ColumnRights")
				.Where("ColumnRights", "SubjectSchemaUId").IsEqual(Column.Parameter(entitySchema.UId)) as Select;
			List<EntitySchemaColumnRightsDto> entitySchemaColumnsRights =
				GetEmptyEntitySchemaColumnsRights(userConnection, entitySchema);
			select.ExecuteReader(dr => {
				Guid columnUId = dr.GetColumnValue<Guid>("ColumnUId");
				var columnRight = new EntitySchemaColumnRightDto {
					SysAdminUnitId = dr.GetColumnValue<Guid>("SysAdminUnitId"),
					RightLevel = (EntitySchemaColumnRightLevel)dr.GetColumnValue<int>("RightLevel")
				};
				EntitySchemaColumnRightsDto columnRights =
					entitySchemaColumnsRights.FirstOrDefault(c => c.ColumnUId == columnUId);
				columnRights?.Rights.Add(columnRight);
			});
			return entitySchemaColumnsRights.ToArray();
		}

		private void InsertRights(UserConnection userConnection, Guid schemaUId, Guid columnUId, Guid adminUnitId,
                EntitySchemaColumnRightLevel rightLevel, int? position) {
			var recordId = Guid.NewGuid();
			QueryParameter nowParameter = new QueryParameter("now", DateTime.Now, "DateTime");
			QueryParameter currentUserIdParameter = new QueryParameter("currentUserId",
				userConnection.CurrentUser.Id);
			Insert columnRightsInsert =
				new Insert(userConnection)
					.Into("SysEntitySchemaColumnRight")
					.Set("Id", Column.Parameter(recordId))
					.Set("CreatedOn", nowParameter)
					.Set("CreatedById", currentUserIdParameter)
					.Set("ModifiedOn", nowParameter)
					.Set("ModifiedById", currentUserIdParameter)
					.Set("SubjectSchemaUId", Column.Parameter(schemaUId))
					.Set("SubjectColumnUId", Column.Parameter(columnUId))
					.Set("SysAdminUnitId", Column.Parameter(adminUnitId))
					.Set("RightLevel", Column.Parameter(rightLevel))
					.Set("Position", Column.Parameter(position));
			StoredProcedure setRecordPositionProcedure =
				new StoredProcedure(userConnection, "tsp_SetRecordPosition")
					.WithParameter("TableName", "SysEntitySchemaColumnRight")
					.WithParameter("PrimaryColumnName", "Id")
					.WithParameter("PrimaryColumnValue", recordId)
					.WithParameter("GrouppingColumnNames", "SubjectSchemaUId, SubjectColumnUId")
					.WithParameter("Position", position ?? 0) as StoredProcedure;
			setRecordPositionProcedure.PackageName = userConnection.DBEngine.SystemPackageName;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				columnRightsInsert.Execute(dbExecutor);
				setRecordPositionProcedure.Execute(dbExecutor);
				dbExecutor.CommitTransaction();
				OperationLogger.Instance.LogEntitySchemaColumnRightEdit(userConnection, recordId);
			}
		}

		private void UpdateRights(UserConnection userConnection, EntitySchema entitySchema) {
			var allEntitySchemaColumnsRights = GetEntitySchemaColumnsRights(userConnection, entitySchema);
			var containsAnyDefinedRights = allEntitySchemaColumnsRights.Any(r => r.Rights.Any());
			var notDefaultColumnRights = GetNotDefaultColumnsRights(allEntitySchemaColumnsRights);
			entitySchema.Columns.ForEach(column => {
				if (notDefaultColumnRights.Any(notDefaultRight =>
						containsAnyDefinedRights && notDefaultRight.ColumnUId == column.UId &&
						!IsRedefinedDefaultColumnRights(notDefaultRight.Rights.ToArray()))) {
					return;
				}
				var deleteRightsForColumn = new Delete(userConnection)
					.From("SysEntitySchemaColumnRight")
					.Where("SubjectSchemaUId").IsEqual(Column.Parameter(entitySchema.UId))
					.And("SubjectColumnUId").IsEqual(Column.Parameter(column.UId));
				deleteRightsForColumn.Execute();
				InsertRights(userConnection, entitySchema.UId, column.UId, _systemAdministratorsId,
					EntitySchemaColumnRightLevel.CanEdit, 0);
				if (!_prohibitedColumns.Contains(column.Name)) {
					InsertRights(userConnection, entitySchema.UId, column.UId, _allEmployeesId,
						EntitySchemaColumnRightLevel.CanRead, 1);
					InsertRights(userConnection, entitySchema.UId, column.UId, _allExternalUsersId,
						EntitySchemaColumnRightLevel.CanRead, 2);
				}
			});
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			var sysAdminUnitEntity = userConnection.EntitySchemaManager.GetEntityByName("SysAdminUnit", userConnection);
			var vwSysAdminUnitEntity =
				userConnection.EntitySchemaManager.GetEntityByName("VwSysAdminUnit", userConnection);
			UpdateRights(userConnection, sysAdminUnitEntity.Schema);
			UpdateRights(userConnection, vwSysAdminUnitEntity.Schema);
		}

		#endregion

	}

	#endregion

}

