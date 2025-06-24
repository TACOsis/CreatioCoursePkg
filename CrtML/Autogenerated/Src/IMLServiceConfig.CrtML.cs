namespace Terrasoft.Configuration.ML
{
	using System;

	public interface IMLServiceConfig
	{
		/// <summary>
		/// Check if service configured for solving the given <see cref="MLProblemType"/>.
		/// </summary>
		/// <param name="problemTypeId">Problem type.</param>
		/// <param name="checkTraining">If <c>true</c> checks if it's configured for training.</param>
		bool IsServiceConfigured(Guid problemTypeId, bool checkTraining = false);

		/// <summary>
		/// Checks if there's license to use ML Service.
		/// </summary>
		bool HasLicense();
	}
} 
