namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using SystemSettings = Core.Configuration.SysSettings;

	#region Class: EmailTplContentStore

	/// <summary>
	/// Represents email template content store.
	/// </summary>
	public class EmailTplContentStore : IContentStore
	{

		#region Class: ExtraInfo

		/// <summary>
		/// Represents container of language properties.
		/// </summary>
		protected class ExtraInfo
		{

			#region Properties: Public

			/// <summary>
			/// Language identifier.
			/// </summary>
			public Guid LanguageId { get; set; }

			/// <summary>
			/// Language code.
			/// </summary>
			public string LanguageCode { get; set; }

			/// <summary>
			/// Template macros value.
			/// </summary>
			public byte[] Macros { get; set; }

			#endregion

		}

		#endregion

		#region Consts: Private

		private const string LanguageCodeColumn = "Language.Code";
		private const string LanguageIdColumn = "Language.Id";
		private const string MacrosColumn = "EmailTemplate.Macros";


		#endregion

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
		}

		/// <summary>
		/// Dictionary, contains column name as key and column alias as value.
		/// </summary>
		public Dictionary<string, string> AlliasColumnMap {
			get;
		}

		/// <summary>
		/// Determines whether to take into account rights to select data.
		/// </summary>
		/// <remarks>Default value is true.</remarks>
		public bool UseAdminRights { get; set; } = true;

		#endregion

		#region Properties: Protected

		private ExtraInfo _sysExtra = null;
		/// <summary>
		/// System language extra info from SysCulture.
		/// </summary>
		protected ExtraInfo SysExtraInfo {
			get => _sysExtra ?? (_sysExtra = GetPrimaryLanguage());
			set => _sysExtra = value;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="EmailTplContentStore"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public EmailTplContentStore(UserConnection userConnection) {
			UserConnection = userConnection;
			AlliasColumnMap = new Dictionary<string, string>();
		}

		#endregion

		#region Methods: Private

		private ExtraInfo GetPrimaryLanguage() {
			var defaultCulture = SystemSettings.GetValue(UserConnection, "PrimaryCulture", Guid.Empty);
			var sysCultureEsq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "SysCulture");
			var languageColumnName = sysCultureEsq.AddColumn(LanguageIdColumn).Name;
			var languageCodeColumnName = sysCultureEsq.AddColumn(LanguageCodeColumn).Name;
			var sysCulture = sysCultureEsq.GetEntity(UserConnection, defaultCulture);
			if (sysCulture != null) {
				return new ExtraInfo {
					LanguageCode = sysCulture.GetTypedColumnValue<string>(languageCodeColumnName),
					LanguageId = sysCulture.GetTypedColumnValue<Guid>(languageColumnName)
				};
			}
			return new ExtraInfo();
		}

		private Entity CreateVirtualTemplateEntity(Entity dbEnity) {
			EntitySchema virtualSchema = UserConnection.EntitySchemaManager.GetInstanceByName("VirtualEmailTplContent");
			Entity resultEntity = virtualSchema.CreateEntity(UserConnection);
			resultEntity.SetDefColumnValues();
			ExtraInfo extraInfo = GetLanguageInfo(dbEnity);
			resultEntity.SetColumnValue("LanguageId", extraInfo.LanguageId);
			resultEntity.SetColumnValue("LanguageCode", extraInfo.LanguageCode);
			resultEntity.SetColumnValue("Subject", dbEnity.GetTypedColumnValue<string>("Subject"));
			resultEntity.SetColumnValue("Body", dbEnity.GetTypedColumnValue<string>("Body"));
			resultEntity.SetBytesValue("Macros", extraInfo.Macros);
			return resultEntity;
		}

		private void AddColumnMap(EntitySchemaQuery esq, IEnumerable<string> columns) {
			foreach (string column in columns) {
				AlliasColumnMap[column] = esq.AddColumn(column).Name;
			}
		}

		private EntitySchemaQuery GetEsqForSchema(string schema, IEnumerable<string> columns) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, schema);
			AddColumnMap(esq, columns);
			return esq;
		}

		private ExtraInfo GetLanguageInfo(Entity templateEntity) {
			bool isMLangEmailTemplate = templateEntity.Schema.Columns.Any(column => column.Name == "Language");
			if (isMLangEmailTemplate) {
				return new ExtraInfo() {
					LanguageCode = templateEntity.GetTypedColumnValue<string>(AlliasColumnMap[LanguageCodeColumn]),
					LanguageId = templateEntity.GetTypedColumnValue<Guid>(AlliasColumnMap[LanguageIdColumn]),
					Macros = templateEntity.GetBytesValue(AlliasColumnMap[MacrosColumn])
				};
			}
			var sysLanguageInfo = SysExtraInfo;
			sysLanguageInfo.Macros = templateEntity.GetBytesValue("Macros");
			return sysLanguageInfo;
		}

		#endregion

		#region Methods: Protected

		[Obsolete("Will be removed after 7.14")]
		protected virtual Dictionary<string, object> GetConditions(Guid emailTemplateId, Guid languageId) {
			return new Dictionary<string, object> {
				{ "EmailTemplate", emailTemplateId },
				{ "Language", languageId }
			};
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets default content by template identifier.
		/// </summary>
		/// <param name="templateId">Email template identifier.</param>
		/// <returns>Email template entity.</returns>
		public Entity GetDefault(Guid templateId) {
			EntitySchema schema = UserConnection.EntitySchemaManager.FindInstanceByName("EmailTemplate");
			Entity template = schema.CreateEntity(UserConnection);
			template.UseAdminRights = UseAdminRights;
			return template.FetchFromDB(templateId) ? CreateVirtualTemplateEntity(template) : null;
		}

		/// <summary>
		/// Gets an email content entity by its identifier (<paramref name="recordId"/>)
		/// and language identifier (<paramref name="languageId"/>).
		/// </summary>
		/// <param name="recordId">Email template identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Email template entity.</returns>
		public Entity Get(Guid recordId, Guid languageId) {
			var esq = GetEsqForSchema("EmailTemplateLang",
				new[] { LanguageCodeColumn, LanguageIdColumn, MacrosColumn });
			esq.AddAllSchemaColumns();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "EmailTemplate", recordId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Language", languageId));
			esq.UseAdminRights = UseAdminRights;
			var emailTemplate = esq.GetEntityCollection(UserConnection).SingleOrDefault();
			if (emailTemplate != null) {
				return CreateVirtualTemplateEntity(emailTemplate);
			}
			return languageId == SysExtraInfo.LanguageId ? GetDefault(recordId) : null;
		}

		#endregion

	}

	#endregion

}
