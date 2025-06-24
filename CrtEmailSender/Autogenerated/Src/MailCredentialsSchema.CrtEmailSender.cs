namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MailCredentialsSchema

	/// <exclude/>
	public class MailCredentialsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MailCredentialsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MailCredentialsSchema(MailCredentialsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9fb91463-07a1-4af3-bf11-902a4739cfa3");
			Name = "MailCredentials";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,144,193,10,194,48,12,134,207,14,246,14,1,239,62,128,158,134,8,122,16,6,155,15,80,215,56,11,93,51,146,236,32,226,187,219,110,34,42,168,151,66,146,175,127,194,23,76,135,210,155,6,161,70,102,35,116,210,197,222,56,15,121,118,205,179,60,155,205,25,91,71,1,214,222,136,44,33,205,214,140,22,131,58,227,101,68,250,225,232,93,3,77,34,62,1,88,194,107,21,233,41,246,153,91,50,245,200,234,48,134,151,99,208,52,127,132,138,178,11,45,108,73,20,174,208,162,174,64,210,115,123,97,92,80,40,137,191,3,71,34,15,7,193,74,252,95,102,103,61,254,220,84,187,14,105,248,190,236,113,113,133,193,34,111,186,168,163,176,150,49,170,249,185,186,82,195,90,251,63,212,78,138,64,225,210,209,32,197,160,231,164,181,49,154,60,126,124,27,21,199,19,38,203,99,61,117,223,155,183,59,222,211,237,90,0,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9fb91463-07a1-4af3-bf11-902a4739cfa3"));
		}

		#endregion

	}

	#endregion

}

