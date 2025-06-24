 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Security.Cryptography.X509Certificates;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	using System.Xml;
	using Terrasoft.Common;
	using Terrasoft.ComponentSpace.Interfaces;
	using Terrasoft.Configuration.FileUpload;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;

	#region Class: SamlIdpService

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class SamlIdpService : BaseService, IReadOnlySessionState
	{

		#region Constructors: Public

		public SamlIdpService() : base() {
			_fileUploadInfoFactory = GetFileUploadInfo;
		}

		#endregion

		#region Properties: Private

		private FileRepository _fileRepository;

		/// <summary>
		/// FileRepository instance.
		/// </summary>
		private FileRepository FileRepository {
			get {
				if (_fileRepository == null) {
					_fileRepository = ClassFactory.Get<FileRepository>(
						new ConstructorArgument("userConnection", UserConnection));
				}
				return _fileRepository;
			}
		}

		private readonly Func<Stream, IFileUploadInfo> _fileUploadInfoFactory;

		#endregion

		#region Methods: Private

		private IFileUploadInfo GetFileUploadInfo(Stream fileContent) {
			IFileUploadInfo fileUploadInfo = ClassFactory.Get<FileUploadInfo>(
				new ConstructorArgument("fileContent", fileContent),
#if NETSTANDARD2_0 // TODO CRM-46497
				new ConstructorArgument("request", HttpContext.Current.Request),
#else
				new ConstructorArgument("request", new System.Web.HttpRequestWrapper(System.Web.HttpContext.Current.Request)),
#endif
				new ConstructorArgument("storage", UserConnection.Workspace.ResourceStorage));
			return fileUploadInfo;
		}

		private X509Certificate2 ParceIdpCertificate(IFileUploadInfo fileUploadInfo) {
			return new X509Certificate2(fileUploadInfo.Content.ReadToEnd());
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Uploads SAML identity provider certificate to DB.
		/// </summary>
		/// <param name="content">Certificate data stream.</param>
		/// <returns>Certificate thumbprint if upload successfull, string.Empty otherwise.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json)]
		public string UploadIdpCertificate(Stream content) {
			IFileUploadInfo fileUploadInfo = _fileUploadInfoFactory(content);
			var certificate = ParceIdpCertificate(fileUploadInfo);
			var fileEntityInfo = new FileEntityUploadInfo("SamlIdpCertificate", fileUploadInfo.FileId, fileUploadInfo.FileName) {
				Content = new MemoryStream(certificate.RawData),
				TotalFileLength = certificate.RawData.Length,
				AdditionalParams = new Dictionary<string, object> {
					{"SsoSamlSettingsId", fileUploadInfo.ParentColumnValue},
				}
			};
			return FileRepository.UploadFile(fileEntityInfo)
				? certificate.Thumbprint
				: string.Empty;
		
		}

		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json)]
		public Terrasoft.Core.Sso.SsoIdentityProvider ParseIdpMetadata(Stream content) {
			IFileUploadInfo fileUploadInfo = _fileUploadInfoFactory(content);
			var doc = new XmlDocument();
			doc.Load(fileUploadInfo.Content);
			var samlMetadata = ClassFactory.Get<ISamlMetadata>();
			return samlMetadata.ParseIdpMetadata(doc);
		}

		#endregion

	}

	#endregion

}
