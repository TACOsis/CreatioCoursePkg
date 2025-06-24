namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: IEntitySynchronizationProviderSchema

	/// <exclude/>
	public class IEntitySynchronizationProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public IEntitySynchronizationProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public IEntitySynchronizationProviderSchema(IEntitySynchronizationProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("42049884-aa36-451a-89f4-25b39d83019b");
			Name = "IEntitySynchronizationProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("76eace8e-4a48-486b-bf04-de18fe06b0a2");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,81,209,74,196,48,16,124,110,161,255,176,224,139,66,233,7,88,61,208,59,149,123,81,241,252,129,52,221,182,43,205,230,216,164,66,21,255,221,180,193,67,165,112,47,247,150,77,102,38,51,59,172,12,186,189,210,8,175,40,162,156,109,124,177,182,220,80,59,136,242,100,185,184,99,79,126,220,141,172,59,177,76,31,243,109,150,126,102,105,150,38,131,35,110,97,55,58,143,38,240,250,30,245,244,236,138,7,100,20,210,229,1,243,91,94,48,170,18,186,101,128,49,150,203,249,131,51,193,54,8,194,150,61,74,19,124,94,194,118,209,209,179,216,119,170,81,102,214,126,168,122,210,64,63,164,163,156,36,198,73,34,12,238,137,235,120,60,119,94,38,119,24,249,186,67,163,30,195,206,114,216,208,28,85,201,120,21,49,57,216,234,45,228,95,129,182,92,211,188,135,139,242,143,238,90,80,121,60,166,92,89,219,195,224,240,166,54,196,47,212,118,222,193,53,52,170,119,248,79,239,100,62,243,73,52,89,128,62,73,216,207,134,36,246,186,2,59,205,183,99,168,122,48,135,120,95,177,42,228,58,182,53,141,225,238,27,185,126,202,5,92,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("42049884-aa36-451a-89f4-25b39d83019b"));
		}

		#endregion

	}

	#endregion

}

