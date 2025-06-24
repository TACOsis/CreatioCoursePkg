namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotMsgChannelSenderSchema

	/// <exclude/>
	public class ICopilotMsgChannelSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotMsgChannelSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotMsgChannelSenderSchema(ICopilotMsgChannelSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248");
			Name = "ICopilotMsgChannelSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,144,207,106,132,48,16,198,207,43,236,59,12,158,90,40,250,0,221,122,241,80,60,44,44,216,62,64,154,140,26,208,68,242,103,203,82,250,238,157,68,93,214,181,148,94,116,50,204,252,230,251,62,197,6,180,35,227,8,165,65,230,164,206,74,61,202,94,187,125,242,181,79,118,222,74,213,66,125,177,14,135,231,125,66,157,60,207,225,96,253,48,48,115,41,230,119,165,28,154,38,64,26,109,192,162,18,97,139,192,150,181,104,129,7,50,10,16,222,132,62,215,234,140,198,134,99,10,62,165,235,96,62,153,45,248,252,134,63,250,143,94,114,144,215,19,213,60,125,180,109,217,49,165,176,175,233,32,26,154,13,138,55,2,99,35,140,88,112,29,194,200,140,3,221,196,122,165,196,105,224,189,68,21,101,108,117,76,29,218,102,3,40,10,237,37,229,147,14,18,225,78,4,77,139,183,27,60,91,193,179,67,30,55,35,232,172,165,136,130,142,115,64,15,229,154,4,119,228,199,41,249,191,156,89,66,5,19,163,209,173,161,250,191,30,150,249,180,56,205,21,37,221,232,149,222,205,146,183,104,42,145,22,239,244,7,41,40,50,217,72,52,191,155,172,39,101,11,126,241,122,215,190,10,127,130,87,79,155,211,137,96,124,247,29,204,211,231,7,49,16,155,141,170,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248"));
		}

		#endregion

	}

	#endregion

}

