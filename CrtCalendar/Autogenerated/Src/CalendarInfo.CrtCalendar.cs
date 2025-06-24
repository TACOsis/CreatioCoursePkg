namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;

	#region Class : Calendar

	/// <summary>
	/// Represents calendar information.
	/// </summary>
	public class Calendar : ICalendar<ICalendarDay>
	{

		#region Properties

		/// <summary>
		/// Gets the identifier.
		/// </summary>
		/// <value>
		/// The identifier.
		/// </value>
		public Guid Id { get; private set; }

		/// <summary>
		/// Gets or sets the time zone.
		/// </summary>
		/// <value>
		/// The time zone.
		/// </value>
		public TimeZoneInfo TimeZone { get; set; }

		/// <summary>
		/// Gets or sets the day offs.
		/// </summary>
		/// <value>
		/// The day offs.
		/// </value>
		public IList<ICalendarDay> DayOffs { get; set; }

		/// <summary>
		/// Gets or sets the week template.
		/// </summary>
		/// <value>
		/// The week template.
		/// </value>
		public IList<ICalendarDay> WeekTemplate { get; set; }

		#endregion

		#region Constructors : Public

		/// <summary>
		/// Initializes a new instance of the <see cref="Calendar"/> class.
		/// </summary>
		/// <param name="id">The identifier.</param>
		public Calendar(Guid id) {
			Id = id;
			WeekTemplate = new List<ICalendarDay>();
			DayOffs = new List<ICalendarDay>();
		}

		/// <summary>
		/// Creates a new object that is a copy of the current instance.
		/// </summary>
		/// <returns>
		/// A new object that is a copy of this instance.
		/// </returns>
		public object Clone() {
			var calendar = (Calendar)MemberwiseClone();
			calendar.Id = Guid.NewGuid();
			calendar.WeekTemplate = new List<ICalendarDay>(WeekTemplate);
			calendar.DayOffs = new List<ICalendarDay>(DayOffs);
			return calendar;
		}

		#endregion

	}

	#endregion
}

