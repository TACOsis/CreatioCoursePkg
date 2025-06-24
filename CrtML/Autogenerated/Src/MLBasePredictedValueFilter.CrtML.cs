namespace Terrasoft.Configuration.ML
{
	using System;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.ML.Interfaces;

	#region Class: MLBasePredictedValueFilter

	/// <summary>
	/// Base dummy handler for entity field prediction and filtering value.
	/// </summary>
	public class MLBasePredictedValueFilter
	{

		#region Fields: Protected

		/// <summary>
		/// The logger.
		/// </summary>
		protected static readonly ILog Log = LogManager.GetLogger("ML");

		#endregion

		#region Properties: Protected

		protected UserConnection UserConnection { get; set;}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MLBasePredictedValueSetter"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		public MLBasePredictedValueFilter(UserConnection userConnection) {
			UserConnection = userConnection;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Called when entity field need to be setted by predicted value.
		/// </summary>
		/// <param name="entity">The entity.</param>
		/// <param name="columnValueName">Name of the column value.</param>
		/// <param name="result">The predicted value.</param>
		/// <returns><c>true</c> - if value may be setted to field, else - <c>false</c>.</returns>
		public virtual bool OnSetupPredictedValue(Entity entity, string columnValueName, ClassificationResult result) {
			return true;
		}

		#endregion

	}

	#endregion

}

