namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.Store;

	/// <summary>
	/// Represents loader of term calculation logs store.
	/// </summary>
	public class TermCalculationLogStoreLoader
	{
		private readonly UserConnection _userConnection;

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="TermCalculationLogStoreLoader"/>.
		/// </summary>
		/// <param name="uc"></param>
		public TermCalculationLogStoreLoader(UserConnection uc) {
			_userConnection = uc;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Stores of term calculation logs.
		/// </summary>
		public TermCalculationLogStore Store {
			get =>
				_userConnection.SessionCache.WithLocalCaching()
					.GetValue<TermCalculationLogStore>(TermCalculationLogStore.CalculationLogCacheName);
			set =>
				_userConnection.SessionCache.WithLocalCaching()
					.SetOrRemoveValue(TermCalculationLogStore.CalculationLogCacheName, value);
		}

		#endregion

	}
}
