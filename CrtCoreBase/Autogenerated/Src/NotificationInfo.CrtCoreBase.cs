namespace Terrasoft.Configuration
{
	using System;
	
	/// <summary>
	/// Class for information of the notification.
	/// </summary>
	public class NotificationInfo: INotificationInfo
	{
		public string Title {
			get;
			set;
		}
		public string Body {
			get;
			set;
		}
		public Guid ImageId {
			get;
			set;
		}
		public Guid EntityId {
			get;
			set;
		}
		public string EntitySchemaName {
			get;
			set;
		}
		public Guid MessageId {
			get;
			set;
		}

		public DateTime RemindTime {
			get;
			set;
		}

		public string LoaderName {
			get;
			set;
		}
		public Guid SysAdminUnit {
			get;
			set;
		}

		public string GroupName {
			get;
			set;
		}
	}
}

