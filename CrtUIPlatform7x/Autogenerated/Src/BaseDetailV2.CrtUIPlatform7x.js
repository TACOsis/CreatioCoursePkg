/**
 * Parent: BaseSchemaViewModel
 */
define("BaseDetailV2", ["terrasoft", "RightUtilities", "ConfigurationEnums"],
		function(Terrasoft, RightUtilities, ConfigurationEnums) {
	return {
		messages: {
			/**
			 * @message GetCardState
			 * ########## ######### ########
			 */
			"GetCardState": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message IsCardChanged
			 * Returns is card changed.
			 */
			"IsCardChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message SaveRecord
			 * ######## ######## # ############# ###########
			 */
			"SaveRecord": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message DetailInitialized
			 * Notifies the card that the detail is initialized
			 */
			"DetailInitialized": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message DetailChanged
			 * ######## ######## ## ######### ###### ######
			 */
			"DetailChanged": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message UpdateDetail
			 * ###########, ##### ########## ########
			 */
			"UpdateDetail": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message OpenCard
			 * ######### ########.
			 * @param {Object} ############ ########### ########.
			 */
			"OpenCard": {
				mode: Terrasoft.MessageMode.PTP,
				direction: Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message GetColumnsValues
			 * Returns requested column values.
			 */
			"GetColumnsValues": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message UpdateCardProperty
			 * Changes the value of the card model.
			 */
			"UpdateCardProperty": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},

			/**
			 * @message GetEntityInfo
			 * Requests information about master record entity.
			 */
			"GetEntityInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			}
		},
		attributes: {
			/**
			 * ####### ########### ########## ######
			 * @type {Boolean}
			 */
			"CanAdd": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ####### ########### ############## ######
			 * @type {Boolean}
			 */
			"CanEdit": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * Sign that current user has master recorrd edit rights permissions.
			 * @type {Boolean}
			 */
			"CanEditMasterRecord": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				value: true
			},

			/**
			 * ####### ########### ######## ######
			 * @type {Boolean}
			 */
			"CanDelete": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * Grid data collection.
			 * @type {Terrasoft.BaseViewModelCollection}
			 */
			"Collection": {
				dataValueType: Terrasoft.DataValueType.COLLECTION
			},

			/**
			 * ###### ######
			 * @type {Terrasoft.BaseFilter}
			 */
			"Filter": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},

			/**
			 * ### #######, ## ####### ########### ##########
			 * @type {String}
			 */
			"DetailColumnName": {
				dataValueType: Terrasoft.DataValueType.STRING
			},

			/**
			 * ######## ##### ############ ######
			 * @type {Guid}
			 */
			"MasterRecordId": {
				dataValueType: Terrasoft.DataValueType.GUID
			},

			/**
			 *
			 */
			"IsDetailCollapsed": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN
			},

			/**
			 * ######## ####### ## #########
			 */
			"DefaultValues": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			},

			/**
			 * ######### ######
			 */
			"Caption": {
				dataValueType: Terrasoft.DataValueType.STRING
			},

			/**
			 * Detail enabled flag.
			 */
			"IsEnabled": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				value: true
			}
		},
		methods: {

			/**
			 * @private
			 */
			_initCollections: function() {
				this.set("Collection", this.Ext.create("Terrasoft.BaseViewModelCollection"));
			},

			/**
			 * @private
			 */
			_getMasterRecordCanEditResponse: function() {
				var columnsValuesObject =
					this.sandbox.publish("GetColumnsValues", ["CanEditResponse"], [this.sandbox.id]) || {};
				return columnsValuesObject.CanEditResponse;
			},

			/**
			 * @private
			 */
			_setMasterRecordCanEditResponse: function(canEditResponse) {
				this.sandbox.publish("UpdateCardProperty", {
					"key": "CanEditResponse",
					"value": canEditResponse,
					"options": {silent: true}
				}, [this.sandbox.id]);
			},

			/**
			 * Initializes detail viewModel.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			init: function(callback, scope) {
				this.processCheckMasterRecordEditRights();
				this.initEditPages();
				this._initCollections();
				this.callParent([function() {
					this.initDetailOptions();
					this.initFilterProfile();
					this.initData(function() {
						this.initProfile();
						this.initDefaultCaption();
						this.subscribeSandboxEvents();
						callback.call(scope);
					}, this);
				}, this]);
			},

			/**
			 * Processes checking master record edit rights.
			 * @protected
			 */
			processCheckMasterRecordEditRights: function() {
				var entitySchema = this.entitySchema;
				if (entitySchema && !entitySchema.administratedByRecords && entitySchema.useMasterRecordRights) {
					var sandbox = this.sandbox;
					var masterCardState = sandbox.publish("GetCardState", null, [sandbox.id]);
					if (masterCardState && masterCardState.state === ConfigurationEnums.CardStateV2.EDIT) {
						this.checkMasterRecordEditRights();
					}
				}
			},

			/**
			 * Initializes schema profile.
			 * @protected
			 * @virtual
			 */
			initProfile: Terrasoft.emptyFn,

			/**
			 * Init schema profile of data filters.
			 * @protected
			 */
			initFilterProfile: Terrasoft.emptyFn,

			/**
			 * Sets default detail caption.
			 * @protected
			 * @virtual
			 */
			initDefaultCaption: function() {
				if (Ext.isEmpty(this.get("Caption"))) {
					this.set("Caption", this.get("Resources.Strings.Caption"));
				}
			},

			/**
			 * Initializes detail options.
			 * @protected
			 */
			initDetailOptions: function() {
				var profile = this.getProfile();
				var isCollapsed = !Ext.isEmpty(profile.isCollapsed) ? profile.isCollapsed : true;
				this.set("IsDetailCollapsed", isCollapsed);
			},

			/**
			 * Subscribes to necessary sandbox messages.
			 * @protected
			 * @virtual
			 */
			subscribeSandboxEvents: function() {
				this.sandbox.subscribe("UpdateDetail", function(config) {
					if (this.destroyed) {
						return;
					}
					this.updateDetail(config);
					this.processCheckMasterRecordEditRights();
				}, this, this.getUpdateDetailSandboxTags());
			},

			/**
			 * Gets identifier of the reference record of the detail.
			 * @param {Object} detailReferenceColumn Reference column of the detail.
			 */
			getReferenceRecordId: function(detailReferenceColumn) {
				var defaultValues = this.get("DefaultValues");
				var filterColumn = this.Terrasoft.findItem(defaultValues, { name: detailReferenceColumn.name });
				return filterColumn
					? filterColumn.item.value
					: this.get("MasterRecordId");
			},

			/**
			 * Checks that the detail is referenced directly to the master record.
			 * @param {String} referenceSchemaName Schema name of the record that detail is referenced to.
			 * @param {String} referenceRecordId Identifier of the record that detail is referenced to.
			 */
			isReferencedToMasterRecord: function(referenceSchemaName, referenceRecordId) {
				var masterRecordEntityInfo = this.sandbox.publish("GetEntityInfo", null, [this.sandbox.id]);
				return masterRecordEntityInfo &&
					masterRecordEntityInfo.entitySchemaName === referenceSchemaName &&
					masterRecordEntityInfo.primaryColumnValue === referenceRecordId;
			},

			/**
			 * Requests master edit rights result.
			 * @protected
			 */
			checkMasterRecordEditRights: function() {
				var detailColumnName = this.get("DetailColumnName");
				var detailColumn = this.entitySchema.columns[detailColumnName];
				if (!detailColumn || !detailColumn.isLookup) {
					return;
				}
				var referenceRecordId = this.getReferenceRecordId(detailColumn);
				var isReferencedToMasterRecord =
					this.isReferencedToMasterRecord(detailColumn.referenceSchemaName, referenceRecordId);
				var masterRecordCanEditResponse = isReferencedToMasterRecord
					? this._getMasterRecordCanEditResponse()
					: null;
				if (this.Ext.isString(masterRecordCanEditResponse)) {
					this.set("CanEditMasterRecord", masterRecordCanEditResponse === "");
				} else {
					Terrasoft.chain(
						function(next) {
							RightUtilities.checkCanEdit({
								schemaName: detailColumn.referenceSchemaName,
								primaryColumnValue: referenceRecordId
							}, next, this);
						},
						function(next, result) {
							if (isReferencedToMasterRecord) {
								this._setMasterRecordCanEditResponse(result);
							}
							this.Ext.callback(this.onCheckMasterRecordEditRightsResponse, this, [result]);
						}, this
					);
				}
			},

			/**
			 * Handles receiving master edit rights result.
			 * @protected
			 * @param {Array} result Master edit rights result.
			 */
			onCheckMasterRecordEditRightsResponse: function(result) {
				this.set("CanEditMasterRecord", this.Ext.isEmpty(result));
			},

			/**
			 * Generates tags array for message UpdateDetail.
			 * @protected
			 * @virtual
			 * @return {String[]} Tags array.
			 */
			getUpdateDetailSandboxTags: function() {
				return [this.sandbox.id];
			},

			/**
			 * Updates detail according to passed parameters.
			 * @protected
			 * @virtual
			 * @param {Object} config Update configuration.
			 */
			updateDetail: Terrasoft.emptyFn,

			/**
			 * Initializes detail data.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Execution context.
			 */
			initData: function(callback, scope) {
				callback.call(scope);
			},

			/**
			 * Returns edit page name depending on the type of selected record (when editing) or on selected type
			 * of record to be added (when adding).
			 * @protected
			 * @virtual
			 * @return {String} Edit page name.
			 */
			getEditPageName: function() {
				return "";
			},

			/**
			 * Handles a change of detail collapsing state.
			 * @protected
			 * @virtual
			 * @param {Boolean} isCollapsed True if detail is collapsed, otherwise false.
			 */
			onDetailCollapsedChanged: function(isCollapsed) {
				var profile = this.getProfile();
				var key = this.getProfileKey();
				if (profile && key) {
					profile.isCollapsed = isCollapsed;
					this.Terrasoft.utils.saveUserProfile(key, profile, false);
				}
				this.set("IsDetailCollapsed", isCollapsed);
			},

			/**
			 * Returns tools visibility.
			 * @protected
			 * @return {Boolean} True if detail tools should be visible, otherwise false.
			 */
			getToolsVisible: function() {
				return !this.get("IsDetailCollapsed");
			},

			/**
			 * Publishes message for receiving detail information.
			 * @protected
			 * @return {Object} Information about detail.
			 */
			getDetailInfo: function() {
				var detailInfo = this.sandbox.publish("GetDetailInfo", null, [this.sandbox.id]) || {};
				var defaultValues = this.get("DefaultValues") || [];
				if (!this.Ext.isEmpty(detailInfo.defaultValues)) {
					var cardDefaultValues = detailInfo.defaultValues;
					var keys = [];
					this.Terrasoft.each(cardDefaultValues, function(valuePair) {
						keys.push(valuePair.name);
					}, this);
					var result = this.Ext.Array.filter(defaultValues, function(item) {
						return (keys.indexOf(item.name) === -1);
					}, this);
					detailInfo.defaultValues = this.Ext.Array.merge(result, cardDefaultValues);
				} else {
					detailInfo.defaultValues = defaultValues;
				}
				return detailInfo;
			},

			/**
			 * Set entire element of "DefaultValues" attribute.
			 * @protected
			 * @param {String} name Default value name.
			 * @param {Object} value Default value.
			 */
			setDefaultValue: function(name, value) {
				this.$DefaultValues = this.$DefaultValues || [];
				const defaultValue = this.Terrasoft.findItem(this.$DefaultValues, {name: name});
				if (defaultValue && defaultValue.item) {
					defaultValue.item.value = value;
				} else {
					this.$DefaultValues.push({
						name: name,
						value: value
					});
				}
			}
		},

		/**
		 * Detail view configuration.
		 * @type {Object[]}
		 */
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Detail",
				"values": {
					"itemType": Terrasoft.ViewItemType.CONTROL_GROUP,
					"caption": {"bindTo": "Caption"},
					"classes": {"wrapClass": ["detail"]},
					"tools": [],
					"items": [],
					"controlConfig": {
						"collapsedchanged": {"bindTo": "onDetailCollapsedChanged"},
						"collapsed": {"bindTo": "IsDetailCollapsed"}
					}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
