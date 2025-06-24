namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Data;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Store;

	#region Class: EmailParticipantHelper

	/// <summary>
	/// Contains utility methods for work with email participants.
	/// </summary>
	public class EmailParticipantHelper 
	{

		#region Constructors: Public

		/// <summary>
		/// Creates EmailParticipantHelper instance.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public EmailParticipantHelper(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Existing email message participants with roles dictionary.
		/// </summary>
		protected Dictionary<Guid, List<Guid>> Participants { get; set; }

		/// <summary>
		/// Emails list before email changed.
		/// </summary>
		protected List<string> OldEmails { get; set; } = new List<string>();

		/// <summary>
		/// Emails list after email changed.
		/// </summary>
		protected List<string> NewEmails { get; set; } = new List<string>();

		#endregion

		#region Properties: Public

		/// <summary>
		/// <see cref="ActivityParticipantRole"/> lookup.
		/// </summary>
		public Dictionary<string, Guid> ParticipantRoles { get; set; }

		/// <summary>
		/// Email message sender email.
		/// </summary>
		public string SenderEmail { get;  set; }

		/// <summary>
		/// Email recepients addresses list.
		/// </summary>
		public List<string> RecepientsEmails { get; set; } = new List<string>();

		/// <summary>
		/// Email copy recepients addresses list.
		/// </summary>
		public List<string> CopyRecepientsEmails { get; set; } = new List<string>();

		/// <summary>
		/// Email blind copy recepients addresses list.
		/// </summary>
		public List<string> BlindCopyRecepientsEmails { get; set; } = new List<string>();

		/// <summary>
		/// List recepients e-mail addresses for delete.
		/// </summary>
		public List<string> RecepientsEmailsForDelete { get; set; } = new List<string>();

		/// <summary>
		/// List new recepients e-mail addresses.
		/// </summary>
		public List<string> NewRecepientsEmails { get; set; } = new List<string>();

		/// <summary>
		/// List old recepients e-mail addresses.
		/// </summary>
		public List<string> OldRecepientsEmails { get; set; } = new List<string>();

		/// <summary>
		/// New contact uniqueidentifier in email entity.
		/// </summary>
		public Guid NewContactId { get; set; }

		/// <summary>
		/// Old contact uniqueidentifier in email entity.
		/// </summary>
		public Guid OldContactId { get; set; }

		/// <summary>
		/// <see cref="Activity"/> instance.
		/// </summary>
		public Entity Email { get; set; }

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		public UserConnection UserConnection { get; set; }

		/// <summary>
		/// New activity participants parameters.
		/// </summary>
		public Dictionary<Guid, Dictionary<string, object>> InsertedValues { get; set; } = new Dictionary<Guid, Dictionary<string, object>>();

		/// <summary>
		/// Flag, indicates if email entity is new.
		/// </summary>
		public bool IsNew { get; set; }

		#endregion

		#region Methods: Protected
		
		/// <summary>
		/// Creates activity participants from inserted values.
		/// </summary>
		protected virtual void CreateActivityParticipantsFromInsertedValues() {
			var activityParticipantSchema = UserConnection.EntitySchemaManager.GetInstanceByName("ActivityParticipant");
			foreach (var participantParams in InsertedValues) {
				var activityParticipant = activityParticipantSchema.CreateEntity(UserConnection);
				activityParticipant.UseAdminRights = GlobalAppSettings.FeatureUseAdminRightsInEmbeddedLogic;
				activityParticipant.SetDefColumnValues();
				activityParticipant.SetColumnValue("ActivityId", Email.PrimaryColumnValue);
				activityParticipant.SetColumnValue("ParticipantId", participantParams.Key);
				foreach (var parameter in participantParams.Value) {
					string key = parameter.Key;
					object value = parameter.Value;
					activityParticipant.SetColumnValue(key, value);
					if (Email.GetTypedColumnValue<Guid>("SenderContactId") == Guid.Empty && parameter.Key == "RoleId") {
						Guid participantRoleId = new Guid(value.ToString());
						if (participantRoleId == ParticipantRoles["From"]) {
							SetEmailSenderContact(participantParams.Key);
						}
					}
				}
				activityParticipant.Save();
			}
		}

		/// <summary>
		/// Sets email sender contact.
		/// <param name="senderContactId">Email sender contact identifier.</param>
		/// </summary>
		protected virtual void SetEmailSenderContact(Guid senderContactId) {
			Update update = new Update(UserConnection, "Activity")
				.Set("SenderContactId", Column.Parameter(senderContactId))
				.Where("Id").IsEqual(Column.Parameter(Email.PrimaryColumnValue)) as Update;
			update.Execute();
		}

		/// <summary>
		/// Adds activity participant to inserted values.
		/// </summary>
		/// <param name="participantId">Participant uniqueidentifier.</param>
		/// <param name="participantParams">Participant parameters.</param>
		/// <param name="overrideExistingParticipant">Flag, true if it need to update activity participant.</param>
		protected virtual void AddActivityParticipantToInsertedValues(Guid participantId,
				Dictionary<string, object> participantParams, bool overrideExistingParticipant) {
			if (!IsEmailParticipantExistsByRoles(participantId, ParticipantRoles) && (overrideExistingParticipant ||
				!InsertedValues.ContainsKey(participantId))) {
				InsertedValues[participantId] = participantParams;
			}
		}

		/// <summary>
		/// Gets sender email.
		/// </summary>
		/// <param name="sender"></param>
		/// <returns>Sender email.</returns>
		protected virtual string GetSenderEmail(string sender) {
			List<string> senderList = sender.ParseEmailAddress();
			if (senderList.Count > 1) {
				 return senderList.Last();
			}
			return senderList.Count == 1 ? senderList[0] : string.Empty;
		}

		/// <summary>
		/// Gets emails by <paramref name="formatedEmails"/>.
		/// </summary>
		/// <param name="formatedEmails">Formatted emails.</param>
		/// <returns>Email list.</returns>
		protected virtual List<string> GetEmailsByFormatedEmails(string formatedEmails) {
			return formatedEmails.ParseEmailAddress();
		}

		/// <summary>
		/// Deletes duplicated emails in lists of <see cref="RecepientsEmails"/> and <see cref="CopyRecepientsEmails"/> 
		/// and <see cref="BlindCopyRecepientsEmails"/>
		/// </summary>
		protected virtual void DeleteDuplicatesEmails() {
			RecepientsEmails.Remove(SenderEmail);
			CopyRecepientsEmails.RemoveAll(item => item == SenderEmail || RecepientsEmails.Contains(item));
			BlindCopyRecepientsEmails.RemoveAll(item => item == SenderEmail || RecepientsEmails.Contains(item) || CopyRecepientsEmails.Contains(item));
		}

		/// <summary>
		/// Flag, indicates if email participant exists by the <paramref name="roles"/>.
		/// </summary>
		/// <param name="contactId">Contact identifier.</param>
		/// <param name="roles">list of participant roles.</param>
		/// <returns>Flag, true if email participant exists by the roles.</returns>
		protected virtual bool IsEmailParticipantExistsByRoles(Guid contactId, Dictionary<string, Guid> roles) {
			if (contactId.IsNotEmpty()) {
				if (!Participants.ContainsKey(contactId)) {
					return false;
				}
				IEnumerable<Guid> participantRoles = Participants[contactId];
				return participantRoles.Any(role => roles.Any(kvp => kvp.Value.Equals(role)));
			}
			return Participants.Any(p => p.Value.Any(role => roles.Any(kvp => kvp.Value.Equals(role))));
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected virtual void AddDeletedValues() {
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected virtual bool AddDeletedValue(string recepients, List<string> recepientsEmails, string recepient) {
			return false;
		}

		/// <summary>
		/// Gets all emails from email message.
		/// </summary>
		/// <returns>List all emails from email message</returns>
		protected virtual List<string> GetUsedEmails() {
			return NewEmails.Where(res => !OldEmails.Contains(res)).ToList();
		}

		/// <summary>
		/// Loads existing <paramref name="email"/> participants list from database.
		/// New emails skips this metod.
		/// </summary>
		/// <param name="email"><see cref="Activity"/> instance.</param>
		protected void LoadEmailParticipants(Entity email) {
			Participants = new Dictionary<Guid, List<Guid>>();
			if (IsNew) {
				return;
			}
			Select selectParticipant = new Select(UserConnection)
					.Column("ParticipantId")
					.Column("RoleId")
				.From("ActivityParticipant")
				.Where("ActivityId").IsEqual(Column.Parameter(email.PrimaryColumnValue)) as Select;
			using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
				using (IDataReader reader = selectParticipant.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						Guid participantId = reader.GetColumnValue<Guid>("ParticipantId");
						Guid roleId = reader.GetColumnValue<Guid>("RoleId");
						if (!Participants.ContainsKey(participantId)) {
							Participants[participantId] = new List<Guid>();
						}
						List<Guid> roles = Participants[participantId];
						roles.AddIfNotExists(roleId);
					}
				}
			}
		}

		/// <summary>
		/// Sets inserted values for email participants.
		/// </summary>
		protected virtual void SetInsertedValues() {
			var emails = GetUsedEmails();
			Dictionary<Guid, string> contacts = GetContactsByEmails(UserConnection, emails);
			foreach (KeyValuePair<Guid, string> contact in contacts) {
				string contactEmail = contact.Value;
				Guid contactId = contact.Key;
				Guid roleId = contactEmail.Equals(SenderEmail, StringComparison.InvariantCultureIgnoreCase) ? ParticipantRoles["From"] : ParticipantRoles["To"];
				AddActivityParticipantToInsertedValues(contactId,
					new Dictionary<string, object> {
						{ "ReadMark", false },
						{ "RoleId", roleId }
					}, true);
			}
			SetCurrentPatricipant();
		}

		/// <summary>
		/// Sets current user to email participant.
		/// </summary>
		protected virtual void SetCurrentPatricipant() {
			Guid userContactId = UserConnection.CurrentUser.ContactId;
			var senderContacts = GetContactsByEmails(UserConnection, new List<string> {
				SenderEmail
			});
			bool addAsRecepient = !InsertedValues.ContainsKey(userContactId) &&
					!IsEmailParticipantExistsByRoles(userContactId, ParticipantRoles);
			bool addAsSender = senderContacts.ContainsKey(userContactId) ||
					(SenderEmail.IsEmpty() && addAsRecepient);
			if (addAsSender) {
				AddActivityParticipantToInsertedValues(userContactId,
					new Dictionary<string, object> {
						{ "ReadMark", true },
						{ "RoleId", ParticipantRoles["From"] }
					}, true);
			} else if (addAsRecepient) {
				AddActivityParticipantToInsertedValues(userContactId,
					new Dictionary<string, object> {
						{ "RoleId", ParticipantRoles["To"] }
					}, false);
			}
		}

		/// <summary>
		/// Updates Email participant if the entity attached to the contact.
		/// </summary>
		protected virtual void UpdateParticipantsByContact() {
			if (UserConnection.GetIsFeatureEnabled("DoNotCreateEmailParticipantForContact")) {
				return;
			}
			var isNewContact = !NewContactId.Equals(OldContactId);
			var noActiveRoles = ParticipantRoles.Where(item => item.Key == "Participant" ||
				item.Key == "Responsible").ToDictionary(x => x.Key, x => x.Value);
			if (!NewContactId.IsEmpty() && isNewContact &&
					!IsEmailParticipantExistsByRoles(NewContactId, ParticipantRoles)) {
				AddActivityParticipantToInsertedValues(
					NewContactId,
					new Dictionary<string, object> {
						{"RoleId", ParticipantRoles["Participant"]}
					},
					false
				);
			}
			else if ((isNewContact || NewContactId.IsEmpty()) &&
			  IsEmailParticipantExistsByRoles(OldContactId, noActiveRoles) &&
			  !NewContactId.Equals(UserConnection.CurrentUser.ContactId)) {
				RemoveEmailParticipantByContactId(OldContactId);
			}
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected void InitializesRecepientsEmailsForDelete() {
		}

		/// <summary>
		/// Sets contact unique identifier properties.
		/// </summary>
		/// <param name="value">Current contact uniqueidentifier.</param>
		/// <param name="oldValue">Old contact uniqueidentifier.</param>
		protected virtual void SetContactsId(object value, object oldValue) {
			NewContactId = value == null ? Guid.Empty : new Guid(value.ToString());
			OldContactId = oldValue == null ? Guid.Empty : new Guid(oldValue.ToString());
		}

		/// <summary>
		/// Adds previous and current sender email value to <see cref="NewEmails"/> and <see cref="OldEmails"/> lists.
		/// </summary>
		/// <param name="value"><see cref="Activity.Sender"/> column current value.</param>
		/// <param name="oldValue"><see cref="Activity.Sender"/> column previous value.</param>
		protected void SaveSenderEmailDiff(object value, object oldValue) {
			if (value != null) {
				string email = GetSenderEmail((string)value);
				if (email.IsNotEmpty()) {
					NewEmails.AddIfNotExists(email);
				}
			}
			if (oldValue != null) {
				string email = GetSenderEmail((string)oldValue);
				if (email.IsNotEmpty()) {
					OldEmails.AddIfNotExists(email);
				}
			}
		}

		/// <summary>
		/// Initialises recepients from entity <paramref name="value"/> and <paramref name="oldValue"/>.
		/// </summary>
		/// <param name="value">Recepients value.</param>
		/// <param name="oldValue">Old recepients value.</param>
		/// <returns>Recepients list.</returns> 
		protected virtual List<string> InitializeRecepients(object value, object oldValue) {
			NewRecepientsEmails.Clear();
			OldRecepientsEmails.Clear();
			if (value != null) {
				List<string> emails = GetEmailsByFormatedEmails((string)value);
				NewRecepientsEmails = emails;
				NewEmails = NewEmails.Union(emails).Where(e => !e.IsNullOrEmpty()).ToList();
			}
			if (oldValue != null) {
				List<string> emails = GetEmailsByFormatedEmails((string)oldValue);
				OldRecepientsEmails = emails;
				OldEmails = OldEmails.Union(emails).Where(e => !e.IsNullOrEmpty()).ToList();
			}
			return NewRecepientsEmails.Where(res => !OldRecepientsEmails.Contains(res)).ToList();
		}

		/// <summary>
		/// Retrieves contacts list containing list of <paramref name="emails"/>.
		/// </summary>
		/// <param name="userConnection">A instance of the current user connection.</param>
		/// <param name="emails"> A list of email addresses.</param>
		/// <returns>List of contacts.</returns>
		protected virtual Dictionary<Guid, string> GetContactsByEmails(UserConnection userConnection, List<string> emails) {
			return ContactUtilities.GetContactsByEmails(userConnection, emails.Where(e => !e.IsNullOrEmpty()).ToList());
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected virtual void RemoveUsersContacts(UserConnection userConnection, Dictionary<Guid, string> contacts,
				bool ignorePortalUsers = false) {
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected virtual bool IsUserByContactExist(UserConnection userConnection, Guid contactId,
				bool ignorePortalUsers = false) {
			return false;
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected void SetDraftFrom() {
		}

		[Obsolete("Will be removed after 7.11.2")]
		protected bool IsInsertedValuesContainsRole(string code) {
			return false;
		}

		/// <summary>
		/// Returns <paramref name="email"/> changed column values.
		/// </summary>
		/// <param name="email"><see cref="Activity"/> instance.</param>
		/// <param name="regenerate">Use all address columns as changed flag.</param>
		/// <returns><see cref="EntityColumnValue"/> collection.</returns>
		protected virtual IEnumerable<EntityColumnValue> GetChangedColumnValues(Entity email, bool regenerate) {
			if (regenerate) {
				return new[] { "Sender", "Recepient", "CopyRecepient", "BlindCopyRecepient" }
					.Select(n => new EntityColumnValue(UserConnection) {
						Name = n,
						Value = email.GetColumnValue(n)
					});
			}
			return email.GetChangedColumnValues();
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns Localized warning about more than one sender email set.
		/// </summary>
		/// <returns>Localized warning about more than one sender email set.</returns>
		public virtual string GetSenderEmailMoreThenOne() {
			return new LocalizableString(UserConnection.ResourceStorage, "EmailParticipantHelper",
					"LocalizableStrings.SenderEmailMoreThenOne.Value").ToString();
		}

		/// <summary>
		/// Initialazes initial parameters.
		/// </summary>
		/// <param name="email">Email entity.</param>
		/// <param name="regenerate">Force regenerate participants flag.</param>
		public virtual void InitializeParameters(Entity email, bool regenerate = false) {
			ParticipantRoles = ParticipantRoles ?? ActivityUtils.GetParticipantsRoles(UserConnection);
			Email = email;
			LoadEmailParticipants(email);
			string sender = string.Empty;
			var senderColumn = Email.Schema.Columns.FindByName("Sender");
			if (senderColumn != null) {
				sender = Email.GetTypedColumnValue<string>(senderColumn.ColumnValueName);
			}
			SenderEmail = GetSenderEmail(sender);
			foreach (EntityColumnValue column in GetChangedColumnValues(email, regenerate)) {
				switch (column.Name) {
					case "Sender":
						SenderEmail = column.Value != null ? GetSenderEmail((string)column.Value) : string.Empty;
						SaveSenderEmailDiff(column.Value, column.OldValue);
						break;
					case "Recepient":
						RecepientsEmails = InitializeRecepients(column.Value, column.OldValue);
						break;
					case "CopyRecepient":
						CopyRecepientsEmails = InitializeRecepients(column.Value, column.OldValue);
						break;
					case "BlindCopyRecepient":
						BlindCopyRecepientsEmails = InitializeRecepients(column.Value, column.OldValue);
						break;
					case "ContactId":
						SetContactsId(column.Value, column.OldValue);
						break;
					default:
						break;
				}
			}
			DeleteDuplicatesEmails();
		}

		/// <summary>
		/// Sets participants for the current email entity.
		/// </summary>
		public virtual void SetEmailParticipants() {
			SetInsertedValues();
			UpdateParticipantsByContact();
			CreateActivityParticipantsFromInsertedValues();
		}

		[Obsolete("Will be removed after 7.11.2")]
		public virtual void RemoveEmailParticipants() {
		}

		/// <summary>
		/// Removes email participant by <paramref name="contactId"/>.
		/// </summary>
		/// <param name="contactId">Contact uniqueidentifier.</param>
		public virtual void RemoveEmailParticipantByContactId(Guid contactId) {
			new Delete(UserConnection)
				.From("ActivityParticipant")
				.Where("ActivityId").IsEqual(Column.Parameter(Email.PrimaryColumnValue))
				.And("RoleId").IsEqual(Column.Parameter(ParticipantRoles["Participant"]))
				.And("ParticipantId").IsEqual(Column.Parameter(contactId)).Execute();
		}

		[Obsolete("Will be removed after 7.11.2")]
		public virtual void SaveActivityParticipant(Entity activityParticipant) {
		}

		#endregion

	#endregion

	}
}

