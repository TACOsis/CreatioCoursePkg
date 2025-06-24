 namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Linq.Expressions;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;

	#region Class: ObjectQuery

	internal class ObjectQuery<TObject>
	{

		#region Delegates: Internal

		internal delegate bool FilterItemEvaluator(QueryFilterInfo filterItem, IReadOnlyCollection<TObject> allItems,
			out IReadOnlyCollection<TObject> result);

		#endregion

		#region Class: FilteringContext

		internal class FilteringContext
		{

			#region Properties: Public

			public IList<FilterItemEvaluator> FilterItemEvaluators { get; set; } = new List<FilterItemEvaluator>();

			#endregion

		}

		#endregion

		#region Fields: Private

		private readonly IReadOnlyDictionary<string, string> _columnToPropertyMap;
		private readonly Expression<Func<TObject, object>> _defaultOrdering;

		#endregion

		#region Constructors: Public

		public ObjectQuery(IReadOnlyDictionary<string, string> columnToPropertyMap,
				Expression<Func<TObject, object>> defaultOrdering) {
			_columnToPropertyMap = columnToPropertyMap;
			_defaultOrdering = defaultOrdering;
		}

		#endregion

		#region Methods: Private

		private List<(string, OrderDirection)> GetSortingInfo(EntitySchemaQuery query) {
			return query.Columns
				.Where(c => c.OrderDirection != OrderDirection.None)
				.OrderBy(c => c.OrderPosition)
				.Select(c => (c.Path, c.OrderDirection)).ToList();
		}

		private IQueryable<TObject> GetOrderedDescriptors(EntitySchemaQuery esq, IQueryable<TObject> items) {
			IOrderedQueryable<TObject> ordered = null;
			var sortingInfo = GetSortingInfo(esq);
			foreach ((string, OrderDirection) info in sortingInfo) {
				if (!_columnToPropertyMap.TryGetValue(info.Item1, out var propertyName)) {
					continue;
				}
				if (ordered == null) {
					ordered = info.Item2 == OrderDirection.Ascending
						? items.OrderBy(propertyName)
						: items.OrderByDescending(propertyName);
				} else {
					ordered = info.Item2 == OrderDirection.Ascending
						? ordered.ThenBy(propertyName)
						: ordered.ThenByDescending(propertyName);
				}
			}
			return ordered ?? items.OrderBy(_defaultOrdering);
		}

		private IEnumerable<TObject> GetFilteredItems(IReadOnlyCollection<TObject> source, QueryFilterInfo filterInfo,
				FilteringContext context) {
			if (!(filterInfo is FilterCollection group)) {
				foreach (var filterItemEvaluator in context.FilterItemEvaluators) {
					if (filterItemEvaluator(filterInfo, source, out var result)) {
						return result;
					}
				}
				return ApplyFiltering(source, filterInfo);
			}
			return GetCollectionItemsByFilterGroup(source, group, context);
		}

		private IEnumerable<TObject> GetCollectionItemsByFilterGroup(IReadOnlyCollection<TObject> source,
				FilterCollection group, FilteringContext context) {
			if (!group.Filters.Any()) {
				return source;
			}
			return group.LogicalOperation == LogicalOperationStrict.And
				? GetCollectionByGroupAndTypeFilter(source, group, context)
				: GetCollectionByGroupOrTypeFilter(source, group, context);
		}

		private IEnumerable<TObject> GetCollectionByGroupOrTypeFilter(IReadOnlyCollection<TObject> source,
				FilterCollection group, FilteringContext context) {
			var result = new List<TObject>();
			foreach (var item in group.Filters) {
				var items = GetFilteredItems(source, item, context);
				result.AddRange(items);
			}
			return result.Distinct();
		}
		private IEnumerable<TObject> GetCollectionByGroupAndTypeFilter(IReadOnlyCollection<TObject> source,
				FilterCollection group, FilteringContext context) {
			var result = source.ToHashSet();
			foreach (var item in group.Filters) {
				HashSet<TObject> items = GetFilteredItems(source, item, context).ToHashSet();
				result.IntersectWith(items);
			}
			return result;
		}

		private IEnumerable<TObject> ApplyFiltering(IReadOnlyCollection<TObject> source, QueryFilterInfo filterInfoItem) {
			if (!(filterInfoItem is CompareColumnWithValueFilter simpleFilter)) {
				return Enumerable.Empty<TObject>();
			}
			return _columnToPropertyMap.TryGetValue(simpleFilter.ColumnPath, out var propertyName)
				? source.FilterBy(propertyName, simpleFilter)
				: source;
		}

		#endregion

		#region Methods: Public

		public IEnumerable<TObject> GetItems(IEnumerable<TObject> allItems, EntitySchemaQuery esq,
			QueryFilterInfo filterInfo) =>
			GetItems(allItems as IReadOnlyCollection<TObject> ?? allItems.ToList(), esq, filterInfo,
				new FilteringContext());

		public IEnumerable<TObject> GetItems(IReadOnlyCollection<TObject> allItems, EntitySchemaQuery esq,
				QueryFilterInfo filterInfo, FilteringContext context) {
			IEnumerable<TObject> filteredItems = GetFilteredItems(allItems, filterInfo, context);
			IQueryable<TObject> orderedItems = GetOrderedDescriptors(esq, filteredItems.AsQueryable());
			IEnumerable<TObject> descriptors = orderedItems.Skip(esq.SkipRowCount);
			return esq.RowCount == -1 ? descriptors : descriptors.Take(esq.RowCount);
		}

		#endregion

	}

	#endregion


}

