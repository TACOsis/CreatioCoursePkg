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

	#region Class: GetProductShortDescriptionMessageUserTask

	[DesignModeProperty(Name = "CompletedRecords", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d9c63ffec3f642dea333c60a19729393", CaptionResourceItem = "Parameters.CompletedRecords.Caption", DescriptionResourceItem = "Parameters.CompletedRecords.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "TotalRecords", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d9c63ffec3f642dea333c60a19729393", CaptionResourceItem = "Parameters.TotalRecords.Caption", DescriptionResourceItem = "Parameters.TotalRecords.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "MessageCode", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d9c63ffec3f642dea333c60a19729393", CaptionResourceItem = "Parameters.MessageCode.Caption", DescriptionResourceItem = "Parameters.MessageCode.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "Message", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "d9c63ffec3f642dea333c60a19729393", CaptionResourceItem = "Parameters.Message.Caption", DescriptionResourceItem = "Parameters.Message.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class GetProductShortDescriptionMessageUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public GetProductShortDescriptionMessageUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("d9c63ffe-c3f6-42de-a333-c60a19729393");
		}

		#endregion

		#region Properties: Public

		public virtual int CompletedRecords {
			get;
			set;
		}

		public virtual int TotalRecords {
			get;
			set;
		}

		public virtual string MessageCode {
			get;
			set;
		}

		public virtual string Message {
			get;
			set;
		}

		private LocalizableString _errorMessage;
		public LocalizableString ErrorMessage {
			get {
				return _errorMessage ?? (_errorMessage = new LocalizableString(Storage, Schema.GetResourceManagerName(), "LocalizableStrings.ErrorMessage.Value"));
			}
		}

		private LocalizableString _successMessage;
		public LocalizableString SuccessMessage {
			get {
				return _successMessage ?? (_successMessage = new LocalizableString(Storage, Schema.GetResourceManagerName(), "LocalizableStrings.SuccessMessage.Value"));
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
			if (UseFlowEngineMode) {
				if (!HasMapping("CompletedRecords")) {
					writer.WriteValue("CompletedRecords", CompletedRecords, 0);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("TotalRecords")) {
					writer.WriteValue("TotalRecords", TotalRecords, 0);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("MessageCode")) {
					writer.WriteValue("MessageCode", MessageCode, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("Message")) {
					writer.WriteValue("Message", Message, null);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "CompletedRecords":
					if (!UseFlowEngineMode) {
						break;
					}
					CompletedRecords = reader.GetIntValue();
				break;
				case "TotalRecords":
					if (!UseFlowEngineMode) {
						break;
					}
					TotalRecords = reader.GetIntValue();
				break;
				case "MessageCode":
					if (!UseFlowEngineMode) {
						break;
					}
					MessageCode = reader.GetStringValue();
				break;
				case "Message":
					if (!UseFlowEngineMode) {
						break;
					}
					Message = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

