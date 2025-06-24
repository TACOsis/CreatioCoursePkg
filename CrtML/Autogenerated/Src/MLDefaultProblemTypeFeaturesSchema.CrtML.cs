namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLDefaultProblemTypeFeaturesSchema

	/// <exclude/>
	public class MLDefaultProblemTypeFeaturesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLDefaultProblemTypeFeaturesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLDefaultProblemTypeFeaturesSchema(MLDefaultProblemTypeFeaturesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1d30cac6-8bd4-4ed6-a823-a8838e7983e0");
			Name = "MLDefaultProblemTypeFeatures";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b54cb82a-9c72-40e4-855f-14a0ef44684e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,208,177,106,195,48,16,6,224,57,6,191,195,141,206,98,239,77,219,161,41,161,5,155,118,200,86,58,156,157,147,17,72,58,35,233,2,193,228,221,171,216,78,73,105,64,139,196,127,31,247,203,161,165,48,96,71,176,39,239,49,176,138,229,150,157,210,189,120,140,154,93,217,212,121,54,230,217,74,130,118,253,159,148,167,114,135,93,100,175,41,108,242,44,101,170,170,130,199,32,214,162,63,61,47,247,87,82,40,38,130,34,140,226,9,142,104,132,2,40,246,128,198,192,224,185,53,100,33,158,6,10,229,213,168,110,144,175,69,120,209,238,144,86,40,46,73,86,197,123,83,127,206,179,251,244,176,155,245,176,94,127,167,145,65,90,163,59,232,12,134,0,77,189,0,119,226,240,0,247,157,132,140,83,165,127,157,166,135,55,12,192,18,7,137,80,68,244,61,197,53,116,108,196,186,169,152,229,3,25,136,30,181,75,27,151,191,204,109,173,235,146,71,237,163,160,129,150,217,92,220,143,137,221,206,216,8,137,222,192,25,158,146,38,148,126,121,117,206,179,116,126,0,53,72,144,224,184,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1d30cac6-8bd4-4ed6-a823-a8838e7983e0"));
		}

		#endregion

	}

	#endregion

}

