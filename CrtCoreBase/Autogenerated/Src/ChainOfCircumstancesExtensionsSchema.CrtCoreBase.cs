namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ChainOfCircumstancesExtensionsSchema

	/// <exclude/>
	public class ChainOfCircumstancesExtensionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ChainOfCircumstancesExtensionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ChainOfCircumstancesExtensionsSchema(ChainOfCircumstancesExtensionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7c54472f-f2a2-4576-973d-73866d39766e");
			Name = "ChainOfCircumstancesExtensions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,146,219,110,194,48,12,134,175,65,226,29,60,118,49,144,38,122,63,160,210,212,113,185,13,109,188,64,72,93,26,169,73,186,196,153,134,16,239,190,28,104,57,104,210,110,218,230,183,63,231,183,93,197,36,218,150,113,132,13,26,195,172,174,104,86,104,85,137,157,51,140,132,86,163,225,97,52,28,56,43,212,14,62,247,150,80,206,71,67,175,220,27,220,249,48,20,13,179,246,9,138,154,9,245,94,21,194,112,39,45,49,197,209,174,126,8,149,245,73,54,18,89,150,193,194,58,41,153,217,231,167,115,196,64,87,192,47,65,192,158,156,117,96,118,65,182,110,219,8,14,62,155,252,139,7,7,255,26,24,28,162,137,222,247,43,82,173,75,239,124,29,139,165,224,173,197,40,60,3,215,82,122,164,213,150,184,86,165,8,115,241,39,161,40,76,133,106,70,254,129,96,208,186,134,64,58,75,234,129,96,139,208,149,96,80,98,197,66,240,155,53,14,67,195,139,150,25,38,13,86,160,252,10,150,227,205,71,164,199,89,62,235,177,171,166,147,66,251,22,35,121,131,229,27,31,8,117,147,137,217,34,235,51,207,240,37,200,195,188,60,230,125,199,79,79,220,100,27,36,103,148,205,215,151,109,251,180,78,15,137,215,155,88,27,44,5,103,132,139,147,173,28,222,52,189,164,214,123,109,66,181,248,123,95,103,44,90,154,66,248,245,6,131,116,97,55,222,101,14,119,171,47,199,26,59,73,202,99,55,220,201,9,159,78,231,129,59,158,22,142,170,76,59,143,231,164,94,139,199,95,253,195,27,173,6,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7c54472f-f2a2-4576-973d-73866d39766e"));
		}

		#endregion

	}

	#endregion

}

