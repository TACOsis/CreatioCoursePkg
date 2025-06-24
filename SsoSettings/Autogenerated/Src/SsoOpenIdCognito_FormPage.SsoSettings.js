define("SsoOpenIdCognito_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "SetIOpenIDStep_ExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SetIOpenIDStep_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "small",
						"bottom": "none",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true,
					"stretch": false
				},
				"parentName": "MainContainerFlex",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_1cyidtl",
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
				"parentName": "SetIOpenIDStep_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_huh3sra",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_1cyidtl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_hwpnqpx",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": true,
					"fitContent": true
				},
				"parentName": "SetIOpenIDStep_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_zw8c4k1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_zw8c4k1_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_hwpnqpx",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpenIDEndpoints_ExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OpenIDEndpoints_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": "50",
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true,
					"stretch": false
				},
				"parentName": "MainContainerFlex",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_padohmm",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "OpenIDEndpoints_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ki4wjpc",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_padohmm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_vt3h3iq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": true,
					"fitContent": true
				},
				"parentName": "OpenIDEndpoints_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_af69la3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_af69la3_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_rdplwi2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ClientID",
					"labelPosition": "auto",
					"control": "$ClientID",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_zr4ae74",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ClientSecret",
					"labelPosition": "auto",
					"control": "$ClientSecret"
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Url",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PartnerIdentityName",
					"labelPosition": "auto",
					"control": "$PartnerIdentityName",
					"visible": true,
					"placeholder": "#ResourceString(Input_74rw7jr_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DiscoveryUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DiscoveryUrl",
					"labelPosition": "auto",
					"control": "$DiscoveryUrl",
					"visible": true,
					"placeholder": "#ResourceString(Input_45yctgp_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EndSessionEndpointUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 12,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.EndSessionEndpointUrl",
					"labelPosition": "auto",
					"control": "$EndSessionEndpointUrl",
					"visible": true,
					"placeholder": "#ResourceString(Input_vs58l4j_placeholder)#",
					"tooltip": ""
				},
				"parentName": "GridContainer_vt3h3iq",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AdditionalParameters_ExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AdditionalParameters_ExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": true,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "large",
						"left": "medium",
						"right": "medium"
					},
					"fitContent": true,
					"visible": true,
					"stretch": false
				},
				"parentName": "MainContainerFlex",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_h7kzf4s",
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
				"name": "FlexContainer_rcz486r",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_h7kzf4s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_kklncaj",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"stretch": true,
					"fitContent": true
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
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DisplayName",
					"labelPosition": "auto",
					"control": "$DisplayName"
				},
				"parentName": "GridContainer_kklncaj",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.Id"
					}
				},
				"ClientID": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.ClientID"
					}
				},
				"ClientSecret": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.ClientSecret"
					}
				},
				"Code": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.Code"
					}
				},
				"PartnerIdentityName": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.Url"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"DisplayName": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.Name"
					}
				},
				"DiscoveryUrl": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.DiscoveryUrl"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"EndSessionEndpointUrl": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.EndSessionEndpointUrl"
					},
					"validators": {
						"IsUrlValidator": {
							"type": "crt.StringUrlValidator"
						}
					}
				},
				"Type": {
					"modelConfig": {
						"path": "SsoOpenIdProviderDS.SsoSettingsTemplate"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"SsoOpenIdProviderDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "SsoOpenIdProvider"
					}
				}
			},
			"primaryDataSourceName": "SsoOpenIdProviderDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
