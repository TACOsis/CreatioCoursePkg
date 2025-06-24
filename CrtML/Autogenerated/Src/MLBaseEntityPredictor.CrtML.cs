namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Common;
	using Core;
	using Core.Factories;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Process.Configuration;

	/// <summary>
	/// Base class for product implementations of <see cref="IMLEntityPredictor"/>
	/// </summary>
	/// <typeparam name="TOut">The type prediction result.</typeparam>
	public abstract class MLBaseEntityPredictor<TOut> : IMLEntityPredictor, IMLPredictor<TOut>
	{

		#region Fields: Protected

		protected readonly ILog _log = LogManager.GetLogger("ML");
		protected readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Protected

		/// <summary>
		/// Initializes a new instance of the <see cref="MLBaseEntityPredictor{TOut}"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		protected MLBaseEntityPredictor(UserConnection userConnection) => _userConnection = userConnection;

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Gets the problem type identifier.
		/// </summary>
		/// <value>
		/// The problem type identifier.
		/// </value>
		protected abstract Guid ProblemTypeId { get; }

		private MLPredictionSaver _predictionSaver;
		/// <summary>
		/// Gets the prediction saver.
		/// </summary>
		/// <value>
		/// The prediction saver.
		/// </value>
		protected virtual MLPredictionSaver PredictionSaver =>
			_predictionSaver ?? (_predictionSaver = InitPredictionSaver());

		private IMLPredictor<TOut> _predictor;
		/// <summary>
		/// Gets the predictor.
		/// </summary>
		/// <value>
		/// The predictor.
		/// </value>
		protected virtual IMLPredictor<TOut> Predictor => _predictor ?? (_predictor = InitPredictor());

		/// <summary>
		/// Model should have <see cref="MLModelConfig.PredictedResultColumnName"/> filled.
		/// </summary>
		protected virtual bool MustHavePredictedResultColumn { get; } = true;

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets or sets a value indicating whether to use administrative rights while saving predictions.
		/// </summary>
		public bool UseAdminRights { get; set; } = true;

		#endregion

		#region Methods: Private

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

		private IMLPredictor<TOut> InitPredictor() {
			return ClassFactory.Get<IMLPredictor<TOut>>(ProblemTypeId.ToString().ToUpper(),
				new ConstructorArgument("userConnection", _userConnection));
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Predicts using the specified proxy with extra params taken from user task.
		/// </summary>
		/// <param name="proxy">The proxy.</param>
		/// <param name="model">The model.</param>
		/// <param name="data">The input data.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Predicted result.</returns>
		protected abstract TOut Predict(IMLServiceProxy proxy, MLModelConfig model, Dictionary<string, object> data,
			MLDataPredictionUserTask predictionUserTask);

		/// <summary>
		/// Predicts results for the given batch of records with extra params taken from user task.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <param name="dataList">Batch of records.</param>
		/// <param name="proxy">ML service proxy.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		protected abstract List<TOut> Predict(MLModelConfig model, IList<Dictionary<string, object>> dataList,
			IMLServiceProxy proxy, MLDataPredictionUserTask predictionUserTask);

		/// <summary>
		/// Saves the prediction result.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedResult">The predicted result.</param>
		protected abstract void SavePrediction(MLModelConfig model, Guid entityId, TOut predictedResult);

		/// <summary>
		/// Saves the predicted result in entity.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedResult">The predicted result.</param>
		protected abstract void SaveEntityPredictedValues(MLModelConfig model, Guid entityId, TOut predictedResult);

		/// <summary>
		/// Checks if the model is ready for prediction.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <exception cref="InvalidObjectStateException">
		/// Loaded model disabled for predictions or not trained yet
		/// or
		/// Loaded model is incorrect, because ServiceUrl is empty
		/// or
		/// Loaded model is incorrect, because RootSchemaUId is empty
		/// or
		/// Loaded model is incorrect, because PredictedResultColumnName is empty
		/// </exception>
		protected virtual void CheckModelIsReadyForPrediction(MLModelConfig model) {
			if (model.ModelInstanceUId.IsEmpty()) {
				throw new InvalidObjectStateException(
					$"Loaded model '{model.Id}' disabled for predictions or not trained yet");
			}
			if (model.ServiceUrl.IsNullOrEmpty()) {
				throw new InvalidObjectStateException(
					$"Loaded model '{model.Id}' is incorrect, because ServiceUrl is empty");
			}
			if (model.PredictionEntitySchemaId.IsEmpty()) {
				throw new InvalidObjectStateException(
					$"Loaded model '{model.Id}' is incorrect, because PredictionEntitySchemaId is empty");
			}
			if (MustHavePredictedResultColumn && model.PredictedResultColumnName.IsNullOrEmpty()) {
				throw new InvalidObjectStateException(
					$"Loaded model '{model.Id}' is incorrect, because PredictedResultColumnName is empty");
			}
		}

		/// <summary>
		/// Loads the models by its ids.
		/// </summary>
		/// <param name="modelIds">The model ids.</param>
		/// <returns></returns>
		protected virtual IList<MLModelConfig> LoadModels(List<Guid> modelIds) {
			modelIds.CheckArgumentNullOrEmpty(nameof(modelIds));
			var loader = ClassFactory.Get<IMLModelLoader>();
			return loader.LoadEnabledModels(_userConnection, modelIds);
		}

		/// <summary>
		/// Tries to load data.
		/// </summary>
		/// <param name="modelConfig">The model configuration.</param>
		/// <param name="query">The query.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="data">The input data for prediction.</param>
		/// <returns><c>true</c> if data was loaded.</returns>
		protected virtual bool TryLoadData(MLModelConfig modelConfig, string query, Guid entityId,
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

		/// <summary>
		/// Tries the get ML proxy.
		/// </summary>
		/// <param name="model">ML model.</param>
		/// <param name="proxy">Created proxy.</param>
		/// <returns><c>true</c> if proxy wass successfully created.</returns>
		protected bool TryGetMLProxy(MLModelConfig model, out IMLServiceProxy proxy) {
			proxy = null;
			try {
				proxy = GetMLProxy(model);
				return true;
			} catch (IncorrectConfigurationException ex) {
				_log.WarnFormat("Can\'t call ML proxy because of ", ex);
				return false;
			}
		}

		/// <summary>
		/// Gets ML proxy.
		/// </summary>
		/// <param name="model">ML model.</param>
		/// <returns>Created proxy.</returns>
		protected virtual IMLServiceProxy GetMLProxy(MLModelConfig model) {
			var apiKey = MLUtils.GetAPIKey(_userConnection);
			var serviceUrlArg = new ConstructorArgument("serviceUrl", model.ServiceUrl);
			var apiKeyArg = new ConstructorArgument("apiKey", apiKey);
			return ClassFactory.Get<IMLServiceProxy>(serviceUrlArg, apiKeyArg);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Tries to predict.
		/// </summary>
		/// <param name="model">ML model configuration.</param>
		/// <param name="data">The input data.</param>
		/// <param name="result">The result of prediction.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>If can't predict returns <c>false</c>.</returns>
		public virtual bool TryPredict(MLModelConfig model, Dictionary<string, object> data, out TOut result,
				MLDataPredictionUserTask predictionUserTask = null) {
			if (!TryGetMLProxy(model, out var proxy)) {
				result = default(TOut);
				return false;
			}
			result = Predict(proxy, model, data, predictionUserTask);
			return true;
		}

		/// <summary>
		/// Predicts result by given input data.
		/// </summary>
		/// <param name="modelId">ML model identifier.</param>
		/// <param name="data">The input data.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		public virtual TOut Predict(Guid modelId, Dictionary<string, object> data,
				MLDataPredictionUserTask predictionUserTask = null) {
			var models = LoadModels(new List<Guid> { modelId });
			var model = models.FirstOrDefault();
			if (model == null || !TryGetMLProxy(model, out var proxy)) {
				return default(TOut);
			}
			return Predict(proxy, model, data, predictionUserTask);
		}

		/// <summary>
		/// Predicts result by data from given entity.
		/// </summary>
		/// <param name="modelId">ML model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		public virtual TOut Predict(Guid modelId, Guid entityId, MLDataPredictionUserTask predictionUserTask = null) {
			entityId.CheckArgumentEmpty(nameof(entityId));
			modelId.CheckArgumentEmpty(nameof(modelId));
			var models = LoadModels(new List<Guid> { modelId });
			var model = models.FirstOrDefault();
			if (model == null || !TryGetMLProxy(model, out var proxy)) {
				return default(TOut);
			}
			if (!TryLoadData(model, model.BatchPredictionQuery, entityId, out var data)) {
				return default(TOut);
			}
			return Predict(proxy, model, data, predictionUserTask);
		}

		/// <summary>
		/// Predicts results for the given list of records with extra params taken from user task.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="dataList">List of records.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		public virtual List<TOut> Predict(MLModelConfig modelConfig, IList<Dictionary<string, object>> dataList,
				MLDataPredictionUserTask predictionUserTask) {
			IMLServiceProxy proxy;
			try {
				proxy = GetMLProxy(modelConfig);
			} catch (IncorrectConfigurationException ex) {
				_log.WarnFormat($"Can't predict value for model {modelConfig.Id}", ex);
				throw;
			}
			return Predict(modelConfig, dataList, proxy, predictionUserTask);
		}

		/// <summary>
		/// Predicts and saves the prediction result in entity.
		/// </summary>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		public virtual object PredictAndSave(Guid modelId, Guid entityId,
				MLDataPredictionUserTask predictionUserTask = null) {
			_log.Debug($"Predicting entity value for model {modelId} with entityId {entityId}");
			entityId.CheckArgumentEmpty(nameof(entityId));
			modelId.CheckArgumentEmpty(nameof(modelId));
			_userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var models = LoadModels(new List<Guid> { modelId });
			if (models.IsNullOrEmpty()) {
				_log.Warn($"Model was not found by id {modelId}");
				return null;
			}
			var model = models.First();
			CheckModelIsReadyForPrediction(model);
			if (!TryLoadData(model, model.BatchPredictionQuery, entityId, out var data)) {
				return null;
			}
			if (!Predictor.TryPredict(model, data, out var predictedResult, predictionUserTask)) {
				return null;
			}
			if (predictedResult != null) {
				SavePrediction(model, entityId, predictedResult);
				SaveEntityPredictedValues(model, entityId, predictedResult);
			} else {
				_log.Debug($"Predicted result for entity {entityId} is empty");
			}
			_log.Debug($"Prediction for entity {entityId} completed");
			return predictedResult;
		}

		#endregion

	}

}

