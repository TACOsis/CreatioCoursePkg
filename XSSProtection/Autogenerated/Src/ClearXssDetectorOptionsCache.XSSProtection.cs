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
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;
	using Terrasoft.Security;
	using Terrasoft.Security.Http;
	using Terrasoft.Web.Security.Xss;

	#region Class: ClearXssDetectorOptionsCacheMethodsWrapper

	/// <exclude/>
	public class ClearXssDetectorOptionsCacheMethodsWrapper : ProcessModel
	{

		public ClearXssDetectorOptionsCacheMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ClearCacheExecute", ClearCacheExecute);
			AddScriptTaskMethod("InitializeOptionsExecute", InitializeOptionsExecute);
		}

		#region Methods: Private

		private bool ClearCacheExecute(ProcessExecutingContext context) {
			var userConnection = this.Get<UserConnection>("UserConnection");
			var cache = ClassFactory.Get<IXssDetectorOptionsCache>(new ConstructorArgument("userConnection", userConnection));
			cache.ClearCache();
			return true;
		}

		private bool InitializeOptionsExecute(ProcessExecutingContext context) {
			var userConnection = this.Get<UserConnection>("UserConnection");
			var xssDetectorOptionsProvider = ClassFactory.Get<IXssDetectorOptionsProvider<XssDetectorOptions>>(new ConstructorArgument("userConnection", userConnection));
			var options = xssDetectorOptionsProvider.Options;
			var xssDetector = ClassFactory.Get<IXssDetector>(new ConstructorArgument("userConnection", userConnection));
			xssDetector.Initialize(options);
			var xssDetectionRequestFilter = ClassFactory.Get<IXssDetectionRequestFilter>(new ConstructorArgument("xssDetectorOptionsProvider", xssDetectorOptionsProvider));
			xssDetectionRequestFilter.Initialize(options.UriExclusions);
			return true;
		}

		#endregion

	}

	#endregion

}

