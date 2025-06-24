namespace Creatio.Copilot
{
	using System.Collections.Generic;

	/// <summary>
	/// Interface for executing Copilot tools.
	/// </summary>
	public interface IToolExecutor
	{
		/// <summary>
		/// Executes tool called by Copilot.
		/// </summary>
		/// <param name="toolCallId">Tool identifier.</param>
		/// <param name="arguments">Tool's arguments.</param>
		/// <param name="session">Copilot session.</param>
		/// <returns></returns>
		List<CopilotMessage> Execute(string toolCallId, Dictionary<string,object> arguments, CopilotSession session);
	}
} 
