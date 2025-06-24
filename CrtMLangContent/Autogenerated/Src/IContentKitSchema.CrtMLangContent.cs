namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IContentKitSchema

	/// <exclude/>
	public class IContentKitSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IContentKitSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IContentKitSchema(IContentKitSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("37dac048-4167-4f6c-9dc9-b9ea768da408");
			Name = "IContentKit";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("16e592d3-2033-426b-b620-6aa2b1f8eec0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,205,110,130,64,16,62,99,226,59,76,244,210,38,13,220,213,122,105,140,33,173,169,209,190,192,22,6,58,41,44,100,118,56,24,227,187,119,23,88,162,173,154,222,118,134,239,111,63,86,171,18,77,173,18,132,15,100,86,166,202,36,124,169,116,70,121,195,74,168,210,227,209,113,60,10,26,67,58,135,253,193,8,150,243,97,62,167,48,134,43,45,36,132,198,2,44,100,202,152,91,62,196,90,144,51,235,48,131,216,42,11,106,121,37,105,33,81,20,193,194,52,101,169,248,176,236,231,29,214,140,198,130,12,124,147,64,86,49,148,77,33,84,40,157,55,42,71,72,58,141,208,243,163,51,129,186,249,44,40,1,242,150,151,142,193,177,117,29,146,109,185,170,145,93,226,25,108,91,102,247,253,119,172,118,241,230,253,201,106,43,169,56,28,160,231,9,130,216,3,227,30,7,127,22,174,208,32,200,81,230,237,193,244,135,211,29,247,254,26,96,196,21,125,195,185,7,237,29,6,46,134,251,142,83,212,105,87,201,101,63,27,148,175,42,253,79,57,59,148,134,181,241,255,6,208,189,132,195,141,156,237,166,86,172,74,208,246,245,61,79,58,116,156,78,150,239,76,57,105,85,244,2,131,30,165,110,145,17,114,184,136,90,234,117,37,198,164,226,212,41,173,58,129,110,113,151,207,93,246,229,230,218,43,243,55,89,68,30,230,120,189,248,26,165,111,249,97,221,80,10,254,30,79,208,142,62,204,227,252,106,205,93,249,151,203,211,15,177,191,47,104,143,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("37dac048-4167-4f6c-9dc9-b9ea768da408"));
		}

		#endregion

	}

	#endregion

}

