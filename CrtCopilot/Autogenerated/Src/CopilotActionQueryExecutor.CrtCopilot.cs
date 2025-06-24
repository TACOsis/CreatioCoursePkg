namespace Creatio.Copilot
{
	using Creatio.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: CopilotActionQueryExecutor

	/// <summary>
	/// Represents a query executor for the CopilotAction schema.
	/// </summary>
	[DefaultBinding(typeof(IEntityQueryExecutor), Name = nameof(CopilotActionQueryExecutor))]
	public class CopilotActionQueryExecutor : BaseCopilotSchemaManagerQueryExecutor<CopilotActionMetaItem>
	{

		#region Constants: Private

		private const string SchemaName = "CopilotAction";
		private const string CacheKey = "IntentsInActionsCache";
		private const string MetaItemName = "Action";

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotActionQueryExecutor"/> class.
		/// </summary>
		/// <param name="userConnection">An instance of the <see cref="UserConnection"/> type.</param>
		public CopilotActionQueryExecutor(UserConnection userConnection)
				: base(userConnection, SchemaName, CacheKey, MetaItemName) {
		}

		#endregion

		#region Methods: Protected

		/// <inheritdoc />
		protected override Entity GetMetaItemEntityFromSchema(CopilotIntentSchema intentSchema,
				CopilotActionMetaItem metaItem) {
			Entity entity = EntitySchema.CreateEntity(UserConnection);
			var descriptor = metaItem.Descriptor;
			entity.LoadColumnValue("Id", metaItem.UId);
			entity.LoadColumnValue("Code", metaItem.Name);
			entity.LoadColumnValue("Name", descriptor.Caption);
			entity.LoadColumnValue("Description", descriptor.Description);
			entity.LoadColumnValue("IntentId", metaItem.IntentSchema.UId);
			entity.LoadColumnValue("ActionTypeId", metaItem.ActionTypeSchema.UId);
			return entity;
		}

		/// <inheritdoc />
		protected override MetaItemCollection<CopilotActionMetaItem> GetMetaItemCollectionFromSchema(
				CopilotIntentSchema schema) {
			return schema.Actions;
		}

		#endregion

	}

	#endregion

}

