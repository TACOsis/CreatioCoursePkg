namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ChangeXssProtectionRuleInstallScriptSchema

	/// <exclude/>
	public class ChangeXssProtectionRuleInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ChangeXssProtectionRuleInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ChangeXssProtectionRuleInstallScriptSchema(ChangeXssProtectionRuleInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("afeef6a5-c2d5-4f32-b19c-1a16404b2bfc");
			Name = "ChangeXssProtectionRuleInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("115a8564-8a4e-4951-9e36-143f7496ab3c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,219,110,218,64,16,125,6,137,127,152,184,47,118,4,148,75,210,20,18,138,184,139,135,84,81,105,171,62,248,101,179,30,96,43,179,70,123,33,65,132,127,239,248,66,67,8,86,43,89,90,237,217,153,115,230,106,201,86,168,215,140,35,124,71,165,152,142,230,166,58,136,228,92,44,172,98,70,68,178,84,220,149,138,5,171,133,92,192,108,171,13,174,110,79,238,100,31,134,200,99,99,93,157,160,68,37,248,171,205,49,173,194,60,188,58,146,70,24,129,58,54,160,239,131,194,5,241,193,32,100,90,183,97,176,100,114,129,191,180,126,80,145,73,165,190,217,16,167,82,27,22,134,51,174,196,218,164,142,107,251,24,10,14,60,246,251,47,55,104,195,244,13,48,122,70,110,77,164,136,44,206,60,38,253,27,206,61,154,101,20,80,64,15,137,204,225,57,19,37,18,67,71,146,202,22,38,104,222,41,187,63,52,42,42,175,76,33,176,111,174,101,152,88,17,128,8,60,72,148,11,41,211,140,47,113,197,238,153,100,11,84,128,103,176,206,9,81,245,140,227,237,17,35,60,159,6,150,225,157,115,244,212,83,147,190,247,183,95,105,92,92,135,250,254,46,53,167,124,18,132,151,42,110,152,2,30,201,64,36,243,65,10,18,159,96,40,18,19,166,182,119,218,40,26,135,50,68,143,191,201,239,75,150,121,97,7,206,52,32,78,170,199,62,65,246,41,157,66,99,149,132,139,156,12,170,99,52,124,57,86,209,106,216,119,95,101,61,232,130,180,97,72,205,206,113,76,216,73,233,168,157,155,136,196,211,105,248,71,227,14,253,138,115,205,47,237,217,129,56,157,128,184,58,241,20,184,206,174,89,107,244,123,173,122,163,210,107,245,174,42,87,245,235,155,74,111,60,108,86,174,155,173,218,77,163,247,105,244,185,86,219,59,94,86,103,49,7,55,79,251,162,147,100,127,8,179,144,87,188,25,26,218,101,187,146,63,89,104,169,207,201,65,77,112,220,110,251,238,197,247,237,124,94,231,158,239,235,75,223,255,216,117,93,223,127,186,108,123,93,79,39,139,227,100,145,228,211,179,13,186,153,209,62,171,119,182,95,40,131,116,197,50,100,159,253,6,142,241,82,145,208,63,167,94,37,157,176,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("afeef6a5-c2d5-4f32-b19c-1a16404b2bfc"));
		}

		#endregion

	}

	#endregion

}

