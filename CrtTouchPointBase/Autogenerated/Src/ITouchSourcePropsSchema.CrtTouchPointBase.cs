namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITouchSourcePropsSchema

	/// <exclude/>
	public class ITouchSourcePropsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITouchSourcePropsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITouchSourcePropsSchema(ITouchSourcePropsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("38f705d4-ff74-4732-a6de-a0fc5e557d04");
			Name = "ITouchSourceProps";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c695e3ed-eb31-41e8-baf6-8b1758bb9790");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,143,193,106,195,64,12,68,207,54,248,31,4,185,219,247,164,244,146,67,49,180,96,154,252,192,214,43,59,2,175,214,213,174,14,193,228,223,107,214,137,49,109,233,161,71,141,102,244,52,108,28,134,209,180,8,103,20,49,193,119,177,60,122,238,168,87,49,145,60,23,249,84,228,153,6,226,30,78,215,16,209,29,138,124,86,118,130,253,188,134,154,35,74,55,31,216,67,125,246,218,94,78,94,165,197,70,252,24,146,177,170,42,120,10,234,156,145,235,243,125,94,60,96,216,130,67,75,234,96,156,253,40,145,48,148,143,76,181,9,141,250,49,80,11,244,128,253,198,202,166,196,91,63,107,214,147,123,104,82,126,217,127,127,40,9,199,139,97,198,1,148,233,83,17,200,34,71,234,8,165,92,35,219,127,178,23,37,11,239,24,116,136,175,104,236,91,106,81,91,152,160,199,120,128,219,31,168,123,249,127,146,150,244,15,210,14,217,46,189,211,188,168,91,49,43,242,219,23,211,168,43,247,237,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("38f705d4-ff74-4732-a6de-a0fc5e557d04"));
		}

		#endregion

	}

	#endregion

}

