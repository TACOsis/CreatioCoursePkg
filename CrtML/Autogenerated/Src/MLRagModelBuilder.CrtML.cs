namespace Terrasoft.Configuration.ML
{
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core.Factories;

	#region Class: MLRagModelBuilder

	/// <summary>
	/// Implements the behavior of the Rag MLModel
	/// </summary>
	[DefaultBinding(typeof(IMLModelBuilder), Name = MLConsts.RagProblemType)]
	public class MLRagModelBuilder: MLDefaultModelBuilder
	{

		#region Methods: Public

		/// <summary>
		/// Merges fit parameters.
		/// </summary>
		/// <param name="metadata">The metadata.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		public override void MergeFitParams(ModelSchemaMetadata metadata, MLModelConfig modelConfig) {
			base.MergeFitParams(metadata, modelConfig);
			metadata.Params = metadata.Params ?? new ModelSchemaParams();
			RagModelFitParams fitParams = metadata.Params.Fit?.ToObject<RagModelFitParams>() ?? new RagModelFitParams();
			fitParams.OpenaiApiKey = fitParams.OpenaiApiKey.IsNullOrEmpty()
				? modelConfig.OpenaiApiKey
				: fitParams.OpenaiApiKey;
			fitParams.LlmModelName = fitParams.LlmModelName.IsNullOrEmpty()
				? modelConfig.LlmModelName
				: fitParams.LlmModelName;
			fitParams.LlmModelPrompt = fitParams.LlmModelPrompt.IsNullOrEmpty()
				? modelConfig.LlmModelPrompt
				: fitParams.LlmModelPrompt;
			fitParams.LlmModelTemperature = fitParams.LlmModelTemperature ??
				(modelConfig.LlmModelTemperature == 0 ? (double?)null : modelConfig.LlmModelTemperature);
			fitParams.DocumentMaxChunkSize = fitParams.DocumentMaxChunkSize ??
				(modelConfig.DocumentMaxChunkSize == 0 ? (int?)null : modelConfig.DocumentMaxChunkSize);
			fitParams.DocumentChunkSizeOverlap = fitParams.DocumentChunkSizeOverlap ??
				(modelConfig.DocumentChunkSizeOverlap == 0 ? (int?)null : modelConfig.DocumentChunkSizeOverlap);
			metadata.Params.Fit = JObject.FromObject(fitParams);
		}

		#endregion

	}

	#endregion

}

