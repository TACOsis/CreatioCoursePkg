namespace Terrasoft.Configuration.Calendars
{
	using System;
	using Terrasoft.Core;

	#region Class : CalendarUtility

	/// <summary>
	/// A class that provides calendar time calculation utilities.
	/// </summary>
	public partial class CalendarUtility : CalendarUtilityBase
	{

		#region Constructors : Public

		/// <summary>
		/// Create a calendar utility.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <param name="userConnection">User connection.</param>
		[Obsolete]
		public CalendarUtility(Guid calendarId, UserConnection userConnection) : base(calendarId, userConnection) {
		}

		/// <summary>
		/// Create a calendar utility.
		/// </summary>
		/// <param name="calendar">Calendar.</param>
		[Obsolete]
		public CalendarUtility(ICalendar<ICalendarDay> calendar) : base(calendar) {
		}

		#endregion

	}

	#endregion

}
