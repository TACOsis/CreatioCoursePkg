namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotSessionProgressSchema

	/// <exclude/>
	public class CopilotSessionProgressSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotSessionProgressSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotSessionProgressSchema(CopilotSessionProgressSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450");
			Name = "CopilotSessionProgress";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,85,81,107,219,48,16,126,78,161,255,65,75,7,115,32,56,239,203,188,178,165,180,51,44,163,212,237,246,80,250,160,216,151,84,195,182,204,73,222,232,66,254,251,206,146,156,90,142,219,174,131,66,42,221,233,238,187,239,190,59,151,188,0,85,241,20,216,2,129,107,33,195,133,172,68,46,245,241,209,246,248,104,84,43,81,110,88,242,160,52,20,243,222,57,188,170,75,45,10,8,19,64,193,115,241,167,121,94,62,122,93,3,34,87,114,173,41,100,81,60,101,65,160,123,178,220,158,113,205,23,178,212,200,83,125,71,23,85,189,202,69,202,210,156,43,197,28,168,4,148,162,28,151,40,55,72,255,146,215,214,60,30,157,32,108,200,192,200,82,1,106,1,234,61,187,52,1,172,125,54,155,177,15,170,46,10,142,15,31,219,139,11,208,138,73,100,170,249,213,247,208,102,161,11,147,134,137,12,168,194,181,0,12,247,65,102,221,40,6,244,18,138,21,96,240,141,152,100,17,27,167,30,212,56,27,79,154,106,218,114,46,106,145,177,189,141,109,217,6,244,188,65,48,103,187,198,237,73,176,139,26,145,208,48,81,106,250,121,167,88,202,171,134,239,215,32,179,33,98,19,97,97,159,251,232,148,198,166,63,139,1,199,62,212,127,103,85,105,174,129,201,181,57,84,174,117,175,128,109,222,15,226,76,76,100,15,24,61,24,214,138,241,85,225,15,46,52,61,61,151,120,163,0,151,100,224,27,8,175,101,98,34,6,147,249,107,42,203,64,165,40,44,61,174,62,199,241,255,212,217,137,54,88,237,89,39,219,64,51,78,160,204,236,20,248,35,177,4,125,47,179,102,30,80,252,34,14,172,181,178,7,211,156,199,20,84,161,215,244,160,33,137,134,178,132,212,164,173,189,227,212,168,249,212,73,50,206,38,172,89,25,163,145,88,179,224,77,123,25,126,225,234,59,207,107,104,173,35,4,93,99,201,202,58,207,231,230,198,8,127,228,218,102,243,39,233,61,20,124,201,75,234,14,186,4,254,93,212,3,19,238,177,123,126,166,163,20,61,118,231,152,22,151,139,71,33,6,2,135,231,162,204,26,175,207,15,55,113,22,236,203,176,53,216,96,174,2,107,59,13,29,89,198,182,27,164,247,171,76,205,130,92,229,144,236,153,238,244,243,26,138,42,39,255,23,248,238,242,52,40,111,59,107,45,211,45,209,240,251,16,64,208,99,239,10,148,172,49,37,171,68,162,193,166,26,149,36,77,185,14,134,83,78,166,236,237,248,32,176,10,183,6,68,103,166,118,150,188,241,164,203,208,203,114,181,226,119,124,182,147,96,232,28,198,99,191,96,47,113,200,108,101,126,8,230,47,237,233,179,59,196,146,60,101,21,71,94,208,66,88,253,164,208,183,119,221,109,240,9,55,170,237,130,27,45,225,45,211,232,112,212,250,56,125,72,161,183,147,105,214,172,18,15,133,149,29,170,202,102,27,146,91,63,167,149,207,188,175,158,39,248,118,243,252,248,53,139,250,160,227,204,9,105,240,139,18,249,164,56,87,187,212,35,214,87,145,51,119,183,96,228,246,86,72,235,188,224,58,24,168,125,122,208,22,187,114,158,145,34,221,210,223,95,135,224,110,150,25,9,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateExecutingActionLocalizableString());
			LocalizableStrings.Add(CreateWaitingForAssistantMessageLocalizableString());
			LocalizableStrings.Add(CreateWaitingForUserMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateExecutingActionLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("07f19ea2-e4a4-330b-afc6-63209cf7b939"),
				Name = "ExecutingAction",
				CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e"),
				CreatedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450"),
				ModifiedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateWaitingForAssistantMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("6673cc57-96d6-8a62-a449-ecaf90a81acb"),
				Name = "WaitingForAssistantMessage",
				CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e"),
				CreatedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450"),
				ModifiedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateWaitingForUserMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("2e0aa39a-7a19-f269-c454-5b4380e84bd2"),
				Name = "WaitingForUserMessage",
				CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e"),
				CreatedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450"),
				ModifiedInSchemaUId = new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b0e8ee9b-f8b6-433f-85d3-3a0027859450"));
		}

		#endregion

	}

	#endregion

}

