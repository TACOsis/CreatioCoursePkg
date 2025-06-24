namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: HideDashboardAppTemplateInstallScriptSchema

	/// <exclude/>
	public class HideDashboardAppTemplateInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public HideDashboardAppTemplateInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public HideDashboardAppTemplateInstallScriptSchema(HideDashboardAppTemplateInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("65f63cf3-5d44-4c4a-bcb9-3d16b993ed0c");
			Name = "HideDashboardAppTemplateInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("72a64a8f-ba39-4e49-b2ed-1a1836824f5e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,77,107,227,48,16,61,167,208,255,48,104,47,41,20,251,222,38,129,109,210,143,28,186,20,210,238,158,21,121,28,107,177,37,33,201,233,154,144,255,190,99,201,49,113,112,161,71,205,188,121,111,62,158,20,175,208,25,46,16,222,209,90,238,116,238,147,165,86,185,220,213,150,123,169,213,245,213,225,250,106,82,59,169,118,176,105,156,199,138,242,101,137,162,77,186,228,25,21,90,41,238,123,204,57,141,197,175,226,201,163,242,210,75,116,4,32,200,15,139,59,162,131,101,201,157,187,131,23,153,225,138,187,98,171,185,205,126,26,243,142,149,41,185,199,181,114,158,151,229,70,88,105,124,40,52,245,182,148,2,68,91,247,189,50,184,131,245,32,240,248,15,69,237,181,37,182,67,224,236,187,121,69,95,232,140,250,121,179,114,79,60,49,107,226,3,136,194,147,244,94,203,12,62,76,70,33,90,207,153,234,244,195,161,165,85,170,184,42,168,7,207,27,104,215,58,153,132,61,52,27,81,96,197,95,185,226,59,180,128,35,177,249,69,125,50,82,120,127,198,216,145,80,221,8,27,93,205,71,216,67,243,139,12,48,101,195,214,217,237,101,183,145,122,207,79,205,81,42,147,97,172,57,40,252,132,149,12,56,110,155,153,243,150,238,125,11,122,251,151,138,23,221,156,147,3,176,165,206,90,106,70,74,127,164,47,94,116,133,111,212,14,131,99,128,28,163,136,204,97,26,69,146,39,244,162,120,178,186,90,61,76,47,116,111,78,11,156,116,216,13,122,242,101,93,169,223,188,172,105,162,181,35,59,100,168,72,208,219,26,187,9,122,52,223,227,180,139,5,245,99,119,122,84,89,188,254,87,86,8,134,139,201,52,77,97,230,234,170,162,177,23,167,64,180,19,217,35,186,45,215,22,10,242,37,248,2,129,27,3,190,219,49,176,222,170,44,160,132,69,50,148,218,37,61,117,122,201,61,51,220,242,10,20,157,108,206,134,23,98,139,96,106,69,31,89,231,65,108,230,16,91,210,124,206,134,78,100,233,2,124,99,48,153,165,129,47,208,119,31,41,184,185,27,225,123,6,30,181,254,152,123,198,55,28,163,195,224,241,63,5,89,26,191,149,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("65f63cf3-5d44-4c4a-bcb9-3d16b993ed0c"));
		}

		#endregion

	}

	#endregion

}

