namespace Terrasoft.Configuration
{
	using Terrasoft.Core;
	using Terrasoft.Web.Http.Abstractions;

	public static class CacheUtilities
	{

		private static string CurrentCultureName {
			get {
				var userConnection = (UserConnection)HttpContext.Current.Session["UserConnection"];
				return userConnection.CurrentUser.Culture.Name;
			}
		}

		public static string WorkspaceCacheGroup {
			get {
				return string.Format("WorkspaceCacheGroup_{0}", CurrentCultureName);
			}
		}
		public static string DetailsCache {
			get {
				return string.Format("DetailsCache_{0}", CurrentCultureName);
			}
		}
		public static string ActionsCache {
			get {
				return string.Format("ActionsCache_{0}", CurrentCultureName);
			}
		}
		public static string ReportsCache {
			get {
				return string.Format("ReportsCache_{0}", CurrentCultureName);
			}
		}
		public static string AnalyticsReportCache = "AnalyticsReportCache";
		public static string AnalyticsChartCache {
			get {
				return string.Format("AnalyticsChartCache_{0}", CurrentCultureName);
			}
		}
		public static string GridViewCache {
			get {
				return string.Format("GridViewCache_{0}", CurrentCultureName);
			}
		}
		public static string EditDetailsCache = "EditDetailsCache";
		public static string EmailTemplateCacheGroup = "EmailTemplateCache";
		public static string ModuleDataCacheGroup = "ModuleDataCacheGroup:{0}";
		public static string AnalyticsCacheGroup = "AnalyticsCacheGroup:{0}";
		public static string GlobalModuleCacheGroup = "GlobalModuleCacheGroup";
		public static string CulturesCacheGroup = "CulturesCacheGroup";
		public static string GlobalSearchCacheGroup = "GlobalSearchCacheGroup";
		public static string DashboardTabCacheGroup = "DashboardTabCacheGroup";
	}
}
