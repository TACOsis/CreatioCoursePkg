namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Common;
	using Common.Json;
	using Core.Entities;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;

	#region Interface: IMLMetadataGenerator

	/// <summary>
	/// Generates and validates ML model metadata by select query.
	/// </summary>
	public interface IMLMetadataGenerator
	{

		#region Methods: Public

		/// <summary>
		/// Generates the metadata.
		/// </summary>
		/// <param name="select">The select.</param>
		/// <param name="predefinedMetadata">The predefined metadata.</param>
		/// <param name="outputColumnName">Name of the output column.</param>
		/// <param name="fillColumnsInfo">Indicates if it should be filled information about each column retrieved from
		/// the corresponding schema. I.e. <see cref="ModelSchemaColumn.Caption"/>,
		/// <see cref="ModelSchemaColumn.ReferenceSchemaName"/> etc.</param>
		/// <returns>Generated and merged model metadata.</returns>
		ModelSchemaMetadata GenerateMetadata(Select select, string predefinedMetadata = "",
			string outputColumnName = "", bool fillColumnsInfo = false);

		/// <summary>
		/// Generates metadata by json.
		/// </summary>
		/// <param name="predefinedMetadata">The predefined metadata in JSON format.</param>
		/// <returns>Generated metadata.</returns>
		ModelSchemaMetadata GenerateMetadata(string predefinedMetadata);

		#endregion

	}

	#endregion

	#region Class: MLMetadataGenerator

	/// <summary>
	/// Generates and validates ML model metadata by select query.
	/// </summary>
	[DefaultBinding(typeof(IMLMetadataGenerator))]
	public class MLMetadataGenerator : IMLMetadataGenerator
	{

		#region Constants: Private

		private const string UnknownType = "<< unknown >>";
		private const string NumericType = "Numeric";
		private const string BooleanType = "Boolean";
		private const string DateTimeType = "DateTime";
		private const string TextType = "Text";

		#endregion

		#region Fields: Private

		private static readonly Dictionary<Type, string> _typeMapping = new Dictionary<Type, string> {
			{ typeof(Guid), "Lookup" },
			{ typeof(string), TextType },
			{ typeof(int), NumericType },
			{ typeof(double), NumericType },
			{ typeof(float), NumericType },
			{ typeof(decimal), NumericType },
			{ typeof(bool), BooleanType },
			{ typeof(DateTime), DateTimeType }
		};
		private readonly bool _ignoreUnknownTypes;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLMetadataGenerator"/> class.
		/// </summary>
		/// <param name="ignoreUnknownTypes">if set to <c>true</c> unknown types won't lead to exception.</param>
		public MLMetadataGenerator(bool ignoreUnknownTypes = false) {
			_ignoreUnknownTypes = ignoreUnknownTypes;
		}

		#endregion

		#region Methods: Private

		private EntitySchemaColumn ResolveSchemaColumn(QueryColumnExpression expression,
				Dictionary<string, EntitySchema> tableAliases) {
			switch (expression.ExpressionType) {
				case QueryColumnExpressionType.SourceColumnAlias: {
					EntitySchema schema = FindSchemaOfColumn(expression, tableAliases);
					EntitySchemaColumn column = schema?.Columns.FindByColumnValueName(expression.SourceColumnAlias);
					return column;
				}
				case QueryColumnExpressionType.SubSelect:
					Dictionary<string, EntitySchema> subSelectTableAliases = GetTableSchemas(expression.SubSelect);
					return ResolveSchemaColumn(expression.SubSelect.Columns.First(), subSelectTableAliases);
				case QueryColumnExpressionType.Function:
					if (expression.Function is AggregationQueryFunction aggregationFunction) {
						return ResolveSchemaColumn(aggregationFunction.Expression, tableAliases);
					}
					return null;
				default:
					return null;
			}
		}

		private static string ResolveExpressionType(QueryColumnExpression expression,
				Dictionary<string, EntitySchema> tableAliases) {
			switch (expression.ExpressionType) {
				case QueryColumnExpressionType.SourceColumnAlias:
					return ResolveSourceColumnAliasType(expression, tableAliases);
				case QueryColumnExpressionType.SubSelect:
					Dictionary<string, EntitySchema> subSelectTableAliases = GetTableSchemas(expression.SubSelect);
					return ResolveExpressionType(expression.SubSelect.Columns.FirstOrDefault(), subSelectTableAliases);
				case QueryColumnExpressionType.Function:
					return ResolveFunctionColumnType(expression, tableAliases);
				case QueryColumnExpressionType.Const:
					switch (expression.ConstValue) {
						case int _:
						case decimal _:
						case double _:
							return NumericType;
						case bool _:
							return BooleanType;
						default:
							return UnknownType;
					}
				case QueryColumnExpressionType.Parameter:
					switch (expression.Parameter.Value) {
						case int _:
						case decimal _:
						case double _:
							return NumericType;
						case bool _:
							return BooleanType;
						default:
							return UnknownType;
					}
				default:
					return UnknownType;
			}
		}

		private static string ResolveSourceColumnType(EntitySchema schema, string columnName) {
			var propertyType = schema?.Columns.FirstOrDefault(col => col.ColumnValueName == columnName)?.ValueType;
			if (!(propertyType is null) && _typeMapping.TryGetValue(propertyType, out string typeMapping)) {
				return typeMapping;
			}
			return UnknownType;
		}

		private static string ResolveFunctionColumnType(QueryColumnExpression expression,
				Dictionary<string, EntitySchema> tableAliases) {
			switch (expression.Function) {
				case DateDiffQueryFunction _:
				case DataLengthQueryFunction _:
				case DatePartQueryFunction _:
				case LengthQueryFunction _:
					return NumericType;
				case CurrentDateTimeQueryFunction _:
				case DateAddQueryFunction _:
					return DateTimeType;
				case ConcatQueryFunction _:
				case SubstringQueryFunction _:
				case TrimQueryFunction _:
				case UpperQueryFunction _:
					return TextType;
				case CoalesceQueryFunction coalesce:
					return ResolveExpressionType(coalesce.Expressions.FirstOrDefault(), tableAliases);
				case AggregationQueryFunction aggregate:
					return ResolveAggregationFunctionType(aggregate, tableAliases);
				case IsNullQueryFunction isNull:
					var checkExpressionType = ResolveExpressionType(isNull.CheckExpression, tableAliases);
					if (checkExpressionType.IsNullOrEmpty() || checkExpressionType == UnknownType) {
						return ResolveExpressionType(isNull.ReplacementExpression, tableAliases);
					}
					return checkExpressionType;
				case CastQueryFunction castFunction
					when _typeMapping.TryGetValue(castFunction.CastType.ValueType, out string typeMapping):
					return typeMapping;
				default:
					return UnknownType;
			}
		}

		private static EntitySchema FindSchemaOfColumn(QueryColumnExpression expression,
				Dictionary<string, EntitySchema> tableAliases) {
			if (tableAliases.TryGetValue(expression.SourceAlias ?? string.Empty, out EntitySchema schema)) {
				return schema;
			}
			if (tableAliases.Count == 1) {
				return tableAliases.Values.First();
			}
			return null;
		}

		private static string ResolveSourceColumnAliasType(QueryColumnExpression expression,
				Dictionary<string, EntitySchema> tableAliases) {
			var schema = FindSchemaOfColumn(expression, tableAliases);
			return schema == null ? UnknownType : ResolveSourceColumnType(schema, expression.SourceColumnAlias);
		}

		private static string ResolveAggregationFunctionType(AggregationQueryFunction aggregationFunction,
				Dictionary<string, EntitySchema> tableAliases) {
			switch (aggregationFunction.AggregationType) {
				case AggregationTypeStrict.Count:
				case AggregationTypeStrict.Avg:
				case AggregationTypeStrict.Sum:
					return NumericType;
				case AggregationTypeStrict.Max:
				case AggregationTypeStrict.Min:
					return ResolveSourceColumnAliasType(aggregationFunction.Expression, tableAliases);
				default:
					return UnknownType;
			}
		}

		private static Dictionary<string, EntitySchema> GetTableSchemas(Select select) {
			select.CheckArgumentNull(nameof(select));
			bool SchemaNameIsNotEmpty(QuerySourceExpression expression) => expression.SchemaName.IsNotNullOrEmpty();
			EntitySchemaManager esm = select.UserConnection.EntitySchemaManager;
			var sourceExpressions = new List<QuerySourceExpression> { select.SourceExpression }
				.Concat(select.Joins.Select(join => join.SourceExpression).Where(SchemaNameIsNotEmpty));
			return sourceExpressions
				.ToDictionary(sourceExpression => sourceExpression.Alias ?? sourceExpression.SchemaName,
					sourceExpression => esm.FindInstanceByName(sourceExpression.SchemaName));
		}

		private static void ApplyPredefinedMetadata(ModelSchemaMetadata metadata, string predefinedMetadata) {
			if (!predefinedMetadata.IsNotNullOrWhiteSpace()) {
				return;
			}
			JObject customMetaData;
			try {
				customMetaData = JObject.Parse(predefinedMetadata);
			} catch (Exception) {
				var message = $"Custom metadata has wrong format: {Environment.NewLine}{predefinedMetadata}";
				throw new FormatException(message);
			}
			if (customMetaData.TryGetValue("output", out var output)) {
				metadata.Output = Json.Deserialize<ModelSchemaOutput>(output.ToString());
			}
			if (customMetaData.TryGetValue("inputs", out var customMetaInputs)) {
				List<ModelSchemaInput> customInputs = customMetaInputs.Where(token => !token.Value<bool>("ignore"))
					.Select(item => Json.Deserialize<ModelSchemaInput>(item.ToString())).ToList();
				metadata.Inputs = customInputs;
			}
			if (customMetaData.TryGetValue("params", out var customMetaParams)) {
				metadata.Params = Json.Deserialize<ModelSchemaParams>(customMetaParams.ToString());
			}
		}

		private static void MergeMetadata(ModelSchemaMetadata metadata, List<ModelSchemaInput> autoGeneratedInputs) {
			var inputs = metadata.Inputs;
			var output = metadata.Output;
			var existingItems = inputs.Select(item => item.Name)
				.Union(inputs.Select(item => item.DisplayName)).ToList();
			if (output != null) {
				existingItems.Add(output.Name);
				existingItems.Add(output.DisplayName);
			}
			var additionalItems = autoGeneratedInputs.Where(autogeneratedInput =>
				!existingItems.Contains(autogeneratedInput.Name));
			inputs.AddRange(additionalItems);
		}

		private static IEnumerable<ModelSchemaInput> GetModelInputs(Select select,
				Dictionary<string, EntitySchema> tableAliases) {
			return select.Columns.Select(column => new ModelSchemaInput {
				Name = string.IsNullOrEmpty(column.Alias) ? column.SourceColumnAlias : column.Alias,
				Type = ResolveExpressionType(column, tableAliases)
			});
		}

		private void CheckUnknownTypes(Select select, ModelSchemaMetadata metadata) {
			var message = "Can't automatically determine type for expression(s): {0}. " + Environment.NewLine +
				" Generated query: {1}";
			if (!_ignoreUnknownTypes) {
				var unknownInputs = metadata.Inputs.Where(input => input.Type == UnknownType)
					.Select(input => input.Name).ToList();
				if (unknownInputs.Count > 0) {
					throw new ValidateException(string.Format(message, string.Join(", ", unknownInputs),
						select.GetSqlText()));
				}
			}
		}

		private void FillColumnsInfo(ModelSchemaMetadata metadata, Select select,
				Dictionary<string, EntitySchema> tableAliases) {
			select.Columns.ForEach(column => {
				var modelColumnName = string.IsNullOrEmpty(column.Alias) ? column.SourceColumnAlias : column.Alias;
				ModelSchemaColumn modelColumn = metadata.Inputs.FirstOrDefault(input => input.Name == modelColumnName);
				if (modelColumn == null && metadata.Output?.Name == modelColumnName) {
					modelColumn = metadata.Output;
				}
				if (modelColumn == null) {
					return;
				}
				var schemaColumn = ResolveSchemaColumn(column, tableAliases);
				if (modelColumn.Caption.IsNullOrEmpty()) {
					modelColumn.Caption = schemaColumn?.Caption;
				}
				if (schemaColumn != null && schemaColumn.IsLookupType) {
					modelColumn.ReferenceSchemaName = schemaColumn.ReferenceSchema?.Name;
				}
			});
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Generates the metadata by query.
		/// </summary>
		/// <param name="select">The select query.</param>
		/// <param name="predefinedMetadata">The predefined metadata in JSON format.</param>
		/// <param name="outputColumnName">Name of the output column.</param>
		/// <param name="fillColumnsInfo">Indicates if it should be filled information about each column retrieved from
		/// the corresponding schema. I.e. <see cref="ModelSchemaColumn.Caption"/>,
		/// <see cref="ModelSchemaColumn.ReferenceSchemaName"/> etc.</param>
		/// <returns>Generated and merged model metadata.</returns>
		public ModelSchemaMetadata GenerateMetadata(Select select, string predefinedMetadata = "",
				string outputColumnName = "", bool fillColumnsInfo = false) {
			Dictionary<string, EntitySchema> tableAliases = GetTableSchemas(select);
			var output = new ModelSchemaOutput { Name = outputColumnName, Type = string.Empty };
			var outputColumn = select.Columns.FindByAlias(outputColumnName);
			if (outputColumn != null) {
				output.Type = ResolveExpressionType(outputColumn, tableAliases);
			}
			var metadata = new ModelSchemaMetadata {
				Inputs = new List<ModelSchemaInput>(),
				Output = output
			};
			ApplyPredefinedMetadata(metadata, predefinedMetadata);
			var autoGeneratedInputs = new List<ModelSchemaInput>(GetModelInputs(select, tableAliases)
				.Where(input => input.Name != "Id").ToList());
			MergeMetadata(metadata, autoGeneratedInputs);
			if (fillColumnsInfo) {
				FillColumnsInfo(metadata, select, tableAliases);
			}
			CheckUnknownTypes(select, metadata);
			var modelValidator = ClassFactory.Get<IMLModelValidator>();
			modelValidator.CheckInputColumns(select, metadata);
			return metadata;
		}

		/// <summary>
		/// Generates metadata by json.
		/// </summary>
		/// <param name="predefinedMetadata">The predefined metadata in JSON format.</param>
		/// <returns>Generated metadata.</returns>
		public ModelSchemaMetadata GenerateMetadata(string predefinedMetadata) {
			ModelSchemaMetadata metadata = new ModelSchemaMetadata();
			ApplyPredefinedMetadata(metadata, predefinedMetadata);
			return metadata;
		}

		#endregion

	}

	#endregion

}

