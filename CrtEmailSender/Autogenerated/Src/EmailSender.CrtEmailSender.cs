namespace Terrasoft.Mail.Sender {
	using System;
	using System.Collections;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using System.Text.RegularExpressions;
	using global::Common.Logging;
	using IntegrationApi.Interfaces;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.EmailDomain.Interfaces;
	using DTO = EmailContract.DTO;
#if NETFRAMEWORK && OldUI //TODO #CRM-44355
	using Terrasoft.UI.WebControls.Utilities;
#endif

	#region Class: EmailSender

	/// <summary>
	/// Provides send email messages methods.
	/// </summary>
	[DefaultBinding(typeof(IEmailSender))]
	public class EmailSender: IEmailSender
	{

		#region Class: EntityFile

		/// <summary>
		/// Represents pair of entity UId and file's record identifier.
		/// </summary>
		protected class EntityFile {

			/// <summary>
			/// Entity file unique identifier.
			/// </summary>
			public Guid EntityUId {get; set;}

			/// <summary>
			/// File record identifier.
			/// </summary>
			public Guid RecordId {get; set;}
		}

		#endregion

		#region LocalizableStrings

		/// <summary>
		/// "bpm'online test message" localizable string.
		/// </summary>
		public LocalizableString TestMessageSubject {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.TestMessageSubject.Value").ToString();
			}
		}

		/// <summary>
		/// "This message was send automatically from bpm'online due to user settings check." localizable string.
		/// </summary>
		public LocalizableString TestMessageBody {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.TestMessageBody.Value").ToString();
			}
		}

		#endregion

		#region Constants: Protected

		/// <summary>
		/// The error status of sending an email message.
		/// </summary>
		protected const string ErrorOnSendEmailStatus = "ErrorOnSend";

		#endregion

		#region Fields: Private

		private readonly IEmailClientFactory _emailClientFactory;
		private readonly UserConnection _userConnection;

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection {
			get {
				if (_userConnection == null) {
					throw new ArgumentNullException(paramName: "UserConnection");
				}
				return _userConnection;
			}
		}

		protected ILog Logger => LogManager.GetLogger("EmailSender");

		#endregion

		#region Constructors: Public

		/// <summary><see cref="EmailSender"/> ctor.</summary>
		/// <param name="emailClientFactory">An instance of the mail client factory.</param>
		/// <param name="userConnection">An instance of the user connection.</param>
		public EmailSender(IEmailClientFactory emailClientFactory, UserConnection userConnection) {
			_emailClientFactory = emailClientFactory;
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private IResourceStorage GetResourceStorage() {
			return _userConnection.Workspace.ResourceStorage;
		}

		/// <summary>
		/// Clears synchronization error in mailbox.
		/// </summary>
		/// <param name="helper"><see cref="ISynchronizationErrorHelper"/> implementation instance.</param>
		/// <param name="senderEmailAddress">Sender email address.</param>
		private void ClearSyncError(ISynchronizationErrorHelper helper, string senderEmailAddress) {
			if (!_userConnection.GetIsFeatureEnabled("OldEmailIntegration")) {
				return;
			}
			helper.CleanUpSynchronizationError(senderEmailAddress);
		}

		/// <summary>
		/// Sends e-mail message <paramref name="emailMessage"/>.
		/// </summary>
		/// <param name="emailClient">Instance of <see cref="IEmailClient"/>.</param>
		/// <param name="emailMessage">E-mail message.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		private void SendMessage(IEmailClient emailClient, EmailMessage emailMessage, bool ignoreRights) {
			SynchronizationErrorHelper helper = SynchronizationErrorHelper.GetInstance(_userConnection);
			try {
				emailClient.Send(emailMessage, ignoreRights);
				ClearSyncError(helper, emailMessage.From);
			} catch (Exception ex) {
				Logger.Error($"EmailClient error send message '{emailMessage.Subject}'", ex);
				if(ex is EmailException) {
					ex.Data.Add("TransientExtraData", $" {string.Join(", ", emailMessage.To)}");
				}
				helper.ProcessSynchronizationError(emailMessage.From, ex);
				throw;
			}
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Check invalid file name characters.
		/// </summary>
		/// <param name="fileName">File name.</param>
		/// <returns>True if invalid characters is present, otherwise false.</returns>
		protected bool CheckInvalidFileName(string fileName) {
			if (fileName.IsNotNullOrEmpty()) {
				var intersect = Path.GetInvalidFileNameChars().Intersect(fileName.ToArray());
				return intersect.Any();
			}
			return true;
		}

		/// <summary>
		/// Returns list of <see cref="EmailAttachment"/> items.
		/// </summary>
		/// <param name="files">Collection of items of <see cref="EntityFile"/> type.</param>
		/// <returns>List of attachments.</returns>
		protected List<EmailAttachment> GetEmailAttachments(ICollection<EntityFile> files) {
			var attachments = new List<EmailAttachment>();
			IEnumerable<IGrouping<Guid, Guid>> groups = files.GroupBy(file => file.EntityUId, file => file.RecordId);
			foreach (IGrouping<Guid, Guid> group in groups) {
				attachments.AddRange<EmailAttachment>(GetEmailAttachments(group.Key, group.ToList()));
			}
			return attachments;
		}

		/// <summary>
		/// Returns list of <see cref="EmailAttachment"/> items.
		/// </summary>
		/// <param name="schemaUId">Entity schema unique identifier.</param>
		/// <param name="recordIds">Collection of entity records identifiers.</param>
		/// <returns>List of attachments.</returns>
		protected List<EmailAttachment> GetEmailAttachments(Guid schemaUId, ICollection<Guid> recordIds) {
			EntitySchemaQuery esq = GetFileESQ(schemaUId);
			esq.Filters.Add(GetFilePrimaryColumnFilter(esq, recordIds));
			var schema = UserConnection.EntitySchemaManager.FindInstanceByUId(schemaUId);
			if (schema.ParentSchema != null && schema.ParentSchema.Name == "File") {
				esq.Filters.Add(GetFileCodeFilter(esq));
			}
			return GetEmailAttachments(esq);
		}

		/// <summary>
		/// Convert list of <see cref="DTO.Attachment"/> to <see cref="EmailAttachment"/>.
		/// </summary>
		/// <param name="attachments">attachment list.</param>
		/// <returns>collection <see cref="EmailAttachment"/></returns>
		protected List<EmailAttachment> GetConvertedEmailAttachments(List<DTO.Attachment> attachments) {
			var emailAttachments = new List<EmailAttachment> { };
			foreach (var attach in attachments) {
				string name = attach.Name;
				emailAttachments.Add(new EmailAttachment {
					Id = new Guid(attach.Id),
					Name = CheckInvalidFileName(name) ? name : Path.GetFileName(name),
					Data = attach.GetData(),
					IsContent = attach.IsInline
				});
			}
			return emailAttachments;
		}

		/// <summary>
		/// Parsing email headers from string.
		/// </summary>
		/// <param name="headerProperty">Email header property.</param>
		/// <returns>instance <see cref="EmailMessageHeader"/></returns>
		protected EmailMessageHeader GetParsedHeaderProperty(string headerProperty) {
			EmailMessageHeader result = null;
			string[] keyValue = headerProperty.Split('=');
			if (keyValue.Length > 1) {
				result = new EmailMessageHeader { Name = keyValue[0], Value = keyValue[1] };
			}
			return result;
		}

		/// <summary>
		/// Returns list of <see cref="EmailAttachment"/> items.
		/// </summary>
		/// <param name="esq">Instance of <see cref="EntitySchemaQuery"/> type.</param>
		/// <returns>List of attachments.</returns>
		protected List<EmailAttachment> GetEmailAttachments(EntitySchemaQuery esq) {
			EntitySchemaQueryColumn idColumn = esq.AddColumn("Id");
			EntityCollection fileEntities = esq.GetEntityCollection(UserConnection);
			var attachments = new List<EmailAttachment>();
			var fileRepository = ClassFactory.Get<FileRepository>(
				new ConstructorArgument("userConnection", UserConnection));
			foreach (Entity fileEntity in fileEntities) {
				Guid id = fileEntity.GetTypedColumnValue<Guid>(idColumn.Name);
				using (var memoryStream = new MemoryStream()) {
					var bwriter = new BinaryWriter(memoryStream);
					var fileInfo = fileRepository.LoadFile(esq.RootSchema.UId, id, bwriter);
					string fileName = CheckInvalidFileName(fileInfo.FileName)
						? fileInfo.FileName
						: Path.GetFileName(fileInfo.FileName);
					var attachment = new EmailAttachment {
						Id = id,
						Name = fileName,
						Data = memoryStream.ToArray(),
						IsContent =  false
					};
					attachments.Add(attachment);
				}
			}
			return attachments;
		}

		/// <summary>
		/// Returns instance of <see cref="EntitySchemaQuery"/> type.
		/// </summary>
		/// <param name="schemaUId">Entity schema unique identifier.</param>
		/// <returns>Query instance.</returns>
		protected EntitySchemaQuery GetFileESQ(Guid schemaUId) {
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.GetInstanceByUId(schemaUId);
			return new EntitySchemaQuery(entitySchema);
		}


		/// <summary>
		/// Returns query filter by "Type.Code" path.
		/// </summary>
		/// <param name="esq">Instance of <see cref="EntitySchemaQuery"/> type.</param>
		/// <returns>Query filter.</returns>
		protected IEntitySchemaQueryFilterItem GetFileCodeFilter(EntitySchemaQuery esq) {
			IEntitySchemaQueryFilterItem codeFilter = esq
				.CreateFilterWithParameters(FilterComparisonType.NotEqual, "Type.Code", "Link");
			return codeFilter;
		}

		/// <summary>
		/// Returns query filter by primary column path.
		/// </summary>
		/// <param name="esq">Instance of <see cref="EntitySchemaQuery"/> type.</param>
		/// <param name="recordIds">Collection of entity records identifiers.</param>
		/// <returns>Query filter.</returns>
		protected IEntitySchemaQueryFilterItem GetFilePrimaryColumnFilter(EntitySchemaQuery esq,
			ICollection<Guid> recordIds) {
			IEntitySchemaQueryFilterItem idFilter = esq
				.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", recordIds.Cast<object>().ToArray());
			return idFilter;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Preparation e-mail client and sends e-mail message <paramref name="emailMessage"/>.
		/// </summary>
		/// <param name="emailMessage">E-mail message.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public virtual void Send(EmailMessage emailMessage, bool ignoreRights = false) {
			IEmailClient emailClient = _emailClientFactory
				.CreateEmailClient(emailMessage.From.ExtractEmailAddress(), ignoreRights);
			SendMessage(emailClient, emailMessage, ignoreRights);
		}

		/// <summary>
		/// Preparation e-mail client and sends e-mail message <paramref name="emailMessage"/>.
		/// </summary>
		/// <param name="email">E-mail message.</param>
		/// <param name="credentials">Connection credentials.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public void Send(EmailMessage emailMessage, Credentials credentials, bool ignoreRights = false) {
			if (emailMessage is null) {
				throw new ArgumentNullException(nameof(emailMessage));
			}
			if (credentials is null) {
				throw new ArgumentNullException(nameof(credentials));
			}
			var emailClient = _emailClientFactory.CreateEmailClient(credentials);
			SendMessage(emailClient, emailMessage, ignoreRights);
		}

		/// <summary>
		/// Preparation e-mail client and sends e-mail message <paramref name="emailMessage"/>.
		/// </summary>
		/// <param name="email">E-mail message.</param>
		/// <param name="credentials">Connection credentials.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public virtual void Send(DTO.Email email, DTO.Credentials credentials, bool ignoreRights = false) {
			if (email is null) {
				throw new ArgumentNullException(nameof(email));
			}
			if (credentials is null) {
				throw new ArgumentNullException(nameof(credentials));
			}
			IEmailClient emailClient = _emailClientFactory.CreateEmailClient(credentials);
			var headerProperties = new List<EmailMessageHeader> { };
			foreach (var header in email.Headers) {
				EmailMessageHeader messageHeader = GetParsedHeaderProperty(header);
				if (messageHeader != null) {
					headerProperties.Add(messageHeader);
				}
			}
			var emailMessage = new EmailMessage { 
				From = email.Sender,
				To = email.Recepients,
				Cc = email.CopyRecepients,
				Bcc = email.BlindCopyRecepients,
				Subject = email.Subject,
				Body = email.Body,
				Attachments = GetConvertedEmailAttachments(email.Attachments),
				IsHtmlBody = email.IsHtmlBody,
				HeaderProperties = headerProperties
			};
			if (Enum.TryParse(email.Importance.ToString(), out EmailPriority priority)) {
				emailMessage.Priority = priority;
			}
			SendMessage(emailClient, emailMessage, ignoreRights);
		}

		/// <summary>
		/// Creates and sends e-mail message for test using e-mail address <paramref name="emailAddress"/>
		/// and connection settings <paramref name="credentials"/>.
		/// </summary>
		/// <param name="emailAddress">E-mail address.</param>
		/// <param name="credentials">Connection settings.</param>
		public virtual void SendTestMessage(string emailAddress, Credentials credentials) {
			var emailAddresses = new List<string> { emailAddress };
			var emailMessage = new EmailMessage {
				From = emailAddress,
				To = emailAddresses,
				Subject = TestMessageSubject.Value,
				Body = TestMessageBody.Value,
			};
			IEmailClient emailClient = _emailClientFactory.CreateEmailClient(credentials);
			emailClient.Send(emailMessage);
		}

		#endregion

	}

	#endregion

	#region Class: HtmlEmailMessageSender

	/// <summary>
	/// Class to send e-mail message, that written on HTML format.
	/// </summary>
	public class HtmlEmailMessageSender : EmailSender
	{

		#region Constants: Private

		private const string guidPattern = "[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}";

		#endregion

		#region Constructors : Public

		/// <summary>Initialize new instance of the <see cref="HtmlEmailMessageSender"/> class.</summary>
		/// <param name="emailClientFactory">EmailClient factory instance.</param>
		/// <param name="userConnection">User connection instance.</param>
		public HtmlEmailMessageSender(IEmailClientFactory emailClientFactory, UserConnection userConnection)
			: base(emailClientFactory, userConnection) {
		}

		#endregion

		#region Methods : Private

		/// <summary>
		/// Replaces file service URLs by cid in e-mail content.
		/// </summary>
		/// <param name="htmlBody">E-mail html content.</param>
		/// <param name="contentIds">Collection of content items identifiers.</param>
		/// <param name="files">Collection of items of <see cref="EmailSender.EntityFile"/> type.</param>
		/// <returns>Html content.</returns>
		private string ReplaceFileServiceCallsInImgSrc(string htmlBody, ICollection<Guid> contentIds,
				ICollection<EntityFile> files) {
			var searchImgOnly = UserConnection.GetIsFeatureEnabled("SearchInlineImagesOnly");
			var tpl = searchImgOnly
					? "src=['\"]?(http([^\"\\s]+?)|..)({0}/)({1})(/)({1})"
					: "(http([^\"\\s]+?)|..)({0}/)({1})(/)({1})";
			htmlBody = ReplaceFileServiceCallsInImgSrc(htmlBody, contentIds, files, "/rest/FileService/GetFile", tpl);
			tpl = searchImgOnly
					? "src=['\"]?(http([^\"\\s]+?)|..)({0}/)(.+?)(/)({1})"
					: "(http([^\"\\s]+?)|..)({0}/)(.+?)(/)({1})";
			return ReplaceFileServiceCallsInImgSrc(htmlBody, contentIds, files, "/rest/FileService/Download", tpl);
		}

		/// <summary>
		/// Replaces file service URLs by cid in e-mail content.
		/// </summary>
		/// <param name="htmlBody">E-mail html content.</param>
		/// <param name="contentIds">Collection of content items identifiers.</param>
		/// <param name="files">Collection of items of <see cref="EmailSender.EntityFile"/> type.</param>
		/// <param name="fileServiceUrl">File service handler uri.</param>
		/// <param name="fileServiceUrl">File service uri regex template.</param>
		/// <returns>Html content.</returns>
		private string ReplaceFileServiceCallsInImgSrc(string htmlBody, ICollection<Guid> contentIds,
				ICollection<EntityFile> files, string fileServiceUrl, string regexTpl) {
			string pattern = string.Format(regexTpl, fileServiceUrl, guidPattern);
			var regex = new Regex(pattern, RegexOptions.IgnoreCase);
			MatchCollection matchCollection = regex.Matches(htmlBody);
			if (matchCollection.Count > 0) {
				foreach (Match match in matchCollection) {
					if (match.Groups.Count > 6) {
						Group entityGroup = match.Groups[4];
						Guid entityUId = Guid.TryParse(entityGroup.ToString(), out Guid parsedUid)
							? parsedUid
							: GetSchemaUid(entityGroup.ToString());
						if (UserConnection.EntitySchemaManager.FindInstanceByUId(entityUId) == null) {
							continue;
						}
						Group contentGroup = match.Groups[6];
						Guid contentId = Guid.Parse(contentGroup.ToString());
						contentIds.Add(contentId);
						files.Add(new EntityFile {
							EntityUId = entityUId,
							RecordId = contentId
						});
						Group servicePrefixGroup = match.Groups[1];
						string servicePrefix = servicePrefixGroup.ToString();
						string oldValue = $"{servicePrefix}{fileServiceUrl}/{entityGroup}/{contentGroup}";
						string newValue = $"cid:{contentGroup}";
						htmlBody = htmlBody.Replace(oldValue, newValue.ToLower());
					}
				}
			}
			return htmlBody;
		}

		/// <summary>
		/// Returns entity schema UId by name.
		/// </summary>
		/// <param name="schemaName">Entity schema name.</param>
		/// <returns>Entity schema UId.</returns>
		private Guid GetSchemaUid(string schemaName) {
			var schemaItem = UserConnection.EntitySchemaManager.FindItemByName(schemaName);
			return schemaItem.UId;
		}

		/// <summary>
		/// Returns file name for base64 inline attachment.
		/// </summary>
		/// <param name="attachmentId">Base64 attachment unique identifier.</param>
		/// <param name="mimeType">Base64 attachment mime type.</param>
		/// <returns>Base64 attachment file name.</returns>
		private string GetBase64FileName(Guid attachmentId, string mimeType) {
			Regex extentionRegex = new Regex(@"(.+?)image\/(?<extension>[A-Za-z]+);", RegexOptions.Compiled);
			MatchCollection matches = extentionRegex.Matches(mimeType);
			string extension = string.Empty;
			if (matches.Count > 0) {
				Match extensionPart = matches[0];
				extension = "." + extensionPart.Groups["extension"].Value;
			}
			return string.Concat("Image_", attachmentId, extension);
		}

		/// <summary>
		/// Replaces Base64 strings with cid in e-mail content.
		/// </summary>
		/// <param name="htmlBody">E-mail html content.</param>
		/// <param name="attachments">Collection of items of <see cref="Sender.EmailAttachment"/> type.</param>
		/// <param name="contentIds">Collection of content items identifiers.</param>
		/// <returns>Html content.</returns>
		private string ReplaceBase64ImgSrc(string htmlBody, ICollection<EmailAttachment> attachments,
				ICollection<Guid> contentIds) {
			string matchPattern = @"(?<=<\s*img.+?src[^""]+?"")(?<mimeType>[^,""]+,)(?<base64>(?:[\w+/]+)[\w+/]{2}[\w+/]={0,2}"")";
			foreach (Match match in Regex.Matches(htmlBody, matchPattern)) {
				string mimeType = match.Groups["mimeType"].Value;
				string base64Value = match.Groups["base64"].Value;
				string base64Image = base64Value.IsNotNullOrEmpty() ? base64Value.Substring(0, base64Value.Length - 1) : string.Empty;
				int mod4 = base64Image.Length % 4;
				string base64ImageDataString;
				switch (mod4) {
					case 1:
						base64ImageDataString = string.Concat("+", base64Image, "==");
						break;
					case 2:
						base64ImageDataString = string.Concat(base64Image, "==");
						break;
					case 3:
						base64ImageDataString = string.Concat(base64Image, "=");
						break;
					default:
						base64ImageDataString = base64Image;
						break;
				}
				base64ImageDataString = base64ImageDataString.Replace('-', '+').Replace('_', '/');
				byte[] data = Convert.FromBase64String(base64ImageDataString);
				Guid id = Guid.NewGuid();
				string fileName = GetBase64FileName(id, mimeType);
				var attachment = new EmailAttachment {
					Id = id,
					Name = fileName,
					Data = data,
					IsContent = true
				};
				attachments.Add(attachment);
				contentIds.Add(id);
				string attachmentCid = string.Format("cid:{0}", id);
				htmlBody = ReplaceBase64Img(htmlBody, string.Concat(mimeType, base64Image), attachmentCid);
			}
			return htmlBody;
		}

		/// <summary>
		/// Replaces HTTP handler links by cid in E-mail content.
		/// </summary>
		/// <param name="htmlBody">E-mail html content.</param>
		/// <param name="contentIds">Collection of content items identifiers.</param>
		/// <returns>Html content.</returns>
		private string ReplaceHttpHandlersInImgSrc(string htmlBody, ICollection<Guid> contentIds) {
			string pattern = string.Format("(s=db&sn=)({0})(&id=)({0})(&t=.*)?(&sc=)({0})", guidPattern);
			var regex = new Regex(pattern, RegexOptions.IgnoreCase);
			MatchCollection matchCollection = regex.Matches(htmlBody);
			if (matchCollection.Count > 0) {
				foreach (Match match in matchCollection) {
					if (match.Groups.Count > 5) {
						Group contentGroup = match.Groups[4];
						Guid contentId = Guid.Parse(contentGroup.ToString());
						contentIds.Add(contentId);
						string oldValue = string.Format("./terrasoft.axd?{0}", match.Groups[0]);
						string newValue = string.Format("cid:{0}", contentGroup);
						htmlBody = htmlBody.Replace(oldValue, newValue.ToLower());
					}
				}
			}
			return htmlBody;
		}

		/// <summary>
		/// Replaces images sources by cid in e-mail content.
		/// </summary>
		/// <param name="htmlBody">E-mail html content.</param>
		/// <param name="contentIds">Collection of content items identifiers.</param>
		/// <param name="attachments">List of items of <see cref="Sender.EmailAttachment"/> type.</param>
		/// <returns>Html content.</returns>
		private string ReplaceImgSource(string htmlBody, ICollection<Guid> contentIds,
				ICollection<EmailAttachment> attachments) {

#if NETFRAMEWORK && OldUI //TODO #CRM-44355
			string decodedBody = UserConnection.GetIsFeatureEnabled("DisableEmailDecoding") 
					? htmlBody
					: ControlUtilities.HtmlDecode(htmlBody);
#else
			string decodedBody = htmlBody;
#endif
			var files = new List<EntityFile>();
			decodedBody = ReplaceFileServiceCallsInImgSrc(decodedBody, contentIds, files);
			decodedBody = ReplaceHttpHandlersInImgSrc(decodedBody, contentIds);
			decodedBody = ReplaceBase64ImgSrc(decodedBody, attachments, contentIds);
			files.RemoveAll(file => attachments.Any(att => att.Id.Equals(file.RecordId)));
			attachments.AddRange(GetEmailAttachments(files));
			return decodedBody;
		}

		/// <summary>
		/// Replaces Base64 image string with cid in email content from body.
		/// </summary>
		/// <param name="htmlBody">Email html body.</param>
		/// <param name="base64ImageString">Base 64 image string.</param>
		/// <param name="cid">Content item identifier.</param>
		/// <returns>Updated html body.</returns>
		private string ReplaceBase64Img(string htmlBody, string base64ImageString, string cid) {
			int index = htmlBody.IndexOf(base64ImageString);
			string result = htmlBody.Remove(index, base64ImageString.Length).Insert(index, cid);
			return result;
		}

		/// <summary>
		/// Remove trash content from ActivityFile and email attachments.
		/// </summary>
		/// <param name="attachments">E-mail attachments</param>
		/// <param name="contentIds">Collection of content items identifiers given by parsing image links.</param>
		private void RemoveTrashContent(List<EmailAttachment> attachments, IEnumerable<Guid> contentIds) {
			var fileRepository = ClassFactory.Get<FileRepository>(
				new ConstructorArgument("userConnection", UserConnection));
			var trashAttachmentIds = 
				from att in attachments
				where att.IsContent && !contentIds.Contains(att.Id)
				select att.Id;
			if (trashAttachmentIds.Any()) {
				fileRepository.DeleteFiles("ActivityFile", trashAttachmentIds);
				attachments.RemoveAll(attach => trashAttachmentIds.Any(ta => ta == attach.Id));
			}
		}

		/// <summary>
		/// Sets IsContent flag for e-mail attachments.
		/// </summary>
		/// <param name="attachments">E-mail attachments</param>
		/// <param name="contentIds">Collection of content items identifiers given by parsing image links.</param>
		private void SetContentIds(List<EmailAttachment> attachments, IEnumerable<Guid> contentIds) {
			attachments.ForEach(attachment => {
				attachment.IsContent = contentIds.Contains(attachment.Id);
			});
		}

		/// <summary>
		/// Replace image links in e-mail message body on links to message attachments.
		/// </summary>
		/// <param name="message">E-mail message.</param>
		private void ReplaceImagesInSource(EmailMessage message) {
			List<EmailAttachment> attachments = message.Attachments;
			var contentIds = new List<Guid>();
			try {
				message.Body = ReplaceImgSource(message.Body, contentIds, attachments);
				RemoveTrashContent(attachments, contentIds);
				SetContentIds(attachments, contentIds);
			} catch (FormatException e) {
				throw new EmailException(ErrorOnSendEmailStatus, e.Message, e);
			} catch (ArgumentNullException e) {
				throw new EmailException(ErrorOnSendEmailStatus, e.Message, e);
			} catch (ArgumentException e) {
				throw new EmailException(ErrorOnSendEmailStatus, e.Message, e);
			}
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Send e-mail message. Before send replace image links on links to attachments.
		/// </summary>
		/// <param name="message">E-mail message</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public override void Send(EmailMessage message, bool ignoreRights = false) {
			ReplaceImagesInSource(message);
			base.Send(message, ignoreRights);
		}

		/// <summary>
		/// Send e-mail message. If isHtml flag is set, replace image links on links to attachments.
		/// </summary>
		/// <param name="message">E-mail message</param>
		/// <param name="isHtml">Flag that indicates whether that message writtent in html format.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public virtual void Send(EmailMessage message, bool isHtml, bool ignoreRights) {
			if (isHtml) {
				ReplaceImagesInSource(message);
			}
			base.Send(message, ignoreRights);
		}

		#endregion

	}

	#endregion

	#region Class: ActivityEmailSender

	/// <summary> Represents the sender class of the object's mail messages Activity.</summary>
	public class ActivityEmailSenderBase : HtmlEmailMessageSender
	{

		#region LocalizableStrings

		/// <summary>
		/// The localized string with the message "NotEmailTypeError".
		/// </summary>
		public LocalizableString NotEmailTypeError {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.NotEmailTypeError.Value").ToString();
			}
		}

		/// <summary>
		/// The localized string with the message "EmailSenderNotSetError".
		/// </summary>
		public LocalizableString EmailSenderNotSetError {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.EmailSenderNotSetError.Value").ToString();
			}
		}

		/// <summary>
		/// The localized string with the message "NoRecepientError".
		/// </summary>
		public LocalizableString NoRecepientError {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.NoRecepientError.Value").ToString();
			}
		}

		/// <summary>
		/// The localized string with the message "ActivityTypeEmailIsNotDifinedError".
		/// </summary>
		public LocalizableString ActivityTypeEmailIsNotDifinedError {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.ActivityTypeEmailIsNotDifinedError.Value").ToString();
			}
		}

		/// <summary>
		/// The localized string with the message "ActivityDoesNotExistError".
		/// </summary>
		public LocalizableString ActivityDoesNotExistError {
			get {
				return new LocalizableString(GetResourceStorage(), "EmailSender",
					"LocalizableStrings.ActivityDoesNotExistError.Value").ToString();
			}
		}

		#endregion

		#region Constants: Private

		private const string SentEmailStatus = "Sent";
		private const string NotSendEmailStatus = "NotSend";
		private const string InProgressEmailStatus = "InProgress";

		#endregion

		#region Fields: Private

		private Guid _emailTypeId;
		private Dictionary<string, Guid> _activityStatusDictionary;

		#endregion

		#region Constructors : Public

		/// <summary><see cref="ActivityEmailSenderBase"/> ctor.</summary>
		/// <param name="emailClientFactory">An instance of the mail client factory.</param>
		/// <param name="userConnection">An instance of the user connection.</param>
		public ActivityEmailSenderBase(IEmailClientFactory emailClientFactory, UserConnection userConnection)
			: base(emailClientFactory, userConnection) {
		}

		#endregion

		#region Properties: Private

		private Guid EmailTypeId {
			get {
				if (_emailTypeId == Guid.Empty) {
					var select = new Select(UserConnection).Top(1)
						.Column("Id")
						.From("ActivityType")
						.Where("Code").IsEqual(Column.Parameter("Email")) as Select;
					_emailTypeId = select.ExecuteScalar<Guid>();
					if (_emailTypeId == Guid.Empty) {
						throw new EmailException(ErrorOnSendEmailStatus,
							ActivityTypeEmailIsNotDifinedError);
					}
				}
				return _emailTypeId;
			}

		}

		private Dictionary<string, Guid> ActivityStatusDictionary {
			get {
				if (_activityStatusDictionary == null) {
					var activityStatusSchemaQuery = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "ActivityStatus");
					var idQueryColumn = activityStatusSchemaQuery.AddColumn("Id");
					var codeQueryColumn = activityStatusSchemaQuery.AddColumn("Code");
					activityStatusSchemaQuery.AddColumn("CreatedOn").OrderByAsc();
					var entityCollection = activityStatusSchemaQuery.GetEntityCollection(UserConnection);
					if (entityCollection.Count == 0) {
						throw new ArgumentNullException(paramName: "ActivityStatusDictionary");
					}
					_activityStatusDictionary = new Dictionary<string, Guid>();
					foreach (var entity in entityCollection) {
						string key = entity.GetTypedColumnValue<string>(codeQueryColumn.Name);
						if (!_activityStatusDictionary.ContainsKey(key)) {
							_activityStatusDictionary.Add(key, entity.GetTypedColumnValue<Guid>(idQueryColumn.Name));
						}
					}
				}
				return _activityStatusDictionary;
			}

		}

		#endregion

		#region Methods: Private

		private IResourceStorage GetResourceStorage() {
			return UserConnection.Workspace.ResourceStorage;
		}

		private Entity LoadActivity(Guid activityId) {
			EntitySchema activitySchema = UserConnection.EntitySchemaManager.GetInstanceByName("Activity");
			var activityEntity = activitySchema.CreateEntity(UserConnection);
			if (!activityEntity.FetchFromDB(activityId)) {
				throw new EmailException("ActivityDoesNot", ActivityDoesNotExistError);
			}
			Guid emailTypeId = EmailTypeId;
			Guid activityTypeId = activityEntity.GetTypedColumnValue<Guid>("TypeId");
			if (activityTypeId != emailTypeId) {
				throw new EmailException("NotEmailType", NotEmailTypeError);
			}
			if (string.IsNullOrEmpty(activityEntity.GetTypedColumnValue<string>("Sender"))) {
				throw new EmailException("EmailSenderNotSet", EmailSenderNotSetError);
			}
			return activityEntity;
		}

		/// <summary>
		/// Returns sender email address for <paramref name="activity"/>.
		/// </summary>
		/// <param name="activity">Activity instance.</param>
		/// <returns>Sender email address for <paramref name="activity"/>.</returns>
		private string GetSenderEmail(Entity activity) {
			var result = string.Empty;
			string sender = activity.SafeGetColumnValue<string>("Sender");
			if (!string.IsNullOrEmpty(sender)) {
				result = sender.Trim(';').ExtractEmailAddress();
			}
			return result;
		}

		private List<string> GetEmailAddresses(string addresses) {
			if (string.IsNullOrEmpty(addresses)) {
				return new List<string>();
			}
			var separators = new char[] { ';', ',' };
			return addresses.Split(separators)
				.Select(rawEmail => rawEmail.Trim())
				.Where(rawEmail => !string.IsNullOrEmpty(rawEmail) && rawEmail.IndexOf('@') > 0)
				.Select(rawEmail => rawEmail.ExtractEmailAddress())
				.ToList();
		}

		[System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
		private bool IsCustomHeadersEnabled() {
			return UserConnection.GetIsFeatureEnabled("EmailHeadersEnabled");
		}

		[System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]
		private bool IsHideAutoEmailNotificationsEnabled() {
			return UserConnection.GetIsFeatureEnabled("HideAutoEmailNotifications");
		}

		private List<EmailMessageHeader> GetAdditionalHeaders(Entity activity) {
			var properties = activity.SafeGetColumnValue<string>("HeaderProperties");
			List<EmailMessageHeader> result = new List<EmailMessageHeader>();
			var rawHeaders = properties.Split(new char[] { '\n' }, StringSplitOptions.RemoveEmptyEntries);
			if (IsCustomHeadersEnabled()) {
				foreach (string rawHeader in rawHeaders) {
					var emailMessageHeader = GetParsedHeaderProperty(rawHeader);
					if (emailMessageHeader != null) {
						result.Add(emailMessageHeader);
					}
				}
			}
			AddAutoSubmittedHeader(activity, result);
			AddInReplyToHeader(rawHeaders, result);
			return result;
		}

		private void AddAutoSubmittedHeader(Entity activity, List<EmailMessageHeader> headers) {
			if (!IsHideAutoEmailNotificationsEnabled() || !activity.SafeGetColumnValue<bool>("IsAutoSubmitted")) {
				return;
			}
			if (!headers.Any(
					header => header.Name.Equals("Auto-Submitted", StringComparison.CurrentCultureIgnoreCase))) {
				headers.Add(new EmailMessageHeader { Name = "Auto-Submitted", Value = "auto-replied" });
			}
		}

		private void AddInReplyToHeader(IEnumerable<string> rawHeaders, List<EmailMessageHeader> headers) {
			if (headers.Any(h => h.Name.Equals("In-Reply-To", StringComparison.InvariantCultureIgnoreCase))) {
				return;
			}
			var header = rawHeaders.FirstOrDefault(rawHeader => rawHeader.StartsWith("X-In-Reply-To-Activity", StringComparison.OrdinalIgnoreCase));
			if (header.IsNullOrEmpty()) {
				return;
			}
			var inReplyToActivityHeader = GetParsedHeaderProperty(header);
			var activityId = inReplyToActivityHeader.Value;
			var messageId = ((Select)new Select(UserConnection).Top(1)
				.Column("MessageId")
				.From("EmailMessageData")
			.Where("ActivityId").IsEqual(Column.Parameter(Guid.Parse(activityId)))
				.And("MessageId").IsNotEqual(Column.Const(string.Empty))).ExecuteScalar<string>();
			if (messageId.IsNullOrEmpty()) {
				return;
			}
			headers.Add(new EmailMessageHeader { Name = "In-Reply-To", Value = messageId });
		}

		private EmailMessage CreateEmailMessage(Entity activity) {
			string body = activity.SafeGetColumnValue<string>("Body");
			bool isHtmlBody = activity.SafeGetColumnValue<bool>("IsHtmlBody");
			string title = activity.SafeGetColumnValue<string>("Title");
			string from = GetSenderEmail(activity);
			string toValues = activity.SafeGetColumnValue<string>("Recepient");
			string ccValues = activity.SafeGetColumnValue<string>("CopyRecepient");
			string bccValue = activity.SafeGetColumnValue<string>("BlindCopyRecepient");
			List<string> recipients = GetEmailAddresses(toValues);
			List<string> ccRecipients = GetEmailAddresses(ccValues);
			List<string> bccRecipients = GetEmailAddresses(bccValue);
			var emailPriority = EmailPriority.None;
			Guid priorityId = activity.SafeGetColumnValue<Guid>("PriorityId");
			if (priorityId != Guid.Empty) {
				emailPriority = EmailPriorityConverter.GetEmailPriority(priorityId);
			}
			if (recipients.Count == 0 && ccRecipients.Count == 0 && bccRecipients.Count == 0) {
				throw new EmailException(ErrorOnSendEmailStatus, NoRecepientError);
			}
			var headerProperties = GetAdditionalHeaders(activity);
			Guid activityId = activity.PrimaryColumnValue;
			List<EmailAttachment> attachments = GetAttachments(activityId);
			var emailMessage = new EmailMessage {
				From = from,
				To = recipients,
				Cc = ccRecipients,
				Bcc = bccRecipients,
				Subject = title,
				Body = body,
				Attachments = attachments,
				Priority = emailPriority,
				IsHtmlBody = isHtmlBody,
				HeaderProperties = headerProperties
			};
			return emailMessage;
		}

		private Guid FindEmailSendStatus(string code) {
			return ((Select)new Select(UserConnection).Top(1)
				.Column("Id")
				.From("EmailSendStatus")
			.Where("Code").IsEqual(Column.Parameter(code))).ExecuteScalar<Guid>();
		}

		private Guid GetActivityStatusByCode(string code) {
			return ActivityStatusDictionary.ContainsKey(code) ? ActivityStatusDictionary[code] : Guid.Empty;
		}

		/// <summary>
		/// Returns <see cref="MailboxSyncSettings"/> unique identifier for <paramref name="senderEmailAddress"/>.
		/// </summary>
		/// <param name="senderEmailAddress"><see cref="MailboxSyncSettings.SenderEmailAddress"/> column filter value.
		/// </param>
		/// <returns><see cref="MailboxSyncSettings"/> unique identifier when the mailbox with the 
		/// <paramref name="senderEmailAddress"/> found. Otherwise returns <c>Guid.Empty</c></returns>
		private Guid GetMailboxId(string senderEmailAddress) {
			Select select = new Select(UserConnection).Top(1)
					.Column("Id")
				.From("MailboxSyncSettings")
				.Where("SenderEmailAddress").IsEqual(Column.Parameter(senderEmailAddress)) as Select;
			return select.ExecuteScalar<Guid>();
		}

		private void SetDefaultSendDate(Entity activity) {
			if (activity.SafeGetColumnValue<DateTime>("SendDate") == DateTime.MinValue) {
				activity.SetColumnValue("SendDate", UserConnection.CurrentUser.GetCurrentDateTime());
			}
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Sends e-mail message <see name="EmailMessage"/>, formed related to Activity. Uses provided
		/// <paramref name="sourceActivityEntity"/> or fetches it from DB by <paramref name="activityId"/>.
		/// </summary>
		/// <remarks>
		/// In object Activity sets sending status message.
		/// </remarks>
		/// <param name="activityId">Id of source activityEntity.</param>
		/// <param name="sourceActivityEntity">Activity entity.</param>
		/// <param name="message">Email message data.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		protected virtual Entity Send(Guid activityId, Entity sourceActivityEntity, EmailMessage message,
				bool ignoreRights = false) {
			try {
				Logger.Debug($"[EmailSender] Loading activityEntity before sending, Id: {activityId}");
				Entity activityEntity = sourceActivityEntity ?? LoadActivity(activityId);
				if (activityEntity.GetTypedColumnValue<DateTime>("SendDate") != DateTime.MinValue
						&& activityEntity.GetTypedColumnValue<string>("ErrorOnSend").IsNullOrEmpty()) {
					return activityEntity;
				}
				Logger.Debug($"[EmailSender] Updating activityEntity status before sending to Inprogress, Id: {activityId}");
				UpdateActivityStatus(activityId, InProgressEmailStatus, string.Empty);
				Logger.Debug($"[EmailSender] Creating email message for sending, Id: {activityId}");
				var emailMessage = message ?? CreateEmailMessage(activityEntity);
				Logger.Info($"[EmailSender] Email sending, Id: {activityId}, Subject: {emailMessage.Subject}, Sender: " +
					$"{emailMessage.From}, MessageID: {emailMessage.GetMessageId()}");
				Send(emailMessage, activityEntity.GetTypedColumnValue<bool>("IsHtmlBody"), ignoreRights);
				Logger.Debug($"[EmailSender] Email sent, Id: {activityId}, Subject: {emailMessage.Subject}, Sender: {emailMessage.From}");
				activityEntity.SetColumnValue("SendDate", emailMessage.SendDate);
				activityEntity.SetColumnValue("SenderContactId", UserConnection.CurrentUser.ContactId);
				SetDefaultSendDate(activityEntity);
				Logger.Debug($"[EmailSender] SetMailboxInEMD, Id: {activityId}, Subject: {emailMessage.Subject}, Sender: {emailMessage.From}");
				SetMailboxInEMD(activityEntity, emailMessage);
				CompleteSending(activityEntity);
				Logger.Info($"[EmailSender] Email CompleteSending, Id: {activityId}, Subject: {emailMessage.Subject}, Sender: " +
					$"{emailMessage.From}");
				SetMessageRights(activityEntity);
				Logger.Debug($"[EmailSender] Activity status updating, Id: {activityId}, Subject: {emailMessage.Subject}, Sender: {emailMessage.From}");
				UpdateActivityStatus(activityId, SentEmailStatus, string.Empty);
				return activityEntity;
			} catch (Exception e) {
				Logger.Error($"Error on activityEntity {activityId} send", e);
				var sendStatus = e is EmailException eEx ? eEx.EmailSendStatus : ErrorOnSendEmailStatus;
				UpdateActivityStatus(activityId, sendStatus, e.Message);
				throw;
			}
		}

		/// <summary>
		/// Set activityEntity parameters.
		/// </summary>
		/// <param name="entity">Activity entity object.</param>
		protected virtual void SetActivityColumnValues(Entity entity) {
			entity.SetColumnValue("StatusId", ActivityConsts.CompletedStatusUId);
			SetDefaultSendDate(entity);
		}

		/// <summary>
		/// Save Activity and update activityEntity participants.
		/// </summary>
		/// <param name="activityEntity">Activity object.</param>
		protected virtual void CompleteSending(Entity activityEntity) {
			SetActivityColumnValues(activityEntity);
			activityEntity.Save();
			Update update = new Update(UserConnection, "ActivityParticipant")
				.Set("ReadMark", Column.Parameter(true))
				.Where("ActivityId").IsEqual(Column.Parameter(activityEntity.PrimaryColumnValue))
				.And("ParticipantId").IsEqual(Column.Parameter(UserConnection.CurrentUser.ContactId)) as Update;
			update.Execute();
		}

		/// <summary>
		/// Returns list of <see cref="EmailAttachment"/> items.
		/// </summary>
		/// <param name="activityId">Activity record identifier.</param>
		/// <returns>List of attachments.</returns>
		protected List<EmailAttachment> GetAttachments(Guid activityId) {
			var emailService = ClassFactory.Get<IEmailService>(new ConstructorArgument("uc", UserConnection));
			var emailData = emailService.GetEmail(activityId);
			return GetConvertedEmailAttachments(emailData.Attachments);
		}

		protected virtual void UpdateActivityStatus(Guid activityId, string emailSendStatus, string errorOnSendMessage) {
			Guid emailSendStatusId;
			Guid activityStatusId = Guid.Empty;
			bool isEmailSended = false;
			switch (emailSendStatus) {
				case SentEmailStatus:
					isEmailSended = true;
					emailSendStatusId = FindEmailSendStatus("Sended");
					activityStatusId = GetActivityStatusByCode("Finished");
					break;
				case NotSendEmailStatus:
				case InProgressEmailStatus:
				case ErrorOnSendEmailStatus:
					emailSendStatusId = FindEmailSendStatus(emailSendStatus);
					break;
				default:
					emailSendStatusId = FindEmailSendStatus(ErrorOnSendEmailStatus);
					errorOnSendMessage = emailSendStatus + ": " + errorOnSendMessage;
					break;
			}
			var update = new Update(UserConnection, "Activity")
				.Set("EmailSendStatusId", Column.Parameter(emailSendStatusId))
				.Set("ErrorOnSend", Column.Parameter(errorOnSendMessage))
				.Where("Id").IsEqual(Column.Parameter(activityId)) as Update;
			if (isEmailSended) {
				update.Set("StatusId", Column.Parameter(activityStatusId));
			}
			update.Execute();
		}

		/// <summary>
		/// Sets email message record rights for <paramref name="activity"/> record.
		/// Related mailbox rights will be used as rights template.
		/// </summary>
		/// <param name="activity">Activity instance.</param>
		/// <seealso cref="EmailRightsManager.SetRecordRightsFromMailbox(Entity,Guid)"/>
		protected void SetMessageRights(Entity activity) {
			var from = GetSenderEmail(activity);
			if (from.IsNullOrEmpty()) {
				return;
			}
			var rightsManager = ClassFactory.Get<EmailRightsManager>(
				new ConstructorArgument("userConnection", UserConnection));
			Guid mailboxId = GetMailboxId(from);
			rightsManager.SetRecordRightsFromMailbox(activity, mailboxId);
		}

		/// <summary>
		/// Sets mailbox identifier in email draft.
		/// </summary>
		/// <param name="activity">Activity instance.</param>
		/// <param name="emailMessage"><see cref="EmailMessage"/> instance.</param>
		protected void SetMailboxInEMD(Entity activity, EmailMessage emailMessage) {
			var helper = ClassFactory.Get<EmailMessageHelper>(
				new ConstructorArgument("userConnection", UserConnection));
			var headers = emailMessage.HeaderProperties
				.Distinct(new EmailMessageHeaderComparer())
				.ToDictionary(pair => pair.Name, pair => pair.Value);
			var ticks = ActivityUtils.GetSendDateTicks(UserConnection, activity);
			headers["SendDateTicks"] = ticks.ToString();
			if (headers.ContainsKey("In-Reply-To") && !headers.ContainsKey("InReplyTo")) {
				headers["InReplyTo"] = headers["In-Reply-To"];
			}
			helper.CreateEmailMessage(activity, Guid.Empty, headers, true);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Sends e-mail message <see name="EmailMessage"/>, formed from Activity,
		/// and returns an instance of Activity.
		/// </summary>
		/// <remarks>
		/// Loads object Activity by unique identifier <paramref name="activityId"/>.
		/// In object Activity sets sending status message.
		/// </remarks>
		/// <param name="activityId">The unique object identifier Activity.</param>
		/// <returns>The object instance Activity.</returns>
		public Entity SendInternal(Guid activityId) => Send(activityId, null, null);

		/// <summary>
		/// Sends e-mail message <see name="EmailMessage"/>, formed related to Activity.
		/// </summary>
		/// <remarks>
		/// In object Activity sets sending status message.
		/// </remarks>
		/// <param name="activity">Activity entity.</param>
		/// <param name="emailMessage">Email message data.</param>
		/// <param name="ignoreRights">Flag that indicates whether to ignore rights.</param>
		public void Send(Entity activity, EmailMessage emailMessage, bool ignoreRights) =>
			Send(activity.PrimaryColumnValue, activity, emailMessage, ignoreRights);

		public Entity Send(Guid activityId) => SendInternal(activityId);

		#endregion
	}

	#endregion

	#region EmailMessageHeaderComparer

	class EmailMessageHeaderComparer : IEqualityComparer<EmailMessageHeader> {
		public bool Equals(EmailMessageHeader x, EmailMessageHeader y) {
			return x.Name == y.Name;
		}

		public int GetHashCode(EmailMessageHeader obj) {
			return obj.Name.GetHashCode();
		}
	}

	#endregion

}

