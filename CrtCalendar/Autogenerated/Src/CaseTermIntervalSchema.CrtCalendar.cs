namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CaseTermIntervalSchema

	/// <exclude/>
	public class CaseTermIntervalSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CaseTermIntervalSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CaseTermIntervalSchema(CaseTermIntervalSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cff3d064-d73b-473d-8492-7151dcd31b07");
			Name = "CaseTermInterval";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("f69a32ba-7e77-47bd-be6b-d095bbdc629a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,84,81,107,219,48,16,126,78,161,255,225,198,160,164,208,217,93,31,219,52,48,194,54,250,208,82,150,108,47,99,15,170,115,246,196,100,201,232,228,64,214,230,191,247,36,91,137,29,135,18,10,129,72,167,251,116,223,247,221,89,90,148,72,149,200,16,22,104,173,32,147,187,100,102,116,46,139,218,10,39,141,62,61,121,62,61,25,213,36,117,1,243,53,57,44,111,182,251,153,80,168,151,194,210,66,150,248,83,75,7,183,187,88,18,131,156,207,136,143,22,11,190,14,190,234,186,188,230,44,66,46,88,206,157,112,72,124,204,191,52,77,97,66,117,89,10,187,158,182,123,159,7,142,19,65,106,254,91,9,5,153,41,43,133,14,53,18,1,5,124,18,209,105,7,254,251,155,18,5,253,241,171,57,90,41,148,252,47,158,20,250,64,85,63,41,153,1,50,149,33,19,47,119,244,96,52,178,152,203,11,191,97,63,156,144,154,126,176,83,70,147,63,248,188,127,96,212,202,199,175,56,188,105,244,178,11,141,228,158,252,153,18,68,59,253,119,173,170,144,115,200,128,47,144,121,196,167,172,41,133,22,114,99,33,27,216,114,200,129,86,102,184,96,80,17,174,225,174,187,159,244,141,152,70,39,34,241,71,107,42,180,78,34,179,127,12,23,7,206,3,210,33,16,13,113,60,2,93,138,67,142,145,164,31,22,95,61,66,195,58,16,24,21,232,71,136,23,212,46,54,111,87,110,122,244,190,210,1,123,68,237,189,238,110,93,186,71,247,215,44,143,177,232,59,58,2,223,85,212,14,74,65,255,128,121,214,152,28,166,26,34,22,93,109,53,77,239,119,217,147,52,6,59,130,250,157,244,149,60,98,124,222,106,90,9,11,22,169,86,205,231,218,205,77,252,220,55,130,101,14,227,158,33,31,110,65,215,74,193,217,89,207,168,100,177,174,208,31,46,49,23,124,231,120,240,40,156,15,32,191,60,119,152,194,101,164,52,106,249,188,12,8,237,127,123,13,185,77,151,226,118,92,250,12,99,248,120,130,91,196,251,248,121,120,151,94,211,153,214,234,55,134,103,248,94,240,107,184,121,5,176,225,54,200,153,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cff3d064-d73b-473d-8492-7151dcd31b07"));
		}

		#endregion

	}

	#endregion

}

