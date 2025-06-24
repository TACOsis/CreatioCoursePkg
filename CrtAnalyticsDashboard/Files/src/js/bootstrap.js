(function () {
	require.config({
		paths: {
			"AnalyticsDashboard": Terrasoft.getFileContentUrl("CrtAnalyticsDashboard", "src/js/analytics-dashboard/mf/analytics-dashboard.js"),
			"AnalyticsDashboardStyles": Terrasoft.getFileContentUrl("CrtAnalyticsDashboard", "src/js/analytics-dashboard/mf/styles.css"),
			"AnalyticsDashboardOld": Terrasoft.getFileContentUrl("CrtAnalyticsDashboard", "src/js/analytics-dashboard/old/main.js"),
			"AnalyticsDashboardOldStyles": Terrasoft.getFileContentUrl("CrtAnalyticsDashboard", "src/js/analytics-dashboard/old/styles.css")
		},
		shim: {
			"AnalyticsDashboardOld": {
				deps: ["ng-core", "css-ltr!AnalyticsDashboardOldStyles"]
			}
		}
	});
})();
