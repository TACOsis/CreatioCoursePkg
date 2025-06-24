namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateUseAdminSettingsLogInstallScriptExecutorSchema

	/// <exclude/>
	public class UpdateUseAdminSettingsLogInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateUseAdminSettingsLogInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateUseAdminSettingsLogInstallScriptExecutorSchema(UpdateUseAdminSettingsLogInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8f7c9664-5105-4029-8b26-c4687ac462ee");
			Name = "UpdateUseAdminSettingsLogInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d2c3f70d-d3a5-4d15-9bc6-62f67312edb1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,145,193,74,3,49,16,134,207,41,244,29,134,122,105,161,236,3,84,60,72,241,80,80,40,172,245,30,147,233,26,72,39,203,100,82,148,210,119,55,217,213,98,138,30,188,229,159,249,243,229,159,9,233,3,198,94,27,132,103,100,214,49,236,165,89,7,218,187,46,177,22,23,104,58,57,77,39,42,69,71,93,101,97,188,189,212,139,106,63,98,139,34,89,70,184,187,114,214,196,230,135,53,51,50,229,134,177,203,13,88,123,29,227,10,118,189,213,130,187,136,247,246,224,232,219,250,24,186,13,69,209,222,183,134,93,47,15,239,104,146,4,30,8,142,4,153,180,7,83,16,255,36,192,10,54,127,160,213,105,192,95,18,62,161,188,5,155,51,110,211,171,119,102,108,246,195,25,142,193,89,24,175,226,60,191,205,121,106,66,83,70,134,84,201,5,148,157,42,117,181,183,38,31,94,180,79,56,175,237,75,152,253,50,202,108,9,194,9,23,229,27,212,249,43,38,146,29,147,14,122,172,214,197,243,39,196,70,75,181,242,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8f7c9664-5105-4029-8b26-c4687ac462ee"));
		}

		#endregion

	}

	#endregion

}

