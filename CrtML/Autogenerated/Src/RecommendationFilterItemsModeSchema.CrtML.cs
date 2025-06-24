namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: RecommendationFilterItemsModeSchema

	/// <exclude/>
	public class RecommendationFilterItemsModeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public RecommendationFilterItemsModeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public RecommendationFilterItemsModeSchema(RecommendationFilterItemsModeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ab1853cd-ba91-4c11-942e-58eb26dfa9d8");
			Name = "RecommendationFilterItemsMode";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("55b53857-a033-4921-8f47-13b5471dd33e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,144,79,139,194,48,16,197,207,45,244,59,12,120,93,218,187,136,7,197,5,15,94,68,241,28,211,73,55,108,254,212,73,2,138,248,221,77,82,149,202,46,44,236,45,47,243,230,55,111,198,48,141,174,103,28,97,135,68,204,89,225,235,165,53,66,118,129,152,151,214,64,85,94,171,178,42,139,9,97,151,244,202,4,61,133,45,114,171,53,154,54,155,62,165,242,72,107,143,218,109,108,139,217,223,52,13,204,92,208,154,209,101,254,208,169,8,86,128,200,126,144,6,232,141,19,229,41,160,243,245,179,191,25,1,250,112,84,146,3,198,249,127,141,47,98,228,226,71,130,252,177,119,49,129,81,23,144,201,14,130,172,30,197,233,9,91,201,19,179,126,17,198,25,138,195,87,236,251,200,11,254,206,95,157,185,10,113,203,255,225,23,138,241,239,248,184,13,39,143,11,14,87,79,242,118,7,191,23,79,171,172,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ab1853cd-ba91-4c11-942e-58eb26dfa9d8"));
		}

		#endregion

	}

	#endregion

}

