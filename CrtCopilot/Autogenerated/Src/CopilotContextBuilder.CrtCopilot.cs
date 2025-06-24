namespace Creatio.Copilot
{
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	public interface ICopilotContextBuilder
	{
		string BuildMessageContent(CopilotContext copilotContext);
	}

	[DefaultBinding(typeof(ICopilotContextBuilder))]
	internal class CopilotContextBuilder: ICopilotContextBuilder
	{

		#region Constants: Private

		private const string DefaultCopilotContextPromptTemplate = "## Get page data\n" +
            "When interacting with you, the user sees a Creatio page\n\n" +
            "### Data structure\n" +
            "* You receive of the page structure (not a actual data)\n" +
            "* The page structure is very technical information, AVOID IT IN YOU RESPONSES\n\n" +
            "### Emphasize data over structure\n" +
            "* Minimize mentions of technical page structure details in responses to the user\n" +
            "* Prioritize using the RetrieveEntityData function to fetch actual record data\n" +
            "* Focus on providing relevant data based on the user's query, regardless of the specific entity type shown on the current page\n\n" +
            "### Data retrieval\n" +
            "* You don't have direct access to the page data, retrieve data using the RetrieveEntityData function\n\n" +
            "### Responding\n" +
            "* In your responses, prioritize data (use RetrieveEntityData function). No one is interested in structure\n" +
            "* Prefer captions not technical names\n" +
            "* Avoid displaying large amounts of text without urgent necessity\n" +
            "* Limit lists of columns/fields to the most essential (e.g., less than 7) to maintain clarity\n" +
            "* Prefer **aggregated information** not static data\n" +
            "* Provide concise, aggregated insights from actual data\n\n" +
            "### Assist with data analysis\n" +
            "* Proactively offer data analysis and trends based on the information available on the page\n" +
            "* Highlight key metrics, patterns, or anomalies found in the data to deliver valuable insights\n" +
            "* Suggest actions or recommendations informed by the data analysis when applicable\n" +
            "* Each EntitySchemaName has own displayColumnName that contains the name of the column that is visible to user. If the datasource contains non empty array of records then associate each displayColumnName of the datasource with displayColumnValue for each record.\n\n" +
            "Current page structure is:\n" +
            "{contextParts}";

		#endregion

		#region Field: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public CopilotContextBuilder(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		private string MessageContentTemplate => SystemSettings.GetValue(_userConnection,
			"CopilotContextPromptTemplate", DefaultCopilotContextPromptTemplate);

		#endregion

		#region Methods: Private

		private void UpdateContextPartDataSourceColumns(CopilotContextPart contextPart) {
			contextPart.DataSources.ForEach(dataSource => {
				if (dataSource.Records.IsEmpty()) {
					return;
				}
				dataSource.Columns = GetEntitySchemaColumns(dataSource.EntitySchemaName);
			});
		}

		private List<CopilotContextDataSourceColumn> GetEntitySchemaColumns(string entitySchemaName) {
			EntitySchema entitySchema = _userConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			var columns = entitySchema.Columns.Select(column => new CopilotContextDataSourceColumn {
				Name = column.Name,
				Caption = column.Caption,
				Type = column.DataValueType?.Name,
				ReferenceEntitySchemaName = column.ReferenceSchema?.Name
			}).ToList();
			return columns;
		}

        #endregion

        #region Methods: Public

        public string BuildMessageContent(CopilotContext copilotContext) {
            if (copilotContext == null || copilotContext.Parts.Count == 0) {
                return null;
            }
            foreach (CopilotContextPart contextPart in copilotContext.Parts) {
                UpdateContextPartDataSourceColumns(contextPart);
            }
            string contextContent = Json.Serialize(copilotContext);
            string contextMessageContent = MessageContentTemplate.Replace("{contextParts}", contextContent);
            return contextMessageContent;
        }

        #endregion

    }
}

