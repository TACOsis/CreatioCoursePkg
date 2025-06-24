namespace Terrasoft.Configuration.ML
{
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	[DefaultBinding(typeof(IMLModelTrainer), Name = MLConsts.RagProblemType)]
	public class MLFilesModelTrainer: MLModelTrainer
	{

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLFilesModelTrainer"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelConfig">The model configuration.</param>
		public MLFilesModelTrainer(UserConnection userConnection, MLModelConfig modelConfig)
			: base(userConnection, modelConfig) {}

		#endregion

		#region Methods: Protected

		protected override IMLTrainDataLoader CreateTrainDataLoader() {
			return new MLFilesDataLoader(_userConnection, _modelConfig.Id);
		}

		protected override ModelSchemaMetadata InitMetadata() {
			return _metadataGenerator.GenerateMetadata(_modelConfig.MetaData);
		}

		#endregion

	}
}

