namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotRequestLoggerSchema

	/// <exclude/>
	public class ICopilotRequestLoggerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotRequestLoggerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotRequestLoggerSchema(ICopilotRequestLoggerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("fc8c4b88-443d-4ef0-8d6c-416f9365c556");
			Name = "ICopilotRequestLogger";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,145,61,110,195,48,12,133,231,24,240,29,30,50,181,139,117,128,186,89,50,20,1,58,53,189,128,18,209,14,1,75,114,36,170,69,16,244,238,149,29,187,205,15,160,65,36,245,61,62,82,78,91,138,189,222,19,214,129,180,176,175,214,190,231,206,75,89,156,203,98,145,34,187,22,219,83,20,178,47,101,145,51,74,41,212,49,89,171,195,105,53,197,239,190,109,41,160,241,1,19,141,64,199,68,81,98,53,35,234,138,233,211,174,227,61,216,9,133,102,232,189,153,176,143,11,117,209,203,15,207,99,203,135,158,99,98,171,191,40,66,223,119,132,118,38,223,37,5,23,193,18,145,28,231,2,216,144,19,110,152,66,245,39,169,238,53,235,94,7,109,225,242,82,94,151,147,224,198,53,126,185,250,60,16,172,55,212,225,155,229,0,163,69,67,60,98,54,145,231,128,217,213,106,100,255,165,38,15,35,249,224,1,190,129,228,194,192,155,217,122,85,171,25,26,84,222,18,155,113,202,219,229,60,221,134,131,61,92,89,125,206,223,180,248,41,139,124,240,11,108,239,118,200,221,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("fc8c4b88-443d-4ef0-8d6c-416f9365c556"));
		}

		#endregion

	}

	#endregion

}

