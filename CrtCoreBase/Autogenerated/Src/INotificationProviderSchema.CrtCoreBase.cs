namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: INotificationProviderSchema

	/// <exclude/>
	public class INotificationProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public INotificationProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public INotificationProviderSchema(INotificationProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("aabdace1-2a9b-4be1-a035-cadae80c10e3");
			Name = "INotificationProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("61be812f-b09a-4a44-9ef0-5c4c5cd6d152");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,144,65,106,195,64,12,69,215,41,244,14,3,221,36,16,124,128,164,116,209,164,132,44,82,12,238,5,38,99,217,81,113,70,70,146,3,161,228,238,213,140,83,67,160,203,249,255,233,235,107,162,63,131,244,62,128,251,2,102,47,212,104,177,161,216,96,59,176,87,164,232,126,158,159,102,131,96,108,31,8,134,98,251,190,158,172,234,42,10,103,211,187,14,66,26,147,98,7,17,24,131,49,70,189,48,180,41,108,31,21,184,177,117,43,183,255,36,197,6,67,222,82,50,93,176,6,206,112,63,28,59,12,14,255,216,255,209,84,204,224,41,250,0,122,162,90,86,174,204,227,163,105,25,110,7,186,161,33,234,124,145,250,206,42,72,21,147,250,17,21,21,65,70,229,110,95,8,107,87,129,150,158,237,107,172,129,204,183,152,79,242,124,125,21,101,59,119,233,232,248,109,35,111,174,159,168,197,250,94,7,98,61,54,202,239,219,120,254,131,120,251,5,208,221,176,223,117,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("aabdace1-2a9b-4be1-a035-cadae80c10e3"));
		}

		#endregion

	}

	#endregion

}

