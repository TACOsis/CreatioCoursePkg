  namespace Terrasoft.Configuration {
    using System;
    using System.Collections.Generic;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;

    /// <summary>
    /// Update generic email sync error message relation
    /// </summary>
    public class UpdateSysErrorHandlerToEmailMessageRelation : IInstallScriptExecutor {
      private Guid _errorHandlerToRebind = Guid.Parse("61b75e9b-2bd0-464a-b84d-4cb77a1574a1");
      private Guid _errorMessageToRebind = Guid.Parse("64FF32FB-D9C4-483E-A22D-5791CC444470");

      public void Execute(UserConnection userConnection) {
        Entity syncErrorHandlerEntity = userConnection.EntitySchemaManager.GetEntityByName("SyncErrorHandler", userConnection);
        var conditions = new Dictionary<string, object> {
          { "Id", _errorHandlerToRebind}
        };
        if (syncErrorHandlerEntity.FetchFromDB(conditions)) {
          syncErrorHandlerEntity.SetColumnValue("ErrorCodeId", _errorMessageToRebind);
          syncErrorHandlerEntity.Save(false);
        }
      }
    }
}
