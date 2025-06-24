namespace Creatio.Copilot
{
	using System;
	using Creatio.Copilot.Metadata;
	using Terrasoft.Core;
	
	#region Interface: ICopilotParametrizedActionResponseProvider

	/// <summary>
	/// Provides the response of the parameterized action execution.
	/// </summary>
	public interface ICopilotParametrizedActionResponseProvider
	{

		#region Methods: Public

		/// <summary>
		/// Returns the parameterized response.
		/// </summary>
		/// <param name="userConnection">An instance of the <see cref="UserConnection"/> type.</param>
		/// <param name="actionDescriptor">An instance of the <see cref="CopilotActionDescriptor"/> type.</param>
		/// <param name="parameterValueGetter">Function that returns the parameter value.</param>
		/// <returns>Response string.</returns>
		string GetParameterizedResponse(UserConnection userConnection, 
			CopilotActionDescriptor actionDescriptor, Func<ICopilotParameterMetaInfo, object> parameterValueGetter);

		#endregion

	}

	#endregion

}

