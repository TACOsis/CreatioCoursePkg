define("FinesseBoshCtiProvider", ["ext-base", "terrasoft"], function(Ext, Terrasoft) {
    Ext.ns("Terrasoft.integration");
	Ext.ns("Terrasoft.integration.telephony");
	Ext.ns("Terrasoft.integration.telephony.finesse");

	//region Class: FinesseBoshCtiProvider

	Ext.require("Terrasoft.integration.telephony.finesse.FinesseCtiProvider", function() {

		/**
		 * Provider class to the Finesse service (for version 11.5+).
		 */
		Ext.define("Terrasoft.integration.telephony.finesse.FinesseBoshCtiProvider", {
			extend: "Terrasoft.integration.telephony.finesse.FinesseCtiProvider.self",
			alternateClassName: "Terrasoft.FinesseBoshCtiProvider",
			singleton: true,

            httpBindPort: '7443',

            /**
			 * Opens connection to Finesse sever.
			 * @protected
			 * @param {Object} config Connection parameters.
			 */
			connect: function(config) {
				Terrasoft.chain(
					this.initSysSettings,
					function() {
						this.agentId = config.AgentID;
						this.password = config.Password;
						this.deviceId = config.Extension;
						this.createBoshConnection();
					}, this);
			},

            initSysSettings: function(callback, scope) {
				Terrasoft.SysSettings.querySysSettings(["FinesseServerAddress"],
					function(sysSettingsValue) {
                        var url = new URL(sysSettingsValue.FinesseServerAddress);
                        this.domain = url.hostname;
						this.finesseApiPath = new URL(this.finesseApiPath, sysSettingsValue.FinesseServerAddress).href;
                        url.port = this.httpBindPort;
						this.finessePath = url.href.replace(/\/$/, '');
						Ext.callback(callback, scope || this);
				}, this);
			},
        });
    });

});