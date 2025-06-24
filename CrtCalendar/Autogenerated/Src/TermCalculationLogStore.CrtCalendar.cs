namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Globalization;
	using System.Linq;
	using System.Runtime.Serialization;
	using Terrasoft.Configuration.CESModels;

	#region Class: TermCalculationLogStore

	/// <summary>
	/// Stores detailed information about term calculation.
	/// </summary>
	[Serializable]
	[DataContract]
	public class TermCalculationLogStore
	{

		#region Constants: Public

		/// <summary>
		/// Stores key of cached calculation data.
		/// </summary>
		public const string CalculationLogCacheName = "CalculateTermsStore";
		public const string CalculationLogEnabledCacheName = "IsCalculateTermsLogEnabled";

		#endregion

		#region Properties: Public		

		/// <summary>
		/// Stores kind of calculating term.
		/// </summary>
		[DataMember(Name = "termKind")]
		public CaseTermStates CalculationTermKind { get; set; }

		/// <summary>
		/// Stores user culture.
		/// </summary>
		public CultureInfo UserCulture;

		/// <summary>
		/// Stores case parameters needed by term calculation.
		/// </summary>
		[DataMember(Name = "calculationParameters")]
		public IEnumerable<CaseCalculationParameterValue> CalculationParameters { get; set; }

		/// <summary>
		/// Stores prioritized list of calculation strategies.
		/// </summary>
		[DataMember(Name = "calculationStrategyRules")]
		public List<CalculationStrategyRule> CalculationStrategyRules { get; set; } = new List<CalculationStrategyRule>();

		/// <summary>
		/// Stores active time intervals of case.
		/// </summary>
		[DataMember(Name = "activeTimeIntervals")]
		public List<UsedTimeIntervals> ActiveTimeIntervals { get; set; } = new List<UsedTimeIntervals>();

		/// <summary>
		/// Stores calculation intervals.
		/// </summary>
		[DataMember(Name = "calculationIntervals")]
		public List<CalculationInterval> CalculationIntervals { get; set; } = new List<CalculationInterval>();

		private string _calculatedTerm;
		/// <summary>
		/// Stores calculated term depends on kind of calculation term <see cref="CalculationTermKind"/>.
		/// </summary>
		[DataMember(Name = "calculatedTerm")]
		public string CalculatedTerm {
			get {
				return _calculatedTerm;
			}
			set {
				_calculatedTerm = ConvertDateFromUserTimeZoneToCalendarTimeZone(value);
			}
		}

		/// <summary>
		/// Stores current date time in Calendar TimeZone.
		/// </summary>
		[DataMember(Name = "currentDateTime")]
		public string CurrentDateTime { get; set; }

		/// <summary>
		/// Stores information about user timezone.
		/// </summary>
		public TimeZoneInfo UserTimeZoneInfo { get; set; }

		private TimeZoneInfo _calendarTimeZoneInfo;
		/// <summary>
		/// Stores information about timezone of calendar which used in calculation of term.
		/// </summary>
		public TimeZoneInfo CalendarTimeZoneInfo {
			get {
				return _calendarTimeZoneInfo;
			}
			set {
				if (_calendarTimeZoneInfo != value) {
					_calendarTimeZoneInfo = value;
					RegistrationDate = ConvertDateFromUserTimeZoneToCalendarTimeZone(RegistrationDate);
					CurrentDateTime = IsOverdue || !ActiveTimeIntervals.Any() ? RegistrationDate : ConvertDateFromUTCToCalendarTimeZone(CurrentDateTime);
				}
			}
		}

		/// <summary>
		/// Stores remaining time.
		/// </summary>
		[DataMember(Name = "termTimeRemains")]
		public int TermTimeRemains { get; set; }

		/// <summary>
		/// Store detailed information on used time intervals.
		/// </summary>
		[DataMember(Name = "usedTimeTermIntervals")]
		public List<UsedTimeIntervals> UsedTimeTermIntervals { get; set; } = new List<UsedTimeIntervals>();

		/// <summary>
		/// Stores time term.
		/// </summary>
		[DataMember(Name = "timeTerm")]
		public TimeTerm TimeTerm { get; set; }

		/// <summary>
		/// Case registration date.
		/// </summary>
		[DataMember(Name = "registrationDate")]
		public string RegistrationDate { get; private set; }

		/// <summary>
		/// Stores selected strategy for term calculation.
		/// </summary>
		[DataMember(Name = "selectedStrategy")]
		public CalculationStrategyRule SelectedStrategy { get; set; }

		/// <summary>
		/// Stores information about calendar data.
		/// </summary>
		[DataMember(Name = "calendarData")]
		public TermCalculationCalendarData CalendarData { get; set; }

		/// <summary>
		/// A sign that the UsedIntervals are taken into.
		/// </summary>
		public bool IsUsedIntervalCalculated { get; set; } = false;

		private bool _isOverdue = false;
		/// <summary>
		/// A sign that we calculate overdue entity, so currentdate is RegistrationDate.
		/// </summary>
		public bool IsOverdue { get {
				return _isOverdue;
			} set {
				_isOverdue = value;
				if (value) {
					CurrentDateTime = RegistrationDate;
				}
				else {
					CurrentDateTime = CalendarTimeZoneInfo != null ? ConvertDateFromUTCToCalendarTimeZone(DateTime.UtcNow.ToString()) : DateTime.UtcNow.ToString();
				}
			}
		}

		#endregion

		#region Constructor: Public

		/// <summary>
		/// Initializes new instance of <see cref="TermCalculationLogStore"/>.
		/// </summary>
		/// <param name="calculationParameters">Parameters to term calculation.</param>
		/// <param name="calculationTermKind">Kind of calculation term.</param>
		public TermCalculationLogStore(CaseCalculationLoggerRequest calculationParameters, CaseTermStates calculationTermKind, CultureInfo userCulture) {
			CalculationParameters = calculationParameters.Parameters;
			RegistrationDate = DateTime.Parse(calculationParameters.RegistrationDate).ToString();
			CalculationTermKind = calculationTermKind;
			UserCulture = userCulture;
			CurrentDateTime = DateTime.UtcNow.ToString();
		}

		#endregion

		#region Methods: Private

		private string ConvertDateFromUserTimeZoneToCalendarTimeZone(string date) {
			var dateTime = DateTime.Parse(date);
			return TimeZoneInfo.ConvertTime(dateTime, UserTimeZoneInfo, CalendarTimeZoneInfo).ToString("g");
		}

		private string ConvertDateFromUTCToCalendarTimeZone(string date) {
			var dateTime = DateTime.Parse(date);
			return TimeZoneInfo.ConvertTime(dateTime, TimeZoneInfo.Utc, CalendarTimeZoneInfo).ToString("g");
		}

		#endregion


	}

	#endregion

	#region Class: CalculationStrategyRule	

	/// <summary>
	/// Container for storing information about calculation strategy.
	/// </summary>
	[Serializable]
	[DataContract]
	public class CalculationStrategyRule
	{

		#region Properties: Public		

		/// <summary>
		/// Stores name of strategy for term calculation.
		/// </summary>
		[DataMember(Name = "strategyName")]
		public string StrategyName { get; set; }

		/// <summary>
		/// Stores class name of strategy for term calculation.
		/// </summary>
		[DataMember(Name = "strategyClassName")]
		public string StrategyClassName { get; set; }

		#endregion

	}

	#endregion

	#region Class: UsedTimeIntervals

	/// <summary>
	/// Container for storing information about used time intervals.
	/// </summary>
	[Serializable]
	[DataContract]
	public class UsedTimeIntervals
	{

		#region Properties: Public	

		/// <summary>
		/// Stores time interval.
		/// </summary>
		[DataMember(Name = "timeInterval")]
		public DateTimeInterval TimeInterval { get; set; }

		/// <summary>
		/// Stores time interval.
		/// </summary>
		[DataMember(Name = "intervalStartDate")]
		public string IntervalStartDate { get; set; }

		/// <summary>
		/// Stores name of case status.
		/// </summary>
		[DataMember(Name = "caseStatusName")]
		public string CaseStatusName { get; set; }

		/// <summary>
		/// Stores spent time in interval.
		/// </summary>
		[DataMember(Name = "spentTimeUnitValue")]
		public int SpentTimeUnitValue { get; set; }

		#endregion

	}

	#endregion

	#region Class: CalculationInterval

	/// <summary>
	/// Container for storing information about calculation intervals.
	/// </summary>
	[Serializable]
	[DataContract]
	public class CalculationInterval
	{

		#region Properties: Public

		/// <summary>
		/// Indicates that the day is working.
		/// </summary>
		[DataMember(Name = "isWorkingDay")]
		public bool IsWorkingDay { get; set; }

		/// <summary>
		/// Stores day of week.
		/// </summary>
		[DataMember(Name = "dayOfWeek")]
		public string DayOfWeek { get; set; }

		/// <summary>
		/// Stores DateTime of calendar.
		/// </summary>
		[DataMember(Name = "calendarDateTime")]
		public string CalendarDateTime { get; set; }

		/// <summary>
		/// Stores spent time in interval.
		/// </summary>
		[DataMember(Name = "spentIntervalValue")]
		public double SpentIntervalValue { get; set; }

		#endregion

	}

	#endregion

	#region Class: TermCalculationCalendarData

	/// <summary>
	/// Container for storing calendar data.
	/// </summary>
	[Serializable]
	[DataContract]
	public class TermCalculationCalendarData
	{
		[DataMember(Name = "calendarName")]
		public string CalendarName { get; set; }

		[DataMember(Name = "timeZoneName")]
		public string TimeZoneName { get; set; }
	}

	#endregion

	#region Class: CaseCalculationParameterValue

	/// <summary>
	/// Container for storing information about case parameters needed by term calculation.
	/// </summary>
	[DataContract]
	[Serializable]
	public class CaseCalculationParameterValue
	{

		#region Properties: Public

		/// <summary>
		/// Case column name.
		/// </summary>
		[DataMember(Name = "column")]
		public string Column { get; set; }

		/// <summary>
		/// Case column value.
		/// </summary>
		[DataMember(Name = "value")]
		public object Value { get; set; }

		/// <summary>
		/// Case column display value.
		/// </summary>
		[DataMember(Name = "displayValue")]
		public string DisplayValue { get; set; }

		/// <summary>
		/// Link to entity page.
		/// </summary>
		[DataMember(Name = "link")]
		public string Link { get; set; }

		#endregion
	}

	#endregion

	#region Class: CaseCalculationLoggerRequest 

	/// <summary>
	/// Container with request parameters needed by term calculation logger.
	/// </summary>
	[DataContract]
	public class CaseCalculationLoggerRequest : BaseServiceRequest
	{

		#region Properties: Public		

		/// <summary>
		/// Parameters for term calculation.
		/// </summary>
		[DataMember(Name = "arguments")]
		public IEnumerable<CaseCalculationParameterValue> Parameters { get; set; }

		/// <summary>
		/// Registration date.
		/// </summary>
		[DataMember(Name = "registrationDate")]
		public string RegistrationDate { get; set; }

		#endregion

	}

	#endregion

}
