namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Configuration.GeneratedWebFormService;

	#region Interface: IGeneratedWebFormPreProcessHandler

	/// <summary>
	/// Provides interface for pre processing of the input params from landing page.
	/// </summary>
	public interface IGeneratedWebFormPreProcessHandler : IGeneratedWebFormProcessHandler
	{
		#region Methods

		/// <summary>
		/// Executes the the pre processing for specified landing page.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="formData">The form data.</param>
		/// <param name="webFormMaper">The parameters generator.</param>
		/// <returns>
		/// Processed form data.
		/// </returns>
		FormData Execute(UserConnection userConnection, FormData formData, 
			IWebFormImportParamsGenerator paramsGenerator);

		#endregion
	}

	#endregion

}
