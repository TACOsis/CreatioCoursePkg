namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Configuration;
	using CalendarTimeUnit = Terrasoft.Configuration.Calendars.TimeUnit;

	/// <summary>
	/// Represents a calendar operation provider.
	/// </summary>
	public interface ICalendarOperationProvider
	{
		/// <summary>
		/// Add a value of time units to dateTime by calendar information.
		/// </summary>
		/// <param name="dateTime">Calendar time.</param>
		/// <param name="value">Value.</param>
		/// <returns>Calendar time.</returns>
		DateTime Add(DateTime dateTime, int value);

		/// <summary>
		/// Add a value of time units to dateTime by calendar information.
		/// </summary>
		/// <param name="dateTime">Calendar time.</param>
		/// <param name="timeUnit">Time unit.</param>
		/// <param name="value">Value.</param>
		/// <returns>Calendar time.</returns>
		[Obsolete]
		DateTime Add(DateTime dateTime, CalendarTimeUnit timeUnit, int value);

		/// <summary>
		/// Generate calendar days by calendar week template.
		/// </summary>
		/// <param name="dateTime">Calculation pivot.</param>
		/// <param name="weeksCount">Number of weeks to generate.</param>
		/// <returns>Calendar days.</returns>
		List<ICalendarDay> GenerateWeeks(DateTime dateTime, int weeksCount);

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="periods">The periods.</param>
		/// <returns>Time units count.</returns>
		int GetTimeUnits(IEnumerable<DateTimeInterval> periods);
	}
}
