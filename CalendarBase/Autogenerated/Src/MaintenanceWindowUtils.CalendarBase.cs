namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: MaintenanceWindowUtils

	/// <summary>
	/// Methods for working with maintenance windows.
	/// </summary>
	public class MaintenanceWindowUtils
	{

		#region Class: MaintenanceWindowInterval

		private class MaintenanceWindowInterval
		{

			#region Constructors: Public

			public MaintenanceWindowInterval(IDataReader reader) {
				int dayNumber = reader.GetColumnValue<int>("DayNumber");
				DateTime startTime = reader.GetColumnValue<DateTime>("StartTime");
				DateTime endTime = reader.GetColumnValue<DateTime>("EndTime");
				DayOfWeek = dayNumber - 1;
				StartTime = startTime.TimeOfDay;
				EndTime = endTime.TimeOfDay;
			}

			#endregion

			#region Properties: Public

			public int DayOfWeek { get; }
			public TimeSpan StartTime { get; }
			public TimeSpan EndTime { get; }

			#endregion

		}

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly Lazy<List<MaintenanceWindowInterval>> _intervals;

		#endregion

		#region Constructors: Public

		/// <summary>Initializes a new instance of the <see cref="MaintenanceWindowUtils"/> class.</summary>
		/// <param name="userConnection">User connection.</param>
		public MaintenanceWindowUtils(UserConnection userConnection) {
			_userConnection = userConnection;
			_intervals = new Lazy<List<MaintenanceWindowInterval>>(LoadIntervals);
		}

		#endregion

		#region Methods: Private

		private List<MaintenanceWindowInterval> LoadIntervals() {
			var intervals = new List<MaintenanceWindowInterval>();
			var selectQuery = (Select)new Select(_userConnection)
				.Cols("DayOfWeek.Number as DayNumber", "StartTime", "EndTime")
				.From("MaintenanceWindow")
				.InnerJoin("DayOfWeek").On("DayOfWeek", "Id").IsEqual("MaintenanceWindow", "DayOfWeekId");
			selectQuery.ExecuteReader(reader => {
				var interval = new MaintenanceWindowInterval(reader);
				intervals.Add(interval);
			});
			return intervals;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Determines whether the given date is inside any of maintenance windows.
		/// </summary>
		/// <param name="date">The date, to check.</param>
		/// <returns>
		/// <c>true</c> if the given date inside some maintenance window; otherwise, <c>false</c>.
		/// </returns>
		public virtual bool IsDateInMaintenanceWindow(DateTime date) {
			DateTime utcDate = date.ToUniversalTime();
			TimeSpan time = utcDate.TimeOfDay;
			var dayOfWeek = (int)utcDate.DayOfWeek;
			MaintenanceWindowInterval interval = _intervals.Value.FirstOrDefault(windowInterval => {
				bool isTheDayOfInterval = windowInterval.DayOfWeek == dayOfWeek;
				bool isNextDayOfInterval = (windowInterval.DayOfWeek + 1) % 7 == dayOfWeek;
				var start = windowInterval.StartTime;
				var end = windowInterval.EndTime;
				bool isInsideInterval =
					start <= time && time <= end && isTheDayOfInterval ||
					end <= start && start <= time && isTheDayOfInterval ||
					time <= end && end <= start && isNextDayOfInterval;
				return isInsideInterval;
			});
			return interval != null;
		}

		#endregion

	}

	#endregion

}

