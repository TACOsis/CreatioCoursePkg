namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SSPConstsSchema

	/// <exclude/>
	public class SSPConstsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SSPConstsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SSPConstsSchema(SSPConstsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("baddafff-9580-40c5-a726-cdd52e87d9ee");
			Name = "SSPConsts";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("39b1aa09-c30c-47e9-9379-18a9c48e3a0f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,146,77,111,194,32,24,199,207,54,233,119,32,158,182,3,190,180,180,181,49,59,208,150,46,158,52,211,125,0,214,210,134,164,133,6,80,231,204,190,251,240,101,115,238,224,197,37,112,0,254,252,248,229,225,89,107,46,106,176,220,105,195,218,169,235,184,142,160,45,211,29,45,24,88,49,165,168,150,149,25,164,82,84,188,94,43,106,184,20,174,179,119,157,94,183,126,107,120,1,180,177,123,5,40,26,170,53,88,46,23,54,169,141,182,231,251,3,171,215,27,14,193,11,171,185,54,167,187,128,181,148,55,192,190,213,53,212,48,192,75,38,12,175,56,83,131,67,250,26,170,24,45,165,104,118,224,121,205,203,43,12,57,80,86,103,200,172,4,79,64,176,237,49,246,208,199,65,150,17,148,134,48,202,252,24,162,200,27,65,140,237,114,66,72,148,248,33,193,121,130,251,143,211,31,185,150,139,18,116,86,127,43,85,121,151,95,33,55,76,237,22,103,212,45,71,132,210,20,79,18,4,131,56,243,32,34,196,135,9,9,16,204,80,148,147,60,76,253,200,75,46,142,51,177,225,230,222,242,93,32,255,34,118,82,195,165,173,222,233,87,164,2,149,157,236,221,48,37,104,3,164,170,169,224,31,231,142,185,237,118,133,201,165,154,255,186,59,23,11,169,12,109,108,135,30,99,175,130,155,63,210,97,30,227,60,28,121,208,199,158,149,14,130,20,38,163,32,132,94,154,143,145,135,198,121,140,252,111,233,79,215,177,227,11,45,218,167,82,245,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("baddafff-9580-40c5-a726-cdd52e87d9ee"));
		}

		#endregion

	}

	#endregion

}

