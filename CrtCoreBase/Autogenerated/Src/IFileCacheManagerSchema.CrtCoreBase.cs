namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IFileCacheManagerSchema

	/// <exclude/>
	public class IFileCacheManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IFileCacheManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IFileCacheManagerSchema(IFileCacheManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0e5e91d3-bc10-4f37-b040-4d4f5d89326c");
			Name = "IFileCacheManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3c624d29-361c-47f2-ac8f-7824eb3cde6f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,145,65,106,195,48,16,69,247,129,220,97,160,155,6,130,15,80,175,218,208,4,65,67,11,110,232,90,150,198,142,192,150,204,72,94,184,166,119,175,164,144,90,105,234,84,11,227,153,249,254,127,244,172,121,139,182,227,2,225,29,137,184,53,149,203,54,70,87,170,238,137,59,101,116,182,85,13,110,184,56,226,158,107,94,35,45,23,227,114,1,254,244,86,233,26,138,193,58,108,243,235,86,198,94,47,186,183,252,15,93,99,184,156,149,19,222,24,101,207,218,41,167,208,206,104,130,127,246,88,90,71,92,132,192,160,59,41,239,8,107,223,0,166,29,82,229,25,60,0,187,190,109,80,158,158,93,95,54,74,128,58,203,231,212,227,57,32,13,121,35,211,33,133,61,211,105,105,76,3,204,22,189,16,104,45,211,254,34,188,81,159,145,12,140,80,163,203,225,235,194,14,181,60,57,254,21,178,71,119,52,242,34,129,77,124,153,174,12,188,248,151,45,153,54,174,125,127,176,72,254,119,104,140,104,60,187,180,92,67,68,59,20,94,217,114,192,164,88,195,148,16,206,174,87,18,42,159,196,228,26,158,148,230,52,124,144,242,156,160,76,138,85,62,125,245,139,193,14,157,199,16,189,227,102,242,191,213,98,98,186,210,129,201,85,62,135,42,212,63,28,211,129,111,126,3,167,178,85,54,3,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0e5e91d3-bc10-4f37-b040-4d4f5d89326c"));
		}

		#endregion

	}

	#endregion

}

