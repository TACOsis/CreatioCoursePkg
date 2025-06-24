namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;

	#region Class : WorkingHourCountTerm

	/// <summary>
	/// Count term by working hours.
	/// </summary>
	public class WorkingHourCountTerm : WorkingMinuteCountTerm
	{

		#region Methods : Protected

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="end">The end.</param>
		/// <returns>Time units count.</returns>
		protected override int GetTimeUnits(IEnumerable<ICalendarDay> days, DateTime end) {
			return base.GetTimeUnits(days, end) / CalendarConsts.MinutesInHour;
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="hours">Hours to calculate.</param>
		/// <returns>Calendar time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int hours) {
			return base.Calculate(days, hours * CalendarConsts.MinutesInHour);
		}

		/// <summary>
		/// Get calendar weeks amount to generate.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="hours">Hours to calculate.</param>
		/// <returns>Amount of weeks.</returns>
		public override int GetWeeksCount(IEnumerable<ICalendarDay> days, int hours) {
			int minutes = hours * 60;
			return base.GetWeeksCount(days, minutes);
		}

		#endregion

	}

	#endregion

}
