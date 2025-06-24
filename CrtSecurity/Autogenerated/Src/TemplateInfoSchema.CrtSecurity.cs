namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TemplateInfoSchema

	/// <exclude/>
	public class TemplateInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TemplateInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TemplateInfoSchema(TemplateInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1c54a402-cff0-45c4-9f14-60eadf437916");
			Name = "TemplateInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ef6287c9-b0e0-4ddf-ba7d-c14e61325f60");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,143,177,14,130,48,16,134,103,72,120,135,38,236,60,128,108,226,226,96,66,132,205,56,28,229,32,53,180,37,215,235,128,198,119,183,128,26,117,114,188,191,223,125,255,213,128,70,55,130,68,81,35,17,56,219,113,86,88,211,169,222,19,176,178,38,171,81,143,3,48,238,77,103,147,248,150,196,145,119,202,244,162,154,28,163,206,142,222,176,210,152,85,72,10,6,117,93,150,242,36,14,92,74,216,135,65,20,3,56,183,17,223,162,240,126,218,1,67,40,99,2,201,231,16,140,190,25,148,20,114,230,127,240,104,46,126,27,75,178,35,18,43,12,218,114,89,90,132,171,241,128,186,65,154,125,47,161,99,90,46,246,205,5,37,231,255,176,91,219,78,79,48,69,211,174,189,97,186,175,63,251,136,146,56,100,15,176,27,110,31,71,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1c54a402-cff0-45c4-9f14-60eadf437916"));
		}

		#endregion

	}

	#endregion

}

