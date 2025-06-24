namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IFileUploadConfigSchema

	/// <exclude/>
	public class IFileUploadConfigSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IFileUploadConfigSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IFileUploadConfigSchema(IFileUploadConfigSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("07726079-cc74-4f50-957e-970e32ab99e4");
			Name = "IFileUploadConfig";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,81,203,106,195,48,16,60,59,144,127,88,210,187,125,239,35,23,67,64,135,66,33,237,7,200,242,202,8,36,173,209,3,154,134,254,123,37,203,77,140,169,169,78,210,236,140,102,152,181,220,160,31,185,64,120,71,231,184,39,25,234,150,172,84,67,116,60,40,178,245,73,105,252,24,53,241,30,174,251,221,126,87,61,56,28,210,0,152,13,232,100,150,178,59,167,104,39,222,24,59,173,4,168,109,26,60,46,49,102,37,205,22,55,143,55,71,35,186,160,208,23,188,105,26,120,246,209,24,238,46,199,95,32,159,87,254,9,50,125,5,94,125,97,242,132,238,18,208,131,36,7,177,132,191,201,155,165,190,71,161,12,215,89,159,147,156,179,250,10,3,134,39,248,254,199,146,121,240,24,64,68,31,200,128,32,29,141,245,245,223,54,29,145,134,51,134,118,34,183,133,123,114,249,58,21,113,183,172,170,77,83,102,125,224,54,21,73,50,13,17,65,56,148,47,135,85,133,135,230,184,17,98,221,245,186,250,57,3,204,43,64,219,151,45,164,87,233,98,9,37,228,7,181,152,135,221,60,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("07726079-cc74-4f50-957e-970e32ab99e4"));
		}

		#endregion

	}

	#endregion

}

