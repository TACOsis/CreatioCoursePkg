namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Text;
	using Terrasoft.Core.Factories;

	#region Enum: SystemPromptTarget

	internal enum SystemPromptTarget
	{
		Chat = 1,
		Api = 2,
	}

	#endregion

	#region Interface: ICopilotPromptFactory

	internal interface ICopilotPromptFactory
	{
		/// <summary>
		/// Creates a system prompt for the specified target.
		/// </summary>
		/// <param name="target">The target of the system prompt.</param>
		/// <param name="options">The prompt creation options.</param>
		/// <returns>The system prompt.</returns>
		/// <exception cref="ArgumentException">An unsupported target received.</exception>
		string CreateSystemPrompt(SystemPromptTarget target, CreatePromptOptions options = null);
	}

	#endregion

	#region Class: CreatePromptOptions

	/// <summary>
	/// Options for creating a system prompt.
	/// </summary>
	/// <remarks>
	/// Do not modify the options object after creating a prompt as it may break caching.
	/// Create a new options object if needed.
	/// </remarks>
	internal class CreatePromptOptions
	{

		#region Properties: Public

		public IDictionary<string, IList<string>> AdditionalDirections { get; } =
			new Dictionary<string, IList<string>>();

		public bool TrimTrailingNewLine { get; set; } = true;

		#endregion

	}

	#endregion

	#region Class: CopilotPromptFactory

	[DefaultBinding(typeof(ICopilotPromptFactory))]
	internal class CopilotPromptFactory : ICopilotPromptFactory
	{

		#region Class: PromptFactory

		private abstract class PromptFactory
		{

			#region Constants: Protected

			protected const string HeadingSection = "__HEADING__";

			#endregion

			#region Properties: Protected

			protected abstract IReadOnlyDictionary<string, IList<string>> BasePrompt { get; }
			protected abstract IList<string> SectionNameOrder { get; }

			protected virtual ICollection<string> InvisibleSectionNames { get; } = new[] { HeadingSection };

			#endregion

			#region Methods: Public

			public string CreatePrompt(CreatePromptOptions options = null) {
				if (options == null) {
					options = new CreatePromptOptions();
				}
				return CreatePromptInternal(options);
			}

			#endregion

			#region Methods: Private

			private static bool EndsWith(string value, StringBuilder builder) {
				return builder.ToString(builder.Length - value.Length, value.Length)
					.Equals(value, StringComparison.Ordinal);
			}

			private string CreatePromptInternal(CreatePromptOptions options) {
				var builder = new StringBuilder();
				foreach (string sectionName in SectionNameOrder) {
					if (!InvisibleSectionNames.Contains(sectionName)) {
						builder.AppendLine(sectionName);
					}
					IList<string> sectionLines = BasePrompt[sectionName];
					foreach (string sectionLine in sectionLines) {
						builder.AppendLine(sectionLine);
					}
					if (options.AdditionalDirections.TryGetValue(sectionName,
							out IList<string> additionalSectionLines)) {
						foreach (string additionalSectionLine in additionalSectionLines) {
							builder.AppendLine(additionalSectionLine);
						}
					}
				}
				if (options.TrimTrailingNewLine && EndsWith(Environment.NewLine, builder)) {
					builder.Length -= Environment.NewLine.Length;
				}
				return builder.ToString();
			}

			#endregion

		}

		#endregion

		#region Class: ChatSystemPromptFactory

		private class ChatSystemPromptFactory : PromptFactory
		{

			#region Constants: Private

			private const string GlobalSettingsSection = "## Global settings";
			private const string RulesForInteractionSection = "## Rules for Interaction:";

			#endregion

			#region Properties: Protected

			protected override IReadOnlyDictionary<string, IList<string>> BasePrompt { get; } =
				new Dictionary<string, IList<string>> {
					{
						HeadingSection,
						new[] {
							"\r\n# You are the professional agent named Creatio.ai, designed to operate within the no-code platform Creatio, powered by an advanced LLM model.",
						}
					}, {
						GlobalSettingsSection,
						new[] {
							"You don't train any models or store customers' data. You are GDPR and HIPAA compliant. Your primary task is to assist users with their daily operations. To achieve this, you are equipped with the following capabilities:",
							"* Contextual Response Generation: Use the provided context to generate appropriate responses and call necessary functions.",
							"* Skill Execution: Utilize the functions and skills sent to you. A skill is a complex, sequential action on the platform aimed at fulfilling the user's goal. It comprises a prompt and a set of functions to be executed. Skill is provided for you as the tool which ends with suffix \"_skill\" (i.e. CreateVacation_skill). To start the skill you should invoke the corresponding tool. A skill is started when the corresponding tool returns a value starting with \"Skill started: Name: ...\". Until no skill has been started and no other system message instruction has been given, suggest to users all tools you have (prioritize tools based on relevance), but don't answer any of the user's questions, that are not connected with descriptions of these tools. The name of the skill is technical information, so use user-friendly description of skill instead. Initial state: no skill has been started.",
						}
					}, {
						RulesForInteractionSection,
						new[] {
							"* Topic Restrictions: Do not answer questions that are unrelated to work, such as personal preferences (e.g., pizza vs pasta). Avoid responding to queries that could harm or offend the user. Only discuss Creatio-related platforms. Refrain from discussing the cost of using Creatio. Avoid topics related to gender equality, religion or politics.",
							"* Information Requests: When needing specific information, ask for the record number or the name of the entity, not the record ID.",
							"* Communication Standards: Maintain politeness and professionalism at all times. Be specific and concise in your responses, ensuring clarity and relevance.",
							"* These rules always apply throughout the conversation:",
							"    * The system language is {{User.CultureName}}. By default, respond in {{User.CultureName}} regardless of the data language.",
							"    * If the user requests a response in a specific language, provide the response in that language.",
							"    * If the user requests a translation, respond in the requested translation language.",
							"    * Maintain continuity in {{User.CultureName}} for ongoing responses unless explicitly overridden.",
							"* Answer only in a user-friendly form that is commonly understandable for humans. Don't use json, xml, technical terms unless the user or prompt explicitly requests them.",
							"* The users know nothing about Completion API, so don't mention it in your responses.",
						}
					}
				};

			protected override IList<string> SectionNameOrder { get; } = new[] {
				HeadingSection,
				GlobalSettingsSection,
				RulesForInteractionSection
			};

			#endregion

		}

		#endregion

		#region Class: ApiSystemPromptFactory

		private class ApiSystemPromptFactory : PromptFactory
		{

			#region Constants: Private

			private const string GlobalSettingsSection = "## Global Settings";
			private const string RulesForInteractionSection = "## Rules for Interaction";
			private const string RulesForResponseGenerationSection = "## Rules for Response generation";
			private const string ResponseTopicRestrictionsSection = "## Response Topic Restrictions (cannot be answered by you under any conditions).";

			#endregion

			#region Methods: Protected

			protected override IReadOnlyDictionary<string, IList<string>> BasePrompt { get; } =
				new Dictionary<string, IList<string>> {
					{
						HeadingSection,
						new[] {
							"\r\n# You are the professional agent named Creatio.ai, designed to operate within the API based no-code platform Creatio powered by an advanced LLM model. ",
						}
					}, {
						GlobalSettingsSection,
						new[] {
							"You are GDPR and HIPAA compliant, not training any models not storing customers data. ",
						}
					}, {
						RulesForInteractionSection,
						new[] {
							"Do not expect any clarifications. Do your best to provide answer with data available. Use language the user`s query is in unless the user explicitly specifies response language.",
						}
					}, {
						RulesForResponseGenerationSection,
						new[] {
							"Must be direct, specific, relevant, concise and efficiently fulfilling the user`s request. Must maintain politeness and professionalism at all times. Must accurately use official Creatio terminology. Must be standalone and based solely on the current query.",
							"* Input: User's requests can have InputParameters section with data in JSON format. Keys are the names of input parameters, values consist from Value and Description. Keys can be matched to [#inputKey#] placeholders.",
							"* Output: User's requests can have OutputParameters section with array in JSON format, each element is an object with Name, Type and Description.",
							"* Response: Format response as JSON using names of output parameters as keys, generate values of specified type as instructed in the request, description and name, use invariant culture. For DateTime types return value in yyyy'-'MM'-'dd HH':'mm':'ss'Z' format. If no OutputParameters section, use output parameters: [{name:'content',type:'string',description:'main response content'}].",
						}
					}, {
						ResponseTopicRestrictionsSection,
						new[] {
							"Gender equality, religion, philosophy, politics, medicine, financial, tax, regulations or legal advices, Costs of using Creatio. Topics concerning business automation platforms not related to Creatio. Queries that could physically or mentally harm or offend users. Unrelated to work, such as personal preferences (e.g., pizza vs pasta).",
						}
					}
				};

			protected override IList<string> SectionNameOrder { get; } = new[] {
				HeadingSection,
				GlobalSettingsSection,
				RulesForInteractionSection,
				RulesForResponseGenerationSection,
				ResponseTopicRestrictionsSection
			};

			#endregion

		}

		#endregion

		#region Fields: Private

		private readonly IDictionary<SystemPromptTarget, PromptFactory> _promptFactoryCache =
			new Dictionary<SystemPromptTarget, PromptFactory>();

		#endregion

		#region Methods: Private

		private PromptFactory GetSystemPromptFactory(SystemPromptTarget target) {
			if (!_promptFactoryCache.TryGetValue(target, out PromptFactory factory)) {
				switch (target) {
					case SystemPromptTarget.Chat:
						factory = new ChatSystemPromptFactory();
						break;
					case SystemPromptTarget.Api:
						factory = new ApiSystemPromptFactory();
						break;
					default:
						throw new ArgumentException($"Unsupported system prompt target: {target}.", nameof(target));
				}
				_promptFactoryCache[target] = factory;
			}
			return factory;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string CreateSystemPrompt(SystemPromptTarget target, CreatePromptOptions options = null) {
			PromptFactory factory = GetSystemPromptFactory(target);
			return factory.CreatePrompt(options);
		}

		#endregion

	}

	#endregion

}

