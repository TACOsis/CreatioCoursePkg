namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TermCalculationLogStoreLoaderSchema

	/// <exclude/>
	public class TermCalculationLogStoreLoaderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TermCalculationLogStoreLoaderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TermCalculationLogStoreLoaderSchema(TermCalculationLogStoreLoaderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e278331b-3fd3-439e-9087-7f82e26e675d");
			Name = "TermCalculationLogStoreLoader";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("28322dfd-15f8-434e-b343-12da0b1a75f6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,82,75,75,195,64,16,62,167,208,255,48,212,75,11,146,220,53,233,165,7,17,138,150,214,199,81,214,237,52,93,72,118,195,204,110,165,74,255,187,155,77,125,52,146,160,120,10,59,223,204,124,143,137,22,37,114,37,36,194,29,18,9,54,27,27,207,140,222,168,220,145,176,202,232,225,224,109,56,136,28,43,157,159,180,16,94,118,212,227,149,109,80,143,39,73,2,41,187,178,20,180,159,30,223,75,172,8,25,181,101,40,140,88,35,129,217,128,69,42,65,138,66,186,34,208,122,40,103,224,122,83,252,177,39,249,182,168,114,207,133,146,32,11,193,92,243,151,179,175,217,185,201,131,132,121,216,238,155,107,7,81,69,106,39,44,2,161,88,27,93,236,225,158,145,188,85,141,50,16,62,185,147,119,163,63,58,35,204,107,212,3,108,201,73,191,151,47,96,17,216,155,142,182,197,80,184,214,202,42,81,168,87,100,208,248,2,202,79,11,237,83,246,86,83,70,4,73,184,201,70,189,194,71,201,52,254,36,72,218,12,105,37,72,148,160,253,253,178,145,147,163,105,154,132,74,104,56,166,211,187,126,220,242,239,228,4,66,80,81,43,9,200,60,86,31,59,58,28,51,65,189,110,98,57,205,104,65,166,66,178,10,127,147,80,80,194,157,167,239,112,222,111,172,89,122,116,145,163,133,44,12,253,112,20,175,144,217,127,103,66,110,49,126,84,118,59,55,94,64,253,244,191,243,120,210,12,69,241,21,218,7,81,56,76,59,248,166,227,14,32,62,173,5,158,27,127,169,73,136,49,226,255,75,91,161,189,165,37,150,102,135,65,226,95,149,156,195,174,30,155,244,220,213,87,15,239,52,0,121,85,31,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e278331b-3fd3-439e-9087-7f82e26e675d"));
		}

		#endregion

	}

	#endregion

}

