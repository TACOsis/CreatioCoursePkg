namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MacrosExtendedPropertiesSchema

	/// <exclude/>
	public class MacrosExtendedPropertiesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MacrosExtendedPropertiesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MacrosExtendedPropertiesSchema(MacrosExtendedPropertiesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("002c9b1f-92d2-46e4-bb93-2ab334090c0f");
			Name = "MacrosExtendedProperties";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,81,77,107,195,48,12,61,167,208,255,32,186,123,2,61,182,91,47,101,108,131,14,10,251,184,171,182,226,10,28,39,88,54,91,41,253,239,115,157,52,235,6,189,73,79,239,233,61,33,135,13,73,135,138,224,157,188,71,105,235,80,174,91,87,179,137,30,3,183,110,58,57,78,39,69,20,118,6,222,14,18,168,89,142,253,13,73,249,17,216,74,162,37,226,157,39,147,32,88,91,20,89,192,43,42,223,202,227,119,32,167,73,111,125,219,145,15,76,146,185,85,85,193,189,196,166,65,127,88,13,125,214,1,59,133,157,68,139,129,0,181,230,179,11,90,232,70,61,124,237,89,237,65,161,131,29,65,20,210,73,147,150,17,129,242,84,63,204,122,227,103,178,73,240,57,159,85,171,242,98,88,93,57,118,113,103,89,129,202,166,183,179,22,199,156,119,60,238,119,182,128,109,94,209,207,255,31,148,129,13,58,19,209,16,176,38,23,184,102,242,229,72,190,14,115,73,243,20,89,143,170,23,13,231,127,20,133,161,176,204,133,12,197,105,200,148,210,246,177,114,223,163,127,193,211,15,2,162,223,52,245,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("002c9b1f-92d2-46e4-bb93-2ab334090c0f"));
		}

		#endregion

	}

	#endregion

}

