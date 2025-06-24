namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;

	#region Class : HourCountTerm

	/// <summary>
	/// Count term by hours.
	/// </summary>
	public class HourCountTerm : MinuteCountTerm
	{

		#region Methods : Public

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="hours">Hours to calculate.</param>
		/// <returns>Calendar time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int hours) {
			LogCalculationIntervals(days, hours);
			return days.First().CalendarDateTime.AddHours(hours);
		}

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="end">The end.</param>
		/// <returns>Time units count.</returns>
		public override int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods) {
			return base.GetTimeUnits(calendar, periods) / CalendarConsts.MinutesInHour;
		}

		#endregion

	}

	#endregion

}
