namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using global::Common.Logging;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Factories;

	#region Class: MLModelTrainerJob

	/// <summary>
	/// Represents periodical task for machine learning model training.
	/// </summary>
	public class MLModelTrainerJob : IJobExecutor
	{

		#region Constants: Private

		/// <summary>
		/// SysSetting name with model training process periodicity in minutes.
		/// </summary>
		private const string JobPeriodSysSettingsName = "MLModelTrainingPeriodMinutes";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private readonly IMLTrainingManager _trainingManager = ClassFactory.Get<IMLTrainingManager>();

		#endregion

		#region Methods: Private

		private void LogError(Exception exception) {
			_log.ErrorFormat("Exception was thrown during ML model trainer job", exception);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Runs ML model trainings and schedules next job.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="parameters">Job parameters.</param>
		public void Execute(UserConnection userConnection, IDictionary<string, object> parameters) {
			int frequency = SysSettings.GetValue(userConnection, JobPeriodSysSettingsName, 0);
			if (frequency == 0) {
				_log.Info($"SysSetting {JobPeriodSysSettingsName} equals to zero. Task cancelled and job will not be rescheduled.");
				return;
			}
			try {
				_trainingManager.ProcessAllModels(userConnection);
			} catch (IncorrectConfigurationException ex) {
				_log.Error(ex.Message);
			} catch (Exception ex) {
				LogError(ex);
				throw;
			} finally {
				SchedulerUtils.ScheduleNextRun(userConnection, nameof(MLModelTrainerJob), this, frequency);
			}
		}

		#endregion

	}

	#endregion

}

