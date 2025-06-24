namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: NextBestOfferQueryExecutorSchema

	/// <exclude/>
	public class NextBestOfferQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public NextBestOfferQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public NextBestOfferQueryExecutorSchema(NextBestOfferQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a6bb29d3-cfc6-4031-b319-9c9d83af551c");
			Name = "NextBestOfferQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1f46dba4-ffd0-41a9-a438-bc96152b983c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,82,201,110,194,48,16,61,131,196,63,88,112,9,18,226,3,160,32,149,173,226,80,74,183,83,85,85,174,51,1,75,193,166,227,49,37,66,252,123,157,152,86,56,37,28,103,60,111,230,45,86,124,3,102,203,5,176,23,64,228,70,39,212,29,107,149,200,149,69,78,82,171,238,24,233,9,132,222,108,64,197,16,47,81,199,86,80,163,126,104,212,107,214,72,181,10,128,8,253,138,126,119,170,72,146,4,83,57,48,227,130,52,250,9,55,211,66,88,185,251,108,156,114,99,122,108,1,123,26,129,161,135,36,1,124,180,128,217,116,15,194,58,68,49,253,54,129,132,219,148,70,82,197,110,119,68,217,22,116,18,205,139,171,89,48,223,238,176,133,83,205,6,172,89,189,180,217,126,119,91,183,246,51,149,130,137,156,194,21,6,172,199,46,29,114,11,14,5,185,63,45,51,9,105,236,196,44,81,238,56,129,127,220,250,130,33,240,88,171,52,99,175,6,208,101,160,64,228,1,176,15,27,212,253,16,53,15,104,77,56,113,23,209,78,198,128,44,40,6,195,28,85,43,220,244,78,103,221,59,160,155,106,252,48,82,240,205,220,97,67,104,115,192,45,174,172,251,5,20,53,67,70,205,78,153,99,187,125,98,217,114,159,198,107,15,141,56,219,154,219,81,216,124,210,229,45,175,54,59,42,217,83,186,204,14,133,206,18,33,23,246,63,23,107,181,227,117,146,247,64,107,29,95,230,231,227,30,235,52,61,29,112,94,150,123,145,111,60,139,53,108,120,161,129,129,249,250,101,136,64,22,85,16,82,30,72,32,252,108,87,142,188,66,218,119,195,230,241,7,59,109,188,130,221,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a6bb29d3-cfc6-4031-b319-9c9d83af551c"));
		}

		#endregion

	}

	#endregion

}

