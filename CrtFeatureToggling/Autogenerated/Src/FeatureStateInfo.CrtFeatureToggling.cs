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

	#region Class: FeatureStateInfo

	[DataContract]
	public class FeatureStateInfo
	{
		#region Fields: Public

		[DataMember(Name = "code")]
		public string Code;

		[DataMember(Name = "state")]
		public int State;

		[DataMember(Name = "adminUnitId")]
		public Guid SysAdminUnitId;

		#endregion
	}

	#endregion

}

