namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Common;
	using Core;
	using Core.Factories;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Process.Configuration;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.ML.Interfaces.Responses;

	#region Class: MLEntityPredictor

	/// <summary>
	/// Predicts entity values using machine learning models.
	/// </summary>
	public class MLEntityPredictor
	{

		#region Delegates: Private

		private delegate void SavePredictionHandler<in T>(Guid modelId, Guid modelInstanceId, Guid entityId, T result);

		private delegate Dictionary<MLModelConfig, T> PredictHandler<T>(IList<MLModelConfig> models, Guid entityId);

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLEntityPredictor"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLEntityPredictor(UserConnection userConnection) => _userConnection = userConnection;

		#endregion

		#region Properties: Private

		private MLPredictionSaver _predictionSaver;
		private MLPredictionSaver PredictionSaver => _predictionSaver ?? (_predictionSaver = InitPredictionSaver());

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets the entity schema identifier, which models refers to.
		/// </summary>
		public Guid ModelRootSchemaUId { get; private set; }

		/// <summary>
		/// Gets or sets a value indicating whether to use administrative rights while saving predictions.
		/// </summary>
		public bool UseAdminRights { get; set; } = true;

		#endregion

		#region Methods: Private

		private static void SavePredictions<T>(Guid entityId, Dictionary<MLModelConfig, T> predictedValues,
				SavePredictionHandler<T> savePrediction) {
			if (predictedValues.IsNullOrEmpty()) {
				return;
			}
			foreach (KeyValuePair<MLModelConfig, T> prediction in predictedValues) {
				savePrediction(prediction.Key.Id, prediction.Key.ModelInstanceUId, entityId, prediction.Value);
			}
		}

		private static Dictionary<MLModelConfig, T> PredictEntityValues<T>(IEnumerable<MLModelConfig> models,
				Guid entityId,
				Func<MLModelConfig, bool> isModelReady,
				PredictHandler<T> predict) {
			var readyModels = models.Where(isModelReady).ToList();
			if (!readyModels.Any()) {
				_log.Error($"No ready models found for prediction entity with id '{entityId}'");
				return new Dictionary<MLModelConfig, T>();
			}
			var predictedValues = predict(readyModels, entityId) ?? new Dictionary<MLModelConfig, T>();
			return predictedValues;
		}

		private static double CastToDouble(object o) {
			if (o is ScoringOutput output) {
				return output.Score;
			}
			return o is IConvertible convertible ? convertible.ToDouble(null) : 0d;
		}

		private IMLPredictionDataLoader CreatePredictionDataLoader(Select select) {
			var config = new MLDataLoaderConfig {
				MinRecordsCount = 1,
				ChunkSize = 500,
				MaxRecordsCount = -1
			};
			var userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			var selectArg = new ConstructorArgument("select", select);
			var configArg = new ConstructorArgument("config", config);
			IMLPredictionDataLoader dataLoader =
				ClassFactory.Get<IMLPredictionDataLoader>(userConnectionArg, selectArg, configArg);
			return dataLoader;
		}

		private MLPredictionSaver InitPredictionSaver() {
			ConstructorArgument userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			var predictionSaver = ClassFactory.Get<MLPredictionSaver>(userConnectionArg);
			predictionSaver.UseAdminRights = UseAdminRights;
			return predictionSaver;
		}

		private bool IsBaseModelPropertiesFulfilled(MLModelConfig model) {
			if (model.ModelInstanceUId.IsEmpty()) {
				_log.InfoFormat("Loaded model '{0}' disabled for predictions or not trained yet", model.Id);
				return false;
			}
			if (model.ServiceUrl.IsNullOrEmpty()) {
				_log.WarnFormat("Loaded model '{0}' is incorrect, because ServiceUrl is empty", model.Id);
				return false;
			}
			if (model.PredictionEntitySchemaId.IsEmpty()) {
				_log.WarnFormat("Loaded model '{0}' is incorrect, cause PredictionEntitySchemaUId is empty", model.Id);
				return false;
			}
			var prevRootSchemaUId = ModelRootSchemaUId;
			if (prevRootSchemaUId.IsNotEmpty() && prevRootSchemaUId != model.PredictionEntitySchemaId) {
				ModelRootSchemaUId = Guid.Empty;
				throw new InvalidObjectStateException("Prediction can't be made, because models have different " +
					$"PredictionEntitySchemaUId: {prevRootSchemaUId} and { model.PredictionEntitySchemaId }");
			}
			if (model.PredictedResultColumnName.IsNullOrEmpty()) {
				_log.WarnFormat("Loaded model '{0}' is incorrect, because PredictedResultColumnName is empty",
					model.Id);
				return false;
			}
			ModelRootSchemaUId = model.PredictionEntitySchemaId;
			return true;
		}

		private IList<MLModelConfig> LoadModels(List<Guid> modelIds) {
			modelIds.CheckArgumentNullOrEmpty(nameof(modelIds));
			var loader = ClassFactory.Get<IMLModelLoader>();
			return loader.LoadEnabledModels(_userConnection, modelIds);
		}

		private bool TryGetMLProxy(MLModelConfig model, out IMLServiceProxy proxy) {
			proxy = null;
			if (model == null) {
				return false;
			}
			var apiKey = MLUtils.GetAPIKey(_userConnection);
			var serviceUrlArg = new ConstructorArgument("serviceUrl", model.ServiceUrl);
			var apiKeyArg = new ConstructorArgument("apiKey", apiKey);
			try {
				proxy = ClassFactory.Get<IMLServiceProxy>(serviceUrlArg, apiKeyArg);
				return true;
			} catch (IncorrectConfigurationException ex) {
				_log.WarnFormat("Can\'t call ML proxy because of ", ex);
				return false;
			}
		}

		private bool TryLoadData(MLModelConfig modelConfig, string query, Guid entityId,
				out Dictionary<string, object> data) {
			var modelQueryAssembler = ClassFactory.Get<IMLModelQueryBuilder>(
				new ConstructorArgument("userConnection", _userConnection));
			Select select = modelQueryAssembler.BuildSelect(modelConfig.PredictionEntitySchemaId, query,
				modelConfig.GetPredictionColumnExpressions());
			IMLModelValidator modelValidator = ClassFactory.Get<IMLModelValidator>();
			modelValidator.CheckInputColumns(select, modelConfig.GetModelSchemaMetadata());
			IMLPredictionDataLoader dataLoader = CreatePredictionDataLoader(select);
			data = dataLoader.LoadDataForPrediction(entityId);
			return !data.IsNullOrEmpty();
		}

		private Dictionary<MLModelConfig, List<ClassificationResult>> Classify(IList<MLModelConfig> models,
				Guid entityId) {
			return Predict<List<ClassificationResult>>(models, entityId);
		}

		private Dictionary<MLModelConfig, ScoringOutput> Score(IList<MLModelConfig> models, Guid entityId) {
			return Predict<ScoringOutput>(models, entityId);
		}

		private Dictionary<MLModelConfig, List<ClassificationResult>> ClassifyEntityValues(IList<MLModelConfig> models,
				Guid entityId) {
			return PredictEntityValues(models, entityId,
				IsBaseModelPropertiesFulfilled,
				Classify);
		}

		private Dictionary<MLModelConfig, ScoringOutput> ScoreEntityValues(IList<MLModelConfig> models, Guid entityId) {
			return PredictEntityValues(models, entityId,
				IsBaseModelPropertiesFulfilled,
				Score);
		}

		private Guid GetModelProblemType(Guid modelId) {
			var select = new Select(_userConnection)
				.Column("MLProblemTypeId")
				.From("MLModel")
				.Where("Id")
					.IsEqual(Column.Parameter(modelId)) as Select;
			return select.ExecuteScalar<Guid>();
		}

		private object PredictAndSave(Guid modelId, Guid entityId, Guid problemTypeId,
				MLDataPredictionUserTask predictionUserTask) {
			var userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			var isImplemented = ClassFactory.TryGet<IMLEntityPredictor>(problemTypeId.ToString().ToUpper(),
				out var entityPredictor, userConnectionArg);
			if (!isImplemented) {
				throw new UnsupportedTypeException(
					$"Prediction for problem type {problemTypeId} is not supported. Model Id = {modelId}");
			}
			var result = entityPredictor.PredictAndSave(modelId, entityId, predictionUserTask);
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Predicts result for single entity using given models.
		/// </summary>
		/// <param name="models">Models for prediction.</param>
		/// <param name="entityId">Entity record id.</param>
		/// <typeparam name="TOut">Type of prediction result.</typeparam>
		/// <returns>Prediction results for each model.</returns>
		/// <exception cref="SingleEntityPredictionException">Error while predicting.</exception>
		public Dictionary<MLModelConfig, TOut> Predict<TOut>(IList<MLModelConfig> models, Guid entityId) {
			var predictionResults = new Dictionary<MLModelConfig, TOut>();
			foreach (var model in models) {
				if (!TryLoadData(model, model.BatchPredictionQuery, entityId, out var data)) {
					continue;
				}
				var predictor = ClassFactory.Get<IMLPredictor<TOut>>(model.ProblemType.ToString().ToUpper(),
					new ConstructorArgument("userConnection", _userConnection));
				try {
					if (predictor.TryPredict(model, data, out TOut predictedResult)) {
						predictionResults[model] = predictedResult;
					}
				} catch (Exception e) {
					throw new SingleEntityPredictionException(entityId, model.Id, e);
				}
			}
			return predictionResults;
		}

		/// <summary>
		/// Predicts the entity value and saves result in entity. Uses problem type of the specified ML model.
		/// </summary>
		/// <param name="modelId">The machine learning model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Predicted value.</returns>
		/// <exception cref="UnsupportedTypeException">Problem type is not supported for current operation.</exception>
		public virtual double PredictEntityValueAndSaveResult(Guid modelId, Guid entityId,
				MLDataPredictionUserTask predictionUserTask = null) {
			_log.Debug($"Predicting entity value for model {modelId} with entityId {entityId}");
			entityId.CheckArgumentEmpty(nameof(entityId));
			if (modelId.IsEmpty()) {
				_log.Warn("Model id should not be empty. Nothing to do.");
				return default(double);
			}
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var problemTypeId = GetModelProblemType(modelId);
			if (problemTypeId.IsEmpty()) {
				_log.Warn($"No models found with id {modelId} or ProblemTypeId is empty");
				return default(double);
			}
			object result = PredictAndSave(modelId, entityId, problemTypeId, predictionUserTask);
			return CastToDouble(result);
		}

		/// <summary>
		/// Scores the entity value and gives explanation of the result.
		/// </summary>
		/// <param name="modelId">The machine learning model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Predicted score with explanations.</returns>
		/// <exception cref="UnsupportedTypeException">Problem type is not supported for current operation.</exception>
		[Obsolete("7.16.2 | Method will be removed and should not be used. Use IMLPredictor.Predict instead.")]
		public ScoringOutput ScoreAndExplain(Guid modelId, Guid entityId,
				MLDataPredictionUserTask predictionUserTask = null) {
			_log.Debug($"Scoring value for model {modelId} with entityId {entityId} with explanation");
			entityId.CheckArgumentEmpty(nameof(entityId));
			if (modelId.IsEmpty()) {
				_log.Warn("Model id should not be empty. Nothing to do.");
				return null;
			}
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var problemTypeId = GetModelProblemType(modelId);
			if (problemTypeId.IsEmpty()) {
				_log.Warn($"No models found with id {modelId} or ProblemTypeId is empty");
				return null;
			}
			if (problemTypeId != new Guid(MLConsts.ScoringProblemType)) {
				throw new UnsupportedTypeException($"Problem type of model {modelId} is {problemTypeId}, " +
					$"but should be {MLConsts.ScoringProblemType}");
			}
			object result = PredictAndSave(modelId, entityId, problemTypeId, predictionUserTask);
			return (ScoringOutput)result;
		}

		/// <summary>
		/// Classifies the entity values.
		/// </summary>
		/// <param name="modelIds">The machine learning model identifiers. All models should target the same entity
		/// schema.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <returns>Predicted results (key is the target field value, value is the list of predicted results).
		/// </returns>
		/// <exception cref="InvalidObjectStateException">Not all models target the same entity schema.</exception>
		public virtual Dictionary<MLModelConfig, List<ClassificationResult>> ClassifyEntityValues(List<Guid> modelIds,
				Guid entityId) {
			entityId.CheckArgumentEmpty(nameof(entityId));
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var models = LoadModels(modelIds);
			var result = ClassifyEntityValues(models, entityId);
			SavePredictions(entityId, result, PredictionSaver.SavePrediction);
			return result;
		}

		/// <summary>
		/// Classifies the entity values.
		/// </summary>
		/// <param name="modelId">The machine learning model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <returns>Classification results.</returns>
		public virtual List<ClassificationResult> ClassifyEntityValues(Guid modelId, Guid entityId) {
			Dictionary<MLModelConfig, List<ClassificationResult>> result =
				ClassifyEntityValues(new List<Guid> { modelId }, entityId);
			return result.Values.FirstOrDefault();
		}

		/// <summary>
		/// Scores the entity values.
		/// </summary>
		/// <param name="modelIds">The scoring ML model identifiers. All models should target the same entity
		/// schema.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <returns>Scores results (key is the target field value, value is the scored result).
		/// </returns>
		/// <exception cref="InvalidObjectStateException">Not all models target the same entity schema.</exception>
		public virtual Dictionary<MLModelConfig, double> ScoreEntityValues(List<Guid> modelIds, Guid entityId) {
			entityId.CheckArgumentEmpty(nameof(entityId));
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			IList<MLModelConfig> models = LoadModels(modelIds);
			var predictedValues = ScoreEntityValues(models, entityId);
			var scoringResults = predictedValues.ToDictionary(kv => kv.Key, kv => kv.Value.Score);
			SavePredictions(entityId, scoringResults, PredictionSaver.SavePrediction);
			return scoringResults;
		}

		/// <summary>
		/// Performs recommendation for specified users.
		/// </summary>
		/// <param name="modelId">Model identifier</param>
		/// <param name="users">Users to get recommendation.</param>
		/// <param name="recordsCount">Number of items to recommend for each user.</param>
		/// <param name="filterItems">Items to filter.</param>
		/// <param name="filterItemsMode">Mode of filter,</param>
		/// <param name="filterAlreadyInteractedItems">Filter out already interacted items from prediction.</param>
		/// <param name="userItems">Updated users items.</param>
		/// <param name="recalculateUsers">Recalculate users recommendations using <see cref="userItems"/></param>
		public virtual List<RecommendationOutput> Recommend(Guid modelId, List<Guid> users, int recordsCount,
				List<Guid> filterItems = null,
				RecommendationFilterItemsMode filterItemsMode = RecommendationFilterItemsMode.White,
				bool filterAlreadyInteractedItems = true, List<DatasetValue> userItems = null,
				bool recalculateUsers = false) {
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			MLModelConfig model = LoadModels(new List<Guid> { modelId }).First();
			if (!TryGetMLProxy(model, out IMLServiceProxy proxy)) {
				throw new InvalidObjectStateException("Failed to create MLService proxy instance.");
			}
			var outputs = new List<RecommendationOutput>();
			if (users.Count == 0) {
				return outputs;
			}
			int chunkSize = SysSettings.GetValue(_userConnection, "MLRecommendationChunkSize", 50);
			if (chunkSize <= 0) {
				_log.Warn("MLRecommendationChunkSize setting <= 0. Batching won't be used");
				chunkSize = users.Count;
			}
			var position = 0;
			Exception lastException = null;
			while (position < users.Count) {
				var chunkUsers = users.Skip(position).Take(chunkSize).ToList();
				position += chunkSize;
				RecommendationResponse result;
				try {
					result = proxy.Recommend(model, chunkUsers, recordsCount, filterItems,
						filterItemsMode, filterAlreadyInteractedItems, userItems, recalculateUsers);
				} catch (Exception e) {
					lastException = e;
					_log.Error($"Recommendation prediction failed for users [#{position - chunkSize}, {position}], " +
						$"model {modelId}, user #position = {users[position - chunkSize]}", e);
					continue;
				}
				try {
					if (!model.ListPredictResultSchemaUId.IsEmpty()) {
						PredictionSaver.SaveRecommendationPrediction(model, result);
					}
					outputs.AddRange(result.Outputs);
				} catch (Exception e) {
					lastException = e;
					_log.Error($"Saving of recommendation prediction failed for users [#{position - chunkSize},"
						+ $"{position}], model {{modelId}}, user #position = {{users[position]}}", e);
				}
			}
			_log.Info($"Recommendations for {outputs.Count}/{users.Count} users were received and saved, " +
				$"modelId = {modelId}");
			if (lastException != null) {
				throw lastException;
			}
			return outputs;
		}

		/// <summary>
		/// Performs RAG using the specified model.
		/// </summary>
		/// <param name="modelId">The machine learning model identifier.</param>
		/// <param name="question">The question.</param>
		/// <param name="fileIds">The files identifiers.</param>
		/// <param name="skipAnswer">The indicator for skip answer.</param>
		/// <returns>Predicted answer with files.</returns>
		public RagOutput GetRagAnswer(Guid modelId, string question, IEnumerable<Guid> fileIds = null, bool skipAnswer = false) {
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			MLModelConfig model = LoadModels(new List<Guid> { modelId }).FirstOrDefault();
			if (model == null) {
			    throw new ItemNotFoundException($"Model with id: {modelId} has been failed loaded");
			}
			if (!TryGetMLProxy(model, out IMLServiceProxy proxy)) {
				throw new InvalidObjectStateException($"Failed to create MLService proxy instance for modelId {modelId}");
			}
			RagResponse response = proxy.GetRagAnswer(model, question, fileIds, skipAnswer);
			return response?.Outputs.FirstOrDefault();
		}

		#endregion

	}

	#endregion

}

