namespace Terrasoft.Configuration.RegistrationHelper
{
	using System;
	using System.Collections;
	using System.Collections.Generic;
	using System.Globalization;
	using System.IO;
	using System.Linq;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Configuration.SSP;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Mail.Sender;

	#region Class: RegistrationHelper

	public static class RegistrationHelper
	{

		#region Methods: Private

		private static LocalizableString GetLocalizableString(UserConnection userConnection, string name) {
			return new LocalizableString(userConnection.Workspace.ResourceStorage, "RegistrationHelper",
				"LocalizableStrings." + name + ".Value");
		}

		private static Entity GetTemplateByContact(UserConnection userConnection, Guid emailTemplateId, Guid contactId) {
			var mLangContentFactory = new MLangContentFactory(userConnection);
			var contentKit = mLangContentFactory.GetContentKit("Contact", "EmailTemplate");
			return contentKit.GetContent(emailTemplateId, contactId);
		}

		private static List<EmailAttachment> GetEmailAttachmentsFromTemplate(Guid templateId,
			UserConnection userConnection) {
			var result = new List<EmailAttachment>();
			EntitySchema entitySchema = userConnection.EntitySchemaManager.GetInstanceByName("EmailTemplateFile");
			var srcESQ = new EntitySchemaQuery(entitySchema);
			srcESQ.IsDistinct = true;
			srcESQ.AddColumn(srcESQ.RootSchema.GetPrimaryColumnName());
			srcESQ.AddColumn("Data");
			srcESQ.Filters.Add(srcESQ.CreateFilterWithParameters(FilterComparisonType.Equal, "EmailTemplate",
				templateId));
			var fileList = srcESQ.GetEntityCollection(userConnection);
			var fileRepository = ClassFactory.Get<FileRepository>(new ConstructorArgument("userConnection", userConnection));
			foreach (var file in fileList) {
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
					result.Add(attachment);
				}
				
			}
			return result;
		}

		private static HtmlEmailMessageSender GetEmailSender(UserConnection userConnection) {
			var emailClientFactory = GetEmailClientFactory(userConnection);
			HtmlEmailMessageSender sender = new HtmlEmailMessageSender(emailClientFactory, userConnection);
			return sender;
		}

		private static IEmailClientFactory GetEmailClientFactory(UserConnection userConnection) {
			return ClassFactory.Get<EmailClientFactory>(new ConstructorArgument("userConnection", userConnection));
		}

		private static string GetContactEmail(UserConnection userConnection, Guid contactId) {
			string email;
			var contactSelect =
				new Select(userConnection)
					.Column("Contact", "Email")
					.From("Contact")
					.Where("Contact", "Id").IsEqual(Column.Parameter(contactId)) as Select;
			using (DBExecutor dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = contactSelect.ExecuteReader(dbExecutor)) {
					if (!reader.Read()) {
						string errorMessage = GetLocalizableString(userConnection, "ContactNotExist");
						throw new ArgumentNullOrEmptyException(errorMessage, null);
					}
					email = reader.GetColumnValue<string>("Email");
				}
			}
			return email;
		}

		private static EmailMessage CreateEmailMessage(UserConnection userConnection, string contactEmail,
			string body, string subject) {
			string supportEmail = userConnection.GetIsFeatureEnabled("SSPRegistrationMailboxEnabled") ?
				GetSspSupportEmail(userConnection) :
				(string)SysSettings.GetValue(userConnection, "SupportServiceEmail");
			if (supportEmail == string.Empty) {
				string errorMessage = GetLocalizableString(userConnection, "MailNotConfigured");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			EmailMessage emailMessage = new EmailMessage {
				From = supportEmail,
				To = new List<string> { contactEmail },
				Body = body,
				Subject = subject,
				Attachments = new List<EmailAttachment>()
			};
			return emailMessage;
		}

		private static string GetSspSupportEmail(UserConnection userConnection) {
			string sspSupportEmail = string.Empty;
			Guid sspSupportEmailId = SysSettings.GetValue(userConnection, "SSPRegistrationMailbox", default(Guid));
			if (sspSupportEmailId != Guid.Empty) {
				Select select = new Select(userConnection)
					.Column("SenderEmailAddress")
					.From("MailboxSyncSettings")
					.Where("Id").IsEqual(Column.Parameter(sspSupportEmailId)) as Select;
				sspSupportEmail = select.ExecuteScalar<string>();
			}
			return sspSupportEmail;
		}

		private static List<string> GetUserCulturesName(IEnumerable<string> userLanguages) {
			List<string> userCultures = new List<string>();
			foreach (string language in userLanguages ?? Enumerable.Empty<string>()) {
				CultureInfo contextCulture = CultureUtilities.TryCreateSpecificCulture(language);
				if (contextCulture == null) {
					continue;
				}
				userCultures.Add(contextCulture.Name);
			}
			return userCultures.Distinct().ToList();
		}

		private static string ReplaceRegistrationUrl(UserConnection userConnection, Guid contactId,
			string confirmRegistrationUrl, Entity template) {
			var body = template.GetTypedColumnValue<string>("Body").Replace("#RegistrationUrl#", confirmRegistrationUrl);
			var macros = template.GetBytesValue("Macros");
			var macrosList = Json.Deserialize<List<DictionaryEntry>>(Encoding.UTF8.GetString(macros));
			try {
				body = EmailTemplateUtility.ReplaceRecipientMacrosText(body, contactId, macrosList, userConnection);
			} catch { }
			return body;
		}

		private static void SendWithEmailSender(UserConnection userConnection, string contactEmail, string body,
				string subject) {
			HtmlEmailMessageSender sender = GetEmailSender(userConnection);
			var emailMessage = CreateEmailMessage(userConnection, contactEmail, body, subject);
			sender.Send(emailMessage, true);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Send registration confirmation email.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="contactId">Contact identifier.</param>
		/// <param name="confirmRegistrationUrl">Confirmation registration url.</param>
		public static void SendEmail(UserConnection userConnection, Guid contactId, string confirmRegistrationUrl) {
			if (confirmRegistrationUrl.IsNullOrEmpty()) {
				string errorMessage = GetLocalizableString(userConnection, "LinkNotExist");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			string contactEmail = GetContactEmail(userConnection, contactId);
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "EmailTemplate");
			esq.AddColumn("Subject");
			esq.AddColumn("Body");
			esq.AddColumn("IsHtmlBody");
			esq.AddColumn("Macros");
			Guid registrationEmailTemplateId = GetRegistrationEmailTemplateId(userConnection);
			var template = esq.GetEntity(userConnection, registrationEmailTemplateId);
			if (template == null) {
				string errorMessage = GetLocalizableString(userConnection, "EmailTemplateNotFound");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			var body = ReplaceRegistrationUrl(userConnection, contactId, confirmRegistrationUrl, template);
			var subject = ReplaceRegistrationUrl(userConnection, contactId, confirmRegistrationUrl, template);
			if (!userConnection.GetIsFeatureEnabled("OldEmailIntegration")
					|| userConnection.GetIsFeatureEnabled("UseEmailSenderForSelfReg")) {
				SendWithEmailSender(userConnection, contactEmail, body, subject);
			}
		}

		/// <summary>
		/// Returns email template identifier for user registration.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Registration email template identifier.</returns>
		public static Guid GetRegistrationEmailTemplateId(UserConnection userConnection) {
			Guid registrationEmailTemplateId = SysSettings.GetValue(userConnection,
				"PortalRegistrationEmailTemplate", Guid.Empty);
			if (registrationEmailTemplateId == Guid.Empty) {
				registrationEmailTemplateId = SSPConsts.RegistrationEmailTemplateId;
			}
			return registrationEmailTemplateId;
		}

		/// <summary>
		/// Returns email template identifier for user password reminding.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Remin password email template identifier.</returns>
		public static Guid GetRecoveryPasswordEmailTemplateId(UserConnection userConnection) {
			Guid recoveryEmailTemplateId = SysSettings.GetValue(userConnection,
				"PortalRecoveryPasswordEmailTemplate", Guid.Empty);
			if (recoveryEmailTemplateId == Guid.Empty) {
				recoveryEmailTemplateId = SSPConsts.RecoveryPasswordEmailTemplateId;
			}
			return recoveryEmailTemplateId;
		}

		/// <summary>
		/// Returns email template identifier for invitation template.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Invitation email template identifier.</returns>
		public static Guid GetInvitationEmailTemplateId(UserConnection userConnection) {
			Guid invitationEmailTemplateId = SysSettings.GetValue(userConnection,
				"PortalInvitationEmailTemplate", Guid.Empty);
			if (invitationEmailTemplateId == Guid.Empty) {
				string errorMessage = GetLocalizableString(userConnection, "EmailTemplateNotFound");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			return invitationEmailTemplateId;
		}

		/// <summary>
		/// Send email with recovery password link.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="recipient">Recipient.</param>
		/// <param name="subject">Email subject.</param>
		/// <param name="bodyHtml">Email body.</param>
		public static void SendRecoveryPasswordLink(UserConnection userConnection, string recipient, string subject,
				string bodyHtml) {
			if (!userConnection.GetIsFeatureEnabled("OldEmailIntegration") ||
					userConnection.GetIsFeatureEnabled("UseEmailSenderForSelfReg")) {
				SendWithEmailSender(userConnection, recipient, bodyHtml, subject);
			}
		}

		/// <summary>
		/// Send multilanguage registration email.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="contactId">Contact identifier.</param>
		/// <param name="confirmRegistrationUrl">Url for registration confirmation.</param>
		/// <param name="userLanguages">User languages <example>from HTTP context.</example></param>
		public static void SendRegistrationEmail(UserConnection userConnection, Guid contactId,
				string confirmRegistrationUrl, IEnumerable<string> userLanguages) {
			if (confirmRegistrationUrl.IsNullOrEmpty()) {
				string errorMessage = GetLocalizableString(userConnection, "LinkNotExist");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			string contactEmail = GetContactEmail(userConnection, contactId);
			var registrationEmailTemplateId = GetRegistrationEmailTemplateId(userConnection);
			var emailTemplate = GetTemplateByUserCulture(userConnection, userLanguages, registrationEmailTemplateId);
			if (emailTemplate == null) {
				string errorMessage = GetLocalizableString(userConnection, "EmailTemplateNotFound");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			var body = ReplaceRegistrationUrl(userConnection, contactId, confirmRegistrationUrl, emailTemplate);
			SendWithEmailSender(userConnection, contactEmail, body, emailTemplate.GetTypedColumnValue<string>("Subject"));
		}

		/// <summary>
		/// Send multilanguage invitation email.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="email">Recipient email.</param>
		/// <param name="contactId">Contact identifier.</param>
		/// <param name="invitationUrl">Url for invitation template</param>
		public static void SendInvitationEmail(UserConnection userConnection, string email, Guid contactId, string invitationUrl) {
			if (invitationUrl.IsNullOrEmpty()) {
				string errorMessage = GetLocalizableString(userConnection, "LinkNotExist");
				throw new ArgumentNullOrEmptyException(errorMessage, null);
			}
			var invitationEmailTemplateId = GetInvitationEmailTemplateId(userConnection);
			var emailTemplate = GetTemplateByContact(userConnection, invitationEmailTemplateId, contactId);
			var body = emailTemplate.GetTypedColumnValue<string>("Body").Replace("#RecoveryLinkUrl#", invitationUrl); ;
			SendWithEmailSender(userConnection, email, body, emailTemplate.GetTypedColumnValue<string>("Subject"));
		}

		/// <summary>
		/// Returns multilanguage template found by user languages.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="userLanguages">User languages <example>from HTTP context.</example></param>
		/// <param name="templateId">Email template identifier.</param>
		/// <returns>Multilanguage template.</returns>
		public static Entity GetTemplateByUserCulture(UserConnection userConnection, IEnumerable<string> userLanguages,
				Guid templateId) {
			List<string> culturesName = GetUserCulturesName(userLanguages);
			var kit = new MLangContentKit(new EmailTplContentStore(userConnection),
				new RegistrationLanguageIterator(userConnection, culturesName));
			return kit.GetContent(templateId, Guid.Empty);
		}

		#endregion

	}

	#endregion



}
