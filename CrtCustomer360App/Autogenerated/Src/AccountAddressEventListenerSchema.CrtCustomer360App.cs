namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AccountAddressEventListenerSchema

	/// <exclude/>
	public class AccountAddressEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AccountAddressEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AccountAddressEventListenerSchema(AccountAddressEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("680ab496-8f70-406d-8c48-ebc1f780718c");
			Name = "AccountAddressEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c306f334-b3c9-4e98-9644-0ec16cd9a358");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,80,77,75,196,48,16,61,91,232,127,24,234,97,245,146,8,130,135,117,87,168,101,111,42,130,222,196,67,76,167,221,64,155,148,153,68,40,203,254,119,211,236,174,80,81,143,51,239,99,230,61,176,170,71,30,148,70,120,69,34,197,174,241,162,114,182,49,109,32,229,141,179,162,34,95,5,246,174,71,186,190,185,42,135,33,207,118,121,118,22,216,216,22,42,71,40,54,214,27,111,144,197,230,19,173,231,219,60,139,248,57,97,27,229,80,117,138,121,9,165,214,46,88,95,214,53,33,115,34,62,24,246,104,145,18,93,74,9,43,14,125,175,104,188,59,206,39,2,52,142,96,49,119,88,0,78,87,71,192,116,83,156,44,228,15,143,21,35,170,142,29,104,194,102,93,220,43,198,223,126,40,228,36,120,75,73,198,25,114,241,162,183,216,171,167,216,19,172,161,152,127,81,92,190,71,217,16,62,58,163,65,79,73,255,11,10,75,248,235,126,116,217,165,30,190,123,123,68,191,117,117,108,238,57,185,31,65,180,245,1,79,243,254,208,244,108,185,255,2,166,196,149,140,211,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("680ab496-8f70-406d-8c48-ebc1f780718c"));
		}

		#endregion

	}

	#endregion

}

