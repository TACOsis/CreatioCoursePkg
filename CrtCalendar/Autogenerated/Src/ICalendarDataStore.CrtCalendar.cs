namespace Terrasoft.Configuration.Calendars
{
	using System;

	/// <summary>
	/// Represents a calendar data store.
	/// </summary>
	public interface ICalendarDataStore<T> where T : ICalendar<ICalendarDay>
	{		
		/// <summary>
		/// Loads calendar information.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		void Load(ref T calendar);

		/// <summary>
		/// Save changes of calendar.
		/// </summary>
		/// <param name="calendar">Calendar.</param>
		/// <returns>Success of operation.</returns>
		bool Save(T calendar);
	}
}
