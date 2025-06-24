define("BaseSectionV2", ["RightUtilities", "ConfigurationEnums", "SchemaDataBindingMixin"],
	function(RightUtilities, ConfigurationEnums) {
		return {
			mixins: {
				SchemaDataBindingMixin: "Terrasoft.SchemaDataBindingMixin"
			},
			messages: {
				/**
				 * @message RerenderModule
				 * Re-render dashboards module message.
				 */
				"RerenderModule": {
					mode: Terrasoft.MessageMode.PTP,
					direction: Terrasoft.MessageDirectionType.PUBLISH
				},
				/**
				 * @message ReloadDataOnRestore
				 * Indicates need to reload data on next render.
				 */
				"ReloadDataOnRestore": {
					mode: Terrasoft.MessageMode.BROADCAST,
					direction: Terrasoft.MessageDirectionType.SUBSCRIBE
				},
				/**
				 * @message Selected result.
				 */
				"SelectedPackageResult": {
					mode: Terrasoft.MessageMode.PTP,
					direction: Terrasoft.MessageDirectionType.SUBSCRIBE
				}
			},
			attributes: {
				/**
				 * Chart edit SchemaName.
				 */
				"ChartEditSchemaName": {
					dataValueType: Terrasoft.DataValueType.TEXT
				},
				/**
				 * Sign of  empty chart.
				 */
				"IsEmptyChart": {
					dataValueType: Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * Analytics chart active row.
				 */
				"AnalyticsChartActiveRow": {
					dataValueType: Terrasoft.DataValueType.GUID
				},
				/**
				 * Analytics view registry collection.
				 */
				"AnalyticsGridData": {
					dataValueType: Terrasoft.DataValueType.COLLECTION
				},
				/**
				 * Printing button visibility of analytic form.
				 */
				"IsAnalyticsPrintButtonVisible": {
					dataValueType: Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * Analytics data collection.
				 */
				"AnalyticsData": {
					dataValueType: Terrasoft.DataValueType.COLLECTION
				},
				/**
				 * Sign of analytic action buttons visibility.
				 */
				"IsAnalyticsActionButtonsContainerVisible": {
					dataValueType: Terrasoft.DataValueType.BOOLEAN
				},
				/**
				 * View name of analytics section.
				 */
				"AnalyticsDataViewName": {
					dataValueType: Terrasoft.DataValueType.TEXT,
					value: "AnalyticsDataView"
				},
				/**
				 * Can bind data
				 */
				"IsBindDataActionVisible": {
					dataValueType: Terrasoft.DataValueType.BOOLEAN,
					value: Terrasoft.Features.getIsEnabled("DataBindingEnabled")
				}
			},
			methods: {

				// region Methods: Private

				/**
				 * Loads dashboard module.
				 * @private
				 */
				loadDashboardModule: function() {
					if (this.get("Restored")) {
						return;
					}
					var moduleId = this.sandbox.id + "SectionDashboard";
					var rendered = this.sandbox.publish("RerenderModule", {
						renderTo: "DashboardModule"
					}, [moduleId]);
					if (!rendered) {
						this.sandbox.loadModule("SectionDashboardsModule", {
							renderTo: "DashboardModule",
							id: moduleId,
							parameters: {
								viewModelConfig: {
									DashboardDataViewName: this.get("AnalyticsDataViewName")
								}
							}
						});
					}
				},

				_onReloadDataOnRestore: function() {
					this.set("IsNeedReloadDataOnRender", true);
				},

				// endregion

				// region Methods: Protected

				/**
				 * @inheritdoc BaseSchemaViewModel#init
				 * @proteted
				 */
				init: function() {
					this.callParent(arguments);
					this.initializeDataBinding();
				},

				/**
				 * @inheritdoc Terrasoft.BaseSchemaViewModel#initOnRestored
				 * @overridden
				 */
				initOnRestored: function (callback, scope) {
					this.callParent([function () {
						const state = this.sandbox.publish("GetHistoryState");
						const currentHash = state.hash;
						const currentState = state.state || {};
						if (currentState.moduleId) {
							Ext.callback(callback, scope);
							return;
						}
						currentState.moduleId = this.sandbox.id;
						this.sandbox.publish("ReplaceHistoryState", {
							stateObj: currentState,
							pageTitle: null,
							hash: currentHash.historyState,
							silent: true
						});
						Ext.callback(callback, scope);
					}, this]);
				},

				/**
				 * @overridden
				 * @protected
				 */
				subscribeSandboxEvents: function() {
					this.callParent(arguments);
					this.sandbox.subscribe("ReloadDataOnRestore", this._onReloadDataOnRestore, this);
				},

				/**
				 * Sets a class for a section container, depending on the active view.
				 * @override
				 * @param {String} viewName Active view.
				 */
				updateSectionContainerStyle: function(viewName) {
					var schema = this.Ext.get(this.name + "Container");
					if (!schema) {
						return;
					}
					if (viewName === "AnalyticsDataView") {
						schema.addCls("dashboard-container");
					} else {
						schema.removeCls("dashboard-container");
					}
				},

				/**
				 * Update section.
				 * @override
				 */
				updateSection: function() {
					var activeViewName = this.getActiveViewName();
					if (activeViewName === "AnalyticsDataView") {
						this.loadAnalyticsDataView();
					} else {
						this.reloadGridData();
						this.reloadSummaryModule();
					}
				},

				/**
				 * Returns default section views.
				 * Registry. Analytics.
				 * @override
				 */
				getDefaultDataViews: function() {
					var gridDataView = this.callParent(arguments);
					var analyticsDataView = {
						name: this.get("AnalyticsDataViewName"),
						caption: this.getDefaultAnalyticsDataViewCaption(),
						hint: this.get("Resources.Strings.DashboardsDataViewHint"),
						icon: this.getDefaultAnalyticsDataViewIcon()
					};
					return {
						"GridDataView": gridDataView && gridDataView.GridDataView,
						"AnalyticsDataView": analyticsDataView
					};
				},

				/**
				 * Initialize initial need load data property value.
				 * @override
				 */
				needLoadData: function() {
					if (!this.get("CanLoadMoreData")) {
						return;
					}
					this.callParent(arguments);
					if (!this.get("IsActionButtonsContainerVisible") && this.get("IsAnalyticsActionButtonsContainerVisible")) {
						this.loadAnalyticsDataView();
					}
				},

				/**
				 * Initializes visible container ActionButtons.
				 * @override
				 */
				initIsActionButtonsContainerVisible: function() {
					this.callParent(arguments);
					this.set("IsAnalyticsActionButtonsContainerVisible", false);
				},

				/**
				 * Loads a list view
				 * @override
				 */
				loadGridDataView: function() {
					this.set("IsAnalyticsActionButtonsContainerVisible", false);
					this.callParent(arguments);
				},

				/**
				 * Returns the default analytics view caption.
				 * @protected
				 * @return {String} Default analytics view caption.
				 */
				getDefaultAnalyticsDataViewCaption: function() {
					return this.getModuleCaption();
				},

				/**
				 * Returns the default analytics view icon.
				 * @protected
				 * @return {Object} Default analytics view icon.
				 */
				getDefaultAnalyticsDataViewIcon: function() {
					return this.get("Resources.Images.AnalyticsDataViewIcon");
				},

				/**
				 * Gets menu items on the "View" button.
				 * @override
				 */
				getViewOptions: function() {
					var viewOptions = this.callParent(arguments);
					this.addChangeDataViewOptions(viewOptions);
					return viewOptions;
				},

				/**
				 * @override
				 */
				getModuleStructure: function(schemaName) {
					if (this.Terrasoft.Features.getIsDisabled("AlwaysGetModuleStructureByCurrentSectionSchema") && schemaName) {
						return this.callParent(arguments);
					}
					const { hash: historyStateHashObject } = this.sandbox.publish("GetHistoryState");
					const currentSectionSchemaName = historyStateHashObject.entityName;
					return (
						currentSectionSchemaName &&
						Terrasoft.ModuleUtils.getModuleStructureBySectionSchema(currentSectionSchemaName)
					) || this.callParent(arguments);
				},

				// endregion

				// region Methods: Public

				/**
				 * Adds data views to "View" menu.
				 * @override
				 * @param {Terrasoft.BaseViewModelCollection} viewOptions Menu items of "View" menu.
				 */
				addChangeDataViewOptions: function(viewOptions) {
					var dataViews = this.get("DataViews");
					if (!dataViews.contains(this.get("AnalyticsDataViewName"))) {
						return;
					}
					viewOptions.addItem(this.getButtonMenuItem({
						"Caption": { "bindTo": "Resources.Strings.AnalyticsDataViewCaption" },
						"Click": { "bindTo": "changeDataView" },
						"Tag": this.get("AnalyticsDataViewName"),
						"ImageConfig": this.get("Resources.Images.AnalyticsDataIcon")
					}));
				},

				/**
				 * Check view visible.
				 * @override
				 */
				validationViewVisible: function() {
					var savedActiveViewName = this.getActiveViewNameFromProfile();
					var historyStateInfo = this.getHistoryStateInfo();
					if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED &&
						savedActiveViewName === this.get("AnalyticsDataViewName") ||
						savedActiveViewName === Terrasoft.emptyString) {
						return false;
					}
					return true;
				},

				/**
				 * Add data binding action item
				 * Return section actions.
				 * @protected
				 * @override
				 * @return {Terrasoft.BaseViewModelCollection} Section actions.
				 */
				getSectionActions: function() {
					var actions = this.callParent(arguments);
					if (this.get("IsBindDataActionVisible")) {
						actions.addItem(this.getButtonMenuItem(this.getDataBindingButtonMenuConfig()));
					}
					return actions;
				},

				/**
				 * Executes analytics view loading.
				 * @protected
				 */
				loadAnalyticsDataView: function() {
					this.set("IsActionButtonsContainerVisible", false);
					this.set("IsAnalyticsActionButtonsContainerVisible", true);
					this.scrollTop();
				},

				// endregion

				// region Methods: Public (Obsolete)

				/**
				 * Checks if the user has the right to add/change/delete a schedule
				 * according to the system settings "Analytics Setup" (CanManageAnalytics)
				 * @return {Boolean} Returns of user right to edit chart.
				 */
				checkCanManageAnalytics: function() {
					RightUtilities.checkCanExecuteOperation({
						operation: "CanManageAnalytics"
					}, this.onCanManageAnalytics, this);
				},

				/**
				 * Sets the attribute "CanManageAnalytics" depending on the value of the requested
				 * system settings "Show Demo Links" (ShowDemoLinks)
				 * and access to the "Configure Analytics" operation (CanManageAnalytics)
				 */
				onCanManageAnalytics: function(result) {
					Terrasoft.SysSettings.querySysSettingsItem("ShowDemoLinks", function(value) {
						var canManageAnalytics = !value && result;
						this.set("canManageAnalytics", canManageAnalytics);
					}, this);
				}

				// endregion

			},
			diff: [
				// region ANALYTICS MODE
				{
					"operation": "insert",
					"name": "AnalyticsModeActionButtonsRightContainer",
					"parentName": "FiltersContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["separate-action-buttons-right-container-wrapClass"],
						"visible": { "bindTo": "IsAnalyticsActionButtonsContainerVisible" },
						"items": []
					}
				},
				{
					"operation": "insert",
					"name": "AnalyticsModeReportsButton",
					"parentName": "AnalyticsModeActionButtonsRightContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.BUTTON,
						"caption": { "bindTo": "Resources.Strings.ReportsButtonCaption" },
						"classes": { "wrapperClass": ["actions-button-margin-right"] },
						"menu": { "items": { "bindTo": "ReportGridData" } },
						"visible": { "bindTo": "IsAnalyticsPrintButtonVisible" }
					}
				},
				{
					"operation": "insert",
					"name": "AnalyticsModeViewOptionsButton",
					"parentName": "AnalyticsModeActionButtonsRightContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.BUTTON,
						"caption": { "bindTo": "Resources.Strings.ViewOptionsButtonCaption" },
						"menu": []
					}
				},
				{
					"operation": "insert",
					"index": 0,
					"name": "OpenAnalyticsViewAnalyticsModeOptionsMenuItem",
					"parentName": "AnalyticsModeViewOptionsButton",
					"propertyName": "menu",
					"values": {
						"itemType": Terrasoft.ViewItemType.MENU_ITEM,
						"caption": { "bindTo": "Resources.Strings.GridDataViewCaption" },
						"markerValue": { "bindTo": "Resources.Strings.GridDataViewCaption" },
						"click": { "bindTo": "changeDataView" },
						"tag": "GridDataView"
					}
				},
				// endregion
				{
					"operation": "insert",
					"name": "AnalyticsDataView",
					"parentName": "DataViewsContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.SECTION_VIEW,
						"items": []
					}
				},
				{
					"operation": "insert",
					"name": "AnalyticsGridLayoutContainer",
					"parentName": "AnalyticsDataView",
					"propertyName": "items",
					"values": {
						"id": "AnalyticsGridLayoutContainer",
						"selectors": { "wrapEl": "#AnalyticsGridLayoutContainer" },
						"itemType": Terrasoft.ViewItemType.CONTAINER,
						"wrapClass": ["analytics-gridLayout-container"],
						"items": []
					}
				},
				{
					"operation": "insert",
					"parentName": "AnalyticsGridLayoutContainer",
					"propertyName": "items",
					"name": "DashboardModule",
					"values": {
						"itemType": Terrasoft.ViewItemType.MODULE,
						"moduleName": "DashboardsModule",
						"afterrender": { "bindTo": "loadDashboardModule" },
						"afterrerender": { "bindTo": "loadDashboardModule" }
					}
				},
				{
					"operation": "insert",
					"name": "AnalyticsGridLayout",
					"parentName": "AnalyticsGridLayoutContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
						"visible": false,
						"items": []
					}
				},
				{
					"operation": "insert",
					"name": "AddChartActionButton",
					"parentName": "AnalyticsActionButtonsContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.BUTTON,
						"style": Terrasoft.controls.ButtonEnums.style.GREEN,
						"caption": { "bindTo": "Resources.Strings.AddChartButtonCaption" },
						"visible": false,
						"click": { "bindTo": "addChart" },
						"classes": {
							"textClass": ["actions-button-margin-right"],
							"wrapperClass": ["actions-button-margin-right"]
						}
					}
				}
			]
		};
	});
