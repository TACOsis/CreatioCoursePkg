namespace Terrasoft.Configuration.SsoSettings
{
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: SsoOpenIdProviderQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "SsoOpenIdProviderQueryExecutor")]
	internal class SsoOpenIdProviderQueryExecutor : BaseSsoVirtualSettingsQueryExecutor
	{

		#region Constructors: Public

		public SsoOpenIdProviderQueryExecutor(UserConnection userConnection)
			: base(userConnection, "SsoOpenIdProvider", "SsoOpenIdSettings") {}

		#endregion

	}

	#endregion

}

