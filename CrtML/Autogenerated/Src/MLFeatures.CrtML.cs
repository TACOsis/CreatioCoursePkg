namespace Terrasoft.Configuration.ML
{
	using Creatio.FeatureToggling;

	public class MLFeatures
	{
		public class UseOAuth : FeatureMetadata
		{

			#region Constructors: Public

			public UseOAuth() {
				IsEnabled = true;
				Description = "Use OAuth authentication for ML service";
			}

			#endregion

		}

	}
} 

