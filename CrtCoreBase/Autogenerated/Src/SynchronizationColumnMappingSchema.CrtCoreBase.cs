namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SynchronizationColumnMappingSchema

	/// <exclude/>
	public class SynchronizationColumnMappingSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SynchronizationColumnMappingSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SynchronizationColumnMappingSchema(SynchronizationColumnMappingSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ceda90a8-7b55-4117-960b-9e514c386e94");
			Name = "SynchronizationColumnMapping";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,65,110,195,32,16,69,215,177,228,59,140,148,189,189,111,170,110,220,118,151,110,210,11,80,140,29,36,51,160,25,168,228,84,189,123,9,56,174,29,85,105,118,204,48,159,255,248,128,194,40,118,66,42,120,87,68,130,109,231,171,198,98,167,251,64,194,107,139,213,11,122,237,199,195,136,242,72,22,245,41,117,203,226,171,44,202,98,179,37,213,199,18,154,65,48,63,192,213,84,99,135,96,112,47,156,211,216,167,249,186,174,225,145,131,49,130,198,167,169,142,118,94,104,100,224,181,26,100,146,131,201,122,208,216,89,50,25,234,114,84,189,56,203,133,143,65,75,144,103,148,127,72,54,153,126,198,223,43,127,180,109,188,192,171,86,67,203,121,243,154,53,53,14,54,80,12,107,66,195,152,94,53,207,46,97,46,52,236,233,204,158,101,153,226,45,138,118,55,44,158,21,123,141,171,8,238,246,89,104,239,51,203,83,240,41,134,160,56,218,25,39,226,187,91,186,237,246,103,186,205,44,134,223,229,228,189,85,216,230,172,83,253,157,63,207,170,25,123,63,169,182,160,65,141,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ceda90a8-7b55-4117-960b-9e514c386e94"));
		}

		#endregion

	}

	#endregion

}

