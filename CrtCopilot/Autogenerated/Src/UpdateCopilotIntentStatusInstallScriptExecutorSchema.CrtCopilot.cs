namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateCopilotIntentStatusInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateCopilotIntentStatusInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateCopilotIntentStatusInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateCopilotIntentStatusInstallScriptExecutorSchema(UpdateCopilotIntentStatusInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ad325981-0cd2-4075-9995-540d3d7af0ec");
			Name = "UpdateCopilotIntentStatusInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bb0dbad8-d67b-49e0-a79c-79fc53c5d9d9");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,89,139,219,48,16,126,246,194,254,7,225,39,7,34,99,37,62,54,221,3,124,46,161,7,11,233,246,93,117,38,137,192,150,141,36,167,13,101,255,123,37,219,217,77,194,182,208,98,91,178,102,190,153,111,46,113,90,131,108,105,9,232,43,8,65,101,179,81,110,218,240,13,219,118,130,42,214,240,235,171,95,215,87,86,39,25,223,162,213,65,42,168,111,47,206,26,95,85,80,26,176,116,31,129,131,96,229,27,230,212,173,128,63,201,221,156,43,166,24,72,13,48,143,213,118,223,43,86,162,178,162,82,162,231,118,77,21,164,77,203,170,70,45,185,2,174,86,138,170,78,46,185,84,180,170,86,165,96,173,202,127,66,217,169,70,160,15,104,249,174,66,187,53,185,28,125,239,27,182,70,131,14,156,103,9,66,231,205,135,60,80,119,118,156,160,222,206,218,83,129,100,79,252,137,73,133,238,17,135,31,200,252,222,125,132,195,55,90,117,240,68,153,184,147,74,232,12,167,104,216,31,30,70,107,203,160,255,6,68,206,128,179,144,77,178,104,158,16,66,176,23,197,11,236,47,242,25,142,99,18,224,116,225,147,32,77,243,200,143,60,123,138,236,88,199,183,7,123,176,155,76,255,153,103,150,6,126,148,71,4,71,177,23,96,127,150,19,124,147,132,1,158,37,69,56,47,102,158,71,130,208,240,100,64,13,147,238,194,250,255,201,252,48,242,18,47,188,193,113,230,205,177,63,15,125,188,152,7,30,14,211,52,36,121,145,145,36,42,12,217,146,103,176,135,170,105,107,221,232,115,186,151,219,126,219,232,145,161,229,14,57,111,29,65,140,159,244,230,216,49,171,159,171,195,168,25,15,247,23,237,29,134,239,176,42,119,80,211,207,148,211,45,8,61,200,106,16,39,135,47,250,142,56,246,59,227,167,131,189,24,148,33,60,139,109,144,115,74,233,22,160,202,93,33,154,58,75,156,199,142,173,221,39,42,36,140,24,87,215,111,50,121,13,217,58,179,92,129,210,247,171,171,121,95,97,19,198,26,236,233,152,144,219,11,143,172,23,134,116,15,206,134,86,242,85,255,50,148,208,172,102,209,159,126,127,3,167,119,50,47,1,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ad325981-0cd2-4075-9995-540d3d7af0ec"));
		}

		#endregion

	}

	#endregion

}

