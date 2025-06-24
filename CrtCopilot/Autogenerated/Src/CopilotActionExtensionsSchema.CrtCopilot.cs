namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotActionExtensionsSchema

	/// <exclude/>
	public class CopilotActionExtensionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotActionExtensionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotActionExtensionsSchema(CopilotActionExtensionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("86e8b718-e7d5-4838-919a-598767358602");
			Name = "CopilotActionExtensions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,83,219,74,195,64,16,125,78,161,255,48,232,67,18,122,147,34,62,88,242,80,69,69,80,17,91,159,101,155,140,77,32,221,45,187,147,106,17,255,221,217,100,219,110,188,32,228,182,103,103,206,156,115,216,72,177,66,179,22,41,194,165,70,65,133,26,94,170,117,81,42,234,118,62,186,157,160,50,133,92,194,108,107,8,87,147,110,135,145,66,18,106,41,74,48,196,229,41,164,165,48,6,92,211,52,101,6,121,245,78,40,13,127,24,174,255,168,187,130,99,141,75,70,184,80,114,163,36,115,14,143,186,216,8,194,102,127,221,44,32,181,251,192,67,96,150,43,77,51,210,44,224,14,229,146,114,72,96,60,158,56,58,148,89,195,216,166,191,71,202,85,246,23,185,147,108,106,82,152,43,111,68,116,83,21,25,44,249,17,131,53,30,4,27,161,97,33,12,158,157,214,91,137,149,190,65,77,195,185,186,168,97,215,104,123,44,182,37,156,106,45,182,81,28,59,145,193,104,4,79,184,46,109,186,207,79,119,80,201,87,93,176,240,114,11,105,46,180,72,57,73,83,23,182,230,28,22,67,215,29,133,189,176,15,225,32,140,15,200,200,34,47,97,123,214,74,109,16,40,231,91,139,162,180,38,147,164,222,213,72,149,150,62,245,172,90,52,57,68,39,125,31,119,89,15,96,108,169,131,224,243,215,8,107,169,215,90,173,252,8,93,174,252,218,101,200,159,108,136,159,7,221,47,86,247,200,119,50,176,72,47,108,198,53,177,239,178,244,82,183,195,90,185,91,238,30,28,37,201,145,235,116,30,37,190,213,242,162,61,203,191,70,110,144,158,111,51,59,97,174,84,249,192,191,196,206,11,185,181,127,40,184,195,115,205,18,119,69,94,166,123,104,31,231,143,227,220,86,253,61,203,246,144,150,131,111,103,159,81,190,190,0,253,60,27,117,200,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("86e8b718-e7d5-4838-919a-598767358602"));
		}

		#endregion

	}

	#endregion

}

