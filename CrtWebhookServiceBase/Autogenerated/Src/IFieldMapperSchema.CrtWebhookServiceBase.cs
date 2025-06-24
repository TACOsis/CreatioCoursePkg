namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IFieldMapperSchema

	/// <exclude/>
	public class IFieldMapperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IFieldMapperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IFieldMapperSchema(IFieldMapperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9dfbf4d8-9185-4168-9736-2f2d7062756a");
			Name = "IFieldMapper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fe674b36-6b4e-4761-be68-f76112863a49");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,81,75,75,195,64,16,62,55,144,255,48,212,139,5,73,238,26,115,41,42,5,5,193,130,231,77,50,73,23,247,17,118,118,43,165,248,223,157,205,86,72,109,111,187,223,204,247,152,25,35,52,210,40,90,132,45,58,39,200,246,190,88,91,211,203,33,56,225,165,53,121,118,204,179,69,32,105,6,248,56,144,71,205,117,165,176,141,69,42,94,208,160,147,237,67,158,113,215,141,195,129,81,88,43,65,116,15,155,103,137,170,123,19,227,136,110,170,151,101,9,21,5,173,133,59,212,167,255,187,179,123,217,33,129,178,131,108,193,246,160,153,16,221,248,249,141,205,206,218,47,232,163,16,21,127,18,229,76,99,12,141,98,158,52,30,93,31,231,56,119,93,28,39,231,11,235,9,224,38,2,191,195,153,254,165,65,66,70,225,132,6,195,219,122,92,158,82,77,62,180,172,183,44,240,47,104,85,78,253,215,233,113,62,236,230,236,132,92,35,239,173,236,98,204,212,125,187,121,50,65,163,19,141,194,138,188,227,45,213,112,150,230,14,94,37,249,234,51,97,124,168,160,13,211,107,152,155,174,210,181,126,210,205,208,116,233,108,241,203,216,47,225,29,191,209,18,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9dfbf4d8-9185-4168-9736-2f2d7062756a"));
		}

		#endregion

	}

	#endregion

}

