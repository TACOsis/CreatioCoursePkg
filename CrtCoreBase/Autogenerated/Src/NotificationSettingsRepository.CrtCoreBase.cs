namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Store;

	#region Class: NotificationSettingsRepository
	
	/// <summary>
	/// Notifications settings repository.
	/// </summary>
	public class NotificationSettingsRepository: INotificationSettingsRepository
	{
		#region Constants: Private

		private const string SysImageEntitySchemaTpl = "SysImageSchema{0}-{1}";

		#endregion

		#region Fields: Private

		private readonly ICacheStore _store;
		private readonly UserConnection _userConnection;
		private static readonly object Locker = new object();

		#endregion

		#region Constructors: Public

		public NotificationSettingsRepository(UserConnection userConnection) {
			_userConnection = userConnection;
			_store = _userConnection.WorkspaceCache;
		}

		#endregion

		#region Methods: Private

		private Guid GetSysImageCache(string key) {
			return (Guid)(_store.GetValue<object>(key) ?? Guid.Empty);
		}

		private string GetSysImageCacheKey(Guid schemaUId, Guid? notificationTypeId) {
			return string.Format(SysImageEntitySchemaTpl, schemaUId, notificationTypeId);
		}

		private Guid LoadSysImageBySchemaUId(Guid schemaUId, Guid? notificationTypeId) {
			Select select = GetSysImageBySchemaNameSelect(schemaUId, notificationTypeId);
			Guid result = select.ExecuteScalar<Guid>();
			return result;
		}
		
		private Select GetSysImageBySchemaNameSelect(Guid schemaUId, Guid? notificationTypeId) {
			var select = new Select(_userConnection);
			select
				.Top(1)
				.Column("NotificationsSettings", "SysImageId").As("Id")
				.From("NotificationsSettings")
				.InnerJoin("VwSysSchemaInWorkspace")
					.On("VwSysSchemaInWorkspace", "UId").IsEqual("NotificationsSettings", "SysEntitySchemaUId")
				.Where("VwSysSchemaInWorkspace", "UId")
					.IsEqual(Column.Parameter(schemaUId))
				.And("VwSysSchemaInWorkspace", "SysWorkspaceId")
					.IsEqual(Column.Parameter(_userConnection.Workspace.PrimaryColumnValue));
			if (notificationTypeId.IsNullOrEmpty()) {
				select.And("NotificationsSettings", "NotificationTypeId").IsNull();
			} else {
				select.And("NotificationsSettings", "NotificationTypeId")
					.IsEqual(Column.Parameter(notificationTypeId));
			}
			return select;
		}
		
		private void SaveToCacheStore(string key, object value) {
			_store[key] = value;
		}

		#endregion

		#region Methods: Public
		
		///<inheritdoc/>
		public Guid GetNotificationImage(Guid entitySchemaUId, Guid? notificationTypeId) {
			lock (Locker) {
				string key = GetSysImageCacheKey(entitySchemaUId, notificationTypeId);
				Guid imageId = GetSysImageCache(key);
				if (imageId.Equals(Guid.Empty)) {
					imageId = LoadSysImageBySchemaUId(entitySchemaUId, notificationTypeId);
					SaveToCacheStore(key, imageId);
				}
				return imageId;
			}
		}

		#endregion
	}

	#endregion
}
