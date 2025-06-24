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

	#region Class: SearchEntities

	[DesignModeProperty(Name = "Output", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "efdfac5ae43b49de81169b8120860a0b", CaptionResourceItem = "Parameters.Output.Caption", DescriptionResourceItem = "Parameters.Output.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SearchQuery", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "efdfac5ae43b49de81169b8120860a0b", CaptionResourceItem = "Parameters.SearchQuery.Caption", DescriptionResourceItem = "Parameters.SearchQuery.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SectionEntityName", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "efdfac5ae43b49de81169b8120860a0b", CaptionResourceItem = "Parameters.SectionEntityName.Caption", DescriptionResourceItem = "Parameters.SectionEntityName.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class SearchEntities : ProcessUserTask
	{

		#region Constructors: Public

		public SearchEntities(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("efdfac5a-e43b-49de-8116-9b8120860a0b");
		}

		#endregion

		#region Properties: Public

		public virtual ICompositeObjectList<ICompositeObject> Output {
			get;
			set;
		}

		public virtual string SearchQuery {
			get;
			set;
		}

		public virtual string SectionEntityName {
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
			WriteSerializableObject<ICompositeObjectList<ICompositeObject>>(writer, "Output", Output);
			if (!HasMapping("SearchQuery")) {
				writer.WriteValue("SearchQuery", SearchQuery, null);
			}
			if (!HasMapping("SectionEntityName")) {
				writer.WriteValue("SectionEntityName", SectionEntityName, null);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "Output":
					Output = ReadSerializableObject<ICompositeObjectList<ICompositeObject>>(reader);
				break;
				case "SearchQuery":
					SearchQuery = reader.GetStringValue();
				break;
				case "SectionEntityName":
					SectionEntityName = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

