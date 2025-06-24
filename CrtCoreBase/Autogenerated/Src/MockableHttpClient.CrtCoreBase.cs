namespace Terrasoft.Configuration
{
	using System;
	using System.Collections.Generic;
	using System.Net;
	using System.Threading.Tasks;
	using Newtonsoft.Json;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Requests;

	public class MockableHttpClient : BaseMockableHttpClient<HttpRequestConfig, IHttpResponse>, IHttpRequestClient
	{

		#region Class: MockedHttpResponse

		public class MockedHttpResponse : IHttpResponse
		{
			public string Content { get; set; }
			public HttpStatusCode StatusCode { get; set; } = HttpStatusCode.OK;
			public bool IsSuccessStatusCode => StatusCode == HttpStatusCode.OK; 
			public string ReasonPhrase { get; set; }
			public IEnumerable<KeyValuePair<string, IEnumerable<string>>> Headers { get; set; }
			public Version Version { get; set; }
			public HttpRequestConfig RequestConfig { get; set; }
			public Exception Exception { get; set; }
			public bool IsTimedOut { get; set; }
			public int AttemptsCount { get; set; }

			public TResult GetResult<TResult>() {
				return Json.Deserialize<TResult>(Content ?? string.Empty, null);
			}
		}

		#endregion

		#region Field: Private

		private readonly IHttpRequestClient _realClient;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="MockableHttpClient"/> class.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		public MockableHttpClient(UserConnection userConnection)
			: base(userConnection) {
			_realClient = HttpRequestClientFactory.GetInstanceFromDI();
		}

		/// <summary>
		/// Initializes a new instance of the <see cref="MockableHttpClient" /> type.
		/// </summary>
		/// <param name="userConnection">User connection.</param>
		/// <param name="requestClient">Request client.</param>
		public MockableHttpClient(UserConnection userConnection, IHttpRequestClient requestClient)
			: base(userConnection) {
			_realClient = requestClient;
		}

		#endregion

		#region Methods: Private

		private bool TryMockResponse(HttpRequestConfig config, out IHttpResponse response) {
			return TryMockResponse(config, config.Method.ToString(), config.Url.AbsolutePath, out response);
		}

		#endregion

		#region Methods: Protected

		protected override string GetRequestBody(HttpRequestConfig request) {
			return JsonConvert.SerializeObject(request.Body);
		}

		protected override IHttpResponse CreateResponse(HttpStatusCode statusCode, string statusDescription,
			string content, string contentType, string errorMessage) {
			return new MockedHttpResponse {
				StatusCode = statusCode,
				ReasonPhrase = statusDescription,
				Content = content ?? errorMessage
			};
		}

		#endregion

		#region Methods: Public

		/// <summary>Executes request with JSON-serialized body.</summary>
		public IHttpResponse SendWithJsonBody(HttpRequestConfig config) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return _realClient.SendWithJsonBody(config);
		}

		/// <summary>Executes request with JSON-kind content.</summary>
		public IHttpResponse SendWithJsonBody(HttpRequestConfig config, string content) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return _realClient.SendWithJsonBody(config, content);
		}

		/// <summary>Executes request with form-encoded params body.</summary>
		public IHttpResponse SendWithFormEncodedContent(HttpRequestConfig config) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return _realClient.SendWithFormEncodedContent(config);
		}

		/// <summary>Executes request.</summary>
		public IHttpResponse Send(HttpRequestConfig config) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return _realClient.Send(config);
		}

		/// <summary>
		/// Executes async request with JSON-kind content.
		/// Serialized <see cref="P:Terrasoft.Core.Requests.HttpRequestConfig.Body" /> will be used.
		/// </summary>
		public async Task<IHttpResponse> SendWithJsonBodyAsync(HttpRequestConfig config) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return await _realClient.SendWithJsonBodyAsync(config);
		}

		/// <summary>
		/// Executes async request with JSON-kind content.
		/// </summary>
		public async Task<IHttpResponse> SendWithJsonBodyAsync(HttpRequestConfig config, string content,
				Action<IHttpResponse> callback = null) {
			if (TryMockResponse(config, out IHttpResponse response)) {
				return response;
			}
			return await _realClient.SendWithJsonBodyAsync(config, content, callback);
		}

		#endregion

	}
} 
