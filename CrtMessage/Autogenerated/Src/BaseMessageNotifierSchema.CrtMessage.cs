namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseMessageNotifierSchema

	/// <exclude/>
	public class BaseMessageNotifierSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseMessageNotifierSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseMessageNotifierSchema(BaseMessageNotifierSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("dc1877d9-eed2-4af1-98c3-84cf7a260a2d");
			Name = "BaseMessageNotifier";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("4a46c73e-2533-4fb4-8b08-c16580add3d1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,193,110,194,48,12,61,23,137,127,176,180,75,185,240,1,116,155,180,33,109,66,26,19,26,227,60,133,196,45,145,74,82,197,105,39,132,248,247,37,180,129,194,232,134,184,217,206,203,123,246,139,83,146,84,25,204,55,100,113,61,28,235,60,71,110,165,86,52,124,69,133,70,242,164,223,235,247,20,91,35,21,140,35,124,162,49,140,116,106,29,86,165,50,43,13,243,240,126,111,235,113,209,157,193,204,165,48,206,25,209,8,158,25,225,20,137,136,101,248,174,173,76,37,154,61,174,40,151,185,228,192,150,100,13,227,22,184,199,31,224,45,52,140,96,114,86,114,215,107,177,131,218,139,196,92,56,185,153,145,21,179,88,31,22,117,2,6,153,208,42,223,192,155,36,123,31,200,124,226,7,124,132,175,188,9,41,105,88,81,137,154,248,84,101,102,116,129,198,74,244,74,251,254,27,161,122,150,134,120,162,82,125,18,111,61,38,34,180,201,62,200,154,96,247,183,152,115,215,89,83,114,171,141,159,75,91,247,44,40,194,100,77,122,201,176,120,208,40,30,231,130,7,80,248,221,49,127,60,184,166,157,41,218,149,22,151,7,175,180,20,48,47,151,196,141,92,98,124,174,0,161,143,223,141,13,159,132,136,15,199,237,62,218,212,11,69,55,145,127,224,90,87,248,63,255,222,185,205,193,183,84,187,141,225,43,136,43,118,164,7,169,90,139,18,160,81,168,12,23,133,112,187,22,219,149,164,90,199,11,117,185,90,87,207,138,193,233,137,178,104,82,247,213,46,45,254,241,231,200,0,235,248,30,81,116,219,62,94,253,152,73,11,127,221,11,181,111,4,207,147,14,59,118,63,93,55,181,160,151,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("dc1877d9-eed2-4af1-98c3-84cf7a260a2d"));
		}

		#endregion

	}

	#endregion

}

