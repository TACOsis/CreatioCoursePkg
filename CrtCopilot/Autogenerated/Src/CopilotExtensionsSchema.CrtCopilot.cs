namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotExtensionsSchema

	/// <exclude/>
	public class CopilotExtensionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotExtensionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotExtensionsSchema(CopilotExtensionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("84f2730c-7d56-495e-9fdb-10feef1e0da0");
			Name = "CopilotExtensions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ed753793-30d5-4797-a3f9-3019dcc6e358");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,207,78,194,64,16,198,207,37,241,29,54,225,82,46,251,0,42,120,64,49,77,36,146,128,241,188,182,3,108,44,179,117,102,106,36,196,119,119,255,0,177,136,198,75,179,251,205,238,111,230,251,186,104,54,192,141,41,65,141,9,140,88,167,199,174,177,181,147,139,222,238,162,151,181,108,113,165,230,91,22,216,232,7,139,111,87,71,113,1,68,134,221,82,252,13,2,175,251,138,69,1,66,83,43,22,207,42,85,89,27,102,181,39,222,125,8,32,91,135,236,79,238,226,249,172,79,176,242,138,154,130,172,93,197,151,106,214,190,212,182,76,197,38,174,15,172,61,165,240,45,80,230,229,26,54,102,106,208,172,128,212,61,156,147,115,89,91,86,79,12,52,118,136,80,74,104,212,118,182,3,21,76,102,25,129,180,116,90,212,207,142,94,99,54,186,195,157,145,123,183,21,144,246,109,247,210,245,239,195,141,242,65,200,44,251,252,167,39,53,177,88,165,192,147,156,108,252,225,222,254,212,14,190,138,142,90,120,230,185,73,71,29,68,56,165,134,231,168,193,112,168,114,62,136,244,76,79,44,177,60,210,45,44,77,91,75,110,227,85,143,11,175,165,64,111,18,125,120,139,109,3,106,56,236,90,8,162,78,54,83,62,135,127,112,58,202,205,17,244,61,198,62,96,149,158,78,220,71,213,127,190,0,118,148,190,212,206,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("84f2730c-7d56-495e-9fdb-10feef1e0da0"));
		}

		#endregion

	}

	#endregion

}

