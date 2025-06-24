namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLModelListenerSchema

	/// <exclude/>
	public class MLModelListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLModelListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLModelListenerSchema(MLModelListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c04a9621-1ecc-4eff-a2d5-eca6fc6ea020");
			Name = "MLModelListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,84,193,106,219,64,16,61,59,144,127,24,148,67,36,40,171,187,99,27,28,39,80,136,149,134,58,61,149,30,198,210,200,222,34,237,138,221,149,193,132,254,123,71,43,109,64,198,110,75,111,165,199,157,125,111,222,188,183,35,41,172,201,54,152,19,188,146,49,104,117,233,196,74,171,82,238,90,131,78,106,37,178,245,245,213,219,245,213,164,181,82,237,70,40,67,119,23,234,226,81,57,233,36,217,223,2,196,227,129,148,235,112,140,188,49,180,99,73,88,85,104,237,20,178,117,166,11,170,214,210,58,82,100,60,36,77,83,152,217,182,174,209,28,23,195,57,0,160,212,6,110,7,214,45,80,39,113,4,242,2,34,112,211,19,242,204,18,97,101,53,228,134,202,121,244,235,49,197,61,90,242,181,163,47,4,229,8,210,174,223,215,51,87,241,38,223,83,141,207,156,51,204,33,26,166,139,146,111,140,111,218,109,37,115,200,59,187,167,110,97,10,23,196,152,248,230,179,120,207,43,35,183,215,5,39,246,226,27,246,151,167,73,249,194,71,84,69,69,54,100,179,193,3,21,125,66,226,157,147,158,146,102,13,26,172,65,177,133,121,100,73,21,108,120,225,71,130,254,36,102,169,135,156,103,80,180,120,221,147,15,58,132,60,189,24,179,159,107,89,58,50,94,96,105,118,182,11,23,164,178,14,21,175,105,174,149,67,169,186,149,114,123,10,130,222,2,20,232,112,52,203,16,176,62,176,156,44,8,14,90,22,240,73,121,219,177,222,126,167,60,88,248,0,231,164,129,18,232,118,127,50,217,242,91,136,192,12,20,74,238,252,229,23,75,134,63,26,197,237,186,231,104,199,199,57,196,113,223,60,233,137,137,24,19,250,38,99,150,88,54,13,143,238,63,193,21,242,10,137,207,84,179,143,56,91,51,200,242,42,190,24,42,100,238,112,91,81,136,111,147,27,217,184,39,58,246,115,253,248,243,69,120,160,138,220,255,184,10,131,241,191,90,134,192,253,183,214,225,134,69,251,255,134,63,247,213,113,145,107,63,1,5,125,30,32,24,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c04a9621-1ecc-4eff-a2d5-eca6fc6ea020"));
		}

		#endregion

	}

	#endregion

}

