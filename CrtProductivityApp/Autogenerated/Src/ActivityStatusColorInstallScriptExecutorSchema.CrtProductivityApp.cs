namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ActivityStatusColorInstallScriptExecutorSchema

	/// <exclude/>
	public class ActivityStatusColorInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ActivityStatusColorInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ActivityStatusColorInstallScriptExecutorSchema(ActivityStatusColorInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1201043c-5ddb-4988-8f23-cba09bc9d1e5");
			Name = "ActivityStatusColorInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e57a91ca-433a-4790-a303-ef85bf18785a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,239,111,155,48,16,253,76,165,254,15,22,253,66,164,4,193,66,83,210,174,147,106,126,84,213,212,106,18,219,190,123,206,37,177,6,118,100,155,172,40,202,255,62,99,146,118,100,84,237,55,238,238,189,119,199,221,51,39,21,168,13,161,128,190,131,148,68,137,165,246,19,193,151,108,85,75,162,153,224,231,103,187,243,51,167,86,140,175,80,209,40,13,213,205,73,108,240,101,9,180,5,43,255,30,56,72,70,95,49,255,202,86,149,224,195,21,9,111,229,253,140,107,166,25,40,3,48,144,11,9,43,211,8,37,37,81,234,26,221,153,182,91,166,155,66,19,93,43,51,136,144,15,92,105,82,150,5,149,108,163,179,103,160,181,22,210,114,25,215,32,57,41,17,109,201,31,230,162,107,244,240,134,168,179,179,194,47,83,61,130,94,139,133,153,235,91,253,171,100,180,43,110,236,55,218,10,182,64,29,21,188,31,10,164,89,51,239,214,134,234,94,56,66,237,202,29,199,254,121,83,208,53,84,228,145,112,178,2,137,96,32,119,123,194,247,7,136,55,86,145,195,31,148,50,11,34,178,249,124,95,179,197,24,41,45,205,218,191,28,154,58,59,212,162,218,146,231,78,227,40,141,112,28,77,46,227,108,54,73,243,48,156,204,175,66,60,9,130,48,157,5,217,124,26,39,51,119,52,70,238,5,142,175,146,36,119,247,227,1,145,249,71,69,130,192,64,134,69,34,156,98,28,199,249,251,34,243,56,193,65,48,40,242,41,8,147,28,223,197,239,139,228,249,236,114,26,185,123,171,177,247,115,33,51,66,215,222,239,237,6,221,190,108,170,91,51,34,61,31,153,107,12,220,200,188,11,221,193,113,243,100,158,156,231,246,221,231,142,79,61,208,29,204,97,75,228,245,27,248,57,104,186,206,165,168,82,220,14,228,127,133,102,116,180,140,227,156,128,11,208,198,217,117,197,127,146,178,54,109,173,205,77,183,150,104,83,199,70,255,17,201,22,188,99,241,176,135,46,220,31,60,15,124,209,217,222,198,93,182,159,52,185,191,89,30,102,247,96,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1201043c-5ddb-4988-8f23-cba09bc9d1e5"));
		}

		#endregion

	}

	#endregion

}

