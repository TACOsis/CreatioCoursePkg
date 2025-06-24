namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CacheUtilitiesSchema

	/// <exclude/>
	public class CacheUtilitiesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CacheUtilitiesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CacheUtilitiesSchema(CacheUtilitiesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e686424e-171b-4e43-9ed2-8c621f1495a0");
			Name = "CacheUtilities";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("66e9e705-64b4-4dda-925e-d1e05a389eb6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,148,77,79,227,48,16,134,207,169,196,127,176,114,2,9,69,156,183,226,128,82,182,92,224,176,45,203,97,133,208,36,29,90,107,221,56,26,143,129,85,213,255,190,118,146,74,117,107,250,161,92,162,100,102,222,103,222,153,56,169,96,137,166,134,18,197,20,137,192,232,119,206,114,93,189,203,185,37,96,169,171,139,193,234,98,144,88,35,171,121,80,66,56,140,196,95,176,200,30,152,235,236,174,48,76,80,122,130,113,133,174,180,182,133,146,165,48,236,176,165,40,21,24,35,114,40,23,248,204,82,73,150,104,92,209,170,41,77,106,146,31,192,184,41,118,40,223,38,183,68,88,113,110,21,91,194,39,231,92,120,111,73,50,71,238,238,146,15,32,97,13,146,155,161,194,166,189,184,21,151,207,65,228,202,59,116,143,140,95,110,146,22,154,77,208,24,151,251,147,134,181,233,235,176,5,19,186,166,213,14,123,163,246,154,172,243,149,121,99,173,104,237,175,235,110,164,96,252,110,162,23,77,127,155,237,55,139,24,147,182,245,254,72,93,231,86,146,253,212,180,4,190,76,35,210,183,213,205,58,189,142,172,233,42,180,243,141,153,17,50,72,101,26,222,169,46,182,53,61,219,223,181,135,229,172,246,219,154,158,237,127,97,173,137,207,107,191,173,233,59,125,5,234,159,123,54,45,179,181,113,43,210,88,60,29,30,199,228,11,216,80,78,221,229,190,180,231,76,99,146,179,223,18,63,207,178,17,136,122,26,184,159,73,14,78,181,91,232,110,236,192,50,239,151,174,106,138,203,90,185,127,209,214,23,234,41,123,169,3,156,71,61,179,10,71,192,16,66,98,241,31,126,226,83,222,111,64,138,132,143,128,198,74,23,160,90,7,33,43,158,57,128,234,94,203,142,165,253,232,81,55,19,4,42,23,49,55,187,153,3,168,17,152,69,161,129,102,83,40,66,84,60,211,160,220,17,90,255,7,19,139,91,13,10,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e686424e-171b-4e43-9ed2-8c621f1495a0"));
		}

		#endregion

	}

	#endregion

}

