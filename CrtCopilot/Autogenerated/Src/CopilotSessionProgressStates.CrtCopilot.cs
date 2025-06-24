namespace Creatio.Copilot
{
	/// <summary>
	/// Represents the state of the Copilot session progress.
	/// </summary>
	public enum CopilotSessionProgressStates
	{
		WaitingForUserMessage,
		WaitingForAssistantMessage,
		ExecutingAction
	}
} 
