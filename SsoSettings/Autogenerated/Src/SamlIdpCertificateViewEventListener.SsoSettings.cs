namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Configuration.LiveEditing;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SamlIdpCertificateEventListener

	[EntityEventListener(SchemaName = "SamlIdpCertificateView")]
	public class SamlIdpCertificateViewEventListener : BaseEntityEventListener
	{
		#region Methods: Private

		private Entity CreateCertificateEntity(Entity virtualEntity) {
			var userConnection = virtualEntity.UserConnection;
			var idpCertificateEntity = userConnection.EntitySchemaManager.GetEntityByName("SamlIdpCertificate", userConnection);
			return idpCertificateEntity.FetchFromDB(virtualEntity.PrimaryColumnValue)
				? idpCertificateEntity
				: null;
		}

		private void NotifyEntityChanged(object sender, EntityAfterEventArgs e, LiveEditingEventType eventType) {
			var virtualEntity = (Entity)sender;
			var idpCertificateEntity = CreateCertificateEntity(virtualEntity);
			if (idpCertificateEntity == null) {
				return;
			}
			var args = new NotifyEntityEventAsyncOperationArgs(idpCertificateEntity, e, eventType);
			EntityEventsWebsocketNotifierAsync.Instance.NotifyCurrentUser(virtualEntity.UserConnection, args);
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
			userConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
			new Delete(userConnection)
				.From("SamlIdpCertificate").Where("Id").IsEqual(Column.Parameter(entity.PrimaryColumnValue))
				.Execute();
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
