namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	#region Interface: ITermCalculationCalendarDataLoader

	/// <summary>
	/// Interface for calendar data loader.
	/// </summary>
	public interface ITermCalculationCalendarDataLoader
	{

		/// <summary>
		/// Loads calendar data.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <returns>Calendar data.</returns>
		TermCalculationCalendarData GetCalendarData(Guid calendarId);
	}

	#endregion

	#region Class: TermCalculationCalendarDataLoader

	/// <summary>
	/// Represents loader for calendar data.
	/// </summary>
	public class TermCalculationCalendarDataLoader : ITermCalculationCalendarDataLoader
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="TermCalculationCalendarDataLoader"/>
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public TermCalculationCalendarDataLoader(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads calendar data.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <returns>Calendar data.</returns>
		public TermCalculationCalendarData GetCalendarData(Guid calendarId) {
			if (calendarId == Guid.Empty) {
				return null;
			}
			var calendarEsq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Calendar");
			var calendarName = calendarEsq.AddColumn("Name").Name;
			var timeZoneName = calendarEsq.AddColumn("TimeZone.Name").Name;
			var calendar = calendarEsq.GetEntity(_userConnection, calendarId);
			return new TermCalculationCalendarData {
				CalendarName = calendar.GetTypedColumnValue<string>(calendarName),
				TimeZoneName = calendar.GetTypedColumnValue<string>(timeZoneName)
			};
		}

		#endregion

	}

	#endregion

}
