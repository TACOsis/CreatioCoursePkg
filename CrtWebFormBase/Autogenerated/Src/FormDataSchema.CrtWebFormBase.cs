namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FormDataSchema

	/// <exclude/>
	public class FormDataSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FormDataSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FormDataSchema(FormDataSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9805f18b-4967-42e0-a558-71a8afcae843");
			Name = "FormData";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fde60690-6c92-48a2-8124-1d9224eb59b6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,144,193,138,194,48,16,134,207,91,232,59,12,120,239,3,108,79,226,162,120,16,5,133,61,200,30,98,50,45,129,54,41,51,83,97,41,190,187,73,90,20,69,100,247,146,100,230,255,191,201,159,56,213,34,119,74,35,28,144,72,177,175,164,88,120,87,217,186,39,37,214,187,98,133,14,195,17,205,55,158,150,158,218,61,210,217,106,204,179,33,207,62,122,182,174,134,253,47,11,182,229,83,93,76,206,141,55,216,188,21,139,48,250,189,97,174,197,158,83,158,224,11,206,25,97,29,10,88,52,138,249,19,98,174,47,37,42,105,93,127,106,172,6,29,165,155,2,67,210,110,224,142,124,135,36,22,3,189,75,192,168,79,48,11,197,40,85,160,215,6,6,168,81,74,224,184,92,30,124,113,252,210,98,99,56,94,114,252,73,196,189,241,31,82,123,39,74,203,159,225,104,217,118,241,75,24,252,180,191,32,102,232,204,248,230,80,141,189,135,86,158,93,174,70,217,152,161,4,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9805f18b-4967-42e0-a558-71a8afcae843"));
		}

		#endregion

	}

	#endregion

}

