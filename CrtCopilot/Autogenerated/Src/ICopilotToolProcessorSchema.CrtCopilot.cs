namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotToolProcessorSchema

	/// <exclude/>
	public class ICopilotToolProcessorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotToolProcessorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotToolProcessorSchema(ICopilotToolProcessorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45ff5045-0bfb-49fc-bfdd-55d44048d58c");
			Name = "ICopilotToolProcessor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ed753793-30d5-4797-a3f9-3019dcc6e358");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,82,219,138,194,64,12,125,23,252,135,128,47,10,165,31,160,82,88,170,184,133,21,100,245,7,198,26,237,192,116,166,76,82,88,145,253,247,205,212,214,109,247,194,62,236,188,76,39,57,57,57,57,169,85,37,82,165,114,132,212,163,98,237,226,212,85,218,56,30,143,110,227,17,200,169,73,219,11,236,175,196,88,74,210,24,204,5,102,41,222,160,69,175,243,69,31,246,133,36,222,34,171,147,98,53,0,29,208,123,69,238,204,241,218,10,65,81,162,229,56,179,140,254,44,66,40,78,11,197,169,43,43,131,161,209,63,74,227,87,153,77,164,34,9,201,157,102,226,241,34,25,120,212,204,33,107,197,30,156,51,59,239,132,134,156,239,240,85,125,52,58,7,221,193,127,67,7,236,173,43,234,55,18,7,10,119,162,57,236,26,166,62,100,250,162,137,151,129,104,133,103,109,117,144,156,0,203,155,34,88,233,198,102,229,175,75,98,47,179,71,144,5,232,250,13,243,154,157,79,160,84,85,37,241,25,108,144,135,36,52,253,108,18,78,182,182,117,137,94,29,13,46,91,249,79,13,123,88,79,38,123,77,64,53,239,240,45,189,127,192,7,191,44,239,243,2,75,149,52,118,88,166,217,162,63,78,51,77,11,223,138,45,234,130,9,60,43,123,50,24,228,165,202,24,154,14,23,212,237,7,242,111,161,8,90,170,189,80,5,35,233,126,71,195,209,254,182,41,248,185,109,173,26,232,157,160,61,221,151,212,69,223,31,127,73,47,37,193,15,205,22,128,161,37,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45ff5045-0bfb-49fc-bfdd-55d44048d58c"));
		}

		#endregion

	}

	#endregion

}

