namespace Creatio.Copilot
{
	using Creatio.FeatureToggling;
	using global::Common.Logging;
	using System;
	using System.Linq;
	using System.Text.RegularExpressions;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;
	using CoreSysSettings = Terrasoft.Core.Configuration.SysSettings;

	#region Interface: ICopilotHyperlinkUtils

	/// <summary>
	/// Provides methods for working with hyperlinks in the Creatio.ai chat.
	/// </summary>
	internal interface ICopilotHyperlinkUtils
	{

		#region Properties: Public

		/// <summary>
		/// Gets the marker for invalid links.
		/// </summary>
		string InvalidLinkMarker { get; }

		#endregion

		#region Methods: Public

		/// <summary>
		/// Gets the base URL of the current request.
		/// </summary>
		/// <returns>The base URL of the current request.</returns>
		string GetBaseUrl();

		/// <summary>
		/// Gets the base URL including the application path.
		/// </summary>
		/// <returns>The base application URL.</returns>
		/// <remarks>
		/// The base application URL is the URL of the Creatio application without the query string.
		/// </remarks>
		string GetBaseApplicationUrl();

		/// <summary>
		/// Modifies the source text by marking invalid links with the
		/// <see cref="InvalidLinkMarker"/>.
		/// </summary>
		/// <param name="session">The current copilot session before source text has been added.</param>
		/// <param name="sourceText">The source text to be modified.</param>
		/// <param name="result">The modified text with invalid links marked.</param>
		/// <returns>True if any invalid links were found and marked, otherwise false.</returns>
		bool TryMarkInvalidLinks(CopilotSession session, string sourceText, out string result);

		#endregion

	}


	#endregion

	#region Class: CopilotHyperlinkUtils

	/// <summary>
	/// Provides methods for working with hyperlinks in the Creatio.ai chat.
	/// </summary>
	[DefaultBinding(typeof(ICopilotHyperlinkUtils))]
	internal class CopilotHyperlinkUtils: ICopilotHyperlinkUtils
	{

		#region Constants: Private

		private readonly string FeatureName = "DisableLinksPostprocessing";
		private readonly string SysSettingName = "CreatioAILinksPostprocessing";

		#endregion

		#region Fields: Private

		private readonly Regex _supportedLinksRegex = new Regex(@"(?![^\d\w\/\.])(?:(?:(?:\/\/)?(?<baseUrl>(?:(?:\w{1,9}:\/\/)?\w+[\w\:\-\@\.]+)|(?:\w+[\w\:\-\@\.]+)))|(?:(?:\.\.\/)*|(?:\.\/)))(?:[^\s\?\#\[\(\]\)\+\*\:\\]*\/)?Navigation\/Navigation\.aspx\?(?:(?:schemaName=\w+&recordId=[\w-]+)|(?:recordId=[\w-]+&schemaName=\w+))");
		private readonly ILog _log = LogManager.GetLogger("Copilot");
		private readonly UserConnection _userConnection;
		private readonly IBaseUriResolver _uriResolver;

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="HyperlinksUtil"/> class.
		/// </summary>
		/// <param name="userConnection">The user connection.</param>
		/// <param name="uriResolver">The base uri resolver.</param>
		public CopilotHyperlinkUtils(UserConnection userConnection, IBaseUriResolver uriResolver) {
			_userConnection = userConnection;
			_uriResolver = uriResolver;
		}

		#endregion

		#region Properties: Private

		private bool? _isSysSettingEnabled = null;
		private bool IsSysSettingEnabled => _isSysSettingEnabled ?? (_isSysSettingEnabled =
			CoreSysSettings.GetValue(_userConnection, SysSettingName, true)).Value;

		private bool? _isFeatureDisabled = null;
		private bool IsFeatureDisabled => _isFeatureDisabled
			?? (_isFeatureDisabled = Features.GetIsDisabled(FeatureName)).Value;

		private bool IsLinksPostprocessingEnabled => IsFeatureDisabled && IsSysSettingEnabled;

		#endregion

		#region Properties: Public

		/// <inheritdoc cref="ICopilotHyperlinkUtils"/>
		public string InvalidLinkMarker => "http://invalidlink";

		#endregion

		#region Methods: Private

		private bool IsRecordAccessible(string schemaName, Guid recordId) {
			var entitySchema = _userConnection.EntitySchemaManager.FindInstanceByName(schemaName);
			if (entitySchema == null) {
				return false;
			}
			var entity = entitySchema.CreateEntity(_userConnection);
			return entity.FetchPrimaryColumnFromDB(recordId);
		}

		private bool IsLinkValid(string link, string linkBaseUrl) {
			var crtBaseUrl = GetBaseUrl();
			var uri = new Uri(link, UriKind.RelativeOrAbsolute);
			if (linkBaseUrl.IsNotNullOrEmpty() && linkBaseUrl.StartsWith("http")) {
				if (!linkBaseUrl.Contains(crtBaseUrl) && uri.IsAbsoluteUri) {
					return true;
				}
			} else {
				if (linkBaseUrl.IsNotNullOrEmpty()) {
					if (!crtBaseUrl.Contains(linkBaseUrl)) {
						return true;
					}
					uri = new Uri(link.Replace(linkBaseUrl, crtBaseUrl).TrimStart('/'));
				} else {
					var baseAppUrl = GetBaseApplicationUrl();
					uri = GetAbsoluteUri(baseAppUrl, link);
				}
			}
			var queryParams = System.Web.HttpUtility.ParseQueryString(uri.Query);
			if (!queryParams.AllKeys.Contains("schemaName") || !queryParams.AllKeys.Contains("recordId")) {
				return false;
			}
			var schemaName = queryParams["schemaName"];
			if (!Guid.TryParse(queryParams["recordId"], out var recordId)) {
				return false;
			}
			return IsRecordAccessible(schemaName, recordId);
		}

		private bool TrySecureRelativeLink(string link, out string resultLink) {
			var isLinkProcessed = false;
			resultLink = link;
			if (link.Contains("../")) {
				resultLink = resultLink.Replace("../", "");
				isLinkProcessed = true;
			}
			if (link.StartsWith("/")) {
				resultLink = resultLink.TrimStart('/');
				isLinkProcessed = true;
			}
			return isLinkProcessed;
		}

		private Uri GetAbsoluteUri(string baseUrl, string relativeLink) {
			var baseUri = new Uri(baseUrl);
			return new Uri(baseUri, relativeLink);
		}

		private bool TryEnhanceLink(string link, string linkBaseUrl, out string resultLink) {
			var crtBaseUrl = GetBaseUrl();
			var isLinkEnhanced = false;
			if (TrySecureRelativeLink(link, out var secureLink)) {
				isLinkEnhanced = true;
			}
			var uri = new Uri(secureLink, UriKind.RelativeOrAbsolute);
			if (!uri.IsAbsoluteUri && linkBaseUrl.IsNullOrEmpty()) {
				var absoluteUri = GetAbsoluteUri(crtBaseUrl, secureLink);
				resultLink = absoluteUri.ToString();
				isLinkEnhanced = true;
				return isLinkEnhanced;
			}
			if (crtBaseUrl != linkBaseUrl && crtBaseUrl.Contains(linkBaseUrl)) {
				uri = linkBaseUrl.IsEmpty()
					? GetAbsoluteUri(crtBaseUrl, uri.PathAndQuery)
					: new Uri(secureLink.ReplaceFirstInstanceOf(linkBaseUrl, crtBaseUrl), UriKind.Absolute);
				isLinkEnhanced = true;
			}
			resultLink = uri.ToString();
			return isLinkEnhanced;
		}

		private string ReplaceMatchInText(string text, Match match, string replacer) =>
			text.Remove(match.Index, match.Length).Insert(match.Index, replacer);

		private bool IsLinkExistsInSession(string value, CopilotSession session) {
			if (session.Messages?.IsEmpty() ?? true) {
				return false;
			}
			return session.Messages.Any(message => message.Content?.Contains(value) ?? false);
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc cref="ICopilotHyperlinkUtils"/>
		public virtual string GetBaseUrl() {
			HttpRequest request = HttpContext.Current?.Request;
			return request != null ?
				request.Url?.GetLeftPart(UriPartial.Authority) :
				_uriResolver.ResolveBaseUri().GetLeftPart(UriPartial.Authority);
		}

		/// <inheritdoc cref="ICopilotHyperlinkUtils"/>
		public virtual string GetBaseApplicationUrl() {
			HttpRequest request = HttpContext.Current?.Request;
			string baseApplicationUrl = request != null ?
				WebUtilities.GetBaseApplicationUrl(request) :
				_uriResolver.ResolveBaseUri().ToString();
			baseApplicationUrl = Regex.Replace(baseApplicationUrl.TrimEnd(), @"/[0-9]/?$", "");
			var uri = new Uri(baseApplicationUrl);
			return uri.ToString().TrimEnd('/');
		}

		/// <inheritdoc cref="ICopilotHyperlinkUtils"/>
		public virtual bool TryMarkInvalidLinks(CopilotSession session, string sourceText, out string result) {
			var isLinkMarked = false;
			result = sourceText;
			if (!IsLinksPostprocessingEnabled) {
				return isLinkMarked;
			}
			var linksMatches = _supportedLinksRegex.Matches(sourceText);
			var linksCount = linksMatches.Count;
			if (linksCount == 0) {
				return isLinkMarked;
			}
			for (var i = linksCount - 1; i >= 0; i--) {
				Match match = linksMatches[i];
				if (!match.Success) {
					continue;
				}
				var link = match.Value;
				if (IsLinkExistsInSession(link, session)) {
					continue;
				}
				try {
					var linkBaseUrl = match.Groups["baseUrl"].Value;
					if (!IsLinkValid(link, linkBaseUrl)) {
						result = ReplaceMatchInText(result, match, InvalidLinkMarker);
						isLinkMarked = true;
						continue;
					}
					if (TryEnhanceLink(link, linkBaseUrl, out var enhancedLink)) {
						result = ReplaceMatchInText(result, match, enhancedLink);
					}
				} catch (Exception e) {
					_log.Error($"Error while checking link {link}", e);
					result = ReplaceMatchInText(result, match, InvalidLinkMarker);
					isLinkMarked = true;
				}
			}
			return isLinkMarked;
		}

		#endregion

	}

	#endregion

}
