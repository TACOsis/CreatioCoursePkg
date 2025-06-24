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

	#region Class: MLEntityPredictionUserTask

	[DesignModeProperty(Name = "MLModelId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b6060c0803114aeda7f779e1b7b62165", CaptionResourceItem = "Parameters.MLModelId.Caption", DescriptionResourceItem = "Parameters.MLModelId.Caption", UseSolutionStorage = true)]
	[DesignModeProperty(Name = "RecordId", Group = "", ValuesProvider = "ProcessSchemaParameterValueProvider", Editor="xtype=processschemaparametervalueedit;dataProvider=processschemaparametervalueprovider", ResourceManager = "b6060c0803114aeda7f779e1b7b62165", CaptionResourceItem = "Parameters.RecordId.Caption", DescriptionResourceItem = "Parameters.RecordId.Caption", UseSolutionStorage = true)]
	/// <exclude/>
	public class MLEntityPredictionUserTask : ProcessUserTask
	{

		#region Constructors: Public

		public MLEntityPredictionUserTask(UserConnection userConnection)
			: base(userConnection) {
			SchemaUId = new Guid("b6060c08-0311-4aed-a7f7-79e1b7b62165");
		}

		#endregion

		#region Properties: Public

		public virtual Guid MLModelId {
			get;
			set;
		}

		public virtual Guid RecordId {
			get;
			set;
		}

		#endregion

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			var connectionArg = new ConstructorArgument("userConnection", UserConnection);
			var predictor = ClassFactory.Get<MLEntityPredictor>(connectionArg);
			predictor.PredictEntityValueAndSaveResult(MLModelId, RecordId);
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

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
			if (!HasMapping("RecordId")) {
				writer.WriteValue("RecordId", RecordId, Guid.Empty);
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
				case "RecordId":
					RecordId = reader.GetGuidValue();
				break;
			}
		}

		#endregion

	}

	#endregion

}

