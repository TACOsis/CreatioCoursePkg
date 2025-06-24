namespace Terrasoft.Configuration.FileUpload
{
	using System;
	using Terrasoft.Common;

	#region Class: MaxFileSizeExceededException

	/// <summary>
	/// The exception that is thrown when file size is exceeded.
	/// </summary>
	public class MaxFileSizeExceededException : Exception
	{
		#region Constructors: Public

		/// <summary>
		/// Creates instance of type <see cref="MaxFileSizeExceededException"/>.
		/// </summary>
		/// <param name="storage">Resource storage.</param>
		public MaxFileSizeExceededException(IResourceStorage storage)
				: base(new LocalizableString(storage, "FileUploadExceptions",
				"LocalizableStrings.MaxFileSizeExceededExceptionMessage.Value")) {
		}

		#endregion
	}

	#endregion

	#region Class: InvalidFileSizeException

	/// <summary>
	/// The exception that is thrown when file size is invalid.
	/// </summary>
	public class InvalidFileSizeException : Exception
	{
		#region Constructors: Public

		/// <summary>
		/// Creates instance of type <see cref="InvalidFileSizeException"/>.
		/// </summary>
		/// <param name="storage">Resource storage.</param>
		public InvalidFileSizeException(IResourceStorage storage)
				: base(new LocalizableString(storage, "FileUploadExceptions",
				"LocalizableStrings.InvalidFileSizeExceptionMessage.Value")) {
		}

		#endregion
	}

	#endregion
}
