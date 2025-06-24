namespace Terrasoft.Configuration.RightsService
{
	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using System.Security;
	using Terrasoft.Authentication.Contract;
	using Terrasoft.Authentication.Contract.Exceptions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Factories;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.OperationLog;
	using Terrasoft.Core.OrgStructure;
	using Terrasoft.Core.Store;

	#region Class: RightsHelper

	/// <summary>
	/// Class that provides a set of helper methods for working with rights.
	/// </summary>
	public class RightsHelper
	{

		#region Consts: Public

		public const string AllowedSspColumnsCacheKey = "AllowedSspSchemaColumns";

		#endregion

		#region Fields: Private

		private UserConnection _userConnection;
		private readonly Guid _systemAdministratorId = new Guid("83A43EBC-F36B-1410-298D-001E8C82BCAD");
		private readonly Guid _allEmployeesUsersId = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private readonly Guid _canUse2FaOperationId = new Guid("bce73552-ad5a-456e-925d-3c5129bb32ed");
		private readonly Lazy<ITwoFactorAuthorizationEngine> _twoFactorAuthorizationEngine =
			new Lazy<ITwoFactorAuthorizationEngine>(() => ClassFactory.Get<ITwoFactorAuthorizationEngine>());
		private readonly Lazy<IOrgStructureManager> _orgStructureManager =
			new Lazy<IOrgStructureManager>(() => ClassFactory.Get<IOrgStructureManager>());
		private readonly Lazy<IEntityFactory> _entityFactory =
			new Lazy<IEntityFactory>(() => ClassFactory.Get<IEntityFactory>());

		#endregion

		#region Constructors: Public

		public RightsHelper(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private void CheckSecondFactor(Guid adminOperationId, bool canExecute, Guid unitId) {
			bool isCheckedAdminUnit =
				_orgStructureManager.Value.GetUserHasOrgStructureRole(unitId, _systemAdministratorId)
					|| unitId == _allEmployeesUsersId
					|| unitId == _systemAdministratorId;
			if (adminOperationId == _canUse2FaOperationId && isCheckedAdminUnit && !canExecute) {
				_twoFactorAuthorizationEngine.Value.CheckAuth();
			}
		}

		private string GetRecordRightsSchemaDefName(string sourceSchema) {
			return sourceSchema.StartsWith("Sys") ?
				string.Concat(sourceSchema, "Right") : string.Concat("Sys", sourceSchema, "Right");
		}

		private void SetRecordPosition(string schemaName, Guid primaryColumnValue, int position) {
			SetCustomRecordPosition(schemaName, primaryColumnValue, "Operation,RecordId", position);
		}

		private IEnumerable<RecordRight> GetNonExistsRights(List<RecordRight> sourceRecordRights, string rightsSourceSchemaName, Guid targetId) {
			List<RecordRight> targetRecordRights = GetRecordRights(rightsSourceSchemaName, targetId.ToString());
			return sourceRecordRights.Where(s => {
				Guid sourceRightSysAdminUnitId = s.SysAdminUnit.value;
				return targetRecordRights.All(t => {
					Guid targetRightSysAdminUnitId = t.SysAdminUnit.value;
					return targetRightSysAdminUnitId != sourceRightSysAdminUnitId;
				});
			});
		}

		private Select GetPortalAccessColumnSelect() {
			return new Select(_userConnection)
						.Column("PortalSchemaAccessList", "AccessEntitySchemaName")
						.Column("PortalSchemaAccessList", "SchemaUId")
						.Column("PortalColumnAccessList", "ColumnUId")
					.From("PortalSchemaAccessList")
					.LeftOuterJoin("PortalColumnAccessList")
						.On("PortalColumnAccessList", "PortalSchemaListId")
						.IsEqual("PortalSchemaAccessList", "Id")
					.Where("PortalSchemaAccessList", "SchemaUId").Not().IsNull() as Select;
		}

		private Dictionary<string, List<Guid>> GetAllowedSspColumns() {
			var cachedColumns = _userConnection.ApplicationCache.WithLocalCaching()
						.GetValue<Dictionary<string, List<Guid>>>(AllowedSspColumnsCacheKey);
			if (cachedColumns != null) {
				return cachedColumns;
			}
			Select select = GetPortalAccessColumnSelect();
			Dictionary<string, List<Guid>> _allowedSspColumns = new Dictionary<string, List<Guid>>();
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						string schemaName = dataReader.GetColumnValue<string>("AccessEntitySchemaName");
						Guid columnUId = dataReader.GetColumnValue<Guid>("ColumnUId");
						if (_allowedSspColumns.ContainsKey(schemaName)) {
							_allowedSspColumns[schemaName].Add(columnUId);
						} else {
							_allowedSspColumns[schemaName] = new List<Guid> { columnUId };
						}
					}
				}
			}
			_userConnection.ApplicationCache.WithLocalCaching()
				.SetOrRemoveValue(AllowedSspColumnsCacheKey, _allowedSspColumns);
			return _allowedSspColumns;
		}

		private void CheckIsGranteeDeleteAllowed(Guid recordId) {
			IEntity entity = _entityFactory.Value.CreateEntity("SysAdminOperationGrantee");
			entity.FetchFromDB(recordId, false);
			var adminUnitId = entity.GetTypedColumnValue<Guid>("SysAdminUnitId");
			var operationId = entity.GetTypedColumnValue<Guid>("SysAdminOperationId");
			CheckSecondFactor(operationId, false, adminUnitId);
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Determines whether the schema has record right or not.
		/// </summary>
		/// <param name="schemaName">The name of the schema.</param>
		/// <param name="primaryColumnValue">Primary column value.</param>
		/// <param name="rightLevel">Right level.</param>
		/// <returns></returns>
		protected bool GetHasSchemaRecordRight(string schemaName, Guid primaryColumnValue,
				SchemaRecordRightLevels rightLevel) {
			var schemaRightLevel = GetSchemaRecordRightLevel(schemaName, primaryColumnValue);
			return (schemaRightLevel & rightLevel) == rightLevel;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// #########, ### ######## ############, 
		/// ########### ######### #### ####### # ########.
		/// ########## ###### # ####### JSON, # ########### ##########.
		/// </summary>
		/// <returns>C##### # ####### JSON. 
		/// ######## ############### ###### # ######:
		/// Success - ########## ########## ######,
		/// ExMessage - ##### ######, #### Success = false </returns>
		public string CheckCanChangeAdminOperationGrantee() {
			bool success = false;
			string exMessage = String.Empty;
			try {
				DBSecurityEngine engine = _userConnection.DBSecurityEngine;
				engine.CheckCanChangeAdminOperationGrantee();
				success = true;
			}
			catch (Exception ex) {
				if (ex is SecurityException) {
					exMessage = ex.Message;
				} else {
					exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper", 
						"LocalizableStrings.NonSecurityExeption.Value");
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}

		/// <summary>
		/// ###### ##### ####### ############ # ########.
		/// ########## ###### # ####### JSON, # ########### ##########.
		/// </summary>
		/// <param name="adminOperationId">Id ########</param>
		/// <param name="adminUnitIds">###### Id #############/#####</param>
		/// <param name="canExecute">###### # ########</param>
		/// <returns>C##### # ####### JSON. 
		/// ######## ############### ###### # ######:
		/// Success - ########## ########## ######,
		/// ExMessage - ##### ######, #### Success = false </returns>
		public string SetAdminOperationGrantee(Guid adminOperationId, Guid[] adminUnitIds, bool canExecute) {
			bool success = false;
			string exMessage = string.Empty;
			try {
				if (_userConnection.IsSystemOperationsRestricted) {
					throw new SystemOperationRestrictedException();
				}
				DBSecurityEngine engine = _userConnection.DBSecurityEngine;
				using (var dbExecutor = _userConnection.EnsureDBConnection()) {
					dbExecutor.StartTransaction();
					try {
						foreach (Guid unitId in adminUnitIds) {
							CheckSecondFactor(adminOperationId, canExecute, unitId);
							engine.SetAdminOperationGrantee(adminOperationId, unitId, canExecute);
						}
						dbExecutor.CommitTransaction();
					} catch (SecondFactorCodeRequiredException) {
						dbExecutor.RollbackTransaction();
						throw;
					}
				}
				success = true;
			}
			catch (Exception ex) {
				if (ex is SecurityException) {
					exMessage = ex.Message;
				} else {
					exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper", 
						"LocalizableStrings.NonSecurityExeption.Value");
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}

		/// <summary>
		/// ###### ####### ##### ####### ############ # ########.
		/// ########## ###### # ####### JSON, # ########### ##########.
		/// </summary>
		/// <param name="granteeId">############# ##### #######.</param>
		/// <param name="position">##### ######## #### #######.</param>
		/// <returns>C##### # ####### JSON. 
		/// ######## ############### ###### # ######:
		/// Success - ########## ########## ######,
		/// ExMessage - ##### ######, #### Success = false </returns>
		public string SetAdminOperationGranteePosition(Guid granteeId, int position) {
			bool success = false;
			string exMessage = string.Empty;
			try {
				DBSecurityEngine engine = _userConnection.DBSecurityEngine;
				engine.CheckCanChangeAdminOperationGrantee();
				SetCustomRecordPosition("SysAdminOperationGrantee", granteeId, "SysAdminOperationId", position);
				success = true;
			}
			catch (Exception ex) {
				if (ex is SecurityException) {
					exMessage = ex.Message;
				} else {
					exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper", 
						"LocalizableStrings.NonSecurityExeption.Value");
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}

		/// <summary>
		/// ####### ##### ####### # ########.
		/// ########## ###### # ####### JSON, # ########### ##########.
		/// </summary>
		/// <param name="recordIds">###### Id #### #######</param>
		/// <returns>C##### # ####### JSON. 
		/// ######## ############### ###### # ######:
		/// Success - ########## ########## ######,
		/// ExMessage - ##### ######, #### Success = false </returns>
		public string DeleteAdminOperationGrantee(Guid[] recordIds) {
			bool success = false;
			string exMessage = string.Empty;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				try {
					dbExecutor.StartTransaction();
					DBSecurityEngine engine = _userConnection.DBSecurityEngine;
					foreach (var recordId in recordIds) {
						CheckIsGranteeDeleteAllowed(recordId);
						engine.DeleteAdminOperationGrantee(recordId);
					}
					dbExecutor.CommitTransaction();
					success = true;
				} catch (Exception ex) {
					dbExecutor.RollbackTransaction();
					if (ex is SecurityException) {
						exMessage = ex.Message;
					} else {
						exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper",
							"LocalizableStrings.NonSecurityExeption.Value");
					}
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}

		/// <summary>
		/// Checks whether the current user has rights to change process execution grantee or not.
		/// </summary>
		public virtual void CheckCanChangeProcessExecutionGrantee() {
			DBSecurityEngine engine = _userConnection.DBSecurityEngine;
			engine.CheckCanChangeProcessSchemaGrantee();
		}

		/// <summary>
		/// Sets process execution grantees.
		/// </summary>
		/// <param name="processSchemaUId">Process schema unique identifier.</param>
		/// <param name="adminUnitIds">Enumerable of the admin unit identifiers.</param>
		/// <param name="canExecute">Determines whether can execute process or not.</param>
		public virtual void SetProcessExecutionGrantees(Guid processSchemaUId, IEnumerable<Guid> adminUnitIds,
				bool canExecute) {
			DBSecurityEngine engine = _userConnection.DBSecurityEngine;
			foreach (Guid adminUnitId in adminUnitIds) {
				engine.SetProcessSchemaExecutionGrantee(processSchemaUId, adminUnitId, canExecute);
			}
		}

		/// <summary>
		/// Sets process execution grantee position.
		/// </summary>
		/// <param name="processSchemaUId">Process schema unique identifier.</param>
		/// <param name="adminUnitId">Admin unit identifier.</param>
		/// <param name="position">New position value.</param>
		public virtual void SetProcessExecutionGranteePosition(Guid processSchemaUId, Guid adminUnitId, int position) {
			DBSecurityEngine engine = _userConnection.DBSecurityEngine;
			engine.SetProcessSchemaGranteePosition(processSchemaUId, adminUnitId, position);
		}

		/// <summary>
		/// Deletes process execution grantee.
		/// </summary>
		/// <param name="processSchemaUId">Process schema unique identifier.</param>
		/// <param name="adminUnitIds">Enumerable of the admin unit identifiers.</param>
		public virtual void DeleteProcessExecutionGrantees(Guid processSchemaUId, IEnumerable<Guid> adminUnitIds) {
			DBSecurityEngine engine = _userConnection.DBSecurityEngine;
			foreach (Guid adminUnitId in adminUnitIds) {
				engine.DeleteProcessSchemaExecutionGrantee(processSchemaUId, adminUnitId);
			}
		}

		/// <summary>
		/// Updates or inserts operation.
		/// </summary>
		/// <param name="recordId">Operation Id</param>
		/// <param name="name">Operation name</param>
		/// <param name="code">Operation code</param>
		/// <param name="description">Operation description</param>
		/// <returns>JSON-format string. 
		/// Includes serialized object whith fields:
		/// Success - the method is successfully executed.,
		/// ExMessage - string with error, if Success = false </returns>
		public string UpsertAdminOperation(Guid recordId, String name, String code, String description) {
			bool success = false;
			string exMessage = string.Empty;
			try {
				DBSecurityEngine engine = _userConnection.DBSecurityEngine;
				engine.CheckCanChangeAdminOperationGrantee();
				EntitySchema adminOperationTableSchema = _userConnection.EntitySchemaManager.GetInstanceByName("SysAdminOperation");
				Entity adminOperationEntity = adminOperationTableSchema.CreateEntity(_userConnection);
				if (!adminOperationEntity.FetchFromDB(recordId)) {
					adminOperationEntity.SetDefColumnValues();
				}
				adminOperationEntity.SetColumnValue("Id", recordId);
				adminOperationEntity.SetColumnValue("Name", name);
				adminOperationEntity.SetColumnValue("Code", code);
				adminOperationEntity.SetColumnValue("Description", description);
				adminOperationEntity.Save();
				success = true;
			}
			catch (Exception ex) {
				if (ex is SecurityException) {
					exMessage = ex.Message;
				} else {
					exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper", 
						"LocalizableStrings.NonSecurityExeption.Value");
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}

		/// <summary>
		/// Removes operations.
		/// Returns a string that is a JSON object representing execution result.
		/// </summary>
		/// <param name="recordIds">Array of operations identity</param>
		/// <returns>JSON-format string.
		/// Includes serialized object whith fields:
		/// Success - the method is successfully executed.,
		/// ExMessage - string with error, if Success = false </returns>
		public string DeleteAdminOperation(Guid[] recordIds) {
			bool success = false;
			string exMessage = string.Empty;
			try {
				DBSecurityEngine engine = _userConnection.DBSecurityEngine;
				engine.CheckCanChangeAdminOperationGrantee();
				EntitySchema adminOperationTableSchema = _userConnection.EntitySchemaManager.GetInstanceByName("SysAdminOperation");
				Entity adminOperationEntity = adminOperationTableSchema.CreateEntity(_userConnection);
				foreach (var recordId in recordIds) {
					if (adminOperationEntity.FetchFromDB("Id", recordId)) {
						adminOperationEntity.Delete();
					}
				}
				success = true;
			}
			catch (Exception ex) {
				if (ex is SecurityException) {
					exMessage = ex.Message;
				} else {
					exMessage = new LocalizableString(_userConnection.ResourceStorage, "RightsHelper", 
						"LocalizableStrings.NonSecurityExeption.Value");
				}
			}
			return JsonConvert.SerializeObject(new {
				Success = success,
				ExMessage = exMessage
			});
		}
		
		public SchemaOperationRightLevels GetSchemaOperationRightLevel(string schemaName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetEntitySchemaOperationsRightLevel(schemaName);
		}
		public bool GetCanAppendSchemaOperationRight(string schemaName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetIsEntitySchemaAppendingAllowed(schemaName);
		}
		public bool GetCanDeleteSchemaOperationRight(string schemaName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetIsEntitySchemaDeletingAllowed(schemaName);
		}
		public bool GetCanEditSchemaOperationRight(string schemaName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetIsEntitySchemaEditingAllowed(schemaName);
		}
		public bool GetCanReadSchemaOperationRight(string schemaName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetIsEntitySchemaReadingAllowed(schemaName);
		}
		public SchemaRecordRightLevels GetSchemaRecordRightLevel(string schemaName, Guid primaryColumnValue) {
			var securityEngine = _userConnection.DBSecurityEngine;
			var rightLevel = securityEngine.GetEntitySchemaRecordRightLevel(schemaName, primaryColumnValue);
			if (_userConnection.IsSystemOperationsRestricted) {
				rightLevel &= SchemaRecordRightLevels.CanRead | SchemaRecordRightLevels.CanEdit |
					SchemaRecordRightLevels.CanDelete;
			}
			return rightLevel;
		}
		
		public bool GetCanDeleteSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canDeleteRight = SchemaRecordRightLevels.CanDelete;
			bool canDeleteRecord = GetHasSchemaRecordRight(schemaName, primaryColumnValue, canDeleteRight);
			if (!canDeleteRecord) {
				OperationLogger.Instance.LogDeniedOperationDelete(_userConnection, schemaName);
			}
			return canDeleteRecord;
		}
		public bool GetCanChangeDeleteSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canDeleteRight = SchemaRecordRightLevels.CanChangeDeleteRight;
			bool canChangeDeleteRight = GetHasSchemaRecordRight(schemaName, primaryColumnValue, canDeleteRight);
			if (!canChangeDeleteRight) {
				OperationLogger.Instance.LogDeniedChangeSchemaRecordRightDelete(_userConnection, schemaName);
			}
			return canChangeDeleteRight;
		}
		
		public virtual bool GetCanReadSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canDeleteRight = SchemaRecordRightLevels.CanRead;
			return GetHasSchemaRecordRight(schemaName, primaryColumnValue, canDeleteRight);
		}

		public bool GetCanChangeReadSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canDeleteRight = SchemaRecordRightLevels.CanChangeReadRight;
			return GetHasSchemaRecordRight(schemaName, primaryColumnValue, canDeleteRight);
		}
		
		public bool GetCanEditSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canEditRight = SchemaRecordRightLevels.CanEdit;
			bool canEditRecord = GetHasSchemaRecordRight(schemaName, primaryColumnValue, canEditRight);
			if (!canEditRecord) {
				OperationLogger.Instance.LogDeniedOperationEdit(_userConnection, schemaName);
			}
			return canEditRecord;
		}
		public bool GetCanChangeEditRightSchemaRecordRight(string schemaName, Guid primaryColumnValue) {
			var canChangeEditRight = SchemaRecordRightLevels.CanChangeEditRight;
			bool canChangeEditRecordRight = GetHasSchemaRecordRight(schemaName, primaryColumnValue, canChangeEditRight);
			if (!canChangeEditRecordRight) {
				OperationLogger.Instance.LogDeniedChangeSchemaRecordRightEdit(_userConnection, schemaName);
			}
			return canChangeEditRecordRight;
		}

		public bool CheckCanEditColumn(string schemaName, string columnName) {
			var securityEngine = _userConnection.DBSecurityEngine;
			return securityEngine.GetIsEntitySchemaColumnEditingAllowed(schemaName, columnName);
		}

		/// <summary>
		/// Checks if column of schema allowed to read.
		/// </summary>
		/// <param name="schemaName">Schema name.</param>
		/// <param name="columnName">Column name.</param>
		/// <returns>True if allowed, otherwise - false.</returns>
		public virtual bool CheckCanReadColumn(string schemaName, string columnName) {
			return _userConnection.DBSecurityEngine.GetIsEntitySchemaColumnReadingAllowed(schemaName, columnName);
		}

		/// <summary>
		/// Apply changes in record rights.
		/// </summary>
		/// <param name="recordRights">Array of changes</param>
		/// <param name="record">Record information</param>
		public virtual void ApplyChanges(RecordRight[] recordRights, Record record) {
			if (_userConnection.IsSystemOperationsRestricted) {
				throw new SystemOperationRestrictedException();
			}
			var rightsSchemaName = GetRecordRightsSchemaDefName(record.entitySchemaName);
			var newItems = recordRights.Where(newItem => newItem.isNew == true).ToArray();
			var editedItems = recordRights.Where(editedItem => editedItem.isNew == false && editedItem.isDeleted == false).ToArray();
			var deletedItems = recordRights.Where(deletedItem => deletedItem.isDeleted == true).ToArray();
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				try {
					AddNewRecordRights(newItems, rightsSchemaName, record);
					UpdateRecordRights(editedItems, rightsSchemaName, record);
					DeleteRecordRights(deletedItems, record);
					dbExecutor.CommitTransaction();
				} catch (SecurityException) {
					dbExecutor.RollbackTransaction();
					throw;
				}
			}
		}

		/// <summary>
		/// Create new rights for record.
		/// </summary>
		/// <param name="recordRights">Array of new rights</param>
		/// <param name="rightsSchemaName">Rights entity schema name</param>
		/// <param name="record">Record information</param>
		public void AddNewRecordRights(RecordRight[] recordRights, string rightsSchemaName, Record record) {
			foreach(var item in recordRights) {
				var newRecordId = SetRecordRight(item.SysAdminUnit.value, record.entitySchemaName, record.primaryColumnValue, item.Operation, item.RightLevel);
				if (item.Position >= 0) {
					SetRecordPosition(rightsSchemaName, newRecordId, item.Position);
				}
			}
		}

		/// <summary>
		/// Update rights for record.
		/// </summary>
		/// <param name="recordRights">Array of changed rights</param>
		/// <param name="rightsSchemaName">Rights entity schema name</param>
		/// <param name="record">Record information</param>
		public void UpdateRecordRights(RecordRight[] recordRights, string rightsSchemaName, Record record) {
			foreach(var item in recordRights) {
				if (item.RightLevel >= 0) {
					SetRecordRight(item.SysAdminUnit.value, record.entitySchemaName, record.primaryColumnValue, item.Operation, item.RightLevel);
				}
				if (item.Position >= 0) {
					SetRecordPosition(rightsSchemaName, item.Id, item.Position);
				}
			}
		}

		/// <summary>
		/// Remove rights for record.
		/// </summary>
		/// <param name="recordRights">Array of removed rights</param>
		/// <param name="record">Record information</param>
		public void DeleteRecordRights(RecordRight[] recordRights, Record record) {
			foreach(var item in recordRights) {
				DeleteEntitySchemaRecordRightLevel(item.SysAdminUnit.value, item.Operation, record.entitySchemaName, new Guid(record.primaryColumnValue));
			}
		}
		
		public  List<RecordRight> GetRecordRights(string tableName, string recordId) {
			var result = new List<RecordRight>();
			var sysRecordRightsSelect = new Select(_userConnection)
				.Column("SysAdminUnit", "Id").As("SysAdminUnitId")
				.Column("SysAdminUnit", "Name").As("SysAdminUnitName")
				.Column("SysAdminUnitType", "Id").As("SysAdminUnitTypeId")
				.Column("SysEntitySchemaRecOprRightLvl", "Value").As("RightLevelValue")
				.Column(tableName, "Id")
				.Column(tableName, "Operation")
				.Column(tableName, "Position")
				.From(tableName)
				.InnerJoin("SysEntitySchemaRecOprRightLvl")
				.On(tableName, "RightLevel")
				.IsEqual("SysEntitySchemaRecOprRightLvl", "Value")
				.InnerJoin("SysAdminUnit")
				.On(tableName, "SysAdminUnitId")
				.IsEqual("SysAdminUnit", "Id")
				.InnerJoin("SysAdminUnitType")
				.On("SysAdminUnit", "SysAdminUnitTypeValue")
				.IsEqual("SysAdminUnitType", "Value")
				.Where(tableName, "RecordId")
				.IsEqual(Column.Parameter(recordId, _userConnection.DataValueTypeManager.GetInstanceByName("Guid")))
				.And("Position")
				.IsGreater(Column.Parameter(-1))
				.OrderByAsc(tableName, "Operation")
				.OrderByAsc(tableName, "Position") as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				using (var dr = sysRecordRightsSelect.ExecuteReader(dbExecutor)) {
					while (dr.Read()) {
						result.Add(new RecordRight {
							Id = _userConnection.DBTypeConverter.DBValueToGuid(dr["Id"]),
							SysAdminUnit = new SysAdminUnit {
								value = _userConnection.DBTypeConverter.DBValueToGuid(dr["SysAdminUnitId"]),
								displayValue = dr["SysAdminUnitName"].ToString()
							},
							SysAdminUnitType = _userConnection.DBTypeConverter.DBValueToGuid(dr["SysAdminUnitTypeId"]),
							Operation = _userConnection.DBTypeConverter.DBValueToInt(dr["Operation"]),
							RightLevel = _userConnection.DBTypeConverter.DBValueToInt(dr["RightLevelValue"]),
							Position = _userConnection.DBTypeConverter.DBValueToInt(dr["Position"])
						});
					}
				}
			}
			return result;
		}

		public virtual Guid SetRecordRight(Guid adminUnitId, string schemaName, string administratedRecordId,
			int operation, int rightLevel) {
			var useDenyRecordRights = _userConnection.EntitySchemaManager.GetInstanceByName(schemaName).UseDenyRecordRights;
			var rightId = _userConnection.DBSecurityEngine.SetEntitySchemaRecordRightLevel(adminUnitId, schemaName,
				Guid.Parse(administratedRecordId), (EntitySchemaRecordRightOperation)operation,
				(EntitySchemaRecordRightLevel)rightLevel, useDenyRecordRights);
			return rightId;
		}

		public virtual void SetCustomRecordPosition(string tableName, Guid primaryColumnValue, string grouppingColumnNames, int position) {
			var setRecordPositionProcedure = new StoredProcedure(_userConnection, "tsp_SetRecordPosition")
				.WithParameter("TableName", tableName)
				.WithParameter("PrimaryColumnName", "Id")
				.WithParameter("PrimaryColumnValue", primaryColumnValue)
				.WithParameter("GrouppingColumnNames", grouppingColumnNames)
				.WithParameter("Position", position) as StoredProcedure;
			setRecordPositionProcedure.PackageName = _userConnection.DBEngine.SystemPackageName;
			setRecordPositionProcedure.Execute();
		}

		public virtual void DeleteEntitySchemaRecordRightLevel(Guid adminUnitId, int operation, string recordSchemaName, Guid primaryColumnValue) {
			var rightsSchemaName = GetRecordRightsSchemaDefName(recordSchemaName);
			var entitySchemaRecordRightOperation = (EntitySchemaRecordRightOperation)operation;
			SchemaRecordRightLevels currentUserRecordRightLevel =
				_userConnection.DBSecurityEngine.GetEntitySchemaRecordRightLevel(recordSchemaName, primaryColumnValue);
			if (!_userConnection.DBSecurityEngine.GetCanExecuteOperation("CanChangeEntitySchemaRecordRight")) {
				if ((entitySchemaRecordRightOperation == EntitySchemaRecordRightOperation.Read &&
						!(currentUserRecordRightLevel.HasFlag(SchemaRecordRightLevels.CanChangeReadRight))) ||
					(entitySchemaRecordRightOperation == EntitySchemaRecordRightOperation.Edit &&
						!currentUserRecordRightLevel.HasFlag(SchemaRecordRightLevels.CanChangeEditRight)) ||
					(entitySchemaRecordRightOperation == EntitySchemaRecordRightOperation.Delete &&
						!currentUserRecordRightLevel.HasFlag(SchemaRecordRightLevels.CanChangeDeleteRight))) {
					throw new SecurityException(string.Format(new LocalizableString("Terrasoft.Core",
							"DBSecurityEngine.Exception.NoDistributingMoreRightsFor.RecordThanYouHave"),
						recordSchemaName));
				}
			}
			_userConnection.DBSecurityEngine.ForceDeleteEntitySchemaRecordRightLevel(adminUnitId,
				entitySchemaRecordRightOperation, recordSchemaName, primaryColumnValue);
		}

		/// <summary>
		/// Copies access rights from one source schema record to another target schema record.
		/// </summary>
		/// <param name="sourceSchemaName">Name of the schema where source record should be.</param>
		/// <param name="sourceId">Identifier of the record which access rights will be copied from.</param>
		/// <param name="targetSchemaName">Name of the schema where the destination record should be.</param>
		/// <param name="targetId">Identifier of the record where access rights will be copied to.</param>
		/// <param name="options">Optional copy options</param>
		public virtual void CopyRecordRights(string sourceSchemaName, Guid sourceId, string targetSchemaName, Guid targetId,
				CopyRightsOptions options = null) {
			sourceSchemaName.CheckArgumentNullOrEmpty("sourceSchemaName");
			targetSchemaName.CheckArgumentNullOrEmpty("targetSchemaName");
			options = options ?? new CopyRightsOptions();
			sourceId.CheckArgumentEmpty("sourceId");
			targetId.CheckArgumentEmpty("targetId");
			string rightsSourceSchemaName = GetRecordRightsSchemaDefName(sourceSchemaName);
			List<RecordRight> sourceRecordRights = GetRecordRights(rightsSourceSchemaName, sourceId.ToString());
			IEnumerable<RecordRight> recordRightsToApply = options.Overwrite
				? sourceRecordRights
				: GetNonExistsRights(sourceRecordRights, rightsSourceSchemaName, targetId);
			var record = new Record {
				entitySchemaName = targetSchemaName,
				primaryColumnValue = targetId.ToString()
			};
			ApplyChanges(recordRightsToApply.ToArray(), record);
		}

		/// <summary>
		/// Copies access rights from a source record to a target record in one schema.
		/// </summary>
		/// <param name="schemaName">Name of the schema where the source and the destination records should be.</param>
		/// <param name="sourceId">Identifier of the record which access rights will be copied from.</param>
		/// <param name="targetId">Identifier of the record where access rights will be copied to.</param>
		/// <param name="copyRightsOptions">Optional copy options</param>
		public virtual void CopyRecordRights(string schemaName, Guid sourceId, Guid targetId, CopyRightsOptions copyRightsOptions = null) {
			CopyRecordRights(schemaName, sourceId, schemaName, targetId, copyRightsOptions);
		}

		/// <summary>
		/// Gets available ssp schema columns by given schema name.
		/// </summary>
		/// <param name="schemaName">Entity schema name.</param>
		/// <returns>List of ssp available schema columns.</returns>
		public virtual List<string> GetSspSchemaAccessColumns(string schemaName) {
			var allowedColumns = GetAllowedSspColumns();
			if (allowedColumns.TryGetValue(schemaName, out List<Guid> schemaColumnsUId)) {
				var schema = _userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
				return schema.Columns.Where(c => schemaColumnsUId.Contains(c.UId)).Select(c => c.Name).ToList();
			}
			return new List<string>();
		}

		#endregion

	}

	#endregion

	#region Class: Record

	public class Record
	{

		#region Properties: Public

		public string entitySchemaName { get; set; }
		public string entitySchemaCaption { get; set; }
		public string primaryColumnValue { get; set; }
		public string primaryDisplayColumnValue { get; set; }

		#endregion

	}

	#endregion

	#region Class: RecordRight

	public class RecordRight
	{

		#region Properties: Public

		public Guid Id { get; set; }
		public Guid SysAdminUnitType { get; set; }
		public SysAdminUnit SysAdminUnit { get; set; }
		public int Operation { get; set; }
		public int RightLevel { get; set; }
		public int Position { get; set; }
		public bool isNew { get; set; }
		public bool isDeleted { get; set; }

		#endregion

		#region Constructors: Public

		public RecordRight() {
			RightLevel = -1;
			Position = -1;
		}

		#endregion

	}

	#endregion

	#region Class: SysAdminUnit

	public class SysAdminUnit
	{

		#region Properties: Public

		public Guid value { get; set; }
		public string displayValue { get; set; }

		#endregion

	}

	#endregion

	#region Class: RightLevel

	public class RightLevel
	{

		#region Properties: Public

		public string Name { get; set; }
		public int Value { get; set; }

		#endregion

	}

	#endregion

	#region Class: CopyRightsOptions

	public class CopyRightsOptions
	{

		#region Properties: Public

		public bool Overwrite { get; set; } = true;

		#endregion

	}

	#endregion

}

