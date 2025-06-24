namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DeleteCampaignObsoleteEditPageInstallScriptExecutorSchema

	/// <exclude/>
	public class DeleteCampaignObsoleteEditPageInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DeleteCampaignObsoleteEditPageInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DeleteCampaignObsoleteEditPageInstallScriptExecutorSchema(DeleteCampaignObsoleteEditPageInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d4918a44-2bf5-4de4-958e-cfa8c88b5c33");
			Name = "DeleteCampaignObsoleteEditPageInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2c3f70d-d3a5-4d15-9bc6-62f67312edb1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,143,218,48,20,60,167,82,255,195,107,78,65,90,34,40,84,11,221,110,15,9,31,226,176,221,74,108,207,149,113,30,224,202,177,35,219,161,205,174,248,239,117,226,68,4,136,104,125,73,108,207,204,155,231,55,32,72,138,58,35,20,225,5,149,34,90,110,77,24,75,177,101,187,92,17,195,164,128,183,247,239,192,174,92,51,177,131,117,161,13,166,15,215,71,150,196,57,210,146,161,195,37,10,84,140,118,193,150,92,110,8,103,175,149,246,25,160,93,63,77,111,92,42,188,113,21,206,133,97,134,161,182,24,135,202,242,13,103,20,180,177,37,41,80,78,180,134,152,164,25,97,59,241,157,236,80,55,29,94,97,21,146,68,10,94,192,50,103,9,60,243,164,161,193,35,8,252,93,29,7,254,167,233,48,26,12,135,147,126,52,138,227,254,120,242,113,220,143,198,209,168,63,143,23,131,193,125,60,29,142,38,83,191,87,91,62,94,184,114,118,102,200,209,96,163,254,188,209,178,220,207,19,102,74,131,43,97,253,112,190,166,138,101,102,254,7,105,110,164,130,207,176,234,190,56,117,3,167,191,76,177,3,49,8,7,105,59,249,153,220,172,23,252,208,168,108,6,132,27,167,125,230,246,182,87,22,240,60,175,122,231,98,77,247,152,146,39,34,44,79,1,118,156,61,94,240,195,14,226,67,75,17,116,161,159,100,146,243,202,143,165,119,136,218,128,25,135,142,138,111,54,192,129,191,110,147,252,187,75,207,174,192,129,40,160,82,88,68,153,210,122,136,51,86,65,136,42,190,104,163,108,160,238,64,110,126,89,222,215,186,81,239,13,252,85,98,53,207,66,19,182,227,112,172,128,71,87,5,216,22,130,15,103,93,132,11,52,116,191,80,50,157,69,193,201,65,175,121,75,207,70,205,228,74,212,2,181,208,185,132,203,72,208,4,169,14,83,123,196,46,81,213,132,93,24,254,103,146,208,90,102,207,116,248,175,112,92,191,108,219,142,251,28,255,2,137,0,45,7,87,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d4918a44-2bf5-4de4-958e-cfa8c88b5c33"));
		}

		#endregion

	}

	#endregion

}

