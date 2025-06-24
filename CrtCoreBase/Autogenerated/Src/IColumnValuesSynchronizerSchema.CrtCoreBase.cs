namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IColumnValuesSynchronizerSchema

	/// <exclude/>
	public class IColumnValuesSynchronizerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IColumnValuesSynchronizerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IColumnValuesSynchronizerSchema(IColumnValuesSynchronizerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("27011a19-7509-4ec0-bb21-cf388cf23492");
			Name = "IColumnValuesSynchronizer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("dd282faf-27c2-4fbe-9d4d-aa5a0b526cd3");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,80,189,106,195,64,12,158,29,200,59,8,178,180,16,252,0,77,201,210,63,60,116,74,233,126,57,203,174,224,172,51,210,93,193,13,121,247,158,125,77,108,58,116,236,40,233,251,21,155,14,181,55,22,225,13,69,140,250,38,148,15,158,27,106,163,152,64,158,203,39,14,20,134,195,192,246,67,60,211,215,180,93,175,78,235,85,17,149,184,133,195,160,1,187,196,114,14,237,120,212,242,5,25,133,236,238,138,89,138,11,102,77,66,77,128,4,217,8,182,137,6,21,7,148,38,101,185,131,42,169,197,142,223,141,139,168,179,55,202,68,232,227,209,145,5,186,224,255,130,23,167,137,82,124,122,170,97,113,186,68,184,201,253,64,125,20,139,91,248,25,107,212,64,60,117,221,142,244,162,154,251,221,255,122,70,54,127,53,125,159,170,238,193,46,71,189,221,45,252,159,201,185,199,89,57,123,253,83,130,115,254,53,114,157,223,61,142,231,111,79,141,79,61,255,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("27011a19-7509-4ec0-bb21-cf388cf23492"));
		}

		#endregion

	}

	#endregion

}

