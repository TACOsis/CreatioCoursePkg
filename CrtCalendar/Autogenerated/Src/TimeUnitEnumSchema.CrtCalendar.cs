namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TimeUnitEnumSchema

	/// <exclude/>
	public class TimeUnitEnumSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TimeUnitEnumSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TimeUnitEnumSchema(TimeUnitEnumSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2edcc60c-6562-466a-beae-9495a7f738b1");
			Name = "TimeUnitEnum";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,81,77,75,196,48,16,61,119,161,255,97,192,139,130,180,222,215,10,178,10,235,65,61,184,226,65,60,164,117,118,13,230,163,204,36,66,113,247,191,59,105,187,221,21,20,18,50,239,229,205,204,155,196,41,139,220,170,6,97,133,68,138,253,58,20,11,239,214,122,19,73,5,237,93,177,80,6,221,187,34,206,103,223,249,44,139,172,221,6,158,58,14,104,231,249,76,152,19,194,141,8,225,214,69,203,61,83,150,37,92,114,180,86,81,119,53,226,235,47,165,141,170,13,66,208,22,33,58,29,24,214,158,32,32,89,134,70,153,38,154,161,227,190,66,121,84,162,141,181,209,13,160,244,128,149,20,120,150,124,161,147,163,236,193,59,132,10,46,206,19,184,215,46,6,236,195,165,143,212,7,55,170,235,207,23,79,159,226,254,72,50,50,147,114,196,146,32,104,39,91,214,235,99,205,222,96,192,183,131,15,14,98,181,129,198,40,230,201,207,18,77,139,180,119,245,91,89,123,111,224,142,247,143,153,228,167,225,67,31,146,251,103,73,193,25,244,233,25,97,136,228,38,26,170,106,210,22,226,15,182,219,191,239,210,44,255,94,14,163,207,83,131,221,48,97,250,64,177,52,252,97,130,187,31,102,145,105,144,19,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2edcc60c-6562-466a-beae-9495a7f738b1"));
		}

		#endregion

	}

	#endregion

}

