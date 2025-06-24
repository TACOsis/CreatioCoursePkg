define("BaseEntityPage", [
	"RightUtilities", "EntityResponseValidationMixin", "css!DetailModuleV2"
], function(RightUtilities) {
	return {
		messages: {
			/**
			 * @message RerenderDetail
			 */
			"RerenderDetail": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message GetEntityInfo
			 */
			"DetailChanged": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message GetDetailInfo
			 */
			"GetDetailInfo": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message DetailValidated
			 */
			"DetailValidated": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message SaveDetail
			 */
			"SaveDetail": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message DetailValidated
			 */
			"DetailSaved": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.SUBSCRIBE
			},
			/**
			 * @message ValidateDetail
			 */
			"ValidateDetail": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message UpdateDetail
			 * Tells the details of the card change.
			 */
			"UpdateDetail": {
				"mode": this.Terrasoft.MessageMode.PTP,
				"direction": this.Terrasoft.MessageDirectionType.PUBLISH
			},
			/**
			 * @message CardModuleResponse
			 * Tells that the card was changed.
			 */
			"CardModuleResponse": {
				"mode": this.Terrasoft.MessageMode.PTP,
				"direction": this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message CardRendered
			 * Tells that page was rendered.
			 */
			"CardRendered": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message EntityInitialized
			 * Tells thad entity was initialized and send information about object.
			 */
			"EntityInitialized": {
				mode: this.Terrasoft.MessageMode.BROADCAST,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message DetailSavedOnClose
			 */
			"DataSavedOnClose": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message SaveDetailOnClose
			 */
			"SaveDataOnClose": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.BIDIRECTIONAL
			},
			/**
			 * @message ShowProcessPage
			 * Shows process page.
			 */
			"ShowProcessPage": {
				mode: this.Terrasoft.MessageMode.PTP,
				direction: this.Terrasoft.MessageDirectionType.PUBLISH
			}
		},
		attributes: {
			/**
			 * Used when preparing an entity.
			 */
			"IsEntityInitialized": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: false
			},
			/**
			 * Entity default values array.
			 * @type {Array}
			 */
			"DefaultValues": [],
			/**
			 * Model items enabled flag.
			 * @type (Boolean)
			 */
			"IsModelItemsEnabled": {
				dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
				type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				onChange: "setDetailsEnabledState",
				value: true
			},
			/**
			 * Details config.
			 * @type {Object}
			 */
			"DetailsConfig": {
				dataValueType: Terrasoft.DataValueType.CUSTOM_OBJECT
			}
		},
		mixins: {
			/**
			 * @class EntityResponseValidationMixin Validates server response. Returns true or false depending on
			 * the server response, generates error message and fires dialog in case of an error.
			 */
			EntityResponseValidationMixin: "Terrasoft.EntityResponseValidationMixin",
			CustomEventDomMixin: "Terrasoft.mixins.CustomEventDomMixin",
		},
		methods: {

			init: function(callback, scope) {
				this.callParent([
					function() {
						this.subscribeRenderedAndLoaded();
						this.initDetailsConfig();
						this.subscribeCustomEventOnSandboxPublishEvents();
						Ext.callback(callback, scope);
					}, this
				]);
			},

			/**
			 * @protected
			 */
			subscribeCustomEventOnSandboxPublishEvents: function() {
				if (Terrasoft.isAngularHost) {
					this.mixins.CustomEventDomMixin.init.call(this);
					this.mixins.CustomEventDomMixin.publishOnSandbox.call(this, this.sandbox, 'CardModuleResponse').subscribe();
				}
			},

			/**
			 * @protected
			 */
			initDetailsConfig: function() {
				Terrasoft.SysSettings.querySysSettingsItem("DetailsConfig", function (detailsConfig) {
					try {
						this.$DetailsConfig = JSON.parse(detailsConfig);
					} catch { }
				}, this);
			},

			/**
			 * Adjust details enabled state, base on IsModelItemsEnabled
			 * attribute.
			 * @protected
			 */
			setDetailsEnabledState: function() {
				this.updateDetails(false);
			},

			/**
			 * Returns array of entity initialized subscribers id's.
			 * @protected
			 * @return {Array} Array subscribers id's.
			 */
			getEntityInitializedSubscribers: function() {
				var detailIds = this.getDetailIds();
				var moduleIds = this.getModuleIds();
				return detailIds.concat(moduleIds);
			},

			/**
			 * Saves details in chain.
			 * @param {Function} next Callback function.
			 */
			saveDetailsInChain: function(next) {
				this.saveDetails(function(response) {
					if (this.validateResponse(response)) {
						next();
					}
				}, this);
			},

			/**
			 * Checks details for unsaved data.
			 * @protected
			 * @param {Function} callback Callback function.
			 * @param {Object} scope Callback execution context.
			 */
			saveDataOnClosePage: function(callback, scope) {
				this.processDetails(function(next, detailId) {
					this.sandbox.subscribe("DataSavedOnClose", function(result) {
						if (result.success) {
							next();
						} else {
							this.Ext.callback(callback, scope, [result]);
						}
					}, this, [detailId]);
					if (!this.sandbox.publish("SaveDataOnClose", null, [detailId])) {
						next();
					}
				}, function(result) {
					this.Ext.callback(callback, scope, [result]);
				}, this);
			},

			/**
			 * Returns an array of detail IDs. If there is an identifier for the container,
			 * it causes detail loading.
			 * @private
			 * @return {Array} Array of detail identifiers.
			 */
			getDetailIds: function() {
				var eventTags = [];
				this.Terrasoft.each(this.details, function(detailConfig, detailName) {
					eventTags.push(this.getDetailId(detailName));
				}, this);
				return eventTags;
			},

			/**
			 * Publish a SaveDetail message to every detail.
			 * @protected
			 * @virtual
			 * @param {Function} callback callback function.
			 * @param {Object} scope Context of the callback function.
			 */
			saveDetails: function(callback, scope) {
				this.processDetails(function(next, detailId) {
						this.sandbox.subscribe("DetailSaved", function(result) {
							if (result.success) {
								next();
							} else {
								this.Ext.callback(callback, scope, [result]);
							}
						}, this, [detailId]);
						if (!this.sandbox.publish("SaveDetail", null, [detailId])) {
							next();
						}
					},
					function(resultObject) {
						this.Ext.callback(callback, scope, [resultObject]);
					}, this);
			},

			/**
			 * Calls special process functions for details.
			 * @protected
			 * @param {Function} workFn Special process functions.
			 * @param {Function} callback Callback function. Called at the end of the part processing
			 * or if an error occurred.
			 * @param {Object} scope Context of the callback function.
			 */
			processDetails: function(workFn, callback, scope) {
				var chain = [];
				var chainContext = {
					context: scope || this,
					detailIds: []
				};
				this.Terrasoft.each(this.details, function(detailConfig, detailName) {
					chainContext.detailIds.push(this.getDetailId(detailName));
					chain.push(function(next) {
						var context = this.context;
						var detailId = this.detailIds.pop();
						workFn.call(context, next, detailId);
					});
				}, this);
				chain.push(function() {
					this.context.Ext.callback(callback, scope, [{success: true}]);
				});
				this.Terrasoft.chain.apply(chainContext, chain);
			},

			/**
			 * Gets detail identifier.
			 * @param {String} detailName Detail name.
			 * @return {String} Detail identifier.
			 */
			getDetailId: function(detailName) {
				var detail = this.details[detailName];
				if (this.Terrasoft.isEmptyObject(detail)) {
					this.log("Detail not found: " + detailName, Terrasoft.LogMessageType.ERROR);
					return;
				}
				var entitySchemaName = detail.entitySchemaName || "";
				return this.Ext.String.format("{0}_detail_{1}{2}", this.sandbox.id, detailName, entitySchemaName);
			},

			/**
			 * Subscribes for details events.
			 * @protected
			 * @virtual
			 */
			subscribeDetailsEvents: function() {
				this.Terrasoft.each(this.details, this.subscribeDetailEvents, this);
			},

			/**
			 * Subscribes for detail events.
			 * @protected
			 * @virtual
			 * @param {Object} detailConfig Detail configuration.
			 * @param {String} detailName Detail name.
			 */
			subscribeDetailEvents: function(detailConfig, detailName) {
				var detailId = this.getDetailId(detailName);
				var detail = this.Terrasoft.deepClone(detailConfig);
				Ext.applyIf(detail, {
					detailName: detailName
				});
				this.sandbox.subscribe("GetDetailInfo", function() {
					return this.getDetailInfo(detail);
				}, this, [detailId]);
				this.sandbox.subscribe("DetailChanged", function(args) {
					return this.onDetailChanged(detail, args);
				}, this, [detailId]);
			},

			/**
			 * @inheritdoc Terrasoft.BaseSchemaViewModel#isModelItemEnabled
			 * @override
			 */
			isModelItemEnabled: function(tag) {
				var isEnabled = this.get("IsModelItemsEnabled");
				return isEnabled || this._isColumnTagInExclusionList(tag);
			},

			/**
			 * Checks if column tag in disable exclusions list.
			 * @private
			 * @param {String} tag Column tag.
			 * @return {Boolean} Return true if column tag in disable exclusions list.
			 */
			_isColumnTagInExclusionList: function(tag) {
				var exclusionsList = this.getDisableExclusionsColumnTags();
				return this.Terrasoft.contains(exclusionsList, tag);
			},

			/**
			 * Returns the columns tags for disable exclusions.
			 * @protected
			 * @return {Array} The columns tag for disable exclusions.
			 */
			getDisableExclusionsColumnTags: function() {
				return [];
			},

			/**
			 * Handles detail changes.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {Object} args Information about changes in detail.
			 */
			onDetailChanged: function(detail, args) {
				var subscriber = detail.subscriber;
				if (this.Ext.isFunction(subscriber)) {
					subscriber.call(this, args);
				} else if (this.Ext.isObject(subscriber)) {
					var methodName = subscriber.methodName;
					if (this.Ext.isFunction(this[methodName])) {
						this[methodName](args);
					}
				}
			},

			/**
			 * Generates informational object, used by detail.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {String} detail.masterColumn Name of page column for detail filtration.
			 * @param {String} detail.captionName Name of string resource for detail caption.
			 * @param {String} detail.profileKey Profile data key.
			 * @return {Object} Informational object.
			 */
			getDetailInfo: function(detail) {
				var masterRecordId = this.getDetailMasterColumnValue(detail);
				masterRecordId = masterRecordId && (masterRecordId.value || masterRecordId);
				var masterRecordDisplayValue = this.get(this.primaryDisplayColumnName);
				var detailFilter = this.getDetailFilter(detail);
				var defaultValues = this.getDetailDefaultValues(detail);
				var detailColumnName = detail.filter && detail.filter.detailColumn;
				var caption = this.get("Resources.Strings." + detail.captionName);
				if (!caption && detail.detailName) {
					caption = this.get("Resources.Strings." + detail.detailName + "DetailCaptionOnPage");
				}
				var isDetailEnabled = this.isDetailEnabled(detail.schemaName);
				var isFromPage = Terrasoft.Features.getIsDisabled("DisableCheckMasterRecordId");
				return Ext.apply({}, {
					"cardPageName": this.name,
					"filter": detailFilter,
					"masterRecordId": masterRecordId,
					"masterRecordDisplayValue": masterRecordDisplayValue,
					"detailColumnName": detailColumnName,
					"defaultValues": defaultValues,
					"caption": caption,
					"isEnabled": isDetailEnabled,
					"isFromPage": isFromPage
				}, detail);
			},

			/**
			 * Returns detail enabled flag.
			 * @protected
			 * @virtual
			 * @param {String} detailSchemaName Schema name of detail.
			 * @returns {Boolean} Detail enabled flag.
			 */
			isDetailEnabled: function(detailSchemaName) {
				if (!this.getIsFeatureEnabled("CompleteCardLockout")) {
					return true;
				}
				var isEnabled = this.get("IsModelItemsEnabled");
				return isEnabled || this._isDetailNameInExclusionList(detailSchemaName);
			},

			/**
			 * Checks if detail schema name in disable exclusions list.
			 * @private
			 * @param {String} detailSchemaName Schema name of detail.
			 * @return {Boolean} Return true if detail schema name in disable exclusions list.
			 */
			_isDetailNameInExclusionList: function(detailSchemaName) {
				var exclusionsList = this.getDisableExclusionsDetailSchemaNames();
				return this.Terrasoft.contains(exclusionsList, detailSchemaName);
			},

			/**
			 * Returns the detail schema names for disable exclusions.
			 * @protected
			 * @return {Array} The detail schema names for disable exclusions.
			 */
			getDisableExclusionsDetailSchemaNames: function() {
				return [];
			},

			/**
			 * Returns page column name for detail filtration.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {String} detail.masterColumn Name of page column for detail filtration.
			 * @return {String} Column name.
			 */
			getDetailMasterColumnName: function(detail) {
				var filter = detail.filter || {};
				return filter.masterColumn || this.entitySchema.primaryColumnName;
			},

			/**
			 * Returns value of page filtration column.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {String} detail.masterColumn Name of page column for detail filtration.
			 * @return {Object|String} Column value.
			 */
			getDetailMasterColumnValue: function(detail) {
				var name = this.getDetailMasterColumnName(detail);
				return name && this.get(name);
			},

			/**
			 * Generates detail filters.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {String} detail.masterColumn Name of page column for detail filtration.
			 * @param {String} detail.filterMethod Name of viewModel function for creating detail filters.
			 * @param {String} detail.captionName Name of string resource for detail caption.
			 * @param {Object} detail.filter Configuration of detail filtratio.
			 * @param {String} detail.filter.detailColumn Name of detail filtration column.
			 * @return {Terrasoft.FilterGroup} Filters.
			 */
			getDetailFilter: function(detail) {
				var filterMethod = detail.filterMethod;
				if (filterMethod && Ext.isFunction(this[filterMethod])) {
					return this[filterMethod]();
				}
				var detailColumn = detail.filter && detail.filter.detailColumn;
				var masterFieldName = this.getDetailMasterColumnName(detail);
				var masterFieldColumn = this.findEntityColumn(masterFieldName);
				var masterRecordId = this.getDetailMasterColumnValue(detail);
				if (Ext.isEmpty(masterRecordId) && masterFieldColumn &&
					masterFieldColumn.dataValueType !== Terrasoft.DataValueType.TEXT) {
					return Terrasoft.createColumnIsNullFilter(detailColumn);
				}
				var dataValueType;
				if (Ext.isObject(masterRecordId)) {
					dataValueType = this.Terrasoft.DataValueType.GUID;
				}
				masterRecordId = masterRecordId && (masterRecordId.value || masterRecordId);
				return Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL,
					detailColumn, masterRecordId, dataValueType);
			},

			/**
			 * Generates detail default values array.
			 * @protected
			 * @virtual
			 * @param {Object} detail Detail configuration.
			 * @param {String} detail.masterColumn Name of page column for detail filtration.
			 * @param {String} detail.filterMethod Name of viewModel function for creating detail filters.
			 * @param {String} detail.captionName Name of string resource for detail caption.
			 * @param {Object} detail.filter Configuration of detail filtratio.
			 * @param {String} detail.filter.detailColumn Name of detail filtration column.
			 * @param {Object[]} detail.defaultValues Array of detail defaults configurations.
			 * @return {Object[]} Default values.
			 */
			getDetailDefaultValues: function(detail) {
				var filter = detail.filter || {};
				var masterRecordId = this.getDetailMasterColumnValue(detail);
				masterRecordId = masterRecordId && (masterRecordId.value || masterRecordId);
				var defaultValues = [
					{
						name: filter.detailColumn,
						value: masterRecordId,
						displayValue: this.get(this.primaryDisplayColumnName)
					}
				];
				this.Terrasoft.each(detail.defaultValues, function(detailDefaultValue, name) {
					var value;
					if (!Ext.isEmpty(detailDefaultValue.masterColumn)) {
						var masterColumnValue = this.get(detailDefaultValue.masterColumn);
						value = masterColumnValue && (masterColumnValue.value || masterColumnValue);
					} else {
						value = detailDefaultValue.value;
					}
					if (this.Ext.isEmpty(value)) {
						return;
					}
					defaultValues.push({
						name: name,
						value: value
					});
				}, this);
				return defaultValues;
			},

			/**
			 * Loads detail, if detail is already loaded, then rerenders it.
			 * @param {Object} config Detail configuration.
			 */
			loadDetail: function(config) {
				this._safeLoadDetail(config);
			},

			/**
			 * Loads detail is safe mode.
			 * @private
			 * @param {Object} config Detail configuration.
			 * @param {String} config.detailName Detail name.
			 * @param {String} config.containerId Container identifier.
			 * @param {Boolean} config.forceLoad Flag for immediate detail loading.
			 */
			_safeLoadDetail: function(config) {
				var detailName = config.detailName;
				var containerId = config.containerId;
				var detail = this.details[detailName];
				var detailConfig;
				if (containerId || config.forceLoad) {
					Ext.apply(detail, {
						containerId: containerId,
						detailName: detailName
					});
					detailConfig = Ext.applyIf(this.Terrasoft.deepClone(detail), this.get(detailName));
					this.set(detailName, detailConfig);
				}
				var detailId = this.getDetailId(detailName);
				var isDetailRendered = this.sandbox.publish("RerenderDetail", {"renderTo": containerId}, [detailId]);
				var isAllowLoadingDetail = isDetailRendered !== true && (this.canImmediatelyDetailLoad(detail) || this.get("IsEntityInitialized"));
				if (!isAllowLoadingDetail) {
					return;
				}
				if (!detailConfig || (detailConfig && detailConfig.isLoaded && Ext.isDefined(isDetailRendered))) {
					return;
				}
				this.sandbox.loadModule("DetailModuleV2", {
					renderTo: detailConfig.containerId,
					id: detailId
				});
				detailConfig.isLoaded = true;
			},

			/**
			 * @protected
			 */
			canImmediatelyDetailLoad: function (detail) {
				const isDetailRelatedByFilterMethod = detail && detail.filterMethod;
				if (isDetailRelatedByFilterMethod) {
					return false;
				}
				const detailMasterColumnName = detail && detail.filter && detail.filter.masterColumn;
				const primaryColumnName = this.entitySchema && this.entitySchema.primaryColumnName;
				const isDetailRelatedByPrimaryColumn = primaryColumnName && detailMasterColumnName === primaryColumnName;
				return isDetailRelatedByPrimaryColumn && this._isEnabledImmediatelyDetailLoad(detail);
			},

			/**
			 * @private
			 */
			_isEnabledImmediatelyDetailLoad: function (detail) {
				const isEmptyDetailsConfig = !this.$DetailsConfig;
				if (isEmptyDetailsConfig) {
					return false;
				}
				const includeConfig = this.$DetailsConfig.immediatelyLoadingOnPage?.include || {};
				const excludeConfig = this.$DetailsConfig.immediatelyLoadingOnPage?.exclude || {};
				const isDetailInclude = this._isDetailInLoadingConfig(includeConfig, detail);
				const isDetailExclude = this._isDetailInLoadingConfig(excludeConfig, detail);
				return isDetailInclude && !isDetailExclude;
			},

			/**
			 * @private
			 */
			_isDetailInLoadingConfig: function (config, detail) {
				const pageSchemaName = this.name;
				const includeDetailsSchemaNames = config[pageSchemaName] || config["*"] || [];
				return includeDetailsSchemaNames === "*" || includeDetailsSchemaNames.includes(detail.schemaName);
			},

			/**
			 * Loads details in safe mode.
			 * @private
			 */
			_safeLoadDetails: function() {
				this.Terrasoft.each(this.details, function(detailConfig, detailName) {
					var detailProperty = this.get(detailName);
					if (detailProperty) {
						this._safeLoadDetail(detailProperty);
					}
				}, this);
			},

			/**
			 * Returns Promise object for event.
			 * @private
			 * @param {String} eventName Event name.
			 * @return {Promise} Promise object for event.
			 */
			_getSubscribePromise: function(eventName) {
				return new Promise(function(resolve) {
					this.sandbox.subscribe(eventName, resolve, [this.sandbox.id]);
				}.bind(this));
			},

			/**
			 * Subscribes to render and entity init.
			 * @protected
			 */
			subscribeRenderedAndLoaded: function() {
				var cardRenderedPromise = this._getSubscribePromise("CardRendered");
				var entityInitializedPromise = this._getSubscribePromise("EntityInitialized");
				var onRenderedAndLoaded = this.onRenderedAndLoaded.bind(this);
				Promise.all([cardRenderedPromise, entityInitializedPromise]).then(onRenderedAndLoaded);
			},

			/**
			 * Sets actions to be executed after render and entity init.
			 * @protected
			 */
			onRenderedAndLoaded: function() {
				this._safeLoadDetails();
			},

			/**
			 * Gets lookup default values query columns.
			 * @private
			 * @param {Array} defaultValues Entity default values array.
			 * @return {Array} Entity lookup default values query columns.
			 */
			getLookupDefaultValuesQueryColumns: function(defaultValues) {
				var queryColumns = [];
				this.Terrasoft.each(defaultValues, function(defaultValue) {
					var queryColumn = this.getLookupDefaultValueQueryColumn(defaultValue);
					if (queryColumn) {
						queryColumns.push(queryColumn);
					}
				}, this);
				return queryColumns;
			},

			/**
			 * Gets lookup default value query column.
			 * @private
			 * @param {Object} value Entity default value.
			 * @return {Object} Entity column lookup value object.
			 */
			getLookupDefaultValueQueryColumn: function(value) {
				var entityColumn = this.findEntityColumn(value.name);
				if (entityColumn && this.Terrasoft.isLookupDataValueType(entityColumn.dataValueType)) {
					return this.Ext.apply({}, value, entityColumn);
				}
			},

			/**
			 * Gets entity lookup default values query.
			 * @private
			 * @param {Array} queryColumns Entity lookup query columns.
			 * @return {Terrasoft.BatchQuery} Entity lookup default values query.
			 */
			getEntityLookupDefaultValuesQuery: function(queryColumns) {
				var query = this.Ext.create("Terrasoft.BatchQuery");
				this.Terrasoft.each(queryColumns, function(queryColumn) {
					query.add(this.getLookupDisplayValueQuery(queryColumn));
				}, this);
				return query;
			},

			/**
			 * Applies order information to lookup entity schema query.
			 * @protected
			 * @param {Terrasoft.EntitySchemaQuery} esq Entity schema query.
			 * @param {String} columnName Lookup column name.
			 */
			applyColumnsOrderToLookupQuery: function(esq, columnName) {
				const lookupColumn = this.getColumnByName(columnName);
				const lookupListConfig = lookupColumn && lookupColumn.lookupListConfig;
				if (!lookupListConfig || !lookupListConfig.orders) {
					return;
				}
				const columns = esq.columns;
				this.Terrasoft.each(lookupListConfig.orders, function(order) {
					const orderColumnPath = order.columnPath;
					if (!columns.contains(orderColumnPath)) {
						esq.addColumn(orderColumnPath);
					}
					const sortedColumn = columns.get(orderColumnPath);
					const direction = order.direction;
					sortedColumn.orderDirection = direction ? direction : Terrasoft.OrderDirection.ASC;
					const position = order.position;
					sortedColumn.orderPosition = position ? position : 1;
					this.shiftColumnsOrderPosition(columns, sortedColumn);
				}, this);
			},

			/**
			 * Shift columns order position.
			 * @private
			 * @param {Array} columns Entity columns.
			 * @param {Object} sortedColumn Entity sorting column.
			 */
			shiftColumnsOrderPosition: function(columns, sortedColumn) {
				const sortedColumnOrderPosition = sortedColumn.orderPosition;
				if (Ext.isNumber(sortedColumnOrderPosition)) {
					columns.each(function(column) {
						if (column !== sortedColumn && Ext.isNumber(column.orderPosition) &&
							column.orderPosition >= sortedColumnOrderPosition) {
							column.orderPosition += 1;
						}
					});
				}
			},

			/**
			 * Sets entity lookup query results to entity columns.
			 * @private
			 * @param {Array} queryResults Entity lookup query results.
			 * @param {Array} queryColumns Entity lookup query columns.
			 */
			setDefaultValuesToColumns: function(queryResults, queryColumns) {
				this.Terrasoft.each(queryResults, function(queryResult, index) {
					if (this.Ext.isEmpty(queryResult) || this.Ext.isEmpty(queryResult.rows)) {
						return;
					}
					this.set(queryColumns[index].name, queryResult.rows[0]);
				}, this);
			},

			/**
			 * Updates all details.
			 * @protected
			 * @param {Boolean} reloadDetails - flag of complete details reload.
			 */
			updateDetails: function(reloadDetails) {
				this.Terrasoft.each(this.details, function(detailConfig, detailName) {
					const updateConfig = this.Ext.apply({}, detailConfig, {
						detail: detailName,
						reloadAll: Ext.isEmpty(reloadDetails) ? undefined : reloadDetails
					});
					this.updateDetail(updateConfig);
				}, this);
			},

			/**
			 * Sends message to detail about card changes.
			 * @protected
			 * @virtual
			 */
			updateDetail: function(updateConfig) {
				const messageConfig = this.getUpdateDetailConfig() || {};
				if (updateConfig && !this.Ext.isEmpty(updateConfig.reloadAll)) {
					messageConfig.reloadAll = Boolean(updateConfig.reloadAll);
				}
				const messageTag = updateConfig 
					? this.getDetailId(updateConfig.detail)
					: this.sandbox.id;
				this.sandbox.publish("UpdateDetail", messageConfig, [messageTag]);
			},

			/**
			 * Sends message to page caller about card changes.
			 * @protected
			 * @virtual
			 */
			cardModuleResponse: function() {
				var cardModuleConfig = this.getCardModuleResponseConfig();
				this.appendRelatedLookupColumnsResponse(cardModuleConfig);
				this.sandbox.publish("CardModuleResponse", cardModuleConfig, [this.sandbox.id]);
			},

			/**
			 * Gets default values.
			 * @protected
			 * @virtual
			 */
			getDefaultValues: this.Terrasoft.emptyFn,

			/**
			 * Returns config for UpdateDetail message.
			 * @protected
			 * @virtual
			 * @return {Object} Config for message.
			 */
			getUpdateDetailConfig: this.Terrasoft.emptyFn,

			/**
			 * Returns config for CardModuleResponse message.
			 * @protected
			 * @virtual
			 * @return {Object} Config for message.
			 */
			getCardModuleResponseConfig: this.Terrasoft.emptyFn,

			/**
			 * Check edit right, validate elements then save entity.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			save: function(callback, scope) {
				this.saveDataOnClosePage(function() {
					this.showBodyMask({
						selector: this.get("ContainerSelector") || null,
						timeout: 0
					});
					this.Terrasoft.chain(
						this.saveCheckCanEditRight,
						this.saveAsyncValidate,
						this.saveEntityInChain,
						function() {
							this.Ext.callback(callback, scope || this);
						}, this);
				}, this);
			},

			/**
			 * Check user edit rights.
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			saveCheckCanEditRight: function(callback, scope) {
				this.checkCanEditRight(function(response) {
					if (this.validateResponse(response)) {
						this.Ext.callback(callback, scope || this);
					}
				}, this);
			},

			/**
			 * @inheritdoc Terrasoft.EntityResponseValidationMixin#validateResponse
			 * @protected
			 */
			validateResponse: function() {
				var isSuccess = this.mixins.EntityResponseValidationMixin.validateResponse.apply(this, arguments);
				if (!isSuccess) {
					this.hideBodyMask();
				}
				return isSuccess;
			},

			/**
			 * Check user edit rights.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Terrasoft.BaseSchemaViewModel} scope Callback execution context.
			 */
			checkCanEditRight: function(callback, scope) {
				var resultObject;
				var canEditResponse = this.get("CanEditResponse");
				if (this.Ext.isString(canEditResponse)) {
					resultObject = this.processCheckCanEditResponse(canEditResponse);
					this.Ext.callback(callback, scope, [resultObject]);
				} else {
					var primaryColumnValue = this.getPrimaryColumnValue();
					RightUtilities.checkCanEdit({
						schemaName: this.entitySchema.name,
						primaryColumnValue: primaryColumnValue,
						isNew: this.isNew
					},  function(result) {
						this.set("CanEditResponse", result);
						resultObject = this.processCheckCanEditResponse(result);
						this.Ext.callback(callback, scope, [resultObject]);
					}, this);
				}
			},

			/**
			 * Processes rights results.
			 * @protected
			 * @virtual
			 * @param {Object} result Rights results.
			 */
			processCheckCanEditResponse: function(result) {
				return {
					success: !result,
					message: result
				};
			},

			/**
			 * Validates model values.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			saveAsyncValidate: function(callback, scope) {
				this.asyncValidate(function(response) {
					if (this.validateResponse(response)) {
						this.Ext.callback(callback, scope || this);
					}
				}, this);
			},

			/**
			 * Validates model values. Sends validate results to callback function.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			asyncValidate: function(callback, scope) {
				var resultObject = {
					success: this.validate()
				};
				if (!resultObject.success) {
					this.Ext.callback(callback, scope, [resultObject]);
					return;
				}
				this.processDetails(
					function(next, detailId) {
						this.sandbox.subscribe("DetailValidated", function(result) {
							if (result.success) {
								next();
							} else {
								this.Ext.callback(callback, scope, [result]);
							}
						}, this, [detailId]);
						if (!this.sandbox.publish("ValidateDetail", null, [detailId])) {
							next();
						}
					},
					function(asyncValidateResult) {
						this.Ext.callback(callback, scope, [asyncValidateResult]);
					}, this);
			},

			/**
			 * Save entity in chain.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			saveEntityInChain: function(callback, scope) {
				this.saveEntity(function(response) {
					this.validateSaveEntityResponse(response, callback, scope);
				}, this);
			},

			/**
			 * Validates save entity response.
			 * @protected
			 * @virtual
			 * @param {Object} response Response results.
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			validateSaveEntityResponse: function(response, callback, scope) {
				if (this.validateResponse(response)) {
					this.Ext.callback(callback, scope || this);
				}
			},

			/**
			 * Loads default values.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			setEntityLookupDefaultValues: function(callback, scope) {
				var defaultValues = this.get("DefaultValues");
				if (!defaultValues) {
					defaultValues = this.getDefaultValues();
				}
				var callbackScope = scope || this;
				if (Ext.isEmpty(defaultValues)) {
					this.Ext.callback(callback, callbackScope);
					return;
				}
				var queryColumns = this.getLookupDefaultValuesQueryColumns(defaultValues);
				if (queryColumns.length === 0) {
					this.Ext.callback(callback, callbackScope);
					return;
				}
				var query = this.getEntityLookupDefaultValuesQuery(queryColumns);
				query.execute(function(result) {
					if (result && result.success) {
						this.setDefaultValuesToColumns(result.queryResults, queryColumns);
					}
					this.Ext.callback(callback, callbackScope);
				}, this);
			},

			/**
			 * Sets default values to non lookup data columns.
			 * @protected
			 * @virtual
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			setEntityDefaultValues: function(callback, scope) {
				var defaultValues = this.get("DefaultValues") || this.getDefaultValues();
				this.Terrasoft.each(defaultValues, function(defaultValue) {
					var name = defaultValue.name;
					var schemaColumn = this.getColumnByName(name);
					if (schemaColumn && this.Terrasoft.isLookupDataValueType(schemaColumn.dataValueType)) {
						return;
					}
					this.set(name, defaultValue.value);
				}, this);
				this.Ext.callback(callback, scope || this);
			},

			/**
			 * Processes default values.
			 * @protected
			 * @virtual
			 * @param {Object[]} valuePairs List of unprocessed default values.
			 * @return {Object[]} List of default values.
			 */
			processDefaultValues: function(valuePairs) {
				var defaultValues = [];
				var sourceDefaultValues = this.Terrasoft.deepClone(valuePairs) || [];
				while (!Ext.isEmpty(sourceDefaultValues)) {
					var defaultValue = sourceDefaultValues.pop();
					var values = Ext.isArray(defaultValue.name)
						? this.Terrasoft.mapObjectToCollection(defaultValue)
						: [defaultValue];
					defaultValues = defaultValues.concat(values);
				}
				return defaultValues;
			},

			/**
			 * Gets lookup query for display value.
			 * @return {Terrasoft.EntitySchemaQuery} Lookup query.
			 */
			getLookupDisplayValueQuery: function(config) {
				var result = this.getLookupQuery(null, config.name, config.isLookup);
				result.enablePrimaryColumnFilter(config.value);
				return result;
			},

			/**
			 * Subscribes on view-model events.
			 * @protected
			 * @virtual
			 */
			subscribeViewModelEvents: function() {
				this.subscribeEntityColumnsChanging();
			},

			/**
			 * Subscribes on entity columns changings.
			 * @private
			 */
			subscribeEntityColumnsChanging: function() {
				this.Terrasoft.each(this.columns, function(column, columnName) {
					this.subscribeEntityColumnChanging(column.name || columnName);
				}, this);
			},

			/**
			 * Subscribes on entity column changing.
			 * @private
			 * @param {String} columnName Column name.
			 */
			subscribeEntityColumnChanging: function(columnName) {
				var entityColumn = this.findEntityColumn(columnName);
				if (!entityColumn) {
					return;
				}
				this.on("change:" + columnName, function(model, columnValue) {
					if (this.Ext.isFunction(this.entityColumnChanged)) {
						this.entityColumnChanged(columnName, columnValue);
					}
				}, this);
			},

			/**
			 * @inheritdoc Terrasoft.BaseViewModel#loadLookupData
			 * @overridden
			 */
			loadLookupData: function(filterValue, list, columnName) {
				var multiLookupColumns = this.getMultiLookupColumns(columnName);
				if (multiLookupColumns) {
					this.loadMultiLookupData(filterValue, list, columnName);
				} else {
					this.callParent(arguments);
				}
			},

			/**
			 * Fills lookup field.
			 * @param {String} name Entity schema name
			 * @param {String} value Entity value.
			 * @param {Function} callback Callback-function.
			 * @param {Object} scope Execution context.
			 */
			loadLookupDisplayValue: function(name, value, callback, scope) {
				var config = {
					name: name,
					value: value
				};
				var esq = this.getLookupDisplayValueQuery(config);
				esq.getEntityCollection(function(result) {
					var collection = result.collection;
					if (result.success && !collection.isEmpty()) {
						var entity = collection.getByIndex(0);
						this.set(name, entity.values);
					}
					if (callback) {
						this.Ext.callback(callback, scope || this);
					}
				}, this);
			},

			/**
			 * Returns true if business rule can clean entity column.
			 * @return {Boolean} True if business rule can clean entity column.
			 */
			canAutoCleanDependentColumns: function() {
				return true;
			},

			/**
			 * Shows process page by publishing ShowProcessPage message.
			 * @protected
			 * @param {Object} config Message body.
			 */
			showProcessPage: function(config) {
				return this.sandbox.publish("ShowProcessPage", config, ["ProcessListenerModule"]);
			}
		},
		diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/
	};
});
