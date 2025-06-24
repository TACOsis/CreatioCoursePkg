namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;

	/// <summary>
	/// Loads data for machine learning prediction.
	/// </summary>
	public interface IMLPredictionDataLoader
	{

		/// <summary>
		/// Loads the data for prediction.
		/// </summary>
		/// <param name="entityId">The entity identifier.</param>
		/// <returns>Dictionary, where the key is the field name, the value is the field's value.</returns>
		Dictionary<string, object> LoadDataForPrediction(Guid entityId);

		/// <summary>
		/// Loads the data for prediction by chunks, executing given handler on each.
		/// </summary>
		/// <param name="onChunkLoaded">Action that executes on each data chunk loaded from the database.
		/// </param>
		void LoadDataForPrediction(Action<IList<Dictionary<string, object>>> onChunkLoaded);
	}
}

