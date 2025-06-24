namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Creatio.FeatureToggling;
	using Terrasoft.Core;
	using Terrasoft.Core.FeatureToggling;

	#region Enum: FeatureStates

	/// <summary>
	/// Feature states.
	/// </summary>
	public enum FeatureState
	{
		/// <summary>
		/// Feature disabled.
		/// </summary>
		Disabled = 0,

		/// <summary>
		/// Feature enabled.
		/// </summary>
		Enabled = 1,

		/// <summary>
		/// Feature established.
		/// </summary>
		Established = 2
	}

	#endregion

	#region Class: FeatureUtilities

	/// <summary>
	/// Provides utilities methods for work with features.
	/// </summary>
	public static class FeatureUtilities
	{

		#region Properties: Private

		private static IFeatureValueProvider _featureValueProvider;
		private static IFeatureValueProvider FeatureValueProvider {
			get {
				if (_featureValueProvider != null) {
					return _featureValueProvider;
				}
				return GlobalAppSettings.UseFeatureService && Features.GetIsEnabled<UseFeatureServiceInConfiguration>()
					? new ServiceFeatureValueProvider()
					: new FeatureValueProvider();
			}
			set => _featureValueProvider = value;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Returns feature state by <paramref name="code"/>.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns>State of feature.</returns>
		public static int GetFeatureState(this UserConnection source, string code) {
			return FeatureValueProvider.GetFeatureState(source, code, Guid.Empty);
		}

		/// <summary>
		/// Returns feature state by <paramref name="code"/>.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="sysAdminUnitId">SysAdminUnit unique identifier.</param>
		/// <returns>State of feature.</returns>
		public static int GetFeatureState(this UserConnection source, string code, Guid sysAdminUnitId) {
			return FeatureValueProvider.GetFeatureState(source, code, sysAdminUnitId);
		}

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for any user.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		public static bool GetIsFeatureEnabledForAnyUser(this UserConnection source, string code) {
			return FeatureValueProvider.GetIsFeatureEnabledForAnyUser(source, code);
		}

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for all users.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		public static bool GetIsFeatureEnabledForAllUsers(this UserConnection source, string code) {
			return FeatureValueProvider.GetIsFeatureEnabledForAllUsers(source, code);
		}

		/// <summary>
		/// Returns all feature states.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <returns>List of features.</returns>
		public static Dictionary<string, int> GetFeatureStates(this UserConnection source) {
			return FeatureValueProvider.GetFeatureStates(source);
		}

		/// <summary>
		/// Returns info about all features and their states.
		/// </summary>
		/// <param name="source"><see cref="UserConnection"/> instance.</param>
		/// <returns>Information about features and their states.</returns>
		public static List<FeatureInfo> GetFeaturesInfo(this UserConnection source) {
			return FeatureValueProvider.GetFeaturesInfo(source);
		}

		/// <summary>
		/// Sets feature state.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		public static void SetFeatureState(this UserConnection source, string code, int state,
				bool forAllUsers = false) {
			FeatureValueProvider.SetFeatureState(source, code, state, forAllUsers);
		}

		/// <summary>
		/// Create Feature if it does not exist and sets feature state.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		public static void SafeSetFeatureState(this UserConnection source, string code, int state,
				bool forAllUsers = false) {
			FeatureValueProvider.SafeSetFeatureState(source, code, state, forAllUsers);
		}

		/// <summary>
		/// Creates feature.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="name">Feature name.</param>
		/// <param name="description">Feature description.</param>
		public static void CreateFeature(this UserConnection source, string code, string name, string description) {
			FeatureValueProvider.CreateFeature(source, code, name, description);
		}

		/// <summary>
		/// Checks is feature enabled.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns>Is feature enabled flag.</returns>
		public static bool GetIsFeatureEnabled(this UserConnection source, string code) {
			return source.GetIsFeatureEnabled(code, Guid.Empty);
		}

		/// <summary>
		/// Checks is feature enabled.
		/// </summary>
		/// <param name="source">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="sysAdminUnitId">SysAdminUnit unique identifier.</param>
		/// <returns>Is feature enabled flag.</returns>
		public static bool GetIsFeatureEnabled(this UserConnection source, string code, Guid sysAdminUnitId) {
			int featureState = FeatureValueProvider.GetFeatureState(source, code, sysAdminUnitId);
			return featureState == (int)FeatureState.Enabled;
		}

		#endregion

	}

	#endregion

}

