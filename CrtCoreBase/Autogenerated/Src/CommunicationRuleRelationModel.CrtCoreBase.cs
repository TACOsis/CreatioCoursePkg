namespace Terrasoft.Configuration.AutoEmailRelation
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Common;

	#region Class: CommunicationRuleRelationModel

	/// <summary>
	/// <see cref="IRuleRelationModel"/> implementation, used for <see cref="ContactCommunication"/> and
	/// <see cref="AccountCommunication"/> entities.
	/// </summary>
	public class CommunicationRuleRelationModel: RuleRelationModel
	{
		#region Fields: Private 

		/// <summary>
		/// <see cref="EntitySchema"/> name for base entity.
		/// </summary>
		/// <remarks>
		/// For example, SchemaName for ContactCommunication is Contact, for AccountCommunication - Account.
		/// </remarks>
		private string _schemaName;

		/// <summary>
		/// Path to Type column, in reference to base entity.
		/// </summary>
		/// <remarks>
		/// For example, CommunicationTypeColumnPath for ContactCommunication is
		/// [ContactCommunication:Contact:Id].CommunicationType
		/// </remarks>
		private string _communicationTypeColumnPath;
		
		/// <summary>
		/// Path to Number column, in reference to base entity.
		/// </summary>
		/// <remarks>
		/// For example, CommunicationTypeColumnPath for ContactCommunication is
		/// [ContactCommunication:Contact:Id].Number
		/// </remarks>
		private string _numberColumnPath;
		
		/// <summary>
		/// Filter value for base entity type.
		/// </summary>
		private Guid _typeFilter;
		
		private string _targetColumnName;

		private readonly Guid _emailCommunicationId = new Guid("EA350DD6-66CC-DF11-9B2A-001D60E938C6");

		#endregion

		#region Constructors: Public 

		/// <summary>
		/// Creates CommunicationRuleRelationModel instance.
		/// </summary>
		/// <param name="schemaName"><see cref="CommunicationRuleRelationModel.SchemaName"/> value.</param>
		/// <param name="schemaUId"><see cref="CommunicationRuleRelationModel.RelationEntitySchemaUId"/> value.</param>
		/// <param name="communicationTypeColumnPath">
		/// <see cref="CommunicationRuleRelationModel.CommunicationTypeColumnPath"/> value.
		/// </param>
		/// <param name="numberColumnPath"><see cref="CommunicationRuleRelationModel.NumberColumnPath"/> value.</param>
		/// <param name="typeFilter"><see cref="CommunicationRuleRelationModel.TypeFilter"/> value.</param>
		/// <returns>CommunicationRuleRelationModel instance.</returns>
		public CommunicationRuleRelationModel(string schemaName, Guid schemaUId, string communicationTypeColumnPath,
				string numberColumnPath, Guid typeFilter, string targetColumnName) {
			RelationEntitySchemaUId = schemaUId;
			_schemaName = schemaName;
			_communicationTypeColumnPath = communicationTypeColumnPath;
			_numberColumnPath = numberColumnPath;
			_typeFilter = typeFilter;
			_targetColumnName = targetColumnName;
		}

		#endregion
		
		#region Properties: Public
		
		/// <summary>
		/// <see cref="RuleRelationModel.RelationEntitySchemaUId"/>. Independent property in this implementation.
		/// <summary>
		public override Guid RelationEntitySchemaUId { 
			get;
			set;
		}
		
		#endregion
		
		#region Methods: Public
		
		public override Guid GetRuleTargetColumn(UserConnection userConnection) {
			EntitySchema schema = userConnection.EntitySchemaManager.GetInstanceByUId(EntitySchemaUId);
			var column = schema.Columns.First(c => c.ReferenceSchema != null &&
					c.ReferenceSchema.Name == _schemaName && c.Name == _targetColumnName);
			return column.UId;
		}
		
		/// <summary>
		/// <see cref="IRuleRelationModel.GetEntityRelation(MatchCollection, UserConnection)"/>
		/// </summary>
		public override IEnumerable<Guid> GetEntityRelation(MatchCollection matchCollection,
				UserConnection userConnection) {
			EntitySchemaQuery esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, _schemaName);
			esq.AddColumn(_communicationTypeColumnPath);
			esq.AddColumn(_numberColumnPath);
			var idColumn = esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.Filters.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.Equal,
				_communicationTypeColumnPath,
				_emailCommunicationId
			));
			var filterGroupType = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			filterGroupType.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.NotEqual,
				"Type",
				_typeFilter
			));
			filterGroupType.Add(esq.CreateFilterWithParameters(
				FilterComparisonType.IsNull,
				"Type"
			));
			esq.Filters.Add(filterGroupType);
			var filterGroupNumber = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			foreach (var item in matchCollection) {
				filterGroupNumber.Add(esq.CreateFilterWithParameters(
					FilterComparisonType.Equal,
					_numberColumnPath,
					item.ToString()
				));
			}
			esq.Filters.Add(filterGroupNumber);
			if (_schemaName == "Contact") {
				AddContactByUserFilter(esq, userConnection);
			}
			var entityCollection = esq.GetEntityCollection(userConnection);
			return entityCollection.Select(item => item.GetTypedColumnValue<Guid>(esq.PrimaryQueryColumn.Name)).ToList();
		}

		/// <summary>
		/// Adds additional filter, the following condition if user by contact is not exists.
		/// </summary>
		/// <param name="esq">Entity schema query.</param>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		/// <remarks>
		/// Portal users ignored.
		/// </remarks>
		public virtual void AddContactByUserFilter(EntitySchemaQuery esq, UserConnection userConnection) {
			Select select = esq.GetSelectQuery(userConnection);
			select.And("Contact", "Id").Not().In(
					new Select(userConnection)
						.Column("SysAdminUnit", "ContactId")
					.From("SysAdminUnit")
					.Where("SysAdminUnit", "ContactId").IsEqual("Contact", "Id")
					.And("SysAdminUnit", "ConnectionType").IsNotEqual(Column.Parameter((int)UserType.SSP))
			);
		}

		#endregion
	}

	#endregion
}

