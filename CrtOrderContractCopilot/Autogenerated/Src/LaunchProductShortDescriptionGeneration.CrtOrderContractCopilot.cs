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

	#region Class: LaunchProductShortDescriptionGenerationMethodsWrapper

	/// <exclude/>
	public class LaunchProductShortDescriptionGenerationMethodsWrapper : ProcessModel
	{

		public LaunchProductShortDescriptionGenerationMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("SetProcessLogIdExecute", SetProcessLogIdExecute);
		}

		#region Methods: Private

		private bool SetProcessLogIdExecute(ProcessExecutingContext context) {
			string instanceUId = context.Process.InstanceUId;
			Guid result;
			Guid.TryParse(instanceUId, out result);
			Set<Guid>("ProcessLogId", result);
			return true;
		}

		#endregion

	}

	#endregion

}

