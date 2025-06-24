define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TimelineTile_SysFile",
				"values": {
					"linkedColumn": "Contact"
				}
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Order",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Order",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Amount",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DueDate",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Invoice",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Contact",
								"columnLayout": {
									"column": 4,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "State",
								"columnLayout": {
									"column": 7,
									"row": 1,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 4,
									"row": 2,
									"colSpan": 3,
									"rowSpan": 1
								}
							}
						],
						"schemaName": "Contract",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Document",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "OrderExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OrderExpansionPanel_title)#",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
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
				"parentName": "OrderExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderToolsFlexContainer",
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
				"parentName": "OrderToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrderAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Order",
							"defaultValues": [
								{
									"attributeName": "Contact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrderToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrderRefreshButton_caption)#",
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
							"dataSourceName": "OrderListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrderToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrderSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrderSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OrderToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OrderExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OrderExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OrderList"
						}
					},
					"visible": true
				},
				"parentName": "OrderSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OrderImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Order"
						}
					},
					"visible": true
				},
				"parentName": "OrderSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrderSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(OrderSearchFilter_placeholder)#",
					"targetAttributes": [
						"OrderList"
					],
					"iconOnly": true
				},
				"parentName": "OrderToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OrderListContainer",
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
				"parentName": "OrderExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$OrderList",
					"primaryColumnName": "OrderListDS_Id",
					"columns": [
						{
							"id": "db250967-7ac3-9d36-666f-9ffb6a3f03c3",
							"code": "OrderListDS_Number",
							"path": "Number",
							"caption": "#ResourceString(OrderListDS_Number)#",
							"dataValueType": 28
						},
						{
							"id": "e25ac407-2c4e-1629-720b-572fd3a22bb8",
							"code": "OrderListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(OrderListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "OrderStatus"
						},
						{
							"id": "00915502-66a9-ad8a-f85d-daeb10cf31bb",
							"code": "OrderListDS_PrimaryAmount",
							"path": "PrimaryAmount",
							"caption": "#ResourceString(OrderListDS_PrimaryAmount)#",
							"dataValueType": 6
						},
						{
							"id": "2842fdac-04dc-2351-aee2-187796166fa0",
							"code": "OrderListDS_PaymentType",
							"path": "PaymentType",
							"caption": "#ResourceString(OrderListDS_PaymentType)#",
							"dataValueType": 10,
							"referenceSchemaName": "PaymentType"
						},
						{
							"id": "aa03ec58-7d5b-e8c8-7588-b0fc16e73e68",
							"code": "OrderListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OrderListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "0f788a16-c0d6-88fe-3ab4-a9e733ccef6a",
							"code": "OrderListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(OrderListDS_Date)#",
							"dataValueType": 7
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
				"parentName": "OrderListContainer",
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
					"OrderList": {
						"isCollection": true,
						"modelConfig": {
							"path": "OrderListDS",
							"filterAttributes": [
								{
									"name": "OrderList_PredefinedFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"OrderListDS_Number": {
									"modelConfig": {
										"path": "OrderListDS.Number"
									}
								},
								"OrderListDS_Status": {
									"modelConfig": {
										"path": "OrderListDS.Status"
									}
								},
								"OrderListDS_PrimaryAmount": {
									"modelConfig": {
										"path": "OrderListDS.PrimaryAmount"
									}
								},
								"OrderListDS_PaymentType": {
									"modelConfig": {
										"path": "OrderListDS.PaymentType"
									}
								},
								"OrderListDS_Owner": {
									"modelConfig": {
										"path": "OrderListDS.Owner"
									}
								},
								"OrderListDS_Date": {
									"modelConfig": {
										"path": "OrderListDS.Date"
									}
								},
								"OrderListDS_Id": {
									"modelConfig": {
										"path": "OrderListDS.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"OrderListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Status": {
									"path": "Status"
								},
								"PrimaryAmount": {
									"path": "PrimaryAmount"
								},
								"PaymentType": {
									"path": "PaymentType"
								},
								"Owner": {
									"path": "Owner"
								},
								"Date": {
									"path": "Date"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"OrderListDS": [
						{
							"attributePath": "Contact",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});