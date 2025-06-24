namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailTemplateLanguageHandlerSchema

	/// <exclude/>
	public class EmailTemplateLanguageHandlerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailTemplateLanguageHandlerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailTemplateLanguageHandlerSchema(EmailTemplateLanguageHandlerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ce5d036c-9766-420e-a3b2-131f211f241e");
			Name = "EmailTemplateLanguageHandler";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("91d5b8ed-2389-4812-9e17-f329888285e6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,83,219,74,195,64,16,125,110,161,255,48,232,139,130,54,239,90,11,162,130,66,133,82,243,3,211,100,26,23,55,187,113,102,87,40,210,127,55,183,77,155,42,85,17,124,203,204,206,156,61,151,141,193,156,164,192,132,32,38,102,20,187,114,227,27,107,86,42,243,140,78,89,51,26,190,143,134,163,225,224,152,41,43,75,184,209,40,114,1,119,57,42,29,83,94,104,116,52,67,147,121,204,232,30,77,170,137,235,249,40,138,96,34,62,207,145,215,211,182,190,54,128,75,113,140,137,3,58,175,16,192,181,16,160,91,12,96,74,72,189,17,143,3,72,180,135,50,97,42,203,23,153,222,146,168,204,80,10,40,128,144,60,163,50,96,87,37,128,20,214,136,90,42,173,220,122,60,137,194,124,216,119,235,130,10,100,204,193,148,234,175,142,226,5,189,122,18,119,52,141,203,147,6,162,110,148,187,221,236,161,109,241,186,183,92,213,251,187,133,95,106,149,108,245,39,149,143,7,109,156,4,94,103,208,222,81,225,52,105,116,113,204,217,22,196,78,81,153,201,188,190,162,57,223,183,191,110,60,249,36,33,17,91,123,251,217,220,192,241,151,164,182,176,240,94,161,12,50,114,151,245,135,180,31,155,150,51,153,180,161,221,215,240,72,238,217,166,63,17,208,144,144,46,159,175,101,212,157,221,136,56,228,187,232,114,237,114,9,79,202,121,54,50,93,132,236,66,99,199,150,55,197,206,163,14,186,91,50,39,193,144,64,234,180,117,161,65,8,83,28,92,51,94,235,211,93,87,254,87,232,238,116,248,247,102,22,83,226,63,186,211,61,236,111,236,57,131,135,184,119,47,244,105,84,222,124,249,92,26,187,250,205,205,7,167,69,203,217,191,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ce5d036c-9766-420e-a3b2-131f211f241e"));
		}

		#endregion

	}

	#endregion

}

