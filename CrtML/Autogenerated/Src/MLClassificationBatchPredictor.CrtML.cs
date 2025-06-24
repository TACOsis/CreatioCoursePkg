namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using Core;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;

	#region Class: MLClassificationBatchPredictor

	/// <summary>
	/// Classifies entities using predictive machine learning model.
	/// </summary>
	[DefaultBinding(typeof(IMLBatchPredictor), Name = MLConsts.ClassificationProblemType)]
	public class MLClassificationBatchPredictor : MLBatchPredictor<List<ClassificationResult>>
	{

		#region Fields: Private

		private readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLClassificationBatchPredictor"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLClassificationBatchPredictor(UserConnection userConnection) : base(userConnection) {
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
				List<ClassificationResult> value) {
			PredictionSaver.SavePrediction(modelConfig.Id, modelConfig.ModelInstanceUId, entityId, value);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Saves the predicted data to entities.
		/// </summary>
		/// <param name="modelConfig">Machine learning model configuration.</param>
		/// <param name="predictedData">Dictionary where key is entity identifier and value is predicted
		/// result for that entity.</param>
		public override void SavePredictedData(MLModelConfig modelConfig, Dictionary<Guid, object> predictedData) {
			var connectionArg = new ConstructorArgument("userConnection", _userConnection);
			var filter = ClassFactory.Get<MLBasePredictedValueFilter>(connectionArg);
			Exception lastException = null;
			int exceptionsCount = 0;
			const int maxExceptionsCount = 20;
			predictedData.ForEach(kvPredictedData => {
				Guid entityId = kvPredictedData.Key;
				try {
					var entityPredictedResults = (List<ClassificationResult>)kvPredictedData.Value;
					var predictedValues = new Dictionary<MLModelConfig, List<ClassificationResult>> {
						{ modelConfig, entityPredictedResults }
					};
					PredictionSaver.SaveEntityPredictedValues(modelConfig.PredictionEntitySchemaId, entityId,
						predictedValues, filter.OnSetupPredictedValue);
				} catch (Exception e) {
					exceptionsCount++;
					if (exceptionsCount <= maxExceptionsCount) {
						_log.Error(
							$"Batch classification saving error for record {entityId} of model {modelConfig.Id}", e);
					}
					lastException = e;
				}
			});
			if (exceptionsCount > 0) {
				_log.Error($"There were {exceptionsCount} exceptions while saving batch classification results " +
					$"for model {modelConfig.Id}. Only first {maxExceptionsCount} were printed into the log");
			}
			if (lastException != null) {
				throw lastException;
			}
		}

		#endregion

	}

	#endregion

}
 
