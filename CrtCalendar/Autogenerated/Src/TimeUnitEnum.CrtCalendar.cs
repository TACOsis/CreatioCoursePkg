namespace Terrasoft.Configuration.Calendars
{
	using System;

	#region Enums

	/// <summary>
	/// Available time units for terms calculation.
	/// </summary>
	public enum TimeUnit
	{
		None = 0,
		Minute,
		Hour,
		Day,
		WorkingMinute,
		WorkingHour,
		WorkingDay
	}
	
	[Obsolete]
	public static class TimeUnitHelper
	{
		public static bool IsCalendarUnit(this TimeUnit timeUnit) {
			return timeUnit == TimeUnit.Day || timeUnit == TimeUnit.Hour || timeUnit == TimeUnit.Minute;
		}
	}

	#endregion

}
