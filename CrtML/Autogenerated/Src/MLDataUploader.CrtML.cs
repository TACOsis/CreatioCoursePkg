namespace Terrasoft.Configuration.ML
{
	using System;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;

	#region Interface: IMLDataUploader

	/// <summary>
	/// Uploads data to machine learning service.
	/// </summary>
	public interface IMLDataUploader
	{

		#region Methods: Public

		/// <summary>
		/// Uploads the data to machine learning service.
		/// </summary>
		/// <param name="trainDataLoader">Loader for train data.</param>
		/// <returns>Number of uploaded records.</returns>
		int Upload(IMLTrainDataLoader trainDataLoader);

		#endregion

	}

	#endregion

	#region Class: MLDataUploader

	/// <summary>
	/// Provides a base class for implementations of the <see cref="IMLDataUploader"/> interface.
	/// </summary>
	/// <seealso cref="Terrasoft.Configuration.ML.IMLDataUploader" />
	[DefaultBinding(typeof(IMLDataUploader))]
	public class MLDataUploader : IMLDataUploader
	{

		#region Fields: Private

		private readonly IMLServiceProxy _mlServiceProxy;
		private readonly Guid _sessionId;
		private readonly IMLModelEventsNotifier _modelEventsNotifier;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLDataUploader"/> class.
		/// </summary>
		/// <param name="mlServiceProxy">The machine learning service proxy.</param>
		/// <param name="sessionId">The training session identifier.</param>
		/// <param name="modelEventsNotifier">Model events notifier.</param>
		public MLDataUploader(IMLServiceProxy mlServiceProxy, Guid sessionId, 
				IMLModelEventsNotifier modelEventsNotifier) {
			_mlServiceProxy = mlServiceProxy;
			_sessionId = sessionId;
			_modelEventsNotifier = modelEventsNotifier;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Uploads the chunk data.
		/// </summary>
		/// <param name="data">The data to be uploaded.</param>
		protected virtual void UploadChunkData(MLUploadingData data) {
			_mlServiceProxy.UploadData(data, _sessionId);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Uploads the data to machine learning service.
		/// </summary>
		/// <param name="trainDataLoader">Loader for train data.</param>
		/// <returns>
		/// Number of uploaded records.
		/// </returns>
		public int Upload(IMLTrainDataLoader trainDataLoader) {
			var uploadedRecordsCount = 0;
			int rowCount = trainDataLoader.LoadData((data, affectedRecords) => {
				UploadChunkData(data);
				uploadedRecordsCount += affectedRecords;
				_modelEventsNotifier.NotifyModelStateChanged(_sessionId, TrainSessionState.DataTransferring,
					uploadedRecordsCount);
			});
			return rowCount;
		}

		#endregion

	}

	#endregion

}

