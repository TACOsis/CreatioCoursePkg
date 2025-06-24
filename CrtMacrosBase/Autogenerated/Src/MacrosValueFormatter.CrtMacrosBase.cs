namespace Terrasoft.Configuration.Utils
{
	using System;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: MacrosValueFormatter

	/// <summary>
	/// Describes entity column value formatter.
	/// </summary>
	public class MacrosValueFormatter
	{

		#region Constructors: Public

		/// <summary>
		/// Constructor for <see cref="MacrosValueFormatter"/>.
		/// </summary>
		/// <param name="userConnection">Instance of <see cref="UserConnection"/>.</param>
		public MacrosValueFormatter(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Current user connection.
		/// </summary>
		public UserConnection UserConnection { get; set; }

		#endregion

		#region Methods: Private

		private string FormatMacroValue(EntityColumnValue value, CultureInfo culture) {
			var columnDataValueType = value.Column.DataValueType;
			if (!columnDataValueType.IsNumeric && !columnDataValueType.IsDateTime) {
				return GetStringValue(value);
			}
			var valueToFormat = value.Value.ToString();
			if (int.TryParse(valueToFormat, out var convertedInteger)) {
				valueToFormat = convertedInteger.ToString("N0", culture);
			} else if (decimal.TryParse(valueToFormat, out var convertedDecimal) &&
						columnDataValueType.Name == "Money") {
				valueToFormat = convertedDecimal.ToString("G", culture);
			} else if (double.TryParse(valueToFormat, out var convertedDouble)) {
				valueToFormat = convertedDouble.ToString("G", culture);
			} else if (DateTime.TryParse(valueToFormat, out var convertedDateTime)) {
				valueToFormat = convertedDateTime.ToString(culture);
			}
			return valueToFormat;
		}

		private bool IsEmptyValue(object value) {
			return value == null || (value is string && string.IsNullOrWhiteSpace((string)value));
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Default implementation of entity column value formatting with culture.
		/// </summary>
		/// <param name="columnValue">Entity column</param>
		/// <param name="cultureCode">Culture code</param>
		/// <returns>Formatted macros value</returns>
		public virtual string GetFormattedStringValue(EntityColumnValue columnValue, string cultureCode) {
			return cultureCode.IsNullOrWhiteSpace() ? GetStringValue(columnValue)
				: FormatMacroValue(columnValue, new CultureInfo(cultureCode));
		}

		/// <summary>
		/// Default implementation of entity column value formatting.
		/// </summary>
		/// <param name="columnValue">Column value</param>
		/// <returns></returns>
		public virtual string GetStringValue(EntityColumnValue columnValue) {
			var column = columnValue.Column;
			if (IsEmptyValue(columnValue.Value)) {
				return string.Empty;
			}
			if (column != null && column.DataValueType is DateTimeDataValueType) {
				return column.DataValueType.GetColumnDisplayValue(column, columnValue.Value);
			}
			return Convert.ToString(columnValue.Value);
		}

		#endregion

	}

	#endregion

}

