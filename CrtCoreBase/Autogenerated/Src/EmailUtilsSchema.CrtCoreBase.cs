namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmailUtilsSchema

	/// <exclude/>
	public class EmailUtilsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmailUtilsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmailUtilsSchema(EmailUtilsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("16897125-c693-4777-9da7-082cb0569c67");
			Name = "EmailUtils";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ce224767-e889-460a-86ca-36a387a79bb0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,82,193,110,219,48,12,61,187,64,255,129,203,14,179,215,77,190,183,174,215,161,40,118,89,129,162,237,118,89,119,208,108,58,17,102,203,1,41,47,9,138,254,123,37,209,78,227,236,226,132,228,123,143,79,15,180,186,67,94,235,10,225,17,137,52,247,141,83,215,189,109,204,114,32,237,76,111,79,79,158,79,79,146,129,141,93,194,195,142,29,118,126,222,182,88,133,33,171,111,104,145,76,117,113,140,121,196,173,83,247,184,28,90,77,55,219,53,33,115,192,123,156,71,190,39,92,250,10,174,91,205,124,14,55,157,54,237,15,103,90,142,211,60,207,161,224,161,235,52,237,202,177,246,150,156,54,150,97,240,48,227,118,208,161,91,245,53,67,211,19,108,122,250,11,27,227,86,162,164,38,141,252,64,100,61,252,105,77,5,236,252,163,42,168,194,226,131,189,240,28,55,239,141,221,138,250,57,220,69,154,12,143,125,197,198,61,186,129,188,175,214,176,131,190,1,12,154,252,9,24,67,68,88,67,67,125,7,197,90,147,238,8,27,176,62,239,203,5,233,205,131,35,31,215,34,47,213,94,59,63,22,23,218,127,156,50,26,7,93,215,33,86,168,36,155,16,62,71,128,42,242,72,124,211,33,113,89,126,63,116,57,9,32,123,194,132,8,148,121,86,129,83,136,112,9,119,154,24,227,250,175,66,78,101,2,123,119,89,200,50,73,146,127,154,198,48,224,18,44,110,102,58,105,118,17,65,254,64,112,11,20,191,130,138,157,244,106,145,126,41,34,187,124,218,156,165,191,62,159,169,15,191,253,191,236,227,149,212,74,170,39,53,43,179,197,168,27,150,119,218,85,43,12,219,163,190,186,149,58,125,115,42,88,127,65,168,171,21,164,17,32,52,48,118,226,79,239,73,76,3,233,59,121,145,154,206,49,141,32,245,83,183,3,102,123,100,50,162,124,68,51,128,236,75,94,226,143,124,37,246,49,168,56,127,25,47,17,109,45,199,24,107,233,206,155,190,7,175,247,2,232,155,191,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("16897125-c693-4777-9da7-082cb0569c67"));
		}

		#endregion

	}

	#endregion

}

