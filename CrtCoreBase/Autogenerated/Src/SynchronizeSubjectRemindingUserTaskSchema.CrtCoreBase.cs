namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;

	#region Class: SynchronizeSubjectRemindingUserTask

	[DesignModeProperty(Name = "Active", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.Active.Caption", DescriptionResourceItem = "Parameters.Active.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SubjectPrimaryColumnValue", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.SubjectPrimaryColumnValue.Caption", DescriptionResourceItem = "Parameters.SubjectPrimaryColumnValue.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "Author", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.Author.Caption", DescriptionResourceItem = "Parameters.Author.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "Contact", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.Contact.Caption", DescriptionResourceItem = "Parameters.Contact.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "Source", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.Source.Caption", DescriptionResourceItem = "Parameters.Source.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "RemindTime", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.RemindTime.Caption", DescriptionResourceItem = "Parameters.RemindTime.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "Description", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.Description.Caption", DescriptionResourceItem = "Parameters.Description.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SysEntitySchema", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.SysEntitySchema.Caption", DescriptionResourceItem = "Parameters.SysEntitySchema.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "SubjectCaption", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.SubjectCaption.Caption", DescriptionResourceItem = "Parameters.SubjectCaption.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "TypeCaption", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.TypeCaption.Caption", DescriptionResourceItem = "Parameters.TypeCaption.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IsListSubjectReminds", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.IsListSubjectReminds.Caption", DescriptionResourceItem = "Parameters.IsListSubjectReminds.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IsSubjectDelete", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.IsSubjectDelete.Caption", DescriptionResourceItem = "Parameters.IsSubjectDelete.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "NotificationType", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.NotificationType.Caption", DescriptionResourceItem = "Parameters.NotificationType.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "PopupTitle", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.PopupTitle.Caption", DescriptionResourceItem = "Parameters.PopupTitle.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IsSingleReminder", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "303927110c1540b68b039e3232660270", CaptionResourceItem = "Parameters.IsSingleReminder.Caption", DescriptionResourceItem = "Parameters.IsSingleReminder.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class SynchronizeSubjectRemindingUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public SynchronizeSubjectRemindingUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("30392711-0c15-40b6-8b03-9e3232660270");
		}

		#endregion

		#region Properties: Public

		public virtual bool Active {
			get;
			set;
		}

		public virtual Guid SubjectPrimaryColumnValue {
			get;
			set;
		}

		public virtual Object Author {
			get;
			set;
		}

		public virtual Guid Contact {
			get;
			set;
		}

		public virtual Object Source {
			get;
			set;
		}

		public virtual DateTime RemindTime {
			get;
			set;
		}

		public virtual string Description {
			get;
			set;
		}

		public virtual Guid SysEntitySchema {
			get;
			set;
		}

		public virtual string SubjectCaption {
			get;
			set;
		}

		public virtual string TypeCaption {
			get;
			set;
		}

		public virtual bool IsListSubjectReminds {
			get;
			set;
		}

		public virtual bool IsSubjectDelete {
			get;
			set;
		}

		public virtual Guid NotificationType {
			get;
			set;
		}

		public virtual string PopupTitle {
			get;
			set;
		}

		public virtual bool IsSingleReminder {
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
			if (!HasMapping("Active")) {
				writer.WriteValue("Active", Active, false);
			}
			if (!HasMapping("SubjectPrimaryColumnValue")) {
				writer.WriteValue("SubjectPrimaryColumnValue", SubjectPrimaryColumnValue, Guid.Empty);
			}
			if (Author != null) {
				if (Author.GetType().IsSerializable || Author.GetType().GetInterface("ISerializable") != null) {
					WriteSerializableObject(writer, "Author", Author, null);
				}
			}
			if (!HasMapping("Contact")) {
				writer.WriteValue("Contact", Contact, Guid.Empty);
			}
			if (Source != null) {
				if (Source.GetType().IsSerializable || Source.GetType().GetInterface("ISerializable") != null) {
					WriteSerializableObject(writer, "Source", Source, null);
				}
			}
			if (!HasMapping("RemindTime")) {
				writer.WriteValue("RemindTime", RemindTime, DateTime.ParseExact("01.01.0001 0:00", "dd.MM.yyyy H:mm", CultureInfo.InvariantCulture));
			}
			if (!HasMapping("Description")) {
				writer.WriteValue("Description", Description, null);
			}
			if (!HasMapping("SysEntitySchema")) {
				writer.WriteValue("SysEntitySchema", SysEntitySchema, Guid.Empty);
			}
			if (!HasMapping("SubjectCaption")) {
				writer.WriteValue("SubjectCaption", SubjectCaption, null);
			}
			if (!HasMapping("TypeCaption")) {
				writer.WriteValue("TypeCaption", TypeCaption, null);
			}
			if (!HasMapping("IsListSubjectReminds")) {
				writer.WriteValue("IsListSubjectReminds", IsListSubjectReminds, false);
			}
			if (!HasMapping("IsSubjectDelete")) {
				writer.WriteValue("IsSubjectDelete", IsSubjectDelete, false);
			}
			if (!HasMapping("NotificationType")) {
				writer.WriteValue("NotificationType", NotificationType, Guid.Empty);
			}
			if (!HasMapping("PopupTitle")) {
				writer.WriteValue("PopupTitle", PopupTitle, null);
			}
			if (!HasMapping("IsSingleReminder")) {
				writer.WriteValue("IsSingleReminder", IsSingleReminder, false);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "Active":
					Active = reader.GetBoolValue();
				break;
				case "SubjectPrimaryColumnValue":
					SubjectPrimaryColumnValue = reader.GetGuidValue();
				break;
				case "Author":
					Author = GetSerializableObject(reader);
				break;
				case "Contact":
					Contact = reader.GetGuidValue();
				break;
				case "Source":
					Source = GetSerializableObject(reader);
				break;
				case "RemindTime":
					RemindTime = reader.GetDateTimeValue();
				break;
				case "Description":
					Description = reader.GetStringValue();
				break;
				case "SysEntitySchema":
					SysEntitySchema = reader.GetGuidValue();
				break;
				case "SubjectCaption":
					SubjectCaption = reader.GetStringValue();
				break;
				case "TypeCaption":
					TypeCaption = reader.GetStringValue();
				break;
				case "IsListSubjectReminds":
					IsListSubjectReminds = reader.GetBoolValue();
				break;
				case "IsSubjectDelete":
					IsSubjectDelete = reader.GetBoolValue();
				break;
				case "NotificationType":
					NotificationType = reader.GetGuidValue();
				break;
				case "PopupTitle":
					PopupTitle = reader.GetStringValue();
				break;
				case "IsSingleReminder":
					IsSingleReminder = reader.GetBoolValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

