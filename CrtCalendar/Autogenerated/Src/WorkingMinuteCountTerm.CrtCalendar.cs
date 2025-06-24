namespace Terrasoft.Configuration.Calendars
{
	using Extensions;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;

	#region Class : WorkingMinuteCountTerm

	/// <summary>
	/// Count term by working minutes.
	/// </summary>
	public class WorkingMinuteCountTerm : MinuteCountTerm
	{

		#region Methods : Private

		private int GetSingleDayTimeUnits(ICalendarDay day, DateTime end) {
			var length = default(TimeSpan);
			IEnumerator<WorkingInterval> enumerator = day.WorkingIntervals.GetEnumerator();
			if (!day.WorkingIntervals.Any(interval => interval.GetIsDateBetween(end))) {
				return 0;
			}
			while (enumerator.MoveNext() && !enumerator.Current.GetIsDateBetween(end)) {
				length += enumerator.Current.Length;
			}
			length += enumerator.Current.Truncate(end, true).Length;
			return (int)length.TotalMinutes;
		}

		#endregion

		#region Methods : Protected

		/// <summary>
		/// Gets amount of time units from the very left day time point up to the <paramref name="end"/>.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="end">Date and time of the end.</param>
		/// <returns>Time units amount.</returns>
		protected virtual int GetTimeUnits(IEnumerable<ICalendarDay> days, DateTime end) {
			double result = days
				.TakeWhile(day => day.CalendarDateTime.Date < end.Date)
				.Sum(day => day.GetWorkingTime());
			ICalendarDay lastDay = days.FirstOrDefault(day => day.CalendarDateTime.Date == end.Date);
			if (lastDay != default(ICalendarDay)) {
				int least = GetSingleDayTimeUnits(lastDay, end);
				result += least;
			}
			return (int)result;
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Adds <paramref name="minutes"/> by given days of the calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="minutes">Minutes to add.</param>
		/// <returns>Calculated date and time.</returns>
		public override DateTime Calculate(IEnumerable<ICalendarDay> days, int minutes) {
			var result = default(DateTime);
			double timeLeft = minutes;
			bool keepEnumeration = true;
			IEnumerator<ICalendarDay> daysEnumerator = days.GetEnumerator();
			while (daysEnumerator.MoveNext() && keepEnumeration) {
				ICalendarDay day = daysEnumerator.Current;
				IEnumerator<WorkingInterval> intervalEnumerator = day.WorkingIntervals.GetEnumerator();
				var workingTime = day.GetWorkingTime();
				if (timeLeft > workingTime) {
					timeLeft -= workingTime;
					if (TermCalculationLogStore != null) {
						new TermCalculationLogger(TermCalculationLogStore)
							.FillWorkingMinuteCalculationInterval(day, workingTime);
					}
				} else {
					if (TermCalculationLogStore != null) {
						new TermCalculationLogger(TermCalculationLogStore)
							.FillWorkingMinuteCalculationInterval(day, timeLeft);
					}
					while (intervalEnumerator.MoveNext() && keepEnumeration) {
						WorkingInterval interval = intervalEnumerator.Current;
						double intervalMinutes = interval.Length.TotalMinutes;
						if (timeLeft > intervalMinutes) {
							timeLeft -= intervalMinutes;
						} else {
							result = day.CalendarDateTime.Date
								.Add(interval.Start)
								.AddMinutes(timeLeft);
							keepEnumeration = false;
						}
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Gets amount of time units of all given time periods by calendar.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="periods">The periods.</param>
		/// <returns>Time units amount.</returns>
		public override int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods) {
			return periods.Aggregate(0, (acc, period) =>
				acc + GetTimeUnits(calendar.GetDays(this, period.Start, period.End), period.End));
		}

		#endregion

	}

	#endregion

}
