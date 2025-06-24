(function() {
	require.config({
		paths: {
			"DriverJs": Terrasoft.getFileContentUrl("CrtBase", "src/js/driver.min.js"),
			"DriverCSS": Terrasoft.getFileContentUrl("CrtBase", "src/css/driver.min.css"),
		}
	});
})();
