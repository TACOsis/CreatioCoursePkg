namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IPushNotificationProviderSchema

	/// <exclude/>
	public class IPushNotificationProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IPushNotificationProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IPushNotificationProviderSchema(IPushNotificationProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e415681b-39a4-4c62-9fc4-58927242174a");
			Name = "IPushNotificationProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d653ba80-e9e2-4f78-8775-8ba14502d8a8");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,83,207,79,194,48,20,190,251,87,188,224,5,18,179,153,120,49,64,48,4,18,194,65,37,2,39,227,161,172,111,243,197,173,93,250,58,18,98,248,223,109,7,34,27,211,144,168,239,208,195,107,191,31,253,250,170,68,134,156,139,8,97,129,198,8,214,177,13,70,90,197,148,20,70,88,210,234,2,92,189,151,171,175,130,73,37,48,223,176,197,172,215,216,117,240,52,197,200,99,57,152,160,66,67,209,238,228,225,248,165,193,196,109,195,84,89,52,177,19,239,194,116,86,240,235,131,182,20,83,84,234,206,140,94,147,68,83,69,134,97,8,125,46,178,76,152,205,160,210,61,112,129,142,33,119,100,160,142,216,32,223,211,113,80,229,10,79,200,242,98,149,82,4,116,224,251,217,90,53,30,95,107,77,18,230,168,100,187,14,28,11,43,64,186,165,243,21,221,182,22,141,195,237,210,105,142,108,148,10,230,46,52,49,159,155,212,19,230,6,25,149,229,134,156,188,187,115,35,138,188,151,239,173,156,38,243,252,184,98,157,162,197,118,107,236,77,56,0,74,112,179,227,82,190,13,174,131,155,0,150,140,126,142,134,50,35,181,84,100,167,210,189,132,27,43,33,91,157,151,10,217,222,4,91,227,103,111,161,223,80,213,228,124,37,104,123,39,77,174,55,107,143,112,68,63,41,72,222,213,29,253,189,204,231,45,200,166,248,127,244,247,200,44,146,255,16,24,83,249,225,221,148,244,119,90,87,123,205,1,12,165,164,114,47,45,199,255,119,218,13,46,154,126,204,246,3,93,61,245,164,215,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e415681b-39a4-4c62-9fc4-58927242174a"));
		}

		#endregion

	}

	#endregion

}

