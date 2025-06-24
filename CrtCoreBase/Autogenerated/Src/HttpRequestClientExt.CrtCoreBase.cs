 namespace Terrasoft.Configuration
{
	using System;
	using System.Net;
	using System.Web;
	using Creatio.FeatureToggling;
	using global::Common.Logging;
	using Terrasoft.Common;
	using Terrasoft.Core.Requests;
	using Terrasoft.OAuthIntegration;

	/// <summary>
	/// Provides utility extension methods for IHttpRequestClient interface.
	/// </summary>
	public static class HttpRequestClientExt
	{

		#region Fields: Private

		private static readonly ILog _log = LogManager.GetLogger("HttpRequest");

		#endregion

		#region Methods: Public

		/// <summary>
		/// Use OAuth to authenticate and authorize current request.
		/// </summary>
		/// <param name="httpRequestConfig">Request config instance.</param>
		/// <param name="identityServiceWrapper">Wrapper for interacting with identity provider.</param>
		/// <param name="scopes">Needed OAuth scopes.</param>
		/// <typeparam name="TFeature">Feature toggling class for conditional authentication.</typeparam>
		public static HttpRequestConfig WithOAuth<TFeature>(this HttpRequestConfig httpRequestConfig,
				IIdentityServiceWrapper identityServiceWrapper, string scopes) where TFeature: FeatureMetadata, new() {
			if (Features.GetIsDisabled<TFeature>()) {
				return httpRequestConfig;
			}
			if (!identityServiceWrapper.IsIdentityClientInitialized()) {
				_log.Warn("Identity client is not initialized. Access token won't be used for the request");
				return httpRequestConfig;
			}
			string accessToken = identityServiceWrapper.GetAccessToken(scopes);
			httpRequestConfig.Headers.Add("Authorization", $"Bearer {accessToken}");
			return httpRequestConfig;
		}

		/// <summary>
		/// Handles <see cref="IHttpResponse{T}"/> response error.
		/// </summary>
		public static void HandleError(this IHttpResponse response) {
			bool isErrorStatusCode = (int)response.StatusCode >= 300;
			if (isErrorStatusCode) {
				string errorMessage = null;
				HttpStatusCode statusCode = HttpStatusCode.InternalServerError; 
				switch (response.StatusCode) {
					case HttpStatusCode.Unauthorized:
						errorMessage = response.Content.ToNullIfEmpty()
							?? "Authentication error. Check auth settings or ask administrator";
						throw new UnauthorizedAccessException(errorMessage);
					case HttpStatusCode.NotFound:
						errorMessage = $"Service not found by address {response.RequestConfig.Url}";
						statusCode = HttpStatusCode.NotFound;
						break;
				}
				throw new HttpException((int)statusCode, $"[{response.StatusCode}] {errorMessage ?? response.Content}");
			}
			if (response.Exception != null) {
				throw response.Exception;
			}
		}

		#endregion

	}
}

