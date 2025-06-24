namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IEmailTemplateLanguageHelperSchema

	/// <exclude/>
	public class IEmailTemplateLanguageHelperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IEmailTemplateLanguageHelperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IEmailTemplateLanguageHelperSchema(IEmailTemplateLanguageHelperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a06ed1bb-262f-444b-a442-af9c8800a88f");
			Name = "IEmailTemplateLanguageHelper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("91d5b8ed-2389-4812-9e17-f329888285e6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,145,65,78,195,48,16,69,215,141,148,59,140,186,2,169,138,15,64,232,6,85,37,82,87,144,11,12,241,36,88,138,237,104,108,47,42,212,187,19,155,36,37,148,45,18,43,203,227,249,255,191,25,27,212,228,6,108,8,106,98,70,103,91,95,60,89,211,170,46,48,122,101,77,158,125,228,217,38,56,101,58,120,61,59,79,250,33,207,198,138,16,2,74,23,180,70,62,239,167,123,101,60,113,27,205,90,203,48,176,109,200,37,33,26,32,141,170,135,81,62,244,232,105,172,72,112,132,220,188,199,247,198,106,29,140,106,82,34,244,104,186,128,29,21,115,140,248,150,51,132,183,94,53,160,150,168,234,16,157,235,201,248,52,105,159,169,31,136,199,254,72,127,3,155,10,71,242,32,169,197,208,251,37,50,129,59,50,50,82,173,145,139,197,72,252,116,42,7,100,212,96,198,93,62,110,231,254,74,110,247,135,245,208,74,150,34,181,94,149,76,62,176,113,251,151,116,94,57,148,44,74,49,63,198,238,99,80,50,34,207,3,86,242,46,149,174,113,247,95,31,243,143,135,253,77,121,178,40,137,111,212,206,91,166,191,220,214,14,170,122,133,0,107,162,184,205,205,37,207,46,159,192,44,64,113,34,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a06ed1bb-262f-444b-a442-af9c8800a88f"));
		}

		#endregion

	}

	#endregion

}

