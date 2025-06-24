namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutorSchema

	/// <exclude/>
	public class MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutorSchema(MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1ec195a5-eee5-45e2-a79b-fd4c145b5a09");
			Name = "MaxMemoryUsageToGetDataViaEntityCollectionInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6ded360-42cd-4008-9952-fcaf8207688b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,82,203,78,227,48,20,93,7,137,127,184,147,153,69,42,77,35,10,180,76,139,88,208,244,161,72,211,17,82,128,237,200,56,55,169,53,142,93,217,78,33,66,253,119,156,184,143,80,134,21,139,88,185,15,223,115,206,61,22,164,64,189,34,20,225,30,149,34,90,102,38,140,164,200,88,94,42,98,152,20,167,39,175,167,39,94,169,153,200,33,169,180,193,226,250,40,182,253,156,35,173,155,117,56,71,129,138,209,67,79,206,229,19,225,163,81,36,139,66,138,240,183,204,115,155,62,212,219,176,10,63,203,135,83,97,152,97,168,255,223,80,143,182,21,91,251,174,48,183,68,32,226,68,235,17,44,200,203,2,11,169,170,7,77,114,188,151,115,52,19,98,200,35,35,205,192,234,64,61,22,218,16,206,19,170,216,202,76,95,144,150,70,170,102,36,19,6,149,32,28,104,61,243,171,35,97,4,241,39,88,94,189,105,175,254,118,42,102,12,121,106,101,220,41,182,38,6,119,229,149,11,65,33,73,165,224,21,196,118,173,240,151,219,227,6,236,239,130,8,75,77,89,51,76,189,111,84,129,127,71,232,63,155,211,126,231,122,15,130,34,117,56,141,204,61,232,2,205,82,54,168,229,19,103,116,15,218,68,176,150,44,5,199,25,131,7,141,202,190,22,225,244,66,249,46,236,64,163,199,115,107,1,93,233,4,141,177,214,233,109,230,230,232,130,51,185,74,232,18,11,210,210,224,210,227,234,143,125,171,129,159,28,230,248,63,143,33,27,113,222,154,168,45,92,221,21,167,22,73,224,51,204,75,150,6,254,120,24,157,245,135,253,65,247,162,119,214,235,94,94,94,69,221,219,95,131,94,119,118,53,24,78,251,183,189,193,197,249,249,118,75,30,203,32,248,246,129,120,56,67,67,151,51,37,139,201,56,104,227,116,118,146,189,218,139,48,22,153,12,126,180,9,195,51,51,75,176,132,94,219,215,54,32,164,129,76,150,34,221,1,123,10,77,169,132,11,54,205,249,145,198,4,57,90,19,220,149,205,214,196,150,169,181,109,46,253,222,106,155,123,3,227,70,135,51,247,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1ec195a5-eee5-45e2-a79b-fd4c145b5a09"));
		}

		#endregion

	}

	#endregion

}

