namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: HttpRequestClientFactorySchema

	/// <exclude/>
	public class HttpRequestClientFactorySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public HttpRequestClientFactorySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public HttpRequestClientFactorySchema(HttpRequestClientFactorySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f6a5c9a8-5d91-4432-9612-d13ffbfc331e");
			Name = "HttpRequestClientFactory";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("cc281005-d010-4480-8333-effff60fd1ff");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,147,193,78,227,48,16,134,207,169,212,119,152,213,94,130,132,250,0,91,224,176,173,10,213,106,209,170,112,91,173,144,235,76,139,37,215,46,227,113,81,84,245,221,177,147,24,154,52,192,114,156,228,247,239,111,230,31,27,177,65,183,21,18,225,30,137,132,179,43,30,77,172,89,169,181,39,193,202,154,225,96,63,28,100,222,41,179,134,187,210,49,110,198,157,58,232,181,70,25,197,110,116,141,6,73,201,55,205,177,45,225,104,38,36,91,82,232,222,85,44,240,201,163,227,40,8,146,173,95,106,37,193,113,128,145,32,181,112,14,110,152,183,141,106,162,21,26,174,77,203,32,223,87,135,178,239,132,235,128,3,51,133,186,112,63,224,15,169,157,96,172,127,110,235,34,121,18,138,194,26,93,194,84,85,61,8,42,47,28,83,32,59,135,153,55,242,98,126,114,223,213,21,60,152,48,184,226,167,50,69,16,58,184,140,198,153,193,231,47,185,228,103,227,134,23,77,81,35,183,249,127,35,63,218,207,26,56,117,134,107,228,219,200,55,55,65,99,36,230,53,10,68,232,51,216,87,176,59,65,176,172,249,225,178,211,207,223,88,253,27,87,58,66,246,100,146,180,66,206,178,195,255,114,87,241,53,216,173,40,251,169,19,240,140,236,102,58,207,19,107,195,48,137,241,55,97,135,77,227,190,161,190,1,102,217,233,173,75,107,53,220,83,249,209,128,206,193,122,238,227,83,141,56,81,165,58,140,207,120,173,235,113,169,21,228,223,218,211,140,15,138,69,80,255,194,50,175,34,72,14,169,177,149,208,14,235,243,135,174,245,9,106,229,208,202,134,201,227,113,44,237,158,119,86,21,176,8,193,132,199,74,31,116,253,222,154,130,12,15,59,92,17,199,158,192,251,214,37,176,30,41,63,225,153,162,70,198,198,160,111,61,59,35,92,224,198,238,142,123,127,13,184,179,131,241,251,112,112,128,23,107,138,88,239,217,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f6a5c9a8-5d91-4432-9612-d13ffbfc331e"));
		}

		#endregion

	}

	#endregion

}

