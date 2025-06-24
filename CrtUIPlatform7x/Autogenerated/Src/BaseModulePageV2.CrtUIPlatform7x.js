define("BaseModulePageV2", [], function() {
	return {
		diff: /**SCHEMA_DIFF*/[ ]/**SCHEMA_DIFF*/,
		methods: {
			//region Methods: Private

			/**
			 * Adds edit right menu item.
			 * @private
			 * @param {Terrasoft.BaseViewModelCollection} actionMenuItems Action button menu items collection.
			 */
			_addEditRightsMenuItem: function(actionMenuItems) {
				if (!this.getSchemaAdministratedByRecords()) {
					return;
				}
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.EditRightsCaption"},
					"Tag": "editRights",
					"Visible": {"bindTo": "getSchemaAdministratedByRecords"}
				}));
			},

			/**
			 * Adds button drop-down item that is responsible for switching to the change log.
			 * @private
			 * @param {Terrasoft.BaseViewModelCollection} actionMenuItems Action button menu items collection.
			 */
			_addOpenChangeLogMenuItem: function(actionMenuItems) {
				if (!this.$CanShowChangeLog) {
					return;
				}
				actionMenuItems.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenChangeLogMenuCaption"},
					"Tag": "openChangeLog",
					"ImageConfig": this.get("Resources.Images.OpenChangeLogBtnImage")
				}));
			},

			//endregion

			//region Methods: Protected

			/**
			 * @inheritdoc Terrasoft.BasePageV2#getActions
			 * @override
			 */
			getActions: function() {
				var actionMenuItems = this.callParent(arguments);
				this._addEditRightsMenuItem(actionMenuItems);
				this._addOpenChangeLogMenuItem(actionMenuItems);
				return actionMenuItems;
			}

			//endregion
		}
	};
});
