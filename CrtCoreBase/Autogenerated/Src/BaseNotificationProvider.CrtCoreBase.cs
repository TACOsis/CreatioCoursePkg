namespace Terrasoft.Configuration
{
	using System;
	using System.Data;
	using System.Collections.Generic;
	using HttpUtility = System.Web.HttpUtility;
	using System.Text.RegularExpressions;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;

	#region Class: BaseNotificationProvider

	/// <summary>
	/// Base class of provider notification.
	/// </summary>
	public abstract class BaseNotificationProvider : INotificationProvider
	{

		#region Fields: Private

		private List<string> _columns = new List<string>();

		#endregion

		#region Fields: Protected

		protected string template = string.Empty;
		protected Dictionary<string, object> parameters;

		#endregion

		#region Properties: Public

		private readonly UserConnection _userConnection;
		public UserConnection UserConnection {
			get {
				return _userConnection;
			}
		}

		#endregion

		#region Constructor: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="NotificationProvider"/> class with parameters.
		/// </summary>
		/// <param name="userConnection">UserConnection.</param>
		public BaseNotificationProvider(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="NotificationProvider"/> class with parameters.
		/// </summary>
		/// <param name="parameters">Dictionary of parameters.</param>
		public BaseNotificationProvider(Dictionary<string, object> parameters) {
			_userConnection = (UserConnection)parameters["userConnection"];
			SetParameters(parameters);
			SetColumns(_columns);
			template = UserConnection.GetLocalizableString("BaseNotificationProvider", "RemindingTemplate");
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Returns the value of the specified field from means of reading.
		/// </summary>
		/// <param name="reader">The means of reading.</param>
		/// <param name="columnName">Column name.</param>
		/// <returns>A string from specified field.</returns>
		private string GetValue(IDataReader reader, string columnName) {
			int ordinal = reader.GetOrdinal(columnName);
			string value = reader.GetValue(ordinal).ToString();
			return value;
		}

		/// <summary>
		/// Returns the dictionary of the column values.
		/// </summary>
		/// <param name="reader">The means of reading.</param>
		/// <returns>A <see cref="Dictionary<string, string>"/> of values.</returns>
		private Dictionary<string, string> GetDictionaryColumnValues(IDataReader reader) {
			var result = new Dictionary<string, string>();
			foreach (var column in _columns) {
				var columnName = (string)column;
				string value = GetValue(reader, columnName);
				result.Add(columnName, value);
			}
			return result;
		}

		private Dictionary<string, string> GetColumnsValues(IDataReader reader, Select select) {
			var columns = select.Columns;
			var result = new Dictionary<string, string>();
			foreach (var column in columns) {
				var columnName = column.Alias;
				string value = GetValue(reader, columnName);
				result.Add(columnName, value);
			}
			return result;
		}

		#endregion

		#region Method: Protected

		protected virtual DateTime GetCurrentUniversalTime() {
			return DateTime.Now.ToUniversalTime();
		}

		protected virtual Select GetBaseSelect() {
			return new Select(UserConnection)
				.From("Reminding");
		}

		protected virtual void AddColumns(Select select) {
			throw new NotImplementedException();
		}

		protected virtual void JoinTables(Select select) {
			throw new NotImplementedException();
		}

		protected virtual void AddConditions(Select select) {
			DateTime getCurrentUniversalTime = GetCurrentUniversalTime();
			select.Where("RemindTime").IsLessOrEqual(Column.Parameter(getCurrentUniversalTime))
				.And("IsRead").IsEqual(Column.Parameter(false));
		}

		protected virtual INotificationInfo GetRecordNotificationInfo(Dictionary<string, string> dictionaryColumnValues) {
			throw new NotImplementedException();
		}

		protected Select GetSelect() {
			Select select = GetBaseSelect();
			AddColumns(select);
			JoinTables(select);
			AddConditions(select);
			return select;
		}

		protected IEnumerable<INotificationInfo> ExecuteNotificationInfoReader(Select select) {
			var result = new List<INotificationInfo>();
			using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
				using (IDataReader reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						Dictionary<string, string> dictionaryColumnValues = GetColumnsValues(reader, select);
						INotificationInfo rowNotificationInfo = GetRecordNotificationInfo(dictionaryColumnValues);
						result.Add(rowNotificationInfo);
					}
				}
			}
			return result;
		}

		protected IEnumerable<INotificationInfo> GetNotificationsInfos() {
			Select select = GetSelect();
			AddActiveUserFilter(select);
			IEnumerable<INotificationInfo> executeResult = ExecuteNotificationInfoReader(select);
			return executeResult;
		}
		
		protected Guid GetNotificationImage(string schemaName, Guid? notificationTypeId) {
			var notificationSettingsRepository = ClassFactory.Get<NotificationSettingsRepository>(
				new ConstructorArgument("userConnection", UserConnection));
			var entitySchema = UserConnection.EntitySchemaManager.FindItemByName(schemaName);
			Guid imageGuid = notificationSettingsRepository.GetNotificationImage(entitySchema.UId, notificationTypeId);
			return imageGuid;
		}

		/// <summary>
		/// Exetutes the <see cref="Select"/> and build <see cref="string[]"/> of the results predicate. 
		/// </summary>
		/// <param name="select">A query for execute.</param>
		/// <returns>An <see cref="string[]"/> that contains elements from executing predicate.</returns>
		protected string[] ExecuteReader(Select select) {
			var result = new List<string>();
			if (select != null) {
				using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
					using (IDataReader reader = select.ExecuteReader(dbExecutor)) {
						while (reader.Read()) {
							Dictionary<string, string> dictionaryColumnValues = GetDictionaryColumnValues(reader);
							result.Add(GetRecordResult(dictionaryColumnValues));
						}
					}
				}
			}
			return result.ToArray();
		}

		protected virtual Select GetActiveSysAdminUnitSelect() {
			return new Select(UserConnection)
					.Column("Id")
				.From("SysUserSession")
				.Where("SysUserSession", "SysUserId").IsEqual("SysAdminUnit", "Id")
					.And("SysUserSession", "SessionEndDate").IsNull()
					.And("SysUserSession", "SessionEndMethod").IsEqual(Column.Parameter(0)) as Select;
		}

		protected virtual void AddActiveUserFilter(Select select) {
			select
				.Column("SysAdminUnit", "Id").As("SysAdminUnitId")
				.And("SysAdminUnit", "Active").IsEqual(Column.Parameter(true));
		}
		
		#endregion

		#region Methods: Public

		/// <summary>
		/// Appending name of columns for creating dictionary of the values.
		/// </summary>
		/// <param name="columns">A <see cref="List<T></see>"/> columns.</param>
		public abstract void SetColumns(List<string> columns);

		/// <summary>
		/// Returns the record result.
		/// </summary>
		/// <param name="dictionaryColumnValues">A <see cref="Dictionary<string, string>"> column value.</param>
		/// <returns>A <see cref="Strng">.</returns>
		public abstract string GetRecordResult(Dictionary<string, string> dictionaryColumnValues);

		/// <summary>
		///  Returns config for popup.
		/// </summary>
		/// <returns>A string the remindings.</returns>
		public string GetPopupConfig() {
			Select select = GetEntitiesSelect();
			string[] result = ExecuteReader(select);
			return String.Join(", ", result);
		}

		#region INotificationProvider Members

		/// <summary>
		/// Return number of notification.
		/// </summary>
		/// <returns>A number of notification.</returns>
		public virtual int GetCount() {
			Select entitySelect = GetEntitiesSelect();
			Select countSelect = new Select(UserConnection)
				.Column(Func.Count("Id"))
				.Distinct()
				.From(entitySelect).As("CountSelect") as Select;
			int result = countSelect.ExecuteScalar<int>();
			return result;
		}

		/// <summary>
		/// Returns <see cref="Select" of entity./>
		/// </summary>
		/// <returns>A <see cref="Select"/> instance.</returns>
		public abstract Select GetEntitiesSelect();

		/// <summary>
		/// Set the parameters.
		/// </summary>
		/// <param name="parameters">Dictionary of parameters.</param>
		public void SetParameters(Dictionary<string, object> parameters) {
			this.parameters = parameters;
		}

		#endregion

		#endregion

	}

	#endregion

	#region Class: PopupData

	[JsonObject(MemberSerialization.OptIn)]
	public class PopupData
	{
		[JsonProperty]
		public string Title {
			get;
			set;
		}
		[JsonProperty]
		public string Body {
			get;
			set;
		}
		[JsonProperty]
		public string ImageId {
			get;
			set;
		}
		[JsonProperty]
		public string EntityId {
			get;
			set;
		}
		[JsonProperty]
		public string EntitySchemaName {
			get;
			set;
		}
		[JsonProperty]
		public string MessageId {
			get;
			set;
		}
		[JsonProperty]
		public string LoaderName {
			get;
			set;
		}

		/// <summary>
		/// Returns the serialize string.
		/// </summary>
		/// <returns>A <see cref="String"/></returns>
		public string Serialize() {
			return JsonConvert.SerializeObject(this);
		}
	}

	#endregion

	#region Class: NotificationProviderHelper

	public static class NotificationProviderHelper
	{
		/// <summary>
		/// Returns the value of the localization string.
		/// </summary>
		/// <param name="name">A name of the localization string.</param>
		/// <returns>A value of the localization string.</returns>
		public static string GetLocalizableString(this UserConnection userConnection, string className, string resourceName) {
			var localizableString = string.Format("LocalizableStrings.{0}.Value", resourceName);
			string result = new LocalizableString(userConnection.ResourceStorage,
				className, localizableString);
			return result;
		}

		/// <summary>
		/// Remove HTMl tags.
		/// </summary>
		/// <param name="value">A string with the HTML tags.</param>
		/// <returns>A <see cref="string"/></returns>
		public static string RemoveHtmlTags(this string value) {
			return Regex.Replace(value, @"<[^>]*>|\t|\n", string.Empty);
		}

		/// <summary>
		/// Converts a string that has been HTML-encoded for HTTP transmission into a decoded string.
		/// </summary>
		/// <param name="value">The string to decode.</param>
		/// <returns>A decoded string.</returns>
		public static string HtmlDecode(this string value) {
			return HttpUtility.HtmlDecode(value);
		}

		/// <summary>
		/// Returns cleaner string.
		/// </summary>
		/// <param name="value">The string to cleaning.</param>
		/// <returns>A cleaned string</returns>
		public static string GetClearString(this string value) {
			value = value.RemoveHtmlTags();
			value = value.HtmlDecode();
			return value;
		}

	}

	#endregion

}
