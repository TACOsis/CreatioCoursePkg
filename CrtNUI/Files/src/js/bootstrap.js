(function() {
	const config = {
		paths: {
			"SchemaViewComponentOld": Terrasoft.getFileContentUrl("CrtNUI", "src/js/schema-view-component/old/main.js"),
			"SchemaViewComponentOldStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/schema-view-component/old/styles.css"),
			"SchemaViewComponent": Terrasoft.getFileContentUrl("CrtNUI", "src/js/schema-view-component/mf/schema-view.js"),
			"SchemaViewComponentStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/schema-view-component/mf/styles.css")
		},
		shim: {
			"StructureExplorerComponent": {
				deps: ["ng-core", "css-ltr!StructureExplorerComponentStyles"]
			},
			"ErrorListDialogComponentOld": {
				deps: ["ng-core", "css-ltr!ErrorListDialogComponentOldStyles"]
			},
			"SchemaViewComponentOld": {
				deps: ["ng-core", "chartjs", "css-ltr!SchemaViewComponentOldStyles"]
			}
		}
	};
	if (Terrasoft.isAngularHost) {
		define("StructureExplorerComponent",[],()=>{});
		define("StructureExplorerComponentStyles",[],()=>{});
	} else {
		config.paths = {
			...config.paths,
			"StructureExplorerComponent": Terrasoft.getFileContentUrl("CrtNUI", "src/js/structure-explorer-component/main.js"),
			"StructureExplorerComponentStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/structure-explorer-component/styles.css"),
			"ErrorListDialogComponentOld": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/old/main.js"),
			"ErrorListDialogComponentOldStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/old/styles.css"),
			"ErrorListDialogComponent": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/mf/error-list-dialog.js"),
			"ErrorListDialogComponentStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/mf/styles.css"),
		}
	}
	if (Terrasoft.isAngularHost) {
		config.paths = {
			...config.paths,
			"ErrorListDialogComponent": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/mf/error-list-dialog.js"),
			"ErrorListDialogComponentStyles": Terrasoft.getFileContentUrl("CrtNUI", "src/js/error-list-dialog-component/mf/styles.css"),
		}
	}
	require.config(config);
})();
