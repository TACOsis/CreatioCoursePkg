namespace Terrasoft.Configuration.FileCacheManager
{
    using System;
    using System.Collections.Concurrent;
    using System.Configuration;
    using System.IO;
    using System.Linq;
    using global::Common.Logging;
    using Terrasoft.Common;
    using Terrasoft.Configuration.FileUpload;
    using Terrasoft.Core;
    using Terrasoft.Core.Configuration;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Factories;
    using Terrasoft.File;
    using Abstractions = Terrasoft.File.Abstractions;
    using IO = Terrasoft.IO;

    #region Class: CacheFileInfo

    public class CacheFileInfo
    {

        #region Constructors: Public

        public CacheFileInfo() { }

        public CacheFileInfo(Abstractions.IFile file) {
            File = file;
        }

        #endregion

        #region Properties: Public

        public Abstractions.IFile File { get; set; }

        public Guid FileId { get; set; }

        public string FullPath { get; set; }

        #endregion

        #region Methods: Public

        public override bool Equals(object obj) {
            var cacheFileInfo = obj as CacheFileInfo;
            if (obj == null || cacheFileInfo == null || cacheFileInfo.File == null || File == null) {
                return false;
            }
            return cacheFileInfo.File.Length.Equals(File.Length) && cacheFileInfo.File.ModifiedOn.ToUniversalTime()
                .Equals(File.ModifiedOn.ToUniversalTime());
        }

        public override int GetHashCode() {
            return FullPath.GetHashCode();
        }

        #endregion

    }
    
    #endregion
    
    #region Class: FileCacheManager

    [DefaultBinding(typeof(IFileCacheManager))]
    public class FileCacheManager : IFileCacheManager
    {

        #region Fields: Private

        private readonly ConcurrentDictionary<string, CacheFileInfo> _cache =
            new ConcurrentDictionary<string, CacheFileInfo>();

        private readonly ConcurrentDictionary<Guid, string> _cachedSchemas = new ConcurrentDictionary<Guid, string>();

        private readonly ILog _log = LogManager.GetLogger("FileLoader");

        private IO.IDirectory _directory;

        private IO.IFile _file;

        #endregion

        private static readonly object _lock = new object();

        #region Properties: Private

        private string FileCachePath { get; set; }

        #endregion

        #region Properties: Public

        public bool IsSuccessInitialization { get; private set; }

        #endregion

        #region Methods: Private

        private void FillCache(UserConnection userConnection) {
            IOrderedEnumerable<IO.IFileInfo> filesInfoOrderByDescending = _directory.GetDirectoryInfo(FileCachePath)
                .EnumerateFiles("*", SearchOption.TopDirectoryOnly)
                .OrderByDescending(fileInfo => fileInfo.CreationTime);
            foreach (IO.IFileInfo fileInfo in filesInfoOrderByDescending) {
                if (!TryParseIdsFromFileName(fileInfo.Name, out Guid entitySchemaUId, out Guid fileId)) {
                    continue;
                }
                EntitySchema entitySchema = userConnection.EntitySchemaManager.GetInstanceByUId(entitySchemaUId);
                Abstractions.IFile fileFromDb;
                try {
                    fileFromDb = GetFileInfoFromDb(userConnection, entitySchema.Name, fileId);
                } catch {
                    continue;
                }
                var cacheFileInfo = new CacheFileInfo {
                    File = fileFromDb,
                    FullPath = fileInfo.FullName
                };
                if (!_cache.TryAdd(GenerateCacheKey(entitySchemaUId, fileId), cacheFileInfo)) {
                    TryDeleteFile(fileInfo.FullName);
                }
            }
        }

        private string GenerateCacheKey(Guid entitySchemaUId, Guid fileId) {
            return $"{entitySchemaUId}_{fileId}";
        }

        private void Initialize(UserConnection userConnection) {
            FileCachePath = ConfigurationManager.AppSettings["FileCacheFolder"];
#if NETFRAMEWORK
            string siteName = System.Web.Hosting.HostingEnvironment.SiteName;
            if (siteName != null) {
                FileCachePath = Path.Combine(FileCachePath, siteName);
            }
#endif
            _log.Info($"Initialize file cache. Full cache folder path={FileCachePath}.");
            if (!_directory.Exists(FileCachePath)) {
                if (!TryCreateCacheDirectory()) {
                    IsSuccessInitialization = false;
                    return;
                }
            }
            lock (_cache) {
                _cache.Clear();
                FillCache(userConnection);
            }
        }

        private IFileUploadInfo LoadFileFromCache(EntitySchema entitySchema, BinaryWriter binaryWriter,
            CacheFileInfo cachedFileInfo) {
            FileEntityUploadInfo fileInfo;
            try {
                fileInfo = new FileEntityUploadInfo(entitySchema.Name, cachedFileInfo.FileId, cachedFileInfo.FullPath) {
                    TotalFileLength = cachedFileInfo.File.Length,
                    FileName = cachedFileInfo.File.Name
                };
                using (Stream source = _file.Open(cachedFileInfo.FullPath, FileMode.Open)) {
                    source.CopyTo(binaryWriter.BaseStream);
                    binaryWriter.Flush();
                }
            } catch (Exception e) {
                _log.Error("Can't load file from cache: " + e.Message);
                throw;
            }
            return fileInfo;
        }

        private bool TryCreateCacheDirectory() {
            try {
                _log.Info($"Initialize file cache. Create cache directory {FileCachePath}.");
                _directory.CreateDirectory(FileCachePath);
                _log.Info($"Initialize file cache. Directory {FileCachePath} created.");
            } catch {
                _log.Error($"Can't create cache directory {FileCachePath}.");
                IsSuccessInitialization = false;
                return false;
            }
            return true;
        }

        private bool TryDeleteFile(string fullPath) {
            try {
                _file.Delete(fullPath);
            } catch (Exception e) {
                _log.Error($"Can't delete old file {fullPath}. Message: {e.Message}");
                return false;
            }
            return true;
        }

        private Abstractions.IFile GetFileInfoFromDb(UserConnection userConnection, string entitySchemaName, Guid fileId) {
            var fileLocator = new EntityFileLocator(entitySchemaName, fileId);
            var fileFromDb = userConnection.GetFileFactory().Get(fileLocator);
            if (fileFromDb?.Exists != true) {
                throw new NullReferenceException($"LoadFile: file not found with Id: ${fileId}.");
            }
            return fileFromDb;
        }

        private bool TryInitialize(UserConnection userConnection) {
            try {
                _directory = ClassFactory.Get<IO.IDirectory>();
                _file = ClassFactory.Get<IO.IFile>();
                Initialize(userConnection);
            } catch (Exception e) {
                _log.Error($"Can't initialize Cache: {e.Message}");
                return false;
            }
            return true;
        }

        private bool TryLoadFileToCache(Abstractions.IFile file, string path) {
            try {
                using (Stream fileStream = _file.Open(path, FileMode.Create)) {
                    using (var binaryWriter = new BinaryWriter(fileStream)) {
                        using (Stream stream = Abstractions.FileUtils.Read(file)) {
                            stream.CopyTo(binaryWriter.BaseStream);
                            binaryWriter.Flush();
                        }
                    }
                }
            } catch (Exception e) {
                _log.Error($"Can't load file with name: {file.Name}. {e.Message}");
                return false;
            }
            return true;
        }

        private bool TryParseIdsFromFileName(string fileName, out Guid entitySchemaUId, out Guid fileId) {
            entitySchemaUId = Guid.Empty;
            fileId = Guid.Empty;
            string[] idFromFileName = fileName.Split('_');
            if (!(Guid.TryParse(idFromFileName[0], out entitySchemaUId) &&
                Guid.TryParse(idFromFileName[1], out fileId))) {
                _log.Error($"Cant parse Id from file name: {fileName}.");
                return false;
            }
            return true;
        }

        private CacheFileInfo UpdateCache(Guid entitySchemaUId, Guid fileId, Abstractions.IFile fileFromDb) {
            var fileInfoFromCache = new CacheFileInfo();
            try {
                string key = GenerateCacheKey(entitySchemaUId, fileId);
                if (!_cache.TryAdd(key, fileInfoFromCache)) {
                    fileInfoFromCache = _cache[key];
                }
                lock (fileInfoFromCache) {
                    UpdateFileInfoInCache(entitySchemaUId, fileId, fileFromDb, fileInfoFromCache);
                    UpdateFileInCache(fileId, fileFromDb, fileInfoFromCache);
                }
            } catch (Exception e) {
                _log.Error($"FileCache updating error. Message: {e.Message}");
                throw;
            }
            return fileInfoFromCache;
        }

        private void UpdateFileInCache(Guid fileId, Abstractions.IFile fileFromDb, CacheFileInfo fileInfoFromCache) {
            if (!_file.Exists(fileInfoFromCache.FullPath) && !TryLoadFileToCache(fileFromDb, fileInfoFromCache.FullPath)) {
                TryDeleteFile(fileInfoFromCache.FullPath);
                throw new FileNotFoundException($"File with Id: {fileId} not exists in cache.");
            }
            _file.SetCreationTime(fileInfoFromCache.FullPath, fileInfoFromCache.File.ModifiedOn);
        }

        private void UpdateFileInfoInCache(Guid entitySchemaUId, Guid fileId, Abstractions.IFile fileFromDb,
            CacheFileInfo fileInfoFromCache) {
            if (fileInfoFromCache.Equals(new CacheFileInfo(fileFromDb))) {
                return;
            }
            fileInfoFromCache.File = fileFromDb;
            fileInfoFromCache.FileId = fileId;
            fileInfoFromCache.FullPath = Path.Combine(FileCachePath ?? "FileCache", 
                $"{entitySchemaUId}_{fileId}_{Guid.NewGuid()}");
        }

        #endregion

        #region Methods: Public

        public static IFileCacheManager Create(UserConnection userConnection) {
            lock (_lock) {
                var instance = new FileCacheManager();
                instance.IsSuccessInitialization = instance.TryInitialize(userConnection);
                return instance;
            }
        }

        public bool GetIsSchemaCached(UserConnection userConnection, Guid entitySchemaUId) {
            if (!IsSuccessInitialization) {
                return false;
            }
            string schemaName;
            lock (_cachedSchemas) {
                if (!_cachedSchemas.ContainsKey(entitySchemaUId)) {
                    schemaName = userConnection.EntitySchemaManager.GetInstanceByUId(entitySchemaUId).Name;
                    _cachedSchemas.TryAdd(entitySchemaUId, schemaName);
                } else {
                    schemaName = _cachedSchemas[entitySchemaUId];
                }
            }
            string schemas = SysSettings.GetValue(userConnection, "FileCacheSchemas", string.Empty);
            return schemas.Contains(schemaName);
        }

        public IFileUploadInfo LoadFromCache(UserConnection userConnection, EntitySchema entitySchema, Guid fileId,
            BinaryWriter binaryWriter) {
            userConnection.CheckArgumentNull(nameof(userConnection));
            entitySchema.CheckArgumentNull(nameof(entitySchema));
            fileId.CheckArgumentEmpty(nameof(fileId));
            var fileFromDb = GetFileInfoFromDb(userConnection, entitySchema.Name, fileId);
            var cacheFileInfo = UpdateCache(entitySchema.UId, fileId, fileFromDb);
            return LoadFileFromCache(entitySchema, binaryWriter, cacheFileInfo);
        }

        #endregion

    }

    #endregion

}

