namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: AnniversaryTypeConstsSchema

	/// <exclude/>
	public class AnniversaryTypeConstsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public AnniversaryTypeConstsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public AnniversaryTypeConstsSchema(AnniversaryTypeConstsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a51c8b1b-32d7-45c3-a82d-781a607be12f");
			Name = "AnniversaryTypeConsts";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("45b7d114-643d-4217-a8b2-b9950d3eddb7");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,143,77,75,3,49,16,134,207,187,144,255,48,244,164,135,180,251,81,183,93,196,131,86,20,207,246,15,76,243,81,3,187,201,146,73,148,32,254,119,211,61,20,69,68,97,78,239,60,51,60,111,36,99,143,240,156,40,168,241,154,149,172,180,56,42,154,80,40,216,43,239,145,156,14,203,157,179,218,28,163,199,96,156,101,229,59,43,139,41,30,6,35,128,66,206,4,136,1,137,224,214,90,243,170,60,161,79,251,52,169,124,69,129,50,123,226,139,213,234,235,30,66,6,128,195,157,241,225,69,98,58,17,223,95,122,133,210,217,33,193,99,52,242,204,61,73,184,1,171,222,230,244,98,81,111,90,121,213,201,134,107,41,144,75,93,215,188,63,52,200,171,170,150,93,165,250,118,43,186,197,229,220,235,55,131,157,27,39,180,9,180,139,86,206,5,225,31,62,15,103,250,254,135,84,211,175,215,93,171,54,127,74,21,31,172,204,243,9,89,151,18,45,131,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a51c8b1b-32d7-45c3-a82d-781a607be12f"));
		}

		#endregion

	}

	#endregion

}

