namespace Terrasoft.Configuration.Calendars
{
	using Extensions;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;
	using Terrasoft.Core.Factories;
	using CalendarTimeUnit = Terrasoft.Configuration.Calendars.TimeUnit;

	#region Class : CalendarOperationProvider

	/// <summary>
	/// An operation provider for calendar.
	/// </summary>
	public class CalendarOperationProvider : ICalendarOperationProvider
	{

		#region Fields : Private

		private readonly ICalendar<ICalendarDay> _calendar;
		private readonly BaseCountTerm _countTerm;

		#endregion

		#region Constructors : Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarOperationProvider"/> class.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		[Obsolete]
		public CalendarOperationProvider(ICalendar<ICalendarDay> calendar) {
			_calendar = calendar;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarOperationProvider"/> class.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="timeUnit">The time unit.</param>
		public CalendarOperationProvider(ICalendar<ICalendarDay> calendar, CalendarTimeUnit timeUnit) {
			_calendar = calendar;
			var factory = ClassFactory.Get<CalendarCountTermFactory>();
			_countTerm = factory.GetCountTerm(timeUnit);
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarOperationProvider"/> class.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="timeUnit">The time unit.</param>
		/// <param name="logStore">Store of term calculation logs<see cref="TermCalculationLogStore"/></param>
		public CalendarOperationProvider(ICalendar<ICalendarDay> calendar, CalendarTimeUnit timeUnit, TermCalculationLogStore logStore): this (calendar, timeUnit) {
			_countTerm.TermCalculationLogStore = logStore;
		}

		#endregion

		#region Methods : Protected

		/// <summary>
		/// Gets the calendar.
		/// </summary>
		/// <param name="countTerm">The count term.</param>
		/// <param name="dateTime">The dateTime.</param>
		/// <param name="value">The value.</param>
		/// <returns>Actualized list of calendar.</returns>
		[Obsolete]
		protected IEnumerable<ICalendarDay> GetDays(BaseCountTerm countTerm, DateTime dateTime, int value) {
			int weeksCount = countTerm.GetWeeksCount(_calendar.WeekTemplate, value);
			IEnumerable<ICalendarDay> days = GenerateWeeks(dateTime, weeksCount);
			countTerm.ActualizeDays(ref days, dateTime);
			int weekToGenerateCorrectAmount = countTerm.GetWeeksCount(days, value);
			if (weekToGenerateCorrectAmount > weeksCount) {
				DateTime continueToDate = dateTime.AddDays(weeksCount * _calendar.WeekTemplate.Count);
				List<ICalendarDay> extraDays = GenerateWeeks(continueToDate, weekToGenerateCorrectAmount - weeksCount);
				days = days.Union(extraDays);
			}
			return days;
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Generate calendar days by calendar week template.
		/// </summary>
		/// <param name="dateTime">Calculation pivot.</param>
		/// <param name="weeksCount">Number of weeks to generate.</param>
		/// <returns>
		/// Calendar calendar.
		/// </returns>
		[Obsolete]
		public List<ICalendarDay> GenerateWeeks(DateTime dateTime, int weeksCount) {
			var days = new List<ICalendarDay>();
			int dayCount = _calendar.WeekTemplate.Count;
			for (var i = 0; i < weeksCount; i++) {
				for (var j = 0; j < dayCount; j++) {
					ICalendarDay day;
					DateTime calendarDate = dateTime.AddDays(j + dayCount * i);
					ICalendarDay dayOff = _calendar.DayOffs
						.FirstOrDefault(d => d.CalendarDateTime.Date == calendarDate.Date);
					if (dayOff != null) {
						day = (ICalendarDay)dayOff.Clone();
					} else {
						var dayOfWeek = _calendar.WeekTemplate
							.FirstOrDefault(d => d.DayOfWeek == calendarDate.DayOfWeek);
						day = (ICalendarDay)dayOfWeek.Clone();
						day.CalendarDateTime = calendarDate;
					}
					days.Add(day);
				}
			}
			return days;
		}

		/// <summary>
		/// Add a value of time units to dateTime by calendar information.
		/// </summary>
		/// <param name="dateTime">Calendar time.</param>
		/// <param name="timeUnit">Time unit.</param>
		/// <param name="value">Value.</param>
		/// <returns>Calendar time.</returns>
		[Obsolete]
		public DateTime Add(DateTime dateTime, CalendarTimeUnit timeUnit, int value) {
			if (value <= 0) {
				return dateTime;
			}
			var factory = ClassFactory.Get<CalendarCountTermFactory>();
			BaseCountTerm countTerm = factory.GetCountTerm(timeUnit);
			IEnumerable<ICalendarDay> days = GetDays(countTerm, dateTime, value);
			return countTerm.Calculate(days, value);
		}

		/// <summary>
		/// Add a value of time units to dateTime by calendar information.
		/// </summary>
		/// <param name="dateTime">Calendar time.</param>
		/// <param name="timeUnit">Time unit.</param>
		/// <param name="value">Value.</param>
		/// <returns>Calendar time.</returns>
		public DateTime Add(DateTime dateTime, int value) {
			if (value <= 0) {
				return dateTime;
			}
			IEnumerable<ICalendarDay> days = _calendar.GetDays(_countTerm, dateTime, value);
			return _countTerm.Calculate(days, value);
		}
		
		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="periods">The periods.</param>
		/// <returns>Time units count.</returns>
		public int GetTimeUnits(IEnumerable<DateTimeInterval> periods) {
			return _countTerm.GetTimeUnits(_calendar, periods);
		}

		#endregion

	}

	#endregion

}
