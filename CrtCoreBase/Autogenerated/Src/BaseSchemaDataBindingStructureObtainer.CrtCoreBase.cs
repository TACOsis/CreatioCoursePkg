namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;

	#region Class: BaseSchemaDataBindingStructureObtainer

	/// <summary>
	/// Default implementation of schema data structure obtainer. It is called when there is no specific class is
	/// defined for provided entity schema.
	/// </summary>
	public class BaseSchemaDataBindingStructureObtainer: ISchemaDataBindingStructureObtainer
	{

		#region Fields: Private

		private List<string> _ignoredColumns = new List<string> {
			"CreatedOn",
			"CreatedBy",
			"ModifiedOn",
			"ModifiedBy"
		};

		#endregion

		#region Constructors: Public

		public BaseSchemaDataBindingStructureObtainer() { }

		#endregion

		#region Methods: Public

		/// <summary>
		/// Get default structure for any entity schema.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		public virtual SchemaDataBindingStructure ObtainStructureBySchemaName(UserConnection userConnection, string entitySchemaName) {
			var entitySchema = userConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			var structure = new SchemaDataBindingStructure {
				EntitySchemaName = entitySchemaName,
				Columns = entitySchema.Columns
					.Where(column => !column.IsVirtual && !column.IsSystem)
					.Where(column => !_ignoredColumns.Contains(column.Name))
					.Select(column => column.Name == entitySchema.PrimaryColumn.Name ?
						new SchemaDataBindingStructureColumn(column.Name, false, true) :
						new SchemaDataBindingStructureColumn(column.Name))
					.ToList(),
				FilterColumnPathes = new string[] { "Id" }
			};
			return structure;
		}

		/// <summary>
		/// Get structure for current entity schema.
		/// </summary>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		/// <exception cref="NotImplementedException">In base obtainer there is no current schema, so exception is thrown always.</exception>
		public virtual SchemaDataBindingStructure ObtainStructure(UserConnection userConnection) {
			throw new NotImplementedException("Use ObtainStructureBySchemaName in base obtainer");
		}

		#endregion

	}

	#endregion

}

