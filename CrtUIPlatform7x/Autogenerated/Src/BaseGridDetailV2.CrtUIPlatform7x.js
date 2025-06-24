/**
 * Parent: Terrasoft.BaseDetailV2
 */
define("BaseGridDetailV2", ["BaseGridDetailV2Resources", "ConfigurationEnums", "ChangeLogUtilities", "RightUtilities",
	"NetworkUtilities", "ProcessModuleUtilities", "GridUtilitiesV2", "WizardUtilities", "QuickFilterModuleV2",
	"ProcessEntryPointUtilities", "EmailLinksMixin", "DuplicatesSearchUtilitiesV2", "FileImportMixin"
], function(resources, enums, changeLogUtilities, RightUtilities) {
	return {
		messages: {
			/**
			 * @message OpenCard
			 * Returns information about card.
			 */
			"getCardInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},

			/**
			 * @message CardSaved
			 * Gets information that parent page is saved.
			 */
			"CardSaved": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},

			/**
			 * @message RerenderQuickFilterModule
			 * Publishes message for redraw the filter.
			 */
			"RerenderQuickFilterModule": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message GetExtendedFilterConfig
			 * Publishes config for custom filter.
			 */
			"GetExtendedFilterConfig": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},

			/**
			 * @message GetModuleSchema
			 * Returns information about entity which works with filter.
			 */
			"GetModuleSchema": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},

			/**
			 * @message UpdateFilter
			 * Message handler filter events in detail.
			 */
			"UpdateFilter": {
				mode: Terrasoft.MessageMode.BROADCAST,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			},

			/**
			 * @message GetShortFilterFieldsVisible
			 * ########## ####### ########### ##### ##### ###### ### #######.
			 */
			"GetShortFilterFieldsVisible": {
				mode: Terrasoft.MessageMode.PTP,
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
			 * @message GetColumnsValues
			 * Requests the values of columns from target object.
			 */
			"GetColumnsValues": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message IsCardChanged
			 * Requests is card changed.
			 */
			"IsCardChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message ValidateCard
			 * Requests is card validate.
			 */
			"ValidateCard": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message GetRecordInfo
			 * Returns configuration for record rights setup module.
			 */
			"GetRecordInfo": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.SUBSCRIBE
			}
		},
		mixins: {
			EmailLinksMixin: "Terrasoft.EmailLinksMixin",
			GridUtilities: "Terrasoft.GridUtilities",
			WizardUtilities: "Terrasoft.WizardUtilities",
			ProcessEntryPointUtilities: "Terrasoft.ProcessEntryPointUtilities",
			DuplicatesSearchUtilitiesV2: "Terrasoft.DuplicatesSearchUtilitiesV2",
			FileImportMixin: "Terrasoft.FileImportMixin",
			NetworkUtilities: "Terrasoft.NetworkUtilities"
		},
		attributes: {

			/**
			 * Active record primary column value.
			 */
			"ActiveRow": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 * Last active record primary column value.
			 */
			"LastActiveRow": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 * Is grid empty tag.
			 */
			"IsGridEmpty": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * Is grid loading tag.
			 */
			"IsGridLoading": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ######## ############# #####.
			 */
			"MultiSelect": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ###### ######### #####.
			 */
			"SelectedRows": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ########## #####.
			 */
			"RowCount": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},

			/**
			 * ############ ########.
			 */
			"IsPageable": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### "###### #########".
			 */
			"IsGridDataLoaded": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ########### ##########.
			 */
			"GridSortDirection": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},

			/**
			 * ####### ##########.
			 */
			"SortColumnIndex": {
				dataValueType: Terrasoft.DataValueType.INTEGER
			},

			/**
			 * ###### ########## # ############# ######### ####### ####### ######## #######.
			 */
			"GridSettingsChanged": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ######## ######### ####### ######## ######, ##### ############# #######.
			 */
			"ActiveRowBeforeReload": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 * ##### ######## ######## ######.
			 */
			"CardState": {
				dataValueType: Terrasoft.DataValueType.TEXT
			},

			/**
			 * ########## ############# ########.
			 */
			"EditPageUId": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 * ######### ########### ###### ############## ######.
			 */
			"ToolsButtonMenu": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * Collection of the menu items.
			 * @type {Terrasoft.ObjectCollection}
			 */
			"RunProcessButtonMenuItems": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ######### ######## ######.
			 */
			"DetailFilters": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ####, ####### ###### ######.
			 */
			"IsClearGridData": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * #######, ### ###### ###### #########.
			 */
			"IsDetailWizardAvailable": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### ########### ####### ## #########.
			 */
			"IsDetailFilterVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### ####### #### ## ###### ####### # ######.
			 */
			"IsFilterAdded": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * Sign of the visibility of the menu item to go to the change log.
			 * @type {Boolean}
			 */
			"IsRecordChangeLogMenuItemVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
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
			 * ####### ########### ##### ##### ###### ### #######.
			 */
			"IsShortFilterFieldsVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### ####### ###### ############.
			 */
			"IsRelationshipButtonPressed": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### ############# ############.
			 */
			"UseRelationship": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ########### #### ###########.
			 */
			"RelationType": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 * ####### #### ###########.
			 */
			"RelationTypePath": {
				dataValueType: Terrasoft.DataValueType.TEXT
			},

			/**
			 * ####### ###########.
			 */
			"RelationshipPath": {
				dataValueType: Terrasoft.DataValueType.TEXT
			},

			/**
			 * ####### ########### ###### ############.
			 */
			"RelationshipButtonVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * Relationship button hint text.
			 */
			"RelationshipButtonHint": {
				dataValueType: Terrasoft.DataValueType.Text
			},

			/**
			 * Sign, use generated profile if needed
			 */
			"UseGeneratedProfile": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},
			/*
			* Manages visibility of RecordRightsSetupMenuItem button.
			*/
			"RecordRightsSetupMenuItemVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: false
			}
		},
		properties: {

			/**
			 * QueryOperationType for GridUtilities.
			 */
			queryOperationType: Terrasoft.QueryOperationType.FILTEREDSELECT,

			/**
			 * Use Detail wizard for detail
			 */
			useDetailWizard: true,

			/**
			 * Array of user cached delegation rights to record items.
			 * {Array}
			 */
			userRecordsRight: []
		},
		methods: {

			/**
			 * @inheritdoc Terrasoft.BaseDetailV2#init
			 * @override
			 */
			init: function(callback, scope) {
				this.callParent([function() {
					this.mixins.WizardUtilities.canUseWizard(function(result) {
						this.set("IsDetailWizardAvailable", result);
						callback.call(scope);
					}, this);
				}, this]);
				this.registerMessages();
				this.initDetailFilterCollection();
				this.initFilterVisibility();
				this.initRecordChangeLogMenuItemVisibility();
				this.initObjectChangeLogSettingsMenuItemVisibility();
				this.isFilterAdded();
				const sandboxId = this.getQuickFilterModuleId();
				this.sandbox.subscribe("InitFilterFromStorage", function() {
					this.sandbox.publish("LoadedFiltersFromStorage", null, [sandboxId]);
				}, this, [sandboxId]);
			},

			/**
			 * Initializes collection of the data view.
			 * @protected
			 */
			initData: function(callback, scope) {
				this.callParent([function() {
					Terrasoft.chain(
						this.initGridRowViewModel,
						function(next) {
							this.mixins.FileImportMixin.init.call(this);
							this.initGridData();
							this.initSortActionItems();
							this.reloadGridColumnsConfig();
							this.initRelationshipButton(next);
						},
						function() {
							this.loadGridData();
							this.initToolsButtonMenu();
							this.mixins.GridUtilities.init.call(this);
							this.initDetailRunProcessButtonMenu();
							this.Ext.callback(callback, scope);
						},
						this);
				}, this]);
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilitiesV2#onActiveRowChange
			 * @override
			 */
			onActiveRowChange: function() {
				if (Terrasoft.Features.getIsEnabled("CheckCanChangeRightsInDetail") && this.$ActiveRow) {
					const activeRow = this.$ActiveRow;
					const recordId = Terrasoft.isGUID(activeRow) ? activeRow : activeRow.value;
					if (Terrasoft.isGUID(recordId)) {
						this.setUpUserCanChangeRecordRight(recordId,
							this.setupRecordRightsSetupMenuItemVisibleAttribute, this);
					}
				}
				this.mixins.GridUtilities.onActiveRowChange.call(this);
			},

			/**
			 * Set up user delegation rights.
			 * @param {String} recordId
			 * @param {Function} callback
			 * @param {Object} scope
			 */
			setUpUserCanChangeRecordRight: function(recordId, callback, scope) {
				const singleRecordUserRight = this.getRecordRightFromCache(recordId);
				if (singleRecordUserRight) {
					Ext.callback(callback, scope, [singleRecordUserRight]);
				} else {
					this.setUpUserRecordRightsFromService(recordId, callback, scope);
				}
			},

			/**
			 * Provides user delegation rights from cache.
			 * @param {String} recordId
			 */
			getRecordRightFromCache: function(recordId) {
				return this.userRecordsRight[recordId];
			},

			/**
			 * Set up user delegation rights from service.
			 * @param {String} recordId
			 * @param {Function} callback
			 * @param {Object} scope
			 */
			setUpUserRecordRightsFromService: function(recordId, callback, scope) {
				const data = {
					userId: Terrasoft.SysValue.CURRENT_USER.value,
					schemaName: this.entitySchemaName,
					recordId: recordId
				};
				RightUtilities.getUserRecordRights(data, function(response) {
					if (response) {
						this.userRecordsRight[recordId] = {
							canChangeReadRight: response[0],
							canChangeEditRight: response[1],
							canChangeDeleteRight: response[2]
						};
						Ext.callback(callback, scope, [this.userRecordsRight[recordId]]);
					}
				}, this);
			},

			/**
			 * Set up attribute, which manages visibility of RecordRightsSetupMenuItem button.
			 * @param {Object} singleRecordUserRights Object, which contains user delegation rights.
			 */
			setupRecordRightsSetupMenuItemVisibleAttribute: function(singleRecordUserRights) {
				this.$RecordRightsSetupMenuItemVisible = singleRecordUserRights.canChangeReadRight ||
					singleRecordUserRights.canChangeEditRight || singleRecordUserRights.canChangeDeleteRight;
			},

			/**
			 * Loads the list view.
			 * @protected
			 * @virtual
			 */
			loadGridData: function() {
				if (this.get("IsFromPage") && !this.get("MasterRecordId")) {
					const emptyCollection = Ext.create("Terrasoft.Collection");
					this.initIsGridEmpty(emptyCollection);
					const messagePattern = this.get("Resources.Strings.MasterRecordIdErrorMessage");
					const message = Terrasoft.getFormattedString(messagePattern, this.name, location.hash);
					Terrasoft.Logger.log(message);
					return;
				}
				if (!this.get("IsDetailCollapsed")) {
					this.mixins.GridUtilities.loadGridData.call(this);
				}
			},

			/**
			 * Initializes the default values for working with the list.
			 * @protected
			 * @virtual
			 */
			initGridData: function() {
				this.set("ActiveRow", "");
				if (Ext.isEmpty(this.get("MultiSelect"))) {
					this.set("MultiSelect", false);
				}
				if (Ext.isEmpty(this.get("IsPageable"))) {
					this.set("IsPageable", true);
				}
				this.set("IsClearGridData", false);
				if (!Ext.isNumber(this.get("RowCount"))) {
					this.set("RowCount", 5);
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#onRender
			 * @override
			 */
			onRender: function() {
				if (this.get("GridSettingsChanged")) {
					this.reloadGridData();
				} else {
					this.loadTempCollection();
				}
				this.subscribeGridEvents();
				this.restoreActiveRow();
			},

			/**
			 * Restores saved active row.
			 * @protected
			 */
			restoreActiveRow: function() {
				const lastActiveRow = this.get("LastActiveRow");
				if (lastActiveRow) {
					this.set("ActiveRow", {
						value: lastActiveRow,
						scrollPageToActiveRow: true
					});
					this.set("LastActiveRow", null);
				}
			},

			/**
			 * Sets last active row primary column value before row actions.
			 * @protected
			 * @param {String} primaryColumnValue Row primary column value.
			 */
			setLastActiveRow: function(primaryColumnValue) {
				this.set("LastActiveRow", primaryColumnValue);
			},

			/**
			 * Load temp collection to grid data.
			 * @protected
			 */
			loadTempCollection: function() {
				const gridData = this.getGridData();
				this.reloadGridColumnsConfig(true);
				if (gridData && !gridData.isEmpty()) {
					const tempCollection = this.Ext.create("Terrasoft.BaseViewModelCollection");
					const items = gridData.getItems();
					Terrasoft.each(items, function(item) {
						const primaryColumnName = item.primaryColumnName;
						tempCollection.add(item.get(primaryColumnName), item);
					});
					gridData.clear();
					gridData.loadAll(tempCollection);
				}
			},

			/**
			 * ########## ############## ############ ######.
			 * @protected
			 * @override
			 * @param {String} moduleName ### ######.
			 * @return {String} ############# ######.
			 */
			getModuleId: function(moduleName) {
				if (moduleName === "QuickFilterModuleV2") {
					return this.getQuickFilterModuleId();
				}
				return this.sandbox.id + "_" + moduleName;
			},

			/**
			 * Gets collection of the grid.
			 * @return {Object}
			 */
			getGridData: function() {
				return this.get("Collection");
			},

			/**
			 * private
			 */
			_createProfileKey: function() {
				return Ext.String.format("{0}{1}", this.get("CardPageName"), this.get("SchemaName"));
			},

			/**
			 * Returns profile key.
			 * @return {String} Profile key.
			 */
			getProfileKey: function() {
				return this.get("ProfileKey") || this._createProfileKey();
			},

			/**
			 * Returns filters collection.
			 * @override
			 * @return {Terrasoft.FilterGroup} Detail filter group.
			 */
			getFilters: function() {
				const detailFilters = this.get("DetailFilters");
				const masterColumnFilters = this.get("Filter");
				const serializationMasterColumnInfo = masterColumnFilters.getDefSerializationInfo();
				serializationMasterColumnInfo.serializeFilterManagerInfo = true;
				const serializationDetailInfo = detailFilters.getDefSerializationInfo();
				serializationDetailInfo.serializeFilterManagerInfo = true;
				const deserializedMasterColumnFilters = Terrasoft.deserialize(masterColumnFilters
					.serialize(serializationMasterColumnInfo));
				const deserializedDetailFilters = Terrasoft.deserialize(detailFilters.serialize(serializationDetailInfo));
				if (this.get("IsRelationshipButtonPressed")) {
					const mainFilterGroup = this.getRelationshipFilters();
					mainFilterGroup.logicalOperation = Terrasoft.LogicalOperatorType.OR;
					mainFilterGroup.add("masterRecordFilter", deserializedMasterColumnFilters);
					deserializedDetailFilters.add("mainFilterGroup", mainFilterGroup);
				} else {
					deserializedDetailFilters.add("masterRecordFilter", deserializedMasterColumnFilters);
				}
				return deserializedDetailFilters;
			},

			/**
			 * Returns active row.
			 * @protected
			 * @return {Terrasoft.BaseViewModel} Active row.
			 */
			getActiveRow: function() {
				const isEditable = this.get("IsEditable");
				let primaryColumnValue;
				if (isEditable) {
					primaryColumnValue = this.get("ActiveRow");
				} else {
					const selectedItems = this.getSelectedItems();
					if (this.Ext.isEmpty(selectedItems)) {
						return null;
					}
					primaryColumnValue = selectedItems[0];
				}
				if (primaryColumnValue) {
					const gridData = this.getGridData();
					return gridData.get(primaryColumnValue);
				}
			},

			/**
			 * ############# ####### ####### ################ ######## ######.
			 */
			isFilterAdded: function() {
				const filters = this.get("DetailFilters");
				let isCustomFiltersEmpty = true;
				if (filters.find("CustomFilters")) {
					const customFilter = filters.get("CustomFilters");
					const isFilterGroup = (customFilter instanceof Terrasoft.FilterGroup);
					isCustomFiltersEmpty = !(isFilterGroup && !customFilter.isEmpty());
				}
				this.set("IsFilterAdded", isCustomFiltersEmpty);
			},

			/**
			 * Publishes message for change card state.
			 * @return {Boolean} True if card is changed.
			 */
			getIsCardChanged: function() {
				return this.sandbox.publish("IsCardChanged", null, [this.sandbox.id]);
			},

			/**
			 * Publishes message for validate card state. Showing invalidate message if card not valid.
			 * @return {Boolean} True if card is valid.
			 */
			getIsCardValid: function() {
				return this.sandbox.publish("ValidateCard", null, [this.sandbox.id]);
			},

			/**
			 * Returns first edit page UId.
			 * @private
			 * @return {String|null} UId of the first edit page.
			 */
			getFirstEditPageUId: function() {
				const editPages = this.getEditPages();
				if (editPages && editPages.getCount()) {
					const editPage = editPages.first();
					return editPage.get("Tag");
				}
				return null;
			},

			/**
			 * Returns true if card record is new.
			 * @private
			 * @return {Boolean} True if card record is new or copy state.
			 */
			getIsCardNewRecordState: function() {
				const cardState = this.sandbox.publish("GetCardState", null, [this.sandbox.id]);
				const state = cardState.state;
				const isAdd = enums.CardStateV2.ADD;
				const isCopy = enums.CardStateV2.COPY;
				return state === isAdd || state === isCopy;
			},

			/**
			 * Adds detail record. If page was not saved - save page where detail is located.
			 * @protected
			 * @param {String} editPageUId Type column UId.
			 */
			addRecord: function(editPageUId) {
				editPageUId = editPageUId || this.getFirstEditPageUId();
				if (!this.getIsCardValid()) {
					return;
				}
				const isNewCard = this.getIsCardNewRecordState();
				const isCardChanged = this.getIsCardChanged();
				this.set("CardState", enums.CardStateV2.ADD);
				this.set("EditPageUId", editPageUId);
				this.set("PrimaryValueUId", null);
				if (isNewCard || isCardChanged) {
					const args = {
						isSilent: true,
						messageTags: [this.sandbox.id]
					};
					this.sandbox.publish("SaveRecord", args, [this.sandbox.id]);
				} else {
					this.openCardByMode();
				}
			},

			/**
			 * Return copy page uid.
			 * @private
			 * @return {String} Copy page uid.
			 */
			_getCopyPageUid: function() {
				const activeRow = this.getActiveRow();
				const typeColumnValue = this.getTypeColumnValue(activeRow);
				return typeColumnValue === Terrasoft.GUID_EMPTY ? this.getFirstEditPageUId() : typeColumnValue;
			},

			/**
			 * Opens add detail page.
			 * @param {String} editPageUId Type column UId.
			 */
			copyRecord: function(editPageUId) {
				if (!this.isAnySelected()) {
					return;
				}
				const copyPageUid = this._getCopyPageUid();
				editPageUId = editPageUId || copyPageUid;
				if (!editPageUId) {
					return;
				}
				if (!this.getIsCardValid()) {
					return;
				}
				const selectedItems = this.getSelectedItems();
				const copiedRecordId = selectedItems[0];
				const isNewCard = this.getIsCardNewRecordState();
				const isCardChanged = this.getIsCardChanged();
				this.setLastActiveRow(copiedRecordId);
				if (isNewCard || isCardChanged) {
					this.set("CardState", enums.CardStateV2.COPY);
					this.set("EditPageUId", editPageUId);
					this.set("PrimaryValueUId", copiedRecordId);
					const args = {
						isSilent: true,
						messageTags: [this.sandbox.id]
					};
					this.sandbox.publish("SaveRecord", args, [this.sandbox.id]);
				} else {
					this.openCard(enums.CardStateV2.COPY, editPageUId, copiedRecordId);
				}
			},

			/**
			 * Opens edit page for selected record.
			 * @protected
			 */
			editCurrentRecord: function() {
				if (this.getEditPages().isEmpty()) {
					return;
				}
				this.closeMiniPage();
				const currentRecord = this.getActiveRow();
				this.editRecord(currentRecord);
			},

			/**
			 * Handler on click edit button.
			 * @param {Object} record (optional) Model record, which will be opened for editing,
			 * if the grid has not active row.
			 */
			editRecord: function(record) {
				const activeRow = record || this.getActiveRow();
				if (!activeRow) {
					return;
				}
				if (!this.getIsCardValid()) {
					return;
				}
				const isCardChanged = this.getIsCardChanged();
				const primaryColumnValue = activeRow.get(activeRow.primaryColumnName);
				const typeColumnValue = this.getTypeColumnValue(activeRow);
				this.setLastActiveRow(primaryColumnValue);
				if (isCardChanged) {
					this.set("CardState", enums.CardStateV2.EDIT);
					this.set("EditPageUId", typeColumnValue);
					this.set("PrimaryValueUId", primaryColumnValue);
					const args = {
						isSilent: true,
						messageTags: [this.sandbox.id]
					};
					this.sandbox.publish("SaveRecord", args, [this.sandbox.id]);
				} else {
					this.openCard(enums.CardStateV2.EDIT, typeColumnValue, primaryColumnValue);
				}
			},

			/**
			 * Init relationship button hint text according to contained localizable resources of parent page.
			 */
			initRelationshipButtonHint: function() {
				const columnName = this.Ext.String.format("Resources.Strings.RelationshipButtonHint_{0}",
					this.get("SchemaName"));
				const parentViewModelValues = this.sandbox.publish("GetColumnsValues", [columnName],
					[this.sandbox.id]);
				if (parentViewModelValues && parentViewModelValues[columnName]) {
					this.set("RelationshipButtonHint", parentViewModelValues[columnName]);
				}
			},

			/**
			 * ### ####### ############ ##### ############,
			 * ######### #### ## ###### ###### ######## ### ######### ########,
			 * #### ####, ## ########## ###### ############.
			 * @param {Function} callback ####### ######### ######.
			 */
			initRelationshipButton: function(callback) {
				if (this.get("UseRelationship") && this.get("MasterRecordId") && this.get("DetailColumnName")) {
					this.initRelationshipButtonHint();
					const esq = this.getGridDataESQ();
					esq.addAggregationSchemaColumn(this.get("DetailColumnName"),
						Terrasoft.AggregationType.COUNT, "Count");
					esq.filters.addItem(this.getRelationshipFilters());
					esq.getEntityCollection(function(response) {
						let relationshipButtonVisible = false;
						if (response.success) {
							const collection = response.collection;
							if (collection && collection.getCount() > 0) {
								relationshipButtonVisible = collection.getByIndex(0).get("Count") > 0;
							}
						}
						if (relationshipButtonVisible) {
							this.initRelationshipButtonPressed();
						} else {
							this.set("IsRelationshipButtonPressed", false);
						}
						this.set("RelationshipButtonVisible", relationshipButtonVisible);
						if (this.Ext.isFunction(callback)) {
							callback.call(this);
						}
					}, this);
				} else if (this.Ext.isFunction(callback)) {
					callback.call(this);
				}
			},

			/**
			 * ############# ####### ####### ###### ############ ## #########.
			 */
			initRelationshipButtonPressed: function() {
				const profile = this.getProfile();
				const isRelationshipButtonPressed = Ext.isEmpty(profile.isRelationshipButtonPressed)
					? false
					: profile.isRelationshipButtonPressed;
				this.set("IsRelationshipButtonPressed", isRelationshipButtonPressed);
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
			 * Initializes the visibility of the menu item to the change log.
			 * @protected
			 */
			initRecordChangeLogMenuItemVisibility: function() {
				changeLogUtilities.canShowEntitySchemaChangeLog(this.entitySchema, function(result) {
					this.set("IsRecordChangeLogMenuItemVisible", result);
				}, this);
			},

			/**
			 * ############# ########### ####### ###### # ###### ####### ####### ## #########.
			 */
			initFilterVisibility: function() {
				this.set("IsDetailFilterVisible", false);
				this.set("IsFilterAdded", true);
			},

			/**
			 * ############# ######### ### ########### #######.
			 */
			setQuickFilterVisible: function() {
				this.set("IsShortFilterFieldsVisible", true);
				this.set("IsDetailFilterVisible", true);
			},

			/**
			 * ######## ####### ###### ######.
			 */
			hideQuickFilter: function() {
				this.set("IsDetailFilterVisible", false);
			},

			/**
			 * Determines, if add record button is enabled.
			 * @private
			 * @returns {Boolean} - Flag of add record button enabled.
			 */
			_isAddRecordButtonEnabled: function() {
				const isDetailEnabled = this.get("IsEnabled");
				if (this.isEmpty(isDetailEnabled)) {
					return true;
				}
				return isDetailEnabled;
			},

			/**
			 * ########## ########### ###### ########## ######.
			 * @return {Boolean}
			 */
			getAddRecordButtonEnabled: function() {
				return this._isAddRecordButtonEnabled();
			},

			/**
			 * ########## ########### ###### # #### ########## ######.
			 * @return {Boolean}
			 */
			getAddTypedRecordButtonEnabled: function() {
				return this._isAddRecordButtonEnabled();
			},

			/**
			 * ########## ########### ###### ############## ######.
			 * @return {Boolean}
			 */
			getEditRecordButtonEnabled: function() {
				return this.isSingleSelected();
			},

			/**
			 * ########## ########### ###### #### ########### ######.
			 * @return {Boolean}
			 */
			getCopyRecordMenuEnabled: function() {
				const canEditMasterRecord = this.get("CanEditMasterRecord");
				if (this.Ext.isBoolean(canEditMasterRecord) && !canEditMasterRecord) {
					return false;
				}
				return this.isSingleSelected();
			},

			/**
			 * Returns the sign of the availability of the menu item go to the change log.
			 * @protected
			 */
			getRecordChangeLogMenuItemEnabled: function() {
				return this.isSingleSelected();
			},

			/**
			 * Checks if only one registry entry is selected.
			 * @protected
			 * @return {Boolean}
			 */
			isSingleSelected: function() {
				const selectedItems = this.getSelectedItems();
				return selectedItems && (selectedItems.length === 1);
			},

			/**
			 * #########, ####### ## #### #### ###### # #######.
			 * @return {Boolean}
			 */
			isAnySelected: function() {
				const selectedItems = this.getSelectedItems();
				return selectedItems && (selectedItems.length > 0);
			},

			/**
			 * ########## ######### ###### ########## ######.
			 * @protected
			 * @return {Boolean} ######### ###### ########## ######.
			 */
			getAddRecordButtonVisible: function() {
				const isDetailEnabled = this.get("IsEnabled");
				if (isDetailEnabled === false) {
					return false;
				}
				const canEditMasterRecord = this.get("CanEditMasterRecord");
				if (this.Ext.isBoolean(canEditMasterRecord) && !canEditMasterRecord) {
					return false;
				}
				const editPages = this.getEditPages();
				const toolsVisible = this.getToolsVisible();
				const editPagesCount = editPages.getCount();
				return toolsVisible
					? ((editPagesCount === 1) || (this.getIsEditable() && (editPagesCount === 0)))
					: toolsVisible;
			},

			/**
			 * ########## ######### ###### # #### ########## ######.
			 * @protected
			 * @return {Boolean} ######### ###### # #### ########## ######.
			 */
			getAddTypedRecordButtonVisible: function() {
				const isDetailEnabled = this.get("IsEnabled");
				if (isDetailEnabled === false) {
					return false;
				}
				const canEditMasterRecord = this.get("CanEditMasterRecord");
				if (this.Ext.isBoolean(canEditMasterRecord) && !canEditMasterRecord) {
					return false;
				}
				const editPages = this.getEditPages();
				return (this.getToolsVisible() && (editPages.getCount() > 1));
			},

			/**
			 * Subscribes on detail's messages.
			 * @protected
			 * @override
			 */
			subscribeSandboxEvents: function() {
				this.callParent(arguments);
				const addPages = this.getEditPages(Terrasoft.ConfigurationEnums.CardOperation.ADD);
				addPages.each(function(editPage) {
					this._subscribeSandboxEventsForPage(editPage);
				}, this);
				const editPages = this.getEditPages(Terrasoft.ConfigurationEnums.CardOperation.EDIT);
				editPages.each(function(editPage) {
					this._subscribeSandboxEventsForPage(editPage);
				}, this);
				this.sandbox.subscribe("CardSaved", this.onCardSaved, this, [this.sandbox.id]);
				this.subscribeGetModuleSchema();
				this.subscribeFiltersChanged();
				this.subscribeGetShortFilterFieldsVisible();
				this.sandbox.subscribe("GetRecordInfo", this.getRecordInfo, this,
					[this.getRecordRightsSetupModuleId()]);
				this.sandbox.subscribe("GetExtendedFilterConfig", this.getExtendedFilterConfig, this,
					[this.getQuickFilterModuleId()]);
			},

			/**
			 * @private
			 */
			_subscribeSandboxEventsForPage: function(editPage) {
				const typeColumnValue = editPage.get("Tag");
				const cardModuleId = this.getEditPageSandboxId(editPage);
				this.sandbox.subscribe("getCardInfo", function() {
					const detailInfo = this.getDetailInfo();
					const cardInfo = {
						valuePairs: detailInfo.defaultValues || []
					};
					const typeColumnName = this.get("TypeColumnName");
					if (typeColumnName && typeColumnValue) {
						cardInfo.typeColumnName = typeColumnName;
						cardInfo.typeUId = typeColumnValue;
					}
					return cardInfo;
				}, this, [cardModuleId]);
			},

			/**
			 * Returns configuration for extended filter.
			 * @protected
			 * @return {Object} Configuration for extended filter.
			 * @return {Object.filterIcon} Filter icon configuration.
			 */
			getExtendedFilterConfig: function() {
				return {
					filterIcon: this.get("Resources.Images.ImageFilter")
				};
			},

			/**
			 * Returns configuration for record rights setup module.
			 * @protected
			 * @return {Object}
			 */
			getRecordInfo: function() {
				const activeRow = this.getActiveRow();
				const entitySchema = this.entitySchema;
				return {
					entitySchemaName: entitySchema.name,
					entitySchemaCaption: entitySchema.caption,
					primaryColumnValue: activeRow.get(activeRow.primaryColumnName),
					primaryDisplayColumnValue: activeRow.get(activeRow.primaryDisplayColumnName)
				};
			},

			/**
			 * ######## ## ######### ### ######### ######## ########### ##### ##### ###### ### #######.
			 */
			subscribeGetShortFilterFieldsVisible: function() {
				const quickFilterModuleId = this.getQuickFilterModuleId();
				this.sandbox.subscribe("GetShortFilterFieldsVisible", function() {
					const isShortFilterFieldsVisible = this.get("IsShortFilterFieldsVisible");
					this.set("IsShortFilterFieldsVisible", false);
					return isShortFilterFieldsVisible;
				}, this, [quickFilterModuleId]);
			},

			/**
			 * @inheritdoc Terrasoft.BaseDetailV2#updateDetail
			 * @override
			 */
			updateDetail: function(config) {
				this.callParent(arguments);
				const detailInfo = this.getDetailInfo();
				this.set("IsEnabled", detailInfo.isEnabled);
				if (config.reloadAll) {
					this.set("MasterRecordId", detailInfo.masterRecordId);
					this.set("DetailColumnName", detailInfo.detailColumnName);
					this.set("Filter", detailInfo.filter);
					this.set("CardPageName", detailInfo.cardPageName);
					this.set("SchemaName", detailInfo.schemaName);
					this.set("DefaultValues", detailInfo.defaultValues);
					this.set("UseRelationship", detailInfo.useRelationship);
					this.set("RelationType", detailInfo.relationType);
					this.set("RelationTypePath", detailInfo.relationTypePath);
					this.set("RelationshipPath", detailInfo.relationshipPath);
					this.set("IsGridDataLoaded", false);
					this.set("IsClearGridData", true);
					this.set("ActiveRow", null);
					this.set("SelectedRows", []);
					this.set("ProfileKey", detailInfo.profileKey);
					this.initRelationshipButton(this.loadGridData);
				} else {
					const primaryColumnValue = config.primaryColumnValue;
					this.loadGridDataRecord(primaryColumnValue);
					this.setLastActiveRow(primaryColumnValue);
					this.fireDetailChanged({
						action: "edit",
						rows: [primaryColumnValue]
					});
				}
			},

			/**
			 * @inheritdoc Terrasoft.DuplicatesSearchUtilitiesV2#getDuplicateSchemaName
			 * @override
			 */
			getDuplicateSchemaName: function() {
				const detailColumnName = this.$DetailColumnName;
				const entityColumn = this.entitySchema && this.entitySchema.columns &&
					this.entitySchema.columns[detailColumnName];
				return entityColumn && entityColumn.referenceSchemaName;
			},

			/**
			 * @inheritdoc Terrasoft.GridUtilitiesV2#onDataChanged
			 * @override
			 */
			onDataChanged: function() {
				this.mixins.GridUtilities.onDataChanged.call(this);
				this.setDetailDuplicateRuleValues();
			},

			/**
			 * Set detail duplicate rule values to page.
			 * @protected
			 */
			setDetailDuplicateRuleValues: function() {
				const gridData = this.getGridData();
				if (gridData.isEmpty()) {
					return;
				}
				const duplicateDetailRuleValues = this.getDuplicateDetailRuleValues(gridData, this.entitySchemaName);
				if (this.Ext.isEmpty(duplicateDetailRuleValues)) {
					return;
				}
				const cardPropertyName = this.getDetailDuplicateAttributeName(this.entitySchemaName);
				this.sandbox.publish("UpdateCardProperty", {
					"key": cardPropertyName,
					"value": duplicateDetailRuleValues,
					"options": {silent: true}
				}, [this.sandbox.id]);
			},

			/**
			 * Generates an array of IDs of all the details sandbox edit pages.
			 * @protected
			 * @virtual
			 * @return {String[]} Array of IDs of all the details sandbox edit pages.
			 */
			getEditPagesSandboxIds: function() {
				const sandboxIds = [];
				const addPages = this.getEditPages(Terrasoft.ConfigurationEnums.CardOperation.ADD);
				addPages.each(function(addPage) {
					sandboxIds.push(this.getEditPageSandboxId(addPage));
					sandboxIds.push(this.getMiniPageSandboxId(addPage.get("Tag")));
				}, this);
				const editPages = this.getEditPages(Terrasoft.ConfigurationEnums.CardOperation.EDIT);
				editPages.each(function(editPage) {
					sandboxIds.push(this.getEditPageSandboxId(editPage));
				}, this);
				return sandboxIds;
			},

			/**
			 * Gets MiniPage sandbox id.
			 * @param {String} typeId Edit page type Id.
			 * @return {String} MiniPage sandbox id.
			 */
			getMiniPageSandboxId: function(typeId) {
				return this.sandbox.id + this.entitySchemaName + typeId + "MiniPage";
			},

			/**
			 * Generates edit page sandbox identifier.
			 * @protected
			 * @virtual
			 * @param {Object} editPage Edit page.
			 * @return {String}
			 */
			getEditPageSandboxId: function(editPage) {
				const schemaName = editPage.get("SchemaName");
				const typeId = editPage.get("Tag");
				return this.sandbox.id + schemaName + typeId;
			},

			/**
			 * @inheritdoc Terrasoft.BaseDetailV2#getUpdateDetailSandboxTags
			 * @override
			 */
			getUpdateDetailSandboxTags: function() {
				const tags = this.callParent(arguments);
				return tags.concat(this.getEditPagesSandboxIds());
			},

			/**
			 * Opens detail record page or mini page.
			 * @param {String} operation Card operation.
			 * @param {String} typeColumnValue Type column value.
			 * @param {String} recordId Record identifier.
			 */
			openCard: function(operation, typeColumnValue, recordId) {
				const config = this.getOpenCardConfig(operation, typeColumnValue, recordId);
				const navigateConfig = {
					operation: operation,
					entitySchemaName: this.entitySchemaName,
					defaultValues: config.defaultValues,
					id: recordId,
					messageTags: [this.sandbox.id],
				};
				if (this.mixins.NetworkUtilities.tryNavigateTo8xMiniPage(navigateConfig)) {
					return;
				}
				if (operation === enums.CardStateV2.ADD && this.hasAddMiniPage(typeColumnValue)) {
					this.openAddMiniPage({
						entitySchemaName: this.entitySchemaName,
						valuePairs: config.defaultValues,
						moduleId: this.getMiniPageSandboxId(typeColumnValue)
					});
				} else {
					this.sandbox.publish("OpenCard", config, [this.sandbox.id]);
				}
			},

			/**
			 * @private
			 */
			_updateOrCreateDefaultValue: function(defaultValues, typeColumnName, typeColumnValue) {
				var valueItem = defaultValues.find(function(item){
					var name = item.name;
					return name === typeColumnName;
				});
				if (valueItem) {
					valueItem.value = typeColumnValue;
				} else {
					defaultValues.push({
						name: typeColumnName,
						value: typeColumnValue
					});
				}
			},

			/**
			 * Returns parameters for page opening.
			 * @protected
			 * @virtual
			 * @param {String} operation Card operation.
			 * @param {String} typeColumnValue Type column value.
			 * @param {String} recordId Record identifier.
			 * @return {Object}
			 */
			getOpenCardConfig: function(operation, typeColumnValue, recordId) {
				const editPage = this.getEditPage(recordId, typeColumnValue, operation);
				const schemaName = editPage.get("SchemaName");
				const cardModuleId = this.getEditPageSandboxId(editPage);
				const defaultValues = this.get("DefaultValues") || [];
				const typeColumnName = this.get("TypeColumnName");
				const isEnabled = this.get("IsEnabled");
				if (typeColumnName && typeColumnValue) {
					this._updateOrCreateDefaultValue(defaultValues, typeColumnName, typeColumnValue);
				}
				this._updateOrCreateDefaultValue(defaultValues, "IsModelItemsEnabled", isEnabled);
				return {
					moduleId: cardModuleId,
					schemaName: schemaName,
					operation: operation,
					id: recordId,
					defaultValues: defaultValues,
					cardEntitySchemaName: this.entitySchemaName,
					moduleName: Terrasoft.ModuleUtils.getCardModule({
						entityName: this.entitySchemaName,
						cardSchema: schemaName,
						operation: operation,
					})
				};
			},

			/**
			 * Returns edit page for specified type.
			 * @protected
			 * @param {String} recordId Record identifier.
			 * @param {String} typeColumnValue Type column value.
			 * @param {Terrasoft.ConfigurationEnums.CardOperation} operation Card operation.
			 * @return {Object} Page to use.
			 */
			getEditPage: function(recordId, typeColumnValue, operation) {
				const editPages = this.getEditPages(operation);
				return editPages.find(typeColumnValue) || editPages.first();
			},

			/**
			 * Opens card or adds new grid row depending on the mode.
			 * @protected
			 */
			openCardByMode: function() {
				const cardState = this.get("CardState");
				const editPageUId = this.get("EditPageUId");
				const primaryValueUId = this.get("PrimaryValueUId");
				if (this.getIsEditable() && cardState !== enums.CardStateV2.EDIT) {
					this.addRow(editPageUId);
				} else {
					this.openCard(cardState, editPageUId, primaryValueUId);
				}
			},

			/**
			 * Handler of the saved card in which the detail.
			 * @protected
			 * @virtual
			 */
			onCardSaved: function() {
				const cardState = this.$CardState;
				if (cardState === Terrasoft.ConfigurationEnums.CardOperation.ADD
						|| cardState === Terrasoft.ConfigurationEnums.CardOperation.COPY) {
					const {defaultValues} = this.getDetailInfo();
					this.$DefaultValues = defaultValues;
				}
				this.openCardByMode();
			},

			/**
			 * @inheritdoc Terrasoft.BaseDetailV2#onDetailCollapsedChanged
			 * @override
			 */
			onDetailCollapsedChanged: function(isCollapsed) {
				this.callParent(arguments);
				if (!isCollapsed && !this.get("IsGridDataLoaded")) {
					this.loadGridData();
				} else if (!isCollapsed && !this.get("IsFilterAdded")) {
					this.set("IsDetailFilterVisible", true);
				} else if (isCollapsed) {
					this.set("IsDetailFilterVisible", false);
				}
			},

			/**
			 * ############## ######### ##### ######## ######.
			 * @protected
			 * @param {Object} result
			 */
			onDeleted: function(result) {
				if (result.Success) {
					this.fireDetailChanged({
						action: "delete",
						rows: result.DeletedItems
					});
				}
			},

			/**
			 * ######## ## ######### ######.
			 * @protected
			 * @param {Object} args ########## ## ######### ###### {action: "delete", rows: []}
			 */
			fireDetailChanged: function(args) {
				this.sandbox.publish("DetailChanged", args, [this.sandbox.id]);
			},

			/**
			 * ########### #### #######.
			 * @protected
			 */
			//TODO ####### # GridUtilities?
			switchGridMode: function() {
				this.set("ActiveRow", null);
				this.set("SelectedRows", null);

				const multiSelect = this.get("MultiSelect");
				this.set("MultiSelect", !multiSelect);

				const collection = this.getGridData();
				const newCollection = this.Ext.create("Terrasoft.BaseViewModelCollection");
				newCollection.loadAll(collection);
				collection.clear();
				collection.loadAll(newCollection);
			},

			/**
			 * ######## ######### #######, # ########### ## ######## #### #######.
			 * @protected
			 * @returns {String}
			 */
			getSwitchGridModeMenuCaption: function() {
				return (this.get("MultiSelect") === true)
					? this.get("Resources.Strings.SingleModeMenuCaption")
					: this.get("Resources.Strings.MultiModeMenuCaption");
			},

			/**
			 * ############ ####### ## ####### #### ########## #######.
			 * @protected
			 */
			onSortClick: Terrasoft.emptyFn,

			/**
			 *
			 * @protected
			 */
			onSetupTotalClick: Terrasoft.emptyFn,

			/**
			 * Loads grid records. Uses pageable options.
			 * @protected
			 * @return {Boolean} Return false if grid data loaded.
			 */
			loadMore: function() {
				if (this.get("CanLoadMoreData")) {
					this.loadGridData();
					return false;
				}
			},

			/**
			 * Handler for selectRow event.
			 * @protected
			 */
			rowSelected: function(primaryColumnValue) {
				if (primaryColumnValue) {
					this.closeMiniPage();
				}
				if (this.getIsEditable()) {
					this.setLastActiveRow(primaryColumnValue);
				}
			},

			/**
			 * @inheritdoc Terrasoft.BaseDetailV2#initProfile
			 * @override
			 */
			initProfile: function() {
				let profile = this.getProfile();
				const dataGridName = this.getDataGridName();
				const gridProfile = profile[dataGridName];
				if (this._getColumnsConfigured(gridProfile)) {
					profile = Terrasoft.ColumnUtilities.updateProfileColumnCaptions({
						profile: profile,
						entityColumns: this.columns
					});
				} else if (this.get("UseGeneratedProfile")) {
					profile = Terrasoft.deepClone(this.generateEntityProfile());
				} else {
					profile[dataGridName] = {};
					profile = Terrasoft.deepClone(profile);
				}
				this.set("Profile", profile);
			},

			/**
			 * Returns indicator that shows is have to load a default profile.
			 * @private
			 * @param {Object} gridProfile Current grid profile.
			 * @return {Boolean} Indicator is have to load a default profile.
			 */
			_getColumnsConfigured: function(gridProfile) {
				if (gridProfile && gridProfile.type) {
					const profileConfig = gridProfile.type === Terrasoft.GridType.LISTED
						? gridProfile.listedConfig
						: gridProfile.tiledConfig;
					const decodedConfig = Ext.decode(profileConfig, true);
					if (decodedConfig) {
						const configItems = decodedConfig.items;
						return configItems && configItems.length > 0;
					} else {
						return false;
					}
				} else {
					return false;
				}
			},

			/**
			 * ######### ######## #######, # ###### #### ######## ######## # ####### on(.+?)LinkClick.
			 * @protected
			 * @param {String} columnName ######## #######.
			 * @return {String} ########### ######## #######.
			 */
			fixColumnName: function(columnName) {
				const regexp = new RegExp("on(.+?)LinkClick", "i");
				if (regexp.test(columnName)) {
					columnName = columnName.replace("on", "");
					columnName = columnName.replace("LinkClick", "");
				}
				return columnName;
			},

			/**
			 * Opens card when link was clicked.
			 * @protected
			 * @override
			 * @param {Guid} recordId Record identifier.
			 * @param {String} columnName Column name.
			 */
			linkClicked: function(recordId, columnName) {
				const entitySchema = this.entitySchema;
				const collection = this.get("Collection");
				const row = collection.get(recordId);
				if (columnName === entitySchema.primaryDisplayColumnName ||
					columnName === ("on" + entitySchema.primaryDisplayColumnName + "LinkClick")) {
					this.editRecord(row);
					return false;
				}
				columnName = this.fixColumnName(columnName);
				const column = entitySchema.columns.hasOwnProperty(columnName)
					? entitySchema.columns[columnName]
					: null;
				if (this.Ext.isEmpty(column) || !column.hasOwnProperty("referenceSchemaName")) {
					return true;
				}
				const columnSchemaName = column.referenceSchemaName;
				const entityStructure = Terrasoft.configuration.EntityStructure[columnSchemaName];
				if (this.Ext.isEmpty(entityStructure)) {
					return true;
				}
				let columnValue = row.get(columnName);
				columnValue = columnValue.value
					? columnValue.value
					: columnValue;
				const primaryColumnValue = row.get(row.primaryColumnName);
				this.setLastActiveRow(primaryColumnValue);
				const historyState = this.sandbox.publish("GetHistoryState");
				this.mixins.NetworkUtilities.openCardInChain({
					sandbox: this.sandbox,
					entitySchemaName: entityStructure.entitySchemaName,
					operation: enums.CardStateV2.EDIT,
					primaryColumnValue: columnValue,
					entitySchemaUId: entityStructure.entitySchemaUId,
					historyState: historyState
				});
				return false;
			},

			/**
			 * Initializes tools button drop down list.
			 * @private
			 */
			initToolsButtonMenu: function() {
				let toolsButtonMenu = this.get("ToolsButtonMenu");
				if (!toolsButtonMenu) {
					toolsButtonMenu = this.Ext.create("Terrasoft.BaseViewModelCollection");
					this.set("ToolsButtonMenu", toolsButtonMenu);
				}
				this.addToolsButtonMenuItems(toolsButtonMenu);
			},

			/**
			 * Returns "Run process" button visibility.
			 * @return {Boolean}
			 */
			getProcessButtonVisible: function() {
				const processButtonMenuItems = this.get("RunProcessButtonMenuItems");
				return this.isAnySelected() && processButtonMenuItems && !processButtonMenuItems.isEmpty();
			},

			/**
			 * Run the business process with parameters.
			 * @param {Object} config Configuration object.
			 * @param {Object} config.sysProcessId Id scheme of the business process.
			 * @param {Array} config.parameters Process parameters.
			 */
			runProcess: function(config) {
				const obsoleteMessage = Terrasoft.Resources.ObsoleteMessages.ObsoleteMethodMessage;
				this.warning(Ext.String.format(obsoleteMessage, "runProcess",
					"Terrasoft.ProcessEntryPointUtilities.runProcessForSelectedRecords"));
				const selectedItems = this.getSelectedItems();
				Terrasoft.each(selectedItems, function(item) {
					const clonedConfig = Terrasoft.deepClone(config);
					clonedConfig.parameter.parameterValue = item;
					Terrasoft.ProcessModuleUtilities.runProcessWithParameters(clonedConfig);
				}, this);
			},

			/**
			 * Adds menu items to tools button menu items collection.
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} toolsButtonMenu Tools button menu items collection.
			 */
			addToolsButtonMenuItems: function(toolsButtonMenu) {
				this.addRecordOperationsMenuItems(toolsButtonMenu);
				this.addGridOperationsMenuItems(toolsButtonMenu);
				if (this.useDetailWizard) {
					this.addDetailWizardMenuItems(toolsButtonMenu);
				}
			},

			/**
			 * ######### ######## ############### ######## # ######### ########### ###### ############## ######.
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} toolsButtonMenu ######### ########### ######
			 * ############## ######.
			 */
			addRecordOperationsMenuItems: function(toolsButtonMenu) {
				const isDetailEnabled = this.get("IsEnabled");
				if (isDetailEnabled === false) {
					return;
				}
				const copyRecordMenuItem = this.getCopyRecordMenuItem();
				if (copyRecordMenuItem) {
					toolsButtonMenu.addItem(copyRecordMenuItem);
				}
				const editRecordMenuItem = this.getEditRecordMenuItem();
				if (editRecordMenuItem) {
					toolsButtonMenu.addItem(editRecordMenuItem);
				}
				const deleteRecordMenuItem = this.getDeleteRecordMenuItem();
				if (deleteRecordMenuItem) {
					toolsButtonMenu.addItem(deleteRecordMenuItem);
				}
				const recordRightsSetupMenuItem = this.getRecordRightsSetupMenuItem();
				if (recordRightsSetupMenuItem) {
					toolsButtonMenu.addItem(recordRightsSetupMenuItem);
				}
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ############ ###### ######
			 * ####### # #######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######.
			 */
			getSwitchGridModeMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "getSwitchGridModeMenuCaption"},
					Click: {"bindTo": "switchGridMode"}
				});
			},

			/**
			 * Adds grid detail menu items.
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} toolsButtonMenu Grid detail menu items collection.
			 */
			addGridOperationsMenuItems: function(toolsButtonMenu) {
				const switchGridModeMenuItem = this.getSwitchGridModeMenuItem();
				if (switchGridModeMenuItem) {
					toolsButtonMenu.addItem(this.getButtonMenuSeparator());
					toolsButtonMenu.addItem(switchGridModeMenuItem);
				}
				const exportToExcelMenuItem = this.getExportToExcelFileMenuItem();
				if (exportToExcelMenuItem) {
					toolsButtonMenu.addItem(exportToExcelMenuItem);
				}
				const fileImportMenuItem = this.getDataImportMenuItem();
				if (fileImportMenuItem) {
					toolsButtonMenu.add("FileImportMenuItem", fileImportMenuItem);
				}
				Terrasoft.each([
					this.getShowQuickFilterButton(),
					this.getHideQuickFilterButton(),
					this.getGridSortMenuItem(),
					this.getGridSettingsMenuItem(),
					this.getRecordChangeLogMenuItem(),
					this.getObjectChangeLogSettingsMenuItem()
				], function(buttonConfig) {
					if (buttonConfig) {
						toolsButtonMenu.addItem(this.getButtonMenuSeparator());
						toolsButtonMenu.addItem(buttonConfig);
					}
				}, this);
			},

			/**
			 * Returns export to excel menu item.
			 * @protected
			 * @returns {Terrasoft.BaseViewModel} Export to excel menu item.
			 */
			getExportToExcelFileMenuItem: function() {
				return this.getButtonMenuItem({
					"Caption": {"bindTo": "Resources.Strings.ExportListToExcelFileButtonCaption"},
					"Click": {"bindTo": "exportToExcel"},
					"Visible": {"bindTo": "getExportToExcelMenuVisibility"},
					"ImageConfig": this.get("Resources.Images.ExportToExcelBtnImage")
				});
			},

			/**
			 * Returns export to excel menu item visibility.
			 * @protected
			 * @returns {Boolean} Export to excel menu item visibility. By default returns true.
			 */
			getExportToExcelMenuVisibility: function() {
				return true;
			},

			/**
			 * ######### ######## ####### ###### # ######### ########### ###### ############## ######.
			 * @protected
			 * @virtual
			 * @param {Terrasoft.BaseViewModelCollection} toolsButtonMenu ######### ########### ######
			 * ############## ######.
			 */
			addDetailWizardMenuItems: function(toolsButtonMenu) {
				toolsButtonMenu.addItem(this.getButtonMenuSeparator());
				toolsButtonMenu.add("WizardMenuItem", this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.DetailWizardMenuCaption"},
					Click: {"bindTo": "openDetailWizard"},
					Visible: {"bindTo": "IsDetailWizardAvailable"}
				}));
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ########### ######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ########### ######.
			 */
			getCopyRecordMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.CopyMenuCaption"},
					Click: {"bindTo": "copyRecord"},
					Enabled: {bindTo: "getCopyRecordMenuEnabled"},
					Visible: {bindTo: "IsEnabled"}
				});
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ############## ######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ############## ######.
			 */
			getEditRecordMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.EditMenuCaption"},
					Click: {"bindTo": "editRecord"},
					Enabled: {bindTo: "getEditRecordButtonEnabled"},
					Visible: {bindTo: "IsEnabled"}
				});
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ######## ######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ######## ######.
			 */
			getDeleteRecordMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.DeleteMenuCaption"},
					Click: {"bindTo": "deleteRecords"},
					Enabled: {bindTo: "isAnySelected"},
					Visible: {bindTo: "IsEnabled"}
				});
			},

			/**
			 * Returns record rights setup menu item configuration.
			 * @protected
			 * @return {Object}
			 */
			getRecordRightsSetupMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {bindTo: "Resources.Strings.RecordRightsSetupMenuItemCaption"},
					Click: {bindTo: "openRecordRightsSetupModule"},
					Enabled: {bindTo: "isAnySelected"},
					Visible: {bindTo: "getRecordRightsSetupMenuItemVisible"}
				});
			},

			/**
			 * Returns record rights setup menu item visibility.
			 * @protected
			 * @return {Boolean}
			 */
			getRecordRightsSetupMenuItemVisible: function() {
				const isDetailEnabled = this.get("IsEnabled");
				const isRecordRightsSetupMenuItemVisible = isDetailEnabled === true &&
					this.getSchemaAdministratedByRecords();
					return Terrasoft.Features.getIsEnabled("CheckCanChangeRightsInDetail") &&
						Terrasoft.isCurrentUserSsp()
					? isRecordRightsSetupMenuItemVisible && this.$RecordRightsSetupMenuItemVisible
						: isRecordRightsSetupMenuItemVisible;
			},

			/**
			 * Returns if entity is administrated by records.
			 * @protected
			 * @return {Boolean}
			 */
			getSchemaAdministratedByRecords: function() {
				return Ext.isEmpty(this.entitySchema) ? false : this.entitySchema.administratedByRecords;
			},

			/**
			 * Opens record rights setup module.
			 * @protected
			 */
			openRecordRightsSetupModule: function() {
				this.sandbox.loadModule("Rights", {
					renderTo: "centerPanel",
					id: this.getRecordRightsSetupModuleId(),
					keepAlive: true
				});
			},

			/**
			 * Opens record change log.
			 * @protected
			 */
			openRecordChangeLog: function() {
				const activeRow = this.getActiveRow();
				const primaryColumnValue = activeRow.get(activeRow.primaryColumnName);
				changeLogUtilities.openRecordChangeLog(this.entitySchema.uId, primaryColumnValue);
			},

			/**
			 * Opens object change log settings.
			 * @protected
			 */
			openObjectChangeLogSettings: function() {
				changeLogUtilities.openObjectChangeLogSettings(this.entitySchema.uId);
			},

			/**
			 * Returns record rights setup module identifier.
			 * @private
			 * @return {String}
			 */
			getRecordRightsSetupModuleId: function() {
				return this.sandbox.id + "_Rights";
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ########## #######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ########## #######.
			 */
			getGridSortMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.SortMenuCaption"},
					Items: this.get("SortColumns"),
					"ImageConfig": this.get("Resources.Images.SortIcon")
				});
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ########### ########
			 * #######.
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ########### ######## #######.
			 */
			getShowQuickFilterButton: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.QuickFilterCaption"},
					Click: {"bindTo": "setQuickFilterVisible"},
					Visible: {
						"bindTo": "IsDetailFilterVisible",
						"bindConfig": {
							converter: function(value) {
								return !value;
							}
						}
					},
					"ImageConfig": this.get("Resources.Images.FilterIcon20")
				});
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ####### ######## #######.
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ####### #######.
			 */
			getHideQuickFilterButton: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.RemoveQuickFilterCaption"},
					Click: {"bindTo": "hideQuickFilter"},
					Visible: {"bindTo": "IsDetailFilterVisible"},
					Enabled: {"bindTo": "IsFilterAdded"},
					"ImageConfig": this.get("Resources.Images.FilterIcon20")
				});
			},

			/**
			 * Returns a function button drop-down item that is responsible for switching to the record change log.
			 * @protected
			 * @return {Terrasoft.BaseViewModel} Function button drop-down list item that is responsible
			 * for switching to the record change log.
			 */
			getRecordChangeLogMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.OpenRecordChangeLogCaption"},
					Click: {"bindTo": "openRecordChangeLog"},
					Enabled: {"bindTo": "getRecordChangeLogMenuItemEnabled"},
					Visible: {"bindTo": "IsRecordChangeLogMenuItemVisible"},
					ImageConfig: this.get("Resources.Images.OpenRecordChangeLogBtnImage")
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
					Caption: {"bindTo": "Resources.Strings.OpenObjectChangeLogSettingsCaption"},
					Click: {"bindTo": "openObjectChangeLogSettings"},
					Visible: {"bindTo": "IsObjectChangeLogSettingsMenuItemVisible"},
					ImageConfig: this.get("Resources.Images.ObjectChangeLogSettingsBtnImage")
				});
			},

			/**
			 * ########## ####### ########### ###### ############## ######, ########## ## ######### #######.
			 * @protected
			 * @virtual
			 * @return {Terrasoft.BaseViewModel} ####### ########### ###### ############## ######, ########## ##
			 * ######### #######.
			 */
			getGridSettingsMenuItem: function() {
				return this.getButtonMenuItem({
					Caption: {"bindTo": "Resources.Strings.SetupGridMenuCaption"},
					Click: {"bindTo": "openGridSettings"},
					"ImageConfig": this.get("Resources.Images.GridSettingsIcon")
				});
			},

			/**
			 * ########## ######### ###### ####### ######### ### ### ###########.
			 * @protected
			 * @param {Object} config ###### ## ########## ### #########.
			 * @param {String} config.moduleName ############ ######.
			 * @param {String} config.containerId ############# ##########, # ####### ############## ######.
			 */
			sendFilterRerender: function(config) {
				if (Ext.isEmpty(config.moduleName)) {
					return;
				}
				const moduleId = this.getModuleId(config.moduleName);
				const args = {
					renderTo: config.containerId
				};
				this.sandbox.publish("RerenderQuickFilterModule", args, [moduleId]);
			},

			/**
			 * ############# ####### ######.
			 */
			initDetailFilterCollection: function() {
				this.set("DetailFilters", this.Ext.create("Terrasoft.FilterGroup"));
			},

			/**
			 * ############# ######## ######## # ######.
			 * @protected
			 * @param {String} key ### ########.
			 * @param {Object} value ######## ########.
			 */
			setFilter: function(key, value) {
				const filters = this.get("DetailFilters");
				if (key) {
					if (filters.find(key)) {
						filters.remove(filters.get(key));
					}
					filters.add(key, value);
				} else if (value) {
					value.each(function(filter) {
						this.setFilter(filter.key, filter);
					}, this);
				}
			},

			/**
			 * ######### ###### ###### ##### ########## ########.
			 * @override
			 */
			afterFiltersUpdated: function() {
				this.loadGridData();
				this.isFilterAdded();
			},

			/**
			 * ########## ####### ########### ####### ### ########### ####.
			 * @override
			 * @return {Boolean} ####### ########### ####### ### ########### ####.
			 */
			getShortFilterVisible: function() {
				return true;
			},

			/**
			 * ######### ####### ######.
			 * @param {Object} config ######### ######## ######.
			 */
			loadQuickFilter: function(config) {
				const moduleId = this.getModuleId(config.moduleName);
				const args = {
					renderTo: config.containerId
				};
				const rendered = this.sandbox.publish("RerenderQuickFilterModule", args, [moduleId]);
				if (!rendered) {
					this.loadModule(config);
				}
			},

			/**
			 * Returns relationship button visibility.
			 * @protected
			 * @return {Boolean} Relationship button visibility.
			 */
			getRelationshipButtonVisible: function() {
				return this.get("RelationshipButtonVisible") && this.getToolsVisible();
			},

			/**
			 * Gets relationship button hint text.
			 * @protected
			 * @return {String} Hint text.
			 */
			getRelationshipButtonHint: function() {
				return this.get("RelationshipButtonHint") || this.get("Resources.Strings.RelationshipButtonHint");
			},

			/**
			 * Sets attribute that relationship button is pressed, save current value to the profile
			 * and reload detail data.
			 * @protected
			 */
			onRelationshipButtonClick: function() {
				const isRelationshipButtonPressed = !this.get("IsRelationshipButtonPressed");
				const profile = this.getProfile();
				const key = this.getProfileKey();
				if (profile && key) {
					profile.isRelationshipButtonPressed = isRelationshipButtonPressed;
					this.set(this.getProfileColumnName(), profile);
					Terrasoft.utils.saveUserProfile(key, profile, false);
				}
				this.set("IsRelationshipButtonPressed", isRelationshipButtonPressed);
				this.reloadGridData();
			},

			/**
			 * Returns the relationship filter.
			 * @protected
			 * @return {Terrasoft.FilterGroup} Relationship filter.
			 */
			getRelationshipFilters: function() {
				const mainFilterGroup = this.Ext.create("Terrasoft.FilterGroup");
				const relationshipFilterGroup = this.Ext.create("Terrasoft.FilterGroup");
				const masterRecordId = this.get("MasterRecordId");
				const detailColumnName = this.get("DetailColumnName");
				const relationTypePath = this.get("RelationTypePath");
				const relationshipPath = this.get("RelationshipPath");
				const relationType = this.get("RelationType");
				if (relationTypePath && relationshipPath && relationType) {
					relationshipFilterGroup.add("relationshipFilter", Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL,
						relationTypePath,
						relationType,
						Terrasoft.DataValueType.GUID));
					relationshipFilterGroup.add("relationshipTypeFilter", Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL,
						relationshipPath,
						masterRecordId,
						Terrasoft.DataValueType.GUID));
				} else {
					relationshipFilterGroup.add("relationshipFilter", Terrasoft.createColumnFilterWithParameter(
						Terrasoft.ComparisonType.EQUAL,
						this.getDefaultRelationshipPath(),
						masterRecordId,
						Terrasoft.DataValueType.GUID));
				}
				mainFilterGroup.add("subRelationshipFilterGroup", Terrasoft.createExistsFilter(
					detailColumnName,
					relationshipFilterGroup));
				return mainFilterGroup;
			},

			/**
			 * Builds a path to the default relationship column.
			 * @protected
			 * @return {String} Path to the default relationship column.
			 */
			getDefaultRelationshipPath: function() {
				return "[Account:Id:" + this.get("DetailColumnName") + "].Parent";
			},

			/**
			 * Clears the event listeners.
			 */
			destroy: function() {
				this.mixins.GridUtilities.destroy.call(this);
				this.callParent(arguments);
			}

		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "Detail",
				"values": {
					"classes": {"wrapClass": ["detail", "grid-detail"]}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "items",
				"name": "DataGrid",
				"values": {
					"safeBind": true,
					"itemType": Terrasoft.ViewItemType.GRID,
					"listedZebra": true,
					"collection": {"bindTo": "Collection"},
					"activeRow": {"bindTo": "ActiveRow"},
					"primaryColumnName": "Id",
					"isEmpty": {"bindTo": "IsGridEmpty"},
					"isLoading": {"bindTo": "IsGridLoading"},
					"multiSelect": {"bindTo": "MultiSelect"},
					"multiSelectChanged": {"bindTo": "onMultiSelectChanged"},
					"selectedRows": {"bindTo": "SelectedRows"},
					"sortColumn": {"bindTo": "sortColumn"},
					"sortColumnDirection": {"bindTo": "GridSortDirection"},
					"sortColumnIndex": {"bindTo": "SortColumnIndex"},
					"linkClick": {"bindTo": "linkClicked"},
					"enterkeypressed": {"bindTo": "editCurrentRecord"},
					"openRecord": {"bindTo": "editCurrentRecord"},
					"loadMore": {"bindTo": "loadMore"},
					"selectRow": {"bindTo": "rowSelected"}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "items",
				"name": "loadMore",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.LoadMoreButtonCaption"},
					"click": {"bindTo": "loadMore"},
					"controlConfig": {
						"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
						"imageConfig": resources.localizableImages.LoadMoreIcon
					},
					"classes": {"wrapperClass": ["load-more-button-class"]},
					"visible": {"bindTo": "CanLoadMoreData"}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "AddRecordButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"click": {"bindTo": "addRecord"},
					"visible": {"bindTo": "getAddRecordButtonVisible"},
					"enabled": {"bindTo": "getAddRecordButtonEnabled"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "Resources.Images.AddButtonImage"},
					"clickDebounceTimeout": 1000
				}
			},
			{
				"operation": "insert",
				"name": "AddTypedRecordButton",
				"parentName": "Detail",
				"propertyName": "tools",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"menu": {"items": {"bindTo": "getEditPages"}},
					"visible": {"bindTo": "getAddTypedRecordButtonVisible"},
					"enabled": {"bindTo": "getAddTypedRecordButtonEnabled"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "Resources.Images.AddButtonImage"}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "ToolsButton",
				"values": {
					"generateId": false,
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"imageConfig": {"bindTo": "Resources.Images.ToolsButtonImage"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"hint": {"bindTo": "Resources.Strings.ToolsButtonHint"},
					"visible": {"bindTo": "getToolsVisible"},
					"classes": {
						"wrapperClass": ["detail-tools-button-wrapper"],
						"menuClass": ["detail-tools-button-menu"]
					},
					"menu": {
						"items": {
							"bindTo": "ToolsButtonMenu"
						}
					}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "ProcessButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"imageConfig": {"bindTo": "Resources.Images.ProcessButtonImage"},
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"hint": {"bindTo": "Resources.Strings.ProcessButtonHint"},
					"visible": {"bindTo": "getProcessButtonVisible"},
					"classes": {
						"wrapperClass": ["detail-tools-button-wrapper"],
						"menuClass": ["detail-tools-button-menu"]
					},
					"menu": {"items": {"bindTo": "RunProcessButtonMenuItems"}}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "ActionsButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ActionsButtonCaption"},
					"visible": false,
					"menu": []
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "ViewButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"caption": {"bindTo": "Resources.Strings.ViewButtonCaption"},
					"visible": false,
					"menu": []
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "RelationshipButton",
				"values": {
					"itemType": Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
					"imageConfig": {"bindTo": "Resources.Images.RelationshipButtonImage"},
					"visible": {"bindTo": "getRelationshipButtonVisible"},
					"pressed": {"bindTo": "IsRelationshipButtonPressed"},
					"click": {"bindTo": "onRelationshipButtonClick"},
					"hint": {"bindTo": "getRelationshipButtonHint"},
					"classes": {"wrapperClass": ["detail-relationship-button-wrapper"]}
				}
			},
			{
				"operation": "insert",
				"parentName": "Detail",
				"propertyName": "tools",
				"name": "FiltersContainer",
				"values": {
					"itemType": Terrasoft.ViewItemType.MODULE,
					"moduleName": "QuickFilterModuleV2",
					"generateId": true,
					"makeUniqueId": true,
					"visible": {"bindTo": "IsDetailFilterVisible"},
					"classes": {
						"wrapClassName": ["detail-filter-container-style"]
					},
					"afterrender": {"bindTo": "loadQuickFilter"},
					"afterrerender": {"bindTo": "sendFilterRerender"}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
