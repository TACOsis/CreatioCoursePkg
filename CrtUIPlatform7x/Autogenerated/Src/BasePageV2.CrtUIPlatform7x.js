/**
 * Parent: BaseEntityPage
 */
define("BasePageV2", ["performancecountermanager", "ChangeLogUtilities",
	"ProcessModuleUtilities", "RightUtilities", "TagUtilitiesV2", "DelayExecutionUtilities",
	"RecommendationModuleUtilities", "ProcessEntryPointUtilities", "HtmlEditModule", "PrintReportUtilities",
	"MenuUtilities", "SecurityUtilities", "LookupQuickAddMixin", "WizardUtilities", "SectionWizardEnums",
	"ContextHelpMixin", "MultiLookupUtilitiesMixin", "QuickAddMixin", "EntityResponseValidationMixin",
	"EntityRelatedColumnsMixin", "DcmPageMixin", "css!HtmlEditModule", "css!BasePageV2CSS", "CheckModuleDestroyMixin",
	"ActionsDashboardUtils", "css!ActionsDashboardCSS", "css!BaseStageControl"
], function(performanceManager, changeLogUtilities) {
	return {
		mixins: {
			DelayExecutionUtilities: "Terrasoft.DelayExecutionUtilities",
			RecommendationModuleUtilities: "Terrasoft.RecommendationModuleUtilities",
			ProcessEntryPointUtilities: "Terrasoft.ProcessEntryPointUtilities",
			PrintReportUtilities: "Terrasoft.PrintReportUtilities",
			SecurityUtilitiesMixin: "Terrasoft.SecurityUtilitiesMixin",
			LookupQuickAddMixin: "Terrasoft.LookupQuickAddMixin",
			MultiLookupUtilitiesMixin: "Terrasoft.MultiLookupUtilitiesMixin",
			QuickAddMixin: "Terrasoft.QuickAddMixin",
			ContextHelpMixin: "Terrasoft.ContextHelpMixin",
			WizardUtilities: "Terrasoft.WizardUtilities",
			EntityResponseValidationMixin: "Terrasoft.EntityResponseValidationMixin",
			EntityRelatedColumnsMixin: "Terrasoft.EntityRelatedColumnsMixin",
			DcmPageMixin: "Terrasoft.DcmPageMixin",
			CheckModuleDestroyMixin: "Terrasoft.CheckModuleDestroyMixin",
		},
		messages: {
			/**
			 * @message UpdatePageHeaderCaption
			 * Updates page header caption.
			 * @param {Object} config Config.
			 * @param {String} config.pageHeaderCaption Page caption.
			 */
			"UpdatePageHeaderCaption": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GridRowChanged
			 * Gets the ID of the selected record in the register when it changes.
			 * @param {Object} config Action config.
			 * @param {String} config.schemaName Register record schema name.
			 * @param {Terrasoft.ConfigurationEnums.CardOperation} config.operation Operation type.
			 * @param {String} config.primaryColumnValue Selected record ID.
			 * @return {Boolean} Returns true if schema name equals current schema name.
			 */
			"GridRowChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message UpdateCardProperty
			 * Changes the model parameter value.
			 * @param {Object} config Action config.
			 * @param {String} config.key View model parameter name.
			 * @param {Mixed} config.value View model parameter value.
			 * @param {Object} config.options Update parameter options.
			 */
			"UpdateCardProperty": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message UpdateCardHeader
			 * Updates card header.
			 */
			"UpdateCardHeader": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message CloseCard
			 */
			"CloseCard": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message OpenCard
			 * Opens card.
			 * @param {Object} config Config for open card.
			 * @param {String} config.moduleId Module identifier.
			 * @param {String} config.schemaName Entity schema name.
			 * @param {String} config.operation Record operation/
			 * @param {String} config.id Primary column value.
			 * @param {Array} config.defaultValues Array of default values.
			 */
			"OpenCard": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message OpenCardInChain
			 * Opens card in chain.
			 * @param {Object} Config for open card.
			 */
			"OpenCardInChain": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetCardState
			 * Returns card state
			 */
			"GetCardState": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message IsCardChanged
			 * Returns is card changed.
			 */
			"IsCardChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SaveRecord
			 * ######## ######## # ############# ###########
			 */
			"SaveRecord": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SetInitialisationData
			 * Triggers after detail initialization.
			 */
			"DetailInitialized": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message DetailChanged
			 * ########### ##### ########## ###### ## ######
			 */
			"DetailChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message UpdateDetail
			 * ######## ###### ## ######### ########
			 */
			"UpdateDetail": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message OnCardAction
			 * ########### ### ########## ######## ######## ### ########
			 * @param {String} action ######## ########
			 */
			"OnCardAction": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message CardChanged
			 * ######## ## ######### ######### ########
			 * @param {Object} config
			 * @param {String} config.key ######## ####### ###### #############
			 * @param {Object} config.value ########
			 */
			"CardChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetRecordInfo
			 * ######## ################ ###### ## ##########  ##### ######## # ######## ######### ####
			 * @param {String} ################ ###### ## ##########  ##### ######## # ######## ######### ####
			 */
			"GetRecordInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message CardSaved
			 * ########, ### ######## ########### ### silentSave
			 */
			"CardSaved": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message CloseDelayExecutionModule
			 * ######## # ######### ###### ########### ########## ## ########
			 */
			"CloseDelayExecutionModule": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetProcessExecData
			 * ########## ###### ### ########### ######## ############## ## ########
			 */
			"GetProcessExecData": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetProcessEntryPointInfo
			 * ########## ###### ########### ##### ##### ## ######## #######
			 */
			"GetProcessEntryPointInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetProcessEntryPointsData
			 * ######## # ########## ###### ##### ##### ## ######## ####### # #######
			 */
			"GetProcessEntryPointsData": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetProcessEntryPointsData
			 * ######### # ######### ######### #### ##### ##### # #######
			 */
			"CloseProcessEntryPointModule": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ProcessExecDataChanged
			 * ########, ### ######### ####### ####### ## ########
			 */
			"ProcessExecDataChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetActiveViewName
			 * Gets name of the active view
			 */
			"GetActiveViewName": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetCardActions
			 * ########## ######## ########
			 * @return {Object} #######
			 */
			"GetCardActions": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetCardViewOptions
			 * ######## # ###### ###### #### ###### "###"
			 * @param {Terrasoft.BaseViewModelCollection} ###### #### ###### "###"
			 */
			"GetCardViewOptions": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetDataViews
			 * ######## ############# #######
			 * @return {Terrasoft.BaseViewModelCollection} ########## ############# #######
			 */
			"GetDataViews": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message DiscardChanges
			 * ########### ##### ###### ######### # ############# ####### # ########### ########### # ##########
			 * ############# ########. # ######## ######### ######### ########## ########## # #######.
			 */
			"DiscardChanges": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetMiniPageMasterEntityInfo
			 * Returns information about master entity for minipage.
			 */
			"GetMiniPageMasterEntityInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetEntityInfo
			 * ########## ########## # #######.
			 */
			"GetEntityInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetPageTips
			 * Returns page tips.
			 */
			"GetPageTips": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetColumnsValues
			 * ########## ######## ########## #######. ######## - ###### ############### #######.
			 */
			"GetColumnsValues": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetColumnInfo
			 * Returns info by column.
			 * @param {String} columnName Column name.
			 */
			"GetColumnInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetLookupQueryFilters
			 * ########## ####### ########## #######.
			 * @param {String} columnName ######## #######.
			 * @return {Terrasoft.FilterGroup} ####### ########## #######.
			 */
			"GetLookupQueryFilters": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetLookupListConfig
			 * ########## ########## # ########## ########## #######.
			 * @param {String} columnName ######## #######.
			 * @return {Terrasoft.FilterGroup} ########## # ########## ########## #######.
			 */
			"GetLookupListConfig": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message EntityColumnChanged
			 * ########## ## ######### ######## ####### ####### ########.
			 * @return {Object} changed
			 * @return {String} changed.columnName ######## #######.
			 * @return {Object} changed.columnValue ######## #######.
			 * @deprecated Use GetEntityColumnChanges.
			 */
			"EntityColumnChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetEntityColumnChanges
			 * Sends entity column info when it is changed.
			 * @return {Object} changed
			 * @return {String} changed.columnName Column name.
			 * @return {Object} changed.columnValue Column value.
			 */
			"GetEntityColumnChanges": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * ######## ##### ######## ####### ########### ### ####, ### ## ######### #######.
			 * @param {Array} ###### ######## #######.
			 */
			/**
			 * @message GetRunProcessesProperties
			 * ######### #########, ####### ######## ######## ####### ########### ### ####### #########.
			 * @param {Array} ###### ######## #######.
			 */
			"GetRunProcessesProperties": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message ReloadCard
			 * ############# ########.
			 */
			"ReloadCard": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ReloadSectionRow
			 * Reloads section row by primary column value.
			 */
			"ReloadSectionRow": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message SelectedSideBarItemChanged
			 * ######## ######### ######## ####### # #### ####### ##### ######.
			 * @param {String} ######### ####### (####. "SectionModuleV2/AccountPageV2/" ### "DashboardsModule/").
			 */
			"SelectedSideBarItemChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message ReloadGridAfterAdd
			 * ######### ###### ### ########### ######.
			 */
			"ReloadGridAfterAdd": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetLookupValuePairs
			 * ########## ########## # ######### ## #########, ############ # ##### ###### ########## #######.
			 */
			"GetLookupValuePairs": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message OnCardModuleSaved
			 */
			"OnCardModuleSaved": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message ValidateCard
			 * Run validate process and returns true if card valid.
			 */
			"ValidateCard": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ReInitializeActionsDashboard
			 * Run ActionsDashboard reinitialization.
			 */
			"ReInitializeActionsDashboard": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message UpdateDcmActionsDashboardConfig
			 * Update DcmActionsDashboard config.
			 */
			"UpdateDcmActionsDashboardConfig": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ReloadDashboardItems
			 * Reloads dashboard items.
			 */
			"ReloadDashboardItems": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message ReloadDashboardItemsPTP
			 * Reloads dashboard items for current page.
			 */
			"ReloadDashboardItemsPTP": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message CanChangeHistoryState
			 * Used to allow or forbid change of current history state.
			 * @param {Boolean} result Flag that indicates whether the state can be changed.
			 */
			"CanChangeHistoryState": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message IsEntityChanged
			 * Returns is entity changed.
			 */
			"IsEntityChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message IsDcmFilterColumnChanged
			 * Returns true if DCM filtered columns changed.
			 */
			"IsDcmFilterColumnChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message UpdateParentLookupDisplayValue
			 * Updates parent record lookup value by config.
			 * @param {Object} config Update lookup value config.
			 * @param {Guid} config.value Child lookup primary column value.
			 * @param {String} config.displayValue Child lookup primary display column value.
			 * @param {String} config.referenceSchemaName Lookup column reference schema name.
			 */
			"UpdateParentLookupDisplayValue": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},

			/**
			 * @message ReloadDataOnRestore
			 * Indicates need to reload data on next init.
			 */
			"ReloadDataOnRestore": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			}
		},
		attributes: {
			/**
			 * Indicates visibility of 'LeftModulesContainer'.
			 * @type {Boolean}
			 */
			"IsLeftModulesContainerVisible": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Indicates visibility of 'ActionDashboardContainer'.
			 * @type {Boolean}
			 */
			"IsActionDashboardContainerVisible": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Indicates visibility of 'DcmActionsDashboardContainer'.
			 * @type {Boolean}
			 */
			"HasActiveDcm": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Indicates has dcm schema by entity schema of current view model.
			 * @type {Boolean}
			 */
			"HasAnyDcm": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Custom DcmActionsDashboardContainer dom attributes.
			 * @type {Object}
			 */
			"ActionsDashboardAttributes": {
				dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT
			},
			/**
			 * Dcm module config.
			 * @type {Object}
			 */
			"DcmConfig": {
				dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT,
				value: {}
			},
			/**
			 * Page header visible flag.
			 * @type {Boolean}
			 */
			"IsPageHeaderVisible": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * ######## ## ########### ######### ### ######## ############
			 */
			"CanDesignPage": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * Save tab active name.
			 */
			"ActiveTabName": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * #######, ### #### ###### ###### DiscardButtons (######)
			 */
			"ForceUpdate": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				defaultValues: false
			},
			/**
			 * #######, ### ###### ######## ##### #########
			 */
			"IsChanged": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ####### ######### ###### ##########,
			 * ############## # true, #### #### ## #### ####### ## ######## ####### #####
			 */
			"ShowSaveButton": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ####### ######### ###### ###### #########,
			 * ############## # true, #### #### ## #### ####### ## ######## ####### #####
			 */
			"ShowDiscardButton": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ####### ######### ###### ######## ########
			 */
			"ShowCloseButton": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ###### ############# ########## #######
			 */
			"ContextHelpId": {
				dataValueType: this.Terrasoft.DataValueType.INTEGER,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ########### ##### ##### # ####### ## ####### ####### ########
			 */
			"EntryPointsCount": {
				dataValueType: this.Terrasoft.DataValueType.INTEGER,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * ########## ############# ########, # ####### ########### ########### ######.
			 */
			"SourceEntityPrimaryColumnValue": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/**
			 * GridData view name.
			 */
			"GridDataViewName": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				value: "GridDataView"
			},
			/**
			 * AnalyticsData view name.
			 */
			"AnalyticsDataViewName": {
				dataValueType: this.Terrasoft.DataValueType.TEXT,
				value: "AnalyticsDataView"
			},
			/**
			 * ####### ######### ###### "#######"
			 */
			"IsProcessButtonVisible": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * ###### #### ###### "#######"
			 */
			"ProcessButtonMenuItems": {
				dataValueType: this.Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * ######### ####### #### ###### ######## ########## ##########.
			 */
			QuickAddMenuItems: {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * ######### ####### #### ###### ######## ####.
			 */
			CardPrintMenuItems: {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * ######## ######## ###### ## ####### ###### #### # ############ ### ############# ########
			 */
			SecurityOperationName: {
				dataValueType: Terrasoft.DataValueType.STRING,
				value: null
			},
			/**
			 * ### ####### ## ###### ####### ### MultiLookup
			 */
			"QueryRowCount": {
				dataValueType: this.Terrasoft.DataValueType.INTEGER,
				value: 3
			},
			/**
			 * Card body attribute when card is showing or hide.
			 */
			"IsCardOpenedAttribute": {
				dataValueType: this.Terrasoft.DataValueType.STRING,
				value: "is-card-opened"
			},
			/**
			 * Body attribute when main header is showing or hide.
			 */
			"IsMainHeaderVisibleAttribute": {
				dataValueType: this.Terrasoft.DataValueType.STRING,
				value: "is-main-header-visible"
			},
			/**
			 * Array of page header caption column names.
			 * @type {String[]}
			 */
			"PageHeaderColumnNames": {
				dataValueType: this.Terrasoft.DataValueType.CUSTOM_OBJECT,
				value: []
			},
			/**
			 * Sign of unavailable page.
			 */
			"IsNotAvailable": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Sign that the page can be customized.
			 * @type {Boolean}
			 */
			"CanCustomize": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},
			/**
			 * Card operation.
			 * @type {enum}
			 */
			"Operation": {
				dataValueType: Terrasoft.DataValueType.ENUM
			},
			/**
			 * Indicates that an Entity must be reloaded on next init.
			 */
			"EntityReloadScheduled": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			}
		},
		modules: /**SCHEMA_MODULES*/{
			"ActionsDashboardModule": {
				"config": {
					"isSchemaConfigInitialized": true,
					"schemaName": "SectionActionsDashboard",
					"useHistoryState": false,
					"parameters": {
						"viewModelConfig": {
							"entitySchemaName": {
								"propertyValue": "entitySchemaName"
							}
						}
					}
				}
			},
			"DcmActionsDashboardModule": {
				"alias": "ActionsDashboardModule"
			}
		}/**SCHEMA_MODULES*/,
		methods: {

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#initOnRestored
			 * @overridden
			 */
			initOnRestored: function(callback, scope) {
				this.callParent([function() {
					if (!this.isChanged() && this.get("EntityReloadScheduled")) {
						const primaryColumnValue = this.getPrimaryColumnValue();
						this.set("PrimaryColumnValue", primaryColumnValue);
						this.reloadEntity(callback, scope);
					} else {
						Ext.callback(callback, scope);
					}
				}, this]);
			},

			/**
			 * Returns page header caption.
			 * @protected
			 * @return {String} Page header caption.
			 */
			getPageHeaderCaption: function() {
				var replacePattern = /^\s\/\s|\s\/\s$/g;
				var header = this.getPrimaryDisplayColumnValue() || "";
				var headerTemplate = this.get("Resources.Strings.PageHeaderTemplate");
				var masterDisplayValue = this.getMasterDisplayValue();
				var pageHeader = this.isOverridenGetHeaderMethod() ? this.getHeader() : this.getPageHeader();
				if (masterDisplayValue && this.Ext.isEmpty(this.getModuleStructure())) {
					header = this.Ext.String.format(headerTemplate, masterDisplayValue, pageHeader);
					return header.replace(replacePattern, "");
				}
				if (this.get("UseSeparatedPageHeader")) {
					header = this.Ext.String.format(headerTemplate, pageHeader, header);
					return header.replace(replacePattern, "");
				}
				return header || (!this.isNew && pageHeader);
			},

			/**
			 * Return master display value.
			 * @private
			 * @return {String} Master display value.
			 */
			getMasterDisplayValue: function() {
				var masterDisplayValue = "";
				var defaultValues = this.get("DefaultValues") || this.getDefaultValues();
				this.Terrasoft.each(defaultValues, function(defaultValue) {
					if (defaultValue.displayValue) {
						masterDisplayValue = defaultValue.displayValue;
						return false;
					}
				}, this);
				return masterDisplayValue;
			},

			/**
			 * Check is 'NewRecordPageCaption' set.
			 * @protected
			 * @return {boolean} Is 'NewRecordPageCaption' set flag.
			 */
			checkNewRecordPageCaptionSet: function() {
				var newRecordPageCaption = this.get("NewRecordPageCaption");
				return !Ext.isEmpty(newRecordPageCaption);
			},

			/**
			 * Checks is entity administrated by records.
			 * @protected
			 */
			getSchemaAdministratedByRecords: function() {
				return Ext.isEmpty(this.entitySchema) ? false : this.entitySchema.administratedByRecords;
			},

			/**
			 * ######### ##### ######## # ######### ###### # #### ###### "###".
			 * @protected
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions ###### #### ###### "###".
			 */
			addListSettingsOption: function(viewOptions) {
				viewOptions.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenListSettingsCaption"},
					"Click": {"bindTo": "openGridSettings"},
					"Visible": {"bindTo": "IsSectionVisible"},
					"ImageConfig": this.get("Resources.Images.GridSettingsIcon")
				}));
			},

			/**
			 * Adds separator after the transition point in the list of settings in the menu "View" button.
			 * @protected
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions Menu items of the button "View".
			 */
			addListSettingsOptionSeparator: function(viewOptions) {
				viewOptions.addItem(this.getButtonMenuSeparator({
					"Visible": {"bindTo": "IsSectionVisible"}
				}));
			},

			/**
			 * Adds representations of switching points in the "View" menu button.
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions Menu items of the button "View".
			 */
			addChangeDataViewOptions: function(viewOptions) {
				var dataViews = this.getDataViews();
				if (!dataViews || !dataViews.contains(this.get("AnalyticsDataViewName"))) {
					return;
				}
				viewOptions.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.AnalyticsDataViewCaption"},
					"Click": {"bindTo": "changeDataView"},
					"canExecute": {"bindTo": "canBeDestroyed"},
					"Visible": {"bindTo": "IsSectionVisible"},
					"Tag": "AnalyticsDataView",
					"ImageConfig": this.get("Resources.Images.AnalyticsDataIcon")
				}));
			},

			/**
			 * Adds a separator after representations switching points in the "View" menu button.
			 * @protected
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions Menu items of the button "View".
			 */
			addChangeDataViewOptionsSeparator: function(viewOptions) {
				viewOptions.addItem(this.getButtonMenuSeparator({
					"Visible": {"bindTo": "IsSectionVisible"}
				}));
			},

			/**
			 * Adds "Open section wizard" menu item to "View" menu.
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions Menu items of "View" menu.
			 */
			addSectionDesignerViewOptions: function(viewOptions) {
				this.addSectionWizardMenuItem(viewOptions, this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenSectionDesignerButtonCaption"},
					"Click": {"bindTo": "openSectionWizard"},
					"Visible": {"bindTo": "getCanDesignWizard"},
					"Tag": {"pageName": Terrasoft.SectionWizardEnums.PageName.PAGE_DESIGNER},
					"ImageConfig": this.getSectionDesignerMenuIcon()
				}));
			},

			/**
			 * @inheritdoc Terrasoft.configuration.mixins.WizardUtilities#getCanDesignWizard
			 * @override
			 */
			getCanDesignWizard: function() {
				return this.getCanDesignPage ? this.getCanDesignPage() : false;
			},

			/**
			 * ######## ###### #### ###### "###".
			 * @protected
			 * @return {Terrasoft.BaseViewModelCollection} ###### #### ###### "###".
			 */
			getViewOptions: function() {
				var viewOptions = this.Ext.create("Terrasoft.BaseViewModelCollection");
				this.addListSettingsOption(viewOptions);
				this.addListSettingsOptionSeparator(viewOptions);
				this.addChangeDataViewOptions(viewOptions);
				this.addChangeDataViewOptionsSeparator(viewOptions);
				this.addSectionDesignerViewOptions(viewOptions);
				this.addDcmPageInSectionWizardViewOptions(viewOptions);
				return viewOptions;
			},

			/**
			 * ######## ############### ######## ########.
			 */
			onCardAction: function() {
				var action = arguments[0] || arguments[3];
				this[action]();
			},

			/**
			 * Obsolete method call server service.
			 * @deprecated
			 * @param {String} serviceName
			 * @param {String} methodName
			 * @param {Function} callback
			 * @param {Object} data
			 * @param {Object} scope
			 */
			callServiceMethod: function(serviceName, methodName, callback, data, scope) {
				var obsoleteMessage = this.Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage;
				this.log(Ext.String.format(obsoleteMessage, "callServiceMethod", "callService"));
				var config = {
					serviceName: serviceName,
					methodName: methodName,
					data: data
				};
				this.callService(config, callback, scope);
			},

			/**
			 * Generates default values.
			 * @protected
			 * @return {Object[]} List of default values.
			 */
			getDefaultValues: function() {
				var cardInfo = this.sandbox.publish("getCardInfo", null, [this.sandbox.id]);
				var historyState = this.sandbox.publish("GetHistoryState");
				var state = historyState && historyState.state;
				cardInfo = cardInfo || state || {};
				var defaultValues = this.processDefaultValues(cardInfo.valuePairs);
				if (cardInfo.typeColumnName && cardInfo.typeUId) {
					defaultValues.push({
						name: cardInfo.typeColumnName,
						value: cardInfo.typeUId
					});
				}
				this.set("DefaultValues", this.Terrasoft.deepClone(defaultValues));
				return defaultValues;
			},

			/**
			 * Returns default value.
			 * @protected
			 * @return {Object|null} Returns default value.
			 */
			getDefaultValueByName: function(valueName) {
				var defaultValues = this.get("DefaultValues") || this.getDefaultValues();
				if (Ext.isEmpty(defaultValues)) {
					return null;
				}
				var defaultValue = Terrasoft.findItem(defaultValues, {name: valueName});
				if (!defaultValue) {
					return null;
				}
				defaultValue = defaultValue.item;
				if (!defaultValue || Ext.isEmpty(defaultValue.value)) {
					return null;
				}
				return defaultValue.value;
			},

			/**
			 * Sign need increment code.
			 * @protected
			 * @return {Boolean} True if need to increment.
			 */
			getIsNeedIncrementCode: function() {
				var result = false;
				var columnName = this.getIncrementColumn() || "";
				if (this.isNotEmpty(columnName)) {
					result = (this.isAddMode() && this.isEmpty(this.get(columnName))) || this.isCopyMode();
				}
				return result;
			},

			/**
			 * Returns increment column name.
			 * @protected
			 * @return {String}
			 */
			getIncrementColumn: this.Terrasoft.emptyFn,

			/**
			 * Sets increment code.
			 * @protected
			 * @param {Function} [callback] The callback function.
			 * @param {Object} [scope] Environment object callback function.
			 */
			setIncrementCode: function(callback, scope) {
				scope = scope || this;
				if (this.getIsNeedIncrementCode()) {
					this.getIncrementCode(function(result) {
						if (this.isNotEmpty(result)) {
							var columnName = this.getIncrementColumn();
							scope.set(columnName, result);
						}
						this.Ext.callback(callback, scope);
					}, scope);
				}
			},

			getIncrementCode: function(callback, scope) {
				var data = {
					sysSettingName: this.entitySchemaName + this.getIncrementNumberSuffix(),
					sysSettingMaskName: this.entitySchemaName + this.getIncrementMaskSuffix()
				};
				var config = {
					serviceName: "SysSettingsService",
					methodName: "GetIncrementValueVsMask",
					data: data
				};
				this.callService(config, function(response) {
					callback.call(this, response.GetIncrementValueVsMaskResult);
				}, scope || this);
			},

			/**
			 * Returns suffix for SysSettings name
			 * @protected
			 * @returns {string}
			 */
			getIncrementNumberSuffix: function() {
				return "LastNumber";
			},

			/**
			 * Returns suffix for SysSettings code mask
			 * @protected
			 * @returns {string}
			 */
			getIncrementMaskSuffix: function() {
				return "CodeMask";
			},
			/**
			 * @private
			 */
			_initEntityDefaultValues: function(callback, scope) {
				performanceManager.start("Init_Entity_setEntityDefaultValues");
				this.setEntityDefaultValues(function() {
					performanceManager.stop("Init_Entity_setEntityDefaultValues");
					Ext.callback(callback, scope);
				}, this);
			},

			/**
			 * @private
			 */
			_initEntityAdd: function(callback, scope) {
				Terrasoft.chain(
					function(next) {
						this.setDefaultValues(next, this);
					},
					function(next) {
						this.setEntityLookupDefaultValues(next, this);
					},
					function(next) {
						this._initEntityDefaultValues(next, this);
					},
					function() {
						Ext.callback(callback, scope);
					}, this
				);
			},

			/**
			 * @private
			 */
			_initEntityEdit: function(callback, scope) {
				Terrasoft.chain(
					function(next) {
						this._initEntityDefaultValues(next, this);
					},
					function(next) {
						var primaryColumnValue = this.get("PrimaryColumnValue");
						performanceManager.start("Init_Entity_loadEntity");
						this.loadEntity(primaryColumnValue, next, this);
					},
					function() {
						performanceManager.stop("Init_Entity_loadEntity");
						Ext.callback(callback, scope);
					}, this
				);
			},

			/**
			 * @private
			 */
			_initEntityCopy: function(callback, scope) {
				Terrasoft.chain(
					function(next) {
						this._initEntityDefaultValues(next, this);
					},
					function(next) {
						var primaryColumnValue = this.get("PrimaryColumnValue");
						if (primaryColumnValue) {
							this.set("SourceEntityPrimaryColumnValue", primaryColumnValue);
						}
						this.copyEntity(primaryColumnValue, next, this);
					},
					function() {
						Ext.callback(callback, scope);
					}, this
				);
			},

			/**
			 * @private
			 */
			_getIsNeedToSendCompleteExecutionRequest: function(config) {
				const isProcessMode = this.get("IsProcessMode");
				const isEnabled = Terrasoft.Features.getIsEnabled("OpenEditPageUserTask.CompleteOnlyBySaveButton");
				const isOpenEditPageUserTask = config.executionData.userTaskName === "OpenEditPageUserTask";
				return Boolean(isEnabled && !config.isSilentSave && isProcessMode && config.processElementUId
					&& isOpenEditPageUserTask);
			},

			/**
			 * @private
			 */
			_sendCompleteExecutionRequest: function(processElementUId, callback, scope) {
				const request = Ext.create("Terrasoft.CompleteExecutingRequest", {
					processElementUId: processElementUId,
					collectExecutionData: true,
					publishExecutionData: false
				});
				request.execute((response) => {
					const cardSaveResponse = this.cardSaveResponse ?? {};
					cardSaveResponse.processExecutionData = [
						...cardSaveResponse.processExecutionData ?? [],
						...response.executionData ?? []];
					this.cardSaveResponse = cardSaveResponse;
					callback.call(scope);
				}, this);
			},

			/**
			 * @private
			 */
			_sendCompleteExecutionRequestInChain: function(isSilentSave, next) {
				const executionData = this.get("ProcessData") || {};
				const processElementUId = executionData.procElUId;
				const isNeedToSendCompleteExecutionRequest = this._getIsNeedToSendCompleteExecutionRequest({
					isSilentSave: isSilentSave,
					processElementUId: processElementUId,
					executionData: executionData
				});
				if (isNeedToSendCompleteExecutionRequest) {
					this._sendCompleteExecutionRequest(processElementUId, next, this);
				} else {
					next();
				}
			},

			/**
			 * Initializes values of the entity.
			 * @private
			 * @param {Function} callback
			 * @param {Object} scope
			 */
			initEntity: function(callback, scope) {
				scope = scope || this;
				this.showBodyMask();
				this.set("IsEntityInitialized", false);
				var operation = this.get("Operation");
				switch (operation) {
					case Terrasoft.ConfigurationEnums.CardOperation.ADD:
						this._initEntityAdd(callback, scope);
						break;
					case Terrasoft.ConfigurationEnums.CardOperation.EDIT:
						this._initEntityEdit(callback, scope);
						break;
					case Terrasoft.ConfigurationEnums.CardOperation.COPY:
						this._initEntityCopy(callback, scope);
						break;
					default:
						Ext.callback(callback, scope);
						break;
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseViewModel#isChanged
			 * @override
			 */
			isChanged: function() {
				if (this.get("ForceUpdate")) {
					return true;
				}
				return this.callParent(arguments);
			},

			/**
			 * ########### ##### ########## #### #### ##########.
			 * @deprecated
			 * @param {String} name
			 * @param {String} value
			 * @param {Function} callback
			 */
			loadLookupDisplayValueAsync: function(name, value, callback, scope) {
				this.loadLookupDisplayValue(name, value, callback, scope);
				var obsoleteMessage = Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage;
				this.log(Ext.String.format(obsoleteMessage,
					"loadLookupDisplayValueAsync", "loadLookupDisplayValue"));
			},

			/**
			 * @inheritdoc Terrasoft.BaseModel#onDataChange
			 * @override
			 */
			onDataChange: function() {
				this.callParent(arguments);
				if (this.get("IsEntityInitialized")) {
					var isChanged = this.isChanged();
					this.set("IsChanged", isChanged);
				}
			},

			/**
			 * ########## ####### ## ######## # ###### ##########
			 * @private
			 * @return {Boolean} ########## ####### ## ######## # ###### ##########
			 */
			isAddMode: function() {
				return this.get("Operation") === Terrasoft.ConfigurationEnums.CardOperation.ADD;
			},

			/**
			 * ########## ####### ## ######## # ###### ##############
			 * @private
			 * @return {Boolean} ########## ####### ## ######## # ###### ##############
			 */
			isEditMode: function() {
				return this.get("Operation") === Terrasoft.ConfigurationEnums.CardOperation.EDIT;
			},

			/**
			 * ########## ####### ## ######## # ###### ###########
			 * @private
			 * @return {Boolean} ########## ####### ## ######## # ###### ###########
			 */
			isCopyMode: function() {
				return this.get("Operation") === Terrasoft.ConfigurationEnums.CardOperation.COPY;
			},

			/**
			 * ########## ####### ## ######## # ###### ########## ### ###########
			 * @private
			 * @return {Boolean} ########## ####### ## ######## # ###### ########## ### ###########
			 */
			isNewMode: function() {
				return this.isAddMode() || this.isCopyMode();
			},

			/**
			 * ######### ##### ## ######## ########## ### #########
			 * @protected
			 * @return {Boolean} ########## true #### ##### ######### ######## ### #########
			 * # false # ######### ######
			 */
			canEntityBeOperated: function() {
				return this.isEditMode();
			},

			/**
			 * @private
			 */
			_closePage: function(silentMode) {
				var router = Terrasoft.router.Router;
				var history = router.context.history;
				var hasHistory = history.length > 1;
				if (hasHistory) {
					this.sandbox.publish("BackHistoryState");
				} else if (!silentMode) {
					window.close();
				}
			},

			/**
			 * Sends a message to details about cancellation of changes in the card.
			 * @protected
			 */
			discardDetailChange: function() {
				const moduleNames = Ext.Object.getKeys(this.modules);
				const detailNames = Ext.Object.getKeys(this.details);
				const detailIds = detailNames.map(this.getDetailId, this);
				const modulesIds = moduleNames.map(this.getModuleId, this);
				const entityInfo = this.onGetEntityInfo();
				this.sandbox.publish("DiscardChanges", entityInfo, detailIds);
				this.sandbox.publish("DiscardChanges", entityInfo, modulesIds);
			},

			/**
			 * Handles "Close" button click.
			 * @protected
			 */
			onCloseClick: function() {
				this.saveDataOnClosePage(function() {
					this.onCloseCardButtonClick();
				}, this);
			},

			/**
			 * Handles "Close card" button click.
			 * @protected
			 */
			onCloseCardButtonClick: function() {
				if (this.tryShowNextPrcElCard()) {
					return;
				}
				var isLastProcessElement = this.get("IsProcessMode") && !this.get("NextPrcElReady");
				if ((this.get("IsInChain") || this.get("IsSeparateMode")) || isLastProcessElement) {
					if (!this.destroyed) {
						this._closePage();
					}
					return;
				}
				this.sandbox.publish("CloseCard", null, [this.sandbox.id]);
			},

			/**
			 * Opens the page with current primary column value passing.
			 * @private
			 * @param {String} moduleName Name of the page to open.
			 */
			executeAction: function(moduleName) {
				var recordId = this.getPrimaryColumnValue();
				var token = moduleName + "/" + recordId;
				this.sandbox.publish("PushHistoryState", {hash: token});
			},

			/**
			 * Returns filters collection for the report query.
			 * @return {Terrasoft.FilterGroup} Group of the filters for reports.
			 */
			getReportFilters: function() {
				var filters = this.Ext.create("Terrasoft.FilterGroup");
				filters.name = "primaryColumnFilter";
				var filter = this.Terrasoft.createColumnInFilterWithParameters(this.entitySchema.primaryColumnName,
					[this.getPrimaryColumnValue()]);
				filters.addItem(filter);
				return filters;
			},

			/**
			 * ######## ######## ######### #######.
			 * @return {String} ########## ######## ######### #######.
			 */
			getPrimaryColumnValue: function() {
				var entitySchema = this.entitySchema;
				var primaryColumnName = entitySchema && entitySchema.primaryColumnName;
				return this.get(primaryColumnName);
			},

			/**
			 * Gets primary display column value.
			 * @protected
			 * @return {String}
			 */
			getPrimaryDisplayColumnValue: function() {
				return this.get(this.primaryDisplayColumnName);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#findLookupColumnAttributeValue
			 * @override
			 */
			findLookupColumnAttributeValue: function(columnName, attribute) {
				var columnValue = this.get(columnName);
				return columnValue[attribute];
			},

			/**
			 * ########## ##### ########## ############# #####.
			 * @protected
			 * @param {Function} callback ####### ######### ######.
			 * @param {Object} scope ######## ##########.
			 */
			onPageInitialized: function(callback, scope) {
				const primaryColumnName = this.entitySchema && this.entitySchema.primaryColumnName;
				const primaryColumnValue = this.get("PrimaryColumnValue");
				if (primaryColumnName && primaryColumnValue && !this.get(primaryColumnName)) {
					this.set(primaryColumnName, primaryColumnValue, { silent: true });
				}
				callback.call(scope || this);
			},

			/**
			 * Initializes containers visibility.
			 * @protected
			 */
			initContainersVisibility: function() {
				if (this.getIsFeatureDisabled("OldUI")) {
					this.set("IsLeftModulesContainerVisible", true);
					this.set("IsActionDashboardContainerVisible", false);
					this.set("IsPageHeaderVisible", true);
				}
			},

			/**
			 * Returns actions dashboard container visibility.
			 * @protected
			 * @return {Boolean} Is ActionDashboardContainer visible.
			 */
			getIsActionsDashboardContainerVisible: function() {
				var result = !this.get("HasAnyDcm") && this.get("IsActionDashboardContainerVisible");
				return result;
			},

			/**
			 * Returns Dcm actions dashboard container visibility.
			 * @protected
			 * @return {Boolean} Is DcmActionsDashboardModule visible.
			 */
			getIsDcmActionsDashboardContainerVisible: function() {
				return this.get("HasAnyDcm") && this.get("IsActionDashboardContainerVisible");
			},

			/**
			 * Returns Dcm actions dashboard module visibility.
			 * @protected
			 * @return {Boolean} Is DcmActionsDashboardModule visible.
			 */
			getIsDcmActionsDashboardModuleVisible: function() {
				return this.get("HasActiveDcm") && this.get("IsActionDashboardContainerVisible");
			},

			/**
			 * @private
			 */
			_getActionsDashboardModuleConfig: function() {
				return Terrasoft.get(this, "modules.ActionsDashboardModule.config.parameters.viewModelConfig") || {};
			},

			/**
			 * @protected
			 */
			initHasAnyDcm: function(callback, scope) {
				if (!this.get("IsActionDashboardContainerVisible")) {
					this.set("HasAnyDcm", false);
					return Ext.callback(callback, scope);
				}
				var hasAnyDcm;
				var config = this._getActionsDashboardModuleConfig();
				Terrasoft.chain(
					function(next) {
						Terrasoft.DcmUtilities.hasAnyDcmSchema(this, next, this);
					},
					function(next, hasAnyDcmSchema) {
						hasAnyDcm = hasAnyDcmSchema;
						if (hasAnyDcm || config.actionsConfig || config.dashboardConfig) {
							var entitySchemaName = this.getSectionCode();
							Terrasoft.ActionsDashboardUtils.getTabPanelCollapsed(entitySchemaName, next, this);
						} else {
							Ext.callback(callback, scope);
						}
					},
					function(next, collapsed) {
						const domAttributes = {"tab-panel-collapsed": collapsed};
						if (!hasAnyDcm && config.actionsConfig) {
							domAttributes["actions-visible"] = true;
						}
						this.set("ActionsDashboardCollapsed", collapsed);
						this.set("ActionsDashboardAttributes", domAttributes);
						this.set("HasAnyDcm", hasAnyDcm);
						Ext.callback(callback, scope);
					}, this
				);
			},

			/**
			 * @private
			 */
			_showActionsDashboardMask: function() {
				var hasAnyDcm = this.get("HasAnyDcm");
				var config = this._getActionsDashboardModuleConfig();
				if (hasAnyDcm || config.actionsConfig || config.dashboardConfig) {
					Terrasoft.ActionsDashboardUtils.showMask({
						showSpinnerEl: false,
						selector: hasAnyDcm ? "#DcmActionsDashboardContainer" : "#ActionDashboardContainer",
						collapsed: this.get("ActionsDashboardCollapsed"),
						hasAnyDcm: hasAnyDcm
					});
				}
			},

			/**
			 * @private
			 */
			_debouncedInitRunProcess: Terrasoft.emptyFn,

			/**
			 * @private
			 */
			_prepareRunProcessMenu: function() {
				if (this._debouncedInitRunProcess === Terrasoft.emptyFn) {
					this._debouncedInitRunProcess = Terrasoft.debounce(this.initRunProcessButtonMenu.bind(this), 1000);
				}
				this._debouncedInitRunProcess(true);
			},

			/**
			 * Initializes the initial values of the model.
			 * @protected
			 */
			init: function(callback, scope) {
				this.showBodyMask({timeout: 1000});
				var performanceManagerLabel = "";
				if (scope && scope.hasOwnProperty("sandbox")) {
					performanceManagerLabel = scope.sandbox.id;
				} else if (this && this.hasOwnProperty("sandbox")) {
					performanceManagerLabel = this.sandbox.id;
				}
				performanceManager.start(performanceManagerLabel + "_Init");
				this.callParent([function() {
					this.initCardActionHandler();
					Terrasoft.chain(
						this.checkAvailability,
						function(next) {
							var isNotAvailable = this.get("IsNotAvailable");
							if (isNotAvailable) {
								callback.call(scope || this);
							} else {
								next.call(scope || this);
							}
						},
						function(next) {
							this.initContainersVisibility();
							this.initHasAnyDcm(next, this);
						},
						function(next) {
							performanceManager.stop(performanceManagerLabel + "_Init");
							performanceManager.start(performanceManagerLabel + "_BeforeRender");
							if (Terrasoft.Features.getIsEnabled("DcmOptimizationFeature")) {
								this.preInitDcmActionsDashboardVisibility();
							}
							this.onPageInitialized(next, this);
						},
						this.initCanShowChangeLog,
						function() {
							this.initColumnsLookupListConfig();
							this.initEntity(this.onEntityInitialized, this);
							this.initCanDesignPage();
							this.initCardPropertyUpdateHandler();
							this.subscribeSandboxEvents();
							this.subscribeViewModelEvents();
							this.initActionButtonMenu();
							this.initViewOptionsButtonMenu();
							this.initQuickAddMenuItems();
							this.initTabs();
							this.initCardPrintForms();
							Ext.callback(callback, scope);
						},
						this
					);
				}, this]);
			},

			/**
			 * /**
			 * Initializes whether the transition is available to the change log.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			initCanShowChangeLog: function(callback, scope) {
				changeLogUtilities.canShowEntitySchemaChangeLog(this.entitySchema, function(result) {
					this.set("CanShowChangeLog", result);
					Ext.callback(callback, scope);
				}, this);
			},

			/**
			 * Resets body attributes.
			 * @protected
			 */
			resetBodyAttributes: function() {
				Terrasoft.utils.dom.setAttributeToBody(this.get("IsCardOpenedAttribute"), false);
				Terrasoft.utils.dom.setAttributeToBody(this.get("IsMainHeaderVisibleAttribute"), true);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#destroy
			 * @override
			 */
			destroy: function() {
				this.removeHotkeys();
				this.clearPageHeaderCaption();
				this.destroyQuickAddMenuItems();
				this.callParent(arguments);
				this.resetBodyAttributes();
			},

			/**
			 * Do actions that required after page had been rendered.
			 * @protected
			 */
			onRender: function() {
				performanceManager.start(this.sandbox.id + "_AfterRender");
				this._prepareRunProcessMenu();
				this.updatePageHeaderCaption();
				this.callParent(arguments);
				if (this.getIsFeatureDisabled("OldUI")) {
					Terrasoft.utils.dom.setAttributeToBody(this.get("IsCardOpenedAttribute"), this.get("IsPageHeaderVisible"));
					var sectionContainer = Ext.get("SectionContainer");
					var value = false;
					if (sectionContainer && !sectionContainer.hasCls("display-none")) {
						value = true;
					}
					Terrasoft.utils.dom.setAttributeToBody(this.get("IsMainHeaderVisibleAttribute"), value);
					this.appendPageCssClass();
				}
				if (this.get("Restored")) {
					this.initHeader();
				}
				this.changeSelectedSideBarMenu();
				this.sandbox.publish("CardRendered", null, [this.sandbox.id]);
				this.loadRecommendationModule();
				this._showActionsDashboardMask();
				this.addHotkeys();
				performanceManager.stop(this.sandbox.id + "_AfterRender");
			},

			/**
			 * Subscribe for key-down event.
			 * @protected
			 */
			addHotkeys: function() {
				var doc = Ext.getDoc();
				doc.on("keydown", this.onKeyDown, this);
			},

			/**
			 * Unsubscribe from key-down event.
			 * @protected
			 */
			removeHotkeys: function() {
				var doc = Ext.getDoc();
				doc.un("keydown", this.onKeyDown, this);
			},

			/**
			 * Handler for key-down event.
			 * @protected
			 * @param {Object} event Event object.
			 * @return {Boolean}
			 */
			onKeyDown: function(event) {
				if (event.ctrlKey && _.contains([event.ENTER, event.S], event.keyCode)) {
					event.preventDefault();
					if (this.get("ShowSaveButton")) {
						if (event.target) {
							event.target.blur();
						}
						this.save();
					}
					return false;
				}
			},

			/**
			 * Appends css class to card content wrapper.
			 * @protected
			 */
			appendPageCssClass: function() {
				var leftContainer = this.Ext.get("LeftModulesContainer");
				if (leftContainer && leftContainer.getWidth() > 0) {
					var cardContentWrapper = this.Ext.get("CardContentWrapper");
					if (cardContentWrapper) {
						cardContentWrapper.addCls("page-with-left-el");
					}
				}
			},

			/**
			 * Changes selected menu item in left panel.
			 * @protected
			 */
			changeSelectedSideBarMenu: function() {
				var moduleConfig = this.getModuleStructure();
				if (moduleConfig) {
					var sectionSchema = moduleConfig.sectionSchema;
					var config = moduleConfig.sectionModule + "/";
					if (sectionSchema) {
						config += sectionSchema + "/";
					}
					this.sandbox.publish("SelectedSideBarItemChanged", config, ["sectionMenuModule"]);
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseEntityPage#getUpdateDetailConfig
			 */
			getUpdateDetailConfig: function() {
				return {
					reloadAll: true
				};
			},

			/**
			 * Updates detail.
			 * @protected
			 * @param {Object} detailConfig Config.
			 */
			updateDetail: function(detailConfig) {
				var detailId = this.getDetailId(detailConfig.detail);
				this.sandbox.publish("UpdateDetail", {
					reloadAll: true
				}, [detailId]);
			},

			/**
			 * Initialize page header column names.
			 */
			initPageHeaderColumnNames: function() {
				this.set("PageHeaderColumnNames", this.primaryDisplayColumnName);
			},

			/**
			 * Clears page header caption.
			 * @protected
			 */
			clearPageHeaderCaption: function() {
				if (this.getIsFeatureDisabled("OldUI")) {
					this.sandbox.publish("UpdatePageHeaderCaption", {pageHeaderCaption: " "});
				}
			},

			/**
			 * Update page header caption.
			 * @protected
			 * @param {String} changedColumnName Changed column name.
			 */
			updatePageHeaderCaption: function(changedColumnName) {
				if (this.getIsFeatureDisabled("OldUI")) {
					if (!changedColumnName || this.get("PageHeaderColumnNames").indexOf(changedColumnName) > -1) {
						if (this.get("IsEntityInitialized")) {
							var caption = this.getPageHeaderCaption();
							this.sandbox.publish("UpdatePageHeaderCaption", {
								pageHeaderCaption: caption
							});
						}
					}
				}
			},

			/**
			 * Handler of the entity initialized.
			 * @param {Object} config
			 * @param {boolean} [config.firstInit] A flag indicating whether the entity was initialized for first time or not.
			 * @protected
			 */
			onEntityInitialized: function() {
				this.initPageHeaderColumnNames();
				this.initMultiLookup();
				this.updateButtonsVisibility(false, {force: true});
				this.set("IsEntityInitialized", true);
				this.initHeader();
				this.initHeaderCaption();
				this.initControlGroupsProfile();
				var eventTags = this.getEntityInitializedSubscribers();
				eventTags.push(this.sandbox.id);
				var entityInfo = this.onGetEntityInfo();
				this.sandbox.publish("EntityInitialized", entityInfo, eventTags);
				this.initCanCustomize();
				this.initCanOpenDcmPageInSectionWizard();
				if (Terrasoft.Features.getIsEnabled("DcmOptimizationFeature")) {
					this.postInitDcmActionsDashboardVisibility();
				} else {
					this.initDcmActionsDashboardVisibility();
				}
				if (this.get("IsProcessMode") &&
						Terrasoft.Features.getIsEnabled("BasePageV2UseForceUpdateInProcessMode")) {
					this.set("ForceUpdate", true);
				}
				this._prepareRunProcessMenu();
				this.updatePageHeaderCaption();
				this.sandbox.publish("ReloadSectionRow", this.getPrimaryColumnValue(), [this.sandbox.id]);
				this.hideBodyMask();
			},

			/**
			 * Subscribes on messages of the sandbox.
			 * @protected
			 */
			subscribeSandboxEvents: function() {
				var subscribersIds = this.getSaveRecordMessagePublishers();
				var moduleIds = this.getModuleIds();
				var openCardSubscribers = this.Terrasoft.deepClone(subscribersIds);
				openCardSubscribers.push(this.getLookupModuleId());
				openCardSubscribers = openCardSubscribers.concat(moduleIds);
				var saveRecordSubscribers = this.Terrasoft.deepClone(subscribersIds);
				saveRecordSubscribers = saveRecordSubscribers.concat(moduleIds);
				var rightsModuleId = this.getRightsModuleId();
				var actionsDashboardModuleId = this.getModuleId("ActionsDashboardModule");
				var dcmActionsDashboardModuleId = this.getModuleId("DcmActionsDashboardModule");
				var sandbox = this.sandbox;
				var sandboxId = sandbox.id;
				sandbox.subscribe("OpenCard", this.openCardInChain, this, openCardSubscribers);
				sandbox.subscribe("GetCardState", this.getCardState, this, subscribersIds);
				sandbox.subscribe("IsCardChanged", this.isChanged, this, subscribersIds);
				sandbox.subscribe("SaveRecord", this.save, this, saveRecordSubscribers);
				sandbox.subscribe("GridRowChanged", this.onGridRowChanged, this, [sandboxId]);
				sandbox.subscribe("GetRecordInfo", this.getRecordInfo, this, [rightsModuleId]);
				sandbox.subscribe("UpdateCardHeader", this.initHeader, this, [sandboxId]);
				sandbox.subscribe("OnCardAction", this.onCardAction, this, [sandboxId]);
				sandbox.subscribe("CanBeDestroyed", this.onCanBeDestroyed, this);
				sandbox.subscribe("BeforeDestroying", this.onBeforeDestroying, this);
				sandbox.subscribe("CanChangeHistoryState", this.getCanChangeHistoryState, this);
				sandbox.subscribe("ValidateCard", this.onValidateCard, this, [actionsDashboardModuleId,
					dcmActionsDashboardModuleId, ...subscribersIds]);
				sandbox.subscribe("ReloadCard", this.onReloadCard, this,
					[actionsDashboardModuleId, dcmActionsDashboardModuleId]);
				sandbox.subscribe("IsEntityChanged", this.isEntityChanged, this,
					[actionsDashboardModuleId, dcmActionsDashboardModuleId]);
				this.subscribeDetailsEvents();
				sandbox.subscribe("GetMiniPageMasterEntityInfo", this.onGetMiniPageMasterEntityInfo, this,
					[sandbox.id]);
				sandbox.subscribe("UpdateParentLookupDisplayValue", this.onUpdateParentLookupDisplayValue, this);
				sandbox.subscribe("ReloadDataOnRestore", this.onReloadDataOnRestore, this);
				this.subscribeModulesEvents();
			},

			/**
			 * UpdateParentLookupDisplayValue message handler.
			 * @protected
			 */
			onReloadDataOnRestore: function () {
				this.set("EntityReloadScheduled", true);
			},

			/**
			 * UpdateParentLookupDisplayValue message handler
			 * @protected
			 * @param {Object} config Update lookup value config.
			 * @param {Guid} config.value Child lookup primary column value.
			 * @param {String} config.displayValue Child lookup primary display column value.
			 * @param {String} config.referenceSchemaName Lookup column reference schema name.
			 */
			onUpdateParentLookupDisplayValue: function(config) {
				Terrasoft.each(this.columns, function(column) {
					var value = this.get(column.name);
					if (column.referenceSchemaName === config.referenceSchemaName
						&& (value && value.value) === config.value) {
						value.displayValue = config.displayValue;
						this.set(column.name, value);
					}
				}, this);
			},

			/**
			 * Updates parent record lookup display value.
			 * @protected
			 */
			updateParentLookupDisplayValue: function() {
				this.sandbox.publish("UpdateParentLookupDisplayValue", {
					referenceSchemaName: this.getEntitySchemaName(),
					displayValue: this.getPrimaryDisplayColumnValue(),
					value: this.getPrimaryColumnValue()
				});
			},

			/**
			 * Returns values of the ViewModel parameters.
			 * @param {Array} parameters Names of the parameters.
			 * @return {Object} Values of the parameters.
			 */
			getParameters: function(parameters) {
				var result = {};
				if (!Ext.isArray(parameters)) {
					return result;
				}
				Terrasoft.each(parameters, function(value) {
					result[value] = this.get(value);
				}, this);
				return result;
			},

			/**
			 * Sets parameters of ViewModel.
			 * @param {Object} parameters Values of the parameters.
			 */
			setParameters: function(parameters) {
				if (!Ext.isObject(parameters)) {
					return;
				}
				Terrasoft.each(parameters, function(value, key) {
					this.set(key, value);
				}, this);
			},

			/**
			 * Returns information about current record and entity schema.
			 * @protected
			 * @return {Object} Information about current record and entity schema.
			 */
			getRecordInfo: function() {
				var entitySchema = this.entitySchema;
				return {
					entitySchemaName: entitySchema.name,
					entitySchemaCaption: entitySchema.caption,
					primaryColumnValue: this.getPrimaryColumnValue(),
					primaryDisplayColumnValue: this.get(entitySchema.primaryDisplayColumnName)
				};
			},

			/**
			 * Returns information about current page operation.
			 * @protected
			 * @return {Object} Information about page operation.
			 */
			getCardState: function() {
				return {
					state: this.get("Operation")
				};
			},

			/**
			 * Publish messages after entity column changed.
			 * @private
			 * @param {String} columnName Column name.
			 * @param {Object} columnValue Column value.
			 */
			entityColumnChanged: function(columnName, columnValue) {
				var moduleNames = Ext.Object.getKeys(this.modules);
				var detailNames = Ext.Object.getKeys(this.details);
				var detailIds = detailNames.map(this.getDetailId, this);
				var modulesIds = moduleNames.map(this.getModuleId, this);
				this.sandbox.publish("EntityColumnChanged", {
					columnName: columnName,
					columnValue: columnValue
				}, detailIds);
				this.sandbox.publish("GetEntityColumnChanges", {
					columnName: columnName,
					columnValue: columnValue
				}, modulesIds);
				this.updatePageHeaderCaption(columnName);
			},

			/**
			 * Returns the ID of the module lookup page.
			 * @return {String} ID of the module lookup page.
			 */
			getLookupModuleId: function() {
				return this.sandbox.id + "_LookupPage";
			},

			/**
			 * ########## ###### ############### ########, ########### ######### SaveRecord
			 * @return {Array} ###### ###############
			 */
			getSaveRecordMessagePublishers: function() {
				var detailNames = Ext.Object.getKeys(this.details);
				return detailNames.map(this.getDetailId, this);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#openCardInChain
			 * @override
			 */
			openCardInChain: function(config) {
				if (this.sandbox.publish("OpenCardInChain", config)) {
					return;
				}
				this.callParent(arguments);
			},

			/**
			 * ############ ######### ###### ####### # ###### ########### ############# ####### # ########.
			 * @protected
			 * @param {Object} config ############ ########.
			 * @param {String} config.schemaName ######## ##### ###### #######.
			 * @param {Terrasoft.ConfigurationEnums.CardOperation} config.operation ### ########.
			 * @param {String} config.primaryColumnValue ############# ######### ######.
			 * @return {Boolean} ########## true, #### ### ##### ###### ######### # ###### ####### #####.
			 */
			onGridRowChanged: function(config) {
				if (config.schemaName && config.schemaName !== this.name) {
					return false;
				}
				this.set("Operation", config.operation);
				this.set("PrimaryColumnValue", config.primaryColumnValue);
				this.set("CanEditResponse", null);
				this.unsubscribeOnColumnsChange();
				this.reloadEntity();
				return true;
			},

			/**
			 * Merge array of default values with already existed default values.
			 * @protected
			 * @param {Object[]} defaultValues Array of new default values.
			 */
			mergeDefaultValues: function(defaultValues) {
				if (this.Ext.isEmpty(defaultValues)) {
					return;
				}
				defaultValues = this.Terrasoft.deepClone(defaultValues);
				var currentDefaultValues = this.get("DefaultValues");
				if (this.Ext.isEmpty(currentDefaultValues)) {
					this.set("DefaultValues", defaultValues);
					return;
				}
				this.Terrasoft.each(currentDefaultValues, function(currentDefaultValue) {
					var searchResult = this.Terrasoft.findItem(defaultValues, {name: currentDefaultValue.name});
					if (!searchResult) {
						defaultValues.push(currentDefaultValue);
					}
				}, this);
				this.set("DefaultValues", defaultValues);
			},

			/**
			 * Handler for ReloadCard message. Reloads card entity data.
			 * @param {Object[]} defaultValues Default values array.
			 * @return {Boolean} Returns true, value used to notify caller that message was processed.
			 */
			onReloadCard: function(defaultValues) {
				if (this.destroyed) {
					return true;
				}
				const primaryColumnValue = this.getPrimaryColumnValue();
				this.set("PrimaryColumnValue", primaryColumnValue);
				this.mergeDefaultValues(defaultValues);
				this.Terrasoft.chain(
					this.reloadEntity,
					this.initTabs,
					this);
				return true;
			},

			/**
			 * ######### ############ ###### ###### ########.
			 * @protected
			 * @param {Function} callback ####### ######### ######.
			 * @param {Object} scope ######## ####### ######### ######.
			 */
			reloadEntity: function(callback, scope) {
				Terrasoft.chain(
					this.initEntity,
					function(next) {
						this.onEntityInitialized();
						this.actualizeDcmActionsDashboard(next, this);
					},
					function() {
						this.updateDetails();
						this.sandbox.publish("CardRendered", null, [this.sandbox.id]);
						this.hideBodyMask();
						Ext.callback(callback, scope);
					},
					this
				);
			},

			/**
			 * Handles saved event for the card opened by a process.
			 * @private
			 * @param {Boolean} [needProcessModeToBackHistoryState=false] Indicates that BackHistoryState should be
			 * published only in case of process mode.
			 */
			onProcessCardSaved: function(needProcessModeToBackHistoryState) {
				if (this.tryShowNextPrcElCard()) {
					return;
				}
				const isProcessMode = this.get("IsProcessMode");
				if (needProcessModeToBackHistoryState && !isProcessMode) {
					return;
				}
				if (Terrasoft.isAngularHost && isProcessMode) {
					return
				}
				if (!this.destroyed) {
					this._closePage(true);
				}
			},

			/**
			 * @private
			 */
			_reloadDashboardItems() {
				if (Terrasoft.Features.getIsDisabled("DisableReloadDashboardItemsPTP")) {
					this.sandbox.publish("ReloadDashboardItemsPTP", null, [
						this.getModuleId("ActionsDashboardModule"),
						this.getModuleId("DcmActionsDashboardModule")
					]);
				} else {
					this.sandbox.publish("ReloadDashboardItems");
				}
			},

			/**
			 * Processes record saved.
			 * @protected
			 * @param {Object} response Server on saved response.
			 * @param {Object} config Saving config.
			 */
			onSaved: function(response, config) {
				Terrasoft.ProcessExecutionDataCollector.add(response.processExecutionData);
				this.hideBodyMask();
				if (!this.get("NextPrcElReady")) {
					this.set("NextPrcElReady", response.nextPrcElReady);
				}
				const updateConfig = this.getUpdateDetailOnSavedConfig();
				this.sandbox.publish("UpdateDetail", updateConfig, [this.sandbox.id]);
				this._reloadDashboardItems();
				if (config && config.isSilent) {
					this.onSilentSaved(response, config);
				} else {
					this.sendSaveCardModuleResponse(response.success);
					if (this.get("IsInChain")) {
						this.updateParentLookupDisplayValue();
						this.onProcessCardSaved();
					} else {
						if (this.isNewMode()) {
							this.onCloseCardButtonClick();
						} else {
							this.onProcessCardSaved(true);
						}
					}
				}
				this.set("Operation", Terrasoft.ConfigurationEnums.CardOperation.EDIT);
				this.$PrimaryColumnValue = response && response.id || this.$PrimaryColumnValue;
				if (!this.destroyed) {
					this.updateButtonsVisibility(false, {force: true});
				}
				this.set("IsChanged", this.isChanged());
			},

			/**
			 * Returns config for UpdateDetail message.
			 * @protected
			 * @return {Object} Config for message.
			 */
			getUpdateDetailOnSavedConfig: function() {
				var updateConfig = {
					primaryColumnValue: this.getPrimaryColumnValue()
				};
				return updateConfig;
			},

			/**
			 * @inheritdoc Terrasoft.EntityDataModel#getSaveQuery#getSaveQuery
			 * @override
			 */
			getSaveQuery: function() {
				const saveQuery = this.callParent(arguments);
				if (saveQuery) {
					saveQuery.publishProcessExecutionData = false;
				}
				return saveQuery;
			},

			/**
			 * Show next process page of current element.
			 * @protected
			 * @param {Boolean} isSilentSave Parameter, which indicates the silent save of entity.
			 * @return {Boolean} False if it is silent save, page not in process mode,
			 * page not in chain or where is no next process element. True - if next process element found.
			 */
			tryShowNextPrcElCard: function(isSilentSave) {
				if (isSilentSave) {
					this.log(Ext.String.format(this.Terrasoft.Resources.ObsoleteMessages.MethodFormatObsolete,
						"tryShowNextPrcElCard", "isSilentSave", ""));
					return false;
				}
				if (!this.get("IsInChain") || !this.get("IsProcessMode")) {
					return this._tryShowProcessCard({
						closeCurrentCard: this.isNewMode() ? true : null
					});
				}
				return false;
			},

			/**
			 * Tries to open process page.
			 * @param {Object} config
			 * @private
			 * @return {Boolean} False if it is silent save, page not in process mode,
			 * page not in chain or where is no next process element. True - if next process element found.
			 */
			_tryShowProcessCard: function(config) {
				const message = {
					nextPrcElReady: this.get("NextPrcElReady"),
					showNextPrcEl: true,
					forceShowNextPrcElCard: !this.get("IsInChain"),
					primaryColumnValue: this.getPrimaryColumnValue()
				};
				if (config) {
					message.forceReplaceHistoryState = config.closeCurrentCard;
				}
				message.entitySaved = true;
				return this.showProcessPage(message);
			},

			/**
			 * Handles CanChangeHistoryState message.
			 * @private
			 * @param {Object} options Message data.
			 * @param {Boolean} options.result Indicates if can change history state.
			 */
			getCanChangeHistoryState: function(options) {
				if (this.get("IsProcessMode") && !this.get("IsInChain")) {
					options.result = options.result && this.get("CanChangeHistoryState");
				}
			},

			/**
			 * Processes silent save of record.
			 * @protected
			 * @param {Object} response Response from server on save record.
			 * @param {Object} config Saved params.
			 */
			onSilentSaved: function(response, config) {
				const callback = config.callback;
				if (callback) {
					callback.call(config.scope || this, response, config);
				}
				if (!callback || config.callBaseSilentSavedActions) {
					this.sandbox.publish("CardSaved", response, config.messageTags);
					this.sendSaveCardModuleResponse(response.success);
				}
			},

			/**
			 * Sends card saved message.
			 * @protected
			 * @param {Boolean} success Is saved success flag.
			 * @return {Boolean} Card module response result.
			 */
			sendSaveCardModuleResponse: function(success) {
				var primaryColumnValue = this.getPrimaryColumnValue();
				var infoObject = {
					action: this.get("Operation"),
					success: success,
					primaryColumnValue: primaryColumnValue,
					uId: primaryColumnValue,
					primaryDisplayColumnValue: this.get(this.primaryDisplayColumnName),
					primaryDisplayColumnName: this.primaryDisplayColumnName,
					isInChain: this.get("IsInChain"),
					entitySchemaName: this.entitySchemaName,
					primaryColumnName: this.primaryColumnName
				};
				this.appendRelatedLookupColumnsResponse(infoObject);
				return this.sandbox.publish("CardModuleResponse", infoObject, [this.sandbox.id]);
			},

			/**
			 * Handler changes card property.
			 * @protected
			 */
			initCardPropertyUpdateHandler: function() {
				var detailsIds = this.getSaveRecordMessagePublishers();
				var modulesIds = this.getModuleIds();
				var subscribesIds = modulesIds.concat(detailsIds);
				subscribesIds.push(this.sandbox.id);
				this.sandbox.subscribe("UpdateCardProperty", function(config) {
					if (config) {
						var currentValue = this.get(config.key);
						var newPropertyValue = config.value;
						var value = this._canApplyCardPropertyValues(currentValue, newPropertyValue)
							? this.Ext.apply(currentValue, newPropertyValue)
							: config.value;
						this.set(config.key, value, config.options);
					}
				}, this, subscribesIds);
			},

			/**
			 * Validate UpdateCardProperty parameters for update card property method
			 * @private
			 * @param {Object} currentPropertyValue current attribute value
			 * @param {Object} newPropertyValue new attribute value
			 * @return {Boolean} validation result
			 */
			_canApplyCardPropertyValues: function(currentPropertyValue, newPropertyValue) {
				return this.Ext.isObject(currentPropertyValue) &&
							this.Ext.isObject(newPropertyValue) &&
							currentPropertyValue.value === newPropertyValue.value;
			},

			/**
			 * Returns collection actions card.
			 * @protected
			 * @return {Terrasoft.BaseViewModelCollection} Collection actions card.
			 */
			getActions: function() {
				var actionMenuItems = this.Ext.create("Terrasoft.BaseViewModelCollection");
				return actionMenuItems;
			},

			/**
			 * Initializes card actions.
			 * @protected
			 */
			initActionButtonMenu: function() {
				this.publishPropertyValueToSection("IsCardInEditMode", this.isEditMode());
				var actionMenuItems = this.getActions();
				var actionsButtonVisible = !actionMenuItems.isEmpty();
				this.set("ActionsButtonVisible", actionsButtonVisible);
				this.set("ActionsButtonMenuItems", actionMenuItems);
				this.sandbox.publish("GetCardActions", actionMenuItems, [this.sandbox.id]);
			},

			/**
			 * ############## ###### #### ###### "###"
			 * @protected
			 */
			initViewOptionsButtonMenu: function() {
				var viewOptions = this.getViewOptions();
				this.set("ViewOptionsButtonMenuItems", viewOptions);
				this.sandbox.publish("GetCardViewOptions", viewOptions, [this.sandbox.id]);
			},

			/**
			 * ########## ######### ###### "###".
			 * @return {Boolean} ######### ###### "###".
			 */
			getViewOptionsButtonVisible: function() {
				var viewOptionsButtonMenuItems = this.get("ViewOptionsButtonMenuItems");
				var menuUtilities = this.Ext.create("Terrasoft.MenuUtilities");
				return menuUtilities.getMenuVisible(viewOptionsButtonMenuItems, this);
			},

			/**
			 * ############# ######## ########### ###### #########, ###### # #######. ##### ######### #######
			 * ######### ######, #### ###### ##########, ### ## ##########. ### ############### ####### ######
			 * ############ ################ ###### # ########## force.
			 * @private
			 * @param {Boolean} isVisible ####### ########### ######.
			 * @param {Object} config ################ ######.
			 * @param {Boolean} config.force #### ### ############### ######### ######### ######.
			 */
			updateButtonsVisibility: function(isVisible, config) {
				if (this.destroyed) {
					return;
				}
				var isProcessMode = this.get("IsProcessMode");
				var showDiscardButton = isVisible;
				var showSaveButton = isVisible;
				if (!(config && config.force)) {
					showDiscardButton = showDiscardButton || this.get("ShowDiscardButton");
					showSaveButton = showSaveButton || this.get("ShowSaveButton");
				}
				this.set("ShowDiscardButton", showDiscardButton);
				this.set("ShowSaveButton", showSaveButton || isProcessMode === true);
				this.set("ShowCloseButton", !showSaveButton || (isProcessMode && !showDiscardButton));
			},

			/**
			 * ######### ######### ReloadDetail # ###### ######### ###### # ######### ##########
			 * @protected
			 * @deprecated ########## ###### ## ############## ###### # #######.
			 * @param {String} detailName ######## ######
			 * @param {Object} args #########
			 */
			reloadDetail: function(detailName, args) {
				this.log(Ext.String.format(this.Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage,
					"reloadDetail", "loadDetail"));
				this.Terrasoft.each(this.entitySchemaInfo.details, function(detailInfo) {
					if (detailInfo.name === detailName) {
						this.sandbox.publish("ReloadDetail", args, [detailInfo.moduleId]);
					}
				});
			},

			/**
			 * ############ ####### ###### "#####", ########## ## ####### ## ### #####
			 * @protected
			 */
			onBackButtonClick: function() {
				this._closePage();
			},

			/**
			 * @inheritdoc Terrasoft.BaseEntityPage#validateSaveEntityResponse
			 * @override
			 */
			validateSaveEntityResponse: function(response, callback, scope) {
				if (this.validateResponse(response)) {
					this.cardSaveResponse = response;
					callback.call(scope || this);
				} else {
					this._reloadDashboardItems();
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseEntityPage#save
			 * @override
			 */
			save: function(config) {
				const isSilentSave = config?.isSilent;
				this.callParent([function() {
					this.Terrasoft.chain(this.saveDetailsInChain, function(next) {
						this._sendCompleteExecutionRequestInChain(isSilentSave, next);
					}, function() {
						this.onSaved(this.cardSaveResponse, config);
						this.cardSaveResponse = null;
						delete this.cardSaveResponse;
					}, this);
				}, this]);
			},

			/**
			 * Open rights setting page.
			 * @protected
			 */
			editRights: function() {
				if (this.isNewMode()) {
					var config = {
						callback: this.editRightsOnSavedCallback,
						isSilent: true
					};
					this.save(config);
				} else {
					this.openRightsModule();
				}
			},

			/**
			 * Load rights module.
			 * @protected
			 */
			openRightsModule: function() {
				this.showBodyMask();
				this.sandbox.loadModule("Rights", {
					renderTo: "centerPanel",
					id: this.getRightsModuleId(),
					keepAlive: true
				});
			},

			/**
			 * Generates id for Right module.
			 * @protected
			 * @return {String} Rights module id.
			 */
			getRightsModuleId: function() {
				return this.sandbox.id + "_Rights";
			},

			/**
			 * ######### ######## ######### #### ####### ##### ########## ##### ######.
			 * @private
			 * @param {Object} response ######### ########## ######.
			 */
			editRightsOnSavedCallback: function(response) {
				this.openRightsModule();
				this.sendSaveCardModuleResponse(response && response.success);
			},

			/** Opens change log.
			 * @protected
			 */
			openChangeLog: function() {
				changeLogUtilities.openRecordChangeLog(this.entitySchema.uId, this.getPrimaryColumnValue());
			},

			/**
			 * @inheritdoc Terrasoft.BaseEntityPage#asyncValidate
			 * @override
			 */
			asyncValidate: function(callback, scope) {
				var resultObject = {
					success: this.validate()
				};
				if (!resultObject.success) {
					resultObject.message = this.getValidationMessage();
					this.Ext.callback(callback, scope, [resultObject]);
					return;
				}
				this.callParent(arguments);
			},

			/**
			 * ########## ######### #######. ######## ######### ##### #### ####### ########, #### ####### #
			 * ######### ### ####### ######.
			 * @protected
			 * @param {Object} column ###### #######.
			 * @return {String} ######### #######.
			 */
			getColumnCaption: function(column) {
				return this.getAttributePropertyValue(column, "caption") || "";
			},

			/**
			 * ############## ######### ######## ###### ### Tabs.
			 * @protected
			 */
			initTabs: function() {
				var activeTabName = this.get("ActiveTabName")
				if (activeTabName) {
					this.set(activeTabName, true);
					return;
				}
				var defaultTabName = this.getDefaultTabName();
				if (defaultTabName) {
					this.setActiveTab(defaultTabName);
					this.set(defaultTabName, true);
				}
			},

			/**
			 * ########## ######## ####### ## #########.
			 * ####### ######## #### ######## ######## {@link Terrasoft.BasePageV2#DefaultTabName DefaultTabName},
			 * #### ######## ###### ####### # ######### {@link Terrasoft.BasePageV2#TabsCollection TabsCollection}
			 * @protected
			 * @return {String|null} ######## ####### ## #########.
			 */
			getDefaultTabName: function() {
				var tabsCollection = this.get("TabsCollection");
				if (!tabsCollection || tabsCollection.isEmpty()) {
					return null;
				}
				var defaultTabName = this.get("DefaultTabName");
				if (!defaultTabName) {
					defaultTabName = this.getDefaultValueByName("DefaultTabName");
					if (Ext.isEmpty(defaultTabName)) {
						var firstTab = tabsCollection.getByIndex(0);
						defaultTabName = firstTab.get("Name");
					}
					if (!Ext.isEmpty(defaultTabName)) {
						this.set("DefaultTabName", defaultTabName);
					}
				}
				return defaultTabName;
			},

			/**
			 * Checks overridden getHeader method.
			 * @private
			 * @return {Boolean} Overridden getHeader method flag.
			 */
			isOverridenGetHeaderMethod: function() {
				return !Ext.String.startsWith(this.getHeader.$owner.$className, "Terrasoft.model.BasePageV2");
			},

			/**
			 * Initializes page header caption.
			 * @protected
			 */
			initHeader: function() {
				if (this.get("IsSeparateMode")) {
					if (this.getIsFeatureEnabled("OldUI")) {
						var caption = this.getHeader();
						this.sandbox.publish("InitDataViews", {
							caption: caption,
							markerValue: caption
						});
					} else {
						var defaultValues = this.get("DefaultValues") || this.getDefaultValues();
						var markerValue = this.isOverridenGetHeaderMethod() ? this.getHeader() : this.getPageHeader();
						if (this.Ext.isEmpty(defaultValues) || this.getModuleStructure(this.entitySchemaName)) {
							this.sandbox.publish("InitDataViews", {
								caption: this.getHeader(),
								markerValue: markerValue
							});
						} else {
							this.sandbox.publish("InitDataViews", {markerValue: markerValue});
						}
					}
					this.initContextHelp();
				}
			},

			/**
			 * Initializes caption for the page header.
			 * @protected
			 */
			initHeaderCaption: this.Terrasoft.emptyFn,

			/**
			 * Initializes page profile.
			 * @protected
			 */
			initControlGroupsProfile: function() {
				var profile = this.getProfile();
				if (profile && profile.controlGroups) {
					this.Terrasoft.each(profile.controlGroups, function(controlGroup, controlGroupId) {
						var parameterName = "is" + controlGroupId + "Collapsed";
						this.set(parameterName, controlGroup.isCollapsed);
					}, this);
				}
			},

			/**
			 * Initializes sign that the section can be customized.
			 * @protected
			 */
			initCanCustomize: function() {
				var menuItems = this.get("ViewOptionsButtonMenuItems");
				var hasMenuItem = menuItems && menuItems.contains(this.sectionWizardMenuItemId);
				if (menuItems && !hasMenuItem) {
					var canCustomize = this.get("CanCustomize");
					this.set("CanCustomize", canCustomize && hasMenuItem);
				}
			},

			/**
			 * @inheritdoc Terrasoft.ContextHelpMixin#getContextHelpId
			 * @override
			 */
			getContextHelpId: function() {
				return this.get("ContextHelpId");
			},

			/**
			 * @inheritdoc Terrasoft.ContextHelpMixin#getContextHelpCode
			 * @override
			 */
			getContextHelpCode: function() {
				return this.name;
			},

			/**
			 * Init card actions handlers
			 * @protected
			 */
			initCardActionHandler: function() {
				this.on("change:IsChanged", function(model, value) {
					this.updateButtonsVisibility(value);
				}, this);
				this.on("change:ShowSaveButton", function(model, value) {
					this.publishPropertyValueToSection("ShowSaveButton", value);
				}, this);
				this.on("change:ShowDiscardButton", function(model, value) {
					this.publishPropertyValueToSection("ShowDiscardButton", value);
					this.set("ShowCloseButton", !value);
				}, this);
				this.on("change:Operation", function() {
					this.publishPropertyValueToSection("IsCardInEditMode", this.isEditMode());
				}, this);
				this.on("change:ShowCloseButton", function(model, value) {
					this.publishPropertyValueToSection("ShowCloseButton", value);
				}, this);
				this.on("change:EntryPointsCount", function(model, value) {
					this.publishPropertyValueToSection("EntryPointsCount", value);
				}, this);
			},

			/**
			 * ######### ######### CardChanged, ####### ####### ####### ## ######### ######## # ########.
			 * @protected
			 * @param {String} key ### #########.
			 * @param {*} value ######## #########.
			 */
			publishPropertyValueToSection: function(key, value) {
				this.sandbox.publish("CardChanged", {
					key: key,
					value: value
				}, [this.sandbox.id]);
			},

			/**
			 * Returns page header.
			 * @protected
			 * @return {String} Page header.
			 */
			getHeader: function() {
				return this.getSectionCaption() || this.getPageHeader();
			},

			/**
			 * Returns typed page header.
			 * @protected
			 * @return {String} Typed page header.
			 */
			getPageHeader: function() {
				var typeColumnName = this.get("TypeColumnName");
				var typeName = typeColumnName && this.get(typeColumnName);
				return (typeName) ? typeName.displayValue : this.entitySchema && this.entitySchema.caption;
			},

			/**
			 * Sets active tab.
			 * @protected
			 * @param {String} tabName Tab name.
			 */
			setActiveTab: function(tabName) {
				this.set("ActiveTabName", tabName);
			},

			/**
			 * ############ ####### ######### ####### Tabs.
			 * @protected
			 * @param {Terrasoft.BaseViewModel} activeTab ######### #######.
			 */
			activeTabChange: function(activeTab) {
				var activeTabName = activeTab.get("Name");
				var tabsCollection = this.get("TabsCollection");
				tabsCollection.eachKey(function(tabName, tab) {
					var tabContainerVisibleBinding = tab.get("Name");
					this.set(tabContainerVisibleBinding, false);
				}, this);
				this.set(activeTabName, true);
			},

			/**
			 * @inheritdoc Terrasoft.model.BaseViewModel#onLookupDataLoaded
			 * @override
			 */
			onLookupDataLoaded: function(config) {
				this.callParent(arguments);
				this.mixins.LookupQuickAddMixin.onLookupDataLoaded.call(this, config);
			},

			/**
			 * ########## ######## ## #########, ############ # ##### ###### ########## #######.
			 * @param columnName ### #######.
			 */
			getLookupValuePairs: Terrasoft.emptyFn,

			/**
			 * ########## ######## ##### ####### ########### ####.
			 * @protected
			 * @param {Object} args #########.
			 * @param {String} columnName ######## #######.
			 * @return {String} ######## ##### ########### ####.
			 */
			getLookupEntitySchemaName: function(args, columnName) {
				if (args.schemaName) {
					return args.schemaName;
				}
				var entityColumn = this.findEntityColumn(columnName) || this.getColumnByName(columnName);
				return entityColumn.referenceSchemaName;
			},

			/**
			 * @inheritdoc Terrasoft.LookupQuickAddMixin#getLookupListConfig
			 * @override
			 */
			getLookupListConfig: function() {
				return this.mixins.LookupQuickAddMixin.getLookupListConfig.apply(this, arguments);
			},

			/**
			 * Subscribes for modules events.
			 * @protected
			 */
			subscribeModulesEvents: function() {
				this.Terrasoft.each(this.modules, this.subscribeModuleEvents, this);
			},

			/**
			 * Subscribes for module events.
			 * @protected
			 * @param {Object} moduleConfig Module configuration.
			 * @param {String} moduleName Module name.
			 */
			subscribeModuleEvents: function(moduleConfig, moduleName) {
				var moduleId = this.getModuleId(moduleName);
				var sandbox = this.sandbox;
				sandbox.subscribe("GetColumnsValues", this.onGetColumnsValues, this, [moduleId]);
				sandbox.subscribe("GetLookupQueryFilters", this.getLookupQueryFilters, this, [moduleId]);
				sandbox.subscribe("GetColumnInfo", this.onGetColumnInfo, this, [moduleId]);
				sandbox.subscribe("GetEntityInfo", this.onGetEntityInfo, this, [moduleId]);
			},

			/**
			 * Subscribes for detail events.
			 * @protected
			 * @param {Object} detailConfig Detail configuration.
			 * @param {String} detailName Detail name.
			 */
			subscribeDetailEvents: function(detailConfig, detailName) {
				this.callParent(arguments);
				var detailId = this.getDetailId(detailName);
				var sandbox = this.sandbox;
				sandbox.subscribe("GetColumnsValues", this.onGetColumnsValues, this, [detailId]);
				sandbox.subscribe("GetLookupQueryFilters", this.getLookupQueryFilters, this, [detailId]);
				sandbox.subscribe("GetLookupListConfig", this.getLookupListConfig, this, [detailId]);
				sandbox.subscribe("GetEntityInfo", this.onGetEntityInfo, this, [detailId]);
				sandbox.subscribe("GetPageTips", this.onGetPageTips, this, [detailId]);
			},

			/**
			 * Handler event GetColumnsValues. Returns columns value of object.
			 * @param {String[]} columnNames Array identifiers columns.
			 * @private
			 * @return {Object} Column value.
			 */
			onGetColumnsValues: function(columnNames) {
				var columnValues = {};
				this.Terrasoft.each(columnNames, function(columnName) {
					columnValues[columnName] = this.get(columnName);
				}, this);
				return columnValues;
			},

			/**
			 * Returns column info.
			 * @param {String} columnName Column name.
			 * @return {Object} Column info.
			 */
			onGetColumnInfo: function(columnName) {
				return this.getColumnByName(columnName);
			},

			/**
			 * Returns object info.
			 * @private
			 * @return {Object} Object info.
			 */
			onGetEntityInfo: function() {
				var entityInfo = null;
				var entitySchema = this.entitySchema;
				if (entitySchema) {
					entityInfo = {
						entitySchemaUId: entitySchema.uId,
						entitySchemaName: entitySchema.name
					};
					if (this.get("IsEntityInitialized")) {
						entityInfo = this.Ext.apply(entityInfo, {
							primaryDisplayColumnValue: this.get(entitySchema.primaryDisplayColumnName),
							primaryColumnValue: this.getPrimaryColumnValue()
						});
					}
				}
				return entityInfo;
			},

			/**
			 * Returns master entity for minipage.
			 * @protected
			 * @return {Object} Object info.
			 */
			onGetMiniPageMasterEntityInfo: function() {
				var miniPageMasterEntityInfo = null;
				var entitySchema = this.entitySchema;
				if (entitySchema) {
					miniPageMasterEntityInfo = {
						entitySchemaName: entitySchema.name
					};
					if (this.get("IsEntityInitialized")) {
						miniPageMasterEntityInfo.primaryColumnValue = this.getPrimaryColumnValue();
					}
				}
				return miniPageMasterEntityInfo;
			},

			/**
			 * Returns entity connections item view config.
			 * @protected
			 * @return {Object}
			 */
			onGetPageTips: Terrasoft.emptyFn,

			/**
			 * @inheritdoc Terrasoft.LookupQuickAddMixin#getLookupQueryFilters
			 * @override
			 */
			getLookupQueryFilters: function() {
				return this.mixins.LookupQuickAddMixin.getLookupQueryFilters.apply(this, arguments);
			},

			/**
			 * @inheritdoc Terrasoft.BaseViewModel#getEntitySchemaQuery
			 * @override
			 */
			getEntitySchemaQuery: function() {
				var esq = this.callParent(arguments);
				this.addRelatedEntityColumns(esq);
				this.addProcessEntryPointColumn(esq);
				return esq;
			},

			/**
			 * @inheritdoc BaseViewModel#setColumnValues
			 * @override
			 */
			setColumnValues: function(entity) {
				this.setLookupColumnValues(entity);
				this.setEntryPointsCount(entity);
				this.callParent(arguments);
			},

			/**
			 * @inheritdoc BaseViewModel#setCopyColumnValues
			 * @override
			 */
			setCopyColumnValues: function(entity) {
				this.setLookupColumnValues(entity);
				this.callParent(arguments);
			},

			/**
			 * Adds type column to lookup query.
			 * @protected
			 * @param {Terrasoft.EntitySchemaQuery} esq Entity schema query.
			 * @param {String} columnName Lookup column name.
			 */
			addTypeColumnToLookupQuery: function(esq, columnName) {
				var lookupColumn = this.getColumnByName(columnName);
				if (lookupColumn && lookupColumn.referenceSchemaName) {
					var entitySchemaConfig = this.getModuleStructure(lookupColumn.referenceSchemaName);
					var attribute = entitySchemaConfig && entitySchemaConfig.attribute;
					var typeColumnName = attribute || null;
					if (typeColumnName && !esq.columns.contains(typeColumnName)) {
						esq.addColumn(typeColumnName);
					}
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseViewModel#getLookupQuery
			 * @override
			 */
			getLookupQuery: function(filterValue, columnName) {
				var esq = this.callParent(arguments);
				this.addTypeColumnToLookupQuery(esq, columnName);
				this.addRelatedColumnsToLookupQuery(esq, columnName);
				this.applyColumnsOrderToLookupQuery(esq, columnName);
				var filterGroup = this.getLookupQueryFilters(columnName);
				esq.filters.addItem(filterGroup);
				return esq;
			},

			/**
			 * Returns the value of the "visibility" tabs for the container.
			 * return {Boolean} Value of the "Visibility" tabs for the container.
			 */
			getTabsContainerVisible: function() {
				return !(this.get("TabsCollection").isEmpty());
			},

			/**
			 * Returns the value of the "visibility" for the item drop-down list printing button.
			 * @param {String} reportId Report ID.
			 * @return {Boolean} Value of the "visibility" for the item drop-down list printing button.
			 */
			getPrintMenuItemVisible: function(reportId) {
				if (this.isNewMode()) {
					return false;
				}
				var reportTypeColumnValue = this.getReportTypeColumnValue(reportId);
				var typeColumnValue = this.getTypeColumnValue(this);
				return (reportTypeColumnValue === typeColumnValue);
			},

			/**
			 * Gets the view of the section.
			 * @return {Terrasoft.Collection} Section view.
			 */
			getDataViews: function() {
				return this.sandbox.publish("GetDataViews", null, [this.sandbox.id]);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#getProfileKey
			 * @override
			 */
			getProfileKey: function() {
				return this.name;
			},

			/**
			 * Run the business process from the list of global processes start button.
			 * @param {Object} tag UId scheme of the business process.
			 */
			runProcess: function(tag) {
				Terrasoft.ProcessModuleUtilities.executeProcess({
					sysProcessId: tag
				});
			},

			/**
			 * Run the business process with parameters.
			 * @param {Object} config Configuration object.
			 * @param {Object} config.sysProcessUId UId scheme of the business process.
			 * @param {Array} config.parameters Process parameters.
			 * @param {Function} config.callback Callback function.
			 * @param {Object} config.scope Callback scope.
			 */
			runProcessWithParameters: function(config) {
				Terrasoft.chain(
					function(next) {
						if (this.isNew) {
							this.save({isSilent: true, callback: next});
						} else {
							next();
						}
					},
					function() {
						config.parameter.parameterValue = this.get(this.entitySchema.primaryColumnName);
						Terrasoft.ProcessModuleUtilities.runProcessWithParameters(config);
					}, this);
			},

			/**
			 * Return marker value of CardContentContainer.
			 * @protected
			 * @return {String} Marker value.
			 */
			getCardContentContainerMarkerValue: function() {
				return this.get("IsEntityInitialized") ? "EntityLoaded" : "EntityLoading";
			},

			/**
			 * @inheritdoc BaseEntityPage#canAutoCleanDependentColumns
			 * @override
			 */
			canAutoCleanDependentColumns: function() {
				return !this.isCopyMode();
			},

			/**
			 * Checks for unsaved data. Change config.result from cache if data is changed and not saved.
			 * @param {String} cacheKey Key of the config object in cache.
			 */
			onCanBeDestroyed: function(cacheKey) {
				var config = this.Terrasoft.ClientPageSessionCache.getItem(cacheKey);
				if (!this.Ext.isObject(config)) {
					return;
				}
				var isChanged = this.isChanged();
				if (isChanged) {
					this.setNotBeDestroyedConfig(config);
				}
			},

			/**
			 * Call before destroying model.
			 * Clear changed values in model.
			 * @protected
			 */
			onBeforeDestroying: function() {
				this.clearChangedValues();
			},

			/**
			 * Set destroy properties to config.
			 * @protected
			 * @param {Object} config Mutable object.
			 */
			setNotBeDestroyedConfig: function(config) {
				var message = this.get("Resources.Strings.PageContainsUnsavedChanges");
				Ext.apply(config, {
					canBeDestroyed: false,
					errorInfo: {
						message: message
					}
				});
			},

			/**
			 * Returns IDs of actions dashboard modules.
			 * @protected
			 * @return {Array}
			 */
			getActionsDashboardModuleIds: function() {
				var actionDashboardModuleNames = ["ActionsDashboardModule", "DcmActionsDashboardModule"];
				return actionDashboardModuleNames.map(function(actionDashboardModuleName) {
					return this.getModuleId(actionDashboardModuleName);
				}, this);
			},

			/**
			 * Showing invalidate message if card not valid.
			 * @return {Boolean} True if card is valid.
			 */
			onValidateCard: function() {
				var isValid = this.validate();
				if (isValid) {
					return true;
				}
				var validateConfig = {
					success: isValid,
					message: this.getValidationMessage()
				};
				return this.validateResponse(validateConfig);
			},

			/**
			 * @inheritDoc BaseViewModel#getDefaultColumnValues
			 * @override
			 */
			getDefaultColumnValues: function(entityColumns, callback, scope, modelName) {
				this.callParent([
					entityColumns,
					function(columns) {
						this.addDefaultLookupColumnsValues(columns, function(enchancedColumns) {
							callback.call(scope, enchancedColumns);
						}, this);
					},
					this,
					modelName
				]);
			},

			// region Methods: Public

			/**
			 * Handles "Discard" button click.
			 * @public
			 * @param {String} [callback] Callback function.
			 * @param {Terrasoft.BaseViewModel} [scope] Callback scope.
			 */
			onDiscardChangesClick: function(callback, scope) {
				if (this.isNew) {
					this._closePage();
					return;
				}
				this.set("IsEntityInitialized", false);
				this.loadEntity(this.getPrimaryColumnValue(), function() {
					this.updateButtonsVisibility(false, {
						force: true
					});
					this.initMultiLookup();
					this.set("IsEntityInitialized", true);
					this.discardDetailChange();
					this.updatePageHeaderCaption();
					this.Ext.callback(callback, scope);
				}, this);
				if (this.get("ForceUpdate")) {
					this.set("ForceUpdate", false);
				}
			}

			// endregion
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "CardContentWrapper",
				"values": {
					"id": "CardContentWrapper",
					"selectors": {"wrapEl": "#CardContentWrapper"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["card-content-container"],
					"items": [],
					"markerValue": {
						"bindTo": "IsEntityInitialized",
						"bindConfig": {
							"converter": "getCardContentContainerMarkerValue"
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "ActionButtonsContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"visible": {"bindTo": "IsSeparateMode"},
					"wrapClass": ["actions-container"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "LeftModulesContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"values": {
					"id": "LeftModulesContainer",
					"selectors": {"wrapEl": "#LeftModulesContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["left-modules-container"],
					"visible": {"bindTo": "IsLeftModulesContainerVisible"},
					"items": [],
					"markerValue": "LeftModulesContainer"
				}
			},
			{
				"operation": "insert",
				"name": "CardContentContainer",
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"values": {
					"id": "CardContentContainer",
					"selectors": {"wrapEl": "#CardContentContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["center-main-container"],
					"items": [],
					"markerValue": "CenterMainContainer"
				}
			},
			{
				"operation": "insert",
				"name": "RecommendationModuleContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"id": "RecommendationModuleContainer",
					"selectors": {"wrapEl": "#RecommendationModuleContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["recommendation-container"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "DcmActionsDashboardModule",
				"parentName": "DcmActionsDashboardContainer",
				"propertyName": "items",
				"values": {
					"classes": {"wrapClassName": ["dcm-actions-dashboard-module"]},
					"visible": {"bindTo": "getIsDcmActionsDashboardModuleVisible"},
					"itemType": Terrasoft.ViewItemType.MODULE
				}
			},
			{
				"operation": "insert",
				"name": "DcmActionsDashboardContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"id": "DcmActionsDashboardContainer",
					"selectors": {"wrapEl": "#DcmActionsDashboardContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["dcm-actions-dashboard-container"],
					"visible": {"bindTo": "getIsDcmActionsDashboardContainerVisible"},
					"items": [],
					"markerValue": "DcmActionsDashboardContainer",
					"domAttributes": {"bindTo": "ActionsDashboardAttributes"}
				}
			},
			{
				"operation": "insert",
				"name": "ActionDashboardContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"id": "ActionDashboardContainer",
					"selectors": {"wrapEl": "#ActionDashboardContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["action-dashboard-container"],
					"visible": {"bindTo": "getIsActionsDashboardContainerVisible"},
					"items": [],
					"markerValue": "ActionDashboardContainer",
					"domAttributes": {"bindTo": "ActionsDashboardAttributes"}
				}
			},
			{
				"operation": "insert",
				"name": "ProfileContainer",
				"parentName": "LeftModulesContainer",
				"propertyName": "items",
				"values": {
					"id": "ProfileContainer",
					"selectors": {"wrapEl": "#ProfileContainer"},
					"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
					"classes": {
						"wrapClassName": ["profile-container"]
					},
					"items": [],
					"markerValue": "ProfileContainer",
					"collapseEmptyRow": true
				}
			},
			{
				"operation": "insert",
				"name": "LeftContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["left-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "RunProcessContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["left-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "RightContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["right-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "SaveButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.SaveButtonCaption"},
					"classes": {"textClass": "actions-button-margin-right"},
					"click": {"bindTo": "save"},
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"visible": {"bindTo": "ShowSaveButton"},
					"tag": "save",
					"markerValue": "SaveButton",
					"hint": {"bindTo": "Resources.Strings.SaveEditButtonHint"}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "DelayExecutionButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.DelayExecutionButtonCaption"},
					"classes": {"textClass": "actions-button-margin-right"},
					"click": {"bindTo": "onDelayExecutionButtonClick"},
					"visible": {"bindTo": "getDelayExecutionButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "DiscardChangesButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.CancelButtonCaption"},
					"classes": {"textClass": "actions-button-margin-right"},
					"click": {"bindTo": "onDiscardChangesClick"},
					"visible": {"bindTo": "ShowDiscardButton"}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "CloseButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"caption": {"bindTo": "Resources.Strings.CloseButtonCaption"},
					"classes": {"textClass": "actions-button-margin-right"},
					"click": {"bindTo": "onCloseClick"},
					"visible": {"bindTo": "ShowCloseButton"}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "actions",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ActionButtonCaption"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"menu": {
						"items": {"bindTo": "ActionsButtonMenuItems"}
					},
					"visible": {"bindTo": "ActionsButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"parentName": "RightContainer",
				"propertyName": "items",
				"name": "PrintButton",
				"values": {
					itemType: Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.PrintButtonCaption"},
					"classes": {"wrapperClass": ["actions-button-margin-right"]},
					"controlConfig": {"menu": {"items": {"bindTo": "CardPrintMenuItems"}}},
					"visible": {"bindTo": "IsCardPrintButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"parentName": "RightContainer",
				"propertyName": "items",
				"name": "ViewOptionsButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ViewOptionsButtonCaption"},
					"menu": {
						"items": {"bindTo": "ViewOptionsButtonMenuItems"},
						"ulClass": "menu-item-image-size-16"
					},
					"visible": {"bindTo": "getViewOptionsButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "DelayExecutionModuleContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"id": "DelayExecutionModuleContainer",
					"selectors": {"wrapEl": "#DelayExecutionModuleContainer"},
					"wrapClass": ["delay-execution-container"],
					"visible": {"bindTo": "DelayExecutionModuleContainerVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["header-container-margin-bottom"],
					"items": [],
					"markerValue": {"bindTo": "HeaderContainerMarkerValue"}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderCaptionContainer",
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["header-caption-container-margin"],
					"visible": {
						"bindTo": "isNewMode"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "NewRecordPageCaption",
				"parentName": "HeaderCaptionContainer",
				"propertyName": "items",
				"values": {
					"labelClass": ["new-record-header-caption-label"],
					"itemType": Terrasoft.ViewItemType.LABEL,
					"caption": {"bindTo": "NewRecordPageCaption"},
					"visible": {"bindTo": "checkNewRecordPageCaptionSet"}
				}
			},
			{
				"operation": "insert",
				"name": "Header",
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
					"items": [],
					"collapseEmptyRow": true
				}
			},
			{
				"operation": "insert",
				"name": "TabsContainer",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"values": {
					"className": "Terrasoft.LazyContainer",
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"visible": {"bindTo": "getTabsContainerVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "Tabs",
				"parentName": "TabsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.TAB_PANEL,
					"activeTabChange": {"bindTo": "activeTabChange"},
					"activeTabName": {"bindTo": "ActiveTabName"},
					"classes": {"wrapClass": ["tab-panel-margin-bottom"]},
					"collection": {"bindTo": "TabsCollection"},
					"tabs": []
				}
			},
			{
				"operation": "insert",
				"name": "ProcessButton",
				"parentName": "RunProcessContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ProsessButtonCaption"},
					"imageConfig": {"bindTo": "Resources.Images.ProcessButtonImage"},
					"iconAlign": Terrasoft.controls.ButtonEnums.iconAlign.LEFT,
					"classes": {"imageClass": ["t-btn-image left-12px t-btn-image-left proc-btn-img"]},
					"menu": {"items": {"bindTo": "ProcessButtonMenuItems"}},
					"visible": {"bindTo": "IsProcessButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"parentName": "LeftContainer",
				"propertyName": "items",
				"name": "addActions",
				"values": {
					"style": Terrasoft.controls.ButtonEnums.style.DEFAULT,
					"classes": {
						"imageClass": ["addbutton-imageClass"],
						"wrapperClass": ["addbutton-buttonClass"]
					},
					"imageConfig": {"bindTo": "Resources.Images.QuickAddButtonImage"},
					"hint": {"bindTo": "Resources.Strings.QuickAddButtonHint"},
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"menu": {
						"items": {"bindTo": "QuickAddMenuItems"}
					},
					"visible": {
						"bindTo": "getQuickAddButtonVisible"
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
