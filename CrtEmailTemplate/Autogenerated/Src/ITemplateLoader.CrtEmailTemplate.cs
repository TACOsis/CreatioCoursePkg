namespace Terrasoft.Configuration
{
	using System;
	using Core;
	using Core.Entities;

	public interface ITemplateLoader
	{
		/// <summary>
		/// User connection.
		/// </summary>
		UserConnection UserConnection {
			get;
		}

		/// <summary>
		/// Gets an email template translation by its identifier (<paramref name="emailTemplateId"/>)
		/// and default language.
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <returns>Email template translation entity.</returns>
		Entity GetTemplate(Guid emailTemplateId);

		/// <summary>
		/// Gets an email template translation by its identifier (<paramref name="emailTemplateId"/>)
		/// and language identifier (<paramref name="languageId"/>).
		/// </summary>
		/// <param name="emailTemplateId">Email template identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Email template translation entity.</returns>
		Entity GetTemplate(Guid emailTemplateId, Guid languageId);
	}
}
