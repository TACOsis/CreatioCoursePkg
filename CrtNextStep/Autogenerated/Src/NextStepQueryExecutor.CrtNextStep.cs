namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using global::Common.Logging;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Core.Process;

	#region Class: NextStepQueryExecutor

	/// <summary>
	/// Implementation <see cref="IEntityQueryExecutor"/> for 'NextStep' entity.
	/// </summary>
	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "NextStepQueryExecutor")]
	internal class NextStepQueryExecutor: IEntityQueryExecutor
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		private readonly ILog _log = LogManager.GetLogger("NextStep");

		#endregion

		#region Constructors: Public

		public NextStepQueryExecutor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Methods: Private

		private bool TryGetTypedFilterValue<T>(EntitySchemaQueryFilterCollection filters,
				string columnName, out T value) {
			value = default;
			var filter = filters.Select(f => f as EntitySchemaQueryFilter)
				.FirstOrDefault(f => f?.LeftExpression.Path == columnName);
			try {
				if (filter != null) {
					value = (T)filter.RightExpressions[0].ParameterValue;
					return true;
				}
			} catch (Exception e) {
				_log.Error("Error ocurred, when converted filter value.", e);
				value = default;
			}
			return false;
		}

		private EntityCollection ConvertToEntityCollection(List<NextStepModel> collection) {
			var result = new EntityCollection(_userConnection, "NextStep");
			var schema = _userConnection.EntitySchemaManager.GetInstanceByName("NextStep");
			collection.ForEach(e => result.Add(ConvertToEntity(schema, e)));
			return result;
		}

		private Entity ConvertToEntity(EntitySchema schema, NextStepModel nextStepModel) {
			var ownerColumn = schema.GetSchemaColumnByPath("Owner");
			Entity nextStep = schema.CreateEntity(_userConnection);
			nextStep.SetColumnValue("Id", nextStepModel.Id);
			nextStep.SetColumnValue("ProcessElementId", nextStepModel.ProcessElementId);
			nextStep.SetColumnValue("Caption", nextStepModel.Caption);
			nextStep.SetColumnValue(ownerColumn.DisplayColumnValueName, nextStepModel.OwnerName);
			nextStep.SetColumnValue(ownerColumn.ColumnValueName, nextStepModel.OwnerId);
			nextStep.SetColumnValue(ownerColumn.PrimaryImageColumnValueName, nextStepModel.OwnerPhotoId);
			nextStep.SetColumnValue("IsOwnerRole", nextStepModel.IsOwnerRole);
			nextStep.SetColumnValue("MasterEntityId", nextStepModel.MasterEntityId);
			nextStep.SetColumnValue("MasterEntityName", nextStepModel.MasterEntityName);
			nextStep.SetColumnValue("EntityName", nextStepModel.EntityName);
			nextStep.SetColumnValue("IsRequired", nextStepModel.IsRequired);
			nextStep.SetColumnValue("Date", nextStepModel.Date);
			nextStep.SetColumnValue("AdditionalInfo", nextStepModel.AdditionalInfo);
			return nextStep;
		}

		private void AddNextStepModels(List<NextStepModel> collection, string entityName, Guid entityId) {
			var executors = ClassFactory.GetAll<INextStepQueryExecutor>(new ConstructorArgument("uc", _userConnection));
			foreach (var executor in executors) {
				try {
					foreach (var nextStepModel in executor.GetNextSteps(entityName, entityId)) {
						if (!collection.Any(ns => ns.Equals(nextStepModel))) {
							collection.Add(nextStepModel);
						}
					}
				} catch (Exception e) {
					_log.Error($"Error occurred, when selecting 'NextStep' entities in " +
						$"'{executor.GetType()} query executor'.", e);
					throw;
				}
			}
		}

		private string AddOrReplaceAdditionalParam(string key, string targetAdditionalParams, string sourceAdditionalParams) {
			var result = targetAdditionalParams.IsNotNullOrEmpty()
				? Json.Deserialize<Dictionary<string, object>>(targetAdditionalParams)
				: new Dictionary<string, object>();
			var additionalParams = sourceAdditionalParams.IsNotNullOrEmpty()
				? Json.Deserialize<Dictionary<string, object>>(sourceAdditionalParams)
				: new Dictionary<string, object>();
			if (additionalParams.ContainsKey(key)) {
				var additionalParamValue = additionalParams[key]?.ToString();
				if (additionalParamValue.IsNotNullOrEmpty()) {
					result[key] = additionalParams[key];
				}
			}
			return Json.Serialize(result, true);
		}

		private void AddOrUpdateNextStepModels(List<NextStepModel> collection, string entityName, Guid entityId) {
			var executors = ClassFactory.GetAll<IProcessNextStepQueryExecutor>(new ConstructorArgument("uc", _userConnection));
			var elementsIds = collection.Where(e => e.ProcessElementId.IsNotEmpty())
				.Select(e => e.ProcessElementId.ToString()).ToList();
			foreach (var executor in executors) {
				try {
					foreach (var nextStepModel in executor.GetNextSteps(entityName, entityId, elementsIds)) {
						var existNextStep = collection.FirstOrDefault(ns => ns.Equals(nextStepModel));
						if (existNextStep == null) {
							collection.Add(nextStepModel);
						} else {
							existNextStep.IsRequired = nextStepModel.IsRequired;
							existNextStep.AdditionalInfo = AddOrReplaceAdditionalParam(ProcessElementExtraDataKeys.UserTaskEntitySchemaNameKey,
								existNextStep.AdditionalInfo, nextStepModel.AdditionalInfo);
						}
					}
				} catch (Exception e) {
					_log.Error($"Error occurred, when selecting 'NextStep' entities in " +
						$"'{executor.GetType()} query executor'.", e);
					throw;
				}
			}
		}

		private void ThrowParameterException(string parametrName) {
			var exception = new ArgumentException("Parameter value is incorrect.", parametrName);
			_log.Error(exception.Message);
			throw exception;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns next step entity collection.
		/// </summary>
		/// <param name="esq"><see cref="EntitySchemaQuery"/> instance.</param>
		/// <returns>Next step entity collection.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			var filters = esq.Filters;
			var collection = new List<NextStepModel>();
			if (!TryGetTypedFilterValue(filters, "MasterEntityName", out string entityName)) {
				ThrowParameterException("MasterEntityName");
			}
			if (!TryGetTypedFilterValue(filters, "MasterEntityId", out Guid entityId)) {
				ThrowParameterException("MasterEntityId");
			}
			AddNextStepModels(collection, entityName, entityId);
			AddOrUpdateNextStepModels(collection, entityName, entityId);
			return ConvertToEntityCollection(collection);
		}

		#endregion

	}

	#endregion

}

