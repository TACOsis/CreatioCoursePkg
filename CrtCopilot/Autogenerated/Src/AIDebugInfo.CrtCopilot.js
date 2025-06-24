define("AIDebugInfo", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "large",
						"left": "large"
					}
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"clicked": {
						"request": "crt.ClosePageRequest",
						"params": {
							"trackUnsavedData": true
						}
					},
					"caption": "#ResourceString(CloseButton)#"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"padding": {
						"top": "none",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "FooterContainer"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "CopyAllButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CopyAllButton)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "copy-icon",
					"clicked": {
						"request": "crt.CopyClipboardRequest",
						"params": {
							"value": "$PageParameters_PlainInfo"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DebugInfo_RichTextEditor",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					},
					"type": "crt.RichTextEditor",
					"needHandleSave": false,
					"disableSelectionOptions": true,
					"label": "$Resources.Strings.PageParameters_DebugInfo",
					"labelPosition": "hidden",
					"control": "$PageParameters_DebugInfo",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_DebugInfo": {
						"modelConfig": {
							"path": "PageParameters.DebugInfo"
						},
						"change": {}
					},
					"PageParameters_PlainInfo": {
						"modelConfig": {
							"path": "PageParameters.PlainInfo"
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
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});