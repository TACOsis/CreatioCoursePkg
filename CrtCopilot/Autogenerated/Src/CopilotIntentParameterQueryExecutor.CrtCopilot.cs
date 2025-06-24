namespace Creatio.Copilot
{
	using System.Linq;
	using Creatio.Copilot.Metadata;
	using Terrasoft.AppFeatures;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using IntentParameter = CopilotIntentParameterQueryExecutor.IntentSchemaParameterWithSourceInfo;
	
	#region Class: CopilotIntentParameterQueryExecutor

	/// <summary>
	/// Represents a query executor for the CopilotIntentParameter schema.
	/// </summary>
	[DefaultBinding(typeof(IEntityQueryExecutor), Name = nameof(CopilotIntentParameterQueryExecutor))]
	public class CopilotIntentParameterQueryExecutor: BaseCopilotSchemaManagerQueryExecutor<IntentParameter>
	{

		#region Class: CopilotIntentSchemaParameterWithDirection

		/// <summary>
		/// Intent schema parameter with source collection information.
		/// </summary>
		public class IntentSchemaParameterWithSourceInfo: CopilotIntentSchemaParameter
		{

			#region Properties: Public

			/// <summary>
			/// Source collection.
			/// </summary>
			public string SourceCollection { get; private set; }

			#endregion

			#region Constructors: Public

			/// <summary>
			/// Initializes a new instance of the <see cref="IntentSchemaParameterWithSourceInfo"/> class.
			/// </summary>
			/// <param name="parameter">Parameter to initialize with.</param>
			/// <param name="sourceCollection">Source collection value.</param>
			public IntentSchemaParameterWithSourceInfo(CopilotIntentSchemaParameter parameter, string sourceCollection)
					: base(parameter) {
				SourceCollection = sourceCollection;
			}

			#endregion

		}

		#endregion

		#region Class: ParameterFilteringContext

		/// <summary>
		/// Represents a filtering context for the CopilotIntentParameter schema.
		/// </summary>
		private class ParameterFilteringContext : CopilotSchemaManagerQueryExecutorFilteringContext
		{

			#region Properties: Public

			/// <summary>
			/// Source collection.
			/// </summary>
			public string SourceCollection { get; set; }

			#endregion

		}

		#endregion

		#region Constants: Private

		private const string SchemaName = "CopilotIntentParameter";
		private const string CacheKey = "IntentsInParametersCache";
		private const string MetaItemName = "Parameter";

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotIntentParameterQueryExecutor"/> class.
		/// </summary>
		/// <param name="userConnection">An instance of the <see cref="UserConnection"/> type.</param>
		public CopilotIntentParameterQueryExecutor(UserConnection userConnection)
				: base(userConnection, SchemaName, CacheKey, MetaItemName) {
		}

		#endregion

		#region Methods: Private

		/// <inheritdoc />
		protected override MetaItemCollection<IntentSchemaParameterWithSourceInfo> GetMetaItemCollectionFromSchema(
				CopilotIntentSchema schema) {
			var parameters = new MetaItemCollection<IntentSchemaParameterWithSourceInfo>();
			parameters.AddRange(schema.InputParameters.Select(s =>
				new IntentSchemaParameterWithSourceInfo(s, nameof(schema.InputParameters))));
			parameters.AddRange(schema.OutputParameters.Select(s => 
				new IntentSchemaParameterWithSourceInfo(s, nameof(schema.OutputParameters))));
			return parameters;
		}

		/// <inheritdoc />
		protected override Entity GetMetaItemEntityFromSchema(CopilotIntentSchema intentSchema,
				IntentParameter parameter) {
			Entity entity = EntitySchema.CreateEntity(UserConnection);
			entity.LoadColumnValue("Id", parameter.UId);
			entity.LoadColumnValue("Code", parameter.Name);
			entity.LoadColumnValue("Name", parameter.Caption);
			entity.LoadColumnValue("Description", parameter.Description);
			entity.LoadColumnValue("IntentId", intentSchema.UId);
			entity.LoadColumnValue("SourceCollection", parameter.SourceCollection);
			entity.LoadColumnValue("DataValueTypeUId", parameter.DataValueTypeUId);
			return entity;
		}

		/// <inheritdoc />
		protected override CopilotSchemaManagerQueryExecutorFilteringContext CreateFilteringContext() {
			return new ParameterFilteringContext();
		}

		/// <inheritdoc />
		protected override void FillFilterContextFromFilter(QueryFilterInfo filter,
				CopilotSchemaManagerQueryExecutorFilteringContext context) {
			base.FillFilterContextFromFilter(filter, context);
			const string columnPath = "SourceCollection";
			if (filter.GetIsSingleColumnValueEqualsFilter(columnPath, out string sourceCollection)) {
				((ParameterFilteringContext)context).SourceCollection = sourceCollection;
			}
		}

		/// <inheritdoc />
		protected override bool GetIsSuitableMetaItem(IntentParameter metaItem,
				CopilotSchemaManagerQueryExecutorFilteringContext context) {
			var parameterFilteringContext = (ParameterFilteringContext)context;
			return base.GetIsSuitableMetaItem(metaItem, context) &&
			       (parameterFilteringContext.SourceCollection.IsNullOrEmpty() ||
			        metaItem.SourceCollection == parameterFilteringContext.SourceCollection);
		}

		#endregion

	}

	#endregion

}
