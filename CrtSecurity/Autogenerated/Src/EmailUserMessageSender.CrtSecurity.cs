namespace Terrasoft.Configuration.EmailUserMessageSender
{
    using System;
	using System.Collections.Generic;
	using System.Collections;
	using System.Text;
	using Terrasoft.Common.Json;
	using Terrasoft.Core.Entities;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Mail.Sender;
	using Terrasoft.Configuration.SSP;
	using Terrasoft.Configuration.SysAdminUnitInfo;
	using Terrasoft.Configuration.TemplateInfo;
	using global::Common.Logging;

	#region Class: EmailUserMessageSender

	[DefaultBinding(typeof(IUserMessageSender), Name = nameof(EmailUserMessageSender))]
	public class EmailUserMessageSender : IUserMessageSender
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private static readonly Guid _twoFactorAuthEmailTemplateId = new Guid("E8242028-A943-4B00-8B45-44B8B8DF87CF");
		private static readonly ILog _logger = LogManager.GetLogger("EmailException");

		#endregion

		#region Constructors: Public

		public EmailUserMessageSender(AppConnection appConnection) {
			appConnection.CheckArgumentNull(nameof(appConnection));
			_userConnection = appConnection?.SystemUserConnection;
		}

		#endregion

		#region Methods: Private

		private static LocalizableString GetLocalizableString(UserConnection userConnection, string name) {
			return new LocalizableString(userConnection.Workspace.ResourceStorage,
				"EmailUserMessageSender", "LocalizableStrings." + name + ".Value");
		}

		private static HtmlEmailMessageSender GetEmailSender(UserConnection userConnection) {
			var emailClientFactory = GetEmailClientFactory(userConnection);
			HtmlEmailMessageSender sender = new HtmlEmailMessageSender(emailClientFactory, userConnection);
			return sender;
		}

		private static IEmailClientFactory GetEmailClientFactory(UserConnection userConnection) {
			return ClassFactory.Get<EmailClientFactory>(
				new ConstructorArgument("userConnection", userConnection));
		}

		private static Guid Get2FAEmailTemplateId(UserConnection userConnection) {
			return SysSettings.GetValue(userConnection,
				"TwoFactorAuthEmailTemplate", _twoFactorAuthEmailTemplateId);
		}

		private static string ReplaceRecipientMacrosText(UserConnection userConnection, Guid contactId,
				string body, byte[] macros) {
			var macrosList = Json.Deserialize<List<DictionaryEntry>>(Encoding.UTF8.GetString(macros));
			try {
				body = EmailTemplateUtility.ReplaceRecipientMacrosText(body, contactId, macrosList, userConnection);
			}
			catch (Exception e) {
				_logger.Error($"Unhandled error during the replacing recipient macros text: {e.Message}");
			}
			return body;
		}

		private static string Get2FASenderEmail(UserConnection userConnection) {
			string sspSupportEmail = string.Empty;
			Guid sspSupportEmailId = SysSettings.GetValue(userConnection,
				"2FAMailbox", default(Guid));
			if (sspSupportEmailId != Guid.Empty) {
				Select select = new Select(userConnection)
					.Column("SenderEmailAddress")
					.From("MailboxSyncSettings")
					.Where("Id").IsEqual(Column.Parameter(sspSupportEmailId)) as Select;
				sspSupportEmail = select?.ExecuteScalar<string>();
			}
			return sspSupportEmail;
		}
		
		private Entity GetSysAdminUnit(UserConnection userConnection, Guid sysAdminUnitId) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByName("SysAdminUnit");
			Entity userEntity = schema.CreateEntity(userConnection);
			userEntity.FetchFromDB(sysAdminUnitId);
			return userEntity;
		}

		private SysAdminUnitInfo GetSysAdminUnitInfo(UserConnection userConnection, Guid sysAdminUnitId) {
			Entity sysAdminUnitEntity = GetSysAdminUnit(userConnection, sysAdminUnitId);
			string email = sysAdminUnitEntity.GetTypedColumnValue<string>("Email");
			string name = sysAdminUnitEntity.GetTypedColumnValue<string>("Name");
			return new SysAdminUnitInfo() {
				Email = !string.IsNullOrWhiteSpace(email) ? email : name,
				Name = name,
				ContactId = sysAdminUnitEntity.GetTypedColumnValue<Guid>("ContactId")
			};
		}

		private Entity GetTemplateByUserCulture(UserConnection userConnection, Guid templateId) {
			string loginCulture = GeneralResourceStorage.CurrentCulture.Name;
			var kit = new MLangContentKit(new EmailTplContentStore(userConnection),
				new RegistrationLanguageIterator(userConnection, new[] { loginCulture }));
			return kit.GetContent(templateId, Guid.Empty);
		}

		private TemplateInfo GetTemplate(UserConnection userConnection, Guid contactId,
				string username, string twoFactorCode) {
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "EmailTemplate");
			esq.AddColumn("Subject");
			esq.AddColumn("Body");
			esq.AddColumn("IsHtmlBody");
			esq.AddColumn("Macros");
			Guid emailTemplateId = Get2FAEmailTemplateId(userConnection);
			var template = GetTemplateByUserCulture(userConnection, emailTemplateId);
			if (template == null) {
				string errorMessage = GetLocalizableString(userConnection, "MailNotConfigured");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			var twoFactorCodeLifetime = SysSettings.GetValue(userConnection,
				"SecondFactorCodeTTL").ToString();
			var body = template.GetTypedColumnValue<string>("Body")
				.Replace("#Username#", username)
				.Replace("#SecondFactorCode#", twoFactorCode)
				.Replace("#SecondFactorCodeTTL#", twoFactorCodeLifetime);
			var macros = template.GetBytesValue("Macros");
			return new TemplateInfo() {
				Subject = template.GetTypedColumnValue<string>("Subject"),
				Body = ReplaceRecipientMacrosText(userConnection, contactId, body, macros)
			};
		}

		private EmailMessage CreateEmailMessage(UserConnection userConnection, string contactEmail,
				string body, string subject) {
			string supportEmail = Get2FASenderEmail(userConnection);
			return new EmailMessage {
				From = supportEmail,
				To = new List<string> { contactEmail },
				Body = body,
				Subject = subject,
				Attachments = new List<EmailAttachment>()
			};
		}

		#endregion

		#region Methods: Public

		public bool GetIsAccessible(Guid sysAdminUnitId) {
			var sysAdminUnitEmail = GetSysAdminUnitInfo(_userConnection, sysAdminUnitId).Email;
			return sysAdminUnitEmail.IsEmailAddress();
		}

		public void SendUserMessage(Guid sysAdminUnitId, string twoFactorCode) {
			var sysAdminUnitInfo = GetSysAdminUnitInfo(_userConnection, sysAdminUnitId);
			if (!sysAdminUnitInfo.Email.IsEmailAddress()) {
				string errorMessage = GetLocalizableString(_userConnection,
					"EmailHasInvalidFormatOrNotSpecified");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			var template = GetTemplate(_userConnection, sysAdminUnitInfo.ContactId, 
				sysAdminUnitInfo.Name, twoFactorCode);
			var emailMessage = CreateEmailMessage(_userConnection, sysAdminUnitInfo.Email,
				template.Body, template.Subject);
			if (emailMessage.From == string.Empty || !emailMessage.From.IsEmailAddress()) {
				string errorMessage = GetLocalizableString(_userConnection, "MailNotConfigured");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			HtmlEmailMessageSender sender = GetEmailSender(_userConnection);
			try {
				sender.Send(emailMessage, true);
			}
			catch {
				string errorMessage = GetLocalizableString(_userConnection, "UnhandledErrorDuringEmailSending");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
		}

		#endregion

	}

	#endregion
}
