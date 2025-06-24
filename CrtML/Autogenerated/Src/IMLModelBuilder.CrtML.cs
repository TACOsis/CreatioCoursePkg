 namespace Terrasoft.Configuration.ML
{
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	/// <summary>
	/// Implements the behavior of the MLModel
	/// </summary>
	public interface IMLModelBuilder
	{
		/// <summary>
		/// Loads the required columns to train model.
		/// </summary>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		void LoadMLModelColumns(UserConnection userConnection, MLModelConfig modelConfig);

		/// <summary>
		/// Expands the original query with an output column.
		/// </summary>
		/// <param name="query">The query.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		/// <param name="userConnection">UserConnection instance.</param>
		void AddQueryOutputColumn(UserConnection userConnection, Select query, MLModelConfig modelConfig);

		/// <summary>
		/// Merges fit parameters.
		/// </summary>
		/// <param name="metadata">The metadata.</param>
		/// <param name="modelConfig">ML model configuration.</param>
		void MergeFitParams(ModelSchemaMetadata metadata, MLModelConfig modelConfig);

		/// <summary>
		/// Merges custom config to the resulting model's metadata.
		/// </summary>
		/// <param name="modelSchemaMetadata">Generated metadata.</param>
		/// <param name="customMetadata">Custom metadata.</param>
		/// <returns>Merged metadata.</returns>
		string MergeCustomMetadata(ModelSchemaMetadata modelSchemaMetadata, string customMetadata);
	}
}

