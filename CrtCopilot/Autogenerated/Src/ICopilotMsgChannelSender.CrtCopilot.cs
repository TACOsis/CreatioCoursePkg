namespace Creatio.Copilot
{
	using System;

	/// <summary>
	/// Interface for sending messages created during conversation with Copilot.
	/// </summary>
	public interface ICopilotMsgChannelSender
	{
		/// <summary>
		/// Sends the part of the conversation to client.
		/// </summary>
		/// <param name="copilotChatPart">The part of a conversation.</param>
		void SendMessages(CopilotChatPart copilotChatPart);

		/// <summary>
		/// Sends session progress.
		/// </summary>
		/// <param name="progress">Progress info.</param>
		/// <param name="userId">User identifier.</param>
		void SendSessionProgress(CopilotSessionProgress progress, Guid userId);
	}

}

