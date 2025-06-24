namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Collections.Generic;

	public interface ICalendarDay : ICloneable
	{
		/// <summary>
		/// Day of week.
		/// </summary>
		DayOfWeek DayOfWeek {
			get;
			set;
		}

		/// <summary>
		/// Calendar dateTime.
		/// </summary>
		DateTime CalendarDateTime {
			get;
			set;
		}

		/// <summary>
		/// Non working day property.
		/// </summary>
		bool IsNonWorking {
			get;
			set;
		}

		/// <summary>
		/// Working time intervals.
		/// </summary>
		List<WorkingInterval> WorkingIntervals {
			get;
			set;
		}

		/// <summary>
		/// Unique identifier of day type.
		/// </summary>
		Guid DayTypeUId {
			get;
			set;
		}

		/// <summary>
		/// Get day working time.
		/// </summary>
		/// <returns>Day working time</returns>
		double GetWorkingTime();

	}
}
