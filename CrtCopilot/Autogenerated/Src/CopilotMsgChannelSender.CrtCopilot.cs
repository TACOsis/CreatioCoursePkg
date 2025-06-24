namespace Creatio.Copilot
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core.Factories;
	using Terrasoft.Messaging.Common;

	[DefaultBinding(typeof(ICopilotMsgChannelSender))]
	internal class CopilotMsgChannelSender: ICopilotMsgChannelSender
	{

		#region Methods: Private

		private static void Send(object message, Guid userId) {
			message.CheckArgumentNull(nameof(message));
			if (!MsgChannelManager.IsRunning) {
				return;
			}
			var simpleMessage = new SimpleMessage {
				Body = message,
				Id = Guid.NewGuid(),
				Header = {
					BodyTypeName = message.GetType().Name,
					Sender = nameof(CopilotMsgChannelSender)
				}
			};
			MsgChannelManager.Instance.Post(new []{ userId }, simpleMessage);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Sends the part of the conversation to client.
		/// </summary>
		/// <param name="copilotChatPart">The part of a conversation.</param>
		public void SendMessages(CopilotChatPart copilotChatPart) {
			copilotChatPart.CheckArgumentNull(nameof(copilotChatPart));
			Send(copilotChatPart, copilotChatPart.CopilotSession.UserId);
		}

		/// <summary>
		/// Sends session progress.
		/// </summary>
		/// <param name="progress">Progress info.</param>
		/// <param name="userId">User identifier.</param>
		public void SendSessionProgress(CopilotSessionProgress progress, Guid userId) {
			progress.CheckArgumentNull(nameof(progress));
			Send(progress, userId);
		}

		#endregion

	}
}

