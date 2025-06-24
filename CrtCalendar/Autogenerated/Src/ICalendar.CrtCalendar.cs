namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;

	/// <summary>
	/// Represents calendar information.
	/// </summary>
	/// <typeparam name="T">ICalendarDay</typeparam>
	/// <seealso cref="System.ICloneable" />
	public interface ICalendar<T> : ICloneable 
		where T : ICalendarDay
	{
		/// <summary>
		/// Gets the identifier.
		/// </summary>
		/// <value>
		/// The identifier.
		/// </value>
		Guid Id {
			get;
		}

		/// <summary>
		/// Gets or sets the time zone.
		/// </summary>
		/// <value>
		/// The time zone.
		/// </value>
		TimeZoneInfo TimeZone {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the day offs.
		/// </summary>
		/// <value>
		/// The day offs.
		/// </value>
		IList<T> DayOffs {
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the week template.
		/// </summary>
		/// <value>
		/// The week template.
		/// </value>
		IList<T> WeekTemplate {
			get;
			set;
		}
	}
}
