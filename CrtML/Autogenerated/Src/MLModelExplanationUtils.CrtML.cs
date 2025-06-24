namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Diagnostics;
	using System.Runtime.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.ML.Interfaces;
	using Terrasoft.Nui.ServiceModel.DataContract;
	using EntitySchema = Terrasoft.Core.Entities.EntitySchema;
	using EntitySchemaColumn = Terrasoft.Core.Entities.EntitySchemaColumn;

	#region Class: LocalizedFeatureWeight

	/// <summary>
	/// ML model feature weight with localized column value and caption.
	/// </summary>
	[DataContract]
	[DebuggerDisplay("Name = {Name}; Value = {Value}; Weight = {Weight}")]
	public class LocalizedFeatureWeight
	{

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="LocalizedFeatureWeight"/> class.
		/// </summary>
		public LocalizedFeatureWeight() {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="LocalizedFeatureWeight"/> class by the given
		/// <see cref="ScoringOutput.FeatureContribution"/>.
		/// </summary>
		/// <param name="featureContribution">The feature contribution.</param>
		public LocalizedFeatureWeight(ScoringOutput.FeatureContribution featureContribution) {
			Name = featureContribution.Name;
			Value = featureContribution.Value;
			Weight = featureContribution.Contribution;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="LocalizedFeatureWeight"/> class by the given
		/// <see cref="ModelSummary.FeatureImportance"/>.
		/// </summary>
		/// <param name="featureImportance"></param>
		public LocalizedFeatureWeight(ModelSummary.FeatureImportance featureImportance) {
			Name = featureImportance.Name;
			Weight = featureImportance.Importance;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Gets or sets the name of the feature.
		/// </summary>
		[DataMember(Name = "name")]
		public string Name { get; set; }

		/// <summary>
		/// Gets or sets the caption of the feature.
		/// </summary>
		[DataMember(Name = "caption", EmitDefaultValue = false)]
		public string Caption { get; set; }

		/// <summary>
		/// Gets or sets the weight of the feature.
		/// </summary>
		[DataMember(Name = "weight")]
		public double Weight { get; set; }

		/// <summary>
		/// Gets or sets the value.
		/// </summary>
		[DataMember(Name = "value", EmitDefaultValue = false)]
		public string Value { get; set; }

		/// <summary>
		/// Gets or sets the display value of the feature.
		/// </summary>
		[DataMember(Name = "displayValue", EmitDefaultValue = false)]
		public string DisplayValue { get; set; }

		#endregion

	}

	#endregion

	#region Class: MLModelExplanationUtils

	/// <summary>
	/// Class that helps with machine learning model explanation tasks.
	/// </summary>
	public static class MLModelExplanationUtils
	{

		#region Methods: Private

		private static void FillDisplayValues(UserConnection userConnection, List<LocalizedFeatureWeight> features,
				Dictionary<string, ColumnExpression> columnExpressionMapping, Guid entitySchemaId,
				ModelSchemaMetadata metadata) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(entitySchemaId);
			foreach (var input in metadata.Inputs) {
				var feature = features.Find(featureWeight => featureWeight.Name == input.Name);
				if (feature == null) {
					continue;
				}
				bool isBooleanValue = input.Type == "Boolean" || input.Transformations != null
					&& input.Transformations.Exists(transformation => transformation.Operation == "isNotNull");
				if (isBooleanValue) {
					FillBooleanDisplayValue(userConnection, feature);
					continue;
				}
				if (input.Type != "Lookup") {
					continue;
				}
				FillLookupDisplayValue(userConnection, columnExpressionMapping, feature, input, schema);
			}
		}

		private static void FillBooleanDisplayValue(UserConnection userConnection, LocalizedFeatureWeight feature) {
			bool booleanValue = feature.Value == "1" ||
				bool.TryParse(feature.Value, out var parsedBoolValue) && parsedBoolValue;
			string booleanResourceName = booleanValue ? "True" : "False";
			feature.DisplayValue = new LocalizableString(userConnection.ResourceStorage, "MLModelExplanationUtils",
				$"LocalizableStrings.{booleanResourceName}.Value");
		}

		private static void FillLookupDisplayValue(UserConnection userConnection,
				Dictionary<string, ColumnExpression> columnExpressionMapping, LocalizedFeatureWeight feature,
				ModelSchemaInput input, EntitySchema schema) {
			if (!Guid.TryParse(feature?.Value, out Guid id)) {
				return;
			}
			EntitySchema referenceSchema;
			if (input.ReferenceSchemaName.IsNullOrEmpty()) {
				if (!columnExpressionMapping.TryGetValue(input.Name, out ColumnExpression columnExpression)) {
					return;
				}
				EntitySchemaColumn column = schema.FindSchemaColumnByPath(columnExpression.ColumnPath);
				if (column == null || !column.IsLookupType || column.ReferenceSchema == null) {
					return;
				}
				referenceSchema = column.ReferenceSchema;
			} else {
				referenceSchema = userConnection.EntitySchemaManager.FindInstanceByName(input.ReferenceSchemaName);
			}
			if (referenceSchema == null) {
				return;
			}
			Entity lookupEntity = referenceSchema.CreateEntity(userConnection);
			if (!lookupEntity.FetchPrimaryInfoFromDB(referenceSchema.PrimaryColumn, id)) {
				return;
			}
			feature.DisplayValue = lookupEntity.PrimaryDisplayColumnValue;
		}

		private static void FillCaptions(UserConnection userConnection, List<LocalizedFeatureWeight> features,
				Dictionary<string, ColumnExpression> columnExpressionMapping, Guid entitySchemaId,
				ModelSchemaMetadata metadata) {
			foreach (LocalizedFeatureWeight feature in features) {
				if (!columnExpressionMapping.ContainsKey(feature.Name)) {
					continue;
				}
				if (columnExpressionMapping[feature.Name] is MLColumnExpression columnExpression) {
					if (columnExpression.Caption.IsNotNullOrEmpty()) {
						feature.Caption = columnExpression.Caption;
						continue;
					}
					feature.Caption = GetSchemaColumnFullCaption(userConnection, entitySchemaId,
						columnExpression.ColumnPath);
				}
			}
			FillCaptionsFromMetadata(features, metadata);
		}

		private static void FillCaptionsFromMetadata(IEnumerable<LocalizedFeatureWeight> features,
				ModelSchemaMetadata metadata) {
			if (metadata?.Inputs == null) {
				return;
			}
			features.ForEach(feature => feature.Caption.IsNullOrEmpty(), feature => {
				var metadataItem = metadata.Inputs.Find(input => input.Name == feature.Name);
				feature.Caption = metadataItem?.Caption;
			});
		}

		private static string GetSchemaColumnFullCaption(UserConnection userConnection, Guid rootSchemaUId,
				string columnPath) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(rootSchemaUId);
			return schema.GetSchemaColumnFullCaptionByPath(columnPath);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Sets human-readable localized captions and display values for feature weights.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="features">The features.</param>
		/// <param name="modelId">The model identifier.</param>
		/// <param name="isPrediction"><c>true</c> if it's for prediction, false - for training.</param>
		public static void LocalizeFeatures(UserConnection userConnection, List<LocalizedFeatureWeight> features,
				Guid modelId, bool isPrediction) {
			IMLModelLoader loader = ClassFactory.Get<IMLModelLoader>();
			if (!loader.TryLoadModel(userConnection, modelId, out MLModelConfig model)) {
				return;
			}
			loader.LoadModelMetadataCaptions(userConnection, model);
			var modelQueryBuilder = ClassFactory.Get<IMLModelQueryBuilder>(
				new ConstructorArgument("userConnection", userConnection));
			var query = isPrediction ? model.BatchPredictionQuery : model.TrainingSetQuery;
			var entitySchemaId = isPrediction ? model.PredictionEntitySchemaId : model.EntitySchemaId;
			var columnExpressions = isPrediction ? model.GetPredictionColumnExpressions() : model.ColumnExpressions;
			var select = modelQueryBuilder.BuildSelect(entitySchemaId, query, columnExpressions);
			IMLMetadataGenerator metadataGenerator = ClassFactory.Get<IMLMetadataGenerator>();
			var metadata = metadataGenerator.GenerateMetadata(select, model.MetaData, fillColumnsInfo: true);
			var columnExpressionMapping = modelQueryBuilder.GetColumnExpressionMapping(entitySchemaId,
				query, columnExpressions);
			FillCaptions(userConnection, features, columnExpressionMapping, entitySchemaId, metadata);
			FillDisplayValues(userConnection, features, columnExpressionMapping, entitySchemaId, metadata);
		}

		#endregion

	}

	#endregion

}

