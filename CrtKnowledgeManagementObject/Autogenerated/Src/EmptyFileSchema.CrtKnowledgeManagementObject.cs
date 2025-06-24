namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: EmptyFileSchema

	/// <exclude/>
	public class EmptyFileSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public EmptyFileSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public EmptyFileSchema(EmptyFileSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("40a4f680-5f30-468b-aff8-ef691708608d");
			Name = "EmptyFile";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("91dd02a5-9e90-4c16-b629-f17ea6044f48");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,0,0,69,207,108,233,1,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("40a4f680-5f30-468b-aff8-ef691708608d"));
		}

		#endregion

	}

	#endregion

}

