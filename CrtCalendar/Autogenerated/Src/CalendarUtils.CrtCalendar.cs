using System;
using System.Collections.Generic;
using System.Linq;
using Terrasoft.Common;
using Terrasoft.Core;
using Terrasoft.Core.Entities;

namespace Terrasoft.Configuration
{

	#region Interface: IEntityObject

	/// <summary>
	/// ######### ############# ######## # ##.
	/// ############ ### ############ ######## ######## ##### ######### ########## ## ########.
	/// </summary>
	public interface IEntityObject
	{
		#region Properties: Public

		/// <summary>
		/// ############# ###### # ##.
		/// </summary>
		Guid Id { get; set; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// #####, ############### ########## ######## # ########.
		/// </summary>
		/// <param name="entity">######## ######## ##</param>
		/// <returns>######## # ############# ##########</returns>
		Entity FillEntity(Entity entity);

		#endregion
	}

	#endregion

	#region Class: DayInCalendarObject

	/// <summary>
	/// ######### ############# ######## ### # #########.
	/// </summary>
	[Serializable]
	public class DayInCalendarObjectV2 : ICloneable, IEntityObject
	{

		#region Constructors: Public

		public DayInCalendarObjectV2() { }

		public DayInCalendarObjectV2(Entity dayInCalendarEntity) {
			Id = dayInCalendarEntity.GetTypedColumnValue<Guid>("Id");
			CalendarId = dayInCalendarEntity.GetTypedColumnValue<Guid>("CalendarId");
			Date = dayInCalendarEntity.GetTypedColumnValue<DateTime>("Date");
			DayTypeId = dayInCalendarEntity.GetTypedColumnValue<Guid>("DayTypeId");
			DayOfWeekId = dayInCalendarEntity.GetTypedColumnValue<Guid>("DayOfWeekId");
			IsDayTypeWeekend = dayInCalendarEntity.GetTypedColumnValue<bool>("DayType_IsWeekend");
			DayOfWeekNumber = dayInCalendarEntity.GetTypedColumnValue<int>("DayOfWeek_Number");
		}

		public DayInCalendarObjectV2(DayInCalendarExtendedV2 dayInCalendarExtended)
			: this(dayInCalendarExtended.DayInCalendarEntity) {
			IsCalendarDayValue = dayInCalendarExtended.IsCalendarValue;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// ########## #############.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// ############# #########.
		/// </summary>
		public Guid CalendarId { get; set; }

		/// <summary>
		/// ####.
		/// </summary>
		public DateTime Date { get; set; }

		/// <summary>
		/// ############# #### ###.
		/// </summary>
		public Guid DayTypeId { get; set; }

		/// <summary>
		/// ############# ### # ######.
		/// </summary>
		public Guid DayOfWeekId { get; set; }

		/// <summary>
		/// #######, ######## ## #### ########
		/// </summary>
		public bool IsDayTypeWeekend { get; set; }

		/// <summary>
		/// ##### ### # ######.
		/// </summary>
		public int DayOfWeekNumber { get; set; }

		/// <summary>
		/// #######, ########### ## ##, ### ### ############# ########### ####.
		/// </summary>
		public bool IsCalendarDayValue { get; set; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// ######## ########### ########## ###.
		/// </summary>
		/// <returns>##### ######### ###</returns>
		public object Clone() {
			return new DayInCalendarObjectV2 {
				Id = Id,
				CalendarId = CalendarId,
				Date = Date,
				DayTypeId = DayTypeId,
				DayOfWeekId = DayOfWeekId,
				IsDayTypeWeekend = IsDayTypeWeekend,
				DayOfWeekNumber = DayOfWeekNumber,
				IsCalendarDayValue = IsCalendarDayValue
			};
		}

		/// <summary>
		/// ########## ######## ### # ######### ######## ##########.
		/// </summary>
		/// <param name="entity">######## #### # #########</param>
		/// <returns>########## ########</returns>
		public Entity FillEntity(Entity entity) {
			if (Date.Date != DateTime.MinValue.Date) {
				entity.SetColumnValue("Date", Date.Date);
			} else {
				entity.SetColumnValue("Date", null);
			}
			entity.SetColumnValue("DayTypeId", DayTypeId);
			entity.SetColumnValue("DayOfWeekId", DayOfWeekId);
			entity.SetColumnValue("CalendarId", CalendarId);
			entity.SetColumnValue("Id", Id);
			return entity;
		}

		#endregion
	}

	#endregion

	#region Class: WorkingTimeIntervalObject

	/// <summary>
	/// ######### ############# ######## ######### ######## #######.
	/// </summary>
	[Serializable]
	public class WorkingTimeIntervalObjectV2 : IEntityObject
	{

		#region Constructors: Public

		public WorkingTimeIntervalObjectV2() { }

		public WorkingTimeIntervalObjectV2(Entity workingTimeIntervalEntity) {
			Id = workingTimeIntervalEntity.GetTypedColumnValue<Guid>("Id");
			DayInCalendarId = workingTimeIntervalEntity.GetTypedColumnValue<Guid>("DayInCalendarId");
			From = workingTimeIntervalEntity.GetTypedColumnValue<DateTime>("From");
			To = workingTimeIntervalEntity.GetTypedColumnValue<DateTime>("To");
			Index = workingTimeIntervalEntity.GetTypedColumnValue<int>("Index");
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// ########## #############.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// #### # #########.
		/// </summary>
		public Guid DayInCalendarId { get; set; }

		/// <summary>
		/// ###### ########## ##########.
		/// </summary>
		public DateTime From { get; set; }

		/// <summary>
		/// ##### ########## ##########.
		/// </summary>
		public DateTime To { get; set; }

		/// <summary>
		/// ########## ##### ########## ##########.
		/// </summary>
		public int Index { get; set; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// ########## ######## ########## ######## ####### ######## ##########.
		/// </summary>
		/// <param name="entity">######## ####### ########</param>
		/// <returns>########## ########</returns>
		public Entity FillEntity(Entity entity) {
			entity.SetColumnValue("Id", Id);
			entity.SetColumnValue("DayInCalendarId", DayInCalendarId);
			entity.SetColumnValue("From", From);
			entity.SetColumnValue("To", To);
			entity.SetColumnValue("Index", Index);
			return entity;
		}

		#endregion

	}

	#endregion

	#region Class: DayInCalendarExtended

	/// <summary>
	/// ########### ########### ####. ###### ############# # ######, #### ########## ##### ##### ####### ### #######
	/// ####: #### ### #### ## ####### ######, #### ############# ########### ####.
	/// </summary>
	public class DayInCalendarExtendedV2
	{
		#region Constructors: Public

		public DayInCalendarExtendedV2() { }

		public DayInCalendarExtendedV2(Entity dayInCalendar, bool isCalendarValue) {
			IsCalendarValue = isCalendarValue;
			DayInCalendarEntity = dayInCalendar;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// #######, ########### ## ##, ### ### ############# ########### ####.
		/// </summary>
		public bool IsCalendarValue { get; set; }

		/// <summary>
		/// ###### ## #### # #########.
		/// </summary>
		public Entity DayInCalendarEntity { get; set; }

		#endregion
	}

	#endregion

	#region Class: CalendarUtils

	/// <summary>
	/// ######### ##### ## ###### # ###########.
	/// </summary>
	public class CalendarUtilsBase
	{
		#region Constructors: Public

		public CalendarUtilsBase(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection { get; set; }

		#endregion

		#region Methods: Private

		private EntitySchemaQuery AddAllDayInCalendarColumns(EntitySchemaQuery esq) {
			esq.AddAllSchemaColumns();
			esq.AddColumn("DayOfWeek.Number");
			esq.AddColumn("DayType.IsWeekend");
			return esq;
		}

		private Guid GetParentCalendarId(Guid calendarId) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Calendar");
			esq.AddColumn("Parent");
			Entity entity = esq.GetEntity(UserConnection, calendarId);
			return entity != null
				? entity.GetTypedColumnValue<Guid>("ParentId")
				: Guid.Empty;
		}

		private Entity GetCalendarDayInner(IEnumerable<Guid> calendarIds, DateTime date,
			IEnumerable<Guid> ignoredIds) {
			object[] calendarsIdObjects = calendarIds.Select(id => (object)id).ToArray();
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "DayInCalendar");
			esq = AddAllDayInCalendarColumns(esq);
			esq.RowCount = 1;
			esq.AddColumn("Calendar.Depth").OrderByDesc(0);
			esq.AddColumn("Date").OrderByDesc(1);
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Calendar", calendarsIdObjects));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "DayOfWeek.Number",
				GetDayOfWeekNumber(date)));
			var dateFilterCollection = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			dateFilterCollection.Add(esq.CreateFilterWithParameters(FilterComparisonType.IsNull, "Date"));
			dateFilterCollection.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Date", date.Date));
			esq.Filters.Add(dateFilterCollection);
			if (ignoredIds != null && ignoredIds.Any()) {
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual, "Id",
					ignoredIds.Select(i => (object)i)));
			}
			return esq.GetEntityCollection(UserConnection).SingleOrDefault();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// ########## ##### ### # ###### ## ####.
		/// </summary>
		/// <param name="date">####</param>
		/// <returns>##### ### # ######</returns>
		public static int GetDayOfWeekNumber(DateTime date) {
			var dayOfWeekNumber = (int)date.Date.DayOfWeek;
			return dayOfWeekNumber == 0 ? 7 : dayOfWeekNumber;
		}

		/// <summary>
		/// ########## ####### ######## ############ ##########.
		/// </summary>
		/// <param name="baseCalendarId">######## #########</param>
		/// <returns>####### ############ ##########</returns>
		public IEnumerable<Guid> GetCalendarIdsChain(Guid baseCalendarId) {
			return GetCalendarIdsChain(baseCalendarId, GetParentCalendarId(baseCalendarId));
		}

		/// <summary>
		/// ########## ####### ######## ############ ##########.
		/// ##### ########### # ###### #### ######## ######### ### ## ######## # ##.
		/// </summary>
		/// <param name="baseCalendarId">######## #########</param>
		/// <param name="parentCalendarId">############ ######### ### #########</param>
		/// <returns>####### ############ ##########</returns>
		public IEnumerable<Guid> GetCalendarIdsChain(Guid baseCalendarId, Guid parentCalendarId) {
			var calendarChain = new List<Guid> {baseCalendarId};
			if (parentCalendarId != Guid.Empty) {
				calendarChain.Add(parentCalendarId);
				Guid nextParentCalendarId = GetParentCalendarId(parentCalendarId);
				while (nextParentCalendarId != Guid.Empty) {
					calendarChain.Add(nextParentCalendarId);
					nextParentCalendarId = GetParentCalendarId(nextParentCalendarId);
				}
			}
			return calendarChain;
		}

		/// <summary>
		/// ########## #### # #########, ############## ##### #### ######.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="dayOfWeekNumber">##### ### ######</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>#### ######</returns>
		public Entity GetWeekDay(IEnumerable<Guid> calendarIds, int dayOfWeekNumber,
			IEnumerable<Guid> ignoredIds = null) {
			object[] calendarsIdObjects = calendarIds.Select(id => (object)id).ToArray();
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "DayInCalendar");
			esq = AddAllDayInCalendarColumns(esq);
			esq.RowCount = 1;
			esq.AddColumn("Calendar.Depth").OrderByDesc();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Calendar", calendarsIdObjects));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "DayOfWeek.Number", dayOfWeekNumber));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.IsNull, "Date"));
			if (ignoredIds != null && ignoredIds.Any()) {
				esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual, "Id",
					ignoredIds.Select(i => (object)i)));
			}
			return esq.GetEntityCollection(UserConnection).SingleOrDefault();
		}

		/// <summary>
		/// ########## ########### ####.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="date">#### ### #######</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>########### ####</returns>
		public Entity GetCalendarDay(IEnumerable<Guid> calendarIds, DateTime date,
			IEnumerable<Guid> ignoredIds = null) {
			Entity day = GetCalendarDayInner(calendarIds, date, ignoredIds);
			if (day.GetTypedColumnValue<DateTime>("Date") == DateTime.MinValue) {
				day.SetColumnValue("Date", date.Date.Date);
			}
			return day;
		}

		/// <summary>
		/// ########## ########### ########### ####.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="date">#### ### #######</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>########### ########### ####</returns>
		public DayInCalendarExtendedV2 GetCalendarDayExtended(IEnumerable<Guid> calendarIds, DateTime date,
			IEnumerable<Guid> ignoredIds = null) {
			Entity day = GetCalendarDayInner(calendarIds, date, ignoredIds);
			var dayDate = day.GetTypedColumnValue<DateTime>("Date");
			var isMinDate = dayDate == DateTime.MinValue;
			if (isMinDate) {
				day.SetColumnValue("Date", date.Date);
			}
			return new DayInCalendarExtendedV2(day, !isMinDate);
		}

		/// <summary>
		/// ########## ### ###### ### ####### ##########.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>### ######</returns>
		public IEnumerable<Entity> GetWeekDays(IEnumerable<Guid> calendarIds,
				IEnumerable<Guid> ignoredIds = null) {
			for (int i = 1; i <= 7; i++) {
				yield return GetWeekDay(calendarIds, i, ignoredIds);
			}
		}

		/// <summary>
		/// ########## ###### ########### #### ### ####### ########## # ########## ##########.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="fromDate">###### #########</param>
		/// <param name="toDate">##### #########</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>########### ###</returns>
		public IEnumerable<Entity> GetCalendarDays(IEnumerable<Guid> calendarIds, DateTime fromDate,
			DateTime toDate, IEnumerable<Guid> ignoredIds = null) {
			while (fromDate.Date <= toDate.Date) {
				yield return GetCalendarDay(calendarIds, fromDate, ignoredIds);
				fromDate = fromDate.AddDays(1);
			}
		}

		/// <summary>
		/// ########## ###### ########### ########### #### ### ####### ########## # ########## ##########.
		/// </summary>
		/// <param name="calendarIds">############## ######## ########## ### #######</param>
		/// <param name="fromDate">###### #########</param>
		/// <param name="toDate">##### #########</param>
		/// <param name="ignoredIds">############## ####, ####### ## ##### ############ # #######</param>
		/// <returns>########### ########### ###</returns>
		public IEnumerable<DayInCalendarExtendedV2> GetCalendarDaysExtended(IEnumerable<Guid> calendarIds,
			DateTime fromDate, DateTime toDate, IEnumerable<Guid> ignoredIds = null) {
			while (fromDate.Date <= toDate.Date) {
				yield return GetCalendarDayExtended(calendarIds, fromDate, ignoredIds);
				fromDate = fromDate.AddDays(1);
			}
		}

		/// <summary>
		/// ########## ###### ########## ######## ####### ### ########### ###.
		/// </summary>
		/// <param name="dayInCalendarId">####</param>
		/// <returns>###### ####### ##########</returns>
		public IEnumerable<Entity> GetWorkingTimeIntervals(Guid dayInCalendarId) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "WorkingTimeInterval");
			esq.AddAllSchemaColumns();
			esq.Filters.Add(
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "DayInCalendar", dayInCalendarId));
			return esq.GetEntityCollection(UserConnection);
		}

		#endregion

	}

	#endregion

}
