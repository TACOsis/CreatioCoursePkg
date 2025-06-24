define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "CreateOrderButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CreateOrderButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"icon": "trolley-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateNewOrderFromLead",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "LeadId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Order",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Order_nctpkmz",
					"labelPosition": "auto",
					"control": "$PDS_Order_nctpkmz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerLeft",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_zbn39tz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zbn39tz_caption)#",
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
				"name": "OrderOwner",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(OrderOwner_label)#",
					"ariaLabel": "#ResourceString(OrderOwner_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_OrderOwner",
					"visible": false,
					"placeholder": ""
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerRight",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_Order_nctpkmz": {
						"modelConfig": {
							"path": "PDS.Order"
						}
					},
					"PDS_OrderOwner": {
						"modelConfig": {
							"path": "PDS.OrderOwner"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"OrderOwner": {
						"path": "Order.Owner",
						"type": "ForwardReference"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});