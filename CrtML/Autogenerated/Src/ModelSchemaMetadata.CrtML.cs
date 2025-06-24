namespace Terrasoft.Configuration.ML
{
	using System.Collections.Generic;
	using System.Diagnostics;
	using System.Runtime.Serialization;
	using Newtonsoft.Json.Linq;

	#region Class: ModelSchemaColumn

	/// <summary>
	/// Describes a column within a dataset.
	/// </summary>
	[DataContract]
	[DebuggerDisplay("{Name}")]
	public class ModelSchemaColumn
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets column name.
		/// </summary>
		[DataMember(Name = "name", IsRequired = true)]
		public string Name { get; set; }

		/// <summary>
		/// Gets or sets column display name.
		/// This column is expected to be the same as <see cref="Name"/> column, but with human-readable names.
		/// This may only make sense for columns of type "Lookup" and "Boolean".
		/// </summary>
		[DataMember(Name = "displayName", IsRequired = false)]
		public string DisplayName { get; set; }

		/// <summary>
		/// Gets or sets column's caption.
		/// </summary>
		[DataMember(Name = "caption", IsRequired = false)]
		public string Caption { get; set; }

		/// <summary>
		/// Gets or sets column's reference schema name.
		/// </summary>
		[DataMember(Name = "referenceSchemaName", IsRequired = false)]
		public string ReferenceSchemaName { get; set; }

		/// <summary>
		/// Gets or sets the transform operations.
		/// </summary>
		/// <value>
		/// The transformations.
		/// </value>
		[DataMember(Name = "transformations", IsRequired = false)]
		public List<ModelSchemaColumnTransformation> Transformations { get; set; }

		#endregion

	}

	#endregion

	#region Class: ModelSchemaColumnTransformation

	/// <summary>
	/// Describes a column value transform operation.
	/// </summary>
	[DataContract]
	public class ModelSchemaColumnTransformation
	{

		#region Properties: Public


		/// <summary>
		/// Gets or sets the operation.
		/// </summary>
		/// <value>
		/// The operation.
		/// </value>
		[DataMember(Name = "operation", IsRequired = true)]
		public string Operation { get; set; }


		/// <summary>
		/// Gets or sets the transform arguments.
		/// </summary>
		/// <value>
		/// The arguments.
		/// </value>
		[DataMember(Name = "arguments", IsRequired = false)]
		public List<string> Arguments { get; set; }

		#endregion

	}

	#endregion

	#region Class: ModelSchemaInput

	/// <summary>
	/// Describes a column within a dataset to be used as model input.
	/// </summary>
	[DataContract]
	[DebuggerDisplay("Name = {Name}; Type = {Type}")]
	public class ModelSchemaInput : ModelSchemaColumn
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets column data type.
		/// Allowed values are: "Boolean", "Numeric", "Text", "Lookup", "DateTime".
		/// </summary>
		[DataMember(Name = "type", IsRequired = false)]
		public string Type { get; set; }

		/// <summary>
		/// Indicates whether model should expect this column may be <c>null</c> or <see cref="double.NaN"/>.
		/// Currently, this parameter is ignored.
		/// </summary>
		[DataMember(Name = "isRequired", IsRequired = false)]
		public bool IsRequired { get; set; }

		/// <summary>
		/// Indicates that the current input is not in use.
		/// </summary>
		[DataMember(Name = "isIgnored", IsRequired = false)]
		public bool IsIgnored { get; set; }

		#endregion

	}

	#endregion

	#region Class: ModelSchemaOutput

	/// <summary>
	/// Describes a column within a dataset, which should be used as predicted.
	/// </summary>
	[DataContract]
	public class ModelSchemaOutput : ModelSchemaColumn
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets column data type.
		/// Allowed values are: "Boolean", "Numeric", "Lookup".
		/// </summary>
		[DataMember(Name = "type", IsRequired = false)]
		public string Type { get; set; }

		#endregion

	}

	#endregion

	/// <summary>
	/// Describes parameters of model schema.
	/// </summary>
	[DataContract]
	public class ModelSchemaParams
	{

		/// <summary>
		/// Parameters of model training algorithm.
		/// </summary>
		[DataMember(Name = "fit", IsRequired = false)]
		public JObject Fit { get; set; }
		
		/// <summary>
		/// Feature importance params.
		/// </summary>
		[DataMember(Name = "feature_importance", IsRequired = false, EmitDefaultValue = false)]
		public FeatureImportanceParams Importance { get; set; }
	}

	/// <summary>
	/// Describes parameters of recommendation model training algorithm.
	/// </summary>
	[DataContract]
	public class RecommendationModelFitParams
	{

		/// <summary>
		/// Variations of factors number. Each element makes algorithm
		/// use specified number of factors.
		/// </summary>
		[DataMember(Name = "factors", IsRequired = false)]
		public HashSet<int> Factors { get; set; }

		/// <summary>
		/// Same as <see cref="Factors"/> but for regularization param.
		/// </summary>
		[DataMember(Name = "regularizations", IsRequired = false)]
		public HashSet<double> Regularizations { get; set; }

		/// <summary>
		/// Quality metric type.
		/// </summary>
		[DataMember(Name = "metric_type", IsRequired = false)]
		public string MetricType { get; set; }
	}

	/// <summary>
	/// Describes parameters of rag model training algorithm.
	/// </summary>
	[DataContract]
	public class RagModelFitParams
	{

		/// <summary>
		/// Gets or sets the overlap size for document chunks.
		/// </summary>
		[DataMember(Name = "chunk_overlap", IsRequired = false)]
		public int? DocumentChunkSizeOverlap { get; set; }

		/// <summary>
		/// Gets or sets the maximum size for document chunks.
		/// </summary>
		[DataMember(Name = "chunk_size", IsRequired = false)]
		public int? DocumentMaxChunkSize { get; set; }

		/// <summary>
		/// Gets or sets the prompt value for an LLM model.
		/// </summary>
		[DataMember(Name = "prompt", IsRequired = false)]
		public string LlmModelPrompt { get; set; }

		/// <summary>
		/// Gets or sets the temperature value for an LLM model.
		/// </summary>
		[DataMember(Name = "temperature", IsRequired = false)]
		public double? LlmModelTemperature { get; set; }

		/// <summary>
		/// Gets or sets the API key for OpenAI services.
		/// </summary>
		[DataMember(Name = "openai_api_key", IsRequired = false)]
		public string OpenaiApiKey { get; set; }

		/// <summary>
		///  Gets or sets the name of the LLM model.
		/// </summary>
		[DataMember(Name = "llm_model_name", IsRequired = false)]
		public string LlmModelName { get; set; }
	}

	/// <summary>
	/// Describes parameters of model training feature importance.
	/// </summary>
	[DataContract]
	public class FeatureImportanceParams
	{

		/// <summary>
		/// Number of top important words for text features.
		/// </summary>
		[DataMember(Name = "top_important_words_count", IsRequired = false, EmitDefaultValue = false)]
		public int TopImportantWordsCount { get; set; }
	}

	#region Class: ModelSchemaMetadata

	/// <summary>
	/// Describes the data set for model to be fitted.
	/// </summary>
	[DataContract]
	public class ModelSchemaMetadata
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets columns within a dataset to be used as model inputs.
		/// </summary>
		[DataMember(Name = "inputs", IsRequired = false)]
		public List<ModelSchemaInput> Inputs { get; set; }

		/// <summary>
		/// Gets or sets a column within a dataset, which should be used as predicted.
		/// </summary>
		[DataMember(Name = "output", IsRequired = false)]
		public ModelSchemaOutput Output { get; set; }

		[DataMember(Name = "params", IsRequired = false)]
		public ModelSchemaParams Params { get; set; }

		#endregion

	}

	#endregion

}

