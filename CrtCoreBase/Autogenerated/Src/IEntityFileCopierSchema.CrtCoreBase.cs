namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IEntityFileCopierSchema

	/// <exclude/>
	public class IEntityFileCopierSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IEntityFileCopierSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IEntityFileCopierSchema(IEntityFileCopierSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c02c3b56-5b96-4366-af70-1c204d27c6c2");
			Name = "IEntityFileCopier";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c85d2d65-6230-4aeb-9934-bfac9785d42f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,146,77,106,195,48,16,133,215,9,228,14,67,186,105,161,216,251,36,13,148,208,150,44,82,74,146,11,168,242,200,22,88,63,29,73,45,38,228,238,149,101,39,52,193,180,116,231,121,243,252,233,105,70,154,41,116,150,113,132,61,18,49,103,132,207,86,70,11,89,6,98,94,26,61,25,31,38,227,81,112,82,151,176,107,156,71,53,159,140,163,114,67,88,198,54,172,181,71,18,17,48,131,245,147,246,210,55,207,178,198,149,177,18,41,25,243,60,135,133,11,74,49,106,150,125,189,69,75,232,80,123,7,220,104,79,140,123,16,134,98,97,155,246,32,76,32,16,145,228,224,75,250,10,156,69,46,133,228,96,108,155,202,101,39,114,254,3,109,195,123,29,45,242,20,105,40,209,232,144,82,157,243,111,208,87,166,112,51,120,75,63,119,205,235,204,73,136,132,6,88,93,247,177,4,25,5,70,227,41,172,55,192,180,241,21,82,118,70,228,215,140,133,101,196,20,232,56,245,135,169,51,129,56,110,88,28,42,237,120,133,138,189,70,125,186,236,190,147,9,140,128,206,6,42,249,250,211,178,69,158,72,127,131,183,200,13,21,235,34,98,47,56,148,116,8,90,126,4,148,69,139,21,113,64,191,131,61,163,18,253,53,120,159,212,255,128,63,141,44,210,60,31,235,250,214,121,106,119,62,60,141,123,120,9,209,59,116,163,190,53,148,233,110,222,47,25,117,209,237,57,213,199,238,229,94,136,199,111,20,241,24,192,2,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c02c3b56-5b96-4366-af70-1c204d27c6c2"));
		}

		#endregion

	}

	#endregion

}

