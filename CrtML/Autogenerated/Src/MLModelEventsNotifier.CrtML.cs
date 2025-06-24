namespace Terrasoft.Configuration.ML
{
	using System;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Messaging.Common;
	using Terrasoft.ML.Interfaces;

	public interface IMLModelEventsNotifier
	{
		void NotifyModelStateChanged(Guid modelId, TrainSessionState sessionState, Guid? sessionId = null);
		
		void NotifyModelStateChanged(Guid sessionId, TrainSessionState sessionState, int progress);
	}

	#region Class: MLModelEventsNotifier

	/// <summary>
	/// Notifies users about ML model events.
	/// </summary>
	[DefaultBinding(typeof(IMLModelEventsNotifier))]
	public class MLModelEventsNotifier: IMLModelEventsNotifier
	{

		#region Constants: Private

		private const string NotificationSysAdminUnitSettingsName = "MlModelEventsNotificationGroup";

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLModelEventsNotifier"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLModelEventsNotifier(UserConnection userConnection) {
			userConnection.CheckArgumentNull("userConnection");
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private void SendUsersNotifications(Guid modelId, TrainSessionState sessionState, Guid? sessionId) {
			IMsgChannel channel = MsgChannelManager.Instance.FindItemByUId(_userConnection.CurrentUser.Id);
			if (channel == null) {
				return;
			}
			var stateInfo = new {
				modelId,
				state = sessionState.ToString(),
				sessionId
			};
			var simpleMessage = new SimpleMessage {
				Body = JsonConvert.SerializeObject(stateInfo),
				Id = channel.Id
			};
			simpleMessage.Header.BodyTypeName = "MLModelState";
			simpleMessage.Header.Sender = "ML";
			channel.PostMessage(simpleMessage);
		}
		
		private void SendUsersNotifications(Guid sessionId, TrainSessionState sessionState, int progress) {
			IMsgChannel channel = MsgChannelManager.Instance.FindItemByUId(_userConnection.CurrentUser.Id);
			if (channel == null) {
				return;
			}
			var stateInfo = new {
				sessionId,
				state = sessionState.ToString(),
				progress
			};
			var simpleMessage = new SimpleMessage {
				Body = JsonConvert.SerializeObject(stateInfo),
				Id = channel.Id
			};
			simpleMessage.Header.BodyTypeName = "MLModelStateWithProgress";
			simpleMessage.Header.Sender = "ML";
			channel.PostMessage(simpleMessage);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Notifies the model state changed.
		/// </summary>
		public virtual void NotifyModelStateChanged(Guid modelId, TrainSessionState sessionState,
				Guid? sessionId = null) {
			if (_userConnection.GetIsFeatureEnabled("MLStateMsgChannelDisabled")) {
				return;
			}
			SendUsersNotifications(modelId, sessionState, sessionId);
		}

		/// <summary>
		/// Notifies the model state changed with progress details.
		/// </summary>
		public virtual void NotifyModelStateChanged(Guid sessionId, TrainSessionState sessionState, int progress) {
			if (_userConnection.GetIsFeatureEnabled("MLStateMsgChannelDisabled")) {
				return;
			}
			SendUsersNotifications(sessionId, sessionState, progress);
		}

		#endregion

	}

	#endregion

}

