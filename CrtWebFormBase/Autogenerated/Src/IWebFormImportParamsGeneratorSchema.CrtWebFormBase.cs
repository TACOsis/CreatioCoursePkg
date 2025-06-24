namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IWebFormImportParamsGeneratorSchema

	/// <exclude/>
	public class IWebFormImportParamsGeneratorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IWebFormImportParamsGeneratorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IWebFormImportParamsGeneratorSchema(IWebFormImportParamsGeneratorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5288477e-ed09-40b3-890c-492633a42375");
			Name = "IWebFormImportParamsGenerator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9d05c8ee-17e3-41aa-adfe-7e36f0a4c27c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,146,77,107,132,48,16,134,207,10,254,135,129,222,245,190,187,244,210,210,197,67,65,218,101,123,142,58,218,128,73,100,18,45,165,244,191,55,137,186,90,251,129,123,16,103,38,239,60,206,235,68,50,129,186,101,5,194,9,137,152,86,149,137,239,148,172,120,221,17,51,92,201,248,136,18,109,136,229,11,230,15,138,196,51,82,207,11,140,194,143,40,140,194,224,134,176,182,50,72,165,65,170,44,104,7,233,168,76,69,171,200,100,140,152,208,35,69,145,111,74,146,4,14,186,19,130,209,251,237,152,103,164,122,94,162,6,62,145,160,82,4,220,67,160,117,20,180,7,26,234,1,229,102,155,80,201,130,213,118,121,195,139,5,229,223,113,96,30,247,9,117,215,152,84,86,202,82,172,185,32,112,207,228,207,142,215,34,25,142,122,7,153,255,132,119,242,195,138,47,28,209,104,176,112,237,222,230,21,161,196,138,89,56,244,172,233,16,4,147,172,70,138,47,253,201,26,112,240,194,75,122,218,128,152,59,210,251,65,122,118,149,199,65,8,191,213,188,201,160,70,179,7,31,217,113,247,46,248,220,110,172,158,110,7,188,97,238,22,38,220,128,188,116,255,246,58,127,27,73,11,155,235,155,121,158,228,240,247,201,108,121,237,216,47,27,101,57,236,219,231,67,245,123,209,214,190,0,82,208,55,148,52,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5288477e-ed09-40b3-890c-492633a42375"));
		}

		#endregion

	}

	#endregion

}

