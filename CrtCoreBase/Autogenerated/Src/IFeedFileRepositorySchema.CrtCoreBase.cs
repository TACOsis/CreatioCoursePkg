namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IFeedFileRepositorySchema

	/// <exclude/>
	public class IFeedFileRepositorySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IFeedFileRepositorySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IFeedFileRepositorySchema(IFeedFileRepositorySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("eef4d7ab-3239-4954-9dde-85f2888efdfe");
			Name = "IFeedFileRepository";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("60d2ad76-a9cc-4cf5-8319-1f95d5126d02");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,143,203,10,194,48,16,69,215,13,228,31,6,220,55,123,17,55,66,161,11,55,226,15,196,118,82,131,205,131,73,178,40,210,127,55,177,86,138,184,188,48,247,204,185,86,26,12,94,118,8,87,36,146,193,169,88,159,156,85,122,72,36,163,118,150,179,39,103,156,85,59,194,33,71,104,109,68,82,185,176,135,182,65,236,27,61,226,5,189,11,58,58,154,222,167,66,8,56,132,100,140,164,233,248,201,103,73,15,36,208,107,27,148,35,136,119,132,194,0,149,33,1,232,139,169,87,138,216,96,124,186,141,186,219,32,254,252,47,82,63,66,85,246,175,230,101,3,218,126,153,81,226,12,47,120,157,56,168,253,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("eef4d7ab-3239-4954-9dde-85f2888efdfe"));
		}

		#endregion

	}

	#endregion

}

