namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SysAdminUnitInfoSchema

	/// <exclude/>
	public class SysAdminUnitInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SysAdminUnitInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SysAdminUnitInfoSchema(SysAdminUnitInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("840c27c8-6cdd-4e08-987e-846ba10b09d0");
			Name = "SysAdminUnitInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ef6287c9-b0e0-4ddf-ba7d-c14e61325f60");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,144,65,107,195,48,12,133,207,49,248,63,24,122,207,15,88,79,163,27,165,135,141,178,182,167,177,131,154,40,65,16,219,65,150,15,107,233,127,159,226,116,163,176,210,163,158,223,251,244,228,156,40,244,110,247,157,4,253,210,26,107,2,120,76,35,52,232,246,200,12,41,118,82,175,98,232,168,207,12,66,49,212,106,126,110,61,133,67,32,217,132,46,90,115,182,166,202,55,160,250,35,7,33,143,245,14,153,96,160,83,9,22,124,181,96,236,117,112,171,1,82,122,114,255,97,234,249,124,1,1,93,42,12,141,124,169,48,230,227,64,141,107,166,204,157,72,117,46,177,63,246,150,227,136,44,132,186,96,91,162,243,123,225,190,161,63,34,79,212,95,108,18,158,186,191,235,229,203,135,198,117,166,214,77,189,180,214,166,125,236,189,66,95,61,208,112,117,46,48,180,115,67,157,46,243,111,220,72,214,168,246,3,95,186,102,182,144,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("840c27c8-6cdd-4e08-987e-846ba10b09d0"));
		}

		#endregion

	}

	#endregion

}

