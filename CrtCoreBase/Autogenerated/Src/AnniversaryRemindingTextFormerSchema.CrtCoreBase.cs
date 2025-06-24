namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AnniversaryRemindingTextFormerSchema

	/// <exclude/>
	public class AnniversaryRemindingTextFormerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AnniversaryRemindingTextFormerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AnniversaryRemindingTextFormerSchema(AnniversaryRemindingTextFormerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c");
			Name = "AnniversaryRemindingTextFormer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,87,109,111,219,54,16,254,172,2,253,15,132,186,1,54,230,202,73,251,45,77,2,164,73,90,20,104,210,160,246,6,20,195,62,208,210,217,230,34,145,30,73,185,245,218,252,247,29,69,82,166,94,236,120,107,177,111,226,241,238,185,231,94,120,164,56,45,64,173,104,10,100,10,82,82,37,230,58,185,20,124,206,22,165,164,154,9,254,244,201,215,167,79,162,82,49,190,32,147,141,210,80,188,106,173,81,63,207,33,53,202,42,121,11,28,36,75,59,58,239,25,255,171,35,156,194,23,189,21,94,10,9,201,53,215,76,51,80,91,113,200,75,66,191,188,40,4,199,29,220,123,38,97,129,68,200,101,78,149,58,33,23,156,179,53,72,69,229,230,35,20,140,103,104,105,188,190,17,178,0,89,89,140,199,99,114,170,202,162,64,157,115,183,190,147,98,205,50,80,164,0,189,20,153,34,90,144,57,154,144,56,0,140,137,244,144,168,128,160,36,163,154,38,196,99,142,3,208,85,57,203,89,74,82,195,234,17,82,228,132,188,235,229,26,153,66,212,1,190,97,144,103,24,225,157,100,107,170,161,10,37,90,73,161,177,18,144,33,53,154,9,158,111,200,175,10,36,22,148,219,2,181,150,54,103,209,51,224,153,133,117,107,159,68,172,168,150,101,170,133,52,158,170,24,156,35,27,207,254,72,6,45,223,101,99,57,36,85,60,81,75,233,172,165,102,10,30,61,236,231,121,99,171,212,73,70,181,32,24,130,233,151,183,160,47,210,84,148,92,7,172,167,76,231,48,240,84,36,232,82,114,163,249,94,164,52,103,127,211,89,14,147,202,124,16,87,170,14,97,10,197,42,71,236,120,24,210,235,58,196,48,52,77,191,199,161,67,248,239,14,95,139,108,51,112,10,216,159,48,242,218,28,79,190,231,17,236,155,210,81,109,90,232,172,74,217,22,233,138,110,46,120,118,131,30,150,3,163,105,169,68,107,42,201,12,157,180,152,90,243,158,176,94,119,117,227,0,74,130,42,115,141,214,150,83,98,249,12,122,60,140,154,124,71,54,162,87,97,98,45,216,254,148,117,155,226,160,148,249,176,91,29,177,55,236,254,238,137,24,215,100,3,84,170,78,202,63,161,52,204,181,227,145,98,34,36,245,231,197,149,221,9,212,160,130,58,44,163,45,66,35,23,174,137,115,20,122,217,151,213,40,234,207,107,55,7,110,15,205,69,41,83,184,109,101,51,111,27,32,229,159,226,14,140,74,190,134,8,15,201,111,52,47,33,110,36,168,14,153,195,103,210,37,210,28,57,201,71,7,55,193,57,71,23,48,170,144,34,12,97,186,89,225,89,77,110,171,116,116,232,29,218,106,166,188,61,101,13,26,44,204,66,90,74,9,92,95,217,94,106,49,189,180,155,70,154,152,178,111,117,167,172,48,84,205,167,165,229,133,132,134,39,184,2,69,64,20,232,100,42,106,203,160,199,216,156,12,90,54,230,134,93,81,9,83,49,8,232,13,201,57,57,242,212,125,26,142,44,72,213,23,145,129,158,172,40,55,41,0,185,166,57,58,15,0,146,73,57,171,58,172,237,175,117,46,92,29,107,178,30,45,153,178,244,94,13,19,147,206,221,220,113,108,125,152,127,170,96,154,222,235,141,58,6,227,236,249,243,48,2,23,213,198,123,216,61,69,250,231,164,83,88,155,22,245,110,254,93,101,172,105,163,213,218,17,78,133,31,50,55,55,227,44,59,228,142,168,135,133,201,177,103,23,133,78,42,33,249,197,24,124,144,120,175,211,252,154,151,33,155,157,248,129,186,65,231,101,49,131,58,199,166,66,86,66,78,207,186,237,227,70,212,117,177,210,155,176,14,129,217,207,228,248,232,200,212,242,248,152,124,251,70,58,210,23,189,210,151,109,79,253,83,90,47,29,123,63,155,173,123,245,153,233,116,217,160,80,227,165,84,1,57,62,177,139,253,232,74,183,208,173,241,139,131,140,121,214,107,252,242,32,99,217,49,206,96,78,113,96,29,100,221,159,149,131,31,101,193,187,177,122,24,51,190,196,127,4,157,137,148,140,207,131,215,228,182,133,170,27,248,221,21,171,154,20,219,252,212,110,141,136,152,253,137,163,240,188,122,140,223,81,137,131,25,71,129,242,181,104,74,147,203,37,164,247,23,114,81,22,120,228,111,203,60,31,196,77,141,125,239,142,160,5,205,182,74,151,80,80,115,19,160,138,59,214,195,38,218,239,241,164,86,138,255,216,154,102,246,108,239,50,50,71,56,84,7,243,7,180,121,196,211,117,173,228,77,125,139,110,137,54,59,52,118,119,125,188,173,184,11,120,247,27,200,190,6,182,132,124,239,68,51,252,189,184,15,187,48,118,111,179,94,244,29,143,210,67,208,27,83,184,123,197,30,216,78,246,209,253,255,246,211,119,52,204,158,86,252,193,85,118,127,35,63,170,172,187,225,30,169,99,56,67,156,44,20,61,252,3,10,119,179,11,166,16,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateTitleContactTemplateLocalizableString());
			LocalizableStrings.Add(CreateBodyContactTemplateLocalizableString());
			LocalizableStrings.Add(CreateTitleAccountTemplateLocalizableString());
			LocalizableStrings.Add(CreateBodyAccountTemplateLocalizableString());
			LocalizableStrings.Add(CreatestOrdinalLocalizableString());
			LocalizableStrings.Add(CreatendOrdinalLocalizableString());
			LocalizableStrings.Add(CreaterdOrdinalLocalizableString());
			LocalizableStrings.Add(CreatethOrdinalLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateTitleContactTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("2d0e61be-0a4a-45c0-ab9f-a90f92028ed7"),
				Name = "TitleContactTemplate",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateBodyContactTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("f88c60c5-8ecc-4ec8-89f7-67590239dfb3"),
				Name = "BodyContactTemplate",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateTitleAccountTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("babf9ff7-7f81-4b5b-a544-3aeffb636c3b"),
				Name = "TitleAccountTemplate",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateBodyAccountTemplateLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("56be17f0-594f-4a21-84c0-7230a14a16ea"),
				Name = "BodyAccountTemplate",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreatestOrdinalLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("cb7b7382-9e88-48c3-91bf-c459bf541dcf"),
				Name = "stOrdinal",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreatendOrdinalLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("8df46a2e-db2a-408f-8b01-9c39f2d46c85"),
				Name = "ndOrdinal",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreaterdOrdinalLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("8a1a6be5-802f-42f1-9056-13a65c21a853"),
				Name = "rdOrdinal",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreatethOrdinalLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("4fb54baf-e0b3-44c0-bbf6-30d79e2a859c"),
				Name = "thOrdinal",
				CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2"),
				CreatedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"),
				ModifiedInSchemaUId = new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("d0c0cb2d-82d8-4e7b-b5be-e3f71e54de5c"));
		}

		#endregion

	}

	#endregion

}

