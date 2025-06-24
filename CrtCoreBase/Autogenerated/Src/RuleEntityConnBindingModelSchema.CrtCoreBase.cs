namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: RuleEntityConnBindingModelSchema

	/// <exclude/>
	public class RuleEntityConnBindingModelSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public RuleEntityConnBindingModelSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public RuleEntityConnBindingModelSchema(RuleEntityConnBindingModelSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("97585371-05d4-46c8-a8c6-2e53c1842cc8");
			Name = "RuleEntityConnBindingModel";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e0bd8020-de17-4815-83cd-c2dac7bbc324");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,84,91,78,195,48,16,252,110,165,222,97,5,191,149,115,0,10,82,41,15,245,3,9,81,56,128,107,111,90,11,199,174,252,0,42,196,221,217,196,73,149,138,52,168,60,164,124,248,177,158,153,221,217,141,225,5,250,13,23,8,143,232,28,247,54,15,108,102,77,174,86,209,241,160,172,97,211,24,236,117,193,149,126,64,93,157,140,134,239,163,225,32,122,101,86,176,216,250,128,197,25,237,233,59,117,184,162,123,152,105,238,61,60,68,141,215,38,168,176,37,60,115,169,140,164,7,119,86,162,78,209,89,150,193,196,199,162,224,110,123,49,179,58,22,198,195,50,133,249,49,68,143,18,130,133,92,105,13,92,74,85,82,115,13,90,249,0,54,7,87,171,241,108,146,53,40,13,170,67,218,62,251,102,127,99,29,224,27,47,54,26,199,160,232,41,41,75,184,19,143,8,194,97,126,126,50,21,65,189,144,88,54,21,194,70,19,78,178,11,16,149,42,224,70,238,71,86,1,236,222,169,146,149,178,11,92,84,241,202,87,176,40,199,53,115,88,163,57,204,212,122,89,51,189,170,176,134,125,92,120,225,58,34,171,1,231,134,48,137,166,78,167,11,182,132,123,154,75,194,34,218,229,94,200,97,75,216,35,119,43,12,233,114,33,214,84,64,194,32,168,241,206,169,94,253,127,65,152,122,160,135,118,231,203,211,252,234,72,182,133,141,78,224,215,244,74,111,15,82,117,56,252,23,204,237,60,89,71,203,110,226,82,43,1,226,251,41,42,231,112,127,142,154,131,84,221,182,196,182,130,218,49,182,123,222,158,160,134,255,54,42,9,157,109,1,21,239,128,46,206,170,133,175,23,31,163,225,15,5,165,146,252,70,214,174,168,61,226,6,131,131,242,146,75,191,175,87,103,159,253,135,164,99,43,214,211,134,125,242,146,165,167,104,100,250,183,143,134,31,159,215,45,25,144,50,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("97585371-05d4-46c8-a8c6-2e53c1842cc8"));
		}

		#endregion

	}

	#endregion

}

