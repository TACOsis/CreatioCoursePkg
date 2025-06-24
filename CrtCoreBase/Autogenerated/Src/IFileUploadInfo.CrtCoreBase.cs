namespace Terrasoft.Configuration.FileUpload
{
	using System;
	using System.Collections.Generic;
	using System.IO;

	#region Interface: IFileUploadExtendedInfo

	public interface IFileUploadExtendedInfo: IFileUploadInfo {
		/// <summary>
		/// Parent entity schema name.
		/// </summary>
		string ParentEntitySchemaName {
			get;
		}
	}

	#endregion

	#region Interface: IFileUploadInfo

	public interface IFileUploadInfo
	{

		#region Properties: Public

		/// <summary>
		/// File entity schema name.
		/// </summary>
		string EntitySchemaName {
			get;
		}

		/// <summary>
		/// Data entity schema column name.
		/// </summary>
		string ColumnName {
			get;
		}

		/// <summary>
		/// File name.
		/// </summary>
		string FileName {
			get;
		}

		/// <summary>
		/// File identifier.
		/// </summary>
		Guid FileId {
			get;
		}

		/// <summary>
		/// File type identifier.
		/// </summary>
		Guid TypeId {
			get;
		}

		/// <summary>
		/// Total file length.
		/// </summary>
		decimal TotalFileLength {
			get;
		}

		/// <summary>
		/// Parent column name.
		/// </summary>
		string ParentColumnName {
			get;
		}

		/// <summary>
		/// Parent column value.
		/// </summary>
		Guid ParentColumnValue {
			get;
		}

		/// <summary>
		/// File content.
		/// </summary>
		Stream Content {
			get;
		}

		/// <summary>
		/// Additional parameters.
		/// </summary>
		Dictionary<string, object> AdditionalParams {
			get;
		}

		/// <summary>
		/// Determines if it is chunked upload.
		/// </summary>
		bool IsChunkedUpload {
			get;
		}

		/// <summary>
		/// Byte range.
		/// </summary>
		string ByteRange {
			get;
		}

		/// <summary>
		/// File version.
		/// </summary>
		int Version {
			get;
		}

		/// <summary>
		/// Gets value that determines whether it is the first chunk.
		/// </summary>
		bool IsFirstChunk {
			get;
		}

		/// <summary>
		/// Gets value that determines whether it is the last chunk.
		/// </summary>
		bool IsLastChunk {
			get;
		}

		#endregion

	}

	#endregion

}

