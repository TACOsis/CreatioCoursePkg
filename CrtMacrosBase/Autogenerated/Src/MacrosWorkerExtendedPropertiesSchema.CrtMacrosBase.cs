namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MacrosWorkerExtendedPropertiesSchema

	/// <exclude/>
	public class MacrosWorkerExtendedPropertiesSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MacrosWorkerExtendedPropertiesSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MacrosWorkerExtendedPropertiesSchema(MacrosWorkerExtendedPropertiesSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("46e56cc0-b0c4-4b85-901f-98aac1edceeb");
			Name = "MacrosWorkerExtendedProperties";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,145,193,78,195,48,12,134,207,157,180,119,176,198,189,189,111,176,3,211,132,56,32,77,2,196,217,75,220,206,162,77,43,59,17,76,211,222,157,44,237,74,65,72,220,236,223,254,237,207,137,195,134,180,67,67,240,66,34,168,109,233,243,77,235,74,174,130,160,231,214,205,103,167,249,44,11,202,174,130,231,163,122,106,86,99,62,181,8,253,173,79,70,229,175,158,107,141,109,177,241,70,168,138,18,108,106,84,93,194,19,26,105,245,173,149,119,146,237,167,39,103,201,238,164,237,72,60,147,38,71,81,20,112,171,161,105,80,142,235,33,79,110,96,103,176,211,80,163,39,64,107,249,178,11,107,232,70,63,124,28,216,28,192,160,131,61,65,80,178,209,19,135,17,129,17,42,239,22,247,168,180,117,158,253,113,10,178,40,214,249,117,113,49,217,220,133,125,205,6,76,90,254,31,121,118,74,244,227,193,223,181,37,236,210,160,190,254,251,188,36,244,15,14,38,212,62,8,1,91,138,144,37,147,228,163,101,10,118,37,123,8,108,47,222,77,239,123,180,112,249,195,44,171,200,175,82,160,67,112,30,216,34,117,143,151,242,94,253,41,158,191,0,153,201,122,125,41,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("46e56cc0-b0c4-4b85-901f-98aac1edceeb"));
		}

		#endregion

	}

	#endregion

}

