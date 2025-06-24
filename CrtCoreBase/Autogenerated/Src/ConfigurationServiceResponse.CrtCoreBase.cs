namespace Terrasoft.Configuration
{
	using System;
	using System.Runtime.Serialization;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using ErrorInfo = Terrasoft.Core.ServiceModelContract.ErrorInfo;

	[DataContract]
	public class ConfigurationServiceResponse : BaseResponse
	{

		#region Constructors: Public

		public ConfigurationServiceResponse() {
			Success = true;
		}

		public ConfigurationServiceResponse(Exception e) {
			Exception = e;
		}

		#endregion

		#region Properties: Public

		public Exception Exception {
			set {
				Success = false;
				ResponseStatus = SetResponseStatus(value);
				ErrorInfo = SetErrorInfo(value);
			}
		}

		#endregion
		
		#region Methods: public
		
		public virtual ResponseStatus SetResponseStatus(Exception e) {
			return new ResponseStatus {
				ErrorCode = e.GetType().Name,
				Message = e.Message,
				StackTrace = e.StackTrace
			};
		}
		
		public virtual ErrorInfo SetErrorInfo(Exception e) {
			return new ErrorInfo {
				ErrorCode = e.GetType().Name,
				Message = e.Message,
				StackTrace = e.StackTrace
			};
		}
		
		#endregion

	}

}
