namespace Terrasoft.Configuration.FileLoad
{
	using System;
	using System.IO;
	using Terrasoft.Common;
	using Terrasoft.Configuration.FileCacheManager;
	using Terrasoft.Configuration.FileUpload;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: FileCachedLoader

	public class FileCachedLoader : FileLoader
	{

		#region Fields: Private

		private IFileCacheManager _fileCacheManager;

		#endregion

		#region Constructors: Public

		/// <summary>
		///	 Creates a new instance of the <see cref="FileLoader"/> type.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="fileCacheManager"></param>
		public FileCachedLoader(UserConnection userConnection, IFileCacheManager fileCacheManager)
			: base(userConnection) {
			_fileCacheManager = fileCacheManager;
		}

		#endregion

		#region Properties: Private

		private IFileCacheManager FileCacheManager =>
			_fileCacheManager ?? (_fileCacheManager = ClassFactory.Get<IFileCacheManager>());

		#endregion

		#region Methods: Private

		private IFileUploadInfo LoadFromCache(Guid entitySchemaUId, Guid fileId, BinaryWriter binaryWriter) {
			EntitySchemaManager entitySchemaManager = UserConnection.EntitySchemaManager;
			EntitySchema entitySchema = entitySchemaManager.GetInstanceByUId(entitySchemaUId);
			IFileUploadInfo fileUploadInfo = null;
			try {
				fileUploadInfo = FileCacheManager.LoadFromCache(UserConnection, entitySchema, fileId, binaryWriter);
			} catch (Exception e) {
				Log.Error(e.Message + " " + e.StackTrace);
			}
			return fileUploadInfo;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		///	 Loads file.
		/// </summary>
		/// <param name="entitySchemaUId">UId of the entity schema.</param>
		/// <param name="fileId">Identifier of the file entity.</param>
		/// <param name="binaryWriter">Binary writer.</param>
		/// <returns>Information about uploaded file.</returns>
		public override IFileUploadInfo LoadFile(Guid entitySchemaUId, Guid fileId, BinaryWriter binaryWriter) {
			try {
				entitySchemaUId.CheckArgumentEmpty(nameof(entitySchemaUId));
				fileId.CheckArgumentEmpty(nameof(fileId));
				binaryWriter.CheckArgumentNull(nameof(binaryWriter));
			} catch (Exception e) {
				Log.Error("Argument is empty: " + e.Message);
				throw;
			}
			return LoadFromCache(entitySchemaUId, fileId, binaryWriter) ??
				base.LoadFile(entitySchemaUId, fileId, binaryWriter);
		}

		#endregion

	}

	#endregion

}

