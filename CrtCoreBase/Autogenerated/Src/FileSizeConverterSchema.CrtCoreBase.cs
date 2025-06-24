namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FileSizeConverterSchema

	/// <exclude/>
	public class FileSizeConverterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FileSizeConverterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FileSizeConverterSchema(FileSizeConverterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b9844b9b-b3bf-4414-a49f-287d942d6932");
			Name = "FileSizeConverter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,80,193,74,3,49,16,61,91,232,63,12,245,210,122,104,84,60,213,237,30,44,8,30,10,130,253,129,217,236,180,6,54,201,50,201,10,85,252,119,39,187,217,149,42,4,146,247,230,189,151,153,113,104,41,180,168,9,14,196,140,193,31,227,122,231,221,209,156,58,198,104,188,131,175,249,108,62,187,186,102,58,37,180,107,48,132,13,60,155,134,222,204,39,137,244,131,56,18,139,68,78,219,85,141,209,16,162,88,53,232,164,253,47,205,137,83,228,158,226,187,175,37,244,181,119,15,69,165,20,20,161,179,22,249,92,142,68,142,128,32,113,96,196,89,65,244,19,170,206,145,194,122,50,171,191,238,162,69,70,11,78,38,222,46,146,233,197,237,171,69,89,168,158,255,149,49,197,142,93,144,194,248,74,165,203,209,106,210,198,98,35,29,28,252,83,250,119,105,220,208,87,10,93,193,182,132,101,214,172,70,22,110,224,238,246,254,33,95,143,121,9,228,234,97,15,61,254,30,150,125,65,10,247,3,56,118,36,179,166,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b9844b9b-b3bf-4414-a49f-287d942d6932"));
		}

		#endregion

	}

	#endregion

}

