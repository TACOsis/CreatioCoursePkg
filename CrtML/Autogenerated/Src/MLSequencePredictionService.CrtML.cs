 namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Web;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.Core.Factories;

	#region Class: MLPredictorService

	/// <summary>
	/// Web methods for machine learning prediction.
	/// </summary>
	public partial class MLPredictorService
	{

		#region Class: SequencePredictionResult

		/// <summary>
		/// Response for sequence prediction service method.
		/// </summary>
		[DataContract]
		public class SequencePredictionResult
		{

			#region Constructors: Public

			public SequencePredictionResult() { }

			/// <summary>
			/// Initializes a new instance of the <see cref="SequencePredictionResult"/> class.
			/// </summary>
			/// <param name="exitCode">The exit code.</param>
			public SequencePredictionResult(PredictEntityExitCode exitCode) => ExitCode = exitCode;

			/// <summary>
			/// Initializes a new instance of the <see cref="SequencePredictionResult"/> class.
			/// </summary>
			/// <param name="predictedResult">The predicted result.</param>
			public SequencePredictionResult(SequencePredictionOutput predictedResult) =>
				PredictionResult = predictedResult;

			#endregion

			#region Properties: Public

			/// <summary>
			/// Gets or sets the predicted result.
			/// </summary>
			/// <value>The predicted results.</value>
			[DataMember(Name = "sequencePredictionResult")]
			public SequencePredictionOutput PredictionResult { get; set; }

			/// <summary>
			/// Gets or sets the exit code of the service method.
			/// </summary>
			/// <value>The exit code.</value>
			[DataMember(Name = "exitCode")]
			public PredictEntityExitCode ExitCode { get; set; } = PredictEntityExitCode.Ok;

			#endregion

		}

		#endregion

		/// <summary>
		/// Performs sequence prediction, if there are available active model for given modelUId.
		/// </summary>
		/// <param name="modelId">Trained model id.</param>
		/// <param name="data">Sequence for prediction.</param>
		/// <returns>Detailed operation <see cref="PredictEntityExitCode"/> and predicted sequence.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped, RequestFormat = WebMessageFormat.Json,
			ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public SequencePredictionResult PredictSequence(Guid modelId, Dictionary<string, object> data) {
			SequencePredictionOutput result;
			try {
				var predictor = ClassFactory.Get<IMLPredictor<SequencePredictionOutput>>(
					MLConsts.SequencePredictionProblemType, new ConstructorArgument("userConnection", UserConnection));
				result = predictor.Predict(modelId, data);
			} catch (Exception ex) {
				string message = $"Failed to evaluate sequence prediction with model '{modelId}'";
				_log.Error(message, ex);
				throw;
			}
			return new SequencePredictionResult(result);
		}

	}

	#endregion

}

