namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Configuration;

	#region Class : BaseCountTerm

	/// <summary>
	/// Count term base class.
	/// </summary>
	public abstract class BaseCountTerm
	{

		#region Properties: Public

		/// <summary>
		/// Case registration date.
		/// </summary>
		public virtual DateTime RegistrationDate {
			get; set;
		}

		/// <summary>
		/// Stores term calculation logs.
		/// </summary>
		public TermCalculationLogStore TermCalculationLogStore {
			get; set;
		}

		#endregion

		#region Methods: Protected

		protected virtual void LogCalculationIntervals(IEnumerable<ICalendarDay> days, double timeAmount) {
			if (TermCalculationLogStore != null) {
				new TermCalculationLogger(TermCalculationLogStore).FillCalculationInterval(days, timeAmount);
			}
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Get calendar weeks amount to generate.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="value">Value to calculate.</param>
		/// <returns>Amount of weeks.</returns>
		public abstract int GetWeeksCount(IEnumerable<ICalendarDay> days, int value);

		/// <summary>
		/// Actualize calendar days for calculation.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="dateTime">Calculation pivot.</param>
		public abstract void ActualizeDays(ref IEnumerable<ICalendarDay> days, DateTime dateTime);

		/// <summary>
		/// Calculate dateTime by calendar.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="dateTime">Calculation pivot.</param>
		/// <param name="value">Value to calculate.</param>
		/// <returns>Calendar time.</returns>
		public abstract DateTime Calculate(IEnumerable<ICalendarDay> days, int value);

		/// <summary>
		/// Gets the time units.
		/// </summary>
		/// <param name="calendar">The calendar.</param>
		/// <param name="periods">The periods.</param>
		/// <returns>Time units count.</returns>
		public abstract int GetTimeUnits(ICalendar<ICalendarDay> calendar, IEnumerable<DateTimeInterval> periods);

		#endregion

	}

	#endregion

}
