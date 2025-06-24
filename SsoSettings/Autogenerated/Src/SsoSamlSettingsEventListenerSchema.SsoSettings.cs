namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoSamlSettingsEventListenerSchema

	/// <exclude/>
	public class SsoSamlSettingsEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoSamlSettingsEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoSamlSettingsEventListenerSchema(SsoSamlSettingsEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6434e588-fc75-45d2-931b-f7448816b86b");
			Name = "SsoSamlSettingsEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ea8ffd3-a056-4527-8ee5-0d2e2601227e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,145,65,107,194,64,16,133,207,10,254,135,33,94,18,40,251,3,148,30,106,244,86,107,33,237,169,244,176,38,207,184,109,220,149,221,77,104,41,254,247,78,118,81,176,20,133,94,122,75,102,222,188,111,222,142,150,59,184,189,44,65,79,176,86,58,179,241,34,55,122,163,234,214,74,175,140,22,133,51,5,188,87,186,118,163,225,215,104,56,104,29,127,159,201,45,196,66,123,229,21,220,244,154,64,44,58,104,223,235,88,57,182,168,153,65,121,35,157,155,80,143,146,187,230,136,11,202,123,229,60,52,108,208,191,4,151,207,179,70,90,148,91,236,228,3,7,161,91,74,126,120,36,217,43,207,237,219,117,163,74,42,123,204,69,10,77,104,38,29,126,193,176,75,31,254,180,242,18,126,107,42,94,250,49,120,135,245,142,28,211,113,118,85,129,58,163,42,90,233,66,118,76,74,205,250,13,165,39,7,93,193,222,80,132,204,176,225,231,9,168,59,91,59,66,70,129,51,88,243,30,226,52,123,28,66,54,13,221,52,141,227,89,108,100,226,217,193,242,225,52,19,250,171,205,103,5,202,214,246,41,116,173,52,68,190,69,249,158,75,189,248,224,186,199,106,143,120,223,52,225,226,82,106,89,131,31,38,137,246,135,139,113,230,104,224,255,28,232,52,253,47,145,198,236,29,47,24,254,99,245,188,120,248,6,144,243,46,57,20,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6434e588-fc75-45d2-931b-f7448816b86b"));
		}

		#endregion

	}

	#endregion

}

