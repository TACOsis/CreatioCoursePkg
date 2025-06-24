namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotRequestLoggerSchema

	/// <exclude/>
	public class CopilotRequestLoggerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotRequestLoggerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotRequestLoggerSchema(CopilotRequestLoggerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2bdc15d3-8dbc-493f-b7c4-24b2d92a7d35");
			Name = "CopilotRequestLogger";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,147,207,106,35,49,12,198,207,41,244,29,4,123,73,46,121,128,132,165,208,100,211,6,186,16,54,185,45,165,56,51,202,212,212,99,77,101,57,16,66,223,125,229,153,52,253,131,39,123,49,35,205,79,31,159,37,217,155,26,67,99,10,132,25,163,17,75,227,25,53,214,145,92,95,29,175,175,6,49,88,95,193,250,16,4,235,233,57,222,32,179,9,180,19,133,25,199,11,83,8,177,197,160,132,50,63,24,43,75,30,102,206,132,48,129,147,222,31,124,141,24,100,233,119,212,82,77,220,58,91,64,145,160,12,3,138,28,91,240,172,183,176,232,74,21,92,197,70,43,187,127,39,21,71,234,106,30,57,93,192,195,17,42,148,41,132,116,188,125,162,230,70,112,99,107,132,181,24,150,20,245,162,91,34,7,203,176,48,214,97,217,75,5,225,212,142,95,204,196,189,144,245,2,27,18,227,54,244,130,62,92,228,86,76,117,35,255,7,111,180,99,117,227,48,93,55,79,183,141,67,95,118,189,107,227,46,251,45,121,113,88,15,84,85,200,45,247,119,142,59,19,157,220,90,95,234,157,135,114,104,144,118,195,101,174,96,52,122,212,10,181,137,236,141,203,142,184,3,97,2,89,129,11,179,103,187,215,185,157,134,223,5,160,139,91,146,119,135,179,216,189,13,186,144,135,181,30,166,66,120,42,114,233,105,182,73,31,13,33,175,227,141,105,179,219,157,219,126,223,185,156,241,97,143,131,172,129,17,164,23,54,24,228,237,193,207,124,85,122,133,131,252,128,207,222,127,163,60,83,153,183,125,23,109,9,107,179,199,175,254,135,153,39,200,31,223,239,94,25,37,178,239,233,232,56,35,251,89,227,130,245,108,86,147,255,0,217,84,142,17,159,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2bdc15d3-8dbc-493f-b7c4-24b2d92a7d35"));
		}

		#endregion

	}

	#endregion

}

