namespace Terrasoft.Configuration.ML
{
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;

	[DefaultBinding(typeof(IMLModelTrainer))]
	public class MLEntityModelTrainer: MLModelTrainer
	{

		#region Fields: Private

		private Select _trainingSelectQuery;
		private readonly IMLModelQueryBuilder _queryBuilder;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLEntityModelTrainer"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelConfig">The model configuration.</param>
		public MLEntityModelTrainer(UserConnection userConnection, MLModelConfig modelConfig)
				: base(userConnection, modelConfig) {
			ConstructorArgument userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			_queryBuilder = ClassFactory.Get<IMLModelQueryBuilder>(userConnectionArg);
		}

		#endregion

		#region Methods: Private

		private string GetMetadataOutputName() {
			return _modelConfig.GetModelSchemaMetadata().Output?.Name;
		}

		private void AddQueryOutputColumn(Select query, MLModelConfig modelConfig) {
			string metadataOutputName = GetMetadataOutputName();
			if (metadataOutputName.IsNotNullOrEmpty()) {
				return;
			}
			_modelBuilder.AddQueryOutputColumn(_userConnection, query, modelConfig);
		}

		private Select BuildTrainingSelectQuery() {
			if (_trainingSelectQuery != null) {
				return _trainingSelectQuery;
			}
			_trainingSelectQuery = _queryBuilder.BuildSelect(_modelConfig.EntitySchemaId,
				_modelConfig.TrainingSetQuery, _modelConfig.ColumnExpressions, _modelConfig.TrainingFilterData);
			if (_problemTypeFeatures.HasOutputColumn) {
				AddQueryOutputColumn(_trainingSelectQuery, _modelConfig);
			}
			return _trainingSelectQuery;
		}
		
		private IMLTrainDataLoader CreateTrainDataLoader(Select select) {
			var chunkSize = SysSettings.GetValue(_userConnection, "MLTrainingChunkSize", 1000);
			var config = new MLDataLoaderConfig {
				MinRecordsCount = _modelConfig.TrainingMinimumRecordsCount,
				MaxRecordsCount = _modelConfig.TrainingMaxRecordsCount,
				ChunkSize = chunkSize
			};
			var userConnectionArg = new ConstructorArgument("userConnection", _userConnection);
			var selectArg = new ConstructorArgument("select", select);
			var configArg = new ConstructorArgument("config", config);
			IMLTrainDataLoader dataLoader =
				ClassFactory.Get<IMLTrainDataLoader>(userConnectionArg, selectArg, configArg);
			return dataLoader;
		}

		#endregion

		#region Methods: Protected

		protected override IMLTrainDataLoader CreateTrainDataLoader() {
			Select trainingSelectQuery = BuildTrainingSelectQuery();
			return CreateTrainDataLoader(trainingSelectQuery);
		}

		protected override ModelSchemaMetadata InitMetadata() {
			Select trainingSelectQuery = BuildTrainingSelectQuery();
			var modelValidator = ClassFactory.Get<IMLModelValidator>();
			string outputColumnName = GetMetadataOutputName() ?? MLConsts.DefaultOutputColumnAlias;
			modelValidator.CheckColumns(trainingSelectQuery, outputColumnName);
			modelValidator.CheckSqlQuery(trainingSelectQuery);
			ModelSchemaMetadata modelSchemaMetadata = _metadataGenerator.GenerateMetadata(trainingSelectQuery,
				_modelConfig.MetaData, outputColumnName);
			return modelSchemaMetadata;
		}

		#endregion

	}

}

