namespace Terrasoft.Configuration
{
	using Common;
	using Core;
	using System.Collections.Generic;
	using System.Threading.Tasks;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;
	using Web.Common;

	#region Class : ActualizeDefObjectsRightsManager

	/// <summary>
	/// A class for Security token job management.
	/// TODO: delete after marketing release 8.3.0
	/// </summary>
	public class ActualizeDefObjectsRightsManager : AppEventListenerBase
	{

		#region Properties : Protected

		protected UserConnection UserConnection {
			get;
			private set;
		}

		#endregion

		#region Methods : Protected

		/// <summary>
		/// Gets user connection from application event context.
		/// </summary>
		/// <param name="context">Application event context.</param>
		/// <returns>User connection.</returns>
		protected UserConnection GetUserConnection(AppEventContext context) {
			var appConnection = context.Application["AppConnection"] as AppConnection;
			if (appConnection == null) {
				throw new ArgumentNullOrEmptyException("AppConnection");
			}
			return appConnection.SystemUserConnection;
		}

		/// <summary>
		/// Sets up rights for existing records.
		/// </summary>
		protected virtual void ActualizeDefObjectsRights() {
			Task.Delay(10).Wait();
			var manager = UserConnection.ProcessSchemaManager;
			var processSchema = manager.GetInstanceByName("ActualizeDefObjectsRightsProcess");
			if (processSchema.Enabled) {
				var processEngine = UserConnection.ProcessEngine;
				var processExecutor = processEngine.ProcessExecutor;
				Dictionary<string, string> parameterValues = new Dictionary<string, string> ();
				processExecutor.Execute(processSchema.UId, parameterValues);
			}
		}

		#endregion

		#region Methods : Public

		/// <summary>
		/// Handles application start.
		/// </summary>
		/// <param name="context">Application event context.</param>
		public override void OnAppStart(AppEventContext context) {
			string code = "NeedActualizeDefObjectRights";
			base.OnAppStart(context);
			UserConnection = GetUserConnection(context);
			object value;
			CoreSysSettings.TryGetValue(UserConnection, code, out value);
			if ((bool)value) {
				Task.Run(() => ActualizeDefObjectsRights());
				CoreSysSettings.SetValue(UserConnection, code, false);
			}
		}

		#endregion

	}

	#endregion

}
