namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Diagnostics;
	using System.Text;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	#region Interface: IVariableProvider

	/// <summary>
	/// Provides variables for prompts.
	/// </summary>
	internal interface IVariableProvider
	{

		#region Properties: Public

		/// <summary>
		/// Gets the namespace of the variables provided by the current instance.
		/// </summary>
		string Namespace { get; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets the value of the variable with the specified name.
		/// </summary>
		/// <param name="name">The name of the variable.</param>
		/// <returns>The value of the variable if exists; otherwise, <see langword="null"/>.</returns>
		string GetVariableValue(string name);

		#endregion

	}

	#endregion

	#region Interface: ICopilotPromptVariableResolver

	/// <summary>
	/// Resolves variables in prompts.
	/// </summary>
	internal interface ICopilotPromptVariableResolver
	{

		#region Methods: Public

		/// <summary>
		/// Resolves the variables in the specified prompt.
		/// </summary>
		/// <param name="prompt">The prompt to resolve variables in.</param>
		/// <returns>The prompt with resolved variables.</returns>
		/// <exception cref="ArgumentException">Encountered a malformed variable.</exception>
		/// <exception cref="KeyNotFoundException">Encountered an unknown variable.</exception>
		string Resolve(string prompt);

		#endregion

	}

	#endregion

	#region Interface: ICopilotPromptVariableResolverFactory

	/// <summary>
	/// Provides instances of <see cref="ICopilotPromptVariableResolver"/>.
	/// </summary>
	internal interface ICopilotPromptVariableResolverFactory
	{

		#region Methods: Public

		/// <summary>
		/// Creates a new instance of <see cref="ICopilotPromptVariableResolver"/>.
		/// </summary>
		/// <returns></returns>
		ICopilotPromptVariableResolver Create();

		#endregion

	}

	#endregion

	#region Class: DefaultCopilotPromptVariableResolverFactory

	/// <summary>
	/// Default implementation of <see cref="ICopilotPromptVariableResolverFactory"/>.
	/// </summary>
	/// <remarks>
	/// Resolves variables from the following namespaces:
	/// <list type="bullet">
	/// <item>User</item>
	/// </list>
	/// </remarks>
	[DefaultBinding(typeof(ICopilotPromptVariableResolverFactory))]
	internal class DefaultCopilotPromptVariableResolverFactory : ICopilotPromptVariableResolverFactory
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultCopilotPromptVariableResolverFactory"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public DefaultCopilotPromptVariableResolverFactory(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public ICopilotPromptVariableResolver Create() {
			var variableProviders = new IVariableProvider[] {
				new UserVariableProvider(_userConnection)
			};
			return new CopilotPromptVariableResolver(variableProviders);
		}

		#endregion

	}

	#endregion

	#region Class: UserVariableProvider

	/// <summary>
	/// Provides variables related to the current user.
	/// </summary>
	/// <remarks>
	/// Resolves the following variables under the "User" namespace:
	/// <list type="bullet">
	/// <item>CultureName</item>
	/// <item>TimeZoneName</item>
	/// </list>
	/// </remarks>
	internal class UserVariableProvider : IVariableProvider
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="UserVariableProvider"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public UserVariableProvider(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Public

		/// <inheritdoc />
		public string Namespace => "User";

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string GetVariableValue(string name) {
			switch (name) {
				case "CultureName":
					return _userConnection.CurrentUser.Culture.EnglishName;
				case "TimeZoneName":
					return _userConnection.CurrentUser.TimeZone.DisplayName;
				default:
					return null;
			}
		}

		#endregion

	}

	#endregion

	#region Class: CopilotPromptVariableResolver

	/// <inheritdoc cref="ICopilotPromptVariableResolver"/>
	[DefaultBinding(typeof(ICopilotPromptVariableResolver))]
	internal class CopilotPromptVariableResolver : ICopilotPromptVariableResolver
	{

		#region Struct: Variable

		[DebuggerDisplay("{Namespace}.{Name} ({StartPosition}:{EndPosition})")]
		private struct Variable
		{
			public string Namespace;
			public string Name;
			public int StartPosition;
			public int EndPosition;
		}

		#endregion

		#region Constants: Private

		private const string OpenTag = "{{";
		private const string CloseTag = "}}";
		private const float BuilderCapacityMultiplier = 1.1f;

		#endregion

		#region Fields: Private

		private static readonly char[] _variableNameSeparator = { '.' };

		private readonly IReadOnlyDictionary<string, IVariableProvider> _variableProviders;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotPromptVariableResolver"/> class.
		/// </summary>
		/// <param name="variableProviders">The collection of variable providers.</param>
		/// <exception cref="ArgumentException">Encountered duplicate namespace among variable providers.</exception>
		public CopilotPromptVariableResolver(ICollection<IVariableProvider> variableProviders) {
			var variableProvidersDict = new Dictionary<string, IVariableProvider>(variableProviders.Count);
			try {
				foreach (IVariableProvider variableProvider in variableProviders) {
					variableProvidersDict.Add(variableProvider.Namespace, variableProvider);
				}
			} catch (ArgumentException ex) {
				throw new ArgumentException("Encountered duplicate namespace among variable providers.",
					nameof(variableProviders), ex);
			}
			_variableProviders = variableProvidersDict;
		}

		#endregion

		#region Methods: Private

		private static IList<Variable> GetVariables(string text) {
			var variablePositions = new List<Variable>();
			var currentPosition = 0;
			while ((currentPosition = text.IndexOf(OpenTag, currentPosition, StringComparison.Ordinal)) != -1) {
				int closeTagIndex = text.IndexOf(CloseTag, currentPosition + OpenTag.Length, StringComparison.Ordinal);
				if (closeTagIndex == -1) {
					throw new ArgumentException(
						$"Encountered variable without closing tag at position {currentPosition}.", nameof(text));
				}
				int variableBodyStartPosition = currentPosition + OpenTag.Length;
				string variableBody = text.Substring(variableBodyStartPosition,
					closeTagIndex - variableBodyStartPosition);
				string[] variableBodyParts =
					variableBody.Split(_variableNameSeparator, 2, StringSplitOptions.RemoveEmptyEntries);
				if (variableBodyParts.Length != 2) {
					throw new ArgumentException(
						$"Invalid variable name '{variableBody}' at position {currentPosition}.", nameof(text));
				}
				var variable = new Variable {
					Namespace = variableBodyParts[0],
					Name = variableBodyParts[1],
					StartPosition = currentPosition,
					EndPosition = closeTagIndex + CloseTag.Length
				};
				variablePositions.Add(variable);
				currentPosition = variable.EndPosition;
			}
			return variablePositions;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string Resolve(string prompt) {
			IList<Variable> variables = GetVariables(prompt);
			if (variables.Count == 0) {
				return prompt;
			}
			var builder = new StringBuilder((int)(prompt.Length * BuilderCapacityMultiplier));
			var lastVariableEndPosition = 0;
			foreach (Variable variable in variables) {
				builder.Append(prompt, lastVariableEndPosition, variable.StartPosition - lastVariableEndPosition);
				if (!_variableProviders.TryGetValue(variable.Namespace, out IVariableProvider variableProvider)) {
					throw new KeyNotFoundException($"Namespace '{variable.Namespace}' not found.");
				}
				string value = variableProvider.GetVariableValue(variable.Name) ??
					throw new KeyNotFoundException(
						$"Variable '{variable.Namespace}{_variableNameSeparator[0]}{variable.Name}' not found.");
				builder.Append(value);
				lastVariableEndPosition = variable.EndPosition;
			}
			if (lastVariableEndPosition < prompt.Length) {
				builder.Append(prompt, lastVariableEndPosition, prompt.Length - lastVariableEndPosition);
			}
			return builder.ToString();
		}

		#endregion

	}

	#endregion

}

