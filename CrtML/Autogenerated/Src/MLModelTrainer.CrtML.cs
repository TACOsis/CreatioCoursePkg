namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.ML.Interfaces.Responses;

	#region Interface: IMLModelTrainer

	/// <summary>
	/// Defines methods to train a new machine learning model.
	/// </summary>
	public interface IMLModelTrainer
	{

		#region Methods: Public

		/// <summary>
		/// Starts the train session.
		/// </summary>
		/// <param name="ignoreMetricThreshold">if set to <c>true</c> ignore metric threshold on applying model
		/// instance.</param>
		/// <returns>
		/// New train session identifier.
		/// </returns>
		Guid StartTrainSession(bool ignoreMetricThreshold = false);

		/// <summary>
		/// Uploads the data.
		/// </summary>
		void UploadData();

		/// <summary>
		/// Begins the training.
		/// </summary>
		void BeginTraining();

		/// <summary>
		/// Queries for the actual model state and updates it in database.
		/// </summary>
		void UpdateModelState();

		#endregion

	}

	#endregion

	#region Class: MLModelTrainer

	/// <summary>
	/// Provides a base class for implementations of the <see cref="IMLModelTrainer"/> interface.
	/// </summary>
	/// <seealso cref="Terrasoft.Configuration.ML.IMLModelTrainer" />
	public abstract class MLModelTrainer : IMLModelTrainer
	{

		#region Constants: Private

		private const string ClassifierBeginTrainingMethodName = "/classifier/beginTraining";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private readonly TrainSessionState[] _notificationStates = {
			TrainSessionState.DataTransferring,
			TrainSessionState.Training,
			TrainSessionState.Error,
			TrainSessionState.Done
		};
		private readonly IMLServiceProxy _proxy;
		private readonly IMLModelEventsNotifier _modelEventsNotifier;

		#endregion

		#region Fields: Protected

		protected readonly UserConnection _userConnection;
		protected readonly MLModelConfig _modelConfig;
		protected IMLProblemTypeFeatures _problemTypeFeatures;
		protected IMLModelBuilder _modelBuilder;
		protected readonly IMLMetadataGenerator _metadataGenerator;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLModelTrainer"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelConfig">The model configuration.</param>
		protected MLModelTrainer(UserConnection userConnection, MLModelConfig modelConfig) {
			userConnection.CheckArgumentNull("userConnection");
			modelConfig.CheckArgumentNull("modelConfig");
			modelConfig.Id.CheckArgumentEmpty("MLModelConfig.Id");
			_userConnection = userConnection;
			_modelConfig = modelConfig;
			_proxy = InitServiceProxy();
			ConstructorArgument userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			_modelEventsNotifier = ClassFactory.Get<IMLModelEventsNotifier>(userConnectionArg);
			_metadataGenerator = ClassFactory.Get<IMLMetadataGenerator>();
			string problemType = _modelConfig.ProblemType.ToString().ToUpperInvariant();
			InitProblemTypeFeatures(problemType);
			InitModelBuilder(problemType);
		}

		#endregion

		#region Properties: Private

		private string _apiKey;
		private string ApiKey {
			get {
				if (_apiKey.IsNullOrEmpty()) {
					_apiKey = MLUtils.GetAPIKey(_userConnection);
				}
				return _apiKey;
			}
		}

		private Dictionary<TrainSessionState, Guid> _trainSessionStateMapping;
		private Dictionary<TrainSessionState, Guid> TrainSessionStateMapping =>
			_trainSessionStateMapping ?? (_trainSessionStateMapping = GetTrainSessionStateMapping());

		#endregion

		#region Properties: Protected

		private IMLDataUploader _dataUploader;
		protected IMLDataUploader DataUploader => _dataUploader ?? (_dataUploader = InitDataUploader());

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets the finite train session states.
		/// </summary>
		public static TrainSessionState[] FiniteStates { get; } =
			{ TrainSessionState.NotStarted, TrainSessionState.Error, TrainSessionState.Done };

		#endregion

		#region Methods: Private

		private IMLDataUploader InitDataUploader() {
			Guid sessionId = _modelConfig.TrainSessionId;
			sessionId.CheckArgumentEmpty("MLModelConfig.TrainSessionId");
			ConstructorArgument sessionIdArg = new ConstructorArgument("sessionId", _modelConfig.TrainSessionId);
			ConstructorArgument proxyArg = new ConstructorArgument("mlServiceProxy", _proxy);
			var eventsNotifierArg = new ConstructorArgument("modelEventsNotifier", _modelEventsNotifier);
			IMLDataUploader dataUploader = ClassFactory.Get<IMLDataUploader>(proxyArg, sessionIdArg, eventsNotifierArg);
			return dataUploader;
		}

		private void InitProblemTypeFeatures(string problemType) {
			_problemTypeFeatures = ClassFactory.HasBinding(typeof(IMLProblemTypeFeatures), problemType)
				? ClassFactory.Get<IMLProblemTypeFeatures>(problemType)
				: ClassFactory.Get<IMLProblemTypeFeatures>(name: null);
		}

		private void InitModelBuilder(string problemType) {
			_modelBuilder = ClassFactory.HasBinding(typeof(IMLModelBuilder), problemType)
				? ClassFactory.Get<IMLModelBuilder>(problemType)
				: ClassFactory.Get<IMLModelBuilder>(name: null);
		}

		private IMLServiceProxy InitServiceProxy() {
			string serviceUrl = _modelConfig.ServiceUrl;
			serviceUrl.CheckArgumentNullOrWhiteSpace("MLModelConfig.ServiceUrl");
			ConstructorArgument serviceUrlArg = new ConstructorArgument("serviceUrl", serviceUrl);
			ConstructorArgument apiKeyArg = new ConstructorArgument("apiKey", ApiKey);
			IMLServiceProxy proxy = ClassFactory.Get<IMLServiceProxy>(serviceUrlArg, apiKeyArg);
			return proxy;
		}

		private void UpdateModelOnError(Guid modelId, string errorMessage) {
			UpdateTriedToTrainOn(modelId);
			UpdateTrainSessionStatus(TrainSessionState.Error, modelId, errorMessage);
		}

		private void UpdateTriedToTrainOn(Guid modelId) {
			Update updateQuery = (Update)new Update(_userConnection, "MLModel")
					.Set("TriedToTrainOn", Column.Parameter(DateTime.UtcNow))
				.Where("Id").IsEqual(Column.Parameter(modelId, "Guid"));
			updateQuery.Execute();
		}

		private Dictionary<TrainSessionState, Guid> GetTrainSessionStateMapping() {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "MLModelState") {
				Cache = _userConnection.ApplicationCache,
				CacheItemName = "MLModelTrainer_MLModelState"
			};
			esq.PrimaryQueryColumn.IsVisible = true;
			esq.AddColumn("Code");
			EntityCollection entities = esq.GetEntityCollection(_userConnection);
			var mapping = new Dictionary<TrainSessionState, Guid>();
			foreach (Entity entity in entities) {
				if (!Enum.TryParse(entity.GetTypedColumnValue<string>("Code"), out TrainSessionState state)) {
					continue;
				}
				mapping.Add(state, entity.PrimaryColumnValue);
			}
			return mapping;
		}

		private void InsertTrainSession(Guid mlModelId, Guid trainSessionId, TrainSessionState sessionState,
				bool ignoreMetricThreshold, string errorMessage = null) {
			Guid mlModelStateId = TrainSessionStateMapping[sessionState];
			var insertQuery = new Insert(_userConnection).Into("MLTrainSession")
				.Set("Id", Column.Parameter(trainSessionId))
				.Set("MLModelId", Column.Parameter(mlModelId))
				.Set("StateId", Column.Parameter(mlModelStateId))
				.Set("InUse", Column.Parameter(false))
				.Set("IgnoreMetricThreshold", Column.Parameter(ignoreMetricThreshold))
				.Set("Error", Column.Parameter(errorMessage ?? string.Empty));
			insertQuery.Execute();
		}

		private bool GetIsTrainSessionIgnoresMetric(Guid trainSessionId) {
			var select = (Select)new Select(_userConnection)
					.Column("IgnoreMetricThreshold")
				.From("MLTrainSession")
				.Where("Id").IsEqual(Column.Parameter(trainSessionId));
			return select.ExecuteScalar<bool>();
		}

		private void SaveTrainSession(Guid trainSessionId, TrainSessionState sessionState,
				bool inUse = false, ModelSummary modelSummary = null, string errorMessage = null) {
			Guid mlModelStateId = TrainSessionStateMapping[sessionState];
			var updateQuery = (Update)new Update(_userConnection, "MLTrainSession")
				.Set("StateId", Column.Const(mlModelStateId))
				.Set("Error", Column.Parameter(errorMessage ?? string.Empty))
				.Set("TrainedOn", Column.Parameter(DateTime.UtcNow))
				.Where("Id").IsEqual(Column.Parameter(trainSessionId));
			if (inUse) {
				updateQuery = updateQuery.Set("InUse", Column.Parameter(true));
			}
			if (modelSummary != null) {
				string serializedFeatureImportances = JsonConvert.SerializeObject(modelSummary.FeatureImportances);
				updateQuery = updateQuery
					.Set("TrainSetSize", Column.Const(modelSummary.DataSetSize))
					.Set("InstanceMetric", Column.Parameter(modelSummary.Metric))
					.Set("TrainingTimeMinutes", Column.Const(modelSummary.TrainingTimeMinutes))
					.Set("FeatureImportances", Column.Parameter(serializedFeatureImportances));
			}
			updateQuery.Execute();
		}

		private void SaveAcceptedSession(Guid mlModelId, Guid trainSessionId, ModelSummary modelSummary) {
			Update updateQuery = (Update)new Update(_userConnection, "MLTrainSession")
				.Set("InUse", Column.Parameter(false))
				.Where("MLModelId").IsEqual(Column.Parameter(mlModelId));
			updateQuery.Execute();
			SaveTrainSession(trainSessionId, TrainSessionState.Done, true, modelSummary);
		}

		private void SaveUnacceptedSession(Guid trainSessionId, ModelSummary modelSummary) {
			SaveTrainSession(trainSessionId, TrainSessionState.Done, false, modelSummary);
		}

		private void SaveFailedSession(Guid trainSessionId, string errorMessage) {
			SaveTrainSession(trainSessionId, TrainSessionState.Error, false, errorMessage: errorMessage);
		}

		private Guid GetErrorId(string errorMessage) {
			if (errorMessage.IsNullOrWhiteSpace()) {
				return Guid.Empty;
			}
			var likeExpression = new ConcatQueryFunction(new QueryColumnExpressionCollection {
				Column.Parameter("%"), Column.SourceColumn("Pattern"), Column.Parameter("%")
			});
			var select = (Select)new Select(_userConnection).Top(1)
				.Cols("Id")
				.From("MLError")
				.Where(Column.Parameter(errorMessage)).IsLike(likeExpression);
			var errorId = select.ExecuteScalar<Guid>();
			return errorId;
		}

		#endregion

		#region Methods: Protected

		protected abstract IMLTrainDataLoader CreateTrainDataLoader();

		protected abstract ModelSchemaMetadata InitMetadata();

		/// <summary>
		/// Saves the train session identifier.
		/// </summary>
		/// <param name="sessionId">The session identifier.</param>
		protected virtual void SaveTrainSessionId(Guid sessionId) {
			_modelConfig.TrainSessionId = sessionId;
			Update updateQuery = (Update)new Update(_userConnection, "MLModel")
					.Set("TrainSessionId", Column.Parameter(sessionId))
				.Where("Id").IsEqual(Column.Parameter(_modelConfig.Id));
			updateQuery.Execute();
		}

		/// <summary>
		/// Updates the train session status.
		/// </summary>
		/// <param name="newSessionState">New state of the train session.</param>
		/// <param name="modelId">The model's identifier.</param>
		/// <param name="errorMessage">Optional error message to save into MLModel entity.</param>
		protected virtual void UpdateTrainSessionStatus(TrainSessionState newSessionState, Guid modelId,
				string errorMessage = "") {
			if (_modelConfig.CurrentState == newSessionState && errorMessage.IsNullOrEmpty()) {
				return;
			}
			if (!TrainSessionStateMapping.ContainsKey(newSessionState)) {
				throw new ItemNotFoundException($"Session state {newSessionState} is unknown");
			}
			Guid mlModelStateId = TrainSessionStateMapping[newSessionState];
			Guid errorId = GetErrorId(errorMessage);
			var errorIdParam = errorId.IsEmpty() ? Column.Parameter(null, "Guid") : Column.Parameter(errorId);
			Update updateQuery = (Update)new Update(_userConnection, "MLModel")
					.Set("StateId", Column.Parameter(mlModelStateId))
					.Set("LastError", Column.Parameter(errorMessage ?? string.Empty))
					.Set("LastTrainingErrorId", errorIdParam)
				.Where("Id").IsEqual(Column.Parameter(modelId, "Guid"));
			updateQuery.Execute();
			_modelConfig.CurrentState = newSessionState;
			if (_notificationStates.Contains(newSessionState)) {
				_modelEventsNotifier.NotifyModelStateChanged(modelId, newSessionState, _modelConfig.TrainSessionId);
			}
		}

		/// <summary>
		/// Gets the model is acceptable for using.
		/// </summary>
		/// <param name="trainSessionInfo">The train session information.</param>
		/// <returns><c>true</c> if model is acceptable and can be used for future prediction.</returns>
		protected virtual bool GetIsModelAcceptable(GetSessionInfoResponse trainSessionInfo) {
			if (_modelConfig.MetricThreshold <= 0) {
				return true;
			}
			trainSessionInfo.ModelSummary.CheckArgumentNull("ModelSummary");
			return trainSessionInfo.ModelSummary.Metric >= _modelConfig.MetricThreshold;
		}

		/// <summary>
		/// Updates the model instance.
		/// </summary>
		/// <param name="trainSessionInfo">The train session information.</param>
		/// <param name="trainSessionId">The train session identifier.</param>
		protected virtual void UpdateModelInstance(GetSessionInfoResponse trainSessionInfo, Guid trainSessionId) {
			ModelSummary modelSummary = trainSessionInfo.ModelSummary;
			modelSummary.CheckArgumentNull("ModelSummary");
			modelSummary.ModelInstanceUId.CheckArgumentEmpty("MLModelConfig.ModelSummary.ModelInstanceUId");
			Update updateQuery = (Update)new Update(_userConnection, "MLModel")
					.Set("ModelInstanceUId", Column.Parameter(modelSummary.ModelInstanceUId))
					.Set("InstanceMetric", Column.Parameter(modelSummary.Metric))
					.Set("TrainedOn", Column.Parameter(DateTime.UtcNow))
				.Where("TrainSessionId").IsEqual(Column.Parameter(trainSessionId));
			updateQuery.Execute();
		}

		#endregion

		#region Methods: Public

		public static IMLModelTrainer CreateModelTrainer(MLModelConfig modelConfig, UserConnection userConnection) {
			string problemType = modelConfig.ProblemType.ToString().ToUpperInvariant();
			var modelConfigArg = new ConstructorArgument("modelConfig", modelConfig);
			var userConnectionArg = new ConstructorArgument("userConnection", userConnection);
			IMLModelTrainer trainer = ClassFactory.HasBinding(typeof(IMLModelTrainer), problemType)
				? ClassFactory.Get<IMLModelTrainer>(name: problemType, userConnectionArg, modelConfigArg)
				: ClassFactory.Get<IMLModelTrainer>(name: null, userConnectionArg, modelConfigArg);
			return trainer;
		}

		/// <summary>
		/// Starts the train session.
		/// </summary>
		/// <param name="ignoreMetricThreshold">if set to <c>true</c> ignore metric threshold on applying model
		/// instance.</param>
		/// <returns>
		/// New train session identifier.
		/// </returns>
		public Guid StartTrainSession(bool ignoreMetricThreshold = false) {
			try {
				ModelSchemaMetadata modelSchemaMetadata = InitMetadata();
				_modelBuilder.MergeFitParams(modelSchemaMetadata, _modelConfig);
				string metadata = _modelBuilder.MergeCustomMetadata(modelSchemaMetadata, _modelConfig.MetaData);
				Guid sessionId = _proxy.StartTrainSession(metadata, _modelConfig.Id);
				SaveTrainSessionId(sessionId);
				InsertTrainSession(_modelConfig.Id, sessionId, TrainSessionState.DataTransferring,
					ignoreMetricThreshold);
				return sessionId;
			} catch (Exception ex) {
				_modelConfig.TrainSessionId = Guid.NewGuid();
				UpdateModelOnError(_modelConfig.Id, ex.Message);
				InsertTrainSession(_modelConfig.Id, _modelConfig.TrainSessionId, TrainSessionState.Error,
					ignoreMetricThreshold, ex.Message);
				throw;
			}
		}

		/// <summary>
		/// Uploads the data.
		/// </summary>
		public void UploadData() {
			UpdateTrainSessionStatus(TrainSessionState.DataTransferring, _modelConfig.Id);
			string error = null;
			try {
				IMLTrainDataLoader dataLoader = CreateTrainDataLoader();
				DataUploader.Upload(dataLoader);
			} catch (NotEnoughDataForTrainingException ex) {
				error = $"Data upload for model id {_modelConfig.Id} failed with: {ex.Message}";
				throw new NotEnoughDataForTrainingException(error);
			} catch (Exception ex) {
				error = ex.Message;
				throw;
			} finally {
				if (error != null) {
					UpdateModelOnError(_modelConfig.Id, error);
					SaveFailedSession(_modelConfig.TrainSessionId, error);
				}
			}
		}

		/// <summary>
		/// Begins the training.
		/// </summary>
		public void BeginTraining() {
			try {
				var methodName = _modelConfig.TrainingEndpoint.IsNotNullOrEmpty()
					? _modelConfig.TrainingEndpoint
					: ClassifierBeginTrainingMethodName;
				_proxy.BeginTraining(_modelConfig.TrainSessionId, methodName);
			} catch (Exception ex) {
				UpdateModelOnError(_modelConfig.Id, ex.Message);
				SaveFailedSession(_modelConfig.TrainSessionId, ex.Message);
				throw;
			}
			UpdateTrainSessionStatus(TrainSessionState.QueuedToTrain, _modelConfig.Id);
			SaveTrainSession(_modelConfig.TrainSessionId, TrainSessionState.QueuedToTrain);
		}

		/// <summary>
		/// Queries for the actual model state and updates it in database.
		/// </summary>
		public void UpdateModelState() {
			Guid modelId = _modelConfig.Id;
			Guid sessionId = _modelConfig.TrainSessionId;
			sessionId.CheckArgumentEmpty("MLModel.TrainSessionId");
			GetSessionInfoResponse response;
			try {
				response = _proxy.GetTrainingSessionInfo(sessionId);
			} catch (Exception e) {
				UpdateModelOnError(_modelConfig.Id, e.Message);
				throw;
			}
			TrainSessionState newSessionState = response.SessionState;
			_log.Info($"For model {modelId} new model state - {newSessionState}, old was {_modelConfig.CurrentState}");
			if (FiniteStates.Contains(newSessionState)) {
				UpdateTriedToTrainOn(modelId);
			}
			if (newSessionState == TrainSessionState.Done) {
				try {
					ModelSummary modelSummary = response.ModelSummary;
					var ignoresMetric = GetIsTrainSessionIgnoresMetric(sessionId);
					if (ignoresMetric || GetIsModelAcceptable(response)) {
						UpdateModelInstance(response, sessionId);
						SaveAcceptedSession(modelId, sessionId, response.ModelSummary);
						_log.Info("\tModel was successfully trained. " +
							$"Instance uid: {modelSummary.ModelInstanceUId}, instance metric: {modelSummary.Metric}");
					} else {
						string message = "\tModel for schema {0} was successfully trained, but is not acceptable " +
							"to be applied. Instance uid: {1}, instance metric: {2}, metric threshold: {3}";
						_log.WarnFormat(message, _modelConfig.Id, modelSummary.ModelInstanceUId, modelSummary.Metric,
							_modelConfig.MetricThreshold);
						SaveUnacceptedSession(sessionId, modelSummary);
					}
				} catch (Exception ex) {
					UpdateModelOnError(modelId, ex.Message);
					SaveFailedSession(sessionId, ex.Message);
					throw;
				}
			}
			UpdateTrainSessionStatus(newSessionState, modelId, response.ErrorMessage);
			SaveTrainSession(_modelConfig.TrainSessionId, newSessionState, errorMessage: response.ErrorMessage);
		}

		#endregion

	}

	#endregion

}

