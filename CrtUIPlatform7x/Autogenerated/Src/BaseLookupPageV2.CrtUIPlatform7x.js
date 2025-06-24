define("BaseLookupPageV2", ["ConfigurationEnums"], function() {
	return {
		messages: {},
		attributes: {
			/**
			 * @deprecated Will be removed in the future releases.
			 */
			GridData: {dataValueType: Terrasoft.DataValueType.COLLECTION},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			ActiveRow: {dataValueType: Terrasoft.DataValueType.GUID},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			IsGridEmpty: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			ShowGridMask: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			IsGridLoading: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			MultiSelect: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			SelectedRows: {dataValueType: Terrasoft.DataValueType.COLLECTION},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			RowCount: {dataValueType: Terrasoft.DataValueType.INTEGER},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			IsPageable: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			IsClearGridData: {dataValueType: Terrasoft.DataValueType.BOOLEAN},

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			SortColumns: {dataValueType: Terrasoft.DataValueType.COLLECTION},

			searchColumn: {dataValueType: Terrasoft.DataValueType.LOOKUP},
			//LookupCaption

			LookupInfo: {dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT}
		},
		methods: {
			/**
			 * @deprecated Will be removed in the future releases.
			 */
			init: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			initModelValues: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			subscribeSandboxEvents: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			subscribeCardModuleResponse: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			onCardModuleResponse: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getResultItem: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getChainCardModuleSandboxId: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			onRender: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getGridData: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			select: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			initLookupCaption: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getSchemaColumns: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			needLoadData: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			isValidColumnDataValueType: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			selectResult: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			initGridData: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			cancel: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			close: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			addRecord: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			editRecord: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			copyRecord: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			openCard: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			onSearchButtonClick: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			openGridSettings: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getHistoryStateInfo: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getProfileKey: Terrasoft.abstractFn,

			/**
			 * @deprecated Will be removed in the future releases.
			 */
			getFilters: Terrasoft.abstractFn
		},
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});
