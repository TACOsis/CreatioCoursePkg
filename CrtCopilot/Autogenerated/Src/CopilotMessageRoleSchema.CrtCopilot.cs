namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotMessageRoleSchema

	/// <exclude/>
	public class CopilotMessageRoleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotMessageRoleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotMessageRoleSchema(CopilotMessageRoleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0912d679-1a89-49e0-8044-cb3aca27cc1d");
			Name = "CopilotMessageRole";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,206,61,10,195,48,12,5,224,185,134,220,65,228,0,189,64,233,80,50,119,233,207,1,92,35,130,193,177,140,159,50,148,210,187,87,14,205,104,16,60,9,125,2,101,191,48,138,15,76,83,101,175,81,142,147,148,152,68,7,247,25,220,161,172,175,20,3,65,109,21,40,36,15,208,31,92,25,240,51,223,36,177,193,134,119,29,36,67,237,166,198,60,211,253,13,229,133,206,52,98,235,198,83,79,62,193,181,185,213,178,175,46,64,180,119,178,54,234,247,161,239,31,34,169,81,181,220,212,119,112,86,63,229,138,47,106,248,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0912d679-1a89-49e0-8044-cb3aca27cc1d"));
		}

		#endregion

	}

	#endregion

}

