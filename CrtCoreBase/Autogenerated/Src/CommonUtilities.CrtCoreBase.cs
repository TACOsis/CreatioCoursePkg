namespace Terrasoft.Configuration
{
	using System;
	using System.Text;
	using System.Collections.Generic;
	using System.Globalization;
	using System.Linq;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Profiles;
	using Terrasoft.Core.Store;
	using Terrasoft.Nui.ServiceModel.Extensions;
	using Terrasoft.Core.Factories;
	using Terrasoft.Configuration.FileUpload;
	using System.IO;
	using System.Text.RegularExpressions;

	public static class CommonUtilities 
	{

		#region Fields: Private

		private static readonly string dataKey;

		private static readonly string oldLczTableNameSuffix;

		#endregion

		#region Fields: Public

		#endregion

		#region Constructors: Public

		static CommonUtilities() {
			dataKey = "__internaldatakey";
			oldLczTableNameSuffix = "Old";
		}

		#endregion

		#region Properties: Private

		/// <summary>
		/// Multilingual support.
		/// </summary>
		public static bool UseMultilanguageData {
			get {
				return true;
			}
		}

		#endregion

		#region Methods: Private

		private static IsNullQueryFunction GetLczColumnQueryFunction(string lczTableName, string lczTableColumnName,
				string mainTableName, string mainTableColumnName) {
			QueryColumnExpression lczTableColumnExpression = Column.SourceColumn(lczTableName, lczTableColumnName);
			QueryColumnExpression mainTableColumnExpression = Column.SourceColumn(mainTableName, mainTableColumnName);
			return Func.IsNull(lczTableColumnExpression, mainTableColumnExpression);
		}

		private static bool IsFilterRightExressionsEmpty(EntitySchemaQueryFilter filter) {
			EntitySchemaQueryExpressionCollection rightExpressions = filter.RightExpressions;
			bool isEmpty = (rightExpressions.Count == 0 && filter.ComparisonType != FilterComparisonType.IsNull &&
				filter.ComparisonType != FilterComparisonType.IsNotNull);
			if (!isEmpty && rightExpressions.Count == 1) {
				EntitySchemaQueryExpression rightExpression = rightExpressions[0];
				DataValueType expressionType = rightExpression.ParameterValueForcedType;
				isEmpty = (expressionType is TextDataValueType || expressionType is DateTimeDataValueType)
					&& (rightExpression.ParameterValue == null)
					&& (rightExpression.ExpressionType == EntitySchemaQueryExpressionType.Parameter);
			}
			
			return isEmpty;
		}

		private static void DisableEmptyFilters<T>(IEnumerable<T> filters)
				where T : Nui.ServiceModel.DataContract.Filter {
			foreach (var filter in filters) {
				if (!filter.IsEnabled) {
					continue;
				}
				switch (filter.FilterType) {
					case Terrasoft.Nui.ServiceModel.DataContract.FilterType.FilterGroup:
						DisableEmptyFilters(filter.Items.Values);
						break;
					case Terrasoft.Nui.ServiceModel.DataContract.FilterType.Exists:
						DisableEmptyFilters(new[] { filter.SubFilters });
						break;
					case Terrasoft.Nui.ServiceModel.DataContract.FilterType.CompareFilter:
						DisableEmptyCompareFilter(filter);
						break;
					case Terrasoft.Nui.ServiceModel.DataContract.FilterType.InFilter:
						if (filter.RightExpressions == null ||
								filter.RightExpressions.Count() == default(int)) {
							filter.IsEnabled = false;
						}
						break;
				}
			}
		}

		private static void DisableEmptyCompareFilter(Nui.ServiceModel.DataContract.Filter filter) {
			if (filter.LeftExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
				DisableEmptyFilters(new[] { filter.LeftExpression.SubFilters });
			}

			if (filter.RightExpression == null) {
				filter.IsEnabled = false;
				return;
			}

			var rightExpression = filter.RightExpression;
			if (rightExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
				DisableEmptyFilters(new[] { rightExpression.SubFilters });
				return;
			}

			if (rightExpression.ExpressionType != EntitySchemaQueryExpressionType.Parameter) {
				return;
			}

			if (rightExpression.Parameter?.Value == null 
				|| (rightExpression.Parameter.Value is string value && String.IsNullOrEmpty(value))) {
				filter.IsEnabled = false;
			}
		}

		/// <summary>
		/// Deserialize <see cref="Nui.ServiceModel.DataContract.Filters"/>.
		/// </summary>
		/// <param name="filterEditData">Search data of the client filters.</param>
		/// <returns><see cref="Nui.ServiceModel.DataContract.Filters"/> instance.</returns>
		private static Nui.ServiceModel.DataContract.Filters DeserializeFilters(byte[] filterEditData) {
			string serializedFilters = Encoding.UTF8.GetString(filterEditData, 0, filterEditData.Length);
			var dataSourceFilters = Json.Deserialize<Nui.ServiceModel.DataContract.Filters>(serializedFilters);
			return dataSourceFilters;
		}

		public static void AddLczTableJoin(UserConnection userConnection, Guid cultureId, Select select, string schemaName,
				string mainTableAlias, string referencePath, string columnName, string lczTableAliasName, bool useInnerJoin) {
			var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			string lczTableName = schema.GetLocalizableStringsSchemaName();
			if (useInnerJoin) {
				select.InnerJoin(lczTableName).As(lczTableAliasName)
					.On(lczTableAliasName, "RecordId").IsEqual(mainTableAlias, referencePath)
					.And(lczTableAliasName, "SysCultureId").IsEqual(new QueryParameter(cultureId));
			} else {
				select.LeftOuterJoin(lczTableName).As(lczTableAliasName)
					.On(lczTableAliasName, "RecordId").IsEqual(mainTableAlias, referencePath)
					.And(lczTableAliasName, "SysCultureId").IsEqual(new QueryParameter(cultureId));
			}
			if (!UseMultilanguageData) {
				Guid columnUId = schema.Columns.GetByName(columnName).UId;
				select.And(lczTableAliasName, "ColumnUId").IsEqual(new QueryParameter(columnUId));
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns collection of the folder filters.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="Terrasoft.Core.UserConnection"/>.</param>
		/// <param name="searchData">SearchData of the folder.</param>
		/// <param name="entitySchemaUId">Unique identifier of the source filters schema.</param>
		/// <returns><see cref="IEntitySchemaQueryFilterItem"/> Filters collection.</returns>
		[Obsolete("7.12.3 | Use ConvertClientFilterDataToEsqFilters instead")]
		public static IEntitySchemaQueryFilterItem ConvertFolderSearchDataToEsqFiler(
				UserConnection userConnection, byte[] searchData, Guid entitySchemaUId) {
			return ConvertClientFilterDataToEsqFilters(userConnection, searchData, entitySchemaUId);
		}

		/// <summary>
		/// Converts client-based filter search data to collection of the server filters.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="Terrasoft.Core.UserConnection"/>.</param>
		/// <param name="filterEditData">Search data of the client filters.</param>
		/// <param name="entitySchemaUId">Unique identifier of the source filters schema.</param>
		/// /// <param name="schemaAliasPrefix">Alias prefix for schemas used in the built filters.</param>
		/// <returns><see cref="IEntitySchemaQueryFilterItem"/> Server-based filter collection.</returns>
		public static IEntitySchemaQueryFilterItem ConvertClientFilterDataToEsqFilters(
				UserConnection userConnection, byte[] filterEditData, Guid entitySchemaUId,
				string schemaAliasPrefix = null) {
			var dataSourceFilters = DeserializeFilters(filterEditData);
			return dataSourceFilters.BuildEsqFilter(entitySchemaUId, userConnection, schemaAliasPrefix);
		}

		/// <summary>
		/// Returns collection of the folder filters.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="Terrasoft.Core.UserConnection"/>.</param>
		/// <param name="recordId">Unique identifier of the folder.</param>
		/// <param name="folderSchemaUId">Unique identifier of the folder schema.</param>
		/// <param name="sourceSchemaUId">Unique identifier of the source filters schema.</param>
		/// <param name="disableEmptyFilters">Determines whether to disable empty filters or not.</param>
		/// <returns><see cref="IEntitySchemaQueryFilterItem"/> filters collection.</returns>
		public static IEntitySchemaQueryFilterItem GetFolderEsqFilters(
				UserConnection userConnection, Guid recordId, Guid folderSchemaUId, Guid sourceSchemaUId,
				bool disableEmptyFilters = false) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			EntitySchema sourceSchema = entitySchemaManager.GetInstanceByUId(sourceSchemaUId);
			return GetFolderEsqFilters(userConnection, recordId, folderSchemaUId, sourceSchema.Name, disableEmptyFilters);
		}

		/// <summary>
		/// Returns collection of the folder filters.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="Terrasoft.Core.UserConnection"/>.</param>
		/// <param name="recordId">Unique identifier of the folder.</param>
		/// <param name="folderSchemaUId">Unique identifier of the folder schema.</param>
		/// <param name="sourceSchemaName">Name of the source filters schema.</param>
		/// <param name="disableEmptyFilters">Determines whether to disable empty filters or not.</param>
		/// <returns><see cref="IEntitySchemaQueryFilterItem"/> filters collection.</returns>
		public static IEntitySchemaQueryFilterItem GetFolderEsqFilters(
				UserConnection userConnection, Guid recordId, Guid folderSchemaUId, string sourceSchemaName,
				bool disableEmptyFilters = false) {
			byte[] searchData = GetFolderSearchData(userConnection, recordId, folderSchemaUId);
			if (searchData?.IsEmpty() != false) {
				return null;
			}

			var disableEmptyFilterBeforeBuildEsq = userConnection.GetIsFeatureEnabled("DisableEmptyFilterBeforeBuildEsq");
			var filters = DeserializeFilters(searchData);
			if (disableEmptyFilters && disableEmptyFilterBeforeBuildEsq) {
				DisableEmptyFilters(new[] { filters });
			}

			var selectQuery = new Terrasoft.Nui.ServiceModel.DataContract.SelectQuery {
				RootSchemaName = sourceSchemaName,
				Filters = filters
			};
			var esq = selectQuery.BuildEsq(userConnection);
			esq.GetSelectQuery(userConnection);
			EntitySchemaQueryFilterCollection esqFilters = esq.Filters;
			if (disableEmptyFilters && !disableEmptyFilterBeforeBuildEsq) {
				DisableEmptyEntitySchemaQueryFilters(esqFilters);
			}
			return esqFilters;
		}

		/// <summary>
		/// Returns SearchData of the folder.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="Terrasoft.Core.UserConnection"/>.</param>
		/// <param name="recordId">Unique identifier of the folder.</param>
		/// <param name="folderSchemaUId">Unique identifier of the folder schema.</param>
		/// <returns>Search data.</returns>
		public static byte[] GetFolderSearchData(UserConnection userConnection, Guid recordId, Guid folderSchemaUId) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			EntitySchema schema = entitySchemaManager.GetInstanceByUId(folderSchemaUId);
			var esq = new EntitySchemaQuery(schema);
			string searchDataColumnName = esq.AddColumn("SearchData").Name;
			esq.Filters.Add(
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, false, "Id", recordId));
			EntityCollection entities = esq.GetEntityCollection(userConnection);
			if (!entities.Any()) {
				return null;
			}
			Entity folderEntity = entities.First();
			return folderEntity.GetBytesValue(searchDataColumnName);
		}

		/// <summary>
		/// Disables empty entries in the filters collection.
		/// </summary>
		/// <param name="queryFilterCollection">Filters collection.</param>
		public static void DisableEmptyEntitySchemaQueryFilters(
				IEnumerable<IEntitySchemaQueryFilterItem> queryFilterCollection) {
			foreach (var item in queryFilterCollection) {
				var filter = item as EntitySchemaQueryFilter;
				if (filter != null) {
					if (IsFilterRightExressionsEmpty(filter)) {
						filter.IsEnabled = false;
						continue;
					}
					if (filter.LeftExpression != null &&
							filter.LeftExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
						DisableEmptyEntitySchemaQueryFilters(filter.LeftExpression.SubQuery.Filters);
					}
					foreach (var rightExpression in filter.RightExpressions) {
						if (rightExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
							DisableEmptyEntitySchemaQueryFilters(rightExpression.SubQuery.Filters);
						}
					}
				} else {
					DisableEmptyEntitySchemaQueryFilters((EntitySchemaQueryFilterCollection)item);
				}
			}
		}

		public static bool IsDemoBuild(UserConnection userConnection) {
			object isDemoBuild = null;
			if (Terrasoft.Core.Configuration.SysSettings.TryGetValue(userConnection, "ShowDemoLinks", out isDemoBuild)) {
				return (bool)isDemoBuild;
			}
			return false;
		}

		public static void WriteProfileData(UserConnection userConnection, Guid objectId, string key, object value) {
			ProfileManager profileManager = userConnection.ProfileManager;
			var profileData = new ProfileData {
				UId = objectId
			};
			var profileItem = new ProfileDataItem();
			profileItem.Values.Add(dataKey, value);
			profileData.Items.Add(dataKey, profileItem);
			profileManager.SaveProfile(userConnection, profileData, key);
		}

		public static object ReadProfileData(UserConnection userConnection, Guid objectId, string key) {
			var profileManager = userConnection.ProfileManager;
			var profileData = new ProfileData {
				UId = objectId
			};
			profileManager.ApplyProfile(userConnection, profileData, key);
			ProfileDataItem dataItem;
			object value;
			if (profileData.Items.TryGetValue(dataKey, out dataItem)) {
				if (dataItem.Values.TryGetValue(dataKey, out value)) {
					return value;
				}
			}
			return null;
		}

		public static void DeleteProfileData(UserConnection userConnection, Guid objectId, string keyPattern) {
			var delete = new Delete(userConnection)
				.From("SysProfileData")
				.Where("Key").ConsistsWith(Column.Parameter(keyPattern)).And("ObjectId").IsEqual(Column.Parameter(objectId));
			using (var dbExecutor = userConnection.EnsureDBConnection()) {
				delete.Execute(dbExecutor);
			}
		}

		public static void CompileEntitySchema(UserConnection userConnection, EntitySchema schema, bool runDBMetaScript) {
			var schemaUId = schema.UId;
			var appConnection = userConnection.AppConnection;
			userConnection.EntitySchemaManager.SaveSchema(schemaUId, userConnection);
			if (runDBMetaScript) {
				var dBMetaActionManager = userConnection.UserManagerProvider.GetManager("DBMetaActionManager") as DBMetaActionManager;
				var dbMetaScript = userConnection.DBMetaScript;
				var actions = dBMetaActionManager.GetEntitySchemaActions(schemaUId) ?? new DBMetaActionCollection(userConnection);
				dbMetaScript.AddEntitySchemaSavingActions(actions, schema);	
				dbMetaScript.ExecuteActions(actions);
			}
		}

#if NETFRAMEWORK && OldUI // TODO CRM-44431
		[Obsolete("7.13.4 | Method is not in use and will be removed in upcoming builds")]
		public static EntitySchemaQueryFilterCollection DeserializeFilters(string serializedString, string schemaName,
				UserConnection userConnection) {
			if (string.IsNullOrEmpty(serializedString)) {
				return null;
			}
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			var dataSource = new Terrasoft.UI.WebControls.Controls.EntityDataSource();
			dataSource.SchemaUId = schema.UId;
			Terrasoft.UI.WebControls.Utilities.EntityDataSourceUtilities.InitializeAutoDefStructure(dataSource);
			var jsonConverter = new Terrasoft.UI.WebControls.Utilities.Json.Converters.DataSourceFiltersJsonConverter(userConnection, dataSource) {
				PreventRegisteringClientScript = true
			};
			var filters = JsonConvert.DeserializeObject<Terrasoft.UI.WebControls.Controls.DataSourceFilterCollection>(serializedString, jsonConverter);
			dataSource.CurrentStructure.Filters.Add(filters);
			return dataSource.CurrentStructure.Filters.ToEntitySchemaQueryFilterCollection(null);
		}
#endif

		public static string GetLocalizableStringsSchemaName(this EntitySchema schema) {
			string lczTableName = schema.LocalizationSchemaName;
			return UseMultilanguageData ? lczTableName : string.Concat(lczTableName, oldLczTableNameSuffix);
		}

		public static EntitySchema GetLocalizableStringsSchema(this EntitySchema schema) {
			return schema.EntitySchemaManager.GetInstanceByName(schema.GetLocalizableStringsSchemaName());
		}

		public static Dictionary<Guid, string> GetCulturesNames(UserConnection userConnection) {
			var entitySchemaManager = userConnection.EntitySchemaManager;
			var entitySchemaQuery = new EntitySchemaQuery(entitySchemaManager, "SysCulture");
			var idColumn = entitySchemaQuery.AddColumn("Id");
			var nameColumn = entitySchemaQuery.AddColumn("Name");
			entitySchemaQuery.Cache = userConnection.ApplicationCache.WithLocalCaching(Terrasoft.Configuration.CacheUtilities.CulturesCacheGroup);
			var entityCollection = entitySchemaQuery.GetEntityCollection(userConnection);
			var result = new Dictionary<Guid, string>();
			foreach (Entity entity in entityCollection) {
				result[entity.GetTypedColumnValue<Guid>(idColumn.Name)] = entity.GetTypedColumnValue<string>(nameColumn.Name);
			}
			return result;
		}

		public static string GetLczAliasName(string aliasObjectName, string cultureName) {
			var lczAliasName = string.Concat(aliasObjectName, "_", cultureName.Replace("-", ""), "_lcz");
			return lczAliasName.GetHexHashCode();
		}

		public static string GetLczColumnName(this UserConnection userConnection, string schemaName, string columnName) {
			return GetLczAliasName(string.Concat(schemaName, columnName), userConnection.CurrentUser.Culture.Name);
		}

		public static void AddLczColumns(UserConnection userConnection, Select select, string schemaName,
			string schemaAlias, string referencePath, string columnName, bool useInnerJoin = true) {
			SysUserInfo currentUser = userConnection.CurrentUser;
			Guid currentCultureId = currentUser.SysCultureId;
			string currentCultureName = currentUser.SysCultureName;
			AddLczColumn(userConnection, currentCultureId, currentCultureName, select, schemaName, schemaAlias,
				referencePath, columnName, useInnerJoin);
		}

		public static void AddLczColumn(UserConnection userConnection, Guid cultureId, string cultureName,
				Select select, string schemaName, string schemaAlias, string referencePath, string columnName,
				bool useInnerJoin = true, string columnAlias = null, string tableAlias = null) {
			string lczTableAliasName = string.IsNullOrEmpty(tableAlias)
				? GetLczAliasName(schemaName, cultureName)
				: tableAlias;
			string lczColumnAliasName = string.IsNullOrEmpty(columnAlias)
				? GetLczAliasName(string.Concat(schemaName, columnName), cultureName)
				: columnAlias;
			string lczColumnName = UseMultilanguageData ? columnName : "Value";
			IsNullQueryFunction lczColumnQueryFunction = GetLczColumnQueryFunction(lczTableAliasName, lczColumnName,
				schemaAlias, columnName);
			select.Column(lczColumnQueryFunction).As(lczColumnAliasName);
			AddLczTableJoin(userConnection, cultureId, select, schemaName, schemaAlias, referencePath, columnName,
				lczTableAliasName, useInnerJoin);
		}

		public static void AddRelatedColumn(UserConnection userConnection, Select select, string mainTableAlias, string referencePath,
				string schemaName, string columnName, string lczColumnAliasName, string lczTableAliasName) {
			var schema = userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			bool isLocalizable = schema.Columns.GetByName(columnName).IsLocalizable;
			if (isLocalizable) {
				string originSchemaAliasName = "Origin" + lczTableAliasName;
				select.LeftOuterJoin(schemaName).As(originSchemaAliasName).On(originSchemaAliasName, "Id").IsEqual(mainTableAlias, referencePath);
				Guid cultureId = userConnection.CurrentUser.SysCultureId;
				string lczColumnName = UseMultilanguageData ? columnName : "Value";
				IsNullQueryFunction lczColumnQueryFunction = GetLczColumnQueryFunction(lczTableAliasName, lczColumnName,
					originSchemaAliasName, columnName);
				select.Column(lczColumnQueryFunction).As(lczColumnAliasName);
				AddLczTableJoin(userConnection, cultureId, select, schemaName, mainTableAlias, referencePath, columnName,
					lczTableAliasName, false);
			} else {
				select.LeftOuterJoin(schemaName).As(lczTableAliasName).On(lczTableAliasName, "Id").IsEqual(mainTableAlias, referencePath);
				select.Column(lczTableAliasName, columnName).As(lczColumnAliasName);
			}
		}

		public static List<Dictionary<string, object>> GetSelectData(UserConnection userConnection, Func<UserConnection, Select> getSelect, ICacheStore cache, string cacheItemName) {
			var result = cache[cacheItemName] as List<Dictionary<string, object>>;
			if (result == null || !result.Any()) {
				result = new List<Dictionary<string, object>>();
				var select = getSelect(userConnection);
				using (var dbExecutor = userConnection.EnsureDBConnection()) {
					using (var reader = select.ExecuteReader(dbExecutor)) {
						while (reader.Read()) {
							var row = new Dictionary<string, object>();
							foreach (var column in select.Columns) {
								int ordinal = reader.GetOrdinal(column.Alias);
								var columnValue = reader.GetValue(ordinal);
								row[column.Alias] = columnValue;
							}
							result.Add(row);
						}
					}
				}
				cache[cacheItemName] = result;
			}
			return result;
		}

		public static Select GetModuleTabSelect(UserConnection userConnection) {
			var select =
				new Select(userConnection)
					.Column("SysModuleInSysModuleFolder", "Id").As("itemId")
					.Column("SysModuleInSysModuleFolder", "SysModuleFolderId").As("sysModuleFolderId")
					.Column("SysModuleInSysModuleFolder", "SysModuleId").As("sysModuleId")
					.Column("SubSysModuleFolder", "Id").As("subSysModuleFolderId")
					.Column("SysModule", "SysPageSchemaUId").As("sysModulePageSchemaId")
					.Column("SysModuleEntity", "SysEntitySchemaUId").As("sysModuleEntitySchemaId")
					.Column("s", "Id").As("EntityId")
				.From("SysModuleInSysModuleFolder")
				.LeftOuterJoin("SysModuleFolder").As("SubSysModuleFolder").On("SubSysModuleFolder", "Id").IsEqual("SysModuleInSysModuleFolder", "SubSysModuleFolderId")
				.LeftOuterJoin("SysModule").As("SysModule").On("SysModule", "Id").IsEqual("SysModuleInSysModuleFolder", "SysModuleId")
				.LeftOuterJoin("SysModuleEntity").As("SysModuleEntity").On("SysModuleEntity", "Id").IsEqual("SysModule", "SysModuleEntityId")
				.LeftOuterJoin("VwSysSchemaInWorkspace").As("s").On("s", "UId").IsEqual("SysModuleEntity", "SysEntitySchemaUId").And("s", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id))
				.Where()
					.OpenBlock("SysModule", "Code").IsNotEqual(new QueryParameter("SysWorkspace"))
						.Or("SysModule", "Code").IsNull()
					.CloseBlock()
					.And("SubSysModuleFolder", "Id").IsNull()
					.And("s", "Id").Not().IsNull()
					.Or("SubSysModuleFolder", "Id").Not().IsNull()
					.And("SubSysModuleFolder", "Location").IsEqual(new QueryParameter("NUI"))
				.OrderByAsc("SysModuleInSysModuleFolder", "Position") as Select;
			if (UseMultilanguageData && GeneralResourceStorage.DefCulture == GeneralResourceStorage.CurrentCulture) {
				string moduleCaptionColumnName = GetLczColumnName(userConnection, "SysModule", "Caption");
				string moduleFolderCaptionColumnName = GetLczColumnName(userConnection, "SysModuleFolder", "Caption");
				select.Column("SysModule", "Caption").As(moduleCaptionColumnName);
				select.Column("SubSysModuleFolder", "Caption").As(moduleFolderCaptionColumnName);
			} else {
				AddLczColumns(userConnection, select, "SysModule", "SysModule", "Id", "Caption", false);
				AddLczColumns(userConnection, select, "SysModuleFolder", "SubSysModuleFolder", "Id", "Caption", false);
			}
			return select;
		}

		public static Select GetGlobalSearchModuleSelect(UserConnection userConnection) {
			var select = new Select(userConnection).Distinct()
					.Column("SysModule", "Id").As("sysModuleId")
					.Column("SysModuleEntity", "SysEntitySchemaUId").As("sysEntitySchemaId")
				.From("SysModule").As("SysModule")
				.LeftOuterJoin("SysModuleEntity").As("SysModuleEntity").On("SysModuleEntity", "Id").IsEqual("SysModule", "SysModuleEntityId")
				.InnerJoin("SysModuleInSysModuleFolder").As("SysModuleInSysModuleFolder").On("SysModuleInSysModuleFolder", "SysModuleId").IsEqual("SysModule", "Id")
				.InnerJoin("VwSysSchemaInWorkspace").As("s").On("s", "UId").IsEqual("SysModuleEntity", "SysEntitySchemaUId").And("s", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id.ToString()))
				.Where("SysModule", "GlobalSearchAvailable").IsEqual(new QueryParameter(true)) as Select;
			AddLczColumns(userConnection, select, "SysModule", "SysModule", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleEditsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
				.Column("SysModuleEntity", "SysEntitySchemaUId").As("SysEntitySchemaUId")
				.Column("SysModuleEdit", "Id").As("SysModuleEdit.Id")
				.Column("SysModuleEntity", "TypeColumnUId").As("TypeColumnUId")
				.Column("SysModuleEdit", "TypeColumnValue").As("SysModuleEdit.TypeColumnValue")
				.Column("SysModuleEdit", "SysPageSchemaUId").As("sysModuleEditSysPageSchemaUId")
				.Column("SysModule", "Id").As("sysModuleId")
				.Column("s", "Id").As("schemaId")
			.From("SysModuleEntity").As("SysModuleEntity")
			.InnerJoin("SysModuleEdit").As("SysModuleEdit").On("SysModuleEdit", "SysModuleEntityId").IsEqual("SysModuleEntity", "Id")
			.LeftOuterJoin("SysModule").As("SysModule").On("SysModule", "SysModuleEntityId").IsEqual("SysModuleEntity", "Id")
			.LeftOuterJoin("VwSysSchemaInWorkspace").As("s").On("s", "UId").IsEqual("SysModuleEntity", "SysEntitySchemaUId").And("s", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id))
			.Where("s", "Id").Not().IsNull()
				.And("SysModule", "Id").Not().IsNull()
				.And("SysModule", "GlobalSearchAvailable").IsEqual(new QueryParameter(1)) as Select;
			return select;
		}

		public static Select GetModuleDetailsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleDetail", "Id").As("detailId")
					.Column("SysModuleDetail", "SysModuleId").As("sysModuleId")
					.Column("SysModuleDetail", "SysModuleGridId").As("sysModuleGridId")
					.Column("SysModuleGrid", "SysPageSchemaUId").As("sysPageSchemaId")
					.Column("SysModuleEntity", "SysEntitySchemaUId").As("sysEntitySchemaId")
					.Column("SysModuleDetail", "HelpContextId").As("helpContextId")
				.From("SysModuleDetail").As("SysModuleDetail")
				.InnerJoin("SysModuleGrid").As("SysModuleGrid").On("SysModuleGrid", "Id").IsEqual("SysModuleDetail", "SysModuleGridId")
				.InnerJoin("SysModuleEntity").As("SysModuleEntity").On("SysModuleEntity", "Id").IsEqual("SysModuleGrid", "SysModuleEntityId") as Select;
			AddLczColumns(userConnection, select, "SysModuleDetail", "SysModuleDetail", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleEditDetailsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleEditDetail", "Id").As("detailId")
					.Column("SysModuleEditDetail", "SysModuleEditId").As("sysModuleEditId")
					.Column("SysModuleEditDetail", "SysModuleGridId").As("sysModuleGridId")
					.Column("SysModuleGrid", "SysPageSchemaUId").As("sysPageSchemaId")
					.Column("SysModuleEntity", "SysEntitySchemaUId").As("sysEntitySchemaId")
					.Column("SysModuleEditDetail", "HelpContextId").As("helpContextId")
				.From("SysModuleEditDetail").As("SysModuleEditDetail")
				.InnerJoin("SysModuleGrid").As("SysModuleGrid").On("SysModuleGrid", "Id").IsEqual("SysModuleEditDetail", "SysModuleGridId")
				.InnerJoin("SysModuleEntity").As("SysModuleEntity").On("SysModuleEntity", "Id").IsEqual("SysModuleGrid", "SysModuleEntityId") 
				.InnerJoin("VwSysSchemaInWorkspace").As("s").On("s", "UId").IsEqual("SysModuleEntity", "SysEntitySchemaUId").And("s", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id)) as Select;
			AddLczColumns(userConnection, select, "SysModuleEditDetail", "SysModuleEditDetail", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleGridViewsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleGridView", "Id").As("sysModuleGridViewId")
					.Column("SysModuleGridView", "SysModuleGridId").As("sysModuleGridId")
					.Column("SysModuleGridView", "Code").As("code")
					.Column("SysModuleGrid", "HasAllItemsView").As("hasAllItemsView")
				.From("SysModuleGridView").As("SysModuleGridView")
				.InnerJoin("SysModuleGrid").As("SysModuleGrid").On("SysModuleGrid", "Id").IsEqual("SysModuleGridView", "SysModuleGridId")
				.OrderByDesc("SysModuleGridView", "Position") as Select;
			AddLczColumns(userConnection, select, "SysModuleGridView", "SysModuleGridView", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleActionsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleAction", "Id").As("sysModuleActionId")
					.Column("SysModuleAction", "SysModuleId").As("sysModuleId")
					.Column("SysModuleAction", "SysProcessSchemaUId").As("sysProcessSchemaId")
					.Column("SysModuleActionType", "Code").As("code")
				.From("SysModuleAction").As("SysModuleAction")
				.InnerJoin("SysModuleActionType").As("SysModuleActionType").On("SysModuleActionType", "Id").IsEqual("SysModuleAction", "TypeId")
				.OrderByAsc("SysModuleAction", "Position") as Select;
			AddLczColumns(userConnection, select, "SysModuleAction", "SysModuleAction", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleReportsSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleReport", "Id").As("sysModuleReportId")
					.Column("SysModuleReport", "SysModuleId").As("sysModuleId")
					.Column("SysModuleReport", "SysReportSchemaUId").As("sysReportSchemaUId")
					.Column("SysModuleReport", "SysOptionsPageSchemaUId").As("sysOptionsPageSchemaUId")
					.Column("SysModuleReport", "HelpContextId").As("helpContextId")
					.Column("SysModuleReport", "TypeId").As("typeId")
				.From("SysModuleReport").As("SysModuleReport")
				.InnerJoin("VwSysSchemaInWorkspace").As("VwSysSchemaInWorkspace").On("VwSysSchemaInWorkspace", "UId").IsEqual("SysModuleReport", "SysReportSchemaUId")
				.And("VwSysSchemaInWorkspace", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id)) as Select;
			AddLczColumns(userConnection, select, "SysModuleReport", "SysModuleReport", "Id", "Caption", false);
			return select;
		}

		public static Select GetModuleAnalyticsReportSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModuleAnalyticsReport", "Id").As("sysModuleAnalyticsId")
					.Column("SysModuleAnalyticsReport", "SysModuleId").As("sysModuleId")
					.Column("SysModuleAnalyticsReport", "SysSchemaUId").As("sysSchemaId")
					.Column("SysModuleAnalyticsReport", "SysOptionsPageSchemaUId").As("sysOptionsPageSchemaUId")
					.Column("SysModuleAnalyticsReport", "HelpContextId").As("helpContextId")
				.From("SysModuleAnalyticsReport").As("SysModuleAnalyticsReport")
				.InnerJoin("VwSysSchemaInWorkspace").As("VwSysSchemaInWorkspace").On("VwSysSchemaInWorkspace", "UId").IsEqual("SysModuleAnalyticsReport", "SysSchemaUId")
				.And("VwSysSchemaInWorkspace", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id)) as Select;
			AddLczColumns(userConnection, select, "SysModuleAnalyticsReport", "SysModuleAnalyticsReport", "Id",
				"Caption", false);
			return select;
		}

		public static Select GetModuleAnalyticsChartSelect(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("SysModule", "Id").As("sysModuleId")
					.Column("SysModuleAnalyticsChart", "Id").As("chartId")
				.From("SysModuleAnalyticsChart").As("SysModuleAnalyticsChart")
				.InnerJoin("SysModuleEntity").As("SysModuleEntity").On("SysModuleEntity", "SysEntitySchemaUId").IsEqual("SysModuleAnalyticsChart", "ModuleSchemaUId")
				.InnerJoin("SysModule").As("SysModule").On("SysModuleEntity", "Id").IsEqual("SysModule", "SysModuleEntityId")
				.InnerJoin("VwSysSchemaInWorkspace").As("VwSysSchemaInWorkspace").On("VwSysSchemaInWorkspace", "UId").IsEqual("SysModuleAnalyticsChart", "EntityShemaUId")
				.And("VwSysSchemaInWorkspace", "SysWorkspaceId").IsEqual(new QueryParameter(userConnection.Workspace.Id)) as Select;
			AddLczColumns(userConnection, select, "SysModuleAnalyticsChart", "SysModuleAnalyticsChart", "Id", "Caption",
				false);
			return select;
		}

		public static LocalizableString GetLocalizableValue(UserConnection userConnection, string schemaName,
				string columnName, Guid recordId) {
			EntitySchemaQuery esq;
			EntitySchemaQueryColumn column;
			var result = new LocalizableString();
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			SysUserInfo currentUser = userConnection.CurrentUser;
			CultureInfo currentUserCulture = currentUser.Culture;
			EntitySchema schema = entitySchemaManager.GetInstanceByName(schemaName);
			if (UseMultilanguageData) {
				esq = new EntitySchemaQuery(entitySchemaManager, schemaName);
				column = esq.AddColumn(columnName);
				esq.Filters.Add(esq.CreateFilterWithParameters(
					FilterComparisonType.Equal, schema.GetPrimaryColumnName(), recordId));
			} else {
				Guid columnUId = schema.Columns.GetByName(columnName).UId;
				string lczSchemaName = schema.GetLocalizableStringsSchemaName();
				esq = new EntitySchemaQuery(entitySchemaManager, lczSchemaName);
				column = esq.AddColumn("Value");
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "ColumnUId", columnUId));
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Record", recordId));
				esq.Filters.Add(
					esq.CreateFilterWithParameters(FilterComparisonType.Equal, "SysCulture", currentUser.SysCultureId));
			}
			EntityCollection entities = esq.GetEntityCollection(userConnection);
			if (entities.Count > 0) {
				Entity entity = entities.First();
				string lczValue = entity.GetTypedColumnValue<string>(column.Name);
				result.SetCultureValue(currentUserCulture, lczValue);
			}
			return result;
		}

		public static CultureInfo GetPrimaryCultureInfo(this UserConnection userConnection) {
			var primaryCultureId = (Guid)Terrasoft.Core.Configuration.SysSettings.GetValue(userConnection, "PrimaryCulture");
			var sysCulture = userConnection.EntitySchemaManager.GetEntityByName("SysCulture", userConnection);
			sysCulture.FetchFromDB(primaryCultureId);
			return CultureInfo.GetCultureInfo(sysCulture.GetTypedColumnValue<string>("Name"));
		}

		public static void SaveLocalizableValue(Entity entity, LocalizableString localizableValue, string columnName) {
			if (UseMultilanguageData) {
				return;
			}
			var userConnection = entity.UserConnection;
			var entitySchemaManager = userConnection.EntitySchemaManager;
			var query = new EntitySchemaQuery(entitySchemaManager, "SysCulture");
			var idColumnName = query.AddColumn("Id").Name;
			var nameColumnName = query.AddColumn("Name").Name;
			var sysCultures = query.GetEntityCollection(userConnection);
			string lczSchemaName = entity.Schema.GetLocalizableStringsSchemaName();
			var lczSchema = entitySchemaManager.GetInstanceByName(lczSchemaName);
			foreach (var sysCulture in sysCultures) {
				string cultureName = sysCulture.GetTypedColumnValue<string>(nameColumnName);
				var culture = CultureInfo.GetCultureInfo(cultureName);
				string lczValue = string.Empty;
				if (!localizableValue.HasCultureValue(culture)) {
					lczValue = localizableValue.GetCultureValue(GeneralResourceStorage.CurrentCulture);
				} else {
					lczValue = localizableValue.GetCultureValue(culture);
				}
				Guid cultureId = sysCulture.GetTypedColumnValue<Guid>(idColumnName);
				Guid columnUId = entity.Schema.Columns.FindByName(columnName).UId;
				Entity newLczValueEntity = lczSchema.CreateEntity(userConnection);
				newLczValueEntity.SetDefColumnValues();
				newLczValueEntity.FetchFromDB(new Dictionary<string, object> {
					{"SysCulture", cultureId},
					{"Record", entity.PrimaryColumnValue},
					{"ColumnUId", columnUId},
				});
				newLczValueEntity.SetColumnValue("SysCultureId", cultureId);
				newLczValueEntity.SetColumnValue("ColumnUId", columnUId);
				newLczValueEntity.SetColumnValue("Value", lczValue);
				newLczValueEntity.SetColumnValue("RecordId", entity.PrimaryColumnValue);
				newLczValueEntity.Save();
			}
		}

		public static void CopyFileDetail(UserConnection userConnection, Guid srcRecordId, Guid targetRecordId, string srcSchema, string targetSchema, bool isChangeHtmlBody = false) {
			if (string.IsNullOrEmpty(targetSchema)) {
				targetSchema = srcSchema;
			}
			//TODO: #MK-5074 Remove after renaming 'FileLead' schema to 'LeadFile'.
			var targetFileSchemaName = targetSchema.Equals("Lead") ?
				"FileLead" : string.Format("{0}File", targetSchema);
			var srcFileSchemaName = targetSchema.Equals("Lead") ?
				"FileLead" : string.Format("{0}File", srcSchema);
			var targetEntitySchema = userConnection.EntitySchemaManager.GetInstanceByName(targetFileSchemaName);
			var srcEntitySchema = userConnection.EntitySchemaManager.GetInstanceByName(srcFileSchemaName);
			Dictionary<Guid, Guid> fileList = new Dictionary<Guid, Guid>();
			var srcESQ = new EntitySchemaQuery(srcEntitySchema);	
			var idColumn = srcESQ.AddColumn(srcESQ.RootSchema.GetPrimaryColumnName());
			srcESQ.Filters.Add(srcESQ.CreateFilterWithParameters(FilterComparisonType.Equal, srcSchema, srcRecordId));
			var srcList = srcESQ.GetEntityCollection(userConnection);
			var fileRepository = ClassFactory.Get<FileRepository>(
						new ConstructorArgument("userConnection", userConnection));
			foreach (var src in srcList) {
				var idSchemaColumn = src.Schema.Columns.GetByName(idColumn.Name);
				var fileId = src.GetTypedColumnValue<Guid>(idSchemaColumn.ColumnValueName);	
				Guid newGuid = Guid.NewGuid();

				using (var memoryStream = new MemoryStream()) {
					var bwriter = new BinaryWriter(memoryStream);
					var fileInfo = fileRepository.LoadFile(srcEntitySchema.UId, fileId, bwriter);

					var fileEntityInfo = new FileEntityUploadInfo(targetFileSchemaName, newGuid, fileInfo.FileName);
					fileEntityInfo.ParentColumnName = targetSchema;
					fileEntityInfo.ParentColumnValue = targetRecordId;
					fileEntityInfo.TotalFileLength = fileInfo.TotalFileLength;
					fileEntityInfo.Content = memoryStream;				
					if (fileRepository.UploadFile(fileEntityInfo)) {
						fileList.Add((Guid)fileId, newGuid);
					}
				}	
			}

			if (isChangeHtmlBody && fileList.Count > 0) {
				string columnName = string.Empty;
				var targetModuleEntitySchema = userConnection.EntitySchemaManager.GetInstanceByName(targetSchema);
				if (targetModuleEntitySchema.FindSchemaColumnByPath("Body") != null) {
					columnName = "Body";
				}
				if (targetModuleEntitySchema.FindSchemaColumnByPath("HtmlBody") != null) {
					columnName = "HtmlBody";
				}
				if (!string.IsNullOrEmpty(columnName)) {
					var targetModuleEntity = targetModuleEntitySchema.CreateEntity(userConnection);
					if (targetModuleEntity.FetchFromDB(targetRecordId)) {
						string messageBody = targetModuleEntity.GetTypedColumnValue<string>(columnName);
						messageBody = messageBody.Replace(srcRecordId.ToString(), targetRecordId.ToString());
						foreach (var item in fileList) {
							messageBody = messageBody.Replace(item.Key.ToString().ToLower(), item.Value.ToString().ToLower());
						}
						var update = new Update(userConnection, targetSchema)
							.Set(columnName, Column.Parameter(messageBody))
							.Where("Id").IsEqual(Column.Parameter(targetRecordId));
						update.Execute();
					}
				}
			}
		}

		public static IEnumerable<Guid> ParseGuidsFromString(string source) {
			source.CheckArgumentNullOrWhiteSpace(nameof(source));
			const string guidRegExp = "([0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12})";
			var hrefRegExp = $"<a\\s.*?data-value=\"{guidRegExp}\".*?>";
			var regExp = new Regex(hrefRegExp, RegexOptions.Multiline | RegexOptions.IgnoreCase);
			var matchCollection = regExp.Matches(source);
			var result = new List<Guid>();
				foreach (Match match in matchCollection)
					result.Add(Guid.Parse(match.Groups[1].Value));
				return result;
		}

		#endregion

	}
}

