namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: LogSmsSenderSchema

	/// <exclude/>
	public class LogSmsSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public LogSmsSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public LogSmsSenderSchema(LogSmsSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1e9b5333-8331-46d8-b47f-1efafc514eea");
			Name = "LogSmsSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7756f8f5-5308-44c7-9816-1b99a6ae66ca");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,145,193,106,131,64,16,134,207,10,190,195,96,123,80,8,62,64,66,122,168,37,69,72,66,193,222,74,41,27,29,205,130,238,202,238,26,8,146,119,239,172,107,66,82,146,222,156,153,223,239,255,103,167,215,92,212,144,202,182,149,34,89,203,186,166,114,17,248,253,216,254,68,165,152,150,149,73,82,169,48,89,177,194,72,197,81,147,32,240,5,107,81,119,172,192,27,153,168,120,221,43,102,184,20,129,63,4,190,247,151,148,183,58,19,6,107,167,25,73,222,147,194,154,10,72,27,166,245,28,40,6,169,114,20,37,170,113,254,245,134,21,235,27,243,202,69,73,180,200,28,59,148,85,148,93,84,241,12,182,20,7,150,96,83,209,232,26,17,199,223,196,232,250,93,195,11,40,172,197,141,3,204,33,187,178,243,134,209,242,146,105,197,177,41,41,212,135,226,7,102,208,13,59,87,128,66,86,74,209,28,33,35,34,252,52,244,126,4,92,90,254,134,9,70,69,242,142,102,61,182,163,48,223,228,97,188,152,240,100,231,28,30,216,141,113,39,55,23,93,27,229,110,85,210,162,47,119,55,93,88,249,127,248,13,154,189,124,192,63,72,94,130,5,69,147,83,183,151,2,183,125,187,67,53,59,187,211,205,53,237,21,131,189,173,231,77,43,39,153,168,100,244,28,218,191,245,89,51,135,97,250,58,129,145,96,246,8,195,21,242,20,186,184,167,187,15,226,186,183,77,234,253,2,24,11,158,100,175,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1e9b5333-8331-46d8-b47f-1efafc514eea"));
		}

		#endregion

	}

	#endregion

}

