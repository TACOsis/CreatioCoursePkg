namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICustomFieldMapperSchema

	/// <exclude/>
	public class ICustomFieldMapperSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICustomFieldMapperSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICustomFieldMapperSchema(ICustomFieldMapperSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("dec5d6ef-4d67-4ef9-831c-8d603fb196b8");
			Name = "ICustomFieldMapper";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("fe674b36-6b4e-4761-be68-f76112863a49");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,145,65,107,195,48,12,133,207,9,228,63,8,118,79,238,235,216,37,108,99,135,141,66,7,59,187,137,156,154,198,118,144,228,142,80,250,223,103,187,93,201,40,108,224,139,236,167,247,61,89,78,89,228,73,117,8,31,72,164,216,107,169,91,239,180,25,2,41,49,222,85,229,177,42,139,192,198,13,176,153,89,208,174,98,29,207,29,225,16,223,161,29,21,243,61,188,182,129,197,219,103,131,99,255,166,166,9,169,42,163,170,105,26,120,224,96,173,162,249,241,82,175,201,31,76,143,12,163,31,76,7,94,131,141,13,9,208,101,15,248,194,237,206,251,61,232,100,198,245,143,77,179,240,153,194,118,140,189,198,9,146,78,241,111,249,16,67,253,138,83,164,73,110,18,229,139,23,20,6,217,225,21,205,62,80,135,245,181,97,201,46,88,40,165,253,60,107,55,89,10,71,24,80,86,112,202,99,255,67,65,39,70,102,112,241,243,255,70,60,101,225,123,212,45,252,139,211,101,3,232,250,243,18,18,51,94,126,3,142,172,38,169,205,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("dec5d6ef-4d67-4ef9-831c-8d603fb196b8"));
		}

		#endregion

	}

	#endregion

}

