namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailHashDTOSchema

	/// <exclude/>
	public class EmailHashDTOSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailHashDTOSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailHashDTOSchema(EmailHashDTOSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d659f6d2-cdbc-4628-8188-da882d020fa0");
			Name = "EmailHashDTO";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5e01e2a5-733f-47cc-a4c2-452cdff090f0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,145,49,79,195,48,16,133,231,70,202,127,56,169,123,179,211,138,129,22,9,38,42,53,19,219,37,185,4,87,177,29,249,236,33,173,248,239,92,108,26,1,66,148,46,150,238,221,231,247,172,103,131,154,120,192,154,160,36,231,144,109,235,87,91,107,90,213,5,135,94,89,147,103,231,60,203,179,69,96,101,58,56,140,236,73,175,163,178,116,212,9,0,219,30,153,239,224,81,163,234,159,144,223,118,229,75,220,15,161,234,85,13,245,180,254,177,93,36,207,217,98,239,236,64,206,43,18,159,125,186,150,128,162,40,96,195,65,107,116,227,253,69,136,94,192,100,26,104,208,211,106,6,139,175,228,103,252,78,136,82,105,130,131,240,211,0,103,232,200,175,229,190,28,239,215,99,66,117,164,218,255,29,194,222,197,118,18,123,99,66,101,155,241,95,246,15,2,222,250,250,75,73,224,165,131,147,53,87,218,154,154,122,21,234,217,180,118,30,126,203,92,138,113,250,188,56,39,245,187,40,218,7,66,183,204,133,94,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d659f6d2-cdbc-4628-8188-da882d020fa0"));
		}

		#endregion

	}

	#endregion

}

