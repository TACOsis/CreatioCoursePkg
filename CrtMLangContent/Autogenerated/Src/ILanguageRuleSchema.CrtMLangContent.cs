namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ILanguageRuleSchema

	/// <exclude/>
	public class ILanguageRuleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ILanguageRuleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ILanguageRuleSchema(ILanguageRuleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6e06075a-13a8-4259-bad5-f82e6f51b55b");
			Name = "ILanguageRule";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a79d048a-6394-421e-9091-4cdc0081ecbf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,81,93,75,195,48,20,125,94,161,255,225,178,189,232,75,243,174,181,47,83,70,97,194,152,254,129,180,185,237,2,237,77,185,73,132,34,251,239,166,233,170,211,249,150,115,114,190,72,72,246,104,7,89,35,188,35,179,180,166,113,217,214,80,163,91,207,210,105,67,105,242,153,38,43,111,53,181,240,54,90,135,253,99,154,4,70,8,1,185,245,125,47,121,44,46,248,25,109,205,186,66,11,238,132,192,190,11,167,198,48,152,202,73,77,83,130,132,78,82,235,101,139,217,146,33,174,66,6,95,117,186,6,77,14,185,153,70,149,251,139,252,24,194,130,96,218,178,218,48,182,97,25,188,162,59,25,101,31,224,16,109,113,214,205,174,72,28,216,124,104,21,214,44,237,16,16,57,221,104,100,32,68,53,239,204,7,201,178,103,108,128,194,179,60,173,39,137,27,143,88,27,86,165,90,139,34,251,110,16,127,43,102,239,255,198,226,37,98,224,72,92,117,103,185,136,182,159,20,70,231,153,108,177,191,29,26,196,203,237,36,223,121,173,96,135,110,81,150,234,46,82,191,187,239,231,223,90,109,144,212,252,108,1,157,211,228,252,5,77,27,213,241,249,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6e06075a-13a8-4259-bad5-f82e6f51b55b"));
		}

		#endregion

	}

	#endregion

}

