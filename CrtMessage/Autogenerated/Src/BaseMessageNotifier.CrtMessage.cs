using System.Collections.Generic;

namespace Terrasoft.Configuration
{

	#region Class: BaseMesssageNotifier

	public abstract class BaseMessageNotifier : IMessageNotifier
	{

		#region Fields: Private

		private readonly List<IMessageListener> _listeners;

		#endregion

		#region Properties: Public

		public MessageInfo MessageInfo {
			set;
			get;
		}

		#endregion

		#region Constructor: Protected

		protected BaseMessageNotifier() {
			_listeners = new List<IMessageListener>();
		}

		#endregion

		#region Methods: Public

		public void Subscribe(IMessageListener listener) {
			_listeners.Add(listener);
		}

		public void Unsubscribe(IMessageListener listener) {
			_listeners.Remove(listener);
		}

		public void Notify() {
			foreach (var listener in _listeners) {
				listener.Update(this);
			}
		}

		#endregion

	}

	#endregion

	#region Interface: IMessageNotifier

	public interface IMessageNotifier
	{
		MessageInfo MessageInfo {
			set;
			get;
		}

		void Subscribe(IMessageListener listener);

		void Unsubscribe(IMessageListener listener);

		void Notify();
	}

	#endregion

}
