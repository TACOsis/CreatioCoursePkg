namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: INotificationInfoSchema

	/// <exclude/>
	public class INotificationInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public INotificationInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public INotificationInfoSchema(INotificationInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("aee85563-7cba-4466-bec1-e9df72ba319c");
			Name = "INotificationInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,148,77,110,194,48,16,133,215,32,113,135,57,1,57,0,85,165,254,9,69,106,89,0,61,128,137,39,97,16,182,145,61,89,68,168,119,239,216,128,74,5,105,49,146,99,197,142,223,251,242,70,147,88,101,48,236,84,133,176,68,239,85,112,53,143,95,156,173,169,105,189,98,114,118,52,220,143,134,131,54,144,109,96,209,5,70,51,145,181,140,162,40,224,33,180,198,40,223,61,30,215,165,101,244,117,116,171,157,7,178,50,155,228,2,174,6,94,35,88,199,84,83,149,246,198,39,147,226,204,101,215,174,182,84,137,244,100,84,206,206,36,165,56,202,161,248,70,23,252,180,177,36,222,98,31,236,146,54,8,236,99,176,131,108,15,13,242,4,66,156,190,226,211,94,204,179,211,93,62,37,169,110,135,148,26,237,143,245,9,71,70,53,216,195,153,182,164,161,140,7,74,157,1,154,99,229,188,6,58,242,208,131,91,109,176,226,140,132,137,252,38,114,238,178,208,139,106,141,70,129,149,46,204,175,231,129,119,176,152,69,135,252,218,74,214,91,211,125,96,8,87,43,219,11,121,85,140,160,172,6,166,172,120,81,183,140,146,57,26,178,58,221,222,202,60,255,90,96,235,148,142,9,165,54,127,87,242,61,29,188,179,134,191,251,83,99,96,178,255,86,83,126,37,79,90,210,125,90,226,12,230,212,187,118,119,103,187,36,237,213,140,114,201,248,6,58,68,201,218,11,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("aee85563-7cba-4466-bec1-e9df72ba319c"));
		}

		#endregion

	}

	#endregion

}

