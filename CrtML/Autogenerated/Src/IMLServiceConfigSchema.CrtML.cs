namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLServiceConfigSchema

	/// <exclude/>
	public class IMLServiceConfigSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLServiceConfigSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLServiceConfigSchema(IMLServiceConfigSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8a29f714-7093-46e2-bff1-7dfd2aecc270");
			Name = "IMLServiceConfig";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b54cb82a-9c72-40e4-855f-14a0ef44684e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,81,221,106,131,48,20,190,174,224,59,28,188,89,7,195,60,192,172,55,189,216,4,133,65,125,129,52,61,105,195,52,145,147,164,32,163,239,190,68,221,134,101,219,85,72,242,253,157,239,104,222,163,29,184,64,104,145,136,91,35,93,190,55,90,170,179,39,238,148,209,121,83,167,201,71,154,108,188,85,250,12,135,209,58,236,159,211,36,188,12,254,216,41,1,74,59,36,25,37,170,166,62,32,93,149,192,89,34,96,34,115,195,24,131,194,250,190,231,52,150,95,15,251,11,138,119,80,18,236,76,1,177,216,226,9,164,33,176,166,187,70,71,119,65,56,171,43,234,32,129,1,69,40,119,89,83,191,145,57,118,216,183,227,128,25,43,243,111,27,118,239,83,12,156,120,15,58,12,186,203,134,31,86,117,202,202,69,4,92,184,231,5,155,144,191,19,69,76,219,18,87,58,100,202,202,74,66,33,74,71,30,11,38,74,152,126,109,28,70,185,7,123,63,137,91,104,43,135,163,49,29,84,118,213,87,100,108,95,188,58,193,42,231,19,76,224,85,4,216,129,228,157,197,199,121,21,255,84,60,197,10,37,18,134,100,97,95,168,45,130,51,224,195,209,212,176,4,248,163,192,201,248,149,219,122,230,109,163,221,230,150,38,55,248,4,79,92,190,89,57,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8a29f714-7093-46e2-bff1-7dfd2aecc270"));
		}

		#endregion

	}

	#endregion

}

