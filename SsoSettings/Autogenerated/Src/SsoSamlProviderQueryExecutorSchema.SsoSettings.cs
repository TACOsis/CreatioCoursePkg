namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoSamlProviderQueryExecutorSchema

	/// <exclude/>
	public class SsoSamlProviderQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoSamlProviderQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoSamlProviderQueryExecutorSchema(SsoSamlProviderQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d060c889-2aac-495e-a695-19e1de3d1510");
			Name = "SsoSamlProviderQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e5aa7639-5b66-4d72-9308-0563d89b2353");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,81,77,75,195,64,16,61,167,208,255,48,196,75,2,37,63,32,226,165,31,66,47,90,169,122,17,15,219,100,18,22,182,187,97,118,86,12,193,255,238,36,177,148,168,237,109,230,237,155,55,239,205,90,117,68,223,168,2,225,25,137,148,119,21,103,43,103,43,93,7,82,172,157,205,246,222,237,145,89,219,218,207,103,221,124,22,5,47,245,132,78,120,123,1,207,54,150,53,107,244,23,9,247,170,96,71,35,67,56,55,132,181,108,133,149,81,222,231,32,203,31,27,180,219,114,71,238,67,151,72,79,1,169,221,124,98,17,100,106,152,120,91,99,165,130,225,165,182,165,232,39,220,54,232,170,100,59,108,110,39,252,116,1,15,146,23,238,32,238,83,169,163,249,87,54,78,223,69,87,91,70,178,202,64,209,91,129,107,3,144,195,82,121,20,202,171,38,14,202,156,14,246,203,109,212,13,142,207,33,157,245,76,161,63,128,100,221,133,131,209,197,200,104,134,250,234,210,228,197,35,137,130,197,162,255,39,8,147,54,237,85,162,28,14,226,43,153,62,45,254,164,143,207,208,201,121,156,66,247,245,227,22,109,57,26,30,250,17,157,130,130,125,3,155,195,120,36,73,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d060c889-2aac-495e-a695-19e1de3d1510"));
		}

		#endregion

	}

	#endregion

}

