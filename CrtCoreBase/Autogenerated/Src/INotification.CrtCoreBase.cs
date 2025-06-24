namespace Terrasoft.Configuration
{
	using System.Collections.Generic;

	/// <summary>
	/// Interface for notification provider.
	/// </summary>
	public interface INotification
	{

		/// <summary>
		/// Returns notification.
		/// </summary>
		/// <returns>Notification.</returns>
		IEnumerable<INotificationInfo> GetNotifications();

		/// <summary>
		/// Group name.
		/// </summary>
		string Group { get; }

		/// <summary>
		/// Provider name.
		/// </summary>
		string Name { get; }
	}
  
}

