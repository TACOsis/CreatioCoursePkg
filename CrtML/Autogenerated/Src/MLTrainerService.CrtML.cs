namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using global::Common.Logging;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.Web.Common;

	#region Class: MLTrainerService

	/// <summary>
	/// Web methods for machine learning training.
	/// </summary>
	/// <seealso cref="Terrasoft.Web.Common.BaseService" />
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class MLTrainerService : BaseService, System.Web.SessionState.IReadOnlySessionState
	{

		#region Class: Response

		/// <summary>
		/// Represents <see cref="MLTrainerService"/> typed response, which may encapsulate exception details
		/// for service client, avoiding standard WCF serialization.
		/// </summary>
		[DataContract]
		public class GenericResponse<T>
		{

			#region Properites: Public

			/// <summary>
			/// Gets or sets the return value of successful service method call.
			/// </summary>
			[DataMember(Name = "value", IsRequired = false)]
			public T Value { get; set; }

			/// <summary>
			/// Gets or sets the exception type name.
			/// </summary>
			[DataMember(Name = "exceptionType", IsRequired = false)]
			public string ExceptionType { get; set; }

			/// <summary>
			/// Gets or sets the exception message.
			/// </summary>
			[DataMember(Name = "exceptionMessage", IsRequired = false)]
			public string ExceptionMessage { get; set; }

			#endregion

		}

		#endregion

		#region Class: Response

		/// <summary>
		/// Represents <see cref="MLTrainerService"/> response, which may encapsulate exception details
		/// for service client, avoiding standard WCF serialization.
		/// </summary>
		[DataContract]
		public class Response: GenericResponse<string>
		{
		}

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private readonly IMLModelLoader _modelLoader = ClassFactory.Get<IMLModelLoader>();

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLTrainerService"/> class.
		/// </summary>
		public MLTrainerService() {
		}

		#endregion

		#region Constructors: Protected

		/// <summary>
		/// Initializes a new instance of the <see cref="MLTrainerService"/> class with custom
		/// <see cref="IMLTrainingManager"/> instance.
		/// </summary>
		/// <param name="modelTrainingManager">The model trainer job.</param>
		protected MLTrainerService(IMLTrainingManager modelTrainingManager) : this() {
			_modelTrainingManager = modelTrainingManager;
		}

		#endregion

		#region Properties: Private

		private IMLTrainingManager _modelTrainingManager;
		private IMLTrainingManager ModelTrainingManager =>
			_modelTrainingManager ?? (_modelTrainingManager = ClassFactory.Get<IMLTrainingManager>());

		#endregion

		#region Methods: Private

		private MLModelConfig GetModelConfig(Guid modelId) {
			MLModelConfig model = _modelLoader.LoadModelForTraining(UserConnection, modelId);
			if (model == null) {
				throw new ItemNotFoundException($"Model not found by id {modelId}");
			}
			return model;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Executes machine learning model trainer job.
		/// </summary>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void ExecuteModelTrainerJob() {
			ModelTrainingManager.ProcessAllModels(UserConnection);
		}

		/// <summary>
		/// Executes machine learning training for the given model.
		/// </summary>
		/// <param name="modelId">Identifier of the model that has to be trained.</param>
		/// <returns>The result state of the training session.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "trainSessionState")]
		public Response TrainModel(Guid modelId) {
			modelId.CheckArgumentEmpty(nameof(modelId));
			TrainSessionState resultState;
			try {
				resultState = ModelTrainingManager.ProcessModel(UserConnection, modelId, true);
			} catch (IncorrectConfigurationException ex) {
				_log.Error(ex.Message);
				return new Response {
					ExceptionType = nameof(IncorrectConfigurationException),
					ExceptionMessage = ex.Message
				};
			} catch (Exception ex) {
				_log.Error($"Error occurred while MLTrainerService call: {ex.Message}", ex);
				throw;
			}
			return new Response {
				Value = resultState.ToString()
			};
		}

		/// <summary>
		/// Queries actual machine learning training state for the given model.
		/// </summary>
		/// <param name="modelId">Identifier of the model that has to be trained.</param>
		/// <returns>The result state of the last training session.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "trainSessionState")]
		public Response QueryLastTrainingState(Guid modelId) {
			modelId.CheckArgumentEmpty(nameof(modelId));
			var modelConfig = GetModelConfig(modelId);
			IMLModelTrainer trainer = MLModelTrainer.CreateModelTrainer(modelConfig, UserConnection);
			TrainSessionState[] notInProgressStates = {
				TrainSessionState.NotStarted, TrainSessionState.Done, TrainSessionState.Error
			};
			if (!notInProgressStates.Contains(modelConfig.CurrentState)) {
				if (modelConfig.TrainSessionId.IsEmpty()) {
					var message = $"Model {modelId} has state {modelConfig.CurrentState}, but TrainSessionId is empty";
					_log.Error(message);
					throw new InvalidObjectStateException(message);
				}
				trainer.UpdateModelState();
			}
			return new Response {
				Value = modelConfig.CurrentState.ToString()
			};
		}

		/// <summary>
		/// Queries information about important features for model that was trained during given train session.
		/// </summary>
		/// <param name="trainSessionId">Identifier of the training session.</param>
		/// <returns>Returns response with localized and serialized model feature importance.</returns>
		/// <exception cref="ItemNotFoundException">
		/// Is thrown when train session with given id is not found in database.
		/// </exception>
		/// <exception cref="Exception">
		/// Is thrown when model feature importance information is missing or invalid for given session.
		/// </exception>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public GenericResponse<List<LocalizedFeatureWeight>> GetFeatureImportances(Guid trainSessionId) {
			trainSessionId.CheckArgumentEmpty(nameof(trainSessionId));
			var select = (Select) new Select(UserConnection).Cols("FeatureImportances", "MLModelId")
				.From("MLTrainSession")
				.Where("Id").IsEqual(Column.Parameter(trainSessionId));
			bool sessionExists = select.ExecuteSingleRecord(record => new {
				FeatureImportances = record.GetColumnValue<string>("FeatureImportances"),
				MLModelId = record.GetColumnValue<Guid>("MLModelId")
			}, out var session);
			if (!sessionExists) {
				string message = $"Train session with Id '{trainSessionId}' is not found";
				_log.Error(message);
				throw new ItemNotFoundException(message);
			}
			List<ModelSummary.FeatureImportance> featureImportances;
			try {
				featureImportances = JsonConvert.DeserializeObject<List<ModelSummary.FeatureImportance>>(
					session.FeatureImportances);
			} catch (Exception ex) {
				string message = $"Train session '{trainSessionId}' model features information has incorrect format";
				_log.Error(message, ex);
				throw new Exception(message, ex);
			}
			if (featureImportances.IsNullOrEmpty()) {
				string message = $"Train session '{trainSessionId}' does not contain information about model features";
				_log.Error(message);
				throw new Exception(message);
			}
			var featureWeights = featureImportances.Select(fi => new LocalizedFeatureWeight(fi)).ToList();
			MLModelExplanationUtils.LocalizeFeatures(UserConnection, featureWeights, session.MLModelId, false);
			return new GenericResponse<List<LocalizedFeatureWeight>> { Value = featureWeights };
		}

		#endregion

	}

	#endregion

}

