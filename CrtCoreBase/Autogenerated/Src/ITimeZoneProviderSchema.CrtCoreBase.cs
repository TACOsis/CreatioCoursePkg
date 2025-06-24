namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITimeZoneProviderSchema

	/// <exclude/>
	public class ITimeZoneProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITimeZoneProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITimeZoneProviderSchema(ITimeZoneProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("dfa2b430-c6c6-4cf0-9146-f9cae961564f");
			Name = "ITimeZoneProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("b11d550e-0087-4f53-ae17-fb00d41102cf");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,80,177,78,195,48,16,157,27,41,255,112,234,4,75,188,131,233,82,33,212,13,169,153,216,220,112,9,150,240,57,58,159,91,25,212,127,199,110,147,128,202,230,123,247,222,243,123,71,198,97,24,77,135,208,34,179,9,190,151,102,235,169,183,67,100,35,214,83,93,125,215,213,42,6,75,3,236,83,16,116,143,203,188,245,140,205,51,137,21,139,33,195,121,161,148,2,29,162,115,134,211,102,154,95,217,31,237,59,6,16,235,16,190,60,33,28,18,12,246,136,4,193,71,238,176,153,149,234,70,170,37,141,56,26,54,14,40,39,125,90,183,151,239,210,122,211,46,94,147,133,86,11,183,168,199,120,248,180,29,88,18,228,190,244,219,21,197,91,22,76,113,88,79,94,133,189,58,125,32,231,27,92,17,120,128,235,35,111,74,251,127,173,46,192,11,202,159,74,205,194,83,183,68,205,40,145,41,252,102,206,97,103,172,144,230,100,59,234,125,177,157,231,187,251,114,235,115,93,157,127,0,158,254,183,128,167,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("dfa2b430-c6c6-4cf0-9146-f9cae961564f"));
		}

		#endregion

	}

	#endregion

}

