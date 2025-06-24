namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: NotificationInfoSchema

	/// <exclude/>
	public class NotificationInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public NotificationInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public NotificationInfoSchema(NotificationInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("026063fa-ed79-499f-833f-fe2eb2fb3566");
			Name = "NotificationInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,82,205,106,195,48,12,62,183,208,119,208,19,52,247,181,12,182,110,148,192,214,67,155,61,128,23,43,169,32,182,131,37,31,194,216,187,79,245,82,8,219,161,41,216,70,146,191,63,176,189,113,200,189,169,17,42,140,209,112,104,100,189,11,190,161,54,69,35,20,252,106,249,181,90,46,18,147,111,225,52,176,160,219,104,175,171,40,10,216,114,114,206,196,225,113,236,119,157,97,134,38,68,32,175,167,203,10,16,26,144,51,130,15,66,13,213,121,182,190,10,20,19,133,62,125,118,84,67,157,69,14,19,116,169,98,15,80,254,29,41,229,146,237,202,99,137,151,144,21,73,135,144,47,22,45,202,38,23,60,22,223,255,241,207,193,14,115,224,251,68,22,74,103,90,44,237,108,252,171,23,146,97,30,97,204,243,75,57,213,103,116,230,160,175,51,219,235,29,153,111,165,155,112,94,140,96,69,170,127,68,71,222,230,114,22,113,204,249,22,140,197,120,87,66,253,63,79,86,205,62,60,201,93,94,251,24,82,127,203,74,183,174,31,136,13,130,191,209,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("026063fa-ed79-499f-833f-fe2eb2fb3566"));
		}

		#endregion

	}

	#endregion

}

