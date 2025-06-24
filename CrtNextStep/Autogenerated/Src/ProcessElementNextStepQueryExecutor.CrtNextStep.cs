namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Collections.Generic;
	using Creatio.FeatureToggling;
	using global::Common.Logging;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Nui.ServiceModel.DataContract;

	#region Class: ProcessElementNextStepQueryExecutor

	/// <summary>
	/// Implementation <see cref="IProcessNextStepQueryExecutor"/> for 'Process' entity.
	/// </summary>
	[DefaultBinding(typeof(IProcessNextStepQueryExecutor), Name = "ProcessElementNextStepQueryExecutor")]
	internal class ProcessElementNextStepQueryExecutor: IProcessNextStepQueryExecutor
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		private readonly Guid _activityUserTaskSchemaUId = new Guid("B5C726F2-AF5B-4381-BAC6-913074144308");

		private readonly ILog _log = LogManager.GetLogger("NextStep");

		#endregion

		#region Constructors: Public

		public ProcessElementNextStepQueryExecutor(UserConnection uc) {
			_userConnection = uc;
		}

		#endregion

		#region Methods: Private

		private string GetAdditionalInfo(Dictionary<string, object> entity) {
			var userTaskEntitySchemaName = GetUserTaskEntitySchemaName(entity);
			return Json.Serialize(new Dictionary<string, object> {
				{ ProcessElementExtraDataKeys.UserTaskEntitySchemaNameKey, userTaskEntitySchemaName }
			}, true);
		}

		private string GetUserTaskEntitySchemaName(Dictionary<string, object> entity) {
			var userTaskEntitySchemaName = entity.ContainsKey(ProcessElementExtraDataKeys.UserTaskEntitySchemaNameKey)
				? entity[ProcessElementExtraDataKeys.UserTaskEntitySchemaNameKey]?.ToString()
				: string.Empty;
			if (userTaskEntitySchemaName.IsNullOrEmpty()) {
				var elementSchemaUId = entity.ContainsKey("ExtraData") ? GetElementSchemaUId(entity) : Guid.Empty;
				if (elementSchemaUId == _activityUserTaskSchemaUId) {
					userTaskEntitySchemaName = "Activity";
				}
			}
			return userTaskEntitySchemaName;
		}

		private Guid GetElementSchemaUId(Dictionary<string, object> entity) {
			var rawExtraData = entity["ExtraData"]?.ToString();
			var extraData = rawExtraData.IsNullOrEmpty()
				? new JObject()
				: Json.Deserialize(rawExtraData) as JObject;
			return extraData.TryGetValue("ElementSchemaUId",out var elementSchemaUId)
				? Guid.Parse((string)elementSchemaUId)
				: Guid.Empty;
		}

		private bool IsEntityAccessible(Dictionary<string,object> entity) {
			var userTaskEntitySchemaName = GetUserTaskEntitySchemaName(entity);
			if (!Features.GetIsEnabled("NextStepsProcessAccessRights")
					|| userTaskEntitySchemaName.IsNullOrEmpty()
					|| !entity.ContainsKey("EntityId")) {
				return true;
			}
			var schema = _userConnection.EntitySchemaManager.GetInstanceByName(userTaskEntitySchemaName);
			var nextStepEntity = schema.CreateEntity(_userConnection);
			return nextStepEntity.FetchFromDB(entity["EntityId"], false) && nextStepEntity.PrimaryColumnValue.IsNotEmpty();
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="IProcessNextStepQueryExecutor.GetNextSteps(string, Guid, List{string})"/>
		public List<NextStepModel> GetNextSteps(string entityName, Guid entityId, List<string> elementsIds) {
			var result = new List<NextStepModel>();
			var item = _userConnection.EntitySchemaManager.GetItemByName(entityName);
			var request = new ProcessActionDashboardRequest {
				EntityId = entityId,
				EntitySchemaUId = item.UId,
				ElementIds = elementsIds,
				RowCount = 100
			};
			var processDashboardService = ClassFactory.Get<IProcessActionDashboardRequestHandler>(new ConstructorArgument("uc", _userConnection));
			var response = processDashboardService.Handle(request);
			if (response == null) {
				return result;
			}
			foreach (var entity in response.Rows) {
				var userTaskEntitySchemaName = GetUserTaskEntitySchemaName(entity);
				if (!IsEntityAccessible(entity)) {
					_log.Info($"'{GetType().Name}' skipped displaying '{entity["ElementCaption"]}' " +
						$"next steps model because no record '{userTaskEntitySchemaName}' '{entity["EntityId"]}' rights.");
					continue;
				}
				var ownerName = (string)entity["Owner"];
				var ownerRole = (string)entity["RoleName"];
				var hasOwnerRole = ownerName.IsNullOrEmpty();
				var nextStep = new NextStepModel {
					Id = Guid.Parse(entity["Id"].ToString()),
					ProcessElementId = Guid.Parse(entity["ProcessElementId"].ToString()),
					Caption = entity["ElementCaption"].ToString(),
					OwnerName = hasOwnerRole ? ownerRole : ownerName,
					OwnerId = Guid.NewGuid(),
					IsOwnerRole = hasOwnerRole,
					MasterEntityId = entityId,
					MasterEntityName = entityName,
					EntityName = "ProcessElement",
					IsRequired = (bool)entity["IsRequired"],
					Date = DateTime.Parse(entity["Date"].ToString()),
					AdditionalInfo = GetAdditionalInfo(entity)
				};
				result.Add(nextStep);
			}
			return result;
		}

		#endregion

	}

	#endregion

}



