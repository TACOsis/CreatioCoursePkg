namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.ML.Interfaces.Responses;

	#region Interface: IMLServiceProxy

	/// <summary>
	/// Interface for calling machine learning service.
	/// </summary>
	public partial interface IMLServiceProxy
	{

		#region Methods: Public

		/// <summary>
		/// Starts new train session.
		/// </summary>
		/// <param name="metaData">Meta data of the model's input and output.</param>
		/// <param name="modelSchemaId">ML model schema identifier.</param>
		/// <returns>The identifier of the started session.</returns>
		Guid StartTrainSession(string metaData, Guid modelSchemaId);

		/// <summary>
		/// Uploads data to the service.
		/// </summary>
		/// <param name="data">Data to upload.</param>
		/// <param name="sessionId">The identifier of the training session.</param>
		void UploadData(MLUploadingData data, Guid sessionId);

		/// <summary>
		/// Begins the training.
		/// </summary>
		/// <param name="trainSessionId">The train session identifier.</param>
		/// <param name="methodName">Name of the web method.</param>
		void BeginTraining(Guid trainSessionId, string methodName);

		/// <summary>
		/// Gets information about the training session.
		/// </summary>
		/// <param name="trainSessionId">The train session identifier.</param>
		/// <returns></returns>
		GetSessionInfoResponse GetTrainingSessionInfo(Guid trainSessionId);

		/// <summary>
		/// Calls classification service.
		/// </summary>
		/// <param name="modelInstanceUId">The model instance id.</param>
		/// <param name="data">Input data fields for classification model.</param>
		/// <returns>List of <see cref="ClassificationResult"/>.</returns>
		ClassificationOutput Classify(Guid modelInstanceUId, Dictionary<string, object> data);

		/// <summary>
		/// Scores rate for item with the given data using the specified model.
		/// </summary>
		/// <param name="model">Model, that should perform scoring.</param>
		/// <param name="data">The data of the item that should be scored.</param>
		/// <param name="predictContributions">
		/// Indicates, if service should return individual feature contributions to overall prediction.
		/// </param>
		/// <returns>Predicted score rate.</returns>
		ScoringOutput Score(MLModelConfig model, Dictionary<string, object> data, bool predictContributions);

		/// <summary>
		/// Scores rates for list of items with the given data using the specified model.
		/// </summary>
		/// <param name="model">Model, that should perform scoring.</param>
		/// <param name="dataList">The list of data of items that should be scored.</param>
		/// <param name="predictContributions">
		/// Indicates, if service should return individual feature contributions to overall prediction.
		/// </param>
		/// <returns>Predicted score rates.</returns>
		List<ScoringOutput> Score(MLModelConfig model, IList<Dictionary<string, object>> dataList,
			bool predictContributions);

		/// <summary>
		/// Performs regression of numeric value for list of items with the given data using the specified model.
		/// </summary>
		/// <param name="modelInstanceUId">The model instance identifier.</param>
		/// <param name="dataList">The list of data of items for regression.</param>
		/// <returns>Predicted numeric value.</returns>
		List<double> Regress(Guid modelInstanceUId, IList<Dictionary<string, object>> dataList);

		/// <summary>
		/// Performs RAG using the specified model.
		/// </summary>
		/// <param name="model">The model instance.</param>
		/// <param name="question">The question.</param>
		/// <param name="fileIds">The files identifiers.</param>
		/// <param name="skipAnswer">The indicator for skip answer.</param>
		/// <returns>Predicted answer with files.</returns>
		RagResponse GetRagAnswer(MLModelConfig model, string question, IEnumerable<Guid> fileIds = null,
			bool skipAnswer = false);

		/// <summary>
		/// Performs recommendation for specified users.
		/// </summary>
		/// <param name="model">Model instance.</param>
		/// <param name="users">Users to get recommendation.</param>
		/// <param name="recordsCount">Number of items to recommend for each user.</param>
		/// <param name="filterItems">Items to filter.</param>
		/// <param name="filterItemsMode">Mode of filter,</param>
		/// <param name="filterAlreadyInteractedItems">Filter out already interacted items from prediction.</param>
		/// <param name="userItems">Updated users items.</param>
		/// <param name="recalculateUsers">Recalculate users recommendations using <see cref="userItems"/></param>
		RecommendationResponse Recommend(MLModelConfig model, List<Guid> users, int recordsCount,
			List<Guid> filterItems = null,
			RecommendationFilterItemsMode filterItemsMode = RecommendationFilterItemsMode.White,
			bool filterAlreadyInteractedItems = true, List<DatasetValue> userItems = null,
			bool recalculateUsers = false);

		/// <summary>
		/// Predicts using ML Service.
		/// </summary>
		/// <param name="modelInstanceUId">Model instance identifier.</param>
		/// <param name="methodName">Predict ML Service method name.</param>
		/// <param name="predictionParams">Prediction params.</param>
		/// <param name="timeoutSec">Timeout for prediction.</param>
		/// <typeparam name="TOut">ML Service response type.</typeparam>
		/// <returns>Prediction response.</returns>
		TOut Predict<TOut>(Guid modelInstanceUId, string methodName, PredictionInput predictionParams,
			int timeoutSec = MLServiceProxy.DefaultPredictionTimeout) where TOut : new();
		
		/// <summary>
		/// Predicts using ML Service.
		/// </summary>
		/// <param name="modelInstanceUId">Model instance identifier.</param>
		/// <param name="dataList">Entities with list of input data.</param>
		/// <param name="methodName">Predict ML Service method name.</param>
		/// <param name="defaultPredictionParams">Default prediction params.</param>
		/// /// <param name="timeoutSec">Timeout for prediction.</param>
		/// <typeparam name="TOut">ML Service response type.</typeparam>
		/// <returns>Prediction response.</returns>
		TOut Predict<TOut>(Guid modelInstanceUId, IList<Dictionary<string, object>> dataList, string methodName,
			DatasetInput defaultPredictionParams = null, int timeoutSec = MLServiceProxy.DefaultPredictionTimeout)
			where TOut : new();

		#endregion

	}

	#endregion

}
