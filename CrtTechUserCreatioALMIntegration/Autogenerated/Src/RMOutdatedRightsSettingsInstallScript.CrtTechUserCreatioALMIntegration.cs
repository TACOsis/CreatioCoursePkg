namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: RemoveOutdatedPermissionsSettingsInstallScript

	internal class RemoveOutdatedPermissionsSettingsInstallScript : IInstallScriptExecutor
	{
		#region Fields: Private
		
		private static readonly Guid _canManageSolutionOperationId = new Guid("07cdc91f-f599-4988-9a43-e7feacb9f260");
		private static readonly Guid _canManageLookupsOperationId = new Guid("94d54c88-7ced-4ef0-a42b-91e78779bea2");
		private static readonly Guid _canManageSysSettingsOperationId = new Guid("d9a147e4-d205-424f-b72b-dd2fcb474de9");
		private static readonly Guid _almIntegrationUserId = new Guid("a192dbec-9ac4-4f83-ad6e-065513763364");
		private static readonly Guid _sysAppIconsSchemaUId = new Guid("ce7f2913-9b5f-4b7b-ade8-4f4da0392965");
		private static readonly Guid _sysInstalledAppSchemaUId = new Guid("91d3eeb0-086c-4143-b671-dd2b77634d39");

		#endregion

		#region Methods: Private

		private static void DeleteAccessToAdministratedOperations(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			var operationIds = new List<Guid> {
				_canManageSolutionOperationId,
				_canManageLookupsOperationId,
				_canManageSysSettingsOperationId
			};
			foreach (Guid operationId in operationIds) {
				Entity sysAdminOperationGrantee = entitySchemaManager.GetEntityByName("SysAdminOperationGrantee",
					userConnection);
				var conditions = new Dictionary<string, object> {
					{ "SysAdminUnit", _almIntegrationUserId },
					{ "SysAdminOperation",  operationId }
				};
				if (sysAdminOperationGrantee.FetchFromDB(conditions)) {
					sysAdminOperationGrantee.Delete();
				}
			}	
		}

		private static void DeleteEntitySchemaOperationRight(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			var entitySchemaIds = new List<Guid> {
				_sysAppIconsSchemaUId,
				_sysInstalledAppSchemaUId
			};
			foreach (Guid entitySchemaUId in entitySchemaIds) {
				Entity sysEntitySchemaOperationRight = entitySchemaManager.GetEntityByName("SysEntitySchemaOperationRight",
					userConnection);
				var conditions = new Dictionary<string, object> {
					{ "SysAdminUnit", _almIntegrationUserId },
					{ "SubjectSchemaUId",  entitySchemaUId }
				};
				if (sysEntitySchemaOperationRight.FetchFromDB(conditions)) {
					sysEntitySchemaOperationRight.Delete();
				}
			}	
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			DeleteAccessToAdministratedOperations(userConnection);
			DeleteEntitySchemaOperationRight(userConnection);
		}

		#endregion

	}

	#endregion

}

