namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Core;
	using Core.Factories;
	using Terrasoft.Core.Process.Configuration;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.ML.Interfaces.Responses;

	/// <summary>
	/// Classification implementation of <see cref="IMLEntityPredictor"/> and <see cref="IMLPredictor{TOut}"/>.
	/// </summary>
	/// <seealso cref="MLBaseEntityPredictor{List{Terrasoft.ML.Interfaces.ClassificationResult}}" />
	/// <seealso cref="IMLEntityPredictor" />
	[DefaultBinding(typeof(IMLEntityPredictor), Name = MLConsts.ClassificationProblemType)]
	[DefaultBinding(typeof(IMLPredictor<List<ClassificationResult>>), Name = MLConsts.ClassificationProblemType)]
	public class MLClassificationEntityPredictor : MLBaseEntityPredictor<List<ClassificationResult>>
	{

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLClassificationEntityPredictor"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLClassificationEntityPredictor(UserConnection userConnection) : base(userConnection) {
		}

		#endregion

		#region Properties: Protected

		protected virtual int BatchTimeoutSec => 14400;

		/// <summary>
		/// Gets the problem type identifier.
		/// </summary>
		/// <value>
		/// The problem type identifier.
		/// </value>
		protected override Guid ProblemTypeId => new Guid(MLConsts.ClassificationProblemType);

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Predicts using the specified proxy with extra params taken from user task.
		/// </summary>
		/// <param name="proxy">The proxy.</param>
		/// <param name="model">The model.</param>
		/// <param name="data">The input data.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Predicted result.</returns>
		protected override List<ClassificationResult> Predict(IMLServiceProxy proxy, MLModelConfig model,
				Dictionary<string, object> data, MLDataPredictionUserTask predictionUserTask) {
			return proxy.Classify(model.ModelInstanceUId, data);
		}

		/// <summary>
		/// Predicts results for the given batch of records.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <param name="dataForPrediction"></param>
		/// <param name="proxy">ML service proxy.</param>
		/// <param name="predictionUserTask">User task with prediction extra params.</param>
		/// <returns>Prediction result.</returns>
		protected override List<List<ClassificationResult>> Predict(MLModelConfig model,
				IList<Dictionary<string, object>> dataForPrediction, IMLServiceProxy proxy,
				MLDataPredictionUserTask predictionUserTask) {
			var predictionParams = new DatasetInput { PredictContributions = false };
			ClassificationResponse response = proxy.Predict<ClassificationResponse>(model.ModelInstanceUId,
				dataForPrediction, model.PredictionEndpoint, predictionParams, BatchTimeoutSec);
			List<ClassificationOutput> outputs = response.Outputs;
			List<List<ClassificationResult>> results = outputs.Cast<List<ClassificationResult>>().ToList();
			return results;
		}

		protected override void SaveEntityPredictedValues(MLModelConfig model, Guid entityId,
				List<ClassificationResult> predictedResult) {
			var connectionArg = new ConstructorArgument("userConnection", _userConnection);
			var filter = ClassFactory.Get<MLBasePredictedValueFilter>(connectionArg);
			var predictedValues = new Dictionary<MLModelConfig, List<ClassificationResult>> {
				{ model, predictedResult }
			};
			PredictionSaver.SaveEntityPredictedValues(model.PredictionEntitySchemaId, entityId, predictedValues,
				filter.OnSetupPredictedValue);
		}

		/// <summary>
		/// Saves the prediction result.
		/// </summary>
		/// <param name="model">The model.</param>
		/// <param name="entityId">The entity identifier.</param>
		/// <param name="predictedResult">The predicted result.</param>
		protected override void SavePrediction(MLModelConfig model, Guid entityId,
				List<ClassificationResult> predictedResult) {
			PredictionSaver.SavePrediction(model.Id, model.ModelInstanceUId, entityId, predictedResult);
		}

		#endregion

	}
}

