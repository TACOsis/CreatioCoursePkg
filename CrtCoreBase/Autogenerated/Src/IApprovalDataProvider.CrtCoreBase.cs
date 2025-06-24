namespace Terrasoft.Configuration
{
	using System;
	using System.Runtime.Serialization;
	using Terrasoft.Nui.ServiceModel.DataContract;

	#region Interface: IApprovalDataProvider

	public interface IApprovalDataProvider
	{

		/// <summary>
		/// Gets all approvals collection for specified record and schema.
		/// </summary>
		/// <param name="parentSchemaName">Entity schema name</param>
		/// <param name="parentRecordId">Entity record id.</param>
		/// <returns></returns>
		SelectQueryResponse GetApprovalHistory(string parentSchemaName, Guid parentRecordId);

		/// <summary>
		/// Gets active approvals collection for current user and specified record and schema.
		/// </summary>
		/// <param name="parentSchemaName">Entity schema name</param>
		/// <param name="parentRecordId">Entity record id.</param>
		/// <returns></returns>
		SelectQueryResponse GetActiveApprovals(string parentSchemaName, Guid parentRecordId);

		/// <summary>
		/// Gets first active approval for current user and specified record and schema.
		/// </summary>
		/// <param name="parentSchemaName">Entity schema name</param>
		/// <param name="parentRecordId">Entity record id.</param>
		/// <returns></returns>
		SelectQueryResponse GetFirstActiveApproval(string parentSchemaName, Guid parentRecordId);

		/// <summary>
		/// Gets visa storage schema name for specified schema name.
		/// </summary>
		/// <param name="schemaName">Schema name</param>
		/// <returns></returns>
		ApprovalSchemaConfig GetApprovalSchemaName(string schemaName);

		/// <summary>
		/// Gets approvals count grouped by statuses for current user and specified record and schema.
		/// </summary>
		/// <param name="parentSchemaName">Entity schema name</param>
		/// <param name="parentRecordId">Entity record id.</param>
		/// <returns></returns>
		SelectQueryResponse GetApprovalsMetricsForEntity(string parentSchemaName, Guid parentRecordId);
	}

	#endregion

	#region Class: ApprovalSchemaConfig

	[DataContract, Serializable]
	public class ApprovalSchemaConfig
	{

		[DataMember(Name = "entityName")]
		public string EntityName { get; set; }

		[DataMember(Name = "masterColumnName")]
		public string MasterColumnName { get; set; }
	}

	#endregion

}
