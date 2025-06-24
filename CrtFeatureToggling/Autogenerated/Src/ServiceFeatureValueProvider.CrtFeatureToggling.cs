namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Creatio.FeatureToggling;
	using Creatio.FeatureToggling.Providers;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using FeatureToggleService = Creatio.FeatureToggling.Configuration.FeatureService;

	#region Class: ServiceFeatureValueProvider

	/// <summary>
	/// Service feature value provider.
	/// </summary>
	public class ServiceFeatureValueProvider : FeatureValueProvider
	{

		#region Fields: Private

		private readonly FeatureToggleService _featureService = FeatureToggleService.Instance;

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public override int GetFeatureState(UserConnection userConnection, string code, Guid sysAdminUnitId) {
			bool isEnabled = sysAdminUnitId.IsEmpty()
				? Features.GetIsEnabled(code)
				: Features.GetIsEnabled(code, sysAdminUnitId);
			return isEnabled ? 1 : 0;
		}

		/// <inheritdoc />
		public override Dictionary<string, int> GetFeatureStates(UserConnection userConnection) {
			return _featureService.GetFeatures().ToDictionary(k => k.Name, v => v.IsEnabled ? 1 : 0);
		}

		/// <inheritdoc />
		public override List<FeatureInfo> GetFeaturesInfo(UserConnection userConnection) {
			IList<FeatureDescriptor> descriptors = _featureService.GetFeatures();
			List<FeatureInfo> baseFeaturesInfo = base.GetFeaturesInfo(userConnection);
			foreach (FeatureDescriptor featureDescriptor in descriptors) {
				if (baseFeaturesInfo.FirstOrDefault(f => f.Code == featureDescriptor.Name) != null) {
					continue;
				}
				baseFeaturesInfo.Insert(0, new FeatureInfo {
					Id = Guid.NewGuid(),
					Code = featureDescriptor.Name,
					Name = featureDescriptor.Name,
					Description = featureDescriptor.Description,
					ActualState = featureDescriptor.IsEnabled ? 1 : 0,
					HasStateForGroup = true
				});
			}
			return baseFeaturesInfo;
		}

		#endregion

	}

	#endregion

}

