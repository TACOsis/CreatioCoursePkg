namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoOpenIdProviderQueryExecutorSchema

	/// <exclude/>
	public class SsoOpenIdProviderQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoOpenIdProviderQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoOpenIdProviderQueryExecutorSchema(SsoOpenIdProviderQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9c5a8959-a182-473a-b083-85bc786758d3");
			Name = "SsoOpenIdProviderQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e5aa7639-5b66-4d72-9308-0563d89b2353");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,81,193,74,195,64,16,61,183,208,127,24,226,37,129,146,15,136,120,105,173,208,139,86,170,94,196,195,54,153,132,133,56,27,102,103,197,16,252,119,39,137,69,35,214,222,102,222,190,121,239,205,44,153,87,244,141,201,17,30,144,217,120,87,74,186,118,84,218,42,176,17,235,40,221,123,183,71,17,75,149,95,204,187,197,124,22,188,214,19,58,227,229,9,60,221,144,88,177,232,79,18,110,76,46,142,71,134,114,46,24,43,117,133,117,109,188,207,64,205,239,26,164,109,177,99,247,102,11,228,251,128,220,110,222,49,15,58,53,76,60,95,99,105,66,45,43,75,133,234,199,210,54,232,202,120,59,56,183,19,126,178,132,91,221,23,174,32,250,95,56,74,94,84,217,146,32,147,169,33,239,195,156,201,2,25,172,140,71,37,61,89,150,96,234,227,209,126,37,158,117,67,234,239,69,29,121,225,208,31,65,247,221,133,67,109,243,145,209,12,245,25,219,248,209,35,171,6,97,222,255,22,132,73,155,244,58,179,12,14,154,44,158,62,45,255,184,65,244,19,60,230,143,18,232,62,190,50,35,21,99,236,161,31,209,41,168,216,39,97,210,172,67,83,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9c5a8959-a182-473a-b083-85bc786758d3"));
		}

		#endregion

	}

	#endregion

}

