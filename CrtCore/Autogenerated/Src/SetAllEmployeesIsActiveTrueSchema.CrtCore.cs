namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SetAllEmployeesIsActiveTrueSchema

	/// <exclude/>
	public class SetAllEmployeesIsActiveTrueSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SetAllEmployeesIsActiveTrueSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SetAllEmployeesIsActiveTrueSchema(SetAllEmployeesIsActiveTrueSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cd69648b-4854-fa46-2daa-e5c81be0a625");
			Name = "SetAllEmployeesIsActiveTrue";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,81,203,78,194,64,20,93,67,194,63,220,116,213,73,232,3,181,70,68,77,10,84,211,157,9,16,215,99,123,193,73,166,51,117,30,8,49,252,187,3,181,161,196,196,179,186,175,115,103,206,185,32,104,133,186,166,5,194,18,149,162,90,174,77,56,147,98,205,54,86,81,195,164,128,239,65,31,28,172,102,98,3,139,189,54,88,77,186,165,46,79,225,63,173,112,62,117,221,166,31,69,17,60,104,91,85,84,237,159,206,165,103,182,131,148,115,200,170,154,203,61,34,40,201,49,236,80,162,75,78,109,223,57,43,160,224,84,107,88,160,113,220,150,170,115,157,22,134,109,113,169,44,194,61,228,185,208,134,114,190,40,20,171,77,182,195,194,26,169,90,117,71,156,163,223,181,91,201,74,104,38,209,95,105,84,206,24,129,197,201,21,123,145,146,238,30,135,222,150,42,176,117,73,13,194,35,8,252,130,213,41,241,47,105,67,240,156,161,105,89,49,177,18,204,120,100,208,239,57,132,78,137,239,53,191,247,134,48,147,220,86,34,124,165,202,221,202,160,242,141,83,68,218,217,183,15,84,232,123,121,233,145,48,215,217,167,165,220,255,195,120,177,172,60,166,218,77,166,87,227,244,122,154,38,193,205,52,158,7,243,108,52,10,198,105,50,10,226,56,137,147,219,89,236,112,231,17,66,38,167,7,26,17,97,235,2,153,156,117,30,218,99,158,130,195,15,88,7,190,249,75,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cd69648b-4854-fa46-2daa-e5c81be0a625"));
		}

		#endregion

	}

	#endregion

}

