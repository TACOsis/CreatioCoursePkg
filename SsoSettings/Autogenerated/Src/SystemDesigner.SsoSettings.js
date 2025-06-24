define("SystemDesigner", ["SystemDesignerResources", "NetworkUtilities"], function(resources, NetworkUtilities) {
	return {
		methods: {

			//region Methods: Private

			/**
			 * Opens SSO settings section.
			 * @private
			 */
			openSsoSettings: function() {
				const entitySchemaName = Terrasoft.Features.getIsEnabled("FeatureSsoSettingsV2")
					? "SsoProvider"
					: "SsoIdentityProvider";
				if (this.get("CanUseSSO") === true) {
					NetworkUtilities.openEntitySection({
						entitySchemaName: entitySchemaName,
						sandbox: this.sandbox
					});
				} else {
					this.showLicOperationAccessDeniedDialog();
				}
			},

			//endregion

			//region Methods: Protected

			/**
			 * @inheritdoc SystemDesigner#getOperationRightsDecoupling
			 * @overridden
			 */
			 getOperationRightsDecoupling: function() {
				const operationRights = this.callParent(arguments);
				operationRights.openSsoSettings = "CanManageSso";
				return operationRights;
			},

			/**
			 * @inheritdoc SystemDesigner#getLicOperationCodes
			 * @overridden
			 */
			 getLicOperationCodes: function() {
				const licOperationCodes = this.callParent(arguments);
				licOperationCodes.licOperationCodes.push("CanUseSSO");
				return licOperationCodes;
			},
			
			//endregion

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "UsersTile",
				"name": "SsoSettings",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.LINK,
					"caption": { "bindTo": "Resources.Strings.SsoSettingsCaption" },
					"tag": "openSsoSettings",
					"click": { "bindTo": "invokeOperation" }
				}
			}
		]
	};
});