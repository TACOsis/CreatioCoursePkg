namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLUploadingDataSchema

	/// <exclude/>
	public class MLUploadingDataSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLUploadingDataSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLUploadingDataSchema(MLUploadingDataSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e48c020b-2ed8-411b-a4dc-582b6deb0e7a");
			Name = "MLUploadingData";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("145716f7-775c-41a4-ac90-f77e940d760b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,81,77,107,131,64,20,60,43,248,31,30,201,165,5,201,169,244,80,41,161,164,31,20,146,16,104,251,3,86,125,154,165,186,43,251,113,40,226,127,239,91,93,26,155,40,237,69,214,121,179,51,243,102,5,171,81,55,44,67,120,71,165,152,150,133,89,109,164,40,120,105,21,51,92,138,213,110,27,133,109,20,6,86,115,81,194,219,151,54,88,39,81,72,72,99,211,138,103,144,85,76,107,216,109,63,154,74,178,156,72,143,204,48,26,183,61,41,88,42,44,73,7,72,85,27,101,51,35,149,190,131,67,127,119,96,120,157,51,133,43,98,59,199,156,206,215,224,18,4,129,195,225,190,135,18,7,116,255,21,136,225,197,242,28,10,94,225,107,30,131,159,184,223,61,21,16,3,23,6,178,163,21,159,123,91,167,168,226,222,45,240,52,20,153,116,162,15,85,41,21,55,199,154,34,44,82,166,241,246,102,49,151,44,120,238,173,8,26,60,79,160,51,244,176,59,14,131,205,201,155,102,163,36,195,248,105,34,193,69,170,113,35,75,20,249,208,251,239,71,56,40,217,160,50,28,167,159,192,47,220,47,211,66,137,38,1,237,62,221,136,227,138,92,131,95,111,142,228,133,126,246,157,227,81,239,107,24,47,255,135,224,101,17,103,23,38,150,39,180,131,111,194,155,239,163,232,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e48c020b-2ed8-411b-a4dc-582b6deb0e7a"));
		}

		#endregion

	}

	#endregion

}

