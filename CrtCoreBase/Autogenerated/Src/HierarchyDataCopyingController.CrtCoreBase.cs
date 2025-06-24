namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.DB;

	#region Interface: IHierarchyDataCopyingController

	public interface IHierarchyDataCopyingController
	{
		CopyingResult CopyRecord(string schemaName, Guid recordId);
	}

	#endregion

	#region Class: Protected

	/// <summary>
	/// Contains result information about copying process.
	/// </summary>
	public class CopyingResult {

		public Guid CopyRecordId { get; set; }
		public string ErrorMessage { get; set; }

		public CopyingResult() {
		}

		public CopyingResult(string errorMessage) {
			this.ErrorMessage = errorMessage;
		}

		public CopyingResult(Guid copyRecordId) {
			this.CopyRecordId = copyRecordId;
		}
	}

	#endregion

	#region Class: HierarchyDataCopyingController

	public class HierarchyDataCopyingController : IHierarchyDataCopyingController
	{

		#region Class: Protected

		protected class HierarchyDataCopyRecord
		{
			public Dictionary<Guid, Guid> MappedRecord;
			public List<HierarchyDataStructure> Structures;
			public string ParentSchemaName;
		}

		#endregion

		#region Properties: Private 

		/// <summary>
		/// User connection.
		/// </summary>
		private UserConnection UserConnection
		{
			get; set;
		}

		private HierarchyDataStructureObtainerContext _hierarchyDataStructureObtainer;
		private HierarchyDataStructureObtainerContext HierarchyDataStructureObtainer
		{
			get
			{
				if (_hierarchyDataStructureObtainer == null) {
					_hierarchyDataStructureObtainer = ClassFactory.Get<HierarchyDataStructureObtainerContext>(
						new ConstructorArgument("userConnection", UserConnection));
				}
				return _hierarchyDataStructureObtainer;
			}
		}

		private Stack<HierarchyDataCopyRecord> _hierarchyDataCopyRecordStack;
		private Stack<HierarchyDataCopyRecord> HierarchyDataCopyRecordStack
		{
			get
			{
				if (_hierarchyDataCopyRecordStack == null) {
					_hierarchyDataCopyRecordStack = new Stack<HierarchyDataCopyRecord>();
				}
				return _hierarchyDataCopyRecordStack;
			}

		}


		#endregion

		#region  Properties: Protected

		private EntityCollectionMappingHandler _entityCollectionMappingHandler;
		protected EntityCollectionMappingHandler EntityCollectionMappingHandler
		{
			get
			{
				if (_entityCollectionMappingHandler == null) {
					_entityCollectionMappingHandler = ClassFactory.Get<EntityCollectionMappingHandler>(
						new ConstructorArgument("userConnection", UserConnection));
				}
				return _entityCollectionMappingHandler;
			}
		}

		#endregion

		#region Constructor: Public

		/// <summary>
		/// Constructor
		/// </summary>
		/// <param name="UserConnection">UserConnection</param>
		public HierarchyDataCopyingController(UserConnection userConnection) {
			this.UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Get filters collection. 
		/// </summary>
		/// <param name="filters"><see cref="Dictionary<string, object>"/>Dictionary consisting of values entity column and value.</param>
		/// <returns><see cref="List<EntityCollectionMappingHandlerFilter>"/>Filters collection.</returns>
		private List<EntityCollectionMappingHandlerFilter> GetEntityCollectionMappingHandlerFilter(Dictionary<string, object> filters) {
			List<EntityCollectionMappingHandlerFilter> mappingHandlerFilters = new List<EntityCollectionMappingHandlerFilter>();
			foreach (var valuePair in filters) {
				mappingHandlerFilters.Add(new EntityCollectionMappingHandlerFilter(valuePair.Key,
					new List<object> { valuePair.Value }));
			}
			return mappingHandlerFilters;
		}

		/// <summary>
		/// Get filters collection. 
		/// </summary>
		/// <param name="filters"><see cref="HierarchyDataStructureFilterGroup"/>Dictionary consisting of values entity column and value.</param>
		/// <returns><see cref="List<EntityCollectionMappingHandlerFilter>"/>Filters collection.</returns>
		private List<EntityCollectionMappingHandlerFilter> GetEntityCollectionMappingHandlerFilter(HierarchyDataStructureFilterGroup hierarchyDataStructureFilters) {
			List<EntityCollectionMappingHandlerFilter> mappingHandlerFilters = new List<EntityCollectionMappingHandlerFilter>();
			if (hierarchyDataStructureFilters == null || hierarchyDataStructureFilters.Filters.IsNullOrEmpty()) {
				return mappingHandlerFilters;
			}
			foreach (var filter in hierarchyDataStructureFilters.Filters) {
				mappingHandlerFilters.Add(new EntityCollectionMappingHandlerFilter(
					filter.ColumnPath, new List<object>(filter.Values), filter.ComparisonType, filter.LogicalOperation));
			}
			return mappingHandlerFilters;
		}

		private bool HasRightsOnSchema(string schemaName) {
			SchemaOperationRightLevels rightsOnSchema = UserConnection.DBSecurityEngine.GetEntitySchemaOperationsRightLevel(schemaName);
			var hasAllRights = rightsOnSchema.HasFlag(SchemaOperationRightLevels.All);
			var hasAppendRights = rightsOnSchema.HasFlag(SchemaOperationRightLevels.CanAppend);
			return hasAllRights || hasAppendRights;
		}

		private bool HasRightsOnRecord(string schemaName, Guid recordId) {
			SchemaRecordRightLevels rightsOnRecord = UserConnection.DBSecurityEngine.GetEntitySchemaRecordRightLevel(schemaName, recordId);
			var hasAllRights = rightsOnRecord.HasFlag(SchemaRecordRightLevels.All);
			var hasReadRights = rightsOnRecord.HasFlag(SchemaRecordRightLevels.CanRead);
			return hasAllRights || hasReadRights;
		}

		#endregion

		#region Methods: Protected


		/// <summary>
		/// Get dictionary, containing column name as a key and value for filtering as a value.
		/// </summary>
		/// <param name="hierarchyDataFilters"><see cref="Dictionary<string, object>"/>filters</param>
		/// <param name="filtersGroup"><see cref="HierarchyDataStructureFilterGroup"/>Group for hierarchy data structure filters.</param>
		/// <param name="logicalOperationStrict"><see cref="LogicalOperationStrict"/>Logical operation.</param>
		/// <returns><see cref="EntityCollectionMappingHandlerFilterGroup"/>.</returns>
		protected virtual EntityCollectionMappingHandlerFilterGroup GetFilterGroup(Dictionary<string, object> hierarchyDataFilters, HierarchyDataStructureFilterGroup filtersGroup,
			LogicalOperationStrict logicalOperationStrict = LogicalOperationStrict.And) {
			List<EntityCollectionMappingHandlerFilter> filters = GetEntityCollectionMappingHandlerFilter(hierarchyDataFilters);

			var hierarchyDataStructureFilters = GetEntityCollectionMappingHandlerFilter(filtersGroup);
			if (hierarchyDataStructureFilters != null && hierarchyDataStructureFilters.Any()) {
				filters.AddRange(hierarchyDataStructureFilters);
			}

			LogicalOperationStrict logicalOperation = filtersGroup != null ? filtersGroup.LogicalOperation : logicalOperationStrict;

			return new EntityCollectionMappingHandlerFilterGroup(filters, logicalOperation);
		}

		/// <summary>
		/// Get related column values
		/// </summary>
		/// <param name="entitySchemaName"><see cref="string"/>Entity schema name</param>
		/// <param name="parentColumnName"><see cref="string"/>Related column name.</param>
		/// <param name="copyRecordId"><see cref="Guid"/>New related record.</param>
		/// <returns><see cref="Dictionary<string, object>"/>.</returns>
		protected virtual Dictionary<string, object> GetRelatedColumnValues(string entitySchemaName, string parentColumnName, Guid copyRecordId) {
			var columnName = GetDatabaseColumnName(entitySchemaName, parentColumnName);
			var defaultValues = new Dictionary<string, object>();
			if (!copyRecordId.Equals(Guid.Empty) && !string.IsNullOrEmpty(columnName)) {
				defaultValues.Add(columnName, copyRecordId);
			}

			return defaultValues;
		}

		/// <summary>
		/// Get dictionary related new and old record 
		/// </summary>
		/// <param name="data"><see cref="HierarchyDataStructure"/>Copied record structure.</param>
		/// <param name="fromRecordId"><see cref="Guid"/>Record id.</param>
		/// <param name="parentSchemaName"><see cref="Guid"/>.</param>
		/// <param name="toRecordId"><see cref="Guid"/>New related record.</param>
		/// <returns><see cref="Dictionary<Guid, Guid>"/>Related record`s id.</returns>
		protected virtual Dictionary<Guid, Guid> CopyHierarchyDataRecord(HierarchyDataStructure data, Guid fromRecordId, Guid toRecordId = default(Guid), string parentSchemaName = default(string)) {
			Dictionary<string, object> hierarchyDataFilters = GetHierarchyDataSimpleFilter(data, fromRecordId);
			var filterGroup = GetFilterGroup(hierarchyDataFilters, data.Filters);
			var columns = GetColumns(data);
			var relatedColumnValues = GetRelatedColumnValues(data.SchemaName, data.ParentColumnName, toRecordId);
			return EntityCollectionMappingHandler.CopyItems(data.SchemaName, columns, filterGroup, relatedColumnValues);
		}

		/// <summary>
		/// Get columns collection with related column
		/// </summary>
		/// <param name="data"><see cref="HierarchyDataStructure"/>Copied record structure.</param>
		/// <returns><see cref="List<string>"/>Columns collection.</returns>
		protected virtual List<string> GetColumns(HierarchyDataStructure data) {
			var columns = data.Columns;
			if (!string.IsNullOrEmpty(data.ParentColumnName)) {
				bool containsItem = columns.Any(item => item == data.ParentColumnName);
				if (!containsItem) {
					columns.Add(data.ParentColumnName);
				}
			}
			return columns;
		}


		/// <summary>
		/// Get filters. 
		/// </summary>
		/// <param name="data"><see cref="HierarchyDataStructure"/>Copied record structure.</param>
		/// <param name="fromRecordId"><see cref="Guid"/>Record id.</param>
		protected virtual Dictionary<string, object> GetHierarchyDataSimpleFilter(HierarchyDataStructure data, Guid fromRecordId) {
			Dictionary<string, object> hierarchyDataFilters = new Dictionary<string, object>();
			var filterKey = string.IsNullOrEmpty(data.ParentColumnName) ? "Id" : data.ParentColumnName;
			hierarchyDataFilters.Add(filterKey, fromRecordId);
			return hierarchyDataFilters;
		}

		/// <summary>
		/// Copy related entities 
		/// </summary>
		/// <param name="HierarchyDataStructure"><see cref="HierarchyDataStructure"/>Copied record structure.</param>
		/// <param name="recordId"><see cref="Guid"/>Record id.</param>
		/// <param name="toRecordId"><see cref="Guid"/>New related record.</param>
		protected virtual void CopyHierarchyDataList(HierarchyDataCopyRecord hierarchyDataCopyRecord) {
			foreach (var structureCopyRecord in hierarchyDataCopyRecord.Structures) {
				foreach (var mappedItem in hierarchyDataCopyRecord.MappedRecord) {
					Dictionary<Guid, Guid> resultRecords = CopyHierarchyDataRecord(structureCopyRecord, mappedItem.Key, mappedItem.Value, hierarchyDataCopyRecord.ParentSchemaName);
					if (structureCopyRecord.Structures != null && structureCopyRecord.Structures.Any() && resultRecords.Any()) {
						HierarchyDataCopyRecordStack.Push(new HierarchyDataCopyRecord {
							MappedRecord = resultRecords,
							Structures = structureCopyRecord.Structures,
							ParentSchemaName = structureCopyRecord.SchemaName
						});
					}
				}
			}
			if (HierarchyDataCopyRecordStack.Any()) {
				CopyHierarchyDataList(HierarchyDataCopyRecordStack.Pop());
			}
		}

		/// <summary>
		/// Get database column name
		/// </summary>
		/// <param name="entityName"><see cref="string"/>Entity name.</param>
		/// <param name="columnName"><see cref="string<string>"/>Column name.</param>
		/// <returns><see cref="string"/>.</returns>
		protected virtual string GetDatabaseColumnName(string entityName, string columnName) {
			if (string.IsNullOrEmpty(columnName)) {
				return string.Empty;
			}

			var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entityName);
			var column = entitySchema.Columns.FindByName(columnName);

			return column.ColumnValueName;
		}


		/// <summary>
		/// Methods saved hierarchy data
		/// </summary>
		/// <param name="HierarchyDataStructure"><see cref="HierarchyDataStructure"/>Copied record structure.</param>
		/// <param name="recordId"><see cref="Guid"/>Main record id.</param>
		/// <returns><see cref="Guid"/> Id of created record.</returns>
		protected virtual Guid CopyHierarchyData(HierarchyDataStructure data, Guid recordId) {
			Dictionary<Guid, Guid> mappedCopiedRecords = CopyHierarchyDataRecord(data, recordId);
			if (data.Structures != null && data.Structures.Any()) {
				CopyHierarchyDataList(new HierarchyDataCopyRecord {
					MappedRecord = mappedCopiedRecords,
					Structures = data.Structures,
					ParentSchemaName = data.SchemaName
				});
			}
			return mappedCopiedRecords.First().Value;
		}

		/// <summary>
		/// Methods get structure by entityName.
		/// </summary>
		/// <param name="schemaName">Entity schema name.</param>
		/// <returns><see cref="HierarchyDataStructure"/>.</returns>
		protected virtual HierarchyDataStructure GetStructure(string schemaName) {
			return HierarchyDataStructureObtainer.ObtainStructureByObtainerStrategy(schemaName);
		}

		/// <summary>
		/// Check if the user has rights to copy record.
		/// </summary>
		/// <param name="schemaName">Entity schema name.</param>
		/// <returns>True if the user has rights otherwise False.</returns>
		protected virtual bool HasRightsToCopyRecord(string schemaName, Guid recordId) {
			return HasRightsOnSchema(schemaName) && HasRightsOnRecord(schemaName, recordId);
		}

		#endregion

		#region Methods: Public 

		/// <summary>
		/// Methods gets HierarchyData and copy records.
		/// </summary>
		/// <param name="schemaName"><see cref="string"/> Entity schema name. </param>
		/// <param name="recordId"><see cref="Guid"/> Main record id. </param>
		/// <returns><see cref="Guid"/> Id of created record.</returns>
		public virtual CopyingResult CopyRecord(string schemaName, Guid recordId) {
			if (!HasRightsToCopyRecord(schemaName, recordId)) {
				var errorMessage = UserConnection.GetLocalizableString("HierarchyDataCopyingController", "RecordRightsErrorMessage");
				return new CopyingResult(errorMessage);
			}

			HierarchyDataStructure hierarchyData = GetStructure(schemaName);
			var copyRecordId = CopyHierarchyData(hierarchyData, recordId);

			return new CopyingResult(copyRecordId); 
		}

		#endregion

	}

	#endregion

}

