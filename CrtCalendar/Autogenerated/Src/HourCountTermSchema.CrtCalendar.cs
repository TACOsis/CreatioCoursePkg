namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: HourCountTermSchema

	/// <exclude/>
	public class HourCountTermSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public HourCountTermSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public HourCountTermSchema(HourCountTermSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e2216cbe-4197-4a17-8a40-fbb367f7eb39");
			Name = "HourCountTerm";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,209,106,27,49,16,124,118,32,255,176,56,47,23,8,186,247,198,61,40,78,155,26,18,40,212,253,0,249,110,99,11,116,146,171,149,2,71,200,191,119,37,89,231,179,211,164,125,49,214,222,204,238,236,140,100,100,143,180,151,45,194,26,157,147,100,159,188,88,90,243,164,182,193,73,175,172,17,75,169,209,116,210,209,229,197,203,229,197,44,144,50,91,248,57,144,199,254,246,236,204,76,173,177,141,52,18,247,104,208,169,246,13,230,65,153,223,199,226,59,83,25,192,144,43,135,91,62,192,82,75,34,248,4,223,109,112,75,27,140,103,86,159,16,117,93,195,130,66,223,75,55,52,135,115,66,128,103,8,108,6,216,49,135,68,129,214,19,236,62,108,180,106,161,77,205,79,90,243,168,71,101,130,199,201,176,217,75,26,56,106,122,68,191,179,93,84,245,35,245,201,95,207,245,100,65,82,183,65,75,143,208,241,207,90,245,24,133,181,7,95,197,200,171,207,137,139,189,116,178,7,195,25,125,158,119,114,160,121,83,210,128,120,20,139,58,33,254,78,72,155,207,155,184,25,129,183,113,96,150,241,150,230,208,7,103,232,216,221,179,72,134,149,122,4,30,236,178,207,156,152,234,16,238,202,46,227,122,213,234,171,9,61,58,185,209,184,88,149,94,119,114,104,146,218,27,80,156,75,82,117,13,241,42,205,102,15,118,91,216,236,233,202,112,104,207,82,83,149,225,25,122,155,144,89,73,222,250,155,114,228,171,107,113,156,144,149,136,47,93,151,182,173,38,204,215,15,130,185,71,207,206,236,48,173,11,193,40,79,255,155,70,73,111,222,172,153,63,102,249,97,32,12,201,112,254,243,126,6,235,81,11,180,241,250,253,35,134,232,41,239,17,89,191,34,169,26,141,63,139,160,104,188,129,105,76,197,187,226,125,3,123,126,181,124,177,75,68,7,227,55,146,80,156,204,57,246,27,25,233,170,167,34,63,102,98,51,243,43,162,149,137,177,76,227,184,98,84,126,72,233,156,171,167,197,215,63,1,215,199,188,155,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e2216cbe-4197-4a17-8a40-fbb367f7eb39"));
		}

		#endregion

	}

	#endregion

}

