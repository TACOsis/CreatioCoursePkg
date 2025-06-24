namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ILanguageIteratorSchema

	/// <exclude/>
	public class ILanguageIteratorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ILanguageIteratorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ILanguageIteratorSchema(ILanguageIteratorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f45065ed-3795-44ee-a8b8-acb977312744");
			Name = "ILanguageIterator";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("16e592d3-2033-426b-b620-6aa2b1f8eec0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,81,203,106,195,48,16,60,39,144,127,88,210,75,123,177,238,137,155,75,41,198,208,66,105,251,3,138,189,118,22,236,149,217,149,14,38,228,223,43,191,210,52,244,160,195,142,102,118,70,35,182,45,106,103,11,132,111,20,177,234,42,159,188,56,174,168,14,98,61,57,222,172,207,155,245,42,40,113,13,95,189,122,108,247,119,115,228,55,13,22,3,89,147,12,25,133,138,200,137,172,7,193,58,162,144,179,71,169,162,201,14,242,55,203,117,176,53,230,17,178,222,201,72,52,198,64,170,161,109,173,244,135,121,254,196,78,80,145,189,130,101,160,153,14,85,60,13,169,31,252,143,61,52,243,58,77,150,53,230,102,79,23,142,13,21,64,139,255,127,246,171,243,24,225,26,246,29,253,201,149,186,131,143,81,60,93,222,7,28,129,12,99,182,107,0,64,14,237,180,52,185,74,204,189,38,237,172,216,22,56,214,254,188,21,44,156,148,121,185,61,188,178,39,223,195,4,0,149,241,217,84,17,74,146,154,81,240,171,23,244,65,88,163,98,113,3,87,221,212,144,154,133,49,72,242,153,118,108,48,205,2,149,135,33,244,210,129,62,14,16,44,41,158,246,115,17,200,229,212,197,56,95,166,175,252,3,94,126,0,227,23,225,209,55,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f45065ed-3795-44ee-a8b8-acb977312744"));
		}

		#endregion

	}

	#endregion

}

