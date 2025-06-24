namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema(UpdateSyncErrorMessageMultiFactorInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e9fe00c6-7595-4940-abc5-175d3d3857ad");
			Name = "UpdateSyncErrorMessageMultiFactorInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6ded360-42cd-4008-9952-fcaf8207688b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,84,93,107,219,48,20,125,78,161,255,65,243,94,28,72,66,59,186,126,101,29,196,78,82,2,203,54,72,186,215,162,202,55,137,54,89,50,87,82,54,83,242,223,39,75,38,95,184,25,236,65,96,93,157,123,238,213,185,71,150,52,7,93,80,6,100,14,136,84,171,133,233,165,74,46,248,210,34,53,92,201,243,179,215,243,179,150,213,92,46,201,172,212,6,242,254,209,222,225,133,0,86,129,117,239,17,36,32,103,59,204,62,109,158,43,217,124,130,240,86,188,55,146,134,27,14,218,1,28,228,61,194,210,21,34,169,160,90,223,147,167,34,163,6,102,165,100,35,68,133,83,208,154,46,97,106,133,225,99,202,140,194,137,212,134,10,49,99,200,11,51,250,3,204,186,160,103,226,210,0,74,42,8,171,168,254,147,137,220,147,201,27,37,90,149,110,219,126,199,28,68,230,26,254,142,124,237,234,84,71,213,42,194,150,32,208,76,73,81,146,71,203,51,242,172,79,180,145,145,7,34,225,183,71,198,81,146,14,46,63,94,220,14,187,195,187,171,155,238,213,245,104,220,77,146,225,117,119,112,153,222,92,124,72,147,228,46,189,141,218,253,198,90,218,96,165,247,179,26,88,179,170,22,56,169,153,131,12,252,48,191,58,107,184,90,209,183,227,227,232,52,93,129,176,230,202,234,67,150,47,92,254,154,171,81,78,185,152,163,178,47,2,244,74,41,227,50,6,140,102,144,151,129,213,107,6,50,11,178,109,35,181,138,83,48,43,229,101,116,4,156,249,57,182,10,255,77,214,202,41,23,228,135,248,73,3,58,27,203,96,75,98,15,182,109,226,71,211,242,206,42,103,108,5,57,157,82,233,116,70,2,13,177,135,163,252,94,67,98,127,143,145,192,222,232,92,118,3,167,123,39,38,128,147,178,82,40,142,142,157,23,117,142,187,14,37,214,20,9,83,50,227,254,189,213,94,24,114,15,161,88,126,10,83,232,16,245,242,211,229,125,174,175,218,122,37,209,36,115,156,255,176,214,166,179,133,135,241,85,41,13,3,221,120,216,38,180,196,23,241,187,253,43,247,198,96,216,106,140,42,31,38,241,174,215,118,187,238,5,193,88,148,33,55,16,29,100,207,192,184,63,138,205,229,15,42,172,83,102,215,200,9,163,214,234,28,18,209,53,196,11,42,116,125,186,9,126,217,183,151,219,135,232,97,208,197,254,2,208,168,148,215,25,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e9fe00c6-7595-4940-abc5-175d3d3857ad"));
		}

		#endregion

	}

	#endregion

}

