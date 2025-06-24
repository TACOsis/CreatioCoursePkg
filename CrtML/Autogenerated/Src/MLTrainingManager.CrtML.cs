namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;

	#region Interface: IMLTrainingManager

	/// <summary>
	/// Interface for auxiliary unit, that simplifies ml model training pipeline.
	/// </summary>
	public interface IMLTrainingManager
	{

		#region Methods: Public

		/// <summary>
		/// Processes ML models, that need to be trained.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		void ProcessAllModels(UserConnection userConnection);

		/// <summary>
		/// Processes ML model, that has to be trained.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model's identifier.</param>
		/// <param name="ignoreMetricThreshold">Optional mode, that force success training result to be applied as
		/// working.</param>
		TrainSessionState ProcessModel(UserConnection userConnection, Guid modelId,bool ignoreMetricThreshold = false);

		#endregion

	}

	#endregion

	#region Class: MLTrainingManager

	/// <summary>
	/// Auxiliary unit, that simplifies ml model training pipeline.
	/// </summary>
	/// <seealso cref="IMLTrainingManager" />
	[DefaultBinding(typeof(IMLTrainingManager))]
	public class MLTrainingManager: IMLTrainingManager
	{

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private MaintenanceWindowUtils _maintenanceWindowUtils;
		private readonly MLModelLoader _modelLoader = ClassFactory.Get<MLModelLoader>();

		#endregion

		#region Methods: Private

		private static TrainSessionState GetTypedState(string stateValue) {
			if (Enum.TryParse(stateValue, out TrainSessionState state)) {
				return state;
			}
			return TrainSessionState.NotStarted;
		}

		private static void Train(IMLModelTrainer trainer, Guid modelId, bool ignoreMetricThreshold = false) {
			_log.InfoFormat("Starting session for model id '{0}'", modelId);
			Guid sessionId = trainer.StartTrainSession(ignoreMetricThreshold);
			_log.InfoFormat("Uploading data for session '{0}'", sessionId);
			trainer.UploadData();
			_log.InfoFormat("Begin training for session '{0}'", sessionId);
			trainer.BeginTraining();
			_log.InfoFormat("Training for session '{0}' is queued", sessionId);
		}

		private static void QueryTrainingState(IMLModelTrainer trainer, Guid modelId) {
			try {
				trainer.UpdateModelState();
			} catch (Exception e) {
				_log.ErrorFormat("Error occurred while trying to update training state for ML model {0}", e, modelId);
			}
		}

		private MaintenanceWindowUtils GetMaintenanceWindowUtils(UserConnection userConnection) {
			return _maintenanceWindowUtils ?? (_maintenanceWindowUtils =
				ClassFactory.Get<MaintenanceWindowUtils>(new ConstructorArgument("userConnection", userConnection)));
		}

		private MLModelConfig GetModelConfig(UserConnection userConnection, Guid modelId) {
			MLModelConfig model = _modelLoader.LoadModelForTraining(userConnection, modelId);
			if (model == null) {
				throw new ItemNotFoundException($"Model not found by id {modelId}");
			}
			return model;
		}

		private IList<MLModelConfig> GetModelsNeedToBeTrained(UserConnection userConnection) {
			MaintenanceWindowUtils maintenanceWindowUtils = GetMaintenanceWindowUtils(userConnection);
			if (!maintenanceWindowUtils.IsDateInMaintenanceWindow(DateTime.UtcNow)) {
				_log.Debug("\tIt's not a maintenance window yet. Skipped new training");
				return new List<MLModelConfig>();
			}
			return _modelLoader.LoadReadyForTrainingModels(userConnection, DateTime.UtcNow);
		}

		private List<MLModelConfig> GetModelsInTrainingStatus(UserConnection userConnection) {
			EntitySchema mlModelSchema = userConnection.EntitySchemaManager.GetInstanceByName("MLModel");
			var esq = new EntitySchemaQuery(mlModelSchema) {
				IgnoreDisplayValues = true
			};
			esq.PrimaryQueryColumn.IsVisible = true;
			esq.AddColumn("TrainSessionId");
			esq.AddColumn("MetricThreshold");
			EntitySchemaQueryColumn stateColumn = esq.AddColumn("State.Code");
			EntitySchemaQueryColumn serviceUrlColumn = esq.AddColumn("MLProblemType.ServiceUrl");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "State.Code",
				TrainSessionState.DataTransferring.ToString(),
				TrainSessionState.QueuedToTrain.ToString(),
				TrainSessionState.Training.ToString()));
			esq.Filters.AddLengthFilter(mlModelSchema, "MLProblemType.ServiceUrl", FilterComparisonType.Greater, 0);
			var entityCollection = esq.GetEntityCollection(userConnection);
			var mlModelConfigs = new List<MLModelConfig>();
			foreach (Entity entity in entityCollection) {
				string stateValue = entity.GetTypedColumnValue<string>(stateColumn.Name);
				mlModelConfigs.Add(new MLModelConfig {
					Id = entity.PrimaryColumnValue,
					TrainSessionId = entity.GetTypedColumnValue<Guid>("TrainSessionId"),
					MetricThreshold = entity.GetTypedColumnValue<double>("MetricThreshold"),
					ServiceUrl = entity.GetTypedColumnValue<string>(serviceUrlColumn.Name),
					CurrentState = GetTypedState(stateValue)
				});
			}
			return mlModelConfigs;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Processes ML model, that has to be trained.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model's identifier.</param>
		/// <param name="ignoreMetricThreshold">Optional mode, that force success training result to be applied as
		/// working.</param>
		/// <returns></returns>
		/// <exception cref="IncorrectConfigurationException">CloudServicesAPIKey</exception>
		public virtual TrainSessionState ProcessModel(UserConnection userConnection, Guid modelId,
				bool ignoreMetricThreshold = false) {
			userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			if (!MLUtils.CheckApiKey(userConnection)) {
				throw new IncorrectConfigurationException("CloudServicesAPIKey");
			}
			MLModelConfig modelConfig = GetModelConfig(userConnection, modelId);
			IMLModelTrainer trainer = MLModelTrainer.CreateModelTrainer(modelConfig, userConnection);
			TrainSessionState[] notInProgressStates = {
				TrainSessionState.NotStarted, TrainSessionState.Done, TrainSessionState.Error
			};
			if (notInProgressStates.Contains(modelConfig.CurrentState)) {
				Train(trainer, modelConfig.Id, ignoreMetricThreshold);
			}
			QueryTrainingState(trainer, modelConfig.Id);
			return modelConfig.CurrentState;
		}

		/// <summary>
		/// Processes ML models, that need to be trained due to maintaince window.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public virtual void ProcessAllModels(UserConnection userConnection) {
			_log.Info("Start to process (training, state sync) ML models");
			if (!MLUtils.CheckIsServiceUrlSet(userConnection)) {
				return;
			}
			if (!userConnection.LicHelper.GetHasOperationLicense(MLConsts.LicOperationCode)) {
				_log.Error($"License for operation '{MLConsts.LicOperationCode}' is missing");
				return;
			}
			if (!MLUtils.CheckApiKey(userConnection)) {
				return;
			}
			IList<MLModelConfig> modelsToStartTrain = GetModelsNeedToBeTrained(userConnection);
			List<MLModelConfig> modelsToReceiveTrainingResult = GetModelsInTrainingStatus(userConnection);
			foreach (MLModelConfig modelConfig in modelsToStartTrain) {
				try {
					IMLModelTrainer trainer = MLModelTrainer.CreateModelTrainer(modelConfig, userConnection);
					Train(trainer, modelConfig.Id);
				} catch (Exception e) {
					_log.Error($"Error occurred while trying to begin training for ML model {modelConfig.Id}", e);
				}
			}
			foreach (MLModelConfig modelConfig in modelsToReceiveTrainingResult) {
				IMLModelTrainer trainer = MLModelTrainer.CreateModelTrainer(modelConfig, userConnection);
				QueryTrainingState(trainer, modelConfig.Id);
			}
			_log.Info("ML model's processing finished");
		}

		#endregion

	}

	#endregion

}

