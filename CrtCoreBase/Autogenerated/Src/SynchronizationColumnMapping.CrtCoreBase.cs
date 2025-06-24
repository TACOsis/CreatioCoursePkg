namespace Terrasoft.Configuration.EntitySynchronization
{

	#region Class: SynchronizationColumnMapping

	/// <summary>
	/// Contains synchronization column mapping information.
	/// </summary>
	public class SynchronizationColumnMapping
	{

		#region Methods: Fields

		/// <summary>
		/// Source column name.
		/// </summary>
		public string SourceColumnName;

		/// <summary>
		/// Destination column name.
		/// </summary>
		public string DestinationColumnName;

		/// <summary>
		/// Column values comparator.
		/// </summary>
		public SynchronizationColumnComparator Comparator;

		#endregion

	}

	#endregion

}

