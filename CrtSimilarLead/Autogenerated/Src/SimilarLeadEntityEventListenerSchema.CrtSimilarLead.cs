namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SimilarLeadEntityEventListenerSchema

	/// <exclude/>
	public class SimilarLeadEntityEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SimilarLeadEntityEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SimilarLeadEntityEventListenerSchema(SimilarLeadEntityEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7c236e34-22b6-4815-bdb0-6718c56a3063");
			Name = "SimilarLeadEntityEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("364d74c1-c4ce-4435-a41a-0f64d57d716d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,83,93,107,42,49,16,125,182,208,255,48,108,95,42,148,236,187,85,161,150,210,15,218,222,11,250,86,250,48,238,142,154,178,73,36,19,5,41,247,191,223,73,92,101,149,93,124,204,156,51,115,206,124,4,44,26,226,53,22,4,51,242,30,217,45,130,122,116,118,161,151,27,143,65,59,123,125,245,123,125,213,219,176,182,75,152,238,56,144,17,188,170,168,136,32,171,103,178,228,117,113,127,228,52,203,24,227,108,55,162,222,184,11,246,164,158,108,208,65,19,95,36,168,167,45,217,16,121,194,188,241,180,20,95,240,88,33,243,0,166,218,232,10,253,59,97,153,232,187,196,125,215,210,134,216,78,25,121,158,195,144,55,198,160,223,141,235,247,129,0,11,231,5,36,130,194,211,98,148,53,202,101,249,24,40,149,4,74,250,234,80,43,63,43,22,243,177,98,87,215,152,32,83,139,151,12,242,152,240,213,2,221,78,139,21,25,252,148,77,193,8,78,76,244,191,37,103,189,153,87,186,128,34,182,124,161,99,24,64,135,190,212,249,77,243,56,142,240,131,194,202,149,50,196,191,94,111,49,80,141,146,45,247,132,46,118,114,179,7,207,103,155,2,47,104,203,138,248,242,92,27,132,63,246,213,50,249,32,103,144,8,209,185,58,42,228,231,18,195,53,122,52,16,111,123,148,177,56,150,249,142,83,187,176,127,169,97,158,40,237,25,148,141,103,43,106,234,207,6,157,199,151,188,78,72,46,133,146,194,131,95,114,92,38,104,203,1,173,124,172,194,217,128,218,198,19,14,43,58,40,166,30,160,196,128,39,102,234,101,186,173,232,233,146,96,235,116,9,141,246,111,221,252,71,254,94,221,199,29,180,234,3,245,33,254,218,94,111,46,219,86,205,244,67,30,245,227,199,234,253,107,221,234,62,122,26,76,177,255,155,246,147,86,47,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7c236e34-22b6-4815-bdb0-6718c56a3063"));
		}

		#endregion

	}

	#endregion

}

