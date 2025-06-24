namespace Terrasoft.Configuration
{
	using IntegrationApi.Calendar.DTO;
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.IO;
	using System.Linq;
	using System.Text;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;

	#region Struct: Public

	public struct ActivityDefValues {
		public DateTime StartDate;
		public DateTime DueDate;
		public Guid AuthorId;
		public string AuthorName;
		public Guid OwnerId;
		public string OwnerName;
	}

	#endregion

	#region Class: ActivityUtils

	/// <summary>
	/// Contains utility methods for work with <see cref="Activity"/> entity.
	/// </summary>
	public static class ActivityUtils {

		#region Constants: Public

		/// <summary>
		/// Cache key for <see cref="Activity"/> start date column.
		/// </summary>
		public const string StartDateKey = "StartDate";

		/// <summary>
		/// Cache key for <see cref="Activity"/> due date column.
		/// </summary>
		public const string DueDateKey = "DueDate";

		/// <summary>
		/// Cache key for <see cref="Activity"/> show in schedule date column.
		/// </summary>
		public const string ShowInScheduleKey = "ShowInSchedule";

		/// <summary>
		/// Max length of Title column for emails. If value more than MaxTitleLength symbols it will be truncated.
		/// </summary>
		public const int MaxTitleLength = 256;

		/// <summary>
		/// When value of email Title truncated, last symbols replaced with this replacer value.
		/// </summary>
		public const string defaultReplacer = "...";

		/// <summary>
		/// Cache group name for <see cref="Activity"/> entity.
		/// </summary>
		public const string ActivityCacheGroupName = "ActivityCache";

		///<summary>
		///Date time format for mail hash generation.
		///</summary
		public const string DateTimeToStringFormat = "yyyy-MM-dd HH:mm:ss.fff";

		#endregion

		#region Methods: Private

		private static string GetLczValue(UserConnection userConnection, string key) {
			return new LocalizableString(userConnection.ResourceStorage, "ActivityUtils",
					$"LocalizableStrings.{key}.Value").ToString();
		}

		private static string GetLocNoSubject(UserConnection userConnection) {
			return GetLczValue(userConnection, "LocNoSubject");
		}

		private static int GetActivityFilePrimaryDisplayColumnSize(UserConnection userConnection) {
			var schema = userConnection.EntitySchemaManager.GetInstanceByName("ActivityFile");
			var column = schema.GetPrimaryDisplayColumn();
			var columnType = column.DataValueType;
			var columnSize = (int)columnType.GetPropertyValue("Size");
			return columnSize;
		}

		/// <summary>
		/// Returns hashes collection for <paramref name="emailData"/>.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="emailData">Email Message info.</param>
		/// <returns>Email hashes collection.</returns>
		private static List<string> GetEmailHashes(UserConnection userConnection, EmailHashDTO emailData) {
			List<string> hashes = new List<string>();
			var hashComposers = ClassFactory.GetAll<IEmailHashComposer>();
			foreach (var hashComposer in hashComposers) {
				hashes.AddRangeIfNotExists(hashComposer.GetHashes(userConnection, emailData));
			}
			return hashes;
		}

		/// <summary>
		/// Returns existing email ids select, selected by <paramref name="hashes"/>.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="hashes">Email hashes collection.</param>
		/// <returns>Existing email ids select.</returns>
		private static Select GetEmailIdsSelect(UserConnection userConnection, IEnumerable<string> hashes) {
			return new Select(userConnection)
					.Column("Id")
				.From("Activity")
				.Where("MailHash").In(Column.Parameters(hashes)) as Select;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns unique hash for email instance. Obsolete implementation.
		/// </summary>
		/// <param name="body">Email body.</param>
		/// <param name="title">Email subject.</param>
		/// <param name="sender">Email sender address.</param>
		/// <param name="recepient">Email recepient.</param>
		/// <param name="copyRecepient">Email copy recepient.</param>
		/// <param name="emailDirectionType">Email direction type (incoming / outgoing).</param>
		/// <param name="sendDate">Email send date.</param>
		/// <returns>Unique hash for email instance.</returns>
		[Obsolete("Use GetEmailHash(senDate, title, body, timeZoneInfo)")]
		public static string GetEmailHash(string body, string title, string sender, string recepient, string copyRecepient, string emailDirectionType, DateTime sendDate) {
			return FileUtilities.GetMD5Hash(Encoding.Unicode.GetBytes(body + title + sender + recepient + copyRecepient + emailDirectionType + sendDate.ToString()));
		}

		/// <summary>
		/// Returns unique hash for email instance.  Send date would be converted to UTC using server timezone. 
		/// Obsolete implementation.
		/// </summary>
		/// <param name="sendDate">Email send date.</param>
		/// <param name="title">Email subject.</param>
		/// <param name="body">Email body.</param>
		/// <returns>Unique hash for email instance.</returns>
		[Obsolete("Use GetEmailHash(senDate, title, body, timeZoneInfo)")]
		public static string GetEmailHash(DateTime sendDate, string title, string body) {
			string plainTextBody = StringUtilities.ConvertHtmlToPlainText(body);
			DateTime utcSendDate = sendDate.ToUniversalTime();
			return FileUtilities.GetMD5Hash(Encoding.Unicode.GetBytes(plainTextBody + title + 
				utcSendDate.ToString(DateTimeToStringFormat)));
		}

		/// <summary>
		/// Returns unique hash for email instance. Send date would be converted to UTC using user timezone.
		/// </summary>
		/// <param name="sendDate">Email send date.</param>
		/// <param name="title">Email subject.</param>
		/// <param name="body">Email body.</param>
		/// <param name="timeZoneInfo">User timezone.</param>
		/// <param name="deleteWhiteSpaces">Flag, indicates if need to delete white spaces.</param>
		/// <param name="dateTimeFormat">If <paramref name="deleteWhiteSpaces"/> is true,
		///  then this parameter used for send date serialization.</param>
		///  <param name="fixTitleWhitespaces">Fix repeating whitespaces in title flag.</param>
		/// <returns>Unique hash for email instance.</returns>
		public static string GetEmailHash(DateTime sendDate, string title, string body, TimeZoneInfo timeZoneInfo,
				bool deleteWhiteSpaces = true, string dateTimeFormat = "yyyy-MM-dd HH:mm", bool fixTitleWhitespaces = true) {
			body = body ?? string.Empty;
			string plainTextBody = StringUtilities.ConvertHtmlToPlainText(body);
			string dateTimeToStringFormat = DateTimeToStringFormat;
			if (deleteWhiteSpaces) {
				plainTextBody = StringUtilities.DeleteWhiteSpaces(plainTextBody);
				dateTimeToStringFormat = dateTimeFormat;
			}
			DateTime utcSendDate = new DateTime(sendDate.Ticks, DateTimeKind.Unspecified);
			utcSendDate = TimeZoneInfo.ConvertTimeToUtc(utcSendDate, timeZoneInfo);
			var fixedTitle = fixTitleWhitespaces ? FixWhitespaces(title) : title;
			return FileUtilities.GetMD5Hash(Encoding.Unicode.GetBytes(plainTextBody + fixedTitle +
				utcSendDate.ToString(dateTimeToStringFormat)));
		}

		/// <summary>
		/// Returns mail hash.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="sendDate">Email send date.</param>
		/// <param name="subject">Email subject.</param>
		/// <param name="body">Email body.</param>
		/// <param name="timeZoneInfo">Current user timezone.</param>
		/// <returns>Email hash.</returns>
		public static string GetEmailHash(UserConnection userConnection, DateTime sendDate, string subject, string body,
				TimeZoneInfo timeZoneInfo) {
			var key = Terrasoft.Core.Configuration.SysSettings.GetValue(userConnection, "MailHashComposer", "BaseEmailHashComposer");
			var composer = ClassFactory.Get<IEmailHashComposer>(key);
			return composer.GetDefaultHash(userConnection, new EmailHashDTO {
				SendDate = sendDate,
				Subject = subject,
				Body = body,
				TimeZone = timeZoneInfo
			});
		}

		/// <summary>
		/// Fixes repeating and trail spaces in string.
		/// </summary>
		/// <param name="rawString">String to fix.</param>
		/// <returns><paramref name="rawString"/> without repeating and trail whitespaces.</returns>
		public static string FixWhitespaces(string rawString) {
			var parts = rawString.Split(new char[0], StringSplitOptions.RemoveEmptyEntries);
			return string.Join(" ", parts).Trim();
		}

		///// <summary>
		///// Sets email relations.
		///// </summary>
		///// <param name="userConnection">User Connection.</param>
		///// <param name="activity">Email activity.</param>
		//public static void SetEmailRelations(UserConnection userConnection, Activity activity) {
		//	SetEmailRelations(userConnection, (Entity) activity);
		//}

		/// <summary>
		/// Sets email relations.
		/// </summary>
		/// <param name="userConnection">User Connection.</param>
		/// <param name="activity">Email activity.</param>
		public static void SetEmailRelations(UserConnection userConnection, Entity activity) {
			var autoEmailRelation = new AutoEmailRelation.AutoEmailRelation(userConnection);
			autoEmailRelation.ProceedRelation(activity);
			activity.Save(false);
		}

		/// <summary>
		/// Returns unique hash for activity instance.
		/// </summary>
		/// <param name="title">Activity title.</param>
		/// <param name="location">The location of the activity.</param>
		/// <param name="startDate">The start date of the activity.</param>
		/// <param name="dueDate">The due date of the activity.</param>
		/// <param name="priorityId">Unique identifier priority.</param>
		/// <param name="notes">The notes of the activity.</param>
		/// <param name="timeZoneInfo">User timezone.</param>
		/// <returns>Unique hash for activity instance.</returns>
		public static string GetActivityHash(string title, string location, DateTime startDate, DateTime dueDate, Guid priorityId, string notes, TimeZoneInfo timeZoneInfo) {
			return GetActivityHash(new ActivityHashDataSet {
				Title = title,
				Location = location,
				StartDate = startDate,
				DueDate = dueDate,
				PriorityId = priorityId,
				Notes = notes,
				TimeZoneInfo = timeZoneInfo
			});
		}

		/// <summary>
		/// Returns unique hash for activity instance.
		/// </summary>
		/// <param name="activityHashDataSet"><see cref="ActivityHashDataSet"/> instance.</param>
		/// <returns>Unique hash for activity instance.</returns>
		public static string GetActivityHash(ActivityHashDataSet activityHashDataSet) {
			DateTime utcStartDate = new DateTime(activityHashDataSet.StartDate.Ticks, DateTimeKind.Unspecified);
			utcStartDate = TimeZoneInfo.ConvertTimeToUtc(utcStartDate, activityHashDataSet.TimeZoneInfo);
			var startDateStamp = activityHashDataSet.UseCompatibleDateFormat ? utcStartDate.Ticks.ToString() : utcStartDate.ToString();
			DateTime utcDueDate = new DateTime(activityHashDataSet.DueDate.Ticks, DateTimeKind.Unspecified);
			utcDueDate = TimeZoneInfo.ConvertTimeToUtc(utcDueDate, activityHashDataSet.TimeZoneInfo);
			var dueDateStamp = activityHashDataSet.UseCompatibleDateFormat ? utcDueDate.Ticks.ToString() : utcDueDate.ToString();
			return FileUtilities.GetMD5Hash(Encoding.Unicode.GetBytes(
				$"{activityHashDataSet.Title}{activityHashDataSet.Location}{startDateStamp}{dueDateStamp}{activityHashDataSet.PriorityId}{activityHashDataSet.Notes}")
			);
		}

		/// <summary>
		/// Returns unique hash for activity instance.
		/// </summary>
		/// <param name="activity">Activity instance.</param>
		/// <param name="timeZoneInfo">User timezone.</param>
		/// <returns>Unique hash for activity instance.</returns>
		public static string GetActivityHash(Entity activity, TimeZoneInfo timeZoneInfo) {
			string title = activity.GetTypedColumnValue<string>("Title");
			string location = activity.GetTypedColumnValue<string>("Location");
			DateTime startDate = activity.GetTypedColumnValue<DateTime>("StartDate");
			DateTime dueDate = activity.GetTypedColumnValue<DateTime>("DueDate");
			Guid priorityId = activity.GetTypedColumnValue<Guid>("PriorityId");
			string notes = activity.GetTypedColumnValue<string>("Notes");
			return GetActivityHash(title, location, startDate, dueDate, priorityId, notes, timeZoneInfo);
		}

		/// <summary>
		/// Tries to find <paramref name="address"/> email address in string
		/// if <paramref name="address"/> is not null or empty string.
		/// </summary>
		/// <param name="address">Email address containing string.</param>
		/// <returns>Email address.</returns>
		public static string ExtractEmailAddressIf(this string address) {
			return address.IsNullOrEmpty() ? string.Empty : address.ExtractEmailAddress();
		}

		/// <summary>
		/// Tries to find <paramref name="address"/> email address in string.
		/// </summary>
		/// <param name="address">Email address containing string.</param>
		/// <returns>Email address.</returns>
		public static string ExtractEmailAddress(string address) {
			return address.ExtractEmailAddress();
		}

		/// <summary>
		/// Sets invalidate parameter for <see cref="ActivityCacheGroupName"/> cache group elements.
		/// </summary>
		/// <param name="userConnection">User connection instance.</param>
		public static void ClearActivityCache(UserConnection userConnection) {
			var appCache = userConnection.SessionCache.WithLocalCaching(ActivityCacheGroupName);
			appCache.ExpireGroup(ActivityCacheGroupName);
		}

		/// <summary>
		/// Stores value into <paramref name="value"/> activity cache group 
		/// <see cref="ActivityCacheGroupName"/> into specific key <paramref name="key"/>.
		/// If <paramref name="value"/> == <c>null</c>, removes key from cache.
		/// </summary>
		/// <param name="userConnection">User connection instance.</param>
		/// <param name="key">Cache key.</param>
		/// <param name="value">Cache value.</param>
		public static void SetOrRemoveItemInActivityCache(UserConnection userConnection, string key, object value = null) {
			var appCache = userConnection.SessionCache.WithLocalCaching(ActivityCacheGroupName);
			appCache.SetOrRemoveValue(key, value);
		}

		/// <summary>
		/// Fixs <paramref name="value"/> if it length more than MaxTitleLength
		/// and adding <paramref name="replacer"/> at the end.
		/// </summary>
		/// <param name="value">Fixed string.</param>
		/// <param name="userConnection">User connection instance.</param>
		/// <param name="emailClientName">Email client name.</param>
		/// <param name="maxLength">The maximum length of a fixed string.</param>
		/// <param name="replacer"> Replacer, which replaces the last characters of a fixed string.</param>
		public static string FixActivityTitle(string value, UserConnection userConnection, 
			int maxLength = MaxTitleLength, string replacer = defaultReplacer) {
			if (string.IsNullOrEmpty(value)) {
				value = GetLocNoSubject(userConnection);
			} else {
				var sb = new StringBuilder(value);
				if (sb.Length > maxLength) {
					sb.Remove(maxLength - replacer.Length - 1, sb.Length - maxLength + replacer.Length + 1);
					sb.Append(replacer);
				}
				value = sb.ToString();
			}
			return value;
		}

		/// <summary>
		/// Returns list of emails, selected from <paramref name="rawString"/>.
		/// </summary>
		/// <param name="rawString">Email address containing string.</param>
		/// <returns>List of email addresses.</returns>
		public static List<string> ParseEmailAddress(this string rawString) {
			return EmailUtils.ParseEmailAddress(rawString);
		}

		public static void SetEmailParticipants(Entity entity) {
			string senderEmail = GetSenderEmail(entity);
		}

		public static string GetSenderEmail(Entity entity) {
			var senderColumn = entity.Schema.Columns.FindByName("Sender");
			if (senderColumn != null) {
				string sender = entity.GetTypedColumnValue<string>(senderColumn.ColumnValueName);
				return EmailUtils.ParseEmailAddress(sender)[0];
			} 
			return string.Empty;
		}

		/// <summary>
		/// Returns list of existing email ids, selected by mail hash.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="sendDate">Email send date.</param>
		/// <param name="subject">Email subject.</param>
		/// <param name="body">Email body.</param>
		/// <param name="timeZoneInfo">Current user timezone.</param>
		/// <returns>List of email ids.</returns>
		public static List<Guid> GetExistingEmaisIds(UserConnection userConnection, DateTime sendDate, string subject, string body,
			TimeZoneInfo timeZoneInfo) {
			List<string> hashes = GetEmailHashes(userConnection, new EmailHashDTO {
				SendDate = sendDate,
				Subject = subject,
				Body = body,
				TimeZone = timeZoneInfo
			});
			List<Guid> result = new List<Guid>();
			if (hashes.IsEmpty()) {
				return result;
			}
			var select = GetEmailIdsSelect(userConnection, hashes);
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					while (dataReader.Read()) {
						result.Add(dataReader.GetGuid(0));
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Set the inline flag at the ActivityFile by Id
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="activityFileId">Activity file id</param>
		public static void SetInlineFlagAtActivityFile(UserConnection userConnection, Guid activityFileId) {
			var update = new Update(userConnection, "ActivityFile")
				.Set("Inline", Column.Parameter(true))
				.Where("Id")
				.IsEqual(Column.Parameter(activityFileId));
			update.Execute();
		}

		/// <summary>
		/// Get activity participant roles.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <returns>Activity participant roles.</returns>
		public static Dictionary<string, Guid> GetParticipantsRoles(UserConnection userConnection) {
			var roleSchemaQuery = new EntitySchemaQuery(userConnection.EntitySchemaManager, "ActivityParticipantRole") {
				UseAdminRights = GlobalAppSettings.FeatureUseAdminRightsInEmbeddedLogic
			};
			roleSchemaQuery.PrimaryQueryColumn.IsAlwaysSelect = true;
			var codeQueryColumn = roleSchemaQuery.AddColumn("Code");
			roleSchemaQuery.Cache = userConnection.SessionCache.WithLocalCaching(ActivityUtils.ActivityCacheGroupName);
			roleSchemaQuery.CacheItemName = "ActivityParticipant_ActivityParticipantRole";
			var entityCollection = roleSchemaQuery.GetEntityCollection(userConnection);
			var roles = new Dictionary<string, Guid>();
			foreach (var entity in entityCollection) {
				Guid id = entity.PrimaryColumnValue;
				string code = entity.GetTypedColumnValue<string>(codeQueryColumn.Name);
				roles.Add(code, id);
			}
			return roles;
		}

		/// <summary>
		/// Fix attachemnt name, if attachment name more then DB column size.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="attachmentName">Initial attachment name.</param>
		/// <returns>Fixed attachemnt name, if attachment name more then DB column size.</returns>
		public static string GetAttachmentName(UserConnection userConnection, string attachmentName) {
			var correctFileName = DeleteInvalidFileNameChars(attachmentName);
			var extension = Path.HasExtension(correctFileName) ? Path.GetExtension(correctFileName) : string.Empty;
			var fileName = Path.GetFileNameWithoutExtension(correctFileName);
			var result = fileName.IsEmpty() 
				? GetLocNoSubject(userConnection).ConcatIfNotEmpty(extension, "")
				: correctFileName;
			int columnSize = GetActivityFilePrimaryDisplayColumnSize(userConnection);
			if (columnSize >= result.Length) {
				return result;
			}
			var truncateFileNameChars = new string(fileName.Take(columnSize - extension.Length).ToArray());
			var truncateFileName = Regex.Replace(truncateFileNameChars, ".{3}$", "...");
			return truncateFileName.ConcatIfNotEmpty(extension, "");
		}

		/// <summary>
		/// Delete incorrect characters from file name.
		/// </summary>
		/// <param name="fileName">File name.</param>
		/// <returns>File name without invalide file name characters.</returns>
		public static string DeleteInvalidFileNameChars(string fileName) {
			if (fileName.IsNullOrEmpty()) {
				return string.Empty;
			}
			var fileNameArray = fileName.ToArray();
			var invalidFileNameChars = Path.GetInvalidFileNameChars();
			return invalidFileNameChars.Intersect(fileNameArray).IsEmpty()
				 ? fileName
				 : string.Join(string.Empty, fileName.Split(invalidFileNameChars));
		}

		/// <summary>
		/// Creates tick value for SendDate column value from <paramref name="activity"/>.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="activity">Activity instance.</param>
		/// <returns>Tick value for activity SendDate column value.</returns>
		public static long GetSendDateTicks(UserConnection userConnection, Entity activity) {
			DateTime sendDate = activity.GetTypedColumnValue<DateTime>("SendDate");
			DateTime utcSendDate = TimeZoneInfo.ConvertTimeToUtc(sendDate, userConnection.CurrentUser.TimeZone);
			return utcSendDate.Ticks;
		}

		/// <summary>
		/// Creates SendDate value from <paramref name="ticks"/>.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="ticks">SendDate ticks.</param>
		/// <returns>SendDate column value.</returns>
		public static DateTime GetSendDateFromTicks(UserConnection userConnection, long ticks) {
			var utcSendDate = new DateTime(ticks, DateTimeKind.Utc);
			return TimeZoneInfo.ConvertTimeFromUtc(utcSendDate, userConnection.CurrentUser.TimeZone);
		}

		/// <summary>
		/// Returns "private meeting" localized value.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <returns>Localized value.</returns>
		public static string GetLczPrivateMeeting(UserConnection userConnection) {
			return GetLczValue(userConnection, "PrivateMeeting");
		}

		#endregion

	}

	#endregion

}

