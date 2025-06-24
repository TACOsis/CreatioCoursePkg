namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: INotificationSchema

	/// <exclude/>
	public class INotificationSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public INotificationSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public INotificationSchema(INotificationSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("bc959941-3df6-44cb-bc9f-61641c97b720");
			Name = "INotification";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,144,77,106,196,48,12,133,215,19,200,29,180,108,55,246,1,18,178,41,37,100,51,148,182,23,240,184,114,48,196,114,144,237,194,16,122,247,58,153,31,60,45,29,186,48,194,210,247,222,19,34,229,48,204,74,35,188,35,179,10,222,68,241,228,201,216,49,177,138,214,83,93,45,117,181,75,193,210,8,111,199,16,209,229,249,52,161,94,135,65,244,72,200,86,55,117,149,41,41,37,180,33,57,167,248,216,157,255,3,69,100,179,6,24,207,64,62,90,99,245,230,12,51,251,79,251,129,44,46,82,89,104,231,116,152,172,6,123,149,15,251,66,155,129,101,139,252,149,185,53,94,49,38,166,112,19,39,174,180,252,137,183,124,226,187,50,66,180,242,210,94,185,225,153,146,67,86,135,9,219,155,85,6,50,190,131,30,99,217,12,15,143,205,157,253,122,246,105,6,202,183,255,99,171,16,121,61,248,137,91,96,196,216,192,215,29,195,151,243,41,255,225,185,207,68,97,185,203,15,160,174,114,249,6,30,209,146,83,12,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("bc959941-3df6-44cb-bc9f-61641c97b720"));
		}

		#endregion

	}

	#endregion

}

