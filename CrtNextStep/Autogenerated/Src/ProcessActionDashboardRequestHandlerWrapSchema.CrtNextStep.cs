namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ProcessActionDashboardRequestHandlerWrapSchema

	/// <exclude/>
	public class ProcessActionDashboardRequestHandlerWrapSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ProcessActionDashboardRequestHandlerWrapSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ProcessActionDashboardRequestHandlerWrapSchema(ProcessActionDashboardRequestHandlerWrapSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("54a5616f-acc6-4650-95c6-603019028451");
			Name = "ProcessActionDashboardRequestHandlerWrap";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("032fd8ac-f1f1-4a8c-86e0-929d42537d25");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,84,205,111,218,48,20,63,167,82,255,135,39,118,9,23,231,222,2,82,87,84,141,67,43,86,54,245,80,77,147,113,94,192,82,98,103,207,54,29,170,250,191,207,113,66,10,29,76,70,59,37,254,120,31,191,143,103,197,43,52,53,23,8,223,144,136,27,93,88,118,171,85,33,87,142,184,149,90,177,7,252,109,23,22,107,115,121,241,122,121,145,56,35,213,234,224,50,225,245,137,125,118,199,133,213,36,209,28,187,241,224,36,91,32,109,164,192,123,157,99,201,166,220,114,95,219,146,143,138,10,120,194,101,183,246,215,125,192,39,194,149,111,25,102,202,34,21,30,212,21,204,230,164,5,26,115,35,26,48,83,110,214,75,205,41,127,196,95,14,141,253,194,85,94,34,133,224,44,203,96,100,92,85,113,218,78,186,117,159,8,106,210,27,153,163,129,155,249,12,10,77,48,157,193,82,170,188,233,80,23,62,16,17,4,97,49,30,196,20,28,100,19,120,33,94,215,72,32,74,110,12,219,53,144,237,117,80,187,101,41,5,200,190,137,40,48,240,26,224,244,100,220,163,93,235,220,92,193,60,164,107,15,67,45,169,214,72,210,230,90,156,209,58,107,191,233,63,239,14,61,192,166,204,2,75,20,246,171,67,218,62,122,155,105,101,16,98,226,129,186,60,215,29,22,84,121,11,39,172,223,90,181,15,55,119,120,111,27,62,61,218,8,44,79,94,130,211,218,87,117,137,21,42,27,198,32,104,126,166,202,77,250,150,136,191,164,125,158,98,193,93,105,63,183,22,74,237,182,70,93,164,81,2,15,135,63,222,205,17,220,19,13,22,162,7,34,249,224,162,59,137,101,48,17,201,13,183,216,30,214,237,194,171,197,115,173,202,109,84,31,240,115,221,254,28,215,246,93,71,239,22,75,174,121,64,142,153,119,143,204,176,193,154,139,172,63,206,62,158,143,106,78,188,2,229,223,187,241,192,137,193,100,79,204,239,6,201,151,83,24,250,110,134,83,250,218,92,9,100,163,44,196,133,52,29,229,177,100,167,135,105,193,137,97,51,155,73,146,236,24,128,49,40,124,137,74,152,250,232,230,77,236,188,127,146,181,51,166,61,202,9,103,141,123,71,208,127,79,125,71,19,161,117,164,122,191,236,90,217,123,27,78,209,113,236,129,120,251,3,46,247,206,50,235,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("54a5616f-acc6-4650-95c6-603019028451"));
		}

		#endregion

	}

	#endregion

}

