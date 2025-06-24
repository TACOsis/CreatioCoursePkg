namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutorSchema(UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ef4e205b-067a-4986-8306-0390f15d3609");
			Name = "UpdateSoftkeyKnowledgeBaseNotesInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,81,111,218,48,16,126,78,165,254,7,47,123,9,18,65,20,232,182,194,86,137,20,168,208,84,54,149,118,175,149,155,28,137,87,199,142,108,7,136,16,255,189,78,28,84,8,129,77,202,139,125,159,239,190,251,238,190,48,28,131,76,176,15,232,9,132,192,146,47,84,235,142,179,5,9,83,129,21,225,236,242,98,115,121,97,165,146,176,16,205,51,169,32,30,84,206,26,79,41,248,57,88,182,238,129,129,32,254,7,102,63,109,28,115,86,31,17,112,234,190,53,102,138,40,2,82,3,52,36,73,95,41,241,145,79,177,148,232,57,9,176,130,185,134,190,65,246,147,241,21,133,32,4,15,75,152,113,5,114,202,164,194,148,206,125,65,18,53,94,131,159,42,46,80,31,77,107,3,58,249,166,40,97,125,22,16,234,102,208,132,0,13,100,31,253,22,100,169,235,152,96,98,14,232,89,130,208,66,49,211,56,122,73,15,206,131,125,104,209,65,54,247,35,136,241,3,102,56,4,129,94,224,248,114,80,150,7,22,24,6,135,116,30,64,69,252,36,159,37,39,1,186,139,48,11,79,11,226,52,80,62,76,203,50,140,208,219,62,162,188,251,81,75,77,207,85,25,128,151,205,244,202,56,246,65,118,187,89,21,160,81,40,96,221,167,154,149,52,124,30,193,231,34,152,6,186,4,131,21,202,67,142,61,254,218,29,181,123,67,207,237,12,191,92,185,189,235,111,29,247,230,102,210,117,189,246,208,107,119,218,163,235,78,239,206,46,147,45,177,64,62,103,1,41,86,173,76,51,34,69,61,44,178,239,82,9,189,63,77,196,95,255,106,18,183,101,175,214,6,217,211,64,51,172,208,216,22,209,173,73,77,22,200,249,84,35,71,107,2,202,143,38,130,199,35,207,249,168,221,216,9,105,9,80,169,48,227,182,76,70,195,2,177,92,112,205,177,46,169,22,243,41,75,32,208,198,73,99,246,7,211,20,74,242,183,142,93,76,106,215,114,206,171,200,212,154,202,89,74,233,47,49,142,19,149,57,231,8,236,42,155,119,143,144,80,109,111,199,94,80,88,187,1,17,102,62,125,173,100,94,124,16,1,9,35,213,71,87,237,118,178,30,196,132,185,43,18,168,168,143,186,197,133,214,237,212,203,99,108,73,186,174,229,57,168,189,110,119,93,54,13,201,115,239,240,18,156,5,166,18,12,104,251,191,30,41,254,19,165,69,204,63,163,112,136,113,59,56,21,251,86,150,183,20,183,178,211,90,211,26,151,91,117,126,57,130,182,106,126,2,230,249,63,61,123,166,111,125,171,191,119,21,148,230,254,196,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ef4e205b-067a-4986-8306-0390f15d3609"));
		}

		#endregion

	}

	#endregion

}

