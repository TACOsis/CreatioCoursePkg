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

	#region Class: ExecuteIntentUserTask

	[DesignModeProperty(Name = "ExecutionStatus", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.ExecutionStatus.Caption", DescriptionResourceItem = "Parameters.ExecutionStatus.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ErrorMessage", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.ErrorMessage.Caption", DescriptionResourceItem = "Parameters.ErrorMessage.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ResponseText", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.ResponseText.Caption", DescriptionResourceItem = "Parameters.ResponseText.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IntentSchemaUId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.IntentSchemaUId.Caption", DescriptionResourceItem = "Parameters.IntentSchemaUId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "WarningMessage", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.WarningMessage.Caption", DescriptionResourceItem = "Parameters.WarningMessage.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ExecutionStatusId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d5dd65c4238a454181b20445a1fb3f91", CaptionResourceItem = "Parameters.ExecutionStatusId.Caption", DescriptionResourceItem = "Parameters.ExecutionStatusId.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class ExecuteIntentUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public ExecuteIntentUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("d5dd65c4-238a-4541-81b2-0445a1fb3f91");
		}

		#endregion

		#region Properties: Public

		public virtual string ExecutionStatus {
			get;
			set;
		}

		public virtual string ErrorMessage {
			get;
			set;
		}

		public virtual string ResponseText {
			get;
			set;
		}

		public virtual Guid IntentSchemaUId {
			get;
			set;
		}

		public virtual string WarningMessage {
			get;
			set;
		}

		public virtual Guid ExecutionStatusId {
			get;
			set;
		}

		private LocalizableString _copilotEngineNotResolved;
		public LocalizableString CopilotEngineNotResolved {
			get {
				return _copilotEngineNotResolved ?? (_copilotEngineNotResolved = new LocalizableString(Storage, Schema.GetResourceManagerName(), "LocalizableStrings.CopilotEngineNotResolved.Value"));
			}
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
			if (!HasMapping("ExecutionStatus")) {
				writer.WriteValue("ExecutionStatus", ExecutionStatus, null);
			}
			if (!HasMapping("ErrorMessage")) {
				writer.WriteValue("ErrorMessage", ErrorMessage, null);
			}
			if (!HasMapping("ResponseText")) {
				writer.WriteValue("ResponseText", ResponseText, null);
			}
			if (!HasMapping("IntentSchemaUId")) {
				writer.WriteValue("IntentSchemaUId", IntentSchemaUId, Guid.Empty);
			}
			if (!HasMapping("WarningMessage")) {
				writer.WriteValue("WarningMessage", WarningMessage, null);
			}
			if (!HasMapping("ExecutionStatusId")) {
				writer.WriteValue("ExecutionStatusId", ExecutionStatusId, Guid.Empty);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "ExecutionStatus":
					ExecutionStatus = reader.GetStringValue();
				break;
				case "ErrorMessage":
					ErrorMessage = reader.GetStringValue();
				break;
				case "ResponseText":
					ResponseText = reader.GetStringValue();
				break;
				case "IntentSchemaUId":
					IntentSchemaUId = reader.GetGuidValue();
				break;
				case "WarningMessage":
					WarningMessage = reader.GetStringValue();
				break;
				case "ExecutionStatusId":
					ExecutionStatusId = reader.GetGuidValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

