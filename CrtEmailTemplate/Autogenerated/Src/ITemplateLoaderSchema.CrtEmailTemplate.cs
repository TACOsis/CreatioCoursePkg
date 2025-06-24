namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITemplateLoaderSchema

	/// <exclude/>
	public class ITemplateLoaderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITemplateLoaderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITemplateLoaderSchema(ITemplateLoaderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0678da09-bb18-43d7-b171-709841aeb44c");
			Name = "ITemplateLoader";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9fb8de7b-ba51-4bde-a802-902958879110");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,83,193,110,194,48,12,61,23,137,127,176,56,129,52,181,31,64,215,11,66,8,137,219,216,7,152,214,173,34,53,110,149,56,135,106,226,223,151,100,43,20,54,118,100,71,59,239,61,63,63,43,140,154,108,143,37,193,145,140,65,219,213,146,110,58,174,85,227,12,138,234,120,62,251,152,207,18,103,21,55,240,54,88,33,189,190,212,155,206,208,109,149,110,89,148,40,178,190,237,31,122,119,106,85,9,138,133,76,29,134,236,143,164,251,22,133,14,29,86,100,60,36,168,39,89,150,65,110,157,214,104,134,98,108,188,91,50,80,118,204,84,6,35,233,5,152,77,145,1,181,185,128,224,174,140,234,73,67,18,108,38,231,104,234,247,105,59,18,11,200,64,26,85,11,242,109,19,196,32,219,54,38,1,167,1,148,7,169,138,252,146,181,242,238,150,121,143,6,181,161,26,216,7,249,186,136,236,113,199,125,181,200,138,213,56,0,185,130,138,106,116,173,64,139,220,56,108,232,193,78,177,19,149,31,200,22,219,91,151,87,75,105,158,69,226,85,199,144,56,195,246,158,50,93,44,144,101,240,212,17,27,200,241,146,67,200,101,28,188,220,57,85,193,157,151,213,250,191,67,29,195,252,83,99,4,125,209,159,145,251,84,103,50,189,56,252,180,251,244,163,189,64,236,94,109,133,43,134,239,113,254,4,76,132,154,74,16,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0678da09-bb18-43d7-b171-709841aeb44c"));
		}

		#endregion

	}

	#endregion

}

