namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLProblemTypeFeaturesSchema

	/// <exclude/>
	public class IMLProblemTypeFeaturesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLProblemTypeFeaturesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLProblemTypeFeaturesSchema(IMLProblemTypeFeaturesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("af781143-48a0-4837-b191-06bc575a6ccb");
			Name = "IMLProblemTypeFeatures";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b54cb82a-9c72-40e4-855f-14a0ef44684e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,142,193,138,2,49,12,134,207,10,190,67,142,187,151,153,7,88,241,34,44,10,138,123,240,5,50,221,116,44,180,77,73,211,131,136,239,110,28,93,17,22,146,64,194,255,127,249,51,38,170,5,29,193,145,68,176,178,215,110,205,217,135,177,9,106,224,220,237,119,139,249,101,49,159,245,125,15,203,218,82,66,57,175,158,251,54,43,137,191,187,61,11,20,20,13,174,69,20,240,132,218,132,42,176,7,61,17,212,66,46,248,224,160,8,15,145,18,232,185,80,247,71,237,223,176,165,13,209,116,225,69,222,238,119,63,15,211,209,60,223,79,176,41,45,148,205,127,185,166,195,6,237,117,211,210,20,62,20,101,36,253,4,199,177,165,60,37,77,252,75,17,84,48,228,144,199,238,133,121,15,50,27,152,227,29,116,152,56,235,135,251,2,198,250,130,171,9,172,173,110,3,56,199,10,65,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("af781143-48a0-4837-b191-06bc575a6ccb"));
		}

		#endregion

	}

	#endregion

}

