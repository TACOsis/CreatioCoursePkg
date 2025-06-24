namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.Copilot.Metadata;
	using Creatio.FeatureToggling;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	[DefaultBinding(typeof(ICopilotToolProcessor))]
	internal class CopilotToolProcessor : ICopilotToolProcessor
	{

		#region Class: NotFoundToolExecutor

		private class NotFoundToolExecutor : IToolExecutor
		{
			public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
				CopilotSession session) {
				return new List<CopilotMessage> {
					new CopilotMessage(FnNotFoundMessage, CopilotMessageRole.Tool, toolCallId),
				};
			}
		}

		#endregion

		#region Constants: Private

		private const string FnNotFoundMessage = "Function not found. Use only suggested functions (tools)!";

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly ICopilotMsgChannelSender _msgChannelSender;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotToolProcessor"/> class.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="msgChannelSender">Copilot client message sender.</param>
		public CopilotToolProcessor(UserConnection userConnection, ICopilotMsgChannelSender msgChannelSender) {
			_userConnection = userConnection;
			_msgChannelSender = msgChannelSender;
		}

		#endregion

		#region Properties: Private

		private ICacheStore _cacheStore;
		private ICacheStore CacheStore =>
			_cacheStore ?? (_cacheStore = _userConnection.SessionCache.WithLocalCaching(nameof(CopilotToolProcessor)));

		private HashSet<string> _systemActionNames;
		private HashSet<string> SystemActionNames {
			get {
				if (_systemActionNames == null) {
					_systemActionNames = CacheStore.GetValue<HashSet<string>>(nameof(SystemActionNames));
					if (_systemActionNames == null) {
						_systemActionNames = new HashSet<string>(LoadSystemActionNames());
						CacheStore[nameof(SystemActionNames)] = _systemActionNames;
					}
				}
				return _systemActionNames;
			}
		}

		#endregion

		#region Methods: Private

		private static Dictionary<string, object> ParseArguments(string functionCallingArguments) {
			Dictionary<string, object> result = functionCallingArguments.IsNotNullOrWhiteSpace()
				? JsonConvert.DeserializeObject<Dictionary<string, object>>(functionCallingArguments)
				: null;
			return result ?? new Dictionary<string, object>();
		}

		private static string AppendAlternativeName(LocalizableString description, string name, string alternativeName) {
			if (Features.GetIsDisabled<Terrasoft.Configuration.GenAI.GenAIFeatures.AddCaptionToDescription>() ||
					string.IsNullOrWhiteSpace(alternativeName) ||
					string.Equals(name, alternativeName, StringComparison.InvariantCultureIgnoreCase)) {
				return description?.Value;
			}
			string separator = string.Empty;
			string value = description == null ? string.Empty : description.Value;
			if (!string.IsNullOrWhiteSpace(value)) {
				separator = value.EndsWith(".") ? " " : ". "; 
			}
			return $"{value}{separator}Alternative name: [{alternativeName}]";
		}

		private static ToolDefinition GetToolDefinition(CopilotIntentSchema intentSchema) {
			string toolName = intentSchema.Type == CopilotIntentType.Agent ? $"{intentSchema.Name}_agent" : $"{intentSchema.Name}_skill";
			string description;
			if (!string.IsNullOrWhiteSpace(description = intentSchema.IntentDescription) ||
					!string.IsNullOrWhiteSpace(description = intentSchema.Description)) {
				description = AppendAlternativeName(description, intentSchema.Name, intentSchema.Caption);
			} else {
				description = intentSchema.Caption;
			}
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, description);
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		private static PropertyDefinition DefineCompositeObjectListToolDefinition(
				ICopilotParameterMetaInfo parameterMetaInfo) {
			var properties = new Dictionary<string, PropertyDefinition>();
			foreach (ICopilotParameterMetaInfo internalParameterMetaInfo in parameterMetaInfo.ItemProperties) {
				properties[internalParameterMetaInfo.Name] = GetToolParam(internalParameterMetaInfo);
			}
			List<string> requiredProperties = parameterMetaInfo.ItemProperties
				.Where(param => param.IsRequired)
				.Select(param => param.Name).ToList();
			var objectDefinition = PropertyDefinition.DefineObject(
				properties,
				requiredProperties,
				AppendAlternativeName(parameterMetaInfo.Description, parameterMetaInfo.Name, parameterMetaInfo.Caption),
				null);
			return PropertyDefinition.DefineArray(objectDefinition);
		}

		private static PropertyDefinition GetToolParam(ICopilotParameterMetaInfo parameterMetaInfo) {
			string description = AppendAlternativeName(parameterMetaInfo.Description, parameterMetaInfo.Name,
				parameterMetaInfo.Caption);
			switch (parameterMetaInfo.DataValueType) {
				case TextDataValueType _:
				case GuidDataValueType _:
				case DateTimeDataValueType _:
					return PropertyDefinition.DefineString(description);
				case FloatDataValueType _:
					return PropertyDefinition.DefineNumber(description);
				case IntegerDataValueType _:
					return PropertyDefinition.DefineInteger(description);
				case BooleanDataValueType _:
					return PropertyDefinition.DefineBoolean(description);
				case null:
					return PropertyDefinition.DefineNull(description);
				case CompositeObjectListDataValueType _:
					return DefineCompositeObjectListToolDefinition(parameterMetaInfo);
				default:
					throw new NotImplementedException(
						$"DataValueType {parameterMetaInfo.DataValueType.Name} is not supported yet");
			}
		}

		private IEnumerable<string> LoadSystemActionNames() {
			CopilotIntentSchemaManager intentSchemaManager = _userConnection.GetIntentSchemaManager();
			CopilotIntentSchema systemIntent = intentSchemaManager.FindSystemIntent();
			return systemIntent?.Actions.Select(systemAction => systemAction.Name) ?? Array.Empty<string>();
		}

		private int GetAvailableFunctionCallingCount(List<CopilotMessage> messages) {
			int maxFunctionCallingCountPerCopilotRequest =
				SystemSettings.GetValue(_userConnection, "MaxFunctionCallingCountPerCopilotRequest", 15);
			int lastUserIndex = messages.FindLastIndex(x => x.Role == CopilotMessageRole.User);
			int lastAssistantMessagesCount = messages
				.Skip(lastUserIndex + 1)
				.Count(m => m.Role == CopilotMessageRole.Assistant);
			int availableFunctionCallingCount = maxFunctionCallingCountPerCopilotRequest - lastAssistantMessagesCount;
			return availableFunctionCallingCount;
		}

		private ToolDefinition GetToolDefinition(CopilotActionMetaItem actionMetaItem) {
			CopilotActionDescriptor actionDescriptor = actionMetaItem.Descriptor;
			string toolName = actionDescriptor.Name;
			if (!SystemActionNames.Contains(toolName)) {
				toolName = $"{toolName}_action";
			}
			string description = AppendAlternativeName(actionDescriptor.Description, actionDescriptor.Name,
				actionDescriptor.Caption);
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, description);
			var parameters = actionDescriptor.Parameters
				.Where(param => param.Direction == ParameterDirection.Input);
			foreach (ICopilotParameterMetaInfo parameterMetaInfo in parameters) {
				functionDefinitionBuilder = functionDefinitionBuilder.AddParameter(parameterMetaInfo.Name,
					GetToolParam(parameterMetaInfo), parameterMetaInfo.IsRequired);
			}
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		#endregion

		#region Methods: Public

		public (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> mapping) GetToolDefinitions(
				IEnumerable<CopilotActionMetaItem> actionItems,
				IEnumerable<CopilotIntentSchema> intents) {
			var tools = new List<ToolDefinition>();
			var mapping = new Dictionary<string, IToolExecutor>();
			foreach (CopilotIntentSchema intent in intents) {
				ToolDefinition toolDefinition = GetToolDefinition(intent);
				mapping[toolDefinition.Function.Name] = new IntentToolExecutor(intent);
				tools.Add(toolDefinition);
			}
			foreach (CopilotActionMetaItem actionItem in actionItems) {
				ToolDefinition toolDefinition = GetToolDefinition(actionItem);
				mapping[toolDefinition.Function.Name] = new ActionToolExecutor(actionItem, _userConnection, _msgChannelSender);
				tools.Add(toolDefinition);
			}
			return (tools, mapping);
		}

		public List<CopilotMessage> HandleToolCalls(ChatCompletionResponse completionResponse, CopilotSession session,
				Dictionary<string, IToolExecutor> toolMapping) {
			int availableFunctionCallingCount = GetAvailableFunctionCallingCount(session.Messages.ToList());
			IEnumerable<ToolCall> toolCalls = completionResponse?.Choices
				?.SelectMany(choice => choice?.Message?.ToolCalls ?? new List<ToolCall>())
				.Where(toolCall => toolCall?.FunctionCall != null && toolCall.FunctionCall.Name.IsNotNullOrEmpty())
				.Take(availableFunctionCallingCount)
				.ToList();
			var resultMessages = new List<CopilotMessage>();
			if (toolCalls.IsNullOrEmpty() || toolMapping.IsNullOrEmpty()) {
				return resultMessages;
			}
			foreach (ToolCall toolCall in toolCalls) {
				Dictionary<string, object> arguments = ParseArguments(toolCall.FunctionCall.Arguments);
				string functionCallName = toolCall.FunctionCall.Name;
				resultMessages.Add(new CopilotMessage(toolCall));
				List<CopilotMessage> copilotMessages;
				if (!toolMapping.TryGetValue(functionCallName, out IToolExecutor executor)) {
					var notFoundToolExecutor = new NotFoundToolExecutor();
					copilotMessages = notFoundToolExecutor.Execute(toolCall.Id, arguments, session);
					resultMessages.AddRange(copilotMessages);
					continue;
				}
				copilotMessages = executor.Execute(toolCall.Id, arguments, session);
				resultMessages.AddRange(copilotMessages);
			}
			return resultMessages;
		}

		#endregion

	}
}

