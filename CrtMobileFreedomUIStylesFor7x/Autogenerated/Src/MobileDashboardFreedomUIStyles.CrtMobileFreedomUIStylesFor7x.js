Terrasoft.configuration.writeBackgroundStyles([
  ".cf-dashboard-page",
  ".cf-dashboard-item-page"
]);
Ext.define("Terrasoft.controls.charts.ChartjsProviderOverride", {
  override: "Terrasoft.controls.charts.ChartjsProvider",
  getChartConfig: function() {
    var config = this.callParent(arguments);
    var colorOverride = "#ffffff";
    Chart.defaults.global.defaultFontColor = colorOverride; 
    config.options.indicatorColor = colorOverride;
    return config;
  }
}); 
