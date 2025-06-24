namespace Terrasoft.Configuration.FileCacheManager
{
    using System;
    using System.IO;
    using Terrasoft.Configuration.FileUpload;
    using Terrasoft.Core;
    using Terrasoft.Core.Entities;
    using Terrasoft.File.Abstractions;

    #region Interface: IFileCacheManager
    
    public interface IFileCacheManager
    {

        #region Properties

        bool IsSuccessInitialization { get; }

        #endregion

        #region Methods

        IFileUploadInfo LoadFromCache(UserConnection userConnection, EntitySchema entitySchema, 
            Guid fileId, BinaryWriter binaryWriter);
        
        bool GetIsSchemaCached(UserConnection userConnection, Guid entitySchemaUId);

        #endregion
    }

    #endregion
}

