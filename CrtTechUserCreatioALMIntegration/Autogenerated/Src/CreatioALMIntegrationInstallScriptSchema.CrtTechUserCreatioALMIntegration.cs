namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CreatioALMIntegrationInstallScriptSchema

	/// <exclude/>
	public class CreatioALMIntegrationInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CreatioALMIntegrationInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CreatioALMIntegrationInstallScriptSchema(CreatioALMIntegrationInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a97d5e10-e3b0-481f-915f-854979328ec2");
			Name = "CreatioALMIntegrationInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1732cf9e-1655-488b-a91f-1f8dfd44cec4");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,203,110,219,48,16,60,43,64,254,129,85,47,50,96,232,3,146,182,128,227,196,133,129,186,40,224,58,119,134,90,203,12,40,82,32,87,110,13,195,255,222,229,67,126,168,78,155,35,151,51,179,179,203,145,152,230,13,184,150,11,96,63,193,90,238,204,26,203,169,209,107,89,119,150,163,52,250,246,102,127,123,147,117,78,234,154,45,119,14,161,161,123,165,64,248,75,87,126,5,13,86,138,251,35,230,92,198,194,91,245,242,73,163,68,9,142,0,4,249,104,161,38,57,54,85,220,185,59,54,181,224,123,79,84,51,215,8,117,52,50,215,14,185,82,75,97,101,139,129,213,118,47,74,10,38,60,233,29,28,118,199,230,23,133,167,223,32,58,52,150,237,131,220,209,197,2,112,99,42,242,241,195,202,45,71,136,183,109,60,48,18,64,234,186,53,178,98,171,182,162,210,119,218,225,76,130,170,138,149,3,75,219,211,113,59,172,187,56,142,137,106,253,42,192,207,190,243,172,145,111,157,101,89,216,198,110,41,54,208,240,5,215,188,6,155,80,151,181,207,3,201,242,10,241,254,76,49,137,16,239,138,26,189,29,70,216,67,48,83,156,124,141,7,125,70,81,84,208,139,99,63,133,81,213,51,87,29,144,120,62,249,182,96,242,180,246,252,10,92,195,175,35,60,189,21,243,180,249,95,180,45,239,135,39,3,149,12,57,35,22,9,176,71,25,236,112,187,251,20,101,199,204,188,188,146,199,47,105,145,217,158,229,126,128,124,124,242,119,8,55,135,40,46,215,172,248,16,213,203,25,160,216,204,172,105,30,31,138,97,195,209,40,9,90,192,206,234,72,142,74,137,189,4,164,15,161,107,116,232,82,244,109,251,57,211,202,122,48,223,66,177,230,202,165,250,33,37,14,116,21,67,247,86,2,67,196,83,0,99,220,67,240,98,116,225,223,129,235,211,53,76,233,48,150,57,29,144,11,204,147,231,255,226,233,63,48,169,26,169,87,90,246,164,43,3,165,218,121,137,42,127,0,165,67,186,31,114,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a97d5e10-e3b0-481f-915f-854979328ec2"));
		}

		#endregion

	}

	#endregion

}

