namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Common;
	using Common.Json;
	using Core;
	using Core.DB;
	using Core.Entities;
	using global::Common.Logging;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.ML.Interfaces.Responses;

	#region Class: MLPredictionSaver

	/// <summary>
	/// Provides a base class for saving prediction results.
	/// </summary>
	public class MLPredictionSaver
	{

		protected class MLResultListSchemaConfig
		{

			#region Constructors: Public

			public MLResultListSchemaConfig(EntitySchema schema, EntitySchemaColumn subjectColumn,
				EntitySchemaColumn objectColumn, EntitySchemaColumn valueColumn, EntitySchemaColumn modelColumn,
				EntitySchemaColumn dateColumn) {
				EntitySchema = schema;
				SubjectColumn = subjectColumn;
				ObjectColumn = objectColumn;
				ValueColumn = valueColumn;
				ModelColumn = modelColumn;
				DateColumn = dateColumn;
			}

			#endregion

			#region Properties: Public

			public EntitySchema EntitySchema { get; }
			public EntitySchemaColumn SubjectColumn { get; }
			public EntitySchemaColumn ObjectColumn { get; }
			public EntitySchemaColumn ValueColumn { get; }
			public EntitySchemaColumn ModelColumn { get; }
			public EntitySchemaColumn DateColumn { get; }

			#endregion

		}

		#region Constants: Private

		private const string HighSignificance = "High";

		#endregion

		#region Fields: Protected

		protected static readonly ILog Log = LogManager.GetLogger("ML");

		protected readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLPredictionSaver"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLPredictionSaver(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets or sets a value indicating whether to use administrative rights while saving predictions.
		/// </summary>
		public bool UseAdminRights { get; set; } = true;

		#endregion

		#region Methods: Private

		private Entity GetEntity(Guid schemaUId, Guid entityId) {
			var entitySchema = _userConnection.EntitySchemaManager.GetInstanceByUId(schemaUId);
			Entity entity = entitySchema.CreateEntity(_userConnection);
			entity.UseAdminRights = UseAdminRights;
			if (!entity.FetchFromDB(entityId)) {
				Log.Warn($"Entity of schema {schemaUId} was not found by id {entityId}");
				return null;
			}
			return entity;
		}

		private void RemoveOldPredictions(Guid modelId, Guid entityId) {
			var query = new Delete(_userConnection)
				.From("MLPrediction")
				.Where("ModelId").IsEqual(new QueryParameter(modelId))
				.And("Key").IsEqual(new QueryParameter(entityId));
			query.Execute();
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Select among classification results the one that is the most confident.
		/// </summary>
		/// <param name="classificationResults">Classification results.</param>
		/// <param name="confidentValueMethodId">Confident value selection method.</param>
		/// <param name="confidentValueLowEdge">Low edge of score for confident predicted value.</param>
		/// <returns>Chosen confident result or null.</returns>
		protected virtual ClassificationResult ChooseConfidentValue(List<ClassificationResult> classificationResults,
				Guid confidentValueMethodId, double confidentValueLowEdge = 0) {
			if (confidentValueMethodId.IsEmpty()) {
				confidentValueMethodId = new Guid(MLConsts.MLEngineSignificanceConfidentValueMethodId);
			}
			if (confidentValueMethodId == new Guid(MLConsts.MLEngineSignificanceConfidentValueMethodId)) {
				return classificationResults.FirstOrDefault(result => result.Significance == HighSignificance);
			}
			if (confidentValueMethodId == new Guid(MLConsts.MaxProbabilityConfidentValueMethodId)) {
				return classificationResults.OrderByDescending(item => item.Probability)
					.FirstOrDefault(result => result.Probability >= confidentValueLowEdge);
			}
			throw new NotImplementedException($"{confidentValueMethodId} is not supported " +
				$"{nameof(confidentValueMethodId)}");
		}

		/// <summary>
		/// Sets the predicted results to entity.
		/// </summary>
		/// <param name="entity">The entity.</param>
		/// <param name="columnValueName">Name of the column value.</param>
		/// <param name="classificationResults">The classification results.</param>
		/// <param name="onSetEntityValue">Function, that will be invoked before setting predicted value to entity.
		/// If it returns <c>false</c>, the value won't be set.</param>
		/// <returns><c>true</c> if the value was set, otherwise - <c>false</c>.</returns>
		protected virtual bool SetPredictedResultsToEntity(Entity entity, string columnValueName,
				List<ClassificationResult> classificationResults,
				Func<Entity, string, ClassificationResult, bool> onSetEntityValue) {
			return SetPredictedResultsToEntity(entity, columnValueName, classificationResults, onSetEntityValue,
				new Guid(MLConsts.MLEngineSignificanceConfidentValueMethodId));
		}

		/// <summary>
		/// Sets the predicted results to entity.
		/// </summary>
		/// <param name="entity">The entity.</param>
		/// <param name="columnValueName">Name of the column value.</param>
		/// <param name="classificationResults">The classification results.</param>
		/// <param name="onSetEntityValue">Function, that will be invoked before setting predicted value to entity.
		/// If it returns <c>false</c>, the value won't be set.</param>
		/// <param name="confidentValueMethodId">Confident value selection method.</param>
		/// <param name="confidentValueLowEdge">Low edge of score for confident predicted value.</param>
		/// <returns><c>true</c> if the value was set, otherwise - <c>false</c>.</returns>
		protected virtual bool SetPredictedResultsToEntity(Entity entity, string columnValueName,
				List<ClassificationResult> classificationResults,
				Func<Entity, string, ClassificationResult, bool> onSetEntityValue,
				Guid confidentValueMethodId, double confidentValueLowEdge = 0) {
			var columnValue = entity.FindEntityColumnValue(columnValueName);
			var confidentResult = ChooseConfidentValue(classificationResults, confidentValueMethodId,
				confidentValueLowEdge);
			if (confidentResult == null) {
				Log.Info($"No confident result for {columnValueName} using {confidentValueMethodId} method");
				return false;
			}
			if (onSetEntityValue?.Invoke(entity, columnValueName, confidentResult) == false) {
				return false;
			}
			entity.SetColumnValue(columnValue.Column, confidentResult.Value);
			return true;
		}

		/// <summary>
		/// Saves the prediction values to entity.
		/// </summary>
		/// <typeparam name="T">The type of predicted values.</typeparam>
		/// <param name="schemaUId">The entity schema's identifier, which should be saved.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedValues">The predicted values of entity for the several models.</param>
		/// <param name="valueTransformer">
		/// Optional mapping function, that should be applied to predicted value before saving.
		/// </param>
		/// <returns>
		/// <c>true</c> if the entity was saved, otherwise - <c>false</c>.
		/// </returns>
		protected virtual bool SaveEntityPredictedValues<T>(Guid schemaUId, Guid entityId,
				Dictionary<MLModelConfig, T> predictedValues, Func<T, object> valueTransformer) {
			if (predictedValues.IsNullOrEmpty()) {
				return false;
			}
			Entity entity = GetEntity(schemaUId, entityId);
			if (entity == null) {
				return false;
			}
			foreach (KeyValuePair<MLModelConfig, T> prediction in predictedValues) {
				MLModelConfig model = prediction.Key;
				EntitySchemaColumn column = entity.FindEntityColumnValue(model.PredictedResultColumnName).Column;
				if (valueTransformer != null) {
					object transformedPredictionValue = valueTransformer(prediction.Value);
					entity.SetColumnValue(column, transformedPredictionValue);
				} else {
					entity.SetColumnValue(column, prediction.Value);
				}
			}
			return entity.Save(validateRequired: false);
		}
		
		/// <summary>
		/// Returns configuration for saving prediction list results for such problems as Collaborative Filtering,
		/// Text Similarity etc.
		/// </summary>
		/// <param name="modelConfig"></param>
		/// <returns></returns>
		protected virtual MLResultListSchemaConfig GetResultListSchemaConfig(MLModelConfig modelConfig) {
			EntitySchema schema =
				_userConnection.EntitySchemaManager.GetInstanceByUId(modelConfig.ListPredictResultSchemaUId);
			EntitySchemaColumn subjectColumn = schema.GetSchemaColumnByPath(modelConfig.ListPredictResultSubjectColumn);
			EntitySchemaColumn objectColumn = schema.GetSchemaColumnByPath(modelConfig.ListPredictResultObjectColumn);
			EntitySchemaColumn valueColumn = modelConfig.ListPredictResultValueColumn.IsNotNullOrWhiteSpace()
				? schema.FindSchemaColumnByPath(modelConfig.ListPredictResultValueColumn)
				: null;
			EntitySchemaColumn modelColumn = modelConfig.ListPredictResultModelColumn.IsNotNullOrWhiteSpace()
				? schema.FindSchemaColumnByPath(modelConfig.ListPredictResultModelColumn)
				: null;
			EntitySchemaColumn dateColumn = modelConfig.ListPredictResultDateColumn.IsNotNullOrWhiteSpace()
				? schema.FindSchemaColumnByPath(modelConfig.ListPredictResultDateColumn)
				: null;
			return new MLResultListSchemaConfig(schema, subjectColumn, objectColumn, valueColumn, modelColumn,
				dateColumn);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Saves the prediction values to entity.
		/// </summary>
		/// <param name="schemaUId">The entity schema's identifier, which should be saved.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedValues">The predicted values of entity for the several models.</param>
		/// <param name="onSetEntityValue">Function, that will be invoked before setting predicted value to entity.
		/// If it returns <c>false</c>, the value won't be set.</param>
		/// <returns>
		/// <c>true</c> if the entity was saved, otherwise - <c>false</c>.
		/// </returns>
		public virtual bool SaveEntityPredictedValues(Guid schemaUId, Guid entityId,
				Dictionary<MLModelConfig, List<ClassificationResult>> predictedValues,
				Func<Entity, string, ClassificationResult, bool> onSetEntityValue = null) {
			if (predictedValues.IsNullOrEmpty()) {
				return false;
			}
			Entity entity = GetEntity(schemaUId, entityId);
			if (entity == null) {
				return false;
			}
			bool isAnyValueSet = false;
			predictedValues.ForEach(kv => {
				MLModelConfig model = kv.Key;
				List<ClassificationResult> classificationResults = kv.Value;
				isAnyValueSet |= SetPredictedResultsToEntity(entity, model.PredictedResultColumnName,
					classificationResults, onSetEntityValue, model.ConfidentValueMethodId, model.ConfidentValueLowEdge);
			});
			return isAnyValueSet && entity.Save(validateRequired: false);
		}

		/// <summary>
		/// Saves the scores to entity.
		/// </summary>
		/// <param name="schemaUId">The entity schema's identifier, which should be saved.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="scoredValues">The scored values of entity for the several models.</param>
		/// <returns>
		/// <c>true</c> if the entity was saved, otherwise - <c>false</c>.
		/// </returns>
		public virtual bool SaveEntityScoredValues(Guid schemaUId, Guid entityId,
				Dictionary<MLModelConfig, double> scoredValues) {
			return SaveEntityPredictedValues(schemaUId, entityId, scoredValues, score => (int)Math.Round(score * 100));
		}

		/// <summary>
		/// Saves the prediction values to entity.
		/// </summary>
		/// <param name="schemaUId">The entity schema's identifier, which should be saved.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedValues">The predicted values of entity for the several models.</param>
		/// <returns>
		/// <c>true</c> if the entity was saved, otherwise - <c>false</c>.
		/// </returns>
		public virtual bool SaveEntityRegressionValues(Guid schemaUId, Guid entityId,
				Dictionary<MLModelConfig, double> predictedValues) {
			return SaveEntityPredictedValues(schemaUId, entityId, predictedValues, null);
		}

		/// <summary>
		/// Saves the classification results.
		/// </summary>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="modelInstanceId">The model instance identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="results">Result, returned by ML service.</param>
		public virtual void SavePrediction(Guid modelId, Guid modelInstanceId, Guid entityId,
				List<ClassificationResult> results) {
			Query delete = new Delete(_userConnection)
				.From("MLClassificationResult")
				.Where("Key").IsEqual(Column.Parameter(entityId, "Guid"))
				.And("ModelId").IsEqual(Column.Parameter(modelId, "Guid"));
			delete.Execute();
			foreach (ClassificationResult prediction in results) {
				var query = new Insert(_userConnection)
					.Into("MLClassificationResult")
					.Set("Id", Column.Parameter(Guid.NewGuid()))
					.Set("CreatedOn", new QueryParameter(DateTime.UtcNow))
					.Set("ModifiedOn", new QueryParameter(DateTime.UtcNow))
					.Set("ModelId", new QueryParameter(modelId))
					.Set("ModelInstanceUId", new QueryParameter(modelInstanceId))
					.Set("Key", new QueryParameter(entityId))
					.Set("Value", new QueryParameter(Guid.Parse(prediction.Value)))
					.Set("Probability", new QueryParameter(prediction.Probability))
					.Set("Significance", new QueryParameter(prediction.Significance));
				query.Execute();
			}
		}

		/// <summary>
		/// Saves the numeric prediction result to MLPrediction entity.
		/// </summary>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="modelInstanceId">The model instance identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="result">Result, returned by ML service.</param>
		public virtual void SavePrediction(Guid modelId, Guid modelInstanceId, Guid entityId, double result) {
			SavePrediction(modelId, modelInstanceId, entityId, new ScoringOutput { Score = result });
		}

		/// <summary>
		/// Saves the numeric prediction result to MLPrediction entity.
		/// </summary>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="modelInstanceId">The model instance identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="result">Result, returned by ML service.</param>
		public virtual void SavePrediction(Guid modelId, Guid modelInstanceId, Guid entityId, ScoringOutput result) {
			RemoveOldPredictions(modelId, entityId);
			var query = new Insert(_userConnection)
				.Into("MLPrediction")
				.Set("Id", Column.Parameter(Guid.NewGuid()))
				.Set("CreatedOn", new QueryParameter(DateTime.UtcNow))
				.Set("ModifiedOn", new QueryParameter(DateTime.UtcNow))
				.Set("ModelId", new QueryParameter(modelId))
				.Set("ModelInstanceUId", new QueryParameter(modelInstanceId))
				.Set("Key", new QueryParameter(entityId))
				.Set("Probability", new QueryParameter(result.Score));
			if (!result.Contributions.IsNullOrEmpty()) {
				string contributions = Json.Serialize(result.Contributions);
				query = query
					.Set("FeatureContributions", new QueryParameter(contributions))
					.Set("Bias", new QueryParameter(result.Bias));
			}
			query.Execute();
		}

		/// <summary>
		/// Save recommendation prediction result using model parameters.
		/// </summary>
		/// <param name="modelConfig">Model config.</param>
		/// <param name="predictionResult">Prediction result.</param>
		public virtual void SaveRecommendationPrediction(MLModelConfig modelConfig, 
				RecommendationResponse predictionResult) {
			MLResultListSchemaConfig resultListSchemaConfig = GetResultListSchemaConfig(modelConfig);
			var entityCollection = new EntityCollection(_userConnection, resultListSchemaConfig.EntitySchema);
			foreach (RecommendationOutput output in predictionResult.Outputs) {
				foreach (RecommendedItem item in output.Items) {
					Entity entity = resultListSchemaConfig.EntitySchema.CreateEntity(_userConnection);
					entity.SetDefColumnValues();
					entity.UseAdminRights = UseAdminRights;
					entity.SetColumnValue("Id", Guid.NewGuid());
					entity.SetColumnValue(resultListSchemaConfig.SubjectColumn, output.UserId);
					entity.SetColumnValue(resultListSchemaConfig.ObjectColumn, item.ItemId);
					if (resultListSchemaConfig.ValueColumn != null) {
						entity.SetColumnValue(resultListSchemaConfig.ValueColumn, item.Score);
					}
					if (resultListSchemaConfig.ModelColumn != null) {
						entity.SetColumnValue(resultListSchemaConfig.ModelColumn, modelConfig.Id);
					}
					if (resultListSchemaConfig.DateColumn != null) {
						entity.SetColumnValue(resultListSchemaConfig.DateColumn, DateTime.UtcNow);
					}
					entityCollection.Add(entity);
				}
			}
			entityCollection.Save();
		}

		#endregion

	}

	#endregion

}

