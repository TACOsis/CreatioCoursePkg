/**
 * Parent: RootUserTaskPropertiesPage
 */
define("ExecuteIntentUserTaskPropertiesPage", ["ExecuteIntentUserTaskPropertiesPageResources",
		"ProcessSchemaUserTaskUtilities", "ProcessUserTaskConstants"
	],
	function(resources, userTaskUtilities) {
		return {
			properties: {},
			mixins: {},
			messages: {},
			attributes: {

				/**
				 * Result action type.
				 * @type {Guid}
				 */
				"IntentSchemaUId": {
					dataValueType: Terrasoft.DataValueType.GUID,
					type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					isRequired: true,
					parameterBindConfig: {
						onInit: "initProperty",
						onSave: "saveParameter"
					}
				},

				/**
				 * Collection of the result action types.
				 * @type {Object}
				 */
				"IntentSchema": {
					dataValueType: this.Terrasoft.DataValueType.LOOKUP,
					type: this.Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					referenceSchemaName: "SysSchema",
					isRequired: true,
					onChange: "onBeforeSchemaChanged"
				},

				/**
				 * Result action type list.
				 * @type {Terrasoft.Collection}
				 */
				"IntentSchemaList": {
					dataValueType: Terrasoft.DataValueType.COLLECTION,
					type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN
				},

				/**
				 * Collection of copilot results statuses.
				 */
				"ExecutionStatus": {
					"dataValueType": Terrasoft.DataValueType.COLLECTION,
					"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
					"isCollection": true,
					"value": Ext.create("Terrasoft.Collection")
				}
			},
			methods: {

				//region Methods: Private

				/**
				 * @private
				 */
				_setElementCaptionBySchema: function(element, schema) {
					if(!schema) {
						return;
					}
					let caption = schema.displayValue;
					const filterFn = function(item, name) {
						return item.caption
							? (item.caption.getValue() === name && item.uId !== element.uId)
							: false;
					};
					const parentSchema = element.parentSchema;
					const flowElements = parentSchema.flowElements;
					const prefix = caption + " ";
					caption = userTaskUtilities.generateItemUniqueName(prefix, flowElements, filterFn);
					this.set("caption", caption);
					element.setLocalizableStringPropertyValue("caption", caption);
				},

				/**
				 * @private
				 */
				_getActiveIntents: function(callback, scope) {
					const request = {
						serverMethod: "CopilotIntentSchemaDesignerService.svc/GetActiveApiCopilotIntentSchemas",
						data: {}
					};
					Terrasoft.CoreServiceProvider.execute(request, function(response) {
						if (response.success) {
							callback.call(scope, response.copilotSchemas);
						}
					}, this);
				},

				/**
				 * @private
				 */
				_setCustomIntentLookup: function(schemaUId, lookupValue) {
					const sourceList = this.get("IntentSchemaList");
					sourceList.add(schemaUId, lookupValue);
					this.set("IntentSchema", lookupValue);
				},

				/**
				 * @private
				 */
				_handleMissingOrInactiveSchema: function(schemaUId, callback, scope) {
					if (this._getIsNotSet(schemaUId)) {
						callback.call(scope, null);
						return;
					}
					const request = {
						serverMethod: "CopilotIntentSchemaDesignerService.svc/GetSchema",
						data: { schemaUId: schemaUId, useFullHierarchy: true }
					};

					Terrasoft.CoreServiceProvider.execute(request, function(response) {
						if(response.success && !response.schema?.isActive) {
							this._showSkillErrorMessage(this.get("Resources.Strings.IntentDeactivatedMessage"), false);
							const captionMap = response.schema?.caption?.reduce((map, item) => {
								map[item.cultureName] = item.value;
								return map;
							}, {}) || {};
							const defaultCulture = Terrasoft.SysValue?.PRIMARY_LANGUAGE?.code || 'en-US';
							const skillDisplayValue = captionMap[Terrasoft.currentUserCultureName] ||
									captionMap[defaultCulture] ||
									response.schema?.caption[0]?.value;
							const customLookupValue = {
								value: schemaUId,
								displayValue: skillDisplayValue
							};
							callback.call(scope, customLookupValue);
						} else {
							this._showSkillErrorMessage(this.get("Resources.Strings.IntentNotFoundMessage"), true);
							callback.call(scope, null);
						}
					}, this);
				},

				/**
				 * @private
				 */
				_getIntentParameters: function(schemaUId, callback, scope) {
					const preventParameterLoad = this.get("PreventParameterLoad");
					if (this._getIsNotSet(schemaUId) || preventParameterLoad) {
						callback.call(scope, null);
						return;
					}
					const request = {
						serverMethod: "CopilotIntentSchemaDesignerService.svc/GetCopilotIntentSchemaParameters",
						data: Terrasoft.encode(schemaUId)
					};
					Terrasoft.CoreServiceProvider.execute(request, function(response) {
						callback.call(scope, response.success ? response : null);
					}, this);
				},

				/**
				 * @private
				 */
				_loadIntentSchemaLookupValue: function(schemaUId, callback, scope) {
					const list = this.get("IntentSchemaList");
					const selectValue = schemaUId && !Terrasoft.isEmptyGUID(schemaUId)
						? list.find(schemaUId)
						: null;
					callback.call(scope, selectValue);
				},

				/**
				 * @private
				 */
				_initIntentSchemaList: function(callback, scope) {
					let list = this.get("IntentSchemaList");
					if (list && list.getCount() !== 0) {
						Ext.callback(callback, scope);
						return;
					}
					list = Ext.create("Terrasoft.Collection");
					this._getActiveIntents(function(items){
						Terrasoft.each(items, function(item) {
							list.add(item.uId, {
								value: item.uId,
								displayValue: item.caption
							});
						}, this);
						this.set("IntentSchemaList", list);
						Ext.callback(callback, scope);
					}, this);
				},

				/**
				 * @private
				 */
				_showIntentSchemaSettingsPage: function(schemaUId) {
					let settingsPageLocation = schemaUId && !Terrasoft.isEmptyGUID(schemaUId)
						? '/Shell/#Card/AISkills_FormPage/edit/' + schemaUId
						: '/Shell/#Section/AISkills_ListPage';
					settingsPageLocation = Terrasoft.workspaceBaseUrl + settingsPageLocation;
					window.open(settingsPageLocation);
				},

				/**
				 * @private
				 */
				_setHasIntentParameters: function(element) {
					const parameter = element.parameters.findByFn(function(parameter) {
						return parameter.direction === Terrasoft.ProcessSchemaParameterDirection.IN;
					}, this);
					this.set("HasIntentParameters", Boolean(parameter));
				},

				/**
				 * @private
				 */
				_showSkillErrorMessage: function(message, preventParameterLoad) {
					this.set("ShowIntentErrorMessage", true);
					this.set("IntentErrorMessage", message);
					this.set("PreventParameterLoad", Boolean(preventParameterLoad));
				},

				//region Handle intent parameters

				/**
				 * @private
				 */
				_getParameterTag: function(schemaUId, intentParameter) {
					return schemaUId + '_' + intentParameter.name;
				},

				/**
				 * @private
				 */
				_getParameterConfig: function(element, schemaUId, intentParameter, direction) {
					const cultureValues = (intentParameter.caption ?? []).reduce((acc, item) => {
						acc[item.cultureName] = item.value;
						return acc;
					}, {});
					const captionLocalizableString = Ext.create("Terrasoft.LocalizableString", {
						cultureValues
					});
					const descriptionLocalizableString = Ext.create("Terrasoft.LocalizableString",
						intentParameter.description);
					return {
						uId: Terrasoft.generateGUID(),
						createdInSchemaUId: element.createdInSchemaUId,
						modifiedInSchemaUId: element.createdInSchemaUId,
						containerUId: element.uId,
						tag: this._getParameterTag(schemaUId, intentParameter),
						dataValueType: Terrasoft.ServerDataValueType[intentParameter.dataValueTypeUId],
						sourceValue: {
							source: Terrasoft.ProcessSchemaParameterValueSource.None
						},
						processFlowElementSchema: element,
						isRequired: false,
						name: intentParameter.name,
						caption: captionLocalizableString,
						description: descriptionLocalizableString,
						direction: direction
					};
				},

				/**
				 * @private
				 */
				_removeNotActualParameters: function(element, synchronizedParameters, direction) {
					const dynamicParameters = element.getDynamicParameters();
					dynamicParameters.each(function(parameter) {
						if (Boolean(parameter.tag) && parameter.direction === direction &&
								!Ext.Array.contains(synchronizedParameters, parameter.uId)) {
							element.clearDynamicParameter(parameter.uId);
						}
					}, this);
				},

				/**
				 * @private
				 */
				_updateOldParameter: function(oldParameter, newParameter, synchronizedParameters) {
					synchronizedParameters.push(oldParameter.uId);
					oldParameter.caption = newParameter.caption?.clone();
					oldParameter.description = newParameter.description?.clone();
					oldParameter.dataValueType = newParameter.dataValueType;
					oldParameter.direction = newParameter.direction;
					oldParameter.isRequired = newParameter.isRequired;
				},

				/**
				 * @private
				 */
				_clearDynamicParameters: function(element, direction) {
					const dynamicParameters = element.getDynamicParameters();
					dynamicParameters.each(function(parameter) {
						if (parameter.direction === direction) {
							element.clearDynamicParameter(parameter.uId);
						}
					}, this);
				},

				/**
				 * @private
				 */
				_synchronizeParameters: function(element, schemaUId, intentParameters, direction) {
					if (Ext.isEmpty(intentParameters)) {
						this._clearDynamicParameters(element, direction);
						return;
					}
					const synchronizedParameters = [];
					Terrasoft.each(intentParameters, function(intentParameter) {
						const parameterName = intentParameter.name;
						const oldParameter = element.findParameterByName(parameterName);
						const parameterMetaData = this._getParameterConfig(element, schemaUId, intentParameter,
							direction);
						const newParameter = new Terrasoft.ProcessSchemaParameter(parameterMetaData);
						if (oldParameter) {
							this._updateOldParameter(oldParameter, newParameter, synchronizedParameters);
						} else {
							element.parameters.add(newParameter.uId, newParameter);
							synchronizedParameters.push(newParameter.uId);
						}
					}, this);
					this._removeNotActualParameters(element, synchronizedParameters, direction);
				},

				/**
				 * @private
				 */
				_synchronizeActualSchemaParameters: function(element, schemaUId, intentSchemaInfo) {
					this._synchronizeParameters(element, schemaUId, intentSchemaInfo.inputParameters,
						Terrasoft.ProcessSchemaParameterDirection.IN);
					this._synchronizeParameters(element, schemaUId, intentSchemaInfo.outputParameters,
						Terrasoft.ProcessSchemaParameterDirection.OUT);
					this._setHasIntentParameters(element);
					this.initBaseParameters(element, true);
				},

				/**
				 * @private
				 */
				_getIsNotSet: function(schemaUId) {
					return !schemaUId || Terrasoft.isEmptyGUID(schemaUId);
				},

				/**
				 * @private
				 */
				_getCopilotStatuses: function() {
					return [
						{ id: "b30c282e-9442-464b-88a3-6dd47257bb53", caption: "ExecutedSuccessfully" },
						{ id: "642f9b7f-d1c4-4def-a249-b4636ed1ca0d", caption: "FailedToExecute" },
						{ id: "d77dbe06-313d-49f2-8bbb-c3ab1518fb4a", caption: "CantGenerateGoodResponse" },
						{ id: "cc190566-bc7d-46ff-97f2-e716438a127b", caption: "InsufficientPermissions" },
						{ id: "039ee45a-eeec-401b-b984-c3613a1b38e1", caption: "ResponseParsingFailed" },
						{ id: "36515252-d63c-4595-9726-0f16f70e06b0", caption: "IntentNotFound" },
						{ id: "ce4a2009-43f6-45b4-91ba-2d42dd4ad780", caption: "WrongIntentMode" },
						{ id: "e8347303-59ad-4122-9b7c-c0a970568923", caption: "InactiveIntent" }
					];
				},

				/**
				 * @private
				 */
				_checkIsIntentValid: function() {
					const showErrorMessage = this.get("ShowIntentErrorMessage");
					return {
						invalidMessage: showErrorMessage ? this.get("IntentErrorMessage") : ""
					};
				},

				/**
				 * @private
				 */
				_initCopilotStatuses: function (element) {
					if (element) {
						const statuses = Ext.create("Terrasoft.ObjectCollection");
						Terrasoft.each(this._getCopilotStatuses(), function (item) {
							if (!statuses.contains(item.id)) {
								const localValue = this.get("Resources.Strings.IntentCallStatus_" + item.caption);
								statuses.add(item.id, { id: item.id, caption: localValue });
							}
						}, this);
						this.set("ExecutionStatus", statuses);
					}
				},

				/**
				 * @private
				 */
				_onSkillChangedMessage: function(_, message) {
					if (Ext.isEmpty(message)) {
						return;
					}
					const header = message.Header;
					if (Ext.isEmpty(header) ||
						header.Sender !== "CopilotIntentChanged") {
						return;
					}
					const body = JSON.parse(message.Body);
					const changedSchemaUId = body.body.intentUId
					const schemaUId = this.$IntentSchema ? this.$IntentSchema.value : Terrasoft.GUID_EMPTY;
					if (changedSchemaUId !== schemaUId) {
						return;
					}
					this.onAfterSchemaChanged();
				},

				//endregion

				//region Methods: Protected

				/**
				 * @inheritdoc ProcessFlowElementPropertiesPage#getParameterEditToolsButtonEditMenuItem
				 * @override
				 */
				getParameterEditToolsButtonEditMenuItem: function() {
					const itemModel = this.callParent(arguments);
					return this.configureParameterEditMenuItem(itemModel);
				},

				/**
				 * @inheritdoc Terrasoft.BaseSchemaViewModel#setValidationConfig
				 * @override
				 */
				setValidationConfig: function() {
					this.callParent(arguments);
					this.addColumnValidator("IntentSchemaList", this._checkIsIntentValid);
				},

				/**
				 * @inheritdoc Terrasoft.RootUserTaskPropertiesPage#onAfterSchemaCnahged
				 * @override
				 */
				onAfterSchemaChanged: function() {
					const element = this.$ProcessElement;
					const schemaUId = this.$IntentSchema ? this.$IntentSchema.value : Terrasoft.GUID_EMPTY;
					this.set("IntentSchemaUId", schemaUId);
					if (this._getIsNotSet(schemaUId)) {
						this._synchronizeActualSchemaParameters(element, schemaUId, {});
					} else {
						Terrasoft.chain(
							function(next) {
								this._getIntentParameters(schemaUId, function(intentSchemaInfo) {
									this._synchronizeActualSchemaParameters(element, schemaUId, intentSchemaInfo || {});
									next.call(this);
								}, this);
							},
							function(next) {
								this.initElementProperty(element, next, this);
							}, this);
					}
					this._setElementCaptionBySchema(element, this.$IntentSchema);
				},

				/**
				 * @inheritdoc RootUserTaskPropertiesPage#setSchema.
				 * @override
				 */
				setSchema: function(schema, options) {
					this.set("IntentSchema", schema, options);
				},

				/**
				 * @inheritdoc RootUserTaskPropertiesPage#onBeforeSchemaChanged.
				 * @override
				 */
				onBeforeSchemaChanged: function(model, newSchema) {
					const oldSchemaUId = this.get("IntentSchemaUId");
					const newSchemaUId = newSchema ? newSchema.value : Terrasoft.GUID_EMPTY;
					if (oldSchemaUId === newSchemaUId) {
						return;
					}
					if (this._getIsNotSet(oldSchemaUId)) {
						this.onAfterSchemaChanged();
						return;
					}
					this._loadIntentSchemaLookupValue(oldSchemaUId, function(oldSchema) {
						this.canChangeSchema(function(canChange) {
							if (canChange) {
								this.set("ShowIntentErrorMessage", false);
								this.confirmSchemaChange(oldSchema);
							} else {
								this.$IntentSchema = oldSchema;
							}
						}, this);
					}, this);
				},

				/**`
				 * Returns Open/Add intent schema button hint.
				 * @protected
				 * @param {Object} schema Intent schema.
				 * @return {Object}
				 */
				getOpenIntentSchemaDesignerButtonHint: function(schema) {
					if (schema) {
						return this.get("Resources.Strings.OpenSchemaButtonHintCaption");
					} else {
						return this.get("Resources.Strings.AddSchemaButtonHintCaption");
					}
				},

				/**
				 * Returns a placeholder when the list of intent schemas is empty.
				 * @protected
				 * @return {String}
				 */
				showIntentSchemaPlaceholder: function() {
					return  this.$IsEmptyIntentSchemaList
						? this.get("Resources.Strings.IntentSchemasEmptyListPlaceholder")
						: Terrasoft.emptyString;
				},

				/**
				 * Handles prepare list event.
				 * @protected
				 * @param {Filter} filter lookup filter.
				 * @param {Terrasoft.Collection} list of intent schemas.
				 * @param {Function} callback The callback function.
				 * @param {Object} scope The scope for the callback.
				 */
				onPrepareSchemaList: function(filter, list, callback, scope) {
					if (!list) {
						Ext.callback(callback, scope);
						return;
					}
					this._initIntentSchemaList(function() {
						const sourceList = this.get("IntentSchemaList");
						const result = sourceList.clone();
						list.clear();
						list.loadAll(result);
						this.$IsEmptyIntentSchemaList = list.collection.length === 0;
						Ext.callback(callback, scope);
					}, this);
				},

				/**
				 * Returns Open/Add intent schema button image config.
				 * @protected
				 * @param {Object} schema Intent schema.
				 * @return {Object}
				 */
				getOpenIntentSchemaDesignerButtonImageConfig: function(schema) {
					if (schema) {
						return this.get("Resources.Images.OpenButtonImage");
					} else {
						return this.get("Resources.Images.AddButtonImage32");
					}
				},

				/**
				 * Opens intent schema designer.
				 * @protected
				 */
				onOpenSchemaDesignerButtonClick: function() {
					const schema = this.$IntentSchema;
					const schemaUId = schema && schema.value;
					this._showIntentSchemaSettingsPage(schemaUId);
				},

				/**
				 * Returns flag indicating that the parameters label is visible.
				 * @protected
				 * @return {Boolean}
				 */
				getIsParametersLabelVisible: function() {
					return Boolean(this.$IntentSchema);
				},

				/**
				 * @inheritdoc ProcessSchemaElementEditable#onElementDataLoad
				 * @overridden
				 */
				onElementDataLoad: function(element, callback, scope) {
					this.callParent([element, function() {
						Terrasoft.chain(
							function(next) {
								this._initIntentSchemaList(next, this);
							},
							function(next) {
								const schemaUId = this.get("IntentSchemaUId");
								this._loadIntentSchemaLookupValue(schemaUId, function(lookupValue) {
									if(!lookupValue && !this._getIsNotSet(schemaUId)) {
										this._handleMissingOrInactiveSchema(schemaUId, function(lookup) {
											if(Boolean(lookup)){
												this._setCustomIntentLookup(schemaUId, lookup);
											}
											next.call(this);
										}, this);
									} else {
										this.set("ShowIntentErrorMessage", false);
										this.set("IntentSchema", lookupValue, {
											silent: true
										});
										next.call(this);
									}
								}, this);
							},
							function(next) {
								const schemaUId = this.get("IntentSchemaUId");
								this._getIntentParameters(schemaUId, function(intentSchemaInfo) {
									const links = element.parentSchema.findLinksToElements([element.name]);
									this._synchronizeActualSchemaParameters(element, schemaUId, intentSchemaInfo || {});
									this.invalidateDependentElements(links);
									next.call(this);
								}, this);
							},
							function() {
								this.initBaseParameters(element);
								this.initHasCompileModeLimitations();
								this._initCopilotStatuses(element);
								Ext.callback(callback, scope);
							}, this);
					}, this]);
				},

				/**
				 * @inheritdoc BaseUserTaskPropertiesPage#init
				 * @overridden
				 */
				init: function(callback, scope) {
					this.callParent([function() {
						Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE,
							this._onSkillChangedMessage, this);
						Ext.callback(callback, scope);
					}, this]);
				},

				/**
				 * @inheritdoc RootUserTaskPropertiesPage#onDestroy
				 * @overridden
				 */
				onDestroy: function() {
					Terrasoft.ServerChannel.un(Terrasoft.EventName.ON_MESSAGE,
						this._onSkillChangedMessage, this);
					this.callParent(arguments);
				},

				/**
				 * @inheritdoc ProcessFlowElementPropertiesPage#getResultParameterAllValues
				 * @overridden
				 */
				getResultParameterAllValues: function (callback, scope) {
					var collection = this.get("ExecutionStatus");
					var resultParameterValues = {};
					collection.each(function (item) {
						resultParameterValues[item.id] = { displayValue: item.caption };
					});
					callback.call(scope, resultParameterValues);
				},

				//endregion
			},
			diff: /**SCHEMA_DIFF*/[
				{
					"operation": "insert",
					"name": "ExecuteIntentContainer",
					"propertyName": "items",
					"parentName": "EditorsContainer",
					"className": "Terrasoft.GridLayoutEdit",
					"values": {
						"itemType": Terrasoft.ViewItemType.GRID_LAYOUT,
						"items": []
					}
				},
				{
					"operation": "insert",
					"name": "OpenSchemaDesignerButton",
					"parentName": "ExecuteIntentContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.BUTTON,
						"style": Terrasoft.controls.ButtonEnums.style.TRANSPARENT,
						"hint": {
							"bindTo": "IntentSchema",
							"bindConfig": {
								"converter": "getOpenIntentSchemaDesignerButtonHint"
							}
						},
						"imageConfig": {
							"bindTo": "IntentSchema",
							"bindConfig": {
								"converter": "getOpenIntentSchemaDesignerButtonImageConfig"
							}
						},
						"classes": {
							"wrapperClass": ["open-schema-designer-tool-button"]
						},
						"tag": "Rest",
						"click": {
							"bindTo": "onOpenSchemaDesignerButtonClick"
						},
						"layout": {
							"column": 22,
							"row": 1,
							"colSpan": 2
						}
					}
				},
				{
					"operation": "insert",
					"name": "IntentSchemaLabel",
					"parentName": "ExecuteIntentContainer",
					"propertyName": "items",
					"values": {
						"layout": {
							"column": 0,
							"row": 0,
							"colSpan": 24
						},
						"itemType": Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "Resources.Strings.IntentSchemaSelectCaption"
						},
						"classes": {
							"labelClass": ["t-title-label-proc"]
						}
					}
				},
				{
					"operation": "insert",
					"name": "IntentSchema",
					"parentName": "ExecuteIntentContainer",
					"propertyName": "items",
					"values": {
						"layout": {
							"column": 0,
							"row": 1,
							"colSpan": 22
						},
						"labelConfig": {
							"visible": false
						},
						"contentType": Terrasoft.ContentType.ENUM,
						"controlConfig": {
							"prepareList": {
								"bindTo": "onPrepareSchemaList"
							},
							"filterComparisonType": Terrasoft.StringFilterType.CONTAIN,
							"placeholder": {
								"bindTo": "showIntentSchemaPlaceholder"
							}
						},
						"wrapClass": ["top-caption-control", "placeholderOpacity"]
					}
				},
				{
					"operation": "insert",
					"parentName": "ExecuteIntentContainer",
					"propertyName": "items",
					"name": "IntentErrorMessage",
					"values": {
						"layout": {
							"column": 0,
							"row": 2,
							"colSpan": 22
						},
						"itemType": Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "IntentErrorMessage"
						},
						"visible": {
							"bindTo": "ShowIntentErrorMessage"
						},
						"classes": {
							"labelClass": ["invalid-text"]
						}
					}
				},
				{
					"operation": "insert",
					"parentName": "EditorsContainer",
					"name": "ExecuteIntentParametersContainer",
					"propertyName": "items",
					"className": "Terrasoft.GridLayoutEdit",
					"values": {
						"itemType": Terrasoft.ViewItemType.CONTAINER,
						"items": []
					}
				},
				{
					"operation": "insert",
					"parentName": "ExecuteIntentParametersContainer",
					"name": "ExecuteIntentParametersLabelContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.CONTAINER,
						"items": [],
						"classes": {
							"wrapClassName": ["not-compile", "label-container"]
						},
						"visible": {
							"bindTo": "getIsParametersLabelVisible"
						}
					}
				},
				{
					"operation": "insert",
					"name": "ExecuteIntentParametersLabel",
					"parentName": "ExecuteIntentParametersLabelContainer",
					"propertyName": "items",
					"values": {
						"itemType": Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "Resources.Strings.ExecuteIntentParametersCaption"
						},
						"classes": {
							"labelClass": ["t-title-label-proc"]
						}
					}
				},
				{
					"operation": "insert",
					"parentName": "ExecuteIntentParametersLabelContainer",
					"propertyName": "items",
					"name": "ExecuteIntentParametersLabelInfoButton",
					"values": {
						"itemType": Terrasoft.ViewItemType.INFORMATION_BUTTON,
						"content": { bindTo: "getCompileModeLimitationsInfoContent"},
						"controlConfig": {
							"visible": "$HasCompileModeLimitations"
						}
					}
				},
				{
					"operation": "insert",
					"parentName": "ExecuteIntentParametersContainer",
					"propertyName": "items",
					"name": "EmptyParametersMessage",
					"values": {
						"itemType": Terrasoft.ViewItemType.LABEL,
						"caption": {
							"bindTo": "Resources.Strings.ExecuteIntentEmptyParametersMessage"
						},
						"visible": {
							"bindTo": "HasIntentParameters",
							"bindConfig": {
								"converter": function(value) {
									return !value;
								}
							}
						},
						"classes": {
							"labelClass": ["empty-parameters"]
						}
					}
				},
				{
					"operation": "insert",
					"parentName": "ExecuteIntentParametersContainer",
					"propertyName": "items",
					"name": "ExecuteIntentParameterList",
					"values": {
						"generator": "ConfigurationItemGenerator.generateHierarchicalContainerList",
						"idProperty": "ParameterEditKey",
						"onItemClick": {
							"bindTo": "onItemClick"
						},
						"nestedItemsAttributeName": "ItemProperties",
						"nestedItemsContainerId": "nested-parameters",
						"collection": "Parameters",
						"defaultItemConfig": Ext.apply(Terrasoft.ProcessSchemaParameterViewConfig.generate("sub-process-"),
							{
								"visible": "$isInputParameterAvailable"
							}),
						"classes": {
							"wrapClassName": ["sub-process-parameters-container"]
						},
						"rowCssSelector": ".paramContainer"
					}
				}
			]/**SCHEMA_DIFF*/
		};
	}
);
