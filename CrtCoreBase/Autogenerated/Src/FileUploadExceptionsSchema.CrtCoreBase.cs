namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FileUploadExceptionsSchema

	/// <exclude/>
	public class FileUploadExceptionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FileUploadExceptionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FileUploadExceptionsSchema(FileUploadExceptionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69");
			Name = "FileUploadExceptions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,146,75,107,194,64,16,199,207,10,126,135,33,189,40,148,228,110,213,139,180,80,168,80,170,237,125,76,38,186,144,236,134,157,77,125,20,191,123,39,15,109,168,152,30,250,58,45,59,143,223,252,103,247,175,49,37,206,48,36,88,144,181,200,38,118,254,212,232,88,173,114,139,78,25,237,223,169,132,158,179,196,96,212,235,190,245,186,157,156,149,94,193,124,199,142,210,155,211,189,217,157,166,70,75,70,114,87,150,86,194,128,105,130,204,67,152,225,182,160,205,213,158,110,183,33,81,68,81,113,102,197,156,178,62,8,2,24,113,158,166,104,119,147,250,190,88,19,208,177,10,220,26,29,40,150,211,154,141,134,205,154,52,196,194,4,22,104,145,160,26,236,31,113,65,131,151,229,203,68,133,16,22,114,90,213,192,16,26,202,58,197,222,31,203,24,205,206,230,161,51,86,118,122,44,145,165,250,51,249,101,96,106,9,29,49,40,233,66,45,15,109,98,112,187,140,164,146,8,66,75,241,216,107,147,226,5,19,255,4,15,62,211,71,25,90,76,65,203,55,142,61,22,73,184,34,111,242,68,108,114,43,179,234,136,63,10,202,186,178,173,126,132,182,153,253,251,35,97,94,1,142,160,65,1,232,116,134,176,68,166,190,166,13,60,152,16,19,181,199,165,160,156,21,43,244,235,210,107,240,62,172,115,34,179,119,93,33,188,179,70,246,219,36,205,136,185,216,228,5,147,156,188,193,0,202,63,57,84,15,127,69,58,170,126,71,110,85,172,25,58,119,226,189,126,149,225,81,115,218,143,186,80,85,252,175,77,120,73,200,31,27,240,146,140,223,50,223,165,121,255,100,188,75,114,190,99,186,195,59,140,201,233,255,91,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateMaxFileSizeExceededExceptionMessageLocalizableString());
			LocalizableStrings.Add(CreateInvalidFileSizeExceptionMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateMaxFileSizeExceededExceptionMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("4f2e8a1b-07d3-4f66-9213-287d5ef48032"),
				Name = "MaxFileSizeExceededExceptionMessage",
				CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa"),
				CreatedInSchemaUId = new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69"),
				ModifiedInSchemaUId = new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateInvalidFileSizeExceptionMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("5880e243-dfed-417c-ae92-4c19a2d2bc78"),
				Name = "InvalidFileSizeExceptionMessage",
				CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa"),
				CreatedInSchemaUId = new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69"),
				ModifiedInSchemaUId = new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("743fae56-f4dc-4ba5-9266-2ebf40deeb69"));
		}

		#endregion

	}

	#endregion

}

