namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using Terrasoft.Configuration.FileLoad;
	using Terrasoft.Configuration.FileUpload;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using System.Linq;
	using Terrasoft.Configuration.FileCacheManager;
	using Terrasoft.Core.DB;

	#region Interface: IFileRepository

	public interface IFileRepository
	{

		#region Methods: Public

		IFileUploadInfo LoadFile(Guid entitySchemaUId, Guid fileId, BinaryWriter binaryWriter);
		bool UseContentStreamOnFileLoad { get; set; }

		#endregion

	}

	#endregion
	
	#region Class: FileRepository

	[DefaultBinding(typeof(IFileRepository))]
	public class FileRepository : IFileRepository
	{

		#region Fields: Private

		private IFileCacheManager _fileCacheManager;

		#endregion

		#region Properties: Private
		
		private IFileCacheManager FileCacheManager => _fileCacheManager ?? (_fileCacheManager = ClassFactory.Get<IFileCacheManager>());

		#endregion
		
		#region Constructors: Public

		/// <summary>
		/// Creates instance of type <see cref="FileRepository"/>.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public FileRepository(UserConnection userConnection) {
			UserConnection = userConnection;
		}
		
		#endregion

		#region Properties: Protected

		/// <summary>
		/// User connection.
		/// </summary>
		protected UserConnection UserConnection { get; }

		#endregion

		#region Properties: Public

		/// <summary>
		/// Flag indicating whether to use a content stream when loading a file.
		/// </summary>
		public bool UseContentStreamOnFileLoad { get; set; }

		#endregion

		#region Methods: Private

		private bool CanUseFileCacheLoader(Guid entitySchemaUId) {
			return UserConnection.GetIsFeatureEnabled("UseFileCache")
				&& FileCacheManager.IsSuccessInitialization 
				&& FileCacheManager.GetIsSchemaCached(UserConnection, entitySchemaUId);
		}
		
		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads file.
		/// </summary>
		/// <param name="entitySchemaUId">EntitySchema UId.</param>
		/// <param name="fileId">File Id.</param>
		/// <param name="binaryWriter">File content binary writer.</param>
		/// <returns>Loaded file information.</returns>
		public virtual IFileUploadInfo LoadFile(Guid entitySchemaUId, Guid fileId, BinaryWriter binaryWriter) {
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.GetInstanceByUId(entitySchemaUId);
			FileLoader loader = CanUseFileCacheLoader(entitySchemaUId)
				? ClassFactory.Get<FileCachedLoader>(new ConstructorArgument("userConnection", UserConnection))
				: ClassFactory.Get<FileLoader>(new ConstructorArgument("userConnection", UserConnection));
			loader.UseContentStreamOnFileLoad = UseContentStreamOnFileLoad;
			return loader.LoadFile(entitySchemaUId, fileId, binaryWriter);
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
		/// Uploads file and creates attachment.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <returns>Is operation successful.</returns>
		public virtual bool UploadAndAttachFile(IFileUploadInfo fileUploadInfo) {
			bool result = false;
			using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
				dbExecutor.StartTransaction();
				try {
					if (UploadFile(fileUploadInfo, true)) {
						result = CreateFileAttachment(fileUploadInfo);
					}
					dbExecutor.CommitTransaction();
				} catch {
					dbExecutor.RollbackTransaction();
					throw;
				}
			}
			return result;
		}

		/// <summary>
		/// Uploads file.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <param name="isSetCustomColumns">Is set custom columns.</param>
		/// <returns>Is operation successful.</returns>
		public virtual bool UploadFile(IFileUploadInfo fileUploadInfo, bool isSetCustomColumns) {
			var uploader = ClassFactory.Get<FileUploader>(new ConstructorArgument("userConnection", UserConnection));
			return uploader.UploadFile(fileUploadInfo, isSetCustomColumns);
		}

		/// <summary>
		/// Creates file attachment.
		/// </summary>
		/// <param name="fileUploadInfo">File upload information.</param>
		/// <returns>Is operation successful.</returns>
		public virtual bool CreateFileAttachment(IFileUploadInfo fileUploadInfo) {
			var uploader = ClassFactory.Get<FileUploader>(new ConstructorArgument("userConnection", UserConnection));
			return uploader.CreateFileAttachment(fileUploadInfo);
		}

		/// <summary>
		/// Delete file.
		/// </summary>
		/// <param name="entitySchemaName">EntitySchemaName where the file will be deleted.</param>
		/// <param name="id">Entity id.</param>
		/// <param name="useAdminRights">Use rights administration.</param>
		public virtual void DeleteFile(string entitySchemaName, Guid id, bool useAdminRights = true) {
			DeleteFiles(entitySchemaName, new object[] { id }, useAdminRights);
		}

		/// <summary>
		/// Delete files.
		/// </summary>
		/// <param name="entitySchemaName">EntitySchemaName where the file will be deleted.</param>
		/// <param name="ids">id enum files to delete</param>
		/// <param name="useAdminRights"></param>
		public virtual void DeleteFiles(string entitySchemaName, IEnumerable<Guid> ids, bool useAdminRights = true) {
			DeleteFiles(entitySchemaName, ids.Cast<object>().ToArray(), useAdminRights);
		}

		/// <summary>
		/// Delete files.
		/// </summary>
		/// <param name="entitySchemaName">EntitySchemaName where the file will be deleted.</param>
		/// <param name="ids">id files to delete</param>
		/// <param name="useAdminRights">Use rights administration.</param>
		public virtual void DeleteFiles(string entitySchemaName, object[] ids, bool useAdminRights = true) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, entitySchemaName) {
				UseAdminRights = useAdminRights
			};
			esq.AddAllSchemaColumns();
			esq.Filters.Add(
				esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Id", ids));
			EntityCollection entityCollection = esq.GetEntityCollection(UserConnection);
			for (int i = 0; i < entityCollection.Count; i++) {
				entityCollection[i].UseAdminRights = useAdminRights;
				entityCollection[i].Delete();
				i--;
			}
		}

		#endregion

	}

	#endregion
}

