namespace Terrasoft.Configuration 
{
	using System;

	#region Interface: INotificationSettingsRepository
	
	/// <summary>
	/// Interface of notifications settings repository.
	/// </summary>
	public interface INotificationSettingsRepository
	{
		/// <summary>
		/// Get notification image identifier for specified schema.
		/// </summary>
		/// <param name="entitySchemaUId">Object schema UId.</param>
		/// <param name="notificationTypeId">Notification type Id.</param>
		Guid GetNotificationImage(Guid entitySchemaUId, Guid? notificationTypeId);
	}

	#endregion
}
