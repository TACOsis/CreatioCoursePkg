namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	using Terrasoft.Core.ServiceModelContract;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Common.ServiceRouting;

	#region Class: PlaybookStageResponse

	[DataContract]
	public class PlaybookStageResponse : Terrasoft.Nui.ServiceModel.DataContract.BaseResponse
	{

		#region Properties: Public

		/// <summary>
		/// Dcm lookup values.
		/// </summary>
		[DataMember(Name = "stageValues")]
		public List<LookupValue> StageValues { get; set; }

		#endregion

	}

	#endregion

	/// <summary>
	/// Represents a service for playbook stages.
	/// </summary>
	#region Class: PlaybookStageService

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	[DefaultServiceRoute]
	public class PlaybookStageService : BaseService, IReadOnlySessionState
	{


		#region Properties: Public 

		private PlaybookStageLoader _playbookStageLoader;
		/// <summary>
		/// Playbook stage loader instance of <see cref="PlaybookStageLoader"/> class.
		/// </summary>
		public PlaybookStageLoader PlaybookStageLoader {
			get {
				return _playbookStageLoader ?? (_playbookStageLoader = new PlaybookStageLoader(UserConnection));
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets the name of the DCM stages from lookup.
		/// </summary>
		/// <param name="dcmId">The DCM identifier.</param>
		/// <returns>The name of the DCM stage lookup.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest,
			ResponseFormat = WebMessageFormat.Json)]
		public PlaybookStageResponse GetDcmStages(Guid dcmId) {
			return new PlaybookStageResponse {
				StageValues = PlaybookStageLoader.GetDcmLookupValues(dcmId)
			};
		}

		#endregion

	}

	#endregion

}

