namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DefaultLanguageRuleSchema

	/// <exclude/>
	public class DefaultLanguageRuleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultLanguageRuleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultLanguageRuleSchema(DefaultLanguageRuleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("32971764-08e0-45a0-b450-0b4e7438a79c");
			Name = "DefaultLanguageRule";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5c69ef14-1695-42a6-839b-8d7e06516faf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,147,77,111,219,48,12,134,207,46,208,255,64,184,151,6,8,236,123,190,14,203,128,34,192,138,13,237,186,187,98,209,137,0,91,50,40,42,88,80,244,191,143,82,156,52,113,211,97,59,146,162,222,151,124,68,89,213,162,239,84,133,240,19,137,148,119,53,23,75,103,107,179,9,164,216,56,123,123,243,122,123,147,5,111,236,6,158,247,158,177,157,158,226,243,43,132,211,65,221,51,50,75,228,97,62,40,188,52,40,164,250,88,42,18,34,82,150,37,204,124,104,91,69,251,69,31,47,27,229,253,24,120,171,24,58,114,59,163,209,67,163,236,38,168,13,130,15,93,231,136,161,85,166,89,187,223,125,157,71,6,99,193,167,110,98,20,61,138,163,65,121,230,208,133,117,99,42,168,162,9,124,197,90,133,134,191,245,226,79,161,65,152,192,23,229,241,60,37,183,34,152,236,142,112,35,83,128,204,228,89,89,246,19,248,65,102,167,24,211,44,89,119,8,160,138,231,224,153,34,160,222,226,17,189,23,185,163,236,210,105,20,88,249,245,211,252,0,39,187,67,171,15,158,49,254,208,2,133,138,29,197,46,210,76,135,138,33,209,3,82,66,105,204,11,162,216,184,108,128,171,165,8,165,85,194,122,158,95,193,144,151,139,226,36,87,14,245,102,157,34,213,130,149,141,154,231,193,35,73,63,22,171,248,198,249,226,69,226,200,160,79,20,179,50,85,167,203,61,253,43,134,247,47,23,50,112,169,58,138,151,179,201,90,94,230,126,112,2,175,111,215,104,189,179,122,68,222,58,253,47,152,190,175,89,9,162,247,101,147,213,179,108,106,35,3,213,228,218,255,93,190,207,232,25,187,69,50,172,93,5,229,57,22,183,147,207,35,158,240,16,140,134,7,60,1,90,233,251,148,138,221,240,254,9,43,71,122,165,101,244,132,37,29,233,75,164,253,70,173,180,108,217,229,31,45,68,247,151,106,194,144,248,248,47,171,58,78,62,89,239,145,122,25,141,166,41,73,200,129,236,167,246,169,232,250,3,73,246,237,15,180,103,27,167,148,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("32971764-08e0-45a0-b450-0b4e7438a79c"));
		}

		#endregion

	}

	#endregion

}

