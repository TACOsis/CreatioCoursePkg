namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Core.Entities.Events;

	#region Class: SsoOpenIdProviderEventListener

	[EntityEventListener(SchemaName = "SsoOpenIdProvider")]
	public class SsoOpenIdProviderEventListener: BaseSsoVirtualSettingsEventListener
	{

		#region Constructors: Public

		public SsoOpenIdProviderEventListener() : base(settingsSchemaName: "SsoOpenIdSettings") {}

		#endregion

	}

	#endregion

}

