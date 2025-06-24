namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLPredictionDataLoaderSchema

	/// <exclude/>
	public class IMLPredictionDataLoaderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLPredictionDataLoaderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLPredictionDataLoaderSchema(IMLPredictionDataLoaderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7fe1526a-0fab-4bde-b93e-51192ba340d4");
			Name = "IMLPredictionDataLoader";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("145716f7-775c-41a4-ac90-f77e940d760b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,81,97,107,194,48,16,253,172,224,127,56,252,178,13,74,251,3,236,10,67,153,8,10,131,249,7,98,123,181,153,109,34,151,196,77,100,255,125,151,84,173,206,13,198,32,31,114,201,187,247,222,189,83,162,65,179,21,57,194,18,137,132,209,165,141,199,90,149,114,237,72,88,169,85,188,152,15,250,135,65,191,231,140,84,107,120,221,27,139,205,232,91,205,45,117,141,185,199,155,120,138,10,73,230,140,97,84,146,36,144,26,215,52,130,246,217,177,158,107,81,24,40,132,21,80,106,130,70,228,149,84,8,53,10,82,158,115,75,88,200,64,22,159,24,146,11,138,173,91,213,50,7,169,44,82,233,157,207,22,243,151,115,203,132,105,189,0,18,67,15,193,195,141,137,11,23,182,194,206,201,181,240,173,114,251,178,21,36,26,80,28,220,227,16,149,149,118,63,43,134,217,146,137,218,10,100,225,47,165,68,138,211,36,160,187,102,66,235,72,153,108,210,234,48,113,4,239,21,18,6,39,27,228,238,214,20,183,215,69,80,137,66,189,19,181,195,171,207,59,211,62,178,200,137,213,203,116,204,169,177,196,121,70,160,87,111,188,156,44,140,236,243,121,214,212,5,118,63,117,178,128,211,32,15,163,255,70,6,171,61,228,149,83,27,19,1,126,96,238,172,223,229,90,238,80,65,37,84,81,35,1,163,144,183,253,215,116,181,26,123,194,176,78,142,248,169,213,177,149,176,71,5,52,39,202,214,81,208,135,58,224,161,36,221,156,205,174,132,193,11,217,110,43,59,205,211,255,28,76,171,151,206,230,210,216,244,247,88,179,12,174,140,250,8,123,159,131,62,159,47,220,148,32,151,94,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7fe1526a-0fab-4bde-b93e-51192ba340d4"));
		}

		#endregion

	}

	#endregion

}

