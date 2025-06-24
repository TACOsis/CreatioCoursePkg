namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IImapSyncJobSchedulerSchema

	/// <exclude/>
	public class IImapSyncJobSchedulerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IImapSyncJobSchedulerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IImapSyncJobSchedulerSchema(IImapSyncJobSchedulerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("42c2b310-e629-40cf-90c2-3202b6197a53");
			Name = "IImapSyncJobScheduler";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("80eb4b00-d20b-4335-a2cc-1f02c0e63f83");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,84,81,107,219,48,16,126,78,161,255,225,72,95,54,8,246,123,235,24,134,59,134,7,129,176,116,63,64,150,207,141,90,91,10,119,82,182,172,244,191,239,44,167,105,147,45,109,25,108,172,111,146,238,244,221,247,125,39,157,85,29,242,74,105,132,43,36,82,236,26,159,204,148,105,79,79,238,78,79,70,129,141,189,134,197,134,61,118,73,225,218,22,181,55,206,114,242,9,45,146,209,23,187,156,199,219,133,35,148,115,137,156,17,94,75,54,148,214,35,53,82,227,28,202,178,83,171,197,198,234,207,174,90,232,37,214,161,69,138,201,105,154,66,198,161,235,20,109,242,237,126,78,110,109,106,100,232,208,47,93,205,208,56,130,114,246,97,14,44,16,75,114,214,252,80,61,33,184,113,21,152,190,140,138,4,147,7,192,244,9,226,42,84,173,209,67,90,207,230,24,153,209,93,36,180,163,63,27,138,159,195,60,2,12,193,67,186,241,160,88,162,190,237,221,56,202,17,191,27,246,146,145,236,48,210,67,144,108,165,72,117,96,165,49,211,113,96,164,194,89,59,248,62,206,51,70,4,77,216,76,199,95,247,67,105,46,202,216,43,171,49,201,210,136,241,123,200,184,70,241,128,199,249,124,183,126,214,218,95,1,9,125,32,203,249,21,5,156,128,105,94,80,60,1,39,69,190,25,70,104,84,203,61,195,7,132,30,178,114,174,133,75,135,188,109,198,199,254,206,187,125,129,176,111,197,4,202,75,19,87,226,93,198,158,196,84,169,82,221,72,56,135,71,141,48,5,27,218,246,253,197,51,109,251,130,157,91,227,113,245,111,183,87,107,103,234,173,188,173,181,255,206,213,130,148,228,254,151,174,202,232,114,117,105,103,198,6,143,98,237,209,199,59,100,202,27,70,29,226,183,253,251,221,42,8,149,127,109,183,100,150,193,129,154,73,143,52,250,163,54,158,161,173,135,153,23,247,247,195,16,223,59,188,255,9,240,171,217,169,48,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("42c2b310-e629-40cf-90c2-3202b6197a53"));
		}

		#endregion

	}

	#endregion

}

