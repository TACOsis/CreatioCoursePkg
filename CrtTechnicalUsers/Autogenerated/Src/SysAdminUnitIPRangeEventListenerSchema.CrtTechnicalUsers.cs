namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SysAdminUnitIPRangeEventListenerSchema

	/// <exclude/>
	public class SysAdminUnitIPRangeEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SysAdminUnitIPRangeEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SysAdminUnitIPRangeEventListenerSchema(SysAdminUnitIPRangeEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf");
			Name = "SysAdminUnitIPRangeEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6178851e-77d2-45aa-a9b3-851817fc2201");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,84,223,111,219,54,16,126,78,129,254,15,172,86,20,18,166,8,105,225,26,93,178,174,72,92,103,48,208,164,70,237,102,15,169,11,208,210,217,230,32,145,2,73,185,201,108,255,239,61,146,146,44,101,114,219,135,21,216,139,127,144,247,125,247,221,119,188,227,52,3,149,211,24,200,20,164,164,74,44,116,52,16,124,193,150,133,164,154,9,254,248,209,230,241,163,163,66,49,190,36,3,9,230,44,186,196,175,66,194,84,44,151,41,158,159,213,1,147,123,165,33,123,248,63,154,194,157,142,62,192,178,72,169,28,222,229,18,148,66,102,181,143,107,230,206,50,193,187,111,36,28,58,143,134,92,51,205,224,0,101,35,32,26,174,129,107,19,135,145,191,72,88,162,16,50,72,169,82,167,70,237,121,146,49,254,145,51,61,26,127,160,124,9,54,250,29,195,42,56,72,139,185,181,76,247,173,11,127,18,175,32,163,215,232,37,121,77,188,14,30,47,152,33,54,47,230,41,139,73,108,210,125,55,27,57,37,23,84,65,71,58,100,218,88,45,251,2,208,77,77,177,174,83,50,150,108,77,53,184,251,220,253,33,177,185,39,74,75,227,204,104,124,211,27,83,173,65,114,163,246,179,255,226,229,237,201,241,203,217,246,5,126,245,102,248,241,219,108,123,123,242,124,246,198,254,180,31,111,130,79,159,34,207,80,30,253,74,188,255,15,226,169,119,246,173,58,251,141,58,125,255,243,246,52,240,13,144,30,47,206,143,47,103,155,147,176,183,11,130,205,243,240,213,206,18,89,75,129,39,206,213,182,197,87,160,87,34,57,100,240,92,136,148,140,20,166,164,41,75,252,82,1,203,195,74,76,238,132,4,100,99,11,148,128,3,196,201,19,119,27,141,212,117,145,166,239,229,95,43,166,97,98,198,209,103,121,64,158,61,35,56,53,112,135,247,87,84,199,43,223,16,86,76,182,240,93,91,70,153,236,79,208,195,187,24,114,51,191,87,56,108,116,9,254,71,5,18,159,9,135,216,156,146,162,245,183,150,153,185,232,129,72,192,100,146,52,83,229,213,237,140,172,105,90,128,170,74,88,83,73,112,146,69,33,99,152,104,33,17,134,54,183,121,113,232,91,1,103,53,114,33,100,70,245,196,101,125,77,56,124,33,239,68,140,230,253,67,231,41,184,115,255,1,125,216,57,90,173,209,240,66,155,225,232,169,247,47,54,21,109,26,213,237,162,27,83,141,231,108,172,250,81,182,227,210,138,243,155,26,195,170,250,166,237,223,127,43,118,224,203,30,185,225,23,107,92,76,44,1,178,22,44,33,239,249,132,174,77,169,98,254,55,90,70,20,50,130,12,137,155,250,11,64,9,174,192,115,185,84,4,42,239,231,184,24,162,26,91,129,160,44,134,45,136,95,174,104,21,225,91,24,169,183,76,25,35,18,223,27,114,243,99,10,241,138,51,52,200,188,10,47,168,104,75,27,28,203,174,238,21,203,173,209,216,38,223,233,10,92,198,125,55,219,93,199,192,18,18,181,95,221,30,48,71,163,248,40,111,68,162,206,233,125,14,201,64,164,69,198,109,115,126,119,237,248,195,247,46,108,248,184,234,150,97,64,5,63,142,31,98,112,141,182,179,202,148,227,204,111,122,72,178,159,220,82,88,216,220,146,221,184,254,65,92,191,19,103,52,60,204,102,139,248,70,46,135,233,31,192,116,231,169,244,153,96,227,79,163,208,237,182,169,191,35,83,141,169,196,90,68,169,98,255,184,158,180,179,212,207,167,188,219,115,213,55,71,122,37,197,23,59,230,110,184,234,253,228,119,45,171,135,219,201,187,22,218,110,192,209,88,225,60,22,177,121,219,101,176,23,146,218,124,235,77,80,250,81,190,224,255,46,245,225,204,85,202,29,129,84,65,211,142,166,253,184,206,107,119,122,63,193,154,117,175,67,97,167,37,109,101,253,150,178,254,207,80,214,255,65,101,187,195,219,213,157,182,15,119,95,1,128,203,174,171,191,10,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateNotMatchIPsStructureMessageLocalizableString());
			LocalizableStrings.Add(CreateNotMatchIPStructureMessageLocalizableString());
			LocalizableStrings.Add(CreateNotMatchIPv4StructureMessageLocalizableString());
			LocalizableStrings.Add(CreateNotMatchIPv6StructureMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateNotMatchIPsStructureMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("1eb042d5-7aad-bc12-dc52-ffe24ba8108d"),
				Name = "NotMatchIPsStructureMessage",
				CreatedInPackageId = new Guid("6178851e-77d2-45aa-a9b3-851817fc2201"),
				CreatedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf"),
				ModifiedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateNotMatchIPStructureMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("0706e03b-444c-7f10-c8c8-51f15854d70e"),
				Name = "NotMatchIPStructureMessage",
				CreatedInPackageId = new Guid("6178851e-77d2-45aa-a9b3-851817fc2201"),
				CreatedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf"),
				ModifiedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateNotMatchIPv4StructureMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("54c6c815-58a1-952d-3032-b7766e0d666a"),
				Name = "NotMatchIPv4StructureMessage",
				CreatedInPackageId = new Guid("6178851e-77d2-45aa-a9b3-851817fc2201"),
				CreatedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf"),
				ModifiedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateNotMatchIPv6StructureMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("135626d3-5ea7-3b0e-4add-0f7c4fb82b94"),
				Name = "NotMatchIPv6StructureMessage",
				CreatedInPackageId = new Guid("6178851e-77d2-45aa-a9b3-851817fc2201"),
				CreatedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf"),
				ModifiedInSchemaUId = new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2a253e28-cb8f-425e-a35f-7355d2e37fcf"));
		}

		#endregion

	}

	#endregion

}

