namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Configuration.ML;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;

	#region Class: MLDataPredictionUserTask

	[DesignModeProperty(Name = "MLModelId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.MLModelId.Caption", DescriptionResourceItem = "Parameters.MLModelId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "IsBatchPrediction", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.IsBatchPrediction.Caption", DescriptionResourceItem = "Parameters.IsBatchPrediction.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "PredictionFilterData", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.PredictionFilterData.Caption", DescriptionResourceItem = "Parameters.PredictionFilterData.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "RecordId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.RecordId.Caption", DescriptionResourceItem = "Parameters.RecordId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "CFUserFilterData", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.CFUserFilterData.Caption", DescriptionResourceItem = "Parameters.CFUserFilterData.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "CFItemFilterData", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.CFItemFilterData.Caption", DescriptionResourceItem = "Parameters.CFItemFilterData.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "TopN", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.TopN.Caption", DescriptionResourceItem = "Parameters.TopN.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "CFFilterAlreadyInteractedItems", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.CFFilterAlreadyInteractedItems.Caption", DescriptionResourceItem = "Parameters.CFFilterAlreadyInteractedItems.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "ConsiderTimeInFilter", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "f6925dae5a5548b5af60bdd77b573b91", CaptionResourceItem = "Parameters.ConsiderTimeInFilter.Caption", DescriptionResourceItem = "Parameters.ConsiderTimeInFilter.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public partial class MLDataPredictionUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public MLDataPredictionUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("f6925dae-5a55-48b5-af60-bdd77b573b91");
			_topN = () => { return 3; };
			_considerTimeInFilter = () => { return true; };
		}

		#endregion

		#region Properties: Public

		public virtual Guid MLModelId {
			get;
			set;
		}

		public virtual bool IsBatchPrediction {
			get;
			set;
		}

		public virtual string PredictionFilterData {
			get;
			set;
		}

		public virtual Guid RecordId {
			get;
			set;
		}

		public virtual string CFUserFilterData {
			get;
			set;
		}

		public virtual string CFItemFilterData {
			get;
			set;
		}

		private Func<int> _topN;
		public virtual int TopN {
			get {
				return (_topN ?? (_topN = () => 0)).Invoke();
			}
			set {
				_topN = () => { return value; };
			}
		}

		private bool _cFFilterAlreadyInteractedItems = true;
		public virtual bool CFFilterAlreadyInteractedItems {
			get {
				return _cFFilterAlreadyInteractedItems;
			}
			set {
				_cFFilterAlreadyInteractedItems = value;
			}
		}

		private Func<bool> _considerTimeInFilter;
		public virtual bool ConsiderTimeInFilter {
			get {
				return (_considerTimeInFilter ?? (_considerTimeInFilter = () => false)).Invoke();
			}
			set {
				_considerTimeInFilter = () => { return value; };
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
			if (!HasMapping("MLModelId")) {
				writer.WriteValue("MLModelId", MLModelId, Guid.Empty);
			}
			if (!HasMapping("IsBatchPrediction")) {
				writer.WriteValue("IsBatchPrediction", IsBatchPrediction, false);
			}
			if (!HasMapping("PredictionFilterData")) {
				writer.WriteValue("PredictionFilterData", PredictionFilterData, null);
			}
			if (!HasMapping("RecordId")) {
				writer.WriteValue("RecordId", RecordId, Guid.Empty);
			}
			if (!HasMapping("CFUserFilterData")) {
				writer.WriteValue("CFUserFilterData", CFUserFilterData, null);
			}
			if (!HasMapping("CFItemFilterData")) {
				writer.WriteValue("CFItemFilterData", CFItemFilterData, null);
			}
			if (!HasMapping("TopN")) {
				writer.WriteValue("TopN", TopN, 0);
			}
			if (!HasMapping("CFFilterAlreadyInteractedItems")) {
				writer.WriteValue("CFFilterAlreadyInteractedItems", CFFilterAlreadyInteractedItems, false);
			}
			if (!HasMapping("ConsiderTimeInFilter")) {
				writer.WriteValue("ConsiderTimeInFilter", ConsiderTimeInFilter, false);
			}
			writer.WriteFinishObject();
		}

		#endregion

		#region Methods: Protected

		protected override void ApplyPropertiesDataValues(DataReader reader) {
			base.ApplyPropertiesDataValues(reader);
			switch (reader.CurrentName) {
				case "MLModelId":
					MLModelId = reader.GetGuidValue();
				break;
				case "IsBatchPrediction":
					IsBatchPrediction = reader.GetBoolValue();
				break;
				case "PredictionFilterData":
					PredictionFilterData = reader.GetStringValue();
				break;
				case "RecordId":
					RecordId = reader.GetGuidValue();
				break;
				case "CFUserFilterData":
					CFUserFilterData = reader.GetStringValue();
				break;
				case "CFItemFilterData":
					CFItemFilterData = reader.GetStringValue();
				break;
				case "TopN":
					TopN = reader.GetIntValue();
				break;
				case "CFFilterAlreadyInteractedItems":
					CFFilterAlreadyInteractedItems = reader.GetBoolValue();
				break;
				case "ConsiderTimeInFilter":
					ConsiderTimeInFilter = reader.GetBoolValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

