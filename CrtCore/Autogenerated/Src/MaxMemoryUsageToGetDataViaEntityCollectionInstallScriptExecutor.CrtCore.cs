namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using global::Common.Logging;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Common;

	#region Class: MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutor

	internal class MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutor : IInstallScriptExecutor
	{
		
		#region Fields: Private
		
		private readonly ILog _log = LogManager.GetLogger("Packages");
		
		#endregion

		#region Methods: Public
		
		public void Execute(UserConnection userConnection) {
			Entity sysSettingsEntity = userConnection.EntitySchemaManager.GetEntityByName("SysSettings", userConnection);
			var sysSetingsId = new Guid("B9C05956-3101-447C-A861-F769E5A16322");
			if (!sysSettingsEntity.FetchFromDB(sysSetingsId)) {
				_log.Info($"SysSettings with Id {sysSetingsId} not found");
				return;
			}
			sysSettingsEntity.Delete();
		}

		#endregion
	
	}

	#endregion

}

