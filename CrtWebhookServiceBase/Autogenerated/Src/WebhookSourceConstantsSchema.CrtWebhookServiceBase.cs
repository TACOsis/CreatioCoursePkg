namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookSourceConstantsSchema

	/// <exclude/>
	public class WebhookSourceConstantsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookSourceConstantsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookSourceConstantsSchema(WebhookSourceConstantsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("5c4d12fa-2a84-42e8-8c1f-ddb1a7a5cd70");
			Name = "WebhookSourceConstants";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c57d96f3-f6a9-41c3-a651-44ed58ea0c9a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,145,177,106,195,48,16,134,231,24,252,14,71,178,219,123,210,22,74,32,83,135,130,11,153,47,138,236,138,70,167,160,147,82,76,200,187,247,100,87,110,218,161,224,73,214,201,223,255,253,150,9,173,230,51,42,13,111,218,123,100,215,134,106,235,168,53,93,244,24,140,163,178,184,150,197,34,178,161,14,154,158,131,182,155,178,144,73,93,215,240,192,209,90,244,253,211,247,94,192,128,134,24,62,245,225,221,185,15,96,23,189,68,179,246,23,35,171,114,196,1,41,112,149,3,234,187,132,115,60,156,140,2,117,66,102,216,143,9,205,16,176,205,156,188,117,29,236,139,149,215,157,180,131,233,104,13,175,3,63,30,255,109,55,12,246,191,91,181,206,195,11,210,81,190,204,84,19,116,223,104,170,148,36,192,193,167,75,200,8,60,194,114,194,149,179,203,205,60,181,140,210,106,103,168,5,217,9,145,204,137,78,207,255,90,155,31,27,82,159,255,202,12,225,179,80,34,203,146,149,166,227,120,239,195,254,86,22,183,47,223,120,218,72,64,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("5c4d12fa-2a84-42e8-8c1f-ddb1a7a5cd70"));
		}

		#endregion

	}

	#endregion

}

