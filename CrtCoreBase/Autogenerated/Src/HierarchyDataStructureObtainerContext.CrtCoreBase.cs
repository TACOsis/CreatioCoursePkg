namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: HierarchyDataStructureFilter

	/// <summary>
	/// Class contains entity filter.
	/// </summary>
	public class HierarchyDataStructureFilter
	{

		#region Properties: Public

		/// <summary>
		/// Column path.
		/// </summary>
		public string ColumnPath {
			get; private set;
		}

		/// <summary>
		/// Value.
		/// </summary>
		public IEnumerable<object> Values
		{
			get; private set;
		}

		/// <summary>
		/// Filter comparison type.
		/// </summary>
		public FilterComparisonType ComparisonType {
			get; private set;
		}
		
		/// <summary>
		/// Logical operation.
		/// </summary>
		public LogicalOperationStrict LogicalOperation
		{
			get; private set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="columnPath">Column path.</param>
		/// <param name="values">Values collection.</param>
		/// <param name="comparisonType">Comparison type.</param>
		/// <param name="logicalOperation">Logical operation.</param>
		public HierarchyDataStructureFilter(string columnPath, IEnumerable<object> values,
				FilterComparisonType comparisonType = FilterComparisonType.Equal,
				LogicalOperationStrict logicalOperation = LogicalOperationStrict.And) {
			ColumnPath = columnPath;
			Values = values;
			ComparisonType = comparisonType;
			LogicalOperation = logicalOperation;
		}

		#endregion

	}

	#endregion
	
	#region Class: HierarchyDataStructureFilterGroup

	/// <summary>
	/// Group for hierarchy data structure filters.
	/// </summary>
	public class HierarchyDataStructureFilterGroup
	{
		
		#region Properties: Public
		
		/// <summary>
		/// Filters collection.
		/// </summary>
		public IEnumerable<HierarchyDataStructureFilter> Filters { get; private set; }

		/// <summary>
		/// Logical operation.
		/// </summary>
		public LogicalOperationStrict LogicalOperation { get; private set; }
		
		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="filters">Filters collection.</param>
		/// <param name="logicalOperation">Logical operation.</param>
		public HierarchyDataStructureFilterGroup(IEnumerable<HierarchyDataStructureFilter> filters,
			LogicalOperationStrict logicalOperation = LogicalOperationStrict.And) {
			Filters = filters;
			LogicalOperation = logicalOperation;
		}
		
		#endregion
		
	}

	#endregion

	#region Class: HierarchyDataStructure

	/// <summary>
	/// Class holds structure of hierarchical data.
	/// </summary>
	public class HierarchyDataStructure
	{
		public string SchemaName;
		public List<string> Columns;
		/// <summary>
		/// If current structure object does not have a parent foreign
		/// table name than here need to be putted null.
		/// </summary>
		public string ParentColumnName;
		/// <summary>
		/// List of child structures.
		/// </summary>
		public List<HierarchyDataStructure> Structures;
		/// <summary>
		/// List filters.
		/// </summary>
		public HierarchyDataStructureFilterGroup Filters;
	}

	#endregion

	#region interface: IHierarchyDataStructureObtainer

	/// <summary>
	/// Interface describes unified way to get data structure
	/// by obtainer strategy algorithms.
	/// </summary>
	public interface IHierarchyDataStructureObtainer {

		/// <summary>
		/// Inizializes obtainer.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/></param>
		void Initalize(UserConnection userConnection);

		/// <summary>
		/// Get structure of hierarchy data by data source name.
		/// </summary>
		/// <returns><see cref="HierarchyDataStructure"/>Structure of hierarchical data source name.</returns>
		HierarchyDataStructure ObtainStructure();
	}

	#endregion

	#region Class: HierarchyDataStructureObtainerContext

	/// <summary>
	/// Describe obtainer that determine structure obtaining strategy.
	/// </summary>
	public class HierarchyDataStructureObtainerContext
	{

		#region Fields: Private

		private UserConnection _userConnection;

		#endregion

		#region Fields: Protected

		protected string ObtainerClassNameEnding = "HierarchyDataStructureObtainer";
		protected string AssemblyClassName = "Terrasoft.Configuration.";

		#endregion

		#region Constructors: Public

		public HierarchyDataStructureObtainerContext(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Build full structure obtainer class name by schema name.
		/// </summary>
		/// <param name="prefix">Class name prefix.</param>
		/// <returns>Full class name of structure obtainer.</returns>
		private string GetObtainerClassName(string schemaName) {
			return AssemblyClassName + schemaName + ObtainerClassNameEnding;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Try to get structure by specialized obtainer determined by data source name.
		/// </summary>
		/// <param name="schemaName">Data source name.</param>
		/// <returns><see cref="HierarchyDataStructure"/>Structure of hierarchical data.</returns>
		protected HierarchyDataStructure ApplyStrategyByName(string schemaName) {
			string className = GetObtainerClassName(schemaName);
			Type classNameType = GetTypeInAssemblies(className);

			if (classNameType == null) {
				return null;
			}

			var structureObtainer = ClassFactory.Get(classNameType) as IHierarchyDataStructureObtainer;
			structureObtainer.Initalize(_userConnection);

			return structureObtainer.ObtainStructure();
		}

		/// <summary>
		/// Searches type in assemblies.
		/// </summary>
		/// <param name="fullClassName">Full class name.</param>
		/// <returns><see cref="Type"/></returns>
		protected Type GetTypeInAssemblies(string fullClassName) {
			foreach (var assembly in AppDomain.CurrentDomain.GetAssemblies().Reverse()) {
				var type = assembly.GetType(fullClassName);
				if (type != null) {
					return type;
				}
			}
			return null;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Determine way for getting hierarchical data structure.
		/// </summary>
		/// <param name="schemaName">Data source name.</param>
		/// <returns><see cref="HierarchyDataStructure"/>Structure of hierarchical data.</returns>
		public virtual HierarchyDataStructure ObtainStructureByObtainerStrategy(string schemanName) {
			return ApplyStrategyByName(schemanName);
		}

		#endregion

	}

	#endregion
}
