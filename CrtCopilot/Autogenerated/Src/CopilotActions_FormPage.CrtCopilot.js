define("CopilotActions_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "CardButtonToggleGroup",
				"values": {
					"for": "CardToggleTabPanel",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "MainHeaderBottom",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CenterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"stretch": true,
					"items": []
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CardContentContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"fitContent": false,
					"items": []
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabs",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionSchemaTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ActionSchemaTab_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionParametersTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ActionParametersTab_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"layoutConfig": {
						"maxWidth": 368,
						"minWidth": 368
					},
					"stretch": true,
					"classes": [
						"card-toggle-tab-panel",
						"container-background-color-primary",
						"container-border-area"
					]
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionHelpTab",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(ActionHelpTab_caption)#",
					"iconPosition": "left-icon",
					"icon": "book-open-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionHelpTabLabelContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "ActionHelpTab",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionHelpTabLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(ActionHelpTabLabel_caption)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "ActionHelpTabLabelContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionSettingsTab",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(ActionSettingsTab_caption)#",
					"iconPosition": "left-icon",
					"icon": "settings"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionSettingsTabLabelContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "ActionSettingsTab",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionSettingsTabLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(ActionSettingsTabLabel_caption)#",
					"labelType": "headline-3",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "ActionSettingsTabLabelContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActionSettingsTabControlsContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "ActionSettingsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Name_label)#",
					"control": "$PDS_Name",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "ActionSettingsTabControlsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Description",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Description_label)#",
					"control": "$PDS_Description",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "ActionSettingsTabControlsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Code_label)#",
					"control": "$PDS_Code",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "ActionSettingsTabControlsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Type_label)#",
					"control": "$PDS_Type",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false,
					"items": [
						{
							"value": 0,
							"DisplayValue": "BusinessProcess"
						}
					]
				},
				"parentName": "ActionSettingsTabControlsContainer",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						},
						"change": {
							"request": "crt.GenerateCopilotActionCodeValueRequest",
							"params": {
								"valueAttributeName": "PDS_Name",
								"intentAttributeName": "Intent",
								"codeAttributeName": "PDS_Code"
							}
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_Code": {
						"modelConfig": {
							"path": "PDS.Code"
						},
						"validators": {
							"CodeMaxLength": {
								"type": "crt.MaxLength",
								"params": {
									"maxLength": 41
								}
							},
							"CodePrefixValidator": {
								"type": "crt.SchemaNamePrefix",
							},
							"CodeAllowedSymbolsValidator": {
								"type": "crt.SchemaNameAllowedSymbols",
							},
						}
					},
					"PDS_Type": {
					},
					"PDS_Params": {
						"modelConfig": {
							"path": "PDS.Params"
						}
					},
					"Intent": {
						"modelConfig": {
							"path": "PDS.Intent"
						}
					},
					"PDS_PackageUId": {
						"modelConfig": {
							"path": "PDS.PackageUId"
						}
					},
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
				}
			},
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"PDS": {
							"type": "crt.CopilotActionDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "CopilotAction",
								"attributes": {
									"Id": {
										"path": "Id"
									},
									"Name": {
										"path": "Name"
									},
									"Code": {
										"path": "Code"
									},
									"Description": {
										"path": "Description"
									},
									"Params": {
										"path": "Params"
									},
									"PackageUId": {
										"path": "PackageUId"
									},
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
