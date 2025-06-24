namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ISmtpClientSchema

	/// <exclude/>
	public class ISmtpClientSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ISmtpClientSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ISmtpClientSchema(ISmtpClientSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c5780649-962a-4d08-aae6-82550204242e");
			Name = "ISmtpClient";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,203,75,204,77,45,46,72,76,78,85,8,73,45,42,74,44,206,79,43,209,243,77,204,204,225,229,170,230,229,226,84,46,74,77,207,204,207,83,240,204,43,73,45,74,3,170,178,82,240,12,206,45,41,112,206,201,76,205,43,225,229,2,42,209,215,215,87,176,41,46,205,205,77,44,170,180,131,242,93,115,129,38,40,36,131,21,41,100,194,244,234,193,84,235,35,41,47,40,77,202,201,76,70,40,66,54,31,104,25,216,36,152,109,156,32,39,213,130,109,85,78,205,75,129,184,13,196,5,138,1,0,240,175,135,224,200,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c5780649-962a-4d08-aae6-82550204242e"));
		}

		#endregion

	}

	#endregion

}

