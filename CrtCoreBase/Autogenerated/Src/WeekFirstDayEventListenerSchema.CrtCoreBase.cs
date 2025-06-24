namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: WeekFirstDayEventListenerSchema

	/// <exclude/>
	public class WeekFirstDayEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public WeekFirstDayEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public WeekFirstDayEventListenerSchema(WeekFirstDayEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f2655999-f564-4fcb-821a-b154d5729898");
			Name = "WeekFirstDayEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a5e2b265-8078-4de9-a58f-70804c80c57f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,85,193,110,218,64,16,61,19,41,255,48,117,122,176,37,100,238,161,84,74,8,173,144,72,91,149,164,57,84,61,44,246,96,182,181,119,233,238,154,132,32,254,189,227,93,27,217,174,73,196,161,82,47,160,157,125,243,102,230,237,27,16,44,67,189,102,17,194,29,42,197,180,92,154,112,44,197,146,39,185,98,134,75,113,126,182,59,63,235,229,154,139,4,230,91,109,48,11,103,92,252,30,30,130,245,188,44,147,162,251,70,225,177,120,56,17,134,27,142,250,85,64,56,217,160,48,5,142,144,23,10,19,106,15,198,41,211,250,18,30,16,127,125,224,74,155,27,182,181,176,25,167,94,5,42,11,254,110,41,154,23,254,60,90,97,198,62,145,0,48,2,175,78,224,5,63,40,105,157,47,82,30,65,84,20,56,206,15,151,112,205,52,118,20,32,138,157,173,126,232,245,22,205,74,198,212,237,23,197,55,204,160,187,93,187,3,104,67,130,71,176,144,50,133,169,30,203,52,207,196,120,197,68,130,177,239,232,1,237,87,159,160,170,208,41,178,152,98,130,0,70,239,11,174,158,67,132,31,209,148,169,142,231,27,75,115,212,126,16,94,137,173,255,68,96,120,10,221,228,163,58,203,176,179,163,141,228,49,220,173,148,124,156,60,69,184,46,92,241,192,205,234,22,181,102,9,250,101,51,153,59,142,101,140,125,184,215,168,200,70,2,163,2,13,121,227,24,192,206,246,58,253,138,90,230,42,194,185,145,138,82,65,181,206,163,86,98,216,74,24,90,154,13,83,85,113,202,16,248,8,51,25,177,148,63,179,69,74,200,162,57,191,197,220,111,190,119,227,217,188,62,88,218,222,91,239,47,30,29,238,106,99,238,67,43,171,23,184,62,76,161,144,173,79,97,30,147,128,7,185,252,50,203,33,247,199,85,174,50,11,250,206,183,175,180,179,46,225,218,226,234,78,33,5,218,222,169,76,227,21,224,170,89,190,4,255,77,71,126,197,223,83,104,114,37,28,120,111,63,95,124,83,170,91,90,175,9,115,4,199,205,227,185,186,19,165,164,42,99,244,0,45,191,212,85,187,64,17,187,117,58,182,91,118,109,221,229,96,48,128,119,92,172,80,113,19,203,8,6,118,73,202,197,150,27,250,153,225,49,58,229,63,139,27,76,209,20,102,145,139,159,84,24,52,85,66,213,7,167,255,53,46,233,183,200,58,229,74,37,26,176,82,234,53,89,252,242,1,3,199,23,156,42,144,109,235,4,129,78,154,121,42,136,232,63,28,218,245,245,143,134,190,95,211,138,157,62,115,215,110,182,198,116,115,45,232,255,32,172,149,169,248,241,37,35,187,104,51,72,177,63,222,0,236,180,160,7,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateChangeErrorMessageLocalizableString());
			LocalizableStrings.Add(CreateInsertErrorMessageLocalizableString());
			LocalizableStrings.Add(CreateDeleteErrorMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateChangeErrorMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("e5804a68-7089-485e-96f8-3eabb11e8461"),
				Name = "ChangeErrorMessage",
				CreatedInPackageId = new Guid("a5e2b265-8078-4de9-a58f-70804c80c57f"),
				CreatedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898"),
				ModifiedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateInsertErrorMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("f413d2f9-917b-5138-d83b-1bd84779f721"),
				Name = "InsertErrorMessage",
				CreatedInPackageId = new Guid("a5e2b265-8078-4de9-a58f-70804c80c57f"),
				CreatedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898"),
				ModifiedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateDeleteErrorMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("ec991ff1-a93b-52b8-990a-e8cc8316934e"),
				Name = "DeleteErrorMessage",
				CreatedInPackageId = new Guid("a5e2b265-8078-4de9-a58f-70804c80c57f"),
				CreatedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898"),
				ModifiedInSchemaUId = new Guid("f2655999-f564-4fcb-821a-b154d5729898")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f2655999-f564-4fcb-821a-b154d5729898"));
		}

		#endregion

	}

	#endregion

}

