namespace Terrasoft.Configuration.Calendars
{
	using Terrasoft.Core;

	#region Class : CalendarUtility

	/// <summary>
	/// A class that provides calendar time calculation utilities.
	/// </summary>
	public partial class CalendarUtility : CalendarUtilityBase
	{

		#region Constructors : Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarUtility"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public CalendarUtility(UserConnection userConnection) : base(userConnection) {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarUtility"/> class.
		/// </summary>
		/// <param name="store">The store.</param>
		public CalendarUtility(ICalendarDataStore<ICalendar<ICalendarDay>> store) : base(store) {
		}

		#endregion

	}

	#endregion

}
