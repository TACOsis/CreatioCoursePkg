 namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Store;
	using CalendarTimeUnit = Terrasoft.Configuration.Calendars.TimeUnit;

	#region Class : CalendarUtilityBase

	/// <summary>
	/// A class that provides calendar time calculation utilities.
	/// </summary>
	public class CalendarUtilityBase
	{

		#region Fields: Protected

		protected readonly UserConnection _userConnection;
		protected readonly ICalendarDataStore<ICalendar<ICalendarDay>> _store;
		protected readonly Dictionary<Guid, ICalendar<ICalendarDay>> _calendarsCache =
			new Dictionary<Guid, ICalendar<ICalendarDay>>();
		protected readonly TermCalculationLogStore _calculationLogStore;
		[Obsolete]
		protected readonly ICalendarOperationProvider _provider;
		[Obsolete]
		protected readonly ICalendar<ICalendarDay> _calendar;

		#endregion

		#region Methods : Protected

		/// <summary>
		/// Gets a calendar from the store by its id and caches it into a private dictionary at the instance level.
		/// </summary>
		/// <param name="calendarId">The calendar identifier.</param>
		/// <returns>Calendar.</returns>
		protected virtual ICalendar<ICalendarDay> GetLoadedCalendar(Guid calendarId) {
			if (_calendarsCache.ContainsKey(calendarId)) {
				return _calendarsCache[calendarId];
			}
			ICalendar<ICalendarDay> calendar = new Calendar(calendarId);
			_store.Load(ref calendar);
			_calendarsCache.Add(calendarId, calendar);
			return calendar;
		}

		/// <summary>
		/// Gets calendar operation provider.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="timeUnit">The time unit.</param>
		/// <returns>Calendar operation provider.</returns>
		protected ICalendarOperationProvider GetProvider(ICalendar<ICalendarDay> calendar, CalendarTimeUnit timeUnit) {
			if (_calculationLogStore != null) {
				return new CalendarOperationProvider(calendar, timeUnit, _calculationLogStore);
			}
			return new CalendarOperationProvider(calendar, timeUnit);
		}

		#endregion

		#region Constructors : Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarUtility"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public CalendarUtilityBase(UserConnection userConnection) {
			_userConnection = userConnection;
			_store = new CalendarDataStore<ICalendar<ICalendarDay>>(userConnection);
			_calculationLogStore = TermCalculationLogStoreInitializer.GetStore(userConnection);
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarUtility"/> class.
		/// </summary>
		/// <param name="store">The store.</param>
		public CalendarUtilityBase(ICalendarDataStore<ICalendar<ICalendarDay>> store) {
			_store = store;
		}

		/// <summary>
		/// Create a calendar utility.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <param name="userConnection">User connection.</param>
		[Obsolete]
		public CalendarUtilityBase(Guid calendarId, UserConnection userConnection) {
			var store = new CalendarDataStore<ICalendar<ICalendarDay>>(userConnection);
			_calendar = new Calendar(calendarId);
			store.Load(ref _calendar);
			_provider = new CalendarOperationProvider(_calendar);
		}

		/// <summary>
		/// Create a calendar utility.
		/// </summary>
		/// <param name="calendar">Calendar.</param>
		[Obsolete]
		public CalendarUtilityBase(ICalendar<ICalendarDay> calendar) {
			_calendar = calendar;
			_provider = new CalendarOperationProvider(calendar);
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Adds a value of time units to specified dateTime.
		/// </summary>
		/// <param name="startDate">Calculation pivot.</param>
		/// <param name="term">Calculation term.</param>
		/// <param name="userTimeZone">Current time zone.</param>
		/// <returns>
		/// Calendar time.
		/// </returns>
		public DateTime Add(DateTime startDate, TimeTerm term, TimeZoneInfo userTimeZone) {
			var calendar = GetLoadedCalendar(term.CalendarId);
			var convertedStartDate = TimeZoneInfo.ConvertTime(startDate, userTimeZone, calendar.TimeZone);
			var provider = GetProvider(calendar, term.Type);
			if (_calculationLogStore != null) {
				_calculationLogStore.UserTimeZoneInfo = userTimeZone;
				_calculationLogStore.CalendarTimeZoneInfo = calendar.TimeZone;
				_calculationLogStore.IsUsedIntervalCalculated = true;
				new TermCalculationLogger(_calculationLogStore).FillUsedTimeIntervals(provider, term, new TermCalculationCalendarDataLoader(_userConnection));
			}
			DateTime result = provider.Add(convertedStartDate, term.Value);
			return TimeZoneInfo.ConvertTime(result, calendar.TimeZone, userTimeZone);
		}

		/// <summary>
		/// Adds a value of time units to specified dateTime considering already worked time.
		/// </summary>
		/// <param name="startDate">The start date.</param>
		/// <param name="term">The term.</param>
		/// <param name="periods">The working intervals.</param>
		/// <param name="userTimeZone">Current time zone.</param>
		/// <returns>
		/// Calendar time considering already worked time.
		/// </returns>
		public DateTime Add(DateTime startDate, TimeTerm term, IEnumerable<DateTimeInterval> periods,
			TimeZoneInfo userTimeZone) {
			var calendar = GetLoadedCalendar(term.CalendarId);
			var convertedPeriods = periods.Select(period => new DateTimeInterval {
				Start = TimeZoneInfo.ConvertTime(period.Start, userTimeZone, calendar.TimeZone),
				End = TimeZoneInfo.ConvertTime(period.End, userTimeZone, calendar.TimeZone)
			});
			var provider = GetProvider(calendar, term.Type);
			if (_calculationLogStore != null) {
				_calculationLogStore.UserTimeZoneInfo = userTimeZone;
				_calculationLogStore.CalendarTimeZoneInfo = calendar.TimeZone;
				new TermCalculationLogger(_calculationLogStore).FillUsedTimeIntervals(provider, term, new TermCalculationCalendarDataLoader(_userConnection));
			}
			int alreadyWorked = provider.GetTimeUnits(convertedPeriods);
			term.Value -= alreadyWorked;
			return Add(startDate, term, userTimeZone);
		}

		/// <summary>
		/// Add time unit value to date by calendar information.
		/// </summary>
		/// <param name="date">CalendarDate.</param>
		/// <param name="timeUnit">Time unit.</param>
		/// <param name="value">Value.</param>
		/// <returns>Result date.</returns>
		[Obsolete]
		public DateTime Add(DateTime date, CalendarTimeUnit timeUnit, int value) {
			return _provider.Add(date, timeUnit, value);
		}

		/// <summary>
		/// Add time unit value to date by calendar information and time zone information.
		/// </summary>
		/// <param name="date">CalendarDate.</param>
		/// <param name="timeUnit">Time unit.</param>
		/// <param name="value">Value.</param>
		/// <param name="timeZone">Time zone.</param>
		/// <returns>Result date.</returns>
		[Obsolete]
		public DateTime Add(DateTime date, CalendarTimeUnit timeUnit, int value, TimeZoneInfo timeZone) {
			var dateInCalendarTimeZone = TimeZoneInfo.ConvertTime(date, timeZone, _calendar.TimeZone);
			var result = _provider.Add(dateInCalendarTimeZone, timeUnit, value);
			return TimeZoneInfo.ConvertTime(result, _calendar.TimeZone, timeZone);
		}

		/// <summary>
		/// Generate calendar days by calendar week template.
		/// </summary>
		/// <param name="dateTime">Start date</param>
		/// <returns>Calendar days.</returns>
		[Obsolete]
		public IList<ICalendarDay> GenerateWeek(DateTime dateTime) {
			return _provider.GenerateWeeks(dateTime, 1);
		}

		#endregion

	}

	#endregion

}
