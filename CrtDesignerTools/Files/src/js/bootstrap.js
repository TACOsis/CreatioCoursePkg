(function() {
	require.config({
		paths: {
			"page-wizard-component": Terrasoft.getFileContentUrl("CrtDesignerTools", "src/js/page-wizard-component/main.js"),
			"page-wizard-component-styles": Terrasoft.getFileContentUrl("CrtDesignerTools", "src/js/page-wizard-component/styles.css"),
		},
		shim: {
			"page-wizard-component": {
				deps: ["ng-core", "css-ltr!page-wizard-component-styles"]
			}
		}
	});
}());
