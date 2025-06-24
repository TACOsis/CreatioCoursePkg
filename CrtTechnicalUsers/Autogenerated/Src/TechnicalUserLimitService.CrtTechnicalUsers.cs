 namespace Terrasoft.Configuration
{
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Users;
	using Terrasoft.Web.Common;

	#region Class: TechnicalUserLimitService

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class TechnicalUserLimitService: BaseService, IReadOnlySessionState
	{

		#region Class: TechnicalUserLimitState

		[DataContract]
		public class TechnicalUserLimitState
		{

			#region Properties: Public

			/// <summary>
			/// Current active limit.
			/// </summary>
			[DataMember(Name = "limit")]
			public int Limit;
			
			/// <summary>
			/// Count of active users.
			/// </summary>
			[DataMember(Name = "count")]
			public int Count;

			#endregion

		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns current technical user limit state.
		/// </summary>
		[OperationContract]
        [WebInvoke(UriTemplate = "GetLimitState", Method = "GET", ResponseFormat = WebMessageFormat.Json,
			BodyStyle = WebMessageBodyStyle.Bare)]
		public TechnicalUserLimitState GetLimitState() {
			UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageTechnicalUsers");
			var activeTechnicalUserValidator = ClassFactory.Get<IActiveTechnicalUserValidator>(
				new ConstructorArgument("userConnection", UserConnection));
			int? limit = activeTechnicalUserValidator.GetActiveTechnicalUsersLimit();
			if (limit == null) {
				return new TechnicalUserLimitState {
					Limit = 0,
					Count = 0
				};
			}
			int count = activeTechnicalUserValidator.GetCurrentTechnicalUsersCount();
			return new TechnicalUserLimitState() {
				Limit = limit.Value,
				Count = count
			};
		}

		#endregion Methods: Public
	}

	#endregion Class: TechnicalUserLimitService

}

