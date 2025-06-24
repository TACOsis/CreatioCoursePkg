namespace Terrasoft.Configuration.Calendars.Extensions
{
	using System;
	using System.Collections.Generic;
	using System.Linq;

	#region Class : Extensions

	/// <summary>
	/// Specific extension methods for types in calendar package.
	/// </summary>
	public static class Extensions
	{

		#region Methods : Public

		/// <summary>
		/// Generate calendar days by calendar week template.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="dateTime">The date time.</param>
		/// <param name="weeksCount">Number of weeks to generate.</param>
		/// <returns>
		/// Calendar days.
		/// </returns>
		/// <exception cref="Exception">Unable to find day of week in week template</exception>
		public static IEnumerable<ICalendarDay> GenerateWeeks(this ICalendar<ICalendarDay> calendar, DateTime dateTime,
			int weeksCount) {
			int daysOffInPeriod = 0;
			var days = new List<ICalendarDay>();
			int dayCount = calendar.WeekTemplate.Count;
			for (var i = 0; i < weeksCount + Math.Ceiling((decimal)daysOffInPeriod / 7); i++) {
				for (var j = 0; j < dayCount; j++) {
					ICalendarDay day;
					DateTime calendarDate = dateTime.AddDays(j + dayCount * i);
					ICalendarDay dayOff = calendar.DayOffs
						.FirstOrDefault(d => d.CalendarDateTime.Date == calendarDate.Date);
					if (dayOff != null) {
						day = (ICalendarDay)dayOff.Clone();
						daysOffInPeriod++;
					} else {
						var dayOfWeek = calendar.WeekTemplate
							.FirstOrDefault(d => d.DayOfWeek == calendarDate.DayOfWeek);
						if (dayOfWeek == default(ICalendarDay)) {
							throw new Exception("Unable to find day of week in week template");
						}
						day = (ICalendarDay)dayOfWeek.Clone();
					}
					day.CalendarDateTime = calendarDate;
					days.Add(day);
				}
			}
			return days;
		}

		/// <summary>
		/// Gets actualized days.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="countTerm">The count term.</param>
		/// <param name="dateTime">The date time.</param>
		/// <param name="value">The value.</param>
		/// <returns>Actualized calendar days collection.</returns>
		public static IEnumerable<ICalendarDay> GetDays(this ICalendar<ICalendarDay> calendar, BaseCountTerm countTerm,
			DateTime dateTime, int value) {
			countTerm.RegistrationDate = dateTime;
			int weeksCount = countTerm.GetWeeksCount(calendar.WeekTemplate, value + 1);
			IEnumerable<ICalendarDay> days = calendar.GenerateWeeks(dateTime, weeksCount);
			countTerm.ActualizeDays(ref days, dateTime);
			return days;
		}

		/// <summary>
		/// Gets actualized days.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="countTerm">The count term.</param>
		/// <param name="start">The start.</param>
		/// <param name="end">The end.</param>
		/// <returns>Actualized calendar days collection.</returns>
		public static IEnumerable<ICalendarDay> GetDays(this ICalendar<ICalendarDay> calendar, BaseCountTerm countTerm,
			DateTime start, DateTime end) {
			return calendar.GetDays(countTerm, start, (end - start).Days + 1);
		}

		/// <summary>
		/// Get amount of non-working minutes on the day of case registration.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="registrationDate">Case registration date.</param>
		/// <returns>Non-working minutes on the day of case registration.</returns>
		public static int GetNonWorkingMinutes(this IEnumerable<ICalendarDay> days, DateTime registrationDate) {
			ICalendarDay calendarDay = days.FirstOrDefault(day => day.DayOfWeek == registrationDate.DayOfWeek);
			if (calendarDay != null && !calendarDay.IsNonWorking) {
				IList<WorkingInterval> intervals = calendarDay.WorkingIntervals;
				WorkingInterval workingInterval = 
					intervals.FirstOrDefault(interval => interval.GetIsDateBetween(registrationDate));
				if (!workingInterval.Equals(default(WorkingInterval))) {
					int index = intervals.IndexOf(workingInterval);
					double minutesSumm = 0;
					for (int i = 0; i < index; i++) {
						minutesSumm += intervals[i].Length.TotalMinutes;
					}
					TimeSpan intervalMinuteOffset = registrationDate.TimeOfDay - intervals[index].Start;
					minutesSumm += intervalMinuteOffset.TotalMinutes;
					return (int) minutesSumm;
				}
				return (int) calendarDay.GetWorkingTime();
			}
			return default(int);
		}

		#endregion

	}

	#endregion

}
