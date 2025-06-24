namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AutoEmailRelationConstSchema

	/// <exclude/>
	public class AutoEmailRelationConstSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AutoEmailRelationConstSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AutoEmailRelationConstSchema(AutoEmailRelationConstSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2456833a-24e8-4599-9cc4-9e4102ad1dfd");
			Name = "AutoEmailRelationConst";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e0bd8020-de17-4815-83cd-c2dac7bbc324");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,77,139,220,48,12,134,207,59,48,255,33,236,94,218,131,22,41,254,136,195,210,67,38,147,41,61,21,186,219,31,224,177,149,105,32,113,66,62,40,161,236,127,175,59,237,105,250,21,240,193,126,45,233,225,149,20,108,199,211,96,29,39,47,60,142,118,234,235,249,177,236,67,221,92,150,209,206,77,31,30,139,101,238,171,206,54,237,39,110,175,202,126,247,109,191,187,91,166,38,92,146,231,117,154,185,123,138,239,120,30,70,190,196,255,164,108,237,52,37,191,229,197,178,211,188,223,197,192,97,57,183,141,75,166,57,234,46,113,255,12,191,251,1,187,201,24,217,250,62,180,107,242,126,105,124,82,117,67,219,175,204,31,124,242,46,9,252,245,170,190,185,215,152,9,81,157,74,56,9,125,0,146,132,80,24,35,128,244,209,136,178,56,96,110,240,254,237,211,255,170,127,92,198,178,239,6,27,214,151,117,184,101,168,76,82,122,42,142,160,68,165,225,120,34,130,60,163,3,32,210,81,99,149,11,83,234,13,140,104,117,182,110,126,118,95,184,179,159,111,24,164,207,44,180,34,48,53,167,32,73,229,96,188,71,176,6,133,151,218,8,239,197,6,70,225,92,191,132,191,48,82,229,51,71,246,12,228,25,65,42,36,56,75,76,1,83,70,86,54,75,189,230,237,62,98,191,186,37,52,238,58,198,63,3,17,165,205,41,37,72,169,54,32,45,49,152,156,226,77,57,172,51,165,217,74,218,110,106,3,208,144,147,66,106,2,212,148,131,148,222,131,193,44,218,204,210,56,66,131,70,185,95,147,122,189,174,232,3,7,255,115,157,247,187,215,239,175,18,126,163,37,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2456833a-24e8-4599-9cc4-9e4102ad1dfd"));
		}

		#endregion

	}

	#endregion

}

