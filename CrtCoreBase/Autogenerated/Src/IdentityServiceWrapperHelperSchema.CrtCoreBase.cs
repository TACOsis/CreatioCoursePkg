namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IdentityServiceWrapperHelperSchema

	/// <exclude/>
	public class IdentityServiceWrapperHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IdentityServiceWrapperHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IdentityServiceWrapperHelperSchema(IdentityServiceWrapperHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b5f50835-6d49-4295-bff7-bbe844c6a4ae");
			Name = "IdentityServiceWrapperHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9cc3d920-8a68-437c-9367-c8131a0a7723");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,144,63,79,195,64,12,197,231,84,234,119,56,117,106,150,8,49,82,254,168,170,72,201,196,16,16,243,245,250,26,78,10,119,39,219,169,168,80,191,59,110,34,6,80,50,48,156,7,251,247,158,159,47,216,15,112,178,14,230,5,68,150,227,65,138,77,12,7,223,116,100,197,199,48,159,125,205,103,89,199,62,52,191,16,194,106,162,95,148,214,73,36,15,30,35,158,215,157,188,87,65,208,12,254,202,40,149,186,93,235,157,97,209,158,51,174,181,204,166,218,35,136,151,83,13,58,122,135,55,178,41,129,158,208,106,85,201,37,214,31,93,53,46,49,91,72,21,148,9,14,203,220,244,194,236,104,201,248,113,252,206,108,219,184,179,237,58,165,26,34,154,159,139,18,86,58,194,43,163,70,178,26,29,63,163,50,82,127,211,245,85,239,155,61,152,205,37,254,240,9,167,66,119,223,78,228,186,95,46,30,63,5,20,116,149,115,96,94,228,131,197,205,63,44,242,85,175,33,104,188,48,113,81,143,156,181,232,59,155,111,118,55,122,84,243,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b5f50835-6d49-4295-bff7-bbe844c6a4ae"));
		}

		#endregion

	}

	#endregion

}

