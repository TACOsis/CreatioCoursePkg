namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using Creatio.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using System.Globalization;

	#region Interface: ICopilotOutputParametersHandler

	/// <summary>
	/// Copilot output parameters handler.
	/// </summary>
	public interface ICopilotOutputParametersHandler
	{

		#region Methods: Public

		/// <summary>
		/// Handles the output parameters by parsing them according to their types defined in the intent schema.
		/// </summary>
		/// <param name="outputParameters">The dictionary containing the output parameters as strings.</param>
		/// <param name="intentOutputParameters">The collection of intent schema parameters that define the expected types of the output parameters.</param>
		/// <returns>A dictionary containing the parsed output parameters with their respective types.</returns>
		Dictionary<string, object> HandleOutputParameters(Dictionary<string, string> outputParameters,
			CopilotIntentSchemaParameterCollection intentOutputParameters);

		#endregion

	}

	#endregion

	#region Class: CopilotOutputParametersHandler

	/// <summary>
	/// Copilot output parameters handler.
	/// </summary>
	/// <inheritdoc cref="Creatio.Copilot.ICopilotOutputParametersHandler"/>
	[DefaultBinding(typeof(ICopilotOutputParametersHandler))]
	internal class CopilotOutputParametersHandler : ICopilotOutputParametersHandler
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="CopilotOutputParametersHandler"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public CopilotOutputParametersHandler(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private object ParseValueByType(string outputParameter, Type type) {
			switch (type) {
				case Type t when t == typeof(int):
					return int.Parse(outputParameter, CultureInfo.InvariantCulture);
				case Type t when t == typeof(double):
					return double.Parse(outputParameter, NumberStyles.Float, CultureInfo.InvariantCulture);
				case Type t when t == typeof(float):
					return float.Parse(outputParameter, NumberStyles.Float, CultureInfo.InvariantCulture);
				case Type t when t == typeof(decimal):
					return decimal.Parse(outputParameter, NumberStyles.Float, CultureInfo.InvariantCulture);
				case Type t when t == typeof(DateTime):
					DateTime dateTime = DateTime.Parse(outputParameter, CultureInfo.InvariantCulture,
						DateTimeStyles.RoundtripKind);
					return DateTime.SpecifyKind(dateTime, DateTimeKind.Utc);
				case Type t when t == typeof(bool):
					return bool.Parse(outputParameter);
				case Type t when t == typeof(Guid):
					return Guid.Parse(outputParameter);
				case Type t when t == typeof(string):
					return outputParameter;
				default:
					throw new NotSupportedException($"Type {type} is not supported.");
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc/>
		public Dictionary<string, object> HandleOutputParameters(Dictionary<string, string> outputParameters,
				CopilotIntentSchemaParameterCollection intentOutputParameters) {
			var resultParameters = new Dictionary<string, object>();
			DataValueTypeManager typeManager = _userConnection.DataValueTypeManager;
			foreach (CopilotIntentSchemaParameter parameter in intentOutputParameters) {
				Type type = typeManager.FindInstanceByUId(parameter.DataValueTypeUId)?.ValueType;
				if (type != null) {
					resultParameters[parameter.Name] = ParseValueByType(outputParameters[parameter.Name], type);
				} else {
					resultParameters[parameter.Name] = outputParameters[parameter.Name];
				}
			}
			return resultParameters;
		}

		#endregion

	}

	#endregion

}

