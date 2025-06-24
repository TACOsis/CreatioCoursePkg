namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;

	#region Interface: ILanguageIterator

	/// <summary>
	/// Represents an iterator for listing by languages.
	/// </summary>
	public interface ILanguageIterator
	{

		#region Methods: Public

		/// <summary>
		/// Gets languages enumerator.
		/// </summary>
		/// <param name="recordId">Entity record identifier.</param>
		/// <returns>Enumerator of languages.</returns>
		IEnumerable<Guid> GetLanguages(Guid recordId);

		#endregion

	}

	#endregion

}
