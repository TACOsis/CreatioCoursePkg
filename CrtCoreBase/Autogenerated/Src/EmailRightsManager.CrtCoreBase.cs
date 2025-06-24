namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;

	#region Class: EmailRightsManager

	/// <summary>
	/// Class provides methods for email messages record rights actualization.
	/// Email record resived related mailbox record rights by default.
	/// Default activity record rights ignored.
	/// </summary>
	public class EmailRightsManager
	{

		#region Fields: Private

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		private readonly UserConnection _userConnection;

		/// <summary>
		/// Is email entity administrated by records flag.
		/// </summary>
		private readonly bool _isEmailEntityAdministratedByRecords;

		/// <summary>
		/// Email entity schema name.
		/// </summary>
		private readonly string _emailEntityName = "Activity";

		/// <summary>
		/// Mailbox entity schema name.
		/// </summary>
		private readonly string _mailboxRightsSchemaName;

		/// <summary>
		/// Is email entity uses deny record rights flag.
		/// </summary>
		private readonly bool _useEmailDenyRecordRights;

		#endregion

		#region Constructors: Public

		public EmailRightsManager(UserConnection userConnection) {
			_userConnection = userConnection;
			_isEmailEntityAdministratedByRecords = userConnection.DBSecurityEngine.GetIsEntitySchemaAdministratedByRecords(_emailEntityName);
			_mailboxRightsSchemaName = _userConnection.DBSecurityEngine.GetRecordRightsSchemaName("MailboxSyncSettings");
			_useEmailDenyRecordRights = _userConnection.EntitySchemaManager.GetInstanceByName(_emailEntityName).UseDenyRecordRights;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Sets email full record rights, when current user is email author.
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		private void SetAuthorRecordRights(Entity activity) {
			Guid emailId = activity.PrimaryColumnValue;
			SetEmailRecordRights(emailId, GetFullRightsForCurrentUser());
		}

		/// <summary>
		///  Sets email full record rights for email owner.
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		private void SetOwnerRights(Entity activity) {
			Guid emailId = activity.PrimaryColumnValue;
			var ownerColumn = activity.Schema.OwnerColumn;
			if (ownerColumn == null) {
				return;
			}
			var ownerId = activity.GetTypedColumnValue<Guid>(ownerColumn);
			if (ownerId.IsNotEmpty()) {
				SetEmailRecordRights(emailId, GetFullRightsForContact(ownerId));
			}
		}

		/// <summary>
		/// Sets email record rights, using related mailbox as default rights set.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		private void SetRecordRights(Entity emailMessageData) {
			Guid emailId = emailMessageData.GetTypedColumnValue<Guid>("ActivityId");
			SetEmailRecordRights(emailId, GetMessageRightsFromMailbox(emailMessageData));
		}

		/// <summary>
		/// Sets email record rights, using related mailbox as default rights set.
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		/// <param name="mailboxId">Related mailbox unique identifier.</param>
		private void SetRecordRights(Entity activity, Guid mailboxId) {
			Guid emailId = activity.PrimaryColumnValue;
			var rights = mailboxId.IsEmpty()
				? GetFullRightsForCurrentUser()
				: GetRecordRightsWithoutLookups(mailboxId);
			SetEmailRecordRights(emailId, rights);
		}

		/// <summary>
		/// Creates mailbox rights list <see cref="Select"/> query instance. 
		/// </summary>
		/// <param name="tableName">Rights table name.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <returns><see cref="Select"/> query instance.</returns>
		private Select GetLoadRightsSelect(string tableName, Guid mailboxId) {
			return new Select(_userConnection)
					.Column(tableName, "SysAdminUnitId")
					.Column(tableName, "Operation")
					.Column(tableName, "RightLevel")
					.Column(tableName, "Position")
				.From(tableName).WithHints(new NoLockHint())
				.Where(tableName, "RecordId").IsEqual(Column.Parameter(mailboxId)) as Select;
		}

		/// <summary>
		/// Loads exicting record rights for mailbox record from <paramref name="tableName"/>.
		/// </summary>
		/// <param name="tableName">Default email rights table name.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <returns>List of exicting record rights for mailbox record.</returns>
		private List<RecordRightsParams> LoadRightsFromDb(string tableName, Guid mailboxId) {
			var result = new List<RecordRightsParams>();
			var recordRightsSelect = GetLoadRightsSelect(tableName, mailboxId)
				.OrderByAsc(tableName, "Operation")
				.OrderByAsc(tableName, "Position") as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				using (var reader = recordRightsSelect.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						result.Add(new RecordRightsParams {
							SysAdminUnitId = reader.GetColumnValue<Guid>("SysAdminUnitId"),
							Operation = reader.GetColumnValue<int>("Operation"),
							RightLevel = reader.GetColumnValue<int>("RightLevel"),
							Position = reader.GetColumnValue<int>("Position")
						});
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Loads exicting record rights filtered by <paramref name="operation"/> for mailbox record from
		/// <paramref name="tableName"/>.
		/// </summary>
		/// <param name="tableName">Default email rights table name.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <param name="operation">Administrated record operation code.</param>
		/// <returns>List of exicting record rights for mailbox record.</returns>
		private List<RecordRightsParams> LoadRightsFromDb(string tableName, Guid mailboxId, int operation) {
			var result = new List<RecordRightsParams>();
			var recordRightsSelect = GetLoadRightsSelect(tableName, mailboxId)
				.And(tableName, "Operation").IsEqual(Column.Parameter(operation))
				.And(tableName, "RightLevel").Not().IsEqual(Column.Const((int)EntitySchemaRecordRightLevel.Deny)) as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				using (var reader = recordRightsSelect.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						result.Add(new RecordRightsParams {
							SysAdminUnitId = reader.GetColumnValue<Guid>("SysAdminUnitId"),
							Operation = operation,
							RightLevel = reader.GetColumnValue<int>("RightLevel"),
							Position = reader.GetColumnValue<int>("Position")
						});
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Returns exicting record rights for mailbox record.
		/// </summary>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		/// <returns>List of exicting record rights for mailbox record.</returns>
		private List<RecordRightsParams> GetRecordRightsWithoutLookups(Guid mailboxId) {
			return LoadRightsFromDb("EmailDefRights", mailboxId).Union(GetFullRightsForCurrentUser()).ToList();
		}

		/// <summary>
		/// Returns related to <paramref name="contactId"/> <see cref="SysAdminUnit"/> unique identifier.
		/// </summary>
		/// <param name="contactId"><see cref="Contact"/> unique identifier.</param>
		/// <returns>Related to <paramref name="contactId"/> <see cref="SysAdminUnit"/> unique identifier.</returns>
		private Guid GetSysAdminUnitId(Guid contactId) {
			var select = new Select(_userConnection).Top(1)
				.Column("Id")
				.From("SysAdminUnit")
				.Where("ContactId").IsEqual(Column.Parameter(contactId)) as Select;
			return select.ExecuteScalar<Guid>();
		}

		/// <summary>
		/// Creates full record rights list for <paramref name="userId"/>.
		/// </summary>
		/// <param name="userId"><see cref="SysAdminUnit"/> unique identifier.</param>
		/// <returns>Full record rights list for user.</returns>
		private List<RecordRightsParams> GetFullRightsForUser(Guid userId) {
			return new List<RecordRightsParams> {
				new RecordRightsParams {
					SysAdminUnitId = userId,
					Operation = (int)EntitySchemaRecordRightOperation.Read,
					RightLevel = (int)EntitySchemaRecordRightLevel.AllowAndGrant
				},
				new RecordRightsParams {
					SysAdminUnitId = userId,
					Operation = (int)EntitySchemaRecordRightOperation.Edit,
					RightLevel = (int)EntitySchemaRecordRightLevel.AllowAndGrant
				},
				new RecordRightsParams {
					SysAdminUnitId = userId,
					Operation = (int)EntitySchemaRecordRightOperation.Delete,
					RightLevel = (int)EntitySchemaRecordRightLevel.AllowAndGrant
				}
			};
		}

		/// <summary>
		/// Creates full record rights list for current user.
		/// </summary>
		/// <returns>Full record rights list for current user.</returns>
		private List<RecordRightsParams> GetFullRightsForCurrentUser() {
			return GetFullRightsForUser(_userConnection.CurrentUser.Id);
		}

		/// <summary>
		/// Creates full record rights list for related to <paramref name="contactId"/> user.
		/// </summary>
		/// <returns>Full record rights list for related to <paramref name="contactId"/> user.</returns>
		private List<RecordRightsParams> GetFullRightsForContact(Guid contactId) {
			var userId = GetSysAdminUnitId(contactId);
			return userId.IsEmpty() ? new List<RecordRightsParams>() : GetFullRightsForUser(userId);
		}

		/// <summary>
		/// Saves <paramref name="rightsSet"/> record rights list for <paramref name="emailId"/> message.
		/// </summary>
		/// <param name="emailId"><see cref="Activity"/> instance unique identifier.</param>
		/// <param name="rightsSet">Record rights list.</param>
		private void SetEmailRecordRights(Guid emailId, List<RecordRightsParams> rightsSet) {
			if (rightsSet.IsEmpty()) {
				return;
			}
			foreach (RecordRightsParams recordRight in rightsSet) {
				_userConnection.DBSecurityEngine.SetEntitySchemaRecordOperationRightLevel(
					recordRight.SysAdminUnitId, _emailEntityName, emailId,
					(EntitySchemaRecordRightOperation)recordRight.Operation, (EntitySchemaRecordRightLevel)recordRight.RightLevel,
					_useEmailDenyRecordRights, true);
			}
			EntitySchema activitySchema = _userConnection.EntitySchemaManager.GetInstanceByName(_emailEntityName);
			Entity activity = activitySchema.CreateEntity(_userConnection);
			activity.UpdateRecordRightsPosition(emailId);
		}

		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers from 
		/// <paramref name="sysAdminUnitGroups"/> groups.
		/// </summary>
		/// <param name="sysAdminUnitGroups">List of <see cref="SysAdminUnit"/> groups unique identifiers.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers.</returns>
		private IEnumerable<Guid> GetUsersFromGroups(IEnumerable<Guid> sysAdminUnitGroups) {
			var result = new List<Guid>();
			if (sysAdminUnitGroups.IsEmpty()) {
				return result;
			}
			Select usersSelect = new Select(_userConnection).Distinct()
					.Column("SysAdminUnitId")
				.From("SysAdminUnitInRole").WithHints(new NoLockHint())
				.Where("SysAdminUnitRoleId").In(Column.Parameters(sysAdminUnitGroups)) as Select;
			using (var dbExecutor = _userConnection.EnsureDBConnection()) {
				using (var reader = usersSelect.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						result.Add(reader.GetColumnValue<Guid>("SysAdminUnitId"));
					}
				}
			}
			return result;
		}

		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers. Filled with user which allowed 
		/// <paramref name="operation"/> for <paramref name="emailMessageData"/> related mailbox.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="operation">Administrated record operation code.</param>
		/// <param name="explicitOnly">Use rights defined in DB only flag.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers. </returns>
		private IEnumerable<Guid> GetUsersWithRightsForMailbox(Entity emailMessageData, EntitySchemaRecordRightOperation operation, bool explicitOnly) {
			Guid mailboxId = emailMessageData.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			if (mailboxId.IsEmpty()) {
				return new List<Guid>();
			}
			var sendAllowedUsersGroup = LoadRightsFromDb(_mailboxRightsSchemaName, mailboxId, (int)operation);
			var emailsReadAllowedUsersGroup = LoadRightsFromDb("EmailDefRights", mailboxId, (int)operation);
			if (!explicitOnly) {
				emailsReadAllowedUsersGroup = emailsReadAllowedUsersGroup.Union(GetFullRightsForCurrentUser()).ToList();
			}
			var sendAllowedUsers = GetUsersFromGroups(sendAllowedUsersGroup.Select(rrp => rrp.SysAdminUnitId));
			var emailsReadAllowedUsers = GetUsersFromGroups(emailsReadAllowedUsersGroup.Select(rrp => rrp.SysAdminUnitId));
			return sendAllowedUsers.Where(sau => emailsReadAllowedUsers.Any(erau => erau.Equals(sau)));
		}
		
		#endregion

		#region Methods: Protected

		/// <summary>
		/// Returns is email message record rights must be set.
		/// </summary>
		/// <returns><c>True</c> when email message record rights must be set, <c>false</c> otherwise.</returns>
		protected virtual bool NeedSetEmailRecordRights() {
			return _isEmailEntityAdministratedByRecords;
		}

		/// <summary>
		/// Checks <paramref name="email"/> is email message instance.
		/// </summary>
		/// <param name="email"><see cref="Activity"/> instance.</param>
		/// <returns><c>True</c> when <paramref name="email"/> is email message, <c>flase</c> otherwise.</returns>
		protected bool GetEntityIsEmail(Entity email) {
			return email.SchemaName.Equals(_emailEntityName) && email.GetTypedColumnValue<Guid>("TypeId")
				.Equals(ActivityConsts.EmailTypeUId);
		}

		/// <summary>
		/// Returns <paramref name="emailMessageData"/> related mailbox record rights.
		/// When mailbox not specified, returns full rights list for current user.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <returns></returns>
		protected virtual List<RecordRightsParams> GetMessageRightsFromMailbox(Entity emailMessageData) {
			Guid mailboxId = emailMessageData.GetTypedColumnValue<Guid>("MailboxSyncSettings");
			if (mailboxId.IsEmpty()) {
				return GetFullRightsForCurrentUser();
			}
			return GetRecordRightsWithoutLookups(mailboxId);
		}

		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers. Filled with user which allowed 
		/// <paramref name="operation"/> for <paramref name="emailMessageData"/> related mailbox.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="operation">Administrated record operation code.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers. </returns>
		protected virtual IEnumerable<Guid> GetUsersWithRightsForMailbox(Entity emailMessageData, EntitySchemaRecordRightOperation operation) {
			return GetUsersWithRightsForMailbox(emailMessageData, operation, false);
		}

		/// <summary>
		/// Returns list of <see cref="SysAdminUnit"/> unique identifiers. Filled with user which allowed 
		/// <paramref name="operation"/> for <paramref name="emailMessageData"/> related mailbox.
		/// Only defined in DB rights settings will be included.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="operation">Administrated record operation code.</param>
		/// <returns>List of <see cref="SysAdminUnit"/> unique identifiers. </returns>
		protected IEnumerable<Guid> GetUsersWithExplicitRightsForMailbox(Entity emailMessageData, EntitySchemaRecordRightOperation operation) {
			return GetUsersWithRightsForMailbox(emailMessageData, operation, true);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Sets <see cerf="Entity.UseDefRights"/> property for <paramref name="activity"/>.
		/// When <see cref="Activity"/> is not administrated by records method will be skiped.
		/// When <paramref name="activity"/> is email record, then <see cerf="Entity.UseDefRights"/> 
		/// property must be set with <c>false</c>, all other types of <see cref="Activity"/> will be skipped. 
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		public void SetUseDefRights(Entity activity) {
			if (NeedSetEmailRecordRights() && GetEntityIsEmail(activity)) {
				activity.UseDefRights = false;
			}
		}

		/// <summary>
		/// Sets email message record rights.
		/// <paramref name="emailMessageData"/> record is used as rights template.
		/// When <see cref="Activity"/> is not administrated by records method will be skiped.
		/// When <paramref name="emailMessageData"/> is not related to any mailbox, then full rights will be 
		/// granted to <see cref="_userConnection.CurrentUser"/>.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		public void SetRecordRightsFromMailbox(Entity emailMessageData) {
			if (!NeedSetEmailRecordRights()) {
				return;
			}
			SetRecordRights(emailMessageData);
		}

		/// <summary>
		/// Sets email message record rights for <paramref name="activity"/> record.
		/// When <see cref="Activity"/> is not administrated by records method will be skiped.
		///<paramref name="mailboxId"/> rights will be used as rights template.
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		/// <param name="mailboxId"><see cref="MailboxSyncSettings"/> instance unique identifier.</param>
		public void SetRecordRightsFromMailbox(Entity activity, Guid mailboxId) {
			if (!NeedSetEmailRecordRights() || !GetEntityIsEmail(activity)) {
				return;
			}
			SetRecordRights(activity, mailboxId);
		}

		/// <summary>
		/// Sets email message full record rights for message author.
		/// When <see cref="Activity"/> is not administrated by records method will be skiped.
		/// </summary>
		/// <param name="activity"><see cref="Activity"/> instance.</param>
		public void SetAuthorRights(Entity activity) {
			if (NeedSetEmailRecordRights() && GetEntityIsEmail(activity)) {
				SetAuthorRecordRights(activity);
				SetOwnerRights(activity);
			}
		}

		/// <summary>
		/// Returns <see cref="SysAdminUnit"/> unique identifiers list, filled with user which allowed 
		/// <paramref name="operation"/> for <paramref name="emailMessageData"/> related mailbox.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="operation"><see cref="EntitySchemaRecordRightOperation"/> instance.</param>
		/// <returns><see cref="SysAdminUnit"/> unique identifiers list.</returns>
		public IEnumerable<Guid> GetUsersWithRights(Entity emailMessageData,
				EntitySchemaRecordRightOperation operation = EntitySchemaRecordRightOperation.Read) {
			return GetUsersWithRightsForMailbox(emailMessageData, operation);
		}

		/// <summary>
		/// Returns <see cref="SysAdminUnit"/> unique identifiers list, filled with user which allowed 
		/// <paramref name="operation"/> for <paramref name="emailMessageData"/> related mailbox.
		/// Only defined in DB rights settings will be included.
		/// </summary>
		/// <param name="emailMessageData"><see cref="EmailMessageData"/> instance.</param>
		/// <param name="operation"><see cref="EntitySchemaRecordRightOperation"/> instance.</param>
		/// <returns><see cref="SysAdminUnit"/> unique identifiers list.</returns>
		public IEnumerable<Guid> GetUsersWithExplicitRights(Entity emailMessageData,
				EntitySchemaRecordRightOperation operation = EntitySchemaRecordRightOperation.Read) {
			return GetUsersWithExplicitRightsForMailbox(emailMessageData, operation);
		}

		#endregion

	}

	#endregion

	#region Class RecordRightsParams

	/// <summary>
	/// Class provides data storage for record rights row.
	/// </summary>
	public class RecordRightsParams
	{

		#region Properties: Public

		/// <summary>
		/// <see cref="SysAdminUnit"/> instance unique identifier.
		/// </summary>
		public Guid SysAdminUnitId { get; set; }

		/// <summary>
		/// Rights row operation column value.
		/// </summary>
		public int Operation { get; set; }

		/// <summary>
		/// Rights row right level column value.
		/// </summary>
		public int RightLevel { get; set; }

		/// <summary>
		/// Rights row position column value.
		/// </summary>
		public int Position { get; set; }

		#endregion

	}

	#endregion

}

