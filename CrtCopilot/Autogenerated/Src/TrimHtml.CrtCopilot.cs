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

	#region Class: TrimHtmlMethodsWrapper

	/// <exclude/>
	public class TrimHtmlMethodsWrapper : ProcessModel
	{

		public TrimHtmlMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			string textValue = Get<string>("InputText");
			textValue = System.Text.RegularExpressions.Regex.Replace(textValue, @"<[^>]*>", String.Empty);
			Set<string>("OutputText", textValue);
			
			return true;
		}

		#endregion

	}

	#endregion

}

