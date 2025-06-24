namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WebhookColumnMapSchema

	/// <exclude/>
	public class WebhookColumnMapSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WebhookColumnMapSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WebhookColumnMapSchema(WebhookColumnMapSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8640abaf-c1c2-47ff-a168-5310c87cef25");
			Name = "WebhookColumnMap";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fe674b36-6b4e-4761-be68-f76112863a49");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,146,193,74,196,48,16,134,207,91,232,59,12,236,189,185,187,226,165,136,39,61,9,158,103,219,73,54,152,76,66,146,34,75,241,221,77,82,139,91,117,15,98,46,67,126,38,223,124,9,97,180,20,61,14,4,207,20,2,70,39,83,215,59,150,90,77,1,147,118,220,54,115,219,180,13,228,181,15,164,114,2,189,193,24,111,224,133,142,39,231,94,123,103,38,203,143,232,215,54,33,4,220,198,201,90,12,231,187,175,40,83,19,106,142,144,78,4,22,189,215,172,192,56,165,7,144,46,212,244,109,33,194,80,145,192,217,13,144,71,32,78,58,157,47,227,238,98,148,216,206,242,211,209,100,230,80,36,127,113,44,45,243,82,174,200,174,241,3,165,8,217,44,150,90,244,170,143,147,27,85,169,201,140,221,55,158,248,9,252,180,138,41,148,107,111,180,158,10,118,6,69,233,80,102,29,224,125,125,201,255,8,110,222,236,207,130,247,245,244,117,191,93,117,220,237,137,199,229,83,148,109,206,62,0,85,242,234,71,79,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8640abaf-c1c2-47ff-a168-5310c87cef25"));
		}

		#endregion

	}

	#endregion

}

