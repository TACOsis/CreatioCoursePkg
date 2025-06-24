namespace Terrasoft.Configuration
{
	using System;

	#region Class: ChainOfCircumstancesExtensions

	/// <summary>
	/// Chain of circumstances extensions.
	/// </summary>
	public static class ChainOfCircumstancesExtensions
	{

		#region Methods: Public

		/// <summary>
		/// A common postcondition pointing that the result mustn't be 
		/// a default value of <paramref name="TResult"/>. 
		/// </summary>
		/// <typeparam name="TResult">Type of result.</typeparam>
		/// <param name="chain">The chain.</param>
		/// <returns>Postcondition.</returns>
		public static Predicate<TResult> NotDefault<TResult>(this ChainOfCircumstances<TResult> chain) {
			return result => !Equals(result, default(TResult));
		}

		#endregion

	}

	#endregion

}
