namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSysSettingsForExternalUsersInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateSysSettingsForExternalUsersInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSysSettingsForExternalUsersInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSysSettingsForExternalUsersInstallScriptExecutorSchema(UpdateSysSettingsForExternalUsersInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0e1be858-f9fe-4d6b-a4d3-b2c71df20e6b");
			Name = "UpdateSysSettingsForExternalUsersInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,85,219,110,226,48,16,125,78,165,254,131,197,83,42,33,62,96,123,145,90,46,93,36,138,170,13,237,251,224,76,18,175,28,59,107,59,161,17,226,223,119,156,16,150,178,244,137,84,202,205,51,103,206,204,216,206,177,130,28,109,1,28,217,10,141,1,171,19,55,26,107,149,136,180,52,224,132,86,215,87,219,235,171,160,180,66,165,44,170,173,195,156,252,82,34,247,78,59,122,70,133,70,240,219,3,230,152,198,224,87,246,209,84,57,225,4,90,2,16,164,40,215,82,112,198,37,88,203,222,138,24,28,82,174,8,157,163,80,59,211,102,250,225,208,40,144,111,22,141,157,43,235,64,202,136,27,81,184,233,7,242,210,105,243,131,205,207,218,137,125,219,228,232,146,84,90,196,172,245,98,232,249,168,93,213,182,195,202,79,195,27,230,91,15,130,10,12,179,255,202,89,8,235,238,153,194,13,243,95,119,19,209,128,193,212,119,214,25,2,12,153,94,255,38,134,135,135,125,124,224,177,95,195,58,84,176,101,131,177,142,113,48,100,131,23,161,94,105,46,54,218,196,11,84,169,203,6,187,22,180,27,246,64,25,21,200,5,200,113,6,212,109,169,92,175,228,203,50,247,59,226,123,200,23,122,131,134,131,197,239,161,127,43,138,222,233,105,139,45,113,19,101,40,229,229,100,93,161,63,105,231,105,83,255,66,78,131,254,10,125,214,58,149,184,130,244,5,20,164,104,122,33,157,65,37,184,86,51,163,243,163,159,250,114,234,137,176,176,150,248,24,87,160,56,198,239,194,150,32,167,73,66,248,30,216,15,219,89,187,233,31,34,94,105,175,21,11,157,10,117,57,249,76,72,244,146,166,172,23,209,9,170,218,75,201,9,239,238,182,121,37,36,151,192,51,22,126,150,33,146,169,88,52,162,37,212,169,58,117,194,21,52,42,91,31,185,247,134,251,19,165,107,229,184,142,120,134,57,236,215,158,164,221,181,230,167,122,73,167,68,56,56,94,189,225,169,86,182,197,6,34,97,225,105,186,209,12,29,207,252,250,79,158,194,51,29,220,28,234,13,254,11,165,17,29,55,101,174,222,65,150,84,195,220,70,209,235,99,5,66,250,181,167,50,156,41,177,75,126,38,28,42,12,59,119,59,189,205,211,63,232,166,235,47,107,61,41,95,1,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0e1be858-f9fe-4d6b-a4d3-b2c71df20e6b"));
		}

		#endregion

	}

	#endregion

}

