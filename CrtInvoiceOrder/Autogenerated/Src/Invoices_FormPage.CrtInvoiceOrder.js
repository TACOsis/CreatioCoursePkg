define("Invoices_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Order",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_yh1hshw",
					"labelPosition": "above",
					"control": "$LookupAttribute_yh1hshw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "addRecord_rsjnj4q",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rsjnj4q_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Order",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Contract",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Contract_3bgwtt7",
					"labelPosition": "above",
					"control": "$PDS_Contract_3bgwtt7",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "addRecord_4aew626",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4aew626_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Contract",
				"propertyName": "listActions",
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
					"LookupAttribute_yh1hshw": {
						"modelConfig": {
							"path": "PDS.Order"
						}
					},
					"PDS_Contract_3bgwtt7": {
						"modelConfig": {
							"path": "PDS.Contract"
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