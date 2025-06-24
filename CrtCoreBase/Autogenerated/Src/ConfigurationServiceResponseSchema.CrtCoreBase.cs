namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ConfigurationServiceResponseSchema

	/// <exclude/>
	public class ConfigurationServiceResponseSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ConfigurationServiceResponseSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ConfigurationServiceResponseSchema(ConfigurationServiceResponseSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("bbd217b6-97c9-4dc1-83e9-27fef9bede8a");
			Name = "ConfigurationServiceResponse";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bbd880ce-b4f0-465b-921f-c6a2e08aa5ce");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,83,193,110,194,48,12,61,7,137,127,136,196,133,73,83,63,128,137,203,24,154,118,0,33,202,109,218,33,11,110,23,173,36,149,227,176,49,196,191,47,161,133,180,29,67,59,237,22,199,239,61,251,217,137,22,27,176,165,144,192,87,128,40,172,201,40,153,24,157,169,220,161,32,101,116,191,183,239,247,152,179,74,231,60,221,89,130,205,93,39,78,150,78,147,218,64,146,2,42,81,168,175,35,47,162,162,240,220,169,0,218,42,9,51,179,134,34,121,16,36,124,53,66,33,41,18,166,136,6,159,116,102,248,184,213,21,66,139,125,34,38,103,188,151,240,34,207,77,213,23,127,81,186,215,66,73,46,11,97,45,111,153,171,229,150,126,4,70,91,224,35,126,47,236,57,244,212,253,81,145,13,16,114,15,15,100,75,232,36,25,180,35,190,56,234,86,136,186,198,53,245,225,13,15,163,100,44,117,82,130,111,101,204,189,22,4,223,236,240,119,149,233,167,132,50,36,56,156,4,227,213,152,183,244,6,160,215,85,235,109,31,11,52,37,32,41,184,236,34,234,197,83,85,201,2,213,167,134,139,76,20,182,42,203,216,169,205,148,4,185,144,76,129,218,119,195,173,40,28,220,212,248,230,174,61,244,28,182,80,135,95,44,49,214,52,53,3,122,51,107,239,168,172,29,85,233,218,211,86,33,57,81,240,78,131,63,219,187,48,95,4,114,168,185,134,143,46,125,223,112,49,241,143,50,44,32,121,4,90,237,74,191,239,100,238,127,215,109,5,153,249,89,137,188,2,212,231,58,227,165,228,251,10,195,31,12,201,24,86,222,79,251,188,232,38,142,175,53,188,235,30,34,233,223,219,239,60,200,227,78,15,223,217,37,24,101,132,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("bbd217b6-97c9-4dc1-83e9-27fef9bede8a"));
		}

		#endregion

	}

	#endregion

}

