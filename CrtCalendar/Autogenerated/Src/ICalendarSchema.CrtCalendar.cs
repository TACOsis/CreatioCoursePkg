namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICalendarSchema

	/// <exclude/>
	public class ICalendarSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICalendarSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICalendarSchema(ICalendarSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("77b2d1ec-9baf-4fa5-be75-9d8f0bdfecfb");
			Name = "ICalendar";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,146,207,106,131,64,16,135,207,6,242,14,131,15,160,247,214,228,146,66,16,10,133,86,40,244,182,209,217,100,233,186,43,59,107,131,45,121,247,142,214,63,96,147,64,74,15,30,198,249,126,238,55,59,26,81,34,85,34,71,200,208,57,65,86,250,104,99,141,84,251,218,9,175,172,137,54,66,163,41,132,163,229,226,107,185,8,106,82,102,15,47,13,121,44,239,103,53,39,181,198,188,141,81,180,69,131,78,229,204,48,21,199,49,36,84,151,165,112,205,186,175,159,177,114,72,104,60,65,222,159,1,202,72,235,202,159,131,135,88,60,203,37,190,169,176,18,78,148,96,216,126,21,102,225,58,29,44,31,68,147,196,35,48,70,8,81,104,178,144,59,148,171,176,183,77,55,218,26,20,59,141,33,196,45,90,213,59,173,114,150,240,232,100,123,39,227,103,147,108,13,119,48,5,128,233,224,120,64,199,247,214,53,166,227,185,211,222,211,175,145,187,23,91,228,105,253,1,65,21,60,184,146,10,93,52,194,241,156,78,62,132,174,113,44,179,75,185,9,219,214,170,128,180,128,206,32,216,163,111,87,20,156,186,29,92,49,178,14,104,48,243,170,68,248,228,57,111,19,59,23,155,168,140,187,111,220,76,121,191,48,20,51,203,128,254,162,91,136,6,172,148,116,155,237,153,212,4,165,143,138,124,187,113,222,230,19,67,255,226,121,68,124,7,254,235,42,45,252,141,87,123,41,122,198,248,149,209,172,39,175,104,183,207,233,27,175,151,165,9,251,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("77b2d1ec-9baf-4fa5-be75-9d8f0bdfecfb"));
		}

		#endregion

	}

	#endregion

}

