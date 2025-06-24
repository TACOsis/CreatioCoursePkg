namespace Terrasoft.Configuration
{
	using System;

	/// <summary>
	/// Interface for processing an email template and searching communication language.
	/// </summary>
	public interface IEmailTemplateLanguageHelper
	{
		/// <summary>
		/// Get default language for sending email template.
		/// </summary>
		/// <param name="templateId">Email template id</param>
		/// <returns>Return language id.</returns>
		Guid GetLanguageId(Guid templateId);

		/// <summary>
		/// Get default language for sending email template.
		/// </summary>
		/// <param name="templateId">Email template id</param>
		/// <param name="templateLoader">Email template store</param>
		/// <returns>Return language id.</returns>
		Guid GetLanguageId(Guid templateId, ITemplateLoader templateLoader);
	}
}
