 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;

	#region Class: UpdateProductivitySysModuleEntityInstallScriptExecutor

	internal class UpdateProductivitySysModuleEntityInstallScriptExecutor : IInstallScriptExecutor
	{
		#region Fields: Private
		
		private readonly Guid ActivityTypeColumnUId = new Guid("5491C33F-E927-4CA8-A579-D4810EA54C56");
		
		#endregion
		
		#region Methods: Public

		public void Execute(UserConnection userConnection) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			new Dictionary<Guid, Guid> {
				{ new Guid("D70E54AC-A975-412D-9C92-8A3C4B72A13E"), ActivityTypeColumnUId },
				{ new Guid("6A1E178E-37C9-4749-A1EF-8A53B6E6EAD3"), ActivityTypeColumnUId }
			}.ForEach(kvp => {
				Entity sysModuleEntity = entitySchemaManager.GetEntityByName("SysModuleEntity", userConnection);
				if (sysModuleEntity.FetchFromDB(kvp.Key)) {
					sysModuleEntity.SetColumnValue("TypeColumnUId", kvp.Value);
					sysModuleEntity.Save();
				}
			});
		}

		#endregion

	}

	#endregion

}

