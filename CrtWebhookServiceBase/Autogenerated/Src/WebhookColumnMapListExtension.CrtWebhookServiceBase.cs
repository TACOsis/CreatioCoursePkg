namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Linq;

    #region Class: WebhookColumnMapListExtension

    /// <summary>
    /// Contains extensions of the specified WebhookColumnMap list.
    /// </summary>
    public static class WebhookColumnMapListExtension
	{

		#region Methods: Public

		/// <summary>
		/// Replaces the map object in the WebhookColumnMap list.
		/// </summary>
		/// <param name="mappedFields">The mapped fields.</param>
		/// <param name="entityColumnName">Name of the entity column.</param>
		/// <param name="webhookColumnName">Name of the webhook column.</param>
		public static void Replace(this List<WebhookColumnMap> mappedFields, string entityColumnName,
			string webhookColumnName) {
			WebhookColumnMap existMapObject = mappedFields.FirstOrDefault(mappedField =>
				string.Equals(mappedField.WebhookColumnName, webhookColumnName,
					StringComparison.InvariantCultureIgnoreCase));
			if (existMapObject != null) {
				existMapObject.EntityColumnName = entityColumnName;
			}
		}

		#endregion

	}

	#endregion

}

