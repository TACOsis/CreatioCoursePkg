namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLModelBuilderSchema

	/// <exclude/>
	public class IMLModelBuilderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLModelBuilderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLModelBuilderSchema(IMLModelBuilderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("98854813-1873-4ab4-b4e2-030112343a5f");
			Name = "IMLModelBuilder";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("55b53857-a033-4921-8f47-13b5471dd33e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,148,219,106,219,64,16,134,175,99,240,59,12,190,105,10,193,122,128,186,130,196,61,16,176,104,75,210,7,152,72,35,123,65,187,171,204,206,166,13,165,239,222,61,200,142,149,56,173,123,128,130,47,180,187,51,255,252,255,103,173,192,160,38,215,99,77,112,77,204,232,108,43,243,165,53,173,90,123,70,81,214,204,171,213,116,242,109,58,57,241,78,153,245,168,138,233,213,51,251,243,55,23,225,40,28,22,69,1,11,231,181,70,190,47,135,245,165,238,59,210,100,196,129,108,8,110,104,131,119,202,50,216,54,173,171,85,101,27,234,182,205,197,94,119,239,111,58,85,131,50,66,220,70,207,151,67,241,133,87,93,67,28,74,162,211,39,83,211,198,202,98,147,39,50,221,122,197,212,64,109,59,175,77,216,180,32,140,202,128,142,98,243,157,68,241,88,99,209,35,163,134,8,237,245,44,21,103,86,179,178,90,229,230,160,185,15,111,81,164,142,195,2,222,17,135,126,67,117,172,157,149,159,71,235,16,211,9,154,154,70,34,119,86,53,41,202,144,124,153,35,156,62,234,29,75,159,193,174,58,154,131,61,231,47,243,255,116,24,217,219,175,61,154,1,154,101,181,86,6,59,184,245,196,247,240,69,201,6,208,128,245,210,123,25,72,30,75,46,73,204,202,235,32,155,30,127,142,233,255,113,62,111,154,79,209,223,135,20,50,163,254,21,233,43,234,194,99,206,245,167,220,43,226,53,57,104,149,64,114,68,225,125,119,71,191,150,36,216,160,96,230,187,93,253,91,196,137,78,114,249,78,201,199,184,237,78,83,208,171,122,67,26,171,97,232,110,250,95,130,168,189,19,171,7,63,233,182,166,91,236,124,39,241,219,147,212,94,184,135,172,191,115,129,199,142,103,229,123,50,20,18,135,175,195,113,232,178,183,135,254,101,246,250,124,51,147,120,54,174,76,217,70,83,182,39,177,212,9,199,104,169,104,57,26,113,24,244,211,189,51,24,52,198,14,35,239,147,239,211,73,248,253,0,186,29,124,133,253,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("98854813-1873-4ab4-b4e2-030112343a5f"));
		}

		#endregion

	}

	#endregion

}

