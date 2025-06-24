namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalendarUtilitySchema

	/// <exclude/>
	public class CalendarUtilitySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalendarUtilitySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalendarUtilitySchema(CalendarUtilitySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("79e58c22-6756-4f35-93bc-da6c46a7c24a");
			Name = "CalendarUtility";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,82,203,78,195,48,16,60,83,169,255,176,74,47,229,18,223,33,141,4,229,210,27,18,237,7,108,221,77,177,148,216,145,31,160,82,245,223,89,59,105,104,194,133,35,183,236,120,103,60,51,142,198,134,92,139,146,96,75,214,162,51,149,207,215,70,87,234,24,44,122,101,116,190,198,154,244,1,173,155,207,206,243,217,93,112,74,31,71,203,150,30,231,51,62,89,88,58,50,1,214,53,58,7,15,112,37,238,188,170,149,63,165,29,33,4,20,46,52,13,218,83,217,207,79,32,19,195,191,163,135,214,154,15,117,32,7,178,103,131,87,13,197,73,134,58,25,130,144,244,20,185,252,42,40,110,20,219,176,175,149,132,22,173,87,88,247,210,19,43,191,205,61,163,35,38,159,147,201,159,36,70,59,111,131,244,198,198,64,175,73,186,91,153,6,73,192,70,171,120,169,250,98,255,8,154,62,65,177,0,106,110,215,84,156,143,152,66,28,198,82,181,202,38,14,50,81,118,102,243,65,94,76,245,11,78,133,13,104,126,179,85,22,28,89,54,168,73,198,86,178,114,203,242,17,3,57,128,121,33,18,35,9,244,197,76,174,93,238,70,50,48,86,189,231,212,123,174,102,57,133,227,159,112,119,249,47,85,56,126,32,234,26,72,159,127,201,189,185,2,47,232,241,45,178,138,1,42,110,14,79,101,217,137,14,93,244,211,109,5,11,94,238,254,153,52,119,232,24,188,124,3,47,147,38,171,106,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("79e58c22-6756-4f35-93bc-da6c46a7c24a"));
		}

		#endregion

	}

	#endregion

}

