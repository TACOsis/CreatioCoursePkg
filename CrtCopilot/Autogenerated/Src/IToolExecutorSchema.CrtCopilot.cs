namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IToolExecutorSchema

	/// <exclude/>
	public class IToolExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IToolExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IToolExecutorSchema(IToolExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("77b670a7-c9d7-450a-a2e1-50379f1044f0");
			Name = "IToolExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,145,193,106,132,48,16,134,207,43,248,14,131,151,182,32,230,1,106,189,216,82,132,246,180,125,129,168,227,146,69,19,201,68,168,148,125,247,78,212,184,165,91,122,211,153,255,251,103,242,143,150,3,210,40,27,132,210,162,116,202,100,165,25,85,111,92,28,125,197,209,97,34,165,79,112,156,201,225,192,157,190,199,134,53,154,178,87,212,104,85,243,24,71,172,18,66,64,78,211,48,72,59,23,219,127,165,29,218,206,27,119,198,2,126,98,51,57,239,181,217,131,51,166,167,44,192,226,7,61,78,117,175,26,80,187,65,245,193,218,151,197,193,88,22,248,197,110,102,46,133,85,132,180,184,67,35,121,223,22,234,57,12,205,118,80,252,38,243,81,90,57,128,230,56,158,18,79,151,12,87,109,82,248,217,160,90,212,78,117,10,109,150,139,69,249,55,40,237,105,26,88,74,43,119,71,176,87,254,7,9,137,56,215,164,8,241,108,133,91,202,162,155,172,166,34,23,225,203,183,222,20,185,124,99,223,25,149,39,44,66,26,247,228,172,79,254,250,170,20,158,213,114,71,78,32,95,187,169,169,207,124,219,226,186,112,26,82,59,174,171,132,149,30,248,230,135,75,28,93,224,27,104,72,70,115,60,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("77b670a7-c9d7-450a-a2e1-50379f1044f0"));
		}

		#endregion

	}

	#endregion

}

