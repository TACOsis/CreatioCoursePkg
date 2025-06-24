namespace Terrasoft.Configuration
{
	using System.Collections.Generic;
	using Terrasoft.Core;
	
	#region Class: BaseTermStrategy

	/// <summary>
	/// Base class for term strategies
	/// </summary>
	public abstract class BaseTermStrategy<TTermInterval, TMask> where TTermInterval : ITermInterval<TMask> 
	{
		#region Properties : Protected

		/// <summary>
		/// Gets the user connection.
		/// </summary>
		/// <value>
		/// The user connection.
		/// </value>
		protected UserConnection UserConnection {
			get;
			private set;
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseTermStrategy{TTermInterval, TMask}"/> class.
		/// </summary>
		public BaseTermStrategy() {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseTermStrategy{TTermInterval, TMask}"/> class.
		/// </summary>
		/// <param name="arguments">The arguments.</param>
		public BaseTermStrategy(Dictionary<string, object> arguments) {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseTermStrategy{TTermInterval, TMask}"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public BaseTermStrategy(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="BaseTermStrategy{TTermInterval, TMask}"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="args">The arguments.</param>
		public BaseTermStrategy(UserConnection userConnection, Dictionary<string, object> args)
			: this(userConnection) {
		}

		#endregion
		
		#region Methods: Public

		/// <summary>
		/// Method that return time interval from strategy
		/// </summary>
		/// <param name="mask">Flags indicates which values must be filled.</param>
		/// <returns>Term interval.</returns>
		public abstract TTermInterval GetTermInterval(TMask mask); 

		#endregion
	}

	#endregion

}
