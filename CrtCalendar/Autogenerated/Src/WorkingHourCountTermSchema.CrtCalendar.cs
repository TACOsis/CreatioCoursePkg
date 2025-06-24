namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WorkingHourCountTermSchema

	/// <exclude/>
	public class WorkingHourCountTermSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WorkingHourCountTermSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WorkingHourCountTermSchema(WorkingHourCountTermSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5cacbc39-30b4-4a81-96b8-4533327f7a02");
			Name = "WorkingHourCountTerm";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,84,77,79,219,64,16,61,27,137,255,48,10,151,166,66,118,79,61,148,96,9,133,138,230,128,132,68,42,206,27,123,146,172,240,238,70,251,81,100,33,254,59,51,187,182,9,33,9,234,161,82,111,222,217,247,118,222,204,155,177,22,10,221,70,84,8,115,180,86,56,179,244,249,212,232,165,92,5,43,188,52,58,159,138,6,117,45,172,59,61,121,62,61,201,130,147,122,5,247,173,243,168,46,118,206,196,108,26,172,152,230,242,27,212,104,101,69,24,66,157,89,92,81,20,166,141,112,14,126,192,131,177,143,196,251,101,130,157,154,160,61,37,87,17,88,20,5,76,92,80,74,216,182,236,206,17,1,158,32,176,104,225,41,81,97,77,92,151,247,148,98,139,179,9,139,70,86,80,197,92,251,50,189,9,184,149,58,120,220,146,144,61,71,25,131,224,91,244,107,83,179,228,59,107,60,213,134,117,2,236,10,141,129,27,244,14,252,26,193,75,133,16,180,244,81,225,71,137,41,178,17,86,40,208,100,193,229,168,22,173,27,149,125,179,129,143,249,164,136,136,253,4,194,141,202,57,229,162,143,143,72,139,62,88,237,202,249,32,4,42,174,146,144,253,21,99,55,125,81,96,254,144,255,178,70,144,212,107,170,131,137,191,153,247,101,246,83,7,133,86,44,26,156,204,122,129,215,162,45,163,200,115,184,22,30,99,26,186,24,3,207,72,150,165,28,176,16,14,243,119,143,37,74,68,146,177,221,99,52,112,142,58,149,204,112,51,205,102,241,108,101,47,157,25,132,74,126,28,52,39,90,126,196,25,74,85,133,134,148,146,232,78,46,205,82,213,9,248,103,38,197,33,29,149,92,16,13,134,225,132,73,198,97,199,134,215,121,134,118,237,74,147,61,120,53,180,126,40,239,83,183,216,222,168,106,159,85,111,207,36,112,4,194,215,163,70,141,183,157,58,180,21,67,167,225,9,241,209,129,80,105,167,13,172,248,55,193,13,249,143,44,184,74,234,204,50,169,253,196,132,110,97,30,24,26,255,36,127,239,1,7,84,106,42,92,14,93,255,254,237,98,223,50,109,37,74,207,117,204,241,145,149,73,209,247,193,151,87,186,159,18,174,252,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5cacbc39-30b4-4a81-96b8-4533327f7a02"));
		}

		#endregion

	}

	#endregion

}

