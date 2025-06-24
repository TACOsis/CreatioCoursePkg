namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Core;
	using Core.Entities;
	using Terrasoft.Common;
	using SystemSettings = Core.Configuration.SysSettings;

	#region Class: EmailTemplateStore

	/// <summary>
	/// Provides ability to get multilanguage email templates.
	/// </summary>
	public class EmailTemplateStore : ITemplateLoader
	{
		#region Constants: Protected

		/// <summary>
		/// Working schema name.
		/// </summary>
		protected const string SchemaName = "EmailTemplateLang";

		/// <summary>
		/// Default email message language system setting code.
		/// </summary>
		protected const string DefaultMessageLanguageCode = "DefaultMessageLanguage";

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Default language identifier.
		/// This value is provided by system setting with code defined as <see cref="DefaultMessageLanguageCode"/>.
		/// </summary>
		protected Guid DefaultLanguageId {
			get {
				return SystemSettings.GetValue(UserConnection, DefaultMessageLanguageCode, default(Guid));
			}
		}

		
		/// <summary>
		/// Cached email template entity.
		/// </summary>
		protected Entity Template {
			get;
			set;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
			private set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initialize new instance of <see cref="EmailTemplateStore" />.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public EmailTemplateStore(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Get template from db.
		/// </summary>
		/// <param name="conditions">Conditions.</param>
		/// <returns>Template entity.</returns>
		private Entity GetTemplateFromDb(Dictionary<string, object> conditions) {
			EntitySchema schema = UserConnection.EntitySchemaManager.FindInstanceByName(SchemaName);
			Entity template = schema.CreateEntity(UserConnection);
			return template.FetchFromDB(conditions) ? template : null;
		}

		/// <summary>
		/// Obtain template with special condition.
		/// </summary>
		/// <param name="emailTemplateId">Email template id.</param>
		/// <param name="languageId">Language id.</param>
		/// <returns>Email template entity.</returns>
		private Entity GetTemplateFromCache(Guid emailTemplateId, Guid languageId) {
			Dictionary<string, object> conditions = GetConditions(emailTemplateId, languageId);
			if (Template == null) {
				Template = GetTemplateFromDb(conditions);
			}
			return Template;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Gets query filter conditions.
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Conditions.</returns>
		protected virtual Dictionary<string, object> GetConditions(Guid emailTemplateId, Guid languageId) {
			return new Dictionary<string, object> {
				{ "EmailTemplate", emailTemplateId },
				{ "Language", languageId }
			};
		}
		
		/// <summary>
		/// Gets an email template translation by its identifier (<paramref name="emailTemplateId"/>)
		/// and language identifier (<paramref name="languageId"/>).
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Email template translation entity.</returns>
		protected virtual Entity Get(Guid emailTemplateId, Guid languageId) {
			if (emailTemplateId == default(Guid)) {
				var errorMessage = new LocalizableString(UserConnection.Workspace.ResourceStorage,
					"EmailTemplateStore", "LocalizableStrings.EmailTemplateNotFoundError.Value");
				throw new ArgumentException(string.Format(errorMessage, languageId));
			}
			if (languageId == default(Guid)) {
				var errorMessage = new LocalizableString(UserConnection.Workspace.ResourceStorage,
					"EmailTemplateStore", "LocalizableStrings.LanguageNotFoundError.Value");
				throw new ArgumentException(string.Format(errorMessage, emailTemplateId));
			}
			return GetTemplateFromCache(emailTemplateId, languageId);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets an email template translation by its identifier (<paramref name="emailTemplateId"/>)
		/// and default language.
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <returns>Email template translation entity.</returns>
		public Entity GetTemplate(Guid emailTemplateId) {
			return Get(emailTemplateId, DefaultLanguageId);
		}

		/// <summary>
		/// Gets an email template translation by its identifier (<paramref name="emailTemplateId"/>)
		/// and language identifier (<paramref name="languageId"/>).
		/// If there's no template in prefered translation returns template in default language.
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Email template translation entity.</returns>
		public Entity GetTemplate(Guid emailTemplateId, Guid languageId) {
			return Get(emailTemplateId, languageId) ?? GetTemplate(emailTemplateId);
		}

		#endregion

	}

	#endregion

}
