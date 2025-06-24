namespace Terrasoft.Configuration.ML
{

	#region Class: MLConsts

	/// <summary>
	/// Constants for machine learning logic.
	/// </summary>
	public static class MLConsts
	{
		/// <summary>
		/// The sequence prediction problem type (MLProblemType).
		/// </summary>
		public const string SequencePredictionProblemType = "9727DC7D-3465-4868-AF37-3CCA953A1B6E";
		/// <summary>
		/// The classification problem type (MLProblemType).
		/// </summary>
		public const string ClassificationProblemType = "878EBE11-B0F3-43AE-88A5-E28C4F1DC4E3";
		/// <summary>
		/// The scoring problem type (MLProblemType).
		/// </summary>
		public const string ScoringProblemType = "183C45B3-F5FE-4EFD-B993-2106E5E6DFD5";
		/// <summary>
		/// Regression problem type (MLProblemType).
		/// </summary>
		public const string RegressionProblemType = "3170A242-49E3-4FD9-99ED-0D6317BDDA0A";
		/// <summary>
		/// Recommendation (CF) problem type (MLProblemType).
		/// </summary>
		public const string CollaborativeFiltering = "7A80C1FA-6AE3-4001-9E5E-AF07AEDDDD14";
		/// <summary>
		/// Text Similarity problem type (MLProblemType).
		/// </summary>
		public const string TextSimilarity = "AB660B9A-AB35-45F1-BE3A-5B383D6E5A6C";
		/// <summary>
		/// Retrieval Augmented Generation (RAG) problem type (MLProblemType).
		/// </summary>
		public const string RagProblemType = "F4F15D50-B3D1-4EDA-A2F3-91D5CD0D45C3";
		/// <summary>
		/// The maintenance window start method (MaintenanceWindow).
		/// </summary>
		public const string MaintenanceWindowStartMethod = "2C8DDF9A-C19C-42CB-B143-E988AB1AC0B5";

		/// <summary>
		/// The license operation code for predictive services.
		/// </summary>
		public const string LicOperationCode = "PredictiveService.Use";

		/// <summary>
		/// Key for cached client script made by <see cref="MLConfigurationScriptBuilder"/>.
		/// </summary>
		public const string PredictableEntitiesScriptKey = "MLPredictableEntities";

		/// <summary>
		/// Will be chosen the value with High significance defined by ML Engine (MLConfidentValueMethod).
		/// </summary>
		public const string MLEngineSignificanceConfidentValueMethodId = "5CE3F5DC-F541-4D6C-B7F8-819C33139B7F";

		/// <summary>
		/// Will be chosen the value with the maximum probability score (MLConfidentValueMethod).
		/// </summary>
		public const string MaxProbabilityConfidentValueMethodId = "3CB6325E-0ECF-45F9-B56B-1E950D1F629B";

		/// <summary>
		/// Model columns used for training.
		/// </summary>
		public const string ModelColumnTypeTraining = "4009205D-D3A6-4DFC-8CF4-449FCB91B930";

		/// <summary>
		/// Model columns used for prediction.
		/// </summary>
		public const string ModelColumnTypePrediction = "12263EBE-0694-4ECD-8362-36244733D00A";

		/// <summary>
		/// Default output column alias.
		/// </summary>
		public const string DefaultOutputColumnAlias = "Output__";
	}

	#endregion

}

