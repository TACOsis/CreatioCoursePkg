namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.ComponentModel;
	using System.Data;
	using System.Globalization;
	using System.Linq;
	using Common;
	using Core;
	using Core.DB;
	using global::Common.Logging;
	using Newtonsoft.Json;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using EntitySchemaColumn = Terrasoft.Core.Entities.EntitySchemaColumn;

	#region Interface: IMLModelLoader

	/// <summary>
	/// Loads ML models from Db.
	/// </summary>
	public interface IMLModelLoader
	{
		/// <summary>
		/// Loads all ML models without prefiltration.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="safe">Ignore loading exceptions.</param>
		/// <returns>List of ML models.</returns>
		IList<MLModelConfig> LoadAllModels(UserConnection userConnection, bool safe = false);

		/// <summary>
		/// Loads ML models for batch prediction.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <returns>List of enabled and ready for batch prediction models.</returns>
		IList<MLModelConfig> LoadModelsForBatchPrediction(UserConnection userConnection);

		/// <summary>
		/// Loads enabled set of ML models.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelIds">The model ids.</param>
		/// <returns>List of enabled and ready for prediction models.</returns>
		IList<MLModelConfig> LoadEnabledModels(UserConnection userConnection, IList<Guid> modelIds);

		/// <summary>
		/// Tries to load the model by its id.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">Identifier of the model.</param>
		/// <param name="model">Loaded model.</param>
		/// <returns><c>true</c> - if model successfully loaded, otherwise - <c>false</c>.</returns>
		bool TryLoadModel(UserConnection userConnection, Guid modelId, out MLModelConfig model);

		/// <summary>
		/// Tries to load the model for prediction by its id.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="model">The model.</param>
		/// <returns><c>true</c> - if model successfully loaded, otherwise - <c>false</c>.</returns>
		bool TryLoadModelForPrediction(UserConnection userConnection, Guid modelId, out MLModelConfig model);

		/// <summary>
		/// Loads the ml model config by id with fields needed for training.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">The model identifier.</param>
		/// <returns>Loaded model.</returns>
		MLModelConfig LoadModelForTraining(UserConnection userConnection, Guid modelId);

		/// <summary>
		/// Loads the ready for training models on the check point date.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="checkPoint">The check point.</param>
		/// <returns>List of models.</returns>
		IList<MLModelConfig> LoadReadyForTrainingModels(UserConnection userConnection,
			DateTime checkPoint);

		/// <summary>
		/// Loads the model metadata captions. Sets enriched metadata to <see cref="MLModelConfig.MetaData"/> property.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="model">Loaded model.</param>
		void LoadModelMetadataCaptions(UserConnection userConnection, MLModelConfig model);
	}


	#endregion

	#region Class: MLModelLoader

	/// <summary>
	/// Loads ML models from Db.
	/// </summary>
	[DefaultBinding(typeof(IMLModelLoader))]
	public class MLModelLoader : IMLModelLoader
	{

		#region Consts: Private

		private const string TrainingMinimumRecordsCountSysSettingsName = "MLTrainingMinimumRecordsCount";
		private const string TrainingMaxRecordsCountSysSettingsName = "MLTrainingMaxRecordsCount";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");
		private static readonly TimeSpan _minimalBatchPredictionInterval = TimeSpan.FromHours(24);
		private MaintenanceWindowUtils _maintenanceWindowUtils;

		#endregion

		#region Methods: Private

		private static T FindValue<T>(IDataReader reader, string name, object defaultValue) {
			var columnIndex = reader.FieldCount - 1;
			while (columnIndex >= 0) {
				if (name == reader.GetName(columnIndex)) {
					break;
				}
				columnIndex--;
			}
			if (columnIndex >= 0) {
				return reader.GetColumnValue<T>(name);
			}
			return (T)defaultValue;
		}

		private static string FindEntityColumnValueName(UserConnection userConnection, Guid rootSchemaUId,
				Guid columnUId) {
			if (rootSchemaUId.IsEmpty() || columnUId.IsEmpty()) {
				return string.Empty;
			}
			var entitySchema = userConnection.EntitySchemaManager.FindInstanceByUId(rootSchemaUId);
			EntitySchemaColumn column = entitySchema?.Columns.FindByUId(columnUId);
			return column?.ColumnValueName;
		}

		private static bool IsEntityColumnExists(EntitySchemaManager entitySchemaManager, Guid rootSchemaUId,
				string columnValueName) {
			if (rootSchemaUId.IsEmpty() || columnValueName.IsNullOrEmpty()) {
				return false;
			}
			var entitySchema = entitySchemaManager.FindInstanceByUId(rootSchemaUId);
			return entitySchema?.Columns.FindByColumnValueName(columnValueName) != null;
		}

		private static HashSet<TItemType> ParseValueListColumnAsHashSet<TItemType>(IDataReader reader, 
				string columnName) {
			try {
				return reader.GetColumnValue<string>(columnName)?.Split(';')
					.Where(e => e.IsNotNullOrWhiteSpace())
					.Select(e => e.Replace(",", CultureInfo.InvariantCulture.NumberFormat.NumberDecimalSeparator))
					.Select(e => (TItemType)TypeDescriptor.GetConverter(typeof(TItemType)).ConvertFromString(
						null, CultureInfo.InvariantCulture, e))
					.ToHashSet();
			} catch (Exception e) {
				throw new FormatException($"Failed to parse {columnName} value. Exception is: {e}");
			}
		}

		private static MLModelConfig FetchModelConfig(UserConnection userConnection, IDataReader reader,
				bool forPrediction = false) {
			DateTime batchPredictedOn = reader.GetColumnValue<DateTime>("BatchPredictedOn");
			batchPredictedOn = DateTime.SpecifyKind(batchPredictedOn, DateTimeKind.Utc);
			var rootSchemaUId = reader.GetColumnValue<Guid>("RootSchemaUId");
			var targetColumnUId = FindValue<Guid>(reader, "TargetColumnUId", Guid.Empty);
			var modelConfig = new MLModelConfig {
				Id = reader.GetColumnValue<Guid>("Id"),
				MetaData = reader.GetColumnValue<string>("MetaData"),
				TrainingSetQuery = reader.GetColumnValue<string>("TrainingSetQuery"),
				ServiceUrl = reader.GetColumnValue<string>("ServiceUrl"),
				PredictionEndpoint = reader.GetColumnValue<string>("PredictionEndpoint"),
				TrainingEndpoint = reader.GetColumnValue<string>("TrainingEndpoint"),
				BatchPredictionQuery = reader.GetColumnValue<string>("BatchPredictionQuery"),
				ProblemType = reader.GetColumnValue<Guid>("MLProblemTypeId"),
				ModelInstanceUId = reader.GetColumnValue<Guid>("ModelInstanceUId"),
				TrainingFilterData = reader.GetColumnValue<byte[]>("TrainingFilterData"),
				BatchPredictionFilterData = reader.GetColumnValue<byte[]>("BatchPredictionFilterData"),
				TrainingTargetColumnName = FindEntityColumnValueName(userConnection, rootSchemaUId, targetColumnUId),
				EntitySchemaId = rootSchemaUId,
				PredictionEntitySchemaId = reader.GetColumnValue<Guid>("PredictionSchemaUId"),
				BatchPredictedOn = batchPredictedOn,
				ConfidentValueMethodId = reader.GetColumnValue<Guid>("MLConfidentValueMethodId"),
				ConfidentValueLowEdge = reader.GetColumnValue<double>("ConfidentValueLowEdge"),
				CFItemColumnPath = reader.GetColumnValue<string>("CFItemColumnPath"),
				CFUserColumnPath = reader.GetColumnValue<string>("CFUserColumnPath"),
				CFInteractionValueColumnPath = reader.GetColumnValue<string>("CFInteractionValueColumnPath"),
				ListPredictResultSchemaUId = reader.GetColumnValue<Guid>("ListPredictResultSchemaUId"),
				SequenceIdentifierColumnPath = reader.GetColumnValue<string>("SequenceIdentifierColumnPath"),
				SequenceItemPositionColumnPath = reader.GetColumnValue<string>("SequenceItemPositionColumnPath"),
				SequenceItemValueColumnPath = reader.GetColumnValue<string>("SequenceItemValueColumnPath"),
				ListPredictResultSubjectColumn = reader.GetColumnValue<string>("ListPredictResultSubjectColumn"),
				ListPredictResultObjectColumn = reader.GetColumnValue<string>("ListPredictResultObjectColumn"),
				ListPredictResultValueColumn = reader.GetColumnValue<string>("ListPredictResultValueColumn"),
				ListPredictResultModelColumn = reader.GetColumnValue<string>("ListPredictResultModelColumn"),
				ListPredictResultDateColumn = reader.GetColumnValue<string>("ListPredictResultDateColumn"),
				OpenaiApiKey = reader.GetColumnValue<string>("OpenaiApiKey"),
				LlmModelName = reader.GetColumnValue<string>("LlmModelName"),
				LlmModelPrompt = reader.GetColumnValue<string>("LlmModelPrompt"),
				LlmModelTemperature = reader.GetColumnValue<double>("LlmModelTemperature"),
				DocumentChunkSizeOverlap = reader.GetColumnValue<int>("DocumentChunkSizeOverlap"),
				DocumentMaxChunkSize = reader.GetColumnValue<int>("DocumentMaxChunkSize"),
				LowerScoreThreshold = reader.GetColumnValue<double>("LowerScoreThreshold")
			};
			modelConfig.RegularizationValues = ParseValueListColumnAsHashSet<double>(reader, "RegularizationValues");
			modelConfig.FactorsCounts = ParseValueListColumnAsHashSet<int>(reader, "FactorsCounts");
			if (modelConfig.BatchPredictionQuery.IsNullOrEmpty() && modelConfig.TrainingSetQuery.IsNotNullOrEmpty()) {
				modelConfig.BatchPredictionQuery = modelConfig.TrainingSetQuery;
			}
			SetPredictedResultColumnName(modelConfig, userConnection, reader);
			modelConfig.CurrentState = GetTypedState(reader.GetColumnValue<string>("StateCode"));
			LoadMLModelColumns(userConnection, modelConfig);
			return modelConfig;
		}

		private static void SetPredictedResultColumnName(MLModelConfig modelConfig, UserConnection userConnection,
				IDataReader reader) {
			if (modelConfig.PredictedResultColumnName.IsNotNullOrEmpty()) {
				return;
			}
			Guid predictedResultColumnUId = FindValue<Guid>(reader, "PredictedResultColumnUId", Guid.Empty);
			if (predictedResultColumnUId.IsNotEmpty()) {
				modelConfig.PredictedResultColumnName = FindEntityColumnValueName(userConnection,
					modelConfig.PredictionEntitySchemaId, predictedResultColumnUId);
				return;
			}
			if (modelConfig.TrainingTargetColumnName.IsNotNullOrEmpty()) {
				modelConfig.PredictedResultColumnName = modelConfig.TrainingTargetColumnName;
			}
		}

		private static Select GetModelBaseSelectQuery(UserConnection userConnection) {
			var select = (Select)new Select(userConnection).Cols(
					"m.Id",
					"BatchPredictedOn",
					"BatchPredictionQuery",
					"BatchPredictionFilterData",
					"MetaData",
					"MLProblemTypeId",
					"ModelInstanceUId",
					"PredictionEnabled",
					"RootSchemaUId",
					"PredictionSchemaUId",
					"TargetColumnUId",
					"TrainingSetQuery",
					"TrainingFilterData",
					"pt.PredictionEndpoint",
					"pt.ServiceUrl",
					"pt.TrainingEndpoint",
					"s.Code as StateCode",
					"m.PredictedResultColumnUId",
					"m.MLConfidentValueMethodId",
					"m.ConfidentValueLowEdge",
					"m.RegularizationValues",
					"m.FactorsCounts",
					"m.CFItemColumnPath",
					"m.CFUserColumnPath",
					"m.CFInteractionValueColumnPath",
					"m.SequenceIdentifierColumnPath",
					"m.SequenceItemPositionColumnPath",
					"m.SequenceItemValueColumnPath",
					"m.ListPredictResultSchemaUId",
					"m.ListPredictResultSubjectColumn",
					"m.ListPredictResultObjectColumn",
					"m.ListPredictResultValueColumn",
					"m.ListPredictResultModelColumn",
					"m.ListPredictResultDateColumn",
					"m.OpenaiApiKey",
					"m.LlmModelName",
					"m.LlmModelPrompt",
					"m.LlmModelTemperature",
					"m.DocumentMaxChunkSize",
					"m.DocumentChunkSizeOverlap",
					"m.LowerScoreThreshold"
				)
				.From("MLModel").As("m")
				.InnerJoin("MLProblemType").As("pt").On("pt", "Id").IsEqual("m", "MLProblemTypeId")
				.LeftOuterJoin("MLModelState").As("s").On("m", "StateId").IsEqual("s", "Id");
			return select;
		}

		private static TrainSessionState GetTypedState(string stateValue) {
			if (Enum.TryParse(stateValue, out TrainSessionState state)) {
				return state;
			}
			return TrainSessionState.NotStarted;
		}

		private static void SetupTrainingInfo(UserConnection userConnection, MLModelConfig modelConfig,
				IDataReader reader) {
			modelConfig.TrainingMinimumRecordsCount = reader.GetColumnValue<int>("TrainingMinimumRecordsCount");
			if (modelConfig.TrainingMinimumRecordsCount == 0) {
				modelConfig.TrainingMinimumRecordsCount =
					SysSettings.GetValue(userConnection, TrainingMinimumRecordsCountSysSettingsName, 0);
			}
			modelConfig.TrainingMaxRecordsCount = reader.GetColumnValue<int>("TrainingMaxRecordsCount");
			if (modelConfig.TrainingMaxRecordsCount == 0) {
				modelConfig.TrainingMaxRecordsCount =
					SysSettings.GetValue(userConnection, TrainingMaxRecordsCountSysSettingsName, 75000);
			}
			modelConfig.TrainSessionId = reader.GetColumnValue<Guid>("TrainSessionId");
			modelConfig.MetricThreshold = reader.GetColumnValue<double>("MetricThreshold");
			modelConfig.TrainingOutputFilterData = reader.GetColumnValue<byte[]>("TrainingOutputFilterData");
		}

		private static void ReadSequencePredictionModelColumns(MLModelConfig modelConfig, 
				List<MLColumnExpression> columns) {
			if (modelConfig.SequenceIdentifierColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.SequenceIdentifierColumnPath,
					Alias = "SequenceId"
				});
			}
			if (modelConfig.SequenceItemPositionColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.SequenceItemPositionColumnPath,
					Alias = "Position"
				});
			}
			if (modelConfig.SequenceItemValueColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.SequenceItemValueColumnPath,
					Alias = "Value"
				});
			} 
		}

		private static void ReadCollaborativeFilteringModelColumns(MLModelConfig modelConfig, 
				List<MLColumnExpression> columns) {
			if (modelConfig.CFItemColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFItemColumnPath,
					Alias = "item_id"
				});
			}
			if (modelConfig.CFUserColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFUserColumnPath,
					Alias = "user_id"
				});
			}
			if (modelConfig.CFInteractionValueColumnPath.IsNotNullOrEmpty()) {
				columns.Add(new MLColumnExpression {
					ColumnPath = modelConfig.CFInteractionValueColumnPath,
					Alias = "value"
				});
			} else {
				columns.Add(new MLColumnExpression {
					ExpressionType = EntitySchemaQueryExpressionType.Parameter,
					Parameter = new Parameter {
						DataValueType = Nui.ServiceModel.DataContract.DataValueType.Integer,
						Value = 1
					},
					Alias = "value"
				});
			}
		}

		private static void LoadMLModelColumns(UserConnection userConnection, MLModelConfig modelConfig) {
			string problemType = modelConfig.ProblemType.ToString().ToUpperInvariant();
			var modelBuilder = GetMLModelBuilder(problemType);
			modelBuilder.LoadMLModelColumns(userConnection, modelConfig);
		}

		private MaintenanceWindowUtils GetMaintenanceWindowUtils(UserConnection userConnection) {
			return _maintenanceWindowUtils ?? (_maintenanceWindowUtils =
				ClassFactory.Get<MaintenanceWindowUtils>(new ConstructorArgument("userConnection", userConnection)));
		}

		private static IMLModelBuilder GetMLModelBuilder(string problemType) {
			return ClassFactory.HasBinding(typeof(IMLModelBuilder), problemType)
				? ClassFactory.Get<IMLModelBuilder>(problemType)
				: ClassFactory.Get<IMLModelBuilder>(name: null);
		}

		private bool CheckBatchFrequency(IDataReader reader, UserConnection userConnection) {
			var now = DateTime.UtcNow;
			DateTime predictedOn = reader.GetColumnValue<DateTime>("BatchPredictedOn");
			if (predictedOn != default(DateTime)) {
				DateTime plannedDate = predictedOn + _minimalBatchPredictionInterval;
				if (plannedDate > now) {
					return false;
				}
			}
			MaintenanceWindowUtils maintenanceWindowUtils = GetMaintenanceWindowUtils(userConnection);
			return maintenanceWindowUtils.IsDateInMaintenanceWindow(now);
		}

		private void AddCondition(Select select, QueryCondition condition) {
			if (select.Condition.Count > 0) {
				condition.LogicalOperation = LogicalOperation.And;
				select.Condition.Add(condition);
			} else {
				select.Where(condition);
			}
		}

		private IList<MLModelConfig> LoadModels(UserConnection userConnection, bool enabledForPredictionOnly,
				bool useAutoBatchMode, IList<Guid> modelIds = null, bool safe = false) {
			userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var select = GetModelBaseSelectQuery(userConnection);
			var mlModelConfigs = new List<MLModelConfig>();
			if (enabledForPredictionOnly) {
				select
					.Where("PredictionEnabled").IsEqual(Column.Parameter(true, "Boolean"))
					.And(Func.Len("ModelInstanceUId")).IsGreater(Column.Const(0))
					.And(Func.Len("ServiceUrl")).IsGreater(Column.Const(0));
			}
			if (modelIds != null) {
				var condition = new QueryCondition(QueryConditionType.In) {
					LeftExpression = new QueryColumnExpression("m", "Id")
				};
				condition.RightExpressions.AddExpressionsRange(Column.Parameters(modelIds));
				AddCondition(select, condition);
			}
			if (useAutoBatchMode) {
				var condition = new QueryCondition(QueryConditionType.Equal) {
					LeftExpression = new QueryColumnExpression("m", "BatchPredictionStartMethodId")
				};
				condition.RightExpressions.Add(Column.Parameter(new Guid(MLConsts.MaintenanceWindowStartMethod)));
				AddCondition(select, condition);
			}
			select.ExecuteReader(reader => {
				if (useAutoBatchMode && !CheckBatchFrequency(reader, userConnection)) {
					return;
				}
				try {
					MLModelConfig modelConfig = FetchModelConfig(userConnection, reader,
						forPrediction: enabledForPredictionOnly);
					mlModelConfigs.Add(modelConfig);
				} catch (Exception e) {
					_log.Error($"Failed to load model {reader.GetColumnValue<Guid>("Id")}. Exception is {e}");
					if (!safe) {
						throw;
					}
				}
				
			});
			return mlModelConfigs;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads all ML models without prefiltration.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="safe">Ignore loading exceptions.</param>
		/// <returns>List of ML models.</returns>
		public IList<MLModelConfig> LoadAllModels(UserConnection userConnection, bool safe = false) {
			return LoadModels(userConnection, false, false, safe: safe);
		}

		/// <summary>
		/// Loads ML models for batch prediction.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <returns>List of enabled and ready for batch prediction models.</returns>
		public IList<MLModelConfig> LoadModelsForBatchPrediction(UserConnection userConnection) {
			return LoadModels(userConnection, true, true);
		}

		/// <summary>
		/// Loads enabled set of ML models.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelIds">The model ids.</param>
		/// <returns>List of enabled and ready for prediction models.</returns>
		public IList<MLModelConfig> LoadEnabledModels(UserConnection userConnection, IList<Guid> modelIds) {
			return LoadModels(userConnection, true, false, modelIds);
		}

		/// <summary>
		/// Tries to load the model by its id.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">Identifier of the model.</param>
		/// <param name="model">Loaded model.</param>
		/// <returns><c>true</c> - if model successfully loaded, otherwise - <c>false</c>.</returns>
		public bool TryLoadModel(UserConnection userConnection, Guid modelId, out MLModelConfig model) {
			var models =  LoadModels(userConnection, false, false, new List<Guid> { modelId });
			model = models.FirstOrDefault();
			return model != null;
		}

		/// <summary>
		/// Tries to load the model for prediction by its id.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="model">The model.</param>
		/// <returns><c>true</c> - if model successfully loaded, otherwise - <c>false</c>.</returns>
		public bool TryLoadModelForPrediction(UserConnection userConnection, Guid modelId, out MLModelConfig model) {
			userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var select = (Select)GetModelBaseSelectQuery(userConnection)
				.Where("m", "Id").IsEqual(Column.Parameter(modelId, "Guid"));
			MLModelConfig modelConfig = null;
			select.ExecuteReader(reader => {
				bool isPredictionEnabled = reader.GetColumnValue<bool>("PredictionEnabled");
				if (!isPredictionEnabled) {
					_log.WarnFormat("Prediction is not enabled for model with id {0}", modelId);
					return;
				}
				string modelInstanceUId = reader.GetColumnValue<string>("ModelInstanceUId");
				if (modelInstanceUId.IsNullOrEmpty()) {
					_log.WarnFormat("Instance uid is not set for model with id {0}", modelId);
					return;
				}
				modelConfig = FetchModelConfig(userConnection, reader, forPrediction: true);
			});
			model = modelConfig;
			return model != null;
		}

		/// <summary>
		/// Loads the ml model config by id with fields needed for training.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="modelId">The model identifier.</param>
		/// <returns>Loaded model.</returns>
		public MLModelConfig LoadModelForTraining(UserConnection userConnection, Guid modelId) {
			userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var select = (Select)GetModelBaseSelectQuery(userConnection)
				.Column("m", "TrainingMinimumRecordsCount")
				.Column("m", "TrainingMaxRecordsCount")
				.Column("m", "TrainSessionId")
				.Column("m", "MetricThreshold")
				.Column("m", "TrainingOutputFilterData")
				.Where("m", "Id").IsEqual(Column.Parameter(modelId, "Guid"));
			MLModelConfig modelConfig = null;
			select.ExecuteReader(reader => {
				modelConfig = FetchModelConfig(userConnection, reader);
				SetupTrainingInfo(userConnection, modelConfig, reader);
			});
			return modelConfig;
		}

		/// <summary>
		/// Loads the ready for training models on the check point date.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="checkPoint">The check point.</param>
		/// <returns>List of models.</returns>
		public virtual IList<MLModelConfig> LoadReadyForTrainingModels(UserConnection userConnection,
				DateTime checkPoint) {
			userConnection.LicHelper.CheckHasOperationLicense(MLConsts.LicOperationCode);
			var mlModelConfigs = new List<MLModelConfig>();
			object[] needToTrainModelStates = {
				TrainSessionState.NotStarted.ToString(),
				TrainSessionState.Done.ToString(),
				TrainSessionState.Error.ToString()
			};
			var select = (Select)GetModelBaseSelectQuery(userConnection)
				.Column("m", "TrainFrequency")
				.Column("m", "TriedToTrainOn")
				.Column("m", "TrainingMinimumRecordsCount")
				.Column("m", "TrainingMaxRecordsCount")
				.Column("m", "TrainSessionId")
				.Column("m", "MetricThreshold")
				.Column("m", "TrainingOutputFilterData")
				.Where(Func.Len("ServiceUrl")).IsGreater(Column.Const(0))
				.And("TrainFrequency").IsGreater(Column.Const(0))
				.And("s", "Code").In(Column.Parameters(needToTrainModelStates));
			select.ExecuteReader(reader => {
				DateTime triedToTrainOn = reader.GetColumnValue<DateTime>("TriedToTrainOn");
				int trainFrequencyDays = reader.GetColumnValue<int>("TrainFrequency");
				Guid modelId = reader.GetColumnValue<Guid>("Id");
				if (triedToTrainOn != default(DateTime)) {
					DateTime plannedDate = triedToTrainOn.AddDays(trainFrequencyDays);
					if (plannedDate > checkPoint) {
						_log.DebugFormat("Training for model id '{0}' not started. PlannedDate is {1}.",
							modelId, plannedDate);
						return;
					}
				}
				MLModelConfig modelConfig = FetchModelConfig(userConnection, reader);
				SetupTrainingInfo(userConnection, modelConfig, reader);
				mlModelConfigs.Add(modelConfig);
			});
			return mlModelConfigs;
		}

		/// <summary>
		/// Loads the model metadata captions. Sets enriched metadata to <see cref="MLModelConfig.MetaData"/> property.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="model">Loaded model.</param>
		public void LoadModelMetadataCaptions(UserConnection userConnection, MLModelConfig model) {
			if (model.MetaData.IsNullOrEmpty()) {
				return;
			}
			ModelSchemaMetadata metadata = model.GetModelSchemaMetadata();
			if (metadata.Inputs.IsNullOrEmpty() && metadata.Output == null) {
				return;
			}
			var modelSchema = userConnection.EntitySchemaManager.GetInstanceByName("MLModel");
			var modelEntity = modelSchema.CreateEntity(userConnection);
			modelEntity.PrimaryColumnValue = model.Id;
			if (!modelEntity.FetchFromDB(new[] { "MetaDataLcz" }, false)) {
				return;
			}
			string serializedMetadataLcz = modelEntity.GetTypedColumnValue<string>("MetaDataLcz");
			if (serializedMetadataLcz.IsNullOrEmpty()) {
				return;
			}
			ModelSchemaMetadata metaDataLcz;
			try {
				metaDataLcz = JsonConvert.DeserializeObject<ModelSchemaMetadata>(serializedMetadataLcz);
			} catch (Exception e) {
				_log.Warn($"Can't localize metadata for {model.Id}, because MetaDataLcz has incorrect format: " +
					serializedMetadataLcz, e);
				return;
			}
			metadata.Inputs?.ForEach(input => {
				var inputLcz = metaDataLcz.Inputs.Find(schemaInput => schemaInput.Name == input.Name);
				if (inputLcz == null) {
					return;
				}
				input.Caption = inputLcz.Caption;
			});
			if (metadata.Output != null) {
				metadata.Output.Caption = metaDataLcz.Output?.Caption;
			}
			model.MetaData = JsonConvert.SerializeObject(metadata, Formatting.Indented);
		}

		#endregion

	}

	#endregion

}

