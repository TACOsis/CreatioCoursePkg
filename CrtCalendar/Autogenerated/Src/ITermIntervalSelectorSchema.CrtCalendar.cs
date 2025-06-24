namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITermIntervalSelectorSchema

	/// <exclude/>
	public class ITermIntervalSelectorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITermIntervalSelectorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITermIntervalSelectorSchema(ITermIntervalSelectorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0ad912a0-8f79-46f0-9654-054938f2e9ef");
			Name = "ITermIntervalSelector";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f69a32ba-7e77-47bd-be6b-d095bbdc629a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,81,203,106,195,48,16,60,215,144,127,88,114,106,161,88,31,80,215,80,90,8,62,244,20,255,128,226,174,29,21,61,204,106,85,8,165,255,222,149,106,39,105,11,58,172,118,103,70,179,35,175,29,198,89,15,8,61,18,233,24,70,174,159,131,31,205,148,72,179,9,126,83,125,110,170,155,20,141,159,96,127,138,140,78,230,214,226,144,135,177,222,161,71,50,195,131,96,148,82,208,196,228,156,166,83,187,220,59,207,72,99,150,15,35,72,233,192,228,206,135,182,16,49,139,4,170,87,170,186,226,206,233,96,205,240,3,46,244,78,236,185,110,225,238,23,106,211,103,108,246,247,239,241,210,120,69,62,134,55,224,163,102,32,228,68,62,2,27,135,23,19,99,32,24,180,29,146,45,203,214,103,41,245,87,171,153,53,105,7,94,242,122,220,106,154,146,67,207,113,219,62,173,101,209,138,44,169,225,100,48,214,141,42,140,139,192,226,160,237,175,29,8,108,237,103,224,175,53,101,61,216,33,223,190,152,18,182,184,105,68,95,62,226,30,194,225,93,18,104,225,108,228,46,255,192,215,166,146,243,13,21,12,133,99,211,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0ad912a0-8f79-46f0-9654-054938f2e9ef"));
		}

		#endregion

	}

	#endregion

}

