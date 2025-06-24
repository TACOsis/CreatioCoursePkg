namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotParametrizedActionResponseProviderSchema

	/// <exclude/>
	public class ICopilotParametrizedActionResponseProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotParametrizedActionResponseProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotParametrizedActionResponseProviderSchema(ICopilotParametrizedActionResponseProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0f550306-ffed-4a2f-96af-6009daaa7f5c");
			Name = "ICopilotParametrizedActionResponseProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c57b9697-4890-481a-8f98-2e9a2e48aaa1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,83,77,107,194,64,16,61,43,248,31,134,244,210,130,36,119,141,1,177,180,120,40,136,253,184,175,201,68,183,152,221,48,187,145,90,233,127,239,100,243,81,147,90,218,66,8,153,217,247,222,204,188,217,40,145,161,201,69,140,176,32,20,86,106,127,161,115,185,215,118,52,60,141,134,131,194,72,181,133,199,163,177,152,77,219,184,7,245,31,208,138,68,88,241,133,120,66,34,97,116,106,25,67,88,230,249,185,34,220,74,173,96,169,44,82,202,53,39,176,172,37,86,130,184,17,75,242,29,147,121,204,218,106,205,109,105,101,112,69,250,32,19,164,209,144,21,130,32,128,208,20,89,38,232,24,213,113,13,48,96,119,8,84,179,64,167,46,206,43,93,116,194,32,156,50,224,27,198,69,249,229,55,146,193,153,102,94,108,246,50,6,217,52,249,175,30,7,39,215,103,59,42,59,179,211,137,153,192,202,169,86,135,253,41,92,98,141,182,32,101,46,116,221,204,228,183,220,160,79,14,29,3,20,179,102,94,97,144,22,90,41,116,61,122,209,92,241,48,198,10,21,183,182,132,6,17,98,194,116,230,61,119,209,65,4,246,152,163,31,6,78,242,114,133,202,199,91,52,49,201,220,106,250,173,70,109,224,188,79,251,83,177,214,140,23,177,47,240,30,45,127,122,209,93,161,170,101,218,157,176,108,209,5,243,224,80,18,190,139,215,224,168,217,30,24,222,169,218,50,176,57,41,161,85,18,184,222,234,124,27,13,233,186,235,27,116,77,31,67,41,49,248,97,110,232,251,55,134,114,156,176,119,209,144,202,255,106,169,82,61,6,189,121,101,229,8,46,153,113,51,173,239,28,170,164,186,118,46,254,112,239,110,146,115,159,125,188,226,132,241,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0f550306-ffed-4a2f-96af-6009daaa7f5c"));
		}

		#endregion

	}

	#endregion

}

