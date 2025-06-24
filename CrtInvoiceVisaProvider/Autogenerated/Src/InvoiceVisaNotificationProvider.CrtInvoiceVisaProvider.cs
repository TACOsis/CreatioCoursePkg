namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: InvoiceVisaNotificationProvider

	public class InvoiceVisaNotificationProvider : BaseVisaNotificationProvider, INotification
	{

		#region Constants: Private

		private const string InvoiceVisaSchemaName = "InvoiceVisa";
		private const string InvoiceVisaMasterColumnName = "InvoiceId";
		private const string InvoiceSchemaName = "Invoice";
		private const string InvoicePrimaryDisplayColumnName = "Number";

		#endregion

		#region Constructors: Public

		public InvoiceVisaNotificationProvider(Dictionary<string, object> parameters)
			: base(parameters) {
		}

		public InvoiceVisaNotificationProvider(UserConnection userConnection)
			: base(userConnection) {
		}

		#endregion

		#region Properties: Public

		public override string Name {
			get {
				return InvoiceSchemaName;
			}
		}

		public override string Visa {
			get {
				return InvoiceVisaSchemaName;
			}
		}

		public override string TitleColumn {
			get {
				return InvoicePrimaryDisplayColumnName;
			}
		}

		public override string VisaMasterColumn {
			get {
				return InvoiceVisaMasterColumnName;
			}
		}

		#endregion

		#region Methods: Private

		private string GetDate(string datetime) {
			var dateMacros = UserConnection.GetLocalizableString("InvoiceVisaNotificationProvider", "DateMacros");
			var result = Convert.ToDateTime(datetime);
			return result.ToString(dateMacros);
		}

		private string GetBody(Dictionary<string, string> dictionaryColumnValues) {
			var bodyTemplate = UserConnection.GetLocalizableString("InvoiceVisaNotificationProvider", "BodyTemplate");
			var number = dictionaryColumnValues["Title"];
			var dateTime = dictionaryColumnValues["Date"];
			var account = dictionaryColumnValues["Account"];
			var contact = dictionaryColumnValues["Contact"];
			string date = GetDate(dateTime);
			var accountContactString = string.Format("{0}, {1}", account, contact);
			if (String.IsNullOrEmpty(account)) {
				accountContactString = contact;
			}
			if (String.IsNullOrEmpty(contact)) {
				accountContactString = account;
			}
			var body = string.Format(bodyTemplate, number, date, accountContactString);
			return body;
		}

		#endregion

		#region Methods: Protected

		protected override Select GetBaseSelect() {
			return new Select(UserConnection)
				.From(InvoiceVisaSchemaName);
		}

		protected override void AddColumns(Select select) {
			Guid sysImage = GetNotificationImage(InvoiceVisaSchemaName, RemindingConsts.NotificationTypeRemindingId);
			select
				.Column(InvoiceVisaSchemaName, "Id").As("Id")
				.Column(InvoiceVisaSchemaName, "Objective").As("Objective")
				.Column(InvoiceVisaSchemaName, "StatusId").As("StatusId")
				.Column(InvoiceVisaSchemaName, "IsCanceled").As("IsCanceled")
				.Column(InvoiceVisaSchemaName, "VisaOwnerId").As("SysAdminUnitId")
				.Column(Column.Parameter(InvoiceSchemaName)).As("VisaSchemaName")
				.Column(InvoiceSchemaName, "Number").As("Title")
				.Column(InvoiceSchemaName, "Id").As("VisaObjectId")
				.Column(InvoiceSchemaName, "StartDate").As("Date")
				.Column("Account", "Name").As("Account")
				.Column("Contact", "Name").As("Contact")
				.Column(Column.Parameter(InvoiceSchemaName)).As("SchemaName")
				.Column(Column.Parameter(sysImage)).As("ImageId");
		}

		protected override void JoinTables(Select select) {
			select
				.InnerJoin(InvoiceSchemaName).On(InvoiceSchemaName, "Id").IsEqual(InvoiceVisaSchemaName, InvoiceVisaMasterColumnName)
				.LeftOuterJoin("Account").On("Account", "Id").IsEqual(InvoiceSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(InvoiceSchemaName, "ContactId");
		}

		protected override void AddConditions(Select select) {
			Guid[] finallyStatuses = NotificationUtilities.GetFinallyVisaStatuses(UserConnection);
			select.Where(InvoiceVisaSchemaName, "StatusId").Not().In(Column.Parameters(finallyStatuses))
				.And(InvoiceVisaSchemaName, "IsCanceled").IsEqual(Column.Parameter(false));
		}

		protected override void AddActiveUserFilter(Select select) {
		}

		protected override INotificationInfo GetRecordNotificationInfo(Dictionary<string, string> dictionaryColumnValues) {
			var title = UserConnection.GetLocalizableString("InvoiceVisaNotificationProvider", "TitleTemplate");
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

		public override string GetRecordResult(Dictionary<string, string> dictionaryColumnValues) {
			var bodyTemplate = UserConnection.GetLocalizableString("InvoiceVisaNotificationProvider", "BodyTemplate");
			var titleTemplate = UserConnection.GetLocalizableString("InvoiceVisaNotificationProvider", "TitleTemplate");
			var notificationId = dictionaryColumnValues["Id"];
			var number = dictionaryColumnValues["Title"];
			var dateTime = dictionaryColumnValues["Date"];
			var account = dictionaryColumnValues["Account"];
			var contact = dictionaryColumnValues["Contact"];
			var entityId = dictionaryColumnValues["VisaObjectId"];
			var schemaName = dictionaryColumnValues["SchemaName"];
			var imageId = dictionaryColumnValues["ImageId"];
			var date = GetDate(dateTime);
			var accountContactString = string.Format("{0}, {1}", account, contact);
			if (String.IsNullOrEmpty(account)) {
				accountContactString = contact;
			}
			if (String.IsNullOrEmpty(contact)) {
				accountContactString = account;
			}
			var body = string.Format(bodyTemplate, number, date, accountContactString);
			var popup = new PopupData() {
				Title = titleTemplate,
				Body = body,
				ImageId = imageId,
				EntityId = entityId,
				EntitySchemaName = schemaName
			};
			var serializePopup = popup.Serialize();
			return string.Format(template, notificationId, serializePopup);
		}

		public override Select GetEntitiesSelect() {
			var entitiesSelect = new Select(UserConnection).Distinct();
			ApplySelectColumns(entitiesSelect);
			ReplaceColumn(entitiesSelect, "Date", Column.SourceColumn(InvoiceSchemaName, "StartDate"));
			ReplaceColumn(entitiesSelect, "Account", Column.SourceColumn("Account", "Name"));
			ReplaceColumn(entitiesSelect, "Contact", Column.SourceColumn("Contact", "Name"));
			entitiesSelect.From(InvoiceVisaSchemaName);
			ApplySelectJoins(entitiesSelect);
			entitiesSelect.LeftOuterJoin("Account").On("Account", "Id").IsEqual(InvoiceSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(InvoiceSchemaName, "ContactId");
			ApplySelectFilters(entitiesSelect);
			return entitiesSelect;
		}

		#endregion

	}

	#endregion
}
