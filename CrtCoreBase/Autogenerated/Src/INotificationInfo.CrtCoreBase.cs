namespace Terrasoft.Configuration
{
	using System;
	
	/// <summary>
	/// Interface for information of the notification.
	/// </summary>
	public interface INotificationInfo
	{
		/// <summary>
		/// Title of the notification.
		/// </summary>
		string Title { get; set; }
		
		/// <summary>
		/// Body of the notification.
		/// </summary>
		string Body { get; set; }
		
		/// <summary>
		/// Identification of the image.
		/// </summary>
		Guid ImageId { get; set; }
		
		/// <summary>
		/// Record identifier object of the notification.
		/// </summary>
		Guid EntityId { get; set; }
		
		/// <summary>
		/// Schema name of the notification.
		/// </summary>
		string EntitySchemaName { get; set; }
		
		/// <summary>
		/// Identifier notification.
		/// </summary>
		Guid MessageId { get; set; }

		/// <summary>
		/// Date and time of the notification.
		/// </summary>
		DateTime RemindTime { get; set; }

		/// <summary>
		/// Notification loader name.
		/// </summary>
		string LoaderName { get; set; }
		
		/// <summary>
		/// Identification of the destination.
		/// </summary>
		Guid SysAdminUnit { get; set; }
		
		/// <summary>
		/// Group name of the notification.
		/// </summary>
		string GroupName { get; set; }
	}
}

