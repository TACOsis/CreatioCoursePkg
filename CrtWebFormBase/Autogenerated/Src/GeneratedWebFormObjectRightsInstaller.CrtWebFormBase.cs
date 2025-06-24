namespace Creatio.InstallScripts
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: GeneratedWebFormObjectRightsInstaller

	internal class GeneratedWebFormObjectRightsInstaller : IInstallScriptExecutor
	{
		private static readonly Guid _allEmployeesSysAdminUnitUId = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private static readonly Guid _administratorsSysAdminUnitId = new Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD");

		private UserConnection _userConnection;
		private readonly List<AdminUnitRightPropagationInfo> DefaultAdminUnitRightInfos =
			new List<AdminUnitRightPropagationInfo> {
				new AdminUnitRightPropagationInfo {
					AdminUnitId = _allEmployeesSysAdminUnitUId,
					RightLevel = SchemaOperationRightLevels.CanRead
				},
				new AdminUnitRightPropagationInfo {
					AdminUnitId = _administratorsSysAdminUnitId,
					RightLevel = SchemaOperationRightLevels.All
				}
			};
		private readonly List<AdminUnitRightPropagationInfo> ReadOnlyAdminUnitRightInfos =
			new List<AdminUnitRightPropagationInfo> {
				new AdminUnitRightPropagationInfo {
					AdminUnitId = _allEmployeesSysAdminUnitUId,
					RightLevel = SchemaOperationRightLevels.CanRead
				}
			};
		private readonly List<AdminUnitRightPropagationInfo> CreateAndReadAdminUnitRightInfos =
			new List<AdminUnitRightPropagationInfo> {
				new AdminUnitRightPropagationInfo {
					AdminUnitId = _allEmployeesSysAdminUnitUId,
					RightLevel = SchemaOperationRightLevels.CanAppend | SchemaOperationRightLevels.CanRead
				}
			};
		private readonly List<AdminUnitRightPropagationInfo> AllowAllAdminUnitRightInfos =
			new List<AdminUnitRightPropagationInfo> {
				new AdminUnitRightPropagationInfo {
					AdminUnitId = _allEmployeesSysAdminUnitUId,
					RightLevel = SchemaOperationRightLevels.All
				}
			};

		private Guid GetSchemaUId(string schemaName) {
			var result = Guid.Empty;
			Select select = new Select(_userConnection)
				.Column("UId")
				.From("SysSchema")
				.Where("Name").IsEqual(Column.Parameter(schemaName))
				.And("ExtendParent").IsEqual(Column.Const(false))
				.And("ManagerName").IsEqual(Column.Parameter("EntitySchemaManager")) as Select;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						result = dataReader.GetColumnValue<Guid>("UId");
					}
				}
			}
			return result;
		}

		private Select GetSchemaUIdQuery(string schemaName) {
			return new Select(_userConnection).Column("UId").From("SysSchema")
				.Where("Name").IsEqual(Column.Parameter(schemaName)) as Select;
		}

		private Select GetSchemaIdQuery(string schemaName) {
			return new Select(_userConnection).Column("Id").From("SysSchema")
				.Where("Name").IsEqual(Column.Parameter(schemaName))
				.And("ManagerName").IsEqual(Column.Parameter("EntitySchemaManager")) as Select;
		}

		private bool HasExistingOperationRights(string schemaName) {
			var selectProperty = new Select(_userConnection)
				.From("SysSchemaProperty")
				.Column(Func.Count(Column.Const(1)))
				.Where("Name").IsEqual(Column.Parameter("AdministratedByOperations"))
				.And("SysSchemaId").In(GetSchemaIdQuery(schemaName))
				.And("Value").IsEqual(Column.Parameter("True")) as Select;
			var select = new Select(_userConnection)
				.From("SysEntitySchemaOperationRight")
				.Column(Func.Count(Column.Const(1)))
				.Where("SubjectSchemaUId").In(GetSchemaUIdQuery(schemaName)) as Select;
			return selectProperty.ExecuteScalar<int>() > 0 && select.ExecuteScalar<int>() > 0;
		}

		private bool HasExistingColumnRights(string schemaName) {
			var selectProperty = new Select(_userConnection)
				.From("SysSchemaProperty")
				.Column(Func.Count(Column.Const(1)))
				.Where("Name").IsEqual(Column.Parameter("AdministratedByColumns"))
				.And("SysSchemaId").In(GetSchemaIdQuery(schemaName))
				.And("Value").IsEqual(Column.Parameter("True")) as Select;
			return selectProperty.ExecuteScalar<int>() > 0;
		}

		private bool HasExistingRecordRights(string schemaName) {
			var selectProperty = new Select(_userConnection)
				.From("SysSchemaProperty")
				.Column(Func.Count(Column.Const(1)))
				.Where("Name").IsEqual(Column.Parameter("AdministratedByRecords"))
				.And("SysSchemaId").In(GetSchemaIdQuery(schemaName))
				.And("Value").IsEqual(Column.Parameter("True")) as Select;
			return selectProperty.ExecuteScalar<int>() > 0;
		}

		private Guid GetOperationsRightLevelRecordId(Guid adminUnitId, string schemaName) {
			var result = Guid.Empty;
			Select select = new Select(_userConnection)
				.Column("Id")
				.From("SysEntitySchemaOperationRight")
				.Where("SubjectSchemaUId").In(GetSchemaUIdQuery(schemaName))
				.And("SysAdminUnitId").IsEqual(Column.Parameter(adminUnitId)) as Select;
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						result = dataReader.GetColumnValue<Guid>("Id");
					}
				}
			}
			return result;
		}

		private void SetEntitySchemaOperationsRightLevel(Guid adminUnitId, string schemaName,
				SchemaOperationRightLevels rightLevel) {
			bool flag = rightLevel.HasFlag(SchemaOperationRightLevels.CanRead);
			bool flag2 = rightLevel.HasFlag(SchemaOperationRightLevels.CanAppend);
			bool flag3 = rightLevel.HasFlag(SchemaOperationRightLevels.CanEdit);
			bool flag4 = rightLevel.HasFlag(SchemaOperationRightLevels.CanDelete);
			Guid operationsRightLevelRecordId = GetOperationsRightLevelRecordId(adminUnitId, schemaName);
			if (!operationsRightLevelRecordId.Equals(Guid.Empty)) {
				Update update = new Update(_userConnection, "SysEntitySchemaOperationRight")
					.Set("ModifiedOn", Column.Parameter(DateTime.Now, "DateTime"))
					.Set("CanRead", Column.Parameter(flag))
					.Set("CanAppend", Column.Parameter(flag2))
					.Set("CanEdit", Column.Parameter(flag3))
					.Set("CanDelete", Column.Parameter(flag4))
					.Where("Id").IsEqual(Column.Parameter(operationsRightLevelRecordId)) as Update;
				update.Execute();
				return;
			}
			var schemaUId = GetSchemaUId(schemaName);
			if (schemaUId == default) {
				return;
			}
			operationsRightLevelRecordId = Guid.NewGuid();
			QueryParameter parameter = new QueryParameter("now", DateTime.Now, "DateTime");
			Insert insert = new Insert(_userConnection).Into("SysEntitySchemaOperationRight")
				.Set("Id", Column.Parameter(operationsRightLevelRecordId))
				.Set("CreatedOn", parameter)
				.Set("ModifiedOn", parameter)
				.Set("SubjectSchemaUId", Column.Parameter(schemaUId))
				.Set("SysAdminUnitId", Column.Parameter(adminUnitId))
				.Set("CanRead", Column.Parameter(flag))
				.Set("CanAppend", Column.Parameter(flag2))
				.Set("CanEdit", Column.Parameter(flag3))
				.Set("CanDelete", Column.Parameter(flag4));
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				insert.Execute(dbExecutor);
			}
		}

		private void InternalExecute(UserConnection userConnection,
				IEnumerable<SchemaRightPropagationInfo> schemaRightPropagationInfos) {
			_userConnection = userConnection;
			foreach (SchemaRightPropagationInfo schemaRightPropagationInfo in schemaRightPropagationInfos) {
				if (!schemaRightPropagationInfo.OverwriteExistingRights &&
					(HasExistingOperationRights(schemaRightPropagationInfo.SchemaName) ||
						HasExistingRecordRights(schemaRightPropagationInfo.SchemaName) ||
						HasExistingColumnRights(schemaRightPropagationInfo.SchemaName))) {
					continue;
				}
				var update = new Update(userConnection, "SysSchemaProperty")
					.Set("Value", Column.Parameter("True"))
					.Where("SysSchemaId").In(new Select(userConnection).Column("Id").From("SysSchema")
						.Where("Name").IsEqual(Column.Parameter(schemaRightPropagationInfo.SchemaName))
						.And("ManagerName").IsEqual(Column.Parameter("EntitySchemaManager")))
					.And("Name").IsEqual(Column.Parameter("AdministratedByOperations"));
				update.Execute();
				foreach (var adminUnitRightPropagation in schemaRightPropagationInfo.AdminUnitRightPropagationInfos) {
					SetEntitySchemaOperationsRightLevel(
						adminUnitRightPropagation.AdminUnitId,
						schemaRightPropagationInfo.SchemaName,
						adminUnitRightPropagation.RightLevel);
				}
			}
		}

		protected IEnumerable<SchemaRightPropagationInfo> GetSchemaRightPropagationInfos() {
			return new[] {
				new SchemaRightPropagationInfo {
					SchemaName = "GeneratedWebFormFolder",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "GeneratedWebFormInFolder",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "GeneratedWebFormInTag",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "GeneratedWebFormFile",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "LandingObjectDefaults",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "WebFormProcessHandlers",
					OverwriteExistingRights = true,
					AdminUnitRightPropagationInfos = DefaultAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "WebFormData",
					OverwriteExistingRights = true,
					AdminUnitRightPropagationInfos = CreateAndReadAdminUnitRightInfos
				},
				new SchemaRightPropagationInfo {
					SchemaName = "FormSubmit",
					OverwriteExistingRights = false,
					AdminUnitRightPropagationInfos = AllowAllAdminUnitRightInfos
				}
			};
		}

		/// <summary>Executes package install script.</summary>
		/// <param name="userConnection">User connection.</param>
		public void Execute(UserConnection userConnection) {
			InternalExecute(userConnection, GetSchemaRightPropagationInfos());
		}
	}

	#endregion

	#region Class: AdminUnitRightPropagationInfo

	internal class AdminUnitRightPropagationInfo
	{
		public SchemaOperationRightLevels RightLevel { get; set; }
		public Guid AdminUnitId { get; set; }
	}

	#endregion

	#region Class: SchemaRightPropagationInfo

	internal class SchemaRightPropagationInfo
	{
		public string SchemaName { get; set; }
		public List<AdminUnitRightPropagationInfo> AdminUnitRightPropagationInfos { get; set; }
		public bool OverwriteExistingRights { get; set; }
	}

	#endregion

}
