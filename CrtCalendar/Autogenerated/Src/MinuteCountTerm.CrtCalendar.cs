namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration.Calendars.Extensions;
	using Terrasoft.Configuration;

	#region Class : MinuteCountTerm

	/// <summary>
	/// Count term by minutes.
	/// </summary>
	public class MinuteCountTerm : BaseCountTerm
	{

		#region Constants

		private static readonly int _daysInWeekCount = 7;

		#endregion

		#region Methods : Public

		/// <summary>
		/// Get calendar weeks amount to generate.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysCount">Days to calculate.</param>
		/// <returns>Amount of weeks.</returns>
		/// <exception cref="ArgumentException">There are no working time.</exception>
		public override int GetWeeksCount(IEnumerable<ICalendarDay> days, int daysCount) {
			if (!days.Any()) {
				throw new ArgumentException("There are no days in calendar");
			}
			return (int)Math.Ceiling(1d * daysCount / _daysInWeekCount);
		}

		/// <summary>
		/// Actualize calendar days for calculation.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="dateTime">Calculation pivot.</param>
		public override void ActualizeDays(ref IEnumerable<ICalendarDay> days, DateTime dateTime) {
			ICalendarDay day = days.FirstOrDefault(d => d.CalendarDateTime.Date == dateTime.Date);
			if (day != default(ICalendarDay)) {
				day.WorkingIntervals = day.WorkingIntervals.Select(i => i.Truncate(dateTime)).ToList();
			}
		}

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="minutes">Minutes to calculate.</param>
		/// <returns>Calendar time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int minutes) {
			LogCalculationIntervals(days, minutes);
			return days.First().CalendarDateTime.AddMinutes(minutes);
		}

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="periods">Time intervals.</param>
		/// <returns>Time units count.</returns>
		public override int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods) {
			return (int)periods.Sum(p => (p.End - p.Start).TotalMinutes);
		}

		#endregion
	}

	#endregion

}
