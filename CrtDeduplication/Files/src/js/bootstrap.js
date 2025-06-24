(function() {
    require.config({
        paths: {
            "DuplicatesWidgetComponentOld": Terrasoft.getFileContentUrl("CrtDeduplication", "src/js/duplicates-widget/old/main.js"),
            "DuplicatesWidgetComponentStylesOld": Terrasoft.getFileContentUrl("CrtDeduplication", "src/js/duplicates-widget/old/styles.css"),
            "DuplicatesWidgetComponent": Terrasoft.getFileContentUrl("CrtDeduplication", "src/js/duplicates-widget/mf/duplicates-widget.js"),
            "DuplicatesWidgetComponentStyles": Terrasoft.getFileContentUrl("CrtDeduplication", "src/js/duplicates-widget/mf/styles.css"),
        },
        shim: {
            "DuplicatesWidgetComponentOld": {
                deps: ["ng-core", "chartjs", "css-ltr!DuplicatesWidgetComponentStylesOld"]
            }
        }
    });
})();
