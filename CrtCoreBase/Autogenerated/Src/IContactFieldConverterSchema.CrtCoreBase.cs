namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IContactFieldConverterSchema

	/// <exclude/>
	public class IContactFieldConverterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IContactFieldConverterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IContactFieldConverterSchema(IContactFieldConverterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e41c16cf-8b54-48e0-a08f-2fb93df528b9");
			Name = "IContactFieldConverter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e0bd8020-de17-4815-83cd-c2dac7bbc324");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,203,106,195,48,16,60,59,144,127,88,220,75,114,177,238,121,248,82,72,201,161,37,144,222,74,15,170,178,118,12,182,108,36,185,16,66,254,189,43,69,126,36,141,137,193,135,149,119,102,103,118,88,201,11,212,21,23,8,159,168,20,215,101,98,162,215,82,38,89,90,43,110,178,82,194,121,58,9,232,123,81,152,218,231,86,26,84,9,17,22,176,37,160,225,194,108,50,204,15,84,255,162,162,222,116,66,104,198,24,172,116,93,20,92,157,98,255,246,104,8,55,117,158,131,36,225,16,18,75,5,209,112,163,134,202,122,220,170,254,201,51,1,89,35,60,168,27,156,157,118,107,117,167,202,138,90,25,234,5,236,220,144,107,255,222,220,160,59,141,21,167,20,74,5,226,72,133,32,21,13,156,98,58,69,237,156,190,211,192,194,190,190,97,223,242,108,120,65,144,162,89,186,66,251,226,226,141,162,60,92,189,222,26,127,71,115,44,15,99,92,111,72,227,198,177,81,153,76,65,161,169,149,212,132,71,4,161,48,89,135,126,191,125,90,132,44,166,48,181,225,82,224,192,30,238,143,221,161,112,115,215,161,155,30,255,87,138,86,204,193,58,150,151,142,159,75,175,88,131,181,228,14,4,111,104,186,215,204,175,100,85,231,203,39,81,60,21,109,147,121,176,202,200,40,52,77,28,181,221,64,48,15,67,236,39,225,23,238,82,248,32,236,172,151,15,57,152,187,51,186,191,33,127,87,183,103,117,249,3,187,159,223,115,227,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e41c16cf-8b54-48e0-a08f-2fb93df528b9"));
		}

		#endregion

	}

	#endregion

}

