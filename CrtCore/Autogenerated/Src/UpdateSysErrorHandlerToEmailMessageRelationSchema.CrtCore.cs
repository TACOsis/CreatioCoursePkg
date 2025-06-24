namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateSysErrorHandlerToEmailMessageRelationSchema

	/// <exclude/>
	public class UpdateSysErrorHandlerToEmailMessageRelationSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateSysErrorHandlerToEmailMessageRelationSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateSysErrorHandlerToEmailMessageRelationSchema(UpdateSysErrorHandlerToEmailMessageRelationSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8f69597b-1185-4732-b96f-2a663e953947");
			Name = "UpdateSysErrorHandlerToEmailMessageRelation";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a6ded360-42cd-4008-9952-fcaf8207688b");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,147,223,111,218,48,16,199,223,39,237,127,56,241,20,164,38,20,26,154,50,218,74,3,146,142,135,78,83,105,251,58,57,206,65,61,57,54,178,29,182,168,226,127,223,145,68,37,208,82,191,36,57,223,125,238,123,63,2,160,88,142,118,205,56,194,35,26,195,172,94,186,96,170,213,82,172,10,195,156,208,10,94,191,126,1,58,133,21,106,5,139,210,58,204,199,239,77,20,36,37,242,93,132,13,238,80,161,17,252,192,173,141,207,115,173,78,94,26,252,228,42,136,149,19,78,160,37,159,218,171,215,235,193,181,45,242,156,153,242,118,111,122,90,103,204,33,172,106,37,128,57,19,18,108,169,232,213,24,109,128,170,182,108,133,96,80,86,101,182,96,189,67,218,186,72,37,17,184,100,214,54,88,42,57,222,81,126,48,149,73,52,143,58,222,225,239,107,228,67,67,132,111,48,159,43,235,152,148,11,110,196,218,197,255,144,23,142,114,55,29,37,180,17,155,157,202,187,66,100,240,27,15,144,15,152,10,149,193,77,117,25,252,98,198,162,215,185,236,167,209,16,71,169,63,72,179,115,63,188,12,153,159,94,133,153,31,242,52,138,88,127,24,133,172,223,233,142,63,225,55,34,79,241,195,36,185,24,36,19,127,54,154,134,126,120,117,17,251,223,7,131,153,63,140,70,253,233,52,164,19,157,87,252,183,12,117,115,54,154,18,212,245,161,247,100,209,208,10,169,122,27,104,140,237,207,238,190,122,128,106,152,101,53,150,118,63,27,243,205,81,104,61,251,114,193,95,104,154,247,76,81,25,134,86,205,213,230,73,249,147,86,217,235,44,142,96,157,179,99,5,227,189,128,13,51,192,181,202,68,181,183,148,81,225,95,152,137,202,143,54,224,218,58,67,59,120,6,58,253,67,193,183,109,237,0,175,208,153,103,132,255,112,112,219,189,231,182,149,80,44,193,251,184,220,32,65,199,95,18,163,243,217,196,219,107,234,118,15,147,158,8,94,160,163,31,176,200,213,51,147,5,117,161,114,153,234,12,91,10,143,70,223,238,195,105,46,219,160,183,100,210,98,219,253,173,184,230,133,30,219,255,202,197,211,7,75,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8f69597b-1185-4732-b96f-2a663e953947"));
		}

		#endregion

	}

	#endregion

}

