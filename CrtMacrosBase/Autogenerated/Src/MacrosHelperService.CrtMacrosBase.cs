namespace Terrasoft.Configuration
{
	using System;
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;
	using System.Runtime.Serialization;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Configuration.Utils;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Common.ServiceRouting;
	using System.Web.SessionState;

	#region Class: MacrosHelperService

	[ServiceContract]
	[DefaultServiceRoute]
	[SspServiceRoute]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class MacrosHelperService : BaseService, IReadOnlySessionState
	{

		#region Fields: Private

		/// <summary>
		/// Instance of <see cref="MacrosHelperV2"/> type.
		/// </summary>
		private readonly MacrosHelperV2 _macrosHelper;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates instance of <see cref="MacrosHelperService"/> type.
		/// </summary>
		public MacrosHelperService() {
			_macrosHelper = new GlobalMacrosHelper();
		}

		/// <summary>
		/// Creates instance of <see cref="MacrosHelperService"/> type.
		/// </summary>
		/// <param name="macrosHelper">Macros helper.</param>
		/// <param name="userConnection">User connection.</param>
		public MacrosHelperService(MacrosHelperV2 macrosHelper, UserConnection userConnection) {
			_macrosHelper = macrosHelper;
			UserConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		/// <summary>
		/// Initializes new instance of <see cref="MLangContentFactory"/>
		/// </summary>
		private MLangContentFactory _mlangContentFactory;
		public MLangContentFactory MLangContentFactory {
			get => _mlangContentFactory ?? (_mlangContentFactory = new MLangContentFactory(UserConnection));
			set => _mlangContentFactory = value;
		}


		#endregion

		#region Methods: Protected

		[Obsolete("Method is deprecated, use instead MacrosHelperV2.GetMacrosArguments.")]
		protected virtual Dictionary<Guid, Object> GetMacrosArguments(string entityName, Guid recordId,
				List<MacrosInfo> macrosInfos) {
			return _macrosHelper.GetMacrosArguments(entityName, recordId, macrosInfos);
		}

		[Obsolete("Method is deprecated, use instead MacrosHelperV2.IsCurrentUserMacrosExists.")]
		protected virtual bool IsCurrentUserMacrosExists(List<MacrosInfo> macrosInfos) {
			return _macrosHelper.IsCurrentUserMacrosExists(macrosInfos);
		}

		/// <summary>
		/// Gets processed template.
		/// </summary>
		/// <param name="templateBody">Template body.</param>
		/// <param name="templateSubject">Template subject.</param>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <param name="entityId">Entity record identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Processed template text.<see cref="MacrosHelperServiceResponse"/></returns>
		protected MacrosHelperServiceResponse GetResponseWithReplacedMacroces(string templateBody,
			string templateSubject, string entitySchemaName, Guid entityId, Guid languageId = default(Guid)) {
			MacrosHelperServiceResponse response = new MacrosHelperServiceResponse();
			MacrosExtendedProperties extendedProperties = null;
			try {
				if (_macrosHelper is GlobalMacrosHelper globalMacrosHelper) {
					if (languageId.IsNotEmpty()) {
						extendedProperties = new MacrosExtendedProperties { LanguageId = languageId };
					}
					response.TextTemplate = globalMacrosHelper.GetTextTemplate(templateBody, entitySchemaName,
						entityId, extendedProperties);
					response.SubjectTemplate = globalMacrosHelper.GetPlainTextTemplate(templateSubject, entitySchemaName,
						entityId, extendedProperties);
					response.Success = true;

				} else {
					response.TextTemplate = _macrosHelper.GetTextTemplate(templateBody, entitySchemaName, entityId);
					response.SubjectTemplate = _macrosHelper.GetTextTemplate(templateSubject, entitySchemaName, entityId);
					response.Success = true;
				}
			} catch (Exception e) {
				response.Exception = e;
				response.Success = false;
			}
			return response;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns template text where macroses replaced by their values.
		/// </summary>
		/// <param name="request">Service request.</param>
		/// <returns>Response contains result text of template.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "GetTemplate", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public MacrosHelperServiceResponse GetTemplate(MacrosHelperServiceRequest request) {
			var textTemplate = request.TextTemplate.IsNullOrEmpty() ? string.Empty : request.TextTemplate;
			return GetResponseWithReplacedMacroces(textTemplate, string.Empty, request.EntityName, request.EntityId);
		}

		/// <summary>
		/// Returns multilingual template text where macroses replaced by their values.
		/// </summary>
		/// <param name="request">Service request.</param>
		/// <returns>Response contains multilingual result text of template.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "GetMultiLanguageTextTemplate", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public MacrosHelperServiceResponse GetMultiLanguageTextTemplate(MacrosHelperServiceRequest request) {
			IContentKit contentKit = MLangContentFactory.GetContentKit(request.EntityName, "EmailTemplate");
			Entity emailTemplate = contentKit.GetContent(request.TemplateId, request.EntityId);
			string templateBody = emailTemplate.GetTypedColumnValue<string>("Body");
			string templateSubject = emailTemplate.GetTypedColumnValue<string>("Subject");
			if (UserConnection.GetIsFeatureEnabled("UseMacrosAdditionalParameters")) {
				return GetResponseWithReplacedMacroces(templateBody, templateSubject, request.EntityName,
					request.EntityId, emailTemplate.GetTypedColumnValue<Guid>("LanguageId"));
			}
			return GetResponseWithReplacedMacroces(templateBody, templateSubject, request.EntityName, request.EntityId);
		}

		#endregion

	}

	#endregion

	#region Class: MacrosHelperServiceRequest

	[DataContract]
	public class MacrosHelperServiceRequest
	{
		/// <summary>
		/// Entity identifier.
		/// </summary>
		[DataMember(Name = "entityId")]
		public Guid EntityId {
			get;
			set;
		}

		/// <summary>
		/// Entity name
		/// </summary>
		[DataMember(Name = "entityName")]
		public string EntityName {
			get;
			set;
		}

		/// <summary>
		/// Text of template.
		/// </summary>
		[DataMember(Name = "textTemplate")]
		public string TextTemplate {
			get;
			set;
		}

		/// <summary>
		/// Template identifier.
		/// </summary>
		[DataMember(Name = "templateId")]
		public Guid TemplateId {
			get;
			set;
		}
	}

	#endregion

	#region Class: MacrosHelperServiceResponse

	[DataContract]
	public class MacrosHelperServiceResponse : ConfigurationServiceResponse
	{
		/// <summary>
		/// Text of template.
		/// </summary>
		[DataMember(Name = "textTemplate")]
		public string TextTemplate {
			get;
			set;
		}

		/// <summary>
		/// Subject of template.
		/// </summary>
		[DataMember(Name = "subjectTemplate")]
		public string SubjectTemplate {
			get;
			set;
		}
	}

	#endregion
}

