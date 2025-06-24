namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Globalization;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;

    public class RenamePortalUsers: IInstallScriptExecutor {

        private readonly CultureInfo _enCulture = new CultureInfo("en-US");
        private readonly CultureInfo _ruCulture = new CultureInfo("ru-RU");

        private UserConnection _userConnection;
        private EntitySchemaManager _entitySchemaManager;

        private void RenameConnectionType() {
            Entity connectionTypeEntity = _entitySchemaManager.GetEntityByName("ConnectionType", _userConnection);
            Guid portalUserGuid = new Guid("4AD0E44A-6502-4499-984C-F626D12C6301");
            var connectionTypeConditions = new Dictionary<string, object> {
                { "Id", portalUserGuid}
            };
            if (!connectionTypeEntity.FetchFromDB(connectionTypeConditions)){
                return;
            }
            var portalConnectionString = new LocalizableString();
            portalConnectionString.SetCultureValue(_enCulture, "External user");
            portalConnectionString.SetCultureValue(_ruCulture, "Внешний пользователь");
            connectionTypeEntity.SetColumnValue("Name", portalConnectionString);
            connectionTypeEntity.Save();
        }

        private void RenamePortalRole() {
            Entity sauEntity = _entitySchemaManager.GetEntityByName("SysAdminUnit", _userConnection);
            Guid portalRoleGuid = new Guid("720B771C-E7A7-4F31-9CFB-52CD21C3739F");
            var sauEntityConditions = new Dictionary<string, object> {
                { "Id", portalRoleGuid}
            };
            if (!sauEntity.FetchFromDB(sauEntityConditions)){
                return;
            }
            sauEntity.SetColumnValue("Name", "All external users");
            sauEntity.Save();
        }

        public void Execute(UserConnection userConnection) {
            _userConnection = userConnection;
            _entitySchemaManager = userConnection.EntitySchemaManager;
            RenameConnectionType();
            RenamePortalRole();
        }
    }
}

