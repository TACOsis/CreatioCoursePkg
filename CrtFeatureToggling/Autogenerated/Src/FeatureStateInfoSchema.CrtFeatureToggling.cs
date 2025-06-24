namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FeatureStateInfoSchema

	/// <exclude/>
	public class FeatureStateInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FeatureStateInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FeatureStateInfoSchema(FeatureStateInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("066f10e1-9d92-46e7-9090-029b9549a7b2");
			Name = "FeatureStateInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73a2a776-4008-4ff0-a541-03cf3c677f19");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,146,207,78,195,48,12,198,207,155,212,119,136,182,11,92,250,0,76,28,166,161,77,59,20,33,54,196,1,113,112,83,183,178,148,164,83,226,78,2,196,187,227,116,131,238,95,199,49,254,190,239,103,199,137,114,96,49,108,64,163,90,163,247,16,234,146,211,89,237,74,170,26,15,76,181,75,134,95,201,112,208,4,114,149,90,125,4,70,59,57,57,139,223,24,212,209,28,210,5,58,244,164,207,60,207,141,99,178,152,174,68,5,67,159,45,251,204,37,234,150,52,102,117,129,230,170,152,78,165,223,246,127,72,250,138,121,103,56,188,162,181,135,209,83,37,205,48,4,168,68,186,236,241,216,87,63,222,94,175,107,142,192,141,199,117,93,85,166,167,139,140,222,205,41,250,216,99,37,72,53,51,16,194,157,218,19,86,12,140,75,87,214,173,231,237,1,24,100,2,246,160,249,93,10,155,38,55,164,149,142,153,11,145,65,124,220,63,242,156,208,20,130,126,106,67,45,112,71,204,208,230,232,111,30,229,179,168,123,53,210,178,218,209,109,196,255,242,3,251,56,252,76,132,73,127,46,196,198,199,65,114,172,218,121,174,196,160,176,228,94,28,241,178,56,14,47,26,42,226,171,79,59,195,30,51,70,87,236,46,37,167,239,221,250,14,74,201,80,106,63,27,200,5,89,252,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("066f10e1-9d92-46e7-9090-029b9549a7b2"));
		}

		#endregion

	}

	#endregion

}

