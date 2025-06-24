namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLFilesModelTrainerSchema

	/// <exclude/>
	public class MLFilesModelTrainerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLFilesModelTrainerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLFilesModelTrainerSchema(MLFilesModelTrainerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7b54722e-e495-4420-8ab7-f2449124451a");
			Name = "MLFilesModelTrainer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("145716f7-775c-41a4-ac90-f77e940d760b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,146,193,106,227,64,12,134,207,41,244,29,68,122,113,160,216,247,52,201,97,91,90,2,113,41,221,236,105,89,130,98,203,201,128,61,99,52,227,93,218,208,119,95,205,216,9,182,73,193,7,143,70,255,175,111,36,105,172,200,214,152,17,108,137,25,173,41,92,252,104,116,161,14,13,163,83,70,199,233,230,246,230,116,123,51,105,172,210,135,65,22,211,195,55,241,248,25,51,103,88,145,149,12,201,249,253,68,5,54,165,251,161,116,46,217,145,251,168,201,20,209,58,221,164,38,167,114,203,168,52,241,236,30,94,5,7,150,144,110,132,193,58,27,191,227,225,141,205,190,164,106,43,146,217,31,241,170,155,125,169,50,200,74,180,86,18,159,85,73,182,239,50,135,161,171,72,78,1,98,114,199,116,144,23,65,240,230,198,19,218,57,188,5,191,54,35,73,18,88,216,166,170,144,63,86,231,192,90,43,167,176,84,159,100,1,65,211,63,80,162,71,45,61,51,5,184,35,137,132,8,50,166,98,57,189,2,52,77,86,45,109,124,41,145,140,107,44,106,100,172,64,203,243,151,211,198,18,11,163,166,204,15,96,186,218,74,9,31,131,236,18,140,23,73,80,92,55,168,124,245,118,138,173,58,4,188,188,55,215,190,67,215,211,43,240,209,175,1,12,12,217,238,207,189,110,139,65,175,240,204,251,78,230,176,71,75,209,88,213,207,131,211,87,55,30,210,121,59,161,225,184,82,114,71,147,251,73,177,113,226,64,121,123,95,159,143,96,254,202,246,169,156,64,22,42,112,63,161,195,141,193,92,122,246,200,132,142,70,209,72,170,6,62,38,215,176,14,67,237,30,223,75,218,141,177,119,61,238,120,157,207,252,250,79,190,190,165,9,157,249,153,29,169,66,121,3,230,226,28,150,233,124,24,83,236,170,238,226,133,164,243,40,235,25,119,127,116,145,12,16,124,212,243,14,64,70,109,148,168,124,255,1,196,33,142,38,231,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7b54722e-e495-4420-8ab7-f2449124451a"));
		}

		#endregion

	}

	#endregion

}

