namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotHistoryStorageSchema

	/// <exclude/>
	public class ICopilotHistoryStorageSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotHistoryStorageSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotHistoryStorageSchema(ICopilotHistoryStorageSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("94c696e0-f740-48c2-a029-90597ed84345");
			Name = "ICopilotHistoryStorage";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,144,65,110,194,48,16,69,215,68,202,29,70,172,232,38,57,64,41,27,22,45,219,166,23,48,120,2,35,17,59,245,140,169,80,213,187,119,156,24,4,65,170,42,121,99,251,255,63,111,190,51,29,114,111,118,8,235,128,70,200,87,107,223,211,209,75,89,124,151,197,44,50,185,61,52,103,22,236,158,203,66,95,234,186,134,37,199,174,51,225,188,202,247,70,124,48,123,132,214,7,200,118,96,100,38,239,24,140,179,64,194,160,115,88,69,92,93,66,234,155,148,62,110,143,180,3,114,130,161,77,52,155,156,243,70,172,225,231,60,65,149,137,234,1,98,164,48,39,228,233,252,234,42,175,167,250,101,111,130,233,192,105,3,47,243,221,104,107,70,215,124,53,141,89,214,131,122,48,159,60,217,97,90,86,47,214,119,102,184,207,122,26,123,251,139,217,92,169,3,126,70,100,25,74,11,40,49,104,129,169,188,232,72,63,128,44,58,161,150,48,252,119,175,28,184,113,173,159,175,62,14,8,157,183,120,132,47,146,3,88,35,6,196,3,43,132,86,15,118,123,187,229,16,149,25,6,231,3,3,248,22,68,63,146,223,94,208,181,169,139,41,165,188,198,220,85,222,240,125,84,45,238,175,9,15,110,80,83,103,179,159,178,208,243,11,46,22,138,165,161,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("94c696e0-f740-48c2-a029-90597ed84345"));
		}

		#endregion

	}

	#endregion

}

