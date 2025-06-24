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

	#region Class: CopilotGenerateProductDescriptionUserTask

	[DesignModeProperty(Name = "ProductName", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductName.Caption", DescriptionResourceItem = "Parameters.ProductName.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductTrademark", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductTrademark.Caption", DescriptionResourceItem = "Parameters.ProductTrademark.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductCategory", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductCategory.Caption", DescriptionResourceItem = "Parameters.ProductCategory.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductNotes", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductNotes.Caption", DescriptionResourceItem = "Parameters.ProductNotes.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductType", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductType.Caption", DescriptionResourceItem = "Parameters.ProductType.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductBenefits", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductBenefits.Caption", DescriptionResourceItem = "Parameters.ProductBenefits.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ProductFeatureList", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ProductFeatureList.Caption", DescriptionResourceItem = "Parameters.ProductFeatureList.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "GeneratedShortDescription", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.GeneratedShortDescription.Caption", DescriptionResourceItem = "Parameters.GeneratedShortDescription.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ErrorMessage", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.ErrorMessage.Caption", DescriptionResourceItem = "Parameters.ErrorMessage.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IsSuccess", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.IsSuccess.Caption", DescriptionResourceItem = "Parameters.IsSuccess.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "AdditionalInstructions", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "98ca0e66b8dd4c618f2c2a8821990d73", CaptionResourceItem = "Parameters.AdditionalInstructions.Caption", DescriptionResourceItem = "Parameters.AdditionalInstructions.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class CopilotGenerateProductDescriptionUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public CopilotGenerateProductDescriptionUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("98ca0e66-b8dd-4c61-8f2c-2a8821990d73");
		}

		#endregion

		#region Properties: Public

		public virtual string ProductName {
			get;
			set;
		}

		public virtual string ProductTrademark {
			get;
			set;
		}

		public virtual string ProductCategory {
			get;
			set;
		}

		public virtual string ProductNotes {
			get;
			set;
		}

		public virtual string ProductType {
			get;
			set;
		}

		public virtual string ProductBenefits {
			get;
			set;
		}

		public virtual ICompositeObjectList<ICompositeObject> ProductFeatureList {
			get;
			set;
		}

		public virtual string GeneratedShortDescription {
			get;
			set;
		}

		public virtual string ErrorMessage {
			get;
			set;
		}

		public virtual bool IsSuccess {
			get;
			set;
		}

		public virtual string AdditionalInstructions {
			get;
			set;
		}

		private LocalizableString _errorMsg;
		public LocalizableString ErrorMsg {
			get {
				return _errorMsg ?? (_errorMsg = new LocalizableString(Storage, Schema.GetResourceManagerName(), "LocalizableStrings.ErrorMsg.Value"));
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
				if (!HasMapping("ProductName")) {
					writer.WriteValue("ProductName", ProductName, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ProductTrademark")) {
					writer.WriteValue("ProductTrademark", ProductTrademark, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ProductCategory")) {
					writer.WriteValue("ProductCategory", ProductCategory, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ProductNotes")) {
					writer.WriteValue("ProductNotes", ProductNotes, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ProductType")) {
					writer.WriteValue("ProductType", ProductType, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ProductBenefits")) {
					writer.WriteValue("ProductBenefits", ProductBenefits, null);
				}
			}
			if (UseFlowEngineMode) {
				WriteSerializableObject<ICompositeObjectList<ICompositeObject>>(writer, "ProductFeatureList", ProductFeatureList);
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("GeneratedShortDescription")) {
					writer.WriteValue("GeneratedShortDescription", GeneratedShortDescription, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("ErrorMessage")) {
					writer.WriteValue("ErrorMessage", ErrorMessage, null);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("IsSuccess")) {
					writer.WriteValue("IsSuccess", IsSuccess, false);
				}
			}
			if (UseFlowEngineMode) {
				if (!HasMapping("AdditionalInstructions")) {
					writer.WriteValue("AdditionalInstructions", AdditionalInstructions, null);
				}
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "ProductName":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductName = reader.GetStringValue();
				break;
				case "ProductTrademark":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductTrademark = reader.GetStringValue();
				break;
				case "ProductCategory":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductCategory = reader.GetStringValue();
				break;
				case "ProductNotes":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductNotes = reader.GetStringValue();
				break;
				case "ProductType":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductType = reader.GetStringValue();
				break;
				case "ProductBenefits":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductBenefits = reader.GetStringValue();
				break;
				case "ProductFeatureList":
					if (!UseFlowEngineMode) {
						break;
					}
					ProductFeatureList = ReadSerializableObject<ICompositeObjectList<ICompositeObject>>(reader);
				break;
				case "GeneratedShortDescription":
					if (!UseFlowEngineMode) {
						break;
					}
					GeneratedShortDescription = reader.GetStringValue();
				break;
				case "ErrorMessage":
					if (!UseFlowEngineMode) {
						break;
					}
					ErrorMessage = reader.GetStringValue();
				break;
				case "IsSuccess":
					if (!UseFlowEngineMode) {
						break;
					}
					IsSuccess = reader.GetBoolValue();
				break;
				case "AdditionalInstructions":
					if (!UseFlowEngineMode) {
						break;
					}
					AdditionalInstructions = reader.GetStringValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

