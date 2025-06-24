namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MessageInfoSchema

	/// <exclude/>
	public class MessageInfoSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MessageInfoSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MessageInfoSchema(MessageInfoSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9feca6c1-1d38-4545-9bd8-624db176b74f");
			Name = "MessageInfo";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("4a46c73e-2533-4fb4-8b08-c16580add3d1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,201,110,194,48,16,61,131,196,63,140,196,181,74,238,128,144,218,80,1,82,105,81,161,31,96,236,73,176,148,216,145,199,57,68,168,255,94,219,89,74,46,45,112,243,44,111,153,177,93,145,84,25,28,106,178,88,204,39,227,234,42,140,18,157,231,200,173,212,138,162,53,42,52,146,247,45,71,52,134,145,78,173,235,50,24,189,42,43,173,68,114,245,201,88,177,2,169,100,28,7,93,42,149,89,101,152,167,155,140,47,190,111,52,53,152,185,16,146,156,17,205,96,135,68,44,195,173,74,117,40,151,213,41,151,28,184,175,14,139,163,6,223,19,236,141,46,209,120,3,51,216,7,84,83,111,25,200,26,239,185,165,128,139,47,141,8,237,60,28,178,246,240,61,192,172,43,41,32,49,200,44,138,151,122,43,110,67,173,92,251,81,22,216,33,63,212,29,106,59,45,100,42,31,146,235,160,183,234,253,2,155,157,108,36,89,109,234,71,92,191,107,235,165,205,39,114,109,196,173,206,79,90,231,176,97,244,108,45,227,231,2,149,253,7,23,199,49,44,168,42,10,102,234,101,151,88,201,240,60,93,10,136,159,177,96,95,91,65,192,148,0,211,186,33,208,41,228,110,58,255,126,41,234,153,226,107,170,110,41,61,219,194,79,246,20,230,91,194,91,135,118,75,99,119,44,230,208,57,122,100,178,240,161,220,84,214,221,199,223,174,155,206,228,204,84,134,199,186,196,54,113,240,200,86,185,19,236,45,180,202,83,84,162,249,65,33,110,178,195,100,200,253,0,182,30,237,232,37,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9feca6c1-1d38-4545-9bd8-624db176b74f"));
		}

		#endregion

	}

	#endregion

}

