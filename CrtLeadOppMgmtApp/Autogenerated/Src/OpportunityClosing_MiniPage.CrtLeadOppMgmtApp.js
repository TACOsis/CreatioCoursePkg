define("OpportunityClosing_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"layoutConfig": {}
				}
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Title_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CloseReason",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(CloseReason_label)#",
					"labelPosition": "above",
					"control": "$LookupAttribute_43erx7q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Winner",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_jksv487",
					"labelPosition": "above",
					"control": "$LookupAttribute_jksv487",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "FlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ListAction_qdgu52h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Winner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ClosingDetails",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_260cfpl",
					"labelPosition": "above",
					"control": "$StringAttribute_260cfpl",
					"visible": true,
					"placeholder": "#ResourceString(ClosingDetails_placeholder)#",
					"tooltip": ""
				},
				"parentName": "FlexContainer",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_43erx7q": {
					"modelConfig": {
						"path": "OpportunityDS.CloseReason"
					}
				},
				"StringAttribute_260cfpl": {
					"modelConfig": {
						"path": "OpportunityDS.ClosingDetails"
					}
				},
				"LookupAttribute_jksv487": {
					"modelConfig": {
						"path": "OpportunityDS.Winner"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"OpportunityDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "Opportunity"
					}
				}
			},
			"primaryDataSourceName": "OpportunityDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});