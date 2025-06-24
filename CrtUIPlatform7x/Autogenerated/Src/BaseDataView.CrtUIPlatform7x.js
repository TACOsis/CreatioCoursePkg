define("BaseDataView", ["terrasoft", "ConfigurationEnums", "ConfigurationConstants", "RightUtilities",
	"ProcessModuleUtilities", "AcademyUtilities", "MenuUtilities", "TagConstantsV2",
	"performancecountermanager", "BaseDataViewResources", "DefaultProfileHelper", "ChangeLogUtilities",
	"FixedSectionGridCaptionsPlugin", "SysModuleAnalyticsReport", "NetworkUtilities", "TagUtilitiesV2",
	"GridUtilitiesV2", "DataUtilities", "ProcessEntryPointUtilities", "ProcessEntryPointUtilities",
	"BaseSectionGridRowViewModel", "HistoryStateUtilities", "PrintReportUtilities", "SecurityUtilities",
	"css!QuickFilterModuleV2", "WizardUtilities", "ContextHelpMixin", "CheckModuleDestroyMixin", "DcmMixin",
	"EmailLinksMixin", "FileImportMixin", "css!BaseSectionV2CSS", "FilterUtilities"
], function(Terrasoft, ConfigurationEnums, ConfigurationConstants, RightUtilities, ProcessModuleUtilities,
		AcademyUtilities, MenuUtilities, TagConstantsV2, performanceManager, resources, DefaultProfileHelper,
		changeLogUtilities, fixedSectionGridCaptionsPlugin, SysModuleAnalyticsReport, NetworkUtilities) {
	return {
		messages: {
			/**
			 * @message GetHistoryState
			 * Get current state message.
			 */
			"GetHistoryState": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"UpdateCardProperty": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"UpdateCardHeader": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"CardModuleResponse": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ReloadSectionRow
			 * Reloads section row by primary column value.
			 */
			"ReloadSectionRow": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"CloseCard": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GridRowChanged
			 * Publish changed selected item identifier message.
			 */
			"GridRowChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetSectionFilters
			 * Returns selected filters.
			 * @return {Object} Filters of section.
			 */
			"GetSectionFilters": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message OnCardAction
			 * ######## # ########## ######## ######## ### ########
			 * @param {String} action ######## ########
			 */
			"OnCardAction": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message CardChanged
			 * ########### ### ######### ######### ########
			 * @param {Object} config
			 * @param {String} config.key ######## ####### ###### #############
			 * @param {Object} config.value ########
			 */
			"CardChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetEntitySchemaFilterProviderModuleName
			 * Message for receiving EntitySchemaFilterProviderModule class name
			 */
			"GetEntitySchemaFilterProviderModuleName": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message getCardInfo
			 */
			"getCardInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"UpdateFilter": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * ########## ######### ####### ChangeHeaderCaption
			 */
			"NeedHeaderCaption": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"FiltersChanged": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message SectionUpdateFilter
			 * Updates filters from section.
			 */
			"SectionUpdateFilter": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * Reloads summary module.
			 */
			"ReloadSummaryModule": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"GetFixedFilterConfig": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"CustomFilterExtendedMode": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"GetExtendedFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"CustomFilterExtendedModeClose": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"GetExtendedFilterModuleId": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"ApplyResultExtendedFilter": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"UpdateExtendedFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"GetFolderFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"ResultFolderFilter": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"UpdateFolderFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"FilterActionsFired": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 *
			 */
			"FilterActionsEnabledChanged": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"ChangeHeaderCaption": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message LookupInfo
			 * ### ###### LookupUtilities
			 */
			"LookupInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ResultSelectedRows
			 */
			"ResultSelectedRows": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 *
			 */
			"AddFolderActionFired": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message OpenCardInChain
			 * ######### ## ######## ########
			 * @param {Object} ###### ########### ########
			 */
			"OpenCardInChain": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message CardRendered
			 * ######## ######## ############## ############.
			 */
			"CardRendered": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ######### ### ########## ####### #### # ###### ########
			 */
			"UpdateCustomFilterMenu": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetProcessEntryPointsData
			 */
			"GetProcessEntryPointInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetProcessEntryPointsData
			 */
			"GetProcessEntryPointsData": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetProcessEntryPointsData
			 */
			"CloseProcessEntryPointModule": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ProcessExecDataChanged
			 */
			"ProcessExecDataChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetCardActions
			 * ######## ######## ########
			 * @return {Object} #######
			 */
			"GetCardActions": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetCardViewOptions
			 * ######## ###### #### ###### "###" ########
			 * @param {Terrasoft.BaseViewModelCollection} ###### #### ###### "###"
			 */
			"GetCardViewOptions": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message UpdateSection
			 * Updates section.
			 */
			"UpdateSection": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ResetSection
			 * ########## ######
			 */
			"ResetSection": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SetCustomFilters
			 * ############# ####### ####### # #######
			 */
			"SetCustomFilters": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message IsSeparateMode
			 * ########## ####### ######### ####### (####### ######## ### ###)
			 */
			"IsSeparateMode": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetDataViews
			 * ######## ############# #######
			 * @return {Terrasoft.BaseViewModelCollection} ########## ############# #######
			 */
			"GetDataViews": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetRunProcessesProperties
			 * ######## ##### ######## ####### ########### ### ####, ### ## ######### #######.
			 * @param {Array} ###### ######## #######.
			 */
			"GetRunProcessesProperties": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SelectedSideBarItemChanged
			 * ######## ######### ######## ####### # #### ####### ##### ######.
			 * @param {String} ######### ####### (####. "SectionModuleV2/AccountPageV2/" ### "DashboardsModule/").
			 */
			"SelectedSideBarItemChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message InitQuickAddMenuItems
			 * ######## ######## ####### #### ###### ######## ########## ##########.
			 */
			"InitQuickAddMenuItems": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message OnQuickAddRecord
			 * ######## # ####### ###### #### ###### ######## ########## ##########.
			 */
			"OnQuickAddRecord": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetFolderEntitiesNames
			 * ########## ######## #### #### ### ######## #######.
			 */
			"GetFolderEntitiesNames": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message TagChanged
			 * ######### ########## ##### # ######.
			 */
			"TagChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetRecordId
			 * ########## ############# ######, ####### #############.
			 */
			"GetRecordId": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message EntityInitialized
			 * ########### ##### ############# ####### # ########### ########### # ########## #############
			 * ########. # ######## ######### ######### ########## ########## # #######.
			 */
			"EntityInitialized": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message LoadedFiltersFromStorage
			 * Filters loaded from storage.
			 */
			"LoadedFiltersFromStorage": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message InitFilterFromStorage
			 * Init filters loaded from storage.
			 */
			"InitFilterFromStorage": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetSectionFiltersInfo
			 * Run after LoadedFiltersFromStorage.
			 */
			"GetSectionFiltersInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SummaryItemsUpdate
			 * Run after summary items inserted or deleted.
			 */
			"SummaryItemsUpdate": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ChangeGridUtilitiesContainerSize
			 * Changes grid utilities container size.
			 */
			"ChangeGridUtilitiesContainerSize": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetTagFilter
			 * Returns tag filter.
			 */
			"GetTagFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message ActiveViewChanged
			 * Message for active view changed.
			 */
			"ActiveViewChanged": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message RecordsCountChanged
			 * Messages section records count change.
			 */
			"RecordsCountChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetQueryOptimizeOptions
			 * Returns GetQueryOptimizeOptions value.
			 */
			"GetQueryOptimizeOptions": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetCanUseQueryOptimization
			 * Returns CanUseQueryOptimization value.
			 */
			"NeedToUseQueryMetrics": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SaveSummaryOptimizeOptions
			 * Saves summary optimization options.
			 */
			"SaveSummaryOptimizeOptions": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SetFolderFilter
			 * Sets current folder value.
			 */
			"SetFolderFilter": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message IsNeedCalculateSummary
			 * Returns need calculate summary value.
			 */
			"IsNeedCalculateSummary": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			}
		},
		mixins: {
			/**
			 * @class GridUtilities ########### ####### ###### ###### # ########
			 */
			GridUtilities: "Terrasoft.GridUtilities",
			/**
			 *
			 */
			ProcessEntryPointUtilities: "Terrasoft.ProcessEntryPointUtilities",
			/**
			 * @class PrintReportUtilities implementing basic methods of working with reports and print forms.
			 */
			PrintReportUtilities: "Terrasoft.PrintReportUtilities",
			/**
			 * @class SecurityUtilitiesMixin implements operation permissions checking.
			 */
			SecurityUtilitiesMixin: "Terrasoft.SecurityUtilitiesMixin",
			/**
			 * @class TagUtilities implements work with the tag module.
			 */
			TagUtilities: "Terrasoft.TagUtilities",
			/**
			 * @class ContextHelpMixin implements work with the help opening module.
			 */
			ContextHelpMixin: "Terrasoft.ContextHelpMixin",
			/**
			 * Mixin implements work with the partition wizard.
			 */
			WizardUtilities: "Terrasoft.WizardUtilities",
			/**
			 * Mixin implements publish and show CanBeDestroy message.
			 */
			CheckModuleDestroyMixin: "Terrasoft.CheckModuleDestroyMixin",
			/**
			 * Mixin provides the ability to work with dcm designer.
			 */
			DcmMixin: "Terrasoft.DcmMixin",
			/**
			 * Provides methods for email sending.
			 */
			EmailLinksMixin: "Terrasoft.EmailLinksMixin",
			/**
			 * Provides methods for opening file import wizard from everywhere.
			 */
			FileImportMixin: "Terrasoft.FileImportMixin"
		},
		attributes: {
			/**
			 * Data collection for list view.
			 */
			"GridData": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Collection of section views.
			 */
			"DataViews": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Primary column value of the active registry row.
			 */
			"ActiveRow": {
				dataValueType: Terrasoft.DataValueType.GUID
			},
			/**
			 * Flag indicates whether the registry is empty.
			 */
			"IsGridEmpty": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag indicating whether to display static groups in the group module.
			 */
			"UseStaticFolders": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Flag indicating tag accessibility.
			 */
			"UseTagModule": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},
			/**
			 * Flag whether to show loading mask.
			 */
			"ShowGridMask": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag whether the registry loaded.
			 */
			"IsGridLoading": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag indicating multiple registry options.
			 */
			"MultiSelect": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Collection of selected registry entries.
			 */
			"SelectedRows": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Section context help identifier.
			 */
			"ContextHelpId": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},
			/**
			 * Collection of the section filters.
			 */
			"SectionFilters": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Mark section filters is loaded from profile.
			 */
			"IsSectionFiltersLoaded": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Section profile.
			 */
			"SectionProfile": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},
			/**
			 * Number of records in request selected.
			 */
			"RowCount": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},
			/**
			 * Flag, enabled pagination in request.
			 */
			"IsPageable": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag, clear registry.
			 */
			"IsClearGridData": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag, Visibility of card.
			 */
			"IsCardVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag defining the launch of the tag module
			 */
			"CanShowTags": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Flag, section visibility
			 */
			"IsSectionVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},
			"ReportGridData": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			"ReportActiveRow": {
				dataValueType: Terrasoft.DataValueType.GUID
			},
			"IsActionButtonsContainerVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Collection of printed forms section of registry.
			 */
			"SectionPrintMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * The visibility of the button print forms section.
			 */
			"IsSectionPrintButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * ######## ######### #### ########### ###### # ###### ######## # ###### ########### #######.
			 */
			"SeparateModeActionsButtonMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * ######## ######### #### ########### ###### # ###### ######## # ###### ###########
			 * ############# ####### # ########.
			 */
			"CombinedModeActionsButtonMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			"FixedFilterConfig": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},
			"ExtendedFilters": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},
			/**
			 * Name of the active view.
			 */
			"ActiveViewName": {
				dataValueType: Terrasoft.DataValueType.TEXT
			},
			/**
			 * The flag is responsible for the visibility of the add group action.
			 */
			"IsFolderManagerActionsContainerVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Sign of visibility of the action "add to group"
			 */
			"IsIncludeInFolderButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},
			"FilterActionsEnabledProperties": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},
			/**
			 * Sort menu column collection
			 */
			"SortColumns": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Collection of printed forms of the section in the card
			 */
			"CardPrintMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},
			/**
			 * Visibility of printed button forms of the card.
			 */
			"IsCardPrintButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * Stores information about the need to change the configuration of the columns of the current registry.
			 **/
			"GridSettingsChanged": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},
			/**
			 * The value of the primary column of the active record, before registry rebooting.
			 */
			"ActiveRowBeforeReload": {
				dataValueType: Terrasoft.DataValueType.GUID
			},
			/**
			 * View title "Registry"
			 */
			"GridDataViewName": {
				dataValueType: Terrasoft.DataValueType.TEXT,
				value: "GridDataView"
			},
			/**
			 * Profile settings active view of the section.
			 */
			"ActiveViewSettingsProfile": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT,
				value: {}
			},
			/**
			 * Sign of opening the card located in the chain
			 */
			"IsCardInChain": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * ########### # ####### ####### #######.
			 */
			"ProfileFilters": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},

			/**
			 * ####### ######### ###### "######### #######"
			 */
			"IsRunProcessButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * ###### #### ###### "######### #######"
			 */
			"RunProcessButtonMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ###### #### ###### "#######"
			 */
			"ProcessButtonMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION,
				value: this.Ext.create("Terrasoft.BaseViewModelCollection")
			},

			/**
			 * ######### ####### #### ###### ######## ########## ##########.
			 */
			"QuickAddMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ######## ######## ###### ## ####### ###### #### # ############ ### ############# #######
			 */
			"SecurityOperationName": {
				dataValueType: Terrasoft.DataValueType.STRING,
				value: null
			},

			/**
			 * ####### ######### ######## "######### #####".
			 */
			"IsSummarySettingsVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Determines if grid settings menu item is visible.
			 */
			"IsGridSettingsMenuVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * ####### ######### ######## "##########".
			 */
			"IsSortMenuVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * ####### ######### ###### #####.
			 * @Type {Boolean}
			 */
			"TagButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * ####### ######### #### ## ############# ########.
			 */
			"CanUseWizard": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * Determines if folder filter is available.
			 */
			"UseFolderFilter": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Caption for "Action" button.
			 */
			"ActionsButtonCaption": {
				dataValueType: Terrasoft.DataValueType.TEXT,
				value: ""
			},

			/**
			 * Style button for "Actions" button.
			 */
			"ActionsButtonStyle": {
				dataValueType: Terrasoft.DataValueType.TEXT,
				value: Terrasoft.controls.ButtonEnums.style.DEFAULT
			},

			/**
			 * Sign of visible "Add record" button.
			 */
			"IsAddRecordButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Sign of the visibility of the menu item to go to the object change log settings.
			 * @type {Boolean}
			 */
			"IsObjectChangeLogSettingsMenuItemVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * Sign of visible section header caption.
			 */
			"UseSectionHeaderCaption": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * Sign of use separated page header.
			 */
			"UseSeparatedPageHeader": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * Dcm module config.
			 * @type {Object}
			 */
			"DcmConfig": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT,
				value: {}
			},

			/**
			 * Sign that the section can be customized.
			 * @type {Boolean}
			 */
			"CanCustomize": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Indicates if section can warm up it's pages.
			 * @type {Boolean}
			 */
			"CanUseEditPagesWarmUp": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Selector of the grid container. Uses for display mask on this container on loading state.
			 * @private
			 * @type {String}
			 */
			"IsGridLoadingMaskSelector": {
				"dataValueType": Terrasoft.DataValueType.TEXT,
				"value": ".grid-dataview-container-mask"
			},

			/**
			 * Indicates if need select vertical profile columns.
			 * @type {Boolean}
			 */
			"NeedSelectVerticalProfileColumns": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Section records count.
			 */
			"RecordsCount": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},

			/**
			 * Failed to optimize dynamic folder query.
			 */
			"QueryOptimizationFailed": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},

			/**
			 * Indicates if has summary count.
			 * @type {Boolean}
			 */
			"SummaryHasCount": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			},
			/**
			 * Indicates the need to reload data.
			 */
			"IsNeedReloadDataOnRender": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			}
		},
		properties: {
			/**
			 * Defines folder manager view model class name
			 */
			folderManagerViewModelClassName: "Terrasoft.BaseFolderManagerViewModel",
			/**
			 * Defines folder manager view config generator module name
			 */
			folderManagerViewConfigGenerator: "FolderManagerView",
			/**
			 * Defines folder manager view model config generator module name
			 */
			folderManagerViewModelConfigGenerator: "FolderManagerViewModel",
			/**
			 * Defines folder manager module name
			 */
			folderManagerModuleName: "FolderManager",
			/**
			 * Defines mask identifier
			 */
			maskId: null,
			/**
			 * Vertical profile key suffix.
			 */
			verticalProfileKeySuffix: "VerticalProfile",
			/**
			 * QueryOperationType for GridUtilities.
			 */
			queryOperationType: Terrasoft.QueryOperationType.LISTSELECT
		},
		methods: {

			/**
			 * Check for a group to determine the query kind
			 * @protected
			 */
			getGridDataESQ: function() {
				const esq = this.mixins.GridUtilities.getGridDataESQ.call(this);
				const currentFolder = this._getCurrentFolderFilterWithSearchType();
				if (this.isNotEmpty(currentFolder)) {
					const optimizationOptions = this.getFolderFilterOptimizationOptions(currentFolder.folder);
					esq.queryKind = Terrasoft.QueryKind.LIMITED;
					esq.useMetrics = this.isNeedToUseQueryMetrics();
					esq.querySource = Terrasoft.QuerySource.FILTER;
					if (this.isNotEmpty(optimizationOptions)) {
						esq.queryOptimize = optimizationOptions.queryOptimizeData;
						esq.useReExecute = optimizationOptions.useReExecuteData;
						esq.useCountOver = optimizationOptions.useCountOver;
					}
					esq.on("reexecute", this.onReLoadGridDataWithOptimize, this);
				}
				this.$UsedReExecute = false;
				return esq;
			},

			/**
			 * @inheritDoc Terrasoft.GridUtilities#destroyQueryEvents
			 * @override
			 */
			destroyQueryEvents: function(esq) {
				esq.un("reexecute", this.onReLoadGridDataWithOptimize, this);
				this.mixins.GridUtilities.destroyQueryEvents.call(this, esq);
			},

			/**
			 * Returns optimization folder options.
			 * @param {Terrasoft.FolderFilterItemViewModel} [folder] Folder filter.
			 * @return {Object} Optimization config.
			 */
			getFolderFilterOptimizationOptions: function(folder) {
				if (!this._isUseQueryOptimize()) {
					return null;
				}
				if (this.isEmpty(folder)) {
					const folderFilter = this._getCurrentFolderFilterWithSearchType();
					folder = folderFilter && folderFilter.folder;
				}
				const optimizationType = folder && folder.$OptimizationType;
				if (this.isEmpty(optimizationType)) {
					return null;
				}
				let useReExecuteData = false;
				let queryOptimizeData = false;
				let useReExecuteCount = false;
				let queryOptimizeCount = false;
				let useCountOver = false;
				switch (optimizationType) {
					case Terrasoft.Folder.OptimizationType.TryOptimize:
						useReExecuteData = true;
						useReExecuteCount = true;
						break;
					case Terrasoft.Folder.OptimizationType.Data:
						queryOptimizeData = true;
						break;
					case Terrasoft.Folder.OptimizationType.Count:
						queryOptimizeCount = true;
						break;
					case Terrasoft.Folder.OptimizationType.CountAndData:
						queryOptimizeData = true;
						queryOptimizeCount = true;
						break;
					case Terrasoft.Folder.OptimizationType.AppliedDataTryCount:
						queryOptimizeData = true;
						useReExecuteCount = true;
						break;
					case Terrasoft.Folder.OptimizationType.NotAppliedDataTryCount:
						useReExecuteCount = true;
						break;
					case Terrasoft.Folder.OptimizationType.AppliedCountTryData:
						queryOptimizeCount = true;
						useReExecuteData = true;
						break;
					case Terrasoft.Folder.OptimizationType.NotAppliedCountTryData:
						useReExecuteData = true;
						break;
					case Terrasoft.Folder.OptimizationType.CountOver:
						useCountOver = true;
						break;
					case Terrasoft.Folder.OptimizationType.NotApplied:
						break;
					default:
						break;
				}
				return {
					useReExecuteData: useReExecuteData,
					queryOptimizeData: queryOptimizeData,
					useReExecuteCount: useReExecuteCount,
					queryOptimizeCount: queryOptimizeCount,
					useCountOver: useCountOver
				};
			},

			/**
			 * Signs can use count over.
			 * @return {Boolean} True, if can use count over, otherwise false.
			 * @private
			 */
			_isCanUseCountOver: function() {
				const options = this.getFolderFilterOptimizationOptions();
				return (options && options.useCountOver);
			},

			/**
			 * Signs of use query optimize.
			 * @return {Boolean} True if use query optimize, false otherwise.
			 * @private
			 */
			_isUseQueryOptimize: function() {
				return this.getIsFeatureEnabled("UseQueryOptimize");
			},

			/**
			 * Returns current folder filter with search type.
			 * @return {Terrasoft.FolderFilterItemViewModel | null} Folder filter.
			 * @private
			 */
			_getCurrentFolderFilterWithSearchType: function() {
				const currentFolder = this.get("CurrentFolder");
				const folderType = currentFolder && currentFolder.folderType;
				if (folderType && folderType.value === ConfigurationConstants.Folder.Type.Search) {
					return currentFolder;
				}
				return null;
			},

			/**
			 * Handles re execute event.
			 */
			onReLoadGridDataWithOptimize: function() {
				this.updateBodyMaskCaption({
					maskId: this.maskId,
					caption: this.get("Resources.Strings.ReExecuteMessage")
				});
				this.$UsedReExecute = true;
			},

			/**
			 * @inheritDoc Terrasoft.GridUtilities#onGridDataLoaded
			 * @override
			 */
			onGridDataLoaded: function(response) {
				this.$QueryOptimizationFailed = false;
				if (this.$UsedReExecute) {
					this._saveFolderFilterQueryOptimization(response.success, this._setOptimizationTypeByData);
				}
				if (!response.success) {
					const isTimedout = this.Terrasoft.findValueByPath(response, "errorInfo.response.timedout");
					this.$QueryOptimizationFailed = isTimedout && this._isUseQueryOptimize();
				}
				this.mixins.GridUtilities.onGridDataLoaded.call(this, response);
				this.changeGridUtilitiesContainerSize();
				this._subscribeOnGridContainersScrollEvent();
			},

			/**
			 * Saves folder filter query optimization.
			 * @param {Boolean} isSuccessResponse Flag success response.
			 * @param {Function} predicate Predicate.
			 * @private
			 */
			_saveFolderFilterQueryOptimization: function(isSuccessResponse, predicate) {
				const currentFolder = this._getCurrentFolderFilterWithSearchType();
				if (this.isEmpty(currentFolder)) {
					return false;
				}
				const folder = currentFolder.folder;
				predicate.call(this, folder, isSuccessResponse);
				if (!this.get("IsExtendedFiltersVisible")) {
					folder.saveEntity(this.Terrasoft.emptyFn, this);
				}
			},

			/**
			 * Sets folder filter query optimization by data.
			 * @param {Terrasoft.FolderFilterItemViewModel} folder Folder filter.
			 * @param {Boolean} isSuccess Flag success response.
			 * @private
			 */
			_setOptimizationTypeByData: function(folder, isSuccess) {
				const optimizationType = Terrasoft.Folder.OptimizationType;
				const transitions = [{
					type: optimizationType.TryOptimize,
					successType: optimizationType.AppliedDataTryCount,
					failType: optimizationType.NotAppliedDataTryCount
				}, {
					type: optimizationType.NotAppliedCountTryData,
					successType: optimizationType.Data,
					failType: optimizationType.NotApplied
				}, {
					type: optimizationType.AppliedCountTryData,
					successType: optimizationType.CountAndData,
					failType: optimizationType.Count
				}];
				this._setOptimizationType(transitions, folder, isSuccess);
			},

			/**
			 * Sets folder filter query optimization by count.
			 * @param {Terrasoft.FolderFilterItemViewModel} folder Folder filter.
			 * @param {Boolean} isSuccess Flag success response.
			 * @private
			 */
			_setOptimizationTypeByCount: function(folder, isSuccess) {
				const optimizationType = Terrasoft.Folder.OptimizationType;
				const transitions = [{
					type: optimizationType.TryOptimize,
					successType: optimizationType.AppliedCountTryData,
					failType: optimizationType.NotAppliedCountTryData
				}, {
					type: optimizationType.NotAppliedDataTryCount,
					successType: optimizationType.Count,
					failType: optimizationType.NotApplied
				}, {
					type: optimizationType.AppliedDataTryCount,
					successType: optimizationType.CountAndData,
					failType: optimizationType.Data
				}];
				this._setOptimizationType(transitions, folder, isSuccess);
			},

			/**
			 * Sets folder filter query optimization.
			 * @param {Array} transitions Transitions.
			 * @param {Terrasoft.FolderFilterItemViewModel} folder Folder filter.
			 * @param {Boolean} isSuccess Flag success response.
			 * @private
			 */
			_setOptimizationType: function(transitions, folder, isSuccess) {
				const currentType = folder.$OptimizationType;
				const type = this.Terrasoft.findWhere(transitions, {type: currentType});
				folder.$OptimizationType = isSuccess ? type.successType : type.failType;
			},

			/**
			 * Initializes section header container visibility.
			 * @protected
			 */
			initSectionHeaderContainerVisibility: function() {
				if (Terrasoft.Features.getIsEnabled("OldUI")) {
					this.set("UseSectionHeaderCaption", false);
				}
			},

			/**
			 * Handles section records count change.
			 * @protected
			 */
			onRecordsCountChanged: function() {
				const value = this.$RecordsCount;
				if (this._isCanUseCountOver()) {
					this.sandbox.publish("RecordsCountChanged", value, [this.getSummaryModuleSandboxId()]);
				}
			},

			/**
			 * Return section header caption.
			 * @return {String} Section header caption.
			 */
			getSectionHeaderCaption: function() {
				if (Terrasoft.Features.getIsDisabled("OldUI")) {
					if (this.get("UseSectionHeaderCaption")) {
						return this.getDefaultGridDataViewCaption();
					}
				}
				return "";
			},

			/**
			 * #########, ######## ## ###### ####### ################ ## #######.
			 * @protected
			 */
			getSchemaAdministratedByRecords: function() {
				return this.entitySchema.administratedByRecords;
			},

			/**
			 * Handles "Close section" button click.
			 * @protected
			 */
			onCloseSectionButtonClick: function() {
				this.saveSectionVisibleStateToProfile(false);
				this.hideSection();
				this.removeSectionHistoryState();
				this.updateSectionHeader();
			},

			/**
			 * Generates summary module id.
			 * @protected
			 * @return {string} Summary module page id.
			 */
			getSummaryModuleSandboxId: function() {
				return this.sandbox.id + "_SummaryModuleV2";
			},

			/**
			 * Generates card module id.
			 * @param {string} [cardModule] Custom card module name.
			 * @protected
			 * @return {string} ########## ############# ###### ########
			 */
			getCardModuleSandboxId: function(cardModule) {
				cardModule = cardModule || this._getEntityCardModule();
				return this.sandbox.id + "_" + cardModule;
			},

			/**
			 * ######## ############## ####### ######## # #######:
			 * - ######## # #######
			 * - ######## ## # #######
			 * @return {Array} ########## ############## ####### ########
			 */
			getCardModuleSandboxIdentifiers: function() {
				const identifiers = [];
				identifiers.push(this.getCardModuleSandboxId());
				Terrasoft.each(this.getTypeColumnValues(), function(typeColumnValue) {
					identifiers.push(this.getChainCardModuleSandboxId(typeColumnValue));
				}, this);
				return identifiers;
			},

			/**
			 * ########## ############# ###### ######## ### ######## # #######
			 * @protected
			 * @param {String} typeColumnValue ########## ############# #### ### ######## ##############
			 * @return {string} ########## ############# ###### ######## ### ######## # #######
			 */
			getChainCardModuleSandboxId: function(typeColumnValue) {
				return this.getCardModuleSandboxId() + "_chain" + typeColumnValue;
			},

			/**
			 *
			 * @protected
			 */
			updateCardHeader: function() {
				this.sandbox.publish("UpdateCardHeader", null, [this.getCardModuleSandboxId()]);
			},

			/**
			 * Updates section header caption.
			 * @protected
			 */
			updateSectionHeader: function() {
				let markerValue = "";
				const typeColumnName = this.get("TypeColumnName");
				const activeRow = this.getActiveRow();
				if (typeColumnName && activeRow) {
					markerValue = activeRow.get(typeColumnName).displayValue;
				} else {
					markerValue = this.entitySchema.caption;
				}
				let caption = this.getActiveViewCaption();
				if (Terrasoft.Features.getIsEnabled("OldUI")) {
					caption = markerValue;
				}
				this.sandbox.publish("ChangeHeaderCaption", {
					caption: caption,
					markerValue: markerValue,
					dataViews: new Terrasoft.Collection(),
					moduleName: this.name
				});
			},

			/**
			 * Handles "Back" button click.
			 * @protected
			 */
			onBackButtonClick: function() {
				this.showSection();
				this.addSectionHistoryState();
				this.initMainHeaderCaption();
				this.ensureActiveRowVisible();
				this.saveSectionVisibleStateToProfile(true);
			},

			/**
			 * Handles card action button click.
			 * @protected
			 */
			onCardAction: function() {
				const tag = arguments[0] || arguments[3];
				const cardModuleSandboxId = this.getCardModuleSandboxId();
				this.sandbox.publish("OnCardAction", tag, [cardModuleSandboxId]);
			},

			/**
			 *
			 * @protected
			 */
			initCardChangedHandler: function() {
				this.sandbox.subscribe("CardChanged", function(config) {
					this.set(config.key, config.value);
				}, this, [this.getCardModuleSandboxId()]);
			},

			/**
			 * ######## ######### ##### #######
			 * @protected
			 * @return {Terrasoft.Collection}
			 */
			getGridData: function() {
				return this.get("GridData");
			},

			/**
			 * Shows edit page.
			 * @protected
			 */
			showCard: function() {
				const isCardVisible = this.get("IsCardVisible");
				if (isCardVisible) {
					return;
				}
				this.setLeftSectionContainerVisibility(false);
				this.set("IsFolderManagerActionsContainerVisible", false);
				this.onHideFoldersAndFilters();
				this.changeDataViewsContainerClasses({
					showFolders: false
				});
				this.set("IsCardVisible", true);
				this.onSectionModeChanged();
				const schemaContainerEl = Ext.get(this.name + "Container");
				if (schemaContainerEl) {
					schemaContainerEl.replaceCls("one-el", "two-el");
				}
				Terrasoft.utils.dom.setAttributeToBody("is-card-opened", true);
				Terrasoft.utils.dom.setAttributeToBody("is-main-header-visible", true);
				if (this.getIsSectionVisible()) {
					return;
				}
				this.hideSection();
				this.updateCardHeader();
				this.updateSectionHeader();
			},

			/**
			 * Publishes message with current grid state.
			 */
			onSectionModeChanged: function() {
				const quickFilterModuleId = this.getQuickFilterModuleId();
				this.sandbox.publish("IsSeparateMode", !this.get("IsCardVisible"), [quickFilterModuleId]);
			},

			/**
			 * Shows section.
			 * @protected
			 * @virtual
			 */
			showSection: function() {
				const isSectionVisible = this.get("IsSectionVisible");
				if (isSectionVisible) {
					return;
				}
				this.set("IsSectionVisible", true);
				const isCardVisible = this.$IsCardVisible;
				if (isCardVisible) {
					const schemaContainerEl = Ext.get(this.name + "Container");
					schemaContainerEl.replaceCls("one-el", "two-el");
					Terrasoft.utils.dom.setAttributeToBody("is-main-header-visible", true);
				}
				const section = Ext.get("SectionContainer");
				if (section) {
					const leftSectionContainerElement = Ext.get("LeftSectionContainer");
					if (!Ext.isEmpty(leftSectionContainerElement) && isCardVisible) {
						leftSectionContainerElement.addCls("display-none");
					}
					section.removeCls("display-none");
				}
			},

			/**
			 * Hides section container.
			 * @protected
			 */
			hideSection: function() {
				const isSectionVisible = this.get("IsSectionVisible");
				if (!isSectionVisible) {
					return;
				}
				this.set("IsSectionVisible", false);
				const containerEl = Ext.get(this.name + "Container");
				if (containerEl) {
					containerEl.replaceCls("two-el", "one-el");
				}
				Terrasoft.utils.dom.setAttributeToBody("is-main-header-visible", false);
				const sectionEl = Ext.get("SectionContainer");
				if (sectionEl) {
					sectionEl.addCls("display-none");
				}
			},

			/**
			 * Unloads card module and hide its container.
			 * @protected
			 */
			hideCard: function() {
				const isCardVisible = this.get("IsCardVisible");
				if (!isCardVisible) {
					return;
				}
				this.sandbox.unloadModule(this.getCardModuleSandboxId());
				this.set("IsCardVisible", false);
				this.set("IsActionButtonsContainerVisible", true);
				this.onSectionModeChanged();
				const schema = Ext.get(this.name + "Container");
				schema.replaceCls("two-el", "one-el");
			},

			/**
			 * Set visibility value for vertical registry section on open card.
			 * @protected
			 * @param {Boolean} isSectionVisible Vertical registry section visibility parameter.
			 */
			saveSectionVisibleStateToProfile: function(isSectionVisible) {
				const profile = this.getProfile();
				const key = this.getProfileKey();
				profile.isSectionVisible = isSectionVisible;
				Terrasoft.utils.saveUserProfile(key, profile, false);
			},

			/**
			 * Adds section history state.
			 * @protected
			 */
			addSectionHistoryState: function() {
				let historyState = this.sandbox.publish("GetHistoryState");
				const currentState = historyState.state;
				const newState = {
					moduleId: currentState.moduleId
				};
				const hash = historyState.hash;
				historyState = hash.historyState;
				if (historyState.substr(-1) !== "/") {
					historyState += "/";
				}
				const hashItems = historyState.split("/");
				const module = "SectionModuleV2";
				const sectionSchema = this.name;
				const cardSchema = hashItems[1];
				const operation = hashItems[2];
				const primaryColumnValue = hashItems[3];
				historyState = Terrasoft.combinePath(module, sectionSchema, cardSchema, operation,
					primaryColumnValue);

				this.sandbox.publish("PushHistoryState", {
					hash: historyState,
					silent: true,
					stateObj: newState
				});
			},

			/**
			 * Adds card history state.
			 * @protected
			 */
			addCardHistoryState: function(schemaName, operation, primaryColumnValue) {
				if (!schemaName) {
					return;
				}
				const cardOperationConfig = {
					schemaName: schemaName,
					operation: operation,
					primaryColumnValue: primaryColumnValue
				};
				const stateConfig = this.getCardHistoryStateConfig(cardOperationConfig);
				this.sandbox.publish("PushHistoryState", stateConfig);
			},

			/**
			 * Gets is section visible from profile.
			 * @protected
			 * @return {Boolean} Is section visible flag.
			 */
			getIsSectionVisible: function() {
				if (this.isCardSchemaViewModule()) {
					return false;
				}
				const profile = this.getProfile();
				return (profile && profile.isSectionVisible);
			},

			/**
			 * @param historyState
			 * @param schemaName
			 * @param operation
			 * @param primaryColumnValue
			 * @return {string}
			 * @private
			 */
			_getFormattedHistoryState: function(historyState, schemaName, operation, primaryColumnValue) {
				let hState = historyState;
				if (hState.substr(-1) !== "/") {
					hState += "/";
				}
				const hashItems = hState.split("/");
				if (hashItems.length === 6) {
					hState = hState.replace(hashItems[2], schemaName);
					hState = hState.replace(hashItems[3], operation);
					hState = hState.replace(hashItems[4], primaryColumnValue);
					hState = hState.replace("//", "/");
				} else if (hashItems.length === 5) {
					const historyStateInfo = this.getHistoryStateInfo();
					if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.CARD) {
						hState = Terrasoft.combinePath("CardModuleV2", schemaName, operation,
							primaryColumnValue);
					} else {
						hState = hState.replace(hashItems[2], schemaName);
						hState = hState.replace(hashItems[3], operation);
						hState += primaryColumnValue;
						hState = hState.replace("//", "/");
					}
				} else if (hashItems.length === 3) {
					hState += schemaName + "/" + operation + "/" + primaryColumnValue;
				}
				return hState;
			},

			_getEntityCardModule: function() {
				return Terrasoft.ModuleUtils.getCardModule({
					entityName: this.entitySchemaName,
					defaultModule: "CardModuleV2",
				});
			},

			/**
			 * Gets edit page history state configuration.
			 * @protected
			 * @param {Object} config Edit page parameters.
			 * @param {String} config.schemaName Edit page schema name.
			 * @param {Terrasoft.ConfigurationEnums.CardOperation} config.operation Operation.
			 * @param {String} config.primaryColumnValue Primary column value.
			 * @return {Object}
			 */
			getCardHistoryStateConfig: function(config) {
				const currentHistoryState = this.sandbox.publish("GetHistoryState");
				const schemaName = config.schemaName;
				const operation = config.operation;
				const primaryColumnValue = config.primaryColumnValue || "";
				let hash;
				if (this.getIsSectionVisible()) {
					const historyState = currentHistoryState.hash.historyState;
					hash = this._getFormattedHistoryState(historyState, schemaName, operation, primaryColumnValue);
				} else {
					const moduleName = Terrasoft.ModuleUtils.getCardModule({
						entityName: this.entitySchemaName,
						cardSchema: schemaName,
						operation: operation,
						defaultModule: "CardModuleV2",
					});
					hash = Terrasoft.combinePath(moduleName, schemaName, operation, primaryColumnValue);
				}
				const stateObj = Terrasoft.deepClone(currentHistoryState.state);
				stateObj.hybridMode = true;
				return {
					stateObj,
					silent: true,
					hash: hash
				};
			},

			/**
			 * Removes card history state.
			 * @protected
			 */
			removeCardHistoryState: function() {
				const module = "SectionModuleV2";
				const schema = this.name;
				const historyState = this.sandbox.publish("GetHistoryState");
				if (!historyState) {
					return;
				}
				const currentState = historyState.state;
				const newState = {
					moduleId: currentState.moduleId
				};
				const hash = [module, schema].join("/");
				this.sandbox.publish("PushHistoryState", {
					hash: hash,
					stateObj: newState,
					silent: true
				});
			},

			/**
			 * Removes section history state.
			 * @protected
			 */
			removeSectionHistoryState: function() {
				let historyState = this.sandbox.publish("GetHistoryState");
				const currentState = historyState.state;
				const newState = {
					moduleId: currentState.moduleId
				};
				const hash = historyState.hash;
				historyState = hash.historyState;
				if (historyState.substr(-1) !== "/") {
					historyState += "/";
				}
				const stateItems = historyState.split("/");
				const module = "CardModuleV2";
				const schema = stateItems[2];
				const operation = stateItems[3];
				const primaryColumnValue = stateItems[4];
				historyState = [module, schema, operation, primaryColumnValue].join("/");
				this.sandbox.publish("PushHistoryState", {
					hash: historyState,
					stateObj: newState,
					silent: true
				});
			},

			/**
			 * Loads CardModule.
			 * IsSeparateMode means page is loaded along with section.
			 * @param {string} [schemaName] Schema name to load.
			 * @protected
			 */
			loadCardModule: function(schemaName) {
				let cardModule = Terrasoft.ModuleUtils.getCardModule({
					entityName: this.entitySchemaName,
					cardSchema: schemaName,
					defaultModule: "CardModuleV2",
				});
				let instanceConfig = {
					isSeparateMode: false,
					isSeparateModeInitialized: true,
					useSeparatedPageHeader: this.get("UseSeparatedPageHeader")
				};
				if (this.isCardSchemaViewModule(cardModule)) {
					this.set("IsActionButtonsContainerVisible", false);
					instanceConfig = {};
				} else {
					cardModule = "CardModuleV2";
				}
				if (Terrasoft.ModuleUtils.getIsAngularRouting(cardModule)) {
					cardModule = 'ChainModuleStub';
				}
				const entityCardModule = this._getEntityCardModule();
				this.sandbox.loadModule(cardModule, {
					renderTo: "CardContainer",
					instanceConfig: instanceConfig,
					id: this.getCardModuleSandboxId(entityCardModule),
				});
			},

			/**
			 * Returns sign of CardSchemaViewModule by current entity.
			 * @param {string} [cardModule] Card module name for current page.
			 * @returns {Boolean} True if card module is CardSchemaViewModule.
			 */
			isCardSchemaViewModule: function (cardModule) {
				cardModule = cardModule || this._getEntityCardModule();
				return cardModule === "CardSchemaViewModule";
			},

			/**
			 * Initializes the subscription on closing post edit page.
			 * @protected
			 */
			initCloseCardSubscription: function() {
				const quickFilterModuleId = this.getQuickFilterModuleId();
				const folderManagerModuleId = this.getFolderManagerModuleId();
				this.sandbox.subscribe("CloseCard", function() {
					this.setLeftSectionContainerVisibility(true);
					this.closeCard();
					if (!this.get("IsSectionVisible")) {
						this.showSection();
						this.initMainHeaderCaption();
					} else {
						this.restoreMultiSelectState();
					}
					this.ensureActiveRowVisible();
					this.changeGridUtilitiesContainerSize();
				}, this, [this.getCardModuleSandboxId(), quickFilterModuleId, folderManagerModuleId]);
			},

			/**
			 * Initializes subscription on card module response.
			 * @protected
			 * @virtual
			 */
			initCardModuleResponseSubscription: function() {
				const editCardsSandboxIds = this.getCardModuleResponseTags();
				this.sandbox.subscribe("CardModuleResponse", this.onCardModuleResponse, this, editCardsSandboxIds);
			},

			/**
			 * Returns CardModuleResponse subscribers.
			 * @protected
			 * @virtual
			 * @return {String[]} CardModuleResponse subscribers.
			 */
			getCardModuleResponseTags: function() {
				const typeColumnValues = this.getTypeColumnValues();
				let editCardsSandboxIds = typeColumnValues.map(function(typeColumnValue) {
					return this.getChainCardModuleSandboxId(typeColumnValue);
				}, this);
				editCardsSandboxIds.push(this.getCardModuleSandboxId());
				const miniPageSandboxIds = this.getMiniPagesSandboxId(this.entitySchemaName);
				editCardsSandboxIds = editCardsSandboxIds.concat(miniPageSandboxIds);
				editCardsSandboxIds.push(this.sandbox.id);
				return editCardsSandboxIds;
			},

			/**
			 * Handles the response card after saving record.
			 * @param {Object} response HTTP response.
			 * @return {Boolean} Success result.
			 */
			onCardModuleResponse: function(response) {
				this.set("IsCardInChain", response.isInChain);
				this.loadGridDataRecord(response.primaryColumnValue);
				this.reloadSummaryModule();
				return true;
			},

			/**
			 * ############## ######## ## ######### ######## ##### ######
			 * @protected
			 */
			initAddCardInfoSubscription: function() {
				Terrasoft.each(this.getTypeColumnValues(), function(typeColumnValue) {
					this.initGetCardInfoSubscription(typeColumnValue);
				}, this);
			},

			/**
			 * ############# ######## ## ######### ########## ######## ############## ##### ######
			 * @protected
			 */
			initGetCardInfoSubscription: function(typeColumnValue) {
				const typeColumnName = this.get("TypeColumnName");
				if (typeColumnName && typeColumnValue) {
					this.sandbox.subscribe("getCardInfo", function() {
						return this.getCardInfoConfig(typeColumnName, typeColumnValue);
					}, this, [this.getChainCardModuleSandboxId(typeColumnValue)]);
				}
			},

			/**
			 * ########## ############ ### ######## # ######## ########## # ######## ## #########.
			 * @param {String} typeColumnName ######## ####### #### #######.
			 * @param {String} typeColumnValue ############# #### #######.
			 * @return {Object} ############ ## ########## ## #########.
			 */
			getCardInfoConfig: function(typeColumnName, typeColumnValue) {
				return {
					typeColumnName: typeColumnName,
					typeUId: typeColumnValue
				};
			},

			/**
			 * ######## ######### ######## ####### ####.
			 * @protected
			 * @return {Array} ########## ######### ######## ####### ####.
			 */
			getTypeColumnValues: function() {
				const typeColumnValues = [];
				const editPages = this.get("EditPages");
				editPages.each(function(editPage) {
					const typeColumnValue = editPage.get("Tag");
					typeColumnValues.push(typeColumnValue);
				}, this);
				return typeColumnValues;
			},

			/**
			 * Returns has edit pages tag.
			 * @protected
			 * @return {Boolean} Has edit pages tag.
			 */
			checkEditPagesCount: function() {
				return !Ext.isEmpty(this.hasEditPages());
			},

			/**
			 * Opens new record page.
			 * @protected
			 */
			addRecord: function(typeColumnValue) {
				if (!typeColumnValue) {
					if (this.checkEditPagesCount()) {
						return false;
					}
					const tag = this.get("AddRecordButtonTag");
					typeColumnValue = tag || Terrasoft.GUID_EMPTY;
				}
				const schemaName = this.getEditPageSchemaName(typeColumnValue);
				if (!schemaName) {
					return;
				}
				if (this.hasAddMiniPage(typeColumnValue)) {
					const miniPageSchemaName = this.getMiniPageSchemaName(typeColumnValue);
					this.openAddMiniPage({
						entitySchemaName: this.entitySchemaName,
						valuePairs: this.getAddMiniPageDefaultValues(typeColumnValue),
						miniPageSchemaName: miniPageSchemaName
					});
				} else {
					let instanceConfig = {
						useSeparatedPageHeader: this.get("UseSeparatedPageHeader")
					}
					if (this.isCardSchemaViewModule()) {
						instanceConfig = {};
					}
					this.openCardInChain({
						schemaName: schemaName,
						defaultValues: this.getAddMiniPageDefaultValues(typeColumnValue),
						operation: ConfigurationEnums.CardStateV2.ADD,
						moduleId: this.getChainCardModuleSandboxId(typeColumnValue),
						instanceConfig
					});
				}
			},

			/**
			 * Returns default add mini page values.
			 * @param {String} typeColumnValue Type column value.
			 * @return {Array} Default add mini page values.
			 */
			getAddMiniPageDefaultValues: function(typeColumnValue) {
				const defaultValues = [];
				const typeColumnName = this.get("TypeColumnName");
				if (typeColumnName) {
					defaultValues.push({
						name: typeColumnName,
						value: typeColumnValue
					});
				}
				return defaultValues;
			},

			/**
			 * Opens edit page for selected record.
			 * @protected
			 */
			editCurrentRecord: function() {
				this.closeMiniPage();
				const primaryColumnValue = this.getPrimaryColumnValue();
				if (primaryColumnValue) {
					this.editRecord(primaryColumnValue);
				}
			},

			/**
			 * Opens edit page for record by primary column value.
			 * @protected
			 * @param {String} primaryColumnValue Primary column value.
			 */
			editRecord: function(primaryColumnValue) {
				if (this.getEditPages().isEmpty()) {
					return;
				}
				const activeRow = this.getActiveRow(primaryColumnValue);
				const typeColumnValue = this.getTypeColumnValue(activeRow);
				const schemaName = this.getEditPageSchemaName(typeColumnValue);
				this.set("ShowCloseButton", true);
				this.openCard(schemaName, ConfigurationEnums.CardStateV2.EDIT, primaryColumnValue);
			},

			/**
			 * ######### ######## ########### ######.
			 * @protected
			 * @param {String} primaryColumnValue ########## ############# ######.
			 */
			copyRecord: function(primaryColumnValue) {
				const activeRow = this.getActiveRow(primaryColumnValue);
				const typeColumnValue = this.getTypeColumnValue(activeRow);
				const schemaName = this.getEditPageSchemaName(typeColumnValue);
				this.openCardInChain({
					id: primaryColumnValue,
					schemaName: schemaName,
					operation: ConfigurationEnums.CardStateV2.COPY,
					moduleId: this.getChainCardModuleSandboxId(typeColumnValue)
				});
			},

			/**
			 * Gets is card history state has to be actualized.
			 * @protected
			 * @return {Boolean} Card history state has to be actualized.
			 */
			shouldActualizeCardHistoryState: function() {
				const currentHistoryState = this.sandbox.publish("GetHistoryState");
				return !currentHistoryState?.state?.skipCardHistoryStateActualization;
			},

			/**
			 * Actualizes card history state.
			 * @protected
			 * @param {String} schemaName Schema name.
			 * @param {String} operation Operation.
			 * @param {String} primaryColumnValue Primary column value.
			 */
			actualizeCardHistoryState: function(schemaName, operation, primaryColumnValue) {
				if (this.shouldActualizeCardHistoryState()) {
					this.removeCardHistoryState();
					this.addCardHistoryState(schemaName, operation, primaryColumnValue);
				}
			},

			/**
			 * Opens edit page.
			 * @protected
			 * @param {String} schemaName Schema name.
			 * @param {String} operation Operation.
			 * @param {String} primaryColumnValue Primary column value.
			 */
			openCard: function(schemaName, operation, primaryColumnValue) {
				const navConfig = {
					id: primaryColumnValue,
					entitySchemaName: this.entitySchemaName,
					operation: operation,
				};
				if (NetworkUtilities.tryNavigateTo8xMiniPage(navConfig)) {
					return;
				}
				this.set("ShowGridMask", true);
				const isCardVisible = this.get("IsCardVisible");
				this.showCard();
				if (operation) {
					this.set("IsCardInEditMode", (operation === ConfigurationEnums.CardStateV2.EDIT));
				}
				this.actualizeCardHistoryState(schemaName, operation, primaryColumnValue);
				const config = {
					schemaName: schemaName,
					primaryColumnValue: primaryColumnValue,
					operation: operation
				};
				Terrasoft.delay(this.initTagButtonCaption, this, 1000, [primaryColumnValue]);
				if (!isCardVisible) {
					this.loadCardModule(schemaName);
					this.switchActiveRowActions();
					this.reloadGridColumnsConfig(true);
					this.ensureActiveRowVisible();
				} else if (!this.sandbox.publish("GridRowChanged", config, [this.getCardModuleSandboxId()])) {
					this.loadCardModule(schemaName);
				}
			},

			/**
			 * ############ ######### # ########## ######### ######## ##############.
			 * @protected
			 */
			onCardRendered: function() {
				this.set("ShowGridMask", false);
				const activeRow = this.getActiveRow();
				if (!activeRow) {
					const gridData = this.getGridData();
					const historyStateInfo = this.getHistoryStateInfo();
					const primaryColumnValue = historyStateInfo.primaryColumnValue;
					if (gridData.contains(primaryColumnValue)) {
						this.set("ActiveRow", primaryColumnValue);
					} else {
						const isGridLoading = this.get("IsGridLoading");
						const activeRowBeforeReload = this.get("ActiveRowBeforeReload");
						if (!isGridLoading && (activeRowBeforeReload !== primaryColumnValue)) {
							this.loadGridDataRecord(primaryColumnValue);
						}
					}
				}
				this.ensureActiveRowVisible();
				this.restoreCardScrollTop();
			},

			/**
			 * ######### ########.
			 * @protected
			 */
			closeCard: function() {
				this.hideCard();
				this.removeCardHistoryState();
				this.updateCardHeader();
				const isMultiSelectMode = this.$MultiSelect && this.$SelectAllMode;
				const isNotSelected = !isMultiSelectMode && this.$SelectedRows.length === 0;
				if (isNotSelected) {
					this.switchActiveRowActions();
				}
				this.reloadGridColumnsConfig(true);
				this.ensureActiveRowVisible();
			},

			/**
			 * Returns active row.
			 * @protected
			 * @param {String} [primaryColumnValue] Primary column value.
			 * @return {Object} Active row.
			 */
			getActiveRow: function(primaryColumnValue) {
				let activeRow = null;
				const activeRowPrimaryColumnValue = this.get("ActiveRow") || primaryColumnValue;
				if (activeRowPrimaryColumnValue) {
					activeRow = this.getGridDataRow(activeRowPrimaryColumnValue);
				}
				return activeRow;
			},

			/**
			 * Returns grid data row.
			 * @protected
			 * @param {String} primaryColumnValue Primary column value.
			 * @return {Object} Grid data row.
			 */
			getGridDataRow: function(primaryColumnValue) {
				const gridData = this.getGridData();
				return gridData ? gridData.find(primaryColumnValue) : undefined;
			},

			/**
			 * ############ ####### "########" ######## ######.
			 * @protected
			 * @param {String} buttonTag ### "########".
			 * @param {String} primaryColumnValue ########## ############# ######## ######.
			 */
			onActiveRowAction: function(buttonTag, primaryColumnValue) {
				switch (buttonTag) {
					case "edit":
						this.editRecord(primaryColumnValue);
						break;
					case "copy":
						this.copyRecord(primaryColumnValue);
						break;
					case "delete":
						this.deleteRecords();
						break;
					case "print":
						this.printRecord(primaryColumnValue);
						break;
					case "processEntryPoint":
						this.onProcessEntryPointGridRowButtonClick();
						break;
				}
			},

			/**
			 * Resets the state.
			 * @protected
			 */
			refreshHistoryState: function() {
				const sandbox = this.sandbox;
				const state = sandbox.publish("GetHistoryState");
				const currentState = state.state || {};
				if (currentState.moduleId === sandbox.id) {
					return;
				}
				this.sandbox.publish("PushHistoryState", {
					hash: state.hash.historyState,
					stateObj: {
						moduleId: sandbox.id
					}
				});
			},

			/**
			 * @param isDataReloaded
			 * @private
			 */
			_setSettingsCard: function(isDataReloaded) {
				const historyStateInfo = this.getHistoryStateInfo();
				const historyState = this.sandbox.publish("GetHistoryState");
				if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
					this.set("IsCardVisible", false);
					this.showCard();
					if (historyState.state.hasOwnProperty("cardScroll")) {
						const cardScroll = historyState.state.cardScroll;
						this.set("CardScrollTop", cardScroll);
					}
					if (!isDataReloaded) {
						this.reloadGridColumnsConfig(true);
					}
				} else if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.CARD) {
					this.reloadGridColumnsConfig(true);
					this.set("IsSectionVisible", true);
					this.hideSection();
				} else if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.SECTION) {
					this.set("IsSectionVisible", true);
					this.closeCard();
				}
				const foldersManagerOpened = historyState.state.foldersManagerOpened;
				if (foldersManagerOpened || this.get("IsFoldersVisible")) {
					this.onShowAllFoldersButtonClick();
				} else if (this.get("IsExtendedFiltersVisible")) {
					this.onShowCustomFilter();
				}
			},

			_checkNeedReloadDataOnRender: function() {
				const needDataReload = this.get("IsNeedReloadDataOnRender");
				needDataReload && this.set("IsNeedReloadDataOnRender", false);
				return this.get("GridSettingsChanged") || needDataReload;
			},

			/**
			 * Returns default section grid profile by grid profile name.
			 * @protected
			 * @returns {Object} Default section grid profile by grid profile name.
			 */
			getDefaultSectionGridProfile: function() {
				const profilePropertyName = this.getDataGridName();
				const entitySchema = this.getGridEntitySchema();
				if (Ext.isEmpty(entitySchema) || Ext.isEmpty(profilePropertyName)) {
					return {};
				}
				const defColumns = entitySchema.primaryDisplayColumn ? [entitySchema.primaryDisplayColumn] : [];
				const defType = profilePropertyName.indexOf(this.verticalProfileKeySuffix) > -1
					? Terrasoft.GridType.TILED
					: Terrasoft.GridType.LISTED;
				const defProfile = DefaultProfileHelper.getEntityProfile("", this.getGridEntitySchemaName(),
					defType, defColumns);
				return defProfile && defProfile.DataGrid;
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#getDefaultGridProfile
			 * @overridden
			 */
			applyDefaultGridProfile: function() {
				if (this.getActiveViewName() !== this.$GridDataViewName) {
					return null;
				}
				const defProfile = this.getDefaultSectionGridProfile() || {};
				const profilePropertyName = this.getDataGridName();
				const profile = this.getProfile();
				const key = this.getProfileKey();
				profile[profilePropertyName] = defProfile;
				Terrasoft.utils.saveUserProfile(key, profile, false, Terrasoft.emptyFn, this);
				return defProfile;
			},

			/**
			 * Initiates loading of third-party modules
			 * @protected
			 */
			onRender: function() {
				performanceManager.start(this.sandbox.id + "_AfterRender");
				this._subscribeOnFilterContainersResizeEvent();
				this.switchActiveRowActions();
				const isNeedReloadData = this._checkNeedReloadDataOnRender();
				if (this.get("Restored")) {
					this._subscribeOnGridContainersScrollEvent();
					this.reloadGridColumnsConfig(true);
					this._setSettingsCard(isNeedReloadData);
					this.changeFoldersAndDataViewContainerClasses({
						showFolders: false,
						folderEditMode: false
					});
					this.changeDataViewsContainerClasses({
						showFolders: false
					});
					this.setGridOffsetClass(this.get("GridOffsetLinesCount"));
					this.initMainHeaderCaption();
					if (isNeedReloadData === true) {
						this.reloadGridData();
					}
					this.hideBodyMask();
				} else {
					if (isNeedReloadData === true) {
						this.reloadGridData();
					}
					this.initCard();
					this.initFilters();
					if (!this.get("HasQuickFilterModule")) {
						this.loadActiveViewData();
					}
					this.createScrollTopBtn();
					this.loadSummary();
					this.initMainHeaderCaption();
					Ext.EventManager.onWindowResize(this.changeGridUtilitiesContainerSize, this);
					this.callParent(arguments);
				}
				const activeViewName = this.get("ActiveViewName");
				this.updateSectionContainerStyle(activeViewName);
				this.changeSelectedSideBarMenu();
				this.subscribeGridEvents();
				this.set("Restored", false);
				this.changeGridUtilitiesContainerSize();
				fixedSectionGridCaptionsPlugin.subscribeUpdateGridCaptionsContainer();
				performanceManager.stop(this.sandbox.id + "_AfterRender");
			},

			/**
			 * ######## ########## #### ####### # ##### ######.
			 * @protected
			 */
			changeSelectedSideBarMenu: function() {
				const moduleConfig = this.getModuleStructure();
				if (moduleConfig) {
					const sectionSchema = moduleConfig.sectionSchema;
					let config = moduleConfig.sectionModule + "/";
					if (sectionSchema) {
						config += moduleConfig.sectionSchema + "/";
					}
					this.sandbox.publish("SelectedSideBarItemChanged", config, ["sectionMenuModule"]);
				}
			},

			/**
			 * Initialization of action button collections.
			 * @private
			 */
			_initCollections: function() {
				this.set("SeparateModeActionsButtonMenuItems", this.Ext.create("Terrasoft.BaseViewModelCollection"));
				this.set("CombinedModeActionsButtonMenuItems", this.Ext.create("Terrasoft.BaseViewModelCollection"));
				this.set("SelectedRows", []);
			},

			/**
			 * Initializes the initial state of the view model.
			 * @protected
			 * @overridden
			 */
			init: function(callback, scope) {
				performanceManager.start(this._getPerformanceManagerLabel(scope) + "_Init");
				this.on("change:RecordsCount", this.onRecordsCountChanged, this);
				const afterParentInitFn = this._afterParentInit.bind(this, callback, scope);
				this.callParent([afterParentInitFn, this]);
				if (Terrasoft.Features.getIsDisabled("SectionLoadingMask")) {
					this.on("change:IsGridLoading", this.onIsGridLoadingChange, this);
				}
			},

			/**
			 * Gets label of the performance manager.
			 * @private
			 * @param {Object} context Context of the sandbox.
			 * @return {String} Label of the performance manager.
			 */
			_getPerformanceManagerLabel: function(context) {
				if (context && context.hasOwnProperty("sandbox")) {
					return context.sandbox.id;
				}
				if (this && this.hasOwnProperty("sandbox")) {
					return this.sandbox.id;
				}
			},

			/**
			 * Initialize section. Trigger after parent init method.
			 * @private
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Scope of he callback function.
			 */
			_afterParentInit: function(callback, scope) {
				Terrasoft.chain(
					this.checkAvailability,
					this.initViewModelValuesFromSysSettings,
					this.initActiveViewSettingsProfile,
					this.initData,
					this.initLeftSectionContainerSize,
					this._initSectionAttributes,
					this._initSectionSubscribers,
					this.loadFilters,
					this.initSummarySettingsProfile,
					function() {
						performanceManager.stop(this._getPerformanceManagerLabel(scope) + "_Init");
						performanceManager.start(this._getPerformanceManagerLabel(scope) + "_BeforeRender");
						Ext.callback(callback, scope);
					}, this);
				this.initHelpUrl(Terrasoft.emptyFn, this);
				this.initPrintButtonsMenu(Terrasoft.emptyFn, this);
				this.initObjectChangeLogSettingsMenuItemVisibility();
			},

			/**
			 * Initialize section attributes.
			 * @private
			 * @param {Function} callback Callback function.
			 */
			_initSectionAttributes: function(callback) {
				this.canUseWizard(function(result) {
					this.set("CanUseWizard", result);
				}, this);
				this.checkCanManageAnalytics();
				this.initSectionFiltersCollection();
				this.initSortActionItems();
				this.initDataViews();
				this._initCollections();
				this.initActionButtonMenu("Separate", this.getSectionActions());
				this.initSectionViewOptionsButtonMenu(this.getViewOptions());
				this.initCanCustomize();
				this.initCanOpenDcmPageInSectionWizard();
				this.initEditPages();
				this.initCardContainer();
				this.initContextHelp();
				this.initAddRecordButtonParameters();
				this.initFolders();
				this.initRowCount();
				this.initIsPageable();
				this.initIsActionButtonsContainerVisible();
				this.initUpdateAction();
				this.initResetAction();
				this.initActionsButtonHeaderMenuItemCaption();
				this.mixins.GridUtilities.init.call(this);
				this.mixins.FileImportMixin.init.call(this);
				this.initRunProcessButtonMenu(false);
				this.initActionsButtonCaption();
				this.initTags(this.entitySchemaName);
				this.initSectionHeaderContainerVisibility();
				Ext.callback(callback, this);
			},

			checkCanManageAnalytics: Terrasoft.emptyFn,
			/**
			 * Initialize section subscribers.
			 * @private
			 * @param {Function} callback Callback function.
			 */
			_initSectionSubscribers: function(callback) {
				this.subscribeInitFilterFromStorage();
				this.subscribeSandboxEvents();
				this.subscribeIsCardVisibleChange();
				this.subscribeGetRunProcessesProperties();
				this.subscribeCanShowTags();
				this.subscribeOnMultiSelectChange();
				this.subscribeOnSelectedRowsChange();
				Ext.callback(callback, this);
			},

			/**
			 * @private
			 */
			 _getAngularScrollableGridContainer: function() {
				const gridWrapperSelector = ".grid-dataview-container-wrapper-wrapClass";
				const body = Ext.getBody();
				return body.select(gridWrapperSelector + " .grid-listed").first()
					|| body.select(gridWrapperSelector).first();
			},

			/**
			 * ######### ######## ## ######### ## ########## #######.
			 * @protected
			 */
			initUpdateAction: function() {
				this.sandbox.subscribe("UpdateSection", this.updateSection, this, [this.name + "_UpdateSection"]);
			},

			/**
			 * ######### ######.
			 * @protected
			 * @virtual
			 */
			updateSection: function() {
				this.reloadGridData();
				this.reloadSummaryModule();
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#onDeleted
			 * @overridden
			 */
			onDeleted: function() {
				this.reloadSummaryModule();
			},

			/**
			 * Reloads summary module.
			 */
			reloadSummaryModule: function() {
				this.sandbox.publish("ReloadSummaryModule", null, [this.sandbox.id]);
			},

			/**
			 * ######### ######## ## ######### # ###### #######
			 * @protected
			 */
			initResetAction: function() {
				this.sandbox.subscribe("ResetSection", function() {
					const storage = Terrasoft.configuration.Storage.Filters =
						Terrasoft.configuration.Storage.Filters || {};
					storage[this.name] = {};

					const profile = this.get("Profile");
					profile.Filters = {};
					Terrasoft.utils.saveUserProfile(this.getProfileKey(), profile, false);

					this.set("IgnoreFilterUpdate", true);
					this.onHideCustomFilter();
					this.onHideFoldersModule();
					const emptyFilter = {
						value: "",
						displayValue: ""
					};
					const quickFilterModuleId = this.getQuickFilterModuleId();
					this.sandbox.publish("UpdateExtendedFilter", emptyFilter, [quickFilterModuleId]);
					this.sandbox.publish("UpdateFolderFilter", null, [quickFilterModuleId]);
					this.set("IgnoreFilterUpdate", false);

					const sectionFilters = this.get("SectionFilters");
					sectionFilters.clear();
					this.reloadGridData();
				}, this, [this.name + "_ResetSection"]);
			},

			/**
			 * Sets section header caption.
			 * @protected
			 */
			initMainHeaderCaption: function() {
				let caption = this.getActiveViewCaption();
				const dataViews = this.get("DataViews");
				const activeViewName = this.getActiveViewName();
				const activeView = dataViews.get(activeViewName);
				const markerValue = activeView.caption;
				if (Terrasoft.Features.getIsEnabled("OldUI")) {
					caption = markerValue;
				}
				const hidePageCaption = this.$IsSectionVisible && !this.$IsCardVisible;
				this.sandbox.publish("ChangeHeaderCaption", {
					caption: caption || this.getDefaultGridDataViewCaption(),
					markerValue: markerValue,
					dataViews: this.get("DataViews"),
					moduleName: this.name,
					hidePageCaption: hidePageCaption
				});
			},

			/**
			 * Get active view caption.
			 * @private
			 * @return {String} Active view caption.
			 */
			getActiveViewCaption: function() {
				if (this.get("IsLookupSection")) {
					const lookupSectionInfo = this.getModuleStructure("Lookup");
					return lookupSectionInfo.moduleCaption;
				}
				const dataViews = this.get("DataViews");
				const activeViewName = this.getActiveViewName();
				const activeView = dataViews.get(activeViewName);
				return activeView.caption;
			},

			/**
			 *
			 * @protected
			 */
			initCardContainer: function() {
				this.set("IsCardVisible", false);
			},

			/**
			 *
			 * @protected
			 */
			initCard: function() {
				const historyStateInfo = this.getHistoryStateInfo();
				if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
					const schemaName = historyStateInfo.schemas[1];
					const operation = historyStateInfo.operation;
					const primaryColumnValue = historyStateInfo.primaryColumnValue;
					this.openCard(schemaName, operation, primaryColumnValue);
				}
			},

			/**
			 * Sets a class for a section container, depending on the active view.
			 * @protected
			 * @param {String} viewName Active view.
			 */
			updateSectionContainerStyle: Ext.emptyFn,

			/**
			 * Initializes section data views.
			 * @protected
			 */
			initDataViews: function() {
				const defaultDataViews = this.getDefaultDataViews();
				const dataViews = this.Ext.create("Terrasoft.Collection");
				const savedActiveViewName = this.getActiveViewNameFromProfile();
				Terrasoft.each(defaultDataViews, function(dataView, dataViewName) {
					dataViews.add(dataViewName, dataView, dataView.index);
					if (this.validationViewVisible()) {
						dataView.active = (dataViewName === savedActiveViewName);
					}
				}, this);
				this.set("DataViews", dataViews);
				this.set("IsGridLoading", false);
				const mainHeaderModuleId = this._getMainHeaderModuleId();
				this.sandbox.subscribe("ChangeDataView", this.changeDataView, this,
					[mainHeaderModuleId]);
				this.sandbox.publish("InitDataViews", {
					caption: this.getDefaultGridDataViewCaption(),
					dataViews: dataViews,
					moduleName: this.name,
					async: true
				});
				this.sandbox.subscribe("GetActiveViewName", function() {
					return this.getActiveViewName();
				}, this);
				this.setActiveView(this.getActiveViewName(), false);
			},

			/**
			 * @private
			 */
			_getMainHeaderModuleId: function() {
				const headerModuleName = Terrasoft.isAngularHost ? "MainHeader8xModule" : "MainHeaderModule";
				return "ViewModule_" + headerModuleName + "_" + this.name;
			},

			/**
			 * Check view visible.
			 * @return {boolean} Return true, if view should be visible, otherwise false.
			 */
			validationViewVisible: function() {
				return this.getActiveViewNameFromProfile() !== "";
			},

			/**
			 * ######## ######## ############.
			 * #### ######## ####### - #########, #### ###### ###### - #########.
			 * ############# ########### ############# # ##### ##########
			 * @param {Object/String} viewConfig ######## #############
			 */
			changeDataView: function(viewConfig) {
				if ((typeof viewConfig !== "string") && viewConfig.moduleName !== this.name) {
					return;
				}
				if (this.get("IsCardVisible")) {
					this.closeCard();
				}
				if (!this.get("IsSectionVisible")) {
					this.showSection();
				}
				const viewName = (typeof viewConfig === "string") ? viewConfig : viewConfig.tag;
				this.setActiveView(viewName, true);
				const dataViews = this.get("DataViews");
				const activeView = dataViews.get(viewName);
				const activeViewCaption = activeView.caption;
				this.updateSectionContainerStyle(viewName);
				this.refreshHistoryState();
				this.sandbox.publish("ChangeHeaderCaption", {
					caption: activeViewCaption || this.getDefaultGridDataViewCaption(),
					dataViews: this.get("DataViews"),
					moduleName: this.name
				});
				this.changeGridUtilitiesContainerSize();
			},

			/**
			 * ############## ######### ###### ########.
			 * @protected
			 */
			initGridData: function() {
				this.set("GridData", this.Ext.create("Terrasoft.BaseViewModelCollection"));
			},

			/**
			 * ############## ######### ###### ######## # ###### ######### #########.
			 * @protected
			 * @param {Function} callback callback-#######.
			 * @param {Object} scope ######## ########## callback-#######.
			 */
			initData: function(callback, scope) {
				this.initGridData();
				this.initGridRowViewModel(callback, scope);
			},

			/**
			 * ######### ###### ######.
			 * @protected
			 */
			loadSummary: function() {
				if (this.destroyed) {
					return;
				}
				const sectionModuleId = this.sandbox.id;
				this.sandbox.subscribe("GetSectionModuleId", function() {
					return sectionModuleId;
				});
				this.sandbox.subscribe("GetSectionSchemaName", function() {
					return this.entitySchema.name;
				}, this, [this.getSummaryModuleSandboxId()]);
				this.loadSummaryModule();
			},

			/**
			 * Handles summary module items update.
			 * @protected
			 * @virtual
			 * @param {Terrasoft.Collection} itemsList New summary items.
			 */
			handleSummaryItemsUpdate: function(itemsList) {
				const schema = Ext.get(this.name + "Container");
				const count = itemsList.getCount();
				if (count > 0) {
					schema.addCls("has-summary");
				} else {
					schema.removeCls("has-summary");
				}
				if (this._isCanUseCountOver()) {
					this.set("RecordsCount", 0);
					const summaryCollection = this.Terrasoft.map(itemsList.getItems(), function(item) {
						return item.array;
					});
					this.set("SummaryHasCount", this._hasSummaryCountFunction(summaryCollection));
					if (!this.$SummaryHasCount) {
						return;
					}
					this.reloadGridData();
				}
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#initQueryColumns
			 * @overridden
			 */
			initQueryColumns: function(esq) {
				this.mixins.GridUtilities.initQueryColumns.apply(this, arguments);
				if (this._isCanUseCountOver() && this.$SummaryHasCount) {
					this.addCountOverColumn(esq);
				}
			},

			/**
			 * ######### ###### ########### ######.
			 */
			loadSummaryModule: function() {
				this.sandbox.loadModule("SummaryModuleV2", {
					renderTo: "SectionSummaryContainer"
				});
			},

			/**
			 * @inheritdoc Terrasoft.ContextHelpMixin#getContextHelpId
			 * @overridden
			 */
			getContextHelpId: function() {
				return this.get("ContextHelpId");
			},

			/**
			 * @inheritdoc Terrasoft.ContextHelpMixin#getContextHelpCode
			 * @overridden
			 */
			getContextHelpCode: function() {
				return this.name;
			},

			/**
			 * Returns the identifier of context help for working with static groups.
			 * @protected
			 * @virtual
			 * @return {String} identifier of context help for working with static groups.
			 */
			getStaticFolderContextHelpId: function() {
				return ConfigurationConstants.ContextHelp.StaticFolderHelpPageId;
			},

			/**
			 * Returns code context help for working with static groups.
			 * @protected
			 * @virtual
			 * @return {String} code context help for working with static groups.
			 */
			getStaticFolderContextHelpCode: function() {
				return ConfigurationConstants.ContextHelp.StaticFolderHelpPageCode;
			},

			/**
			 * Initialize link to help.
			 * @protected
			 * @param {Function} callback callback function.
			 * @param {Object} scope callback function scope.
			 */
			initHelpUrl: function(callback, scope) {
				const contextHelpConfig = this.getContextHelpConfig();
				let contextHelpCode;
				let contextHelpId;
				if (contextHelpConfig) {
					contextHelpCode = contextHelpConfig.contextHelpCode;
					contextHelpId = contextHelpConfig.contextHelpId;
				}
				const staticFolderHelpConfig = {
					callback: function(url) {
						this.set("StaticFolderHelpUrl", url);
						callback.call(scope);
					},
					scope: this,
					contextHelpId: this.getStaticFolderContextHelpId(),
					contextHelpCode: this.getStaticFolderContextHelpCode()
				};
				const helpConfig = {
					callback: function(url) {
						this.set("HelpUrl", url);
						AcademyUtilities.getUrl(staticFolderHelpConfig);
					},
					scope: this,
					contextHelpId: contextHelpId,
					contextHelpCode: contextHelpCode
				};
				AcademyUtilities.getUrl(helpConfig);
			},

			/**
			 * Initializes the initial value of the visibility area of the expanded group selection.
			 * @protected
			 */
			initFolders: function() {
				this.set("IsFoldersVisible", false);
				this.set("IsExtendedFiltersVisible", false);
			},

			/**
			 * Initialize caption of add button.
			 * @protected
			 */
			initAddRecordButtonParameters: function() {
				let caption = this.get("Resources.Strings.AddRecordButtonCaption");
				let tag = Terrasoft.GUID_EMPTY;
				const editPages = this.get("EditPages");
				const editPagesCount = editPages.getCount();
				if (editPagesCount === 1) {
					const entitySchemaName = this.getEntitySchemaName();
					const sectionEntity = Terrasoft.ModuleUtils.getEntityStructureByName(entitySchemaName);
					const multiPageSection = Boolean(sectionEntity && sectionEntity.attribute);
					const editPage = editPages.getByIndex(0);
					tag = editPage.get("Tag");
					if (!multiPageSection) {
						caption = editPage.get("Caption") || caption;
					}
				}
				this.set("AddRecordButtonCaption", caption);
				this.set("AddRecordButtonTag", tag);
			},

			/**
			 * Initializes the initial value of the number of simultaneous downloads
			 * records page by page
			 * @protected
			 */
			initRowCount: function() {
				this.set("RowCount", 15);
			},

			/**
			 * Initializes the default value of the property of usage necessity page by page loading.
			 * @protected
			 */
			initIsPageable: function() {
				this.set("IsPageable", true);
			},

			/**
			 * Initializes visible container ActionButtons.
			 * @protected
			 */
			initIsActionButtonsContainerVisible: function() {
				this.set("IsActionButtonsContainerVisible", true);
			},

			/**
			 * ########## ######### ############# ########
			 */
			initFixedFiltersConfig: Ext.emptyFn,

			/**
			 * ######### ###### # ###### ######## #############.
			 * @virtual
			 */
			loadActiveViewData: function() {
				const activeViewName = this.getActiveViewName();
				if (activeViewName === this.get("GridDataViewName")) {
					this.loadGridData();
				}
			},

			/**
			 * ######### ###### ##### ########## ########.
			 * @overridden
			 */
			afterFiltersUpdated: function() {
				this.scrollTop();
				this.loadActiveViewData();
				this.sandbox.publish("FiltersChanged", null, [this.sandbox.id]);
			},

			/**
			 * ########## ############ ### ########
			 * FixedFilters, CustomFilters, FolderFilters, demoFilters
			 * @protected
			 * @param {String} key
			 * @return {Object}
			 */
			getFilter: function(key) {
				const filters = this.getFilters();
				return filters.find(key) ? filters.get(key) : null;
			},

			/**
			 * ############# ############ ### ########
			 * FixedFilters, CustomFilters, FolderFilters, demoFilters
			 * @protected
			 * @param {String} key
			 * @param {Object} value
			 * @param {Object} filtersValue
			 */
			setFilter: function(key, value, filtersValue) {
				const filters = this.get("SectionFilters");
				if (key) {
					filters.removeByKey(key);
					if (key === "FolderFilters" && value.isEmpty()) {
						this.set("CurrentFolder", null);
					}
					filters.add(key, value);
					this.setVerticalGridOffset(filters);
					this.saveFilter(key, filtersValue, value);
				} else if (value) {
					this.setVerticalGridOffset(filters);
					value.each(function(filter) {
						this.setFilter(filter.key, filter);
					}, this);
				}
			},

			/**
			 * ############# ##### ### ############ ####### ############# ####### # ########### ##
			 * ########## ########.
			 * @param {Terrasoft.FilterGroup|*} filters ########### # ####### #######.
			 */
			setVerticalGridOffset: function(filters) {
				const linesCount = this.getVerticalGridOffset(filters);
				this.set("GridOffsetLinesCount", linesCount);
				this.setGridOffsetClass(linesCount);
			},

			/**
			 * ############ ########## #####, ########## ######### # ###### ############# #######.
			 * @param {Terrasoft.FilterGroup} filters ########### # ####### ############# #######.
			 * @return {Number}
			 */
			getVerticalGridOffset: function(filters) {
				let linesCount = 1;
				if (this.get("UseTagModule") === true) {
					linesCount++;
				}
				const fixedFilterConfig = this.get("FixedFilterConfig");
				if (!Ext.isEmpty(fixedFilterConfig)) {
					linesCount += fixedFilterConfig.filters.length;
				}
				if (!Ext.isEmpty(filters)) {
					filters.each(function(filter) {
						let count = 1;
						if (filter.getCount) {
							count = filter.getCount();
						} else if (filter.length) {
							count = filter.length;
						}
						const key = filter.key;
						if (key === "FixedFilters") {
							linesCount += this.getVerticalGridOffsetForFixedFilter(filter);
						} else if (count > 1 && key === TagConstantsV2.TagFilterKey) {
							linesCount += count - 1;
						} else {
							linesCount += count;
						}
					}, this);
				}
				return linesCount;
			},

			/**
			 * ############ ########## ############## #####, ########## ########## ########## ############# ########
			 * # ###### ############# #######.
			 * ######## ###### ######### ######## ####### ## ############## ######## #### ######.
			 * ############ ######## ## ############## ########## # ####### # ###### "OwnerDefaultFilter".
			 * @param {Terrasoft.FilterGroup} filters ########### # ####### ############# #######.
			 * @return {Number}
			 */
			getVerticalGridOffsetForFixedFilter: function(filters) {
				let linesCount = 0;
				filters.each(function(filterItem) {
					if (filterItem.key !== "PeriodFilter") {
						if (filterItem.collection) {
							const ownerFilter = filterItem.collection.findBy(
								function(item, key) {
									return (key === "OwnerDefaultFilter");
								});
							if (ownerFilter) {
								linesCount += ownerFilter.rightExpressions.length;
							} else {
								linesCount += filterItem.getCount();
							}
						} else {
							linesCount += filterItem.rightExpressions.length;
						}
					}
				}, this);
				return linesCount;
			},

			/**
			 * Sets offset for section container.
			 * @param {Number|*} linesCount Lines count.
			 */
			setGridOffsetClass: function(linesCount) {
				const dataViewsContainer = Ext.get("DataViewsContainer");
				if (dataViewsContainer) {
					for (let i = 1; i <= 10; i++) {
						dataViewsContainer.removeCls("filter-line-" + i);
					}
					if (!this.needToSetOffset(linesCount)) {
						return;
					}
					linesCount = linesCount > 10 ? 10 : linesCount;
					dataViewsContainer.addCls("filter-line-" + linesCount);
				}
			},

			/**
			 * Checks the necessity of section container offset.
			 * @param {Number|*} linesCount Lines count.
			 * @return {Boolean}
			 */
			needToSetOffset: function(linesCount) {
				return (linesCount != null);
			},

			/**
			 * Gets section filters key.
			 * @protected
			 * @return {String}
			 */
			getFiltersKey: function() {
				const gridDataViewName = this.get("GridDataViewName");
				const schemaName = this.name;
				return schemaName + gridDataViewName + "Filters";
			},

			/**
			 * Handles an event of changing IsGridLoading property.
			 * @protected
			 * @param {Object} model Model with changed property.
			 * @param {Object} value New property value.
			 */
			onIsGridLoadingChange: function(model, value) {
				if (Terrasoft.Features.getIsDisabled("SectionLoadingMask")) {
					if (value === true) {
						this._showGridLoadingMask();
					} else {
						this._hideGridLoadingMask();
					}
				}
			},

			/**
			 * Displays loading mask on the grid container by 'IsGridLoadingMaskSelector' selector.
			 * Mask will be shown when IsClearGridData is true and IsGridDataLoaded is false.
			 * @private
			 */
			_showGridLoadingMask: function() {
				const maskSelector = this.get("IsGridLoadingMaskSelector");
				if (Ext.query(maskSelector).length < 1) {
					return;
				}
				const isClearGridData = this.get("IsClearGridData");
				const isDataLoaded = this.get("IsGridDataLoaded");
				if (isClearGridData === true && isDataLoaded === false) {
					const maskConfig = {
						selector: maskSelector,
						timeout: 30,
						isCustomMask: true
					};
					this.maskId = this.showBodyMask(maskConfig);
				}
			},

			/**
			 * Removes grid loading mask.
			 * @private
			 */
			_hideGridLoadingMask: function() {
				this.hideBodyMask({
					maskId: this.maskId,
					selector: this.get("IsGridLoadingMaskSelector"),
					isCustomMask: true
				});
			},

			/**
			 * Handles an event of converter IsGridLoading property.
			 * @private
			 * @param {Boolean} value Property value.
			 * @return {Boolean} New property value.
			 */
			isGridLoadingConverter: function(value) {
				const isClearGridData = this.get("IsClearGridData");
				if (!isClearGridData) {
					return value;
				}
				return !isClearGridData;
			},

			/**
			 * Gets serializable filter.
			 * @private
			 * @param {Terrasoft.FilterGroup} filter Filter group.
			 * @return
			 */
			getSerializableFilter: function(filter) {
				filter.serializationInfo = {serializeFilterManagerInfo: true};
				const serializableFilter = {};
				filter.getSerializableObject(serializableFilter, filter.serializationInfo);
				return serializableFilter;
			},

			/**
			 * @param filterValue
			 * @param serializableFilter
			 * @private
			 */
			_filterValueEncode: function(filterValue, serializableFilter) {
				Terrasoft.each(filterValue, function(item) {
					const f = item.filter = item.value || "";
					let isSerializedFilter = (typeof f === "string");
					const symbolsArray = ["[", "]", "{", "}"];
					let i = 0;
					let symbol;
					while (isSerializedFilter && (symbol = symbolsArray[i++])) {
						isSerializedFilter = f.indexOf(symbol) > -1;
					}
					if (!isSerializedFilter) {
						item.filter = Terrasoft.encode(serializableFilter);
					}
				});
			},

			/**
			 * @param sessionFilters
			 * @param profileFilters
			 * @param filterKey
			 * @private
			 */
			_removeFiltersProperty: function(sessionFilters, profileFilters, filterKey) {
				if (this.isNotEmpty(sessionFilters)) {
					delete sessionFilters[filterKey];
				}
				if (this.isNotEmpty(profileFilters)) {
					delete profileFilters[filterKey];
				}
			},

			/**
			 * @param filterKey
			 * @param filterValue
			 * @private
			 */
			_reloadSectionFiltersValue: function(filterKey, filterValue) {
				const sectionFiltersValue = this.get("SectionFiltersValue");
				sectionFiltersValue.removeByKey(filterKey);
				sectionFiltersValue.add(filterKey, filterValue);
			},

			/**
			 * Saves filter to user profile (and/or to session).
			 * @param {String} filterKey Filter name.
			 * @param {String} filterValue Serialized filter value.
			 * @param {Object} filter Filter.
			 */
			saveFilter: function(filterKey, filterValue, filter) {
				if (!filterValue) {
					return;
				}
				const sessionFilters = this.getSessionFilters();
				const profileFilters = this.getProfileFilters();
				this._reloadSectionFiltersValue(filterKey, filterValue);
				const serializableFilter = this.getSerializableFilter(filter);
				switch (filterKey) {
					case "CustomFilters":
						this._filterValueEncode(filterValue, serializableFilter);
						if (this.isNotEmpty(filterValue)) {
							sessionFilters[filterKey] = profileFilters[filterKey] = filterValue;
						} else {
							this._removeFiltersProperty(sessionFilters, profileFilters, filterKey);
						}
						this._saveUserProfile(profileFilters, false, true);
						break;
					case "FolderFilters":
						sessionFilters[filterKey] = profileFilters[filterKey] = filterValue;
						this._saveUserProfile(profileFilters, false, true);
						break;
					case "FixedFilters":
						filterValue.filter = Terrasoft.encode(serializableFilter);
						profileFilters[filterKey] = {Fixed: filterValue};
						this._saveUserProfile(profileFilters, false, true);
						break;
					case "TagFilters":
						serializableFilter.tags = filterValue;
						profileFilters[filterKey] = [serializableFilter];
						this._saveUserProfile(profileFilters, false, true);
						break;
					default:
						sessionFilters[filterKey] = profileFilters[filterKey] = [
							{
								filter: filter.serialize()
							}
						];
						this._saveUserProfile(profileFilters, false, false);
				}
			},

			/**
			 * @param profileFilters
			 * @param isDefault
			 * @private
			 */
			_saveUserProfile: function(profileFilters, isDefault, isSetProfileFilters) {
				Terrasoft.saveUserProfile(this.getFiltersKey(), profileFilters, isDefault);
				if (isSetProfileFilters) {
					this.set("ProfileFilters", profileFilters);
				}
			},

			/**
			 * Gets session (in-memory) filters.
			 * @protected
			 * @return {Object}
			 */
			getSessionFilters: function() {
				const storage = Terrasoft.configuration.Storage.Filters = Terrasoft.configuration.Storage.Filters || {};
				const sessionFilters = storage[this.name] = storage[this.name] || {};
				return sessionFilters;
			},

			/**
			 * Gets profile filters.
			 * @protected
			 * @return {Object}
			 */
			getProfileFilters: function() {
				return this.get("ProfileFilters") || {};
			},

			/**
			 * Gets section folder manager settings.
			 * @return {Object}
			 */
			getFolderManagerConfig: function() {
				const activeFolderId = this.get("activeFolderId");
				this.set("activeFolderId", null);
				return {
					entitySchemaName: this.getFolderEntityName(),
					inFolderEntitySchemaName: this.getInFolderEntityName(),
					entityColumnNameInFolderEntity: this.getEntityColumnNameInFolderEntity(),
					sectionEntitySchema: this.entitySchema,
					activeFolderId: activeFolderId,
					useStaticFolders: this.get("UseStaticFolders"),
					folderManagerViewModelClassName: this.folderManagerViewModelClassName,
					folderFilterViewId: this.folderManagerViewConfigGenerator,
					folderFilterViewModelId: this.folderManagerViewModelConfigGenerator
				};
			},

			/**
			 * Get EntitySchemaFilterProviderModule class name for current schema.
			 * @protected
			 * @virtual
			 * @return {String} class name.
			 */
			getEntitySchemaFilterProviderModuleName: function() {
				return "EntitySchemaFilterProviderModule";
			},

			/**
			 * Filters current section.
			 * @param {Object} args Arguments.
			 * @param {String} args.schemaName Schema name.
			 * @param {Object} args.entitySchema Entity schema.
			 * @param {Object} args.value Value.
			 * @return {Boolean} true if filters were applied.
			 */
			filterCurrentSection: function(args) {
				if (args.schemaName !== "" && args.schemaName !== this.entitySchema.name) {
					return false;
				}
				const column = {
					value: this.entitySchema.primaryDisplayColumn.name,
					displayValue: this.entitySchema.primaryDisplayColumn.caption,
					dataValueType: this.entitySchema.primaryDisplayColumn.dataValueType
				};
				const filters = [
					{
						value: args.value,
						column: column
					}
				];
				const quickFilterModuleId = this.getQuickFilterModuleId();
				this.sandbox.publish("SetCustomFilters", filters, [quickFilterModuleId]);
				return true;
			},

			/**
			 * ######### ######## ## #########, ####### ########### #######.
			 * @protected
			 */
			subscribeSandboxEvents: function() {
				const cardModuleSandboxId = this.getCardModuleSandboxId();
				this.sandbox.subscribe("ReloadSectionRow", function(primaryColumnValue) {
					this.loadGridDataRecord(primaryColumnValue);
				}, this, [cardModuleSandboxId]);
				this.sandbox.subscribe("OpenCardInChain", function(config) {
					return this.openCardInChain(config);
				}, this, []);
				this.sandbox.subscribe("CardRendered", function() {
					this.onCardRendered();
				}, this, [cardModuleSandboxId]);
				this.sandbox.subscribe("NeedHeaderCaption", function() {
					this.initMainHeaderCaption();
				}, this);
				this.sandbox.subscribe("GetCardActions", function(actionMenuItems) {
					this.initActionButtonMenu("Combined", actionMenuItems);
				}, this, [cardModuleSandboxId]);
				this.sandbox.subscribe("GetCardViewOptions", this.initCardViewOptionsButtonMenu, this,
					[cardModuleSandboxId]);
				this.sandbox.subscribe("GetDataViews", this.getDataViews, this, this.getCardModuleSandboxIdentifiers());
				this.initCardChangedHandler();
				this.initGetFiltersMessage();
				this.initCloseCardSubscription();
				this.initCardModuleResponseSubscription();
				this.initAddCardInfoSubscription();
				const quickFilterModuleId = this.getQuickFilterModuleId();
				const folderManagerModuleId = this.getFolderManagerModuleId();
				const extendedFilterModuleId = this.getExtendedFilterEditModuleId();
				this.sandbox.subscribe("ShowFolderTree", this.showFolderTree, this,
					[quickFilterModuleId, extendedFilterModuleId]);
				this.sandbox.subscribe("SetFolderFilter", function(currentFolder) {
					this.set("CurrentFolder", currentFolder);
				}, this, [quickFilterModuleId]);
				this.sandbox.subscribe("CustomFilterExtendedMode", this.showCustomFilterExtendedMode, this,
					[quickFilterModuleId, folderManagerModuleId]);
				this.sandbox.subscribe("GetFolderEntitiesNames", this.getFolderEntitiesNames, this,
					[quickFilterModuleId, folderManagerModuleId, extendedFilterModuleId]);
				this.sandbox.subscribe("HideFolderTree", this.onHideFoldersModule, this, [quickFilterModuleId]);
				this.sandbox.subscribe("InitQuickAddMenuItems", function(buttonMenuItems) {
					this.set("QuickAddMenuItems", buttonMenuItems);
					return true;
				}, this, [cardModuleSandboxId]);
				this.sandbox.subscribe("TagChanged", this.reloadTagCount, this, [this.getTagModuleSandboxId()]);
				this.sandbox.subscribe("EntityInitialized", function() {
					this.initTagButton();
				}, this, [cardModuleSandboxId]);
				this.sandbox.subscribe("ChangeGridUtilitiesContainerSize", this.changeGridUtilitiesContainerSize, this);
				this.sandbox.subscribe("GetQueryOptimizeOptions", this.getFolderFilterOptimizationOptions, this,
					[this.getSummaryModuleSandboxId()]);
				this.sandbox.subscribe("SummaryItemsUpdate", this.handleSummaryItemsUpdate,
					this, [this.getSummaryModuleSandboxId()]);
				this.sandbox.subscribe("NeedToUseQueryMetrics", this.isNeedToUseQueryMetrics, this,
					[this.getSummaryModuleSandboxId()]);
				this.sandbox.subscribe("SaveSummaryOptimizeOptions", this.setSummaryOptimizeOptions, this,
					[this.getSummaryModuleSandboxId()]);
				this.sandbox.subscribe("IsNeedCalculateSummary", this.isNeedCalculateSummary, this,
					[this.getSummaryModuleSandboxId()]);
			},

			/**
			 * Sets summary optimization options.
			 * @param {Object} result Result optimization.
			 */
			setSummaryOptimizeOptions: function(result) {
				if (result && result.usedReExecute) {
					this._saveFolderFilterQueryOptimization(result.success, this._setOptimizationTypeByCount);
				}
			},

			/**
			 * Checks if need calculate summary.
			 * @returns Boolean value.
			 */
			isNeedCalculateSummary: function() {
				return true;
			},

			/**
			 * Determines, is need to use metrics for queries.
			 * @return {Boolean}
			 */
			isNeedToUseQueryMetrics: function() {
				return this._isUseQueryOptimize() &&
					this.isNotEmpty(this._getCurrentFolderFilterWithSearchType());
			},

			/**
			 * Returns tag module identifier.
			 * @return {String} Tag module identifier.
			 */
			getTagModuleSandboxId: function() {
				return this.sandbox.id + "_TagModule";
			},

			/**
			 * Returns folder entities names group.
			 * @protected
			 * @virtual
			 * @return {Object} Folder entities names group.
			 */
			getFolderEntitiesNames: function() {
				return {
					folderSchemaName: this.getFolderEntityName(),
					inFolderSchemaName: this.getInFolderEntityName(),
					entityColumnNameInFolderEntity: this.getEntityColumnNameInFolderEntity(),
					tagSchemaName: this.tagSchemaName,
					inTagSchemaName: this.inTagSchemaName,
					useTagModule: this.get("UseTagModule"),
					useFolderFilter: this.get("UseFolderFilter")
				};
			},

			/**
			 * ######### ####### ###### # ######## ####### ######## ########## ######.
			 * @protected
			 * @param {Object} typeColumnValue ######## ####### #### ########.
			 */
			onQuickAddRecord: function() {
				const typeColumnValue = arguments[arguments.length - 1];
				this.sandbox.publish("OnQuickAddRecord", typeColumnValue, [this.getCardModuleSandboxId()]);
			},

			/**
			 * ######## ####### ########### #### ######## ########## ###########.
			 * @return {Boolean}
			 */
			getQuickAddButtonVisible: function() {
				const collection = this.get("QuickAddMenuItems");
				return (!Ext.isEmpty(collection) && !collection.isEmpty());
			},

			/**
			 * ######### ######## ## ####### ######### ######## ######## ######### ########.
			 * @private
			 */
			subscribeIsCardVisibleChange: function() {
				this.on("change:IsCardVisible", this.onCardVisibleChanged, this);
			},

			/**
			 * ######### ######## ## ####### ######### ######## ######## "######## #########, ####### ####".
			 * @private
			 */
			subscribeCanShowTags: function() {
				this.on("change:CanShowTags", this.onCanShowTagsChanged, this);
			},

			/**
			 * ########## ####### ######## ######## ######## "######## #########, ####### ####".
			 * @private
			 */
			onCanShowTagsChanged: function() {
				if (this.get("CanShowTags")) {
					this.showTagModule();
					this.set("CanShowTags", false);
				}
			},

			/**
			 * ############ #####-########## ## ######### GetRunProcessesProperties.
			 * @protected
			 */
			subscribeGetRunProcessesProperties: function() {
				this.sandbox.subscribe("GetRunProcessesProperties", function(properties) {
					Terrasoft.each(properties, function(property) {
						const viewModelItem = this.get(property.key);
						if (viewModelItem instanceof Terrasoft.Collection) {
							viewModelItem.reloadAll(property.value);
						} else {
							this.set(property.key, property.value);
						}
					}, this);
				}, this);
			},

			/**
			 * @obsolete
			 */
			OpenCardInChain: function(config) {
				this.log(Ext.String.format(Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage,
					"OpenCardInChain", "openCardInChain"));
				this.openCardInChain(config);
			},

			/**
			 * ######### ######## ######## # #######.
			 * @overridden
			 * @param {Object} config ###### # ########### ########### ########.
			 * @return {Boolean} True # ###### ######## ########, false #### #### ########## ####### ## ######.
			 */
			openCardInChain: function(config) {
				if (config.isLinkClick) {
					return false;
				}
				const navConfig = {
					...config,
					entitySchemaName: this.entitySchemaName,
				};
				if (NetworkUtilities.tryNavigateTo8xMiniPage(navConfig)) {
					return true;
				}
				this.saveCardScroll();
				this.scrollCardTop();
				this.callParent(arguments);
				return true;
			},

			/**
			 * ######### ##### ######## # ###### ######## ########## ###### # #######
			 */
			saveCardScroll: function() {
				if (this.get("IsCardVisible")) {
					const cardScroll = this.get("CardScrollTop") || 0;
					const historyState = this.sandbox.publish("GetHistoryState");
					const state = Terrasoft.deepClone(historyState.state);
					state.cardScroll = cardScroll;
					this.sandbox.publish("ReplaceHistoryState", {
						hash: historyState.hash.historyState,
						silent: true,
						stateObj: state
					});
				}
			},

			/**
			 * ############### ######### ######### ######## ##############.
			 * @private
			 */
			restoreCardScrollTop: function() {
				const cardScrollTop = this.get("CardScrollTop");
				if (cardScrollTop !== null) {
					Ext.getBody().dom.scrollTop = cardScrollTop;
					Ext.getDoc().dom.documentElement.scrollTop = cardScrollTop;
				}
			},

			/**
			 * Initializes section filters.
			 * @protected
			 */
			initSectionFiltersCollection: function() {
				this.set("ProfileFilters", {});
				this.set("SectionFilters", this.Ext.create("Terrasoft.FilterGroup"));
				this.set("SectionFiltersValue", this.Ext.create("Terrasoft.Collection"));
			},

			/**
			 * Subscription initialization data loading profile.
			 * @protected
			 */
			subscribeInitFilterFromStorage: function() {
				const filterModulesIds = this.getFilterModulesIds();
				this.sandbox.subscribe("InitFilterFromStorage", this.initFilterFromStorage, this, filterModulesIds);
				this.sandbox.subscribe("GetSectionFiltersInfo", function() {
					return this.get("SectionFiltersValue");
				}, this, filterModulesIds.concat([this.getExtendedFilterEditModuleId()]));
			},

			/**
			 * It initializes the repository (the profile and session) filters
			 * and publish information about downloading.
			 * @protected
			 */
			initFilterFromStorage: function() {
				this.loadProfileFilters(function() {
					this.sandbox.publish("LoadedFiltersFromStorage", null, this.getFilterModulesIds());
				}, this);
			},

			/**
			 * It initializes the repository (the profile and session) filters.
			 * @deprecated
			 * @protected
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Context of the callback.
			 */
			getFilterFromStorage: function(callback, scope) {
				this.loadProfileFilters(callback, scope);
			},

			_tryGetFiltersFromHistoryState: function() {
				const state = this.sandbox.publish("GetHistoryState");
				let filters = null;
				if (state.state && state.state.filterStates) {
					filters = Terrasoft.deepClone(state.state.filterStates);
				}
				return filters;
			},

			/**
			 * Initializes filters from history state or profile.
			 * @protected
			 * @param {Function} callback Callback-function.
			 * @param {Object} [scope] Context of the callback.
			 */
			loadFilters: function(callback, scope) {
				const filters = this._tryGetFiltersFromHistoryState();
				if (filters) {
					this.onLoadHistoryStateFilters(callback, scope, filters);
					return;
				}
				this.loadProfileFilters(callback, scope);
			},

			/**
			 * It initializes the repository (the profile and session) filters.
			 * @protected
			 * @param {Function} callback Callback-function.
			 * @param {Object} [scope] Context of the callback.
			 */
			loadProfileFilters: function(callback, scope) {
				const isSectionFiltersLoaded = this.get("IsSectionFiltersLoaded");
				if (isSectionFiltersLoaded) {
					Ext.callback(callback, scope);
					return;
				}
				const profileKey = Ext.String.format("profile!{0}", this.getFiltersKey());
				Terrasoft.require([profileKey], function(profile) {
					this.onLoadProfileFilters(callback, scope, profile);
				}, this);
			},

			/**
			 * Restores from profile LeftSectionContainer visibility (folders or extended filters).
			 * @protected
			 */
			loadFiltersContainersVisibility: function(profile) {
				if (profile) {
					if (Ext.isDefined(profile.isFoldersContainerExpanded)) {
						this.set("IsFoldersVisible", profile.isFoldersContainerExpanded);
					}
					if (Ext.isDefined(profile.isExtendedFiltersContainerExpanded)) {
						this.set("IsExtendedFiltersVisible", profile.isExtendedFiltersContainerExpanded);
					}
				}
			},

			/**
			 * Callback of the load profile filters.
			 * @protected
			 * @param {Function} callback Callback-function.
			 * @param {Object} [scope] Context of the callback.
			 * @param {Object} profile Profile of the filters.
			 */
			onLoadProfileFilters: function(callback, scope, profile) {
				this.loadFiltersContainersVisibility(profile);
				this.initFilterAttributes(profile);
				this.set("IsSectionFiltersLoaded", true);
				Ext.callback(callback, scope);
			},

			/**
			 * Callback that is called when loading filters from HistoryState.
			 * @protected
			 * @param {Function} callback Callback-function.
			 * @param {Object} [scope] Context of the callback.
			 * @param {Object} filters Filters from historyState.
			 */
			onLoadHistoryStateFilters: function(callback, scope, filters) {
				this.loadFiltersContainersVisibility(filters);
				this.set("SessionFilters", {});
				Terrasoft.each(filters, this.applyFilters, this);
				this.set("IsSectionFiltersLoaded", true);
				if (this.Ext.isDefined(filters.ignoreFixedFilters)) {
					this.set("IgnoreFixedFilters", filters.ignoreFixedFilters);
				}
				Ext.callback(callback, scope);
			},

			/**
			 * Initialize filter attributes from filter profile.
			 * @protected
			 * @param {Object} profile Filters profile object.
			 */
			initFilterAttributes: function(profile) {
				const sessionFilters = this.getSessionFilters();
				this.set("SessionFilters", sessionFilters);
				const profileFilters = Terrasoft.deepClone(profile);
				const fixedSessionFilters = this._getFixedSessionFilters();
				Terrasoft.each(profileFilters, this.applyFilters, this);
				Terrasoft.each(fixedSessionFilters, this.applyFilters, this);
				this.set("ProfileFilters", profileFilters);
			},

			/**
			 * Gets session filters with changed custom filters.
			 * @private
			 * @return {Object}
			 */
			_getFixedSessionFilters: function() {
				let sessionFilters = this.getSessionFilters();
				const primaryDisplayColumn = this.entitySchema.primaryDisplayColumn;
				const customFilters = sessionFilters.CustomFilters;
				const customFiltersPrimaryDisplayColumn = customFilters && customFilters.primaryDisplayColumn;
				if (customFiltersPrimaryDisplayColumn && primaryDisplayColumn) {
					const sessionFiltersFixed = {};
					sessionFiltersFixed.CustomFilters = {};
					sessionFiltersFixed.CustomFilters[primaryDisplayColumn.name] = customFilters;
					sessionFilters = sessionFiltersFixed;
				}
				return sessionFilters;
			},

			/**
			 * Applies section filters.
			 * @protected
			 * @param {Array} filterValue Filters.
			 * @param {String} key Filter key.
			 */
			applyFilters: function(filterValue, key) {
				if (key.match(/filters/i) && !this.isNotEmpty(filterValue)) {
					return;
				}
				const sectionFiltersValue = this.get("SectionFiltersValue");
				if (!Ext.isString(filterValue)) {
					sectionFiltersValue.removeByKey(key);
					this._chooseFilterProcessing(filterValue, key);
				}
				if (key !== "FixedFilters") {
					sectionFiltersValue.add(key, filterValue);
				}
			},

			_chooseFilterProcessing: function(filterValue, key) {
				const sectionFilters = this.get("SectionFilters");
				Terrasoft.each(filterValue, function(item, propName) {
					if (item.key === TagConstantsV2.TagFilterKey || key === TagConstantsV2.TagFilterKey) {
						this.applyTagFilter(key, item);
					}
					if (propName === "Fixed") {
						this._applyFixedFilter(key, item);
					}
					if (item.filter) {
						const filter = Terrasoft.deserialize(item.filter);
						if (!sectionFilters.contains(key)) {
							sectionFilters.add(key, filter);
						}
					} else if (item.primaryDisplayColumn) {
						this.applyPrimaryColumnFilter(key, item);
					} else if (item.folderInfo || item.folderType) {
						this.applyFolderFilter(key, item);
					}
				}, this);
			},

			/**
			 * Added fixed filter in section filters collection.
			 * @private
			 */
			_applyFixedFilter: function(key, filterValueFixed) {
				const sectionFilters = this.get("SectionFilters");
				const sectionFiltersValue = this.get("SectionFiltersValue");
				if (this.isNotEmpty(filterValueFixed.filter)) {
					sectionFilters.removeByKey(key);
					const filter = Terrasoft.deserialize(filterValueFixed.filter);
					if (!sectionFilters.contains(key)) {
						sectionFilters.add(key, filter);
					}
				}
				sectionFiltersValue.add(key, filterValueFixed);
			},

			/**
			 * Applies new tag filter.
			 * @private
			 * @param {Object} filterConfig Filter configuration.
			 * @param {String} filterKey Section filter key.
			 */
			_applyNewTagFilter: function(filterConfig, filterKey) {
				const sectionFilters = this.get("SectionFilters");
				const filters = this.Ext.create("Terrasoft.FilterGroup");
				const tagId = filterConfig.value;
				const quickFilterModuleId = this.getQuickFilterModuleId();
				const inTagSchemaName = this.entitySchema.name + "InTag";
				const existsFilter = this.sandbox.publish("GetTagFilter", {
					inTagSchemaName: inTagSchemaName,
					tags: [tagId]
				}, [quickFilterModuleId]) || this._createTagFilter(inTagSchemaName, tagId);
				filters.add("TagFilters_" + tagId, existsFilter);
				filters.key = TagConstantsV2.TagFilterKey;
				if (sectionFilters.contains(filterKey)) {
					sectionFilters.removeByKey(filterKey);
				}
				sectionFilters.add(filterKey, filters);
			},

			/**
			 * Creates tag filter.
			 * @param {String} inTagSchemaName In tag entity schema name.
			 * @param {String} tagId Tag id.
			 * @return {Terrasoft.ExistsFilter} Tag filter.
			 */
			_createTagFilter: function(inTagSchemaName, tagId) {
				const columnPath = Ext.String.format("[{0}:Entity:Id].Tag", inTagSchemaName);
				const existsFilter = Terrasoft.createExistsFilter(columnPath);
				existsFilter.subFilters.addItem(Terrasoft.createColumnFilterWithParameter(
					Terrasoft.ComparisonType.EQUAL, "Tag", tagId));
				return existsFilter;
			},

			/**
			 * Applies tag filter.
			 * @protected
			 * @param {String} filterKey Section filter key.
			 * @param {Object} filterConfig Filter configuration.
			 */
			applyTagFilter: function(filterKey, filterConfig) {
				const sectionFilters = this.get("SectionFilters");
				if (filterConfig.key === TagConstantsV2.TagFilterKey) {
					if (sectionFilters.contains(filterKey)) {
						return;
					}
					const filterCopy = Terrasoft.deepClone(filterConfig);
					delete filterCopy.tags;
					const filter = Terrasoft.deserialize(filterCopy);
					sectionFilters.add(filterKey, filter);
				} else if (filterConfig.value && filterConfig.displayValue) {
					this._applyNewTagFilter(filterConfig, filterKey);
				} else if (Ext.isArray(filterConfig.tags)) {
					const tagConfig = filterConfig.tags[0];
					if (tagConfig && tagConfig.value && tagConfig.displayValue) {
						this._applyNewTagFilter(tagConfig, filterKey);
					}
				}
			},

			/**
			 * Applies primary column filter.
			 * @protected
			 * @param {String} filterKey Section filter key.
			 * @param {Object} filterConfig Filter configuration.
			 */
			applyPrimaryColumnFilter: function(filterKey, filterConfig) {
				const sectionFilters = this.get("SectionFilters");
				const primaryDisplayColumn = this.entitySchema.primaryDisplayColumn;
				if (!primaryDisplayColumn) {
					return;
				}
				if (sectionFilters.contains(filterKey)) {
					sectionFilters.removeByKey(filterKey);
				}
				const primaryDisplayColumnName = primaryDisplayColumn.name;
				const filters = this.Ext.create("Terrasoft.FilterGroup");
				const stringComparisonType = this.getStringColumnComparisonType();
				filters.addItem(Terrasoft.createColumnFilterWithParameter(
					stringComparisonType, primaryDisplayColumnName, filterConfig.value));
				sectionFilters.add(filterKey, filters);
				const column = {
					value: primaryDisplayColumnName,
					displayValue: primaryDisplayColumn.caption,
					dataValueType: primaryDisplayColumn.dataValueType
				};
				filterConfig.column = column;
			},

			/**
			 * Applies folder filter.
			 * @protected
			 * @param {String} filterKey Section filter key.
			 * @param {Object} filterConfig Filter configuration.
			 */
			applyFolderFilter: function(filterKey, filterConfig) {
				const sectionFilters = this.get("SectionFilters");
				const sessionFilters = this.get("SessionFilters");
				const entitySchema = this.entitySchema;
				const sectionSchemaName = entitySchema.name;
				let folderInfo = null;
				let folderType = null;
				let folderId = "";
				if (filterConfig.folderType) {
					folderInfo = filterConfig;
					folderType = folderInfo.folderType;
					folderId = folderInfo.value;
				} else {
					folderInfo = Ext.decode(filterConfig.folderInfo);
					folderType = folderInfo.FolderType;
					folderId = folderInfo.folderId;
				}
				if (folderType.value === ConfigurationConstants.Folder.Type.General) {
					const folderFilter = Terrasoft.createFilterGroup();
					const inFolderSchemaName = this.getInFolderEntityName();
					const entityColumnNameInFolderEntity = this.getEntityColumnNameInFolderEntity();
					folderFilter.add("filterStaticFolder",
						Terrasoft.createColumnInFilterWithParameters(Ext.String.format(
							"[{0}:{1}:Id].Folder", inFolderSchemaName,
							entityColumnNameInFolderEntity), [folderId]));
					sectionFilters.add(filterKey, folderFilter);
					const serializationInfo = folderFilter.getDefSerializationInfo();
					serializationInfo.serializeFilterManagerInfo = true;
					filterConfig.value = folderId;
					filterConfig.displayValue = folderInfo.displayValue;
					filterConfig.folderType = folderType;
					filterConfig.filter = folderFilter.serialize(serializationInfo);
					filterConfig.sectionEntitySchemaName = sectionSchemaName;
				} else {
					filterConfig.value = folderId || filterConfig.folderId;
					filterConfig.displayValue = folderInfo.displayValue;
					filterConfig.folderType = folderType;
					filterConfig.sectionEntitySchemaName = sectionSchemaName;
					this.addDynamicFolder(sectionFilters, filterConfig);
				}
				delete sessionFilters.FolderFilters;
			},

			/**
			 * Adds dynamic folder filters.
			 * @param {Object} sectionFilters Section filters.
			 * @param {Object} item Dynamic folder config.
			 */
			addDynamicFolder: function(sectionFilters, item) {
				const select = this.Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchemaName: this.getFolderEntityName()
				});
				select.addMacrosColumn(Terrasoft.QueryMacrosType.PRIMARY_COLUMN, "Id");
				select.addColumn("SearchData");
				const filters = this.Ext.create("Terrasoft.FilterGroup");
				filters.addItem(select.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id",
					item.folderId));
				select.filters = filters;
				select.getEntityCollection(function(response) {
					if (response && response.success) {
						const folderFiltersKey = "FolderFilters";
						const canAddFolderFilters = Terrasoft.Features.getIsEnabled("CanAddFolderFiltersToSectionFilter");
						response.collection.each(function(responseItem) {
							if (!canAddFolderFilters && sectionFilters.getKeys().includes(folderFiltersKey)) {
								sectionFilters.removeByKey(folderFiltersKey);
							}
							sectionFilters.add(folderFiltersKey,
								Terrasoft.deserialize(responseItem.get("SearchData")));
							item.filter = responseItem.get("SearchData");
						}, this);
					}
				}, this);
			},

			/**
			 * Generates folder manager module identifier.
			 * @protected
			 * @return {String} Module identifier.
			 */
			getFolderManagerModuleId: function() {
				return Ext.String.format("{0}_{1}Module", this.sandbox.id, this.folderManagerModuleName);
			},

			/**
			 * Generates extended filter edit module identifier.
			 * @protected
			 * @return {String} Module identifier.
			 */
			getExtendedFilterEditModuleId: function() {
				return this.sandbox.id + "_ExtendedFilterEditModule";
			},

			/**
			 * Initializes the id of the fast filter module, messages for joint work with him and loads it.
			 * @protected
			 */
			initFilters: function() {
				this.initFilterActions();
				if (!this.get("IgnoreFixedFilters")) {
					this.initFixedFiltersConfig();
				}
				this.initFilterSubscribers();
				this.loadFiltersModule();
			},

			/**
			 * Init FilterActionsEnabledProperties and subscribe on changed.
			 * @protected
			 */
			initFilterActions: function() {
				this.set("FilterActionsEnabledProperties", {});
				this.sandbox.subscribe("FilterActionsEnabledChanged", function(enableConfig) {
					this.set("FilterActionsEnabledProperties", enableConfig);
				}, this);
			},

			/**
			 * Initialize subscribers of the quick filters.
			 * @protected
			 */
			initFilterSubscribers: function() {
				this.subscribeFiltersChanged();
				this.subscribeFilterGetConfigMessages();
			},

			/**
			 * Subscribes on the filter change for reload data in section.
			 */
			subscribeFiltersChanged: function() {
				const filterModulesIds = this.getFilterModulesIds();
				this.sandbox.subscribe("UpdateFilter", function(filterItem) {
					this.onFilterUpdate(filterItem.key, filterItem.filters, filterItem.filtersValue);
				}, this, filterModulesIds);
			},

			/**
			 * Subscribes on the need data messages from filter module.
			 * @protected
			 */
			subscribeFilterGetConfigMessages: function() {
				const quickFilterModuleId = this.getQuickFilterModuleId();
				const folderManagerModuleId = this.getFolderManagerModuleId();
				const extendedFilterModuleId = this.getExtendedFilterEditModuleId();
				const sandbox = this.sandbox;
				sandbox.subscribe("GetSectionEntitySchema", function() {
					return this.entitySchema;
				}, this);
				sandbox.subscribe("GetSectionFilterModuleId", function() {
					return quickFilterModuleId;
				}, this);
				sandbox.subscribe("GetExtendedFilterModuleId", function() {
					return extendedFilterModuleId;
				}, this);
				sandbox.subscribe("GetFixedFilterConfig", function() {
					return this.get("FixedFilterConfig");
				}, this, [quickFilterModuleId]);
				sandbox.subscribe("FolderInfo", function() {
					return this.getFolderManagerConfig();
				}, this, [folderManagerModuleId]);
				sandbox.subscribe("GetFolderFilter", function() {
					this.getFilter("FolderFilters");
				}, this, [folderManagerModuleId]);
				sandbox.subscribe("GetSectionSchemaName", function() {
					return this.entitySchema.name;
				}, this, [extendedFilterModuleId]);
				sandbox.subscribe("ApplyResultExtendedFilter",
					this.onApplyResultExtendedFilter, this, [extendedFilterModuleId]);
				sandbox.subscribe("ResultFolderFilter", this.onResultFolderFilter, this, [folderManagerModuleId]);
				sandbox.subscribe("FilterCurrentSection", this.filterCurrentSection, this);
			},

			/**
			 * Handler of the ApplyResultExtendedFilter message.
			 * @protected
			 * @param {Object} args Params of the ApplyResultExtendedFilter message.
			 * @param {Object} args.filter Extended filters value.
			 * @param {Boolean} [args.folderEditMode] Folder edit mode mark.
			 * @param {String} [args.serializedFilter] Serialized filters string.
			 */
			onApplyResultExtendedFilter: function(args) {
				if (!args.filter) {
					return;
				}
				const quickFilterModuleId = this.getQuickFilterModuleId();
				if (args.folderEditMode) {
					this.onFilterUpdate("FolderFilters", args.filter);
				} else {
					const displayValue = this.getExtendedFilterDisplayValue(args.filter);
					const extendedFilter = {
						value: args.serializedFilter,
						displayValue: displayValue
					};
					this.sandbox.publish("UpdateExtendedFilter", extendedFilter, [quickFilterModuleId]);
				}
			},

			/**
			 * Handler of the ResultFolderFilter message.
			 * @protected
			 * @param {Object} args Params of the ResultFolderFilter message.
			 */
			onResultFolderFilter: function(args) {
				this.set("CurrentFolder", args);
				const quickFilterModuleId = this.getQuickFilterModuleId();
				this.sandbox.publish("UpdateFolderFilter", args, [quickFilterModuleId]);
			},

			/**
			 * Load quick filters module.
			 * @protected
			 * @virtual
			 */
			loadFiltersModule: function() {
				performanceManager.start("QuickFilterModuleV2_BeforeLoad");
				performanceManager.start("QuickFilterModuleV2_FiltersRecived");
				this.sandbox.loadModule("QuickFilterModuleV2", {
					renderTo: "QuickFilterModuleContainer",
					id: this.getQuickFilterModuleId()
				});
				this.set("HasQuickFilterModule", true);
			},

			/**
			 * Shows extended filters.
			 * @protected
			 * @virtual
			 * @param {Object} args Module parameters.
			 */
			showCustomFilterExtendedMode: function(args) {
				if (this.get("IsCardVisible") && !(args && args.initialization)) {
					this.closeCard();
				}
				const quickFilterModuleId = this.getQuickFilterModuleId();
				const folderManagerModuleId = this.getFolderManagerModuleId();
				const extendedFilterModuleId = this.getExtendedFilterEditModuleId();
				this.set("IsFolderManagerActionsContainerVisible", false);
				this.sandbox.subscribe("CustomFilterExtendedModeClose", function(args) {
					this.onHideCustomFilter();
					if (args && args.filter) {
						this.sandbox.publish("UpdateFolderFilter", args, [quickFilterModuleId]);
					}
				}, this, [quickFilterModuleId]);
				let folderEditMode = false;
				let folder = null;
				let filter = null;
				if (args && args.folder) {
					folderEditMode = true;
					this.set("IsFolderEditMode", folderEditMode);
					folder = args.folder;
					filter = args.filter;
					this.set("activeFolderId", folder.get("Id"));
				}
				this.onShowCustomFilter(folderEditMode);
				this.sandbox.subscribe("GetExtendedFilter", function() {
					const config = {};
					if (folderEditMode) {
						config.filter = filter;
						config.folder = folder;
					} else {
						const useNewLookupComparison = Terrasoft.Features.getIsEnabled("UseNewLookupComparison");
						if (useNewLookupComparison && this.getFilter("CustomFilters")) {
							const sectionFilterInfo = this.get("SectionFiltersValue");
							const customFiltersInfo = sectionFilterInfo && sectionFilterInfo.get("CustomFilters");
							config.sectionFilterValue = customFiltersInfo;
						}
						config.filter = this.getFilter("CustomFilters");
					}
					return config;
				}, this, [extendedFilterModuleId]);
				this.sandbox.unloadModule(folderManagerModuleId, "FoldersContainer");
				this.sandbox.subscribe("GetEntitySchemaFilterProviderModuleName",
					this.getEntitySchemaFilterProviderModuleName, this, [extendedFilterModuleId]);
				this.sandbox.loadModule("ExtendedFilterEditModuleV2", {
					renderTo: "ExtendedFiltersContainer",
					id: extendedFilterModuleId
				});
				const isSeparateMode = !this.get("IsCardVisible");
				if (args && args.initialization) {
					this.onHideFoldersAndFilters();
					this.changeDataViewsContainerClasses({
						showFolders: false
					});
				}
				this.setLeftSectionContainerVisibility(isSeparateMode);
			},

			/**
			 * Shows folder tree module.
			 * @protected
			 * @virtual
			 * @param {Object} args Module parameters.
			 */
			showFolderTree: function(args) {
				if (this.get("IsCardVisible") && !(args && args.initialization)) {
					this.closeCard();
				}
				const extendedFilterModuleId = this.getExtendedFilterEditModuleId();
				if (this.get("IsFolderManagerActionsContainerVisible")) {
					return;
				}
				if (args && args.activeFolderId) {
					this.set("activeFolderId", args.activeFolderId);
				}
				this.set("IsFolderManagerActionsContainerVisible", true);
				this.onShowAllFoldersButtonClick();
				this.sandbox.unloadModule(extendedFilterModuleId, "ExtendedFiltersContainer");
				this.sandbox.loadModule(this.folderManagerModuleName, {
					renderTo: "FoldersContainer",
					id: this.getFolderManagerModuleId()
				});
				const isSeparateMode = !this.get("IsCardVisible");
				this.setLeftSectionContainerVisibility(isSeparateMode);
				if (args && args.initialization) {
					this.onHideFoldersAndFilters();
					this.changeDataViewsContainerClasses({
						showFolders: false
					});
				}
				this.saveFiltersContainersVisibility();
			},

			/**
			 * ########## ####### ############ ###### #####
			 * @protected
			 */
			onShowAllFoldersButtonClick: function() {
				this.changeFoldersAndDataViewContainerClasses({
					showFolders: true,
					folderEditMode: true
				});
				this.set("IsExtendedFiltersVisible", false);
				this.set("IsFoldersVisible", true);
				this.changeDataViewsContainerClasses({
					showFolders: true
				});
			},

			/**
			 * Hides folder filters.
			 * @protected
			 * @param {Object} [config] Configuration information object.
			 * @param {Boolean} [config.notSaveFiltersVisibility] True if not need saving filter to profile.
			 */
			onHideFoldersModule: function(config) {
				const folderManagerModuleId = this.getFolderManagerModuleId();
				this.sandbox.unloadModule(folderManagerModuleId, "FoldersContainer");
				this.set("IsFoldersVisible", false);
				this.set("IsFolderManagerActionsContainerVisible", false);
				this.onHideFoldersAndFilters();
				this.changeDataViewsContainerClasses({
					showFolders: false
				});
				if (this.isNotEmpty(config) && config.notSaveFiltersVisibility) {
					return;
				}
				this.saveFiltersContainersVisibility();
			},

			/**
			 * Saves folders container and extended filter container expanded value in profile.
			 * @private
			 * @param {Boolean} [folderEditMode] True if folder filter open in extended filters container.
			 */
			saveFiltersContainersVisibility: function(folderEditMode) {
				const profileFilters = this.getProfileFilters() || {};
				profileFilters.isFoldersContainerExpanded = this.get("IsFoldersVisible");
				profileFilters.isExtendedFiltersContainerExpanded = this.get("IsExtendedFiltersVisible");
				profileFilters.isExtendedFolderContainerExpanded = Boolean(folderEditMode);
				Terrasoft.saveUserProfile(this.getFiltersKey(), profileFilters, false);
				this.changeGridUtilitiesContainerSize();
			},

			/**
			 * Handles custom filter opening.
			 * @protected
			 * @param {Boolean} [folderEditMode] True if folder filter open in extended filters container.
			 */
			onShowCustomFilter: function(folderEditMode) {
				this.changeFoldersAndDataViewContainerClasses({
					showFolders: true,
					folderEditMode: folderEditMode
				});
				this.set("IsFoldersVisible", false);
				this.set("IsExtendedFiltersVisible", true);
				this.changeDataViewsContainerClasses({
					showFolders: true
				});
				this.saveFiltersContainersVisibility(folderEditMode);
			},

			/**
			 * Handles custom filter closing.
			 * @protected
			 * @param {Object} [config] Configuration information object.
			 * @param {Boolean} [config.notSaveFiltersVisibility] True if not need saving filter to profile.
			 */
			onHideCustomFilter: function(config) {
				const extendedFilterModuleId = this.getExtendedFilterEditModuleId();
				this.sandbox.unloadModule(extendedFilterModuleId, "ExtendedFiltersContainer");
				this.set("IsExtendedFiltersVisible", false);
				this.onHideFoldersAndFilters();
				if (this.isNotEmpty(config) && config.notSaveFiltersVisibility) {
					return;
				}
				this.saveFiltersContainersVisibility();
			},

			/**
			 * Handles filters or folders on hide event.
			 * @private
			 */
			onHideFoldersAndFilters: function() {
				const quickFilterModuleId = this.getQuickFilterModuleId();
				this.sandbox.publish("UpdateCustomFilterMenu", {
					"isExtendedModeHidden": true,
					"isFoldersHidden": true,
					"clearActiveFolder": true
				}, [quickFilterModuleId]);
				this.changeFoldersAndDataViewContainerClasses({
					showFolders: false,
					folderEditMode: false
				});
			},

			/**
			 * Returns an extended filter's display value.
			 * @protected
			 * @param {Terrasoft.data.filters.FilterGroup} extendedFilter Filter value.
			 * @returns {string} Extended filter's display value.
			 */
			getExtendedFilterDisplayValue: Terrasoft.FilterUtilities.getExtendedFilterDisplayValue,

			/**
			 * Returns default grid view caption.
			 * @protected
			 * @return {String}
			 */
			getDefaultGridDataViewCaption: function() {
				return this.getModuleCaption();
			},

			/**
			 * Returns default grid view icon.
			 * @protected
			 * @return {String}
			 */
			getDefaultGridDataViewIcon: function() {
				return this.get("Resources.Images.GridDataViewIcon");
			},

			/**
			 * Returns default section views.
			 * Registry.
			 * @protected
			 * @return {Object} Default section views.
			 */
			getDefaultDataViews: function() {
				const gridDataView = {
					name: this.get("GridDataViewName"),
					caption: this.getDefaultGridDataViewCaption(),
					hint: this.get("Resources.Strings.ListDataViewHint"),
					icon: this.getDefaultGridDataViewIcon()
				};
				return {
					"GridDataView": gridDataView
				};
			},

			/**
			 * ######### ######## ###### ######
			 * @protected
			 */
			findDuplicates: this.Ext.emptyFn,

			/**
			 * ############## ####### ########## #######
			 * @protected
			 * @param {Terrasoft.EntitySchemaQuery} esq
			 */
			initQueryFilters: function(esq) {
				const filters = this.getFilters();
				if (filters) {
					esq.filters.addItem(filters);
				}
			},

			/**
			 * ########## ########### #######
			 * @return {Terrasoft.FilterGroup|*}
			 */
			getFilters: function() {
				const sectionFilters = this.get("SectionFilters");
				const serializationInfo = sectionFilters.getDefSerializationInfo();
				serializationInfo.serializeFilterManagerInfo = true;
				const deserializedFilters = Terrasoft.deserialize(sectionFilters.serialize(serializationInfo));
				return deserializedFilters;
			},

			/**
			 * ######## ##### ######## ### ########## ######.
			 * @param {String} recordId ########## ############# ######### ######, ### ####### ############ #######.
			 * @return {Terrasoft.FilterGroup} ########## ##### ######## ### ########## ######.
			 */
			getReportFilters: function(recordId) {
				const filters = this.getFilters();
				if (this.isAnySelected()) {
					filters.clear();
					const selectedRows = (recordId && [recordId]) || this.getSelectedItems();
					filters.name = "primaryColumnFilter";
					const filter = Terrasoft.createColumnInFilterWithParameters("Id", selectedRows);
					filters.addItem(filter);
				}
				return filters;
			},

			/**
			 * ######## ######## ######### ####### ######### ######
			 * @return {String} ########## ######## ######### ####### ######### ######
			 */
			getPrimaryColumnValue: function() {
				return this.get("ActiveRow");
			},

			/**
			 * Initializes print buttons menu.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Callback function scope.
			 */
			initPrintButtonsMenu: function(callback, scope) {
				this.initSectionPrintForms(this.initCardPrintForms, this);
				this.initModulePrintForms(callback, scope);
			},

			initModulePrintForms: function(callback, scope) {
				this.initReportModuleMessageSubscription();
				const collection = Ext.create("Terrasoft.Collection");
				this.set(this.moduleReportsCollectionName, collection);
				const esq = this.getModuleReportsESQ();
				esq.getEntityCollection(function(response) {
					const entities = response.collection;
					if (response.success && !entities.isEmpty()) {
						entities.each(this.processReportItem, this);
						collection.loadAll(entities);
					}
					this.setReportsButtonVisible();
					Ext.callback(callback, scope || this);
				}, this);
			},

			processReportItem: function(entity) {
				entity.set("Click", {"bindTo": "loadReportModule"});
				entity.set("Tag", entity.get("Id"));
			},

			/**
			 * ############## ######## ## ######### ###### #######.
			 * @protected
			 */
			initReportModuleMessageSubscription: function() {
				const reportModuleId = this.getReportModuleId();
				this.sandbox.subscribe("GetReportConfig", function() {
					const key = this.get("CurrentReportId");
					const grid = this.get(this.moduleReportsCollectionName);
					const activeReport = grid.get(key);
					return {
						id: activeReport.get("Id"),
						caption: activeReport.get("Caption"),
						reportId: activeReport.get("SysSchemaUId"),
						sysSchemaName: activeReport.get("OptionSchemaName"),
						sectionUId: this.entitySchema.uId,
						sectionEntitySchemaName: this.entitySchema.name,
						sectionEntitySchemaPrimaryColumnName: this.entitySchema.primaryColumnName,
						activeRow: this.get("ActiveRow"),
						selectedRows: this.get("SelectedRows"),
						ReportType: activeReport.$PrintFormType || "DevExpress",
						parentModuleSandboxId: this.sandbox.id
					};
				}, this, [reportModuleId, "GetReportConfigKey"]);
			},

			/**
			 * ########## ########## ##### ### ######### ###### #######.
			 * @protected
			 * @return {Terrasoft.EntitySchemaQuery} ########## ########## ######.
			 */
			getModuleReportsESQ: function() {
				const entitySchemaName = this.getEntitySchemaName();
				const esq = Ext.create("Terrasoft.EntitySchemaQuery", {
					rootSchema: SysModuleAnalyticsReport,
					rowViewModelClassName: "Terrasoft.BasePrintFormViewModel",
					clientESQCacheParameters: {
						cacheItemName: this.getESQCacheName("CurrentModuleReports")
					}
				});
				esq.addColumn("Id");
				esq.addColumn("Caption");
				esq.addColumn("SysSchemaUId");
				esq.addColumn("Type.Name", 'PrintFormType');
				esq.addColumn("[VwSysSchemaInWorkspace:UId:SysOptionsPageSchemaUId].Name", "OptionSchemaName");
				esq.filters.addItem(esq.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
					"ModuleSchemaName", entitySchemaName));
				return esq;
			},

			/**
			 * ########## ######## ######## "#########" ### ######## ########### ###### ###### ######.
			 * @param {String} reportId ############# ######.
			 * @return {Boolean} ########## ######## ######## "#########" ### ######## ########### ###### ######
			 * ######.
			 */
			getPrintMenuItemVisible: function(reportId) {
				const primaryColumnValue = this.get("ActiveRow");
				if (!primaryColumnValue) {
					return false;
				}
				const gridData = this.getGridData();
				if (gridData.contains(primaryColumnValue)) {
					const activeRow = gridData.get(primaryColumnValue);
					const typeColumnValue = this.getTypeColumnValue(activeRow);
					const reportTypeColumnValue = this.getReportTypeColumnValue(reportId);
					return (reportTypeColumnValue === typeColumnValue);
				}
			},

			/**
			 * ############## ########## ###### ###### "########".
			 * @protected
			 * @param {String} modeType ######## #### ########### #######
			 * @param {Terrasoft.BaseViewModelCollection} actionMenuItems
			 */
			initActionButtonMenu: function(modeType, actionMenuItems) {
				const collectionName = modeType + "ModeActionsButtonMenuItems";
				const collection = this.get(collectionName);
				if (actionMenuItems.getCount()) {
					this.set(modeType + "ModeActionsButtonVisible", true);
					const newCollection = this.Ext.create("Terrasoft.BaseViewModelCollection");
					actionMenuItems.each(function(item) {
						const newItem = this.cloneBaseViewModel(item);
						newCollection.addItem(newItem);
					}, this);
					if (collection) {
						collection.clear();
						collection.loadAll(newCollection);
					} else {
						this.set(collectionName, newCollection);
					}
				} else {
					this.set(modeType + "ModeActionsButtonVisible", false);
				}
			},

			/**
			 * ############## ###### #### ###### "###"
			 * @protected
			 * @virtual
			 * @param {String} collectionName ######## ################ #########
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions ###### ####
			 */
			initViewOptionsButtonMenu: function(collectionName, viewOptions) {
				const collection = this.get(collectionName);
				const newCollection = this.Ext.create("Terrasoft.BaseViewModelCollection");
				viewOptions.each(function(item) {
					const newItem = this.cloneBaseViewModel(item);
					newCollection.addItem(newItem);
				}, this);
				if (collection) {
					collection.clear();
					collection.loadAll(newCollection);
				} else {
					this.set(collectionName, newCollection);
				}
			},

			/**
			 * ############## ###### #### ###### "###" #######
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions ###### ####
			 */
			initSectionViewOptionsButtonMenu: function(viewOptions) {
				this.initViewOptionsButtonMenu("SeparateModeViewOptionsButtonMenuItems", viewOptions);
			},

			/**
			 * ############## ###### #### ###### "###" ########
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} viewOptions ###### ####
			 */
			initCardViewOptionsButtonMenu: function(viewOptions) {
				this.initViewOptionsButtonMenu("CombinedModeViewOptionsButtonMenuItems", viewOptions);
			},

			/**
			 * Initializes sign that the section can be customized.
			 * @protected
			 */
			initCanCustomize: function() {
				const menuItems = this.get("SeparateModeViewOptionsButtonMenuItems");
				const hasMenuItem = menuItems && menuItems.contains(this.sectionWizardMenuItemId);
				if (menuItems && !hasMenuItem) {
					const canCustomize = this.get("CanCustomize");
					this.set("CanCustomize", canCustomize && hasMenuItem);
				}
			},

			/**
			 * ######### ### ######## ###### #############, ############ ######## #########.
			 * @param {Terrasoft.BaseViewModel} originalItem ###### #############.
			 * @return {Terrasoft.BaseViewModel|*} ##### ###### ############# # ############## ##########.
			 */
			cloneBaseViewModel: function(originalItem) {
				const newItem = this.Ext.create("Terrasoft.BaseViewModel");
				Terrasoft.each(originalItem.values, function(itemValue, valueName) {
					if (!(itemValue instanceof Terrasoft.Collection)) {
						newItem.set(valueName, Terrasoft.deepClone(itemValue));
					} else {
						const newItemsCollection = this.Ext.create("Terrasoft.BaseViewModelCollection");
						itemValue.each(function(item) {
							newItemsCollection.add(this.cloneBaseViewModel(item));
						}, this);
						newItem.set(valueName, newItemsCollection);
					}
				}, this);
				return newItem;
			},

			/**
			 * Determines if multi select action is visible.
			 * @return {Boolean}
			 */
			isMultiSelectVisible: function() {
				return !this.get("MultiSelect");
			},

			/**
			 * Returns is SelectAllMode button visible.
			 * @return {Boolean}
			 */
			isSelectAllModeVisible: function() {
				const isMultiSelectVisible = this.isMultiSelectVisible();
				const isSingleSelectVisible = this.isSingleSelectVisible();
				return isMultiSelectVisible || isSingleSelectVisible;
			},

			/**
			 * Determines if cancel multiselect action is visible.
			 * @return {Boolean}
			 */
			isSingleSelectVisible: function() {
				return this.get("MultiSelect");
			},

			/**
			 * Determines if deselect all action is visible.
			 * @return {Boolean}
			 */
			isUnSelectVisible: function() {
				return this.isAnySelected();
			},

			getFolderMenuItems: function() {
				if (this.get("UseStaticFolders")) {
					const addFolderButtonMenuItems = this.Ext.create("Terrasoft.BaseViewModelCollection");
					addFolderButtonMenuItems.addItem(this.getButtonMenuItem({
						"Caption": {"bindTo": "Resources.Strings.AddDynamicFolderButtonCaption"},
						"Click": {"bindTo": "onAddDynamicFolder"},
						"Visible": {"bindTo": "UseStaticFolders"}
					}));
					addFolderButtonMenuItems.addItem(this.getButtonMenuItem({
						"Caption": {"bindTo": "Resources.Strings.AddStaticFolderButtonCaption"},
						"Click": {"bindTo": "onAddStaticFolder"},
						"Visible": {"bindTo": "UseStaticFolders"}
					}));
					return addFolderButtonMenuItems;
				} else {
					return null;
				}
			},

			/**
			 * ########## ######### ######## ####### # ###### ########### #######
			 * @return {Terrasoft.BaseViewModelCollection} ########## ######### ######## ####### # ######
			 * ########### #######
			 */
			getSectionActions: function() {
				const actionMenuItems = this.Ext.create("Terrasoft.BaseViewModelCollection");
				actionMenuItems.addItem(this.getButtonMenuItem({
					Caption: {"bindTo": "SeparateModeActionsButtonHeaderMenuItemCaption"},
					Type: "Terrasoft.MenuSeparator",
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				}));
				actionMenuItems.addItem(this.createSelectMultipleRecordsButton());
				actionMenuItems.addItem(this.createSelectOneRecordButton());
				actionMenuItems.addItem(this.createUnselectAllButton());
				actionMenuItems.addItem(this.createSelectAllButton());
				actionMenuItems.addItem(this.getExportToFileMenuItem());
				actionMenuItems.addItem(this.getExportToExcelFileMenuItem());
				actionMenuItems.add("AddTagsMenuItem", this.getAddTagsMenuItem());
				var fileImportMenuItem = this.getDataImportMenuItem();
				if (fileImportMenuItem) {
					actionMenuItems.add("FileImportMenuItem", fileImportMenuItem);
				}
				actionMenuItems.addItem(this.getObjectChangeLogSettingsMenuItem());
				actionMenuItems.addItem(this.createIncludeInFolderButton());
				actionMenuItems.addItem(this.createExcludeFromFolderButton());
				actionMenuItems.addItem(this.createDeleteRecordButton());
				actionMenuItems.addItem(this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.FiltersCaption"},
					Type: "Terrasoft.MenuSeparator",
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				}));
				actionMenuItems.addItem(this.createGroupMenuItem());
				actionMenuItems.addItem(this.createUnGroupMenuItem());
				actionMenuItems.addItem(this.createMoveUpMenuItem());
				actionMenuItems.addItem(this.createMoveDownMenuItem());
				actionMenuItems.addItem(this.getButtonMenuItem({
					Caption: "",
					Type: "Terrasoft.MenuSeparator",
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				}));
				return actionMenuItems;
			},

			/**
			 * Create SelectMultipleRecordsButton
			 * @protected
			 */
			createSelectMultipleRecordsButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.SelectMultipleRecordsButtonCaption"},
					"Click": {"bindTo": "setMultiSelect"},
					"Visible": {"bindTo": "isMultiSelectVisible"}
				});
			},

			/**
			 * Create SelectOneRecordButton
			 * @protected
			 */
			createSelectOneRecordButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.SelectOneRecordButtonCaption"},
					"Click": {"bindTo": "unSetMultiSelect"},
					"Visible": {"bindTo": "isSingleSelectVisible"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create UnselectAllButton
			 * @protected
			 */
			createUnselectAllButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.UnselectAllButtonCaption"},
					"Click": {"bindTo": "unSelectRecords"},
					"Visible": {"bindTo": "MultiSelect"},
					"Enabled": {"bindTo": "isUnSelectVisible"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create SelectAllButton
			 * @protected
			 */
			createSelectAllButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.SelectAllButtonCaption"},
					"Click": {"bindTo": "setSelectAllMode"},
					"Visible": {"bindTo": "isSelectAllModeVisible"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create IncludeInFolderButton
			 * @protected
			 */
			createIncludeInFolderButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.IncludeInFolderButtonCaption"},
					"Click": {"bindTo": "openStaticGroupLookup"},
					"Enabled": {"bindTo": "isAnySelected"},
					"Visible": {"bindTo": "UseStaticFolders"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create ExcludeFromFolderButton
			 * @protected
			 */
			createExcludeFromFolderButton: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.ExcludeFromFolderButtonCaption"},
					"Click": {"bindTo": "excludeFromFolder"},
					"Enabled": {"bindTo": "isAnySelected"},
					"Visible": {"bindTo": "UseStaticFolders"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create DeleteRecordButton
			 * @protected
			 */
			createDeleteRecordButton: function() {
				return this.getButtonMenuItem({
					"Caption": {bindTo: "Resources.Strings.DeleteRecordButtonCaption"},
					"Enabled": {bindTo: "isAnySelected"},
					"Visible": {bindTo: "isVisibleDeleteAction"},
					"Click": {bindTo: "deleteRecords"},
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Create GroupMenuItem
			 * @protected
			 */
			createGroupMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.GroupMenuItemCaption"},
					Click: {bindTo: "groupFilterItems"},
					Enabled: {
						bindTo: "FilterActionsEnabledProperties",
						bindConfig: {
							"converter": function(value) {
								return value ? value.groupBtnState : false;
							}
						}
					},
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				});
			},

			/**
			 * Create UnGroupMenuItem
			 * @protected
			 */
			createUnGroupMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.UnGroupMenuItemCaption"},
					Click: {bindTo: "unGroupFilterItems"},
					Enabled: {
						bindTo: "FilterActionsEnabledProperties",
						bindConfig: {
							"converter": function(value) {
								return value ? value.unGroupBtnState : false;
							}
						}
					},
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				});
			},

			/**
			 * Create MoveUpMenuItem
			 * @protected
			 */
			createMoveUpMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.MoveUpMenuItemCaption"},
					Click: {bindTo: "moveUpFilter"},
					Enabled: {
						bindTo: "FilterActionsEnabledProperties",
						bindConfig: {
							"converter": function(value) {
								return value ? value.moveUpBtnState : false;
							}
						}
					},
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				});
			},

			/**
			 * Create MoveDownMenuItem
			 * @protected
			 */
			createMoveDownMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.MoveDownMenuItemCaption"},
					Click: {bindTo: "moveDownFilter"},
					Enabled: {
						bindTo: "FilterActionsEnabledProperties",
						bindConfig: {
							"converter": function(value) {
								return value ? value.moveDownBtnState : false;
							}
						}
					},
					Visible: {bindTo: "IsExtendedFiltersVisible"}
				});
			},

			/**
			 * Returns separate mode actions button visibility.
			 * @protected
			 * @virtual
			 * @return {Boolean}
			 */
			isSeparateModeActionsButtonVisible: function() {
				return this.get("SeparateModeActionsButtonVisible");
			},

			/**
			 * Prepare ActionsButton menu items.
			 */
			prepareActionsButtonMenuItems: Ext.emptyFn,

			/**
			 * ######## ###### #### ###### "###"
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModelCollection} ########## ###### #### ###### "###"
			 */
			getViewOptions: function() {
				const viewOptions = this.Ext.create("Terrasoft.BaseViewModelCollection");
				viewOptions.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.SortMenuCaption"},
					"Items": {"bindTo": "SortColumns"},
					"Visible": {"bindTo": "IsSortMenuVisible"},
					"ImageConfig": this.get("Resources.Images.SortIcon")
				}));
				viewOptions.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenSummarySettingsModuleButtonCaption"},
					"Click": {"bindTo": "openSummarySettings"},
					"Visible": {"bindTo": "IsSummarySettingsVisible"},
					"ImageConfig": this.get("Resources.Images.SummariesIcon")
				}));
				viewOptions.addItem(this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenGridSettingsCaption"},
					"Click": {"bindTo": "openGridSettings"},
					"Visible": {"bindTo": "IsGridSettingsMenuVisible"},
					"ImageConfig": this.get("Resources.Images.GridSettingsIcon")
				}));
				viewOptions.addItem(this.getButtonMenuSeparator());
				viewOptions.addItem(this.getButtonMenuSeparator());
				this.addSectionDesignerViewOptions(viewOptions);
				this.addDcmPageInSectionWizardViewOptions(viewOptions);
				return viewOptions;
			},

			/**
			 * Checks whether the operation can be performed on the entity.
			 * @protected
			 * @virtual
			 * @return {Boolean} Returns true if operation can be performed.
			 */
			canEntityBeOperated: function() {
				return this.get("IsCardInEditMode");
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
					"ImageConfig": this.getSectionDesignerMenuIcon()
				}));
			},

			/**
			 * @inheritdoc Terrasoft.configuration.mixins.WizardUtilities#getCanDesignWizard
			 * @override
			 */
			getCanDesignWizard: function() {
				return this.getCanDesignSection ? this.getCanDesignSection() : false;
			},

			/**
			 * ########## ########## # ########## ####### ########.
			 * @protected
			 * @virtual
			 * @return {Boolean} true - #### ###### ######## ########, false - # ######## ######.
			 */
			getCanDesignPage: function() {
				return this.getCanDesignSection();
			},

			/**
			 * ########## ########## # ########## ####### #######.
			 * @protected
			 * @virtual
			 * @return {Boolean} true - #### ###### ####### ########, false - # ######## ######.
			 */
			getCanDesignSection: function() {
				const isSchemaRegisteredInModuleStructure =
					!Ext.isEmpty(Terrasoft.configuration.ModuleStructure[this.entitySchemaName]);
				const canUseWizard = this.get("CanUseWizard");
				return Ext.isEmpty(canUseWizard) ? false : (canUseWizard && isSchemaRegisteredInModuleStructure);
			},

			/**
			 * ######### ##### ## ########## ###### ########## ##### ######
			 * @protected
			 * @virtual
			 * @return {Boolean} ########## true #### ##### ########## ###### ########## ##### ######
			 * # false # ######### ######
			 */
			showNewRecordSaveButton: function() {
				return !this.get("IsCardInEditMode") && this.get("ShowSaveButton");
			},

			/**
			 * ######### ##### ## ########## ###### ########## ############ ######
			 * @protected
			 * @virtual
			 * @return {Boolean} ########## true #### ##### ########## ###### ########## ############ ######
			 * # false # ######### ######
			 */
			showExistingRecordSaveButton: function() {
				return this.get("IsCardInEditMode") && this.get("ShowSaveButton");
			},

			/**
			 * ########## ######### ######## ########
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModelCollection} ########## ######### ######## ########
			 */
			getCardActions: function() {
				const actionMenuItems = this.sandbox.publish("GetCardActions");
				return actionMenuItems;
			},

			/**
			 * ######### ######## ############# ######
			 * @protected
			 */
			loadGridDataView: function(loadData) {
				this.set("IsActionButtonsContainerVisible", true);
				if (loadData) {
					this.loadGridData();
				}
			},

			/**

			 * ###### ######## ######### #############. ########## ### ########.
			 * ### ######### ############# ##########.
			 * @protected
			 * @param {String} activeViewName ######## #############.
			 * @param {Boolean} loadData #### ######## ######.
			 */
			setActiveView: function(activeViewName, loadData) {
				this.showBodyMask();
				if (!this.get("IsCardVisible")) {
					this.hideCard();
				}
				const dataViews = this.get("DataViews");
				dataViews.each(function(dataView) {
					const isViewActive = (dataView.name === activeViewName);
					this.setViewVisible(dataView, isViewActive);
				}, this);
				this.loadView(activeViewName, loadData);
				this.sandbox.publish("ActiveViewChanged", activeViewName);
				this.hideBodyMask();
			},

			/**
			 * ######## ### ######### #############.
			 * @protected
			 * @return {String} ### #############.
			 */
			getActiveViewName: function() {
				let activeViewName = this.get("GridDataViewName");
				const dataViews = this.get("DataViews");
				if (dataViews) {
					dataViews.each(function(dataView) {
						if (dataView.active) {
							activeViewName = dataView.name;
						}
					}, this);
				}
				return activeViewName;
			},

			/**
			 * ######## ### ######### ############# ## #######.
			 * @protected
			 * @return {String} ### #############.
			 */
			getActiveViewNameFromProfile: function() {
				const profile = this.get("ActiveViewSettingsProfile");
				if (profile && profile.hasOwnProperty("activeViewName")) {
					return profile.activeViewName;
				}
				return "";
			},

			/**
			 * Initializes profile for current active view.
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Context.
			 */
			initActiveViewSettingsProfile: function(callback, scope) {
				const profileKey = this.getActiveViewSettingsProfileKey();
				Terrasoft.require(["profile!" + profileKey], function(profile) {
					this.set("ActiveViewSettingsProfile", profile);
					callback.call(scope);
				}, this);
			},

			/**
			 * Initializes profile for current active view.
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Context.
			 * @protected
			 */
			initSummarySettingsProfile: function(callback, scope) {
				if (!this._isCanUseCountOver()) {
					Ext.callback(callback, scope);
					return;
				}
				const profileKey = this.getSummarySettingsProfileKey();
				this.Terrasoft.require(["profile!" + profileKey], function(profile) {
					if (!profile || !profile.length) {
						this.Ext.callback(callback, scope);
					}
					const hasCountSummary = this._hasSummaryCountFunction(profile);
					this.set("SummaryHasCount", hasCountSummary);
					this.Ext.callback(callback, scope);
				}, this);
			},

			/**
			 * Check whether summary items has count function.
			 * @private
			 * @param {Array} summaryCollection Summary items array.
			 * @return {Boolean} Does summary items contains count function.
			 */
			_hasSummaryCountFunction: function(summaryCollection) {
				const hasCountSummary = this.isNotEmpty(
					this.Terrasoft.findWhere(summaryCollection, {1: "COUNT"}));
				return hasCountSummary;
			},

			/**
			 * Initializes view model values that received from system settings.
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			initViewModelValuesFromSysSettings: function(callback, scope) {
				callback.call(scope);
			},

			/**
			 * Gets active view grid settings profile.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			getActiveViewGridSettingsProfile: function(callback, scope) {
				this.requireProfile(function(profile) {
					profile = Terrasoft.ColumnUtilities.updateProfileColumnCaptions({
						profile: profile,
						entityColumns: this.columns
					});
					this.set("Profile", profile);
					Ext.callback(callback, scope);
				}, this);
			},

			/**
			 * Saves active view name in profile.
			 * @protected
			 * @param {String} activeViewName Active view name.
			 */
			saveActiveViewNameToProfile: function(activeViewName) {
				const profileKey = this.getActiveViewSettingsProfileKey();
				const profile = this.get("ActiveViewSettingsProfile") || {};
				if (profile.activeViewName && profile.activeViewName === activeViewName) {
					return;
				}
				profile.activeViewName = activeViewName;
				this.set("ActiveViewSettingsProfile", profile);
				Terrasoft.utils.saveUserProfile(profileKey, profile, false);
			},

			/**
			 * Returns data view visible property name.
			 * @protected
			 */
			getDataViewVisiblePropertyName: function(dataViewName) {
				return Ext.String.format("Is{0}Visible", dataViewName);
			},

			/**
			 * Changes data view visibility.
			 * @protected
			 * @param {Object} dataView Section data view.
			 * @param {Boolean} value Visibility.
			 */
			setViewVisible: function(dataView, value) {
				const dataViewVisiblePropertyName = this.getDataViewVisiblePropertyName(dataView.name);
				this.set(dataViewVisiblePropertyName, value);
				dataView.active = value;
			},

			/**
			 * Initiates data view loading.
			 * @protected
			 * @param {String} dataViewName Section data view name.
			 * @param {Boolean} loadData Load data flag.
			 */
			loadView: function(dataViewName, loadData) {
				this.set("ActiveViewName", dataViewName);
				this.saveActiveViewNameToProfile(dataViewName);
				this.getActiveViewGridSettingsProfile(function() {
					this["load" + dataViewName](loadData);
				}, this);
			},

			/**
			 * Initialize initial need load data property value.
			 * @protected
			 */
			needLoadData: function() {
				if (!this.get("CanLoadMoreData")) {
					return;
				}
				if (this.get("IsActionButtonsContainerVisible")) {
					this.loadGridData();
				}
			},

			/**
			 * Returns profile key.
			 * @protected
			 * @return {String} Profile key.
			 */
			getProfileKey: function() {
				const currentTabName = this.getActiveViewName();
				const schemaName = this.name;
				return schemaName + "GridSettings" + currentTabName;
			},

			/**
			 * Returns active view profile key.
			 * @protected
			 * @return {String} Profile key.
			 */
			getActiveViewSettingsProfileKey: function() {
				const schemaName = this.name;
				return schemaName + "ActiveViewSettingsProfile";
			},

			/**
			 * Returns summary module profile key.
			 * @protected
			 */
			getSummarySettingsProfileKey: function() {
				return Ext.String.format(ConfigurationConstants.SummaryModule.ProfileKeyTemplate,
					this.entitySchemaName);
			},

			/**
			 * Returns grid name.
			 * @protected
			 * @param {String} [gridType] Grid type.
			 * @return {String} Grid name.
			 */
			getDataGridName: function(gridType) {
				let dataGridName = "DataGrid";
				if (gridType) {
					if (gridType === "vertical") {
						dataGridName += this.verticalProfileKeySuffix;
					}
				} else {
					const isCardVisible = this.get("IsCardVisible");
					if (isCardVisible === true) {
						dataGridName += this.verticalProfileKeySuffix;
					}
				}
				return dataGridName;
			},

			/**
			 * Returns column set for normal and vertical grid.
			 * @protected
			 * @return {Object} Column set.
			 */
			getProfileColumns: function() {
				const profileColumns = {};
				const profile = this.get("Profile");
				const normalPropertyName = this.getDataGridName("normal");
				const normalProfileConfig = profile[normalPropertyName];
				this.convertProfileColumns(profileColumns, normalProfileConfig);
				this._applyVerticalProfileColumns(profileColumns);
				return profileColumns;
			},

			/**
			 * Apply vertical profile columns.
			 * @private
			 * @param {Object} profileColumns Profile columns.
			 */
			_applyVerticalProfileColumns: function(profileColumns) {
				if (this.$NeedSelectVerticalProfileColumns) {
					const profile = this.get("Profile");
					const verticalPropertyName = this.getDataGridName("vertical");
					const verticalProfileConfig = profile[verticalPropertyName];
					this.convertProfileColumns(profileColumns, verticalProfileConfig);
				}
			},

			/**
			 * ######### ########## ######### ######## ####### # ######## #########.
			 * @param {String} primaryColumnValue ############# ########## ########.
			 * @return {Boolean}
			 */
			isNewRowSelected: function(primaryColumnValue) {
				if (!primaryColumnValue) {
					return true;
				}
				const selectedRows = this.getSelectedItems();
				if (!selectedRows) {
					return true;
				}
				const isSingleSelected = this.isSingleSelected();
				if (isSingleSelected) {
					return (selectedRows[0] !== primaryColumnValue);
				} else {
					return selectedRows.indexOf(primaryColumnValue) === -1;
				}
			},

			/**
			 *
			 * @protected
			 */
			rowSelected: function(primaryColumnValue) {
				if (this.$ActiveRow !== primaryColumnValue) {
					this.closeMiniPage();
				}
				if (this.get("IsCardVisible") === true) {
					const isNewRowSelected = this.isNewRowSelected(primaryColumnValue);
					if (primaryColumnValue && isNewRowSelected && !this.get("IsCardInChain")) {
						const gridData = this.getGridData();
						const activeRow = gridData.get(primaryColumnValue);
						const typeColumnValue = this.getTypeColumnValue(activeRow);
						const schemaName = this.getEditPageSchemaName(typeColumnValue);
						this.openCard(schemaName, ConfigurationEnums.CardStateV2.EDIT, primaryColumnValue);
					}
				}
				this.set("IsCardInChain", false);
			},

			/**
			 * Handles grid link click.
			 * @protected
			 * @param {String} href Entity link.
			 * @param {String} columnName Column name.
			 * @return {Boolean} Link handling result.
			 */
			linkClicked: function(href, columnName) {
				const linkParams = href.split("/");
				const recordId = linkParams[linkParams.length - 1];
				if (columnName !== this.primaryDisplayColumnName) {
					this.set("ActiveRow", recordId);
					const column = this.getColumnByName(columnName);
					const isLookupColumn = column && column.isLookup;
					if (!isLookupColumn) {
						return true;
					}
					this.navigateToEntity(recordId, column);
				} else {
					if (this.get("MultiSelect")) {
						this.saveMultiSelectState();
						this.unSetMultiSelect();
					}
					this.set("ActiveRow", recordId);
					this.editRecord(recordId, true);

				}
				return false;
			},

			/**
			 * Navigates to entity.
			 * @private
			 * @param {String} recordId Grid record identifier.
			 * @param {Object} column Column configuration.
			 * @param {String} column.name Column name.
			 * @param {String} column.referenceSchemaName Column reference schema name.
			 */
			navigateToEntity: function(recordId, column) {
				const row = this.getGridDataRow(recordId);
				const columnValue = row.get(column.name);
				const entitySchemaName = column.referenceSchemaName;
				const navConfig = {
					id: columnValue.value,
					entitySchemaName: entitySchemaName,
					operation: ConfigurationEnums.CardStateV2.EDIT,
				};
				if (NetworkUtilities.tryNavigateTo8xMiniPage(navConfig)) {
					return;
				}
				this.openPage({
					entitySchemaName: entitySchemaName,
					columnName: column.name,
					value: columnValue.value,
					historyState: {
						stateObj: {
							keepAlive: true
						}
					}
				});
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#findLookupColumnAttributeValue
			 * @overridden
			 */
			findLookupColumnAttributeValue: function(columnName, attribute) {
				const row = this.getGridDataRow(this.get("ActiveRow"));
				const lookupColumnAttributeName = Ext.String.format("{0}.{1}", columnName, attribute);
				return row.get(lookupColumnAttributeName) || row.get(attribute);
			},

			/**
			 * Saves state of multiselection choice in the section registry.
			 */
			saveMultiSelectState: function() {
				const multiSelect = this.get("MultiSelect");
				const selectedRows = this.get("SelectedRows");
				this.set("MultiSelectState", {
					multiSelect: multiSelect,
					selectedRows: Terrasoft.deepClone(selectedRows)
				});
			},

			/**
			 * Restores saved state of multiselection choice in the section registry.
			 */
			restoreMultiSelectState: function() {
				const storage = this.get("MultiSelectState");
				if (storage) {
					if (storage.multiSelect) {
						this.setMultiSelect();
						const rows = Terrasoft.deepClone(storage.selectedRows);
						this.set("SelectedRows", rows);
					}
					this.set("MultiSelectState", null);
				}
			},

			/**
			 * Returns renderTo for load SummarySettingsModule.
			 * @protected
			 * @return {String}
			 */
			getSummarySettingsRenderTo: function() {
				return this.renderTo;
			},

			/**
			 *
			 * @protected
			 */
			openSummarySettings: function() {
				const historyState = this.sandbox.publish("GetHistoryState");
				const entitySchemaName = this.entitySchema.name;
				const summaryModuleId = this.sandbox.id + "_SummarySettingsModule";
				this.sandbox.publish("PushHistoryState", {
					hash: historyState.hash.historyState,
					stateObj: {
						entitySchemaName: entitySchemaName
					}
				});
				this.sandbox.loadModule("SummarySettingsModule", {
					renderTo: this.getSummarySettingsRenderTo(),
					id: summaryModuleId,
					keepAlive: true
				});
			},

			/**
			 *
			 * @protected
			 */
			initActionsButtonHeaderMenuItemCaption: function() {
				this.initSeparateModeActionsButtonHeaderMenuItemCaption();
				this.initCombinedModeActionsButtonHeaderMenuItemCaption();
			},

			/**
			 *
			 * @protected
			 */
			initSeparateModeActionsButtonHeaderMenuItemCaption: function() {
				const moduleCaption = this.getModuleCaption();
				this.set("SeparateModeActionsButtonHeaderMenuItemCaption", moduleCaption);
			},

			/**
			 *
			 * @protected
			 */
			initCombinedModeActionsButtonHeaderMenuItemCaption: function() {
				this.set("CombinedModeActionsButtonHeaderMenuItemCaption", this.entitySchema.caption);
			},

			/**
			 * ########## ######### # ####### ## ######## ############ #######
			 * @protected
			 */
			groupFilterItems: function() {
				this.sendFiltersActionFired("group");
			},

			/**
			 * ########## ######### # ####### ## ######## ############### #######
			 * @protected
			 */
			unGroupFilterItems: function() {
				this.sendFiltersActionFired("ungroup");
			},

			/**
			 * ########## ######### # ####### ## ######## ### ######## #####
			 * @protected
			 */
			moveUpFilter: function() {
				this.sendFiltersActionFired("up");
			},

			/**
			 * ########## ######### # ####### ## ######## ### ######## ####
			 * @protected
			 */
			moveDownFilter: function() {
				this.sendFiltersActionFired("down");
			},

			/**
			 *
			 * @protected
			 * @param {String} key
			 */
			sendFiltersActionFired: function(key) {
				this.sandbox.publish("FilterActionsFired", key);
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#setMultiSelect
			 * @overridden
			 */
			setMultiSelect: function() {
				this.hideActiveRowActions();
				this.mixins.GridUtilities.setMultiSelect.call(this);
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#unSetMultiSelect
			 * @overridden
			 */
			unSetMultiSelect: function() {
				this.showActiveRowActions();
				this.mixins.GridUtilities.unSetMultiSelect.call(this);
				this.switchActiveRowActions();
				this.changeActionsButtonCaption();
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#setSelectAllMode
			 * @overridden
			 */
			setSelectAllMode: function() {
				this.mixins.GridUtilities.setSelectAllMode.call(this);
				this.getFilteredRowsCount(function(rowsCount, success) {
					if (success) {
						this.set("FilteredRowsCount", rowsCount);
						this.changeActionsButtonCaption(rowsCount);
					}
				}, this);
				this.enableButtonsForSelectAll(false);
			},

			/**
			 *
			 * @protected
			 */
			onAddStaticFolder: function() {
				this.sandbox.publish("AddFolderActionFired", {
					type: "generalFolder"
				});
			},

			/**
			 * ########## ########## ##### ###### # ######### ########### ########### #####.
			 * @protected
			 * @return {Boolean}
			 */
			onAddFolderClick: function() {
				if (this.get("UseStaticFolders")) {
					return false;
				} else {
					this.onAddDynamicFolder();
				}
			},

			/**
			 *
			 * @protected
			 */
			onAddDynamicFolder: function() {
				this.sandbox.publish("AddFolderActionFired", {
					type: "searchFolder"
				});
			},

			/**
			 * ######## ######## ###### ###### ############# ############# ####### ## ########### #######
			 * @protected
			 * @return {String} ########## ########
			 */
			getGridRowViewModelClassName: function() {
				return "Terrasoft.BaseSectionGridRowViewModel";
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilities#getGridRowViewModelConfig
			 * @override
			 */
			getGridRowViewModelConfig: function(config) {
				const gridRowViewModelConfig =
					this.mixins.GridUtilities.getGridRowViewModelConfig.apply(this, arguments);
				this.addRecordRunProcessMenuItems(gridRowViewModelConfig, config.rawData.Id);
				let printButtonConfig = {
					IsCardPrintButtonVisible: this.get("IsCardPrintButtonVisible")
				};
				if (Ext.isFunction(this.getRowPrintButtonVisible)) {
					printButtonConfig = {
						PrintButtonVisible: this.getRowPrintButtonVisible()
					};
				}
				Ext.apply(gridRowViewModelConfig.values, printButtonConfig);
				return gridRowViewModelConfig;
			},

			_onVerticalGridScrolled: function() {
				const historyStateInfo = this.getHistoryStateInfo();
				if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
					const scrollContainer = Ext.get(this.getScrollContainerId());
					const top = scrollContainer?.dom?.scrollTop ?? 0;
					this.set("ScrollTop", top);
					if (scrollContainer) {
						this.updateScrollTopBtnPosition(this, scrollContainer.getHeight() - 35);
					}
				}
			},

			_onGridScrolledInAngularHost: function() {
				const historyStateInfo = this.getHistoryStateInfo();
				const isSectionWorkArea = historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.SECTION;
				gridDataViewContainer = this._getAngularScrollableGridContainer();
				if (isSectionWorkArea && gridDataViewContainer) {
					this.resetScrollTop();
					const top = gridDataViewContainer.dom.scrollTop;
					this.set("ScrollTop", top);
					this.updateScrollTopBtnPosition(this, top + gridDataViewContainer.getHeight() - 105);
				}
			},

			_subscribeOnGridContainersScrollEvent: function() {
				this._unSubscribeOnGridContainersScrollEvent();
				const verticalGridContainer = Ext.get(this.getScrollContainerId());
				if (verticalGridContainer) {
					Ext.EventManager.addListener(verticalGridContainer, "scroll", this._onVerticalGridScrolled, this);
				}
				if (Terrasoft.isAngularHost) {
					const gridDataViewContainer = this._getAngularScrollableGridContainer();
					if (gridDataViewContainer) {
						Ext.EventManager.addListener(gridDataViewContainer, "scroll", this._onGridScrolledInAngularHost, this);
					}
				}
			},

			_unSubscribeOnGridContainersScrollEvent: function() {
				const verticalGridContainer = Ext.get(this.getScrollContainerId());
				if (verticalGridContainer) {
					Ext.EventManager.removeListener(verticalGridContainer, "scroll", this._onVerticalGridScrolled, this);
				}
				if (Terrasoft.isAngularHost) {
					const gridDataViewContainer = this._getAngularScrollableGridContainer();
					if (gridDataViewContainer) {
						Ext.EventManager.removeListener(gridDataViewContainer, "scroll", this._onGridScrolledInAngularHost, this);
					}
				}
			},
			
			_subscribeOnFilterContainersResizeEvent: function() {
				if (!Terrasoft.isAngularHost){
					return;
				}
				this._unSubscribeOnFilterContainersResizeEvent();
				const filtersContainerParentElement = Ext.select('.utils-container-wrapper-wrapClass')?.first()?.parent();
				if (this._filtersContainerResizeObserver || !filtersContainerParentElement) {
					return;
				}
				this._filtersContainerResizeObserver = new window.ResizeObserver(this.changeGridUtilitiesContainerSize.bind(this));
				this._filtersContainerResizeObserver.observe(filtersContainerParentElement.dom);
			},

			_unSubscribeOnFilterContainersResizeEvent: function() {
				this._filtersContainerResizeObserver?.disconnect();
				this._filtersContainerResizeObserver = null;
			},

			/**
			 * Creates necessary for button "up" event subscriptions.
			 */
			createScrollTopBtn: function() {
				const scope = this;
				Ext.EventManager.addListener(window, "scroll", function() {
					const historyStateInfo = scope.getHistoryStateInfo();
					scope.resetScrollTop();
					const top = Ext.getDoc().dom.documentElement.scrollTop || Ext.getBody().dom.scrollTop;
					if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.SECTION) {
						scope.set("ScrollTop", top);
						scope.updateScrollTopBtnPosition(scope, top + Ext.getBody().getHeight() - 105);
					} else if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
						scope.set("CardScrollTop", top);
					}
				});
				this._subscribeOnGridContainersScrollEvent();
			},

			/**
			 * Resets scroll top for the grid container.
			 * @private
			 */
			resetScrollTop: function() {
				const elements = Ext.getBody().select(".viewmodel-scrolltop-btn");
				const scrollTopEl = elements.first();
				if (scrollTopEl) {
					scrollTopEl.setStyle({top: 0});
				}
			},

			/**
			 * Updates the position of the button up.
			 * @param {Object} scope Context.
			 * @param {Number} top Top inset.
			 */
			updateScrollTopBtnPosition: function(scope, top) {
				const elements = Ext.getBody().select(".viewmodel-scrolltop-btn");
				const el = elements.first();
				if (!el) {
					return;
				}
				const domEl = el.dom;
				el.setStyle({top: top + "px"});
				if (!domEl.style.visibility || domEl.style.visibility === "") {
					el.setStyle({visibility: "visible"});
				}
			},

			/**
			 * ########## ############# ##########, ####### ##### ############## ####### #####
			 * @return {String} ############# ##########, ####### ##### ############## ####### #####
			 */
			getScrollContainerId: function() {
				return "RightSectionContainer";
			},

			/**
			 * Gets the configuration icon buttons "Up".
			 * @return {Object} Returns the configuration icon buttons "Up".
			 */
			getScrollTopButtonImageConfig: function() {
				return {
					source: Terrasoft.ImageSources.URL,
					url: Terrasoft.ImageUrlBuilder.getUrl(this.get("Resources.Images.scrollTopImage"))
				};
			},

			/**
			 * Check the visible of the button "Up".
			 * @param {Number} top The height of the scroll top.
			 * @return {Boolean} Visibility button "Up".
			 */
			scrollTopBtnShow: function(top) {
				return top > 0;
			},

			/**
			 * ############ ########## ########## #####
			 */
			scrollTop: function() {
				const containerId = this.getScrollContainerId();
				const historyStateInfo = this.getHistoryStateInfo();
				if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
					Ext.get(containerId).dom.scrollTop = 0;
					return;
				}
				if (Terrasoft.isAngularHost) {
					const container = this._getAngularScrollableGridContainer();
					if (container) {
						container.dom.scrollTop = 0;
					}
					return;
				}
				Ext.getBody().dom.scrollTop = 0;
				Ext.getDoc().dom.documentElement.scrollTop = 0;
			},

			/**
			 * ############ ######### ######## ############## #####.
			 */
			scrollCardTop: function() {
				Ext.getBody().dom.scrollTop = 0;
				Ext.getDoc().dom.documentElement.scrollTop = 0;
			},

			/**
			 * ########## ######### ####### ####### ########.
			 * @protected
			 * @virtual
			 * @return {Object} ######### ####### ####### ########.
			 */
			getModuleCaption: function() {
				const moduleStructure = this.getModuleStructure();
				return moduleStructure && moduleStructure.moduleCaption;
			},

			/**
			 * ########## ##### # ####### ########### ######.
			 * # ###### ############## ######:
			 * - ######## ##### ####### ####### ######### #######
			 * - ######### # ###### ##### ######
			 * - "#######" ######### ## #### #######
			 * - ############# ##### ############## ###### (##### # ####: ######### ########## ####### # #######
			 * * activeRowActions. ####### # ###, ### ###### ######### ###### ##### ########### ## ########
			 * * ########## ######)
			 * - ############# ########## ######## ######### #######
			 * @overridden
			 */
			afterLoadGridDataUserFunction: function(primaryColumnValue) {
				if (this.get("MultiSelect")) {
					const selectedRows = Terrasoft.deepClone(this.get("SelectedRows"));
					selectedRows.push(primaryColumnValue);
					this.set("SelectedRows", []);
					this.setMultiSelect();
					this.set("SelectedRows", selectedRows);
				} else if (this.needSetActiveRow()) {
					this.set("ActiveRow", primaryColumnValue);
				}
			},

			/**
			 * ########## ####### ####, ### ##### ########## ######## ######.
			 * @protected
			 * @virtual
			 * @return {Boolean} ####### ####, ### ##### ########## ######## ######.
			 */
			needSetActiveRow: function() {
				return !this.get("IsCardVisible");
			},

			/**
			 * ######## ############# #######
			 * @return {Terrasoft.BaseViewModelCollection} ########## ############# #######
			 */
			getDataViews: function() {
				return this.get("DataViews");
			},

			/**
			 * ### ######## ######## ########## ###### "######### #######"
			 * @protected
			 */
			onCardVisibleChanged: function() {
				const runProcessButtonMenuItems = this.get("RunProcessButtonMenuItems");
				const isCardVisible = this.get("IsCardVisible");
				const existsRunProcess = runProcessButtonMenuItems && runProcessButtonMenuItems.getCount() > 0;
				const isRunProcessButtonVisible = !isCardVisible && existsRunProcess;
				this.set("IsRunProcessButtonVisible", isRunProcessButtonVisible);
			},

			/**
			 * ######### ######-####### ## ###### ########## ###### ####### #########.
			 * @param {Object} tag UId ##### ######-########.
			 */
			runProcess: function(tag) {
				ProcessModuleUtilities.executeProcess({
					sysProcessId: tag
				});
			},

			/**
			 * Run the business process with parameters.
			 * @param {Object} config Configuration object.
			 * @param {Object} config.sysProcessUId UId schema of the business process.
			 * @param {Array} config.parameters Process parameters.
			 * @param {Object} config.parameter Process parameter.
			 * @param {Function} config.callback Callback function.
			 * @param {Object} config.scope Callback scope.
			 */
			runProcessWithParameters: function(config) {
				if (config.parameter && this.cachedActiveRow) {
					config.parameter.parameterValue = this.cachedActiveRow;
				} 
				Terrasoft.ProcessModuleUtilities.runProcessWithParameters(config);
			},

			/**
			 * Prepare empty grid message view config.
			 * @param {Object} config Empty grid message view config.
			 */
			prepareEmptyGridMessageConfig: function(config) {
				const historyStateInfo = this.getHistoryStateInfo();
				if (historyStateInfo.workAreaMode === ConfigurationEnums.WorkAreaMode.COMBINED) {
					return;
				}
				const emptyGridMessageProperties = this.getDefaultEmptyGridMessageProperties();
				const filterKey = this.getLastFilterKey();
				const quickFilters = ["FixedFilters", "CustomFilters"];
				if (filterKey === "FolderFilters") {
					const currentFilter = this.get("CurrentFolder");
					if (currentFilter &&
						(currentFilter.folderType.value === ConfigurationConstants.Folder.Type.Search)) {
						if (this.$QueryOptimizationFailed) {
							this._applyQueryOptimizationFailedGridMessageParameters(emptyGridMessageProperties);
						} else {
							this.applyEmptyDynamicFolderGridMessageParameters(emptyGridMessageProperties);
						}
					} else {
						this.applyEmptyFolderGridMessageParameters(emptyGridMessageProperties);
					}
				} else if (filterKey === TagConstantsV2.TagFilterKey) {
					this.applyEmptyFilterResultGridMessageParameters(emptyGridMessageProperties);
				} else if (quickFilters.indexOf(filterKey) >= 0) {
					this.applyEmptyFilterResultGridMessageParameters(emptyGridMessageProperties);
				}
				const emptyGridMessageViewConfig = this.getEmptyGridMessageViewConfig(emptyGridMessageProperties);
				Ext.apply(config, emptyGridMessageViewConfig);
			},

			/**
			 * ########## #### ######### ###### ########.
			 * @protected
			 * @return {String} #### ######### ###### ########.
			 */
			getLastFilterKey: function() {
				let filters = this.getFilters();
				filters = filters.filter(function(filter) {
					const notNull = (filter.isNull === undefined);
					const isFilterGroup = (filter instanceof Terrasoft.FilterGroup);
					const notEmptyFilterGroup = (isFilterGroup && !filter.isEmpty() && !(filter.getByIndex(0).key === "undefined" &&
						(filter.getByIndex(0) instanceof Terrasoft.FilterGroup) && filter.getByIndex(0).isEmpty()));
					return (notNull && notEmptyFilterGroup);
				});
				const count = filters ? filters.getCount() : 0;
				if (count === 0) {
					return null;
				}
				const filter = filters.getByIndex(count - 1);
				return filter.key;
			},

			/**
			 * ########## ######### ## ######### ######### # ###### #######.
			 * @return {Object} ######### ## ######### ######### # ###### #######.
			 */
			getDefaultEmptyGridMessageProperties: function() {
				return {
					title: this.get("Resources.Strings.EmptyInfoTitle"),
					description: this.get("Resources.Strings.EmptyInfoDescription"),
					recommendation: this.get("Resources.Strings.EmptyInfoRecommendation"),
					image: this.get("Resources.Images.EmptyInfoImage"),
					useStaticFolderHelpUrl: false
				};
			},

			/**
			 * ######### ######### ######### # ###### ####### ### ###### ############ ######.
			 * @param {Object} emptyGridMessageProperties ######### ######### # ###### #######.
			 */
			applyEmptyDynamicFolderGridMessageParameters: function(emptyGridMessageProperties) {
				Ext.apply(emptyGridMessageProperties, {
					title: this.get("Resources.Strings.EmptyDynamicGroupTitle"),
					description: this.get("Resources.Strings.EmptyDynamicGroupDescription"),
					recommendation: this.get("Resources.Strings.EmptyDynamicGroupRecommendation"),
					image: this.get("Resources.Images.EmptyDynamicGroupImage")
				});
			},

			/**
			 * ######### ######### ######### # ###### ####### ### ###### ######.
			 * @param {Object} emptyGridMessageProperties ######### ######### # ###### #######.
			 */
			applyEmptyFolderGridMessageParameters: function(emptyGridMessageProperties) {
				Ext.apply(emptyGridMessageProperties, {
					title: this.get("Resources.Strings.EmptyGroupTitle"),
					description: this.get("Resources.Strings.EmptyGroupDescription"),
					recommendation: this.get("Resources.Strings.EmptyGroupRecommendation"),
					image: this.get("Resources.Images.EmptyGroupImage"),
					useStaticFolderHelpUrl: true
				});
			},

			/**
			 * ######### ######### ######### # ###### ####### ### ######### ######## #######.
			 * @param {Object} emptyGridMessageProperties ######### ######### # ###### #######.
			 */
			applyEmptyFilterResultGridMessageParameters: function(emptyGridMessageProperties) {
				Ext.apply(emptyGridMessageProperties, {
					title: this.get("Resources.Strings.EmptyFilterTitle"),
					description: this.get("Resources.Strings.EmptyFilterDescription"),
					recommendation: this.get("Resources.Strings.EmptyFilterRecommendation"),
					image: this.get("Resources.Images.EmptyFilterImage")
				});
			},

			/**
			 * Applies message config, for query optimization failed case.
			 * @param emptyGridMessageProperties {Object} - message properties.
			 * @private
			 */
			_applyQueryOptimizationFailedGridMessageParameters: function(emptyGridMessageProperties) {
				Ext.apply(emptyGridMessageProperties, {
					title: this.get("Resources.Strings.QueryOptimizationFailedTitle"),
					description: "",
					recommendation: this.get("Resources.Strings.QueryOptimizationFailedRecommendation"),
					image: this.get("Resources.Images.DataLoadFailedImage")
				});
			},

			/**
			 * ########## ############ ############# ######### # ###### #######.
			 * @param {Object} emptyGridMessageProperties ######### ######### # ###### #######.
			 * @return {Object} ############ ############# ######### # ###### #######.
			 */
			getEmptyGridMessageViewConfig: function(emptyGridMessageProperties) {
				const config = {
					className: "Terrasoft.Container",
					classes: {
						wrapClassName: ["empty-grid-message"]
					},
					items: []
				};
				config.items.push({
					className: "Terrasoft.Container",
					classes: {
						wrapClassName: ["image-container"]
					},
					items: [
						{
							className: "Terrasoft.ImageEdit",
							readonly: true,
							classes: {
								wrapClass: ["image-control"]
							},
							imageSrc: Terrasoft.ImageUrlBuilder.getUrl(emptyGridMessageProperties.image)
						}
					]
				});
				config.items.push({
					className: "Terrasoft.Container",
					classes: {
						wrapClassName: ["title"]
					},
					items: [
						{
							className: "Terrasoft.Label",
							caption: emptyGridMessageProperties.title
						}
					]
				});
				const descriptionConfig = {
					className: "Terrasoft.Container",
					classes: {
						wrapClassName: ["description"]
					},
					items: []
				};
				if (this.$QueryOptimizationFailed) {
					descriptionConfig.classes.wrapClassName.push("grid-error-shadow");
				}
				descriptionConfig.items.push({
					className: "Terrasoft.Container",
					classes: {wrapClassName: ["action"]},
					items: [
						{
							className: "Terrasoft.Label",
							caption: emptyGridMessageProperties.description
						}
					]
				});
				let recommendation = emptyGridMessageProperties.recommendation;
				if (!Ext.isEmpty(recommendation)) {
					const useStaticFolderHelpUrl = emptyGridMessageProperties.useStaticFolderHelpUrl;
					const helpUrl = (useStaticFolderHelpUrl) ? this.get("StaticFolderHelpUrl") : this.get("HelpUrl");
					let startTagPart = "";
					let endTagPart = "";
					if (!Ext.isEmpty(helpUrl)) {
						startTagPart = "<a target=\"_blank\" href=\"" + helpUrl + "\">";
						endTagPart = "</a>";
					}
					recommendation = Ext.String.format(recommendation, startTagPart, endTagPart);
					descriptionConfig.items.push({
						className: "Terrasoft.Container",
						classes: {
							wrapClassName: ["reference"]
						},
						items: [
							{
								selectors: {
									wrapEl: ".reference"
								},
								className: "Terrasoft.HtmlControl",
								html: recommendation
							}
						]
					});
				}
				config.items.push(descriptionConfig);
				return config;
			},

			/**
			 * ########## ###### "###".
			 * @protected
			 */
			onTagButtonClick: function() {
				if (this.isNew) {
					this.sandbox.publish("OnCardAction", "saveCardAndLoadTagsFromSection", [this.getCardModuleSandboxId()]);
				} else {
					this.mixins.TagUtilities.showTagModule.call(this);
				}
			},

			/**
			 * ########## ############# ######## ###### #######.
			 * @overridden
			 * @protected
			 * @return {String} ############# ######## ###### #######.
			 */
			getCurrentRecordId: function() {
				return this.sandbox.publish("GetRecordId", this, [this.getCardModuleSandboxId()]);
			},

			/**
			 * ####### ######## ## #######
			 */
			destroy: function() {
				fixedSectionGridCaptionsPlugin.unsubscribeUpdateGridCaptionsContainer();
				Ext.EventManager.removeResizeListener(this.changeGridUtilitiesContainerSize, this);
				this.mixins.GridUtilities.destroy.call(this);
				this.callParent(arguments);
				this._unSubscribeOnGridContainersScrollEvent();
				this._unSubscribeOnFilterContainersResizeEvent();
			},

			/**
			 * ########## ######### ###### "###".
			 * @return {Boolean} ######### ###### "###".
			 */
			getCombinedModeViewOptionsButtonVisible: function() {
				const combinedModeViewOptionsButtonMenuItems = this.get("CombinedModeViewOptionsButtonMenuItems");
				return MenuUtilities.getMenuVisible(combinedModeViewOptionsButtonMenuItems, this);
			},

			/**
			 * ########## ########### ####### ###### # #######.
			 * @protected
			 * @return {Boolean}
			 */
			canDeleteRecords: function() {
				return true;
			},

			/**
			 * ########## ######### ###### ####### # #### ########.
			 * @return {Boolean}
			 */
			isVisibleDeleteAction: function() {
				return this.get("MultiSelect") && this.canDeleteRecords();
			},

			/**
			 * Gets "Export to file" menu item.
			 * @protected
			 * @return {Terrasoft.BaseViewModel}
			 */
			getExportToFileMenuItem: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.ExportListToFileButtonCaption"},
					"Click": {"bindTo": "exportToFile"},
					"Visible": Terrasoft.Features.getIsEnabled("ExportToCSV")
				});
			},

			/**
			 * Gets "Export to excel file" menu item.
			 * @protected
			 * @return {Terrasoft.BaseViewModel} "Export to excel file" menu item.
			 */
			getExportToExcelFileMenuItem: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.ExportListToExcelFileButtonCaption"},
					"Click": {"bindTo": "exportToExcel"},
					"Visible": {"bindTo": "getExportToFileActionVisibility"},
					"ImageConfig": this.get("Resources.Images.ExportToExcelBtnImage"),
					"IsEnabledForSelectedAll": true
				});
			},

			/**
			 * Returns a function button drop-down item that is responsible for switching to the
			 * object change log settings.
			 * @protected
			 * @return {Terrasoft.BaseViewModel} Function button drop-down list item that is responsible
			 * for switching to the object change log settings.
			 */
			getObjectChangeLogSettingsMenuItem: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.OpenObjectChangeLogSettingsCaption"},
					"Click": {"bindTo": "openObjectChangeLogSettings"},
					"Visible": {"bindTo": "IsObjectChangeLogSettingsMenuItemVisible"},
					"ImageConfig": this.get("Resources.Images.ObjectChangeLogSettingsBtnImage")
				});
			},

			/**
			 * Opens object change log settings.
			 * @protected
			 */
			openObjectChangeLogSettings: function() {
				changeLogUtilities.openObjectChangeLogSettings(this.entitySchema.uId);
			},

			/**
			 * Initializes the visibility of the menu item to the change log settings.
			 * @protected
			 */
			initObjectChangeLogSettingsMenuItemVisibility: function() {
				changeLogUtilities.canShowObjectChangeLogSettings(function(result) {
					this.set("IsObjectChangeLogSettingsMenuItemVisible", result);
				}, this);
			},

			/**
			 * Get "Add tags" menu item.
			 * @return {Terrasoft.BaseViewModel} "Add tags" menu item.
			 */
			getAddTagsMenuItem: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.MultiTagButtonCaption"},
					"Visible": Terrasoft.Features.getIsEnabled("MultipleTagging"),
					"ImageConfig": this.get("Resources.Images.AddTagsButtonImage")
				});
			},

			/**
			 * Gets "Export to file" action visibility.
			 * @return {Boolean} "Export to file" action visibility.
			 */
			getExportToFileActionVisibility: function() {
				return true;
			},

			/**
			 * Subscribe to changes MultiSelect.
			 * @private
			 */
			subscribeOnMultiSelectChange: function() {
				this.on("change:MultiSelect", this.onMultiSelectChange, this);
			},

			/**
			 * Subscribe to changes SelectedRows.
			 * @private
			 */
			subscribeOnSelectedRowsChange: function() {
				this.on("change:SelectedRows", this.onSelectedRowsChange, this);
			},

			/**
			 * Init actions button caption.
			 * @private
			 */
			initActionsButtonCaption: function() {
				this.set("ActionsButtonCaption", this.get("Resources.Strings.ActionsButtonCaption"));
			},

			/**
			 * Change actions button caption.
			 * @param {String} caption Caption.
			 */
			changeActionsButtonCaption: function(caption) {
				const formatCaption = Ext.String.format(" ({0})", caption);
				caption = (caption === undefined)
					? this.get("Resources.Strings.ActionsButtonCaption")
					: this.get("Resources.Strings.ActionsButtonCaption") + formatCaption;
				this.set("ActionsButtonCaption", caption);
			},

			/**
			 * Change style for Actions button.
			 * @protected
			 */
			onMultiSelectChange: function() {
				const styleButton = this.get("MultiSelect")
					? Terrasoft.controls.ButtonEnums.style.GREEN
					: Terrasoft.controls.ButtonEnums.style.DEFAULT;
				this.set("IsAddRecordButtonVisible", !this.get("MultiSelect"));
				this.set("ActionsButtonStyle", styleButton);
			},

			/**
			 * Change Actions button caption when change selected rows.
			 * @protected
			 */
			onSelectedRowsChange: function() {
				if (this.get("MultiSelect")) {
					if (this.get("SelectAllMode")) {
						const filteredRowsCount = this.get("FilteredRowsCount");
						if (filteredRowsCount) {
							const unselectedItems = this.getUnselectedItems();
							const captionCount = filteredRowsCount - unselectedItems.length;
							this.changeActionsButtonCaption(captionCount);
						}
						return;
					}
					const count = this.getSelectedItems().length;
					this.changeActionsButtonCaption(count);
				}
			},

			/**
			 * Handles toggle button click. Showing or hiding vertical grid.
			 * @protected
			 */
			onToggleSectionButtonClick: function() {
				if (Terrasoft.Features.getIsDisabled("OldUI")) {
					const isSectionVisible = this.get("IsSectionVisible");
					if (isSectionVisible) {
						this.onCloseSectionButtonClick();
					} else {
						this.onBackButtonClick();
					}
				}
				this.changeGridUtilitiesContainerSize();
			},

			/**
			 * Returns toggle button hint text.
			 * @protected
			 * @return {String} Toggle button hint text.
			 */
			getToggleSectionButtonHint: function() {
				if (Terrasoft.Features.getIsDisabled("OldUI")) {
					const hideSectionHint = this.get("Resources.Strings.HideVerticalViewButtonHint");
					const showSectionHint = this.get("Resources.Strings.BackButtonHint");
					return this.get("IsSectionVisible") ? hideSectionHint : showSectionHint;
				}
			},

			/**
			 * Returns toggle button data-item-marker value.
			 * @protected
			 * @return {String} Data item marker value.
			 */
			getToggleSectionButtonMarkerValue: function() {
				if (Terrasoft.Features.getIsDisabled("OldUI")) {
					return this.get("IsSectionVisible") ? "CloseSectionButton" : "BackButton";
				}
			},

			/**
			 * Gets icons of toggle button in page.
			 * @protected
			 * @return {Object} Return toggle button image config.
			 */
			getToggleSectionButtonImageConfig: function() {
				return this.getResourceImageConfig("Resources.Images.ToggleSectionButton");
			},

			/**
			 * Returns flag for toggleSectionButton is visible.
			 * @return {Boolean} ToggleSectionButton is visible.
			 */
			getToggleSectionButtonIsVisible: function() {
				return Terrasoft.Features.getIsDisabled("OldUI");
			},

			/**
			 * @inheritdoc Terrasoft.configuration.mixins.GridUtilities#unSetSelectAllMode
			 * @overridden
			 */
			unSetSelectAllMode: function() {
				this.mixins.GridUtilities.unSetSelectAllMode.call(this);
				this.enableButtonsForSelectAll(true);
			},

			/**
			 * Enable the actions menu items of the separate mode.
			 * @protected
			 * @param {Boolean} enabled Enable mark.
			 */
			enableButtonsForSelectAll: function(enabled) {
				const collectionName = "SeparateModeActionsButtonMenuItems";
				const menuItems = this.get(collectionName);
				if (Ext.isEmpty(menuItems)) {
					return;
				}
				const iterator = enabled ? this.enableButtonForSelectAll : this.disableButtonForSelectAll;
				menuItems.each(iterator, this);
			},

			/**
			 * Enable the menu item for select all mode.
			 * @protected
			 * @param {Terrasoft.BaseViewModel} menuItem Menu item.
			 */
			enableButtonForSelectAll: function(menuItem) {
				const originEnabled = menuItem.get("originEnabled");
				if (originEnabled) {
					menuItem.set("Enabled", originEnabled.value);
				}
			},

			/**
			 * Disable the menu item for select all mode.
			 * @protected
			 * @param {Terrasoft.BaseViewModel} menuItem Menu item.
			 */
			disableButtonForSelectAll: function(menuItem) {
				const isEnabledForSelectedAll = menuItem.get("IsEnabledForSelectedAll");
				if (isEnabledForSelectedAll) {
					return;
				}
				const currentEnabled = menuItem.get("Enabled");
				const originEnabled = menuItem.get("originEnabled") || {value: currentEnabled};
				menuItem.set("originEnabled", originEnabled);
				menuItem.set("Enabled", false);
			},

			/**
			 * Determines if left section container is visible.
			 * @protected
			 * @return {Boolean}
			 */
			isLeftSectionContainerVisible: function() {
				return this.get("IsExtendedFiltersVisible") || this.get("IsFoldersVisible");
			},

			/**
			 * Returns left section container size profile key.
			 * @protected
			 * @return {String}
			 */
			getLeftSectionContainerSizeProfileKey: function() {
				return this.entitySchemaName + "LeftSectionContainerSize";
			},

			/**
			 * Returns container size.
			 * @param {Object} containerName Container name.
			 * @private
			 * @return {Object}
			 */
			getContainerSize: function(containerName) {
				const leftSectionContainerSize = this.get("LeftSectionContainerSize");
				const size = leftSectionContainerSize[containerName] = leftSectionContainerSize[containerName] || {};
				return size;
			},

			/**
			 * Returns folders container size.
			 * @private
			 * @return {Object}
			 */
			getFoldersContainerSize: function() {
				return this.getContainerSize("foldersContainer");
			},

			/**
			 * Returns extended filters size.
			 * @private
			 * @return {Object}
			 */
			getExtendedFilterContainerSize: function() {
				return this.getContainerSize("extendedFiltersContainer");
			},

			/**
			 * Returns active container size. It might be folders container size or extended filters container.
			 * @private
			 * @return {Object}
			 */
			getActiveContainerSize: function() {
				let activeContainerSize;
				if (this.get("IsFoldersVisible")) {
					activeContainerSize = this.getFoldersContainerSize();
				}
				if (this.get("IsExtendedFiltersVisible")) {
					activeContainerSize = this.getExtendedFilterContainerSize();
				}
				return activeContainerSize;
			},

			/**
			 * Left section container "onsizechanged" event handler.
			 * @protected
			 * @param {Object} currentSize Left section container current size.
			 * @param {Number} currentSize.width Left section container current width.
			 */
			onLeftSectionContainerSizeChanged: function(currentSize) {
				const activeContainerSize = this.getActiveContainerSize();
				activeContainerSize.width = currentSize.width;
				const profileKey = this.getLeftSectionContainerSizeProfileKey();
				Terrasoft.saveUserProfile(profileKey, this.get("LeftSectionContainerSize"), false);
			},

			/**
			 * Changes grid utilities container size.
			 * @private
			 */
			changeGridUtilitiesContainerSize: function() {
				if (!this.throttledChangeGridUtilitiesContainerSize) {
					this.throttledChangeGridUtilitiesContainerSize = Terrasoft.throttle(function() {
						const rightSectionContainer = Ext.get("RightSectionContainer");
						const filtersContainer = rightSectionContainer &&
							rightSectionContainer.select(".utils-container-wrapClass").first();
						const filtersContainerWrapper = filtersContainer &&
							rightSectionContainer.select(".utils-container-wrapper-wrapClass").first();
						if (filtersContainer && filtersContainerWrapper) {
							const width = rightSectionContainer.getWidth();
							filtersContainer.setStyle("width", width + "px");
							const height = filtersContainer.getHeight();
							filtersContainerWrapper.setStyle("height", height + "px");
						}
						fixedSectionGridCaptionsPlugin.updateGridCaptionsContainer();
					}, 200);
				}
				this.throttledChangeGridUtilitiesContainerSize();
			},

			/**
			 * Left section container "onsizeinit" event handler.
			 * @protected
			 * @param {Object} initialSize Left section container initial size.
			 * @param {Object} initialSize.width Left section container initial width.
			 */
			onLeftSectionContainerSizeInit: function(initialSize) {
				const size = this.getActiveContainerSize();
				initialSize.width = size.width;
			},

			/**
			 * Initializes left section container size property.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			initLeftSectionContainerSize: function(callback, scope) {
				Terrasoft.require(["profile!" + this.getLeftSectionContainerSizeProfileKey()],
					function(leftSectionContainerSize) {
						this.set("LeftSectionContainerSize", leftSectionContainerSize);
						Ext.callback(callback, scope);
					}, this);
			},

			/**
			 * Changes data views container classes.
			 * @protected
			 * @param {Object} config Configuration information.
			 * @param {Boolean} config.showFolders True if folders or filters are shown.
			 */
			changeDataViewsContainerClasses: function(config) {
				if (!config) {
					return;
				}
				this._setItemClass("DataViewsContainer", "data-views-with-folders-container-wrapClass", !config.showFolders);
			},

			/**
			 * Changes folders and data view container classes.
			 * @protected
			 * @param {Object} config Configuration information.
			 * @param {Boolean} config.showFolders True if folders or filters are shown.
			 * @param {Boolean} config.folderEditMode True if folders are in edit mode.
			 */
			changeFoldersAndDataViewContainerClasses: function(config) {
				const classesConfig = this.getFolderClassesConfig(config);
				if (Ext.isEmpty(classesConfig)) {
					return;
				}
				this._replaceItemClasses("FoldersAndDataViewContainer", classesConfig.oldClass,
					classesConfig.newClass);
				this._setItemClass("FoldersAndDataViewContainer", "folder-edit-mode", !config.folderEditMode);
			},

			/**
			 * @private
			 */
			_replaceItemClasses: function(itemId, oldClassName, newClassName) {
				const schema = Ext.get(itemId);
				if (schema) {
					schema.replaceCls(oldClassName, newClassName);
				}
			},

			/**
			 * @private
			 */
			_setItemClass: function(itemId, className, remove) {
				const schema = Ext.get(itemId);
				if (schema) {
					if (remove) {
						schema.removeCls(className);
					} else {
						schema.addCls(className);
					}
				}
			},

			/**
			 * Return replaced classes config.
			 * @param {Object} config Configuration information.
			 * @return {Object} Replaced classes config.
			 */
			getFolderClassesConfig: function(config) {
				if (!config) {
					return;
				}
				const classesConfig = {
					oldClass: "",
					newClass: ""
				};
				if (config.showFolders) {
					classesConfig.oldClass = "one-el";
					classesConfig.newClass = "two-el";
				} else {
					classesConfig.oldClass = "two-el";
					classesConfig.newClass = "one-el";
				}
				return classesConfig;
			},

			/**
			 * Sets LeftSectionContainer visibility.
			 * @protected
			 * @param {Boolean} visible Adds/removes display-none class.
			 */
			setLeftSectionContainerVisibility: function(visible) {
				const leftSectionEl = Ext.get("LeftSectionContainer");
				if (!leftSectionEl) {
					return;
				}
				if (visible) {
					leftSectionEl.removeCls("display-none");
				} else {
					leftSectionEl.addCls("display-none");
				}
			},

			/**
			 * @inheritdoc
			 * @override Terrasoft.GridUtilities#exportToExcel
			 */
			exportToExcel: function() {
				const filePrefix = this.getGridEntitySchemaName();
				const downloadFileName = this.mixins.GridUtilities.getDownloadFileName.call(this, filePrefix);
				this.$NeedSelectVerticalProfileColumns = false;
				this.mixins.GridUtilities.exportToExcel.call(this, {downloadFileName: downloadFileName});
				this.$NeedSelectVerticalProfileColumns = true;
			}
		},
		diff: [
			{
				"operation": "insert",
				"name": "SectionWrapContainer",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["section-wrap"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "ScrollTopBtn",
				"parentName": "SectionContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ScrollTopCaption"},
					"visible": {
						"bindTo": "ScrollTop",
						"bindConfig": {"converter": "scrollTopBtnShow"}
					},
					"imageConfig": {"bindTo": "getScrollTopButtonImageConfig"},
					"classes": {
						"textClass": ["viewmodel-scrolltop-btn-text"],
						"wrapperClass": "viewmodel-scrolltop-btn"
					},
					"click": {"bindTo": "scrollTop"}
				}
			},
			{
				"operation": "insert",
				"name": "ActionButtonsContainer",
				"parentName": "SectionWrapContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"id": "ActionButtonsContainer",
					"selectors": {"wrapEl": "#ActionButtonsContainer"},
					"wrapClass": ["action-buttons-container-wrapClass"],
					"visible": {"bindTo": "IsActionButtonsContainerVisible"},
					"items": []
				}
			},
			// region COMBINED MODE
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-container-wrapClass"],
					"visible": {"bindTo": "IsCardVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsSectionContainer",
				"parentName": "CombinedModeActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-section-container-wrapClass"],
					"visible": {"bindTo": "IsSectionVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsCardContainer",
				"parentName": "CombinedModeActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"id": "CombinedModeActionButtonsCardContainer",
					"selectors": {"wrapEl": "#CombinedModeActionButtonsCardContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-card-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsCardLeftContainer",
				"parentName": "CombinedModeActionButtonsCardContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-card-left-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsCardRunProcessContainer",
				"parentName": "CombinedModeActionButtonsCardContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-card-left-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionButtonsCardRightContainer",
				"parentName": "CombinedModeActionButtonsCardContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["combined-action-buttons-card-right-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "BackButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"imageConfig": {"bindTo": "getBackButtonImageConfig"},
					"classes": {"wrapperClass": ["back-button-margin-right", "card-back-button"]},
					"click": {"bindTo": "onBackButtonClick"},
					"hint": {"bindTo": "Resources.Strings.BackButtonHint"},
					"visible": {
						"bindTo": "IsSectionVisible",
						"bindConfig": {"converter": "invertBooleanValue"}
					}
				}
			},
			{
				"operation": "insert",
				"name": "SaveRecordButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.SaveRecordButtonCaption"},
					"click": {"bindTo": "onCardAction"},
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"visible": {"bindTo": "showExistingRecordSaveButton"},
					"classes": {"textClass": ["actions-button-margin-right"]},
					"tag": "save",
					"markerValue": "SaveButton"
				}
			},
			{
				"operation": "insert",
				"name": "SaveNewRecordButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.SaveRecordButtonCaption"},
					"click": {"bindTo": "onCardAction"},
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"visible": {"bindTo": "showNewRecordSaveButton"},
					"classes": {"textClass": ["actions-button-margin-right"]},
					"tag": "save",
					"markerValue": "SaveButton"
				}
			},
			{
				"operation": "insert",
				"name": "DiscardChangesButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.DiscardChangesButtonCaption"},
					"click": {"bindTo": "onCardAction"},
					"visible": {"bindTo": "ShowDiscardButton"},
					"classes": {"textClass": ["actions-button-margin-right"]},
					"tag": "onDiscardChangesClick"
				}
			},
			{
				"operation": "insert",
				"name": "CloseButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"caption": {"bindTo": "Resources.Strings.CloseButtonCaption"},
					"click": {"bindTo": "onCardAction"},
					"visible": {"bindTo": "ShowCloseButton"},
					"classes": {"textClass": ["actions-button-margin-right"]},
					"tag": "onCloseClick"
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeAddRecordButton",
				"parentName": "CombinedModeActionButtonsSectionContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": {"bindTo": "AddRecordButtonCaption"},
					"click": {"bindTo": "addRecord"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"enabled": {
						"bindTo": "ShowSaveButton",
						"bindConfig": {"converter": "invertBooleanValue"}
					},
					"controlConfig": {
						"menu": {
							"items": {
								"bindTo": "EditPages",
								"bindConfig": {
									"converter": function(editPages) {
										if (editPages.getCount() > 1) {
											return editPages;
										} else {
											return null;
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeActionsButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ActionsButtonCaption"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"prepareMenu": {"bindTo": "prepareActionsButtonMenuItems"},
					"menu": {"items": {"bindTo": "CombinedModeActionsButtonMenuItems"}},
					"visible": {"bindTo": "CombinedModeActionsButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "ProcessButton",
				"parentName": "CombinedModeActionButtonsCardRunProcessContainer",
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
				"name": "CombinedModePrintButton",
				"parentName": "CombinedModeActionButtonsCardRightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.PrintButtonCaption"},
					"classes": {"wrapperClass": ["actions-button-margin-right"]},
					"controlConfig": {"menu": {"items": {"bindTo": "CardPrintMenuItems"}}},
					"visible": {"bindTo": "IsCardPrintButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeViewOptionsButton",
				"parentName": "CombinedModeActionButtonsCardRightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ViewOptionsButtonCaption"},
					"menu": {
						"items": {"bindTo": "CombinedModeViewOptionsButtonMenuItems"},
						"ulClass": "menu-item-image-size-16"
					},
					"visible": {"bindTo": "getCombinedModeViewOptionsButtonVisible"}
				}
			},
			// endregion
			{
				"operation": "insert",
				"name": "ContentContainer",
				"parentName": "SectionWrapContainer",
				"propertyName": "items",
				"values": {
					"id": "ContentContainer",
					"selectors": {"wrapEl": "#ContentContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["content-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SectionContainer",
				"parentName": "ContentContainer",
				"propertyName": "items",
				"values": {
					"id": "SectionContainer",
					"selectors": {"wrapEl": "#SectionContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["section", "left-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "LeftSectionContainer",
				"parentName": "SectionContainer",
				"propertyName": "items",
				"values": {
					"id": "LeftSectionContainer",
					"selectors": {"wrapEl": "#LeftSectionContainer"},
					"visible": {"bindTo": "isLeftSectionContainerVisible"},
					"wrapClass": ["left-section-container"],
					"resizable": !Terrasoft.getIsRtlMode(),
					"resizeActionsCode": Terrasoft.ResizeAction.RESIZE_RIGHT.code,
					"resizerConfig": {
						"minWidth": 327,
						"maxWidth": 950
					},
					"onsizechanged": {"bindTo": "onLeftSectionContainerSizeChanged"},
					"onresizedrag": {"bindTo": "changeGridUtilitiesContainerSize"},
					"onsizeinit": {"bindTo": "onLeftSectionContainerSizeInit"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "RightSectionContainer",
				"parentName": "SectionContainer",
				"propertyName": "items",
				"values": {
					"id": "RightSectionContainer",
					"selectors": {"wrapEl": "#RightSectionContainer"},
					"wrapClass": ["right-section-container"],
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CardContainer",
				"parentName": "ContentContainer",
				"propertyName": "items",
				"values": {
					"id": "CardContainer",
					"selectors": {"wrapEl": "#CardContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"visible": {"bindTo": "IsCardVisible"},
					"wrapClass": ["card", "right-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SectionHeaderContainer",
				"parentName": "DataViewsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"id": "SectionHeaderContainer",
					"selectors": {"wrapEl": "#SectionHeaderContainer"},
					"wrapClass": ["section-header-container-wrapClass"],
					"visible": {"bindTo": "UseSectionHeaderCaption"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SectionHeaderCaption",
				"parentName": "SectionHeaderContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.LABEL,
					"caption": {"bindTo": "getSectionHeaderCaption"}
				}
			},
			{
				"operation": "insert",
				"name": "GridUtilsContainerWrapper",
				"parentName": "DataViewsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["utils-container-wrapper-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "GridUtilsContainer",
				"parentName": "GridUtilsContainerWrapper",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["utils-container-wrapClass"],
					"observeMutations": true,
					"mutationConfig": {"attributes": true, "childList": true, "subtree": true},
					"mutate": {"bindTo": "changeGridUtilitiesContainerSize"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "FoldersAndDataViewContainer",
				"parentName": "RightSectionContainer",
				"propertyName": "items",
				"values": {
					"id": "FoldersAndDataViewContainer",
					"selectors": {"wrapEl": "#FoldersAndDataViewContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["section-inner-wrap", "one-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "FoldersContainer",
				"parentName": "LeftSectionContainer",
				"propertyName": "items",
				"values": {
					"id": "FoldersContainer",
					"selectors": {"wrapEl": "#FoldersContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"controlConfig": {"visible": {"bindTo": "IsFoldersVisible"}},
					"wrapClass": ["folders-container-wrapClass", "left-inner-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "ExtendedFiltersContainer",
				"parentName": "LeftSectionContainer",
				"propertyName": "items",
				"values": {
					"id": "ExtendedFiltersContainer",
					"selectors": {"wrapEl": "#ExtendedFiltersContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"controlConfig": {"visible": {"bindTo": "IsExtendedFiltersVisible"}},
					"wrapClass": ["extended-filters-container-wrapClass", "left-inner-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "DataViewsContainer",
				"parentName": "FoldersAndDataViewContainer",
				"propertyName": "items",
				"values": {
					"id": "DataViewsContainer",
					"selectors": {"wrapEl": "#DataViewsContainer"},
					"itemType": Terrasoft.ViewItemType.SECTION_VIEWS,
					"wrapClass": ["data-views-container-wrapClass", "data-view-border-right", "right-inner-el"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "LeftGridUtilsContainer",
				"parentName": "GridUtilsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["left-utils-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "RightGridUtilsContainer",
				"parentName": "GridUtilsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["right-summary-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "FiltersContainer",
				"parentName": "LeftGridUtilsContainer",
				"propertyName": "items",
				"values": {
					"generateId": false,
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["filters-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "QuickFilterModuleContainer",
				"parentName": "FiltersContainer",
				"propertyName": "items",
				"values": {
					"id": "QuickFilterModuleContainer",
					"selectors": {wrapEl: "#QuickFilterModuleContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["quick-filter-module-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "CloseButtonContainer",
				"parentName": "GridUtilsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["close-button-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "ToggleSectionButton",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"classes": {"wrapperClass": ["toggle-section-button"]},
					"markerValue": {"bindTo": "getToggleSectionButtonMarkerValue"},
					"click": {"bindTo": "onToggleSectionButtonClick"},
					"imageConfig": {"bindTo": "getToggleSectionButtonImageConfig"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"hint": {"bindTo": "getToggleSectionButtonHint"},
					"visible": {"bindTo": "getToggleSectionButtonIsVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "AnalyticsActionButtonsContainer",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"id": "AnalyticsActionButtonsContainer",
					"selectors": {"wrapEl": "#AnalyticsActionButtonsContainer"},
					"wrapClass": ["action-buttons-container-wrapClass"],
					"visible": {"bindTo": "IsAnalyticsActionButtonsContainerVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeActionButtonsContainer",
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"visible": {
						"bindTo": "IsCardVisible",
						"bindConfig": {
							"converter": function(value) {
								return !value;
							}
						}
					},
					"wrapClass": ["separate-action-buttons-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeActionButtonsLeftContainer",
				"parentName": "SeparateModeActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["separate-action-buttons-left-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeActionButtonsRightContainer",
				"parentName": "SeparateModeActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["separate-action-buttons-right-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "AddFolderButton",
				"parentName": "SeparateModeActionButtonsLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.AddFolderButtonCaption"},
					"click": {"bindTo": "onAddFolderClick"},
					"visible": {"bindTo": "IsFoldersVisible"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"menu": {"items": {"bindTo": "getFolderMenuItems"}}
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeAddRecordButton",
				"parentName": "SeparateModeActionButtonsLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": {"bindTo": "AddRecordButtonCaption"},
					"click": {"bindTo": "addRecord"},
					"visible": {"bindTo": "IsAddRecordButtonVisible"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"controlConfig": {
						"menu": {
							"items": {
								"bindTo": "EditPages",
								"bindConfig": {
									"converter": function(editPages) {
										if (editPages.getCount() > 1) {
											return editPages;
										} else {
											return null;
										}
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeActionsButton",
				"parentName": "SeparateModeActionButtonsLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": {"bindTo": "ActionsButtonStyle"},
					"caption": {"bindTo": "ActionsButtonCaption"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"prepareMenu": {"bindTo": "prepareActionsButtonMenuItems"},
					"menu": {"items": {"bindTo": "SeparateModeActionsButtonMenuItems"}},
					"visible": {"bindTo": "isSeparateModeActionsButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeReportsButton",
				"parentName": "SeparateModeActionButtonsRightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.PrintButtonCaption"},
					"classes": {"wrapperClass": ["actions-button-margin-right"]},
					"controlConfig": {
						"menu": {"items": {"bindTo": "SectionPrintMenuItems"}},
						"visible": {"bindTo": "IsSectionPrintButtonVisible"}
					}
				}
			},
			{
				"operation": "insert",
				"name": "SeparateModeViewOptionsButton",
				"parentName": "SeparateModeActionButtonsRightContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ViewOptionsButtonCaption"},
					"menu": {
						"items": {"bindTo": "SeparateModeViewOptionsButtonMenuItems"},
						"ulClass": "menu-item-image-size-16",
						"alignType": "tr-br?"
					}
				}
			},
			{
				"operation": "insert",
				"name": "CloseSectionButton",
				"parentName": "CloseButtonContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"classes": {"imageClass": ["close-button-background-no-repeat"]},
					"click": {"bindTo": "onCloseSectionButtonClick"},
					"hint": {"bindTo": "Resources.Strings.HideVerticalViewButtonHint"},
					"imageConfig": {"bindTo": "getCloseButtonImageConfig"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"visible": {"bindTo": "IsCardVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "SummaryContainer",
				"parentName": "RightGridUtilsContainer",
				"propertyName": "items",
				"values": {
					"id": "SectionSummaryContainer",
					"selectors": {"wrapEl": "#SectionSummaryContainer"},
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["summary-container-wrapClass"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "GridDataView",
				"parentName": "DataViewsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.SECTION_VIEW,
					"items": [],
					"classes": {
						wrapClassName: ["grid-dataview-container-wrapper-wrapClass"]
					},
				}
			},
			{
				"operation": "insert",
				"name": "DataGridContainer",
				"parentName": "GridDataView",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTAINER,
					"wrapClass": ["grid-dataview-container-wrapClass", "grid-dataview-container-mask"],
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "DataGrid",
				"parentName": "DataGridContainer",
				"propertyName": "items",
				"values": {
					"safeBind": true,
					"itemType": Terrasoft.ViewItemType.GRID,
					"type": {"bindTo": "GridType"},
					"listedZebra": true,
					"activeRow": {"bindTo": "ActiveRow"},
					"collection": {"bindTo": "GridData"},
					"isEmpty": {"bindTo": "IsGridEmpty"},
					"isLoading": {
						"bindTo": "IsGridLoading",
						"bindConfig": {"converter": "isGridLoadingConverter"}
					},
					"multiSelect": {"bindTo": "MultiSelect"},
					"multiSelectChanged": {"bindTo": "onMultiSelectChanged"},
					"primaryColumnName": "Id",
					"selectedRows": {"bindTo": "SelectedRows"},
					"sortColumn": {"bindTo": "sortColumn"},
					"sortColumnDirection": {"bindTo": "GridSortDirection"},
					"sortColumnIndex": {"bindTo": "SortColumnIndex"},
					"selectRow": {"bindTo": "rowSelected"},
					"canExecute": {"bindTo": "canBeDestroyed"},
					"linkClick": {"bindTo": "linkClicked"},
					"linkMouseOver": {"bindTo": "linkMouseOver"},
					"needLoadData": {"bindTo": "needLoadData"},
					"activeRowAction": {"bindTo": "onActiveRowAction"},
					"activeRowActions": [],
					"getEmptyMessageConfig": {"bindTo": "prepareEmptyGridMessageConfig"},
					"enterkeypressed": {"bindTo": "editCurrentRecord"},
					"openRecord": {"bindTo": "editCurrentRecord"},
					"canChangeMultiSelectWithGridClick": {
						"bindTo": "IsCardVisible",
						"bindConfig": {"converter": "invertBooleanValue"}
					}
				}
			},
			{
				"operation": "insert",
				"name": "DataGridActiveRowOpenAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.BLUE,
					"caption": {"bindTo": "Resources.Strings.OpenRecordGridRowButtonCaption"},
					"tag": "edit"
				}
			},
			{
				"operation": "insert",
				"name": "DataGridActiveRowCopyAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.GREY,
					"caption": {"bindTo": "Resources.Strings.CopyRecordGridRowButtonCaption"},
					"tag": "copy"
				}
			},
			{
				"operation": "insert",
				"name": "DataGridActiveRowDeleteAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.GREY,
					"caption": {"bindTo": "Resources.Strings.DeleteRecordGridRowButtonCaption"},
					"tag": "delete",
					"visible": {"bindTo": "canDeleteRecords"}
				}
			},
			{
				"operation": "insert",
				"name": "DataGridActiveRowPrintAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.GREY,
					"caption": {"bindTo": "Resources.Strings.PrintRecordGridRowButtonCaption"},
					"tag": "print",
					"visible": {"bindTo": "getPrintButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "DataGridRunProcessAction",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"caption": resources.localizableStrings.RunProsessButtonCaption,
					"imageConfig": resources.localizableImages.ProcessButtonImage,
					"iconAlign": Terrasoft.controls.ButtonEnums.iconAlign.LEFT,
					"classes": {
						"imageClass": ["t-btn-image t-btn-image-left proc-btn-img proc-btn-img-top"],
						"textClass": ["t-btn-text t-btn-left actions-button-margin-right"]
					},
					"menu": {"items": {"bindTo": "RunProcessButtonMenuItems"}},
					"visible": {"bindTo": "RunProcessButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "ProcessEntryPointGridRowButton",
				"parentName": "DataGrid",
				"propertyName": "activeRowActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.GREY,
					"caption": {"bindTo": "Resources.Strings.ProcessEntryPointGridRowButtonCaption"},
					"tag": "processEntryPoint",
					"visible": {"bindTo": "getProcessEntryPointGridRowButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "ProcessRunButton",
				"parentName": "SeparateModeActionButtonsContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.RunProsessButtonCaption"},
					"imageConfig": {"bindTo": "Resources.Images.ProcessButtonImage"},
					"iconAlign": Terrasoft.controls.ButtonEnums.iconAlign.LEFT,
					"classes": {
						"imageClass": ["t-btn-image left-12px t-btn-image-left proc-btn-img-top"],
						"textClass": ["t-btn-text t-btn-left actions-button-margin-right"]
					},
					"menu": {"items": {"bindTo": "getFilteredBySectionProcesses"}},
					"visible": {"bindTo": "getIsRunProcessButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"name": "addActions",
				"values": {
					"className": "Terrasoft.Button",
					"style": Terrasoft.controls.ButtonEnums.style.DEFAULT,
					"classes": {
						"imageClass": ["addbutton-imageClass"],
						"wrapperClass": ["addbutton-buttonClass"],
						"tooltipClassName": ["quick-addbuton-tooltip"]
					},
					"hint": {"bindTo": "Resources.Strings.QuickAddButtonHint"},
					"imageConfig": {"bindTo": "Resources.Images.QuickAddButtonImage"},
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"menu": {"items": {"bindTo": "QuickAddMenuItems"}},
					"visible": {"bindTo": "getQuickAddButtonVisible"}
				}
			},
			{
				"operation": "insert",
				"name": "CombinedModeTagsButton",
				"parentName": "CombinedModeActionButtonsCardLeftContainer",
				"propertyName": "items",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "TagButtonCaption"},
					"click": {"bindTo": "onTagButtonClick"},
					"imageConfig": {"bindTo": "Resources.Images.TagButtonIcon"},
					"hint": {"bindTo": "Resources.Strings.CombinedModeTagsButtonHint"},
					"classes": {
						"textClass": ["actions-button-margin-right"],
						"wrapperClass": ["actions-button-margin-right"]
					},
					"visible": {"bindTo": "TagButtonVisible"}
				}
			}
		]
	};
});
