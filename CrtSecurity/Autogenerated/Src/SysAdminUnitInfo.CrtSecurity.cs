using System;

namespace Terrasoft.Configuration.SysAdminUnitInfo
{
	using System.Runtime.Serialization;

	#region Class: SysAdminUnitInfo

	[DataContract]
	public class SysAdminUnitInfo
	{

		#region Properties: Public

		[DataMember]
		public string Name;

		[DataMember]
		public Guid ContactId;

		[DataMember]
		public string Email;

		#endregion
	}

	#endregion

}

