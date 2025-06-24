namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IEmailHashComposerSchema

	/// <exclude/>
	public class IEmailHashComposerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IEmailHashComposerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IEmailHashComposerSchema(IEmailHashComposerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("c4ee924f-2761-4cad-9702-50f6fc4e2bb2");
			Name = "IEmailHashComposer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5e01e2a5-733f-47cc-a4c2-452cdff090f0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,221,147,193,110,194,48,12,134,207,32,237,29,44,184,108,210,212,222,161,244,2,8,56,76,67,27,123,128,208,186,16,41,77,43,39,153,132,208,222,125,110,2,29,20,14,211,142,59,198,254,253,247,243,159,84,139,18,77,45,50,132,13,18,9,83,21,54,154,86,186,144,59,71,194,202,74,63,244,143,15,253,158,51,82,239,224,253,96,44,150,227,206,153,245,74,97,214,136,77,180,64,141,36,179,31,205,165,45,33,215,185,51,36,220,177,26,86,218,34,21,252,241,17,172,230,165,144,106,41,204,126,90,149,117,101,144,188,50,142,99,72,140,43,75,65,135,244,116,94,83,245,41,115,52,32,106,9,69,69,128,205,40,240,30,70,236,16,246,236,193,205,76,168,204,9,213,80,69,103,163,248,194,169,118,91,37,51,144,103,132,187,4,189,163,167,104,129,95,208,238,171,220,140,96,237,167,67,179,203,232,11,240,134,214,145,54,45,78,155,81,32,83,194,98,14,219,195,9,190,22,196,23,193,40,38,106,45,227,174,103,226,85,160,89,57,25,56,6,228,139,210,193,116,144,38,6,17,50,194,98,50,248,184,110,197,41,111,105,172,208,25,70,73,236,61,238,91,122,148,65,58,239,18,221,12,81,216,237,164,188,217,144,7,206,138,102,100,53,215,174,68,18,91,133,137,177,196,143,34,133,5,218,165,31,123,188,134,133,235,181,158,161,189,148,217,230,53,100,245,52,254,77,236,57,22,194,41,235,225,254,101,226,157,144,67,176,77,174,179,176,121,147,217,223,195,29,162,206,195,155,247,231,175,240,219,94,21,185,246,13,84,162,252,29,61,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("c4ee924f-2761-4cad-9702-50f6fc4e2bb2"));
		}

		#endregion

	}

	#endregion

}

