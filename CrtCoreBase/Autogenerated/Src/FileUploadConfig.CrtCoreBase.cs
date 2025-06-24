namespace Terrasoft.Configuration.FileUpload
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using Terrasoft.Common;

	#region Class: FileUploadConfig

	public class FileUploadConfig : IFileUploadConfig
	{

		#region Fields: Private

		private readonly IFileUploadInfo _fileUploadInfo;

		#endregion

		#region Constructors: Public

		/// <summary>
		///  Creates instance of type <see cref="FileUploadConfig"/>.
		/// </summary>
		/// <param name="fileUploadInfo"><see cref="IFileUploadInfo"/></param>
		public FileUploadConfig(IFileUploadInfo fileUploadInfo) {
			fileUploadInfo.CheckArgumentNull(nameof(fileUploadInfo));
			_fileUploadInfo = fileUploadInfo;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public decimal MaxFileSize { get; set; }

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public bool SetCustomColumnsFromConfig { get; set; }

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public IFileUploadInfo FileUploadInfo => _fileUploadInfo;

		/// <summary>
		/// <inheritdoc cref="IFileUploadInfo"/>.
		/// </summary>
		public string EntitySchemaName => _fileUploadInfo.EntitySchemaName;

		/// <summary>
		/// <inheritdoc cref="IFileUploadInfo"/>.
		/// </summary>
		public string ColumnName => _fileUploadInfo.ColumnName;

		/// <summary>
		/// <inheritdoc cref="IFileUploadInfo"/>.
		/// </summary>
		public string FileName => _fileUploadInfo.FileName;

		/// <summary>
		/// <inheritdoc cref="IFileUploadInfo"/>.
		/// </summary>
		public Guid FileId => _fileUploadInfo.FileId;

		/// <summary>
		/// <inheritdoc cref="IFileUploadInfo"/>.
		/// </summary>
		public Guid TypeId => _fileUploadInfo.TypeId;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public decimal TotalFileLength => _fileUploadInfo.TotalFileLength;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public string ParentEntitySchemaName => (_fileUploadInfo as IFileUploadExtendedInfo)?.ParentEntitySchemaName
			?? string.Empty;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public string ParentColumnName => _fileUploadInfo.ParentColumnName;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public Guid ParentColumnValue => _fileUploadInfo.ParentColumnValue;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public Dictionary<string, object> AdditionalParams => _fileUploadInfo.AdditionalParams;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public Stream Content => _fileUploadInfo.Content;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public bool IsChunkedUpload => _fileUploadInfo.IsChunkedUpload;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public string ByteRange => _fileUploadInfo.ByteRange;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public int Version => _fileUploadInfo.Version;

		/// <summary>
		/// <inheritdoc cref="IFileUploadConfig"/>.
		/// </summary>
		public bool IsFirstChunk => _fileUploadInfo.IsFirstChunk;

		/// <inheritdoc cref="IFileUploadConfig.IsLastChunk"/>.
		public bool IsLastChunk => _fileUploadInfo.IsLastChunk;

		#endregion

	}

	#endregion

}

