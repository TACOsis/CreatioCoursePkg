namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core.Factories;

	#region Class: UtmFormSubmitFieldMapper

	/// <inheritdoc cref="IFieldMapper"/>
	[DefaultBinding(typeof(ICustomFieldMapper), Name = "UtmFormSubmitFieldMapper")]
	public class UtmFormSubmitFieldMapper : ICustomFieldMapper
	{

		#region Constants: Private

		/// <summary>
		/// The landing page URL field.
		/// </summary>
		private const string LandingPageUrlField = "LandingPageURL";

		/// <summary>
		/// The referrer field.
		/// </summary>
		private const string ReferrerField = "Referrer";

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets the webhook source.
		/// </summary>
		public string WebhookSource => $"{WebhookSourceConstants.Landingi}|{WebhookSourceConstants.WebForm}";

		/// <summary>
		/// Gets the entity name.
		/// </summary>
		public string EntityName => "FormSubmit";

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IFieldMapper.MapFields"/>
		public void MapFields(IEnumerable<string> webhookFields, List<WebhookColumnMap> mappedFields) {
			mappedFields.Replace(LandingPageUrlField, WebhookServiceConstants.PageUrlField);
			mappedFields.Replace(ReferrerField, WebhookServiceConstants.ReferrerUrlField);
		}

		#endregion

	}

	#endregion

}

