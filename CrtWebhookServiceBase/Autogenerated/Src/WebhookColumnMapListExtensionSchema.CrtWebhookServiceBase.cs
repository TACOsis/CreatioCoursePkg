namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookColumnMapListExtensionSchema

	/// <exclude/>
	public class WebhookColumnMapListExtensionSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookColumnMapListExtensionSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookColumnMapListExtensionSchema(WebhookColumnMapListExtensionSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4758cf44-9a3d-4b34-85fb-dd216e52e4af");
			Name = "WebhookColumnMapListExtension";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fe674b36-6b4e-4761-be68-f76112863a49");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,83,203,110,219,48,16,60,203,128,255,97,235,94,108,192,144,238,245,227,162,58,69,128,164,9,146,0,57,211,210,202,102,75,145,10,151,74,99,4,249,247,174,72,11,209,35,105,117,32,168,125,204,204,206,74,90,148,72,149,200,16,30,208,90,65,166,112,113,106,116,33,15,181,21,78,26,61,157,188,78,39,211,73,84,147,212,7,184,63,145,195,114,53,120,231,14,165,48,107,202,41,254,129,26,173,204,70,53,87,82,63,173,26,40,224,231,171,197,3,87,67,170,4,209,55,120,196,253,209,152,223,12,83,151,250,90,84,87,146,220,238,197,161,38,175,32,244,36,73,2,107,170,203,82,216,211,246,61,196,106,157,144,154,0,219,6,2,83,128,59,34,80,133,153,44,36,230,35,2,80,204,16,119,112,147,62,112,85,239,149,204,128,28,123,144,65,214,168,252,159,200,40,248,20,181,163,93,163,59,154,156,135,187,245,88,33,57,152,33,4,238,176,82,188,1,242,154,75,22,103,246,191,216,77,144,218,71,62,211,126,70,75,134,112,235,74,88,81,130,230,205,110,102,12,87,97,126,33,81,229,52,219,62,4,2,142,64,225,67,241,58,241,213,31,55,163,118,210,157,2,241,79,142,204,182,205,217,186,27,178,144,249,244,191,129,254,116,71,24,35,157,211,31,65,245,23,241,108,100,222,218,53,119,71,73,208,44,97,61,116,104,11,221,177,151,220,109,155,15,113,56,206,178,33,136,206,201,145,196,5,188,250,252,200,126,124,97,78,190,220,132,45,109,122,100,241,133,180,228,110,236,119,44,68,173,220,188,147,131,141,159,168,101,140,119,79,181,80,212,173,136,31,135,34,150,99,93,65,117,20,221,123,148,212,148,108,150,36,163,227,75,253,204,55,161,93,202,196,181,197,203,131,54,22,83,65,184,88,172,124,147,44,96,62,80,255,101,3,186,86,170,29,54,234,167,227,221,192,50,158,118,232,98,128,126,107,206,183,243,31,128,58,15,63,129,127,15,209,126,144,99,127,1,189,5,147,88,122,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4758cf44-9a3d-4b34-85fb-dd216e52e4af"));
		}

		#endregion

	}

	#endregion

}

