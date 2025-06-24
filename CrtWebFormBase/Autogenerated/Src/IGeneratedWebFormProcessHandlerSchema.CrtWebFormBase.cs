namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IGeneratedWebFormProcessHandlerSchema

	/// <exclude/>
	public class IGeneratedWebFormProcessHandlerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IGeneratedWebFormProcessHandlerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IGeneratedWebFormProcessHandlerSchema(IGeneratedWebFormProcessHandlerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("fd2443d1-4e8b-456e-8121-999e79c2ef1c");
			Name = "IGeneratedWebFormProcessHandler";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9d05c8ee-17e3-41aa-adfe-7e36f0a4c27c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,143,65,11,130,64,20,132,207,10,254,135,7,222,245,30,209,37,168,188,117,8,58,175,58,107,11,238,91,121,187,6,18,253,247,214,76,240,214,113,30,223,204,188,97,101,225,7,213,128,110,16,81,222,233,80,28,29,107,211,141,162,130,113,156,165,175,44,77,114,65,23,5,85,28,32,58,226,59,170,206,96,68,6,237,29,245,201,137,189,138,107,224,253,69,113,219,67,178,52,218,202,178,164,189,31,173,85,50,29,126,58,98,79,211,194,147,89,179,72,59,161,97,113,27,238,200,105,10,15,80,35,152,211,9,28,76,152,72,139,179,212,199,240,25,25,84,135,98,45,40,55,13,195,88,247,166,217,100,255,125,51,153,247,189,191,239,230,224,118,25,58,203,120,251,0,226,29,78,180,30,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("fd2443d1-4e8b-456e-8121-999e79c2ef1c"));
		}

		#endregion

	}

	#endregion

}

