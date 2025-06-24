namespace Creatio.Copilot
{
	using System;

	/// <summary>
	/// Logger for Copilot requests.
	/// </summary>
	public interface ICopilotRequestLogger
	{

		/// <summary>
		/// Saves a Copilot request and returns its unique identifier.
		/// </summary>
		/// <param name="requestInfo">The model with data to save in db</param>
		/// <returns>The unique identifier of the saved request.</returns>
		Guid SaveCopilotRequest(CopilotRequestInfo requestInfo);
	}
}
 
