namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotSessionProgressStatesSchema

	/// <exclude/>
	public class CopilotSessionProgressStatesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotSessionProgressStatesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotSessionProgressStatesSchema(CopilotSessionProgressStatesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c97cec0c-44eb-481a-82a1-0e11ea2c192d");
			Name = "CopilotSessionProgressStates";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,85,143,205,10,194,64,12,132,207,45,244,29,242,0,210,125,1,17,74,209,155,32,22,241,28,151,88,23,186,63,108,178,160,72,223,221,173,182,80,143,147,153,111,152,56,180,196,1,53,65,27,9,197,248,186,245,193,12,94,170,242,93,149,133,82,10,182,156,172,197,248,218,205,250,76,33,18,147,19,6,121,16,176,160,16,248,251,87,204,48,48,49,27,239,32,68,223,231,48,215,75,151,90,149,133,116,27,140,6,114,201,46,96,247,227,78,51,214,77,221,156,163,211,150,226,138,70,140,235,15,62,94,152,226,49,251,216,211,230,223,105,50,159,23,57,89,219,251,39,233,52,5,26,157,63,116,249,52,86,229,8,31,163,26,64,51,252,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c97cec0c-44eb-481a-82a1-0e11ea2c192d"));
		}

		#endregion

	}

	#endregion

}

