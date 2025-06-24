define("SystemDesigner", ["SystemDesignerResources"], function (resources, NetworkUtilities) {
	return {
		methods: {
			/**
			 * @inheritodoc SystemDesigner#getOperationRightsDecoupling
			 * @overridden
			 */
			getOperationRightsDecoupling: function() {
				var operationRights = this.callParent(arguments);
				operationRights.navigateToTechnicalUserSection = "CanManageTechnicalUsers";
				return operationRights;
			},
			
		  /**
			 * @return {Boolean} True if EnableTechnicalUser is enabled.
			 * @private
			 */
			_isTechnicalUserFeatureEnabled: function () {
				return this.getIsFeatureEnabled("EnableTechnicalUser");
			},

			/**
			 * Navigate to the Technical Users section.
			 * @private
			 */
			_navigateToTechnicalUsersSection: function() {
				if (this.get("CanManageTechnicalUsers") === true) {
					this.sandbox.publish("PushHistoryState", {
						hash: "Page/TechnicalUsers_ListPage"
					});
				} else {
					this.showPermissionsErrorMessage("CanManageTechnicalUsers");
				}
			}

		},
		diff: [
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "UsersTile",
				"name": "TechnicalUserSection",
				"index": 1,
				"values": {
					"itemType": Terrasoft.ViewItemType.LINK,
					"caption": { "bindTo": "Resources.Strings.TechnicalUsersSectionLinkCaption" },
					"tag": "_navigateToTechnicalUsersSection",
  					"click": {"bindTo": "invokeOperation"},
					"visible": {"bindTo": "_isTechnicalUserFeatureEnabled"},
					"isNew": false
				}
			}
		]
	};
});