namespace Creatio.Copilot
{
    using System.Collections.Generic;
    using Creatio.Copilot.Metadata;
    using Terrasoft.Enrichment.Interfaces.ChatCompletion;
    using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;

    #region Interface: ICopilotToolProcessor

    public interface ICopilotToolProcessor
    {

        #region Methods: Public

        (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> mapping) GetToolDefinitions(
            IEnumerable<CopilotActionMetaItem> actionItems, IEnumerable<CopilotIntentSchema> intents);

        List<CopilotMessage> HandleToolCalls(ChatCompletionResponse completionResponse, CopilotSession session,
            Dictionary<string, IToolExecutor> toolMapping);

        #endregion

    }

    #endregion
}

