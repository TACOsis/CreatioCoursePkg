define("BaseMiniPageTemplate", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Main",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"fitContent": false,
					"items": [],
					"color": "primary",
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap",
					"visible": true,
					"borderRadius": "medium",
					"gap": "0px",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"layoutConfig": {
						"width": 420
					},
					"styles": {
						"border": "none"
					}
				},
				"index": 0
			},
			{
				"operation": "move",
				"name": "MainHeader",
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"color": "primary",
					"borderRadius": "none",
					"justifyContent": "space-between",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "nowrap",
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "insert",
				"name": "TitleContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "row",
					"justifyContent": "start",
					"alignItems": "center"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PageTitle",
				"values": {
					"type": "crt.Label",
					"id": "ModalPageTitle",
					"caption": "$HeaderCaption",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "ActionButtonsContainer",
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "insert",
				"name": "MainContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"visible": true,
					"stretch": true,
					"fitContent": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FooterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"justifyContent": "end",
					"alignItems": "stretch",
					"wrap": "wrap",
					"padding": {
						"top": "12px",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"color": "default",
					"iconPosition": "only-icon",
					"icon": "close-button-icon",
					"visible": true,
					"size": "medium",
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContinueInOtherPageButton",
				"values": {
					"type": "crt.Button",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": false,
					"icon": "open-button-icon",
					"clicked": {
						"request": "crt.ContinueInOtherPageRequest"
					},
					"caption": "#ResourceString(ContinueInOtherPageButton_caption)#"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "move",
				"name": "SaveButton",
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"color": "primary",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default",
					"visible": true
				}
			},
			{
				"operation": "move",
				"name": "CancelButton",
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "ActionContainer",
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer",
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"HeaderCaption": {
					value: "#ResourceString(DefaultHeaderCaption)#"
				},
                "Id": {
					"modelConfig": {
						"path": "#PrimaryDataSourceName()#.Id"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
