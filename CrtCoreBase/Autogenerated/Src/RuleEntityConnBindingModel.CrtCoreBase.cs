namespace Terrasoft.Configuration.AutoEmailRelation
{
	using System;
	
	#region Class RuleEntityConnBindingModel
	
	/// <summary>Columns bindings, used to fill additional list of relations.</summary>
	/// <remarks>
	/// For example, if rule fill <see cref="Activity.Account"/> column and <see cref="Account.PrimaryContact"/> is filled,
	/// then fill <see cref="Activity.Contact"/> column with PrimaryContact value.
	/// In this example <see cref="Activity"/> UId will be <see cref="RuleEntityConnBindingModel.TargetEntitySchemaUId"/>,
	/// <see cref="Activity.Contact"/> UId will be <see cref="RuleEntityConnBindingModel.TargetEntitySchemaColumnUId"/>,
	/// <see cref="Account"/> UID will be <see cref="RuleEntityConnBindingModel.SourceEntitySchemaUId"/> and
	/// <see cref="Account.PrimaryContact"/> UID will be <see cref="RuleEntityConnBindingModel.SourceEntitySchemaColumnUId"/>.
	/// <remarks>
	public class RuleEntityConnBindingModel
	{
		/// <summary>
		/// Target <see cref="EntitySchema"/> UId.
		/// </summary>
		public Guid TargetEntitySchemaUId {
			get;
			set;
		}

		/// <summary>
		/// Target <see cref="EntitySchemaColumn"/> UId.
		/// </summary>
		public Guid TargetEntitySchemaColumnUId {
			get;
			set;
		}
		
		/// <summary>
		/// Source <see cref="EntitySchema"/> UId.
		/// </summary>
		public Guid SourceEntitySchemaUId {
			get;
			set;
		}
		
		/// <summary>
		/// Source <see cref="EntitySchemaColumn"/> UId.
		/// </summary>
		public Guid SourceEntitySchemaColumnUId {
			get;
			set;
		}
	}

	#endregion
}
