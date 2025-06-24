namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core.Process.Configuration;

	/// <summary>
	/// Interface for implementations of predictors for ML tasks.
	/// </summary>
	/// <typeparam name="TOut">The type of the out.</typeparam>
	public interface IMLPredictor<TOut>
	{
		/// <summary>
		/// Tries to predict.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="data">The input data.</param>
		/// <param name="result">The result of prediction.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>If can't predict returns <c>false</c>.</returns>
		bool TryPredict(MLModelConfig modelConfig, Dictionary<string, object> data,
			out TOut result, MLDataPredictionUserTask predictionUserTask = null);

		/// <summary>
		/// Predicts result by given input data.
		/// </summary>
		/// <param name="modelId">ML model identifier.</param>
		/// <param name="data">The input data.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		TOut Predict(Guid modelId, Dictionary<string, object> data, MLDataPredictionUserTask predictionUserTask = null);

		/// <summary>
		/// Predicts result by data from given entity.
		/// </summary>
		/// <param name="modelId">ML model identifier.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		TOut Predict(Guid modelId, Guid entityId, MLDataPredictionUserTask predictionUserTask = null);

		/// <summary>
		/// Predicts results for the given list of records.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="dataList">List of records.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		List<TOut> Predict(MLModelConfig modelConfig, IList<Dictionary<string, object>> dataList,
			MLDataPredictionUserTask predictionUserTask = null);
	}

	/// <summary>
	/// Interface for implementations of parametrized predictors for ML tasks.
	/// </summary>
	/// <typeparam name="TParams">Type of prediction extra parameters.</typeparam>
	/// <typeparam name="TOut">Output type.</typeparam>
	public interface IMLParametrizedPredictor<in TParams, TOut>
	{
		/// <summary>
		/// Predicts result by given input data.
		/// </summary>
		/// <param name="model">ML model configuration.</param>
		/// <param name="data">The input data.</param>
		/// <param name="predictionParams">Prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		List<TOut> Predict(MLModelConfig model, IList<Dictionary<string, object>> data, TParams predictionParams);
	}
}

