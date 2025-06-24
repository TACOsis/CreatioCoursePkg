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

	#region Class: UISwitcherSetFormPagesUIMethodsWrapper

	/// <exclude/>
	public class UISwitcherSetFormPagesUIMethodsWrapper : ProcessModel
	{

		public UISwitcherSetFormPagesUIMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("SetEditPageUITypeSettingValueScriptTaskExecute", SetEditPageUITypeSettingValueScriptTaskExecute);
		}

		#region Methods: Private

		private bool SetEditPageUITypeSettingValueScriptTaskExecute(ProcessExecutingContext context) {
			string sysSettingCode = Get<bool>("ForNewShell") ? "EditPagesUITypeForFreedomHost" : "EditPagesUITypeForEXTHost";
			Guid uiType = Get<Guid>("EditPagesUIType");
			Terrasoft.Core.Configuration.SysSettings.SetDefValue(UserConnection, sysSettingCode, uiType);
			return true;
		}

		#endregion

	}

	#endregion

}

