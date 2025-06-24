namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core.Factories;

	#region Class: UtmLeadFieldMapper

	/// <inheritdoc cref="IFieldMapper"/>
	[DefaultBinding(typeof(ICustomFieldMapper), Name = "UtmLeadFieldMapper")]
	public class UtmLeadFieldMapper : ICustomFieldMapper
	{

		#region Constants: Private

		/// <summary>
		/// The BPM href field.
		/// </summary>
		private const string BpmHrefField = "BpmHref";

		/// <summary>
		/// The BPM reference field.
		/// </summary>
		private const string BpmRefField = "BpmRef";

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets the webhook source.
		/// </summary>
		public string WebhookSource => $"{WebhookSourceConstants.Landingi}|{WebhookSourceConstants.WebForm}";

		/// <summary>
		/// Gets the entity name.
		/// </summary>
		public string EntityName => "Lead";

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IFieldMapper.MapFields"/>
		public void MapFields(IEnumerable<string> webhookFields, List<WebhookColumnMap> mappedFields) {
            mappedFields.Replace(BpmHrefField, WebhookServiceConstants.PageUrlField);
			mappedFields.Replace(BpmRefField, WebhookServiceConstants.ReferrerUrlField);
		}

		#endregion

	}

	#endregion

}

