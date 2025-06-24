namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IContentStoreSchema

	/// <exclude/>
	public class IContentStoreSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IContentStoreSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IContentStoreSchema(IContentStoreSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e3c7a9a4-e4fe-4de6-9313-1b0c8d8e8ead");
			Name = "IContentStore";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("16e592d3-2033-426b-b620-6aa2b1f8eec0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,146,193,106,194,64,16,134,207,10,190,195,96,47,45,148,228,174,86,40,109,41,66,165,162,237,3,172,201,36,46,77,118,195,236,44,69,196,119,239,36,113,173,138,22,111,189,44,204,236,63,255,124,179,59,70,149,232,42,149,32,124,32,145,114,54,227,232,201,154,76,231,158,20,107,107,122,221,77,175,219,241,78,155,28,22,107,199,88,14,247,241,147,37,60,142,162,23,195,154,53,58,73,203,197,13,97,46,30,48,49,140,148,73,151,1,76,196,157,209,240,130,69,222,136,226,56,134,145,243,101,169,104,61,222,197,115,172,8,157,200,28,184,90,8,153,37,40,125,193,186,80,38,247,42,71,72,90,159,40,56,196,7,22,149,95,22,58,1,29,218,158,118,237,108,154,206,123,190,25,217,10,169,230,30,192,172,169,109,239,79,209,154,196,51,138,107,169,13,58,248,94,33,175,144,128,45,176,250,194,186,161,5,149,36,214,27,6,210,249,74,248,37,227,176,192,132,33,85,172,162,189,237,33,111,103,105,109,1,159,14,31,83,49,158,183,133,27,200,145,135,82,44,199,118,199,139,38,109,145,143,249,167,130,97,211,107,224,231,200,158,140,11,175,7,88,255,215,250,2,85,147,169,20,169,18,140,236,201,67,191,85,79,210,254,248,93,166,211,70,21,59,131,189,159,78,235,68,166,145,162,81,220,148,158,119,10,223,88,123,189,133,47,253,171,152,90,240,241,244,220,18,132,49,70,113,144,213,117,47,45,218,43,242,237,171,215,41,4,250,123,104,194,95,132,187,225,21,47,150,98,166,164,247,191,188,92,152,234,249,60,195,165,177,119,242,227,233,195,176,39,187,212,110,216,113,114,251,3,10,49,134,91,30,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e3c7a9a4-e4fe-4de6-9313-1b0c8d8e8ead"));
		}

		#endregion

	}

	#endregion

}

