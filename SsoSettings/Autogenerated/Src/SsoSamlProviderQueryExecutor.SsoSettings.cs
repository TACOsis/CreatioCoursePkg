namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: SsoOpenIdProviderQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "SsoSamlProviderQueryExecutor")]
	internal class SsoSamlProviderQueryExecutor : BaseSsoVirtualSettingsQueryExecutor
	{

		#region Constructors: Public

		public SsoSamlProviderQueryExecutor(UserConnection userConnection)
			: base(userConnection, "SsoSamlProvider", "SsoSamlSettings") {}

		#endregion

	}

	#endregion

}

