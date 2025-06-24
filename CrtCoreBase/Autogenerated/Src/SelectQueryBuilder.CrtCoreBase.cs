namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using Terrasoft.Nui.ServiceModel.Extensions;
	using EntitySchema = Terrasoft.Core.Entities.EntitySchema;

	#region Interface: ISelectQueryBuilder

	/// <summary>
	/// Helps to build existing <see cref="Select"/> query with new columns, conditions etc.
	/// </summary>
	public interface ISelectQueryBuilder
	{

		#region Methods: Public

		/// <summary>
		/// Adds columns of the select's root entity schema.
		/// </summary>
		/// <param name="columnUIds">Identifiers of columns to add.</param>
		/// <returns>Current instance of <see cref="ISelectQueryBuilder"/></returns>
		ISelectQueryBuilder AddColumns(IEnumerable<Guid> columnUIds);

		/// <summary>
		/// Adds columns of the select's root entity schema.
		/// </summary>
		/// <param name="columnExpressions">Column expressions.</param>
		/// <returns>Current instance of <see cref="ISelectQueryBuilder"/></returns>
		ISelectQueryBuilder AddColumns(IEnumerable<ColumnExpression> columnExpressions);

		/// <summary>
		/// Adds the filters.
		/// </summary>
		/// <param name="filterEditData">The client-based filter edit data.</param>
		/// <returns>
		/// Current instance of <see cref="ISelectQueryBuilder" />.
		/// </returns>
		ISelectQueryBuilder AddFilters(byte[] filterEditData);

		/// <summary>
		/// Adds the filters.
		/// </summary>
		/// <param name="filterEditData">The client-based filter edit data.</param>
		/// <param name="filtersParentSelect">The select for adding conditions from filter data.</param>
		/// <param name="customPrefix">The custom alias prefix for generated Joins.</param>
		/// <returns>
		/// Current instance of <see cref="ISelectQueryBuilder" />.
		/// </returns>
		ISelectQueryBuilder AddFilters(byte[] filterEditData, Select filtersParentSelect,
			string customPrefix);

		/// <summary>
		/// Gets the mapping between given column expressions and built <see cref="Select" /> column aliases. Current
		/// builder should be built before getting this value.
		/// </summary>
		/// <returns>
		/// Mapping dictionary, where key is <see cref="Select" /> column alias, value is given
		/// <see cref="ColumnExpression"/>.
		/// </returns>
		Dictionary<string, ColumnExpression> GetColumnExpressionMapping();

		/// <summary>
		/// Builds extended query.
		/// </summary>
		/// <returns>
		/// Instance of <see cref="Select" />.
		/// </returns>
		Select Build();

		#endregion

	}

	#endregion

	#region Class: ISelectQueryBuilder

	/// <summary>
	/// Class that helps to build existing <see cref="Select"/> query with new columns, conditions etc.
	/// </summary>
	[DefaultBinding(typeof(ISelectQueryBuilder))]
	public class SelectQueryBuilder : ISelectQueryBuilder
	{

		#region Constants: Private

		private const string Prefix = "__";

		#endregion

		#region Fields: Private

		private readonly Select _select;
		private readonly Dictionary<string, EntitySchemaQuery> _esqByPrefix;
		private readonly HashSet<Guid> _columnUIds = new HashSet<Guid>();
		private readonly Dictionary<ColumnExpression, EntitySchemaQueryColumn> _columnMapping =
			new Dictionary<ColumnExpression, EntitySchemaQueryColumn>();
		private readonly Dictionary<string, string> _replacedColumnAliases = new Dictionary<string, string>();

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="SelectQueryBuilder"/> class.
		/// </summary>
		/// <param name="select">Existing select. This object will be modified after this class methods invoked.
		/// </param>
		public SelectQueryBuilder(Select select) {
			select.CheckArgumentNull(nameof(select));
			_select = select;
			_esqByPrefix = new Dictionary<string, EntitySchemaQuery>();
		}

		#endregion

		#region Methods: Private

		private static void AddConditions(Select targetSelect, QueryCondition conditions) {
			if (targetSelect.Condition.Count > 0) {
				var originalConditions = new QueryCondition(targetSelect.Condition);
				targetSelect.Condition.Clear();
				originalConditions.WrapBlock();
				targetSelect.Condition.Add(originalConditions);
				targetSelect.Condition.Add(new QueryCondition {
					LogicalOperation = LogicalOperation.And
				});
				targetSelect.Condition.Add(conditions);
			}
			else {
				targetSelect.Where(conditions);
			}
		}

		private static EntitySchemaQueryColumn AddEsqColumn(UserConnection userConnection,
				ColumnExpression columnExpression, EntitySchemaQuery esq) {
			if (columnExpression.ColumnPath.IsNotNullOrEmpty()) {
				return esq.AddColumn(columnExpression.ColumnPath);
			}
			if (columnExpression.ExpressionType == EntitySchemaQueryExpressionType.Parameter) {
				var parameter = columnExpression.Parameter;
				return esq.AddColumn(parameter.Value, parameter.GetDataType(userConnection));
			}
			throw new NotImplementedException();
		}

		private static EntitySchemaQueryColumn AddReverseAggregationColumn(UserConnection userConnection,
				ColumnExpression expression, EntitySchemaQuery esq) {
			var column = esq.AddColumn(expression.ColumnPath, expression.AggregationType.ToStrict(), out var subQuery);
			subQuery.SchemaAliasPrefix = Prefix;
			if (expression.SubFilters == null) {
				return column;
			}
			var subQueryFilter = expression.SubFilters.BuildEsqFilter(subQuery.RootSchema.UId, userConnection, Prefix,
				subQuery.RootSchemaAlias);
			subQuery.Filters.Add(subQueryFilter);
			return column;
		}

		private Select GetSelectByFilterData(UserConnection userConnection, byte[] filterEditData,
				string rootSchemaName, string customPrefix) {
			EntitySchema entitySchema = userConnection.EntitySchemaManager.GetInstanceByName(rootSchemaName);
			IEntitySchemaQueryFilterItem filters = CommonUtilities.ConvertClientFilterDataToEsqFilters(userConnection,
				filterEditData, entitySchema.UId, customPrefix);
			var esq = GetEntitySchemaQuery(customPrefix, entitySchema);
			if (filters.GetFilterInstances().IsEmpty()) {
				return esq.GetSelectQuery(userConnection);
			}
			esq.Filters.Add(CommonUtilities.ConvertClientFilterDataToEsqFilters(userConnection,
				filterEditData, entitySchema.UId, customPrefix));
			Select esqSelect = esq.GetSelectQuery(userConnection);
			return esqSelect;
		}

		private EntitySchemaQuery GetEntitySchemaQuery(string customPrefix, EntitySchema entitySchema) {
			if (_esqByPrefix.TryGetValue(customPrefix, out var cachedEsq)) {
				return cachedEsq;
			}
			var esq = new EntitySchemaQuery(entitySchema) {
				IgnoreDisplayValues = true,
				SchemaAliasPrefix = customPrefix
			};
			esq.PrimaryQueryColumn.IsVisible = true;
			_esqByPrefix[customPrefix] = esq;
			return esq;
		}

		private void UpdateBaseSelectJoins(Select esqSelect) {
			if (esqSelect.Columns.Count == 1 && esqSelect.Columns.ExistsByAlias("Id") && !esqSelect.HasCondition) {
				return;
			}
			string rootSchemaName = _select.SourceExpression.SchemaName;
			string rootSchemaAlias = _select.SourceExpression.Alias;
			string esqSelectSourceAlias = esqSelect.SourceExpression.Alias ?? esqSelect.SourceExpression.SchemaName;
			_select.InnerJoin(rootSchemaName).As(esqSelectSourceAlias)
				.On(rootSchemaAlias ?? rootSchemaName, "Id").IsEqual(esqSelectSourceAlias, "Id");
			_select.Joins.AddRange(esqSelect.Joins);
		}

		private string GetRootColumnAlias(string columnName) {
			string rootSchemaName = _select.SourceExpression.SchemaName;
			string rootSchemaAlias = _select.SourceExpression.Alias;
			string sourceAlias = rootSchemaAlias ?? rootSchemaName;
			string columnAlias = $"{Prefix}{sourceAlias}_{columnName}";
			if (columnAlias.Length > DBUtilities.DBMaxValueLength) {
				columnAlias = columnAlias.Substring(0, DBUtilities.DBMaxValueLength);
			}
			return columnAlias;
		}

		private void AddColumnUIds() {
			if (_columnUIds.IsNullOrEmpty()) {
				return;
			}
			UserConnection userConnection = _select.UserConnection;
			string rootSchemaName = _select.SourceExpression.SchemaName;
			string rootSchemaAlias = _select.SourceExpression.Alias;
			EntitySchema entitySchema = userConnection.EntitySchemaManager.GetInstanceByName(rootSchemaName);
			foreach (Guid columnUId in _columnUIds) {
				string columnName = entitySchema.Columns.GetByUId(columnUId).ColumnValueName;
				if (_select.Columns.Any(expression =>
					expression.ExpressionType == QueryColumnExpressionType.SourceColumnAlias &&
					expression.SourceAlias == rootSchemaAlias && expression.SourceColumnAlias == columnName)) {
					continue;
				}
				string sourceAlias = rootSchemaAlias ?? rootSchemaName;
				string columnAlias = GetRootColumnAlias(columnName);
				_replacedColumnAliases[columnName] = columnAlias;
				_select.Column(sourceAlias, columnName).As(columnAlias);
			}
		}

		private void MergeWithEsq() {
			UserConnection userConnection = _select.UserConnection;
			_esqByPrefix.Values.ForEach(esq => {
				var rootColumns = esq.Columns.Where(item =>
						item.Path.IsNotNullOrEmpty() && esq.RootSchema.Columns.FindByName(item.Path) != null)
					.ToList();
				var esqSelect = esq.GetSelectQuery(userConnection);
				var esqColumns = esqSelect.Columns.Where(esqSelectColumn => esqSelectColumn.Alias != "Id").ToList();
				esqColumns.ForEach(item => {
					var rootColumn = rootColumns.FirstOrDefault(column =>
						column.ValueExpression.QueryColumnAlias == item.Alias);
					if (rootColumn != null) {
						item.Alias = GetRootColumnAlias(rootColumn.ValueQueryAlias);
						_replacedColumnAliases[rootColumn.ValueQueryAlias] = item.Alias;
					}
				});
				_select.Columns.AddRange(esqColumns);
				UpdateBaseSelectJoins(esqSelect);
			});
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Adds columns of the select's root entity schema.
		/// </summary>
		/// <param name="columnUIds">Identifiers of columns to add.</param>
		/// <returns>Current instance of <see cref="SelectQueryBuilder"/></returns>
		public ISelectQueryBuilder AddColumns(IEnumerable<Guid> columnUIds) {
			_columnUIds.AddRange(columnUIds);
			return this;
		}

		/// <summary>
		/// Adds columns of the select's root entity schema.
		/// </summary>
		/// <param name="columnExpressions">Column expressions.</param>
		/// <returns>Current instance of <see cref="ISelectQueryBuilder"/></returns>
		public ISelectQueryBuilder AddColumns(IEnumerable<ColumnExpression> columnExpressions) {
			List<ColumnExpression> columnExpressionList = columnExpressions?.ToList();
			if (columnExpressionList.IsNullOrEmpty()) {
				return this;
			}
			UserConnection userConnection = _select.UserConnection;
			string rootSchemaName = _select.SourceExpression.SchemaName;
			EntitySchema entitySchema = userConnection.EntitySchemaManager.GetInstanceByName(rootSchemaName);
			var esq = GetEntitySchemaQuery(Prefix, entitySchema);
			// ReSharper disable once PossibleNullReferenceException
			columnExpressionList.ForEach(columnExpression => {
				_columnMapping[columnExpression] = columnExpression.AggregationType != AggregationType.None
					? AddReverseAggregationColumn(userConnection, columnExpression, esq)
					: AddEsqColumn(userConnection, columnExpression, esq);
			});
			return this;
		}

		/// <summary>
		/// Adds the filters.
		/// </summary>
		/// <param name="filterEditData">The client-based filter edit data.</param>
		/// <returns>
		/// Current instance of <see cref="ISelectQueryBuilder" />.
		/// </returns>
		public ISelectQueryBuilder AddFilters(byte[] filterEditData) {
			return AddFilters(filterEditData, null, Prefix);
		}

		/// <summary>
		/// Adds the filters.
		/// </summary>
		/// <param name="filterEditData">The client-based filter edit data.</param>
		/// <param name="filtersParentSelect">The select for adding conditions from filter data.</param>
		/// <param name="customPrefix">
		/// The custom alias prefix for generated Joins. Default prefix is <c>"__"</c>.
		/// </param>
		/// <returns>
		/// Current instance of <see cref="ISelectQueryBuilder" />.
		/// </returns>
		public ISelectQueryBuilder AddFilters(byte[] filterEditData, Select filtersParentSelect, string customPrefix) {
			if (filterEditData.IsNullOrEmpty()) {
				return this;
			}
			string rootSchemaName = _select.SourceExpression.SchemaName;
			var esqSelect = GetSelectByFilterData(_select.UserConnection, filterEditData, rootSchemaName,
				customPrefix);
			if (esqSelect.Condition.Count == 0) {
				return this;
			}
			AddConditions(filtersParentSelect ?? _select, esqSelect.Condition);
			return this;
		}

		/// <summary>
		/// Gets the mapping between given column expressions and built <see cref="Select" /> column aliases. Current
		/// builder should be built before getting this value.
		/// </summary>
		/// <returns>
		/// Mapping dictionary, where key is <see cref="Select" /> column alias, value is given
		/// <see cref="ColumnExpression"/>.
		/// </returns>
		public Dictionary<string, ColumnExpression> GetColumnExpressionMapping() {
			var mapping = new Dictionary<string, ColumnExpression>();
			foreach (var kvp in _columnMapping) {
				EntitySchemaQueryColumn esqColumn = kvp.Value;
				ColumnExpression columnExpression = kvp.Key;
				if (esqColumn.UseDisplayValue) {
					mapping[esqColumn.DisplayValueQueryAlias] = columnExpression;
				}
				var columnAlias = esqColumn.ValueQueryAlias;
				if (_replacedColumnAliases.TryGetValue(columnAlias, out var replacedAlias)) {
					columnAlias = replacedAlias;
				}
				mapping[columnAlias] = columnExpression;
			}

			return mapping;
		}

		/// <summary>
		/// Builds extended query.
		/// </summary>
		/// <returns>
		/// Instance of <see cref="Select" />.
		/// </returns>
		public Select Build() {
			AddColumnUIds();
			MergeWithEsq();
			return _select;
		}

		#endregion

	}

	#endregion

}

