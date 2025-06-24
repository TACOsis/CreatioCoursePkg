define("CustomIdpSettingsForm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "insert",
				"name": "SetIdentityStep_ExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 10,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SetIdentityStep_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#004fd6",
					"fullWidthHeader": true,
					"titleWidth": "50"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jsi3j81",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SetIdentityStep_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_j3owpcw",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_jsi3j81",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_6rzyf43",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SetIdentityStep_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegisterInIdentity_Label",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(RegisterInIdentity_Label_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "GridContainer_6rzyf43",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GetMetadata_Button",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(GetMetadata_Button_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.LoadSamlMetadataRequest"
					}
				},
				"parentName": "GridContainer_6rzyf43",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SamlEndpoints_ExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 10,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SamlEndpoints_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#004fd6",
					"fullWidthHeader": true,
					"titleWidth": "50"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_t5io4hu",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "SamlEndpoints_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_px65p0n",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_t5io4hu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_lt5xdnm",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "SamlEndpoints_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SetSamlParams_Label",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(SetSamlParams_Label_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PartnerIdentityName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$PartnerIdentityName",
					"label": "$Resources.Strings.PartnerIdentityName",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SingleSignOnServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$SingleSignOnServiceUrl",
					"label": "$Resources.Strings.SingleSignOnServiceUrl",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SingleLogoutServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$SingleLogoutServiceUrl",
					"label": "$Resources.Strings.SingleLogoutServiceUrl",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AdditionalParameters_ExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 10,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AdditionalParameters_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#004fd6",
					"fullWidthHeader": true,
					"titleWidth": 50
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_t31wem8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AdditionalParameters_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_gk9bjk6",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_t31wem8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hc7mq4f",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AdditionalParameters_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DisplayName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"control": "$DisplayName",
					"label": "$Resources.Strings.DisplayName",
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_hc7mq4f",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "IdentitySettingsDS.Id"
					}
				},
				"PartnerIdentityName": {
					"modelConfig": {
						"path": "IdentitySettingsDS.Name"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"DisplayName": {
					"modelConfig": {
						"path": "IdentitySettingsDS.DisplayName"
					}
				},
				"SingleLogoutServiceUrl": {
					"modelConfig": {
						"path": "IdentitySettingsDS.SingleLogoutServiceUrl"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"SingleSignOnServiceUrl": {
					"modelConfig": {
						"path": "IdentitySettingsDS.SingleSignOnServiceUrl"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"Type": {
					"modelConfig": {
						"path": "IdentitySettingsDS.Type"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"IdentitySettingsDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "SsoIdentityProvider"
					}
				}
			},
			"primaryDataSourceName": "IdentitySettingsDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});