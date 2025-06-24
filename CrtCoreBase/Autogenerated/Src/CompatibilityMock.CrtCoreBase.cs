#if NETFRAMEWORK && !OldUI

namespace Terrasoft.UI.WebControls.Utilities
{
	using System.Web;

	#region Class: ControlUtilities

	public static class ControlUtilities
	{

		#region Methods: Public

		public static string HtmlDecode(string value) {
			return HttpUtility.HtmlDecode(value);
		}

		#endregion

	}

	#endregion

}

#endif

#if NETSTANDARD || (NETFRAMEWORK && !OldUI)

#region CRM-46542 Реализовать работу DataSourceFilter в .net core
namespace  Terrasoft.UI.WebControls.Utilities.Json.Converters
{
	using System;
	using System.Web;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.UI.WebControls.Controls;

	#region Class: ProcessDataSourceFiltersJsonConverter

	public class ProcessDataSourceFiltersJsonConverter : DataSourceFiltersJsonConverter
	{

		#region Fields: Private

		private readonly ProcessActivity _processActivity;

		#endregion

		#region Constructors: Public

		public ProcessDataSourceFiltersJsonConverter(UserConnection userConnection, EntitySchema schema,
				ProcessActivity processActivity)
			: base(userConnection, schema) {
			_processActivity = processActivity;
		}

		#endregion

		#region Methods: Private

		private void ThrowInvalidRightExpressionParameterValueException(string parameterDisplayValue) {
			string processName = LocalizableString.IsNullOrEmpty(_processActivity.Owner.Schema.Caption) ?
				_processActivity.Owner.Name : _processActivity.Owner.Schema.Caption.Value;
			var processSchema = (ProcessSchema)_processActivity.Owner.Schema;
			LocalizableString processActivityCaption = processSchema.GetBaseElementByUId(
				_processActivity.SchemaElementUId).Caption;
			string processActivityName = LocalizableString.IsNullOrEmpty(processActivityCaption) ?
				_processActivity.Owner.Name : processActivityCaption.Value;
			string exceptionMessage = new LocalizableString("Terrasoft.UI.WebControls",
				"ProcessDataSourceFiltersJsonConverter.Exception.InvalidRightExpressionParameterValue");
			throw new InvalidObjectStateException(string.Format(exceptionMessage, processName, processActivityName,
				parameterDisplayValue));
		}

		#endregion

		#region Methods: Protected

		protected override object DeserializeCustomExpressionParameterValue(string source,
				DataSourceFilterExpression expression, bool useDisplayValue = false, string displayValue = null) {
			if (_processActivity == null || expression.Parameters.Count != 1) {
				return base.DeserializeCustomExpressionParameterValue(source, expression, useDisplayValue,
					displayValue);
			}
			expression.Type = DataSourceFilterExpressionType.Parameter;
			expression.Parameters.RemoveAt(0);
			if (useDisplayValue) {
				return displayValue;
			}
			string parameterValueMetaPath = HttpUtility.HtmlDecode(source);
			parameterValueMetaPath = Json.Deserialize(parameterValueMetaPath).ToString();
			object parameterValue = _processActivity.Owner.GetParameterValueByMetaPath(parameterValueMetaPath);
			if (parameterValue == null) {
				ThrowInvalidRightExpressionParameterValueException(displayValue);
			}
			return parameterValue;
		}

		protected override void WriteDataSourceFilterExpressionType(JsonWriter writer,
				DataSourceFilterExpression dataSourceFilterExpression) {
			if (_processActivity != null && dataSourceFilterExpression.Type == DataSourceFilterExpressionType.Custom &&
					dataSourceFilterExpression.Parameters.Count > 0) {
				writer.WritePropertyName("expressionType");
				writer.WriteValue(DataSourceFilterExpressionType.Parameter.ToString());
			} else {
				base.WriteDataSourceFilterExpressionType(writer, dataSourceFilterExpression);
			}
		}

		protected override void WriteDataSourceExpressionParameterValues(JsonWriter writer,
				DataSourceFilterExpression dataSourceFilterExpression, DataValueType dataValueType) {
			var converters = new JsonConverter[] {
				new GuidJsonConverter(), new CtorDateTimeJsonConverter()
			};
			if (_processActivity != null && dataSourceFilterExpression.Type == DataSourceFilterExpressionType.Custom &&
					dataSourceFilterExpression.Parameters.Count > 0) {
				writer.WritePropertyName("parameterValues");
				writer.WriteStartArray();
				foreach (var item in dataSourceFilterExpression.Parameters) {
					writer.WriteStartObject();
					if (!string.IsNullOrEmpty(item.DisplayValue)) {
						writer.WritePropertyName("displayValue");
						writer.WriteValue(HttpUtility.HtmlEncode(Json.Serialize(item.DisplayValue)));
					}
					writer.WritePropertyName("parameterValue");
					string value = JsonConvert.SerializeObject(
						_processActivity.Owner.GetParameterValueByMetaPath(item.Value.ToString()), converters);
					if (dataValueType.UseClientEncoding) {
						value = HttpUtility.HtmlEncode(value);
					}
					writer.WriteValue(value);
					writer.WriteEndObject();
				}
				writer.WriteEndArray();
			} else {
				base.WriteDataSourceExpressionParameterValues(writer, dataSourceFilterExpression, dataValueType);
			}
		}

		#endregion

	}

	#endregion

	#region Class: DataSourceFiltersJsonConverter

	public class DataSourceFiltersJsonConverter : TerrasoftJsonConverter
	{

		#region Fields: Private

		private readonly DataSource _dataSource;
		private readonly EntitySchema _schema;
		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public DataSourceFiltersJsonConverter(UserConnection userConnection, EntitySchema entitySchema, ProcessActivity processActivity) {
			throw new NotImplementedException();
		}

		public DataSourceFiltersJsonConverter(UserConnection userConnection, DataSource dataSource) {
			_userConnection = userConnection;
			if (dataSource == null) {
				throw new ArgumentNullException("dataSource");
			}
			_dataSource = dataSource;
			_schema = dataSource.Schema;
		}

		public DataSourceFiltersJsonConverter(UserConnection userConnection, EntitySchema schema) {
			_userConnection = userConnection;
			_schema = schema;
		}

		#endregion

		#region Properties: Public

		public bool PreventRegisteringClientScript {
			get;
			set;
		}

		#endregion

		#region Methods: Private

		private void WriteDataSourceFilterExpression(JsonWriter writer,
				DataSourceFilterExpression dataSourceFilterExpression, DataSourceFilter filter,
				JsonSerializer serializer) {
			var dataValueTypeWriter = new DataValueTypeJsonConverter();
			DataValueType dataValueType;
			writer.WriteStartObject();
			WriteDataSourceFilterExpressionType(writer, dataSourceFilterExpression);
			if (dataSourceFilterExpression.Type == DataSourceFilterExpressionType.Aggregation) {
				writer.WritePropertyName("aggregationType");
				writer.WriteValue(dataSourceFilterExpression.AggregationType.ToString());
				writer.WritePropertyName("clearDataValueType");
				dataValueType = filter.LeftExpression.GetEntitySchemaQueryExpression(null,
					filter.RootSchema, false, DataSourceFilterExpressionType.SchemaColumn)
					.GetResultDataValueType(_userConnection.DataValueTypeManager);
				dataValueTypeWriter.WriteJson(writer, dataValueType, serializer);
			}
			if (dataSourceFilterExpression.Type == DataSourceFilterExpressionType.Macros) {
				writer.WritePropertyName("macrosType");
				writer.WriteValue(dataSourceFilterExpression.MacrosType.ToString());
			}
			if (dataSourceFilterExpression.Type != DataSourceFilterExpressionType.Parameter &&
					dataSourceFilterExpression.Type != DataSourceFilterExpressionType.Macros &&
					dataSourceFilterExpression.Type != DataSourceFilterExpressionType.Custom) {
				writer.WritePropertyName("metaPath");
				writer.WriteValue(filter.RootSchema.GetSchemaColumnMetaPathByPath(
					dataSourceFilterExpression.TargetColumnPath));
			}
			EntitySchemaQueryExpression expression = null;
			switch (dataSourceFilterExpression.Type) {
				case DataSourceFilterExpressionType.SchemaColumn: {
						expression = dataSourceFilterExpression.GetEntitySchemaQueryExpression(null, filter.RootSchema);
						break;
					}
				case DataSourceFilterExpressionType.Exists:
				case DataSourceFilterExpressionType.Aggregation: {
						expression = dataSourceFilterExpression.GetEntitySchemaQueryExpression(null, filter.RootSchema,
							false, DataSourceFilterExpressionType.SchemaColumn);
						break;
					}
			}
			if (expression != null) {
				string caption = string.IsNullOrEmpty(dataSourceFilterExpression.Caption) ? expression.GetCaption() :
					dataSourceFilterExpression.Caption;
				if (!string.IsNullOrEmpty(caption)) {
					writer.WritePropertyName("caption");
					writer.WriteValue(caption);
				}
				if (expression.SchemaColumn.ReferenceSchema != null) {
					writer.WritePropertyName("referenceSchemaUId");
					writer.WriteValue(expression.SchemaColumn.ReferenceSchemaUId.ToString());
				}
			}
			if (dataSourceFilterExpression.Type == DataSourceFilterExpressionType.Function) {
				writer.WritePropertyName("functionName");
				writer.WriteValue(dataSourceFilterExpression.Function.ToString());
				writer.WritePropertyName("functionParameters");
				writer.WriteStartArray();
				foreach (var item in dataSourceFilterExpression.FunctionParameters) {
					writer.WriteStartObject();
					writer.WritePropertyName("funcParameterName");
					writer.WriteValue(item.Key);
					writer.WritePropertyName("funcParameterValue");
					if (item.Value is DBDataValueType) {
						writer.WriteValue((item.Value as DBDataValueType).Name);
					} else {
						writer.WriteValue(Json.Serialize(item.Value));
					}
					writer.WriteEndObject();
				}
				writer.WriteEndArray();
			}
			writer.WritePropertyName("dataValueType");
			dataValueType = dataSourceFilterExpression.DataValueType;
			if (dataValueType == null) {
				var dsfExpression = filter.IsComparisonTypeExists
					? filter.RightExpression
					: filter.LeftExpression;
				dataValueType = dsfExpression.GetEntitySchemaQueryExpression(null,
					filter.RootSchema).GetResultDataValueType(_userConnection.DataValueTypeManager);
			}
			if (dataValueType is FloatDataValueType) {
				dataValueTypeWriter = new FloatDataValueTypeJsonConverter();
			}
			dataValueTypeWriter.WriteJson(writer, dataValueType, serializer);
			WriteDataSourceExpressionParameterValues(writer, dataSourceFilterExpression, dataValueType);
			writer.WriteEndObject();
		}

		private void WriteFilterItem(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var dataSourceFilter = (DataSourceFilter)value;
			writer.WriteStartObject();
			writer.WritePropertyName("_isFilter");
			writer.WriteValue(true);
			if (dataSourceFilter.RootSchema.EntitySchemaManager.Name != "EntitySchemaManager") {
				writer.WritePropertyName("entitySchemaManagerName");
				writer.WriteValue(dataSourceFilter.RootSchema.EntitySchemaManager.Name);
			}
			if (dataSourceFilter.RootSchema.Kind != EntitySchemaKind.General) {
				writer.WritePropertyName("entitySchemaKind");
				writer.WriteValue(dataSourceFilter.RootSchema.Kind);
			}
			if (dataSourceFilter.RootSchema.UId.IsNotEmpty()) {
				writer.WritePropertyName("_filterSchemaUId");
				writer.WriteValue(dataSourceFilter.RootSchema.UId.ToString());
			}
			if (!dataSourceFilter.IsEnabled) {
				writer.WritePropertyName("isEnabled");
				writer.WriteValue(dataSourceFilter.IsEnabled);
			}
			if (!dataSourceFilter.UId.IsEmpty()) {
				writer.WritePropertyName("uId");
				writer.WriteValue(dataSourceFilter.UId.ToString());
			}
			if (!string.IsNullOrEmpty(dataSourceFilter.Name)) {
				writer.WritePropertyName("name");
				writer.WriteValue(dataSourceFilter.Name);
			}
			if (dataSourceFilter.UseDisplayValue) {
				writer.WritePropertyName("useDisplayValue");
				writer.WriteValue(dataSourceFilter.UseDisplayValue);
			}
			if (dataSourceFilter.TrimDateTimeParameterToDate) {
				writer.WritePropertyName("trimDateTimeParameterToDate");
				writer.WriteValue(dataSourceFilter.TrimDateTimeParameterToDate);
			}
			if (dataSourceFilter.SubFilters != null) {
				writer.WritePropertyName("subFilters");
				WriteJson(writer, dataSourceFilter.SubFilters, serializer);
			}
			if (dataSourceFilter.LeftExpression.Type != DataSourceFilterExpressionType.None) {
				writer.WritePropertyName("leftExpression");
				WriteDataSourceFilterExpression(writer, dataSourceFilter.LeftExpression, dataSourceFilter, serializer);
			}
			writer.WritePropertyName("comparisonType");
			writer.WriteValue(dataSourceFilter.ComparisonType.ToString());
			if (dataSourceFilter.RightExpression != null &&
					dataSourceFilter.RightExpression.Type != DataSourceFilterExpressionType.None) {
				writer.WritePropertyName("rightExpression");
				WriteDataSourceFilterExpression(writer, dataSourceFilter.RightExpression, dataSourceFilter, serializer);
			}
			writer.WriteEndObject();
		}

		private void WriteFilterItemsCollection(JsonWriter writer, object value, JsonSerializer serializer) {
			var filters = (DataSourceFilterCollection)value;
			writer.WriteStartObject();
			writer.WritePropertyName("_isFilter");
			writer.WriteValue(false);
			if (!filters.UId.IsEmpty()) {
				writer.WritePropertyName("uId");
				writer.WriteValue(filters.UId.ToString());
			}
			if (filters.IsNot) {
				writer.WritePropertyName("isNot");
				writer.WriteValue(filters.IsNot);
			}
			if (filters.Name != null) {
				writer.WritePropertyName("name");
				writer.WriteValue(filters.Name);
			}
			if (!filters.IsEnabled) {
				writer.WritePropertyName("isEnabled");
				writer.WriteValue(filters.IsEnabled);
			}
			if (filters.LogicalOperation != LogicalOperationStrict.And) {
				writer.WritePropertyName("logicalOperation");
				writer.WriteValue(filters.LogicalOperation.ToString());
			}
			writer.WritePropertyName("items");
			writer.WriteStartArray();
			foreach (IDataSourceFilterItem item in filters) {
				var filtersGroup = item as DataSourceFilterCollection;
				if (filtersGroup != null) {
					WriteJson(writer, filtersGroup, serializer);
					continue;
				}
				WriteFilterItem(writer, item, serializer);
			}
			writer.WriteEndArray();
			writer.WriteEndObject();
		}

		private LogicalOperationStrict GetLogicalOperaion(string source) {
			return (LogicalOperationStrict)Enum.Parse(typeof(LogicalOperationStrict), source);
		}

		private FilterComparisonType GetComparisonType(string source) {
			return (FilterComparisonType)Enum.Parse(typeof(FilterComparisonType), source);
		}

		private AggregationTypeStrict GetAggreagtionType(string source) {
			return (AggregationTypeStrict)Enum.Parse(typeof(AggregationTypeStrict), source);
		}

		private EntitySchemaQueryMacrosType GetMacrosType(string source) {
			return (EntitySchemaQueryMacrosType)Enum.Parse(typeof(EntitySchemaQueryMacrosType), source);
		}

		private DataSourceFilterFunction GetFunction(string source) {
			return (DataSourceFilterFunction)Enum.Parse(typeof(DataSourceFilterFunction), source);
		}

		private EntitySchemaKind GetEntitySchemaKind(string source) {
			return (EntitySchemaKind)Enum.Parse(typeof(EntitySchemaKind), source);
		}

		private DataSourceFilterExpression DeserializeFilterExpresion(JsonReader reader, Type objectType,
				EntitySchema rootSchema, JsonSerializer serializer, bool useDisplayValue = false) {
			var expression = new DataSourceFilterExpression();
			if (reader.TokenType != JsonToken.StartObject) {
				return null;
			}
			DataValueType dataValueType = null;
			while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
				string propertyName = reader.Value.ToString();
				reader.Read();
				switch (propertyName) {
					case "expressionType":
						expression.Type = GetExpressionType(reader.Value.ToString());
						break;
					case "aggregationType":
						expression.AggregationType = GetAggreagtionType(reader.Value.ToString());
						break;
					case "metaPath":
						expression.TargetColumnPath = rootSchema.GetSchemaColumnPathByMetaPath(reader.Value.ToString());
						break;
					case "caption":
						expression.Caption = reader.Value.ToString();
						break;
					case "referenceSchemaUId":
						expression.RefernceSchemaUId = new Guid(reader.Value.ToString());
						break;
					case "macrosType":
						expression.MacrosType = GetMacrosType(reader.Value.ToString());
						break;
					case "functionName":
						expression.Function = GetFunction(reader.Value.ToString());
						break;
					case "functionParameters":
						DeserealizeFunctionParameters(reader, rootSchema, expression, useDisplayValue);
						break;
					case "dataValueType":
						while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
							propertyName = reader.Value.ToString();
							reader.Read();
							switch (propertyName) {
								case "editor":
									while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
									}
									break;
								case "name":
									expression.DataValueType = dataValueType =
										_userConnection.DataValueTypeManager.GetInstanceByName(reader.Value.ToString());
									break;
							}
						}
						break;
					case "clearDataValueType":
						while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
							propertyName = reader.Value.ToString();
							reader.Read();
							switch (propertyName) {
								case "editor":
									while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
									}
									break;
								case "name":
									while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
									}
									break;
							}
						}
						break;
					case "parameterValues":
						DeserealizeExpressionParameters(reader, rootSchema, expression, dataValueType, useDisplayValue);
						break;
				}
			}
			return expression;
		}

		private void DeserealizeFunctionParameters(JsonReader reader, EntitySchema rootSchema,
				DataSourceFilterExpression expression, bool useDisplayValue = false) {
			if (reader.TokenType == JsonToken.StartArray) {
				string propertyName = string.Empty;
				string funcParameterName = string.Empty;
				object funcParameterValue = null;
				while (reader.Read() && reader.TokenType != JsonToken.EndArray) {
					if (reader.TokenType == JsonToken.EndObject) {
						expression.FunctionParameters.Add(funcParameterName, funcParameterValue);
						funcParameterName = string.Empty;
						funcParameterValue = null;
						continue;
					}
					if (reader.TokenType == JsonToken.StartObject) {
						reader.Read();
					}
					propertyName = reader.Value.ToString();
					switch (propertyName) {
						case "funcParameterName": {
								reader.Read();
								funcParameterName = reader.Value.ToString();
								break;
							}
						case "funcParameterValue": {
								reader.Read();
								switch (funcParameterName) {
									case "DatePartFunctionInterval": {
											funcParameterValue = (EntitySchemaDatePartQueryFunctionInterval)Enum.Parse(
												typeof(EntitySchemaDatePartQueryFunctionInterval),
												reader.Value.ToString());
											break;
										}
									case "CastType": {
											funcParameterValue = _userConnection.DataValueTypeManager.GetInstanceByName(
												reader.Value.ToString());
											break;
										}
									default: {
											funcParameterValue = Json.Deserialize(reader.Value.ToString());
											break;
										}
								}
								break;
							}
					}
				}
			}
		}

		private bool GetIsNotSetExpressionParameterValue(DataValueType dataValueType, object value) {
			return value == null || (dataValueType.ValueType == typeof(DateTime) && value.ToString() == "\"\"");
		}

		private void DeserealizeExpressionParameters(JsonReader reader, EntitySchema rootSchema,
				DataSourceFilterExpression expression, DataValueType dataValueType, bool useDisplayValue = false) {
			if (reader.TokenType != JsonToken.StartArray) {
				return;
			}
			string key = string.Empty;
			object value = null;
			while (reader.Read() && reader.TokenType != JsonToken.EndArray) {
				if (reader.TokenType == JsonToken.EndObject) {
					if (value != null) {
						expression.Parameters.Add(new DataSourceFilterExpressionParameterValue(key, value));
					}
					continue;
				}
				if (reader.TokenType == JsonToken.StartObject) {
					reader.Read();
				}
				string propertyName = reader.Value.ToString();
				switch (propertyName) {
					case "displayValue":
						reader.Read();
						object keyObj = null;
						if (reader.TokenType != JsonToken.Null && reader.Value != null) {
							keyObj = Json.Deserialize(HttpUtility.HtmlDecode(reader.Value.ToString()));
						}
						key = keyObj != null ? keyObj.ToString() : string.Empty;
						break;
					case "parameterValue":
						reader.Read();
						if (GetIsNotSetExpressionParameterValue(dataValueType, reader.Value)) {
							value = null;
						} else {
							string source = reader.Value.ToString();
							if (expression.Type == DataSourceFilterExpressionType.Custom) {
								value =
									DeserializeCustomExpressionParameterValue(source, expression, useDisplayValue, key);
							} else {
								if (useDisplayValue) {
									value = key;
									break;
								}
								JsonConverter[] converters = dataValueType.ValueType == typeof(DateTime)
									? source.Contains("new Date")
										? new JsonConverter[] { new CtorDateTimeJsonConverter() }
										: new JsonConverter[] { new DateTimeJsonConverter() }
									: new JsonConverter[] { };
								if (dataValueType.UseClientEncoding) {
									source = HttpUtility.HtmlDecode(source);
								}
								value = JsonConvert.DeserializeObject(source, dataValueType.ValueType, converters);
							}
						}
						break;
				}
			}
		}

		private DataSourceFilter DeserializeFilter(JsonReader reader, Type objectType,
				DataSourceFilterCollection parentGroup, JsonSerializer serializer) {
			bool isEnabled = true;
			bool trimDateTimeParameterToDate = false;
			Guid uId = Guid.Empty;
			EntitySchemaManager schemaManager = _userConnection.EntitySchemaManager;
			EntitySchema schema = _schema;
			var schemaKind = EntitySchemaKind.General;
			var comparisonType = FilterComparisonType.Equal;
			bool useDisplayValue = false;
			string name = string.Empty;
			var leftExpression = new DataSourceFilterExpression(DataSourceFilterExpressionType.None);
			DataSourceFilterExpression rightExpression = null;
			DataSourceFilterCollection subFilters = null;
			while (reader.Read() && reader.TokenType != JsonToken.EndObject) {
				string propertyName = reader.Value.ToString();
				reader.Read();
				switch (propertyName) {
					case "entitySchemaManagerName":
						schemaManager = (EntitySchemaManager)_userConnection
							.GetSchemaManager(reader.Value.ToString());
						break;
					case "entitySchemaKind":
						schemaKind = GetEntitySchemaKind(reader.Value.ToString());
						break;
					case "_filterSchemaUId":
						var schemaUId = new Guid(reader.Value.ToString());
						schema = schemaManager.FindInstanceByUId(schemaUId);
						if (schemaKind != EntitySchemaKind.General) {
							schema = schema.GetEntitySchemaByKind(schemaKind);
						}
						break;
					case "uId":
						uId = new Guid(reader.Value.ToString());
						break;
					case "name":
						name = reader.Value.ToString();
						break;
					case "comparisonType":
						comparisonType = GetComparisonType(reader.Value.ToString());
						break;
					case "isEnabled":
						isEnabled = (bool)reader.Value;
						break;
					case "trimDateTimeParameterToDate":
						trimDateTimeParameterToDate = (bool)reader.Value;
						break;
					case "subFilters":
						subFilters = DeserializeFiltersGroup(reader, objectType, serializer);
						break;
					case "useDisplayValue":
						useDisplayValue = (bool)reader.Value;
						break;
					case "leftExpression":
						leftExpression =
							DeserializeFilterExpresion(reader, objectType, schema, serializer, useDisplayValue);
						break;
					case "rightExpression":
						rightExpression =
							DeserializeFilterExpresion(reader, objectType, schema, serializer, useDisplayValue);
						break;
				}
			}
			rightExpression =
				(comparisonType == FilterComparisonType.IsNull || comparisonType == FilterComparisonType.IsNotNull) ?
					null : rightExpression;
			var filter = new DataSourceFilter(schema, comparisonType, leftExpression, rightExpression) {
				UId = uId,
				IsEnabled = isEnabled,
				Name = name,
				TrimDateTimeParameterToDate = trimDateTimeParameterToDate,
				UseDisplayValue = rightExpression != null && useDisplayValue,
				SubFilters = subFilters
			};
			reader.Read();
			if (parentGroup == null) {
				return filter;
			}
			parentGroup.Add(filter);
			if (filter.SubFilters != null) {
				filter.SubFilters.ParentGroup = filter.ParentGroup;
				filter.SubFilters.ParentItem = filter;
			}
			return null;
		}

		private DataSourceFilterCollection DeserializeFiltersGroup(JsonReader reader, Type objectType,
				JsonSerializer serializer) {
			DataSourceFilterCollection filtersGroup = new DataSourceFilterCollection();
			while (reader.Read() && reader.TokenType != JsonToken.EndObject && reader.TokenType != JsonToken.EndArray) {
				string propertyName = reader.Value.ToString();
				reader.Read();
				switch (propertyName) {
					case "uId":
						filtersGroup.UId = new Guid(reader.Value.ToString());
						break;
					case "isNot":
						filtersGroup.IsNot = (bool)reader.Value;
						break;
					case "name":
						filtersGroup.Name = reader.Value.ToString();
						break;
					case "isEnabled":
						filtersGroup.IsEnabled = (bool)reader.Value;
						break;
					case "logicalOperation":
						filtersGroup.LogicalOperation = GetLogicalOperaion(reader.Value.ToString());
						break;
					case "items":
						reader.Read();
						if (reader.TokenType != JsonToken.EndArray) {
							DeserializeFilters(reader, objectType, serializer, filtersGroup);
						}
						break;
				}
			}
			return filtersGroup;
		}

		private IDataSourceFilterItem DeserializeFilters(JsonReader reader, Type objectType,
				JsonSerializer serializer, DataSourceFilterCollection parentGroup) {
			DataSourceFilterCollection filtersGroup = null;
			while (reader.Read() && reader.TokenType != JsonToken.EndObject && reader.TokenType != JsonToken.EndArray) {
				if (reader.TokenType == JsonToken.StartObject) {
					continue;
				}
				string propertyName = reader.Value.ToString();
				reader.Read();
				if (propertyName == "_isFilter") {
					var isFilter = (bool)reader.Value;
					if (isFilter) {
						DataSourceFilter filter = DeserializeFilter(reader, objectType, parentGroup, serializer);
						if (filter != null || reader.TokenType == JsonToken.EndArray) {
							return filter;
						}
					} else {
						filtersGroup = DeserializeFiltersGroup(reader, objectType, serializer);
						if (parentGroup != null) {
							parentGroup.Add(filtersGroup);
						}
					}
				}
			}
			return filtersGroup;
		}

		#endregion

		#region Methods: Protected

		protected virtual DataSourceFilterExpressionType GetExpressionType(string source) {
			return (DataSourceFilterExpressionType)Enum.Parse(typeof(DataSourceFilterExpressionType), source);
		}

		protected virtual object DeserializeCustomExpressionParameterValue(string source,
				DataSourceFilterExpression expression, bool useDisplayValue = false, string displayValue = null) {
					return !useDisplayValue ? Json.Deserialize(HttpUtility.HtmlDecode(source)) : displayValue;
		}

		protected virtual void WriteDataSourceFilterExpressionType(JsonWriter writer,
				DataSourceFilterExpression dataSourceFilterExpression) {
			writer.WritePropertyName("expressionType");
			writer.WriteValue(dataSourceFilterExpression.Type.ToString());
		}

		protected virtual void WriteDataSourceExpressionParameterValues(JsonWriter writer,
				DataSourceFilterExpression dataSourceFilterExpression, DataValueType dataValueType) {
			if (dataSourceFilterExpression.Type != DataSourceFilterExpressionType.Parameter &&
					dataSourceFilterExpression.Parameters.Count <= 0) {
				return;
			}
			var converters = new JsonConverter[] { new GuidJsonConverter(), new CtorDateTimeJsonConverter() };
			writer.WritePropertyName("parameterValues");
			writer.WriteStartArray();
			foreach (DataSourceFilterExpressionParameterValue item in dataSourceFilterExpression.Parameters) {
				writer.WriteStartObject();
				if (!string.IsNullOrEmpty(item.DisplayValue)) {
					writer.WritePropertyName("displayValue");
					writer.WriteValue(HttpUtility.HtmlEncode(Json.Serialize(item.DisplayValue)));
				}
				writer.WritePropertyName("parameterValue");
				string value = JsonConvert.SerializeObject(item.Value, converters);
				if (dataValueType.UseClientEncoding) {
					value = HttpUtility.HtmlEncode(value);
				}
				writer.WriteValue(value);
				writer.WriteEndObject();
			}
			writer.WriteEndArray();
		}

		#endregion

		#region Methods: Public

		public override bool CanConvert(Type objectType) {
			return typeof(DataSourceFilterCollection).IsAssignableFrom(objectType) ||
				typeof(DataSourceFilter).IsAssignableFrom(objectType);
		}

		public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var filter = value as DataSourceFilter;
			if (filter != null) {
				WriteFilterItem(writer, filter, serializer);
			} else {
				WriteFilterItemsCollection(writer, value, serializer);
			}
		}

		public override object ReadJson(JsonReader reader, Type objectType,
				object existingValue, JsonSerializer serializer) {
			return DeserializeFilters(reader, objectType, serializer, null);
		}

		#endregion

	}

	#endregion

	#region Class: DataValueTypeJsonConverter

	public class DataValueTypeJsonConverter : TerrasoftJsonConverter
	{

		#region Methods: Private

		private void WriteEditorProperties(JsonWriter writer, DataValueTypeEditor editor) {
			writer.WriteStartObject();
			writer.WritePropertyName("controlTypeName");
			writer.WriteValue(editor.ControlTypeName);
			writer.WritePropertyName("controlXType");
			writer.WriteValue(editor.ControlXType);
			if (editor.DefConfiguration != null) {
				writer.WritePropertyName("defaultConfiguration");
				string serializedDefConfiguration = Json.Serialize(editor.DefConfiguration,
					new DictionaryJsonConverter());
				writer.WriteValue(serializedDefConfiguration);
			}
			writer.WriteEndObject();
		}

		#endregion

		#region Methods: Public

		public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var dataValueType = value as DataValueType;
			writer.WriteStartObject();
			writer.WritePropertyName("id");
			writer.WriteValue(dataValueType.UId);
			writer.WritePropertyName("name");
			writer.WriteValue(dataValueType.Name);
			writer.WritePropertyName("isNumeric");
			writer.WriteValue(dataValueType.IsNumeric);
			writer.WritePropertyName("editor");
			WriteEditorProperties(writer, dataValueType.Editor);
			WriteAddtionalProperties(writer, value, serializer);
			writer.WritePropertyName("useClientEncoding");
			writer.WriteValue(dataValueType.UseClientEncoding);
			writer.WriteEndObject();
		}

		public override object ReadJson(JsonReader reader, Type objectType,
				object existingValue, JsonSerializer serializer) {
			throw new NotImplementedException();
		}

		public override bool CanConvert(Type objectType) {
			return typeof(DataValueType).IsAssignableFrom(objectType);
		}

		public virtual void WriteAddtionalProperties(JsonWriter writer, object value, JsonSerializer serializer) {
		}

		#endregion

	}

	#endregion

	#region Class: TextDataValueTypeJsonConverter

	public class TextDataValueTypeJsonConverter : DataValueTypeJsonConverter
	{

		#region Methods: Public

		public override void WriteAddtionalProperties(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var dataValueType = (TextDataValueType)value;
			if (!dataValueType.IsMaxSize) {
				writer.WritePropertyName("size");
				writer.WriteValue(dataValueType.Size);
			}
		}

		public override bool CanConvert(Type objectType) {
			return typeof(TextDataValueType).IsAssignableFrom(objectType);
		}

		#endregion

	}

	#endregion

	#region Class: IntegerDataValueTypeJsonConverter

	public class IntegerDataValueTypeJsonConverter : DataValueTypeJsonConverter
	{

		#region Methods: Public

		public override void WriteAddtionalProperties(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var integerDataValueType = (IntegerDataValueType)value;
			writer.WritePropertyName("minValue");
			writer.WriteValue(integerDataValueType.MinValue);
			writer.WritePropertyName("maxValue");
			writer.WriteValue(integerDataValueType.MaxValue);
		}

		public override bool CanConvert(Type objectType) {
			return typeof(IntegerDataValueType).IsAssignableFrom(objectType);
		}

		#endregion

	}

	#endregion

	#region Class: FloatDataValueTypeJsonConverter

	public class FloatDataValueTypeJsonConverter : DataValueTypeJsonConverter
	{

		#region Methods: Public

		public override void WriteAddtionalProperties(JsonWriter writer, object value, JsonSerializer serializer) {
			if (value == null) {
				return;
			}
			var floatDataValueType = (FloatDataValueType)value;
			writer.WritePropertyName("minValue");
			writer.WriteValue(floatDataValueType.MinValue);
			writer.WritePropertyName("maxValue");
			writer.WriteValue(floatDataValueType.MaxValue);
			writer.WritePropertyName("numericSize");
			writer.WriteValue(floatDataValueType.Size);
			if (floatDataValueType.Precision != 2) {
				writer.WritePropertyName("precision");
				writer.WriteValue(floatDataValueType.Precision);
			}
			if (!floatDataValueType.UseThousandSeparator) {
				writer.WritePropertyName("useThousandSeparator");
				writer.WriteValue(floatDataValueType.UseThousandSeparator);
			}
		}

		public override bool CanConvert(Type objectType) {
			return typeof(FloatDataValueType).IsAssignableFrom(objectType);
		}

		#endregion

	}

	#endregion

}

namespace Terrasoft.UI.WebControls.Controls
{
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: DataSource

	public class DataSource
	{
		public DataSourceStructure CurrentStructure { get; set; }

		public EntitySchema Schema { get; set; }
	}

	#endregion

	#region Class: DataSourceStructure

	public class DataSourceStructure
	{
		public DataSourceFilterCollection Filters { get; set; }

		public IDataSourceFilterItem CreateFiltersGroup(string filtersName) {
			throw new NotImplementedException();
		}

		public DataSourceFilter CreateFilterWithParameters(object schema, FilterComparisonType equal, string sysrecententityEntityidSysuser, object[] p3) {
			throw new NotImplementedException();
		}
	}

	#endregion

	#region Class: DataSourceFilterCollection

	public class DataSourceFilterCollection : List<IDataSourceFilterItem>, IDataSourceFilterItem
	{

		#region Constructors: Private

		private DataSourceFilterCollection(DataSourceFilterCollection source)
			: base(source) {
			UId = source.UId;
			Name = source.Name;
			Caption = source.Caption;
			IsEnabled = source.IsEnabled;
			ParentGroup = source.ParentGroup;
			IsNot = source.IsNot;
			LogicalOperation = source.LogicalOperation;
			ParentItem = source.ParentItem;
			foreach (var item in source) {
				if (item is ICloneable clonableItem) {
					Add((IDataSourceFilterItem)clonableItem.Clone());
				}
			}
		}

		#endregion

		#region Counstructors: Public

		public DataSourceFilterCollection(params IDataSourceFilterItem[] items)
			: this() {
			AddRange(items);
		}

		public DataSourceFilterCollection() {
			UId = Guid.NewGuid();
		}

		#endregion

		#region Properties: Public

		public Guid UId { get; set; }

		public string Name { get; set; }

		public LocalizableString Caption { get; set; }

		public bool IsEnabled { get; set; } = true;

		public DataSourceFilterCollection ParentGroup { get; set; }

		public bool IsNot { get; set; }

		public LogicalOperationStrict LogicalOperation { get; set; }

		public DataSourceFilter ParentItem { get; set; }

		public bool PreventRegisteringClientScript { get; set; }

		#endregion

		#region Methods: Private

		private EntitySchemaQueryFilterCollection ToEntitySchemaQueryFilterCollection(EntitySchemaQuery parentQuery,
			DataSourceFilterCollection source) {
			var esqfCollection = new EntitySchemaQueryFilterCollection(parentQuery) {
				IsEnabled = source.IsEnabled,
				IsNot = source.IsNot,
				LogicalOperation = source.LogicalOperation,
				Name = source.Name
			};
			foreach (IDataSourceFilterItem filterItem in source) {
				if (!filterItem.IsEnabled) {
					continue;
				}
				var filter = filterItem as DataSourceFilter;
				if (filter == null) {
					esqfCollection.Add(ToEntitySchemaQueryFilterCollection(parentQuery,
						(DataSourceFilterCollection)filterItem));
					continue;
				}
				IEntitySchemaQueryFilterItem queryFilterItem;
				EntitySchemaQueryExpression esqExpression;
				if (filter.ComparisonType == FilterComparisonType.Exists) {
					queryFilterItem = parentQuery.CreateExistsFilter(filter.RightExpression.TargetColumnPath);
					esqExpression = ((EntitySchemaQueryFilter)queryFilterItem).RightExpressions[0];
				} else if (filter.ComparisonType == FilterComparisonType.NotExists) {
					queryFilterItem = parentQuery.CreateNotExistsFilter(filter.RightExpression.TargetColumnPath);
					esqExpression = ((EntitySchemaQueryFilter)queryFilterItem).RightExpressions[0];
				} else {
					var leftExpression = filter.LeftExpression.GetEntitySchemaQueryExpression(parentQuery,
						filter.RootSchema, filter.UseDisplayValue);
					queryFilterItem = new EntitySchemaQueryFilter(filter.ComparisonType) {
						IsEnabled = filter.IsEnabled,
						TrimDateTimeParameterToDate = filter.TrimDateTimeParameterToDate,
						LeftExpression = leftExpression
					};
					if (filter.RightExpression != null) {
						if (filter.RightExpression.Type == DataSourceFilterExpressionType.Macros) {
							var parameters = filter.RightExpression.Parameters;
							EntitySchemaQueryMacrosType macrosType = filter.RightExpression.MacrosType;
							if (macrosType == EntitySchemaQueryMacrosType.HourMinute) {
								var currentTime = (DateTime)parameters[0].Value;
								queryFilterItem = parentQuery.CreateFilter(filter.ComparisonType, leftExpression,
									macrosType, currentTime);
							} else if (macrosType == EntitySchemaQueryMacrosType.DayOfWeek) {
								var dayOfWeek = (DayOfWeek)parameters[0].Value;
								queryFilterItem = parentQuery.CreateFilter(filter.ComparisonType, leftExpression,
									macrosType, dayOfWeek);
							} else {
								int offset =
									(parameters != null && parameters.Count > 0) ? (int)parameters[0].Value : 0;
								queryFilterItem = parentQuery.CreateFilter(filter.ComparisonType, leftExpression,
									macrosType, offset);
							}
							var entitySchemaQueryFilter = queryFilterItem as EntitySchemaQueryFilter;
							if (entitySchemaQueryFilter != null) {
								var esqExpressions = entitySchemaQueryFilter.RightExpressions;
								if ((parameters == null || parameters.Count == 0) &&
									esqExpressions[0].ExpressionType == EntitySchemaQueryExpressionType.Parameter) {
									esqExpressions.Clear();
								}
							}
						} else {
							if (filter.RightExpression.Type == DataSourceFilterExpressionType.Parameter) {
								filter.RightExpression.DataValueType =
									leftExpression.GetResultDataValueType(filter.RootSchema.DataValueTypeManager);
							}
							((EntitySchemaQueryFilter)queryFilterItem).RightExpressions.AddRange(
								filter.RightExpression.GetEntitySchemaQueryExpressionCollection(parentQuery,
									filter.RootSchema, filter.UseDisplayValue));
						}
					}
					esqExpression = leftExpression;
				}
				esqfCollection.Add(queryFilterItem);
				if (filter.SubFilters != null) {
					var esqSubFilter = ToEntitySchemaQueryFilterCollection(esqExpression.SubQuery ?? parentQuery,
						filter.SubFilters);
					if (esqExpression.SubQuery != null) {
						esqExpression.SubQuery.Filters.Add(esqSubFilter);
					}
				}
			}
			return esqfCollection;
		}

		private bool MergeFiltersGroup(IDataSourceFilterItem item) {
			var filterGroup = item as DataSourceFilterCollection;
			if (filterGroup != null && !string.IsNullOrEmpty(filterGroup.Name)) {
				var existingGroup = this.Find(filter => filter.Name == filterGroup.Name) as DataSourceFilterCollection;
				if (existingGroup != null) {
					foreach (IDataSourceFilterItem filterItem in filterGroup) {
						existingGroup.Add(filterItem);
					}
					return true;
				}
			}
			return false;
		}

		#endregion

		#region Methods: Public

		public EntitySchemaQueryFilterCollection ToEntitySchemaQueryFilterCollection(EntitySchemaQuery parentQuery) {
			return ToEntitySchemaQueryFilterCollection(parentQuery, this);
		}

		public object Clone() {
			return new DataSourceFilterCollection(this);
		}

		public void ReadMetaData(DataReader reader) {
			throw new NotImplementedException();
		}

		public void WriteMetaData(DataWriter writer) {
			throw new NotImplementedException();
		}

		public new void Add(IDataSourceFilterItem item) {
			if (!MergeFiltersGroup(item)) {
				base.Add(item);
			}
			item.ParentGroup = this;
		}

		public IDataSourceFilterItem FindByName(string name) {
			if (string.IsNullOrEmpty(name)) {
				return null;
			}
			if (string.Equals(Name, name, StringComparison.Ordinal)) {
				return this;
			}
			IDataSourceFilterItem foundItem = null;
			foreach (IDataSourceFilterItem item in this) {
				if (string.Equals(item.Name, name, StringComparison.Ordinal)) {
					return item;
				}
				if (item is DataSourceFilterCollection) {
					foundItem = ((DataSourceFilterCollection)item).FindByName(name);
				} else {
					if (item is DataSourceFilter) {
						var currentItem = ((DataSourceFilter)item);
						if (currentItem.SubFilters != null) {
							foundItem = currentItem.SubFilters.FindByName(name);
						}
					}
				}
				if (foundItem != null) {
					return foundItem;
				}
			}
			return null;
		}

		public IDataSourceFilterItem FindByUId(Guid uId) {
			if (uId.IsEmpty()) {
				return null;
			}
			if (UId.Equals(uId)) {
				return this;
			}
			IDataSourceFilterItem foundItem = null;
			foreach (IDataSourceFilterItem item in this) {
				if (item.UId.Equals(uId)) {
					return item;
				}
				if (item is DataSourceFilterCollection) {
					foundItem = ((DataSourceFilterCollection)item).FindByUId(uId);
				} else {
					if (item is DataSourceFilter) {
						var currentItem = ((DataSourceFilter)item);
						if (currentItem.SubFilters != null) {
							foundItem = currentItem.SubFilters.FindByUId(uId);
						}
					}
				}
				if (foundItem != null) {
					return foundItem;
				}
			}
			return null;
		}

		#endregion

	}

	#endregion

	#region Class: IDataSourceFilterItem

	public interface IDataSourceFilterItem : ICloneable, IMetaDataSerializable
	{

		#region Properties: Public

		Guid UId {
			get;
			set;
		}

		string Name {
			get;
			set;
		}

		LocalizableString Caption {
			get;
			set;
		}

		bool IsEnabled {
			get;
			set;
		}

		DataSourceFilterCollection ParentGroup {
			get;
			set;
		}

		#endregion

		void Add(IDataSourceFilterItem createFilterWithParameters);

	}

	#endregion

	#region Class: DataSourceFilter

	public class DataSourceFilter : IDataSourceFilterItem {

		#region Constructors: Public

		public DataSourceFilter() {
			UId = Guid.NewGuid();
		}

		public DataSourceFilter(EntitySchema rootSchema, FilterComparisonType comparisionType,
			DataSourceFilterExpression leftExpression, DataSourceFilterExpression rightExpression)
			: this() {
			RootSchema = rootSchema;
			ComparisonType = comparisionType;
			LeftExpression = leftExpression;
			RightExpression = rightExpression;
		}

		#endregion

		#region Methods: Public

		public object Clone() {
			throw new NotImplementedException();
		}

		public void ReadMetaData(DataReader reader) {
			throw new NotImplementedException();
		}

		public void WriteMetaData(DataWriter writer) {
			throw new NotImplementedException();
		}

		public void Add(IDataSourceFilterItem createFilterWithParameters) {
			throw new NotImplementedException();
		}

		#endregion

		#region Properties: Internal

		internal bool IsComparisonTypeExists =>
			ComparisonType == FilterComparisonType.Exists
			|| ComparisonType == FilterComparisonType.NotExists;

		#endregion

		public Guid UId { get; set; }

		public string Name { get; set; }

		public LocalizableString Caption { get; set; }

		public bool IsEnabled { get; set; }

		public DataSourceFilterCollection ParentGroup { get; set; }

		public bool UseDisplayValue { get; set; }

		public bool TrimDateTimeParameterToDate { get; set; }

		public DataSourceFilterCollection SubFilters { get; set; }

		public FilterComparisonType ComparisonType { get; set; }

		public DataSourceFilterExpression LeftExpression { get; set; }

		public DataSourceFilterExpression RightExpression { get; set; }

		public EntitySchema RootSchema { get; set; }

	}

	#endregion

	#region Class: DataSourceFilterExpression

	public class DataSourceFilterExpression
	{

		#region Constructors: Public

		public DataSourceFilterExpression() {
		}

		public DataSourceFilterExpression(DataSourceFilterExpressionType type) {
			Type = type;
		}

		public DataSourceFilterExpression(DataSourceFilterExpressionType type, string targetColumnPath) {
			Type = type;
			TargetColumnPath = targetColumnPath;
		}

		public DataSourceFilterExpression(DataSourceFilterExpressionType type,
				Collection<DataSourceFilterExpressionParameterValue> parametersValues) {
			Type = type;
			foreach (var item in parametersValues) {
				Parameters.Add(item);
			}
		}

		public DataSourceFilterExpression(DataSourceFilterExpressionType type, IEnumerable<object> parametersValues) {
			Type = type;
			foreach (var item in parametersValues) {
				Parameters.Add(new DataSourceFilterExpressionParameterValue(string.Empty, item));
			}
		}

		#endregion

		#region Properties: Public

		public string Caption {
			get;
			set;
		}

		public DataSourceFilterExpressionType Type {
			get;
			set;
		}

		public string TargetColumnPath {
			get;
			set;
		}

		public Guid RefernceSchemaUId {
			get;
			internal set;
		}

		public DataSourceFilterFunction Function {
			get;
			set;
		}

		private Dictionary<string, object> _functionParameters = null;
		public Dictionary<string, object> FunctionParameters {
			get {
				return _functionParameters ?? (_functionParameters = new Dictionary<string, object>());
			}
		}

		private DataSourceFilterExpressionParametersCollection _parameters = null;
		public DataSourceFilterExpressionParametersCollection Parameters {
			get {
				return _parameters ?? (_parameters = new DataSourceFilterExpressionParametersCollection());
			}
		}

		public DataValueType DataValueType {
			get;
			set;
		}

		public AggregationTypeStrict AggregationType {
			get;
			set;
		}

		public EntitySchemaQueryMacrosType MacrosType {
			get;
			set;
		}

		#endregion

		#region Methods: Private

		private EntitySchemaQueryFunction CreateFunction(EntitySchemaQuery parentQuery, EntitySchema rootSchema,
				bool useDisplayValue) {
			EntitySchemaQueryFunction resultFunction = null;
			switch (Function) {
				case DataSourceFilterFunction.DatePart: {
						if (!FunctionParameters.ContainsKey("DatePartFunctionInterval")) {
							throw new InvalidObjectStateException();
						}
						var interval =
							(EntitySchemaDatePartQueryFunctionInterval)FunctionParameters["DatePartFunctionInterval"];
						var tempExpression = GetEntitySchemaQueryExpression(parentQuery, rootSchema, useDisplayValue,
							DataSourceFilterExpressionType.SchemaColumn);
						resultFunction = new EntitySchemaDatePartQueryFunction(parentQuery, interval, tempExpression);
						break;
					}
				case DataSourceFilterFunction.Cast: {
						if (!FunctionParameters.ContainsKey("CastType")) {
							throw new InvalidObjectStateException();
						}
						var castType = FunctionParameters["CastType"] as DBDataValueType;
						var tempExpression = GetEntitySchemaQueryExpression(parentQuery, rootSchema, useDisplayValue,
							DataSourceFilterExpressionType.SchemaColumn);
						resultFunction = new EntitySchemaCastQueryFunction(parentQuery, tempExpression, castType);
						break;
					}
				case DataSourceFilterFunction.Upper: {
						var tempExpression = GetEntitySchemaQueryExpression(parentQuery, rootSchema, useDisplayValue,
							DataSourceFilterExpressionType.SchemaColumn);
						resultFunction = new EntitySchemaUpperQueryFunction(parentQuery, tempExpression);
						break;
					}
				case DataSourceFilterFunction.Coalesce: {
						EntitySchemaCoalesceQueryFunction queryFunction =
							new EntitySchemaCoalesceQueryFunction(parentQuery);
						foreach (var item in FunctionParameters) {
							if (item.Key.Contains("Column")) {
								queryFunction.Expressions.Add(EntitySchemaQuery.CreateSchemaColumnExpression(rootSchema,
									item.Value.ToString()));
							}
						}
						resultFunction = queryFunction;
						break;
					}
			}
			return resultFunction;
		}

		private void CheckFilterProperties() {
			if ((Type == DataSourceFilterExpressionType.Aggregation ||
					Type == DataSourceFilterExpressionType.SchemaColumn) &&
					string.IsNullOrEmpty(TargetColumnPath)) {
				throw new InvalidObjectStateException();
			}
		}

		#endregion

		#region Methods: Internal

		internal void Clear() {
			Type = DataSourceFilterExpressionType.None;
			TargetColumnPath = string.Empty;
			MacrosType = EntitySchemaQueryMacrosType.None;
			RefernceSchemaUId = Guid.Empty;
			Function = DataSourceFilterFunction.None;
			FunctionParameters.Clear();
			Parameters.Clear();
			DataValueType = null;
			AggregationType = AggregationTypeStrict.Count;
		}

		internal EntitySchemaQueryExpression GetEntitySchemaQueryExpression(EntitySchemaQuery parentQuery,
				EntitySchema rootSchema, bool useDisplayValue = false,
				DataSourceFilterExpressionType forcedType = DataSourceFilterExpressionType.None) {
			CheckFilterProperties();
			EntitySchemaQueryExpression resultExpression = null;
			DataSourceFilterExpressionType type;
			parentQuery = parentQuery ?? new EntitySchemaQuery(rootSchema);
			type = forcedType == DataSourceFilterExpressionType.None ? Type : forcedType;
			switch (type) {
				case DataSourceFilterExpressionType.SchemaColumn: {
						resultExpression = EntitySchemaQuery.CreateSchemaColumnExpression(parentQuery,
							rootSchema, TargetColumnPath, true, useDisplayValue);
						break;
					}
				case DataSourceFilterExpressionType.Parameter: {
						object parameterValue = useDisplayValue ? Parameters[0].DisplayValue : Parameters[0].Value;
						resultExpression = EntitySchemaQuery.CreateParameterExpression(parameterValue, DataValueType);
						break;
					}
				case DataSourceFilterExpressionType.Aggregation: {
						resultExpression = parentQuery.CreateAggregationEntitySchemaExpression(TargetColumnPath,
							AggregationType);
						break;
					}
				case DataSourceFilterExpressionType.Function: {
						var function = CreateFunction(parentQuery, rootSchema, useDisplayValue);
						resultExpression = new EntitySchemaQueryExpression(function);
						break;
					}
				case DataSourceFilterExpressionType.Exists: {
						resultExpression = parentQuery.CreateSubEntitySchemaExpression(TargetColumnPath);
						break;
					}
			}
			if (DataValueType == null && forcedType == DataSourceFilterExpressionType.None) {
				DataValueType = resultExpression.GetResultDataValueType(rootSchema.DataValueTypeManager);
			}
			return resultExpression;
		}

		internal EntitySchemaQueryExpressionCollection GetEntitySchemaQueryExpressionCollection(
				EntitySchemaQuery parentQuery, EntitySchema rootSchema, bool useDisplayValue = false) {
			CheckFilterProperties();
			parentQuery = parentQuery ?? new EntitySchemaQuery(rootSchema);
			EntitySchemaQueryExpressionCollection resultCollection =
				new EntitySchemaQueryExpressionCollection(parentQuery);
			EntitySchemaQueryExpression expressionItem = null;
			switch (Type) {
				case DataSourceFilterExpressionType.SchemaColumn: {
						expressionItem = EntitySchemaQuery.CreateSchemaColumnExpression(parentQuery,
							rootSchema, TargetColumnPath, true, useDisplayValue);
						break;
					}
				case DataSourceFilterExpressionType.Parameter: {
						Func<DataSourceFilterExpressionParameterValue, EntitySchemaQueryExpression> func =
							(item) => EntitySchemaQuery.CreateParameterExpression(item.DisplayValue);
						if (!useDisplayValue) {
							func = (item) => EntitySchemaQuery.CreateParameterExpression(item.Value);
						}
						foreach (var item in Parameters) {
							resultCollection.Add(func(item));
						}
						break;
					}
				case DataSourceFilterExpressionType.Aggregation: {
						expressionItem = parentQuery.CreateAggregationEntitySchemaExpression(TargetColumnPath,
							AggregationType);
						break;
					}
				case DataSourceFilterExpressionType.Function: {
						var function = CreateFunction(parentQuery, rootSchema, useDisplayValue);
						expressionItem = new EntitySchemaQueryExpression(function);
						break;
					}
			}
			if (expressionItem != null) {
				resultCollection.Add(expressionItem);
			}
			return resultCollection;
		}

		#endregion

	}

	#endregion

	#region Class: DataSourceFilterExpressionParametersCollection

	public class DataSourceFilterExpressionParametersCollection : List<DataSourceFilterExpressionParameterValue>
	{
	}

	#endregion

	#region Class: DataSourceFilterExpressionParameterValue

	public class DataSourceFilterExpressionParameterValue
	{

		#region Constructors: Public

		public DataSourceFilterExpressionParameterValue() {
		}

		public DataSourceFilterExpressionParameterValue(string displayValue, object value)
			: this() {
			DisplayValue = displayValue;
			Value = value;
		}

		public DataSourceFilterExpressionParameterValue(object value)
			: this() {
			DisplayValue = string.Empty;
			Value = value;
		}

		public DataSourceFilterExpressionParameterValue(string displayValue)
			: this() {
			DisplayValue = string.Empty;
			Value = null;
		}

		#endregion

		#region Properties: Public

		public object Value {
			get;
			set;
		}

		public string DisplayValue {
			get;
			set;
		}

		#endregion

	}

	#endregion

	#region Class: DataSourceFilterFunction

	public enum DataSourceFilterFunction
	{
		None,
		DatePart,
		Cast,
		Coalesce,
		Upper
	}

	#endregion

	#region Class: DataSourceFilterExpressionType

	public enum DataSourceFilterExpressionType
	{
		None,
		SchemaColumn,
		Function,
		Parameter,
		Aggregation,
		Macros,
		Exists,
		Custom
	}

	#endregion

}

#endregion

#endif

#if NETSTANDARD

#region CRM-37504, CRM-43604 Обновить ServiceStack

namespace ServiceStack.ServiceInterface.ServiceModel
{
	using System.Collections.Generic;
	using System.Runtime.Serialization;

	[DataContract]
	public class ResponseError
	{
		[DataMember(Order = 1)]
		public string ErrorCode { get; set; }
		[DataMember(Order = 2)]
		public string FieldName { get; set; }
		[DataMember(Order = 3)]
		public string Message { get; set; }
	}

	[DataContract]
	public class ResponseStatus
	{
		public ResponseStatus() {
		}
		public ResponseStatus(string errorCode) {
			this.ErrorCode = errorCode;
		}
		public ResponseStatus(string errorCode, string message) : this(errorCode) {
			this.Message = message;
		}
		[DataMember(Order = 1)]
		public string ErrorCode { get; set; }
		[DataMember(Order = 2)]
		public string Message { get; set; }
		[DataMember(Order = 3)]
		public string StackTrace { get; set; }
		[DataMember(Order = 4)]
		public List<ResponseError> Errors { get; set; }
	}
}

#endregion

#region CRM-42481

namespace System.Web
{
	using System.Collections.Specialized;

	public class HttpContext
	{
	}

	public abstract class HttpRequestBase
	{
		public virtual NameValueCollection QueryString => throw new NotImplementedException();
		public NameValueCollection Form { get; set; }
		public virtual int TotalBytes => throw new NotImplementedException();
		public virtual NameValueCollection Headers => throw new NotImplementedException();
		public virtual HttpCookieCollection Cookies => throw new NotImplementedException();
		public virtual Uri Url => throw new NotImplementedException();
	}

	public abstract class HttpResponseBase
	{
		public virtual HttpCookieCollection Cookies => throw new NotImplementedException();

		public virtual void Redirect(string url, bool endResponse) {
			throw new NotImplementedException();
		}

		public virtual void AppendCookie(HttpCookie cookie) {
			throw new NotImplementedException();
		}
	}

	public sealed class HttpRequest
	{
	}

	public class HttpRequestWrapper : HttpRequestBase
	{
		public HttpRequestWrapper(HttpRequest httpRequest) {
		}
	}

	public abstract class HttpContextBase
	{
		public HttpRequestBase Request => throw new NotImplementedException();
	}

	public class HttpContextWrapper : HttpContextBase
	{
		public HttpContextWrapper(HttpContext current) {
		}
	}

	public sealed class HttpCookieCollection : NameObjectCollectionBase
	{
		public HttpCookie this[string name] => throw new NotImplementedException();
		public HttpCookie Get(string name) {
			throw new NotImplementedException();
		}

		public void Add(HttpCookie cookie) {
			throw new NotImplementedException();
		}
	}

	public sealed class HttpCookie
	{
		public bool HttpOnly { get; set; }
		public string Value { get; set; }
	}

}

#endregion

#region CRM-42481 Адаптировать DotNetOpenAuth.OAuth.ChannelElements

namespace DotNetOpenAuth.OAuth.ChannelElements
{
	public interface ITokenManager
	{
	}

	public interface IConsumerTokenManager : ITokenManager
	{
		string ConsumerKey { get; }

		string ConsumerSecret { get; }
	}
}

#endregion

#region CRM-42468 Адаптировать Terrasoft.GoogleServices

namespace Terrasoft.GoogleServices
{
	using Google.Apis.Calendar.v3.Data;
	using Google.GData.Extensions;
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;

	public class GoogleSynchronizationException : Exception
	{
		public GoogleSynchronizationException() {

		}

		public GoogleSynchronizationException(string message)
			: base(message) {
		}

		public GoogleSynchronizationException(string message, Exception innerException)
			: base(message, innerException) {
		}
	}

	public class GContactSyncProvider : ISyncProvider<GoogleContact>
	{
		public UserConnection UserConnection { get; set; }

		public int ExcludeEntitiesFromGroup(Dictionary<string, DateTime> entityIds) { return 0; }
		public void Authenticate(string authToken) { }
		public void Authenticate(string authToken, string refreshToken) { }
		public virtual IEnumerable<SyncEntity<GoogleContact>> GetModifiedEntities(DateTime modifiedSince) { return null; }
		public void CreateEntities(IEnumerable<GoogleContact> entities) { }
		public void UpdateEntities(IEnumerable<GoogleContact> entities) { }
		public void DeleteEntities(IEnumerable<string> entityIds) { }
		public void Commit() { }
	}

	public class GoogleContact
	{
		public GoogleContact() { }
		public string Id { get; set; }
		public Guid ContactId { get; set; }
		public DateTime ModifiedOnUTC { get; set; }
		public string Name { get; set; }
		public string SalutationType { get; set; }
		public DateTime? Birthday { get; set; }
		public string Notes { get; set; }
		public IEnumerable<PhoneNumber> PhoneNumbers { get; set; }
		public IEnumerable<EMail> Emails { get; set; }
		public string Skype { get; set; }
		public IEnumerable<StructuredPostalAddress> PostalAddresses { get; set; }
		public string Department { get; set; }
		public string Company { get; set; }
		public string JobTitle { get; set; }
		public bool Deleted { get; set; }
	}

	public class GoogleActivityParticipant
	{
		internal EventAttendee GoogleEventAttendee;
		internal GoogleActivityParticipant(EventAttendee attendee) { }
		public GoogleActivityParticipant() { }
		public string Email { get; set; }

		public string ResponseStatus { get; set; }

		public bool Organizer { get; set; }

		public bool Loaded { get; set; }
	}

	public sealed class GoogleActivity
	{
		internal Event GoogleEntry;
		internal GoogleActivity(Event entry) { }
		internal GoogleActivity(Event entry, string timeZoneId) { }
		public GoogleActivity() { }
		public GoogleActivity(bool sendInvites) { }
		public string TimeZoneId { get; set; }
		public string Title { get; set; }
		public string AuthorEmail { get; set; }
		public string Description { get; set; }
		public DateTime StartDate { get; set; }
		public DateTime DueDate { get; set; }
		public IEnumerable<string> ParticipantEmails { get; set; }
		public IEnumerable<GoogleActivityParticipant> Participants { get; set; }
		public IEnumerable<EventReminder> Reminders { get; set; }
		public string SourceId { get; set; }
		public bool Loaded { get; set; }
		public bool IsPrivate { get; set; }
		public DateTime UpdatedUTC { get; set; }
		public string ExtId { get; set; }
		public string ICalUId { get; set; }
		public bool IsSendInvites { get; set; }
		public bool Load(GActivitySyncProvider syncProvider) {
			return true;
		}

		public bool Load(GActivitySyncProvider syncProvider, string entryId) {
			return false;
		}
	}

	public enum SyncState
	{
		Deleted = 0,
		Created = 1,
		Modified = 2,
	}

	public class SyncEntity<T>
	{
		public SyncEntity(T item, SyncState state) { }
		public T Item { get; set; }
		public SyncState State { get; set; }
	}

	public interface ISyncProvider<T>
	{
		void Authenticate(string authToken);
		IEnumerable<SyncEntity<T>> GetModifiedEntities(DateTime modifiedSince);
		void CreateEntities(IEnumerable<T> entities);
		void UpdateEntities(IEnumerable<T> entities);
		void DeleteEntities(IEnumerable<string> entityIds);
		void Commit();
	}

	public class GActivitySyncProvider : ISyncProvider<GoogleActivity>
	{

		public Guid MailServerId { get; set; }

		public string CurrentUserEmail { get; set; }

		public UserConnection UserConnection { get; set; }

		public long RequestPageSize { get; set; }

		public IList<string> CommitErrors { get; set; }

		public IList<GoogleActivity> ProcessedEntities { get; set; }

		public void Authenticate(string authToken) {}

		public void Authenticate(string authToken, string refreshToken) { }

		public virtual IEnumerable<SyncEntity<GoogleActivity>> GetModifiedEntities(DateTime modifiedSince) {
			return null;
		}

		public void CreateEntities(IEnumerable<GoogleActivity> entities) {}

		public void UpdateEntities(IEnumerable<GoogleActivity> entities) {}

		public void DeleteEntities(IEnumerable<string> entityIds) {}

		public void Commit() {}

	}

}

#endregion

#region CRM-42468 Terrasoft.Social.Google

namespace Terrasoft.Social.Google {
	using System.Collections.Generic;
	using Terrasoft.Core;

	public class GoogleConsumer : IServiceAuthClient, ISocialNetwork
	{
		public GoogleConsumer(UserConnection userConnection) { }
		public static IEnumerable<string> Scopes { get { return null; } }

		public SocialNetwork NetworkType { get { return SocialNetwork.All; } }
		public static string GetUserEmail(string accessToken) { return null; }
		public static string GetUserSocialId(string accessToken) { return null; }
		public void StartAuthentication(UserToken userToken) {  }
		public AuthResult CompleteAuthentication(out string accessToken, out string accessSecretToken,
			out string socialId, out string errorMessage) {
			accessToken = null;
			accessSecretToken = null;
			socialId = null;
			errorMessage = null;
			return AuthResult.Discard;
		}
		public string Name { get { return null; } }
		public ISocialNetworkUser Me { get { return null; } }
		public System.Collections.Generic.IEnumerable<ISocialNetworkUser> FindUsers(string searchCriteria) { return null; }
		public System.Collections.Generic.IEnumerable<ISocialNetworkMessage> FindMessages(ISocialNetworkUser user) { return null; }
		public System.Collections.Generic.IEnumerable<ISocialNetworkMessage> FindMessages(string searchCriteria) { return null; }
		public System.Collections.Generic.IEnumerable<ISocialNetworkUser> FindConnectedUsers(ISocialNetworkUser user) { return null; }
		public ISocialNetworkUserProfile GetProfile(ISocialNetworkUser user) { return null; }
		public ISocialNetworkUserProfile GetProfile(string userId) { return null; }
		public ISocialNetworkUserProfile GetProfile(string userId, ref string accessToken) { return null; }
		public string GetPublicProfileUrl(string userId) { return null; }
		public bool AreFriends(ISocialNetworkUser user1, ISocialNetworkUser user2) { return true; }
		public System.Collections.Generic.Dictionary<string, string> GetExtraProfileData(string userId,
			System.Collections.Generic.IEnumerable<string> profileFields) { return null; }
	}
}

#endregion

#region CRM-42481 Адаптировать Terrasoft.Social

namespace Terrasoft.Social
{
	using System;
	using System.Collections.Generic;
	using DotNetOpenAuth.OAuth.ChannelElements;
	using Terrasoft.GoogleServerConnector;
	using Terrasoft.Core.Store;
	using Terrasoft.Core;

	public class ConsumerTokenManager : IConsumerTokenManager
	{

		internal ConsumerTokenManager(string consumerKey, string consumerSecret, SocialNetwork socialNetwork,
				ICacheStore cache = null) {
		}

		public ConsumerTokenManager(AppConnection appConnection, SocialNetwork socialNetwork)
			: this(appConnection.SystemUserConnection, socialNetwork) { }

		public ConsumerTokenManager(UserConnection userConnection, SocialNetwork socialNetwork) { }

		public string ConsumerKey { get; set; }

		public string ConsumerSecret { get; }
		public UserToken FindUserTokenByUserId(string userId) { return null; }
	}

	public class TokenManagers
	{
		public TokenManagers() {}
		public ConsumerTokenManager this[SocialNetwork socialNetwork] { get { return null;  } }
		internal void Add(SocialNetwork socialNetwork, ConsumerTokenManager tokenManager) { }
		internal bool ContainsKey(SocialNetwork socialNetwork) { return true; }
	}

	public abstract class BaseConsumer
	{
		public BaseConsumer(SocialNetwork socialNetwork) { }
		public static AppConnection AppConnection { get; set; }
		public static TokenManagers TokenManagers  { get; set; }
		public abstract SocialNetwork NetworkType  { get; }
		public ConsumerTokenManager TokenManager { get; }
		public static bool HasAccessTokenForUser(SocialNetwork socialNetwork, Guid userId) { return true; }

		public AuthResult ProcessUserAuthorization(out string accessToken, out string accessSecretToken)
		{
			accessToken = null;
			accessSecretToken = null;
			return AuthResult.Discard;
		}
		public void SendAuthorizedRequest(UserToken userToken) { }

		public static ConsumerTokenManager GetTokenProvider(SocialNetwork socialNetwork, Guid mailServerId) { return null; }
	}

	public class SocialCommutator : ISocialNetwork
	{
		public SocialCommutator(UserConnection userConnection, SocialNetwork socialNetwork) {
		}
		public event Action<ISocialNetwork, Exception> ExceptionOccurred;
		public void StartAuthentication(UserToken userToken) {
			throw new NotImplementedException();
		}
		public AuthResult CompleteAuthentication(out string accessToken, out string accessSecretToken, out string socialId,
			out string errorMessage) {
			throw new NotImplementedException();
		}
		public string Name { get; }
		public ISocialNetworkUser Me { get; }
		public SocialNetwork NetworkType { get; }
		public IEnumerable<ISocialNetworkUser> FindUsers(string searchCriteria) {
			throw new NotImplementedException();
		}
		public IEnumerable<ISocialNetworkMessage> FindMessages(ISocialNetworkUser user) {
			throw new NotImplementedException();
		}
		public IEnumerable<ISocialNetworkMessage> FindMessages(string searchCriteria) {
			throw new NotImplementedException();
		}
		public IEnumerable<ISocialNetworkUser> FindConnectedUsers(ISocialNetworkUser user) {
			throw new NotImplementedException();
		}
		public ISocialNetworkUserProfile GetProfile(ISocialNetworkUser user) {
			throw new NotImplementedException();
		}
		public ISocialNetworkUserProfile GetProfile(string userId) {
			throw new NotImplementedException();
		}
		public ISocialNetworkUserProfile GetProfile(string userId, ref string accessToken) {
			throw new NotImplementedException();
		}
		public string GetPublicProfileUrl(string userId) {
			throw new NotImplementedException();
		}
		public bool AreFriends(ISocialNetworkUser user1, ISocialNetworkUser user2) {
			throw new NotImplementedException();
		}
		public Dictionary<string, string> GetExtraProfileData(string userId, IEnumerable<string> profileFields) {
			throw new NotImplementedException();
		}
		public static ISocialNetwork CreateSocialNetwork(UserConnection userConnection, string socialNetworkName) {
			throw new NotImplementedException();
		}
		public static AuthResult CompleteAuthentication(UserConnection userConnection, string socialNetworkName,
				out string accessToken, out string accessSecretToken, out string socialId, out string errorMessage) {
			throw new NotImplementedException();
		}
		public static void StartAuthentication(UserConnection userConnection, string socialNetworkName,
				UserToken userToken) {
			throw new NotImplementedException();
		}
	}

}

#endregion

#endif

