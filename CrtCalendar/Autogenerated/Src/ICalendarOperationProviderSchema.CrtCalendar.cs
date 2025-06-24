namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICalendarOperationProviderSchema

	/// <exclude/>
	public class ICalendarOperationProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICalendarOperationProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICalendarOperationProviderSchema(ICalendarOperationProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("612d2abe-2c2a-4f21-8270-8e0f51100801");
			Name = "ICalendarOperationProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,84,77,139,219,48,16,61,111,32,255,97,200,105,11,197,254,1,235,53,148,108,41,129,101,119,105,211,246,80,122,144,237,113,42,170,15,163,145,82,76,217,255,222,145,99,197,219,164,33,161,208,67,79,70,98,230,205,123,79,111,108,132,70,234,68,141,176,70,231,4,217,214,103,75,107,90,185,9,78,120,105,77,182,20,10,77,35,28,205,103,63,231,179,171,64,210,108,224,67,79,30,245,205,193,153,59,149,194,58,182,81,246,14,13,58,89,79,53,39,6,76,5,105,210,90,106,252,104,164,135,219,243,164,178,84,204,48,12,148,231,57,20,20,180,22,174,47,199,243,123,236,28,18,26,79,32,160,30,27,193,118,184,195,130,206,217,173,108,208,101,169,63,127,1,208,133,74,201,26,164,241,232,218,104,211,42,141,126,76,0,79,99,63,87,71,131,142,56,12,23,111,154,134,167,111,133,10,8,182,5,207,172,33,48,109,2,111,161,17,30,163,14,168,250,137,160,52,173,117,122,39,119,15,155,31,226,22,157,112,66,131,225,103,188,93,36,156,69,153,72,14,131,178,34,31,170,254,220,52,112,90,148,159,226,231,184,210,161,15,206,208,17,96,186,143,133,119,137,62,139,188,222,31,18,153,215,209,188,157,242,87,187,71,250,223,28,242,99,196,22,229,58,145,250,215,150,126,121,172,200,42,244,248,245,18,131,143,22,39,49,190,212,251,97,87,25,110,242,182,17,61,253,102,246,15,196,239,192,59,222,41,174,251,43,187,235,160,198,133,147,91,123,198,193,56,141,150,54,24,54,253,33,232,10,93,204,196,112,27,227,176,25,249,94,96,110,20,114,96,238,189,36,95,236,247,248,78,244,229,222,128,207,113,194,169,12,79,164,206,152,25,51,251,13,95,68,248,82,191,248,151,34,109,67,28,52,110,31,15,167,53,174,167,21,169,35,171,3,153,145,50,115,73,161,160,235,213,91,19,52,203,172,20,22,73,226,42,254,216,56,32,101,26,23,165,93,61,207,103,207,191,0,185,200,69,199,26,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("612d2abe-2c2a-4f21-8270-8e0f51100801"));
		}

		#endregion

	}

	#endregion

}

