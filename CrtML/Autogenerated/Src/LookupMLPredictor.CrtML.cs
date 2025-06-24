namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;

	#region Class: LookupMLPredictor

	/// <summary>
	/// Predicts lookup field value by entity fields.
	/// </summary>
	public class LookupMLPredictor
	{

		#region Class: MapItem

		private class ColumnMapItem
		{

			#region Properties: Public

			public string Path { get; set; }

			public string Alias { get; set; }

			#endregion

		}

		#endregion

		#region Consts: Public

		private const string HighSignificance = "High";

		#endregion

		#region Fields: Protected

		protected readonly UserConnection _userConnection;
		private static readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets or sets the model id. By default inits by LoadModelData method.
		/// </summary>
		/// <value>
		/// The model id.
		/// </value>
		public Guid ModelId { get; private set; }

		/// <summary>
		/// Gets or sets the model instance id. By default inits by LoadModelData method.
		/// </summary>
		/// <value>
		/// The model instance identifier.
		/// </value>
		public Guid ModelInstanceUId { get; set; }

		/// <summary>
		/// Gets or sets prediction service url linked with model. By default inits by LoadModelData method.
		/// </summary>
		/// <value>
		/// The prediction service url.
		/// </value>
		public string ServiceUrl { get; set; }

		/// <summary>
		/// Gets or sets model prediction enabled flag.
		/// </summary>
		/// <value>
		/// Model predictions are enabled.
		/// </value>
		public bool ModelPredictionEnabled { get; private set; }

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="LookupMLPredictor"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public LookupMLPredictor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private Dictionary<string, object> GetPredictionInputData(Entity entity,
				List<ColumnMapItem> entityColumnPathMap) {
			var result = new Dictionary<string, object>();
			EntitySchema schema = entity.Schema;
			foreach (ColumnMapItem item in entityColumnPathMap) {
				var column = schema.FindSchemaColumnByPath(item.Path);
				object value = entity.GetColumnValue(column);
				result.Add(item.Alias, value);
			}
			return result;
		}

		private Entity LoadTargetEntity(string schemaName, Guid entityId, List<ColumnMapItem> entityColumnPathMap) {
			EntitySchema schema = _userConnection.EntitySchemaManager.GetInstanceByName(schemaName);
			var query = new EntitySchemaQuery(schema);
			query.PrimaryQueryColumn.IsVisible = true;
			foreach (ColumnMapItem mapItem in entityColumnPathMap) {
				var column = query.AddColumn(mapItem.Path);
				mapItem.Path = column.Name;
			}
			foreach (EntitySchemaColumn column in schema.Columns) {
				if (column == schema.PrimaryColumn || query.Columns.Any(item => item.Name == column.Name)) {
					continue;
				}
				query.AddColumn(column.Name);
			}
			return query.GetEntity(_userConnection, entityId);
		}

		private List<ClassificationResult> QueryPrediction(Dictionary<string, object> classifyData) {
			var apiKey = MLUtils.GetAPIKey(_userConnection);
			var serviceUrlArg = new ConstructorArgument("serviceUrl", ServiceUrl);
			var apiKeyArg = new ConstructorArgument("apiKey", apiKey);
			IMLServiceProxy proxy = ClassFactory.Get<IMLServiceProxy>(serviceUrlArg, apiKeyArg);
			List<ClassificationResult> classificationResults = null;
			try {
				classificationResults = proxy.Classify(ModelInstanceUId, classifyData);
			} catch (Exception e) {
				_log.ErrorFormat("Classification failed with error: {0}", e, e.Message);
			}
			return classificationResults;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Saves the predictions and updates column value if prediction is highly significant.
		/// </summary>
		/// <param name="entity">The entity.</param>
		/// <param name="results">The results.</param>
		/// <param name="targetColumnName">Name of the target column.</param>
		/// <param name="valueSelectorFunc">Function for select value from prediction list to be setted in target field.
		/// If <c>null</c> - high significance value will be selected.</param>
		protected virtual void SavePredictions(Entity entity, List<ClassificationResult> results,
				string targetColumnName,
				Func<IEnumerable<ClassificationResult>, ClassificationResult> valueSelectorFunc) {
			var connectionArg = new ConstructorArgument("userConnection", _userConnection);
			var saver = ClassFactory.Get<MLPredictionSaver>(connectionArg);
			saver.SavePrediction(ModelId, ModelInstanceUId, entity.PrimaryColumnValue, results);
			ClassificationResult highSignificanceValue = null;
			if (valueSelectorFunc != null) {
				highSignificanceValue = valueSelectorFunc(results);
			} else {
				highSignificanceValue = results.FirstOrDefault(result => result.Significance == HighSignificance);
			}
			if (highSignificanceValue == null) {
				_log.InfoFormat("No significant value detected for '{0}' with record id '{1}'",
					entity.Schema.Name, entity.PrimaryColumnValue);
				return;
			}
			_log.InfoFormat("Saving significant value '{2}' for '{0}' with record id '{1}'",
				entity.Schema.Name, entity.PrimaryColumnValue, highSignificanceValue.Value);
			EntitySchemaColumn targetColumn = entity.Schema.GetSchemaColumnByPath(targetColumnName);
			entity.SetColumnValue(targetColumn.ColumnValueName, new Guid(highSignificanceValue.Value));
			entity.Save(false);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Tries to load model data for prediction.
		/// </summary>
		/// <param name="modelId">The model id.</param>
		/// <returns><c>true</c> if model exists and ready for prediction.</returns>
		public virtual bool TryLoadModelDataForPrediction(Guid modelId) {
			var schema = _userConnection.EntitySchemaManager.GetInstanceByName("MLModel");
			var query = new EntitySchemaQuery(schema);
			var serviceUrlColumn = query.AddColumn("MLProblemType.ServiceUrl");
			query.AddColumn("ModelInstanceUId");
			query.AddColumn("PredictionEnabled");
			var entity = query.GetEntity(_userConnection, modelId);
			if (entity == null) {
				_log.InfoFormat("Model not found by id = '{0}'", modelId);
				return false;
			}
			ModelPredictionEnabled = entity.GetTypedColumnValue<bool>("PredictionEnabled");
			ServiceUrl = entity.GetTypedColumnValue<string>(serviceUrlColumn.Name);
			ModelInstanceUId = entity.GetTypedColumnValue<Guid>("ModelInstanceUId");
			ModelId = modelId;
			if (!ModelPredictionEnabled || ModelInstanceUId.Equals(Guid.Empty)) {
				_log.InfoFormat("Loaded model '{0}' disabled for predictions or not trained yet", modelId);
				return false;
			}
			return true;
		}

		/// <summary>
		/// Predicts the and save results to target entity record.
		/// </summary>
		/// <param name="schemaName">Name of the entity schema.</param>
		/// <param name="entityId">The entity record id.</param>
		/// <param name="inputColumnPathMap">The input columnPath to modelInputAlias map for prediction.</param>
		/// <param name="targetColumnName">Name of the target column.</param>
		/// <param name="valueSelectorFunc">Function for select value from prediction list to be setted in target field.
		/// If <c>null</c> - high significance value will be selected.</param>
		public virtual void PredictAndSaveResults(string schemaName, Guid entityId,
				Dictionary<string, string> inputColumnPathMap, string targetColumnName,
				Func<IEnumerable<ClassificationResult>, ClassificationResult> valueSelectorFunc = null) {
			var entityColumnPathMap = new List<ColumnMapItem>();
			inputColumnPathMap.ForEach(keyValue =>
				entityColumnPathMap.Add(new ColumnMapItem {
					Path = keyValue.Key,
					Alias = keyValue.Value
				}));
			Entity entity = LoadTargetEntity(schemaName, entityId, entityColumnPathMap);
			_log.InfoFormat("Query prediction for '{0}' with record id '{1}', target column '{2}'",
				entity.Schema.Name, entityId, targetColumnName);
			Dictionary<string, object> classifyData = GetPredictionInputData(entity, entityColumnPathMap);
			List<ClassificationResult> classificationResults = QueryPrediction(classifyData);
			if (classificationResults == null || classificationResults.Count == 0) {
				_log.InfoFormat("Prediction service for '{0}' with record id '{1}' returns nothing",
					entity.Schema.Name, entityId);
				return;
			}
			SavePredictions(entity, classificationResults, targetColumnName, valueSelectorFunc);
		}

		#endregion

	}

	#endregion

}

