namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;
	using Terrasoft.Core.Factories;

	#region Class: TouchPointFormSubmitEventListener

	/// <summary>
	/// Listener for <see cref="FormSubmit"/> entity events.
	/// </summary>
	/// <seealso cref="BaseEntityEventListener"/>
	[EntityEventListener(SchemaName = "FormSubmit")]
	public class TouchPointFormSubmitEventListener : BaseEntityEventListener
	{

		#region Methods: Private

		private string GetReferrer(Entity entity) {
			const string referrerColumnName = "Referrer";
			string referrer = entity.IsColumnValueLoaded(referrerColumnName)
				? entity.GetTypedColumnValue<string>(referrerColumnName)
				: string.Empty;
			return referrer;
		}

		private string GetLandingPageUrl(Entity entity) {
			const string landingPageUrlColumnName = "LandingPageURL";
			string landingPageUrl = entity.IsColumnValueLoaded(landingPageUrlColumnName)
				? entity.GetTypedColumnValue<string>(landingPageUrlColumnName)
				: string.Empty;
			return landingPageUrl;
		}

		private (ITouchSource, ITouchSourceProps) GetLeadSourceHelper(UserConnection userConnection) {
			var touchSource = ClassFactory.Get<ITouchSource>(
				new ConstructorArgument("userConnection", userConnection)
			);
			var touchSourceProps = touchSource is ITouchSourceProps ? (ITouchSourceProps)touchSource : default;
			return (touchSource, touchSourceProps);
		}

		private void SetColumnValue(Entity entity, string columnName, string value) {
			if (string.IsNullOrWhiteSpace(value)
				|| !string.IsNullOrEmpty(entity.GetColumnValue(columnName).ToString())) {
				return;
			}
			entity.SetColumnValue(columnName, value);
		}

		private void SetComputedColumnValue(Entity entity, string columnName, Guid computedValue,
				bool useDefaultLeadSourceValue) {
			if (computedValue == Guid.Empty) {
				return;
			}
			var value = entity.IsColumnValueLoaded(columnName)
				? entity.GetTypedColumnValue<Guid>(columnName)
				: Guid.Empty;
			if (useDefaultLeadSourceValue && value != Guid.Empty) {
				return;
			}
			entity.SetColumnValue(columnName, computedValue);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Handles <see cref="FormSubmit"/> entity <see cref="OnInserting"/> event.
		/// </summary>
		/// <param name="sender">Event sender.</param>
		/// <param name="e">The <see cref="Terrasoft.Core.Entities.EntityBeforeEventArgs" /> instance containing the
		/// event data.</param>
		public override void OnInserting(object sender, EntityBeforeEventArgs e) {
			base.OnInserting(sender, e);
			var entity = (Entity)sender;
			var userConnection = entity.UserConnection;
			(ITouchSource touchSource, ITouchSourceProps touchSourceProps) lsh = GetLeadSourceHelper(userConnection);
			lsh.touchSource.ComputeMediumAndSource(new Dictionary<string, string> {
				["bpmRef"] = GetReferrer(entity),
				["bpmHref"] = GetLandingPageUrl(entity),
			});
			bool useDefaultLeadSourceValue = userConnection.GetIsFeatureEnabled("UseDefaultLeadSourceValue");
			SetComputedColumnValue(entity, "ChannelId", lsh.touchSourceProps.ResultLeadMediumId, useDefaultLeadSourceValue);
			SetComputedColumnValue(entity, "SourceId", lsh.touchSourceProps.ResultLeadSourceId, useDefaultLeadSourceValue);
			SetColumnValue(entity, "UtmMediumStr", lsh.touchSource.BpmHrefParameters["utm_medium"]);
			SetColumnValue(entity, "UtmSourceStr", lsh.touchSource.BpmHrefParameters["utm_source"]);
			SetColumnValue(entity, "UtmCampaignStr", lsh.touchSource.BpmHrefParameters["utm_campaign"]);
			SetColumnValue(entity, "UtmTermStr", lsh.touchSource.BpmHrefParameters["utm_term"]);
			SetColumnValue(entity, "UtmContentStr", lsh.touchSource.BpmHrefParameters["utm_content"]);
		}

		#endregion

	}

	#endregion

}

