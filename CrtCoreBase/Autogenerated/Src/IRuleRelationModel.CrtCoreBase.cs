namespace Terrasoft.Configuration.AutoEmailRelation
{
	using System;
	using System.Collections.Generic;
	using System.Text.RegularExpressions;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: RuleRelationPair

	public class RuleRelationPair
	{
		#region Constructors: Public

		public RuleRelationPair(Guid targetEntitySchemaColumnUId, Guid extraRelationValue)
		{
			ColumnUId = targetEntitySchemaColumnUId;
			ExtraRelationValue = extraRelationValue;
		}

		#endregion

		#region Properties: Public

		public Guid ColumnUId { get; set; }
		public Guid ExtraRelationValue { get; set; }

		#endregion

	}

	#endregion

	#region Interface: IRuleRelationModel

	/// <summary>
	/// Interface for entity relation rule.
	/// </summary>
	public interface IRuleRelationModel 
	{
		#region Properties: Public 

		/// <summary>
		/// <see cref="EntitySchema"/> UId for <see cref="Entity"/> that will be linked with another entities.
		/// </summary>
		Guid EntitySchemaUId {
			get;
			set;
		}

		/// <summary>
		/// <see cref="EntitySchemaColumn"/> UId, which contains mentions of link entitites.
		/// </summary>
		Guid EntitySchemaColumnUId {
			get;
			set;
		}

		/// <summary>
		/// <see cref="EntitySchema"/> UId of <see cref="Entity"/>, which column values mentioned in entity.
		/// </summary>
		Guid EntitySchemaSearchUId {
			get;
			set;
		}

		/// <summary>
		/// <see cref="EntitySchemaColumn"/> UId, which value mentioned in entity.
		/// </summary>
		Guid EntitySchemaSearchColumnUId {
			get;
			set;
		}

		/// <summary>
		/// <see cref="EntitySchema"/> UId for new link <see cref="Entity"/>.
		/// </summary>
		Guid RelationEntitySchemaUId {
			get;
			set;
		}

		/// <summary>
		/// <see cref="Regex"/> pattern for mentions search. 
		/// </summary>
		string Rule {
			get;
			set;
		}

		IEnumerable<RuleEntityConnBindingModel> AutoCompleteRules {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns collection of mentions, that found in <paramref name="text"/>.
		/// </summary>
		/// <param name="text">String value, which contains mentions of another entitites.</param>
		/// <returns>
		/// <see cref="MatchCollection"/> of mentions.
		/// </returns>
		MatchCollection GetMatches(string text);
	
		/// <summary>
		/// Returns ids of entities, filtered by <paramref name="matchCollection"/>.
		/// </summary>
		///<param name="matchCollection">Mentions collection.</param>
		///<param name="userConnection">UserConnection instance.</param>
		/// <returns>
		/// Entity ids collection.
		/// </returns>
		IEnumerable<Guid> GetEntityRelation(MatchCollection matchCollection, UserConnection userConnection);
		
		IEnumerable<RuleRelationPair> GetEntityExtendedRelations(MatchCollection matchCollection, UserConnection userConnection);
		
		Guid GetRuleTargetColumn(UserConnection userConnection);

		#endregion
	}

	#endregion

}
