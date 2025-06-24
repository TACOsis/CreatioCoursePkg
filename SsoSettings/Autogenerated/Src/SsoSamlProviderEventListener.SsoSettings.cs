namespace Terrasoft.Configuration.SsoSettings
{
	using System;
	using System.Linq;
	using Terrasoft.ComponentSpace.Interfaces;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;

	#region Class: SsoSamlProviderEventListener

	[EntityEventListener(SchemaName = "SsoSamlProvider")]
	public class SsoSamlProviderEventListener: BaseSsoVirtualSettingsEventListener
	{

		#region Constructors: Public

		public SsoSamlProviderEventListener() : base(settingsSchemaName: "SsoSamlSettings") {}

		#endregion

		#region Method: Private

		private string GetBaseApplicationUrl() {
			var baseApplicationUrl = WebUtilities.GetBaseApplicationUrl(HttpContext.Current.Request).TrimEnd('/');
			if (baseApplicationUrl.EndsWith("/0")) {
				return baseApplicationUrl.Substring(0, baseApplicationUrl.Length - 2);
			}
			return baseApplicationUrl;
		}

		#endregion

		#region Methods: Public

		public override void OnSaved(object sender, EntityAfterEventArgs e) {
			base.OnSaved(sender, e);
			var entity = (Entity) sender;
			var schema = entity.EntitySchemaManager.GetInstanceByName("SsoServiceProvider");
			var esq = new EntitySchemaQuery(schema) {
				PrimaryQueryColumn = {
					IsAlwaysSelect = true
				}
			};
			var serviceProvider = esq.GetEntityCollection(entity.UserConnection).FirstOrDefault();
			if (serviceProvider?.PrimaryColumnValue != null) {
				return;
			}
			serviceProvider = schema.CreateEntity(entity.UserConnection);
			var baseUrl = GetBaseApplicationUrl();
			var ssoLoginEndpoint = new Uri(baseUrl + SamlConsts.AssertionConsumerServicePath);
			var ssoLogoutEndpoint = new Uri(baseUrl + SamlConsts.SingleLogoutServicePath);
			serviceProvider.SetDefColumnValues();
			serviceProvider.SetColumnValue("AssertionConsumerServiceUrl", ssoLoginEndpoint.ToString());
			serviceProvider.SetColumnValue("SingleLogoutServiceUrl", ssoLogoutEndpoint.ToString());
			serviceProvider.SetColumnValue("Name", baseUrl);
			serviceProvider.Save();
		}

		public override void OnSaving(object sender, EntityBeforeEventArgs e) {
			var entity = (Entity)sender;
			if (entity.StoringState == StoringObjectState.New) {
				entity.SetColumnValue("SsoSecureOnly", true);
			}
			base.OnSaving(sender, e);
		}

		#endregion

	}

	#endregion

}
 
