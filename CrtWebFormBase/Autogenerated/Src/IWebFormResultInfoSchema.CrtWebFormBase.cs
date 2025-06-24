namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IWebFormResultInfoSchema

	/// <exclude/>
	public class IWebFormResultInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IWebFormResultInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IWebFormResultInfoSchema(IWebFormResultInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("30bc9300-f8d4-4de5-89f5-8558b24e931e");
			Name = "IWebFormResultInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9d05c8ee-17e3-41aa-adfe-7e36f0a4c27c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,145,193,106,195,48,16,68,207,49,248,31,22,114,45,246,61,49,190,148,54,228,16,8,109,160,103,89,94,57,2,91,10,187,82,66,9,253,247,202,114,237,184,161,180,61,153,89,205,60,141,181,70,116,200,39,33,17,14,72,36,216,42,151,61,90,163,116,227,73,56,109,77,154,92,211,36,77,22,75,194,38,72,216,26,135,164,66,96,5,219,55,172,158,45,117,47,200,190,117,91,163,108,116,230,121,14,5,251,174,19,244,94,126,233,61,217,179,174,145,65,143,113,80,150,224,130,85,255,237,128,34,34,156,246,42,222,155,141,164,124,134,58,249,170,213,114,6,249,169,194,98,40,60,53,222,161,59,218,154,87,176,143,233,225,240,190,100,28,108,208,49,8,56,139,214,99,184,164,214,50,84,49,13,92,142,1,129,52,181,100,96,47,37,50,103,19,42,191,103,21,145,50,73,128,66,150,142,60,22,185,44,65,171,145,176,6,219,163,47,154,241,161,183,40,209,114,244,204,208,55,82,101,109,11,175,67,18,174,208,160,91,195,199,95,63,20,248,16,118,27,158,59,172,154,69,131,255,111,125,248,37,122,115,178,163,254,149,158,122,227,110,240,221,149,91,162,169,135,109,68,61,76,191,15,195,236,19,25,21,197,24,140,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("30bc9300-f8d4-4de5-89f5-8558b24e931e"));
		}

		#endregion

	}

	#endregion

}

