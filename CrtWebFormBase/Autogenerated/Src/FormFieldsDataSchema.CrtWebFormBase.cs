namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FormFieldsDataSchema

	/// <exclude/>
	public class FormFieldsDataSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FormFieldsDataSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FormFieldsDataSchema(FormFieldsDataSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("91497938-5465-4428-8b59-f6b868ea29b1");
			Name = "FormFieldsData";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fde60690-6c92-48a2-8124-1d9224eb59b6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,144,205,10,131,48,16,132,207,21,124,135,128,119,31,160,158,74,139,61,21,4,11,61,167,113,148,64,76,100,55,10,69,250,238,141,177,20,250,67,47,33,179,243,101,118,136,149,61,120,144,10,226,12,34,201,174,245,249,222,217,86,119,35,73,175,157,205,143,176,8,87,52,23,92,75,71,125,13,154,180,66,154,204,105,178,25,89,219,78,212,55,246,232,139,15,157,63,201,147,107,96,254,154,121,136,254,15,236,148,215,83,236,19,184,64,102,132,46,8,177,55,146,121,43,150,94,165,134,105,248,32,189,140,196,48,94,141,86,66,45,192,151,191,153,35,243,138,169,200,13,32,175,17,178,170,248,112,245,159,33,236,105,41,102,195,95,137,89,116,240,133,224,229,184,255,162,38,105,198,159,88,6,219,172,251,162,94,167,239,195,251,3,118,12,165,184,143,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("91497938-5465-4428-8b59-f6b868ea29b1"));
		}

		#endregion

	}

	#endregion

}

