namespace Terrasoft.Core.Process.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Text.RegularExpressions;
	using Creatio.Copilot;
	using Terrasoft.Common;
	using Terrasoft.Core.Process;
	using CopilotIntentSchema = Creatio.Copilot.CopilotIntentSchema;
	using ItemNotFoundException = Terrasoft.Common.ItemNotFoundException;

	#region Class: ExecuteIntentUserTask

	/// <exclude/>
	public partial class ExecuteIntentUserTask
	{

		#region Fields: ProtectedInternal

		protected internal static readonly Dictionary<IntentCallStatus, Guid> ResultCopilotStatuses =
			new Dictionary<IntentCallStatus, Guid>() {
				{ IntentCallStatus.ExecutedSuccessfully, new Guid("b30c282e-9442-464b-88a3-6dd47257bb53") },
				{ IntentCallStatus.CantGenerateGoodResponse, new Guid("d77dbe06-313d-49f2-8bbb-c3ab1518fb4a") },
				{ IntentCallStatus.FailedToExecute, new Guid("642f9b7f-d1c4-4def-a249-b4636ed1ca0d") },
				{ IntentCallStatus.InsufficientPermissions, new Guid("cc190566-bc7d-46ff-97f2-e716438a127b") },
				{ IntentCallStatus.ResponseParsingFailed, new Guid("039ee45a-eeec-401b-b984-c3613a1b38e1") },
				{ IntentCallStatus.IntentNotFound, new Guid("36515252-d63c-4595-9726-0f16f70e06b0") },
				{ IntentCallStatus.WrongIntentMode, new Guid("ce4a2009-43f6-45b4-91ba-2d42dd4ad780") },
				{ IntentCallStatus.InactiveIntent, new Guid("e8347303-59ad-4122-9b7c-c0a970568923") }
			};

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="ExecuteIntentUserTask"/> class with a specified user connection
		/// and a function to set parameter values.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="setParameterValueFunc"> A delegate function that sets the parameter values of the process.
		/// </param>
		public ExecuteIntentUserTask(UserConnection userConnection,
				Action<IProcessParametersMetaInfo, ParameterValueContext> setParameterValueFunc)
			: this(userConnection) {
			SetParameterValueFunc = setParameterValueFunc;
		}

		#endregion

		#region Properties: Private

		private Action<IProcessParametersMetaInfo, ParameterValueContext> _setParameterValueFunc;

		private Action<IProcessParametersMetaInfo, ParameterValueContext> SetParameterValueFunc {
			get => _setParameterValueFunc ?? (_setParameterValueFunc = SetParameterValue);
			set => _setParameterValueFunc = value;
		}

		#endregion

		#region Methods: Private

		private Guid GetIntentCallStatusId(IntentCallStatus status) {
			if (ResultCopilotStatuses.TryGetValue(status, out Guid guid)) {
				return guid;
			}
			throw new ItemNotFoundException($"Copilot intent result status {status.ToString()} not found");
		}

		private Dictionary<string, object> ResolveParameters() {
			var processSchema = (ProcessSchema)Owner.Schema;
			var userTask = (ProcessSchemaUserTask)processSchema.GetBaseElementByUId(SchemaElementUId);
			var result = new Dictionary<string, object>();
			ProcessSchemaParameterCollection schemaParameters = userTask.Parameters;
			foreach (ProcessSchemaParameter schemaParameter in schemaParameters) {
				if (schemaParameter.CreatedInSchemaUId != processSchema.UId
						|| schemaParameter.Direction != ProcessSchemaParameterDirection.In) {
					continue;
				}
				object parameterValue = GetParameterValue(schemaParameter);
				result.Add(schemaParameter.Name, parameterValue);
			}
			return result;
		}

		private void HandleResponse(CopilotIntentCallResult response) {
			ExecutionStatus = response.Status.ToString();
			ExecutionStatusId = GetIntentCallStatusId(response.Status);
			if (response.Warnings.IsNotNullOrEmpty()) {
				WarningMessage = string.Join(" ", response.Warnings);
			}
			if (!response.IsSuccess) {
				ErrorMessage = response.ErrorMessage;
				Log.Warn(response.ErrorMessage);
			}
			ResponseText = response.Content;
		}

		private LocalizableString GetLocalizableString(string localizableStringName) {
			string lsv = "LocalizableStrings." + localizableStringName + ".Value";
			return new LocalizableString(UserConnection.Workspace.ResourceStorage, nameof(ExecuteIntentUserTask), lsv);
		}

		private void FillResponseParameters(CopilotIntentCallResult response) {
			if (response.ResultParameters == null) {
				return;
			}
			var schema = (IProcessParametersMetaInfo)GetSchemaElement();
			foreach (ProcessSchemaParameter parameter in schema.Parameters) {
				if (parameter.Direction != ProcessSchemaParameterDirection.Out) {
					continue;
				}
				if (response.ResultParameters.TryGetValue(parameter.Name, out object value)) {
					object defValue = ReflectionUtilities.GetDefValue(parameter.DataValueType.ValueType);
					var info = new ParameterValueContext {
						Name = parameter.Name,
						IsDynamic = true,
						ValueType = parameter.DataValueType.ValueType,
						Value = value,
						DefValue = defValue
					};
					SetParameterValueFunc.Invoke(schema, info);
				}
			}
		}

		private CopilotIntentCallResult CopilotIntentCallResult(ICopilotEngine copilotEngine) {
			CopilotIntentSchemaManager schemaManager = UserConnection.GetIntentSchemaManager();
			CopilotIntentSchema intentSchema = schemaManager.GetInstanceByUId(IntentSchemaUId);
			var request = new CopilotIntentCall {
				IntentName = intentSchema.Name,
				Parameters = ResolveParameters()
			};
			CopilotIntentCallResult response = copilotEngine.ExecuteIntent(request);
			if (Log.IsTraceEnabled) {
				Log.Trace($"{UId} Exit: Skill {intentSchema.Name} execution {(response.IsSuccess ? "succeeded" : "failed")} " +
					$"in element {Name} of schema {Owner?.Schema?.Name} with status {response.Status}.");
			}
			return response;
		}

		#endregion

		#region Methods: Protected

		/// <inheritdoc />
		protected override bool InternalExecute(ProcessExecutingContext context) {
			ICopilotEngine copilotEngine = UserConnection.CopilotEngine;
			if (copilotEngine == null) {
				ExecutionStatus = IntentCallStatus.FailedToExecute.ToString();
				ExecutionStatusId = GetIntentCallStatusId(IntentCallStatus.FailedToExecute);
				ErrorMessage = GetLocalizableString("CopilotEngineNotResolved").ToString();
				if (Log.IsTraceEnabled) {
					Log.Trace($"{UId} Exit: Copilot engine is not resolved " +
						$"in element {Name} of schema {Owner?.Schema?.Name}.");
				}
				return true;
			}
			CopilotIntentCallResult response = RunUnderSystemSecurityContext(() => CopilotIntentCallResult(copilotEngine));
			HandleResponse(response);
			if (response.IsSuccess) {
				FillResponseParameters(response);
			}
			return true;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override string GetExecutionData() {
			return string.Empty;
		}

		#endregion

	}

	#endregion

	#region Class: ExecuteIntentUserTaskSchemaExtension

	/// <exclude/>
	public class ExecuteIntentUserTaskSchemaExtension : ProcessUserTaskSchemaExtension
	{

		#region Method: Private

		private Dictionary<Guid, string> GetLocalizedIntentCallStatusValues(UserConnection userConnection) {
			var localizedValues = new Dictionary<Guid, string>();
			foreach (IntentCallStatus status in Enum.GetValues(typeof(IntentCallStatus))) {
				string localizableStringName = $"IntentCallStatus_{status}";
				string localizedValue = new LocalizableString(userConnection.Workspace.ResourceStorage,
						nameof(ExecuteIntentUserTaskSchemaExtension),
						$"LocalizableStrings.{localizableStringName}.Value")
					.ToString();
				localizedValues.Add(ExecuteIntentUserTask.ResultCopilotStatuses[status], localizedValue);
			}
			return localizedValues;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override Dictionary<Guid, string> GetResultParameterAllValues(UserConnection userConnection,
				ProcessSchemaUserTask schemaUserTask) =>
			GetLocalizedIntentCallStatusValues(userConnection);

		/// <inheritdoc cref="ProcessUserTaskSchemaExtension.AnalyzePackageDependencies"/>
		public override void AnalyzePackageDependencies(ProcessSchemaUserTask schemaElement,
				IProcessSchemaPackageDependencyReporter dependencyReporter) {
			base.AnalyzePackageDependencies(schemaElement, dependencyReporter);
			ProcessSchemaParameterCollection parameters = schemaElement.Parameters;
			ProcessSchemaParameter intentSchemaUidParameter = parameters.GetByName("IntentSchemaUId");
			string pattern = @"\b[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\b";
			Match match = Regex.Match(intentSchemaUidParameter.SourceValue.Value, pattern);
			Guid.TryParse(match.Value, out Guid intentSchemaUId);
			if (intentSchemaUId.IsEmpty()) {
				return;
			}
			var reasonSource = $"{schemaElement.Name}.{intentSchemaUidParameter.Name}";
			dependencyReporter.ReportSchemaDependency(intentSchemaUId, nameof(CopilotIntentSchemaManager), reasonSource);
		}

		#endregion

	}

	#endregion

}
