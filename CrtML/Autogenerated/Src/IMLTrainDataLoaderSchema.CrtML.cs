namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IMLTrainDataLoaderSchema

	/// <exclude/>
	public class IMLTrainDataLoaderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IMLTrainDataLoaderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IMLTrainDataLoaderSchema(IMLTrainDataLoaderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9d2ebc20-5c7a-4359-8621-f2a9dff1e79b");
			Name = "IMLTrainDataLoader";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("145716f7-775c-41a4-ac90-f77e940d760b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,145,77,78,195,48,16,133,215,141,148,59,140,186,2,169,74,14,64,136,132,202,6,41,101,67,57,192,36,153,52,22,241,56,26,219,64,169,122,119,236,180,41,5,118,254,123,239,125,243,204,168,201,142,216,16,108,73,4,173,233,92,182,54,220,169,157,23,116,202,112,182,169,210,228,144,38,11,111,21,239,224,101,111,29,233,187,52,9,39,121,158,67,97,189,214,40,251,242,188,175,12,182,22,90,116,8,157,17,208,216,244,138,9,6,66,225,168,119,130,42,46,178,89,159,95,25,140,190,30,84,3,138,29,73,23,153,158,54,213,54,10,30,131,95,116,38,9,175,14,83,248,191,244,171,120,215,211,9,161,222,67,211,123,126,179,43,160,79,106,188,139,8,59,245,78,12,61,114,59,144,128,97,160,0,153,93,44,243,191,158,197,136,130,26,56,52,117,191,52,188,142,134,19,76,187,44,31,154,216,81,8,68,119,78,32,59,91,130,37,81,56,168,47,106,79,52,19,10,12,147,20,58,49,250,2,90,163,165,43,130,41,240,39,95,200,121,97,91,62,123,93,71,226,110,246,16,243,97,179,34,159,239,163,32,116,55,149,16,27,187,57,209,21,155,234,117,140,138,48,124,60,94,197,130,75,248,53,201,109,248,209,197,49,77,142,223,188,230,156,52,16,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9d2ebc20-5c7a-4359-8621-f2a9dff1e79b"));
		}

		#endregion

	}

	#endregion

}

