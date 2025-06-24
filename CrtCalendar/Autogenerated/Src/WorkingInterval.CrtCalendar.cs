namespace Terrasoft.Configuration.Calendars
{
	using System;

	#region	Struct : WorkingInterval

	/// <summary>
	/// A struct that represents a working interval with Start and End points as TimeSpan objects
	/// and also provides some utilities to work with it.
	/// </summary>
	public struct WorkingInterval
	{

		#region	Properties : Public

		/// <summary>
		/// Start time point.
		/// </summary>
		public TimeSpan Start {
			get;
			private set;
		}

		/// <summary>
		/// End time point.
		/// </summary>
		public TimeSpan End {
			get;
			private set;
		}

		/// <summary>
		/// The lenght of the interval as TimeSpan.
		/// </summary>
		public TimeSpan Length {
			get {
				return End - Start;
			}
		}

		#endregion

		#region	Constructors : Public

		/// <summary>
		/// Creates an instance of new working interval.
		/// </summary>
		/// <param name="start">Start time point.</param>
		/// <param name="end">End time point.</param>
		public WorkingInterval(TimeSpan start, TimeSpan end)
			: this() {
			Start = start;
			End = end;
		}

		#endregion

		#region	Methods : Public

		/// <summary>
		/// Checks if time component of the given dateTime belongs to this interval.
		/// </summary>
		/// <param name="dateTime"></param>
		/// <returns></returns>
		public bool GetIsDateBetween(DateTime dateTime) {
			return dateTime.TimeOfDay >= Start && dateTime.TimeOfDay <= End;
		}

		/// <summary>
		/// Truncates the inverval by replacing start with given dateTime if it belongs to this interval.
		/// </summary>
		/// <param name="dateTime">DateTime object.</param>
		/// <param name="right">Indicates truncation direction.
		/// <c>false</c> means cutting left to right, <c>true</c> - right to left.</param>
		/// <returns>Truncated working interval.</returns>
		public WorkingInterval Truncate(DateTime dateTime, bool right = false) {
			if (dateTime.TimeOfDay < Start) {
				return this;
			}
			if (GetIsDateBetween(dateTime)) {
				return right 
					? new WorkingInterval(Start, dateTime.TimeOfDay)
					: new WorkingInterval(dateTime.TimeOfDay, End);
			}
			return default(WorkingInterval);
		}

		#endregion

	}

	#endregion

}
