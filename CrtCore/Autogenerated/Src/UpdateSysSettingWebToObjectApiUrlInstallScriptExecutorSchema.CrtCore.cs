namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSysSettingWebToObjectApiUrlInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateSysSettingWebToObjectApiUrlInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSysSettingWebToObjectApiUrlInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSysSettingWebToObjectApiUrlInstallScriptExecutorSchema(UpdateSysSettingWebToObjectApiUrlInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9564f345-428a-4286-97b5-b6825c5f7227");
			Name = "UpdateSysSettingWebToObjectApiUrlInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2c3f70d-d3a5-4d15-9bc6-62f67312edb1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,145,81,75,195,48,20,133,159,59,216,127,184,244,169,131,173,213,215,141,61,136,138,204,23,31,186,233,163,164,217,237,204,204,146,144,220,118,138,248,223,189,109,167,172,67,135,144,134,222,112,248,206,201,9,24,177,195,224,132,68,88,162,247,34,216,146,210,107,107,74,181,169,188,32,101,205,112,240,49,28,68,85,80,102,211,147,120,156,253,156,55,83,254,30,114,36,226,49,192,252,68,217,39,166,71,82,102,48,197,85,133,86,18,164,22,33,192,202,173,5,29,225,158,176,88,218,135,98,139,146,174,156,90,121,189,48,129,132,214,185,244,202,209,237,27,202,138,172,159,194,226,215,115,166,55,249,35,231,85,205,88,144,150,85,16,200,55,185,159,173,94,119,114,198,114,234,248,133,200,133,105,150,237,177,32,47,228,43,139,38,245,197,101,90,184,157,53,90,25,76,165,221,101,247,121,38,61,50,109,98,219,88,233,54,196,179,191,77,12,238,255,101,210,50,149,61,103,209,154,116,101,213,86,173,161,187,37,38,171,128,158,59,54,172,228,130,161,234,141,35,104,27,136,106,225,161,22,186,66,14,145,116,225,70,39,47,151,222,33,61,54,146,164,143,24,67,220,117,31,143,218,139,70,170,132,228,192,154,247,107,252,118,139,78,209,252,115,131,229,121,250,184,223,214,193,236,179,217,155,141,63,94,95,17,169,79,157,180,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9564f345-428a-4286-97b5-b6825c5f7227"));
		}

		#endregion

	}

	#endregion

}

