namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookServiceIntegrationInstallScriptSchema

	/// <exclude/>
	public class WebhookServiceIntegrationInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookServiceIntegrationInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookServiceIntegrationInstallScriptSchema(WebhookServiceIntegrationInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3e37f168-6c97-4719-98a1-60f065e8e0d4");
			Name = "WebhookServiceIntegrationInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b87a5b49-8965-4e3b-9f48-2dc1c2176364");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,193,110,219,48,12,61,187,64,255,65,245,46,14,16,248,3,218,173,192,154,54,69,14,29,6,120,89,207,138,204,56,218,100,201,144,104,111,65,144,127,31,45,201,105,98,184,219,142,34,249,30,31,201,103,51,166,121,13,174,225,2,216,55,176,150,59,179,197,124,97,244,86,86,173,229,40,141,190,190,58,92,95,37,173,147,186,98,197,222,33,212,148,87,10,68,159,116,249,51,104,176,82,220,157,106,206,105,44,188,23,207,159,52,74,148,224,168,128,74,62,88,168,136,142,45,20,119,238,150,189,194,102,103,204,207,2,108,39,5,172,52,66,21,196,172,180,67,174,84,33,172,108,208,35,155,118,163,164,96,162,7,254,39,142,221,178,213,69,224,233,55,136,22,141,101,7,79,121,82,243,2,184,51,37,233,249,106,101,199,17,66,182,9,15,70,4,72,157,59,35,75,182,110,74,10,125,161,93,46,37,168,50,91,59,176,180,69,29,182,196,218,139,231,156,160,182,95,9,244,59,216,247,168,89,223,58,73,18,191,149,125,33,118,80,243,23,174,121,5,54,86,93,198,62,141,40,243,9,224,221,25,99,36,33,220,4,27,221,16,67,217,131,23,147,189,233,154,143,250,204,2,169,160,203,227,48,133,81,229,119,174,90,32,242,52,30,128,197,11,164,19,229,26,126,157,202,23,22,250,243,176,105,88,199,135,225,73,64,41,189,223,8,69,4,236,81,122,57,220,238,63,6,218,57,51,155,31,164,241,62,46,50,57,176,180,31,32,157,191,233,59,250,204,49,144,203,45,203,110,2,123,190,4,20,187,165,53,245,227,67,54,110,56,155,69,66,11,216,90,29,192,129,41,162,11,64,250,32,218,90,251,46,217,208,118,152,51,174,108,40,230,29,100,91,174,92,140,31,163,227,64,151,193,116,239,57,208,219,60,26,48,88,222,27,47,88,23,254,110,184,193,93,99,151,142,109,153,210,3,185,192,52,106,254,103,61,253,15,62,151,181,212,107,45,7,208,196,64,49,118,30,58,254,1,94,37,251,213,121,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3e37f168-6c97-4719-98a1-60f065e8e0d4"));
		}

		#endregion

	}

	#endregion

}

