namespace Terrasoft.Configuration.FileUpload {

	#region Interface IFileUploadConfig

	public interface IFileUploadConfig : IFileUploadInfo {

		#region Properties

		/// <summary>
		///     Max file size in bytes for upload 
		/// </summary>
		decimal MaxFileSize { get; }

		/// <summary>
		///     Is set custom columns.
		/// </summary>
		bool SetCustomColumnsFromConfig { get; }
		
		/// <summary>
		/// Instance of <see cref="IFileUploadInfo"/>.
		/// </summary>
		IFileUploadInfo FileUploadInfo { get; } 

		#endregion
	}

	#endregion
}

