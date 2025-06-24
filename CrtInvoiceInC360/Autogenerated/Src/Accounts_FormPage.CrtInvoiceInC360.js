define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "InvoiceExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(InvoiceExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "SalesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoiceToolsContainer",
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
				"parentName": "InvoiceExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoiceToolsFlexContainer",
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
				"parentName": "InvoiceToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoiceAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoiceAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Invoice",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoiceToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoiceRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoiceRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "InvoiceListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoiceToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoiceSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoiceSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "InvoiceToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "InvoiceExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoiceExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InvoiceList"
						}
					},
					"visible": true
				},
				"parentName": "InvoiceSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoiceImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoiceImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Invoice"
						}
					},
					"visible": true
				},
				"parentName": "InvoiceSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoiceSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(InvoiceSearchFilter_placeholder)#",
					"targetAttributes": [
						"InvoiceList"
					],
					"iconOnly": true
				},
				"parentName": "InvoiceToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "InvoiceListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
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
					}
				},
				"parentName": "InvoiceExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoiceList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$InvoiceList",
					"primaryColumnName": "InvoiceListDS_Id",
					"columns": [
						{
							"id": "29c60e9f-31cf-114f-800f-c5e06bad9f73",
							"code": "InvoiceListDS_Number",
							"path": "Number",
							"caption": "#ResourceString(InvoiceListDS_Number)#",
							"dataValueType": 28
						},
						{
							"id": "47fe3d6c-c935-4fe7-7ca4-0fac8c34cb19",
							"code": "InvoiceListDS_PaymentStatus",
							"path": "PaymentStatus",
							"caption": "#ResourceString(InvoiceListDS_PaymentStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "InvoicePaymentStatus"
						},
						{
							"id": "ff19e242-fd04-acc5-1936-fc3d909d3ccf",
							"code": "InvoiceListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(InvoiceListDS_Amount)#",
							"dataValueType": 6
						},
						{
							"id": "88ad9575-2174-42f7-40dd-8fdbe0bdf54c",
							"code": "InvoiceListDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(InvoiceListDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency"
						},
						{
							"id": "09825a81-680f-1b95-26c4-6a463becf787",
							"code": "InvoiceListDS_Order",
							"path": "Order",
							"caption": "#ResourceString(InvoiceListDS_Order)#",
							"dataValueType": 10,
							"referenceSchemaName": "Order"
						},
						{
							"id": "26b38691-e158-5480-5da7-a858ee81df2a",
							"code": "InvoiceListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(InvoiceListDS_StartDate)#",
							"dataValueType": 8
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "InvoiceListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"InvoiceList": {
					"isCollection": true,
					"modelConfig": {
						"path": "InvoiceListDS",
						"filterAttributes": [
							{
								"name": "InvoiceList_PredefinedFilter",
								"loadOnChange": true
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"InvoiceListDS_Number": {
								"modelConfig": {
									"path": "InvoiceListDS.Number"
								}
							},
							"InvoiceListDS_PaymentStatus": {
								"modelConfig": {
									"path": "InvoiceListDS.PaymentStatus"
								}
							},
							"InvoiceListDS_Amount": {
								"modelConfig": {
									"path": "InvoiceListDS.Amount"
								}
							},
							"InvoiceListDS_Currency": {
								"modelConfig": {
									"path": "InvoiceListDS.Currency"
								}
							},
							"InvoiceListDS_Order": {
								"modelConfig": {
									"path": "InvoiceListDS.Order"
								}
							},
							"InvoiceListDS_StartDate": {
								"modelConfig": {
									"path": "InvoiceListDS.StartDate"
								}
							},
							"InvoiceListDS_Id": {
								"modelConfig": {
									"path": "InvoiceListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"InvoiceListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Invoice",
						"attributes": {
							"Number": {
								"path": "Number"
							},
							"PaymentStatus": {
								"path": "PaymentStatus"
							},
							"Amount": {
								"path": "Amount"
							},
							"Currency": {
								"path": "Currency"
							},
							"Order": {
								"path": "Order"
							},
							"StartDate": {
								"path": "StartDate"
							}
						}
					}
				}
			},
			"dependencies": {
				"InvoiceListDS": [
					{
						"attributePath": "Account",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});