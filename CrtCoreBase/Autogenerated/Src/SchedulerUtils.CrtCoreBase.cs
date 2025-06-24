namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Quartz;
	using Quartz.Impl.Matchers;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Factories;

	#region Class: SchedulerUtils

	/// <summary>
	/// Methods for working with <see cref="IScheduler"/> job tasks.
	/// </summary>
	public static class SchedulerUtils
	{

		#region Properties: Private

		private static IAppSchedulerWraper SchedulerWraper => ClassFactory.Get<IAppSchedulerWraper>();

		#endregion

		#region Methods: Public

		/// <summary>
		/// Deletes old jobs.
		/// </summary>
		/// <param name="jobName">Job name.</param>
		public static void DeleteOldJobs(string jobName) {
			jobName.CheckArgumentNullOrWhiteSpace(nameof(jobName));
			DeleteOldJobs(new List<string> { jobName });
		}

		/// <summary>
		/// Deletes old jobs.
		/// </summary>
		/// <param name="jobNames">Job names to delete.</param>
		public static void DeleteOldJobs(List<string> jobNames) {
			jobNames.CheckArgumentNullOrEmpty(nameof(jobNames));
			IScheduler scheduler = SchedulerWraper.Instance;
			IList<JobKey> jobKeys = new List<JobKey>();
			jobNames.ForEach(jobName => {
				GroupMatcher<JobKey> groupMatcher = GroupMatcher<JobKey>.GroupContains(jobName);
				jobKeys.AddRangeIfNotExists(scheduler.GetJobKeys(groupMatcher));
			});
			scheduler.DeleteJobs(jobKeys);
		}

		/// <summary>
		/// Schedules the next run of the given job. Deletes existing instances before planning new one.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="jobName">Name of the job.</param>
		/// <param name="jobExecutor">The job executor.</param>
		/// <param name="executionPeriod">Periodicity of the given job's trigger (minutes).</param>
		public static void ScheduleNextRun(UserConnection userConnection, string jobName, IJobExecutor jobExecutor,
				int executionPeriod) {
			if (executionPeriod < 0) {
				return;
			}
			IAppSchedulerWraper schedulerWrapper = SchedulerWraper;
			IScheduler scheduler = schedulerWrapper.Instance;
			SysUserInfo currentUser = userConnection.CurrentUser;
			string className = jobExecutor.GetType().AssemblyQualifiedName;
			IJobDetail job = schedulerWrapper.CreateClassJob(className, jobName, userConnection.Workspace.Name,
				currentUser.Name, null, true);
			ITrigger trigger = TriggerBuilder.Create()
				.WithIdentity(className + "Trigger")
				.StartAt(DateTimeOffset.Now.AddMinutes(executionPeriod))
				.Build();
			scheduler.ScheduleJob(job, new Quartz.Collection.HashSet<ITrigger> { trigger }, true);
		}

		#endregion

	}

	#endregion

}

