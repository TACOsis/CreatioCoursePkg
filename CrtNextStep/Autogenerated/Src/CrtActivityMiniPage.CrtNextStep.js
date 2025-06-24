define("CrtActivityMiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "insert",
				"name": "ContinueInEditPageButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContinueInEditPageButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": "$CardState | crt.IsEqual : 'edit'",
					"icon": "open-button-icon",
					"clicked": {
						"request": "crt.UpdateRecordRequest",
						"params": {
							"entityName": "Activity",
							"recordId": "$Parameter_2bbdba5",
							"replaceHistoryState": true
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
				"name": "DatesContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.StartDate",
					"labelPosition": "above",
					"control": "$StartDate"
				},
				"parentName": "DatesContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DueDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DueDate",
					"labelPosition": "above",
					"control": "$DueDate"
				},
				"parentName": "DatesContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AllowedResults",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.AllowedResults",
					"activityResultControl": "$Result",
					"allowedResults": "$AllowedResult",
					"activityCategory": "$ActivityCategory",
					"label": "$Resources.Strings.Result"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DetailedResult",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.DetailedResult",
					"labelPosition": "above",
					"control": "$DetailedResult"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Status",
					"labelPosition": "above",
					"control": "$Status",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "MainContainer",
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
					"DetailedResult": {
						"modelConfig": {
							"path": "ActivityDS.DetailedResult"
						}
					},
					"StartDate": {
						"modelConfig": {
							"path": "ActivityDS.StartDate"
						}
					},
					"DueDate": {
						"modelConfig": {
							"path": "ActivityDS.DueDate"
						}
					},
					"Result": {
						"modelConfig": {
							"path": "ActivityDS.Result"
						}
					},
					"AllowedResult": {
						"modelConfig": {
							"path": "ActivityDS.AllowedResult"
						}
					},
					"ActivityCategory": {
						"modelConfig": {
							"path": "ActivityDS.ActivityCategory"
						}
					},
					"Status": {
						"modelConfig": {
							"path": "ActivityDS.Status"
						}
					},
					"Parameter_2bbdba5": {
						"modelConfig": {
							"path": "ActivityDS.Id"
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
						"ActivityDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Activity"
							}
						}
					},
					"primaryDataSourceName": "ActivityDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});