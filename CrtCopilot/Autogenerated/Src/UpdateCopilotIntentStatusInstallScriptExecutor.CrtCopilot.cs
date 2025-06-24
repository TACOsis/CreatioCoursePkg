namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;


	public class UpdateCopilotIntentStatusInstallScriptExecutor : IInstallScriptExecutor
	{
		public void Execute(UserConnection userConnection) {
			var statusList = new List<KeyValuePair<string, string>> {
				new KeyValuePair<string, string> (
					 "1D73B111-07A9-49E2-AA15-C9415CCE7470", "Active"
				),
				new KeyValuePair<string, string> (
					 "2C547E71-7A05-42E1-8B65-2BF63F200156", "Deactivated"
				),
				new KeyValuePair<string, string> (
					 "4670B068-AD03-4364-9350-6CC61EFD1B7F", "InDevelopment"
				),
			};
			foreach (var status in statusList) {
				Entity statusEntity = userConnection.EntitySchemaManager.GetEntityByName("CopilotIntentStatus", userConnection);
				if (statusEntity.FetchFromDB(Guid.Parse(status.Key))) {
					statusEntity.SetColumnValue("Code", status.Value);
					statusEntity.Save(false);
				}
			}
		}
	}
}

