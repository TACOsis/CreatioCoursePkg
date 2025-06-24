namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookServiceConstantsSchema

	/// <exclude/>
	public class WebhookServiceConstantsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookServiceConstantsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookServiceConstantsSchema(WebhookServiceConstantsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3cc6351f-388a-4694-ba6f-4b149818986c");
			Name = "WebhookServiceConstants";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e50fad81-60b2-4030-89a7-8b387fd6a892");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,148,93,111,219,32,20,134,175,27,41,255,1,117,215,36,177,177,129,172,235,164,0,246,213,52,85,77,171,93,83,231,56,181,234,224,8,112,163,170,234,127,31,118,62,150,45,218,210,245,206,28,159,151,231,209,193,198,232,21,184,181,46,0,221,129,181,218,53,165,31,201,198,148,213,178,181,218,87,141,25,14,94,135,131,139,214,85,102,137,230,47,206,195,234,106,56,8,149,79,22,150,225,53,146,181,118,238,51,250,1,15,143,77,243,52,7,251,92,21,16,118,112,94,27,239,250,214,241,120,140,190,184,118,181,210,246,229,235,110,29,58,188,174,140,67,155,109,16,185,109,18,21,251,232,104,159,28,31,69,215,237,67,93,21,168,232,160,127,103,94,188,246,220,19,112,95,184,123,4,180,104,12,252,34,123,237,91,119,232,63,198,29,120,221,222,161,209,118,83,80,33,188,71,247,81,116,141,46,153,36,52,225,89,130,115,33,34,156,196,60,197,60,143,37,86,74,229,138,40,150,79,114,117,121,117,70,171,212,85,13,139,15,139,229,125,252,68,45,166,52,99,60,227,152,138,148,225,36,154,18,44,56,149,152,199,138,170,201,148,208,72,205,254,169,38,45,104,15,14,25,216,252,225,54,122,191,220,119,216,156,152,69,105,66,5,165,12,11,194,102,56,81,50,193,83,145,77,113,36,51,65,102,147,56,37,36,62,59,180,181,109,10,112,253,247,249,187,220,252,253,114,55,135,61,78,28,21,139,149,146,97,112,146,202,112,176,41,75,240,140,134,115,230,92,133,103,70,164,136,162,243,142,122,9,232,254,246,27,42,43,168,23,255,49,181,155,16,188,183,117,222,197,58,155,221,250,44,208,66,25,126,103,176,31,130,222,238,194,199,224,163,218,14,254,182,189,6,192,44,182,55,65,183,12,181,159,107,95,136,105,81,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3cc6351f-388a-4694-ba6f-4b149818986c"));
		}

		#endregion

	}

	#endregion

}

