 namespace Terrasoft.Configuration {
    using System;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;

    /// <summary>
    /// Fix All Employee role.
    /// </summary>
    public class SetAllEmployeesIsActiveTrue : IInstallScriptExecutor {
        
        public void Execute(UserConnection userConnection) {
           	var update = new Update(userConnection, "SysAdminUnit")
				.Set("Active", Column.Parameter(true))
				.Where("Id").IsEqual(Column.Parameter(Guid.Parse("A29A3BA5-4B0D-DE11-9A51-005056C00008")));
			update.Execute();
        }

    }

}
