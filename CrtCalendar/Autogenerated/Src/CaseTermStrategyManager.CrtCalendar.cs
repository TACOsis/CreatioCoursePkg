namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core;

	#region Class: CaseTermStrategyManager

	/// <summary>
	/// Case strategies manager.
	/// </summary>
	[Override]
	public class CaseTermStrategyManager
	{

		#region Methods: Public

		/// <summary>
		/// Method that returns instance of strategy class by name.
		/// </summary>
		/// <param name="className">Name of instantiated class.</param>
		/// <param name="arguments">Arguments for strategy class.</param>
		/// <returns>Strategy class instance.</returns>
		public virtual BaseTermStrategy<CaseTermInterval, CaseTermStates> GetItem(string className, Dictionary<string, object> arguments,
			UserConnection userConnection) {
			var workspaceTypeProvider = ClassFactory.Get<IWorkspaceTypeProvider>();
			Type classType = workspaceTypeProvider.GetType(className);
			if (classType == null) {
				return null;
			}
			string assemblyName = classType.AssemblyQualifiedName;
			var currentStrategy = ClassFactory.ForceGet<BaseTermStrategy<CaseTermInterval,
			CaseTermStates>>(assemblyName, new ConstructorArgument("userConnection", userConnection),
					new ConstructorArgument("args", arguments));
			return currentStrategy;
		}

		#endregion
	}
	#endregion
}
