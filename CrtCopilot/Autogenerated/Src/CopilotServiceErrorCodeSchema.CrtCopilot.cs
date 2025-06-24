namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotServiceErrorCodeSchema

	/// <exclude/>
	public class CopilotServiceErrorCodeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotServiceErrorCodeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotServiceErrorCodeSchema(CopilotServiceErrorCodeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df");
			Name = "CopilotServiceErrorCode";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,146,75,106,195,48,16,64,215,49,248,14,3,217,180,27,123,223,31,20,147,64,119,166,165,7,80,229,113,50,68,150,140,70,78,26,74,239,94,89,138,99,55,52,80,188,176,209,124,244,120,51,72,139,6,185,21,18,161,176,40,28,153,172,48,45,41,227,210,228,43,77,210,100,177,180,184,33,163,161,80,130,249,14,78,213,55,180,123,146,184,178,214,216,194,84,24,90,243,60,135,7,238,154,70,216,227,211,41,46,173,217,83,133,12,216,183,130,52,253,185,246,39,183,197,1,6,28,105,217,192,200,39,144,182,251,80,36,129,157,151,147,32,123,139,235,18,139,232,124,150,94,19,170,202,91,151,1,18,107,151,150,33,241,138,173,69,70,237,24,132,134,78,239,180,57,232,232,156,157,47,77,181,46,188,252,238,42,163,213,209,199,150,244,6,222,35,33,168,193,35,104,191,101,83,223,76,179,183,247,255,214,137,171,59,108,209,98,88,155,144,174,31,14,63,81,118,225,84,11,82,88,205,18,125,14,172,213,128,90,7,210,104,252,103,121,190,186,255,11,255,145,230,174,174,73,146,111,131,22,109,67,204,158,206,179,38,120,153,192,202,145,53,206,112,165,97,152,98,137,186,138,207,37,196,223,241,213,255,74,250,220,15,87,20,45,69,40,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df"));
		}

		#endregion

	}

	#endregion

}

