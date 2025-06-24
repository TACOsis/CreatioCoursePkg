namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: GenerateSequenseNumberUserTask

	[DesignModeProperty(Name = "ResultCode", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b9b23348b89c48368c5b283ef5ed8666", CaptionResourceItem = "Parameters.ResultCode.Caption", DescriptionResourceItem = "Parameters.ResultCode.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "EntitySchema", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b9b23348b89c48368c5b283ef5ed8666", CaptionResourceItem = "Parameters.EntitySchema.Caption", DescriptionResourceItem = "Parameters.EntitySchema.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class GenerateSequenseNumberUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public GenerateSequenseNumberUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("b9b23348-b89c-4836-8c5b-283ef5ed8666");
		}

		#endregion

		#region Properties: Public

		public virtual string ResultCode {
			get;
			set;
		}

		public virtual Object EntitySchema {
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
			if (!HasMapping("ResultCode")) {
				writer.WriteValue("ResultCode", ResultCode, null);
			}
			if (EntitySchema != null) {
				if (EntitySchema.GetType().IsSerializable || EntitySchema.GetType().GetInterface("ISerializable") != null) {
					WriteSerializableObject(writer, "EntitySchema", EntitySchema, null);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "ResultCode":
					ResultCode = reader.GetStringValue();
				break;
				case "EntitySchema":
					EntitySchema = GetSerializableObject(reader);
				break;
			}
		}

		#endregion

	}

	#endregion

}

