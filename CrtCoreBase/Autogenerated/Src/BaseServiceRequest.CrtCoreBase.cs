namespace Terrasoft.Configuration.CESModels
{

	using System;
	using System.Runtime.Serialization;

	#region Class: BaseServiceRequest

	/// <summary>
	/// Class of base request to CES.
	/// </summary>
	[DataContract]
	public class BaseServiceRequest
	{

		#region Properties: Public

		/// <summary>
		/// Gets or sets the API key.
		/// </summary>
		/// <value>
		/// The API key.
		/// </value>
		[DataMember(Name = "key")]
		public string ApiKey { get; set; }
		
		#endregion

	}

	#endregion

	#region Class: PingServiceRequest

	/// <summary>
	/// Class of base request to CES.
	/// </summary>
	[DataContract]
	public class PingServiceRequest : BaseServiceRequest
	{

		#region Properties: Public
		
		/// <summary>
		/// The date of last license values actualization.
		/// </summary>
		[DataMember(Name = "actualLicenseInfo")]
		public ActualLicenseInfoContract ActualLicenseInfo { get; set; }

		#endregion

	}

	#endregion

	#region Class: ActualLicenseInfoContract

	/// <summary>
	/// Represents contract of actual license info.
	/// </summary>
	[DataContract]
	public class ActualLicenseInfoContract
	{

		#region Properties: Public

		/// <summary>
		/// The number of used active contacts in the license.
		/// </summary>
		[DataMember(Name = "activeContactCount")]
		public int ActiveContactCount { get; set; }

		/// <summary>
		/// The date of last license values actualization.
		/// </summary>
		[DataMember(Name = "actualizationDate")]
		public DateTime ActualizationDate { get; set; }

		/// <summary>
		/// The number of paid contacts in the license.
		/// </summary>
		[DataMember(Name = "paidContactCount")]
		public int PaidContactCount { get; set; }

		/// <summary>
		/// The date of expiration license.
		/// </summary>
		[DataMember(Name = "dueDate")]
		public DateTime DueDate { get; set; }

		#endregion

	}

	#endregion

}

