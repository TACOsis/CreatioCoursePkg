namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	/// <summary>
	/// Setups ML periodical jobs.
	/// </summary>
	public class MLAppListener : AppEventListenerBase
	{

		#region Fields: Private

		private readonly IAppSchedulerWraper _schedulerWraper = ClassFactory.Get<IAppSchedulerWraper>();
		private AppEventContext _appEventContext;
		private AppConnection _appConnection;
		private UserConnection _userConnection;

		#endregion

		#region Properties: Private

		private UserConnection UserConnection {
			get => _userConnection ?? (_userConnection = AppConnection.SystemUserConnection);
			set => _userConnection = value;
		}

		private AppConnection AppConnection {
			get {
				if (_appConnection == null) {
					_appEventContext.CheckArgumentNull("AppEventContext");
					_appConnection = _appEventContext.Application["AppConnection"] as AppConnection;
				}
				return _appConnection;
			}
			set => _appConnection = value;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Default class constructor, executes automatically by web app on start.
		/// </summary>
		public MLAppListener() {
		}

		/// <summary>
		/// Setups instance of <see cref="MLAppListener"/> with custom user connection.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public MLAppListener(UserConnection userConnection) : this() {
			UserConnection = userConnection;
			AppConnection = userConnection.AppConnection;
		}

		#endregion

		#region Methods: Private

		private void ScheduleJobs() {
			SysUserInfo currentUser = UserConnection.CurrentUser;
			if (!_schedulerWraper.DoesJobExist(nameof(MLBatchPredictionJob), nameof(MLBatchPredictionJob))) {
				_schedulerWraper.ScheduleImmediateJob<MLBatchPredictionJob>(nameof(MLBatchPredictionJob),
					UserConnection.Workspace.Name, currentUser.Name, null, true);
			}
			if (!_schedulerWraper.DoesJobExist(nameof(MLModelTrainerJob), nameof(MLModelTrainerJob))) {
				_schedulerWraper.ScheduleImmediateJob<MLModelTrainerJob>(nameof(MLModelTrainerJob),
					UserConnection.Workspace.Name, currentUser.Name, null, true);
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Application start handler.
		/// </summary>
		/// <param name="context">Application context.</param>
		public override void OnAppStart(AppEventContext context) {
			_appEventContext = context;
			ScheduleJobs();
			UserConnection.ApplicationCache.Remove(MLConsts.PredictableEntitiesScriptKey);
		}

		#endregion

	}

}

