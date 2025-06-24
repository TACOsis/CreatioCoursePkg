define("SupplyPayment_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SupplyPaymentElementDS_Name_uye1n40",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_Name_uye1n40"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PreviousElement",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_PreviousElement_vf0altk",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_PreviousElement_vf0altk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_Type_m7cn491",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_Type_m7cn491",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Delay",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_Delay_o2rvk2d",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_Delay_o2rvk2d"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DatePlan",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.SupplyPaymentElementDS_DatePlan_qw7px4w",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_DatePlan_qw7px4w"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "DateFact",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.SupplyPaymentElementDS_DateFact_9msmfuz",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_DateFact_9msmfuz"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Percentage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_Percentage_xeb8o0d",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_Percentage_xeb8o0d"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "State",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_State_n36n65h",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_State_n36n65h",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Currency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_OrderCurrency",
					"ariaLabel": "#ResourceString(Currency_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$SupplyPaymentElementDS_OrderCurrency"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "CurrencyRate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_OrderCurrencyRate",
					"control": "$SupplyPaymentElementDS_OrderCurrencyRate",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "AmountPlan",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_AmountPlan_fyn8d86",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_AmountPlan_fyn8d86"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "PrimaryAmountPlan",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_PrimaryAmountPlan_1f8uohq",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_PrimaryAmountPlan_1f8uohq"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "DelayType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_DelayType_mh0o4mk",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_DelayType_mh0o4mk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "Invoice",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SupplyPaymentElementDS_Invoice_hro7kc5",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_Invoice_hro7kc5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "addRecord_rsypmcl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rsypmcl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Invoice",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountFact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_AmountFact_6672t4c",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_AmountFact_6672t4c"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "PrimaryAmountFact",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.SupplyPaymentElementDS_PrimaryAmountFact_4elny5x",
					"labelPosition": "auto",
					"control": "$SupplyPaymentElementDS_PrimaryAmountFact_4elny5x"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 15
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"SupplyPaymentElementDS_Name_uye1n40": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.Name"
						}
					},
					"SupplyPaymentElementDS_Type_m7cn491": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.Type"
						}
					},
					"SupplyPaymentElementDS_DatePlan_qw7px4w": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.DatePlan"
						}
					},
					"SupplyPaymentElementDS_Percentage_xeb8o0d": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.Percentage"
						}
					},
					"SupplyPaymentElementDS_OrderCurrency": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.OrderCurrency"
						}
					},
					"SupplyPaymentElementDS_AmountPlan_fyn8d86": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.AmountPlan"
						}
					},
					"SupplyPaymentElementDS_DelayType_mh0o4mk": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.DelayType"
						}
					},
					"SupplyPaymentElementDS_AmountFact_6672t4c": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.AmountFact"
						}
					},
					"SupplyPaymentElementDS_PreviousElement_vf0altk": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.PreviousElement"
						}
					},
					"SupplyPaymentElementDS_Delay_o2rvk2d": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.Delay"
						}
					},
					"SupplyPaymentElementDS_DateFact_9msmfuz": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.DateFact"
						}
					},
					"SupplyPaymentElementDS_State_n36n65h": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.State"
						}
					},
					"SupplyPaymentElementDS_OrderCurrencyRate": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.OrderCurrencyRate"
						}
					},
					"SupplyPaymentElementDS_PrimaryAmountPlan_1f8uohq": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.PrimaryAmountPlan"
						}
					},
					"SupplyPaymentElementDS_Invoice_hro7kc5": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.Invoice"
						}
					},
					"SupplyPaymentElementDS_PrimaryAmountFact_4elny5x": {
						"modelConfig": {
							"path": "SupplyPaymentElementDS.PrimaryAmountFact"
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
						"SupplyPaymentElementDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "SupplyPaymentElement",
								"attributes": {
									"OrderCurrency": {
										"path": "Order.Currency",
										"type": "ForwardReference"
									},
									"OrderCurrencyRate": {
										"path": "Order.CurrencyRate",
										"type": "ForwardReference"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "SupplyPaymentElementDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});