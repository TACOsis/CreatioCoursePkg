namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLFeaturesSchema

	/// <exclude/>
	public class MLFeaturesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLFeaturesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLFeaturesSchema(MLFeaturesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("67fb55d9-3f15-424b-9ada-e5b443f524e0");
			Name = "MLFeatures";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("55b53857-a033-4921-8f47-13b5471dd33e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,85,79,75,110,194,48,16,93,59,82,238,48,162,155,178,201,1,64,93,84,180,72,72,68,176,160,7,24,156,137,177,148,218,209,140,205,6,113,247,78,226,176,232,102,44,189,159,223,11,248,75,50,162,37,184,16,51,74,236,83,179,139,161,247,46,51,38,31,67,211,30,235,234,81,87,38,139,15,14,118,76,19,220,236,245,201,76,151,232,220,160,248,182,174,84,50,230,235,224,45,216,1,69,160,61,46,26,81,102,10,248,79,255,8,157,62,115,186,193,6,22,93,75,9,59,76,56,73,31,115,158,49,111,76,78,75,128,86,146,196,217,166,200,178,129,243,28,180,72,150,212,87,222,251,26,230,207,140,57,200,119,192,235,64,29,124,128,122,105,91,224,47,18,203,126,156,182,41,177,82,31,148,34,168,135,66,242,118,222,13,125,100,221,0,66,124,247,150,86,197,253,124,245,162,208,149,106,5,40,184,222,39,212,213,31,30,206,56,57,84,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("67fb55d9-3f15-424b-9ada-e5b443f524e0"));
		}

		#endregion

	}

	#endregion

}

