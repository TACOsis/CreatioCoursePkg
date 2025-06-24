namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Interface: IEntityCollectionMappingHandler

	public interface IEntityCollectionMappingHandler
	{

		EntityCollection GetItems(string sourceEntityName, IEnumerable<string> columnList,
			EntityCollectionMappingHandlerFilterGroup filterCollection = null);

		void SaveItems(EntityCollection entityCollection, string targetEntityName,
			Dictionary<string, string> columnMapping, bool shouldUpdateRecordsIfExists = true);

		void DeleteItems(string entityName, EntityCollectionMappingHandlerFilterGroup filterCollection);

		void CopyItems(string entityName, IEnumerable<string> columnList,
			EntityCollectionMappingHandlerFilterGroup filterCollection = null);

	}

	#endregion

	#region Class: EntityCollectionMappingHandlerFilter

	/// <summary>
	/// Class contains entity filter.
	/// </summary>
	public class EntityCollectionMappingHandlerFilter
	{

		#region Properties: Public

		/// <summary>
		/// Column path.
		/// </summary>
		public string ColumnPath
		{
			get; private set;
		}

		/// <summary>
		/// Values.
		/// </summary>
		public List<object> Values
		{
			get; private set;
		}

		/// <summary>
		/// Filter comparison type.
		/// </summary>
		public FilterComparisonType ComparisonType
		{
			get; private set;
		}
		
		/// <summary>
		/// Logical operation.
		/// </summary>
		public LogicalOperationStrict LogicalOperation
		{
			get; private set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="columnPath">Column path.</param>
		/// <param name="values">Values collection.</param>
		/// <param name="comparisonType">Comparison type.</param>
		/// <param name="logicalOperation">Logical operation.</param>
		public EntityCollectionMappingHandlerFilter(string columnPath, List<object> values,
				FilterComparisonType comparisonType = FilterComparisonType.Equal,
				LogicalOperationStrict logicalOperation = LogicalOperationStrict.And) {
			ColumnPath = columnPath;
			Values = values;
			ComparisonType = comparisonType;
			LogicalOperation = logicalOperation;
		}

		#endregion

	}

	#endregion
	
	#region Class: EntityCollectionMappingHandlerFilterGroup

	/// <summary>
	/// Group for entity collection filters.
	/// </summary>
	public class EntityCollectionMappingHandlerFilterGroup
	{

		#region Properties: Public

		/// <summary>
		/// Filters collection.
		/// </summary>
		public List<EntityCollectionMappingHandlerFilter> Filters { get; private set; }
		
		/// <summary>
		/// Logical operation.
		/// </summary>
		public LogicalOperationStrict LogicalOperation { get; private set; }

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="filters">Filters collection.</param>
		/// <param name="logicalOperation">Logical operation.</param>
		public EntityCollectionMappingHandlerFilterGroup(List<EntityCollectionMappingHandlerFilter> filters,
			LogicalOperationStrict logicalOperation = LogicalOperationStrict.And) {
			Filters = filters;
			LogicalOperation = logicalOperation;
		}

		#endregion
	}
	
	#endregion

	#region Class: EntityCollectionMappingHandler

	/// <summary>
	/// Class for processing EntityCollection items using column mapping mechanism.
	/// </summary>
	[DefaultBinding(typeof(IEntityCollectionMappingHandler))]
	public class EntityCollectionMappingHandler
	{

		#region Properties: Protected

		/// <summary>
		/// User connection.
		/// </summary>
		protected UserConnection UserConnection
		{
			get; set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public EntityCollectionMappingHandler(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Set entity values by mapping and save.
		/// </summary>
		/// <param name="sourceEntity">Name of entity from which take values.</param>
		/// <param name="targetEntityName">Name of entity to which values set.</param>
		/// <param name="columnMapping">Dictionary, containing column name in source collection as a key and column name in target entity as a value.</param>
		private Guid UpdateEntityWithMappingValues(Entity targetEntity, Entity sourceEntity,
			Dictionary<string, string> columnMapping) {

			targetEntity.SetDefColumnValues();
			foreach (var mappingItem in columnMapping) {
				targetEntity.SetColumnValue(mappingItem.Key, sourceEntity.GetColumnValue(mappingItem.Value));
			}

			targetEntity.Save(false);

			return targetEntity.PrimaryColumnValue;
		}

		/// <summary>
		/// Try to update record by passed Id.
		/// </summary>
		/// <param name="sourceEntity">Name of entity from which take values.</param>
		/// <param name="targetEntityName">Name of entity to which values set.</param>
		/// <param name="columnMapping">Dictionary, containing column name in source collection as a key and column name in target entity as a value.</param>
		/// <returns><see cref="EntityCollection"/>.</returns>
		private bool TryToUpdateExistedRecordById(Entity sourceEntity, Entity targetEntity,
				Dictionary<string, string> columnMapping) {
			var primaryColumnName = "Id";
			if (!columnMapping.ContainsKey(primaryColumnName)) {
				return false;
			};
			var updateRecordId = sourceEntity.GetColumnValue(columnMapping[primaryColumnName]);
			if (!targetEntity.FetchFromDB(updateRecordId)) {
				return false;
			}
			UpdateEntityWithMappingValues(targetEntity, sourceEntity, columnMapping);
			return true;
		}

		/// <summary>
		/// Get column mapping from column list.
		/// </summary>
		/// <param name="entityName"><see cref="string"/>Entity name.</param>
		/// <param name="columnList"><see cref="IEnumerable<string>"/>Collection columns.</param>
		/// <returns><see cref="Dictionary<string, string>"/>.</returns>
		private Dictionary<string, string> GetColumnMappingFromColumnList(string entityName, IEnumerable<string> columnList) {
			Dictionary<string, string> columnMapping = new Dictionary<string, string>();
			foreach (var column in columnList) {
				var columnValueName = GetColumnValueName(entityName, column);
				if (!string.IsNullOrEmpty(columnValueName) && !columnMapping.ContainsKey(columnValueName)) {
					columnMapping.Add(columnValueName, columnValueName);
				}
			}
			return columnMapping;
		}

		/// <summary>
		/// Get column value name.
		/// </summary>
		/// <param name="entityName"><see cref="string"/>Entity name.</param>
		/// <param name="columnName"><see cref="string"/>Column name.</param>
		/// <returns><see cref="string"/>.</returns>
		private string GetColumnValueName(string entityName, string columnName) {
			if (string.IsNullOrEmpty(columnName)) {
				return string.Empty;
			}

			var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entityName);
			var column = entitySchema.Columns.FindByName(columnName);

			return column.ColumnValueName;
		}

		/// <summary>
		/// Set default values.
		/// </summary>
		/// <param name="entityCollection"><see cref="EntityCollection"/>.</param>
		/// <param name="defaultValues"><see cref="string"/>Column name.</param>
		/// <returns><see cref="EntityCollection"/>.</returns>
		private EntityCollection SetDefaultValues(EntityCollection entityCollection, Dictionary<string, object> defaultValues) {
			if (defaultValues != null && defaultValues.Any()) {
				foreach (var item in entityCollection) {
					foreach (var defaultValue in defaultValues) {
						item.SetColumnValue(defaultValue.Key, defaultValue.Value);
					}
				}
			}
			return entityCollection;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Get collection of entities using provided filters.
		/// </summary>
		/// <param name="sourceEntityName">Name of entity for loading.</param>
		/// <param name="columnList">List of columns to be loaded.</param>
		/// <param name="filterCollection">Dictionary, containing column name as a key and value for filtering as a value.</param>
		/// <returns><see cref="EntityCollection"/>.</returns>
		public virtual EntityCollection GetItems(string sourceEntityName, IEnumerable<string> columnList,
				EntityCollectionMappingHandlerFilterGroup filterCollection = null) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, sourceEntityName);
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			foreach (var columnName in columnList) {
				var name = esq.AddColumn(columnName);
			}
			if (filterCollection != null) {
				var filterGroup = new EntitySchemaQueryFilterCollection(esq, filterCollection.LogicalOperation);
				foreach (var filterItem in filterCollection.Filters) {
					var innerFilterGroup = new EntitySchemaQueryFilterCollection(esq, filterItem.LogicalOperation);
					foreach (var filterItemValue in filterItem.Values) {
						var filterComparisonType = filterItem.ComparisonType;
						if (filterItemValue == null) {
							filterComparisonType = FilterComparisonType.IsNull;
						}
						innerFilterGroup.Add(esq.CreateFilterWithParameters(filterComparisonType, filterItem.ColumnPath, filterItemValue));
					}
					filterGroup.Add(innerFilterGroup);
				}
				esq.Filters.Add(filterGroup);
			}
			return esq.GetEntityCollection(UserConnection);
		}

		/// <summary>
		/// Save entity collection to provided entity.
		/// </summary>
		/// <param name="entityCollection">Collection of entities to be saved.</param>
		/// <param name="targetEntityName">Name of entity to save.</param>
		/// <param name="columnMapping">Dictionary, containing column name in source collection as a key and column name in target entity as a value.</param>
		/// <param name="shouldUpdateRecordsIfExists">Sign that records can be updated if already exist in the system.</param>
		/// <returns><see cref=" Dictionary<Guid, Guid>"/>.</returns>
		public virtual Dictionary<Guid, Guid> SaveItems(EntityCollection entityCollection, string targetEntityName,
				Dictionary<string, string> columnMapping, bool shouldUpdateRecordsIfExists = true) {
			var mappedCopiedRecordDictionary = new Dictionary<Guid, Guid>();
			foreach (var sourceEntity in entityCollection) {
				var targetEntitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(targetEntityName);
				var targetEntity = targetEntitySchema.CreateEntity(UserConnection);

				if (shouldUpdateRecordsIfExists && TryToUpdateExistedRecordById(sourceEntity, targetEntity,
						columnMapping)) {
					continue;
				}

				Guid itemId = UpdateEntityWithMappingValues(targetEntity, sourceEntity, columnMapping);
				mappedCopiedRecordDictionary.Add(sourceEntity.PrimaryColumnValue, itemId);
			}

			return mappedCopiedRecordDictionary;
		}

		/// <summary>
		/// Delete records by provided filters.
		/// </summary>
		/// <param name="entityName">Name of entity to be deleted.</param>
		/// <param name="filterCollection">Dictionary, containing column name as a key and value for filtering as a value.</param>
		public virtual void DeleteItems(string entityName, EntityCollectionMappingHandlerFilterGroup filterCollection) {
			var entityCollection = GetItems(entityName, new string[] { }, filterCollection);
			foreach (var item in entityCollection) {
				var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entityName);
				var entity = entitySchema.CreateEntity(UserConnection);
				entity.FetchFromDB(item.GetTypedColumnValue<Guid>("Id"));
				entity.Delete();
			}
		}

		/// <summary>
		/// Copy records by provided filters.
		/// </summary>
		/// <param name="entityName">Name of entity to be copied.</param>
		/// <param name="columnList">List of columns to copy.</param>
		/// <param name="columnMapping">Dictionary, containing column name in source collection as a key and column name in target entity as a value.</param>
		/// <param name="filterCollection">Filters for entity.</param>
		/// <param name="defaultValues">Default values.</param>
		/// <returns><see cref=" Dictionary<Guid, Guid>"/>.</returns>
		public virtual Dictionary<Guid, Guid> CopyItems(string entitySchemaName, IEnumerable<string> columnList,
				EntityCollectionMappingHandlerFilterGroup filterCollection = null, Dictionary<string, object> defaultValues = null) {
			var entityCollection = GetItems(entitySchemaName, columnList, filterCollection);
			if (!entityCollection.Any()) {
				return new Dictionary<Guid, Guid>();
			}
			SetDefaultValues(entityCollection, defaultValues);
			var columnMapping = GetColumnMappingFromColumnList(entitySchemaName, columnList);
			return SaveItems(entityCollection, entitySchemaName, columnMapping, false);
		}

		#endregion

	}


	#endregion

}

