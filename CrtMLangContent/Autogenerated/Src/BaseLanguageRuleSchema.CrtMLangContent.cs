namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseLanguageRuleSchema

	/// <exclude/>
	public class BaseLanguageRuleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseLanguageRuleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseLanguageRuleSchema(BaseLanguageRuleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("baa8372c-43b1-4ee1-aa11-be1c27d2f168");
			Name = "BaseLanguageRule";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2659875a-4670-491c-9c1f-f4641a7bae64");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,65,110,131,48,16,60,19,41,127,88,145,75,115,9,247,52,201,161,28,34,164,30,162,180,125,192,198,44,200,18,216,104,109,31,162,42,127,175,49,1,17,71,173,122,220,97,118,152,25,175,194,150,76,135,130,224,147,152,209,232,202,110,114,173,42,89,59,70,43,181,90,46,190,151,139,196,25,169,106,248,184,26,75,237,235,52,207,87,152,60,238,191,172,152,106,191,6,121,131,198,108,225,13,13,189,163,170,29,214,116,118,13,5,78,150,101,176,51,174,109,145,175,135,251,220,19,1,47,198,50,10,11,162,223,134,74,179,231,17,129,96,170,246,105,49,23,74,179,3,200,182,107,168,37,101,131,83,179,25,165,179,153,118,231,46,141,20,177,114,108,11,182,80,60,218,76,250,216,83,154,19,235,142,216,74,242,145,78,65,49,4,121,74,18,128,47,67,12,66,43,69,162,247,181,153,136,115,95,163,177,158,156,79,220,120,12,38,146,154,108,95,122,114,27,126,186,34,85,14,190,238,243,88,185,239,192,178,19,86,243,127,108,230,76,104,201,128,244,91,168,252,5,232,106,222,118,92,145,47,252,151,36,1,233,144,177,5,229,207,105,159,186,135,16,233,33,46,100,151,5,246,80,3,107,235,97,42,159,222,228,37,234,226,81,117,125,239,38,34,237,35,218,95,189,197,167,113,116,178,132,35,217,209,68,81,190,4,200,31,152,180,215,51,9,205,101,81,174,123,201,65,241,81,240,246,3,61,225,177,105,76,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("baa8372c-43b1-4ee1-aa11-be1c27d2f168"));
		}

		#endregion

	}

	#endregion

}

