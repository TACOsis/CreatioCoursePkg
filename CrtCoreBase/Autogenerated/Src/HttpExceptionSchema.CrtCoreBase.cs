namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: HttpExceptionSchema

	/// <exclude/>
	public class HttpExceptionSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public HttpExceptionSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public HttpExceptionSchema(HttpExceptionSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9585662d-704a-4632-9f1a-d2348e8cadce");
			Name = "HttpException";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("4ec403af-02e3-46d1-9fa9-59ed1daa3619");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,85,142,65,10,131,48,20,68,215,6,114,135,15,110,20,196,3,184,147,42,180,27,23,42,116,29,227,215,6,244,27,76,44,150,226,221,27,75,21,186,25,152,97,230,49,190,234,160,200,235,170,78,139,44,45,51,206,72,140,104,180,144,8,213,203,88,28,227,59,54,156,189,57,227,204,211,75,51,40,9,114,16,198,192,213,90,157,175,18,181,85,19,65,114,212,203,133,172,26,49,190,145,197,121,210,21,206,79,37,209,196,249,234,60,137,225,156,56,158,163,122,7,244,15,23,40,178,240,112,201,101,106,49,2,99,103,69,61,184,99,70,244,24,238,43,207,75,160,17,6,131,95,24,157,245,16,190,216,205,201,182,191,118,226,35,181,170,251,0,126,22,59,249,235,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9585662d-704a-4632-9f1a-d2348e8cadce"));
		}

		#endregion

	}

	#endregion

}

