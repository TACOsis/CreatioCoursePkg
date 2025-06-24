namespace Terrasoft.Configuration.FileUpload
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using Terrasoft.File.Abstractions;
	using Terrasoft.WebApp;

	#region Class: FileEntityUploadInfo

	public class FileEntityUploadInfo : IFileUploadInfo
	{

		#region Public Constructors

		public FileEntityUploadInfo(string entitySchemaName, Guid fileId, string fileName,
				bool isChunkedUpload = false, bool isFirstChunk = true) {
			EntitySchemaName = entitySchemaName;
			FileId = fileId;
			FileName = fileName;
			ColumnName = "Data";
			IsChunkedUpload = isChunkedUpload;
			IsFirstChunk = isFirstChunk;
			TypeId = FileConsts.FileTypeUId;
			Version = 1;
		}

		#endregion

		#region Public Properties

		public string ByteRange => throw new NotImplementedException();

		public string ColumnName { get; set; }

		public Stream Content { get; set; }

		public Dictionary<string, object> AdditionalParams { get; set; }

		public string EntitySchemaName { get; set; }

		public Guid FileId { get; set; }

		public string FileName { get; set; }

		public bool IsChunkedUpload { get; set; }

		public bool IsFirstChunk { get; set; }

		/// <inheritdoc cref="IFileUploadInfo.IsLastChunk"/>
		public bool IsLastChunk { get; set; }

		public string ParentEntitySchemaName { get; set; }

		public string ParentColumnName { get; set; }

		public Guid ParentColumnValue { get; set; }

		public decimal TotalFileLength { get; set; }

		public Guid TypeId { get; set; }

		public int Version { get; set; }

		/// <summary>
		/// Instance of the <see cref="Terrasoft.File.Abstractions.IFile"/>.
		/// </summary>
		public IFile File { get; set; }

		#endregion

	}

	#endregion

}

