namespace Terrasoft.Configuration.FileUpload
{
	using System;
	using System.Linq;
	using System.Collections.Generic;
	using System.IO;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Configuration.FileHandler;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.File;
	using Terrasoft.File.Abstractions;
	using TSConfiguration = Terrasoft.Core.Configuration;
	using Terrasoft.WebApp;

	#region Class: FileUploader

	/// <summary>
	/// Represents class for file uploading.
	/// </summary>
	public class FileUploader : FileHandler
	{

		#region Constants: Private

		private const string MaxFileSizeSysSettingName = "MaxFileSize";
		private decimal _maxFileSize = -1;

		#endregion

		#region Fileds: Private

		private static readonly ILog _logger = LogManager.GetLogger("FileUploader");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Creates a new instance of the <see cref="FileUploader"/> type.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public FileUploader(UserConnection userConnection) : base(userConnection) {
		}

		#endregion

		#region Properties: Private

		private decimal MaxFileSize {
			get {
				if (_maxFileSize > 0) {
					return _maxFileSize;
				}
				int value = TSConfiguration.SysSettings.GetValue(UserConnection, MaxFileSizeSysSettingName, 0);
				_maxFileSize = FileSizeConverter.MbToBytes(value);
				return _maxFileSize;
			}
		}

		#endregion

		#region Methods: Private

		private static void AppendData(UserConnection userConnection, IFileUploadInfo fileUploadInfo) {
			DBLobUtilities.AppendBlob(userConnection, fileUploadInfo.EntitySchemaName, fileUploadInfo.ColumnName,
				fileUploadInfo.FileId, fileUploadInfo.Content);
		}

		private static Entity GetEntity(UserConnection userConnection, string entitySchemaName) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			EntitySchema entitySchema = entitySchemaManager.GetInstanceByName(entitySchemaName);
			return entitySchema.CreateEntity(userConnection);
		}

		private static bool GetCanUseAdminRights(IFileUploadInfo fileInfo, UserConnection userConnection) {
			var extraParams = fileInfo.AdditionalParams;
			if (extraParams != null && userConnection != null &&
					extraParams.TryGetValue(FileConsts.UseAdminRightsAdditionalParamValueName, out object result)) {
				return (bool)result;
			}
			if (fileInfo.EntitySchemaName == FileConsts.FeedFileEntitySschemaName) {
				return false;
			}
			return true;
		}

		private static string GetColumnValueName(UserConnection userConnection, string entitySchemaName,
				string schemaColumnName) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			EntitySchema entitySchema = entitySchemaManager.GetInstanceByName(entitySchemaName);
			EntitySchemaColumn column = entitySchema.Columns.GetByName(schemaColumnName);
			return column.ColumnValueName;
		}

		private static FileWriteOptions GetWriteOptions(IFileUploadInfo fileUploadInfo) {
			if (!fileUploadInfo.IsChunkedUpload) {
				return FileWriteOptions.SinglePart;
			}
			bool isFirstPart = fileUploadInfo.IsFirstChunk;
			bool isFinalPart = fileUploadInfo.IsLastChunk;
			if (isFirstPart && isFinalPart) {
				return FileWriteOptions.SinglePart;
			}
			if (isFirstPart) {
				return FileWriteOptions.FirstPart;
			}
			return isFinalPart ? FileWriteOptions.FinalPart : FileWriteOptions.NextPart;
		}

		private Entity GetFileEntity(IFileUploadInfo fileUploadInfo) {
			Entity entity = GetEntity(UserConnection, fileUploadInfo.EntitySchemaName);
			entity.UseAdminRights = GetCanUseAdminRights(fileUploadInfo, UserConnection);
			if (!entity.FetchFromDB(fileUploadInfo.FileId)) {
				entity.SetDefColumnValues();
				if (fileUploadInfo.ParentColumnName.IsNotNullOrEmpty() ||
						UserConnection.GetIsFeatureEnabled("DisableCheckParentColumnNameForFileUpload")) {
					string columnValueName = GetColumnValueName(UserConnection, fileUploadInfo.EntitySchemaName,
						fileUploadInfo.ParentColumnName);
					entity.SetColumnValue(columnValueName, fileUploadInfo.ParentColumnValue);
				}
			}
			entity.SetStreamValue(fileUploadInfo.ColumnName, fileUploadInfo.Content);
			entity.SetColumnValue("Size", fileUploadInfo.TotalFileLength);
			return entity;
		}

		private Entity GetFileAttachmentEntity(IFileUploadInfo fileUploadInfo) {
			Entity entity = GetEntity(UserConnection, "FileLink");
			entity.UseAdminRights = GetCanUseAdminRights(fileUploadInfo, UserConnection);
			entity.SetDefColumnValues();
			entity.SetColumnValue("RecordId", fileUploadInfo.ParentColumnValue);
			entity.SetColumnValue("RecordSchemaName",
				(fileUploadInfo as IFileUploadExtendedInfo)?.ParentEntitySchemaName ?? string.Empty);
			entity.SetColumnValue("FileRecordId", fileUploadInfo.FileId);
			entity.SetColumnValue("FileSchemaName", fileUploadInfo.EntitySchemaName);
			entity.SetColumnValue("Name", fileUploadInfo.FileName);
			return entity;
		}

		private void SetEntityColumnValues(Entity entity, Dictionary<string, object> attributes) {
			EntitySchemaManager entitySchemaManager = UserConnection.EntitySchemaManager;
			EntitySchema entitySchema = entitySchemaManager.GetInstanceByName(entity.SchemaName);
			EntitySchemaColumnCollection schemaColumns = entitySchema.Columns;
			foreach (KeyValuePair<string, object> attribute in attributes) {
				EntitySchemaColumn schemaColumn = schemaColumns.FindByColumnValueName(attribute.Key);
				if (schemaColumn == null) {
					_logger.Warn($"Can't find column of the schema {entitySchema.Name} for the" +
						$"attribute '{attribute.Key}'");
					continue;
				}
				string columnValueName = schemaColumn.ColumnValueName;
				if (attribute.Value is byte[] bytes) {
					entity.SetBytesValue(columnValueName, bytes);
				} else {
					entity.SetColumnValue(columnValueName, attribute.Value);
				}
			}
		}

		private static bool GetIsOfLinkType(IFileUploadConfig fileUploadConfig) {
			Guid typeId = fileUploadConfig?.TypeId ?? Guid.Empty;
			object value = null;
			if (fileUploadConfig?.AdditionalParams?.TryGetValue("TypeId", out value) ?? false) {
				if (Guid.TryParse(value?.ToString(), out Guid additionalTypeId) && additionalTypeId.IsNotEmpty()) {
					typeId = additionalTypeId;
				}
			}
			return typeId.IsNotEmpty() && (typeId == FileConsts.EntityLinkTypeUId || typeId == FileConsts.LinkTypeUId);
		}

		private bool GetCanUseFileApi(UserConnection userConnection, IFileUploadConfig fileUploadConfig) {
			EntitySchemaManager entitySchemaManager = userConnection.EntitySchemaManager;
			EntitySchema entitySchema = entitySchemaManager.GetInstanceByName(fileUploadConfig.EntitySchemaName);
			return !GetIsOfLinkType(fileUploadConfig) && GetCanUseFileApi(entitySchema);
		}

		private void UploadInternal(IFileUploadConfig fileUploadConfig) {
			if (GetCanUseFileApi(UserConnection, fileUploadConfig)) {
				Upload(fileUploadConfig);
				return;
			}
			if (!fileUploadConfig.IsChunkedUpload || fileUploadConfig.IsFirstChunk) {
				Save(fileUploadConfig.FileUploadInfo, fileUploadConfig.SetCustomColumnsFromConfig);
			} else {
				AppendData(UserConnection, fileUploadConfig);
			}
		}

		private IFile GetFile(IFileUploadConfig fileUploadConfig, IFileFactory fileFactory,
				EntityFileLocator fileLocator, IFileUploadInfo fileUploadInfo) {
			IFile file = fileFactory.Get(fileLocator);
			if (!file.Exists) {
				file = CreateFile(fileFactory, fileLocator, fileUploadInfo);
			}
			var attributes = new Dictionary<string, object>();
			FillAttributes(attributes, fileUploadInfo, fileUploadConfig.SetCustomColumnsFromConfig);
			file.SetAttributes(attributes);
			file.TotalLength = Convert.ToInt64(fileUploadConfig.TotalFileLength);
			return file;
		}

		private IFile CreateFile(IFileFactory fileFactory, EntityFileLocator fileLocator,
				IFileUploadInfo fileUploadInfo) {
			IFile file = fileFactory.Create(fileLocator);
			file.Name = fileUploadInfo.FileName;
			if (fileUploadInfo.ParentColumnName.IsNotNullOrEmpty()) {
				string columnValueName = GetColumnValueName(UserConnection, fileUploadInfo.EntitySchemaName,
					fileUploadInfo.ParentColumnName);
				file.SetAttribute(columnValueName, fileUploadInfo.ParentColumnValue);
			}
			return file;
		}

		private void Upload(IFileUploadConfig fileUploadConfig) {
			var fileLocator = new EntityFileLocator(fileUploadConfig.EntitySchemaName, fileUploadConfig.FileId);
			IFileFactory fileFactory = UserConnection.GetFileFactory();
			fileFactory.UseRights = GetCanUseAdminRights(fileUploadConfig.FileUploadInfo, UserConnection);
			bool isFirstChunkOrSinglePart = !fileUploadConfig.IsChunkedUpload || fileUploadConfig.IsFirstChunk;
			IFileUploadInfo fileUploadInfo = fileUploadConfig.FileUploadInfo;
			IFile file = isFirstChunkOrSinglePart
				? GetFile(fileUploadConfig, fileFactory, fileLocator, fileUploadInfo)
				: fileFactory.Get(fileLocator);
			FileWriteOptions writeOptions = GetWriteOptions(fileUploadConfig);
			file.Write(fileUploadConfig.Content ?? Stream.Null, writeOptions);
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Gets maximum file size system setting value in bytes.
		/// </summary>
		/// <returns>File size system setting value in bytes.</returns>
		[Obsolete("7.16.0 | Property is obsolete and will be removed in upcoming releases")]
		protected decimal GetMaxFileSize() => MaxFileSize;

		/// <summary>
		/// Saves file content into database.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <param name="isSetCustomColumns">Is set custom columns.</param>
		protected void Save(IFileUploadInfo fileUploadInfo, bool isSetCustomColumns = true) {
			Entity entity = GetFileEntity(fileUploadInfo);
			var attributes = new Dictionary<string, object>();
			FillAttributes(attributes, fileUploadInfo, isSetCustomColumns);
			SetEntityColumnValues(entity, attributes);
			entity.Save();
		}

		/// <summary>
		/// Sets custom columns to <paramref name="entity"/> according to <paramref name="fileUploadInfo"/>.
		/// </summary>
		/// <param name="entity">File entity.</param>
		/// <param name="fileUploadInfo">File upload information.</param>
		[Obsolete("7.17.2 | Method is not in use and will be removed in upcoming releases. " +
			"Use FillAttributes instead.")]
		protected virtual void SetCustomColumns(Entity entity, IFileUploadInfo fileUploadInfo) {
			entity.SetColumnValue("Id", fileUploadInfo.FileId);
			entity.SetColumnValue("Name", fileUploadInfo.FileName);
			entity.SetColumnValue("TypeId", fileUploadInfo.TypeId);
			entity.SetColumnValue("Version", fileUploadInfo.Version);
		}

		/// <summary>
		/// Fills file attributes.
		/// </summary>
		/// <param name="attributes">Dictionary that represents a list of the key/value pairs, where key
		/// is column value name and value is column value.</param>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <param name="isSetBaseAttributes">Is need to set base attributes.</param>
		protected virtual void FillAttributes(Dictionary<string, object> attributes, IFileUploadInfo fileUploadInfo,
				bool isSetBaseAttributes) {
			Entity entity = GetEntity(UserConnection, fileUploadInfo.EntitySchemaName);
#pragma warning disable 618
			if (isSetBaseAttributes) {
				SetCustomColumns(entity, fileUploadInfo);
			}
			if (!fileUploadInfo.AdditionalParams.IsNullOrEmpty()) {
				SetAdditionalColumns(entity, fileUploadInfo.AdditionalParams);
			}
#pragma warning restore 618
			IEnumerable<EntityColumnValue> changedColumnValues = entity.GetChangedColumnValues();
			foreach (EntityColumnValue changedColumnValue in changedColumnValues) {
				attributes[changedColumnValue.Name] = changedColumnValue.StreamBytes ?? changedColumnValue.Value;
			}
		}

		/// <summary>
		/// Sets additional columns to <paramref name="entity"/> according to <paramref name="additionalParams"/>.
		/// </summary>
		/// <param name="entity">File entity.</param>
		/// <param name="additionalParams">File upload information.</param>
		[Obsolete("7.17.2 | Method is not in use and will be removed in upcoming releases. " +
			"Use FillAttributes instead.")]
		protected virtual void SetAdditionalColumns(Entity entity, Dictionary<string, object> additionalParams) {
			IEnumerable<string> entityColumns = entity.GetColumnValueNames();
			HashSet<string> columnValueNames = entityColumns.ToHashSet();
			foreach (string additionalColumnName in additionalParams.Keys) {
				if (columnValueNames.Contains(additionalColumnName)) {
					object columnValue = additionalParams[additionalColumnName];
					entity.SetColumnValue(additionalColumnName, columnValue);
				}
			}
		}

		/// <summary>
		/// Checks validity of file size.
		/// </summary>
		/// <param name="totalFileLength"></param>
		/// <returns>Is file size valid.</returns>
		protected bool CheckMaxFileSize(decimal totalFileLength) {
			return MaxFileSize != 0 && totalFileLength > MaxFileSize;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Uploads file content.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <returns>File upload result.</returns>
		[Obsolete("Deprecated since 7.11.2. Use UploadFile instead")]
		public virtual string Upload(IFileUploadInfo fileUploadInfo) {
			UploadFile(fileUploadInfo);
			return "Ok";
		}

		/// <summary>
		/// Uploads file.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <returns>Is operation successful.</returns>
		public virtual bool UploadFile(IFileUploadInfo fileUploadInfo) {
			return UploadFile(fileUploadInfo, true);
		}

		/// <summary>
		/// Uploads file.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <param name="isSetCustomColumns">Is set custom columns.</param>
		/// <returns>Is operation successful.</returns>
		public virtual bool UploadFile(IFileUploadInfo fileUploadInfo, bool isSetCustomColumns) {
			var config = new FileUploadConfig(fileUploadInfo) {
				SetCustomColumnsFromConfig = isSetCustomColumns
			};
			UploadFile(config);
			return true;
		}

		/// <summary>
		/// Uploads file.
		/// </summary>
		/// <param name="fileUploadInfoConfig">File upload information.<see cref="IFileUploadConfig"/></param>
		/// <returns></returns>
		/// <exception cref="MaxFileSizeExceededException"></exception>
		public virtual void UploadFile(IFileUploadConfig fileUploadInfoConfig) {
			fileUploadInfoConfig.CheckArgumentNull(nameof(fileUploadInfoConfig));
			_maxFileSize = fileUploadInfoConfig.MaxFileSize;
			if (CheckMaxFileSize(fileUploadInfoConfig.TotalFileLength)) {
				throw new MaxFileSizeExceededException(UserConnection.Workspace.ResourceStorage);
			}
			UploadInternal(fileUploadInfoConfig);
		}

		/// <summary>
		/// Creates file attachment.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.<see cref="IFileUploadInfo"/></param>
		/// <returns>Is operation successful.</returns>
		public virtual bool CreateFileAttachment(IFileUploadInfo fileUploadInfo) {
			fileUploadInfo.CheckArgumentNull(nameof(fileUploadInfo));
			var config = new FileUploadConfig(fileUploadInfo);
			Entity entity = GetFileAttachmentEntity(config);
			return entity.Save();
		}


		#endregion

	}

	#endregion

}
