namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;

	#region Class: GrantTagRightsInstallScriptExecutor

	internal class GrantTagRightsInstallScriptExecutor : IInstallScriptExecutor
	{

		#region Constants: Private

		private readonly Guid AllEmployee = new Guid("A29A3BA5-4B0D-DE11-9A51-005056C00008");
		private readonly Guid AllExternalUser = new Guid("720B771C-E7A7-4F31-9CFB-52CD21C3739F");
		private readonly Guid TagAccessSchemaUId = new Guid("1FC1E003-8083-44DA-BA4B-7B77186968E0");
		private readonly Guid TagAccess_MyTagId = new Guid("54C3C9A0-ADBA-423F-990B-673B903E2A38");
		private readonly Guid TagAccess_CorporateTagId = new Guid("5126592F-5E93-42B4-B3A1-10752E6D413E");
		private readonly Guid TagAccess_PublicTagId = new Guid("7BEAB7B3-E895-45FE-96C6-0C662C6DCB16");
		private readonly Guid SysEntitySchemaOperationRight_TagInSchema_AllExternalUser = new Guid("a5383a5c-888c-40bb-9719-55c058aad5b1");
		private readonly Guid SysEntitySchemaOperationRight_Tag_AllExternalUser = new Guid("e9e28e9b-6098-4d34-8768-f7002637054f");
		private readonly Guid TagAccessGrantee_AllEmployee_CorporateTagId = new Guid("C1D8564E-D3F2-4C5C-8106-32FAFD4D0852");
		private readonly Guid TagAccessGrantee_AllEmployee_PublicTagId = new Guid("DFA8D93D-4989-4645-A4C2-96E559E12976");
		private readonly Guid TagAccessGrantee_AllExternalUsers_PublicTagId = new Guid("0F84A371-4B18-4E0D-919D-337AAE319A8B");

		#endregion

		#region Properties: Private

		UserConnection _userConnection
		{
			get; set;
		}

		#endregion

		#region Methods: Private

		private void GrantRights() {
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				if (IsNeedInsertSysEntitySchemaRecordDefRightRecord()) {
					foreach (var insertDefRights in GetTagAccessSchemaDefRightInsertCollection()) {
						insertDefRights.Execute(dbExecutor);
					}
				}
				DeleteSysTagAccessRight();
				foreach (var insertTagAccessRight in GetTagAccessRightInsertCollection()) {
					insertTagAccessRight.Execute(dbExecutor);
				}
				UpdateSysEntitySchemaOperationRight();
				UpdateTagAccessGrantee();
				dbExecutor.CommitTransaction();
			}
		}

		public bool IsNeedInsertSysEntitySchemaRecordDefRightRecord() {
			var select = new Select(_userConnection).Top(1)
					.Column("Id")
				.From("SysEntitySchemaRecordDefRight")
				.Where()
				.OpenBlock("SubjectSchemaUId")
					.IsEqual(Column.Parameter(TagAccessSchemaUId))
					.And("AuthorSysAdminUnitId")
					.IsEqual(Column.Parameter(AllEmployee))
					.And("GranteeSysAdminUnitId")
					.IsEqual(Column.Parameter(AllEmployee))
				.CloseBlock()
					.Or()
				.OpenBlock("SubjectSchemaUId")
					.IsEqual(Column.Parameter(TagAccessSchemaUId))
					.And("AuthorSysAdminUnitId")
					.IsEqual(Column.Parameter(AllExternalUser))
					.And("GranteeSysAdminUnitId")
					.IsEqual(Column.Parameter(AllExternalUser))
				.CloseBlock() as Select;
			var recordId = select.ExecuteScalar<Guid>();
			return recordId.Equals(Guid.Empty);
		}

		private List<Insert> GetTagAccessSchemaDefRightInsertCollection() {
			return new List<Insert> {
				GetTagAccessSchemaDefRightInsert(AllExternalUser, AllExternalUser, 0, 1, 0),
				GetTagAccessSchemaDefRightInsert(AllEmployee, AllEmployee, 0, 1, 0),
			};
		}

		private Insert GetTagAccessSchemaDefRightInsert(Guid authorSysAdminUnitId, Guid granteeSysAdminUnitId,
			int operation, int rightLevel, int position) {
			return new Insert(_userConnection)
					.Into("SysEntitySchemaRecordDefRight")
					.Set("AuthorSysAdminUnitId", Column.Parameter(authorSysAdminUnitId))
					.Set("GranteeSysAdminUnitId", Column.Parameter(granteeSysAdminUnitId))
					.Set("Operation", Column.Const(operation))
					.Set("RightLevel", Column.Const(rightLevel))
					.Set("Position", Column.Const(position))
					.Set("SubjectSchemaUId", Column.Parameter(TagAccessSchemaUId));
		}

		private void DeleteSysTagAccessRight() {
			var recordIds = new List<Guid> { TagAccess_MyTagId, TagAccess_CorporateTagId, TagAccess_PublicTagId };
			var sysAdminUnits = new List<Guid> { AllEmployee, AllExternalUser };
			var deleteQuery = new Delete(_userConnection)
					.From("SysTagAccessRight")
					.Where("SysAdminUnitId").In(Column.Parameters(sysAdminUnits))
					.And("RecordId").In(Column.Parameters(recordIds)) as Delete;
			deleteQuery.Execute();
		}

		private List<Insert> GetTagAccessRightInsertCollection() {
			return new List<Insert> {
				GetTagAccessRightInsert(AllExternalUser, TagAccess_MyTagId, 0, 1),
				GetTagAccessRightInsert(AllEmployee, TagAccess_MyTagId, 0, 1),
				GetTagAccessRightInsert(AllEmployee, TagAccess_CorporateTagId, 0, 1),
				GetTagAccessRightInsert(AllEmployee, TagAccess_PublicTagId, 0, 1)
			};
		}

		private Insert GetTagAccessRightInsert(Guid sysAdminUnitId, Guid recordId, int operation, int rightLevel) {
			return new Insert(_userConnection)
					.Into("SysTagAccessRight")
					.Set("SysAdminUnitId", Column.Parameter(sysAdminUnitId))
					.Set("RecordId", Column.Parameter(recordId))
					.Set("Operation", Column.Parameter(operation))
					.Set("RightLevel", Column.Parameter(rightLevel));
		}

		private void UpdateSysEntitySchemaOperationRight() {
			UpdateSysEntitySchemaOperationRightForAllExternalUsers(SysEntitySchemaOperationRight_TagInSchema_AllExternalUser);
			UpdateSysEntitySchemaOperationRightForAllExternalUsers(SysEntitySchemaOperationRight_Tag_AllExternalUser);

		}

		private void UpdateSysEntitySchemaOperationRightForAllExternalUsers(Guid recordId) {
			var sysEntitySchemaOperationEntity = _userConnection.EntitySchemaManager.
				GetEntityByName("SysEntitySchemaOperationRight", _userConnection);
			if (!sysEntitySchemaOperationEntity.FetchFromDB(recordId)) {
				return;
			}
			sysEntitySchemaOperationEntity.SetColumnValue("CanRead", true);
			sysEntitySchemaOperationEntity.SetColumnValue("CanAppend", true);
			sysEntitySchemaOperationEntity.SetColumnValue("CanEdit", true);
			sysEntitySchemaOperationEntity.SetColumnValue("CanDelete", true);
			sysEntitySchemaOperationEntity.Save();
		}

		private void UpdateTagAccessGrantee() {
			UpdateTagAccessGranteeById(TagAccessGrantee_AllEmployee_CorporateTagId, true, true, true, true, true);
			UpdateTagAccessGranteeById(TagAccessGrantee_AllEmployee_PublicTagId, true, true, true, true, true);
			UpdateTagAccessGranteeById(TagAccessGrantee_AllExternalUsers_PublicTagId, true, false, false, false, false);
		}

		private void UpdateTagAccessGranteeById(Guid id, bool read, bool edit, bool delete, bool tagging, bool create) {
			var tagAccessGranteeEntity = _userConnection.EntitySchemaManager.
				GetEntityByName("TagAccessGrantee", _userConnection);
			if (!tagAccessGranteeEntity.FetchFromDB(id)) {
				return;
			}
			tagAccessGranteeEntity.SetColumnValue("CanRead", read);
			tagAccessGranteeEntity.SetColumnValue("CanEdit", edit);
			tagAccessGranteeEntity.SetColumnValue("CanDelete", delete);
			tagAccessGranteeEntity.SetColumnValue("CanTag", tagging);
			tagAccessGranteeEntity.SetColumnValue("CanCreate", create);
			tagAccessGranteeEntity.Save();
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			_userConnection = userConnection;
			GrantRights();
		}

		#endregion

	}

	#endregion

}
