namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateProductivitySysModuleEntityInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateProductivitySysModuleEntityInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateProductivitySysModuleEntityInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateProductivitySysModuleEntityInstallScriptExecutorSchema(UpdateProductivitySysModuleEntityInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("095ad44f-f5b7-4367-b778-c1c1af8e08d7");
			Name = "UpdateProductivitySysModuleEntityInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("4996c6be-1243-409f-af08-a2bc3d5966b6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,93,111,218,48,20,125,78,165,254,7,139,190,128,68,162,134,36,132,180,99,82,200,71,133,38,166,74,148,189,123,201,5,172,37,78,228,56,172,81,197,127,159,99,3,131,20,246,176,135,72,185,31,62,231,220,227,107,68,113,14,85,137,19,64,111,192,24,174,138,53,55,130,130,174,201,166,102,152,147,130,222,223,125,220,223,105,117,69,232,6,45,155,138,67,254,220,137,69,127,150,65,210,54,87,198,11,80,96,36,249,219,115,14,155,231,5,189,94,97,112,43,111,68,148,19,78,160,18,13,162,229,129,193,70,16,161,32,195,85,245,132,86,101,138,57,188,178,34,173,133,128,29,225,141,208,180,16,81,6,242,92,51,167,21,199,89,182,76,24,41,121,244,14,73,205,11,38,145,8,229,192,40,206,80,210,66,253,39,18,122,66,243,27,20,90,235,219,73,111,76,32,75,133,224,87,70,118,130,167,45,181,95,169,66,196,0,167,5,205,26,244,82,147,20,249,7,5,111,77,9,194,220,58,167,171,121,138,166,136,194,111,217,208,239,57,182,103,6,150,21,235,145,55,114,117,59,240,39,186,239,184,158,30,218,19,243,49,242,29,59,112,198,189,193,243,145,230,1,104,170,132,156,50,7,93,11,224,219,66,10,171,127,102,36,145,206,104,165,252,71,187,66,104,81,3,65,127,85,1,19,139,65,213,69,163,250,34,28,32,57,172,166,156,90,38,91,200,241,2,83,188,1,134,224,74,110,218,57,111,92,57,40,197,107,237,200,33,145,77,152,53,95,218,233,135,210,131,175,7,74,237,227,204,150,208,125,140,28,219,15,116,223,115,29,221,54,71,161,238,5,222,72,159,248,86,96,207,220,145,111,90,81,111,48,188,97,240,126,248,25,113,236,155,145,233,78,34,221,114,3,79,183,93,219,211,69,38,22,136,142,53,27,71,227,200,15,173,127,32,74,192,189,17,23,44,194,201,182,255,107,87,162,233,73,185,26,26,85,151,123,38,204,185,98,153,120,88,92,213,103,205,119,241,102,251,189,206,122,246,134,221,59,81,6,106,100,141,250,29,10,35,6,158,108,99,86,228,225,172,213,100,124,131,102,112,188,67,77,235,118,47,129,171,145,126,224,172,22,204,23,51,10,222,22,65,150,142,148,159,17,240,14,250,199,234,193,20,21,238,213,198,157,47,168,136,85,246,50,41,114,127,0,115,120,238,6,174,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("095ad44f-f5b7-4367-b778-c1c1af8e08d7"));
		}

		#endregion

	}

	#endregion

}

