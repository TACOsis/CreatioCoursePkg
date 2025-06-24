namespace Creatio.Copilot
{
	using System;

	/// <summary>
	/// Storage for Copilot sessions and its messages.
	/// </summary>
	public interface ICopilotHistoryStorage
	{
		/// <summary>
		/// Saves Copilot session.
		/// </summary>
		/// <param name="copilotSession">Copilot session.</param>
		void SaveSession(CopilotSession copilotSession);

		/// <summary>
		/// Saves a Copilot request and returns its unique identifier.
		/// </summary>
		/// <param name="requestInfo">The model with data to save in db</param>
		/// <returns>The unique identifier of the saved request.</returns>
		Guid SaveCopilotRequest(CopilotRequestInfo requestInfo);
	}
}

