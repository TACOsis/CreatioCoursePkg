namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: INotificationSettingsRepositorySchema

	/// <exclude/>
	public class INotificationSettingsRepositorySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public INotificationSettingsRepositorySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public INotificationSettingsRepositorySchema(INotificationSettingsRepositorySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("dc33ae41-bf6c-4f6c-b52a-7eaf39e99da6");
			Name = "INotificationSettingsRepository";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ba26f98-9709-4408-98d0-761f0c4bf2aa");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,146,207,74,196,48,16,198,207,91,232,59,12,235,69,65,154,187,214,245,224,97,233,69,193,174,15,144,77,39,53,98,254,144,76,15,69,246,221,77,178,181,212,174,32,228,50,223,228,251,229,155,36,134,107,12,142,11,132,3,122,207,131,149,84,61,89,35,85,63,120,78,202,26,40,139,175,178,216,12,65,153,30,218,49,16,234,251,178,136,202,149,199,62,245,27,67,232,101,36,220,65,243,108,73,73,37,178,177,69,162,232,9,175,232,108,80,100,253,24,77,113,49,198,160,14,131,214,220,143,187,169,158,25,96,37,152,5,36,64,152,48,224,103,78,245,67,97,11,140,27,142,159,74,128,154,73,255,135,73,115,93,196,201,194,30,233,87,12,80,154,247,8,170,67,147,68,244,32,173,135,224,80,164,170,131,32,222,81,243,106,230,177,53,176,118,220,115,13,38,222,246,195,54,65,104,108,179,231,173,233,182,187,151,227,7,10,154,40,16,165,170,102,217,240,183,127,153,236,48,58,76,136,229,176,64,81,132,21,101,63,168,46,205,181,220,216,164,169,174,115,103,149,233,22,146,250,8,151,71,221,196,215,223,156,206,63,0,77,119,254,4,101,113,250,6,169,204,103,84,73,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("dc33ae41-bf6c-4f6c-b52a-7eaf39e99da6"));
		}

		#endregion

	}

	#endregion

}

