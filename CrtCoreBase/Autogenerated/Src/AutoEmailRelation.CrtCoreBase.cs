namespace Terrasoft.Configuration.AutoEmailRelation
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.Entities;

	#region Class AutoEmailRelation

	/// <summary>
	/// This class provides methods to create entities relations.
	/// Relations created using rules, described by <see cref="IRuleRelationModel"/> implementations.
	/// </summary>
	public class AutoEmailRelation
	{
		#region Fields: Private

		/// <summary>
		/// <see cref="UserConnection"/> instance.
		/// </summary>
		private UserConnection _userConnection;

		/// <summary>
		/// Entitites relation rules collection.
		/// </summary>
		private IEnumerable<IRuleRelationModel> _ruleRelationCollection;

		/// <summary>
		/// Collection of columns bindings, used to fill additional list of relations.
		/// </summary>
		/// <remarks>
		/// <see cref="RuleEntityConnBindingModel"/>
		/// </remarks>
		private IEnumerable<RuleEntityConnBindingModel> _entityConnBindingCollection;

		#endregion

		#region Properties: Public

		/// <summary>
		/// Collection of rule relation entitites.
		/// </summary>
		public IEnumerable<IRuleRelationModel> RuleRelationCollection {
			get {
				return _ruleRelationCollection;
			}
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates new AutoEmailRelation instance.
		/// </summary>
		/// <param name="userConnection">UserConnection instance.</param>
		/// <returns>AutoEmailRelation instance.</returns>
		public AutoEmailRelation(UserConnection userConnection) {
			_userConnection = userConnection;
			_entityConnBindingCollection = GetEntityConnBindingCollection();
			_ruleRelationCollection = GetRuleRelationCollection();
		}

		/// <summary>
		/// Creates new AutoEmailRelation instance.
		/// </summary>
		/// <param name="userConnection">UserConnection instance.</param>
		/// <param name="rules"><see cref="AutoEmailRelation._ruleRelationCollection"/> value.</param>
		/// <param name="entityColumnsBindings"><see cref="AutoEmailRelation._entityConnBindingCollection"/> value.</param>
		/// <returns>AutoEmailRelation instance.</returns>
		public AutoEmailRelation(UserConnection userConnection, IEnumerable<IRuleRelationModel> rules, 
				IEnumerable<RuleEntityConnBindingModel> entityColumnsBindings) {
			_userConnection = userConnection;
			_ruleRelationCollection = rules;
			_entityConnBindingCollection = entityColumnsBindings;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Creates entitites relation rules collection.
		/// </summary>
		/// <returns>
		/// Entitites relation rules collection.
		/// </returns>
		/// <remarks>
		/// Rules stored in RuleRelation table.
		/// </remarks>
		private IEnumerable<IRuleRelationModel> GetRuleRelationCollection() {
			List<IRuleRelationModel> result = new List<IRuleRelationModel>();
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "RuleRelation");
			var entitySchemaUIdColumnName = esq.AddColumn("EntitySchemaUId").Name;
			var entitySchemaColumnUIdColumnName = esq.AddColumn("EntitySchemaColumnUId").Name;
			var entitySchemaSearchUIdColumnName = esq.AddColumn("EntitySchemaSearchUId").Name;
			var entitySchemaSearchColumnUIdColumnName = esq.AddColumn("EntitySchemaSearchColumnUId").Name;
			var ruleColumnName = esq.AddColumn("Rule").Name;
			esq.AddColumn("Position").OrderByAsc();
			var entityCollection = esq.GetEntityCollection(_userConnection);
			foreach(var item in entityCollection) {
				Guid entitySchemaSearchUId = item.GetTypedColumnValue<Guid>(entitySchemaSearchUIdColumnName);
				Guid entitySchemaUId = item.GetTypedColumnValue<Guid>(entitySchemaUIdColumnName);
				var autoCompleteRules = _entityConnBindingCollection.Where(binding =>
						binding.TargetEntitySchemaUId == entitySchemaUId &&
						binding.SourceEntitySchemaUId == entitySchemaSearchUId);
				IRuleRelationModel rule = CreateRule(entitySchemaSearchUId, autoCompleteRules);
				rule.EntitySchemaUId = entitySchemaUId;
				rule.EntitySchemaColumnUId = item.GetTypedColumnValue<Guid>(entitySchemaColumnUIdColumnName);
				rule.EntitySchemaSearchUId = entitySchemaSearchUId;
				rule.EntitySchemaSearchColumnUId = item.GetTypedColumnValue<Guid>(entitySchemaSearchColumnUIdColumnName);
				rule.Rule = item.GetTypedColumnValue<string>(ruleColumnName);
				result.Add(rule);
			}
			return result;
		}

		/// <summary>
		/// Creates <see cref="IRuleRelationModel"/> implementation based on <paramref name="entitySchemaSearchUId"/>.
		/// </summary>
		/// <param name="entitySchemaSearchUId">Entity schema UId.</param>
		/// <returns>
		/// <see cref="IRuleRelationModel"/> implementation.
		/// </returns>
		private IRuleRelationModel CreateRule(Guid entitySchemaSearchUId, IEnumerable<RuleEntityConnBindingModel> autoCompleteRules) {
			EntitySchema activitySchema = _userConnection.EntitySchemaManager.GetInstanceByName("Activity");
			if (entitySchemaSearchUId == AutoEmailRelationConst.ContactCommunicationSchemaUId) {
				CommunicationRuleRelationModel contactFillRule = new CommunicationRuleRelationModel("Contact",
						AutoEmailRelationConst.ContactSchemaUId,
						"[ContactCommunication:Contact:Id].[ComTypebyCommunication:CommunicationType:CommunicationType].Communication",
						"[ContactCommunication:Contact:Id].Number", AutoEmailRelationConst.EmployeeId, "Contact");
				List<RuleEntityConnBindingModel> contactAutoCompleteRules = new List<RuleEntityConnBindingModel>();
				EntitySchema contactSchema = _userConnection.EntitySchemaManager.GetInstanceByName("Contact");
				contactAutoCompleteRules.Add(new RuleEntityConnBindingModel() {
						TargetEntitySchemaUId = activitySchema.UId,
						TargetEntitySchemaColumnUId = activitySchema.Columns.FindByName("Account").UId,
						SourceEntitySchemaUId = contactSchema.UId,
						SourceEntitySchemaColumnUId = contactSchema.Columns.FindByName("Account").UId
				});
				contactFillRule.AutoCompleteRules = contactAutoCompleteRules;
				return contactFillRule;
			} else if (entitySchemaSearchUId == AutoEmailRelationConst.AccountCommunicationSchemaUId) {
				CommunicationRuleRelationModel accountFillRule = new CommunicationRuleRelationModel("Account",
						AutoEmailRelationConst.AccountSchemaUId,
						"[AccountCommunication:Account:Id].[ComTypebyCommunication:CommunicationType:CommunicationType].Communication",
						"[AccountCommunication:Account:Id].Number", AutoEmailRelationConst.OurCompanyTypeId, "Account");
				List<RuleEntityConnBindingModel> accountAutoCompleteRules = new List<RuleEntityConnBindingModel>();
				accountFillRule.AutoCompleteRules = accountAutoCompleteRules;
				return accountFillRule;
			} else {
				return new RuleRelationModel(autoCompleteRules);
			}
		}

		private EntityConnectionModel GetEntityConnection(Guid id) {
			EntityConnectionModel result = new EntityConnectionModel();
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "EntityConnection");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			var sysEntitySchemaUIdColumn = esq.AddColumn("SysEntitySchemaUId");
			var columnUIdColumn = esq.AddColumn("ColumnUId");
			esq.Filters.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.Equal,
				esq.PrimaryQueryColumn.Name,
				id
			));
			var entityCollection = esq.GetEntityCollection(_userConnection);
			if (entityCollection.Count > 0) {
				result.SysEntitySchemaUId = entityCollection[0].GetTypedColumnValue<Guid>(sysEntitySchemaUIdColumn.ValueQueryAlias);
				result.ColumnUId = entityCollection[0].GetTypedColumnValue<Guid>(columnUIdColumn.ValueQueryAlias);
				return result;
			} else {
				return null;
			}
		}

		private IEnumerable<RuleEntityConnBindingModel> GetEntityConnBindingCollection() {
			List<RuleEntityConnBindingModel> result = new List<RuleEntityConnBindingModel>();
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "EntityConnBinding");
			esq.CacheItemName = "EntityConnBindingCache";
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			var parentIdColumn = esq.AddColumn("EntityConnectionParentId");
			var childIdColumn = esq.AddColumn("EntityConnectionChildId");
			var entityCollection = esq.GetEntityCollection(_userConnection);
			foreach(var item in entityCollection) {
				EntityConnectionModel targetEntityConnection = GetEntityConnection(item.GetTypedColumnValue<Guid>(parentIdColumn.ValueQueryAlias));
				EntityConnectionModel sourceEntityConnection = GetEntityConnection(item.GetTypedColumnValue<Guid>(childIdColumn.ValueQueryAlias));
				if (targetEntityConnection != null && sourceEntityConnection != null) {
					RuleEntityConnBindingModel model = new RuleEntityConnBindingModel();
					model.TargetEntitySchemaUId = targetEntityConnection.SysEntitySchemaUId;
					model.TargetEntitySchemaColumnUId = targetEntityConnection.ColumnUId;
					model.SourceEntitySchemaUId = sourceEntityConnection.SysEntitySchemaUId;
					model.SourceEntitySchemaColumnUId = sourceEntityConnection.ColumnUId;
					result.Add(model);
				}
			}
			return result;
		}

		/// <summary>
		/// Returns collection of <see cref="IRuleRelationModel"/> for <paramref name="schemaUId"/>.
		/// </summary>
		/// <param name="schemaUId">Entity schema uid.</param>
		/// <returns>Collection of <see cref="IRuleRelationModel"/>.</returns>
		private IEnumerable<IRuleRelationModel> GetRulesForEntity(Guid schemaUId) {
			List<IRuleRelationModel> result = new List<IRuleRelationModel>();
			if (schemaUId == Guid.Empty) {
				return result;
			}
			foreach(var item in _ruleRelationCollection) {
				if (item.EntitySchemaUId == schemaUId) {
					result.Add(item);
				}
			}
			return result;
		}

		private void AddEmailRelation(Guid emailId, Guid entitySchemaUId, Guid recordId) {
			Guid emailRelationId = Guid.NewGuid();
			EntitySchema emailRelationSchema = _userConnection.EntitySchemaManager.GetInstanceByName("EmailRelation");
			Entity emailRelation = emailRelationSchema.CreateEntity(_userConnection);
			emailRelation.SetDefColumnValues();
			emailRelation.SetColumnValue("Id", emailRelationId);
			emailRelation.SetColumnValue("EmailId", emailId);
			emailRelation.SetColumnValue("EntitySchemaUId", entitySchemaUId);
			emailRelation.SetColumnValue("RecordId", recordId);
			emailRelation.Save(false);
		}

		private bool IsExistsInDB(Guid emailId, Guid recordId) {
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "EmailRelation");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Email", emailId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "RecordId", recordId));
			var collection = esq.GetEntityCollection(_userConnection);
			return collection.Count > 0 ? true : false;
		}

		private Guid GetRelationContact(Guid accountId) {
			EntitySchemaQuery esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Account");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			EntitySchemaQueryColumn primaryContact = esq.AddColumn("PrimaryContact");

			esq.Filters.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.Equal,
				esq.PrimaryQueryColumn.Name,
				accountId
			));

			var entityCollection = esq.GetEntityCollection(_userConnection);
			if (entityCollection.Count > 0) {
				return entityCollection[0].GetTypedColumnValue<Guid>(primaryContact.ValueQueryAlias);
			}
			return Guid.Empty;
		}

		private Guid GetRelationAccount(Guid contactId) {
			EntitySchemaQuery esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "Contact");
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			EntitySchemaQueryColumn account = esq.AddColumn("Account");

			esq.Filters.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.Equal,
				esq.PrimaryQueryColumn.Name,
				contactId
			));

			var entityCollection = esq.GetEntityCollection(_userConnection);
			if (entityCollection.Count > 0) {
				return entityCollection[0].GetTypedColumnValue<Guid>(account.ValueQueryAlias);
			}
			return Guid.Empty;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Creates all possible relations for <paramref name="entity"/>.
		/// </summary>
		/// <param name="entity">Entity instance, which will be linked to another entities.</param>
		/// <remarks>
		/// Entities for new links will be searched using <see cref="IRuleRelationModel"/> collection.
		/// </remarks>
		public void Proceed(Entity entity) {
			IEnumerable<IRuleRelationModel> rulesForEntity = GetRulesForEntity(entity.Schema.UId);
			foreach (var rule in rulesForEntity) {
				Guid columnUId = rule.EntitySchemaColumnUId;
				string columnName = entity.Schema.Columns.GetByUId(columnUId).Name;
				string columnValue = entity.GetTypedColumnValue<string>(columnName);
				MatchCollection matches = rule.GetMatches(columnValue);
				if (matches.Count > 0) {
					IEnumerable<Guid> entitiesRelation = rule.GetEntityRelation(matches, _userConnection);
					foreach(var entityId in entitiesRelation) {
						if (!IsExistsInDB(entity.GetTypedColumnValue<Guid>(entity.Schema.PrimaryColumn.Name), entityId)) {
							AddEmailRelation(
								entity.GetTypedColumnValue<Guid>(entity.Schema.PrimaryColumn.Name),
								rule.RelationEntitySchemaUId,
								entityId
							);
						}
					}
				}
			}
		}

		/// <summary>
		/// Creates all possible and additional relations for <paramref name="entity"/>.
		/// </summary>
		/// <param name="entity">Entity instance, which will be linked to another entities.</param>
		/// <remarks>
		/// Entities for new links will be searched using <see cref="IRuleRelationModel"/> collection.
		/// Additional relations will be created using <see cref="RuleEntityConnBindingModel"/> collection.
		/// </remarks>
		public void ProceedRelation(Entity entity) {
			IEnumerable<IRuleRelationModel> rulesForEntity = GetRulesForEntity(entity.Schema.UId);
			bool isContactSearchSuccessfull = false;
			bool isOtherRelation = false;
			foreach (IRuleRelationModel rule in rulesForEntity) {
				if (GetCanRunRule(rule, isContactSearchSuccessfull)) {
					Guid columnUId = rule.EntitySchemaColumnUId;
					string columnName = entity.Schema.Columns.GetByUId(columnUId).Name;
					string columnValue = entity.GetTypedColumnValue<string>(columnName);
					MatchCollection matches = rule.GetMatches(columnValue);
					if (matches.Count > 0) {
						IEnumerable<RuleRelationPair> extendedRelations = rule.GetEntityExtendedRelations(matches, _userConnection);
						if(extendedRelations.Count() > 0) {
							foreach(RuleRelationPair relationValue in extendedRelations) {
								var relationColumn = entity.Schema.Columns.GetByUId((Guid)relationValue.ColumnUId);
								Guid relationColumnValue = entity.GetTypedColumnValue<Guid>(relationColumn);
								if (relationColumnValue == Guid.Empty) {
									entity.SetColumnValue(relationColumn, (Guid)relationValue.ExtraRelationValue);
									TryAutoCompleteContactOrAccount(entity, relationColumn, (Guid)relationValue.ExtraRelationValue);
									if (rule.EntitySchemaSearchUId == AutoEmailRelationConst.ContactCommunicationSchemaUId) {
										isContactSearchSuccessfull = true;
									}
									if (rule.EntitySchemaSearchUId != AutoEmailRelationConst.AccountCommunicationSchemaUId &&
											rule.EntitySchemaSearchUId != AutoEmailRelationConst.ContactCommunicationSchemaUId) {
										isOtherRelation = true;
									}
								}
							}
							entity.Save(false);
						}
					}
				}
			}
			SetEntityProcessed(entity, isOtherRelation);
			
		}

		public virtual bool GetCanRunRule(IRuleRelationModel rule, bool isContactSearchSuccessfull) {
			return (rule.EntitySchemaSearchUId != AutoEmailRelationConst.AccountCommunicationSchemaUId ||
					!isContactSearchSuccessfull);
		}

		public virtual void TryAutoCompleteContactOrAccount(Entity entity, EntitySchemaColumn relationColumn, Guid relationValue) {
			if (relationColumn.Name == "Contact") {
				Guid accountId = GetRelationAccount(relationValue);
				if (accountId != Guid.Empty && entity.GetTypedColumnValue<Guid>("AccountId") == Guid.Empty) {
					entity.SetColumnValue("AccountId", accountId);
				}
			}
		}

		public virtual void SetEntityProcessed(Entity entity, bool isOtherRelation) {
			bool isNeedProcess = entity.GetTypedColumnValue<bool>("IsNeedProcess");
			if (!isNeedProcess) {
				return;
			}
			bool forceSetNeedProcess = SysSettings.GetValue<bool>(_userConnection, "ForceSetNeedProcess", false);
			Guid contactId = entity.GetTypedColumnValue<Guid>("ContactId");
			Guid accountId = entity.GetTypedColumnValue<Guid>("AccountId");
			bool isContactAccountRelation = (contactId != Guid.Empty || accountId != Guid.Empty);
			if (isContactAccountRelation && isOtherRelation && !forceSetNeedProcess) {
				entity.SetColumnValue("IsNeedProcess", false);
				entity.Save(false);
			} else {
				entity.SetColumnValue("IsNeedProcess", true);
				entity.Save(false);
			}
		}

		#endregion
	}

	#endregion

	#region Class EntityConnectionModel
	
	internal class EntityConnectionModel
	{
		public Guid SysEntitySchemaUId { get; set; }
		public Guid ColumnUId { get; set; }
	}

	#endregion
}
