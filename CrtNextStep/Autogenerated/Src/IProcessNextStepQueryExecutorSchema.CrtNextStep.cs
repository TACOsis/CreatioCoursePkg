namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IProcessNextStepQueryExecutorSchema

	/// <exclude/>
	public class IProcessNextStepQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IProcessNextStepQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IProcessNextStepQueryExecutorSchema(IProcessNextStepQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b5144708-5756-4aaa-9094-370bf2798cd9");
			Name = "IProcessNextStepQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a39f3d79-3277-4890-a39e-707c83f6a851");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,83,81,107,194,64,12,126,86,240,63,4,247,178,129,180,239,234,10,67,68,10,83,28,238,15,220,122,105,61,104,239,228,146,110,22,217,127,223,221,213,58,167,160,47,123,75,114,223,151,228,75,114,90,84,72,59,145,33,188,163,181,130,76,206,209,204,232,92,21,181,21,172,140,142,86,184,231,13,227,142,6,253,195,160,223,171,73,233,2,54,13,49,86,147,11,223,49,203,18,51,79,163,104,129,26,173,202,28,198,161,30,44,22,46,10,169,102,180,185,43,55,134,116,109,77,134,68,93,254,183,26,109,51,223,99,86,179,177,129,20,199,49,76,169,174,42,97,155,228,232,59,210,167,146,72,32,52,188,172,83,200,141,133,2,153,125,19,2,178,83,125,48,57,104,151,25,200,183,14,149,145,88,122,146,132,92,149,37,240,22,43,248,82,188,5,33,165,242,4,81,130,210,185,137,186,186,241,89,97,229,187,110,17,199,246,239,117,223,59,4,5,39,221,75,228,173,145,52,134,117,253,81,170,172,125,188,212,23,2,11,100,250,39,29,215,66,218,200,78,88,81,129,118,155,127,30,162,102,197,205,202,217,195,100,30,236,240,16,77,227,128,186,69,74,229,137,226,54,226,140,92,161,189,67,44,177,114,72,74,37,13,147,227,4,161,11,158,101,161,176,215,11,73,65,177,219,243,117,9,139,92,91,77,201,236,246,216,28,177,67,122,234,171,34,158,118,251,91,122,68,226,167,127,186,247,71,98,235,207,234,119,68,35,88,212,74,66,39,127,4,33,69,11,75,224,76,220,211,228,184,126,212,178,189,128,224,127,183,127,225,79,208,197,126,0,15,154,151,219,132,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b5144708-5756-4aaa-9094-370bf2798cd9"));
		}

		#endregion

	}

	#endregion

}

