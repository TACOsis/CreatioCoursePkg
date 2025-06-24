namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalendarConstantsSchema

	/// <exclude/>
	public class CalendarConstantsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalendarConstantsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalendarConstantsSchema(CalendarConstantsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("be7f28d4-9023-4e82-8abd-f8718e729d3d");
			Name = "CalendarConstants";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2179f89-6a33-4745-96ee-fd30f06a5c1f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,84,77,139,219,48,16,61,111,32,255,65,164,151,246,160,68,150,100,91,218,109,11,250,176,218,30,10,133,110,41,244,166,38,74,48,77,228,197,146,41,161,244,191,87,142,99,118,55,27,182,41,5,27,163,209,155,247,164,153,55,246,118,231,194,157,93,58,112,235,218,214,134,102,29,231,170,241,235,122,211,181,54,214,141,159,43,187,117,126,101,219,48,157,252,154,78,174,186,80,251,13,248,188,15,209,237,110,166,147,20,121,209,186,77,2,2,181,181,33,92,131,219,122,231,190,248,58,38,150,16,173,143,41,239,42,61,119,221,247,109,189,4,41,20,211,103,217,99,207,66,123,141,123,202,113,227,26,124,58,228,247,155,253,251,152,173,117,118,213,248,237,30,188,235,234,21,24,15,172,237,62,124,88,129,55,192,187,159,135,157,151,51,82,104,67,16,174,96,46,100,1,41,17,8,138,74,149,144,230,10,151,60,215,140,112,61,123,117,115,169,194,199,218,119,209,157,138,80,38,169,49,156,193,138,72,3,169,201,57,20,133,50,16,51,90,81,196,168,145,216,252,131,200,251,166,107,79,37,100,201,146,136,238,239,81,113,72,113,133,161,48,132,66,165,137,208,188,42,20,47,46,145,248,218,180,63,82,55,207,20,74,106,37,37,203,56,228,18,167,66,21,184,132,156,22,6,106,132,10,154,11,172,41,202,46,23,56,95,39,34,36,37,88,20,80,9,70,83,51,178,28,74,65,8,76,23,33,170,204,153,96,6,93,174,113,174,76,137,28,177,74,151,80,103,25,131,20,97,1,57,87,8,98,147,51,130,121,86,105,92,29,21,14,174,75,245,30,140,151,86,191,7,219,62,138,61,53,251,216,164,131,81,143,78,95,44,22,224,117,232,118,59,219,238,223,30,215,35,14,44,71,71,207,71,228,226,1,244,220,144,60,145,248,175,9,9,177,237,231,87,187,181,237,182,177,31,192,111,141,119,170,89,185,84,185,217,73,120,246,92,241,143,76,210,6,119,127,196,129,230,97,236,89,142,218,71,48,154,195,247,29,76,217,5,250,91,198,208,106,159,108,155,224,152,14,127,161,75,186,151,162,127,0,202,143,25,143,240,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("be7f28d4-9023-4e82-8abd-f8718e729d3d"));
		}

		#endregion

	}

	#endregion

}

