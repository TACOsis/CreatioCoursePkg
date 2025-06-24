namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseServiceRequestSchema

	/// <exclude/>
	public class BaseServiceRequestSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseServiceRequestSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseServiceRequestSchema(BaseServiceRequestSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("56f508aa-2354-4a52-b001-b51958e64e5c");
			Name = "BaseServiceRequest";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5f5fe385-d25b-4c17-9585-cfaff007abaf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,85,77,111,218,64,16,61,7,137,255,48,34,151,230,98,223,67,90,137,56,85,20,165,84,22,112,171,114,88,236,129,174,106,239,58,251,129,66,35,254,123,103,119,193,9,142,65,137,83,137,147,189,51,243,102,223,155,183,107,11,86,162,174,88,134,48,67,165,152,150,11,19,37,82,44,248,210,42,102,184,20,81,242,125,58,150,57,22,186,223,123,238,247,250,189,51,171,185,88,194,116,173,13,150,195,198,58,154,88,97,120,137,209,20,21,103,5,255,235,123,12,61,238,92,225,146,22,144,20,76,235,75,184,102,26,169,106,197,51,156,224,163,69,109,124,85,28,199,112,165,109,89,50,181,254,182,93,123,4,200,5,204,9,3,42,84,131,145,64,220,162,29,38,126,5,250,117,195,12,35,25,70,177,204,60,80,160,178,243,130,103,144,249,70,109,59,159,5,109,53,201,84,201,10,149,225,72,76,83,15,14,249,38,61,31,184,69,67,244,20,104,247,52,191,17,70,233,29,252,193,117,84,35,226,38,228,106,197,10,139,245,114,214,10,122,169,241,130,198,88,206,81,125,249,73,150,193,87,24,80,237,224,194,137,219,169,211,70,57,39,70,21,191,199,53,60,195,18,205,208,113,26,194,198,85,121,121,40,242,160,208,203,217,4,99,246,131,13,159,82,234,121,26,159,222,238,12,237,199,230,61,230,5,253,173,246,185,225,231,204,160,99,78,27,27,32,0,10,82,224,231,175,129,184,217,250,44,31,240,180,205,160,128,251,17,154,221,137,133,220,183,107,212,76,239,6,241,54,211,52,179,163,149,7,119,60,232,232,4,43,133,26,5,157,235,108,199,142,166,20,148,213,115,226,212,170,131,191,71,232,124,234,58,58,63,133,117,86,56,174,86,99,238,8,243,21,122,13,244,170,137,177,191,167,91,1,31,243,148,26,37,161,79,34,233,107,183,111,42,23,222,190,70,77,155,127,39,56,138,91,28,229,113,159,181,139,204,232,179,189,181,228,85,221,135,152,191,12,189,98,60,255,15,211,118,109,142,207,58,109,84,116,154,52,62,85,60,252,237,58,112,204,45,30,25,232,77,200,118,188,192,20,251,7,15,123,43,61,161,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("56f508aa-2354-4a52-b001-b51958e64e5c"));
		}

		#endregion

	}

	#endregion

}

