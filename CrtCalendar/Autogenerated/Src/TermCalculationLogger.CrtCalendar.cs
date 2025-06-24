namespace Terrasoft.Configuration
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using Terrasoft.Configuration.Calendars;
	using CalendarsTimeUnit = Calendars.TimeUnit;

	#region Class: TermCalculationLogger

	/// <summary>
	/// Logger for term calculation.
	/// </summary>
	public class TermCalculationLogger
	{

		#region Fields: Private

		private readonly TermCalculationLogStore _logStore;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="TermCalculationLogger"/>.
		/// </summary>
		/// <param name="logStore">Store of calculation logs <see cref="TermCalculationLogStore"/>.</param>
		public TermCalculationLogger(TermCalculationLogStore logStore) {
			_logStore = logStore;
		}

		#endregion

		#region Methods: Private

		private DateTimeInterval GetDateTimeInterval(UsedTimeIntervals timeInterval) {
			var interval = new DateTimeInterval {
				Start = TimeZoneInfo.ConvertTime(timeInterval.TimeInterval.Start, _logStore.UserTimeZoneInfo,
					_logStore.CalendarTimeZoneInfo),
				End = TimeZoneInfo.ConvertTime(timeInterval.TimeInterval.End, _logStore.UserTimeZoneInfo,
					_logStore.CalendarTimeZoneInfo)
			};
			return interval;
		}

		private bool IsResolveTimeTerm(CaseTermInterval termInterval) {
			return termInterval.ResolveTerm != null
					&& termInterval.ResolveTerm.Type != default(CalendarsTimeUnit)
					&& termInterval.ResolveTerm.Value > 0
					&& _logStore.CalculationTermKind == CaseTermStates.ContainsResolve;
		}

		private bool IsResponseTimeTerm(CaseTermInterval termInterval) {
			return termInterval.ResponseTerm != null
					&& termInterval.ResponseTerm.Type != default(CalendarsTimeUnit)
					&& termInterval.ResponseTerm.Value > 0
					&& _logStore.CalculationTermKind == CaseTermStates.ContainsResponse;
		}

		private string GetLocalDayOfWeek(System.DayOfWeek dayOfWeek) {
			var localDayOfWeek = _logStore.UserCulture.DateTimeFormat.GetDayName(dayOfWeek);
			return localDayOfWeek.First().ToString().ToUpper() + localDayOfWeek.Substring(1);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Fills used time intervals.
		/// </summary>
		/// <param name="provider">Calendar operation provider.</param>
		/// <param name="term">Calculation term.</param>
		/// <param name="loader">Calendar data loader.</param>
		public void FillUsedTimeIntervals(ICalendarOperationProvider provider, TimeTerm term, ITermCalculationCalendarDataLoader loader) {
			_logStore.TermTimeRemains = term.Value;
			_logStore.CalendarData = loader.GetCalendarData(term.CalendarId);
			if (_logStore.UsedTimeTermIntervals.Count == 0) {
				foreach (var timeInterval in _logStore.ActiveTimeIntervals) {
					var interval = GetDateTimeInterval(timeInterval);
					int alreadyWorked = provider.GetTimeUnits(new List<DateTimeInterval> {
						interval
					});
					_logStore.UsedTimeTermIntervals.Add(new UsedTimeIntervals {
						TimeInterval = interval,
						IntervalStartDate = interval.Start.ToString(_logStore.UserCulture.DateTimeFormat.ShortDatePattern),
						CaseStatusName = timeInterval.CaseStatusName,
						SpentTimeUnitValue = alreadyWorked
					}); 
					_logStore.TermTimeRemains -= alreadyWorked;
				}
			}
		}

		/// <summary>
		/// Fills calculated time intervals.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="timeAmount">Time amount to calculate.</param>
		public void FillCalculationInterval(IEnumerable<ICalendarDay> days, double timeAmount) {
			var day = days.First();
			_logStore.CalculationIntervals.Add(new CalculationInterval {
				IsWorkingDay = !day.IsNonWorking,
				SpentIntervalValue = timeAmount,
				DayOfWeek = GetLocalDayOfWeek(day.DayOfWeek),
				CalendarDateTime = day.CalendarDateTime.ToString(_logStore.UserCulture.DateTimeFormat.ShortDatePattern)
			});
		}

		/// <summary>
		/// Fills calculated working days time intervals.
		/// </summary>
		/// <param name="days">Calendar days.</param>
		/// <param name="daysAmount">Working days amount to calculate.</param>
		public void FillWorkingDaysCalculationInterval(IEnumerable<ICalendarDay> days, double daysAmount) {
			var enumerator = days.GetEnumerator();
			double counter = daysAmount;
			while (enumerator.MoveNext() && counter > 0) {
				var day = enumerator.Current;
				if (!day.IsNonWorking) {
					counter--;
				}
				_logStore.CalculationIntervals.Add(new CalculationInterval {
					IsWorkingDay = !day.IsNonWorking,
					SpentIntervalValue = day.IsNonWorking ? 0 : 1,
					DayOfWeek = GetLocalDayOfWeek(day.DayOfWeek),
					CalendarDateTime = day.CalendarDateTime.ToString(_logStore.UserCulture.DateTimeFormat.ShortDatePattern)
				});
			};
		}

		/// <summary>
		/// Fills first calculated working days time interval.
		/// </summary>
		/// <param name="day">Calendar day.</param>
		public void AddFirstNonWorkingCalculationInterval(ICalendarDay day) {
			if(_logStore.IsUsedIntervalCalculated) {
				_logStore.CalculationIntervals.Add(new CalculationInterval {
					IsWorkingDay = !day.IsNonWorking,
					SpentIntervalValue = 0,
					DayOfWeek = GetLocalDayOfWeek(day.DayOfWeek),
					CalendarDateTime = day.CalendarDateTime.ToString(_logStore.UserCulture.DateTimeFormat.ShortDatePattern)
				});
			}
		}

		/// <summary>
		/// Fills calculated working minutes time intervals.
		/// </summary>
		/// <param name="day">Calendar day.</param>
		/// <param name="workingTime">Working minute time.</param>
		public void FillWorkingMinuteCalculationInterval(ICalendarDay day, double workingTime) {
			_logStore.CalculationIntervals.Add(new CalculationInterval {
				IsWorkingDay = !day.IsNonWorking,
				SpentIntervalValue = workingTime,
				DayOfWeek = GetLocalDayOfWeek(day.DayOfWeek),
				CalendarDateTime = day.CalendarDateTime.ToString(_logStore.UserCulture.DateTimeFormat.ShortDatePattern)
			});
		}

		/// <summary>
		/// Gets state of case term.
		/// </summary>
		/// <returns>State of case term.</returns>
		public CaseTermStates GetCaseTermState(CaseTermInterval termInterval) {
			if (IsResponseTimeTerm(termInterval)) {
				return CaseTermStates.ContainsResponse;
			}
			if (IsResolveTimeTerm(termInterval)) {
				return CaseTermStates.ContainsResolve;
			}
			return CaseTermStates.None;
		}

		#endregion

	}

	#endregion

}
