namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: GlobalMacrosHelperSchema

	/// <exclude/>
	public class GlobalMacrosHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public GlobalMacrosHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public GlobalMacrosHelperSchema(GlobalMacrosHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("04316a97-914d-4819-8555-bc01ec749a39");
			Name = "GlobalMacrosHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,149,77,107,219,64,16,134,207,14,228,63,12,206,165,1,99,65,143,249,48,132,16,220,28,82,76,235,246,190,214,142,164,129,213,174,186,59,106,99,66,254,123,71,43,89,145,45,231,80,2,133,64,14,66,218,217,119,102,159,217,153,65,86,149,24,42,149,34,172,209,123,21,92,198,243,91,103,51,202,107,175,152,156,61,61,121,58,61,153,212,129,108,14,223,183,129,177,188,236,215,175,184,204,127,48,153,32,50,17,158,121,204,197,4,183,70,133,112,1,75,227,54,202,60,168,212,187,240,5,77,133,62,170,146,36,129,171,80,151,165,242,219,69,183,142,30,64,101,101,176,68,203,80,121,151,98,136,231,150,209,127,190,115,76,6,158,85,189,49,148,66,26,157,199,167,193,5,12,151,63,63,139,203,83,68,232,73,31,144,11,167,133,117,21,67,181,155,135,128,209,240,13,185,246,54,0,227,35,131,203,228,45,176,138,17,254,20,232,177,163,196,0,30,197,156,162,134,205,22,184,64,242,240,91,153,26,99,2,49,80,139,4,5,229,133,145,135,69,74,89,35,149,40,74,30,235,36,24,167,69,147,123,116,237,61,247,114,111,45,149,242,170,4,43,117,189,158,54,100,235,142,106,186,88,143,56,137,139,30,115,126,149,68,215,227,145,60,254,18,98,33,187,179,76,188,253,42,198,233,162,253,142,10,201,153,210,2,234,32,236,236,32,71,238,2,239,114,253,151,232,247,186,143,77,90,106,79,25,73,233,222,116,130,116,143,212,155,9,195,116,113,163,53,53,125,170,140,220,110,94,55,221,21,32,115,254,160,53,70,241,124,91,239,209,61,202,201,187,173,70,219,181,96,96,223,212,107,137,188,30,84,225,83,103,30,86,102,182,211,30,185,228,25,44,107,210,135,59,247,122,214,193,222,61,50,90,141,122,213,231,7,47,169,158,67,51,187,147,201,75,194,3,217,245,64,120,25,101,109,18,35,226,125,212,163,140,35,188,243,24,241,249,127,12,207,199,8,188,131,17,88,25,69,246,253,205,193,24,251,205,195,112,38,152,237,159,38,174,91,235,190,241,249,47,108,94,186,34,149,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("04316a97-914d-4819-8555-bc01ec749a39"));
		}

		#endregion

	}

	#endregion

}

