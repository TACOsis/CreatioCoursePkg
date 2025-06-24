namespace Terrasoft.Configuration
{
	/// <summary>
	/// Interface for converting macros properties.
	/// </summary>
	/// <typeparam name="TRequest">Input macros properties.</typeparam>
	/// <typeparam name="TResult">Output macros properties.</typeparam>
	public interface IMacrosWorkerPropertiesConverter<TRequest, TResult>
	{
		TResult Convert(TRequest properties);
	}
}
