namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IDefaultValueManagerSchema

	/// <exclude/>
	public class IDefaultValueManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IDefaultValueManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IDefaultValueManagerSchema(IDefaultValueManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("823db1cb-37ea-4cab-bf5f-dc43956066ce");
			Name = "IDefaultValueManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("30ff16fc-9eaa-40ad-9611-33924da6f041");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,145,77,107,195,48,12,134,207,43,244,63,136,158,54,40,201,15,88,151,203,202,74,15,187,44,251,56,171,137,28,60,18,185,200,118,71,24,251,239,147,147,174,31,107,193,96,75,178,30,189,126,205,216,145,223,98,69,240,74,34,232,157,9,217,163,99,99,155,40,24,172,227,108,69,76,122,164,250,131,54,79,78,186,146,100,103,43,154,78,190,167,147,155,232,45,55,80,246,62,80,119,255,47,86,78,219,82,149,32,126,164,216,234,120,231,116,156,80,202,235,202,243,28,22,62,118,29,74,95,236,227,23,10,81,216,67,77,6,99,27,96,135,109,36,15,198,9,52,118,71,12,45,114,157,136,186,1,113,176,161,207,254,80,249,9,107,27,55,173,173,192,114,32,49,233,193,235,229,72,124,79,192,103,100,108,72,244,94,122,214,133,144,33,81,82,184,166,226,56,243,114,232,152,217,162,96,7,172,86,63,204,162,39,81,131,121,52,102,86,172,217,7,100,149,227,12,164,26,84,135,98,182,200,135,206,235,160,175,241,59,214,181,50,234,164,193,88,237,86,202,222,143,179,238,165,29,136,170,106,225,131,104,117,14,110,243,169,99,10,88,209,232,128,191,93,69,91,195,1,59,135,183,51,169,112,174,252,46,125,217,207,116,162,235,23,174,34,109,149,68,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("823db1cb-37ea-4cab-bf5f-dc43956066ce"));
		}

		#endregion

	}

	#endregion

}

