namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EntityUtilitiesSchema

	/// <exclude/>
	public class EntityUtilitiesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EntityUtilitiesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EntityUtilitiesSchema(EntityUtilitiesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9ecf1f84-e5da-45f4-97b4-4fa811780d5d");
			Name = "EntityUtilities";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("24c6dcbf-ddce-46c1-876f-ee548e2ae17a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,82,205,107,131,48,20,63,91,232,255,16,218,139,131,98,238,171,243,82,70,25,116,99,80,183,123,22,159,54,16,163,203,199,65,74,255,247,197,68,107,170,135,121,208,151,151,223,87,226,19,164,6,213,18,10,40,7,41,137,106,74,157,28,26,81,178,202,72,162,89,35,214,171,235,122,21,25,197,68,133,206,157,210,80,239,103,107,139,231,28,104,15,86,201,17,4,72,70,23,152,19,19,191,83,51,244,146,144,188,10,205,52,3,101,1,22,178,149,80,89,45,116,224,68,169,103,228,54,187,47,205,184,195,56,8,198,24,165,202,212,53,145,93,54,172,183,195,115,47,198,10,133,229,32,55,106,224,64,164,53,63,156,81,164,180,61,55,69,180,119,95,154,71,87,23,224,30,242,29,244,165,41,108,204,79,199,246,155,243,120,15,249,130,132,99,129,210,150,72,82,75,40,145,176,255,227,101,67,27,110,106,241,97,235,13,206,118,115,234,221,2,207,61,188,206,82,36,11,204,118,75,251,101,180,36,197,78,106,82,150,160,141,20,42,251,143,60,133,27,25,125,231,241,110,115,116,38,37,28,65,31,92,196,111,194,13,164,121,22,235,11,27,175,28,129,251,236,44,69,246,19,51,29,230,9,245,3,25,69,172,68,177,7,37,111,42,16,58,53,164,128,34,14,8,35,35,242,137,6,105,59,170,58,239,90,40,102,33,2,226,222,209,110,238,61,112,11,40,137,225,58,206,253,230,109,152,6,16,133,31,8,183,246,221,199,230,237,15,236,65,237,127,106,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9ecf1f84-e5da-45f4-97b4-4fa811780d5d"));
		}

		#endregion

	}

	#endregion

}

