namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: LeadSourceConstsSchema

	/// <exclude/>
	public class LeadSourceConstsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public LeadSourceConstsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public LeadSourceConstsSchema(LeadSourceConstsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1f02ccde-e202-4fc1-ac0f-1d4417da8cfe");
			Name = "LeadSourceConsts";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c695e3ed-eb31-41e8-baf6-8b1758bb9790");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,146,79,107,194,48,24,135,207,10,126,135,160,151,237,16,251,47,141,118,110,131,166,173,50,24,236,224,96,236,152,181,177,43,182,137,36,233,54,17,191,251,210,86,65,220,240,98,8,9,73,222,247,247,60,135,112,90,49,181,161,41,3,175,76,74,170,196,74,143,35,193,87,69,94,75,170,11,193,7,253,221,160,223,171,85,193,115,176,220,42,205,170,153,57,155,57,146,44,55,239,32,42,169,82,119,224,153,209,108,41,106,153,50,211,174,180,26,244,77,141,101,89,224,94,213,85,69,229,246,241,112,54,207,154,22,92,157,116,128,82,136,117,189,1,105,211,73,185,6,95,180,172,153,26,31,19,172,147,136,77,253,81,22,41,48,117,218,108,105,3,255,135,221,219,181,252,63,2,237,197,66,136,188,100,32,204,222,132,204,90,202,95,204,25,71,26,130,224,229,22,44,234,34,59,225,117,81,135,164,167,12,60,0,206,190,219,162,155,33,118,38,147,200,241,9,244,145,23,64,20,97,27,146,16,97,136,98,55,33,174,237,184,19,59,25,222,206,46,136,190,83,158,177,31,16,23,146,165,250,42,207,117,23,213,37,157,121,122,94,48,39,113,60,133,110,20,218,16,133,200,134,193,52,244,161,67,16,9,112,104,59,24,59,151,61,95,244,39,147,64,21,154,93,37,217,198,156,201,205,253,100,226,17,23,65,18,227,41,68,62,9,97,144,68,24,198,73,130,236,208,243,35,236,248,71,185,125,179,2,51,70,140,103,221,239,108,110,246,191,125,212,85,189,228,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1f02ccde-e202-4fc1-ac0f-1d4417da8cfe"));
		}

		#endregion

	}

	#endregion

}

