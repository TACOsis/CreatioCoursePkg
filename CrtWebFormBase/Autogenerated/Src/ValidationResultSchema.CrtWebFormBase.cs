namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ValidationResultSchema

	/// <exclude/>
	public class ValidationResultSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ValidationResultSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ValidationResultSchema(ValidationResultSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9260c4da-ff8c-4735-8588-92371799a4b2");
			Name = "ValidationResult";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fde60690-6c92-48a2-8124-1d9224eb59b6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,142,65,11,194,48,12,133,207,14,246,31,2,187,251,3,220,81,208,147,32,78,244,220,117,207,82,232,218,145,180,130,12,255,187,91,39,194,192,75,72,94,190,247,18,175,122,200,160,52,232,10,102,37,225,17,183,251,224,31,214,36,86,209,6,191,61,194,99,106,209,221,209,30,2,247,13,248,105,53,202,98,44,139,77,18,235,13,53,47,137,232,235,178,152,148,138,97,38,27,237,157,18,217,209,77,57,219,229,160,11,36,185,152,153,33,181,206,106,210,51,242,135,216,140,153,250,69,157,57,12,224,104,49,229,157,179,117,217,127,99,218,16,28,53,73,107,8,141,100,16,107,146,185,188,87,148,68,158,95,61,65,68,25,252,3,43,248,110,185,152,231,69,93,139,239,15,98,10,216,236,47,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9260c4da-ff8c-4735-8588-92371799a4b2"));
		}

		#endregion

	}

	#endregion

}

