namespace Terrasoft.Configuration.GeneratedWebFormService
{
	using System;

	/// <summary>
	/// Validates given landing entity.
	/// </summary>
	public interface IGeneratedWebFormValidator
	{
		/// <summary>
		/// Validates landing entity.
		/// </summary>
		/// <param name="webFormId">Identifier of landing.</param>
		/// <returns>Instance of ValidationResult</returns>
		ValidationResult Validate(Guid webFormId);
	}
}

