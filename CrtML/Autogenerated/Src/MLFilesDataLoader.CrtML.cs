namespace Terrasoft.Configuration.ML
{
	using System;
	using System.Collections.Generic;
	using System.IO;
	using System.Linq;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.File;
	using Terrasoft.File.Abstractions;
	using Terrasoft.WebApp;

	public class MLFilesDataLoader : IMLTrainDataLoader
	{

		#region Class: MLFileInfo

		private class MLFileInfo
		{
			public MLFileInfo(IFileLocator fileLocator, Guid fileId, string fileName) {
				FileLocator = fileLocator;
				FileId = fileId;
				FileName = fileName;
			}

			public IFileLocator FileLocator { get; set; }

			public Guid FileId { get; set; }

			public string FileName { get; set; }
		}

		#endregion


		#region Constants: Private

		private const int ChunkSize = 512 * 1024;

		#endregion

		#region Fields: Private

		private readonly UserConnection _userConnection;
		private readonly Guid _modelId;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes new instance of <see cref="MLFilesDataLoader"/> class.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="modelId">Model that has files to load.</param>
		public MLFilesDataLoader(UserConnection userConnection, Guid modelId) {
			_userConnection = userConnection;
			_modelId = modelId;
		}

		#endregion

		#region Methods: Private

		private static uint[] CreateLookup32() {
			var result = new uint[256];
			for (int i = 0; i < 256; i++) {
				string s = i.ToString("X2");
				result[i] = s[0] + ((uint)s[1] << 16);
			}
			return result;
		}

		private static string ByteArrayToHex(byte[] bytes) {
			uint[] lookup32 = CreateLookup32();
			var result = new char[bytes.Length * 2];
			for (int i = 0; i < bytes.Length; i++) {
				uint val = lookup32[bytes[i]];
				result[2 * i] = (char)val;
				result[2 * i + 1] = (char)(val >> 16);
			}
			return new string(result);
		}

		private List<MLFileInfo> LoadFileInfos() {
			EntitySchema rootSchema = _userConnection.EntitySchemaManager.GetInstanceByName("MLModelFile");
			var esq = new EntitySchemaQuery(rootSchema) {
				IgnoreDisplayValues = true,
				PrimaryQueryColumn = {
					IsAlwaysSelect = true
				}
			};
			esq.AddColumn("Name");
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "MLModel", _modelId));
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Type", FileConsts.FileTypeUId));
			EntityCollection entityCollection = esq.GetEntityCollection(_userConnection);
			return entityCollection.Select(entity => {
				Guid fileId = entity.PrimaryColumnValue;
				string fileName = entity.GetTypedColumnValue<string>("Name");
				var fileLocator = new EntityFileLocator(rootSchema.Name, fileId);
				return new MLFileInfo(fileLocator, fileId, fileName);
			}).ToList();
		}

		private int LoadFiles(List<MLFileInfo> fileInfos, Action<MLUploadingData, int> onChunkLoaded) {
			IFileFactory fileFactory = _userConnection.GetFileFactory();
			foreach (MLFileInfo fileInfo in fileInfos) {
				IFile file = fileFactory.Get(fileInfo.FileLocator);
				Stream fileStream = file.Read();
				byte[] buffer = new byte[ChunkSize];
				int bytesRead;
				int chunkNumber = 0;
				while ((bytesRead = fileStream.Read(buffer, 0, ChunkSize)) > 0) {
					byte[] chunk = new byte[bytesRead];
					Array.Copy(buffer, chunk, bytesRead);
					string data = Convert.ToBase64String(chunk);
					var uploadingData = new MLUploadingData(data, fileInfo.FileId, fileInfo.FileName, chunkNumber++);
					onChunkLoaded(uploadingData, bytesRead / 1024);
				}
				fileStream.Close();
			}
			return fileInfos.Count;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Loads the files data by chunks, executing given handler on each.
		/// </summary>
		/// <param name="onChunkLoaded">Action that executes on each serialized data chunk loaded from the database.
		/// </param>
		/// <returns>Number of loaded files.</returns>
		public int LoadData(Action<MLUploadingData, int> onChunkLoaded) {
			List<MLFileInfo> fileInfos = LoadFileInfos();
			return LoadFiles(fileInfos, onChunkLoaded);
		}

		#endregion

	}
}
 
