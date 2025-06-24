namespace Terrasoft.Configuration.SsoSettings
{
	using System;
	using System.IO;
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using Terrasoft.ComponentSpace.Interfaces;

	#region Class: SsoActionsService

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class SsoActionsService : BaseService {

		#region Methods: Private

		/// <summary>
		/// Returns current application url.
		/// </summary>
		/// <returns>Current application url.</returns>
		private string GetAppUrl() {
			var request = HttpContextAccessor.GetInstance().Request;
			var number = UserConnection.Workspace.Number.ToString();
			return request.BaseUrl.TrimEnd(number.ToCharArray());
		}

		/// <summary>
		/// Sets required headers to response instance.
		/// </summary>
		private void SetResponseHeaders() {
			string contentDisposition = "attachment; filename*=UTF-8''creatio_metadata.xml";
			var context = HttpContextAccessor.GetInstance();
			context.Response.ContentType = "application/xml; charset=UTF-8";
			context.Response.AddHeader("Content-Disposition", contentDisposition);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns SAML metadata XML file for current Creatio instance.
		/// </summary>
		/// <returns>Xml file stream.</returns>
		[OperationContract]
		[WebGet(UriTemplate = "GetSamlMetadata")]
		public Stream GetSamlMetadata() {
			var applicationUrl = GetAppUrl();
			var samlMetadata = ClassFactory.Get<ISamlMetadata>();
			SetResponseHeaders();
			return samlMetadata.GetSpMetadata(applicationUrl);
		}

		#endregion

	}

	#endregion

}
