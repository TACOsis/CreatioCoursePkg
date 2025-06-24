 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: BindCustomerIdToLicenseFolderInstallScript

	internal class BindCustomerIdToLicenseFolderInstallScript : IInstallScriptExecutor
	{

		#region Properties: Private

		private UserConnection _userConnection { get; set; }

		private EntitySchemaManager _entitySchemaManager { get; set; }

		#endregion

		#region Methods: Private

		private void PutSysSettingToFolder(string sysSettingCode, Guid folderId) {
			Guid sysSettingId = GetSysSettingId(sysSettingCode);
			if (sysSettingId.IsEmpty() || folderId.IsEmpty()) {
				return;
			}
			Entity sysSettingsInFolderEntity = _entitySchemaManager.GetEntityByName("SysSettingsInFolder", _userConnection);
			var conditions = new Dictionary<string, object> {
				{ "SysSettings", sysSettingId },
				{ "Folder", folderId },
			};
			if (sysSettingsInFolderEntity.FetchFromDB(conditions)){
				return;
			}
			sysSettingsInFolderEntity.SetDefColumnValues();
			sysSettingsInFolderEntity.SetColumnValue("SysSettingsId", sysSettingId);
			sysSettingsInFolderEntity.SetColumnValue("FolderId", folderId);
			sysSettingsInFolderEntity.Save();
		}

		private Guid GetSysSettingId(string code) {
			Entity sysSetting = _entitySchemaManager.GetEntityByName("SysSettings", _userConnection);
			var conditions = new Dictionary<string, object> {
				{ "Code", code }
			};
			return !sysSetting.FetchFromDB(conditions) ? Guid.Empty : sysSetting.GetTypedColumnValue<Guid>("Id");
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			_userConnection = userConnection;
			_entitySchemaManager = userConnection.EntitySchemaManager;
			PutSysSettingToFolder("CustomerId", new Guid("5F740402-022C-46AF-B53C-E1EB916463E1"));
		}

		#endregion

	}

	#endregion

}

