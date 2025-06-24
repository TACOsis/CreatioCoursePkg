namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Core;

	#region Interface: IFeatureValueProvider

	/// <summary>
	/// Represents methods to work with feature toggle state.
	/// </summary>
	public interface IFeatureValueProvider
	{

		#region Methods: Public

		/// <summary>
		/// Returns feature state by <paramref name="code"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="sysAdminUnitId">SysAdminUnit unique identifier.</param>
		/// <returns>State of feature.</returns>
		int GetFeatureState(UserConnection userConnection, string code, Guid sysAdminUnitId);

		/// <summary>
		/// Returns all feature states.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>List of features.</returns>
		Dictionary<string, int> GetFeatureStates(UserConnection userConnection);

		/// <summary>
		/// Returns info about all features and their states.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Information about features and their states.</returns>
		List<FeatureInfo> GetFeaturesInfo(UserConnection userConnection);

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for any user.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		bool GetIsFeatureEnabledForAnyUser(UserConnection userConnection, string code);

		/// <summary>
		/// Returns sign that feature is enabled by <paramref name="code"/> for all users.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <returns><c>True</c> if feature enabled for any user. Returns <c>false</c> otherwise.</returns>
		bool GetIsFeatureEnabledForAllUsers(UserConnection userConnection, string code);

		/// <summary>
		/// Sets feature state.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		void SetFeatureState(UserConnection userConnection, string code, int state, bool forAllUsers);

		/// <summary>
		/// Create Feature if it does not exist and sets feature state.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="state">New feature state.</param>
		/// <param name="forAllUsers">If defined as true state will be updated for all users</param>
		void SafeSetFeatureState(UserConnection userConnection, string code, int state, bool forAllUsers);

		/// <summary>
		/// Creates feature.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="code">Feature code.</param>
		/// <param name="name">Feature name.</param>
		/// <param name="description">Feature description.</param>
		void CreateFeature(UserConnection userConnection, string code, string name, string description);

		#endregion

	}

	#endregion

}

