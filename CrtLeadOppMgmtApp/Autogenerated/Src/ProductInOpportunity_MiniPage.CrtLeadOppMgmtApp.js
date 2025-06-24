define("ProductInOpportunity_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Product",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OpportunityProductInterestDS_Product_7r9p6kj",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_Product_7r9p6kj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_dsry41e",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dsry41e_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Product",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OpportunityProductInterestDS_Price_2tzt8r6",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_Price_2tzt8r6"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Quantity",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OpportunityProductInterestDS_Quantity_5iv52va",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_Quantity_5iv52va"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.OpportunityProductInterestDS_Amount_184q5ps",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_Amount_184q5ps"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OfferDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.OpportunityProductInterestDS_OfferDate_yh29cio",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_OfferDate_yh29cio"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OfferResult",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.OpportunityProductInterestDS_OfferResult_mnx7jij",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_OfferResult_mnx7jij",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.OpportunityProductInterestDS_Comment_6h3nl7k",
					"labelPosition": "above",
					"control": "$OpportunityProductInterestDS_Comment_6h3nl7k",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"OpportunityProductInterestDS_Product_7r9p6kj": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.Product"
						}
					},
					"OpportunityProductInterestDS_Price_2tzt8r6": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.Price"
						}
					},
					"OpportunityProductInterestDS_Quantity_5iv52va": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.Quantity"
						}
					},
					"OpportunityProductInterestDS_Amount_184q5ps": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.Amount"
						}
					},
					"OpportunityProductInterestDS_OfferDate_yh29cio": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.OfferDate"
						}
					},
					"OpportunityProductInterestDS_OfferResult_mnx7jij": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.OfferResult"
						}
					},
					"OpportunityProductInterestDS_Comment_6h3nl7k": {
						"modelConfig": {
							"path": "OpportunityProductInterestDS.Comment"
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
						"OpportunityProductInterestDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "OpportunityProductInterest"
							}
						}
					},
					"primaryDataSourceName": "OpportunityProductInterestDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});