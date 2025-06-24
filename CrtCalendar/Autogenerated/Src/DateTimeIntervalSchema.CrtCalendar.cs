namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DateTimeIntervalSchema

	/// <exclude/>
	public class DateTimeIntervalSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DateTimeIntervalSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DateTimeIntervalSchema(DateTimeIntervalSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("be7d9f97-3f60-46fc-bf01-100533e7371c");
			Name = "DateTimeInterval";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ccf14817-0a4a-4532-9be8-ee78c30bd143");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,144,207,10,194,48,12,135,207,27,236,29,2,222,183,187,19,47,234,193,243,246,2,113,203,74,193,102,146,166,130,136,239,238,186,63,34,136,130,135,66,210,124,253,126,37,140,142,252,5,27,130,154,68,208,247,157,230,187,158,59,107,130,160,218,158,179,244,158,165,73,240,150,13,84,55,175,228,202,161,95,9,153,97,8,149,74,104,20,214,176,71,165,218,58,58,178,146,92,241,156,165,3,85,20,5,108,124,112,14,229,182,157,251,8,122,104,122,86,180,76,146,47,88,241,198,93,194,233,108,27,240,147,252,83,157,196,47,125,216,199,139,74,81,20,116,192,243,23,243,174,94,220,139,116,126,48,10,19,67,90,142,133,159,139,199,215,156,3,183,255,164,68,252,71,70,60,43,226,118,218,106,150,62,158,162,4,47,97,151,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("be7d9f97-3f60-46fc-bf01-100533e7371c"));
		}

		#endregion

	}

	#endregion

}

