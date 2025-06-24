namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Globalization;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using global::Common.Logging;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: BaseTimeZoneMacrosConverter

	/// <summary>
	/// Represents base converter for DateTime macroses.
	/// </summary>
	public abstract class BaseTimeZoneMacrosConverter
	{

		#region Properties: Protected

		private static ILog _log;
		/// <summary>
		/// Time zone converter log.
		/// </summary>
		protected static ILog Log => _log ?? (_log = LogManager.GetLogger("TimeZoneMacrosConverter"));

		/// <summary>
		/// User connection.
		/// </summary>
		protected UserConnection UserConnection {
			get;
		}

		/// <summary>
		/// The map of replacements.
		/// It may be used to provide the backward macros compatibility or to replace any part of the e-mail text data.
		/// </summary>
		protected Dictionary<string, string> ReplacementMap {
			get;
			set;
		}

		/// <summary>
		/// Default dateTime format.
		/// </summary>
		private string _dateTimeFormat = @"M/dd/yyyy hh:mm tt";
		protected string DateTimeFormat {
			get => _dateTimeFormat;
			set => _dateTimeFormat = value;
		}

		/// <summary>
		/// Language code.
		/// </summary>
		protected string LanguageCode {
			get;
			set;
		}

		/// <summary>
		/// Entity schema name.
		/// </summary>
		protected string SchemaName {
			get;
		}

		#endregion

		#region Constructors: Protected

		/// <summary>
		/// Initializes new instance of <see cref="BaseTimeZoneMacrosConverter"/> class.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="schemaName">Entity schema name.</param>
		protected BaseTimeZoneMacrosConverter(UserConnection userConnection, string schemaName) {
			UserConnection = userConnection;
			SchemaName = schemaName;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Returns specific time zone by entity.
		/// </summary>
		/// <param name="entityRecordId">Entity record identifier.</param>
		/// <returns>Time zone.</returns>
		protected abstract TimeZoneInfo GetTimeZone(Guid entityRecordId);

		/// <summary>
		/// Gets columns with type <paramref name="TType"/> of an entity schema.
		/// </summary>
		/// <remarks>Looks like a core method, but possible will be never used elsewhere.</remarks>
		/// <param name="schemaName">Entity schema name.</param>
		/// <typeparam name="TType">Properties type.</typeparam>
		/// <returns>Column names.</returns>
		protected virtual IEnumerable<string> GetSchemaColumnsOfType<TType>(string schemaName) {
			EntitySchema schema = UserConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			return schema.Columns
				.Where(column => column.DataValueType.ValueType == typeof(TType))
				.Select(column => column.Name);
		}

		/// <summary>
		/// Gets columns with client type <paramref name="clientTypeName"/> of an entity schema.
		/// </summary>
		/// <param name="schemaName">Entity schema name.</param>
		/// <param name="clientTypeName">Client user type.</typeparam>
		/// <returns>Column names.</returns>
		protected virtual IEnumerable<string> GetSchemaColumnsOfDataTypeName(string schemaName, string clientTypeName) {
			EntitySchema schema = UserConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			return schema.Columns
				.Where(column => column.DataValueType.Name == clientTypeName)
				.Select(column => column.Name);
		}

		/// <summary>
		/// Gets formatted date and time by the following format:
		/// M/dd/yyyy HH:mm tt (UTC+offset).
		/// </summary>
		/// <param name="dt">Date and time to be formatted.</param>
		/// <param name="timeZone">Time zone to get formatted datetime.</param>
		/// <returns>Fortmatted datetime.</returns>
		protected virtual string GetFormattedDateTime(DateTime dt, TimeZoneInfo timeZone) {
			string utcOffset = GetUtcOffset(timeZone);
			if (LanguageCode.IsNotNullOrEmpty()) {
				string formattedDateTime;
				try {
					CultureInfo ci = new CultureInfo(LanguageCode);
					formattedDateTime = dt.ToString(ci);
				} catch (CultureNotFoundException ex) {
					Log.ErrorFormat("Language with code '{0}' was not found: {1}", LanguageCode, ex.Message);
					formattedDateTime = dt.ToString(DateTimeFormat, CultureInfo.InvariantCulture);
				}
				return $"{formattedDateTime} {utcOffset}";
			}
			return $"{dt.ToString(DateTimeFormat, CultureInfo.InvariantCulture)} {utcOffset}";
		}

		/// <summary>
		/// Return UTC offset by time zone.
		/// </summary>
		/// <param name="timeZone">Time zone to get the offset.</param>
		/// <returns>UTC offset.</returns>
		protected virtual string GetUtcOffset(TimeZoneInfo timeZone) {
			const string utcOffsetPattern = @"\(.*\)";
			string utcOffset = string.Empty;
			if (Equals(timeZone, TimeZoneInfo.Utc)) {
				utcOffset = timeZone.DisplayName;
			} else {
				Match match = Regex.Match(timeZone.DisplayName, utcOffsetPattern);
				utcOffset = match.Success ? match.Value : string.Empty;
			}
			return utcOffset;
		}

		/// <summary>
		/// Converts time zone macroses for entity with identifier <paramref name="entityRecordId"/> to
		/// destination time zone <paramref name="destinationTimeZone"/>.
		/// </summary>
		/// <param name="entityRecordId">Entity record identifier.</param>
		/// <param name="destinationTimeZone">Time zone for conversion.</param>
		protected virtual void ConvertTimeZone(Guid entityRecordId, TimeZoneInfo destinationTimeZone) {
			const string macrosFormat = @"[#{0}#]";
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, SchemaName);
			IEnumerable<string> columnNames = GetSchemaColumnsOfDataTypeName(SchemaName, "DateTime");
			foreach (string columnName in columnNames) {
				esq.AddColumn(columnName);
			}
			var entity = esq.GetEntity(UserConnection, entityRecordId);
			if (entity == null) {
				Log.ErrorFormat($"{SchemaName} record with identifier '{entityRecordId}' wasn't found.");
				return;
			}
			foreach (string columnName in columnNames) {
				DateTime dateTime = entity.GetTypedColumnValue<DateTime>(columnName);
				if (dateTime != default(DateTime)) {
					DateTime converted = TimeZoneInfo.ConvertTime(dateTime, UserConnection.CurrentUser.TimeZone, destinationTimeZone);
					string macroReplacement = GetFormattedDateTime(converted, destinationTimeZone);
					ReplacementMap.Add(string.Format(macrosFormat, columnName), macroReplacement);
				}
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Replaces DateTime macroces from the given string <paramref name="source"/>.
		/// </summary>
		/// <param name="entityRecordId">Entity record identifier.</param> 
		/// <param name="source">Source.</param>
		/// <returns>Source with replacements.</returns>
		public virtual string ReplaceDateTimeMacroses(Guid entityRecordId, string source) {
			ReplacementMap = new Dictionary<string, string>();
			string result = source;
			if (SystemSettings.GetValue(UserConnection, "UseMacrosTimeZoneConversion", false)) {
				TimeZoneInfo destinationTimeZone = GetTimeZone(entityRecordId);
				if (destinationTimeZone != null) {
					ConvertTimeZone(entityRecordId, destinationTimeZone);
					foreach (var oldMacros in ReplacementMap.Keys) {
						var newMacros = ReplacementMap[oldMacros];
						result = result.Replace(oldMacros, newMacros);
					}
				} else {
					Log.Error($"TimeZone for macros conversion wasn't found. Schema name - '{SchemaName}', entityRecordId - '{entityRecordId}'");
				}
			}
			return result;
		}

		/// <summary>
		/// Replaces DateTime macroces from the given string <paramref name="source"/>.
		/// </summary>
		/// <param name="entityRecordId">Entity record identifier.</param> 
		/// <param name="source">Source.</param>
		/// <param name="languageCode">Language code for correct datetime display.</param>
		/// <returns>Source with replacements.</returns>
		public virtual string ReplaceDateTimeMacroses(Guid entityRecordId, string source, string languageCode) {
			LanguageCode = languageCode;
			return ReplaceDateTimeMacroses(entityRecordId, source);
		}

		#endregion

	}

	#endregion

}
