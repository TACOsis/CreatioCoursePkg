namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.AppFeatures;
	using Terrasoft.Common;
	using Terrasoft.Configuration.Deduplication;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: SimilarLeadQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "SimilarLeadQueryExecutor")]
	public class SimilarLeadQueryExecutor : IEntityQueryExecutor
	{

		#region Fields: Private

		private readonly Core.Entities.EntitySchema _entitySchema;
		private readonly UserConnection _userConnection;
		private readonly IDuplicatesRuleManager _duplicatesRuleManager;

		#endregion

		#region Constructors: Protected

		public SimilarLeadQueryExecutor(UserConnection userConnection,
				IDuplicatesRuleManager duplicatesRuleManager) {
			_userConnection = userConnection;
			_entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName("SimilarLead");
			_duplicatesRuleManager = duplicatesRuleManager;
		}

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection => _userConnection;

		protected Core.Entities.EntitySchema EntitySchema => _entitySchema;

		private IDeduplicationManager _deduplicationManager;
		protected IDeduplicationManager DeduplicationManager =>
			_deduplicationManager ?? (_deduplicationManager = ClassFactory.Get<IDeduplicationManager>());

		private IBulkDeduplicationManagerV2 _bulkDeduplicationManager;
		protected IBulkDeduplicationManagerV2 BulkDeduplicationManagerV2 =>
			_bulkDeduplicationManager ?? (_bulkDeduplicationManager = ClassFactory.Get<IBulkDeduplicationManagerV2>());

		#endregion

		#region Methods: Private


		private EntitySchemaQueryFilter FindLeadIdFilter(EntitySchemaQueryFilterCollection filters,
				bool hasPrimaryColumnFilter = true) =>
			filters.OfType<EntitySchemaQueryFilter>().FirstOrDefault(filter => {
				EntitySchemaQueryExpression leftExpression = filter.LeftExpression;
				if (leftExpression == null) {
					return false;
				}
				return hasPrimaryColumnFilter
					? leftExpression.ExpressionType == EntitySchemaQueryExpressionType.SchemaColumn
						&& leftExpression.SchemaColumn.ParentMetaSchema.Name == "Lead"
						&& leftExpression.SchemaColumn.Name == "Id"
					: leftExpression.ExpressionType == EntitySchemaQueryExpressionType.SchemaColumn
						&& leftExpression.SchemaColumn.Name == "Id";
			});

		private void ExtendWithSearchFilters(EntitySchemaQueryFilterCollection filters,
				EntitySchemaQueryFilterCollection sourceFilters) {
			var leadFilter = FindLeadIdFilter(sourceFilters);
			sourceFilters.ForEach(filter => {
				if (filter != leadFilter) {
					filters.Add(filter);
				}
			});
		}

		// TODO: RND-41388 filter can contain more specific inner filter for lead column (+)
		private Guid FindLeadIdFromFilters(EntitySchemaQueryFilterCollection filters, bool hasPrimaryColumnFilter = true) {
			var leadFilter = FindLeadIdFilter(filters, hasPrimaryColumnFilter);
			Guid.TryParse(leadFilter?.RightExpressions.FirstOrDefault()?.ParameterValue?.ToString(), out var leadId);
			return leadId;
		}

		private FindDuplicatesRequest PrepareFindDuplicatesRequest(Guid leadId) {
			var settings = _duplicatesRuleManager.GetDuplicatesRules("Lead");
			var entitySchema = UserConnection.EntitySchemaManager.FindInstanceByName("Lead");
			var lead = entitySchema.CreateEntity(UserConnection);
			var duplicatesColumnData = settings.SelectMany(x => x.RuleBody.Filters)
				.Where(filter => filter.SchemaName == "Lead")
				.Select(filter => new DuplicatesColumnData {
					ColumnName = filter.ColumnName,
					SchemaName = filter.SchemaName,
					Type = filter.Type,
				})
				.Distinct()
				.Where(x => !x.ColumnName.IsNullOrWhiteSpace()
					&& entitySchema.Columns.Any(col => col.Name == x.ColumnName))
				.ToList();
			var columnNamesToFetch = duplicatesColumnData
				.Select(x => x.ColumnName)
				.ToDictionary(item => item, item => {
					var column = entitySchema.Columns.FirstOrDefault(col => col.Name == item);
					if (!column.IsLookupType) {
						return item;
					}
					return $"{item}Id";
				});
			if (!lead.FetchFromDB(leadId)) {
				return null;
			}
			duplicatesColumnData.ForEach(x =>
				x.Value = new List<string> {
					lead.IsColumnValueLoaded(columnNamesToFetch[x.ColumnName])
						? lead.GetTypedColumnValue<string>(columnNamesToFetch[x.ColumnName])
						: string.Empty
				});
			return new FindDuplicatesRequest {
				PrimaryColumnValue = leadId,
				SchemaName = "Lead",
				Model = duplicatesColumnData,
				Columns = new List<string> { "Id" },
				Type = DuplicatesRuleType.Default
			};
		}

		// TODO: duplicated code from DeduplicationServiceV2.CrtDeduplication.cs
		private IEnumerable<Dictionary<string, string>> ExcludeUniqueFromDuplicates(FindDuplicatesRequest request,
				IEnumerable<Dictionary<string, string>> duplicates) {
			duplicates = duplicates == null ? new List<Dictionary<string, string>>() : duplicates.ToList();
			var filteredRecords = duplicates.Where(record => record.ContainsKey("Id")).ToList();
			var duplicatesIds = filteredRecords.Select(record => new Guid(record["Id"])).ToList();
			var queryDuplicatesIds = duplicatesIds.ToList();
			if (request.PrimaryColumnValue != null) {
				queryDuplicatesIds.Add(request.PrimaryColumnValue.Value);
				filteredRecords.Add(new Dictionary<string, string> {
					{ "Id", request.PrimaryColumnValue.Value.ToString()}
				});
			}
			var uniqueRecords =
				BulkDeduplicationManagerV2.GetUniqueRecordsIdsFromDuplicates(request.SchemaName,
					queryDuplicatesIds);
			var filteredDuplicates = filteredRecords.Where(record => {
				var duplicateId = new Guid(record["Id"]);
				return !uniqueRecords.Contains(duplicateId);
			});
			if (!filteredDuplicates.Any()) {
				return filteredDuplicates;
			}
			return duplicates;
		}

		// TODO: almost the same code at DeduplicationServiceV2.CrtDeduplication.cs
		private IEnumerable<Guid> TryFindDuplicatesFromGlobalSearch(Guid leadId) {
			try {
				var request = PrepareFindDuplicatesRequest(leadId);
				if (request == null) {
					return Enumerable.Empty<Guid>();
				}
				var duplicates = DeduplicationManager.FindDuplicates(request);
				if (duplicates == null) {
					return Enumerable.Empty<Guid>();
				}
				if (UserConnection.GetIsFeatureEnabled("DeduplicationExcludeUniqueRecords") && request.ExcludeUnique) {
					duplicates = ExcludeUniqueFromDuplicates(request, duplicates);
				}
				return duplicates.Select(record => {
					return record.ContainsKey("Id") && Guid.TryParse(record["Id"], out var recordId)
						? recordId
						: Guid.Empty;
				}).Where(x => x.IsNotEmpty());
			}
			catch (Exception ex) {
				throw;
			}
		}

		private bool IsGlobalSearchAvailable() {
			return UserConnection.GetIsFeatureEnabled("ESDeduplication");
		}

		private IEnumerable<Guid> FindDuplicateIds(Guid leadId) {
			if (IsGlobalSearchAvailable()) {
				return TryFindDuplicatesFromGlobalSearch(leadId);
			}
			return new List<Guid>();
		}

		private void AddSourceEsqColumns(EntitySchemaQuery esq, EntitySchemaQuery sourceEsq) {
			esq.AddAllSchemaColumns();
			var uIds = sourceEsq.Columns.Select(column => column.UId);
			var columnsCount = esq.Columns.Count;
			for (var i = columnsCount - 1; i >= 0; i--) {
				var col = esq.Columns[i];
				if (!uIds.Contains(col.UId)) {
					esq.Columns.RemoveAt(i);
				}
			}
		}

		private EntitySchemaQuery GetDuplicatedLeadEsq(EntitySchemaQuery sourceEsq, IEnumerable<Guid> duplicateIds) {
			var count = Math.Min(duplicateIds.Count(), 500);
			var leadSchema = UserConnection.EntitySchemaManager.GetInstanceByName("Lead");
			var esq = new EntitySchemaQuery(leadSchema);
			AddSourceEsqColumns(esq, sourceEsq);
			sourceEsq.Columns.ForEach((column) => {
				if (!esq.Columns.ExistsByPath(column.Path)) {
					esq.AddColumn(column);
				}
				switch (column.OrderDirection) {
					case OrderDirection.Ascending:
						esq.Columns.FindByName(column.Name)?.OrderByAsc();
						break;
					case OrderDirection.Descending:
						esq.Columns.FindByName(column.Name)?.OrderByDesc();
						break;
					case OrderDirection.None:
					default:
						break;
				}
			});
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				"Id", duplicateIds.Take(count).Cast<object>()));
			ExtendWithSearchFilters(esq.Filters, sourceEsq.Filters);
			esq.RowCount = sourceEsq.RowCount;
			return esq;
		}

		private bool GetIsPrimaryColumnValueFilter(QueryFilterInfo filterInfo, out Guid primaryColumnValue) {
			primaryColumnValue = default;
			return filterInfo?.GetIsSingleColumnValueEqualsFilter(EntitySchema.PrimaryColumn.Name,
				out primaryColumnValue) == true;
		}

		#endregion

		#region Methods: Public

		public Core.Entities.EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			var filters = esq.Filters;
			QueryFilterInfo filterInfo = esq.Filters.ParseFilters();
			var isUpdateQuery = GetIsPrimaryColumnValueFilter(filterInfo, out Guid currentFeatureId);
			var idsListForFilter = new List<Guid>();
			if (isUpdateQuery) {
				var leadIdToUpdate = FindLeadIdFromFilters(filters, false);
				idsListForFilter.Add(leadIdToUpdate);
			} else {
				var leadId = FindLeadIdFromFilters(filters);
				var duplicateIds = FindDuplicateIds(leadId);
				if (duplicateIds.IsEmpty()) {
					return new Core.Entities.EntityCollection(UserConnection, "Lead");
				}
				idsListForFilter.AddRange(duplicateIds);
			}
			var duplicatesEsq = GetDuplicatedLeadEsq(esq, idsListForFilter);
			return duplicatesEsq.GetEntityCollection(UserConnection);
		}

		#endregion

	}

	#endregion

}
