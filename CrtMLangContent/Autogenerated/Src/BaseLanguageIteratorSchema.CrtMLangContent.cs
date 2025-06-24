namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseLanguageIteratorSchema

	/// <exclude/>
	public class BaseLanguageIteratorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseLanguageIteratorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseLanguageIteratorSchema(BaseLanguageIteratorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("88e0be6b-543f-42a7-9c74-8a6542583cb1");
			Name = "BaseLanguageIterator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2659875a-4670-491c-9c1f-f4641a7bae64");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,77,143,155,48,16,61,103,165,253,15,35,246,146,94,224,190,77,34,109,163,42,66,106,165,85,63,78,85,15,142,25,88,75,96,208,216,110,69,171,253,239,29,59,64,13,201,70,185,225,225,249,205,155,55,15,180,104,208,116,66,34,124,67,34,97,218,210,166,251,86,151,170,114,36,172,106,245,253,221,223,251,187,149,51,74,87,240,181,55,22,155,247,139,51,227,235,26,165,7,155,244,128,26,73,201,255,152,152,150,144,235,252,230,129,176,98,52,236,107,97,204,35,124,16,6,63,9,93,57,81,97,110,145,251,182,20,112,89,150,193,198,184,166,17,212,239,134,179,7,115,17,17,36,97,185,77,242,229,205,36,219,129,106,186,26,27,212,54,140,144,142,84,89,196,213,185,99,173,36,136,163,177,36,164,5,233,181,92,148,2,143,112,214,132,9,188,45,211,36,207,212,118,72,86,33,143,243,28,152,195,0,103,19,132,194,119,131,4,178,213,250,100,90,58,1,99,125,163,64,15,222,79,216,229,49,136,88,85,104,189,225,171,215,43,77,159,120,13,61,180,37,212,195,40,64,174,70,115,189,249,52,247,23,198,254,248,9,241,209,68,205,193,204,21,60,160,46,78,206,12,231,113,225,28,17,75,78,178,131,222,40,106,45,207,129,197,21,217,185,86,86,137,90,253,225,126,26,127,131,98,2,161,57,174,60,73,148,130,75,123,227,32,188,49,93,168,116,130,68,3,154,243,191,77,220,204,213,100,183,220,208,38,11,232,147,53,163,234,139,97,89,47,22,52,103,126,55,120,182,0,109,23,176,91,172,252,140,246,165,45,110,137,219,1,173,153,182,110,224,216,3,127,24,202,246,160,10,255,80,42,164,91,125,34,148,45,21,121,145,236,62,158,81,196,30,133,139,132,214,145,54,12,117,205,240,37,69,241,51,124,97,68,196,137,27,208,199,26,55,7,167,138,157,151,63,154,108,214,190,4,163,138,209,205,146,127,44,66,190,192,250,151,160,144,106,78,201,60,170,35,114,213,43,172,61,129,239,27,160,105,68,159,23,235,137,58,172,192,239,224,173,69,156,170,243,226,235,63,103,110,197,179,78,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("88e0be6b-543f-42a7-9c74-8a6542583cb1"));
		}

		#endregion

	}

	#endregion

}

