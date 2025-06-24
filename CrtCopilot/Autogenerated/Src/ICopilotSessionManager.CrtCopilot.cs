namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;

	/// <summary>
	/// Interface for managing Copilot sessions.
	/// </summary>
	public interface ICopilotSessionManager
	{
		/// <summary>
		/// Adds a new copilot session.
		/// </summary>
		CopilotSession Add(CopilotSession copilotSession);

		/// <summary>
		/// Updates copilot session.
		/// </summary>
		/// <param name="copilotSession">Copilot session to update.</param>
		/// <param name="requestId">Optional Completion API request identifier.</param>
		void Update(CopilotSession copilotSession, Guid? requestId);

		/// <summary>
		/// Finds copilot session by identifier.
		/// </summary>
		CopilotSession FindById(Guid copilotSessionId);

		/// <summary>
		/// Gets copilot session by identifier.
		/// </summary>
		CopilotSession GetById(Guid copilotSessionId);

		/// <summary>
		/// Gets active copilot sessions for the user.
		/// </summary>
		IEnumerable<CopilotSession> GetActiveSessions(Guid userId);

		/// <summary>
		/// Closes copilot session.
		/// </summary>
		void CloseSession(CopilotSession copilotSession, Guid? requestId);
	}

} 
