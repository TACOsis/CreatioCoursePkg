namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IGeneratedWebFormPreProcessHandlerSchema

	/// <exclude/>
	public class IGeneratedWebFormPreProcessHandlerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IGeneratedWebFormPreProcessHandlerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IGeneratedWebFormPreProcessHandlerSchema(IGeneratedWebFormPreProcessHandlerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3ffd2b0a-1f40-4b13-b22b-9f7c569366fc");
			Name = "IGeneratedWebFormPreProcessHandler";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9d05c8ee-17e3-41aa-adfe-7e36f0a4c27c");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,83,77,79,194,64,16,61,67,194,127,152,192,69,19,210,222,21,185,168,96,15,36,36,98,60,175,237,180,108,66,119,55,179,91,212,24,254,187,179,253,162,165,68,15,77,58,211,121,111,230,189,153,42,145,163,53,34,70,216,33,145,176,58,117,193,163,86,169,204,10,18,78,106,53,25,255,76,198,163,194,74,149,245,74,8,239,175,230,59,208,96,141,10,249,21,147,119,252,88,105,202,95,145,142,50,246,64,134,206,8,51,46,130,72,57,164,148,39,184,131,232,18,176,37,220,146,142,209,218,23,161,146,3,82,137,12,195,16,22,182,200,115,65,223,203,58,230,178,163,76,208,130,108,232,32,213,4,134,144,159,146,193,15,170,83,112,123,228,26,83,56,48,130,68,110,33,37,157,195,129,233,125,129,17,25,6,77,139,176,211,195,20,31,7,25,119,216,255,159,21,174,10,234,171,25,121,115,91,43,54,232,246,58,177,165,200,129,202,50,241,252,133,113,225,88,166,151,225,159,11,129,94,179,53,24,203,84,98,50,80,53,148,85,101,74,39,64,241,41,60,76,11,139,196,91,84,24,251,21,78,151,59,110,226,115,16,183,201,96,17,150,136,235,4,60,66,254,36,156,168,160,62,130,132,195,191,65,159,149,61,27,97,144,42,96,249,21,217,109,11,89,101,162,166,33,7,161,43,72,217,54,81,251,203,218,207,141,207,194,187,213,171,122,204,198,210,155,183,158,112,232,251,48,135,182,190,209,55,7,79,51,138,234,205,70,185,209,228,182,229,77,173,155,129,235,27,107,227,219,234,244,71,51,84,73,181,115,142,78,213,239,208,73,77,198,167,95,148,93,89,107,152,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3ffd2b0a-1f40-4b13-b22b-9f7c569366fc"));
		}

		#endregion

	}

	#endregion

}

