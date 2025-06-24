/**
 * Parent: BaseLookupSection
 */
define("BaseLookupConfigurationSection", [
	"ConfigurationGrid",
	"ConfigurationGridGenerator",
	"ConfigurationGridUtilities"
], function() {
	return {
		attributes: {
			/**
			 * Indicates that the registry is editable.
			 */
			"IsEditable": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: true
			}
		},
		mixins: {
			ConfigurationGridUtilities: "Terrasoft.ConfigurationGridUtilities",
			GridUtilities: "Terrasoft.GridUtilities"
		},
		methods: {

			// region Methods: Protected

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#addCardHistoryState
			 * @override
			 */
			addCardHistoryState: Terrasoft.emptyFn,

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#removeCardHistoryState
			 * @override
			 */
			removeCardHistoryState: Terrasoft.emptyFn,

			/**
			 * @inheritdoc Terrasoft.configuration.BaseSchemaViewModel#getEditPageSchemaName
			 * @override
			 */
			getEditPageSchemaName: function() {
				const editPage = this.callParent(arguments);
				return editPage || "BaseLookupEditPage";
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#editRecord
			 * @override
			 */
			editRecord: function(primaryColumnValue) {
				this.Terrasoft.chain(
					function(next) {
						const activeRow = this.findActiveRow();
						this.saveRowChanges(activeRow, next);
					},
					function() {
						const activeRow = this.getActiveRow();
						const typeColumnValue = this.getTypeColumnValue(activeRow);
						const schemaName = this.getEditPageSchemaName(typeColumnValue);
						this.openCardInChain({
							id: primaryColumnValue,
							schemaName: schemaName,
							operation: Terrasoft.ConfigurationEnums.CardOperation.EDIT,
							moduleId: this.getChainCardModuleSandboxId(typeColumnValue)
						});
					}, this);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#getCardModuleResponseTags
			 * @override
			 */
			getCardModuleResponseTags: function() {
				const editCardsSandboxIds = this.callParent(arguments);
				editCardsSandboxIds.push(this.getChainCardModuleSandboxId(Terrasoft.GUID_EMPTY));
				return editCardsSandboxIds;
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#addRecord
			 * @override
			 */
			addRecord: function(typeColumnValue) {
				if (!typeColumnValue) {
					if (this.get("EditPages").getCount() > 1) {
						return false;
					}
					const tag = this.get("AddRecordButtonTag");
					typeColumnValue = tag || this.Terrasoft.GUID_EMPTY;
				}
				this.addRow(typeColumnValue);
			},

			/**
			 * @inheritdoc Terrasoft.ConfigurationGridUtilities#activeRowSaved
			 * @override
			 */
			activeRowSaved: function(row, callback, scope) {
				this.mixins.ConfigurationGridUtilities.activeRowSaved.apply(this, [row, function() {
					callback.call(scope);
					this.reloadSummaryModule();
				}, scope]);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#copyRecord
			 * @override
			 */
			copyRecord: function(primaryColumnValue) {
				this.copyRow(primaryColumnValue);
			},

			/**
			 * Returns the name of the schema for the item model of the edit registry item.
			 * @protected
			 * @return {String} The name of the view model schema.
			 */
			getDefaultConfigurationGridItemSchemaName: function() {
				return "BaseLookupEditPage";
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilitiesV2#getGridRowViewModelConfig
			 * @override
			 */
			getGridRowViewModelConfig: function() {
				const gridRowViewModelConfig =
					this.mixins.GridUtilities.getGridRowViewModelConfig.apply(this, arguments);
				Ext.apply(gridRowViewModelConfig, {entitySchema: this.entitySchema});
				const editPages = this.get("EditPages");
				this.Ext.apply(gridRowViewModelConfig.values, {HasEditPages: editPages && !editPages.isEmpty()});
				return gridRowViewModelConfig;
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#getGridRowViewModelClassName
			 * @override
			 */
			getGridRowViewModelClassName: function() {
				return this.mixins.GridUtilities.getGridRowViewModelClassName.apply(this, arguments);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#onActiveRowAction
			 * @override
			 */
			onActiveRowAction: function() {
				this.mixins.ConfigurationGridUtilities.onActiveRowAction.apply(this, arguments);
				this.callParent(arguments);
			},

			/**
			 * Saves any changes of the active row.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Callback function execution context.
			 */
			saveChangesOnClose: function(callback, scope) {
				const row = this.getActiveRow();
				if (row && row.isChanged()) {
					this.saveDataRow(row, function() {
						Ext.callback(callback, scope || this);
					}, this);
				} else {
					Ext.callback(callback, scope || this);
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseLookupSection#closeSection
			 * @override
			 */
			closeSection: function() {
				this.saveChangesOnClose(function() {
					this.sandbox.publish("BackHistoryState");
				}, this);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#getFiltersKey
			 * @override
			 */
			getFiltersKey: function() {
				const baseKey = this.callParent(arguments);
				const entitySchemaName = this.getEntitySchemaName();
				const uniqueKey = entitySchemaName + baseKey;
				return uniqueKey;
			},

			/**
			 * @inheritdoc Terrasoft.BaseSectionV2#getSessionFilters
			 * @override
			 */
			getSessionFilters: function() {
				const entitySchemaName = this.getEntitySchemaName();
				const filtersStorage = Terrasoft.configuration.Storage.Filters =
					Terrasoft.configuration.Storage.Filters || {};
				const sectionFiltersStorage = filtersStorage[this.name] = filtersStorage[this.name] || {};
				const sessionFilters = sectionFiltersStorage[entitySchemaName] =
					sectionFiltersStorage[entitySchemaName] || {};
				return sessionFilters;
			}

			// endregion

		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "remove",
				"name": "DataGridActiveRowOpenAction"
			},
			{
				"operation": "remove",
				"name": "DataGridActiveRowCopyAction"
			},
			{
				"operation": "remove",
				"name": "DataGridActiveRowDeleteAction"
			},
			{
				"operation": "remove",
				"name": "ProcessEntryPointGridRowButton"
			},
			{
				"operation": "insert",
				"name": "activeRowActionSave",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "save",
					"markerValue": "save",
					"imageConfig": {"bindTo": "Resources.Images.SaveIcon"}
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionCopy",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "copy",
					"markerValue": "copy",
					"imageConfig": {"bindTo": "Resources.Images.CopyIcon"}
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionCard",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "card",
					"markerValue": "card",
					"visible": {"bindTo": "HasEditPages"},
					"imageConfig": {"bindTo": "Resources.Images.CardIcon"}
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionCancel",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "cancel",
					"markerValue": "cancel",
					"imageConfig": {"bindTo": "Resources.Images.CancelIcon"}
				}
			},
			{
				"operation": "insert",
				"name": "activeRowActionRemove",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"tag": "remove",
					"markerValue": "remove",
					"imageConfig": {"bindTo": "Resources.Images.RemoveIcon"}
				}
			},
			{
				"operation": "merge",
				"name": "DataGrid",
				"values": {
					"className": "Terrasoft.ConfigurationGrid",
					"generator": "ConfigurationGridGenerator.generatePartial",
					"type": "listed",
					"generateControlsConfig": {"bindTo": "generateActiveRowControlsConfig"},
					"changeRow": {"bindTo": "changeRow"},
					"unSelectRow": {"bindTo": "unSelectRow"},
					"onGridClick": {"bindTo": "onGridClick"},
					"listedZebra": true,
					"initActiveRowKeyMap": {"bindTo": "initActiveRowKeyMap"},
					"activeRowAction": {"bindTo": "onActiveRowAction"}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
