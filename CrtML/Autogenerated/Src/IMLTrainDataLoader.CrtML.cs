namespace Terrasoft.Configuration.ML
{
	using System;

	/// <summary>
	/// Loads data for machine learning training.
	/// </summary>
	public interface IMLTrainDataLoader
	{

		/// <summary>
		/// Loads the data by chunks, executing given handler on each.
		/// </summary>
		/// <param name="onChunkLoaded">Action that executes on each serialized data chunk loaded from the database.
		/// </param>
		/// <returns>Number of loaded rows.</returns>
		int LoadData(Action<MLUploadingData, int> onChunkLoaded);
	}
}
