namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMacrosWorkerPropertiesConverterSchema

	/// <exclude/>
	public class IMacrosWorkerPropertiesConverterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMacrosWorkerPropertiesConverterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMacrosWorkerPropertiesConverterSchema(IMacrosWorkerPropertiesConverterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9fea00b7-db2d-4922-a2b4-e3c0ba2cab34");
			Name = "IMacrosWorkerPropertiesConverter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,144,79,11,130,64,16,197,207,10,126,135,193,83,65,184,31,32,243,226,201,67,20,33,116,222,100,148,165,246,79,179,187,129,132,223,61,45,149,136,136,142,51,188,247,123,111,70,113,137,214,240,10,161,68,34,110,117,237,146,92,171,90,52,158,184,19,90,69,225,61,10,3,198,24,164,214,75,201,169,205,198,185,80,14,169,30,172,181,38,168,180,186,33,57,161,26,144,188,34,109,193,144,54,195,6,109,50,17,216,7,34,117,173,65,195,137,75,80,125,145,77,92,30,240,234,209,186,56,43,148,241,238,11,42,101,179,231,23,197,250,75,15,217,121,247,23,197,248,211,69,84,32,230,139,138,237,211,114,212,116,70,218,207,190,252,117,36,82,58,21,93,193,24,54,96,134,79,5,227,12,163,118,49,41,223,226,151,235,94,216,69,97,247,0,54,161,121,160,126,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9fea00b7-db2d-4922-a2b4-e3c0ba2cab34"));
		}

		#endregion

	}

	#endregion

}

