namespace Terrasoft.Configuration
{
	using Terrasoft.Core.DB;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using System;

	#region Class: ContractVisaNotificationProvider

	public class ContractVisaNotificationProvider : BaseVisaNotificationProvider, INotification
	{

		#region Constants: Private

		private const string ContractVisaSchemaName = "ContractVisa";
		private const string ContractVisaMasterColumnName = "ContractId";
		private const string ContractSchemaName = "Contract";
		private const string ContractPrimaryDisplayColumnName = "Number";
		
		#endregion

		#region Constructors: Public

		public ContractVisaNotificationProvider(Dictionary<string, object> parameters) : base(parameters) {
		}

		public ContractVisaNotificationProvider(UserConnection userConnection)
			: base(userConnection) {
		}

		#endregion

		#region Properties: Public

		public override string Name {
			get {
				return ContractSchemaName;
			}
		}

		public override string Visa {
			get {
				return ContractVisaSchemaName;
			}
		}

		public override string TitleColumn {
			get {
				return ContractPrimaryDisplayColumnName;
			}
		}

		public override string VisaMasterColumn {
			get {
				return ContractVisaMasterColumnName;
			}
		}

		#endregion

		#region Methods: Private

		private string GetDate(string datetime) {
			if (String.IsNullOrEmpty(datetime)) {
				return string.Empty;
			}
			var dateMacros = UserConnection.GetLocalizableString("ContractVisaNotificationProvider" ,"DateMacros");
			var result = Convert.ToDateTime(datetime);
			return result.ToString(dateMacros);
		}

		private string GetBody(Dictionary<string, string> dictionaryColumnValues) {
			var body = UserConnection.GetLocalizableString("ContractVisaNotificationProvider", "BodyTemplate");
			var number = dictionaryColumnValues["Title"];
			var dateTime = dictionaryColumnValues["Date"];
			var account = dictionaryColumnValues["Account"];
			var contact = dictionaryColumnValues["Contact"];
			var date = GetDate(dateTime);
			var accountContactString = string.Format("{0}, {1}", account, contact);
			if (String.IsNullOrEmpty(account)) {
				accountContactString = contact;
			}
			if (String.IsNullOrEmpty(contact)) {
				accountContactString = account;
			}
			body = string.Format(body, number, date, accountContactString);
			return body;
		}

		#endregion

		#region Methods: Protected

		protected override Select GetBaseSelect() {
			return new Select(UserConnection)
				.From(ContractVisaSchemaName);
		}

		protected override void AddColumns(Select select) {
			Guid sysImage = GetNotificationImage(ContractVisaSchemaName, null);
			select
				.Column(ContractVisaSchemaName, "Id").As("Id")
				.Column(ContractVisaSchemaName, "Objective").As("Objective")
				.Column(ContractVisaSchemaName, "StatusId").As("StatusId")
				.Column(ContractVisaSchemaName, "IsCanceled").As("IsCanceled")
				.Column(ContractVisaSchemaName, "VisaOwnerId").As("SysAdminUnitId")
				.Column(Column.Parameter(ContractSchemaName)).As("VisaSchemaName")
				.Column(ContractSchemaName, "Number").As("Title")
				.Column(ContractSchemaName, "Id").As("VisaObjectId")
				.Column(ContractSchemaName, "StartDate").As("Date")
				.Column("Account", "Name").As("Account")
				.Column("Contact", "Name").As("Contact")
				.Column(Column.Parameter(ContractSchemaName)).As("SchemaName")
				.Column(Column.Parameter(sysImage)).As("ImageId");
		}

		protected override void JoinTables(Select select) {
			select
				.InnerJoin(ContractSchemaName).On(ContractSchemaName, "Id").IsEqual(ContractVisaSchemaName, ContractVisaMasterColumnName)
				.LeftOuterJoin("Account").On("Account", "Id").IsEqual(ContractSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(ContractSchemaName, "ContactId");
		}

		protected override void AddConditions(Select select) {
			Guid[] finallyStatuses = NotificationUtilities.GetFinallyVisaStatuses(UserConnection);
			select.Where(ContractVisaSchemaName, "StatusId").Not().In(Column.Parameters(finallyStatuses))
				.And(ContractVisaSchemaName, "IsCanceled").IsEqual(Column.Parameter(false));
		}

		protected override void AddActiveUserFilter(Select select) {
		}

		protected override INotificationInfo GetRecordNotificationInfo(Dictionary<string, string> dictionaryColumnValues) {
			var title = UserConnection.GetLocalizableString("ContractVisaNotificationProvider", "TitleTemplate");
			Guid imageId;
			Guid.TryParse(dictionaryColumnValues["ImageId"], out imageId);
			return new NotificationInfo {
				Title = title,
				Body = GetBody(dictionaryColumnValues),
				ImageId = imageId,
				EntityId = new Guid(dictionaryColumnValues["VisaObjectId"]),
				EntitySchemaName = dictionaryColumnValues["VisaSchemaName"],
				MessageId = new Guid(dictionaryColumnValues["Id"]),
				SysAdminUnit = new Guid(dictionaryColumnValues["SysAdminUnitId"]),
				GroupName = Group
			};
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns notification.
		/// </summary>
		/// <returns>Notification.</returns>
		public IEnumerable<INotificationInfo> GetNotifications() {
			return GetNotificationsInfos();
		}

		public override string GetRecordResult(Dictionary<string, string> dictionaryColumnValues) {
			var body = GetBody(dictionaryColumnValues);
			var title = UserConnection.GetLocalizableString("ContractVisaNotificationProvider", "TitleTemplate");
			var notificationId = dictionaryColumnValues["Id"];
			var entityId = dictionaryColumnValues["VisaObjectId"];
			var schemaName = dictionaryColumnValues["SchemaName"];
			var imageId = dictionaryColumnValues["ImageId"];
			var popup = new PopupData() {
				Title = title,
				Body = body,
				ImageId = imageId,
				EntityId = entityId,
				EntitySchemaName = schemaName
			};
			var serializePopup = popup.Serialize();
			return string.Format(template, notificationId, serializePopup);
		}

		public override void SetColumns(List<string> columns) {
			columns.Add("Id");
			columns.Add("Title");
			columns.Add("Date");
			columns.Add("Account");
			columns.Add("Contact");
			columns.Add("VisaObjectId");
			columns.Add("SchemaName");
			columns.Add("ImageId");
		}

		public override Select GetEntitiesSelect() {
			var entitiesSelect = new Select(UserConnection).Distinct();
			ApplySelectColumns(entitiesSelect);
			ReplaceColumn(entitiesSelect, "Date", Column.SourceColumn(ContractSchemaName, "StartDate"));
			ReplaceColumn(entitiesSelect, "Account", Column.SourceColumn("Account", "Name"));
			ReplaceColumn(entitiesSelect, "Contact", Column.SourceColumn("Contact", "Name"));
			ReplaceColumn(entitiesSelect, "VisaSchemaTypeId", Column.SourceColumn(ContractSchemaName, "TypeId"));
			ReplaceColumn(entitiesSelect, "VisaTypeName", Column.SourceColumn("ContractType", "Name"));
			entitiesSelect.From(ContractVisaSchemaName);
			ApplySelectJoins(entitiesSelect);
			entitiesSelect.InnerJoin("ContractType").On("ContractType", "Id").IsEqual(ContractSchemaName, "TypeId")
			.LeftOuterJoin("Account").On("Account", "Id").IsEqual(ContractSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(ContractSchemaName, "ContactId");
			ApplySelectFilters(entitiesSelect);
			return entitiesSelect;
		}

		#endregion

	}

	#endregion
}

