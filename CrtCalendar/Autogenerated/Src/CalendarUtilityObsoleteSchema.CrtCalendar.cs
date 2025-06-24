namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CalendarUtilityObsoleteSchema

	/// <exclude/>
	public class CalendarUtilityObsoleteSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CalendarUtilityObsoleteSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CalendarUtilityObsoleteSchema(CalendarUtilityObsoleteSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4e3cb340-4d0d-4fe9-b58a-97330a7996b4");
			Name = "CalendarUtilityObsolete";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,82,203,106,195,48,16,60,39,144,127,88,146,75,10,197,190,183,174,161,117,161,228,212,66,155,83,233,97,35,111,82,129,44,25,61,10,38,228,223,43,203,175,216,201,165,151,222,60,163,157,209,236,88,18,11,50,37,50,130,15,210,26,141,218,219,40,83,114,207,15,78,163,229,74,70,25,10,146,57,106,179,152,31,23,243,153,51,92,30,224,189,50,150,138,251,30,159,139,53,121,222,159,172,52,29,188,1,100,2,141,129,59,232,140,182,150,11,110,171,48,19,199,49,36,198,21,5,234,42,109,241,35,176,160,176,223,104,161,212,234,135,231,100,128,181,106,176,188,160,26,49,39,66,64,112,193,143,147,137,58,195,248,204,177,116,59,193,25,148,168,45,71,209,90,79,162,92,134,123,66,67,94,124,12,33,135,77,148,52,86,59,102,149,174,23,122,11,214,205,200,116,145,64,100,154,208,18,224,16,190,201,90,69,189,36,158,106,18,159,20,11,144,254,191,60,44,59,221,38,95,166,93,66,240,117,72,203,247,156,116,148,196,97,250,186,216,25,210,62,177,36,86,215,180,76,183,30,3,235,137,145,248,243,117,103,148,32,75,95,53,106,59,155,116,178,126,113,60,135,33,210,45,108,71,55,192,248,194,27,223,208,206,215,184,62,87,76,71,234,23,53,59,253,71,133,67,129,127,95,124,211,17,73,255,245,140,85,218,103,186,88,117,188,216,202,115,205,11,10,184,97,199,228,233,23,96,87,126,119,136,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4e3cb340-4d0d-4fe9-b58a-97330a7996b4"));
		}

		#endregion

	}

	#endregion

}

