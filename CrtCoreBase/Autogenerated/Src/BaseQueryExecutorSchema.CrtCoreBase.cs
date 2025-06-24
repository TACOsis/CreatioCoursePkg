namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseQueryExecutorSchema

	/// <exclude/>
	public class BaseQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseQueryExecutorSchema(BaseQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7d0b9ea3-e9cd-412e-bbed-f37d017a5c6e");
			Name = "BaseQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("84b09f59-6bd7-4f07-9626-7a5c32da980f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,147,219,78,195,48,12,134,175,139,196,59,88,226,102,72,83,31,128,105,32,54,109,211,46,64,160,1,183,200,75,189,17,41,77,74,14,136,10,241,238,56,237,24,61,140,222,213,201,111,251,139,127,87,99,78,174,64,65,240,68,214,162,51,59,159,222,22,197,146,208,7,75,238,252,236,235,252,44,9,78,234,61,108,74,231,41,159,28,227,191,132,185,177,244,223,121,186,208,94,122,73,142,5,44,185,176,180,151,70,195,92,161,115,87,48,67,71,143,129,108,185,248,36,17,188,177,149,168,8,91,37,5,224,214,121,139,194,131,136,226,83,218,228,171,210,31,171,46,37,169,140,203,62,88,249,129,158,234,203,162,14,192,18,102,70,171,18,42,162,114,35,222,40,71,120,165,70,52,57,169,127,118,100,231,70,107,18,62,54,121,13,173,120,114,64,32,157,213,20,109,36,22,242,43,130,96,222,10,204,120,78,163,236,23,237,16,246,31,55,234,116,109,55,29,3,23,141,195,110,210,223,179,151,151,16,13,75,146,14,36,76,161,71,29,85,205,116,214,180,123,166,205,65,221,161,198,61,217,116,69,126,205,47,66,45,104,86,198,142,163,30,66,85,251,123,120,44,60,136,130,108,220,139,129,161,116,70,208,9,167,215,255,88,241,87,160,229,116,43,136,201,29,231,135,112,239,200,191,153,108,136,117,107,140,130,56,28,199,203,151,163,45,231,70,133,92,191,160,10,180,148,202,147,29,85,254,214,223,107,189,51,176,59,126,142,193,4,15,171,32,51,40,122,217,191,150,246,111,216,177,140,118,24,148,175,237,180,196,63,173,110,212,189,169,236,114,27,222,20,69,141,196,197,123,64,229,14,88,205,185,164,45,248,52,218,57,174,74,39,17,240,20,219,116,10,188,222,52,224,121,125,218,62,228,179,31,63,3,190,123,122,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7d0b9ea3-e9cd-412e-bbed-f37d017a5c6e"));
		}

		#endregion

	}

	#endregion

}

