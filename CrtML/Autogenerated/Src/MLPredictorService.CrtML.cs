namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using global::Common.Logging;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.Common;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using static Terrasoft.ML.Interfaces.ScoringOutput;


	#region Class: MLPredictorService

	/// <summary>
	/// Web methods for machine learning prediction.
	/// </summary>
	/// <seealso cref="Terrasoft.Web.Common.BaseService" />
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public partial class MLPredictorService : BaseService
	{

		#region Enum: ScoreEntityExitCode

		/// <summary>
		/// Serves as detailed exit code from <see cref="<PredictKind>Entity(Guid, Guid, Guid)"/> service methods.
		/// </summary>
		public enum PredictEntityExitCode
		{
			/// <summary>
			/// This exit code is returned when entity is successfully predicted.
			/// </summary>
			Ok,

			/// <summary>
			/// This exit code is returned when there are no active models for entity.
			/// </summary>
			NoActiveModels,

			/// <summary>
			/// This exit code is returned when ML service returned no data.
			/// </summary>
			NoPredictionResult
		}

		#endregion

		#region Class: ScoreEntityResult

		/// <summary>
		/// Response for Score entity service method.
		/// </summary>
		[DataContract]
		public class ScoreEntityResult
		{

			#region Constructors: Public

			/// <summary>
			/// Initializes a new instance of the <see cref="ScoreEntityResult"/> class.
			/// </summary>
			/// <param name="exitCode">The exit code.</param>
			public ScoreEntityResult(PredictEntityExitCode exitCode) => ExitCode = exitCode;

			/// <summary>
			/// Initializes a new instance of the <see cref="ScoreEntityResult"/> class.
			/// </summary>
			/// <param name="predictedScore">The predicted score.</param>
			public ScoreEntityResult(double predictedScore) => PredictedScore = predictedScore;

			#endregion

			#region Properties: Public

			/// <summary>
			/// Gets or sets the predicted score.
			/// </summary>
			/// <value>The predicted score.</value>
			[DataMember(Name = "predictedScore")]
			public double PredictedScore { get; set; }

			/// <summary>
			/// Gets or sets the exit code of the service method.
			/// </summary>
			/// <value>The exit code.</value>
			[DataMember(Name = "exitCode")]
			public PredictEntityExitCode ExitCode { get; set; } = PredictEntityExitCode.Ok;

			#endregion

		}

		#endregion

		#region Class: ClassifyEntityResult

		/// <summary>
		/// Response for Classify entity service method.
		/// </summary>
		[DataContract]
		public class ClassifyEntityResult
		{

			#region Constructors: Public

			public ClassifyEntityResult() {
			}

			/// <summary>
			/// Initializes a new instance of the <see cref="ClassifyEntityResult"/> class.
			/// </summary>
			/// <param name="exitCode">The exit code.</param>
			public ClassifyEntityResult(PredictEntityExitCode exitCode) => ExitCode = exitCode;

			/// <summary>
			/// Initializes a new instance of the <see cref="ClassifyEntityResult"/> class.
			/// </summary>
			/// <param name="predictedResults">The predicted results.</param>
			public ClassifyEntityResult(ClassificationOutput predictedResults) =>
				ClassificationResults = predictedResults;

			#endregion

			#region Properties: Public

			/// <summary>
			/// Gets or sets the predicted results.
			/// </summary>
			/// <value>The predicted results.</value>
			[DataMember(Name = "classificationResults")]
			public ClassificationOutput ClassificationResults { get; set; }

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
		/// Result of scoring with explanation of model's columns contributions to this result.
		/// </summary>
		[DataContract]
		public class ExplainedScoreResult
		{

			#region Properties: Public

			/// <summary>
			/// Initializes a new instance of the <see cref="ExplainedScoreResult"/> class.
			/// </summary>
			/// <param name="exitCode">The exit code.</param>
			public ExplainedScoreResult(PredictEntityExitCode exitCode) => ExitCode = exitCode;

			/// <summary>
			/// Gets or sets the predicted score.
			/// </summary>
			[DataMember(Name = "score")]
			public double Score { get; set; }

			/// <summary>
			/// Gets or sets the contributions that caused this score value.
			/// </summary>
			[DataMember(Name = "contributions")]
			public List<LocalizedFeatureWeight> Contributions { get; set; }

			/// <summary>
			/// Gets or sets the exit code of the service method.
			/// </summary>
			/// <value>The exit code.</value>
			[DataMember(Name = "exitCode")]
			public PredictEntityExitCode ExitCode { get; set; }

			#endregion

		}

		#region Constants: Private

		private const string GenderModelId = "A2EF27C5-4921-4707-9A8A-5E299427CA59";
		private const string HighSignificance = "High";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Methods: Private

		private Guid GetBestModelForSchema(Guid entitySchemaUId, Guid entitySchemaTargetColumnUId, Guid problemTypeId) {
			var select = (Select)new Select(UserConnection).Top(1)
					.Column("Id")
				.From("MLModel")
				.Where("PredictionEnabled").IsEqual(Column.Parameter(true))
					.And("RootSchemaUId").IsEqual(Column.Parameter(entitySchemaUId))
					.And("MLProblemTypeId").IsEqual(Column.Parameter(problemTypeId))
					.And()
						.OpenBlock("TargetColumnUId").IsEqual(Column.Parameter(entitySchemaTargetColumnUId))
						.Or("PredictedResultColumnUId").IsEqual(Column.Parameter(entitySchemaTargetColumnUId))
						.CloseBlock()
					.And(Func.Len("ModelInstanceUId")).IsGreater(Column.Const(0))
				.OrderByDesc("InstanceMetric");
			return select.ExecuteScalar<Guid>();
		}

		private void SavePredictions(Guid? entityId, Guid modelId, MLModelConfig modelConfig,
				List<ClassificationResult> predictedResults) {
			if (entityId.HasValue && entityId.Value.IsNotEmpty()) {
				var connectionArg = new ConstructorArgument("userConnection", UserConnection);
				MLPredictionSaver saver = ClassFactory.Get<MLPredictionSaver>(connectionArg);
				saver.SavePrediction(modelId, modelConfig.ModelInstanceUId, entityId.Value, predictedResults);
			}
		}

		private Guid FindModelForSchema(string entitySchemaName, string targetColumnPath) {
			EntitySchemaManager entitySchemaManager = UserConnection.EntitySchemaManager;
			var entitySchema = entitySchemaManager.GetInstanceByName(entitySchemaName);
			var targetColumn = entitySchema.GetSchemaColumnByPath(targetColumnPath);
			Guid modelId = GetBestModelForSchema(entitySchema.UId, targetColumn.UId,
				new Guid(MLConsts.ClassificationProblemType));
			return modelId;
		}

		private ClassificationOutput ExecServiceClassify(Dictionary<string, object> inputs,
				MLModelConfig modelConfig) {
			string apiKey = MLUtils.GetAPIKey(UserConnection);
			var serviceUrlArg = new ConstructorArgument("serviceUrl", modelConfig.ServiceUrl);
			var apiKeyArg = new ConstructorArgument("apiKey", apiKey);
			IMLServiceProxy proxy = ClassFactory.Get<IMLServiceProxy>(serviceUrlArg, apiKeyArg);
			return proxy.Classify(modelConfig.ModelInstanceUId, inputs);
		}

		private Dictionary<string, object> TryFixMetadataInputKeys(Dictionary<string, object> inputs,
				MLModelConfig modelConfig, string entitySchemaName) {
			var modelQueryBuilder = ClassFactory.Get<IMLModelQueryBuilder>(
				new ConstructorArgument("userConnection", UserConnection));
			var select = modelQueryBuilder.BuildSelect(modelConfig.PredictionEntitySchemaId, modelConfig.BatchPredictionQuery,
				modelConfig.GetPredictionColumnExpressions());
			IMLMetadataGenerator metadataGenerator = ClassFactory.Get<IMLMetadataGenerator>();
			var metadata = metadataGenerator.GenerateMetadata(select, modelConfig.MetaData);
			var metadataInputs = metadata.Inputs;
			string autogeneratedPrefix = $"__{entitySchemaName[0]}_";
			var notFoundInputsKeys = new List<string>();
			var fixedInputs = new Dictionary<string, object>();
			foreach (var kvInput in inputs) {
				string key = kvInput.Key;
				if (metadataInputs.Any(input => input.Name == key)) {
					fixedInputs[key] = kvInput.Value;
					continue;
				}
				if (metadataInputs.Any(input => input.Name == autogeneratedPrefix + key)) {
					fixedInputs[autogeneratedPrefix + key] = kvInput.Value;
					continue;
				}
				fixedInputs[key] = kvInput.Value;
				notFoundInputsKeys.Add(key);
			}
			if (notFoundInputsKeys.Count > 0) {
				_log.WarnFormat("Key were not found in model's metadata for schema '{0}': {1}", entitySchemaName,
					string.Join(",", notFoundInputsKeys));
			}
			return fixedInputs;
		}

		private (ScoringOutput, Guid ModelId) PredictScore(Guid entitySchemaUId, Guid entitySchemaTargetColumnUId,
				Guid entityId) {
			var connectionArg = new ConstructorArgument("userConnection", UserConnection);
			var entityPredictor = ClassFactory.Get<IMLEntityPredictor>(MLConsts.ScoringProblemType.ToUpper(),
					connectionArg);
			Guid modelId = GetBestModelForSchema(entitySchemaUId, entitySchemaTargetColumnUId,
				new Guid(MLConsts.ScoringProblemType));
			var scoringOutput = (ScoringOutput)entityPredictor.PredictAndSave(modelId, entityId);
			return (scoringOutput, modelId);
		}

		private (ScoringOutput, Guid ModelId) FindLatestScoreResultWithContributions(Guid targetColumnUId,
				Guid entityId) {
			var select = (Select)new Select(UserConnection).Top(1)
				.Cols("Probability", "ModelId", "FeatureContributions", "Bias")
				.From("MLPrediction").As("p")
					.InnerJoin("MLModel").As("m").On("p", "ModelId").IsEqual("m", "Id")
				.Where("m", "PredictedResultColumnUId").IsEqual(Column.Parameter(targetColumnUId))
					.And("p", "Key").IsEqual(Column.Parameter(entityId))
				.OrderByDesc("p", "CreatedOn");
			bool isAnyExists = select.ExecuteSingleRecord(reader => {
				var serializedContributions = reader.GetColumnValue<string>("FeatureContributions");
				var scoringOutput = new ScoringOutput {
					Score = reader.GetColumnValue<double>("Probability"),
					Bias = reader.GetColumnValue<double>("Bias"),
					Contributions = Common.Json.Json.Deserialize<List<FeatureContribution>>(serializedContributions)
				};
				var modelId = reader.GetColumnValue<Guid>("ModelId");
				return (scoringOutput, modelId);
			}, out var result);
			if (!isAnyExists || result.scoringOutput.Contributions.IsNullOrEmpty()) {
				return (null, default(Guid));
			}
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Performs scoring for given entity, if there are available active models for given field and schema.
		/// </summary>
		/// <param name="entitySchemaUId">Entity schema id.</param>
		/// <param name="entitySchemaTargetColumnUId">Target field for scoring.</param>
		/// <param name="entityId">Entity id.</param>
		/// <returns>Detailed operation <see cref="PredictEntityExitCode"/> and predicted score.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public ScoreEntityResult ScoreEntity(Guid entitySchemaUId, Guid entitySchemaTargetColumnUId, Guid entityId) {
			Guid modelId = GetBestModelForSchema(entitySchemaUId, entitySchemaTargetColumnUId,
				new Guid(MLConsts.ScoringProblemType));
			if (modelId.IsEmpty()) {
				_log.WarnFormat("There are no active scoring models for field '{0}' in '{1}' entity",
					entitySchemaTargetColumnUId, entityId);
				return new ScoreEntityResult(PredictEntityExitCode.NoActiveModels);
			}
			double predictedScore;
			try {
				var connectionArg = new ConstructorArgument("userConnection", UserConnection);
				var predictor = ClassFactory.Get<MLEntityPredictor>(connectionArg);
				predictedScore = predictor.PredictEntityValueAndSaveResult(modelId, entityId);
			} catch (Exception ex) {
				string message = $"Failed to evaluate score for entity '{entityId}' with model '{modelId}'";
				_log.Error(message, ex);
				throw;
			}
			return new ScoreEntityResult(predictedScore);
		}

		/// <summary>
		/// Performs numeric regression prediction.
		/// </summary>
		/// <param name="modelId">MLModel identifier.</param>
		/// <param name="inputData">Model input data for prediction.</param>
		/// <returns>Predicted value.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public double PredictRegression(Guid modelId, Dictionary<string, object> inputData) {
			try {
				var connectionArg = new ConstructorArgument("userConnection", UserConnection);
				var predictor = ClassFactory.Get<IMLPredictor<double>>(connectionArg);
				var result = predictor.Predict(modelId, inputData);
				return result;
			} catch (Exception ex) {
				string message = $"Failed to evaluate regression result for data '{inputData}' with model '{modelId}'";
				_log.Error(message, ex);
				throw;
			}
		}

		/// <summary>
		/// Performs scoring for given entity, if there are available active models for given field and schema. Also
		/// provides explanation of this scoring result.
		/// </summary>
		/// <param name="entitySchemaUId">Entity schema id.</param>
		/// <param name="entitySchemaTargetColumnUId">Target field for scoring.</param>
		/// <param name="entityId">Entity id.</param>
		/// <returns>Detailed operation <see cref="PredictEntityExitCode"/>, predicted score and contribution of model
		/// column values to this score.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public ExplainedScoreResult ScoreAndExplain(Guid entitySchemaUId, Guid entitySchemaTargetColumnUId,
				Guid entityId) {
			(ScoringOutput scoringOutput, Guid modelId) =
				FindLatestScoreResultWithContributions(entitySchemaTargetColumnUId, entityId);
			if (scoringOutput == null) {
				(scoringOutput, modelId) = PredictScore(entitySchemaUId, entitySchemaTargetColumnUId, entityId);
				if (modelId.IsEmpty()) {
					_log.WarnFormat("There are no active scoring models for field '{0}' in '{1}' entity",
						entitySchemaTargetColumnUId, entityId);
					return new ExplainedScoreResult(PredictEntityExitCode.NoActiveModels);
				}
				if (scoringOutput == null) {
					_log.ErrorFormat("ML service returned no data for scoring '{1}' entity using model {2}",
						entityId, modelId);
					return new ExplainedScoreResult(PredictEntityExitCode.NoPredictionResult);
				}
			}
			List<LocalizedFeatureWeight> contributions = scoringOutput.Contributions
				.Select(featureContribution => new LocalizedFeatureWeight(featureContribution)).ToList();
			MLModelExplanationUtils.LocalizeFeatures(UserConnection, contributions, modelId, true);
			return new ExplainedScoreResult(PredictEntityExitCode.Ok) {
				Score = scoringOutput.Score,
				Contributions = contributions
			};
		}

		/// <summary>
		/// Performs classification prediction for given input dataset. It must be any model enabled for prediction for
		/// given entity schema.
		/// </summary>
		/// <param name="inputs">Input dataset. Keys should be from model's metadata input keys.</param>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <param name="targetColumnPath">Name of the target field for prediction.</param>
		/// <param name="entityId">Entity id.</param>
		/// <returns>Detailed operation <see cref="PredictEntityExitCode"/> and predicted values.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "result")]
		public ClassifyEntityResult ClassifyDataset(Dictionary<string, object> inputs, string entitySchemaName,
				string targetColumnPath, Guid? entityId) {
			Guid modelId = FindModelForSchema(entitySchemaName, targetColumnPath);
			if (modelId.IsEmpty()) {
				_log.WarnFormat("There are no active models for column '{0}' in '{1}' schema",
					targetColumnPath, entitySchemaName);
				return new ClassifyEntityResult(PredictEntityExitCode.NoActiveModels);
			}
			IMLModelLoader modelLoader = ClassFactory.Get<IMLModelLoader>();
			if (!modelLoader.TryLoadModelForPrediction(UserConnection, modelId, out MLModelConfig modelConfig)) {
				_log.WarnFormat("Model '{0}' can't be loaded for '{1}' entity", modelId, entityId);
				return new ClassifyEntityResult(PredictEntityExitCode.NoActiveModels);
			}
			ClassificationOutput predictedResults;
			try {
				var fixedInputs = TryFixMetadataInputKeys(inputs, modelConfig, entitySchemaName);
				predictedResults = ExecServiceClassify(fixedInputs, modelConfig);
				if (predictedResults == null || predictedResults.IsEmpty()) {
					return new ClassifyEntityResult(predictedResults);
				}
				SavePredictions(entityId, modelId, modelConfig, predictedResults);
			} catch (Exception ex) {
				string message = $"Failed to evaluate classification for entity '{entityId}' with model '{modelId}'";
				_log.Error(message, ex);
				throw;
			}
			return new ClassifyEntityResult(predictedResults);
		}

		/// <summary>
		/// Executes <see cref="MLBatchPredictionJob"/>.
		/// </summary>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void ExecuteBatchPredictionJob() {
			var job = new MLBatchPredictionJob();
			job.Execute(UserConnection, new Dictionary<string, object>());
		}

		#endregion

	}

	#endregion

}

