namespace Terrasoft.Configuration
{
	using System;

	#region Interface: ITouchSourceProps

	/// <summary>
	/// Source and medium properties.
	/// </summary>
	public interface ITouchSourceProps
	{

		#region Properties: Public

		/// <summary>
		/// Channel unique identifier.
		/// </summary>
		Guid ResultLeadMediumId { get; }

		/// <summary>
		/// Source unique identifier.
		/// </summary>
		Guid ResultLeadSourceId { get; }

		#endregion

	}

	#endregion
	
}
