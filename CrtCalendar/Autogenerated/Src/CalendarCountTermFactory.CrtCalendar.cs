namespace Terrasoft.Configuration.Calendars
{
	using System;
	using Terrasoft.Core.Factories;
	using CalendarsTimeUnit = Terrasoft.Configuration.Calendars.TimeUnit;

	#region Class : CalendarCountTermFactory

	/// <summary>
	/// Calendar count term factory.
	/// </summary>
	public class CalendarCountTermFactory
	{

		#region Methods : Public

		/// <summary>
		/// Get calculation mechanism by given time unit.
		/// </summary>
		/// <param name="timeUnit">Time unit.</param>
		/// <returns>Calculation mechanism.</returns>
		public virtual BaseCountTerm GetCountTerm(CalendarsTimeUnit timeUnit) {
			switch (timeUnit) {
				case CalendarsTimeUnit.Minute:
					return ClassFactory.Get<MinuteCountTerm>();
				case CalendarsTimeUnit.WorkingMinute:
					return ClassFactory.Get<WorkingMinuteCountTerm>();
				case CalendarsTimeUnit.Hour:
					return ClassFactory.Get<HourCountTerm>();
				case CalendarsTimeUnit.WorkingHour:
					return ClassFactory.Get<WorkingHourCountTerm>();
				case CalendarsTimeUnit.Day:
					return ClassFactory.Get<DayCountTerm>();
				case CalendarsTimeUnit.WorkingDay:
					return ClassFactory.Get<WorkingDayCountTerm>();
				default:
					var errorMessage = "Unable to create a corresponding count term. Time unit is unspecified.";
					throw new ArgumentException(errorMessage);
			}
		}

		#endregion

	}

	#endregion

}
