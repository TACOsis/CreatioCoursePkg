namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;

	[DataContract]
	[Serializable]
	public class CopilotSession: BaseCopilotSession
	{

		#region Constructors: Public

		static CopilotSession() {
			DerivedTypes.Add(typeof(CopilotSession));
		}

		public CopilotSession() {
		}
		
		public CopilotSession(Guid userId, Guid? intentId) : base(userId, intentId) {
		}

		public CopilotSession(Guid userId, List<CopilotMessage> messages, Guid? intentId) : this(userId, intentId) {
			messages.CheckArgumentNull(nameof(messages));
			AddMessages(messages);
		}

		#endregion

		#region Properties: Public

		[DataMember(Name = "currentContext")]
		public CopilotContext CurrentContext { get; internal set; }

		private List<CopilotMessage> _messages = new List<CopilotMessage>();
		[DataMember(Name = "messages")]
		public IEnumerable<CopilotMessage> Messages => _messages;

		/// <summary>
		/// Indicates that the session is transient and does not support continuation of execution.
		/// </summary>
		[DataMember(Name = "isTransient")]
		public bool IsTransient { get; set; }

        #endregion

        #region Methods: Internal

        internal void UpdateContext(CopilotContext copilotContext, ICopilotContextBuilder contextBuilder) {
            if (CurrentContext?.Equals(copilotContext) == true) {
                return;
            }
            CurrentContext = copilotContext;
            CopilotMessage contextMessage = Messages.FirstOrDefault(message => message.IsContext);
            Guid contextMessageId = contextMessage?.Id ?? Guid.NewGuid();
            if (contextMessage != null) {
                _messages.Remove(contextMessage);
            }
            if (copilotContext == null || copilotContext.Parts.Count == 0) {
                return;
            }
            string contextContent = contextBuilder.BuildMessageContent(copilotContext);
            if (contextContent.IsNullOrEmpty()) {
                return;
            }
            contextMessage = CopilotMessage.FromSystem(contextContent);
            contextMessage.Id = contextMessageId;
            contextMessage.IsContext = true;
            AddMessage(contextMessage);
        }

        #endregion

        #region Methods: Public

        public CopilotSession AddMessage(CopilotMessage copilotMessage) {
			copilotMessage.IntentId = CurrentIntentId;
			_messages.Add(copilotMessage);
			return this;
		}

		public CopilotSession AddMessages(IEnumerable<CopilotMessage> copilotMessages) {
			copilotMessages.ForEach(message => message.IntentId = CurrentIntentId);
			_messages.AddRange(copilotMessages);
			return this;
		}

		public CopilotMessage RemoveLastUserMessage() {
			var lastUserMessage = _messages.FindLast(message => message.Role == CopilotMessageRole.User);
			if (lastUserMessage != null) {
				_messages.Remove(lastUserMessage);
			}
			return lastUserMessage;
		}

		public List<CopilotMessage> CreateToolCallMessages(string toolCallId, string resultContent) {
			var resultMessages = new List<CopilotMessage>();
			Guid? toolRequestMessageId = null;
			Guid? toolResponseMessageId = null;
			lock (Messages) {
				CopilotMessage oldCallRequestMessage = Messages.FirstOrDefault(msg =>
					msg.ToolCalls.Any(call => call.Id == toolCallId) && msg.Role == CopilotMessageRole.Assistant);
				if (oldCallRequestMessage == null) {
					return resultMessages;
				}
				ToolCall toolCall = oldCallRequestMessage.ToolCalls.FirstOrDefault(call => call.Id == toolCallId);
				oldCallRequestMessage.ToolCalls.Remove(toolCall);
				if (oldCallRequestMessage.ToolCalls.Count == 0) {
					toolRequestMessageId = oldCallRequestMessage.Id;
					_messages.Remove(oldCallRequestMessage);
				}
				CopilotMessage oldCallResponseMessage = Messages.FirstOrDefault(msg =>
					msg.ToolCallId == toolCallId && msg.Role == CopilotMessageRole.Tool);
				if (oldCallResponseMessage != null) {
					toolResponseMessageId = oldCallResponseMessage.Id;
					_messages.Remove(oldCallResponseMessage);
				}
				CopilotMessage newCallRequestMessage = CopilotMessage.FromAssistant(toolCall);
				newCallRequestMessage.Id = toolRequestMessageId ?? newCallRequestMessage.Id; 
				CopilotMessage newCallResponseMessage = CopilotMessage.FromTool(resultContent, toolCallId);
				newCallResponseMessage.Id = toolResponseMessageId ?? newCallResponseMessage.Id;
				resultMessages.AddRange(new [] {
					newCallRequestMessage,
					newCallResponseMessage
				});
				return resultMessages;
			}
		}

		/// <summary>
		/// Set current intent for the Copilot session.
		/// </summary>
		/// <param name="intentId">New intent identifier.</param>
		public void SetCurrentIntent(Guid intentId) {
			if (CurrentIntentId == null) {
				RootIntentId = intentId;
			}
			CurrentIntentId = intentId;
			CopilotMessage lastUserMessage = _messages.FindLast(message => message.Role == CopilotMessageRole.User);
			if (lastUserMessage != null) {
				lastUserMessage.IntentId = intentId;
				lastUserMessage.IsSaved = false;
			}
		}

		#endregion

	}

}

