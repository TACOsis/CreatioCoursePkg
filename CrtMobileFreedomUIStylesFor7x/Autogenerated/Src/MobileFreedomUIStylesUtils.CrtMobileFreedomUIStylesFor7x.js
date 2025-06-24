Terrasoft.configuration.getFreedomUIBackgroundImageUrl = function(config) {
  var decodedConfig = Terrasoft.decode(Terrasoft.SysSettings['CrtBackgroundConfig'], true);
  var imageId = decodedConfig.imageId;
  SysMobileFileCache.load(imageId, {
    success: function(loadedRecord) {
      var path = loadedRecord.get("Path");
      var absolutePath = Terrasoft.util.toAbsoluteUrl(path);
      var url = Terrasoft.util.toUrlScheme(absolutePath);
      (Terrasoft.configuration.getFreedomUIBackgroundImageUrl = function(innerConfig) {
        Ext.callback(innerConfig.callback, innerConfig.scope, [url]);
      })(config);
    },
    scope: this
  });
};
Terrasoft.configuration.writeBackgroundStyles = function(selectors) {
  Terrasoft.configuration.getFreedomUIBackgroundImageUrl({
    callback: function(imagePath) {
      Terrasoft.util.writeStyles(
        selectors.join(", "),
        "  {",
        "    background-image: url(" + imagePath + ");",
        "    background-position: center; ",
        "    background-size: cover;",
        "    background-repeat: no-repeat;",            
        "}"
      );
    },
    scope: this
  });
};