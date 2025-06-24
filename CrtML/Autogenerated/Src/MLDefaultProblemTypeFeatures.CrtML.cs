namespace Terrasoft.Configuration.ML
{
	using Terrasoft.Core.Factories;

	/// <summary>
	/// Default feature values for all problem types.
	/// </summary>
	[DefaultBinding(typeof(IMLProblemTypeFeatures))]
	public class MLDefaultProblemTypeFeatures : IMLProblemTypeFeatures
	{

		/// <summary>
		/// Has output (target) column for model training.
		/// </summary>
		public virtual bool HasOutputColumn { get; } = true;
	}
}

