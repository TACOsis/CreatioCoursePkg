namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ContactAddressEventListenerSchema

	/// <exclude/>
	public class ContactAddressEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ContactAddressEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ContactAddressEventListenerSchema(ContactAddressEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("87183a9a-f705-46f0-8f26-2a86491608a8");
			Name = "ContactAddressEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c306f334-b3c9-4e98-9644-0ec16cd9a358");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,80,77,75,195,64,16,61,27,200,127,24,226,161,122,73,4,193,67,109,133,54,244,86,69,208,155,120,88,55,147,116,33,217,13,51,179,66,40,253,239,110,182,173,16,81,143,51,239,99,230,61,171,58,228,94,105,132,87,36,82,236,106,201,75,103,107,211,120,82,98,156,205,75,146,210,179,184,14,233,246,238,102,213,247,105,178,79,147,11,207,198,54,80,58,194,124,99,197,136,65,206,55,159,104,133,239,211,36,224,151,132,77,144,67,217,42,230,121,32,90,81,90,86,85,69,200,28,137,91,195,130,22,41,210,139,162,128,5,251,174,83,52,60,156,230,51,1,106,71,48,155,58,204,0,199,171,3,96,188,153,159,45,138,31,30,11,70,84,45,59,208,132,245,50,91,43,198,223,126,200,138,81,240,22,147,12,19,228,234,69,239,176,83,79,161,39,88,66,54,253,34,187,126,15,178,222,127,180,70,131,30,147,254,23,20,230,240,215,253,224,178,143,61,124,247,246,136,178,115,85,104,238,57,186,159,64,180,213,17,143,243,225,216,244,100,121,128,47,109,65,233,254,211,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("87183a9a-f705-46f0-8f26-2a86491608a8"));
		}

		#endregion

	}

	#endregion

}

