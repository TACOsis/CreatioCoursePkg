namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SetPackageHotfixTimeoutSysSettingTo120Schema

	/// <exclude/>
	public class SetPackageHotfixTimeoutSysSettingTo120Schema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SetPackageHotfixTimeoutSysSettingTo120Schema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SetPackageHotfixTimeoutSysSettingTo120Schema(SetPackageHotfixTimeoutSysSettingTo120Schema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45d1c507-542a-4a4f-b7ed-a40bc0fb313f");
			Name = "SetPackageHotfixTimeoutSysSettingTo120";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fd0d0b19-48d5-41ec-b5ce-f9b933af6b17");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,82,93,111,26,49,16,124,62,164,252,135,213,245,229,78,10,167,132,2,106,131,120,72,105,218,158,148,74,72,144,230,177,50,246,222,97,213,216,87,127,80,162,40,255,189,62,31,16,46,1,41,202,227,206,218,179,51,179,43,201,10,77,69,40,194,28,181,38,70,21,54,155,40,89,240,210,105,98,185,146,103,157,199,179,78,228,12,151,37,204,30,140,197,213,104,95,31,126,209,120,10,207,190,126,241,45,223,252,160,177,244,140,48,17,196,152,43,152,161,157,18,250,135,148,248,67,217,130,111,230,124,133,202,89,63,196,119,172,231,153,171,203,222,69,46,141,37,66,204,168,230,149,13,52,149,91,8,78,129,214,44,239,33,129,43,200,91,192,205,6,169,179,74,123,238,199,48,97,175,244,27,71,193,188,212,169,230,107,98,177,105,86,77,1,26,9,83,82,60,192,119,199,25,252,174,142,200,200,25,140,67,59,155,18,109,48,137,251,253,226,227,101,143,177,238,144,14,176,219,95,124,26,118,23,159,17,187,23,69,159,246,6,189,225,96,49,24,198,233,232,232,24,46,237,241,41,191,136,112,232,7,121,163,163,173,126,148,172,177,208,246,243,19,237,82,5,67,33,195,173,159,38,207,181,242,46,154,40,48,185,51,168,253,25,72,164,245,13,128,107,149,41,212,39,17,69,107,162,193,85,172,22,57,6,137,255,224,46,20,73,251,245,57,196,207,219,48,65,107,156,134,255,81,230,209,36,206,165,197,18,117,211,57,135,137,18,110,37,235,192,252,105,90,212,201,105,207,233,142,231,126,137,218,167,123,48,39,103,113,154,229,230,230,175,35,34,121,27,101,206,246,124,215,146,189,208,85,147,221,162,49,111,228,218,202,11,139,140,154,140,178,93,182,13,250,244,122,83,91,172,189,60,143,253,7,116,22,100,32,164,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45d1c507-542a-4a4f-b7ed-a40bc0fb313f"));
		}

		#endregion

	}

	#endregion

}

