define("ProductsFeature_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "insert",
				"name": "MainFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Product",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SpecificationInProductDS_Product_37x3qye",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_Product_37x3qye",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Specification",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SpecificationInProductDS_Specification_aku184y",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_Specification_aku184y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "SelectionWindow"
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_t3avhei",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t3avhei_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Specification",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SpecificationInProductDS_SpecificationType",
					"ariaLabel": "#ResourceString(Type_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$SpecificationInProductDS_SpecificationType",
					"visible": false,
					"placeholder": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "StringValue",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SpecificationInProductDS_StringValue_31ohy16",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_StringValue_31ohy16",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "BooleanValue",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.SpecificationInProductDS_BooleanValue_3xctjz7",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_BooleanValue_3xctjz7",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FloatValue",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SpecificationInProductDS_FloatValue_r1sgr18",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_FloatValue_r1sgr18",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ListItemValue",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SpecificationInProductDS_ListItemValue_nyknje4",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_ListItemValue_nyknje4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "IntValue",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SpecificationInProductDS_IntValue_sbendcm",
					"labelPosition": "above",
					"control": "$SpecificationInProductDS_IntValue_sbendcm",
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainFlexContainer",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"SpecificationInProductDS_Product_37x3qye": {
						"modelConfig": {
							"path": "SpecificationInProductDS.Product"
						}
					},
					"SpecificationInProductDS_Specification_aku184y": {
						"modelConfig": {
							"path": "SpecificationInProductDS.Specification"
						}
					},
					"SpecificationInProductDS_StringValue_31ohy16": {
						"modelConfig": {
							"path": "SpecificationInProductDS.StringValue"
						}
					},
					"SpecificationInProductDS_BooleanValue_3xctjz7": {
						"modelConfig": {
							"path": "SpecificationInProductDS.BooleanValue"
						}
					},
					"SpecificationInProductDS_FloatValue_r1sgr18": {
						"modelConfig": {
							"path": "SpecificationInProductDS.FloatValue"
						}
					},
					"SpecificationInProductDS_ListItemValue_nyknje4": {
						"modelConfig": {
							"path": "SpecificationInProductDS.ListItemValue"
						}
					},
					"SpecificationInProductDS_IntValue_sbendcm": {
						"modelConfig": {
							"path": "SpecificationInProductDS.IntValue"
						}
					},
					"SpecificationInProductDS_SpecificationType": {
						"modelConfig": {
							"path": "SpecificationInProductDS.SpecificationType"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"SpecificationInProductDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "SpecificationInProduct",
								"attributes": {
									"SpecificationType": {
										"path": "Specification.Type",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "SpecificationInProductDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});