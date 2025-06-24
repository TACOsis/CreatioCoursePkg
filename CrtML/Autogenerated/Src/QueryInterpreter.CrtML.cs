namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;

	#region Interface: IQueryInterpreter

	/// <summary>
	/// Provides methods for C# query expression interpretation.
	/// </summary>
	public interface IQueryInterpreter
	{

		#region Methods: Public

		/// <summary>
		/// Interprets given expression as <see cref="Select"/> query.
		/// </summary>
		/// <param name="expression">Single C# expression to be validated.</param>
		/// <param name="variables">Collection of already evaluated variables. It </param>
		/// <returns>Interpreted <c>Select</c> expression.</returns>
		Select InterpreteSelectQuery(string expression, Dictionary<string, object> variables);

		#endregion

	}

	#endregion

	#region Class: QueryInterpreter

	/// <summary>
	/// Utility class for C# query expression interpretation.
	/// </summary>
	[DefaultBinding(typeof(IQueryInterpreter))]
	public class QueryInterpreter : IQueryInterpreter
	{

		#region Fields: Private

		private static readonly Regex _regexAssignmentExpression =
			new Regex(@"^var\s+(?<variableName>\w+)\s+=\s+(?<expression>.+)$", RegexOptions.Singleline);
		private static readonly Regex _regexRegisterType =
			new Regex(@"^(RegisterType|RegisterConfigurationType)\(.+\)$");
		private readonly IScriptSession _session = ScriptEngine.CreateSession();

		#endregion

		#region Methods: Private

		private static void AddReferences(IScriptSession session) {
			new List<Type> {
				typeof(Select),
				typeof(Column),
				typeof(Func),
				typeof(DateDiffQueryFunctionInterval),
				typeof(DatePartQueryFunctionInterval),
				typeof(QueryExtensions),
				typeof(FuncEx)
			}.ForEach(session.AddReference);
		}

		private static string GetTypeNameWithoutAssembly(string typeName) => typeName.Split(',').FirstOrDefault();

		#endregion

		#region Methods: Public

		/// <summary>
		/// Adds reference on a type which is used in expression.
		/// </summary>
		/// <param name="typeName"><see cref="Type.AssemblyQualifiedName"/> of type to be added.</param>
		/// <returns><c>true</c> if type is successfully added, otherwise - <c>false</c>.</returns>
		public bool RegisterType(string typeName) {
			var typeNameWithoutAssembly = GetTypeNameWithoutAssembly(typeName);
			var workspaceTypeProvider = ClassFactory.Get<IWorkspaceTypeProvider>();
			Type type = workspaceTypeProvider.GetTypes().FirstOrDefault(e => 
				e.Name == typeNameWithoutAssembly ||
				e.AssemblyQualifiedName == typeName ||
				e.FullName == typeNameWithoutAssembly);
			if (type is null) {
				return false;
			}
			_session.AddReference(type);
			return true;
		}

		/// <summary>
		/// Adds reference on a type from <see cref="Terrasoft.Configuration"/> namespace which is used in expression.
		/// </summary>
		/// <param name="typeName"><see cref="Type.Name"/> of the type to be added.</param>
		/// <returns><c>true</c> if type is successfully added, otherwise - <c>false</c>.</returns>
		[Obsolete("Since the type can be placed in package assembly, current method just routes call to RegisterType")]
		public bool RegisterConfigurationType(string typeName) {
			return RegisterType(typeName);
		}

		/// <summary>
		/// Interprets given expression as <see cref="Select"/> query.
		/// </summary>
		/// <param name="expression">Single C# expression to be validated.</param>
		/// <param name="variables">Collection of already evaluated variables. It </param>
		/// <returns>Interpreted <c>Select</c> expression.</returns>
		public Select InterpreteSelectQuery(string expression, Dictionary<string, object> variables) {
			if (string.IsNullOrEmpty(expression)) {
				throw new ArgumentNullException(nameof(expression));
			}
			_session.SetVariable(nameof(RegisterType), (Func<string, bool>)RegisterType);
#pragma warning disable CS0618
			_session.SetVariable(nameof(RegisterConfigurationType), (Func<string, bool>)RegisterConfigurationType);
#pragma warning restore CS0618
			AddReferences(_session);
			if (variables != null) {
				foreach (var variable in variables) {
					_session.SetVariable(variable.Key, variable.Value);
				}
			}
			string[] subExpressions = expression.Split(';')
				.Where(s => !string.IsNullOrEmpty(s))
				.Select(s => s.Trim()).ToArray();
			foreach (string subExpression in subExpressions.Take(subExpressions.Length - 1)) {
				if (_regexRegisterType.IsMatch(subExpression)) {
					bool typeRegistered;
					try {
						typeRegistered = _session.Eval<bool>(subExpression);
					} catch (ValidateExpressionException ex) {
						const string message = "C# expression for type registration is incorrect. Expression: {0}";
						throw new InvalidTrainSetQueryException(string.Format(message, subExpression), ex);
					}
					if (!typeRegistered) {
						string message = $"Failed to register type. Expression: {subExpression}";
						throw new InvalidTrainSetQueryException(message);
					}
					continue;
				}
				Match match = _regexAssignmentExpression.Match(subExpression);
				if (!match.Success) {
					string message = $"C# expression for local variable is incorrect. Expression: {subExpression}";
					throw new InvalidTrainSetQueryException(message);
				}
				string variableName = match.Groups["variableName"].Value;
				string variableExpression = match.Groups["expression"].Value;
				object value;
				try {
					value = _session.Eval(variableExpression);
				} catch (ValidateExpressionException ex) {
					string message = $"C# expression for local variable is incorrect. Expression: {subExpression}";
					throw new InvalidTrainSetQueryException(message, ex);
				}
				_session.SetVariable(variableName, value);
			}
			Select result;
			try {
				result = _session.Eval<Select>(subExpressions.Last());
			} catch (ValidateExpressionException ex) {
				const string message = "Incorrect C# query expression or the result is not {0} instance";
				throw new InvalidTrainSetQueryException(string.Format(message, typeof(Select)), ex);
			}
			if (result == null) {
				const string message = "C# query expression returned null instead of {0} instance. Expression: {1}";
				throw new InvalidTrainSetQueryException(string.Format(message, typeof(Select), expression));
			}
			return result;
		}

		#endregion

	}

	#endregion

}

