namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TermCalculationLogStoreInitializerSchema

	/// <exclude/>
	public class TermCalculationLogStoreInitializerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TermCalculationLogStoreInitializerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TermCalculationLogStoreInitializerSchema(TermCalculationLogStoreInitializerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("20a2cde7-74b1-4ec7-b8c7-7539f979eab9");
			Name = "TermCalculationLogStoreInitializer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("28322dfd-15f8-434e-b343-12da0b1a75f6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,84,203,110,219,48,16,60,43,64,254,129,85,128,64,6,2,233,222,216,238,193,104,11,3,238,3,73,218,158,105,105,37,19,160,72,131,164,92,180,65,254,189,75,82,178,94,150,17,244,237,139,204,229,114,118,118,103,72,65,75,208,123,154,2,121,0,165,168,150,185,137,87,82,228,172,168,20,53,76,138,203,139,199,203,139,160,210,76,20,189,20,5,183,19,241,248,222,248,93,220,79,146,132,204,117,85,150,84,125,91,214,235,181,96,134,81,206,190,131,34,50,39,6,84,73,82,202,211,138,187,130,132,203,66,19,109,49,226,6,33,233,64,236,171,45,103,41,38,96,118,74,82,78,181,182,4,202,85,11,177,145,133,227,208,169,132,7,31,29,163,224,74,65,97,203,188,3,179,147,153,126,73,62,42,118,160,6,252,238,222,47,26,248,9,224,141,164,25,178,127,11,198,255,139,62,105,80,56,54,1,169,107,161,74,103,196,142,45,8,20,152,74,9,34,224,235,121,172,8,143,216,129,6,79,39,121,108,165,228,100,173,241,76,129,3,127,45,232,150,67,54,170,218,91,14,24,244,55,227,123,208,26,191,43,154,238,32,254,194,204,110,35,81,3,187,68,252,104,230,78,226,47,198,22,63,83,94,193,220,50,88,70,19,61,196,253,88,205,207,129,191,71,131,221,52,112,65,78,185,134,25,169,215,215,215,67,90,88,110,173,223,0,69,202,208,116,25,142,139,218,33,132,189,121,93,129,200,188,176,83,42,59,219,248,205,161,43,93,0,75,235,129,247,198,230,243,145,61,85,180,36,2,59,91,132,253,6,194,165,213,132,164,109,71,243,196,101,183,135,189,30,122,185,105,75,205,147,38,232,164,239,25,124,98,226,150,174,251,243,60,19,176,156,68,35,251,12,82,155,220,224,188,233,185,255,44,58,238,31,0,221,122,152,218,120,62,255,213,241,85,8,156,102,157,171,81,113,222,85,242,164,56,237,77,254,43,26,117,15,187,74,97,95,174,54,189,47,214,65,178,172,195,181,153,220,121,141,110,38,53,118,229,26,89,126,143,42,214,8,117,238,139,133,155,253,81,118,31,246,58,33,144,110,245,10,126,234,241,192,52,243,65,221,65,41,15,224,222,144,95,125,61,140,170,96,214,113,208,57,195,220,129,254,243,247,249,132,248,174,238,243,116,255,87,194,30,47,220,255,162,171,35,59,214,117,240,164,99,244,233,7,171,68,103,127,174,8,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("20a2cde7-74b1-4ec7-b8c7-7539f979eab9"));
		}

		#endregion

	}

	#endregion

}

