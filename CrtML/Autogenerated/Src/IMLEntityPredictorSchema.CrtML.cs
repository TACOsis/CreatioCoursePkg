namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLEntityPredictorSchema

	/// <exclude/>
	public class IMLEntityPredictorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLEntityPredictorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLEntityPredictorSchema(IMLEntityPredictorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4f591c48-2aae-4f89-af89-1090bb3a3146");
			Name = "IMLEntityPredictor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,209,74,195,64,16,124,182,208,127,88,250,164,80,146,15,176,13,136,138,20,90,8,180,126,192,53,217,216,211,228,46,236,238,169,69,252,119,239,146,158,70,227,67,33,15,55,119,51,179,179,67,140,106,144,91,85,32,236,144,72,177,173,36,185,181,166,210,79,142,148,104,107,146,205,122,58,249,152,78,46,28,107,243,4,219,35,11,54,215,223,120,168,34,76,114,178,5,50,255,182,240,108,207,79,211,20,22,236,154,70,209,49,59,225,149,17,164,42,76,175,44,65,75,88,234,34,40,64,153,18,88,189,134,9,114,192,225,11,33,187,90,64,27,64,35,90,142,73,180,78,7,222,173,219,215,186,240,164,104,191,218,172,239,59,122,222,59,89,242,172,176,213,40,86,119,113,98,113,204,129,124,78,140,113,142,254,166,85,164,26,48,190,233,229,172,177,37,214,171,114,150,237,188,95,7,64,151,193,162,210,72,201,34,237,184,255,75,251,65,81,219,163,179,197,63,209,31,25,105,167,248,101,150,133,19,136,63,194,155,150,195,112,59,124,23,82,208,233,121,236,75,40,142,12,103,249,223,58,60,53,190,5,178,221,63,99,33,177,204,27,83,110,125,147,151,15,78,151,112,170,97,14,29,138,155,205,97,179,190,83,162,242,81,88,24,231,135,37,24,87,215,87,225,95,252,156,78,252,247,5,181,170,53,26,204,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4f591c48-2aae-4f89-af89-1090bb3a3146"));
		}

		#endregion

	}

	#endregion

}

