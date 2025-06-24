 namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Runtime.Serialization;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Terrasoft.Common;
	using Terrasoft.Common.Messaging;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.FeatureToggling;
	using Terrasoft.Web.Common;

	#region Class: FeatureInfo

	[DataContract]
	public class FeatureInfo
	{
		#region Properties: Public

		[DataMember]
		public Guid Id;

		[DataMember]
		public string Name;

		[DataMember]
		public string Code;

		[DataMember]
		public string Description;

		[DataMember]
		public List<FeatureStateInfo> StatesInfo;

		[DataMember]
		public int ActualState;

		[DataMember]
		public bool HasStateForUser;

		[DataMember]
		public bool HasStateForGroup;

		[DataMember]
		public int GroupState;

		#endregion

		#region Methods: Private

		private void CheckCurrentUserState(UserConnection userConnection) {
			foreach (var state in StatesInfo) {
				if (state.SysAdminUnitId == userConnection.CurrentUser.Id) {
					ActualState = state.State;
					HasStateForUser = true;
				}
			}
		}

		private void CheckGroupState() {
			foreach (var state in StatesInfo) {
				if (state.SysAdminUnitId == BaseConsts.AllEmployersSysAdminUnitUId) {
					GroupState = state.State;
					HasStateForGroup = true;
				}
			}
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Actualizes HasStateForUser and HasGroupState flags.
		/// </summary>
		/// <param name="userConnection"><see cref="UserConnection"/> instance.</param>
		public void ActualizeFeatureState(UserConnection userConnection) {
			if (StatesInfo.Count > 0) {
				CheckCurrentUserState(userConnection);
				CheckGroupState();
			}
		}

		#endregion
	}

	#endregion

}

