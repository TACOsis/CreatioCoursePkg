define("LeadConverting_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					]
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
				"name": "BusinessCase",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_85poz8c",
					"labelPosition": "above",
					"control": "$StringAttribute_85poz8c",
					"visible": true,
					"placeholder": "#ResourceString(BusinessCase_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductSuggestions",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_f1zvxc4",
					"labelPosition": "above",
					"control": "$StringAttribute_f1zvxc4",
					"visible": true,
					"placeholder": "#ResourceString(ProductSuggestions_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Budget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(Budget_label)#",
					"labelPosition": "above",
					"control": "$NumberAttribute_z894l1r",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Budget_tooltip)#"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DecisionDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "#ResourceString(DecisionDate_label)#",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_2eks0zn",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(DecisionDate_tooltip)#"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Group",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_z6rv4nw",
					"labelPosition": "above",
					"control": "$LookupAttribute_z6rv4nw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OpportunityOwner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tbx95il",
					"labelPosition": "above",
					"control": "$LookupAttribute_tbx95il",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_hhgvdo1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hhgvdo1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OpportunityOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextMeeting",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.DateTimeAttribute_xuv4c0x",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_xuv4c0x",
					"pickerType": "datetime"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"NumberAttribute_z894l1r": {
					"modelConfig": {
						"path": "LeadDS.Budget"
					}
				},
				"DateTimeAttribute_2eks0zn": {
					"modelConfig": {
						"path": "LeadDS.DecisionDate"
					}
				},
				"StringAttribute_f1zvxc4": {
					"modelConfig": {
						"path": "LeadDS.ProductSuggestions"
					}
				},
				"LookupAttribute_z6rv4nw": {
					"modelConfig": {
						"path": "LeadDS.Group"
					}
				},
				"LookupAttribute_tbx95il": {
					"modelConfig": {
						"path": "LeadDS.SalesOwner"
					}
				},
				"StringAttribute_85poz8c": {
					"modelConfig": {
						"path": "LeadDS.BusinessCase"
					}
				},
				"DateTimeAttribute_xuv4c0x": {
					"modelConfig": {
						"path": "PageParameters.NextMeeting"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"LeadDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "Lead"
					}
				}
			},
			"primaryDataSourceName": "LeadDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});