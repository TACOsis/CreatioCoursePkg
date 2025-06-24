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

	#region Class: BaseContactUtilities

	/// <summary>
	/// Provides <see cref="Contact"/> utility methods.
	/// </summary>
	public static class BaseContactUtilities
	{
		
		#region Methods: Private
		
		/// <summary>
		/// Create`s esq to ContactCommunication for <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <returns>List of contacts emails.</returns>
		private static EntitySchemaQuery GetContactCommunicationsEsq(UserConnection userConnection, Guid contactId) {
			var contactEmailsESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "ContactCommunication");
			contactEmailsESQ.AddColumn("Number");
			contactEmailsESQ.Filters.Add(contactEmailsESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "Contact",
				contactId));
			contactEmailsESQ.Filters.Add(contactEmailsESQ.CreateFilterWithParameters(FilterComparisonType.Equal,
				"CommunicationType", Guid.Parse(Terrasoft.Configuration.CommunicationTypeConsts.EmailId)));
			return contactEmailsESQ;
		}
			
		#endregion

		#region Methdos: Public

		/// <summary>
		/// Retrieve contacts list containing <paramref name="email"/>.
		/// </summary>
		/// <param name="email">Email address.</param>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <returns>List of contacts.</returns>
		public static List<Guid> FindContactsByEmail(string email, UserConnection userConnection) {
			var findedContactsUIds = new List<Guid>();
			var contactCommunicationESQ = new EntitySchemaQuery(userConnection.EntitySchemaManager, "ContactCommunication");
			contactCommunicationESQ.Filters.Add(
				contactCommunicationESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "CommunicationType", 
				Guid.Parse(Terrasoft.Configuration.CommunicationTypeConsts.EmailId)));
			contactCommunicationESQ.Filters.Add(contactCommunicationESQ.CreateFilterWithParameters(FilterComparisonType.Equal,
				"Number", email));
			var entitySchemaColumn = contactCommunicationESQ.AddColumn("Contact");
			var resultCollection = contactCommunicationESQ.GetEntityCollection(userConnection);
			foreach (var entity in resultCollection) {
				var findedContactUId = entity.GetTypedColumnValue<Guid>(entitySchemaColumn.ValueExpression.QueryColumnAlias);
				if (!findedContactsUIds.Contains(findedContactUId)) {
					findedContactsUIds.Add(findedContactUId);
				}
			}
			return (findedContactsUIds);
		}
		
		/// <summary>
		/// Retrieves <see cref="SysAdminUnit"/> identifiers list containing list of <paramref name="emails"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="emails"> A list of email addresses.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> identifiers .</returns>
		public static Dictionary<Guid, string> GetUsersByEmails(UserConnection userConnection, List<string> emails) {
			var users = new Dictionary<Guid, string>();
			if (!emails.Any()) {
				return users;
			}
			var select = new Select(userConnection)
				.Column("Comm", "Number")
				.Column("SAU", "Id").As("UserId")
				.From("ContactCommunication").As("Comm")
					.InnerJoin("SysAdminUnit").As("SAU").On("SAU", "ContactId").IsEqual("Comm", "ContactId")
				.Where("Comm", "SearchNumber").In(Column.Parameters(emails.Select(e => e.ToLower())))
				.And("Comm", "CommunicationTypeId").IsEqual(Column.Parameter(Guid.Parse(CommunicationTypeConsts.EmailId)))
				.And().OpenBlock("Comm", "Number").IsNotEqual(Column.Parameter(String.Empty))
					.Or("Comm", "Number").Not().IsNull()
					.CloseBlock() as Select;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						string number = reader.GetColumnValue<string>("Number");
						Guid contactId = reader.GetColumnValue<Guid>("UserId");
						users[contactId] = number;
					}
				}
			}
			return users;
		}

		/// <summary>
		/// Retrieves contacts list containing list of <paramref name="emails"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="emails"> A list of email addresses.</param>
		/// <returns>List of contacts.</returns>
		public static Dictionary<Guid, string> GetContactsByEmails(UserConnection userConnection, List<string> emails) {
			var contacts = new Dictionary<Guid, string>();
			var searchEmails = emails.Select(e => e.Trim().ToLower()).Where(e => e.IsNotNullOrEmpty());
			if (!searchEmails.Any()) {
				return contacts;
			}
			var select = new Select(userConnection)
				.Column("ContactCommunication", "Number")
				.Column("ContactCommunication", "ContactId")
				.From("ContactCommunication")
				.InnerJoin("Contact").On("Contact", "Id").IsEqual("ContactCommunication", "ContactId")
				.Where("SearchNumber").In(Column.Parameters(searchEmails))
				.And("CommunicationTypeId").IsEqual(Column.Parameter(Guid.Parse(CommunicationTypeConsts.EmailId)))
				.And().OpenBlock("SearchNumber").IsNotEqual(Column.Parameter(string.Empty))
					.Or("SearchNumber").Not().IsNull()
					.CloseBlock()
				.OrderBy(OrderDirectionStrict.Ascending, "Contact", "CreatedOn") as Select;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						string number = reader.GetColumnValue<string>("Number");
						Guid contactId = reader.GetColumnValue<Guid>("ContactId");
						contacts[contactId] = number;
					}
				}
			}
			return contacts;
		}

		/// <summary>
		/// Retrieve last add contact email by <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <returns>List of contacts emails.</returns>
		public static string GetLastAddContactEmail(UserConnection userConnection, Guid contactId) {
			var contactEmailsESQ = GetContactCommunicationsEsq(userConnection, contactId);
			contactEmailsESQ.AddColumn("CreatedOn").OrderByDesc();
			var resultCollection = contactEmailsESQ.GetEntityCollection(userConnection);
			return resultCollection.Any() ? resultCollection[0].GetTypedColumnValue<string>("Number") : String.Empty;
		}

		/// <summary>
		/// Retrieve all contacts emails by <paramref name="contactId"/>.
		/// </summary>
		/// <param name="userConnection">Instance of the current user connection.</param>
		/// <param name="contactId">Contact unique identifier.</param>
		/// <returns>List of contacts emails.</returns>
		public static List<string> GetContactEmails(UserConnection userConnection, Guid contactId) {
			var contactEmailsESQ = GetContactCommunicationsEsq(userConnection, contactId);
			var resultCollection = contactEmailsESQ.GetEntityCollection(userConnection);
			return resultCollection.Select(entity => entity.GetTypedColumnValue<string>("Number")).ToList();
		}

		#endregion

	}

	#endregion

}

 
