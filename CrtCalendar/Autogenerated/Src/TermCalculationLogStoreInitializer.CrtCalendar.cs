namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.Store;

	/// <summary>
	/// Initializer of term calculation logs store.
	/// </summary>
	public static class TermCalculationLogStoreInitializer
	{

		#region Methods: Private

		private static TermCalculationLogStoreLoader GetLoader(UserConnection uc) {
			return new TermCalculationLogStoreLoader(uc);
		}

		private static bool IsLoggingEnabled(UserConnection userConnection) {
			return userConnection.SessionCache.WithLocalCaching()
						.GetValue<bool>(TermCalculationLogStore.CalculationLogEnabledCacheName,
							false) 
					&& userConnection.GetIsFeatureEnabled("TermCalculationLogging");
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets logs store.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <returns>Logs store.</returns>
		public static TermCalculationLogStore GetStore(UserConnection userConnection) {
			if (IsLoggingEnabled(userConnection)) {
				TermCalculationLogStoreLoader loader = GetLoader(userConnection);
				return loader?.Store;
			}
			return null;
		}

		/// <summary>
		/// Initializes logs store.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="store">Logs store.</param>
		public static void InitializeLogStore(UserConnection userConnection, TermCalculationLogStore store) {
			TermCalculationLogStoreLoader loader = GetLoader(userConnection);
			if (loader != null) {
				loader.Store = store;
				userConnection.SessionCache.WithLocalCaching()
					.SetOrRemoveValue(TermCalculationLogStore.CalculationLogEnabledCacheName,
						true);
			}
		}

		/// <summary>
		/// Resets logs store.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public static void ResetLogStore(UserConnection userConnection) {
			TermCalculationLogStoreLoader loader = GetLoader(userConnection);
			if (loader != null) {
				loader.Store = null;
				userConnection.SessionCache.WithLocalCaching()
					.SetOrRemoveValue(TermCalculationLogStore.CalculationLogEnabledCacheName,
						null);
			}
		}

		#endregion

	}
}
