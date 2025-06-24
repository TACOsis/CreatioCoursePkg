namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FileConstsSchema

	/// <exclude/>
	public class FileConstsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FileConstsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FileConstsSchema(FileConstsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("92a37fd3-69e6-42f0-916f-9be6698711d1");
			Name = "FileConsts";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("66e9e705-64b4-4dda-925e-d1e05a389eb6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,147,95,111,155,48,20,197,159,27,41,223,225,42,125,89,31,220,64,160,105,88,183,73,105,26,170,73,211,20,173,127,246,108,240,37,177,6,6,249,154,85,168,218,119,159,13,37,13,83,215,169,218,147,197,245,57,231,254,240,181,21,47,144,42,158,34,220,162,214,156,202,204,156,126,199,100,89,85,227,209,227,120,116,84,147,84,91,184,105,200,96,113,49,30,217,202,177,198,173,44,21,172,114,78,244,30,98,153,227,170,84,100,168,221,173,234,36,151,41,144,225,198,46,169,211,12,36,71,143,173,108,159,18,75,204,133,141,217,180,190,110,111,58,117,14,48,77,133,192,90,55,1,87,2,114,169,126,16,56,197,176,139,70,46,74,149,55,112,93,75,209,234,111,173,245,238,179,128,143,160,240,161,45,191,155,156,205,162,203,213,44,94,48,111,189,246,216,85,236,251,44,58,247,47,153,231,249,87,115,111,29,5,139,213,124,114,114,209,35,124,177,205,254,130,240,47,2,103,125,145,32,120,19,193,90,25,105,154,255,224,120,14,120,145,38,140,146,116,150,89,26,68,143,137,172,163,73,28,141,152,123,104,105,210,67,26,103,175,248,22,225,39,106,178,147,35,40,51,48,59,132,204,205,234,205,108,78,126,255,148,116,173,165,216,216,232,63,9,113,17,166,73,24,112,22,134,129,207,194,121,20,176,68,8,206,184,31,206,252,69,18,164,103,209,249,1,225,82,8,105,108,30,207,161,210,101,133,218,52,112,71,184,20,133,84,223,228,118,103,200,254,128,182,247,221,160,6,101,215,87,24,201,104,119,239,135,246,231,6,27,151,115,207,243,26,191,218,28,11,61,25,42,39,123,168,41,124,160,186,40,184,110,62,245,133,24,81,116,167,134,237,128,128,210,29,22,188,69,58,221,187,166,135,182,215,41,93,160,59,207,110,222,55,93,92,15,214,111,246,72,199,168,68,247,246,218,239,95,221,155,30,20,109,237,55,70,114,122,227,23,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("92a37fd3-69e6-42f0-916f-9be6698711d1"));
		}

		#endregion

	}

	#endregion

}

