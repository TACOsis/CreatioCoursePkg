namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using System.Collections.Generic;


	#region Class: CaseTermIntervalSelector

	/// <summary>
	/// A class that selects a strategy and gets corresponding term interval.
	/// </summary>
	[Override]
	public class CaseTermIntervalSelector : ITermIntervalSelector<CaseTermStates>
	{

		#region Fields: Private

		private readonly TermCalculationLogStore _calculationLogStore;

		#endregion

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
			private set;
		}

		#endregion

		#region Constructors: Public

		public CaseTermIntervalSelector() {
		}

		public CaseTermIntervalSelector(UserConnection userConnection) {
			UserConnection = userConnection;
			_calculationLogStore = TermCalculationLogStoreInitializer.GetStore(userConnection);
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Method that returns time interval for calculation
		/// </summary>
		/// <param name="arguments">Arguments for strategies.</param>
		/// <returns>Time interval.</returns>
		public virtual ITermInterval<CaseTermStates> Get(Dictionary<string, object> arguments) {
			CaseTermInterval result = new CaseTermInterval();
			var strategyQueue = ClassFactory.Get<CaseTermStrategyQueue>(
				new ConstructorArgument("userConnection", UserConnection));
			var strategyManager = ClassFactory.Get<CaseTermStrategyManager>();
			var className = strategyQueue.Dequeue();
			var preferableFlags = CaseTermStates.ContainsResolve | CaseTermStates.ContainsResponse;
			while (className != null && !result.GetMask().HasFlag(preferableFlags)) {
				var strategy = strategyManager.GetItem(className, arguments, UserConnection);
				CaseTermStates currentMask = result.GetMask();
				try {
					CaseTermInterval term = strategy.GetTermInterval(currentMask);
					CaseTermStates termMask = term.GetMask();
					if (!currentMask.HasFlag(CaseTermStates.ContainsResolve)
							&& termMask.HasFlag(CaseTermStates.ContainsResolve)) {
						if (_calculationLogStore != null &&
							_calculationLogStore.CalculationTermKind == CaseTermStates.ContainsResolve) {
							_calculationLogStore.SelectedStrategy =
								_calculationLogStore.CalculationStrategyRules.Find(item => item.StrategyClassName == className);
							_calculationLogStore.TimeTerm = term.ResolveTerm.NativeTimeTerm ?? term.ResolveTerm;
						}
						result.ResolveTerm = term.ResolveTerm;
					}
					if (!currentMask.HasFlag(CaseTermStates.ContainsResponse)
							&& termMask.HasFlag(CaseTermStates.ContainsResponse)) {
						if (_calculationLogStore != null &&
							_calculationLogStore.CalculationTermKind == CaseTermStates.ContainsResponse) {
							_calculationLogStore.SelectedStrategy =
								_calculationLogStore.CalculationStrategyRules.Find(item => item.StrategyClassName == className);
							_calculationLogStore.TimeTerm = term.ResponseTerm.NativeTimeTerm ?? term.ResponseTerm;
						}
						result.ResponseTerm = term.ResponseTerm;
					}
				} catch {
					className = strategyQueue.Dequeue();
					continue;
				}
				className = strategyQueue.Dequeue();
			}
			return result;
		}

		#endregion

	}

	#endregion

}
