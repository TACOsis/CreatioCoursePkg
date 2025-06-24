namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core.Entities;

	#region Interface: IContentKit

	/// <summary>
	/// Represents kit for multilanguage content.
	/// </summary>
	public interface IContentKit
	{

		#region Properties: Public

		/// <summary>
		/// Language iterator.
		/// </summary>
		ILanguageIterator LanguageIterator {
			get;
			set;
		}

		/// <summary>
		/// Content store.
		/// </summary>
		IContentStore ContentStore {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns content entity.
		/// </summary>
		/// <param name="entityId">Original entity content identifier.</param>
		/// <param name="recordId">Entity record identifier.</param>
		/// <returns>Multilanguage content entity.</returns>
		Entity GetContent(Guid entityId, Guid recordId);

		#endregion

	}

	#endregion

}
