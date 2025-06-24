namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalendarCountTermFactorySchema

	/// <exclude/>
	public class CalendarCountTermFactorySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalendarCountTermFactorySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalendarCountTermFactorySchema(CalendarCountTermFactorySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0a4f01d7-03db-4c5d-934f-5339cf3d53d8");
			Name = "CalendarCountTermFactory";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,84,59,111,219,48,16,158,21,32,255,225,224,46,206,34,237,137,99,160,85,95,139,129,2,117,208,249,76,157,100,162,34,41,144,71,187,66,224,255,94,234,69,59,78,90,59,139,4,146,223,75,39,222,105,84,228,26,20,4,107,178,22,157,41,57,205,141,46,101,229,45,178,52,58,205,177,38,93,160,117,183,55,207,183,55,137,119,82,87,240,179,117,76,234,33,174,79,201,150,210,175,40,216,88,73,238,136,136,50,107,169,232,73,75,134,199,203,150,233,4,14,58,65,233,131,165,42,156,67,94,163,115,112,31,53,115,227,53,7,49,53,248,182,61,56,203,50,88,56,175,20,218,118,57,174,39,2,136,142,1,28,40,80,14,156,116,162,100,39,156,198,111,106,41,64,244,126,255,118,75,158,123,199,152,111,69,188,53,69,151,240,71,47,48,156,158,7,234,55,190,17,131,192,90,248,186,255,116,80,36,182,168,165,83,176,105,161,146,59,210,192,161,6,224,67,17,210,168,146,157,203,44,26,180,168,64,135,191,249,56,227,177,104,179,229,58,82,23,89,143,56,18,44,177,183,218,45,243,183,204,3,124,58,239,8,99,25,118,210,178,199,26,62,161,163,88,132,238,11,226,98,254,250,47,79,97,238,160,187,61,73,226,246,146,197,22,230,231,251,137,8,170,175,111,73,186,146,218,51,221,15,152,100,72,53,92,128,177,252,105,8,176,24,80,49,199,114,126,247,240,95,213,95,198,254,14,183,242,58,241,23,224,235,61,190,27,111,47,73,119,152,119,167,190,70,248,4,122,189,254,103,108,47,233,6,200,187,243,94,33,123,68,190,161,94,80,137,190,230,73,99,23,250,55,12,14,99,87,228,28,86,20,6,201,236,73,227,166,38,96,3,194,18,50,1,134,22,183,54,140,54,163,139,110,252,28,27,62,133,216,21,32,93,120,187,134,132,44,37,21,233,108,52,76,120,107,205,30,52,237,225,163,173,188,34,205,95,254,8,106,186,38,153,159,90,143,9,15,221,243,48,206,128,80,131,97,12,244,235,97,247,229,230,225,47,88,105,239,117,117,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0a4f01d7-03db-4c5d-934f-5339cf3d53d8"));
		}

		#endregion

	}

	#endregion

}

