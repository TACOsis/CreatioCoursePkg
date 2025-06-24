namespace Terrasoft.Configuration
{
	using System;
	using System.Collections;
	using System.Collections.Generic;
	using System.Data;
	using System.IO;
	using System.Linq;
	using System.Text;
	using Newtonsoft.Json;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
    using Terrasoft.Mail.Sender;
#if !NETSTANDARD2_0 // TODO #CRM-44434
    using Terrasoft.UI.WebControls.Controls;
	using Terrasoft.UI.WebControls.Utilities.Json.Converters;
#else
	using Terrasoft.Mail;
#endif

	#region Class: EmailTemplateUtility

	public static class EmailTemplateUtility
	{
		#region Properties: Private

		private static UserConnection _userConnection;
		private static UserConnection UserConnection {
			get {
				return _userConnection;
			}
			set {
				_userConnection = value;
			}
		}

		private static bool _haveEmptyRecipient;
		private static bool HaveEmptyRecipient {
			get {
				return _haveEmptyRecipient;
			}
			set {
				_haveEmptyRecipient = value;
			}
		}

		#endregion

		#region Methods: Private

		private static Dictionary<string, Guid> GetContactsEmailListFromContactFolder(string id) {
			var resultList = new Dictionary<string, Guid>();
			var contactESQ = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Contact");
			var contactId = contactESQ.AddColumn("Id");
			var contactName = contactESQ.AddColumn("Name");
			var contactEmail = contactESQ.AddColumn("Email");
			contactESQ.IsDistinct = true;
			Guid DynamicFolderTypeId = new Guid("65CA0946-0084-4874-B117-C13199AF3B95");
			var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName("ContactFolder");
			var entity = entitySchema.CreateEntity(UserConnection);
			entity.FetchFromDB("Id", id);

			var folderTypeId = entity.GetTypedColumnValue<Guid>("FolderTypeId");
			if (folderTypeId.Equals(DynamicFolderTypeId)) {

				byte[] searchData = entity.GetBytesValue("SearchData");
				if (searchData == null) {
					return resultList;
				}
				string searchResult = Encoding.UTF8.GetString(searchData);
#if !NETSTANDARD2_0 // TODO #CRM-44434
				var jsonConverter = new DataSourceFiltersJsonConverter(UserConnection, 
					UserConnection.EntitySchemaManager.GetInstanceByName("Contact")) {
						PreventRegisteringClientScript = true
					};
				var filters = JsonConvert.DeserializeObject<DataSourceFilterCollection>(searchResult, jsonConverter);
				if (filters != null) {
					contactESQ.Filters.Add(filters.ToEntitySchemaQueryFilterCollection(contactESQ));
				}
#endif
			} else {
				if (string.Compare(id, "F35A1295-DCA5-DF11-831A-001D60E938C6", true) != 0) {
					var folderFilter = contactESQ.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"[ContactInFolder:Contact].Folder.Id",
					id);
					contactESQ.Filters.Add(folderFilter);
				}
			}
			var contactCollection = contactESQ.GetEntityCollection(UserConnection);
			foreach (var contact in contactCollection) {
				var contactIdValue = contact.GetTypedColumnValue<Guid>(contactId.Name);
				var contactNameValue = contact.GetTypedColumnValue<string>(contactName.Name);
				var contactEmailValue = contact.GetTypedColumnValue<string>(contactEmail.Name);
				if (!string.IsNullOrEmpty(contactEmailValue)) {
					resultList[contactNameValue + " <" + contactEmailValue + ">; "] = contactIdValue;
				} else if (!HaveEmptyRecipient) {
					HaveEmptyRecipient = true;
				}
			}
			return resultList;
		}

		private static Dictionary<string, Guid> GetContactsEmailListFromContact(string[] idList) {
			var resultList = new Dictionary<string, Guid>();
			if (idList.Length == 0)
				return resultList;
			var contactESQ = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "Contact");
			var contactId = contactESQ.AddColumn("Id");
			var contactName = contactESQ.AddColumn("Name");
			var contactEmail = contactESQ.AddColumn("Email");
			contactESQ.IsDistinct = true;
			var contactFilter = contactESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", idList);
			contactESQ.Filters.Add(contactFilter);
			var contactCollection = contactESQ.GetEntityCollection(UserConnection);
			foreach (var contact in contactCollection) {
				var contactIdValue = contact.GetTypedColumnValue<Guid>(contactId.Name);
				var contactNameValue = contact.GetTypedColumnValue<string>(contactName.Name);
				var contactEmailValue = contact.GetTypedColumnValue<string>(contactEmail.Name);
				if (!string.IsNullOrEmpty(contactEmailValue))
					resultList[contactNameValue + " <" + contactEmailValue + ">; "] = contactIdValue;
				else
					if (!HaveEmptyRecipient)
					HaveEmptyRecipient = true;
			}
			return resultList;
		}

		private static Dictionary<string, Guid> GetContactsEmailListFromSysAdminUnit(string id) {
			var resultList = new Dictionary<string, Guid>();
			var contactESQ = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SysAdminUnit");
			var contactId = contactESQ.AddColumn("Contact.Id");
			var contactName = contactESQ.AddColumn("Contact.Name");
			var contactEmail = contactESQ.AddColumn("Contact.Email");
			contactESQ.IsDistinct = true;
			var sysAdminFolderFilter = contactESQ.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"[SysUserInRole:SysUser].SysRole.Id",
					id);
			contactESQ.Filters.Add(sysAdminFolderFilter);
			var contactCollection = contactESQ.GetEntityCollection(UserConnection);
			foreach (var contact in contactCollection) {
				var contactIdValue = contact.GetTypedColumnValue<Guid>(contactId.Name);
				var contactNameValue = contact.GetTypedColumnValue<string>(contactName.Name);
				var contactEmailValue = contact.GetTypedColumnValue<string>(contactEmail.Name);
				if (!string.IsNullOrEmpty(contactEmailValue))
					resultList[contactNameValue + " <" + contactEmailValue + ">; "] = contactIdValue;
				else
					if (!HaveEmptyRecipient)
					HaveEmptyRecipient = true;
			}
			return resultList;
		}

		private static Dictionary<string, Guid> GetContactsEmailListFromObject(string jObjectValue, Guid recordId, string entitySchemaName) {
			var resultList = new Dictionary<string, Guid>();
			string jObject = (Json.Deserialize(jObjectValue) as JObject)["structureValue"].ToString();
			string metaPath = (Json.Deserialize(jObject) as JObject)["metaPath"].ToString();
			var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			EntitySchemaQuery entityESQ = null;
			string contactPath = string.Empty;
			var oppositeColumnName = string.Empty;
			string path = entitySchema.GetSchemaColumnPathByMetaPath(metaPath);
			System.Text.RegularExpressions.Regex regexColumnNameParser = new System.Text.RegularExpressions.Regex(@"\[(?<TableName>[\w\-]+):(?<ColumnName>[\w\-]+)\]");
			var match = regexColumnNameParser.Match(path);
			if (match.Success) {
				var oppositeSchemName = match.Groups["TableName"].Value;
				oppositeColumnName = match.Groups["ColumnName"].Value;
				var entitySchemaOpposite = UserConnection.EntitySchemaManager.GetInstanceByName(oppositeSchemName);
				entityESQ = new EntitySchemaQuery(UserConnection.EntitySchemaManager, entitySchemaOpposite.Name);
				contactPath = path.Replace(string.Format("[{0}:{1}].", oppositeSchemName, oppositeColumnName), "");
			} else {
				entityESQ = new EntitySchemaQuery(entitySchema);
				contactPath = path;
			}
			var contactId = entityESQ.AddColumn(contactPath + ".Id");
			var contactName = entityESQ.AddColumn(contactPath + ".Name");
			var contactEmail = entityESQ.AddColumn(contactPath + ".Email");
			entityESQ.IsDistinct = true;
			IEntitySchemaQueryFilterItem objectFilter = null;
			if (match.Success) {
				objectFilter = entityESQ.CreateFilterWithParameters(FilterComparisonType.Equal, oppositeColumnName + ".Id", recordId);
			} else {
				objectFilter = entityESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", recordId);
			}
			entityESQ.Filters.Add(objectFilter);
			if (match.Success) {
				string searchResult = (Json.Deserialize(jObjectValue) as JObject)["filter"].ToString();
#if !NETSTANDARD2_0 // TODO #CRM-44434
				var jsonConverter = new DataSourceFiltersJsonConverter(UserConnection, entitySchema) {
					PreventRegisteringClientScript = true
				};
				var filters = JsonConvert.DeserializeObject<DataSourceFilterCollection>(searchResult, jsonConverter);
				if (filters != null) {
					entityESQ.Filters.Add(filters.ToEntitySchemaQueryFilterCollection(entityESQ));
				}
#endif
			}
			var contactCollection = entityESQ.GetEntityCollection(UserConnection);
			foreach (var contact in contactCollection) {
				var contactIdValue = contact.GetTypedColumnValue<Guid>(contactId.Name);
				var contactNameValue = contact.GetTypedColumnValue<string>(contactName.Name);
				var contactEmailValue = contact.GetTypedColumnValue<string>(contactEmail.Name);
				if (!string.IsNullOrEmpty(contactEmailValue))
					resultList[contactNameValue + " <" + contactEmailValue + ">; "] = contactIdValue;
				else
					if (!HaveEmptyRecipient)
					HaveEmptyRecipient = true;
			}
			return resultList;
		}

		private static Dictionary<string, List<string>> GetMacrosCollectionFromSourceText(string sourceText) {
			var resultCollection = new Dictionary<string, List<string>>();
			string pattern = @"\[#([^\]]*)#\]";
			var matches = System.Text.RegularExpressions.Regex.Matches(sourceText, pattern);
			foreach (var match in matches) {
				var macrosItem = (match as System.Text.RegularExpressions.Match).Value.Substring(2, (match as System.Text.RegularExpressions.Match).Value.Length - 4);
				int groupIndex = macrosItem.IndexOf('.');
				var key = macrosItem.Substring(0, groupIndex);
				var value = macrosItem.Substring(groupIndex + 1, macrosItem.Length - groupIndex - 1);
				if (resultCollection.ContainsKey(key)) {
					resultCollection[key].Add(value);
				} else {
					resultCollection.Add(key, new List<string>() { value });
				}
			}
			return resultCollection;
		}

		private static Dictionary<string, string> GetColumnValuesByMacros(Dictionary<string, List<string>> macrosInTextCollection, JArray entityMacrosArray, Guid recordId, string schemaName, string macrosGroupName, UserConnection userConnection) {
			var entityESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, schemaName);
			var entityColumnCollection = new Dictionary<string, string>();
			foreach (var item in macrosInTextCollection[macrosGroupName]) {
				AddColumnToEntitySchemaQuery(entityESQ, item, entityMacrosArray, entityColumnCollection, userConnection);
			}
			entityESQ.Filters.Add(
				entityESQ.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"Id",
					recordId
				)
			);
			var entityCollection = entityESQ.GetEntityCollection(userConnection);
			var entityColumnValuesCollection = new Dictionary<string, string>();
			if (entityCollection.Count > 0) {
				foreach (var item in entityColumnCollection) {
					var entityEntity = entityCollection[0];
					var entityColumnName = entityEntity.Schema.Columns.GetByName(item.Value);
					var value = entityEntity.GetTypedColumnValue<string>(entityColumnName);
					if (entityColumnName.DataValueType is DateDataValueType && !string.IsNullOrEmpty(value)) {
						DateTime date = DateTime.Parse(value);
						value = date.ToString("d", userConnection.CurrentUser.Culture);
					}
					entityColumnValuesCollection.Add(item.Key, value);
				}
			}
			return entityColumnValuesCollection;
		}

		private static void AddColumnToEntitySchemaQuery(EntitySchemaQuery query, string caption, JArray columns, Dictionary<string, string> objectColumnCollection, UserConnection userConnection) {
			JObject column = null;
			var macrosColumn = string.Empty;
			for (int i = 0; i < columns.Count; i++) {
				var captionColumn = columns[i].Value<string>("caption");
				if (captionColumn.Contains(@"\")) {
					for (int j = 0; j < captionColumn.Length; j++) {
						if (captionColumn[j] == '\\') {
							captionColumn = captionColumn.Insert(j, @"\");
							j++;
						}
					}
				}
				if (captionColumn == caption) {
					column = columns[i] as JObject;
					macrosColumn = captionColumn;
					break;
				}
			}
			if (column == null || objectColumnCollection.ContainsKey(macrosColumn)) {
				return;
			}
			EntitySchemaQueryColumn queryColumn = null;
			foreach (var esqColumn in query.Columns) {
				if (esqColumn.Caption.Value == column.Value<string>("caption")) {
					queryColumn = esqColumn;
				}
			}
			if (queryColumn == null) {
				if (string.IsNullOrEmpty(column.Value<string>("aggregationType"))
					|| string.Compare(column.Value<string>("aggregationType"), "None", true) == 0) {
					queryColumn = query.AddColumn(query.RootSchema.GetSchemaColumnPathByMetaPath(column.Value<string>("metaPath")));
					if (queryColumn.DisplayExpression != null) {
						string displayValueMetaPath = queryColumn.DisplayExpression.Path;
						query.RemoveColumn(queryColumn.Name);
						queryColumn = query.AddColumn(displayValueMetaPath);
					}
				} else {
					EntitySchemaQuery subQuery = null;
					queryColumn = query.AddColumn(query.RootSchema.GetSchemaColumnPathByMetaPath(column.Value<string>("metaPath")),
						(AggregationTypeStrict)Enum.Parse(typeof(AggregationTypeStrict), column.Value<string>("aggregationType")),
						out subQuery);
					if (!string.IsNullOrEmpty(column.Value<string>("subFilters"))) {
#if !NETSTANDARD2_0 // TODO #CRM-44434
						var converter = new DataSourceFiltersJsonConverter(userConnection,
							subQuery.RootSchema) {
							PreventRegisteringClientScript = true
						};
						var filters = JsonConvert.DeserializeObject<DataSourceFilterCollection>(
								column.Value<string>("subFilters"), converter);
						EntitySchemaQueryFilterCollection esqFilters =
							filters.ToEntitySchemaQueryFilterCollection(subQuery);
						DisableEmptyEntitySchemaQueryFilters(esqFilters);
						subQuery.Filters.Add(esqFilters);
#endif
					}
					queryColumn.Name = StringUtilities.CleanUpColumnName(query.RootSchema.GetSchemaColumnPathByMetaPath(column.Value<string>("metaPath")));
				}
			}
			queryColumn.UId = !string.IsNullOrEmpty(column.Value<string>("columnUId")) &&
				!new Guid(column.Value<string>("columnUId")).IsEmpty() ? new Guid(column.Value<string>("columnUId"))
																	   : Guid.NewGuid();
			if (!string.IsNullOrEmpty(column.Value<string>("caption"))) {
				queryColumn.Caption = column.Value<string>("caption");
			}

			queryColumn.IsAlwaysSelect = true;
			queryColumn.IsVisible = true;
			objectColumnCollection.Add(macrosColumn, queryColumn.Name);
		}

		private static void DisableEmptyEntitySchemaQueryFilters(
				IEnumerable<IEntitySchemaQueryFilterItem> queryFilterCollection) {
			foreach (var item in queryFilterCollection) {
				var filter = item as EntitySchemaQueryFilter;
				if (filter != null) {
					if (filter.RightExpressions.Count == 0 && filter.ComparisonType != FilterComparisonType.IsNull &&
							filter.ComparisonType != FilterComparisonType.IsNotNull) {
						filter.IsEnabled = false;
						continue;
					}
					if (filter.LeftExpression != null &&
							filter.LeftExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
						DisableEmptyEntitySchemaQueryFilters(filter.LeftExpression.SubQuery.Filters);
					}
					foreach (var rightExpression in filter.RightExpressions) {
						if (rightExpression.ExpressionType == EntitySchemaQueryExpressionType.SubQuery) {
							DisableEmptyEntitySchemaQueryFilters(rightExpression.SubQuery.Filters);
						}
					}
				} else {
					DisableEmptyEntitySchemaQueryFilters((EntitySchemaQueryFilterCollection)item);
				}
			}
		}

		#endregion

		#region Methods: Public

		public static string ReplaceRecipientMacrosText(string sourceText, Guid contactId, List<DictionaryEntry> macrosList, UserConnection userConnection) {
			if (string.IsNullOrEmpty(sourceText) || contactId == Guid.Empty) {
				return sourceText;
			}
			Dictionary<string, List<string>> macrosInTextCollection = GetMacrosCollectionFromSourceText(sourceText);
			if (macrosInTextCollection.Count == 0) {
				return sourceText;
			}
			var resultText = new StringBuilder(sourceText);
			if (macrosInTextCollection.ContainsKey(macrosList[0].Key as string)) {
				var currentUserMacrosArray = macrosList[0].Value as JArray;
				Dictionary<string, string> currentUserColumnValuesCollection = GetColumnValuesByMacros(macrosInTextCollection, currentUserMacrosArray, contactId, "Contact", macrosList[0].Key as string, userConnection);
				foreach (var item in currentUserColumnValuesCollection) {
					resultText.Replace(string.Format("[#{0}.{1}#]", macrosList[0].Key as string, macrosInTextCollection[macrosList[0].Key as string].First(innerItem => innerItem == item.Key)), item.Value);
				}
			}
			return resultText.ToString();
		}

		public static string ReplaceMacrosText(string sourceText, Guid recordId, List<DictionaryEntry> macrosList,
					string objectSchemaCaption, string objectSchemaName, UserConnection userConnection) {
			if (string.IsNullOrEmpty(sourceText)) {
				return sourceText;
			}
			Dictionary<string, List<string>> macrosInTextCollection = GetMacrosCollectionFromSourceText(sourceText);
			if (macrosInTextCollection.Count == 0) {
				return sourceText;
			}
			var resultText = new StringBuilder(sourceText);
			if (macrosInTextCollection.ContainsKey(objectSchemaCaption)) {
				var objectMacrosArray = ((DictionaryEntry)macrosList.First(item => (string)item.Key == objectSchemaCaption)).Value as JArray;
				Dictionary<string, string> objectColumnValuesCollection = GetColumnValuesByMacros(macrosInTextCollection, objectMacrosArray, recordId, objectSchemaName, objectSchemaCaption, userConnection);
				foreach (var item in objectColumnValuesCollection) {
					resultText.Replace(string.Format("[#{0}.{1}#]", objectSchemaCaption, macrosInTextCollection[objectSchemaCaption].First(innerItem => innerItem == item.Key)), item.Value);
				}
			}
			if (macrosInTextCollection.ContainsKey(macrosList[1].Key as string)) {
				var currentUserMacrosArray = macrosList[1].Value as JArray;
				Dictionary<string, string> currentUserColumnValuesCollection = GetColumnValuesByMacros(macrosInTextCollection, currentUserMacrosArray, userConnection.CurrentUser.ContactId, "Contact", macrosList[1].Key as string, userConnection);
				foreach (var item in currentUserColumnValuesCollection) {
					resultText.Replace(string.Format("[#{0}.{1}#]", macrosList[1].Key as string, macrosInTextCollection[macrosList[1].Key as string].First(innerItem => innerItem == item.Key)), item.Value);
				}
			}
			return resultText.ToString();
		}

		public static Entity GetFormattedEmailTemplateEntity(Guid templateId, Guid recordId, UserConnection userConnection) {
			var templateESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "EmailTemplate");
			templateESQ.PrimaryQueryColumn.IsAlwaysSelect = true;
			templateESQ.AddColumn("SaveAsActivity");
			templateESQ.AddColumn("SendIndividualEmail");
			templateESQ.AddColumn("ObjectFieldInActivity");
			templateESQ.AddColumn("Priority");
			templateESQ.AddColumn("Subject");
			templateESQ.AddColumn("Recipient");
			templateESQ.AddColumn("CopyRecipient");
			templateESQ.AddColumn("BlindCopyRecipient");
			templateESQ.AddColumn("Body");
			templateESQ.AddColumn("Macros");
			templateESQ.AddColumn("IsHtmlBody");
			var objectSchemaColumnCaption = templateESQ.AddColumn("Object.Caption").Name;
			var objectSchemaColumnName = templateESQ.AddColumn("Object.Name").Name;
			templateESQ.Filters.Add(
				templateESQ.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"Object.SysWorkspace",
					userConnection.Workspace.Id
				)
			);
			templateESQ.Filters.Add(
				templateESQ.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					"Id",
					templateId
				)
			);
			var entityCollection = templateESQ.GetEntityCollection(userConnection);
			var subject = entityCollection[0].GetTypedColumnValue<string>("Subject");
			var body = entityCollection[0].GetTypedColumnValue<string>("Body");
			var macrosBytes = entityCollection[0].GetBytesValue("Macros");
			var macrosList = Json.Deserialize<List<DictionaryEntry>>(
				System.Text.Encoding.UTF8.GetString(macrosBytes)
			);
			var objectSchemaColumnValueCaption = entityCollection[0].Schema.Columns.FindByName(objectSchemaColumnCaption).ColumnValueName;
			var objectSchemaCaption = entityCollection[0].GetTypedColumnValue<string>(objectSchemaColumnValueCaption);
			var objectSchemaColumnValueName = entityCollection[0].Schema.Columns.FindByName(objectSchemaColumnName).ColumnValueName;
			var objectSchemaName = entityCollection[0].GetTypedColumnValue<string>(objectSchemaColumnValueName);
			subject = ReplaceMacrosText(subject, recordId, macrosList, objectSchemaCaption, objectSchemaName, userConnection);
			entityCollection[0].SetColumnValue("Subject", subject);
			body = ReplaceMacrosText(body, recordId, macrosList, objectSchemaCaption, objectSchemaName, userConnection);
			entityCollection[0].SetColumnValue("Body", body);
			return entityCollection[0];
		}

		public static List<Tuple<string, string, string>> DecodeRecipientString(string sourceText) {
			var resultCollection = new List<Tuple<string, string, string>>();
			if (!string.IsNullOrEmpty(sourceText)) {
				string pattern = @"\{%([^%]*)%\}";
				var matches = System.Text.RegularExpressions.Regex.Matches(sourceText, pattern);
				foreach (var match in matches) {
					var macrosItems = (match.ToString().Substring(2, match.ToString().Length - 4)).Split('|');
					resultCollection.Add(Tuple.Create(macrosItems[0], macrosItems[1], macrosItems[2]));
				}
			}
			return resultCollection;
		}

		public static string EncodeRecipientString(List<Tuple<string, string, string>> list) {
			StringBuilder resultString = new StringBuilder();
			foreach (var tuple in list) {
				resultString.Append("{%");
				resultString.Append(tuple.Item1);
				resultString.Append("|");
				resultString.Append(tuple.Item2);
				resultString.Append("|");
				resultString.Append(tuple.Item3);
				resultString.Append("%}");
			}
			return resultString.ToString();
		}

		public static Dictionary<string, Guid> GetRecipientsList(string recipientString, Guid recordId, string entitySchemaName, UserConnection userConnection, out bool haveEmptyRecipient) {
			HaveEmptyRecipient = false;
			UserConnection = userConnection;
			var dictEmailRecipient = new Dictionary<string, Guid>();
			var listRecipients = DecodeRecipientString(recipientString);
			if (string.IsNullOrEmpty(recipientString)) {
				haveEmptyRecipient = HaveEmptyRecipient;
				return dictEmailRecipient;
			}

			var resultEmails = listRecipients.Where(item => item.Item1 == "Email");
			dictEmailRecipient = resultEmails.ToDictionary(tuple => "<" + tuple.Item3 + ">; ", tuple => Guid.Empty);

			var resultContacts = listRecipients.Where(item => item.Item1 == "Contact");
			var resultContactsDict = GetContactsEmailListFromContact(resultContacts.Select(r => r.Item2).ToArray());
			foreach (var pair in resultContactsDict)
				dictEmailRecipient[pair.Key] = pair.Value;

			resultContacts = listRecipients.Where(item => item.Item1 == "ContactInModule");
			if (resultContacts.Count<Tuple<string, string, string>>() != 0) {
				resultContactsDict = GetContactsEmailListFromContact(new string[] { recordId.ToString() });
				foreach (var pair in resultContactsDict)
					dictEmailRecipient[pair.Key] = pair.Value;
			}

			var resultContactFolders = listRecipients.Where(item => item.Item1 == "ContactFolder");
			foreach (var r in resultContactFolders) {
				resultContactsDict = GetContactsEmailListFromContactFolder(r.Item2);
				foreach (var pair in resultContactsDict)
					dictEmailRecipient[pair.Key] = pair.Value;
			}

			resultContactFolders = listRecipients.Where(item => item.Item1 == "VwSysAdminUnit");
			foreach (var r in resultContactFolders) {
				resultContactsDict = GetContactsEmailListFromSysAdminUnit(r.Item2);
				foreach (var pair in resultContactsDict)
					dictEmailRecipient[pair.Key] = pair.Value;
			}

			if (recordId != Guid.Empty && !string.IsNullOrEmpty(entitySchemaName)) {
				resultContactFolders = listRecipients.Where(item => item.Item1 == "Object");
				foreach (var r in resultContactFolders) {
					resultContactsDict = GetContactsEmailListFromObject(r.Item2, recordId, entitySchemaName);
					foreach (var pair in resultContactsDict)
						dictEmailRecipient[pair.Key] = pair.Value;
				}
			}
			haveEmptyRecipient = HaveEmptyRecipient;
			return dictEmailRecipient;
		}

		/// <summary>
		/// Get email template attachments.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="emailTemplateId">Email template isentifier.</param>
		/// <returns>Email template attachments.</returns>
		public static List<EmailAttachment> GetEmailTemplateAttachments(UserConnection userConnection, Guid emailTemplateId) {
			var attachments = new List<EmailAttachment>();
			EntitySchemaManager esm = userConnection.EntitySchemaManager;
			EntitySchema entitySchema = esm.GetInstanceByName("EmailTemplateFile");
			EntitySchemaQuery esq = new EntitySchemaQuery(entitySchema);
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.AddColumn("CreatedOn").OrderByDesc();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "EmailTemplate", emailTemplateId));
			EntityCollection emailTemplateFileCollection = esq.GetEntityCollection(userConnection);
			var fileRepository = ClassFactory.Get<FileRepository>(
				new ConstructorArgument("userConnection", userConnection));
			foreach (Entity file in emailTemplateFileCollection) {
				var fileId = file.PrimaryColumnValue;
				using (var memoryStream = new MemoryStream()) {
					var bwriter = new BinaryWriter(memoryStream);
					var fileInfo = fileRepository.LoadFile(entitySchema.UId, fileId, bwriter);
					var attachment = new EmailAttachment() {
						Id = fileId,
						Name = fileInfo.FileName,
						Data = memoryStream.ToArray(),
						IsContent = true
					};
					attachments.Add(attachment);
				}
			}
			return attachments;
		}

		#endregion

	}

	#endregion

}
