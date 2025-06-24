namespace Terrasoft.Configuration.CrtProductivityCopilot
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: TimeSlot

	public class TimeSlot {

		#region Fields: Public

		/// <summary>
		/// Time slot start time.
		/// </summary>
		public DateTime start;

		/// <summary>
		/// Time slot end time.
		/// </summary>
		public DateTime end;

		#endregion

		#region Methods: Public

		/// <summary>
		/// Checks is <paramref name="slot"/> overlaps current slot.
		/// </summary>
		/// <param name="slot"><see cref="TimeSlot"/> instance.</param>
		/// <returns><c>True</c> if <paramref name="slot"/> overlaps current slot. Return <c>false</c> otherwise.</returns>
		public bool IsOverlaping(TimeSlot slot) {
			return start < slot.start && end >= slot.start ||
				start >= slot.start && start < slot.end ||
				start == slot.start && end == slot.end;
		}

		#endregion

	}

	#endregion

	#region Class: TimeSlotProvider

	/// <summary>
	/// Provides API to search for free time slots in contacts scheduler.
	/// </summary>
	public class TimeSlotProvider
	{

		#region Fields: Private

		private UserConnection _uc;

		private int _startingWorkingHour = 8;

		private int _endingWorkingHour = 18;

		private IEnumerable<DayOfWeek> _weekEndDays = new[] { DayOfWeek.Saturday, DayOfWeek.Sunday };

		private Guid _emailTypeId = Guid.Parse("e2831dec-cfc0-df11-b00f-001d60e938c6");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// .ctor.
		/// </summary>
		/// <param name="uc"><see cref="UserConnection"/> instance.</param>
		public TimeSlotProvider(UserConnection uc) {
			_uc = uc;
		}

		#endregion

		#region Methods: Private

		private List<TimeSlot> GetOffHoursSlots(DateTime from, DateTime to) {
			var result = new List<TimeSlot>();
			var daysInPeriod = (to.Date - from.Date).TotalDays;
			var currentDate = from.Date;
			for (var i = 0; i <= daysInPeriod; i++) {
				if (_weekEndDays.Contains(currentDate.DayOfWeek)) {
					result.Add(new TimeSlot() {
						start = currentDate.ToUniversalTime(),
						end = currentDate.AddDays(1).ToUniversalTime(),
					});
				} else {
					result.Add(new TimeSlot() {
						start = currentDate.ToUniversalTime(),
						end = currentDate.AddHours(_startingWorkingHour).ToUniversalTime(),
					});
					result.Add(new TimeSlot() {
						start = currentDate.AddHours(_endingWorkingHour).ToUniversalTime(),
						end = currentDate.AddDays(1).ToUniversalTime(),
					});
				}
				currentDate = currentDate.AddDays(1);
			}
			return result;
		}

		private List<TimeSlot> GetContactsMeetingsSlots(DateTime from, DateTime to, IEnumerable<Guid> contactIds) {
			var result = new List<TimeSlot>();
			if (contactIds.IsNullOrEmpty()) {
				return result;
			}
			var select = new Select(_uc)
					.Column("StartDate")
					.Column("DueDate")
				.From("Activity")
					.InnerJoin("ActivityParticipant").On("ActivityParticipant", "ActivityId").IsEqual("Activity", "Id")
				.Where("Activity", "TypeId").IsNotEqual(Column.Const(_emailTypeId))
					.And()
						.OpenBlock("ActivityParticipant", "InviteResponseId").IsNotEqual(Column.Const(ActivityConsts.ParticipantResponseDeclinedId))
						.Or("ActivityParticipant", "InviteResponseId").IsNull()
					.CloseBlock()
					.And("ActivityParticipant", "ParticipantId").In(Column.Parameters(contactIds))
					.And()
						.OpenBlock()
							.OpenBlock("StartDate").IsGreaterOrEqual(Column.Parameter(from))
								.And("StartDate").IsLessOrEqual(Column.Parameter(to))
							.CloseBlock()
							.Or()
							.OpenBlock("DueDate").IsGreaterOrEqual(Column.Parameter(from))
								.And("DueDate").IsLessOrEqual(Column.Parameter(to))
							.CloseBlock()
							.Or()
							.OpenBlock("DueDate").IsGreaterOrEqual(Column.Parameter(to))
								.And("StartDate").IsLessOrEqual(Column.Parameter(from))
							.CloseBlock()
						.CloseBlock() as Select;
			using (DBExecutor dbExecutor = _uc.EnsureDBConnection()) {
				using (IDataReader reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						result.Add(new TimeSlot() {
							start = reader.GetColumnValue<DateTime>("StartDate"),
							end = reader.GetColumnValue<DateTime>("DueDate")
						});
					}
				}
			}
			return result;
		}

		private List<TimeSlot> RemoveBusySlot(IEnumerable<TimeSlot> freeSlots, TimeSlot busySlot) {
			var result = new List<TimeSlot>();
			foreach (var freeSlot in freeSlots) {
				if (freeSlot.IsOverlaping(busySlot)) {
					if (freeSlot.start < busySlot.start) {
						result.Add(new TimeSlot {
							start = freeSlot.start,
							end = busySlot.start
						});
					}
					if (freeSlot.end > busySlot.end) {
						result.Add(new TimeSlot {
							start = busySlot.end,
							end = freeSlot.end
						});
					}
				} else {
					result.Add(freeSlot);
				}
			}
			return result;
		}

		private bool ValidatePeriod(DateTime from, DateTime to) {
			return from != null && from != DateTime.MinValue && from != DateTime.MaxValue &&
				to != null && to != DateTime.MinValue && to != DateTime.MaxValue &&
				from < to;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Creates free slots in time period, set by <paramref name="from"/> and <paramref name="to"/> values for 
		/// <paramref name="contactIds"/> contacts.
		/// Time slots that counts as free selected as follows:
		/// <list type="bullet">
		/// <item><description>time slot must be in working hours (8:00 to 18:00), Monday to Friday including</description></item>
		/// <item><description>there is no meetings planned for any of <paramref name="contactIds"/> at that time</description></item>
		/// <item><description>declined meetings counts as free</description></item>
		/// </list>
		/// </summary>
		/// <param name="from">Start date time for free slot search.</param>
		/// <param name="to">End date time for free slot search.</param>
		/// <param name="contactIds">Contacts identifiers, for which free time slots will be searched.</param>
		/// <returns>Free time slots list, in current user timezone.</returns>
		/// <remarks><paramref name="from"/> and <paramref name="to"/> will be validated for valid time period.
		/// If any of this parameters:
		/// <list type="bullet">
		/// <item><description>not passed</description></item>
		/// <item><description>passed as DateTime Min/Max value</description></item>
		/// <item><description><paramref name="from"/> greater or equal <paramref name="to"/></description></item>
		/// </list>
		/// then free slots search will not be performed.</remarks>
		public IEnumerable<TimeSlot> GetFreeSlots(DateTime from, DateTime to, IEnumerable<Guid> contactIds) {
			if (!ValidatePeriod(from, to)) {
				return new List<TimeSlot>();
			}
			var fromUtc = from.ToUniversalTime();
			var toUtc = to.ToUniversalTime();
			var result = new List<TimeSlot>() {
				new TimeSlot {
					start = fromUtc,
					end = toUtc,
				}
			};
			foreach (var offHoursSlot in GetOffHoursSlots(from, to)) {
				result = RemoveBusySlot(result, offHoursSlot);
			}
			foreach (var meetingSlot in GetContactsMeetingsSlots(fromUtc, toUtc, contactIds)) {
				result = RemoveBusySlot(result, meetingSlot);
			}
			var timeZone = _uc.CurrentUser.TimeZone;
			return timeZone == TimeZoneInfo.Utc
				? result
				: result.Select(freeSlot => new TimeSlot {
					start = TimeZoneInfo.ConvertTimeFromUtc(freeSlot.start, timeZone),
					end = TimeZoneInfo.ConvertTimeFromUtc(freeSlot.end, timeZone),
				});
		}

		#endregion

	}

	#endregion

}

