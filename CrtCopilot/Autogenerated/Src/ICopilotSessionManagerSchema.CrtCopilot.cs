namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotSessionManagerSchema

	/// <exclude/>
	public class ICopilotSessionManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotSessionManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotSessionManagerSchema(ICopilotSessionManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e947f22a-dded-4d56-a11b-5ff87b914929");
			Name = "ICopilotSessionManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,147,209,78,2,49,16,69,159,33,225,31,38,60,97,98,118,63,64,92,131,68,201,62,24,77,136,31,80,182,3,54,105,187,107,167,197,108,12,255,110,91,86,194,46,8,68,125,236,100,238,61,183,51,173,102,10,169,98,5,194,212,32,179,162,76,166,101,37,100,105,7,253,207,65,191,231,72,232,21,204,107,178,168,110,58,103,223,41,37,22,94,163,41,153,161,70,35,10,223,227,187,210,52,133,49,57,165,152,169,179,230,156,107,139,102,25,64,203,210,128,98,154,173,130,85,67,3,66,162,104,244,45,79,247,244,149,91,72,81,128,216,89,228,141,108,190,85,61,5,55,52,190,51,100,62,192,199,194,132,115,2,6,26,63,160,104,51,147,157,102,159,217,107,35,130,126,212,41,21,173,227,213,246,238,199,233,175,21,103,22,233,66,116,172,84,204,48,5,218,239,231,118,216,38,13,179,206,212,192,150,224,34,33,25,167,81,119,220,198,224,187,67,178,57,31,102,207,85,216,27,147,126,1,170,146,104,227,21,95,114,104,90,64,112,212,86,44,5,154,150,229,186,20,188,185,204,233,105,92,195,204,9,126,7,59,228,201,241,60,10,205,15,134,3,139,122,63,198,69,91,10,70,247,117,206,71,129,222,137,116,38,195,12,237,191,68,240,62,127,73,192,252,135,90,99,55,8,197,95,99,223,16,28,253,24,36,127,208,78,161,97,11,137,227,118,168,44,120,79,162,115,83,161,109,190,224,118,38,213,84,150,116,241,203,141,239,35,42,26,206,47,94,73,111,19,210,108,224,11,162,68,1,175,155,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e947f22a-dded-4d56-a11b-5ff87b914929"));
		}

		#endregion

	}

	#endregion

}

