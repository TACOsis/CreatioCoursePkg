namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;

	#region Class: QueryFilterInfo

	public class QueryFilterInfo
	{
	}

	#endregion

	#region Class: FilterCollection

	public class FilterCollection : QueryFilterInfo
	{

		#region Properties: Public

		public List<QueryFilterInfo> Filters { get; set; }

		public LogicalOperationStrict LogicalOperation { get; set; }

		#endregion

	}

	#endregion

	#region Class: CompareColumnWithValueFilter

	public class CompareColumnWithValueFilter : QueryFilterInfo
	{

		#region Fields: Private

		private readonly HashSet<FilterComparisonType> _numericComparisonTypes = new HashSet<FilterComparisonType> {
			FilterComparisonType.Greater,
			FilterComparisonType.GreaterOrEqual,
			FilterComparisonType.Less,
			FilterComparisonType.LessOrEqual
		};
		private readonly HashSet<FilterComparisonType> _textComparisonTypes = new HashSet<FilterComparisonType> {
			FilterComparisonType.Equal,
			FilterComparisonType.Contain,
			FilterComparisonType.StartWith,
			FilterComparisonType.EndWith,
			FilterComparisonType.NotEqual,
			FilterComparisonType.NotContain,
			FilterComparisonType.NotStartWith,
			FilterComparisonType.NotEndWith,
		};

		#endregion

		#region Properties: Public

		public string ColumnPath { get; set; }

		public List<object> ParameterValues { get; set; } = new List<object>();

		public FilterComparisonType ComparisonType { get; set; }

		#endregion

		#region Methods: Private

		private TValue SingleOrDefaultValue<TValue>() => ParameterValues.OfType<TValue>().SingleOrDefault();

		private bool TryGetIsTextValueMatched<TValue>(TValue value, out bool valueMatched)
		{
			valueMatched = false;
			var result = false;
			if (!_textComparisonTypes.Contains(ComparisonType) || !(value is string textValue)) {
				return false;
			}
			var filterTextValue = SingleOrDefaultValue<string>();
			switch (ComparisonType) {
				case FilterComparisonType.Equal:
				case FilterComparisonType.NotEqual:
					result = textValue.Equals(filterTextValue, StringComparison.OrdinalIgnoreCase);
					break;
				case FilterComparisonType.Contain:
				case FilterComparisonType.NotContain:
					result = textValue.IndexOf(filterTextValue, StringComparison.OrdinalIgnoreCase) > -1;
					break;
				case FilterComparisonType.StartWith:
				case FilterComparisonType.NotStartWith:
					result = textValue.StartsWith(filterTextValue, StringComparison.OrdinalIgnoreCase);
					break;
				case FilterComparisonType.EndWith:
				case FilterComparisonType.NotEndWith:
					result = textValue.EndsWith(filterTextValue, StringComparison.OrdinalIgnoreCase);
					break;
			}
			switch (ComparisonType) {
				case FilterComparisonType.NotEqual:
				case FilterComparisonType.NotContain:
				case FilterComparisonType.NotStartWith:
				case FilterComparisonType.NotEndWith:
					result = !result;
					break;
			}
			valueMatched = result;
			return true;
		}

		private bool TryGetIsNumericValueMatched<TValue>(TValue value, out bool isValueMatched)
		{
			isValueMatched = false;
			bool result = false;
			if (!_numericComparisonTypes.Contains(ComparisonType) || !(value is IComparable<TValue> valueToCheck)) {
				return false;
			}
			var comparableFilterValue = SingleOrDefaultValue<TValue>();
			switch (ComparisonType) {
				case FilterComparisonType.Greater:
					result = valueToCheck.CompareTo(comparableFilterValue) > 0;
					break;
				case FilterComparisonType.GreaterOrEqual:
					result = valueToCheck.CompareTo(comparableFilterValue) >= 0;
					break;
				case FilterComparisonType.LessOrEqual:
					result = valueToCheck.CompareTo(comparableFilterValue) <= 0;
					break;
				case FilterComparisonType.Less:
					result = valueToCheck.CompareTo(comparableFilterValue) < 0;
					break;
			}
			isValueMatched = result;
			return true;
		}

		#endregion

		#region Methods: Public

		public bool IsSingleColumnValueFilter<TParameterValue>(string path, out TParameterValue parameterValue)
		{
			parameterValue = default;
			if (ColumnPath != path || ParameterValues.Count != 1 ||
				!(ParameterValues[0] is TParameterValue valueOfExpectedType)) {
				return false;
			}
			parameterValue = valueOfExpectedType;
			return true;
		}

		public bool IsEqualsFilter() => ComparisonType == FilterComparisonType.Equal;

		public bool GetIsValueMatched<TValue>(TValue value)
		{
			if (TryGetIsNumericValueMatched(value, out bool numericMatched)) {
				return numericMatched;
			}
			if (TryGetIsTextValueMatched(value, out bool textMatched)) {
				return textMatched;
			}
			if (ComparisonType != FilterComparisonType.Equal && ComparisonType != FilterComparisonType.NotEqual) {
				return false;
			}
			bool result = Equals(SingleOrDefaultValue<TValue>(), value);
			return ComparisonType == FilterComparisonType.Equal ? result : !result;
		}

		#endregion

	}

	#endregion
}

