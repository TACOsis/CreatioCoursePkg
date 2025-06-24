namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;

	#region Class: BaseHierarchyDataStructureObtainer

	/// <summary>
	/// Describes base obtainer strategy for getting product structure.
	/// </summary>
	public class BaseHierarchyDataStructureObtainer : IHierarchyDataStructureObtainer
	{

		#region Fields: Protected

		protected UserConnection UserConnection;

		#endregion

		#region Constructors: Public

		public BaseHierarchyDataStructureObtainer() {
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Obtain structure for entity schema.
		/// </summary>
		/// <param name="entitySchemaName">Entity schema name</param>
		/// <returns>Structure</returns>
		protected HierarchyDataStructure ObtainStructureForEntitySchema(string entitySchemaName) {
			var structure = new HierarchyDataStructure {
				SchemaName = entitySchemaName,
				Columns = new List<string>()
			};
			var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			foreach (var column in entitySchema.Columns) {
				if (column.IsVirtual || column.IsSystem || !column.IsValueCloneable) {
					continue;
				}
				structure.Columns.Add(column.Name);
			}
			return structure;
		}

		#endregion

		#region Methods: Public

		public void Initalize(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		/// <summary>
		/// Obtain structure applying base strategy by hierarchical data source name.
		/// </summary>
		/// <returns><see cref="HierarchyDataStructure"/>Structure of hierarchical data.</returns>
		public virtual HierarchyDataStructure ObtainStructure() {
			var structure = new HierarchyDataStructure();
			return structure;
		}

		#endregion
	}

	#endregion
}
