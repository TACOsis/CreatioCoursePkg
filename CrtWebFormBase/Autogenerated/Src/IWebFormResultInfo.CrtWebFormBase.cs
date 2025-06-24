namespace Terrasoft.Configuration
{

	#region Interface: IWebFormResultInfo

	/// <summary>
	/// Provides interface for web form result information.
	/// </summary>
	public interface IWebFormResultInfo
	{

		#region Methods: Public

		/// <summary>
		/// Gets a value indicating whether result is success.
		/// </summary>
		/// <value>
		///   <c>true</c> if success; otherwise, <c>false</c>.
		/// </value>
		bool Success { get; }

		/// <summary>
		/// Gets the error message.
		/// </summary>
		/// <value>
		/// The error message.
		/// </value>
		string ErrorMessage { get; }

		#endregion

	}

	#endregion

}

