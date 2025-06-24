namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;

	#region Class : DayCountTerm

	/// <summary>
	/// Count term by calendar days.
	/// </summary>
	public class DayCountTerm : BaseCountTerm
	{

		#region Constants

		private static readonly int _daysInWeek = 7;

		#endregion

		#region Methods : Public

		/// <summary>
		/// Gets the weeks amount to generate.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysAmount">Days amount.</param>
		/// <returns>Amount of weeks.</returns>
		/// <exception cref="ArgumentException">There are no calendar days.</exception>
		public override int GetWeeksCount(IEnumerable<ICalendarDay> days, int daysAmount) {
			if (!days.Any()) {
				throw new ArgumentException("There are no calendar days");
			}
			return (int)Math.Ceiling(1d * daysAmount / _daysInWeek);
		}

		/// <summary>
		/// Actualize calendar days for calculation.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="dateTime">Calculation pivot.</param>
		public override void ActualizeDays(ref IEnumerable<ICalendarDay> days, DateTime dateTime) { }

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysAmount">Days amount to calculate.</param>
		/// <returns>Calendar time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int daysAmount) {
			LogCalculationIntervals(days, daysAmount);
			return days.First().CalendarDateTime.AddDays(daysAmount);
		}

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="periods">The periods.</param>
		/// <returns>
		/// Time units count.
		/// </returns>
		public override int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods) {
			return (int)Math.Ceiling(periods.Sum(x => (x.End - x.Start).TotalDays));
		}

		#endregion
	}

	#endregion

}
