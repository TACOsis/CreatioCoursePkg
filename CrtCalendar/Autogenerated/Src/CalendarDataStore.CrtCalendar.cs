namespace Terrasoft.Configuration.Calendars
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class : Public

	/// <summary>
	/// Calendar data store.
	/// </summary>
	public class CalendarDataStore<T> : ICalendarDataStore<T> where T : ICalendar<ICalendarDay>
	{

		#region Fields

		private readonly UserConnection _userConnection;
		private readonly Lazy<IDictionary<DayOfWeek, Guid>> _dayOfWeekMappingDataLazy;

		#endregion

		#region Constructors : Public

		public CalendarDataStore(UserConnection userConnection) {
			_userConnection = userConnection;
			_dayOfWeekMappingDataLazy = new Lazy<IDictionary<DayOfWeek, Guid>>(GetDayOfWeekMappingData);
		}

		#endregion

		#region Methods : Private

		/// <summary>
		/// Finds the time zone by identifier.
		/// </summary>
		/// <param name="timeZoneCode">The time zone code.</param>
		/// <returns></returns>
		private TimeZoneInfo FindTimeZoneById(string timeZoneCode) {
			TimeZoneInfo timeZoneInfo = TimeZoneInfo.FindSystemTimeZoneById(timeZoneCode);
			return timeZoneInfo;
		}

		/// <summary>
		/// Gets the time zone by calendar identifier.
		/// </summary>
		/// <param name="id">Calendar identifier.</param>
		/// <returns>Time zone.</returns>
		private TimeZoneInfo GetTimeZoneByCalendarId(Guid id) {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Calendar");
			var timeZoneCodeColumnName = esq.AddColumn("TimeZone.Code").Name;
			Entity calendar = esq.GetEntity(_userConnection, id);
			if(calendar == null) {
				return null;
			}
			var timeZoneCode = calendar.GetTypedColumnValue<string>(timeZoneCodeColumnName);
			return FindTimeZoneById(timeZoneCode);
		}

		/// <summary>
		/// Gets the time zone by system setting.
		/// </summary>
		/// <returns>Time zone.</returns>
		/// <exception cref="Exception">Unable to get time zone for calendar.</exception>
		private TimeZoneInfo GetTimeZoneBySystemSetting() {
			var unableToGetTimeZoneException = new Exception("Unable to get time zone for calendar.");
			var defaultTimeZoneId = SystemSettings.GetValue(_userConnection,
				CalendarConsts.DefaultTimeZoneCode, default(Guid));
			if(defaultTimeZoneId == default(Guid)) {
				throw unableToGetTimeZoneException;
			}
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "TimeZone");
			string timeZoneCodeColumnName = esq.AddColumn("Code").Name;
			Entity entity = esq.GetEntity(_userConnection, defaultTimeZoneId);
			if(entity == null) {
				throw unableToGetTimeZoneException;
			}
			var timeZoneCode = entity.GetTypedColumnValue<string>(timeZoneCodeColumnName);
			return FindTimeZoneById(timeZoneCode);
		}

		/// <summary>
		/// Fills calendar week template.
		/// </summary>
		/// <param name="calendar">Calendar.</param>
		private void FillWeekTemplate(T calendar) {
			var query = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "DayInCalendar");
			string dayOfWeekCode = query.AddColumn("DayOfWeek.Code").Name;
			string dayOfWeekNonWorking = query.AddColumn("DayType.NonWorking").Name;
			string dayType = query.AddColumn("DayType.Id").Name;
			var intervalToColumn = query.AddColumn("[WorkingTimeInterval:DayInCalendar].To");
			intervalToColumn.OrderByAsc(0);
			var intervalFromColumn = query.AddColumn("[WorkingTimeInterval:DayInCalendar].From");
			intervalFromColumn.OrderByAsc(1);
			string dayOfWeekFromPeriod = intervalFromColumn.Name;
			string dayOfWeekToPeriod = intervalToColumn.Name;
			query.Filters.Add(
				query.CreateFilterWithParameters(FilterComparisonType.Equal, "Calendar", calendar.Id));
			EntityCollection collection = query.GetEntityCollection(_userConnection);
			foreach(var record in collection) {
				var start = record.GetTypedColumnValue<DateTime>(dayOfWeekFromPeriod);
				var end = record.GetTypedColumnValue<DateTime>(dayOfWeekToPeriod);
				var dayCode = record.GetTypedColumnValue<string>(dayOfWeekCode);
				var dayOfWeek = (DayOfWeek)Enum.Parse(typeof(DayOfWeek), dayCode);
				ICalendarDay day = calendar.WeekTemplate.FirstOrDefault(item => item.DayOfWeek == dayOfWeek);
				if(day == default(ICalendarDay)) {
					var isNonWorking = record.GetTypedColumnValue<bool>(dayOfWeekNonWorking);
					var dayTypeUId = record.GetTypedColumnValue<Guid>(dayType);
					day = new CalendarDay {
						DayOfWeek = dayOfWeek,
						IsNonWorking = isNonWorking,
						DayTypeUId = dayTypeUId
					};
					calendar.WeekTemplate.Add(day);
				}
				if(!day.IsNonWorking) {
					day.WorkingIntervals.Add(new WorkingInterval(start.TimeOfDay, end.TimeOfDay));
				}
			}
		}

		/// <summary>
		/// Fills calendar day offs.
		/// </summary>
		/// <param name="calendar">Calendar.</param>
		private void FillDayOffInfo(T calendar) {
			var query = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "DayOff");
			string date = query.AddColumn("Date").Name;
			string dayType = query.AddColumn("DayType.Id").Name;
			string dayOffNonWorking = query.AddColumn("DayType.NonWorking").Name;
			string dayOffFromPeriod = query.AddColumn("[WorkingTimeInterval:DayOff].From").Name;
			string dayOffToPeriod = query.AddColumn("[WorkingTimeInterval:DayOff].To").Name;
			query.Filters.Add(query.CreateFilterWithParameters(FilterComparisonType.Equal, "Calendar", calendar.Id));
			EntityCollection collection = query.GetEntityCollection(_userConnection);
			foreach(var record in collection) {
				var start = record.GetTypedColumnValue<DateTime>(dayOffFromPeriod);
				var end = record.GetTypedColumnValue<DateTime>(dayOffToPeriod);
				var dayTypeId = record.GetTypedColumnValue<Guid>(dayType);
				var isNonWorking = record.GetTypedColumnValue<bool>(dayOffNonWorking);
				if(!isNonWorking && (start == default(DateTime) || end == default(DateTime))) {
					continue;
				}
				var dayDate = record.GetTypedColumnValue<DateTime>(date);
				ICalendarDay dayOff = calendar.DayOffs.FirstOrDefault(item => item.CalendarDateTime.Date == dayDate);
				if(dayOff == default(ICalendarDay)) {
					dayOff = new CalendarDay {
						CalendarDateTime = dayDate,
						IsNonWorking = isNonWorking,
						DayTypeUId = dayTypeId,
						DayOfWeek = dayDate.DayOfWeek
					};
					calendar.DayOffs.Add(dayOff);
				}
				if(!dayOff.IsNonWorking) {
					dayOff.WorkingIntervals.Add(new WorkingInterval(start.TimeOfDay, end.TimeOfDay));
				}
			}
		}

		private Guid GetTimeZoneId(string code) {
			var query = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "TimeZone");
			string idColumnName = query.AddColumn("Id").Name;
			query.Filters.Add(query.CreateFilterWithParameters(FilterComparisonType.Equal, "Code", code));
			EntityCollection collection = query.GetEntityCollection(_userConnection);
			Entity entity = collection.First();
			return entity.GetTypedColumnValue<Guid>(idColumnName);
		}

		private Guid GetDayOfWeekId(DayOfWeek dayOfWeek) {
			IDictionary<DayOfWeek, Guid> mappingData = _dayOfWeekMappingDataLazy.Value;
			return mappingData[dayOfWeek];
		}

		private IDictionary<DayOfWeek, Guid> GetDayOfWeekMappingData() {
			IDictionary<DayOfWeek, Guid> result = new Dictionary<DayOfWeek, Guid>();
			var query = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "DayOfWeek");
			string idColumnName = query.AddColumn("Id").Name;
			string codeColumnsName = query.AddColumn("Code").Name;
			EntityCollection collection = query.GetEntityCollection(_userConnection);
			foreach(Entity entity in collection) {
				Guid id = entity.GetTypedColumnValue<Guid>(idColumnName);
				string dayCode = entity.GetTypedColumnValue<string>(codeColumnsName);
				DayOfWeek dayOfWeek = (DayOfWeek)Enum.Parse(typeof(DayOfWeek), dayCode);
				result.Add(dayOfWeek, id);
			}
			return result;
		}

		private Entity GetCalendarEntity() {
			EntitySchema schema = _userConnection.EntitySchemaManager.FindInstanceByName("Calendar");
			Entity entity = schema.CreateEntity(_userConnection);
			return entity;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Returns state of calendar.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		/// <returns>Success of operation.</returns>
		protected virtual StoringObjectState GetCalendarState(T calendar) {
			Entity entity = GetCalendarEntity();
			StoringObjectState state = StoringObjectState.New;
			if(entity.FetchFromDB(calendar.Id)) {
				state = StoringObjectState.Changed;
			}
			return state;
		}

		/// <summary>
		/// Applies change.
		/// </summary>
		/// <param name="state">Calendar state.</param>
		/// <param name="calendar">Calendar dummy.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool ApplyChange(StoringObjectState state, T calendar) {
			bool result;
			switch(state) {
				case StoringObjectState.New: {
						result = InsertCalendar(calendar);
						break;
					}
				case StoringObjectState.Changed: {
						result = UpdateCalendar(calendar);
						break;
					}
				default:
					return false;
			}
			return result;
		}

		/// <summary>
		/// Inserts calendar.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool InsertCalendar(T calendar) {
			Guid timeZoneId = GetTimeZoneId(calendar.TimeZone.Id);
			Guid calendarId = calendar.Id;
			Entity entity = GetCalendarEntity();
			entity.SetColumnValue("Id", calendarId);
			entity.SetColumnValue("TimeZoneId", timeZoneId);
			bool result = entity.Save(validateRequired: false);
			if(result) {
				result = InsertDaysInCalendar(calendarId, calendar.WeekTemplate);
			}
			if(result) {
				result = InsertDayOffs(calendarId, calendar.DayOffs);
			}
			return result;
		}

		/// <summary>
		/// Inserts day offs.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <param name="dayOffs">Day offs.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool InsertDayOffs(Guid calendarId, IEnumerable<ICalendarDay> dayOffs) {
			if(dayOffs.IsNullOrEmpty()) {
				return true;
			}
			bool result = false;
			EntitySchema schema = _userConnection.EntitySchemaManager.FindInstanceByName("DayOff");
			foreach(ICalendarDay day in dayOffs) {
				Entity entity = schema.CreateEntity(_userConnection);
				entity.SetColumnValue("CalendarId", calendarId);
				entity.SetColumnValue("DayTypeId", day.DayTypeUId);
				entity.SetColumnValue("Date", day.CalendarDateTime);
				result = entity.Save(validateRequired: false);
				if(!result) {
					return false;
				}
				result = InsertWorkingTimeIntervals("DayOffId", entity.PrimaryColumnValue, day.WorkingIntervals);
			}
			return result;
		}

		/// <summary>
		/// Inserts days in calendar.
		/// </summary>
		/// <param name="calendarId">Calendar identifier.</param>
		/// <param name="weekTemplate">Days in calendar.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool InsertDaysInCalendar(Guid calendarId, IEnumerable<ICalendarDay> weekTemplate) {
			if(weekTemplate.IsNullOrEmpty()) {
				return true;
			}
			bool result = false;
			EntitySchema schema = _userConnection.EntitySchemaManager.FindInstanceByName("DayInCalendar");
			foreach(ICalendarDay day in weekTemplate) {
				Guid dayOfWeekId = GetDayOfWeekId(day.DayOfWeek);
				Entity entity = schema.CreateEntity(_userConnection);
				entity.SetColumnValue("DayTypeId", day.DayTypeUId);
				entity.SetColumnValue("DayOfWeekId", dayOfWeekId);
				entity.SetColumnValue("CalendarId", calendarId);
				result = entity.Save(validateRequired: false);
				if(!result) {
					return false;
				}
				result = InsertWorkingTimeIntervals("DayInCalendarId", entity.PrimaryColumnValue, day.WorkingIntervals);
			}
			return result;
		}

		/// <summary>
		/// Inserts working time intervals.
		/// </summary>
		/// <param name="columnName">Column name.</param>
		/// <param name="columnValue">Calumn value.</param>
		/// <param name="workingIntervals">Working time intervals.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool InsertWorkingTimeIntervals(string columnName, Guid columnValue,
				IEnumerable<WorkingInterval> workingIntervals) {
			if(workingIntervals.IsNullOrEmpty()) {
				return true;
			}
			bool result = false;
			EntitySchema schema = _userConnection.EntitySchemaManager.FindInstanceByName("WorkingTimeInterval");
			foreach(WorkingInterval interval in workingIntervals) {
				Entity entity = schema.CreateEntity(_userConnection);
				entity.SetColumnValue(columnName, columnValue);
				entity.SetColumnValue("From", interval.Start);
				entity.SetColumnValue("To", interval.End);
				result = entity.Save(validateRequired: false);
				if(!result) {
					return false;
				}
			}
			return result;
		}

		/// <summary>
		/// Updates calendar.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		/// <returns>Success of operation.</returns>
		protected virtual bool UpdateCalendar(T calendar) {
			throw new NotImplementedException();
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Loads calendar information.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		public void Load(ref T calendar) {
			calendar.TimeZone = GetTimeZoneByCalendarId(calendar.Id);
			if(calendar.TimeZone == null) {
				calendar.TimeZone = GetTimeZoneBySystemSetting();
			}
			FillWeekTemplate(calendar);
			FillDayOffInfo(calendar);
		}

		/// <summary>
		/// Saves changes of calendar.
		/// </summary>
		/// <param name="calendar">Calendar dummy.</param>
		/// <returns>Success of operation.</returns>
		public bool Save(T calendar) {
			if(calendar == null) {
				throw new ArgumentNullException("calendar");
			}
			StoringObjectState state = GetCalendarState(calendar);
			using(DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				try {
					if(ApplyChange(state, calendar)) {
						dbExecutor.CommitTransaction();
						return true;
					}
				} catch {
					dbExecutor.RollbackTransaction();
					throw;
				}
				dbExecutor.RollbackTransaction();
				return false;
			}
		}

		#endregion

	}

	#endregion

}
