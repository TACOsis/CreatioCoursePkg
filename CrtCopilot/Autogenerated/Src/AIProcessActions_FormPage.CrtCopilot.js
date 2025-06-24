define("AIProcessActions_FormPage", /**SCHEMA_DEPS*/["InplaceProcessSchemaDesignerComponent", "css!AIProcessActions_FormPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(d)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"visible": "$ProcessSchemaIsNew"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"visible": "$ProcessActionHasUnsavedData"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"visible": "$ProcessActionHasUnsavedData | crt.InvertBooleanValue"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"padding": {
						"bottom": "small"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"fitContent": false
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"classes": [
						"tab-panel-fixed-height"
					]
				}
			},
			{
				"operation": "merge",
				"name": "ActionHelpTabLabel",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(ActionHelpTabLabel_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Name",
				"values": {
					"loading": "$ProcessSchemaIsLoaded | crt.InvertBooleanValue"
				}
			},
			{
				"operation": "merge",
				"name": "Description",
				"values": {
					"loading": "$ProcessSchemaIsLoaded | crt.InvertBooleanValue"
				}
			},
			{
				"operation": "merge",
				"name": "Code",
				"values": {
					"loading": "$ProcessSchemaIsLoaded | crt.InvertBooleanValue"
				}
			},
			{
				"operation": "insert",
				"name": "SaveButtonWithMenu",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.SaveRecordRequest"
					},
					"color": "primary",
					"caption": "$Resources.Strings.SaveButton",
					"visible": "$ProcessSchemaIsNew | crt.InvertBooleanValue",
					"menuItems": [],
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SaveNewVersion_MenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SaveNewVersion_MenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"config": {
								"needSaveNewVersion": true
							}
						}
					}
				},
				"parentName": "SaveButtonWithMenu",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SaveCurrentVersion_MenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SaveCurrentVersion_MenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"config": {
								"needSaveNewVersion": false
							}
						}
					}
				},
				"parentName": "SaveButtonWithMenu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InplaceProcessDesignerContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"fitContent": false,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none"
				},
				"parentName": "ActionSchemaTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InplaceProcessSchemaDesigner",
				"values": {
					"type": "crt.InplaceProcessSchemaDesigner",
					"processSchemaUId": "$ProcessSchemaUId",
					"processName": "$PDS_Name",
					"processDescription": "$PDS_Description",
					"packageUId": "$PDS_PackageUId",
					"designerInstanceId": "$ProcessDesignerInstanceId",
					"schemaIsLoaded": "$ProcessSchemaIsLoaded",
					"schemaIsChanged": "$ProcessSchemaIsChanged",
					"schemaIsNew": "$ProcessSchemaIsNew"
				},
				"parentName": "InplaceProcessDesignerContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_6jrbk5e",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "ActionHelpTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_qlfx677",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_qlfx677_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_voep0bb",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_voep0bb_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_7bfpsnu",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_7bfpsnu_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_by0mwfa",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_by0mwfa_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Label_ce2tal6",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ce2tal6_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Label_caetpf9",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_caetpf9_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Label_1atiu69",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_1atiu69_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Label_5f2y6o4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5f2y6o4_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Label_byh99vr",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_byh99vr_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Label_hkv9ns6",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_hkv9ns6_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "Label_hjtpmn4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_hjtpmn4_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "Label_umbzf5r",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_umbzf5r_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_6jrbk5e",
				"propertyName": "items",
				"index": 11
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ProcessDesignerInstanceId": {},
					"ProcessSchemaUId": {},
					"ProcessSchemaIsLoaded": {},
					"ProcessSchemaIsChanged": {},
					"ProcessActionHasUnsavedData": {},
					"ProcessSchemaIsNew": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"PDS_Description"
				],
				"values": {
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});