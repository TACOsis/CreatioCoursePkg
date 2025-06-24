namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICalendarDataStoreSchema

	/// <exclude/>
	public class ICalendarDataStoreSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICalendarDataStoreSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICalendarDataStoreSchema(ICalendarDataStoreSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a242fa2e-8226-41ca-826d-a20b92e1d9d5");
			Name = "ICalendarDataStore";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,145,177,110,131,48,16,134,103,144,120,135,83,166,116,193,123,75,89,210,165,82,167,146,23,184,192,65,44,129,141,238,76,42,20,229,221,107,28,32,73,219,169,139,37,251,254,207,247,157,109,176,35,233,177,36,216,19,51,138,173,93,186,179,166,214,205,192,232,180,53,233,14,91,50,21,178,36,241,57,137,163,65,180,105,160,24,197,81,247,146,196,254,68,41,5,153,12,93,135,60,230,243,254,147,122,38,33,227,4,16,202,249,6,168,208,33,136,179,76,233,194,169,59,176,31,14,173,46,65,27,71,92,79,74,239,75,239,55,15,22,19,151,237,115,248,58,18,123,93,120,190,213,179,187,100,184,234,28,69,126,253,165,22,14,62,44,86,114,147,210,166,182,220,93,103,93,25,245,19,202,122,100,236,192,248,231,122,221,44,236,38,223,173,163,249,252,152,102,42,196,2,117,178,186,10,189,182,76,181,215,93,160,167,235,171,253,237,86,224,137,160,60,162,105,72,192,214,43,244,127,179,7,167,144,103,114,3,27,201,139,161,44,73,66,27,219,211,252,219,153,90,202,83,254,96,109,27,156,182,143,254,209,37,137,47,223,104,92,39,52,59,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a242fa2e-8226-41ca-826d-a20b92e1d9d5"));
		}

		#endregion

	}

	#endregion

}

