namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SynchronizationColumnComparatorSchema

	/// <exclude/>
	public class SynchronizationColumnComparatorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SynchronizationColumnComparatorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SynchronizationColumnComparatorSchema(SynchronizationColumnComparatorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e35d3e1f-66cd-49ce-837d-7492da9c21e7");
			Name = "SynchronizationColumnComparator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,146,49,79,196,48,12,133,103,42,245,63,88,199,2,18,106,118,40,93,174,12,204,135,216,211,214,45,57,37,118,113,18,164,130,248,239,244,218,158,64,189,67,44,44,145,158,245,158,63,71,54,105,135,190,215,53,194,19,138,104,207,109,200,182,76,173,233,162,232,96,152,178,7,10,38,12,187,129,234,23,97,50,239,83,53,77,62,210,36,77,46,46,5,187,81,66,137,22,59,29,240,22,86,198,45,219,232,198,215,245,122,236,199,50,165,148,82,144,251,232,156,150,161,88,116,137,1,197,25,66,15,166,133,252,96,119,130,45,208,56,224,253,198,115,148,26,159,181,141,184,81,5,24,15,248,26,181,133,192,39,214,6,125,48,52,193,103,127,145,29,145,106,197,156,163,103,16,197,110,18,240,118,80,89,174,38,223,217,212,41,173,252,174,252,146,23,12,81,200,23,143,255,253,207,92,29,91,143,168,62,86,214,212,208,44,155,129,138,217,254,181,157,43,174,246,88,7,248,49,198,13,44,181,53,239,250,110,190,0,164,102,62,130,131,252,76,147,47,248,119,118,193,82,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e35d3e1f-66cd-49ce-837d-7492da9c21e7"));
		}

		#endregion

	}

	#endregion

}

