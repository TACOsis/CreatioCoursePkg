namespace Terrasoft.Configuration.FileService
{
	using System;
	using System.Globalization;
	using System.IO;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Runtime.Serialization;
	using System.Web.SessionState;
	using Terrasoft.Common;
	using Terrasoft.Common.Json;
	using Terrasoft.Configuration.FileUpload;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.ServiceModelContract;
	using Terrasoft.File.Abstractions;
	using Terrasoft.WebApp;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;

	#region Class: FileService

	/// <inheritdoc cref="Terrasoft.Web.Common.BaseService" />
	/// <summary>
	/// File service.
	/// </summary>
	/// <inheritdoc cref="System.Web.SessionState.IReadOnlySessionState" />
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class FileService : BaseService, IReadOnlySessionState
	{

		#region Class: GetObjectLinkResponse

		/// <inheritdoc cref="Terrasoft.Core.ServiceModelContract.BaseResponse" />
		/// <summary>
		/// Get object link response.
		/// </summary>
		[DataContract]
		public class GetObjectLinkResponse : BaseResponse
		{

			#region Properties: Public

			/// <summary>
			/// Object link.
			/// </summary>
			[DataMember(Name = "objectLink")]
			public ObjectLink ObjectLink { get; set; }

			#endregion

		}

		#endregion

		#region Class: ObjectLink

		/// <summary>
		/// Object link.
		/// </summary>
		[DataContract]
		public class ObjectLink
		{

			#region Properties: Public

			/// <summary>
			/// Entity schema name.
			/// </summary>
			[DataMember(Name = "entitySchemaName")]
			public string EntitySchemaName { get; set; }

			/// <summary>
			/// Record identifier.
			/// </summary>
			[DataMember(Name = "recordId")]
			public Guid RecordId { get; set; }

			#endregion

		}

		#endregion

		#region Properties: Private

		private HttpContext CurrentContext => HttpContextAccessor.GetInstance();

		#endregion

		#region Methods: Private

		private Stream LoadFile(Guid entitySchemaUId, Guid fileId) {
			SetOutgoingResponseContentType();
			var buffer = new MemoryStream();
			var item = UserConnection.EntitySchemaManager.GetItemByUId(entitySchemaUId);
			var fileRepository = item.Name != "FeedFile"
				? ClassFactory.Get<IFileRepository>(new ConstructorArgument("userConnection", UserConnection))
				: ClassFactory.Get<IFeedFileRepository>(new ConstructorArgument("userConnection", UserConnection));
			fileRepository.UseContentStreamOnFileLoad =
				UserConnection.GetIsFeatureEnabled("UseContentStreamOnFileLoad");
			IFileUploadInfo fileInfo = fileRepository.LoadFile(entitySchemaUId, fileId, new BinaryWriter(buffer));
			if (fileInfo == null) {
				return Stream.Null;
			}
			SetOutgoingResponseContentLength(Convert.ToInt32(fileInfo.TotalFileLength));
			string contentDisposition = GetResponseContentDisposition(fileInfo.FileName);
			CurrentContext.Response.AddHeader("Content-Disposition", contentDisposition);
			MimeTypeResult mimeTypeResult = MimeTypeDetector.GetMimeType(fileInfo.FileName);
			CurrentContext.Response.ContentType = mimeTypeResult.HasError
				? "application/octet-stream"
				: mimeTypeResult.Type;
#if NETFRAMEWORK

			// TODO RND-13658 Use abstract api instead of straight usage of WCF api.
			OperationContext context = OperationContext.Current;
			if (context != null) {
				System.ServiceModel.Channels.HttpResponseMessageProperty responseMessageProperty =
					new System.ServiceModel.Channels.HttpResponseMessageProperty {
						Headers = {
							["Content-Type"] = CurrentContext.Response.ContentType
						}
					};
				string httpResponsePropertyKey = System.ServiceModel.Channels.HttpResponseMessageProperty.Name;
				context.OutgoingMessageProperties[httpResponsePropertyKey] = responseMessageProperty;
			}
#endif
			if (fileInfo is FileEntityUploadInfo fileEntityUploadInfo && fileEntityUploadInfo.File != null) {
				Stream content = fileEntityUploadInfo.File.Read();
				return content;
			}
			buffer.Flush();
			buffer.Seek(0, SeekOrigin.Begin);
			return buffer;
		}

		#endregion

		#region Methods: Protected

		/// <summary>
		/// Gets response content disposition header value.
		/// </summary>
		/// <param name="fileName">File name.</param>
		/// <returns>Content disposition header value.</returns>
		protected virtual string GetResponseContentDisposition(string fileName) {
			var userConnectionArg = new ConstructorArgument("httpContext", CurrentContext);
			var responseContentDisposition = ClassFactory.Get<DownloadFileNameEncoder>(userConnectionArg);
			return responseContentDisposition.GenerateName(fileName,
				UserConnection.GetIsFeatureEnabled("UseUrlPathEncodeForGenerateFileName"));
		}

		/// <summary>
		/// Sets outgoing response content length.
		/// </summary>
		protected virtual void SetOutgoingResponseContentLength(int size) {
			CurrentContext.Response.Headers["Content-Length"] = size.ToString(CultureInfo.InvariantCulture);
		}

		/// <summary>
		/// Sets outgoing response content type.
		/// </summary>
		protected virtual void SetOutgoingResponseContentType() {
			CurrentContext.Response.ContentType = "application/octet-stream";
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Load file.
		/// </summary>
		/// <param name="entitySchemaUId">EntitySchema UId.</param>
		/// <param name="fileId">File Id.</param>
		[OperationContract]
		[WebGet(UriTemplate = "GetFile/{entitySchemaUId}/{fileId}")]
		public Stream GetFile(string entitySchemaUId, string fileId) {
			return LoadFile(new Guid(entitySchemaUId), new Guid(fileId));
		}

		/// <summary>
		/// Load file.
		/// </summary>
		/// <param name="entitySchemaName">EntitySchema name.</param>
		/// <param name="fileId">File Id.</param>
		[OperationContract]
		[WebGet(UriTemplate = "Download/{entitySchemaName}/{fileId}")]
		public Stream Download(string entitySchemaName, string fileId) {
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			return LoadFile(entitySchema.UId, new Guid(fileId));
		}

		/// <summary>
		/// Returns object link.
		/// </summary>
		/// <param name="entitySchemaUId">Entity schema identifier.</param>
		/// <param name="linkId">Link identifier.</param>
		/// <returns>Object link response.</returns>
		/// <exception cref="ItemNotFoundException">Throws when entity schema or link not found.</exception>
		[OperationContract]
		[WebGet(UriTemplate = "GetObjectLink/{entitySchemaUId}/{linkId}", ResponseFormat = WebMessageFormat.Json,
				BodyStyle = WebMessageBodyStyle.Bare)]
		public GetObjectLinkResponse GetObjectLink(string entitySchemaUId, string linkId) {
			var response = new GetObjectLinkResponse {
				Success = true
			};
			try {
				EntitySchema entitySchema = UserConnection.EntitySchemaManager
					.GetInstanceByUId(new Guid(entitySchemaUId));
				var query = new EntitySchemaQuery(entitySchema);
				query.AddColumn("Data");
				query.Filters.Add(query.CreateFilterWithParameters(FilterComparisonType.Equal, "Type",
					FileConsts.EntityLinkTypeUId));
				Entity entity = query.GetEntity(UserConnection, new Guid(linkId)) ??
					throw new ItemNotFoundException("Record {0} not found in {1}", linkId, entitySchema.Name);
				using (var stream = entity.GetStreamValue("Data")) {
					using (var streamReader = new StreamReader(stream)) {
						string content = streamReader.ReadToEnd();
						response.ObjectLink = Json.Deserialize<ObjectLink>(content);
					}
				}
			} catch (Exception e) {
				response.SetErrorInfo(e);
				response.Success = false;
			}
			return response;
		}

		#endregion

	}

	#endregion

}

