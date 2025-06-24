namespace Terrasoft.Configuration.ML
{
	using System;
	using Core;

	/// <summary>
	/// Class for batch predictors that have prediction result of <see cref="double"/> type.
	/// </summary>
	/// <seealso cref="Terrasoft.Configuration.ML.MLBatchPredictor{System.Double}" />
	public class MLBatchNumericPredictor : MLBatchPredictor<double>
	{

		#region Constructors: Protected

		/// <summary>
		/// Initializes a new instance of the <see cref="MLBatchNumericPredictor"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		protected MLBatchNumericPredictor(UserConnection userConnection) : base(userConnection) {
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Saves the prediction result.
		/// </summary>
		/// <param name="modelConfig">The model config.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="value">Prediction result value.</param>
		protected override void SavePredictionResult(MLModelConfig modelConfig, Guid entityId,
				double value) {
			PredictionSaver.SavePrediction(modelConfig.Id, modelConfig.ModelInstanceUId, entityId, value);
		}

		#endregion

	}
}

