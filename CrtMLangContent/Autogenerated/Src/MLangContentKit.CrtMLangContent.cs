namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core;

	#region Class: MLangContentKit

	/// <summary>
	/// Represents kit for multilanguage content.
	/// </summary>
	public class MLangContentKit : IContentKit
	{

		#region Properties: Public

		/// <summary>
		/// Multilanguage content store.
		/// </summary>
		public IContentStore ContentStore {
			get;
			set;
		}

		/// <summary>
		/// Language iterator.
		/// </summary>
		public ILanguageIterator LanguageIterator {
			get;
			set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="MLangContentKit"/>.
		/// </summary>
		/// <param name="contentStore">Multilanguage content store.</param>
		/// <param name="languageIterator">Language iterator.</param>
		public MLangContentKit(IContentStore contentStore, ILanguageIterator languageIterator) {
			ContentStore = contentStore;
			LanguageIterator = languageIterator;
		}

		#endregion

		#region Method: Public 

		/// <summary>
		/// Gets a content entity if exists, otherwise returns default content entity.
		/// </summary>
		/// <param name="entityId">Entity identifier.</param>
		/// <param name="recordId">Entity record identifier.</param>
		/// <returns>Multilanguage content entity.</returns>
		public virtual Entity GetContent(Guid entityId, Guid recordId) {
			foreach (var languageId in LanguageIterator.GetLanguages(recordId)) {
				var contentEntity = ContentStore.Get(entityId, languageId);
				if (contentEntity != null) {
					return contentEntity;
				}
			}
			return ContentStore.GetDefault(entityId);
		}

		#endregion

	}

	#endregion

}
