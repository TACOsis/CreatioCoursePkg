namespace Terrasoft.AppFeatures
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.FeatureToggling.Configuration;
	using Creatio.FeatureToggling.Providers;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;

	#region Class: AppFeatureQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "AppFeatureQueryExecutor")]
	internal class AppFeatureQueryExecutor : BaseQueryExecutor, IEntityQueryExecutor
	{

		#region Class: FeatureDescriptorProperties

		private class FeatureDescriptorProperties : FeatureDescriptor
		{

			#region Constructors: Internal

			internal FeatureDescriptorProperties(FeatureDescriptor source) {
				Name = source.Name;
				Description = source.Description;
				Source = source.Source;
				IsEnabled = source.IsEnabled;
				if (source.AdditionalProperties == null) {
					return;
				}
				if (source.AdditionalProperties.TryGetValue("FeatureId", out object featureId) &&
						featureId is Guid id) {
					FeatureId = id;
				}
				if (source.AdditionalProperties.TryGetValue("IsEnabledByDefault", out object enabled) &&
						enabled is bool isEnabledByDefault) {
					State = isEnabledByDefault;
				}
				if (source.AdditionalProperties.TryGetValue("CreatedById", out object objectCreatedId) &&
						objectCreatedId is Guid createdById) {
					CreatedById = createdById;
				}
				if (source.AdditionalProperties.TryGetValue("ModifiedById", out object objectModifiedId) &&
						objectModifiedId is Guid modifiedById) {
					ModifiedById = modifiedById;
				}
				if (source.AdditionalProperties.TryGetValue("CreatedOn", out object createdOn) &&
						createdOn is DateTime created) {
					CreatedOn = created;
				}
				if (source.AdditionalProperties.TryGetValue("ModifiedOn", out object modifiedOn) &&
						modifiedOn is DateTime modified) {
					ModifiedOn = modified;
				}
			}

			#endregion

			#region Properties: Internal

			internal Guid? FeatureId { get; }

			internal bool?  State { get; }

			internal Guid? CreatedById { get; }

			internal Guid? ModifiedById { get; }

			internal DateTime? CreatedOn { get; }

			internal DateTime? ModifiedOn { get; }

			#endregion

		}

		#endregion

		#region Fields: Private

		private static readonly ObjectQuery<FeatureDescriptorProperties> _objectQuery = new ObjectQuery<FeatureDescriptorProperties>(
			new Dictionary<string, string> {
				{"Code", nameof(FeatureDescriptorProperties.Name) },
				{"Name", nameof(FeatureDescriptorProperties.Name) },
				{"Description", nameof(FeatureDescriptorProperties.Description) },
				{"Source", nameof(FeatureDescriptorProperties.Source) },
				{"CreatedOn", nameof(FeatureDescriptorProperties.CreatedOn) },
				{"ModifiedOn", nameof(FeatureDescriptorProperties.ModifiedOn) },
				{"CreatedById", nameof(FeatureDescriptorProperties.CreatedById) },
				{"ModifiedById", nameof(FeatureDescriptorProperties.ModifiedById) }
			}, descriptor => descriptor.Name);

		private readonly ObjectQuery<FeatureDescriptorProperties>.FilteringContext _filteringContext;

		internal static string FeatureIdToNameMapCacheKey => "FeatureToggle_FeatureIdToNameMap";

		#endregion

		#region Constructors: Public

		public AppFeatureQueryExecutor(UserConnection userConnection)
			: base(userConnection, "AppFeature") {
			_filteringContext =
				new ObjectQuery<FeatureDescriptorProperties>.FilteringContext {
					FilterItemEvaluators = {
						TryGetFeatureDescriptorById
					}
				};
		}

		#endregion

		#region Methods: Private

		private static ICacheStore GetCacheStore(UserConnection userConnection) => userConnection.SessionCache;

		private static void SaveNameToIdMap(UserConnection userConnection,
				Dictionary<string, Guid> featureIdToNameMap) {
			ICacheStore store = GetCacheStore(userConnection);
			store[FeatureIdToNameMapCacheKey] = featureIdToNameMap;
		}

		private FeatureDescriptorProperties FindFeatureById(Dictionary<string, Guid> featureIdToNameMap, Guid featureId,
				IReadOnlyCollection<FeatureDescriptorProperties> descriptors) {
			string featureName = featureIdToNameMap.FirstOrDefault(kvp => kvp.Value == featureId).Key;
			foreach (FeatureDescriptorProperties descriptor in descriptors) {
				if ((descriptor.FeatureId.HasValue && descriptor.FeatureId.Value == featureId) ||
						descriptor.Name == featureName) {
					return descriptor;
				}
			}
			return null;
		}

		private Entity MapDescriptorToEntity(FeatureDescriptorProperties descriptor, out bool featureExistInDb) {
			Entity row = EntitySchema.CreateEntity(UserConnection);
			row.SetDefColumnValues();
			row.SetColumnValue("Name", descriptor.Name);
			row.SetColumnValue("Code", descriptor.Name);
			row.SetColumnValue("Description", descriptor.Description);
			row.SetColumnValue("Source", descriptor.Source);
			row.SetColumnValue("State", descriptor.IsEnabled);
			row.SetColumnValue("StateForCurrentUser", descriptor.IsEnabled);
			row.SetColumnValue("CreatedOn", descriptor.CreatedOn);
			row.SetColumnValue("ModifiedOn", descriptor.ModifiedOn);
			row.SetColumnValue("CreatedById", descriptor.CreatedById);
			row.SetColumnValue("ModifiedById", descriptor.ModifiedById);
			featureExistInDb = false;
			if (descriptor.FeatureId.HasValue) {
				row.PrimaryColumnValue = descriptor.FeatureId.Value;
				row.StoringState = StoringObjectState.NotChanged;
				featureExistInDb = true;
			}
			if (descriptor.State.HasValue) {
				row.SetColumnValue("State", descriptor.State.Value);
			}
			return row;
		}

		private bool TryGetFeatureDescriptorById(QueryFilterInfo filter,
				IReadOnlyCollection<FeatureDescriptorProperties> items, out FeatureDescriptorProperties descriptor,
				out Guid descriptorId) {
			descriptorId = Guid.Empty;
			if (GetIsPrimaryColumnValueFilter(filter, out Guid currentFeatureId)) {
				Dictionary<string, Guid> featureIdToNameMap = GetNameToIdMap(UserConnection);
				descriptor = FindFeatureById(featureIdToNameMap, currentFeatureId, items);
				descriptorId = currentFeatureId;
				return true;
			}
			descriptor = null;
			return false;
		}

		private bool TryGetFeatureDescriptorById(QueryFilterInfo filter,
				IReadOnlyCollection<FeatureDescriptorProperties> items,
				out IReadOnlyCollection<FeatureDescriptorProperties> result) {
			result = Array.Empty<FeatureDescriptorProperties>();
			if (!TryGetFeatureDescriptorById(filter, items, out FeatureDescriptorProperties descriptor, out Guid _)) {
				return false;
			}
			result = descriptor == null ? Array.Empty<FeatureDescriptorProperties>() : new[] { descriptor };
			return true;
		}

		private IReadOnlyCollection<FeatureDescriptorProperties> GetFeatureDescriptors() {
			IList<FeatureDescriptor> sourceDescriptors = FeatureService.Instance.GetFeatures();
			var featureDescriptors =
				sourceDescriptors as IReadOnlyCollection<FeatureDescriptor> ?? sourceDescriptors.ToList();
			var result = new List<FeatureDescriptorProperties>();
			foreach (FeatureDescriptor featureDescriptor in featureDescriptors) {
				result.Add(new FeatureDescriptorProperties(featureDescriptor));
			}
			return result;
		}

		#endregion

		#region Methods: Public

		public static void RemoveFeatureIdFromCache(UserConnection userConnection, string featureName) {
			Dictionary<string, Guid> cache = GetNameToIdMap(userConnection);
			if (cache.Remove(featureName)) {
				SaveNameToIdMap(userConnection, cache);
			}
		}

		public static Dictionary<string, Guid> GetNameToIdMap(UserConnection userConnection) {
			ICacheStore store = GetCacheStore(userConnection);
			object cache = store[FeatureIdToNameMapCacheKey];
			var featureIdToNameMap = cache as Dictionary<string, Guid> ?? new Dictionary<string, Guid>();
			return featureIdToNameMap;
		}

		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			var collection = new EntityCollection(UserConnection, EntitySchema);
			IReadOnlyCollection<FeatureDescriptorProperties> sourceFeatureDescriptors = GetFeatureDescriptors();
			Dictionary<string, Guid> featureIdToNameMap = GetNameToIdMap(UserConnection);
			QueryFilterInfo filterInfo = esq.Filters.ParseFilters();
			if (TryGetFeatureDescriptorById(filterInfo, sourceFeatureDescriptors,
						out FeatureDescriptorProperties featureDescriptor, out Guid currentFeatureId)) {
				if (featureDescriptor != null) {
					Entity row = MapDescriptorToEntity(featureDescriptor, out bool _);
					row.PrimaryColumnValue = currentFeatureId;
					collection.Add(row);
				}
				return collection;
			}
			EntitySchemaQuery parentQuery = esq.Filters.ParentQuery;
			IEnumerable<FeatureDescriptorProperties> filteredItems = _objectQuery.GetItems(sourceFeatureDescriptors,
				parentQuery, filterInfo, _filteringContext);
			foreach (FeatureDescriptorProperties descriptor in filteredItems) {
				Entity row = MapDescriptorToEntity(descriptor, out bool featureExistInDb);
				if (featureExistInDb) {
					row.StoringState = StoringObjectState.NotChanged;
				} else {
					if (featureIdToNameMap.TryGetValue(descriptor.Name, out Guid featureId)) {
						row.PrimaryColumnValue = featureId;
					} else {
						featureIdToNameMap[descriptor.Name] = row.PrimaryColumnValue;
					}
				}
				collection.Add(row);
			}
			SaveNameToIdMap(UserConnection, featureIdToNameMap);
			return collection;
		}

		#endregion

	}

	#endregion

}

