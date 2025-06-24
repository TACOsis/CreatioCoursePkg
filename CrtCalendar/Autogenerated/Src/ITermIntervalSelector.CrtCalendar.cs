namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	/// <summary>
	/// Interface of term interval selector.
	/// </summary>
	public interface ITermIntervalSelector<T>
	{
		/// <summary>
		/// Method that returns time interval for calculation.
		/// </summary>
		/// <param name="arguments">Arguments for strategies.</param>
		/// <returns>Time interval.</returns>
		ITermInterval<T> Get(Dictionary<string, object> arguments);
	}
}

