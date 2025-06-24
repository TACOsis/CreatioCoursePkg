namespace Creatio.Copilot
{
	using System.Collections.Generic;

	#region Class: IntentToolExecutor

	/// <summary>
	/// Executor of the Intents tools.
	/// </summary>
	public class IntentToolExecutor : IToolExecutor
	{
		private readonly CopilotIntentSchema _instance;

		public IntentToolExecutor(CopilotIntentSchema instance) {
			_instance = instance;
		}

		#region Methods: Public

		public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
				CopilotSession session) {
			session.SetCurrentIntent(_instance.UId);
			var toolMessage = $"Skill started: Name: {_instance.Name}, Caption: {_instance.Caption}, " +
					$"Description: {_instance.IntentDescription ?? _instance.Description}.";
			if (_instance.Type == CopilotIntentType.Agent) {
			    session.RootIntentId = _instance.UId;
				toolMessage = $"Agent started: Name: {_instance.Name}, Caption: {_instance.Caption}, " +
					$"Description: {_instance.IntentDescription ?? _instance.Description}.";
			}
			var messages = new List<CopilotMessage> {
				CopilotMessage.FromTool(
					toolMessage,
					toolCallId),
				CopilotMessage.FromSystem(_instance.FullPrompt)
			};
			var lastUserMessage = session.RemoveLastUserMessage();
			if (lastUserMessage != null) {
				messages.Add(lastUserMessage);
			}
			return messages;
		}

		#endregion

	}

	#endregion

}

