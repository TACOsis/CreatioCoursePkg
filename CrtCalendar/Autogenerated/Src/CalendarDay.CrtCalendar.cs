namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;
	using System.Linq;

	#region Class : CalendarDay

	/// <summary>
	/// Represents a calendar day.
	/// </summary>
	public class CalendarDay : ICalendarDay
	{

		#region Consts

		private const int NonWorkingInterval = 0;

		#endregion

		#region Properties : Public

		/// <summary>
		/// Day of week.
		/// </summary>
		public DayOfWeek DayOfWeek {
			get;
			set;
		}

		/// <summary>
		/// Calendar dateTime.
		/// </summary>
		public DateTime CalendarDateTime {
			get;
			set;
		}

		/// <summary>
		/// Non working day property.
		/// </summary>
		public bool IsNonWorking {
			get;
			set;
		}

		/// <summary>
		/// Working time intervals.
		/// </summary>
		public List<WorkingInterval> WorkingIntervals {
			get;
			set;
		}

		/// <summary>
		/// Unique identifier of day type.
		/// </summary>
		public Guid DayTypeUId {
			get;
			set;
		}

		#endregion

		#region Constructors : Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CalendarDay"/> class.
		/// </summary>
		public CalendarDay() {
			WorkingIntervals = new List<WorkingInterval>();
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Get day working time.
		/// </summary>
		/// <returns>
		/// Day working time
		/// </returns>
		public double GetWorkingTime() {
			return IsNonWorking
				 ? NonWorkingInterval
				 : WorkingIntervals.Sum(i => (i.End - i.Start).TotalMinutes);
		}

		/// <summary>
		/// Creates a new object that is a copy of the current instance.
		/// </summary>
		/// <returns>
		/// A new object that is a copy of this instance.
		/// </returns>
		public object Clone() {
			var clone = (ICalendarDay)MemberwiseClone();
			clone.WorkingIntervals = new List<WorkingInterval>(WorkingIntervals);
			return clone;
		}

		#endregion

	}

	#endregion

}
