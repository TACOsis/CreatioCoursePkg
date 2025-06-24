namespace Terrasoft.Configuration.ML
{
	/// <summary>
	/// Interface for particular features of the specific problem type.
	/// </summary>
	public interface IMLProblemTypeFeatures
	{

		/// <summary>
		/// Has output (target) column for model training.
		/// </summary>
		bool HasOutputColumn { get; }
	}
}

