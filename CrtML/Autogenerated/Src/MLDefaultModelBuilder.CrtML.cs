namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using global::Common.Logging;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using EntitySchema = Terrasoft.Core.Entities.EntitySchema;

	#region Class: MLDefaultModelBuilder

	/// <summary>
	/// Implements the default behavior of the MLModel
	/// </summary>
	[DefaultBinding(typeof(IMLModelBuilder))]
	public class MLDefaultModelBuilder : IMLModelBuilder
	{

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads the required columns to train model.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		public virtual void LoadMLModelColumns(UserConnection userConnection, MLModelConfig modelConfig) {
			modelConfig.ColumnUIds = new List<Guid>();
			var columnExpressions = new List<MLColumnExpression>();
			var predictionColumnExpressions = new List<MLColumnExpression>();
			modelConfig.ColumnExpressions = columnExpressions;
			modelConfig.PredictionColumnExpressions = predictionColumnExpressions;
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "MLModelColumn") {
				IgnoreDisplayValues = true
			};
			esq.AddAllSchemaColumns(true);
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "MLModel", modelConfig.Id));
			var entities = esq.GetEntityCollection(userConnection);
			EntitySchema rootSchema = userConnection.EntitySchemaManager.FindInstanceByUId(modelConfig.EntitySchemaId);
			EntitySchema predictionSchema =
				userConnection.EntitySchemaManager.FindInstanceByUId(modelConfig.PredictionEntitySchemaId);
			foreach (var entity in entities) {
				Guid columnType = entity.GetTypedColumnValue<Guid>("ColumnTypeId");
				var entitySchema = columnType == new Guid(MLConsts.ModelColumnTypePrediction)
					? predictionSchema
					: rootSchema;
				var columnCollection = columnType == new Guid(MLConsts.ModelColumnTypePrediction)
					? predictionColumnExpressions
					: columnExpressions;
				Guid columnUId = entity.GetTypedColumnValue<Guid>("ColumnUId");
				string columnPath = entity.GetTypedColumnValue<string>("ColumnPath");
				string subFilters = entity.GetTypedColumnValue<string>("SubFilters") ?? string.Empty;
				if (columnPath.IsNotNullOrEmpty()) {
					columnCollection.Add(new MLColumnExpression {
						ColumnPath = columnPath,
						AggregationType = (AggregationType)entity.GetTypedColumnValue<int>("AggregationType"),
						SubFilters = JsonConvert.DeserializeObject<Filters>(subFilters),
						Caption = entity.GetTypedColumnValue<string>("Caption")
					});
				} else if (columnUId.IsNotEmpty()) {
					var column = entitySchema.Columns.FindByUId(columnUId);
					if (column == null) {
						_log.WarnFormat("Column '{0}' was not found in schema {1} while loading columns for model {2}",
							columnUId, entitySchema.Name, modelConfig.Id);
					} else {
						columnCollection.Add(new MLColumnExpression {
							ColumnPath = column.Name,
							Caption = entity.GetTypedColumnValue<string>("Caption")
						});
					}
				}
			}
		}

		/// <summary>
		/// Expands the original query with an output column.
		/// </summary>
		/// <param name="query">The query.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		public virtual void AddQueryOutputColumn(UserConnection userConnection, Select query, MLModelConfig modelConfig) {
			if (query.Columns.ExistsByAlias(MLConsts.DefaultOutputColumnAlias)) {
				return;
			}
			if (modelConfig.TrainingOutputFilterData?.Length > 0) {
				var queryBuilder =
					ClassFactory.Get<IMLModelQueryBuilder>(new ConstructorArgument("userConnection", userConnection));
				queryBuilder.AddTrainingOutputExpression(query, modelConfig.TrainingOutputFilterData,
					MLConsts.DefaultOutputColumnAlias);
				return;
			}
			if (modelConfig.TrainingTargetColumnName.IsNullOrEmpty()) {
				throw new ValidateException($"No output defined for the model {modelConfig.Id}");
			}
			string sourceExpressionAlias = query.SourceExpression.Alias ?? query.SourceExpression.SchemaName;
			query.Column(sourceExpressionAlias, modelConfig.TrainingTargetColumnName).As(MLConsts.DefaultOutputColumnAlias);
		}

		/// <summary>
		/// Merges fit parameters.
		/// </summary>
		/// <param name="metadata">The metadata.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		public virtual void MergeFitParams(ModelSchemaMetadata metadata, MLModelConfig modelConfig) { }

		/// <summary>
		/// Merges custom config to the resulting model's metadata.
		/// </summary>
		/// <param name="modelSchemaMetadata">Generated metadata.</param>
		/// <param name="customMetadata">Custom metadata.</param>
		/// <returns>Merged metadata.</returns>
		public virtual string MergeCustomMetadata(ModelSchemaMetadata modelSchemaMetadata, string customMetadata) {
			string metadata = JsonConvert.SerializeObject(modelSchemaMetadata);
			if (customMetadata.IsNullOrEmpty()) {
				return metadata;
			}
			var resultMetadataJson = JObject.Parse(metadata);
			JObject customMetadataJson;
			try {
				customMetadataJson = JObject.Parse(customMetadata);
			} catch (JsonReaderException) {
				return metadata;
			}
			resultMetadataJson.Merge(customMetadataJson, new JsonMergeSettings {
				MergeArrayHandling = MergeArrayHandling.Merge
			});
			return resultMetadataJson.ToString(Formatting.None);
		}

		#endregion

	}

	#endregion

}

