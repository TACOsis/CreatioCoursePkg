namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Configuration.LiveEditing;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SamlIdpCertificateEventListener

	[EntityEventListener(SchemaName = "SamlIdpCertificate")]
	public class SamlIdpCertificateEventListener : BaseEntityEventListener
	{
		#region Methods: Private

		private Entity CreateCertificateVirtualEntity(Entity idpCertificateEntity) {
			var userConnection = idpCertificateEntity.UserConnection;
			var virtualEntity = userConnection.EntitySchemaManager.GetEntityByName("SamlIdpCertificateView", userConnection);
			virtualEntity.PrimaryColumnValue = idpCertificateEntity.PrimaryColumnValue;
			virtualEntity.SetDefColumnValues();
			return virtualEntity;
		}

		private void NotifyEntityChanged(object sender, EntityAfterEventArgs e, LiveEditingEventType eventType) {
			var idpCertificateEntity = (Entity)sender;
			var virtualEntity = CreateCertificateVirtualEntity(idpCertificateEntity);
			var args = new NotifyEntityEventAsyncOperationArgs(virtualEntity, e, eventType);
			EntityEventsWebsocketNotifierAsync.Instance.NotifyCurrentUser(virtualEntity.UserConnection, args);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override void OnSaved(object sender, EntityAfterEventArgs e) {
			base.OnSaved(sender, e);
			NotifyEntityChanged(sender, e, LiveEditingEventType.Inserted);
		}

		/// <inheritdoc />
		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			((Entity)sender).UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
		}

		/// <inheritdoc />
		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			base.OnDeleting(sender, e);
			((Entity)sender).UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
		}

		#endregion

	}

	#endregion
}
