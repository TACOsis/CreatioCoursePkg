namespace Terrasoft.Configuration
{
	using System;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Store;

	#region Class: CaseTermStrategyQueue

	/// <summary>
	/// Strategy queue
	/// </summary>
	[Override]
	public class CaseTermStrategyQueue
	{

		#region Properties: Public

		/// <summary>
		/// User connection.
		/// </summary>
		public UserConnection UserConnection {
			get;
			private set;
		}

		#endregion

		#region Properties: Protected

		/// <summary>
		/// Strategies queue.
		/// </summary>
		protected System.Collections.Queue StrategyQueue {
			get {
				if(_strategyQueue == null) {
					_strategyQueue = GetStrategyQueue();
				}
				return _strategyQueue;
			}
		}

		#endregion

		#region Fields: private

		private System.Collections.Queue _strategyQueue;
		private readonly TermCalculationLogStore _calculationLogStore;

		#endregion

		#region Constructors: Public

		public CaseTermStrategyQueue() {
		}

		public CaseTermStrategyQueue(UserConnection userConnection) {
			UserConnection = userConnection;
			_calculationLogStore = TermCalculationLogStoreInitializer.GetStore(userConnection);
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Return strategies queue.
		/// </summary>
		/// <returns>Strategies queue.</returns>
		protected virtual System.Collections.Queue GetStrategyQueue() {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "DeadlineCalcSchemas");
			string strategyName = esq.AddColumn("Name").Name;
			string handlerName = esq.AddColumn("Handler").Name;
			string alternativeStrategyName = esq.AddColumn("AlternativeRule.Name").Name;
			string defaultName = esq.AddColumn("Default").Name;
			EntityCollection strategyCollection = esq.GetEntityCollection(UserConnection);
			var strategy = strategyCollection.Find(defaultName, true);
			int countStrategy = 0;
			System.Collections.Queue strategyQueue = new System.Collections.Queue();
			while (countStrategy != strategyCollection.Count && strategy != null) {
				strategyQueue.Enqueue(strategy.GetTypedColumnValue<string>(handlerName));
				_calculationLogStore?.CalculationStrategyRules.Add(new CalculationStrategyRule {
					StrategyClassName = strategy.GetTypedColumnValue<string>(handlerName),
					StrategyName = strategy.GetTypedColumnValue<string>(strategyName)
				});
				strategy = strategyCollection.Find(strategyName, strategy.GetTypedColumnValue<String>(alternativeStrategyName));
				countStrategy++;
			}
			return strategyQueue;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Return current strategy from queue.
		/// </summary>
		/// <returns>Strategy class name.</returns>
		public string Dequeue() {
			return (StrategyQueue.Count > 0 && !string.IsNullOrEmpty(StrategyQueue.Peek().ToString())) 
					? StrategyQueue.Dequeue().ToString() : null;
		}

		#endregion
	}
	#endregion
}
