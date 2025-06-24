namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Text;
	using Core;
	using Core.Configuration;
	using Core.Factories;
	using global::Common.Logging;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Process.Configuration;

	#region Interface: IMLBatchPredictionJob

	public interface IMLBatchPredictionJob
	{

		#region Methods: Public

		/// <summary>
		/// Processes ML models, for which batch prediction should be executed.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		void ProcessAllModels(UserConnection userConnection);

		/// <summary>
		/// Processes ML model, for which batch prediction should be executed.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model's identifier.</param>
		/// <param name="filterData">Custom filter to load data for batch prediction.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		void ProcessModel(UserConnection userConnection, Guid modelId, string filterData = null,
			MLDataPredictionUserTask predictionUserTask = null);

		#endregion

	}

	#endregion

	#region Class: MLBatchPredictionJob

	[DefaultBinding(typeof(IMLBatchPredictionJob))]
	public class MLBatchPredictionJob : IJobExecutor, IMLBatchPredictionJob
	{

		#region Constants: Private

		private const string JobPeriodSysSettingsName = "MLModelBatchPredictionPeriodMinutes";
		private const string PredictionResultsLifeSettingsName = "MLPredictionResultsLifeDays";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private readonly MLModelLoader _modelLoader = ClassFactory.Get<MLModelLoader>();

		#endregion

		#region Methods: Private

		private static void UpdateBatchDate(MLModelConfig modelConfig, UserConnection userConnection) {
			var query = new Update(userConnection, "MLModel")
				.Set("BatchPredictedOn", Column.Parameter(modelConfig.BatchPredictedOn))
				.Where("Id").IsEqual(Column.Parameter(modelConfig.Id));
			query.Execute();
		}

		private void PredictAndSaveResult(MLModelConfig model, UserConnection userConnection,
				MLDataPredictionUserTask predictionUserTask = null) {
			IMLBatchPredictor predictor = GetPredictor(model.ProblemType, userConnection);
			var startDate = DateTime.UtcNow;
			int recordsAffected = 0;
			try {
				predictor.Predict(model, predictedData => {
						predictor.SavePredictedData(model, predictedData);
						recordsAffected += predictedData.Count;
					}, predictionUserTask);
				model.BatchPredictedOn = startDate;
				UpdateBatchDate(model, userConnection);
			} catch (AggregateException ex) {
				_log.Error($"Only {recordsAffected} records were successfully predicted and saved for model {model.Id}",
					ex);
				throw;
			}
			_log.Info($"{recordsAffected} records were successfully predicted and saved for model {model.Id}");
		}

		private MLModelConfig GetModelForBatchPrediction(UserConnection userConnection, Guid modelId) {
			if (_modelLoader.TryLoadModelForPrediction(userConnection, modelId, out var model)) {
				return model;
			}
			return null;
		}
		
		private void CleanOutdatedPredictionResults(UserConnection userConnection) {
			int daysToLive = SysSettings.GetValue(userConnection, PredictionResultsLifeSettingsName, -1);
			if (daysToLive == -1) {
				return;
			}
			var lastDateOfLife = Func.DateAddDay(-daysToLive, Func.CurrentDateTime());
			var query = new Delete(userConnection)
				.From("MLPrediction")
				.Where("CreatedOn").IsLess(lastDateOfLife);
			int recordsDeleted = query.Execute();
			if (recordsDeleted > 0) {
				_log.Info($"{recordsDeleted} MLPrediction outdated records were deleted");
			}
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Gets the predictor implementor for the given problem type.
		/// </summary>
		/// <param name="problemType">Type of the ML problem.</param>
		/// <param name="userConnection">The user connection.</param>
		/// <returns>IMLBatchPredictor implementor.</returns>
		/// <exception cref="System.NotImplementedException">Can't find predictor class for given problem type.
		/// </exception>
		protected virtual IMLBatchPredictor GetPredictor(Guid problemType, UserConnection userConnection) {
			var connectionArg = new ConstructorArgument("userConnection", userConnection);
			string instanceName = problemType.ToString().ToUpper();
			if (ClassFactory.TryGet(instanceName, out IMLBatchPredictor batchPredictor, connectionArg)) {
				return batchPredictor;
			}
			throw new NotImplementedException($"No batch predictor class assigned for problem type {problemType}.");
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Processes ML models, for which batch prediction should be executed.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public virtual void ProcessAllModels(UserConnection userConnection) {
			_log.Info("ML model batch prediction job started");
			if (!MLUtils.CheckIsServiceUrlSet(userConnection)) {
				return;
			}
			if (!MLUtils.CheckApiKey(userConnection)) {
				return;
			}
			IList<MLModelConfig> modelsForBatchPrediction = _modelLoader.LoadModelsForBatchPrediction(userConnection);
			foreach (MLModelConfig modelConfig in modelsForBatchPrediction) {
				try {
					PredictAndSaveResult(modelConfig, userConnection);
				} catch (Exception e) {
					_log.ErrorFormat("\tError occurred while trying to predict data for ML model {0}", e,
						modelConfig.Id);
				}
			}
			_log.Info("ML model batch prediction job finished. "
				+ $"Number of processed models: {modelsForBatchPrediction.Count}");
		}

		/// <summary>
		/// Processes ML model, for which batch prediction should be executed.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model's identifier.</param>
		/// <param name="filterData">
		/// Custom JSON-serialized filter to load data for batch prediction.
		/// If this argument specified and is not equal to <c>null</c>, original model filter would be ignored.
		/// </param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <exception cref="IncorrectConfigurationException">System settings 'CloudServicesAPIKey' is not set.
		/// </exception>
		public void ProcessModel(UserConnection userConnection, Guid modelId, string filterData,
				MLDataPredictionUserTask predictionUserTask = null) {
			_log.InfoFormat("ML model batch prediction started for model with id {0}", modelId);
			if (!MLUtils.CheckApiKey(userConnection)) {
				throw new IncorrectConfigurationException("CloudServicesAPIKey");
			}
			MLModelConfig model = GetModelForBatchPrediction(userConnection, modelId);
			if (model == null) {
				_log.WarnFormat("Model with id {0} wasn't load for batch prediction. Check its configuration",
					modelId);
				return;
			}
			if (filterData != null) {
				model.BatchPredictionFilterData = Encoding.UTF8.GetBytes(filterData);
			}
			PredictAndSaveResult(model, userConnection, predictionUserTask);
			_log.InfoFormat("ML model batch prediction finished for model with id {0}", modelId);
		}

		/// <summary>
		/// Processes ML model, for which batch prediction should be executed.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model's identifier.</param>
		/// <exception cref="IncorrectConfigurationException">System settings 'CloudServicesAPIKey' is not set.
		/// </exception>
		public virtual void ProcessModel(UserConnection userConnection, Guid modelId) {
			ProcessModel(userConnection, modelId, null);
		}

		/// <summary>
		/// Executes the job's task.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="parameters">Job parameters.</param>
		public void Execute(UserConnection userConnection, IDictionary<string, object> parameters) {
			int frequency = SysSettings.GetValue(userConnection, JobPeriodSysSettingsName, 0);
			if (frequency == 0) {
				_log.Info($"SysSetting {JobPeriodSysSettingsName} equals to zero. Task cancelled and job will "
					+ "not be rescheduled.");
				return;
			}
			try {
				CleanOutdatedPredictionResults(userConnection);
				ProcessAllModels(userConnection);
			} catch (IncorrectConfigurationException ex) {
				_log.Error(ex.Message);
			} catch (Exception ex) {
				_log.ErrorFormat("Exception was thrown during ML model batch prediction job", ex);
				throw;
			} finally {
				SchedulerUtils.ScheduleNextRun(userConnection, nameof(MLBatchPredictionJob), this, frequency);
			}
		}

		#endregion

	}

	#endregion

}

