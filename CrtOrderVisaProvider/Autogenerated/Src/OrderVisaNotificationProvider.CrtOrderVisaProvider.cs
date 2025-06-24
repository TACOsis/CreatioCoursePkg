namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: OrderVisaNotificationProvider

	public class OrderVisaNotificationProvider : BaseVisaNotificationProvider, INotification
	{

		#region Constants: Private

		private const string OrderVisaSchemaName = "OrderVisa";
		private const string OrderVisaMasterColumnName = "OrderId";
		private const string OrderSchemaName = "Order";
		private const string OrderPrimaryDisplayColumnName = "Number";

		#endregion

		#region Constructors: Public

		public OrderVisaNotificationProvider(Dictionary<string, object> parameters)
			: base(parameters) {
		}

		public OrderVisaNotificationProvider(UserConnection userConnection)
			: base(userConnection) {
		}

		#endregion

		#region Properties: Public

		public override string Name {
			get {
				return OrderSchemaName;
			}
		}

		public override string Visa {
			get {
				return OrderVisaSchemaName;
			}
		}

		public override string TitleColumn {
			get {
				return OrderPrimaryDisplayColumnName;
			}
		}

		public override string VisaMasterColumn {
			get {
				return OrderVisaMasterColumnName;
			}
		}

		#endregion

		#region Methods: Private

		private string GetDate(string datetime) {
			var dateMacros = UserConnection.GetLocalizableString("OrderVisaNotificationProvider", "DateMacros");
			var result = Convert.ToDateTime(datetime);
			return result.ToString(dateMacros);
		}

		private string GetBody(Dictionary<string, string> dictionaryColumnValues) {
			var bodyTemplate = UserConnection.GetLocalizableString("OrderVisaNotificationProvider", "BodyTemplate");
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
				.From(OrderVisaSchemaName);
		}

		protected override void AddColumns(Select select) {
			Guid sysImage = GetNotificationImage(OrderVisaSchemaName, null);
			select
				.Column(OrderVisaSchemaName, "Id").As("Id")
				.Column(OrderVisaSchemaName, "Objective").As("Objective")
				.Column(OrderVisaSchemaName, "StatusId").As("StatusId")
				.Column(OrderVisaSchemaName, "IsCanceled").As("IsCanceled")
				.Column(OrderVisaSchemaName, "VisaOwnerId").As("SysAdminUnitId")
				.Column(Column.Parameter(OrderSchemaName)).As("VisaSchemaName")
				.Column(OrderSchemaName, "Number").As("Title")
				.Column(OrderSchemaName, "Id").As("VisaObjectId")
				.Column(OrderSchemaName, "Date").As("Date")
				.Column("Account", "Name").As("Account")
				.Column("Contact", "Name").As("Contact")
				.Column(Column.Parameter(OrderSchemaName)).As("SchemaName")
				.Column(Column.Parameter(sysImage)).As("ImageId");
		}

		protected override void JoinTables(Select select) {
			select
				.InnerJoin(OrderSchemaName).On(OrderSchemaName, "Id").IsEqual(OrderVisaSchemaName, OrderVisaMasterColumnName)
				.LeftOuterJoin("Account").On("Account", "Id").IsEqual(OrderSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(OrderSchemaName, "ContactId");
		}

		protected override void AddConditions(Select select) {
			Guid[] finallyStatuses = NotificationUtilities.GetFinallyVisaStatuses(UserConnection);
			select.Where(OrderVisaSchemaName, "StatusId").Not().In(Column.Parameters(finallyStatuses))
				.And(OrderVisaSchemaName, "IsCanceled").IsEqual(Column.Parameter(false));
		}

		protected override void AddActiveUserFilter(Select select) {
		}

		protected override INotificationInfo GetRecordNotificationInfo(Dictionary<string, string> dictionaryColumnValues) {
			var title = UserConnection.GetLocalizableString("OrderVisaNotificationProvider", "TitleTemplate");
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
			var bodyTemplate = UserConnection.GetLocalizableString("OrderVisaNotificationProvider", "BodyTemplate");
			var titleTemplate = UserConnection.GetLocalizableString("OrderVisaNotificationProvider", "TitleTemplate");
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
			ReplaceColumn(entitiesSelect, "Date", Column.SourceColumn(OrderSchemaName, "Date"));
			ReplaceColumn(entitiesSelect, "Account", Column.SourceColumn("Account", "Name"));
			ReplaceColumn(entitiesSelect, "Contact", Column.SourceColumn("Contact", "Name"));
			entitiesSelect.From(OrderVisaSchemaName);
			ApplySelectJoins(entitiesSelect);
			entitiesSelect.LeftOuterJoin("Account").On("Account", "Id").IsEqual(OrderSchemaName, "AccountId")
				.LeftOuterJoin("Contact").On("Contact", "Id").IsEqual(OrderSchemaName, "ContactId");
			ApplySelectFilters(entitiesSelect);
			return entitiesSelect;
		}

		#endregion

	}

	#endregion
}
