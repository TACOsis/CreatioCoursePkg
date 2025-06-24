namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: GetEntityStructure

	[DesignModeProperty(Name = "Output", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "facbe928010c44c590423e64a6b5c6bd", CaptionResourceItem = "Parameters.Output.Caption", DescriptionResourceItem = "Parameters.Output.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "EntitySchemaName", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "facbe928010c44c590423e64a6b5c6bd", CaptionResourceItem = "Parameters.EntitySchemaName.Caption", DescriptionResourceItem = "Parameters.EntitySchemaName.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class GetEntityStructure : ProcessUserTask
	{

		#region Constructors: Public

		public GetEntityStructure(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("facbe928-010c-44c5-9042-3e64a6b5c6bd");
		}

		#endregion

		#region Properties: Public

		public virtual string Output {
			get;
			set;
		}

		public virtual string EntitySchemaName {
			get;
			set;
		}

		#endregion

		#region Methods: Public

		public override void WritePropertiesData(DataWriter writer) {
			writer.WriteStartObject(Name);
			base.WritePropertiesData(writer);
			if (Status == Core.Process.ProcessStatus.Inactive) {
				writer.WriteFinishObject();
				return;
			}
			if (!HasMapping("Output")) {
				writer.WriteValue("Output", Output, null);
			}
			if (!HasMapping("EntitySchemaName")) {
				writer.WriteValue("EntitySchemaName", EntitySchemaName, null);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "Output":
					Output = reader.GetStringValue();
				break;
				case "EntitySchemaName":
					EntitySchemaName = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

