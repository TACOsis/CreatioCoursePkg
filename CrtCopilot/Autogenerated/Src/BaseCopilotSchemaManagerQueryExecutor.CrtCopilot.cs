namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.AppFeatures;
	using Terrasoft.Common;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core;
	using Terrasoft.Core.Store;

	#region Class: CopilotSchemaManagerQueryExecutorFilteringContext

	/// <summary>
	/// Filtering context for BaseCopilotSchemaManagerQueryExecutor.
	/// </summary>
	public class CopilotSchemaManagerQueryExecutorFilteringContext
	{

		#region Properties: Public

		/// <summary>
		/// Meta item unique identifier.
		/// </summary>
		public Guid MetaItemUId { get; set; }

		/// <summary>
		/// Intent unique identifier.
		/// </summary>
		public Guid IntentUId { get; set; }

		#endregion

	}

	#endregion

	#region Class: BaseCopilotSchemaManagerQueryExecutor

	/// <summary>
	/// Base class for query executor for copilot schema manager.
	/// </summary>
	/// <typeparam name="TMetaItem">Type of the meta item the inheritors should work with.</typeparam>
	public abstract class BaseCopilotSchemaManagerQueryExecutor<TMetaItem> : BaseQueryExecutor, IEntityQueryExecutor
			where TMetaItem: MetaItem {

		#region Fields: Private

		private readonly string _cacheKey;
		private readonly string _metaItemName;

		#endregion

		#region Properties: Protected

		private CopilotIntentSchemaManager _copilotIntentSchemaManager;
		/// <summary>
		/// Instance of the <see cref="CopilotIntentSchemaManager"/> type.
		/// </summary>
		protected CopilotIntentSchemaManager CopilotIntentSchemaManager =>
			_copilotIntentSchemaManager ?? (_copilotIntentSchemaManager =
				(CopilotIntentSchemaManager)UserConnection.GetSchemaManager(nameof(CopilotIntentSchemaManager)));

		#endregion

		#region Constructors: Protected

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseCopilotSchemaManagerQueryExecutor{TMetaItem}"/> class.
		/// </summary>
		/// <param name="userConnection">Instance of the <see cref="UserConnection"/> type.</param>
		/// <param name="schemaName">Schema name.</param>
		/// <param name="cacheKey">Cache key to use with the current executor.</param>
		/// <param name="metaItemName">Name of the meta item (used for exception messages).</param>
		protected BaseCopilotSchemaManagerQueryExecutor(UserConnection userConnection, string schemaName,
				string cacheKey, string metaItemName)
			: base(userConnection, schemaName) {
			_cacheKey = cacheKey;
			_metaItemName = metaItemName;
		}

		#endregion

		#region Methods: Private

		private static ICacheStore GetCacheStore(UserConnection userConnection) {
			return userConnection.SessionCache;
		}

		private static Guid GetIntentUIdByFilter(QueryFilterInfo filter) {
			const string columnPath = "[CopilotIntent:Id:Intent].Id";
			filter.GetIsSingleColumnValueEqualsFilter(columnPath, out Guid intentUId);
			return intentUId;
		}

		private Guid GetIntentUIdByMetaItemUIdFromCache(Guid metaItemUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.TryGetValue(metaItemUId, out Guid intentUId);
			return intentUId;
		}

		private void SetIntentUIdAndMetaItemUIdToCache(Guid metaItemUId, Guid intentUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.Add(metaItemUId, intentUId);
			SaveToCache(cachedData);
		}

		private Guid GetIntentUIdByMetaItemUIdFromManager(Guid metaItemUId) {
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> intentSchemas = CopilotIntentSchemaManager.GetItems()
				.Where(intent =>
					GetMetaItemCollectionFromManagerItem(intent).Any(metaItem => metaItem.UId == metaItemUId))
				.ToList();
			if (!intentSchemas.Any()) {
				throw new ItemNotFoundException("{0} {1} not found", _metaItemName, metaItemUId.ToString());
			}
			if (intentSchemas.Count() > 1) {
				IEnumerable<string> intentSchemaNames = intentSchemas.Select(schema => schema.Name);
				string joinedNames = string.Join(", ", intentSchemaNames);
				throw new DublicateDataException("{0} identifier: {1} duplicated in several intents ({2})",
					_metaItemName, metaItemUId, joinedNames);
			}
			ISchemaManagerItem<CopilotIntentSchema> intentSchema = intentSchemas.First();
			Guid intentUId = intentSchema.UId;
			return intentUId;
		}

		private Guid TryGetIntentUIdByMetaItemUId(Guid parameterUId) {
			Guid cachedIntentUId = GetIntentUIdByMetaItemUIdFromCache(parameterUId);
			if (!cachedIntentUId.Equals(Guid.Empty)) {
				return cachedIntentUId;
			}
			Guid intentUId = GetIntentUIdByMetaItemUIdFromManager(parameterUId);
			SetIntentUIdAndMetaItemUIdToCache(parameterUId, intentUId);
			return intentUId;
		}

		private Guid GetMetaItemUIdByFilter(QueryFilterInfo filter) {
			GetIsPrimaryColumnValueFilter(filter, out Guid metaItemUId);
			return metaItemUId;
		}

		private CopilotSchemaManagerQueryExecutorFilteringContext GetFilteringContext(QueryFilterInfo filterInfo) {
			var context = CreateFilteringContext();
			if (filterInfo is FilterCollection filterCollection) {
				foreach (QueryFilterInfo filterCollectionFilter in filterCollection.Filters) {
					FillFilterContextFromFilter(filterCollectionFilter, context);
				}
			} else {
				FillFilterContextFromFilter(filterInfo, context);
			}
			return context;
		}

		private IEnumerable<Entity> GetMetaItemsByIntentUId(CopilotSchemaManagerQueryExecutorFilteringContext context) {
			ISchemaManagerItem<CopilotIntentSchema> managerItem =
				CopilotIntentSchemaManager.FindItemByUId(context.IntentUId);
			if (managerItem == null) {
				return null;
			}
			CopilotIntentSchema intentSchema = managerItem.Instance;
			return GetMetaItemCollectionFromSchema(intentSchema)
				.Where(metaItem => GetIsSuitableMetaItem(metaItem, context))
				.Select(metaItem => GetMetaItemEntityFromSchema(intentSchema, metaItem));
		}

		private MetaItemCollection<TMetaItem> GetMetaItemCollectionFromManagerItem(
				ISchemaManagerItem<CopilotIntentSchema> managerItem) {
			var instance = managerItem?.Instance;
			return instance != null
				? GetMetaItemCollectionFromSchema(managerItem.Instance)
				: new MetaItemCollection<TMetaItem>();
		}

		private Dictionary<Guid, Guid> TryGetCachedData() {
			ICacheStore store = GetCacheStore(UserConnection);
			if (store[_cacheKey] is Dictionary<Guid, Guid> cachedData) {
				return cachedData;
			}
			cachedData = new Dictionary<Guid, Guid>();
			return cachedData;
		}

		private void SaveToCache(Dictionary<Guid, Guid> data) {
			ICacheStore store = GetCacheStore(UserConnection);
			store[_cacheKey] = data;
		}

		private void RemoveFromCache(Guid parameterUId) {
			Dictionary<Guid, Guid> cachedData = TryGetCachedData();
			cachedData.Remove(parameterUId);
			SaveToCache(cachedData);
		}

		private Entity GetMetaItemByUId(Guid metaItemUId) {
			Guid intentUId = TryGetIntentUIdByMetaItemUId(metaItemUId);
			ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem =
				CopilotIntentSchemaManager.FindItemByUId(intentUId);
			CopilotIntentSchema intentSchema = schemaManagerItem.Instance;
			TMetaItem metaItem = GetMetaItemCollectionFromManagerItem(schemaManagerItem).FindByUId(metaItemUId);
			if (metaItem == null) {
				RemoveFromCache(metaItemUId);
				return null;
			}
			Entity entity = GetMetaItemEntityFromSchema(intentSchema, metaItem);
			return entity;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Converts the <typeparam name="TMetaItem">metaItem</typeparam> to the <see cref="Entity"/> type.
		/// </summary>
		/// <param name="intentSchema">Instance of the <see cref="CopilotIntentSchema"/> type.</param>
		/// <param name="metaItem">Meta item instance.</param>
		/// <returns>Converted Entity.</returns>
		protected abstract Entity GetMetaItemEntityFromSchema(CopilotIntentSchema intentSchema, TMetaItem metaItem);

		/// <summary>
		/// Returns the collection of the <typeparam name="TMetaItem">meta items</typeparam>\
		/// from the <paramref name="schema"/>.
		/// </summary>
		/// <param name="schema">Instance of the <see cref="CopilotIntentSchema"/> type.</param>
		/// <returns>Collection of the meta items.</returns>
		protected abstract MetaItemCollection<TMetaItem> GetMetaItemCollectionFromSchema(CopilotIntentSchema schema);

		/// <summary>
		/// Creates the filtering context for the current executor.
		/// </summary>
		/// <returns>Created filtering context.</returns>
		protected virtual CopilotSchemaManagerQueryExecutorFilteringContext CreateFilteringContext() {
			return new CopilotSchemaManagerQueryExecutorFilteringContext();
		}

		/// <summary>
		/// Fills filtering context from filters.
		/// </summary>
		/// <param name="filter">Filters.</param>
		/// <param name="context">Context to fill.</param>
		protected virtual void FillFilterContextFromFilter(QueryFilterInfo filter,
				CopilotSchemaManagerQueryExecutorFilteringContext context) {
			if (context.MetaItemUId.IsEmpty()) {
				context.MetaItemUId = GetMetaItemUIdByFilter(filter);
			}
			if (context.IntentUId.IsEmpty()) {
				context.IntentUId = GetIntentUIdByFilter(filter);
			}
		}

		/// <summary>
		/// Determines whether the <paramref name="metaItem"/> is suitable for the current context.
		/// </summary>
		/// <param name="metaItem">Meta item.</param>
		/// <param name="context">Filtering context to check meta item against.</param>
		/// <returns><c>true</c> if item is suitable, <c>false</c> otherwise.</returns>
		protected virtual bool GetIsSuitableMetaItem(TMetaItem metaItem, CopilotSchemaManagerQueryExecutorFilteringContext context) {
			return true;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns copilot intent parameters.
		/// </summary>
		/// <param name="esq">Entity schema query to return collection according to.</param>
		/// <returns>Parameters data.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			QueryFilterInfo filterInfo = esq.Filters.ParseFilters();
			var collection = new EntityCollection(UserConnection, EntitySchema);
			var context = GetFilteringContext(filterInfo);
			if (context.MetaItemUId.IsNotEmpty()) {
				Entity metaItem = GetMetaItemByUId(context.MetaItemUId);
				if (metaItem != null) {
					collection.Add(metaItem);
				}
				return collection;
			}
			if (context.IntentUId.IsNotEmpty()) {
				IEnumerable<Entity> metaItems = GetMetaItemsByIntentUId(context);
				if (metaItems != null) {
					collection.AddRange(metaItems);
				}
			}
			return collection;
		}

		#endregion

	}

	#endregion

}
