namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: INextStepQueryExecutorSchema

	/// <exclude/>
	public class INextStepQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public INextStepQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public INextStepQueryExecutorSchema(INextStepQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("96a71f59-4013-4f18-a2d2-dae189d68754");
			Name = "INextStepQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a39f3d79-3277-4890-a39e-707c83f6a851");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,203,106,195,48,16,60,39,208,127,88,210,75,11,197,190,39,174,161,132,16,12,77,72,73,127,64,181,215,174,192,150,204,106,85,98,66,255,189,146,28,187,109,66,31,183,221,209,204,236,104,37,37,26,52,173,200,17,158,145,72,24,93,114,180,212,170,148,149,37,193,82,171,104,139,7,222,51,182,230,106,122,188,154,78,172,145,170,130,125,103,24,155,197,89,239,148,117,141,185,151,153,104,141,10,73,230,142,227,88,215,132,149,67,33,83,140,84,186,113,115,200,6,227,39,139,212,173,14,152,91,214,20,216,113,28,67,98,108,211,8,234,210,83,191,35,253,38,11,52,32,20,60,236,50,40,53,65,133,204,126,186,128,124,28,12,186,4,229,156,193,248,204,208,232,2,107,19,13,166,241,23,215,214,190,212,50,7,57,68,250,49,209,228,24,82,141,151,216,32,191,234,194,204,97,23,28,250,195,243,204,1,88,35,155,255,100,187,12,215,35,173,32,209,128,114,111,116,63,67,197,146,187,173,171,103,233,42,212,225,32,74,226,192,250,77,148,21,163,196,173,208,21,165,68,186,20,18,178,37,101,210,229,31,129,147,120,96,122,233,163,52,156,12,155,219,120,70,234,239,61,126,155,27,195,228,31,233,51,255,29,172,173,44,96,200,118,187,56,173,23,85,209,111,56,244,239,253,199,249,6,58,236,3,169,107,95,39,177,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("96a71f59-4013-4f18-a2d2-dae189d68754"));
		}

		#endregion

	}

	#endregion

}

