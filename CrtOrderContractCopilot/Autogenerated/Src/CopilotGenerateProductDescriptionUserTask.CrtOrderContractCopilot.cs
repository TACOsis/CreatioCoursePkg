namespace Terrasoft.Core.Process.Configuration
{
    using Creatio.Copilot;
    using Newtonsoft.Json;
    using System;
    using System.Text;
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

	/// <exclude/>
	public partial class CopilotGenerateProductDescriptionUserTask
	{

		#region Methods: Protected
      
        //Temporary solution unil the RND-61275 task will be implemented.
		protected override bool InternalExecute(ProcessExecutingContext context) {
            try {  
                  string featureData =  GetFeaturesData(ProductFeatureList);
                  var intentName = "GenerateProductDescriptionApi";
                  var copilotEngine = UserConnection.CopilotEngine;
                  var availableIntents = copilotEngine.GetAvailableIntents(CopilotIntentMode.Api, intentName);
                  if (!availableIntents.Contains(intentName)) {
                      var schema = UserConnection.ProcessUserTaskSchemaManager.FindInstanceByName("CopilotGenerateProductDescriptionUserTask");
                      var localizableString = schema.LocalizableStrings.GetByName("ErrorMsg");
                      ErrorMessage = localizableString.Value;
                      return true;
                  }
                  var request = new CopilotIntentCall {
                      IntentName = intentName,
                      Parameters = new Dictionary<string, object> {
                          {"Name", ProductName},
                          {"Trademark", ProductTrademark},
                          {"Category", ProductCategory},
                          {"Notes", ProductNotes},
                          {"Type", ProductType},
                          {"Benefits", ProductBenefits},
                          {"ProductFeaturesData", featureData},
                          {"AdditionalInstructions", AdditionalInstructions}
                      }
                  };
                  CopilotIntentCallResult result = copilotEngine.ExecuteIntent(request);
                  if (!result.IsSuccess) {
                      ErrorMessage = result.ErrorMessage;
                      return true;
                  }
                  GeneratedShortDescription = result.Content.ToString();
                  IsSuccess = true;
            }
            catch (Exception ex) {
                ErrorMessage = ex.Message;
            }
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

		#endregion

        #region Methods: Private

        private string GetFeaturesData(ICompositeObjectList<ICompositeObject> productFeaturesCollection) {
            if (productFeaturesCollection.IsNullOrEmpty()) {
                string emptyResult = "The product feature list is empty.";
                return emptyResult;
            }
            var resultBuilder = new StringBuilder();
            int featureNumber = 1;
            foreach (ICompositeObject item in productFeaturesCollection) {
                resultBuilder.AppendLine($"Feature {featureNumber}:"); 
                if (item.TryGetValue<Guid>("Specification", out Guid featureId)) {
                    var specificationEntity = UserConnection.EntitySchemaManager.GetEntityByName("Specification", UserConnection);
                    specificationEntity.FetchFromDB(featureId, true);
                    string specificationName = specificationEntity.GetTypedColumnValue<string>("Name");
                    resultBuilder.AppendLine($"- Name: {specificationName}");
                }
                if (item.TryGetValue<string>("StringValue", out string featureValue)) {
                    resultBuilder.AppendLine($"- Description: {featureValue}");
                }
                resultBuilder.AppendLine(); 
                featureNumber++; 
            }
            return resultBuilder.ToString();
        }
      
        #endregion
      
	}
  
	#endregion

}

