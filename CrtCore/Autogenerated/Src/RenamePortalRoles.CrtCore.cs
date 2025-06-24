namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	public class RenamePortalRoles : IInstallScriptExecutor
	{
		#region Fileds: Private

		private UserConnection _userConnection;
		private EntitySchemaManager _entitySchemaManager;

		#endregion

		#region Methods: Private

		private static Dictionary<string, string> _roles = new Dictionary<string, string>() {
			{ "6F9AF602-3A22-455C-B056-2CF14241F943", "Administrator for external organization" }
		};

		private void RenamePortalRole(KeyValuePair<string, string> role) {
			Entity sauEntity = _entitySchemaManager.GetEntityByName("SysAdminUnit", _userConnection);
			var sauEntityConditions = new Dictionary<string, object> {
				{ "Id", Guid.Parse(role.Key)}
			};
			if (!sauEntity.FetchFromDB(sauEntityConditions)) {
				return;
			}
			sauEntity.SetColumnValue("Name", role.Value);
			sauEntity.Save(false);
		}

		#endregion

		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			_userConnection = userConnection;
			_entitySchemaManager = userConnection.EntitySchemaManager;
			foreach (KeyValuePair<string, string> role in _roles) {
				RenamePortalRole(role);
			}
		}

		#endregion

	}
}

