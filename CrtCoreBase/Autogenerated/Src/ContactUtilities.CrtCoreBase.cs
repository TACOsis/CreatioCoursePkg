namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Sync;

	#region Class: ContactUtilities

	/// <summary>
	/// Provides Contact utility methods.
	/// </summary>
	public static class ContactUtilities
	{
		
		#region Methods: Private
		
		/// <summary>
		/// Returns <see cref="EntityCollection"/> of <see cref="ContactCommunication"/> by email address.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <param name="email">Email address.</param>
		/// <param name="contactIdQueryColumnName">Contact id query column name.</param>
		/// <param name="contactNameQueryColumnName">Contact name query column name.</param>
		/// <returns><see cref="EntityCollection"/> of <see cref="ContactCommunication"/>.</returns>
		private static EntityCollection GetContactCommunicationsByEmail(UserConnection userConnection, string email,
				out string contactIdQueryColumnName, out string contactNameQueryColumnName) {
			var entitySchemaManager = userConnection.GetSchemaManager("EntitySchemaManager") as EntitySchemaManager;
			var contactCommunicationSchemaQuery = new EntitySchemaQuery(entitySchemaManager, "ContactCommunication");
			contactIdQueryColumnName = contactCommunicationSchemaQuery.AddColumn("Contact.Id").Name;
			contactNameQueryColumnName = contactCommunicationSchemaQuery.AddColumn("Contact.Name").Name;
			contactCommunicationSchemaQuery.AddColumn("Contact.CreatedOn").OrderByAsc();
			var filter = contactCommunicationSchemaQuery.CreateFilterWithParameters(FilterComparisonType.Equal, "Number",
					email);
			contactCommunicationSchemaQuery.Filters.Add(filter);
			return contactCommunicationSchemaQuery.GetEntityCollection(userConnection);
		}

		/// <summary>
		/// Prepares phone number for quick search by digits only.
		/// </summary>
		/// <param name="phone">Phone number to process</param>
		/// <returns>Reversed phone number that contains digits only</returns>
		private static string PrepareSearchNumber(string phone) {
			char[] phoneDigitsArray = Regex.Replace(phone, @"\D", "").ToCharArray();
			Array.Reverse(phoneDigitsArray);
			return new string(phoneDigitsArray);
		}

		#endregion

		#region Methdos: Public

		/// <summary>
		/// Verifies the existence of the contact synchronization settings.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="syncDirection">Direction of synchronization.</param>
		/// <param name="contactId">Id of the contact.</param>
		/// <returns>Flag existence synchronization settings.
		/// </returns>
		public static bool IsSyncContactExist(UserConnection userConnection, SyncDirection syncDirection, Guid contactId) {
			Guid currentOrganizerId = userConnection.CurrentUser.ContactId;
			Select SelectAppointment =
				new Select(userConnection)
							.Column(Func.Count("ss", "Id"))
							.From("ActivitySyncSettings").As("ss")
							.InnerJoin("MailboxSyncSettings").As("ms")
							.On("ms", "Id").IsEqual("ss", "MailboxSyncSettingsId")
							.InnerJoin("SysAdminUnit").As("sa")
							.On("sa", "Id").IsEqual("ms","SysAdminUnitId")
							.Where("sa", "ContactId").IsEqual(Column.Parameter(contactId)) as Select;
			if (syncDirection == SyncDirection.Upload) {
				SelectAppointment = SelectAppointment.And("ss", "ExportActivities").IsEqual(Column.Parameter(true)) as Select;
			} else {
				SelectAppointment = SelectAppointment.And("ss", "ImportAppointments").IsEqual(Column.Parameter(true)) as Select;
			}
			return SelectAppointment.ExecuteScalar<int>() > 0;
		}
		
		/// <summary>
		/// Verifies the existence of the contact synchronization settings with current email.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="contactId">Id of the contact.</param>
		/// <param name="email">Email.</param>
		/// <returns>Flag existence synchronization settings with current email.
		/// </returns>
		public static bool IsSyncContactExist(UserConnection userConnection, Guid contactId, string email) {
			Select SelectAppointment = new Select(userConnection)
				.Column(Func.Count("sa", "ContactId"))
				.From("MailboxSyncSettings").As("ms")
				.InnerJoin("SysAdminUnit").As("sa")
				.On("sa", "Id").IsEqual("ms","SysAdminUnitId")
				.Where("sa", "ContactId").IsEqual(Column.Parameter(contactId))
				.And("ms", "SenderEmailAddress").IsEqual(Column.Parameter(email)) as Select;
			return SelectAppointment.ExecuteScalar<int>() > 0;
		}
		
		public static string GetSenderEmailAddress(UserConnection userConnection, Guid contactId) {
			string email = string.Empty;
			Select selectEmail = new Select(userConnection)
			.Top(1)
				.Column(Func.Count("ms", "SenderEmailAddress"))
			.From("MailboxSyncSettings").As("ms")
				.InnerJoin("SysAdminUnit").As("sa")
				.On("sa", "Id").IsEqual("ms","SysAdminUnitId")
			.Where("sa", "ContactId").IsEqual(Column.Parameter(contactId)) as Select;
			using (var dbExecutor = userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = selectEmail.ExecuteReader(dbExecutor)) {
					if (dataReader.Read()) {
						email = dataReader.GetColumnValue<string>("Number");
					}
				}
			}
			return email;
		}
		
		/// <summary>
		/// Verifies the existence of the user with that <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="contactId">Id of the contact.</param>
		/// <param name="ignorePortalUsers">If true, <see cref="SysAdminUnit"/> with SSP ConnectionType selected as contact.
		/// </param>
		/// <returns>
		/// Flag existence synchronization settings.
		/// </returns>
		public static bool IsUserByContactExist(UserConnection userConnection, Guid contactId,
				bool ignorePortalUsers = false) {
			Select selectSysAdminUnit = new Select(userConnection)
				.Column(Func.Count("sa", "Id"))
				.From("SysAdminUnit").As("sa")
				.InnerJoin("Contact").As("co")
				.On("sa", "ContactId").IsEqual("co", "Id")
				.Where("co", "Id").IsEqual(Column.Parameter(contactId)) as Select;
			if (ignorePortalUsers) {
				selectSysAdminUnit = selectSysAdminUnit.And("sa", "ConnectionType")
						.IsNotEqual(Column.Parameter((int)UserType.SSP)) as Select;
			}
			return selectSysAdminUnit.ExecuteScalar<int>() > 0;
		}
		
		/// <summary>
		/// Retrieves contacts list containing list of <paramref name="emails"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="emails"> A list of email addresses.</param>
		/// <returns>List of contacts.</returns>
		public static Dictionary<Guid, string> GetContactsByEmails(UserConnection userConnection, List<string> emails) {
			return BaseContactUtilities.GetContactsByEmails(userConnection, emails);
		}

		/// <summary>
		/// Retrieves contacts list by phone number of any type.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="phoneNumber"> A phone number to search.</param>
		/// <returns>List of contacts.</returns>
		public static List<Guid> GetContactsByPhone(UserConnection userConnection, string phoneNumber) {
			var contacts = new List<Guid>();
			var searchString = PrepareSearchNumber(phoneNumber);
			if (searchString.IsNullOrEmpty()) {
				return contacts;
			}

			var phoneTypes = new List<Guid>() {
				Guid.Parse(CommunicationTypeConsts.MobilePhoneId),
				Guid.Parse(CommunicationTypeConsts.OtherPhoneId),
				Guid.Parse(CommunicationTypeConsts.HomePhoneId)
			};

			var select = new Select(userConnection)
				.Column("ContactCommunication", "ContactId")
				.From("ContactCommunication")
				.InnerJoin("Contact").On("Contact", "Id").IsEqual("ContactCommunication", "ContactId")
				.Where("SearchNumber").IsEqual(Column.Parameter(searchString))
				.And("CommunicationTypeId").In(Column.Parameters(phoneTypes))
				.And().OpenBlock("SearchNumber").IsNotEqual(Column.Parameter(string.Empty))
					.Or("SearchNumber").Not().IsNull()
					.CloseBlock()
				as Select;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						contacts.Add(reader.GetColumnValue<Guid>("ContactId"));
					}
				}
			}
			return contacts;
		}

		/// <summary>
		/// Retrieves <see cref="SysAdminUnit"/> identifiers list containing list of <paramref name="emails"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="emails"> A list of email addresses.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> identifiers .</returns>
		public static Dictionary<Guid, string> GetUsersByEmails(UserConnection userConnection, List<string> emails) {
			return BaseContactUtilities.GetUsersByEmails(userConnection, emails);
		}

		/// <summary>
		/// Removes contacts from list of <paramref name="contacts"/> if users with this contacts exists.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contacts">List of contacts.</param>
		/// <param name="ignorePortalUsers">If true, <see cref="SysAdminUnit"/> with SSP ConnectionType selected as contact.
		/// </param>
		public static void RemoveUsersContacts(UserConnection userConnection, Dictionary<Guid, string> contacts,
				bool ignorePortalUsers = false) {
			var queryParameters = contacts.Select(item => new QueryParameter(item.Key)).ToList();
			var selectUsers = new Select(userConnection)
					.Column("sa", "ContactId")
					.From("SysAdminUnit").As("sa")
					.InnerJoin("Contact").As("co")
					.On("sa", "ContactId").IsEqual("co", "Id")
					.Where("sa", "ContactId").In(queryParameters) as Select;
			if (ignorePortalUsers) {
				selectUsers = selectUsers.And("sa", "ConnectionType")
						.IsNotEqual(Column.Parameter((int)UserType.SSP)) as Select;
			}
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = selectUsers.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						Guid contactId = reader.GetColumnValue<Guid>("ContactId");
						contacts.Remove(contactId);
					}
				}
			}
		}

		/// <summary>
		/// Retrieve contacts list containing <paramref name="email"/>.
		/// </summary>
		/// <param name="email">Email address.</param>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <returns>List of contacts.</returns>
		public static List<Guid> FindContactsByEmail(string email, UserConnection userConnection) {
			return BaseContactUtilities.FindContactsByEmail(email, userConnection);
		}

		/// <summary>
		/// Retrieve all contacts emails by <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <returns>List of contacts emails.</returns>
		public static List<string> GetContactEmails(UserConnection userConnection, Guid contactId) {
			return BaseContactUtilities.GetContactEmails(userConnection, contactId);
		}

		/// <summary>
		/// Retrieve last add contact email by <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <returns>List of contacts emails.</returns>
		public static string GetLastAddContactEmail(UserConnection userConnection, Guid contactId) {
			return BaseContactUtilities.GetLastAddContactEmail(userConnection, contactId);
		}

		/// <summary>
		/// Retrieve contacts email by contact Id <paramref name="contactId"/> and domain <paramref name="domain"/>.
		/// If domain not found in emails then return last created email.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <param name="domain">Domain in email.</param>
		/// <returns>Contact email.</returns>
		public static string FindContactEmail(UserConnection userConnection, Guid contactId, string domain) {
			domain = "@" + domain;
			string email = string.Empty;
			var communicationTypeContact = Guid.Parse(Terrasoft.Configuration.CommunicationTypeConsts.EmailId);
			var queryCase = new QueryCase();
			var queryCondition = new QueryCondition(QueryConditionType.EndWith) {
				LeftExpression = new QueryColumnExpression("Number")
			};
			queryCondition.RightExpressions.Add(new QueryParameter(domain));
			queryCase.AddWhenItem(queryCondition, Column.Parameter("1"));
			queryCase.ElseExpression = Column.Parameter("0");
			var select = new Select(userConnection)
				.Top(1)
					.Column(queryCase).As("IsContainDomain")
					.Column("CreatedOn")
					.Column("Number")
				.From("ContactCommunication")
				.Where("ContactId").IsEqual(Column.Parameter(contactId))
					.And("CommunicationTypeId").IsEqual(Column.Parameter(communicationTypeContact))
				.OrderByDesc("IsContainDomain")
				.OrderByDesc("CreatedOn") as Select;
			using (var dbExecutor = userConnection.EnsureDBConnection()) {
				using (IDataReader dataReader = select.ExecuteReader(dbExecutor)) {
					if (dataReader.Read()) {
						email = dataReader.GetColumnValue<string>("Number");
					}
				}
			}
			return email;
		}

		/// <summary>
		/// Returns contact email display value.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConntaction"/> instance.</param>
		/// <param name="email">Email address.</param>
		/// <param name="contactId">Contact Id.</param>
		/// <returns>Contact email display value.</returns>
		/// <remarks>
		/// Value format is "name <email>". Returns email if contact name contains valid email, 
		/// or contact for this email not exists.
		/// </remarks>
		public static string GetContactEmailDisplayValue(UserConnection userConnection, string email,
				out Guid contactId) {
			contactId = Guid.Empty;
			string contactIdQueryColumnName;
			string contactNameQueryColumnName;
			var contactCommunications = GetContactCommunicationsByEmail(userConnection, email, out contactIdQueryColumnName,
					out contactNameQueryColumnName);
			foreach (Entity contactCommunication in contactCommunications) {
				contactId = contactCommunication.GetTypedColumnValue<Guid>(contactIdQueryColumnName);
				string contactName = contactCommunication.GetTypedColumnValue<string>(contactNameQueryColumnName);
				string angleAddress = "<" + email + ">";
				int addressLimit = MediumTextDataValueType.TextSize - 1;
				string displayName = (contactName.Length > addressLimit)
					? contactName.Substring(0, addressLimit - angleAddress.Length)
					: contactName;
				List<string> emails = displayName.ParseEmailAddress();
				return emails.Count() > 0 ? email : string.Concat(displayName, " ", angleAddress);
			}
			return email;
		}

		/// <summary>
		/// Returns contact field converter.
		/// </summary>
		/// <returns>Contact field converter.</returns>
		public static IContactFieldConverter GetContactConverter(UserConnection userConnection) {
			object converterIdValue = Terrasoft.Core.Configuration.SysSettings.GetValue(userConnection, "ContactFieldConverter");
			if (converterIdValue == null || string.IsNullOrEmpty(converterIdValue.ToString())) {
				return null;
			}
			Guid converterId = Guid.Parse(converterIdValue.ToString());
			if (converterId == Guid.Empty) {
				return null;
			}
			var showNamesByESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "ShowNamesBy");
			showNamesByESQ.UseAdminRights = false;
			showNamesByESQ.PrimaryQueryColumn.IsAlwaysSelect = true;
			string converterColumnName = showNamesByESQ.AddColumn("Converter").Name;
			string separatorColumnName = showNamesByESQ.AddColumn("Separator").Name;
			showNamesByESQ.Filters.Add(
			showNamesByESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", converterId));
			EntityCollection showNamesByEntityCollection = showNamesByESQ.GetEntityCollection(userConnection);
			if (showNamesByEntityCollection.Count < 1) {
				return null;
			}
			string converterName = showNamesByEntityCollection[0].GetTypedColumnValue<string>(converterColumnName);
			if (string.IsNullOrEmpty(converterName)) {
				return null;
			}
			string separator = showNamesByEntityCollection[0].GetTypedColumnValue<string>(separatorColumnName);
			if (!userConnection.Workspace.IsWorkspaceAssemblyInitialized) {
				return null;
			}
			var converter = userConnection.Workspace.WorkspaceAssembly
				.CreateInstance(converterName) as IContactFieldConverter;
			if (converter == null) {
				return null;
			}
			if (!string.IsNullOrEmpty(separator)) {
				converter.Separator = separator.ToCharArray();
			}
			return converter;
		}

		#endregion

	}

	#endregion

}


