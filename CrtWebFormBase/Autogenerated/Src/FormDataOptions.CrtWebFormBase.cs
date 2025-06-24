namespace Terrasoft.Configuration.GeneratedWebFormService
{
	using System;
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using System.ServiceModel.Activation;

	#region Class: FormDataOptions

	/// <summary>
	/// Contains addidional options for SaveWebFormObjectData
	/// </summary>
	public class FormDataOptions
	{

		#region Properties: Public

		/// <summary>
		/// Flag indicates that needs include exception type in response when it throws during saving entity.
		/// </summary>
		public bool extendResponseWithExceptionType { get; set; }

		/// <summary>
		/// Flag indicates that needs to execute referer header validation.
		/// </summary>
		public bool disableRefererPolicy { get; set; }

		#endregion

	}

	#endregion

}
