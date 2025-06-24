namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: AgeActualizationC360MethodsWrapper

	/// <exclude/>
	public class AgeActualizationC360MethodsWrapper : ProcessModel
	{

		public AgeActualizationC360MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			const string triggerGroup = "e03d55b6-8478-49d9-86b1-b8838386339d";
			var isOracle =  UserConnection.DBExecutorType.Name == "OracleExecutor" ||
							UserConnection.DBExecutorType.Name == "OracleManagedExecutor";
			
			var triggersTableName = isOracle ? "QRTZ_TRIGGERS" : "qrtz_triggers";
			var triggerGroupColumnName = isOracle ? "TRIGGER_GROUP" : "trigger_group";
			var cronTriggersTableName = isOracle ? "QRTZ_CRON_TRIGGERS" : "qrtz_cron_triggers";
			
			var deleteCron = new Delete(UserConnection)
				.From(cronTriggersTableName)
				.Where(triggerGroupColumnName).IsEqual(Column.Parameter(triggerGroup));
			deleteCron.Execute();
			var deleteTrigger = new Delete(UserConnection)
				.From(triggersTableName)
				.Where(triggerGroupColumnName).IsEqual(Column.Parameter(triggerGroup));
			deleteTrigger.Execute();
			var select = new Select(UserConnection)
				.Column("Id")
				.From("SysSchema")
				.Where("Name").IsEqual(Column.Parameter(context.Process.ProcessSchema.Name));
			var insertSelect = new InsertSelect(UserConnection)
				.Into("SysProcessDisabled")
				.Set("SysSchemaId")
				.FromSelect(select);
			insertSelect.Execute();
			return true;
		}

		#endregion

	}

	#endregion

}

