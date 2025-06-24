namespace Terrasoft.Configuration.NextSteps
{
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using Terrasoft.Nui.ServiceModel.WebService;

	#region Interface: IProcessActionDashboardRequestHandler

	/// <summary>
	/// Interface provides API for DI binding of <see cref="ProcessActionDashboardRequestHandler"/> wrapper class.
	/// </summary>
	public interface IProcessActionDashboardRequestHandler {

		#region Methods: Public

		/// <inheritdoc cref="ProcessActionDashboardRequestHandler.Handle(ProcessActionDashboardRequest)"/>
		SelectQueryResponse Handle(ProcessActionDashboardRequest request);

		#endregion

	}

	#endregion

	#region Class: ProcessActionDashboardRequestHandlerWrap

	/// <summary>
	/// Implementation for <see cref="ProcessActionDashboardRequestHandlerWrap"/>
	/// </summary>
	[DefaultBinding(typeof(IProcessActionDashboardRequestHandler))]
	public class ProcessActionDashboardRequestHandlerWrap : IProcessActionDashboardRequestHandler
	{

		#region Fields: Private

		private readonly ProcessActionDashboardRequestHandler _handler;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// .ctor.
		/// </summary>
		/// <param name="uc"><see cref="UserConnection"/> instance.</param>
		public ProcessActionDashboardRequestHandlerWrap(UserConnection uc) {
			_handler = new ProcessActionDashboardRequestHandler(uc);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IProcessActionDashboardRequestHandler.Handle(ProcessActionDashboardRequest)"/>
		public SelectQueryResponse Handle(ProcessActionDashboardRequest request) {
			return _handler.Handle(request);
		}

		#endregion

	}

	#endregion

}
