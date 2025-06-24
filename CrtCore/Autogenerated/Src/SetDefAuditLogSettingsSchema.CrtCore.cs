namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SetDefAuditLogSettingsSchema

	/// <exclude/>
	public class SetDefAuditLogSettingsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SetDefAuditLogSettingsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SetDefAuditLogSettingsSchema(SetDefAuditLogSettingsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("fb904ddf-df79-4f2c-8b8d-2d63191aa732");
			Name = "SetDefAuditLogSettings";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,144,193,106,195,48,12,134,207,29,236,29,68,79,45,148,60,192,202,14,97,235,161,48,216,33,219,238,158,163,100,2,215,14,182,84,186,149,190,251,228,132,108,75,142,163,96,25,132,126,125,250,37,240,230,128,169,51,22,225,5,99,52,41,52,92,60,4,223,80,43,209,48,5,15,183,55,103,141,133,36,242,237,68,20,113,251,91,200,105,245,153,42,100,214,52,193,253,76,58,133,22,127,164,61,68,95,39,239,142,44,88,103,82,2,45,62,98,83,74,77,252,20,218,31,234,29,236,247,62,177,113,174,178,145,58,222,157,208,10,135,152,17,189,203,145,114,12,84,195,80,197,213,107,194,168,227,61,218,126,33,153,164,107,56,231,190,197,108,129,98,112,240,102,156,224,106,218,177,129,165,18,51,180,20,254,8,145,190,250,157,212,231,114,3,28,5,215,219,127,17,203,250,64,62,99,175,67,122,238,112,56,246,120,197,43,48,71,245,156,118,209,79,227,242,13,39,155,93,142,79,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("fb904ddf-df79-4f2c-8b8d-2d63191aa732"));
		}

		#endregion

	}

	#endregion

}

