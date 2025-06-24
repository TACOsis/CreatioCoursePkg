namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ContactSgmSchema

	/// <exclude/>
	public class ContactSgmSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ContactSgmSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ContactSgmSchema(ContactSgmSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f27597f1-ef26-4cc5-8f2a-1e8aeb9e1ffc");
			Name = "ContactSgm";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e0bd8020-de17-4815-83cd-c2dac7bbc324");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,147,223,107,194,48,16,199,159,43,248,63,28,245,69,65,218,119,221,143,7,217,100,48,157,160,239,146,181,103,9,180,105,185,164,5,25,254,239,139,105,106,83,87,199,24,219,75,233,93,238,190,249,222,39,137,96,25,202,130,69,8,59,36,98,50,63,168,96,145,139,3,79,74,98,138,231,98,56,248,24,14,134,3,111,68,152,232,16,22,41,147,114,6,186,70,177,72,109,147,204,172,134,97,8,119,178,204,50,70,199,7,176,9,83,58,133,130,242,138,199,40,33,170,123,192,223,150,36,244,190,254,20,252,37,175,80,64,19,173,120,28,167,88,135,112,224,152,198,50,104,212,195,70,94,39,138,242,61,229,17,68,231,13,58,86,60,109,214,107,189,230,66,42,42,35,149,147,182,188,49,77,198,110,35,208,182,142,39,96,90,189,189,172,205,193,61,236,147,179,185,181,13,50,227,205,70,90,150,139,36,120,202,10,117,156,159,251,78,181,238,8,69,92,111,110,99,235,100,67,121,129,164,56,94,249,232,112,107,18,254,43,147,202,133,16,92,74,93,8,94,65,188,98,10,173,25,104,156,207,157,1,237,146,5,110,71,76,80,217,63,143,80,233,165,110,235,121,22,253,149,109,149,195,196,14,254,34,215,101,154,190,145,1,48,174,88,90,226,4,30,59,88,96,6,38,31,236,136,107,188,142,244,233,187,217,159,57,253,106,248,203,89,245,140,191,188,156,227,77,0,221,246,30,4,238,93,248,119,8,95,223,193,15,41,180,151,180,7,195,170,189,193,55,57,92,9,244,128,232,123,7,127,65,194,125,58,54,231,166,116,230,19,107,71,1,253,172,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f27597f1-ef26-4cc5-8f2a-1e8aeb9e1ffc"));
		}

		#endregion

	}

	#endregion

}

