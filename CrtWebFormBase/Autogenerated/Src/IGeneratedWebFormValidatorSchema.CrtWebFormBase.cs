namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IGeneratedWebFormValidatorSchema

	/// <exclude/>
	public class IGeneratedWebFormValidatorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IGeneratedWebFormValidatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IGeneratedWebFormValidatorSchema(IGeneratedWebFormValidatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("61c26b2e-18c1-4d99-9cd7-da3ae5fc724c");
			Name = "IGeneratedWebFormValidator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("30ff16fc-9eaa-40ad-9611-33924da6f041");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,144,189,106,195,48,16,199,231,24,252,14,34,83,186,88,15,80,215,75,160,193,107,82,218,89,177,78,230,192,58,153,147,148,98,74,223,189,82,99,167,197,6,13,210,233,255,241,227,72,89,240,163,234,64,188,1,179,242,206,132,234,232,200,96,31,89,5,116,84,157,128,32,93,65,127,192,245,213,177,189,0,223,176,131,178,248,42,139,93,244,72,189,184,76,62,128,125,46,139,52,145,82,138,218,71,107,21,79,205,252,126,87,3,234,20,225,69,143,55,32,49,40,210,217,7,20,48,76,213,226,146,255,108,99,188,14,216,9,164,0,108,50,94,187,230,152,67,29,39,117,70,217,52,175,170,183,165,219,214,251,100,84,172,172,160,180,153,151,253,231,189,172,213,251,166,213,217,106,16,88,56,179,196,85,181,252,149,255,185,25,66,100,242,77,75,62,40,74,228,73,60,83,164,117,158,193,199,33,212,114,81,101,219,250,247,1,125,56,69,212,226,129,240,148,54,188,251,46,139,116,126,0,52,117,102,207,183,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("61c26b2e-18c1-4d99-9cd7-da3ae5fc724c"));
		}

		#endregion

	}

	#endregion

}

