namespace Terrasoft.Configuration.ML
{
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Creatio.FeatureToggling;

	#region Class: MLUtils

	/// <summary>
	/// Utilities for machine learning.
	/// </summary>
	public static class MLUtils
	{
		#region Constants: Private

		public const string MLOAuthScope = "use_ml";

		#endregion

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("ML");

		#endregion

		#region Methods: Public

		/// <summary>
		/// Checks the API key.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <returns><c>true</c> if api key is set, otherwise - <c>false</c>.</returns>
		public static bool CheckApiKey(UserConnection userConnection) {
			var apiKey = GetAPIKey(userConnection);
			if (apiKey.IsNullOrEmpty() && Features.GetIsDisabled<MLFeatures.UseOAuth>()) {
				_log.Warn("\tService API key is empty. Check 'CloudServicesAPIKey' system settings value");
				return false;
			}
			return true;
		}

		/// <summary>
		/// Checks if any ml problem type has service url.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <returns><c>true</c> if any service has service url, otherwise - <c>false</c>.</returns>
		public static bool CheckIsServiceUrlSet(UserConnection userConnection) {
			Select select = (Select)new Select(userConnection)
				.Count("*")
				.From("MLProblemType")
				.Where(Func.Len("ServiceUrl")).IsGreater(Column.Const(0));
			int count = select.ExecuteScalar<int>();
			if (count == 0) {
				_log.Debug("There are no ML problem types with set ServiceUrl");
			}
			return count > 0;
		}

		/// <summary>
		/// Gets the API key.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <returns>Api key without leading and trailing whitespaces.</returns>
		public static string GetAPIKey(UserConnection userConnection) {
			var key = (string)Core.Configuration.SysSettings.GetValue(userConnection, "CloudServicesAPIKey");
			if (key.IsNotNullOrEmpty()) {
				key = key.Trim();
			}
			return key;
		}

		#endregion

	}

	#endregion

}

