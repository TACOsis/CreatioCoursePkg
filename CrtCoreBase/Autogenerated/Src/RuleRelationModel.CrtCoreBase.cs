namespace Terrasoft.Configuration.AutoEmailRelation
{
	using global::Common.Logging;
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Class: RuleRelationModel

	/// <summary>
	/// Base <see cref="IRuleRelationModel"/> implementation. Used for any entities.
	/// </summary>
	public class RuleRelationModel: IRuleRelationModel
	{
		#region Properties: Public 

		/// <summary>
		/// <see cref="IRuleRelationModel.EntitySchemaUId"/>
		/// <summary>
		public Guid EntitySchemaUId {
			get;
			set;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.EntitySchemaColumnUId"/>
		/// <summary>
		public Guid EntitySchemaColumnUId {
			get;
			set;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.EntitySchemaSearchUId"/>
		/// <summary>
		public Guid EntitySchemaSearchUId {
			get;
			set;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.EntitySchemaSearchColumnUId"/>
		/// <summary>
		public Guid EntitySchemaSearchColumnUId {
			get;
			set;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.Rule"/>
		/// <summary>
		public string Rule {
			get;
			set;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.RelationEntitySchemaUId"/>. The same as
		/// <see cref="RuleRelationModel.EntitySchemaSearchUId"/> in this implementation.
		/// <summary>
		public virtual Guid RelationEntitySchemaUId { 
			get {
				return EntitySchemaSearchUId;
			}
			set {
				EntitySchemaSearchUId = value;
			}
		}
		
		public IEnumerable<RuleEntityConnBindingModel> AutoCompleteRules {
			get;
			set;
		}

		#endregion
		
		#region Constructors: Public
		
		public RuleRelationModel(IEnumerable<RuleEntityConnBindingModel> autoCompleteRules = null) {
			AutoCompleteRules = autoCompleteRules;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Returns entity connection columns unique identifiers for <see cref="EntitySchemaUId"/>.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <returns>Entity connection columns unique identifiers list.</returns>
		protected IEnumerable<Guid> GetEntityRelationColumnUIds(UserConnection userConnection) {
			var select = new Select(userConnection)
					.Column("ColumnUId")
				.From("EntityConnection")
				.Where("SysEntitySchemaUId").IsEqual(Column.Parameter(EntitySchemaUId)) as Select;
			List<Guid> result = new List<Guid>();
			using (var dbExecutor = userConnection.EnsureDBConnection()) {
				using (var reader = select.ExecuteReader(dbExecutor)) {
					while (reader.Read()) {
						result.Add(reader.GetColumnValue<Guid>("ColumnUId"));
					}
				}
			}
			return result;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// <see cref="IRuleRelationModel.GetRuleTargetColumn(UserConnection)"/>
		/// </summary>
		public virtual Guid GetRuleTargetColumn(UserConnection userConnection) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(EntitySchemaUId);
			var relationColumns = GetEntityRelationColumnUIds(userConnection);
			var column = schema.Columns.FirstOrDefault(c => c.ReferenceSchema != null &&
					c.ReferenceSchema.UId == EntitySchemaSearchUId &&
					relationColumns.Any(rc => rc.Equals(c.UId))) ??
					schema.Columns.FirstOrDefault(c => c.ReferenceSchema != null &&
						c.ReferenceSchema.UId == EntitySchemaSearchUId );
			return column.UId;
		}
		
		public virtual IEnumerable<RuleRelationPair> GetExtraRelations(IEnumerable<Guid> basicRelations, UserConnection userConnection) {
			var result = new List<RuleRelationPair>();
			foreach (RuleEntityConnBindingModel autoCompleteRule in AutoCompleteRules) {
				EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(autoCompleteRule.SourceEntitySchemaUId);
				EntitySchemaColumn sourceColumnName = schema.Columns.GetByUId(autoCompleteRule.SourceEntitySchemaColumnUId);
				EntitySchemaQuery esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schema.Name);
				esq.PrimaryQueryColumn.IsAlwaysSelect = true;
				var sourceColumn = esq.AddColumn(sourceColumnName.Name);
				esq.Filters.Add(esq.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					esq.PrimaryQueryColumn.Name,
					basicRelations.Select(value => (object)value)
				));
				var entityCollection = esq.GetEntityCollection(userConnection);
				foreach(Entity extraRelation in entityCollection) {
					var extraRelationValue = extraRelation.GetTypedColumnValue<Guid>(sourceColumn.ValueQueryAlias);
					if (extraRelationValue != Guid.Empty) {
						result.Add(new RuleRelationPair(autoCompleteRule.TargetEntitySchemaColumnUId, extraRelationValue));
					}
				}
			}
			return result;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.GetMatches(string)"/>
		/// </summary>
		public virtual MatchCollection GetMatches(string text) {
			Regex defaultRegex = new Regex(Rule);
			return defaultRegex.Matches(text);
		}
	
		/// <summary>
		/// <see cref="IRuleRelationModel.GetEntityRelation(MatchCollection, UserConnection)"/>
		/// </summary>
		public virtual IEnumerable<Guid> GetEntityRelation(MatchCollection matchCollection, UserConnection userConnection) {
			List<Guid> result = new List<Guid>();
			if (matchCollection.Count == 0) {
				return result;
			}
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(EntitySchemaSearchUId);
			EntitySchemaColumn searchColumnName = schema.Columns.GetByUId(EntitySchemaSearchColumnUId);
			EntitySchemaQuery esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, schema.Name);
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			var filterGroupNumber = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			foreach (var item in matchCollection) {
				filterGroupNumber.Add(esq.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					searchColumnName.Name,
					item.ToString()
				));
			}
			esq.Filters.Add(filterGroupNumber);
			var entityCollection = esq.GetEntityCollection(userConnection);
			foreach(var item in entityCollection) {
				result.Add(item.GetTypedColumnValue<Guid>(esq.PrimaryQueryColumn.Name));
			}
			return result;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.GetEntityExtendedRelations(MatchCollection, UserConnection)"/>
		/// </summary>
		public virtual IEnumerable<RuleRelationPair> GetEntityExtendedRelations(MatchCollection matchCollection,
				UserConnection userConnection) {
			var basicRelations = GetEntityRelation(matchCollection, userConnection);
			var result = new List<RuleRelationPair>();
			var basicRelationsCount = basicRelations.Count();
			if (basicRelationsCount == 0) {
				return result;
			}
			var maxRuleRelationsCount = SystemSettings.GetValue(userConnection, "MaxRuleRelationsCount", 100);
			if (basicRelationsCount > maxRuleRelationsCount) {
				var log = LogManager.GetLogger("RuleRelation");
				log.Error($"There are a lot of RuleRelation, count {basicRelationsCount}, match count {matchCollection.Count}. " +
					$"Skip rule execution.");
				return result;
			}
			result.AddRange(basicRelations.Select(value => new RuleRelationPair(GetRuleTargetColumn(userConnection), value)));
			result.AddRange(GetExtraRelations(basicRelations, userConnection));
			return result;
		}
		
		#endregion
	}

	#endregion

}
