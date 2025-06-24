namespace Terrasoft.Configuration.GeneratedWebFormService
{

	#region Interface: IWebFormImportParamsGenerator

	/// <summary>
	/// Provides interface for import parameters generation.
	/// </summary>
	public interface IWebFormImportParamsGenerator : IWebFormResultInfo
	{
		
		#region Properties: Public

		/// <summary>
		/// Gets or sets the default value manager.
		/// </summary>
		/// <value>
		/// The default value manager.
		/// </value>
		IDefaultValueManager DefaultValueManager {
			get; 
			set;
		}
		/// <summary>
		/// Gets or sets the generated web form validator.
		/// </summary>
		/// <value>
		/// The generated web form validator.
		/// </value>
		IGeneratedWebFormValidator GeneratedWebFormValidator {
			get;
			set;
		}

		#endregion

	}

	#endregion

}

