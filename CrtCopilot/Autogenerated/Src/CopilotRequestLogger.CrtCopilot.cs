namespace Creatio.Copilot
{
	using System;
	using Terrasoft.Core.Factories;

	#region Class: CopilotRequestInfo

	public class CopilotRequestInfo 
	{

		#region Fields: Puplic

		public long Duration { get; set; }
		public DateTime StartDate { get; set; }
		public bool IsFailed { get; set; }
		public string Error { get; set; }
		public int TotalTokens { get; set; }
		public int PromptTokens { get; set; }
		public int? CompletionTokens { get; set; }

		#endregion

	}

	#endregion

	#region Class: CopilotRequestLogger

	[DefaultBinding(typeof(ICopilotRequestLogger))]
	internal class CopilotRequestLogger : ICopilotRequestLogger
	{

		#region Fields: Private

		private readonly ICopilotHistoryStorage _copilotHistoryStorage;

		#endregion

		#region Constructors: Public

		public CopilotRequestLogger(ICopilotHistoryStorage copilotHistoryStorage) {
			_copilotHistoryStorage = copilotHistoryStorage;
		}

		#endregion

		#region Methods: Public

		public Guid SaveCopilotRequest(CopilotRequestInfo requestInfo) {
			return _copilotHistoryStorage.SaveCopilotRequest(requestInfo);
		}

		#endregion

	}

		#endregion

}

