namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Store;

	#region Class: FeatureValueProvider

	/// <summary>
	/// Feature value provider.
	/// </summary>
	public class FeatureValueProvider : IFeatureValueProvider
	{

		#region Constants: Private

		private const string FeaturesCacheGroupName = "FeaturesCache_{0}";
		private const string FeaturesCacheGroupItem = "FeatureInitializing_{0}_{1}";

		#endregion

		#region Methods: Private

		private static EntitySchemaQuery GetAllFeatureStatesEsq(string code, UserConnection userConnection) {
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "AdminUnitFeatureState");
			EntitySchemaQueryColumn stateColumn = esq.AddColumn("FeatureState");
			stateColumn.OrderByDesc();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Feature.Code", code));
			return esq;
		}

		private static List<FeatureStateInfo> GetFeatureStatesInfo(Guid featureId, EntityCollection features,
			string stateColumnName, string adminUnitColumnName) {
			return (from feature in features
				where feature.PrimaryColumnValue == featureId
				select new FeatureStateInfo {
					Code = feature.GetTypedColumnValue<string>("Code"),
					State = feature.GetTypedColumnValue<int>(stateColumnName),
					SysAdminUnitId = feature.GetTypedColumnValue<Guid>(adminUnitColumnName)
				}).ToList();
		}

		private static void ClearFeatureCache(UserConnection userConnection, string code) {
			string itemKey = string.Format(FeaturesCacheGroupItem, code, userConnection.CurrentUser.Id);
			userConnection.SessionCache.WithLocalCaching().SetOrRemoveValue(itemKey, null);
		}

		private static Guid GetFeatureByCode(UserConnection userConnection, string code) {
			EntitySchema manager = userConnection.EntitySchemaManager.GetInstanceByName("Feature");
			Entity entity = manager.CreateEntity(userConnection);
			var columnsToFetch = new Dictionary<string, object> {
				{ "Code", code }
			};
			return entity.FetchFromDB(columnsToFetch) ? entity.PrimaryColumnValue : Guid.Empty;
		}

		private static Guid ExtractFeatureId(UserConnection userConnection, string code) {
			ClearFeatureCache(userConnection, code);
			Guid featureId = GetFeatureByCode(userConnection, code);
			return featureId;
		}

		private static void SafeSetAdminUnitFeatureState(UserConnection userConnection, Guid featureId, int state,
				bool forAllUsers) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByName("AdminUnitFeatureState");
			var esq = new EntitySchemaQuery(schema);
			esq.AddAllSchemaColumns();
			IEntitySchemaQueryFilterItem featureFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				"Feature", featureId);
			esq.Filters.Add(featureFilter);
			if (!forAllUsers) {
				IEntitySchemaQueryFilterItem sauFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal,
					"SysAdminUnit", userConnection.CurrentUser.Id);
				esq.Filters.Add(sauFilter);
			}
			EntityCollection existRows = esq.GetEntityCollection(userConnection);
			if (existRows.Count == 0) {
				Entity entity = schema.CreateEntity(userConnection);
				entity.SetDefColumnValues();
				entity.SetColumnValue("SysAdminUnitId", userConnection.CurrentUser.Id);
				entity.SetColumnValue("FeatureId", featureId);
				existRows.Add(entity);
			}
			foreach (Entity sauFeatureState in existRows) {
				sauFeatureState.SetColumnValue("FeatureState", state);
				sauFeatureState.Save();
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns feature state by <paramref name="code"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="sysAdminUnitId">SysAdminUnit unique identifier.</param>
		/// <returns>State of feature.</returns>
		public virtual int GetFeatureState(UserConnection userConnection, string code, Guid sysAdminUnitId) {
			SysUserInfo currentUser = userConnection.CurrentUser;
			if (currentUser == null) {
				return (int)FeatureState.Disabled;
			}
			Guid featureSysAdminUnitId = sysAdminUnitId == default ? currentUser.Id : sysAdminUnitId;
			string cacheGroupName = string.Format(FeaturesCacheGroupName, "AdminUnitFeatureState");
			string cacheItemName = string.Format(FeaturesCacheGroupItem, code, featureSysAdminUnitId);
			ICacheStore cacheStore = userConnection.SessionCache.WithLocalCaching(cacheGroupName);
			if (cacheStore[cacheItemName] is int cachedValue) {
				return cachedValue;
			}
			var select = (Select)new Select(userConnection).Top(1)
					.Column("AdminUnitFeatureState", "FeatureState")
				.From("AdminUnitFeatureState")
				.InnerJoin("Feature").On("Feature", "Id").IsEqual("AdminUnitFeatureState", "FeatureId")
				.InnerJoin("SysAdminUnitInRole").On("SysAdminUnitInRole", "SysAdminUnitRoleId")
					.IsEqual("AdminUnitFeatureState", "SysAdminUnitId")
				.Where("Feature", "Code").IsEqual(Column.Parameter(code))
					.And("SysAdminUnitInRole", "SysAdminUnitId").IsEqual(Column.Parameter(featureSysAdminUnitId))
				.OrderByDesc("AdminUnitFeatureState", "FeatureState");
			var value = select.ExecuteScalar<int>();
			cacheStore[cacheItemName] = value;
			return value;
		}

		/// <summary>
		/// Returns all feature states.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>List of features.</returns>
		public virtual Dictionary<string,int> GetFeatureStates(UserConnection userConnection) {
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Feature");
			esq.AddColumn("Name");
			esq.AddColumn("Code");
			EntitySchemaQueryColumn stateColumn = esq.AddColumn("[AdminUnitFeatureState:Feature].FeatureState");
			stateColumn.OrderByDesc();
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				"[AdminUnitFeatureState:Feature].[SysAdminUnitInRole:SysAdminUnitRoleId:SysAdminUnit].SysAdminUnit",
				userConnection.CurrentUser.Id));
			EntityCollection collection = esq.GetEntityCollection(userConnection);
			var result = new Dictionary<string, int>();
			foreach (Entity entity in collection) {
				var code = entity.GetTypedColumnValue<string>("Code");
				var state = entity.GetTypedColumnValue<int>(stateColumn.Name);
				if (result.ContainsKey(code)) {
					continue;
				}
				result.Add(code, state);
			}
			return result;
		}

		/// <summary>
		/// Returns info about all features and their states.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Information about features and their states.</returns>
		public virtual List<FeatureInfo> GetFeaturesInfo(UserConnection userConnection) {
			var result = new List<FeatureInfo>();
			var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "Feature") {
				PrimaryQueryColumn = {
					IsAlwaysSelect = true
				}
			};
			esq.AddColumn("Code");
			esq.AddColumn("Name");
			esq.AddColumn("Description");
			esq.AddColumn("ModifiedOn").OrderByDesc();
			EntitySchemaQueryColumn stateColumn = esq.AddColumn("[AdminUnitFeatureState:Feature].FeatureState");
			EntitySchemaQueryColumn adminUnitColumn = esq.AddColumn("[AdminUnitFeatureState:Feature].SysAdminUnit.Id");
			EntityCollection collection = esq.GetEntityCollection(userConnection);
			if (collection.Count <= 0) {
				return result;
			}
			foreach (Entity entity in collection) {
				if (result.Any(f => f.Id == entity.PrimaryColumnValue)) {
					continue;
				}
				var featureInfo = new FeatureInfo {
					Id = entity.PrimaryColumnValue,
					Name = entity.GetTypedColumnValue<string>("Name"),
					Code = entity.GetTypedColumnValue<string>("Code"),
					Description = entity.GetTypedColumnValue<string>("Description"),
					StatesInfo = GetFeatureStatesInfo(entity.PrimaryColumnValue, collection, stateColumn.Name,
						adminUnitColumn.Name)
				};
				featureInfo.ActualizeFeatureState(userConnection);
				result.Add(featureInfo);
			}
			return result;
		}

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for any user.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		public bool GetIsFeatureEnabledForAnyUser(UserConnection userConnection, string code) {
			EntitySchemaQuery esq = GetAllFeatureStatesEsq(code, userConnection);
			EntityCollection collection = esq.GetEntityCollection(userConnection);
			return collection.Any(fs => fs.GetTypedColumnValue<int>("FeatureState") == 1);
		}

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for all users.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		public bool GetIsFeatureEnabledForAllUsers(UserConnection userConnection, string code) {
			EntitySchemaQuery esq = GetAllFeatureStatesEsq(code, userConnection);
			EntityCollection collection = esq.GetEntityCollection(userConnection);
			return collection.Any() && collection.All(fs => fs.GetTypedColumnValue<int>("FeatureState") == 1);
		}

		/// <summary>
		/// Sets feature state.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		public void SetFeatureState(UserConnection userConnection, string code, int state, bool forAllUsers) {
			Guid featureId = ExtractFeatureId(userConnection, code);
			SafeSetAdminUnitFeatureState(userConnection, featureId, state, forAllUsers);
		}

		/// <summary>
		/// Create Feature if it does not exist and sets feature state.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		public void SafeSetFeatureState(UserConnection userConnection, string code, int state, bool forAllUsers) {
			Guid featureId = ExtractFeatureId(userConnection, code);
			if (featureId == Guid.Empty) {
				CreateFeature(userConnection, code, code, String.Empty);
				featureId = ExtractFeatureId(userConnection, code);
			}
			SafeSetAdminUnitFeatureState(userConnection, featureId, state, forAllUsers);
		}

		/// <summary>
		/// Creates feature.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="name">Feature name.</param>
		/// <param name="description">Feature description.</param>
		public void CreateFeature(UserConnection userConnection, string code, string name, string description) {
			EntitySchema manager = userConnection.EntitySchemaManager.GetInstanceByName("Feature");
			Entity entity = manager.CreateEntity(userConnection);
			var conditions = new Dictionary<string, object> {
				{"Code", code}
			};
			if (entity.FetchFromDB(conditions)) {
				return;
			}
			entity.SetDefColumnValues();
			entity.SetColumnValue("Code", code);
			entity.SetColumnValue("Name", name);
			entity.SetColumnValue("Description", description);
			entity.Save();
		}

		#endregion

	}

	#endregion

}

