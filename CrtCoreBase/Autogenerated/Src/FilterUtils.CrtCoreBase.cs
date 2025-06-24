namespace Terrasoft.AppFeatures
{
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core.Entities;

	#region Class: FilterUtils

	public static class FilterUtils
	{

		#region Methods: Public

		public static QueryFilterInfo ParseFilters(this IEntitySchemaQueryFilterItem filterItem) {
			while (true) {
				if (filterItem is EntitySchemaQueryFilter filter) {
					EntitySchemaQueryExpressionCollection expressions = filter.RightExpressions;
					if (expressions.All(e => e.ExpressionType != EntitySchemaQueryExpressionType.Parameter)) {
						return null;
					}
					List<object> parameterValues = expressions.Select(e => e.ParameterValue).ToList();
					return new CompareColumnWithValueFilter {
						ComparisonType = filter.ComparisonType,
						ColumnPath = filter.LeftExpression.Path,
						ParameterValues = parameterValues
					};
				}
				if (!(filterItem is EntitySchemaQueryFilterCollection collection)) {
					return null;
				}
				if (collection.Count != 1) {
					List<QueryFilterInfo> filters = collection
						.Where(f => f.IsEnabled)
						.Select(ParseFilters)
						.Where(f => f != null)
						.ToList();
					return new FilterCollection {
						LogicalOperation = collection.LogicalOperation,
						Filters = filters
					};
				}
				filterItem = collection[0];
			}
		}

		public static bool GetIsSingleColumnValueEqualsFilter<T>(this QueryFilterInfo filterInfo, string columnName,
				out T primaryColumnValue) {
			primaryColumnValue = default;
			return filterInfo is CompareColumnWithValueFilter simpleComparisonFilter &&
				simpleComparisonFilter.IsEqualsFilter() &&
				simpleComparisonFilter.IsSingleColumnValueFilter(columnName, out primaryColumnValue);
		}

		#endregion

	}

	#endregion

}

