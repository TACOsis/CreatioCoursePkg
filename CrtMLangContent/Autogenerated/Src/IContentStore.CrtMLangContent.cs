namespace Terrasoft.Configuration
{
	using System;
	using Core;
	using Core.Entities;

	#region Interface: IContentStore

	/// <summary>
	/// Represents store for multilanguage content.
	/// </summary>
	public interface IContentStore
	{

		#region Properties: Public

		/// <summary>
		/// Determines whether to take into account rights to select data.
		/// </summary>
		bool UseAdminRights { get; set; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns content entity.
		/// </summary>
		/// <param name="entityId">Original entity content identifier.</param>
		/// <param name="languageId">Language identifier.</param>
		/// <returns>Multilanguage content entity.</returns>
		Entity Get(Guid entityId, Guid languageId);

		/// <summary>
		/// Returns default content entity.
		/// </summary>
		/// <param name="entityId">Original entity content identifier.</param>
		/// <returns>Default content entity.</returns>
		Entity GetDefault(Guid entityId);

		#endregion

	}

	#endregion

}
