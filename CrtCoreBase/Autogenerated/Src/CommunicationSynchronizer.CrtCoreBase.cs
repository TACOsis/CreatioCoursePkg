namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Creatio.FeatureToggling;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	#region Class: CommunicationItem

	/// <summary>
	/// Provides properties for communication item info.
	/// </summary>
	public class CommunicationItem
	{
		#region Properties: Public

		/// <summary>
		/// Communication column name.
		/// </summary>
		public string ColumnName {
			get;
			set;
		}

		/// <summary>
		/// Communication type unique identifier.
		/// </summary>
		public Guid CommunicationTypeId {
			get;
			set;
		}

		/// <summary>
		/// New communication column value.
		/// </summary>
		public string ColumnValue {
			get;
			set;
		}

		/// <summary>
		/// Old communication column value/
		/// </summary>
		public string ColumnOldValue {
			get;
			set;
		}

		/// <summary>
		/// Flag, which represents current value is new.
		/// </summary>
		public bool IsNew {
			get {
				return string.IsNullOrEmpty(ColumnOldValue) && ColumnValue.IsNotNullOrEmpty();
			}
		}

		/// <summary>
		/// Flag, represents current value is changed.
		/// </summary>
		public bool IsChanged {
			get {
				return ColumnOldValue.IsNotNullOrEmpty() && ColumnValue.IsNotNullOrEmpty() && !ColumnOldValue.Equals(ColumnValue);
			}
		}

		/// <summary>
		/// Flag, represents current value is cleared.
		/// </summary>
		public bool IsDeleted {
			get {
				return ColumnOldValue.IsNotNullOrEmpty() && string.IsNullOrEmpty(ColumnValue);
			}
		}

		#endregion
	}

	#endregion

	#region Class: CommunicationSynchronizer

	/// <summary>
	/// Provides methods for synchronizing entity communications with communications detail.
	/// </summary>
	public class CommunicationSynchronizer {

		#region Constants: Private

		private const string DefCommunicationTypeColumnName = "CommunicationType";
		private const string DefPrimaryColumnName = "Primary";
		private const string NumberColumnName = "Number";
		private const string CommunicationSchemaNameTpl = "{0}Communication";

		#endregion

		#region Properties: Private

		private UserConnection UserConnection { get; set; }

		private Entity CurrentEntity { get; set; }

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Columns mapping for communication types.
		/// </summary>
		protected Dictionary<Guid, Dictionary<string, string>> ColumnNamesMap { get; set; }

		/// <summary>
		/// Primary column name. 
		/// Default value is "Primary".
		/// </summary>
		private readonly string _primaryColumnName;
		protected string PrimaryColumnName {
			get {
				return string.IsNullOrEmpty(_primaryColumnName) ? DefPrimaryColumnName : _primaryColumnName;
			}
		}

		/// <summary>
		/// Current saving entity name.
		/// </summary>
		protected string CurrentEntityName {
			get {
				return CurrentEntity.SchemaName;
			}
		}

		/// <summary>
		/// Parent entity name.
		/// </summary>
		private string _parentEntityName;
		protected virtual string ParentEntityName {
			get {
				if (string.IsNullOrWhiteSpace(_parentEntityName)) {
					_parentEntityName = GetParentEntityName();
				}
				return _parentEntityName;
			}
		}

		/// <summary>
		/// Parent entity identifier.
		/// </summary>
		protected virtual Guid ParentEntityId {
			get {
				return CurrentEntity.GetTypedColumnValue<Guid>(LinkedColumnName + "Id");
			}
		}

		/// <summary>
		/// Communication entity name.
		/// </summary>
		protected virtual string CommunicationEntityName {
			get {
				return CurrentEntityName.Contains("Communication")
					? CurrentEntityName
					: string.Format(CommunicationSchemaNameTpl, CurrentEntityName);
			}
		}

		/// <summary>
		/// Column name for link communication entity with parent entity.
		/// </summary>
		protected string LinkedColumnName {
			get;
			private set;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// List of <see cref="CommunicationItem"/> for current entity.
		/// </summary>
		private List<CommunicationItem> _communicationColumnsList;
		public List<CommunicationItem> CommunicationItemsList {
			get {
				return _communicationColumnsList ?? (_communicationColumnsList = new List<CommunicationItem>());
			}
		}

		#endregion

		#region Construcors: Public

		/// <summary>
		/// Initializes instance of synchronizer.
		/// </summary>
		/// <param name="userConnection">User connection instance.</param>
		/// <param name="entity">Current entity.</param>
		public CommunicationSynchronizer(UserConnection userConnection, Entity entity) {
			UserConnection = userConnection;
			CurrentEntity = entity;
			LinkedColumnName = GetLinkedColumnName(CurrentEntityName);
		}

		/// <summary>
		/// Initializes primary column name for synchronizer.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="entity">Current entity.</param>
		/// <param name="primaryColumnName">Primary column name.</param>
		public CommunicationSynchronizer(UserConnection userConnection, Entity entity, string primaryColumnName) {
			UserConnection = userConnection;
			CurrentEntity = entity;
			LinkedColumnName = GetLinkedColumnName(CurrentEntityName);
			_primaryColumnName = primaryColumnName;
		}

		/// <summary>
		/// Initializes column names map for synchronizer.
		/// </summary>
		/// <param name="userConnection">User connection instance.</param>
		/// <param name="entity">Current entity.</param>
		/// <param name="columnNamesMap">Column names mapping by communication type.</param>
		/// <param name="linkedColumnName">Parent entity column name.</param>
		public CommunicationSynchronizer(UserConnection userConnection, Entity entity,
				Dictionary<Guid, Dictionary<string, string>> columnNamesMap, string linkedColumnName) {
			UserConnection = userConnection;
			CurrentEntity = entity;
			ColumnNamesMap = columnNamesMap;
			LinkedColumnName = linkedColumnName;
		}

		#endregion

		#region Methods: Pirvate

		/// <summary>
		/// Removes communication.
		/// </summary>
		/// <param name="communicationItem"><see cref="CommunicationItem"/> instance to remove.</param>
		/// <remarks>Actualizes primary flag column for all records of <see cref="CommunicationItem.CommunicationTypeId"/> type.</remarks>
		private void RemoveCommunication(CommunicationItem communicationItem) {
			ActualizePrimaryState(communicationItem.CommunicationTypeId, CurrentEntity.PrimaryColumnValue);
			Entity communicationEntity = CheckExists(communicationItem);
			if (communicationEntity != null) {
				communicationEntity.Delete();
			}
		}

		/// <summary>
		/// Creates or updates communication.
		/// </summary>
		/// <param name="communicationItem"><see cref="CommunicationItem"/> instance.</param>
		private void CreateOrUpdateCommunication(CommunicationItem communicationItem) {
			Entity communicationEntity = FindPrimaryCommunicationEntity(communicationItem);
			if (communicationEntity == null) {
				ActualizePrimaryState(communicationItem.CommunicationTypeId, CurrentEntity.PrimaryColumnValue);
				communicationEntity = GetCommunicationEntity();
			}
			communicationEntity.SetColumnValue(NumberColumnName, communicationItem.ColumnValue);
			communicationEntity.SetColumnValue(DefCommunicationTypeColumnName + "Id", communicationItem.CommunicationTypeId);
			communicationEntity.SetColumnValue(PrimaryColumnName, true);
			communicationEntity.Save();
		}

		/// <summary>
		/// Returns communication entity.
		/// </summary>
		/// <returns>Instance of <see cref="Entity"/> instance.</returns>
		private Entity GetCommunicationEntity() {
			var schema = UserConnection.EntitySchemaManager.GetInstanceByName(CommunicationEntityName);
			var entity = schema.CreateEntity(UserConnection);
			entity.SetDefColumnValues();
			entity.SetColumnValue(LinkedColumnName + "Id", CurrentEntity.PrimaryColumnValue);
			return entity;
		}

		/// <summary>
		/// Returns primary communication entity by type.
		/// </summary>
		/// <returns>Instance of <see cref="Entity"/> instance.</returns>
		private Entity FindPrimaryCommunicationEntity(CommunicationItem communicationItem) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, CommunicationEntityName);
			esq.AddAllSchemaColumns();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, LinkedColumnName, CurrentEntity.PrimaryColumnValue));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, PrimaryColumnName, true));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, DefCommunicationTypeColumnName, communicationItem.CommunicationTypeId));
			var entities = esq.GetEntityCollection(UserConnection);
			if (entities.Count == 0) {
				return null;
			}
			Entity entity = entities.Count > 1 ? GetPrimaryCommunicationEntityFromMultiple(entities, communicationItem) : entities.First();
			entity.SetDefColumnValues();
			entity.SetColumnValue(LinkedColumnName + "Id", CurrentEntity.PrimaryColumnValue);
			return entity;
		}

		/// <summary>
		/// Returns primary communication entity from list of primary entities.
		/// </summary>
		/// <returns>Instance of <see cref="Entity"/> instance.</returns>
		private Entity GetPrimaryCommunicationEntityFromMultiple(EntityCollection communicationEntities, 
			CommunicationItem communicationItem) {
			var isNewValueExisting = communicationEntities.Any(c => (string)c.GetColumnValue(NumberColumnName) == communicationItem.ColumnValue);
			var comparisonColumnValue = isNewValueExisting ? communicationItem.ColumnValue : communicationItem.ColumnOldValue;
			var communicationEntity = communicationEntities
				.OrderBy(c=> c.GetTypedColumnValue<DateTime>("CreatedOn"))
				.FirstOrDefault(c => c.GetTypedColumnValue<string>(NumberColumnName) == comparisonColumnValue)
			?? communicationEntities
				.OrderBy(c=> c.GetTypedColumnValue<DateTime>("CreatedOn"))
				.First();
			var duplicatePrimaryCommunicationEntitiesIds = communicationEntities.Where(c => 
					c.GetTypedColumnValue<Guid>("Id") != communicationEntity.GetTypedColumnValue<Guid>("Id"))
				.Select(c => c.GetTypedColumnValue<Guid>("Id"));
			var update = new Update(UserConnection, CommunicationEntityName)
				.Set(PrimaryColumnName, Column.Parameter(false))
				.Where("Id").In(Column.Parameters(duplicatePrimaryCommunicationEntitiesIds));
			update.Execute();
			return communicationEntity;
		}

		/// <summary>
		/// Applies communication type filter to <paramref name="esq"/>.
		/// </summary>
		/// <param name="esq">Entity schema query.</param>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		private void ApplyTypeFilter(EntitySchemaQuery esq, Guid communicationTypeId) {
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, DefCommunicationTypeColumnName,
				communicationTypeId));
		}

		/// <summary>
		/// Applies communication value filter to <paramref name="esq"/>.
		/// </summary>
		/// <param name="esq">Entity schema query.</param>
		/// <param name="columnValue">Number value.</param>
		private void ApplyValueFilter(EntitySchemaQuery esq, string columnValue) {
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, NumberColumnName,
				columnValue));
		}

		/// <summary>
		/// Returns linked column name.
		/// </summary>
		/// <returns>Linked column name.</returns>
		private string GetLinkedColumnName(string entitySchemaName) {
			var communicationSchema = UserConnection.EntitySchemaManager.GetInstanceByName(CommunicationEntityName);
			string linkedColumnName = string.Empty;
			foreach (EntitySchemaColumn column in communicationSchema.Columns) {
				if (column.ReferenceSchema != null && column.ReferenceSchema.Name.Equals(entitySchemaName)
						&& !column.UsageType.Equals(EntitySchemaColumnUsageType.Advanced)) {
					linkedColumnName = column.Name;
					break;
				}
			}
			return linkedColumnName;
		}

		private string GetParentEntityName() {
			var communicationSchema = UserConnection.EntitySchemaManager.GetInstanceByName(CommunicationEntityName);
			string parentEntityName = string.Empty;
			var parentEntityColumn = communicationSchema.Columns.FindByName(LinkedColumnName);
			if (parentEntityColumn != null && parentEntityColumn.ReferenceSchema != null) {
				parentEntityName = parentEntityColumn.ReferenceSchema.Name;
			}
			return parentEntityName;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Checks communication exists. 
		/// If communication entity was found, returns it.
		/// </summary>
		/// <param name="communicationItem"><see cref="CommunicationItem"/> instance.</param>
		/// <returns>Communication entity instance.</returns>
		protected virtual Entity CheckExists(CommunicationItem communicationItem) {
			var esq = GetDefCommunicationESQ();
			ApplyTypeFilter(esq, communicationItem.CommunicationTypeId);
			if (communicationItem.IsNew) {
				ApplyValueFilter(esq, communicationItem.ColumnValue);
			} else if (communicationItem.IsChanged || communicationItem.IsDeleted) {
				ApplyValueFilter(esq, communicationItem.ColumnOldValue);
			}
			var resultCollection = esq.GetEntityCollection(UserConnection);
			if (resultCollection.Count > 0) {
				return resultCollection.First();
			}
			return null;
		}

		/// <summary>
		/// Returns default communication entity schema query.
		/// </summary>
		/// <returns>Entity schema query for communication entity.</returns>
		protected virtual EntitySchemaQuery GetDefCommunicationESQ() {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, CommunicationEntityName);
			var createdOnColumn = esq.AddColumn("CreatedOn");
			createdOnColumn.OrderByDesc();
			esq.AddAllSchemaColumns();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				LinkedColumnName, CurrentEntity.PrimaryColumnValue));
			return esq;
		}

		/// <summary>
		/// Checks right for column editing.
		/// </summary>
		/// <param name="schemaName">Name of the entity schema.</param>
		/// <param name="columnName">Name of the column.</param>
		/// <returns>True when column can be edited.</returns>
		protected bool GetCanEditColumn(string schemaName, string columnName) {
			EntitySchemaColumnRightLevel rightLevel = UserConnection.DBSecurityEngine
				.GetEntitySchemaColumnRightLevel(schemaName, columnName, SchemaOperationRightLevels.CanEdit);
			return (rightLevel & EntitySchemaColumnRightLevel.CanEdit) == EntitySchemaColumnRightLevel.CanEdit;
		}

		/// <summary>
		/// Returns parent entity for communication.
		/// </summary>
		/// <param name="columnNames">Names of the entity columns.</param>
		/// <returns>Parent entity for communication.</returns>
		protected virtual Entity GetCommunicationParentEntity(List<string> columnNames = null) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, ParentEntityName);
			if (columnNames == null) {
				esq.AddAllSchemaColumns();
			} else {
				foreach (var columnName in columnNames) {
					esq.AddColumn(columnName);
				}
			}
			return esq.GetEntity(UserConnection, ParentEntityId);
		}

		/// <summary>
		/// Actualizes primary state for communications by <paramref name="communicationTypeId"/>.
		/// </summary>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		/// <param name="parentEntityId">Identifier of parent entity.</param>
		protected void ActualizePrimaryState(Guid communicationTypeId, Guid parentEntityId) {
			var update = new Update(UserConnection, CommunicationEntityName)
				.Set(PrimaryColumnName, Column.Parameter(false))
				.Where(LinkedColumnName + "Id").IsEqual(Column.Parameter(parentEntityId))
				.And(DefCommunicationTypeColumnName + "Id").IsEqual(Column.Parameter(communicationTypeId)) as Update;
			update.Execute();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns last created actual communication by <paramref name="communicationTypeId"/>.
		/// </summary>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		/// <returns>Entity of current actual communication.</returns>
		public virtual Entity FindActualCommunicationByType(Guid communicationTypeId) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, CommunicationEntityName);
			esq.RowCount = 1;
			esq.AddColumn(PrimaryColumnName).OrderByDesc(1);
			esq.AddColumn("CreatedOn").OrderByDesc(2);
			esq.AddAllSchemaColumns();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "CommunicationType",
				communicationTypeId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				ParentEntityName, ParentEntityId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "NonActual", false));
			EntityCollection entityCollection = esq.GetEntityCollection(UserConnection);
			return entityCollection.FirstOrDefault();
		}

		/// <summary>
		/// Actualizes primary state for communications by <paramref name="communicationTypeId"/>.
		/// </summary>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		public virtual void ActualizePrimaryState(Guid communicationTypeId) {
			ActualizePrimaryState(communicationTypeId, ParentEntityId);
		}

		/// <summary>
		/// Sets column values in entity.
		/// </summary>
		/// <param name="columnValues">Collection of column values.</param>
		public virtual void SetParentEntityColumnValues(Dictionary<string, object> columnValues) {
			var update = new Update(UserConnection, ParentEntityName)
			.Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
			.Where("Id").IsEqual(Column.Parameter(ParentEntityId)) as Update;
			var columnsCount = 0;
			foreach (var columnValue in columnValues) {
				if (GetCanEditColumn(ParentEntityName, columnValue.Key)) {
					update.Set(columnValue.Key, Column.Parameter(columnValue.Value));
					columnsCount++;
				}
			}
			if (columnsCount == 0) {
				return;
			}
			update.Execute();
		}

		/// <summary>
		/// Clears communication columns in parent entity by <paramref name="communicationTypeId"/>.
		/// </summary>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		public virtual void ClearParentEntityColumn(Guid communicationTypeId) {
			if (!ColumnNamesMap.ContainsKey(communicationTypeId)) {
				return;
			}
			var columnNames = ColumnNamesMap[communicationTypeId];
			var columnValues = new Dictionary<string, object>();
			foreach (var columnName in columnNames) {
				columnValues[columnName.Value] = string.Empty;
			}
			SetParentEntityColumnValues(columnValues);
		}

		/// <summary>
		/// Sets new value or makes column empty in entity for <paramref name="communicationTypeId"/>.
		/// </summary>
		/// <param name="communicationTypeId">Communication type identifier.</param>
		public virtual void SetNewOrEmptyCommunicationValue(Guid communicationTypeId) {
			if (!ColumnNamesMap.ContainsKey(communicationTypeId)) {
				return;
			}
			var actualCommunication = FindActualCommunicationByType(communicationTypeId);
			if (actualCommunication != null) {
				actualCommunication.SetColumnValue(PrimaryColumnName, true);
				actualCommunication.Save();
			} else {
				ClearParentEntityColumn(communicationTypeId);
			}
		}

		/// <summary>
		/// Synchronizes communication with columns in parent entity.
		/// </summary>
		public virtual void SynchronizeCommunicationWithEntity() {
			var typeId = CurrentEntity.GetTypedColumnValue<Guid>(DefCommunicationTypeColumnName + "Id");
			if (!ColumnNamesMap.ContainsKey(typeId)) {
				return;
			}
			var isPrimary = CurrentEntity.GetTypedColumnValue<bool>(PrimaryColumnName);
			var number = CurrentEntity.GetTypedColumnValue<string>(NumberColumnName);
			var columnNames = ColumnNamesMap[typeId];
			var communicationColumnName = columnNames[NumberColumnName];
			var parentEntityColumnNames = new List<string> {
				communicationColumnName
			};
			var parentEntity = GetCommunicationParentEntity(parentEntityColumnNames);
			if (parentEntity == null) {
				return;
			}
			var currentColumnValue = parentEntity.GetTypedColumnValue<string>(communicationColumnName);
			if (isPrimary && currentColumnValue != number) {
				var columnValues = new Dictionary<string, object>();
				foreach (var columnName in columnNames) {
					columnValues[columnName.Value] = CurrentEntity.GetTypedColumnValue<string>(columnName.Key);
				}
				SetParentEntityColumnValues(columnValues);
			}
		}

		/// <summary>
		/// Removes communications with the same number and communication type.
		/// </summary>
		public virtual void RemoveCommunicationDuplicates() {
			var number = CurrentEntity.GetTypedColumnValue<string>(NumberColumnName);
			var typeId = CurrentEntity.GetTypedColumnValue<Guid>(DefCommunicationTypeColumnName + "Id");
			var id = CurrentEntity.GetTypedColumnValue<Guid>("Id");
			var delete = new Delete(UserConnection)
				.From(CommunicationEntityName)
				.Where(LinkedColumnName + "Id").IsEqual(Column.Parameter(ParentEntityId))
				.And(DefCommunicationTypeColumnName + "Id").IsEqual(Column.Parameter(typeId))
				.And(NumberColumnName).IsEqual(Column.Parameter(number))
				.And("Id").Not().IsEqual(Column.Parameter(id)) as Delete;
			delete.Execute();
		}

		/// <summary>
		/// Checks communications for duplicate with the same number and communication type.
		/// </summary>
		/// <returns>True when communication with the same number and communication type exists.</returns>
		public virtual bool CheckDuplicateCommunication() {
			var number = CurrentEntity.GetTypedColumnValue<string>(NumberColumnName);
			var typeId = CurrentEntity.GetTypedColumnValue<Guid>(DefCommunicationTypeColumnName + "Id");
			var id = CurrentEntity.GetTypedColumnValue<Guid>("Id");
			var select = new Select(UserConnection)
				.From(CommunicationEntityName)
				.Column(Func.Count("Id"))
				.Where(LinkedColumnName + "Id").IsEqual(Column.Parameter(ParentEntityId))
				.And(DefCommunicationTypeColumnName + "Id").IsEqual(Column.Parameter(typeId))
				.And(NumberColumnName).IsEqual(Column.Parameter(number))
				.And("Id").Not().IsEqual(Column.Parameter(id)) as Select;
			select.SpecifyNoLockHints();
			var count = select.ExecuteScalar<int>();
			return count > 0;
		}

		/// <summary>
		/// Initializes communication items properties by <paramref name="communicationsList"/>. 
		/// </summary>
		/// <param name="communicationsList">List of communication columns for current entity.</param>
		public virtual void InitializeCommunicationItems(Dictionary<string, Guid> communicationsList) {
			var entity = CurrentEntity;
			var communicationColumnsList = CommunicationItemsList;
			foreach (var communicationItem in communicationsList) {
				var columnName = communicationItem.Key;
				var oldValue = entity.GetTypedOldColumnValue<string>(columnName);
				var newValue = entity.GetTypedColumnValue<string>(columnName);
				if (newValue.Equals(oldValue)) {
					continue;
				}
				communicationColumnsList.Add(new CommunicationItem {
					ColumnName = columnName,
					ColumnOldValue = oldValue,
					ColumnValue = newValue,
					CommunicationTypeId = communicationItem.Value
				});
			}
		}

		/// <summary>
		/// Synchronizes communications from main entity to detail entity.
		/// </summary>
		public virtual void SynchronizeCommunications() {
			foreach (var communicationItem in CommunicationItemsList) {
				if (communicationItem.IsNew || communicationItem.IsChanged) {
					CreateOrUpdateCommunication(communicationItem);
				}
				if (communicationItem.IsDeleted) {
					RemoveCommunication(communicationItem);
				}
			}
		}

		#endregion

	}

	#endregion

}
