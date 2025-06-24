namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLBatchNumericPredictorSchema

	/// <exclude/>
	public class MLBatchNumericPredictorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLBatchNumericPredictorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLBatchNumericPredictorSchema(MLBatchNumericPredictorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0aff8371-c82b-4302-bc26-bde1d1357452");
			Name = "MLBatchNumericPredictor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,93,107,227,48,16,124,118,161,255,97,241,189,228,160,216,239,109,154,135,203,193,17,104,142,112,109,127,128,98,173,99,129,45,25,125,228,200,133,254,247,91,73,182,19,59,184,20,252,224,93,121,102,118,70,107,201,26,52,45,43,16,222,80,107,102,84,105,179,181,146,165,56,56,205,172,80,50,219,190,220,223,157,239,239,18,103,132,60,192,235,201,88,108,158,134,122,173,52,82,69,117,158,231,176,52,174,105,152,62,173,186,122,93,51,99,160,84,26,246,204,22,21,180,26,185,40,172,210,6,108,197,44,84,236,136,125,147,180,64,163,113,181,5,85,18,19,34,20,26,203,231,148,43,183,175,49,205,87,96,79,45,102,189,84,62,209,242,8,86,27,213,161,230,237,208,243,195,79,179,235,135,57,71,83,217,207,32,244,145,66,238,57,91,42,68,1,69,176,208,65,126,187,6,181,40,6,36,60,194,148,108,25,199,245,12,231,144,75,242,77,227,193,155,163,57,140,213,46,216,127,132,157,86,22,11,139,60,126,52,77,47,52,54,82,88,193,106,241,15,13,48,144,248,23,4,81,48,73,183,69,17,217,10,175,99,154,25,209,231,22,60,100,131,76,62,213,89,182,76,179,6,36,237,194,115,234,12,106,26,85,98,184,146,116,245,70,50,190,7,197,208,204,150,121,64,4,130,182,55,50,23,210,226,125,196,8,99,129,239,148,225,158,25,92,76,219,126,231,146,143,46,66,148,60,166,56,142,116,139,182,82,252,139,105,190,210,178,153,144,218,205,198,125,53,155,70,113,172,227,62,197,96,66,195,39,67,157,81,42,55,80,148,86,216,211,134,71,92,172,64,112,255,82,10,212,159,131,143,172,118,152,174,118,55,127,74,56,152,185,14,117,164,95,128,20,224,168,4,15,238,47,248,63,1,190,216,190,108,47,142,224,202,221,3,252,114,4,234,135,126,240,204,73,18,87,59,138,118,23,148,92,56,189,130,206,198,58,139,43,206,140,120,174,53,178,160,189,233,54,250,221,159,14,122,157,198,211,252,14,80,151,158,255,75,15,134,109,191,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0aff8371-c82b-4302-bc26-bde1d1357452"));
		}

		#endregion

	}

	#endregion

}

