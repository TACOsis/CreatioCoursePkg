namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IRemindingTextFormerSchema

	/// <exclude/>
	public class IRemindingTextFormerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IRemindingTextFormerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IRemindingTextFormerSchema(IRemindingTextFormerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("734bc083-96cd-481d-a4cd-ea2b71a900a5");
			Name = "IRemindingTextFormer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1a637eec-ed5e-4e5a-93be-edcf08166986");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,82,75,79,195,48,12,62,175,210,254,131,53,46,32,161,246,14,101,7,94,83,111,19,236,15,164,173,59,140,154,164,114,82,160,66,251,239,56,25,43,229,113,128,19,71,199,223,203,118,140,210,232,58,85,33,108,144,89,57,219,248,244,202,154,134,182,61,43,79,214,192,60,121,157,39,179,222,145,217,194,253,224,60,106,1,180,45,86,161,235,210,21,26,100,170,206,71,204,84,135,49,189,49,158,60,161,19,128,64,142,24,183,65,180,48,30,185,17,219,51,40,238,80,147,169,133,186,193,23,127,107,89,35,71,108,150,101,144,187,94,107,197,195,242,189,94,179,125,162,26,29,208,65,0,26,203,192,7,9,240,162,17,158,68,196,165,7,145,108,162,210,245,101,75,213,132,255,179,255,44,12,253,45,66,124,88,161,159,24,150,182,30,162,107,10,35,35,251,74,201,59,197,74,131,145,101,95,44,66,186,117,168,81,34,184,197,242,154,226,42,5,15,207,228,31,98,250,160,220,141,152,52,207,98,17,245,156,231,208,149,20,151,98,125,92,124,208,243,125,235,20,108,249,40,231,89,194,103,167,147,112,163,217,47,199,146,163,181,248,79,115,109,130,247,95,7,219,237,255,23,154,122,255,197,230,201,238,13,170,249,18,143,220,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("734bc083-96cd-481d-a4cd-ea2b71a900a5"));
		}

		#endregion

	}

	#endregion

}

