namespace Creatio.Copilot
{
	using System.Linq;
	using Terrasoft.AppFeatures;
	using Terrasoft.Configuration.GenAI;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;

	#region Class:CopilotClientQuotaQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "CopilotClientQuotaQueryExecutor")]
	public class CopilotClientQuotaQueryExecutor : BaseQueryExecutor, IEntityQueryExecutor
	{

		#region Fields: Private

		private readonly string _entitySchemaName = "CopilotClientQuota";
		private readonly IGenAICompletionServiceProxy _completionService;

		#endregion

		#region Constructors: Public

		public CopilotClientQuotaQueryExecutor(UserConnection userConnection,
				IGenAICompletionServiceProxy completionService) : base(userConnection, "CopilotClientQuota") {
			_completionService = completionService;
		}

		#endregion

		#region Properties: Private

		private EntitySchema CopilotClientQuotaEntitySchema =>
			UserConnection.EntitySchemaManager.GetInstanceByName(_entitySchemaName);

		#endregion

		#region Methods: Private

		private Entity CreateCopilotClientQuotaEntity(ClientQuotaResponse data, EntitySchemaQuery esq) {
			const string tokensAvailableColumnName = "TokensAvailable";
			long? tokensAvailableColumnValue = data.TotalTokensQuota?.Limit == -1
				? data.TotalTokensQuota?.Limit
				: data.TotalTokensQuota?.Limit - data.TotalTokensQuota?.SubscriptionUsage;
			Entity entity = CopilotClientQuotaEntitySchema.CreateEntity(UserConnection);
			entity.SetColumnValue("TokensLimit", data.TotalTokensQuota?.Limit);
			entity.SetColumnValue("TokensUsage", data.TotalTokensQuota?.SubscriptionUsage);
			entity.SetColumnValue(tokensAvailableColumnName, tokensAvailableColumnValue);
			EntitySchemaQueryColumn aggregationColumn = esq.Columns.FirstOrDefault(c =>
				c.IsAggregated && (c.ValueExpression?.Function as EntitySchemaAggregationQueryFunction)?.Expression?.Path == tokensAvailableColumnName);
			if (aggregationColumn != null) {
				if (entity.Schema.Columns.FindByColumnValueName(aggregationColumn.Name) == null) {
					entity.Schema.AddColumn("Integer", aggregationColumn.Name);
				}
				entity.ForceSetColumnValue(aggregationColumn.Name, entity.GetColumnValue(tokensAvailableColumnName));
			}
			return entity;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns client quota information.
		/// </summary>
		/// <param name="esq">Filters.</param>
		/// <returns>Quota data collection.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			ClientQuotaResponse data = _completionService.GetClientQuotaByClientId();
			Entity entity = CreateCopilotClientQuotaEntity(data, esq);
			var collection = new EntityCollection(UserConnection, EntitySchema) {
				entity
			};
			return collection;
		}

		#endregion

	}

	#endregion

}

