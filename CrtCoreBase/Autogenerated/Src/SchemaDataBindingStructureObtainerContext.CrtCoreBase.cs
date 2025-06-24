namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	#region Class: SchemaDataBindingStructureColumn

	/// <summary>
	/// Schema data binding column properties.
	/// </summary>
	public class SchemaDataBindingStructureColumn
	{

		#region Fields: Public

		/// <summary>
		/// Column name.
		/// </summary>
		public string Name;

		/// <summary>
		/// Is column force updated.
		/// </summary>
		public bool IsForceUpdate;

		/// <summary>
		/// Is column a key.
		/// </summary>
		public bool IsKey;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="name">Column name.</param>
		public SchemaDataBindingStructureColumn(string name) {
			Name = name;
			IsForceUpdate = false;
			IsKey = false;
		}

		/// <summary>
		/// Constructor.
		/// </summary>
		/// <param name="name">Column name.</param>
		/// <param name="isForceUpdate">Is column force updated.</param>
		/// <param name="isKey">Is column a key.</param>
		public SchemaDataBindingStructureColumn(string name, bool isForceUpdate, bool isKey) {
			Name = name;
			IsForceUpdate = isForceUpdate;
			IsKey = isKey;
		}

		#endregion

	}

	#endregion

	#region Class: SchemaDataBindingStructure

	/// <summary>
	/// Structure for schema data binding.
	/// </summary>
	public class SchemaDataBindingStructure
	{

		#region Fields: Public

		/// <summary>
		/// Name of entity to be binded.
		/// </summary>
		public string EntitySchemaName;

		/// <summary>
		/// Pathes to column for filtering.
		/// </summary>
		public string[] FilterColumnPathes;

		/// <summary>
		/// Is need to be saved in one data binding.
		/// </summary>
		public bool IsBundle;

		/// <summary>
		/// Column names list to bind.
		/// </summary>
		public List<SchemaDataBindingStructureColumn> Columns;

		/// <summary>
		/// List of child structures.
		/// </summary>
		public List<SchemaDataBindingStructure> InnerStructures;

		/// <summary>
		/// List of depends entities.
		/// </summary>
		public List<SchemaDataBindingStructure> DependsStructures;

		#endregion

	}

	#endregion

	#region Interface: ISchemaDataBindingStructureObtainer

	/// <summary>
	/// Interface describes a way for getting schema data binding structure.
	/// </summary>
	public interface ISchemaDataBindingStructureObtainer
	{

		/// <summary>
		/// Get structure for current entity schema.
		/// </summary>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		SchemaDataBindingStructure ObtainStructure(UserConnection userConnection);

	}

	#endregion

	#region Class: SchemaDataBindingStructureObtainerContext

	/// <summary>
	/// Entry point for getting structure of schema data binding.
	/// </summary>
	public class SchemaDataBindingStructureObtainerContext
	{

		#region Fields: Private

		/// <summary>
		/// User connection.
		/// </summary>
		private UserConnection _userConnection;

		#endregion

		#region Fields: Protected

		/// <summary>
		/// Name of assembly.
		/// </summary>
		protected string AssemblyName = "Terrasoft.Configuration.";

		/// <summary>
		/// Default class name suffix for schema data structure obtainer.
		/// </summary>
		protected string ObtainerClassSuffix = "SchemaDataBindingStructureObtainer";

		#endregion

		#region Constructors: Public

		public SchemaDataBindingStructureObtainerContext(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		/// <summary>
		/// Build full structure obtainer class name by prefix.
		/// </summary>
		/// <param name="prefix">Class name prefix.</param>
		/// <returns>Full class name of structure obtainer.</returns>
		private string GetObtainerClassName(string prefix) {
			return AssemblyName + prefix + ObtainerClassSuffix;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Get structure using base strategy.
		/// </summary>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		protected SchemaDataBindingStructure ApplyBaseStrategy(string entitySchemaName) {
			var baseObtainer = ClassFactory.Get<BaseSchemaDataBindingStructureObtainer>();
			return baseObtainer.ObtainStructureBySchemaName(_userConnection, entitySchemaName);
		}

		/// <summary>
		/// Determine which strategy to use and apply it depending on entity schema name.
		/// </summary>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		protected SchemaDataBindingStructure ApplyStrategyByName(string entitySchemaName) {
			var className = GetObtainerClassName(entitySchemaName);
			var obtainerType = GetTypeInAssemblies(className);
			if (obtainerType == null) {
				return ApplyBaseStrategy(entitySchemaName);
			}
			var obtainer = ClassFactory.Get(obtainerType) as ISchemaDataBindingStructureObtainer;
			return obtainer.ObtainStructure(_userConnection);
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
		/// Get schema data binding hierarchical structure for entity schema.
		/// </summary>
		/// <param name="entitySchemaName">Entity schema name.</param>
		/// <returns><see cref="SchemaDataBindingStructure"/></returns>
		public virtual SchemaDataBindingStructure ObtainStructureByStrategy(string entitySchemaName) {
			return ApplyStrategyByName(entitySchemaName);
		}

		#endregion

	}

	#endregion

}

