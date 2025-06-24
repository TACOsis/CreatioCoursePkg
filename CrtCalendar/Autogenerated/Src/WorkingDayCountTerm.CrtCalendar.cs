namespace Terrasoft.Configuration.Calendars
{
	using Extensions;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;

	#region Class : WorkingDayCountTerm

	/// <summary>
	/// Count term by working days.
	/// </summary>
	public class WorkingDayCountTerm : BaseCountTerm
	{

		#region Methods: Protected

		protected override void LogCalculationIntervals(IEnumerable<ICalendarDay> days, double timeAmount) {
			if (TermCalculationLogStore != null) {
				new TermCalculationLogger(TermCalculationLogStore)
					.FillWorkingDaysCalculationInterval(days, timeAmount);
			}
		}

		protected void LogFirstCalculationInterval(ICalendarDay day) {
			if (TermCalculationLogStore != null) {
				new TermCalculationLogger(TermCalculationLogStore)
					.AddFirstNonWorkingCalculationInterval(day);
			}
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Gets the weeks amount to generate.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysAmount">The calendar amount.</param>
		/// <returns>Amount of weeks.</returns>
		/// <exception cref="ArgumentException">There are no working days.</exception>
		public override int GetWeeksCount(IEnumerable<ICalendarDay> days, int daysAmount) {
			int workingDays = days.Count(day => !day.IsNonWorking);
			if (workingDays == 0) {
				throw new ArgumentException("There are no working days.");
			}
			var weeksCount = (1d + daysAmount / workingDays);
			return (int)(Math.Ceiling(weeksCount));
		}

		/// <summary>
		/// Actualize calendar days for calculation.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="dateTime">Calculation pivot.</param>
		public override void ActualizeDays(ref IEnumerable<ICalendarDay> days, DateTime dateTime) {
			ICalendarDay day = days.FirstOrDefault(d => d.CalendarDateTime.Date == dateTime.Date);
			if (day.WorkingIntervals.Count == 0) {
				return;
			}
			TimeSpan startInterval = day.WorkingIntervals.Min(i => i.Start);
			if (dateTime.TimeOfDay > startInterval) {
				LogFirstCalculationInterval(day);
				days = days.Except(new[] { day });
			}
		}

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysAmount">Days amount to calculate.</param>
		/// <returns>Calendar time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int daysAmount) {
			LogCalculationIntervals(days, daysAmount);
			var lastDay = days.Where(day => !day.IsNonWorking).Skip(daysAmount - 1).First();
			var endOfWorkingDayTime = lastDay.WorkingIntervals.Max(wi => wi.End);
			return lastDay.CalendarDateTime.Date.Add(endOfWorkingDayTime);
		}

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="periods">The periods.</param>
		/// <returns>Time units count.</returns>
		public override int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods) {
			var result = 0;
			foreach (var p in periods) {
				var days = calendar.GetDays(this, p.Start, p.End);
				var lastDay = days.FirstOrDefault(day => !day.IsNonWorking);
				var endOfWorkingDayTime = lastDay.WorkingIntervals.Max(wi => wi.End);
				result += p.End.TimeOfDay < endOfWorkingDayTime ? 0 : 1;
			}
			return result;
		}

		#endregion

	}

	#endregion

}
