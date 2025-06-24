namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	#region Class: QueryExtensions

	/// <summary>
	/// Utility class that provides extension methods for <see cref="Select"/> query expressions to
	/// make them more user-friendly.
	/// </summary>
	public static class QueryExtensions
	{

		#region Delegates: Public

		/// <summary>
		/// Defines the signature of the method that is called for data record transformation.
		/// </summary>
		/// <param name="dataReader">Data reader.</param>
		public delegate T ExecuteReaderTypedReadMethod<out T>(IDataReader dataReader);

		#endregion

		#region Methods: Private

		private static Select AddColumn(Select select, object sourceColumn) {
			return select.Column(AsQueryColumnExpression(sourceColumn));
		}

		private static DBExecutor EnsureSpecialDbExecutor(UserConnection userConnection, QueryKind queryKind) {
			return queryKind == QueryKind.General || !GlobalAppSettings.UseQueryKinds
				? userConnection.EnsureDBConnection()
				: userConnection.EnsureDBConnection(queryKind);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Attempts to convert given object to <see cref="QueryColumnExpression"/>.
		/// Supported types are:
		/// <list type="bullet">
		/// <item><description>
		/// <see cref="QueryColumnExpression"/> - will be treated "as is".
		/// </description></item>
		/// <item><description>
		/// <see cref="string"/> - will be converted to <see cref="QueryColumnExpression"/>
		/// with <see cref="AsQueryColumn(string)"/> function.
		/// </description></item>
		/// <item><description>
		/// <see cref="bool"/> - will be converted to <see cref="QueryColumnExpression"/>
		/// with <see cref="Column.Const(object)"/> function.
		/// </description></item>
		/// <item><description>
		/// <see cref="IQueryColumnExpressionConvertible"/> - expression will be obtained with
		/// <see cref="IQueryColumnExpressionConvertible.GetQueryColumnExpression"/> method of the interface.
		/// </description></item>
		/// </list>
		/// </summary>
		/// <param name="sourceColumn">Source column expression to be converted.</param>
		/// <returns>Source column converted to <see cref="QueryColumnExpression"/>.</returns>
		/// <exception cref="ArgumentNullException"><paramref name="sourceColumn"/> is <c>null</c>.</exception>
		/// <exception cref="ArgumentException">When <paramref name="sourceColumn"/> is of invalid type.</exception>
		/// <exception cref="FormatException">When <paramref name="sourceColumn"/> is invalid string.</exception>
		public static QueryColumnExpression AsQueryColumnExpression(object sourceColumn) {
			switch (sourceColumn) {
				case null:
					throw new ArgumentNullException(nameof(sourceColumn), "Source columns is null");
				case string stringColumn:
					return AsQueryColumn(stringColumn);
				case QueryColumnExpression queryColumn:
					return queryColumn;
				case IQueryColumnExpressionConvertible queryConvertible:
					return queryConvertible.GetQueryColumnExpression();
				case Select subSelect:
					return Column.SubSelect(subSelect);
				case bool boolColumn:
					return Column.Const(boolColumn);
				default:
					string message = $"Source column is of not supported type: {sourceColumn.GetType()}";
					throw new ArgumentException(message, $"{nameof(sourceColumn)} = {sourceColumn}");
			}
		}

		/// <summary>
		/// Converts SQL-like column expression to corresponding <see cref="QueryColumnExpression"/>.
		/// </summary>
		/// <param name="sourceColumnExpression">Column expression with optional source table and alias.</param>
		/// <returns>Parsed <see cref="QueryColumnExpression"/>.</returns>
		/// <exception cref="ArgumentException"><paramref name="sourceColumnExpression"/> is <c>null</c>.</exception>
		/// <exception cref="FormatException">When <paramref name="sourceColumnExpression"/> is invalid.</exception>
		public static QueryColumnExpression AsQueryColumn(this string sourceColumnExpression) {
			if (sourceColumnExpression is null) {
				throw new ArgumentNullException(nameof(sourceColumnExpression));
			}
			if (sourceColumnExpression == "*") {
				return Column.Asterisk();
			}
			var regex = new Regex(@"^((?<table>\w+)\.)?(?<column>\w+)((\s+as)?\s+(?<alias>\w+))?$",
				RegexOptions.IgnoreCase);
			Match match = regex.Match(sourceColumnExpression);
			if (!match.Success) {
				throw new FormatException($"Invalid query column expression: '{sourceColumnExpression}'");
			}
			return new QueryColumnExpression {
				SourceAlias = match.Groups["table"].Value,
				SourceColumnAlias = match.Groups["column"].Value,
				Alias = match.Groups["alias"].Value
			};
		}

		/// <summary>
		/// Adds given columns to query columns collection.
		/// This method calls <see cref="Select.Column(QueryColumnExpression)"/> internally, so it is just a shortcut.
		/// <see cref="AsQueryColumnExpression"/> method would be used to process every column.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add columns.</param>
		/// <param name="sourceColumns">Collection of columns to be added.</param>
		/// <returns>Modified <paramref name="select"/> with newly added columns.</returns>
		/// <exception cref="ArgumentNullException">
		/// When <paramref name="select"/> or one of <paramref name="sourceColumns"/> is <c>null</c>.
		/// </exception>
		/// <exception cref="ArgumentException">
		/// When one of <paramref name="sourceColumns"/> is has not supported type.
		/// </exception>
		public static Select Cols(this Select select, params object[] sourceColumns) {
			if (select is null) {
				throw new ArgumentNullException(nameof(select));
			}
			return sourceColumns.Aggregate(select, AddColumn);
		}

		/// <summary>
		/// Adds given "Count" column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="sourceColumn">"Count" column to add.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select Count(this Select select, object sourceColumn) {
			return AddColumn(select, Func.Count(AsQueryColumnExpression(sourceColumn)));
		}

		/// <summary>
		/// Adds given "Sum" column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="sourceColumn">"Sum" column to add.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select Sum(this Select select, object sourceColumn) {
			return AddColumn(select, Func.Sum(AsQueryColumnExpression(sourceColumn)));
		}

		/// <summary>
		/// Adds given "Avg" column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="sourceColumn">"Avg" column to add.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select Avg(this Select select, object sourceColumn) {
			return AddColumn(select, Func.Avg(AsQueryColumnExpression(sourceColumn)));
		}

		/// <summary>
		/// Adds given "Coalesce" column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="sourceColumns">A collection of columns.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select Coalesce(this Select select, params object[] sourceColumns) {
			QueryColumnExpression[] queryColumnExpressions = sourceColumns.Select(AsQueryColumnExpression).ToArray();
			return AddColumn(select, Func.Coalesce(queryColumnExpressions));
		}

		/// <summary>
		/// Adds given "DateDiff" column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="interval">
		/// Is the part of start date and end date that specifies the type of boundary crossed.
		/// </param>
		/// <param name="startDateExpression">Start date expression.</param>
		/// <param name="endDateExpression">End date expression.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select DateDiff(this Select select, DateDiffQueryFunctionInterval interval,
				object startDateExpression, object endDateExpression) {
			QueryColumnExpression startDate = AsQueryColumnExpression(startDateExpression);
			QueryColumnExpression endDate = AsQueryColumnExpression(endDateExpression);
			return AddColumn(select, Func.DateDiff(interval, startDate, endDate));
		}

		/// <summary>
		/// Adds <see cref="Func.Max(QueryColumnExpression)"/> column to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="sourceColumn">Source column for which function shoud be applied.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select Max(this Select select, object sourceColumn) {
			QueryColumnExpression sourceColumnExpression = AsQueryColumnExpression(sourceColumn);
			return select.Column(Func.Max(sourceColumnExpression));
		}

		/// <summary>
		/// Adds subselect expression to query columns collection.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add sub-query.</param>
		/// <param name="subSelectExpression">
		/// Sub-select expression. Consider <see cref="Select"/> argument for <paramref name="subSelectExpression"/>
		/// function as start of sub-select expression with already resolved <see cref="Core.UserConnection"/>.
		/// </param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select SubSelect(this Select select, Func<Select, Query> subSelectExpression) {
			return select.Column(subSelectExpression(new Select(select.UserConnection)));
		}

		/// <summary>
		/// Adds IsNull expression as column.
		/// </summary>
		/// <param name="select">Source <see cref="Select"/> to add column.</param>
		/// <param name="checkExpression">The check expression.</param>
		/// <param name="replacementValue">The replacement value.</param>
		/// <returns>Modified <paramref name="select"/> with newly added column.</returns>
		public static Select IsNull(this Select select, object checkExpression, object replacementValue) {
			return select.Column(FuncEx.IsNull(checkExpression, replacementValue));
		}

		/// <summary>
		/// Adds table source expression with given schema name and alias to source query.
		/// </summary>
		/// <param name="select">Initial <see cref="Select"/> to add source expression.</param>
		/// <param name="schemaName">Source schema name.</param>
		/// <param name="alias">Source schema alias.</param>
		/// <returns>Modified <paramref name="select"/> with newly added source expression.</returns>
		public static Select From(this Select select, string schemaName, string alias) {
			return select.From(schemaName).As(alias);
		}

		/// <summary>
		/// Generic clone implementation.
		/// </summary>
		/// <typeparam name="T">Type that implements <see cref="ICloneable"/> interface.</typeparam>
		/// <param name="source">The source.</param>
		/// <returns>Typed cloned instance of <paramref name="source"/>.</returns>
		public static T CloneMe<T>(this T source) where T : ICloneable {
			return (T)source.Clone();
		}

		/// <summary>
		/// Executes query and projects each record into a new form.
		/// </summary>
		/// <typeparam name="T">Type of the output collection.</typeparam>
		/// <param name="select">Source <see cref="Select"/> to read data.</param>
		/// <param name="readMethod">Record transformation method.</param>
		/// <returns>
		/// A <see cref="List{T}"/> whose elements are the result of invoking the transform
		/// function on each line read.
		/// </returns>
		/// <remarks>This method buffers all the result before returning. You shouldn't use it for a very big data.
		/// </remarks>
		public static IEnumerable<T> ExecuteEnumerable<T>(this Select select,
				ExecuteReaderTypedReadMethod<T> readMethod) {
			var result = new List<T>();
			using (DBExecutor dbExecutor = EnsureSpecialDbExecutor(select.UserConnection, select.QueryKind)) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						result.Add(readMethod(dataReader)); 
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Reads single record and applies transformation on it.
		/// </summary>
		/// <typeparam name="T">Type of the output item.</typeparam>
		/// <param name="select">Source <see cref="Select"/> to read data.</param>
		/// <param name="readMethod">Record transformation method.</param>
		/// <param name="item">Read and transformed item, or default <see cref="T"/> if nothing was read.</param>
		/// <returns>Returns <c>true</c> if record was read, <c>false</c> otherwise.</returns>
		/// <example>
		/// This sample shows how to call the <see cref="ExecuteSingleRecord{T}"/> method.
		/// <code>
		/// select.ExecuteSingleRecord(reader => new {
		/// 	Id = reader.GetColumnValue&lt;Guid&gt;("Id"),
		/// 	Name = reader.GetColumnValue&lt;string&gt;("Name")
		/// }, out var item);
		/// </code>
		/// </example>
		public static bool ExecuteSingleRecord<T>(this Select select,
				ExecuteReaderTypedReadMethod<T> readMethod, out T item) {
			using (DBExecutor dbExecutor = EnsureSpecialDbExecutor(select.UserConnection, select.QueryKind)) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					if (dataReader.Read()) {
						item = readMethod(dataReader);
						return true;
					}
					item = default(T);
					return false;
				}
			}
		}

		#endregion

	}

	#endregion

	#region Class: FuncEx

	/// <summary>
	/// Utility class that provides more friendly <see cref="Func"/> methods.
	/// </summary>
	public static class FuncEx
	{

		#region Methods: Public

		/// <summary>
		/// Shortcut for <see cref="Func.IsNull(QueryColumnExpression, QueryColumnExpression)"/>> function
		/// which takes any convertable to <see cref="QueryColumnExpression"/>> arguments.
		/// </summary>
		/// <param name="checkExpression">The check expression. See suppotted types in
		/// <see cref="QueryExtensions.AsQueryColumnExpression"/>.</param>
		/// <param name="replacementValue">The replacement value.</param>
		/// <returns></returns>
		public static IsNullQueryFunction IsNull(object checkExpression, object replacementValue) {
			return Func.IsNull(QueryExtensions.AsQueryColumnExpression(checkExpression),
				QueryExtensions.AsQueryColumnExpression(replacementValue));
		}

		#endregion

	}

	#endregion

	#region Class: EntitySchemaQueryFilterCollectionExtensions

	/// <summary>
	/// Utility class that provides extension methods for <see cref="EntitySchemaQueryFilterCollection"/> expressions
	/// to make them more user-friendly.
	/// </summary>
	public static class EntitySchemaQueryFilterCollectionExtensions
	{

		#region Methods: Public

		/// <summary>
		/// Adds length function filter for entity schema query to current filter collection.
		/// </summary>
		/// <param name="filterCollection">Filter collection, which the created filter will be added to.</param>
		/// <param name="schema">Entity schema.</param>
		/// <param name="columnName">Name of column, which should be operand for the function.</param>
		/// <param name="comparisonType">Type of comparison with function.</param>
		/// <param name="value">Value to compare function with.</param>
		/// <returns>Created compare filter like "LEN(column_name) comparison_type value".</returns>
		public static EntitySchemaQueryFilter AddLengthFilter(this EntitySchemaQueryFilterCollection filterCollection,
				EntitySchema schema, string columnName, FilterComparisonType comparisonType, int value) {
			var esq = filterCollection.ParentQuery;
			EntitySchemaQueryFunction function = esq.CreateLengthFunction(
				EntitySchemaQuery.CreateSchemaColumnExpression(schema, columnName));
			var filter = new EntitySchemaQueryFilter(FilterComparisonType.Equal) {
				LeftExpression = new EntitySchemaQueryExpression(function),
				ComparisonType = comparisonType
			};
			filter.RightExpressions.Add(new EntitySchemaQueryExpression(EntitySchemaQueryExpressionType.Parameter) {
				ParameterValue = value
			});
			filterCollection.Add(filter);
			return filter;
		}

		#endregion

	}

	#endregion

}

