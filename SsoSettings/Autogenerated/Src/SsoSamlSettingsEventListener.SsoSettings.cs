namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: SsoSamlSettingsEventListener

	[EntityEventListener(SchemaName = "SsoSamlSettings")]
	public class SsoSamlSettingsEventListener : BaseEntityEventListener
	{
		#region Methods: Public

		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			base.OnSaving(sender, e);
			((Entity)sender).UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
		}

		public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
			base.OnDeleting(sender, e);
			((Entity)sender).UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSso");
		}

		#endregion

	}

	#endregion

}
