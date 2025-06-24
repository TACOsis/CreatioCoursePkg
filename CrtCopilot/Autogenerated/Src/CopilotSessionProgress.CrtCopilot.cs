namespace Creatio.Copilot
{
	using System;
	using System.Runtime.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Core;

	[DataContract]
	public class CopilotSessionProgress
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets the Copilot session identifier.
		/// </summary>
		[DataMember(Name = "copilotSessionId")]
		public Guid SessionId { get; set; }
		
		/// <summary>
		/// Current intent's caption.
		/// </summary>
		[DataMember(Name = "currentIntentCaption")]
		public string CurrentIntentCaption { get; set; }

		/// <summary>
		/// Gets or sets the state of the progress.
		/// </summary>
		[DataMember(Name = "state")]
		public string State { get; set; } = CopilotSessionProgressStates.WaitingForUserMessage.ToString();

		/// <summary>
		/// Gets or sets the description of the current progress.
		/// </summary>
		[DataMember(Name = "description")]
		public string Description { get; set; }

		#endregion

		#region Methods: Private

		private static string GetIntentCaption(UserConnection userConnection, Guid? intentId) {
			if (!intentId.HasValue) {
				return null;
			}
			CopilotIntentSchemaManager intentSchemaManager = userConnection.GetIntentSchemaManager();
			IManagerItem intent = intentSchemaManager.FindItemByUId(intentId.Value);
			return intent?.Caption;
		}

		private static LocalizableString GetDescriptionTemplate(UserConnection userConnection,
			CopilotSessionProgressStates state) {
			return new LocalizableString(userConnection.ResourceStorage,
				nameof(CopilotSessionProgress), $"LocalizableStrings.{state.ToString()}.Value");
		}

		#endregion

		#region Methods: Public 

		public static CopilotSessionProgress Create(UserConnection userConnection, 
				CopilotSession copilotSession, CopilotSessionProgressStates state, params object[] descriptionArgs) {
			string intentCaption = GetIntentCaption(userConnection, copilotSession.CurrentIntentId);
			LocalizableString descriptionTemplate = GetDescriptionTemplate(userConnection, state);
			return new CopilotSessionProgress {
				SessionId = copilotSession.Id,
				CurrentIntentCaption = intentCaption,
				State = state.ToString(),
				Description = string.Format(descriptionTemplate, descriptionArgs)
			};
		}

		#endregion

	}
}

