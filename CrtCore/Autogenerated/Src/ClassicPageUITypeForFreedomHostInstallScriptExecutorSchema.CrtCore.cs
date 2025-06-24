namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ClassicPageUITypeForFreedomHostInstallScriptExecutorSchema

	/// <exclude/>
	public class ClassicPageUITypeForFreedomHostInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ClassicPageUITypeForFreedomHostInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ClassicPageUITypeForFreedomHostInstallScriptExecutorSchema(ClassicPageUITypeForFreedomHostInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0554340b-f6e2-490c-99d5-a9b58d70988f");
			Name = "ClassicPageUITypeForFreedomHostInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3967a9e7-8d4f-4777-81c6-ec5d8afe4ee6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,109,107,219,48,16,254,236,66,255,195,205,251,98,67,99,74,147,166,89,179,21,242,226,80,195,6,5,55,251,174,202,151,76,76,145,130,36,103,43,37,255,189,103,201,165,121,105,96,204,31,108,221,221,195,61,143,158,59,131,98,43,180,107,198,17,30,209,24,102,245,194,101,19,173,22,98,89,27,230,132,86,231,103,47,231,103,81,109,133,90,238,65,12,14,79,228,179,233,152,74,64,79,168,54,185,242,217,150,232,28,133,22,190,29,226,247,248,178,29,40,181,33,142,207,6,151,84,128,137,100,214,222,134,143,224,15,108,137,243,226,241,121,141,51,109,102,6,177,210,171,123,109,93,161,172,99,82,150,220,136,181,203,255,34,175,157,54,190,143,80,14,141,98,18,120,211,225,191,250,192,45,20,39,8,162,23,79,242,174,86,55,56,229,72,241,131,17,27,230,48,212,215,33,0,222,212,193,58,227,45,10,90,230,69,163,198,22,21,121,20,79,7,87,221,171,254,229,180,115,115,61,206,59,189,94,158,119,6,121,119,212,233,247,191,140,199,131,238,232,122,146,247,226,97,75,138,170,10,188,251,34,126,160,251,165,171,93,9,81,180,43,226,73,107,9,247,204,146,231,223,5,79,230,22,13,233,86,200,155,73,208,248,118,195,20,154,69,136,162,13,51,96,81,82,146,84,42,252,3,165,15,146,3,180,199,70,52,91,89,175,84,50,171,21,167,115,173,92,18,50,217,200,210,52,132,253,157,164,233,27,118,102,244,42,137,131,150,56,29,250,172,65,87,27,213,18,102,193,110,44,57,147,204,124,165,129,222,37,41,220,193,165,199,110,143,189,8,183,61,118,163,126,146,130,183,243,240,103,216,104,81,65,219,254,223,124,16,11,72,62,189,123,119,0,122,67,181,23,8,151,217,250,247,193,255,144,209,225,39,147,53,30,180,184,128,56,175,132,243,27,241,209,130,198,23,71,107,147,158,242,129,226,144,221,79,110,95,1,226,125,162,42,255,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0554340b-f6e2-490c-99d5-a9b58d70988f"));
		}

		#endregion

	}

	#endregion

}

