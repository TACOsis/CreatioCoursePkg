namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICalendarDaySchema

	/// <exclude/>
	public class ICalendarDaySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICalendarDaySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICalendarDaySchema(ICalendarDaySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("19a08bf9-19ad-47db-8c56-e2bfbacbcbb5");
			Name = "ICalendarDay";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("761f835c-6644-4753-9a3e-2c2ccab7b4d0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,193,110,194,48,12,61,131,196,63,228,184,93,218,251,168,122,1,9,85,66,219,97,32,206,161,113,81,68,154,116,118,50,84,77,252,251,156,210,14,132,214,75,111,142,253,158,223,139,157,88,89,3,53,178,4,177,3,68,73,174,242,201,202,217,74,159,2,74,175,157,77,86,210,128,85,18,105,49,255,89,204,103,129,180,61,137,207,150,60,212,203,167,51,51,141,129,50,210,40,217,128,5,212,37,99,24,213,132,163,209,165,208,214,3,86,81,173,24,218,174,101,43,222,248,104,156,5,121,52,192,224,40,51,75,211,84,100,20,234,90,98,155,15,137,8,118,149,184,0,156,147,63,80,250,136,98,196,71,117,224,186,184,71,93,191,217,9,252,178,11,168,15,174,157,179,255,133,6,119,66,73,15,59,93,195,168,220,173,44,238,215,233,19,19,68,223,157,21,23,135,231,56,80,197,55,109,208,53,128,190,29,209,62,58,103,68,65,204,58,244,164,9,154,3,213,71,207,221,122,190,165,161,17,197,173,38,159,245,140,162,199,230,226,41,65,83,108,236,173,254,10,108,64,129,245,186,210,128,113,205,113,6,190,109,198,102,191,9,90,197,45,239,24,178,47,212,20,217,13,248,78,229,242,48,133,17,181,46,131,224,3,90,202,215,79,156,44,29,42,17,170,28,191,118,136,205,251,209,196,7,241,242,122,251,9,108,231,250,11,231,175,245,138,117,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("19a08bf9-19ad-47db-8c56-e2bfbacbcbb5"));
		}

		#endregion

	}

	#endregion

}

