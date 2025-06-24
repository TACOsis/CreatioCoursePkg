namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FormDataOptionsSchema

	/// <exclude/>
	public class FormDataOptionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FormDataOptionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FormDataOptionsSchema(FormDataOptionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6d42f939-512c-48fc-a714-f267c7a43313");
			Name = "FormDataOptions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fde60690-6c92-48a2-8124-1d9224eb59b6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,82,77,75,196,48,16,61,43,248,31,6,188,119,239,42,130,248,117,18,151,93,193,243,52,121,219,141,164,73,73,166,93,203,226,127,119,218,238,138,174,162,224,165,233,76,222,188,143,36,129,107,228,134,13,232,9,41,113,142,43,41,174,99,88,185,170,77,44,46,134,226,30,1,250,11,251,140,242,46,166,122,137,212,57,131,147,227,237,201,241,81,155,93,168,104,217,103,65,125,126,80,23,59,228,67,180,240,191,110,22,74,253,59,224,202,136,235,70,63,138,83,228,105,66,165,5,93,123,206,249,140,6,95,55,44,252,216,12,144,60,66,102,179,25,93,228,182,174,57,245,151,187,90,147,9,187,144,137,173,117,86,161,236,41,78,51,180,138,137,150,220,97,23,243,177,124,129,145,129,116,207,53,251,68,214,180,165,119,134,204,32,255,93,253,104,59,58,248,112,57,79,177,65,18,7,181,58,31,39,167,253,67,139,99,227,206,115,69,46,88,103,244,208,51,201,154,133,2,96,179,54,141,111,45,8,175,6,163,20,73,223,64,219,148,244,14,85,25,180,89,35,144,19,157,74,113,147,201,182,105,56,209,204,221,176,32,136,147,190,248,80,254,28,104,159,168,140,209,171,128,32,216,197,142,244,217,201,250,118,47,249,52,40,110,169,130,156,83,30,62,111,255,138,34,81,69,96,90,129,122,95,33,33,209,26,108,117,233,216,59,59,189,188,191,141,90,151,185,244,88,76,20,243,168,27,253,79,238,78,53,206,116,23,99,61,117,191,54,223,222,1,85,212,243,4,10,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6d42f939-512c-48fc-a714-f267c7a43313"));
		}

		#endregion

	}

	#endregion

}

