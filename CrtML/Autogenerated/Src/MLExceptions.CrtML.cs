 namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Runtime.Serialization;

	#region Class: InvalidTrainSetQueryException

	/// <summary>
	/// Represents errors that occur during interpreting of ML model query expression.
	/// </summary>
	/// <seealso cref="System.Exception" />
	public class InvalidTrainSetQueryException : Exception
	{

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="InvalidTrainSetQueryException"/> class.
		/// </summary>
		/// <param name="message">The message that describes the error.</param>
		public InvalidTrainSetQueryException(string message)
			: base(message) {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="InvalidTrainSetQueryException"/> class.
		/// </summary>
		/// <param name="message">The error message that explains the reason for the exception.</param>
		/// <param name="innerException">The exception that is the cause of the current exception,
		/// or a null reference if no inner exception is specified.</param>
		public InvalidTrainSetQueryException(string message, Exception innerException)
			: base(message, innerException) {
		}

		#endregion

	}

	#endregion

	#region Class: NotEnoughDataForTrainingException

	/// <summary>
	/// Represents errors that occur if there is not enough data for ML model training.
	/// </summary>
	/// <seealso cref="System.Exception" />
	public class NotEnoughDataForTrainingException : Exception
	{

		#region Constructors: Protected

		/// <summary>
		/// Initializes a new instance of the <see cref="NotEnoughDataForTrainingException"/> class.
		/// </summary>
		/// <param name="info">The <see cref="T:System.Runtime.Serialization.SerializationInfo" />
		/// that holds the serialized object data about the exception being thrown.</param>
		/// <param name="context">The <see cref="T:System.Runtime.Serialization.StreamingContext" />
		/// that contains contextual information about the source or destination.</param>
		protected NotEnoughDataForTrainingException(SerializationInfo info, StreamingContext context)
			: base(info, context) {
		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="NotEnoughDataForTrainingException"/> class.
		/// </summary>
		/// <param name="message">The message that describes the error.</param>
		public NotEnoughDataForTrainingException(string message) : base(message) {
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="NotEnoughDataForTrainingException"/> class.
		/// </summary>
		/// <param name="message">The error message that explains the reason for the exception.</param>
		/// <param name="innerException">The exception that is the cause of the current exception, or a null
		/// reference (<see langword="Nothing" /> in Visual Basic) if no inner exception is specified.</param>
		public NotEnoughDataForTrainingException(string message, Exception innerException)
				: base(message, innerException) {
		}

		#endregion

	}

	#endregion

	/// <summary>
	/// Error while predicting single entity.
	/// </summary>
	public class SingleEntityPredictionException : Exception
	{

		/// <summary>Initializes a new instance of the <see cref="T:System.Exception" /> class with a specified error
		/// message.</summary>
		/// <param name="message">The message that describes the error. </param>
		public SingleEntityPredictionException(string message)
			: base(message) {
		}
		
		/// <summary>Initializes a new instance of the <see cref="T:System.Exception" /> class with a specified error
		/// message.</summary>
		/// <param name="entityId">Entity for prediction.</param>
		/// <param name="modelId">Model for prediction.</param>
		public SingleEntityPredictionException(Guid entityId, Guid modelId)
			: base($"Error while predicting entity {entityId} using model {modelId}") {
		}

		/// <summary>Initializes a new instance of the <see cref="T:System.Exception" /> class with a specified error
		/// message and a reference to the inner exception that is the cause of this exception.</summary>
		/// <param name="entityId">Entity for prediction.</param>
		/// <param name="modelId">Model for prediction.</param>
		/// <param name="innerException">The exception that is the cause of the current exception, or a null reference
		///     (<see langword="Nothing" /> in Visual Basic) if no inner exception is specified. </param>
		public SingleEntityPredictionException(Guid entityId, Guid modelId, Exception innerException)
			: base($"Error while predicting entity {entityId} for model {modelId}: {innerException?.Message}",
				innerException) {
		}
	}

}

