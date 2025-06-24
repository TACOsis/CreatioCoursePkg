namespace Terrasoft.Configuration
{
	using global::Common.Logging;
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.OAuthIntegration;
	using Terrasoft.OAuthIntegration.DTO;
	using Polly;

	#region Class: InstallWebhookServiceUserInIdentityInstallScriptExecutor

	internal class InstallWebhookServiceUserInIdentityInstallScriptExecutor : IInstallScriptExecutor
	{
		#region Fields: Private

		private readonly Guid _webhookServiceUserId = new Guid("9A9393F6-B99A-4738-9730-EA17D55DBC52");
		private readonly string _webhookIntegrationName = "Webhook Account Service Identity";
		private static readonly ILog _logger = LogManager.GetLogger("WebhookServiceUserInstallation");
		private readonly string _errorCode = "WebhookServiceUserInstallationError";
		private readonly int _retryCount = 2;
		private readonly int[] _retryDelays = { 30, 60 };
		private IIdentityServiceWrapper IdentityServiceWrapper => GlobalAppSettings.FeatureUseSeparateSettingsForOAuth20
			? ClassFactory.Get<IIdentityServiceWrapper>("OAuth20Integration")
			: ClassFactory.Get<IIdentityServiceWrapper>();

		#endregion

		#region Methods: Private

		private ClientAppInfoRequest GetClientAppInfoFromEntity(Entity entity) {
			var clientName = entity.GetTypedColumnValue<string>("Name");
			var redirectUrl = entity.GetTypedColumnValue<string>("RedirectUrl");
			var applicationUrl = entity.GetTypedColumnValue<string>("ApplicationUrl");
			var clientId = entity.GetTypedColumnValue<string>("ClientId");
			var systemUserId = entity.GetTypedColumnValue<string>("SystemUserId");
			var isActive = entity.GetTypedColumnValue<bool>("IsActive");
			var clientDescription = entity.GetTypedColumnValue<string>("Description");
			var clientAppInfoReq = new ClientAppInfoRequest {
				ClientId = clientId,
				CustomerId = clientName,
				ClientAppName = clientName,
				ClientAppDescription = clientDescription,
				ClientAppUri = applicationUrl,
				Enabled = isActive,
				SystemUserId = systemUserId,
				RedirectUris = new[] { redirectUrl }
			};
			return clientAppInfoReq;
		}

		private Entity GetOAuthMarketingEntity(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			Entity webhookOAuthIntegration = entitySchemaManager.GetEntityByName("OAuthClientApp", userConnection);
			var webhookConditions = new Dictionary<string, object> { { "Name", _webhookIntegrationName } };
			var found = webhookOAuthIntegration.FetchFromDB(webhookConditions);
			return found ? webhookOAuthIntegration : null;
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			Entity webhookOAuthIntegration = GetOAuthMarketingEntity(userConnection);
			if (webhookOAuthIntegration == null) {
				_logger.Info($"OAuthClientApp with Name {_webhookIntegrationName} not found");
				return;
			}
			webhookOAuthIntegration.SetColumnValue("SystemUserId", _webhookServiceUserId);
			webhookOAuthIntegration.Save();
			var clientAppInfoReq = GetClientAppInfoFromEntity(webhookOAuthIntegration);
			var identityUpdated = false;
			var retryPolicy = Policy
				.Handle<Exception>()
				.WaitAndRetry(_retryDelays.Length, i => TimeSpan.FromSeconds(_retryDelays[i - 1]), (ex, delay) => {
					_logger.Error($"{_errorCode}: Failed to update webhook integration {_webhookIntegrationName}: {ex.Message}");
					_logger.Info($"Retrying after {delay.TotalSeconds} seconds...");
				});
			try {
				retryPolicy.Execute(() => {
					IdentityServiceWrapper.UpdateClient(clientAppInfoReq);
					_logger.Info($"Successfully updated webhook integration {_webhookIntegrationName}");
				});
			} catch (Exception e) {
				_logger.Error($"{_errorCode}: Failed to update {_webhookIntegrationName}");
			}
		}

		#endregion
	}

	#endregion

}

