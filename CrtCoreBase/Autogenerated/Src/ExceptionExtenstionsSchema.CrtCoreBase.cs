namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ExceptionExtenstionsSchema

	/// <exclude/>
	public class ExceptionExtenstionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ExceptionExtenstionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ExceptionExtenstionsSchema(ExceptionExtenstionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("faf2dccd-bc35-40d3-96eb-76d934e9f741");
			Name = "ExceptionExtenstions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("98782977-14c0-4cb2-aa85-be92ba3c008e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,145,203,78,195,48,16,69,215,169,196,63,12,21,139,68,160,72,108,41,173,84,65,84,21,1,155,242,3,174,51,109,71,114,38,193,227,244,161,42,255,142,243,232,19,36,118,246,204,153,59,215,215,172,50,148,66,105,132,47,180,86,73,190,112,241,75,206,11,90,150,86,57,202,249,166,183,191,233,5,165,16,47,97,182,19,135,217,224,234,238,121,99,80,215,176,196,19,100,180,164,127,49,239,196,223,190,232,203,69,57,55,164,65,156,151,215,160,141,18,129,100,171,177,168,5,146,173,67,150,90,201,147,245,226,160,176,180,86,14,15,252,52,225,50,67,171,230,6,159,143,83,35,120,69,209,200,169,98,39,99,78,103,104,22,161,91,209,153,48,224,225,20,65,163,27,164,121,119,8,118,132,38,5,139,174,180,103,220,160,109,30,239,48,60,245,226,41,251,103,38,151,104,5,155,21,25,132,240,54,60,13,121,15,92,26,19,69,13,83,53,9,92,69,32,206,214,65,77,208,141,141,249,64,17,181,68,249,215,254,90,217,83,81,46,204,253,17,70,187,190,25,202,186,13,231,35,18,123,202,127,97,24,226,3,80,4,195,17,220,245,247,4,247,240,88,61,193,30,227,206,86,213,239,132,186,176,90,235,241,91,78,28,38,188,38,155,115,134,236,226,79,220,248,15,247,90,135,101,199,231,183,17,84,240,3,231,239,173,137,120,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("faf2dccd-bc35-40d3-96eb-76d934e9f741"));
		}

		#endregion

	}

	#endregion

}

