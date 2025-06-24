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

	#region Class: SetLeadTransferToFinalStateDateProcessMethodsWrapper

	/// <exclude/>
	public class SetLeadTransferToFinalStateDateProcessMethodsWrapper : ProcessModel
	{

		public SetLeadTransferToFinalStateDateProcessMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTaskUpdateLeadDateExecute", ScriptTaskUpdateLeadDateExecute);
		}

		#region Methods: Private

		private bool ScriptTaskUpdateLeadDateExecute(ProcessExecutingContext context) {
			var userConnection = Get<UserConnection>("UserConnection");
			Guid entityId = Get<Guid>("LeadId");
			var update = new Update(userConnection, "Lead")
				.Set("MovedToFinalStateOn", Column.Parameter(DateTime.UtcNow))
				.Where("Id").IsEqual(Column.Parameter(entityId));
			update.Execute();
			return true;
		}

		#endregion

	}

	#endregion

}

