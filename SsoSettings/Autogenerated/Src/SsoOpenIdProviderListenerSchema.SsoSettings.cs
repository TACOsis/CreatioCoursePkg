namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoOpenIdProviderListenerSchema

	/// <exclude/>
	public class SsoOpenIdProviderListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoOpenIdProviderListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoOpenIdProviderListenerSchema(SsoOpenIdProviderListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0e352bac-7906-43be-bbc2-e3ef9f8320df");
			Name = "SsoOpenIdProviderListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e5aa7639-5b66-4d72-9308-0563d89b2353");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,143,65,75,195,64,16,133,207,13,228,63,44,241,146,92,242,3,34,94,44,61,8,98,11,17,47,226,97,155,76,227,66,58,27,102,102,11,37,248,223,29,55,41,53,10,122,219,157,121,243,190,247,208,30,129,7,219,128,121,6,34,203,254,32,229,218,227,193,117,129,172,56,143,101,205,190,6,17,135,29,167,201,152,38,171,192,250,94,200,9,202,13,138,19,7,92,110,78,128,194,183,105,162,202,27,130,78,45,204,186,183,204,149,81,167,237,0,248,208,238,200,159,92,11,20,181,143,142,5,16,40,94,188,70,159,243,98,145,215,205,59,28,237,147,38,53,119,38,251,229,146,21,111,122,57,132,125,239,26,211,124,161,254,33,85,230,222,50,168,230,197,145,4,219,95,234,253,136,179,26,99,164,107,11,143,44,20,26,241,164,101,118,145,55,41,102,246,223,212,188,48,149,217,43,56,231,153,119,237,85,125,171,117,73,147,21,102,252,152,19,0,182,83,136,248,159,166,203,161,206,62,1,218,240,154,242,203,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0e352bac-7906-43be-bbc2-e3ef9f8320df"));
		}

		#endregion

	}

	#endregion

}

