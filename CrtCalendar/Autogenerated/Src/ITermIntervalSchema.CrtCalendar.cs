namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ITermIntervalSchema

	/// <exclude/>
	public class ITermIntervalSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ITermIntervalSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ITermIntervalSchema(ITermIntervalSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("a8612d32-9e85-4a58-a2a0-2c095913c7e1");
			Name = "ITermInterval";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f69a32ba-7e77-47bd-be6b-d095bbdc629a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,82,77,79,194,64,16,61,67,194,127,152,232,5,46,237,93,145,11,70,195,1,98,164,122,49,30,134,118,90,55,182,91,178,59,53,65,227,127,119,118,251,1,22,193,219,238,236,155,247,222,190,25,141,5,217,45,198,4,17,25,131,182,76,57,152,151,58,85,89,101,144,85,169,71,195,175,209,112,80,89,165,51,88,239,44,83,113,221,187,7,143,149,102,85,80,176,38,163,48,87,159,190,111,143,154,99,78,58,65,19,9,230,73,43,134,155,83,90,65,11,181,65,11,22,26,33,186,52,148,201,59,204,115,180,246,10,220,163,80,20,254,45,12,67,152,218,170,40,208,236,102,205,221,227,32,46,53,163,210,100,32,45,13,240,27,129,179,9,74,51,153,15,204,219,222,240,160,249,165,251,195,38,167,87,87,184,69,70,49,201,6,99,118,133,109,181,201,85,12,177,87,216,27,25,184,148,58,159,119,138,242,68,140,62,120,176,183,89,51,45,169,216,144,25,175,36,117,137,225,130,119,91,186,152,56,218,150,247,40,172,72,32,224,201,7,25,185,56,228,96,155,195,247,105,102,249,95,213,163,150,127,195,179,43,159,165,59,104,184,175,84,210,25,90,36,255,184,104,154,218,72,96,37,35,253,160,238,122,190,249,82,52,234,236,228,86,215,14,75,7,43,176,112,211,75,101,97,175,96,225,136,23,221,52,79,236,66,215,0,101,10,236,172,180,11,80,15,49,248,107,15,246,145,53,189,191,180,166,209,172,157,120,95,209,23,150,196,111,101,34,27,135,12,134,184,50,218,214,202,105,142,153,23,60,86,172,43,13,122,22,237,209,211,176,45,58,84,4,247,196,75,180,239,227,201,117,29,85,47,168,239,31,82,96,101,32,210,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("a8612d32-9e85-4a58-a2a0-2c095913c7e1"));
		}

		#endregion

	}

	#endregion

}

