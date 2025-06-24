namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Configuration.Utils;

	#region Class: GlobalMacrosHelper

	/// <summary>
	/// Class implement processing macros.
	/// </summary>
	public class GlobalMacrosHelper : MacrosHelperV2
	{

		#region Methods: Public

		/// <summary>
		/// Returns text of template where macroses replaced by their values.
		/// Macros highlighted if there are no matching value.
		/// </summary>
		/// <param name="textTemplate">Text of template with macroses.</param>
		/// <param name="requestedEntityName">Entity name which used to get macros values.</param>
		/// <param name="requestedEntityId">Entity identifier which used to get macros values.</param>
		/// <param name="properties">Additional arguments for MacrosHelperV2</param>
		/// <returns>Text of template.</returns>
		public string GetTextTemplate(string textTemplate, string requestedEntityName, Guid requestedEntityId, MacrosExtendedProperties properties) {
			AdditionalProperties = properties;
			return GetTextTemplate(textTemplate, requestedEntityName, requestedEntityId);
		}

		/// <summary>
		/// Returns text of template where macroses replaced by their values.
		/// </summary>
		/// <param name="textTemplate">Text of template with macroses.</param>
		/// <param name="requestedEntityName">Entity name which used to get macros values.</param>
		/// <param name="requestedEntityId">Entity identifier which used to get macros values.</param>
		/// <param name="properties">Additional arguments for MacrosHelperV2</param>
		/// <returns>Text of template.</returns>
		public string GetPlainTextTemplate(string textTemplate, string requestedEntityName, Guid requestedEntityId, MacrosExtendedProperties properties) {
			AdditionalProperties = properties;
			return GetPlainTextTemplate(textTemplate, requestedEntityName, requestedEntityId);
		}

		#endregion

	}

	#endregion

}
