namespace Terrasoft.Configuration.EntitySynchronization
{

	#region Delegate: SynchronizationColumnComparator

	/// <summary>
	/// Determines if <paramref name="sourceValue"/> is equal to <paramref name="destinationValue">.
	/// </summary>
	/// <param name="sourceValue">Source value.</param>
	/// <param name="destinationValue">Destination value.</param>
	/// <returns>If <paramref name="sourceValue"/> is equal to <paramref name="destinationValue">.</returns>
	public delegate bool SynchronizationColumnComparator(object sourceValue, object destinationValue);

	#endregion

}

