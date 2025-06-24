namespace Creatio.Copilot
{
	using System.Linq;
	using Terrasoft.Core;

	internal static class CopilotExtensions
	{

		#region Methods: Public

		public static CopilotIntentSchemaManager GetIntentSchemaManager(this UserConnection userConnection) {
			return userConnection.Workspace.SchemaManagerProvider.GetManager<CopilotIntentSchemaManager>();
		}

		public static CopilotIntentSchema FindSystemIntent(this CopilotIntentSchemaManager intentSchemaManager) {
			ISchemaManagerItem<CopilotIntentSchema> intentSchemaItem = intentSchemaManager.GetItems()
				.FirstOrDefault(item => item.Instance.Type == CopilotIntentType.System);
			return intentSchemaItem?.Instance;
		}

		#endregion

	}

}

