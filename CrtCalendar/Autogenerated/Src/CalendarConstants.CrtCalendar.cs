namespace Terrasoft.Configuration.Calendars
{
	using System;

	#region Class: TimeUnitConstants
	
	public static class TimeUnitConstants
	{
		#region Constants: Public
		
		public static readonly Guid CalendarDaysId = new Guid("36DF302E-5AB6-43A0-AEC7-45C2795D839D");
		public static readonly Guid CalendarMinutesId = new Guid("48B4FF98-E3BF-4F59-A6CF-284E4084FB2F");
		public static readonly Guid CalendarHoursId = new Guid("B788B4DE-5AE9-42E2-AF34-CD3AD9E6C96F");
		public static readonly Guid WorkingDaysId = new Guid("BDCBB819-9B26-4627-946F-D00645A2D401");
		public static readonly Guid WorkingMinutesId = new Guid("3AB432A6-CA84-4315-BA33-F343C758A8F0");
		public static readonly Guid WorkingHoursId = new Guid("2A608ED7-D118-402A-99C0-2F583291ED2E");
		
		#endregion
	}
	
	#endregion
	
	#region Class: CalendarConsts
	
	/// <summary>
	/// Calendar constants.
	/// </summary>
	public static class CalendarConsts
	{
		#region Constants: Public
		
		public static readonly string DefaultTimeZoneCode = "DefaultTimeZone";
		public static readonly string BaseCalendarCode = "BaseCalendar";
		public static readonly int MinutesInHour = 60;
		public static readonly int HoursInDay = 24;

		#endregion
	}
	
	#endregion
	
}

