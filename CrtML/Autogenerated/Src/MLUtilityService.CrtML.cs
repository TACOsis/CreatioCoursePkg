namespace Terrasoft.Configuration.ML
{
	using System.Collections.Generic;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	#region Class: MLUtilityService

	/// <summary>
	/// Provides auxiliary web method.
	/// </summary>
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class MLUtilityService : BaseService
	{

		#region Methods: Public

		/// <summary>
		/// Generates metadata template for <see cref="Select"/> query text, which may be interpreted
		/// by current <see cref="IQueryInterpreter"/>.
		/// Note, that some inputs names or types may be not resolved and should be manually verified!
		/// </summary>
		/// <param name="selectText">The interpretable query text for which metadata should be generated.</param>
		/// <returns>Generated metadata template.</returns>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "metadata")]
		public ModelSchemaMetadata GenerateMetadata(string selectText) {
			UserConnection.DBSecurityEngine.CheckCanExecuteOperation("CanManageSolution");
			var queryInterpreter = ClassFactory.Get<IQueryInterpreter>();
			var userConnection = ClassFactory.Get<UserConnection>();
			var parameters = new Dictionary<string, object> { { nameof(userConnection), userConnection } };
			Select select = queryInterpreter.InterpreteSelectQuery(selectText, parameters);
			return GenerateMetadata(select);
		}

		/// <summary>
		/// Generates metadata template for given <see cref="Select"/> query.
		/// Note, that some input names or types may be not resolved and should be manually verified!
		/// </summary>
		/// <param name="select">The query for which metadata should be generated.</param>
		/// <returns>Generated metadata template.</returns>
		public ModelSchemaMetadata GenerateMetadata(Select select) {
			var generator = new MLMetadataGenerator(true);
			return generator.GenerateMetadata(select);
		}

		#endregion

	}

	#endregion

}

