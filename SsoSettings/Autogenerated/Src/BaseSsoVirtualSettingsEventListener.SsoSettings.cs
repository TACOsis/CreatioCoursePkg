namespace Terrasoft.Configuration.SsoSettings
{
	using System;
	using System.Collections.ObjectModel;
	using Terrasoft.Common;
	using Terrasoft.Configuration.LiveEditing;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: BaseSsoVirtualSettingsEventListener

	public class BaseSsoVirtualSettingsEventListener: BaseEntityEventListener
	{

		#region Fields: Private

		private readonly string _settingsSchemaName;

		#endregion

		#region Constructors: Protected

		protected BaseSsoVirtualSettingsEventListener(string settingsSchemaName) {
			_settingsSchemaName = settingsSchemaName;
		}

		#endregion

		#region Methods: Private

		private static Entity CreateProviderEntity(Entity virtualEntity) {
			UserConnection userConnection = virtualEntity.UserConnection;
			EntitySchema providerSchema = userConnection.EntitySchemaManager.GetInstanceByName("SsoProvider");
			Entity providerEntity = providerSchema.CreateEntity(userConnection);
			var providerId = virtualEntity.GetTypedColumnValue<Guid>("SsoProviderId");
			if (!providerEntity.FetchFromDB(providerId)) {
				providerEntity.SetDefColumnValues();
				providerEntity.PrimaryColumnValue = providerId;
			}
			return providerEntity;
		}

		private static void NotifyEntityChanged(object sender, EntityAfterEventArgs e, LiveEditingEventType eventType) {
			var virtualEntity = (Entity)sender;
			Entity providerEntity = CreateProviderEntity(virtualEntity);
			var args = new NotifyEntityEventAsyncOperationArgs(providerEntity, e, eventType);
			EntityEventsWebsocketNotifierAsync.Instance.NotifyCurrentUser(virtualEntity.UserConnection, args);
		}

		private static void SaveProviderEntity(Entity virtualEntity) {
			var providerId = virtualEntity.GetTypedColumnValue<Guid>("SsoProviderId");
			if (providerId.IsEmpty()) {
				providerId = virtualEntity.PrimaryColumnValue;
				virtualEntity.SetColumnValue("SsoProviderId", providerId);
			}
			Entity providerEntity = CreateProviderEntity(virtualEntity);
			providerEntity.SetColumnValue("Name", virtualEntity.GetColumnValue("Name"));
			providerEntity.SetColumnValue("Code", virtualEntity.GetColumnValue("Code"));
			if (virtualEntity.Schema.Columns.FindByName("UserType") != null) {
				providerEntity.SetColumnValue("UserTypeId", virtualEntity.GetColumnValue("UserTypeId"));
			}
			providerEntity.SetColumnValue("SsoSettingsTemplateId", virtualEntity.GetColumnValue("SsoSettingsTemplateId"));
			providerEntity.Save();
		}

		private void SaveSettingsEntity(Entity virtualEntity) {
			UserConnection userConnection = virtualEntity.UserConnection;
			var settingsSchema = userConnection.EntitySchemaManager.GetInstanceByName(_settingsSchemaName);
			Entity settingsEntity = settingsSchema.CreateEntity(userConnection);
			if (!settingsEntity.FetchFromDB(virtualEntity.PrimaryColumnValue)) {
				settingsEntity.SetDefColumnValues();
				settingsEntity.PrimaryColumnValue = virtualEntity.PrimaryColumnValue;
			}
			foreach (string columnValueName in virtualEntity.GetColumnValueNames()) {
				if (!virtualEntity.IsColumnValueLoaded(columnValueName) ||
					settingsEntity.FindEntityColumnValue(columnValueName) == null) {
					continue;
				}
				settingsEntity.SetColumnValue(columnValueName, virtualEntity.GetColumnValue(columnValueName));
			}
			settingsEntity.Save();
		}

		private void SetDefaultProviderSettingValue(Entity virtualEntity) {
			var isDefault = virtualEntity.GetTypedColumnValue<bool>("IsDefault");
			var settingValue = SysSettings.GetValue(virtualEntity.UserConnection, "DefaultSsoProvider", Guid.Empty);
			var providerId = virtualEntity.GetTypedColumnValue<Guid>("SsoProviderId");
			if (settingValue != providerId && isDefault) {
				SysSettings.SetDefValue(virtualEntity.UserConnection, "DefaultSsoProvider", providerId);
			} else if (settingValue == providerId && !isDefault) {
				SysSettings.SetDefValue(virtualEntity.UserConnection, "DefaultSsoProvider", null);
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			base.OnDeleting(sender, e);
			var entity = (Entity)sender;
			if (entity.StoringState == StoringObjectState.New ||
					entity.StoringState == StoringObjectState.Deleted) {
				return;
			}
			UserConnection userConnection = entity.UserConnection;
			var providerId = entity.GetTypedColumnValue<Guid>("SsoProviderId");
			new Delete(userConnection)
				.From(_settingsSchemaName).Where("Id").IsEqual(Column.Parameter(entity.PrimaryColumnValue))
				.Execute();
			new Delete(userConnection)
				.From("SsoProvider").Where("Id").IsEqual(Column.Parameter(providerId))
				.Execute();
		}

		/// <inheritdoc />
		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			var entity = (Entity)sender;
			entity.UserConnection.LicHelper.CheckHasOperationLicense("CanUseSSO");
			SaveProviderEntity(entity);
			SaveSettingsEntity(entity);
			SetDefaultProviderSettingValue(entity);
			if (entity.StoringState == StoringObjectState.New) {
				entity.Process.SetPropertyValue("ProcessSchemaListeners", new Collection<ProcessSchemaListener>());
			}
		}

		/// <summary>Handles entity Saved event.</summary>
		/// <param name="sender">Event sender.</param>
		/// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityAfterEventArgs" /> instance containing the event data.</param>
		public override void OnSaved(object sender, EntityAfterEventArgs e) {
			base.OnSaved(sender, e);
			NotifyEntityChanged(sender, e, LiveEditingEventType.Inserted);
		}

		/// <summary>Handles entity Deleted event.</summary>
		/// <param name="sender">Event sender.</param>
		/// <param name="e">The <see cref="T:Terrasoft.Core.Entities.EntityAfterEventArgs" /> instance containing the event data.</param>
		public override void OnDeleted(object sender, EntityAfterEventArgs e) {
			base.OnDeleted(sender, e);
			NotifyEntityChanged(sender, e, LiveEditingEventType.Deleted);
		}

		#endregion

	}

	#endregion

}

