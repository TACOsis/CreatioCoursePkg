namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.OAuthIntegration;

	public static class IdentityServiceWrapperHelper
	{
		public static IIdentityServiceWrapper GetInstance() {
			var identityServiceWrapper = GlobalAppSettings.FeatureUseSeparateSettingsForOAuth20
				? ClassFactory.Get<IIdentityServiceWrapper>("ExternalAccess")
				: ClassFactory.Get<IIdentityServiceWrapper>();
			return identityServiceWrapper;
		}
	}
} 
