namespace Terrasoft.Configuration.NextSteps
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Nui.ServiceModel.DataContract;

	#region Class: ApprovalNextStepQueryExecutor
	/// <summary>
	/// Implementation <see cref="INextStepQueryExecutor"/> for 'Approval' entity.
	/// </summary>
	[DefaultBinding(typeof(INextStepQueryExecutor), Name = "ApprovalNextStepQueryExecutor")]
	internal class ApprovalNextStepQueryExecutor: INextStepQueryExecutor
	{

		#region Fields: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public ApprovalNextStepQueryExecutor(UserConnection uc) {
			_userConnection = uc;
		}

		#endregion

		#region Methods: Private

		private LookupColumnValue ParseLookup(object rawValue) {
			if (rawValue == null || !(rawValue is LookupColumnValue)) {
				return null;
			}
			return rawValue as LookupColumnValue;
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="INextStepQueryExecutor.GetNextSteps(string, Guid)"/>
		public List<NextStepModel> GetNextSteps(string entityName, Guid entityId) {
			var approvalDataProvider = ClassFactory.Get<IApprovalDataProvider>(new ConstructorArgument("userConnection", _userConnection));
			SelectQueryResponse response = approvalDataProvider.GetActiveApprovals(entityName, entityId);
			if (response == null || response.Rows.Count == 0) {
				return new List<NextStepModel>();
			}
			var approvalEntityName = approvalDataProvider.GetApprovalSchemaName(entityName);
			return response.Rows.Select(row => {
				var owner = ParseLookup(row["VisaOwnerContact"]);
				var ownerRoleColumn = ParseLookup(row["VisaOwner"]);
				var ownerName = owner?.DisplayValue;
				var ownerRoleName = ownerRoleColumn?.DisplayValue;
				var hasOwnerRole = ownerName.IsNullOrEmpty();
				return new NextStepModel {
					Id = Guid.Parse((string)row["Id"]),
					ProcessElementId = Guid.Parse((string)row["Id"]),
					Caption = (string)row["Objective"],
					OwnerName = hasOwnerRole ? ownerRoleName : ownerName,
					OwnerId = Guid.Parse(hasOwnerRole
						? ownerRoleColumn.Value
						: owner.Value),
					OwnerPhotoId = owner != null && !owner.PrimaryImageValue.IsNullOrEmpty()
						? Guid.Parse(owner.PrimaryImageValue)
						: Guid.Empty,
					IsOwnerRole = hasOwnerRole,
					MasterEntityId = entityId,
					MasterEntityName = entityName,
					EntityName = approvalEntityName.EntityName,
					IsRequired = false,
					Date = DateTime.Parse((string)row["CreatedOn"])
				};
			}).ToList();
		}

		#endregion

	}

	#endregion

}



