namespace Terrasoft.Configuration
{
	using System;

	/// <summary>
	/// Describes the rules for obtaining a language.
	/// </summary>
	public interface ILanguageRule
	{
		#region Methods: Public

		/// <summary>
		/// Provides language identifier needs for <paramref name="entityRecordId"/>.
		/// </summary>
		/// <param name="entityRecordId">Entity record identifier.</param>
		/// <returns>Language identifier.</returns>
		Guid GetLanguageId(Guid entityRecordId);

		#endregion
	}
}
