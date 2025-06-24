define("Opportunities_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateNewOrderFromOpportunity",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "CurrentOpportunity"
						}
					},
					"clickMode": "default",
					"icon": "trolley-icon",
					"layoutConfig": {}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OrdersExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OrdersExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OrdersToolsContainer",
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
				"parentName": "OrdersExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersToolsFlexContainer",
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
				"parentName": "OrdersToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrdersAddButton_caption)#",
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
									"attributeName": "Account",
									"value": "$Parameter_q8l08xk"
								},
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrdersToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrdersRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "OrdersListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrdersToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrdersSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrdersSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OrdersToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OrdersExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OrdersExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OrdersList"
						}
					},
					"visible": true
				},
				"parentName": "OrdersSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OrdersImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Order"
						}
					}
				},
				"parentName": "OrdersSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrdersSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(OrdersSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_h0s6i43"
					]
				},
				"parentName": "OrdersToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OrdersQuickFilterFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"padding": {
						"left": "medium"
					},
					"gap": "none"
				},
				"parentName": "OrdersToolsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilterShowAllOrders",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterShowAllOrders_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": false,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterShowAllOrders_GridDetail_h0s6i43",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_h0s6i43",
													"customFilter": null,
													"dependencyFilters": [
														{
															"attributePath": "Opportunity",
															"attributeName": "Id",
															"relationPath": "PDS.Id"
														}
													]
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilterShowAllOrders_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": false,
													"icon": "settings-button-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilterShowAllOrders_Value",
							"Id"
						]
					}
				},
				"parentName": "OrdersQuickFilterFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "OrdersExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrdersList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"items": "$GridDetail_h0s6i43",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "OrdersListDS_Id",
					"columns": [
						{
							"id": "222c130d-3dbc-8343-0228-14ed56f2d81f",
							"code": "OrdersListDS_Number",
							"caption": "#ResourceString(OrdersListDS_Number)#",
							"dataValueType": 28,
							"width": 132
						},
						{
							"id": "1d91695d-f2e9-36f4-6664-f3eeef1aad04",
							"code": "OrdersListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(OrdersListDS_Date)#",
							"dataValueType": 7,
							"width": 156
						},
						{
							"id": "347467fb-50af-1396-d692-4ebd2b9b35c0",
							"code": "OrdersListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(OrdersListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "OrderStatus",
							"width": 190
						},
						{
							"id": "3ed3a634-25bd-c5a6-cdaf-d75f9d2822df",
							"code": "OrdersListDS_Account",
							"path": "Account",
							"caption": "#ResourceString(OrdersListDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 180
						},
						{
							"id": "ac6fc92b-10be-ab57-eeb9-a20c662556e2",
							"code": "OrdersListDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(OrdersListDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 186
						},
						{
							"id": "e7a1584b-7d0a-55d4-cc65-faba3ff51282",
							"code": "OrdersListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(OrdersListDS_Amount)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "fe06bea9-64b5-9a67-9908-cd4078305d23",
							"code": "OrdersListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OrdersListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 154
						},
						{
							"id": "1a9d5ca1-1599-ded7-93e5-75b5c9560c29",
							"code": "OrdersListDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(OrdersListDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 114
						}
					]
				},
				"parentName": "OrdersListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(InvoicesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "InvoicesToolsContainer",
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
				"parentName": "InvoicesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesToolsFlexContainer",
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
				"parentName": "InvoicesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesAddButton_caption)#",
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
									"value": "$Parameter_q8l08xk"
								},
								{
									"attributeName": "Contact",
									"value": "$Parameter_fpx7x9n"
								},
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "DataGrid_o1m7u6hDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoicesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "InvoicesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoicesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InvoicesList",
							"filters": "$DataGrid_o1m7u6h | crt.ToCollectionFilters : 'DataGrid_o1m7u6h' : $DataGrid_o1m7u6h_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "InvoicesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoicesImportDataButton_caption)#",
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
				"parentName": "InvoicesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoicesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(InvoicesSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"DataGrid_o1m7u6h"
					]
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "InvoicesQuickFilterFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"padding": {
						"left": "medium"
					},
					"gap": "none"
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilterShowAllInvoices",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterShowAllInvoices_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": false,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterShowAllInvoices_DataGrid_o1m7u6h",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "DataGrid_o1m7u6h",
													"customFilter": null,
													"dependencyFilters": [
														{
															"attributePath": "Opportunity",
															"attributeName": "Id",
															"relationPath": "PDS.Id"
														}
													]
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilterShowAllInvoices_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": false,
													"icon": "settings-button-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilterShowAllInvoices_Value",
							"Id"
						]
					},
					"visible": true
				},
				"parentName": "InvoicesQuickFilterFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "InvoicesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"items": "$DataGrid_o1m7u6h",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_o1m7u6hDS_Id",
					"columns": [
						{
							"id": "34d0e13f-4f13-9080-c4af-ef117abef8ed",
							"code": "DataGrid_o1m7u6hDS_Number",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_Number)#",
							"dataValueType": 28
						},
						{
							"id": "544612c9-ff86-7a71-e5ab-14e2b3c377ec",
							"code": "DataGrid_o1m7u6hDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 161
						},
						{
							"id": "a5f3dc6a-8875-d1fa-30c5-b4a8e19c8bc1",
							"code": "DataGrid_o1m7u6hDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_Amount)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "0904f697-df22-ac63-a551-1979410ab968",
							"code": "DataGrid_o1m7u6hDS_PaymentStatus",
							"path": "PaymentStatus",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_PaymentStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "InvoicePaymentStatus"
						},
						{
							"id": "9c2e59ff-04f6-9188-bdea-bb73ef37972d",
							"code": "DataGrid_o1m7u6hDS_Opportunity",
							"path": "Opportunity",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_Opportunity)#",
							"dataValueType": 10,
							"referenceSchemaName": "Opportunity"
						},
						{
							"id": "2ca234f9-9238-c7bd-5500-b6a81d320562",
							"code": "DataGrid_o1m7u6hDS_Order",
							"path": "Order",
							"caption": "#ResourceString(DataGrid_o1m7u6hDS_Order)#",
							"dataValueType": 10,
							"referenceSchemaName": "Order"
						}
					],
					"activeRow": "$DataGrid_o1m7u6h_ActiveRow",
					"selectionState": "$DataGrid_o1m7u6h_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_o1m7u6h_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "InvoicesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_o1m7u6h_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataGrid_o1m7u6h",
							"filters": "$DataGrid_o1m7u6h | crt.ToCollectionFilters : 'DataGrid_o1m7u6h' : $DataGrid_o1m7u6h_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_o1m7u6h_SelectionState"
						}
					}
				},
				"parentName": "InvoicesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_o1m7u6h_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_o1m7u6hDS",
							"filters": "$DataGrid_o1m7u6h | crt.ToCollectionFilters : 'DataGrid_o1m7u6h' : $DataGrid_o1m7u6h_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_o1m7u6h_SelectionState"
						}
					}
				},
				"parentName": "InvoicesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(DocumentsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DocumentsToolsContainer",
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
				"parentName": "DocumentsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsToolsFlexContainer",
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
				"parentName": "DocumentsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Document",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Parameter_q8l08xk"
								},
								{
									"attributeName": "Contact",
									"value": "$Parameter_fpx7x9n"
								},
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "DocumentsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DocumentsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DocumentsList",
							"filters": "$GridDetail_zuuqj1c | crt.ToCollectionFilters : 'GridDetail_zuuqj1c' : $GridDetail_zuuqj1c_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "DocumentsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Document"
						}
					},
					"visible": true
				},
				"parentName": "DocumentsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(DocumentsSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_zuuqj1c"
					]
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DocumentsQuickFilterFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilterShowAllDocuments",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterShowAllDocuments_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": false,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterShowAllDocuments_GridDetail_zuuqj1c",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_zuuqj1c",
													"customFilter": null,
													"dependencyFilters": [
														{
															"attributePath": "Opportunity",
															"attributeName": "Id",
															"relationPath": "PDS.Id"
														}
													]
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilterShowAllDocuments_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": false,
													"icon": "settings-button-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilterShowAllDocuments_Value",
							"Id"
						]
					},
					"visible": true
				},
				"parentName": "DocumentsQuickFilterFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "DocumentsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"items": "$GridDetail_zuuqj1c",
					"activeRow": "$GridDetail_zuuqj1c_ActiveRow",
					"selectionState": "$GridDetail_zuuqj1c_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_zuuqj1c_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DocumentsListDS_Id",
					"columns": [
						{
							"id": "64043944-6c4b-1eb5-a4f4-bdbfcda7d594",
							"code": "DocumentsListDS_Number",
							"caption": "#ResourceString(DocumentsListDS_Number)#",
							"dataValueType": 28,
							"width": 183
						},
						{
							"id": "dd6e8cb0-7c63-5646-7d36-519df11e63e0",
							"code": "DocumentsListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(DocumentsListDS_Date)#",
							"dataValueType": 8,
							"width": 137
						},
						{
							"id": "e753d5c3-d4c7-d436-cbf9-9efda2d82468",
							"code": "DocumentsListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(DocumentsListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentType",
							"width": 182
						},
						{
							"id": "129c97ad-eed2-c200-aaa6-2cd885112cb1",
							"code": "DocumentsListDS_Account",
							"path": "Account",
							"caption": "#ResourceString(DocumentsListDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						},
						{
							"id": "6999298d-2df4-74e7-2a16-20e3013b0b6a",
							"code": "DocumentsListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(DocumentsListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "3f3cbdf2-b3af-60d4-269d-26c4c36f0013",
							"code": "DocumentsListDS_State",
							"path": "State",
							"caption": "#ResourceString(DocumentsListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentState",
							"width": 166
						},
						{
							"id": "bbfadde6-7b07-6461-d34b-25b7ed151aba",
							"code": "DocumentsListDS_Opportunity",
							"path": "Opportunity",
							"caption": "#ResourceString(DocumentsListDS_Opportunity)#",
							"dataValueType": 10,
							"referenceSchemaName": "Opportunity"
						}
					]
				},
				"parentName": "DocumentsListContainer",
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
					"GridDetail_h0s6i43": {
						"isCollection": true,
						"modelConfig": {
							"path": "OrdersListDS",
							"filterAttributes": [
								{
									"name": "QuickFilterShowAllOrders_GridDetail_h0s6i43",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Date"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"OrdersListDS_Number": {
									"modelConfig": {
										"path": "OrdersListDS.Number"
									}
								},
								"OrdersListDS_Date": {
									"modelConfig": {
										"path": "OrdersListDS.Date"
									}
								},
								"OrdersListDS_Status": {
									"modelConfig": {
										"path": "OrdersListDS.Status"
									}
								},
								"OrdersListDS_Account": {
									"modelConfig": {
										"path": "OrdersListDS.Account"
									}
								},
								"OrdersListDS_Contact": {
									"modelConfig": {
										"path": "OrdersListDS.Contact"
									}
								},
								"OrdersListDS_Amount": {
									"modelConfig": {
										"path": "OrdersListDS.Amount"
									}
								},
								"OrdersListDS_Owner": {
									"modelConfig": {
										"path": "OrdersListDS.Owner"
									}
								},
								"OrdersListDS_Currency": {
									"modelConfig": {
										"path": "OrdersListDS.Currency"
									}
								},
								"OrdersListDS_Id": {
									"modelConfig": {
										"path": "OrdersListDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_o1m7u6h": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_o1m7u6hDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_o1m7u6h_PredefinedFilter"
								},
								{
									"name": "QuickFilterShowAllInvoices_DataGrid_o1m7u6h",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_o1m7u6hDS_Number": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Number"
									}
								},
								"DataGrid_o1m7u6hDS_Currency": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Currency"
									}
								},
								"DataGrid_o1m7u6hDS_Amount": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Amount"
									}
								},
								"DataGrid_o1m7u6hDS_PaymentStatus": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.PaymentStatus"
									}
								},
								"DataGrid_o1m7u6hDS_Opportunity": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Opportunity"
									}
								},
								"DataGrid_o1m7u6hDS_Order": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Order"
									}
								},
								"DataGrid_o1m7u6hDS_Id": {
									"modelConfig": {
										"path": "DataGrid_o1m7u6hDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_o1m7u6h_PredefinedFilter": {
						"value": null
					},
					"GridDetail_zuuqj1c": {
						"isCollection": true,
						"modelConfig": {
							"path": "DocumentsListDS",
							"filterAttributes": [
								{
									"name": "QuickFilterShowAllDocuments_GridDetail_zuuqj1c",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DocumentsListDS_Number": {
									"modelConfig": {
										"path": "DocumentsListDS.Number"
									}
								},
								"DocumentsListDS_Date": {
									"modelConfig": {
										"path": "DocumentsListDS.Date"
									}
								},
								"DocumentsListDS_Type": {
									"modelConfig": {
										"path": "DocumentsListDS.Type"
									}
								},
								"DocumentsListDS_Account": {
									"modelConfig": {
										"path": "DocumentsListDS.Account"
									}
								},
								"DocumentsListDS_Owner": {
									"modelConfig": {
										"path": "DocumentsListDS.Owner"
									}
								},
								"DocumentsListDS_State": {
									"modelConfig": {
										"path": "DocumentsListDS.State"
									}
								},
								"DocumentsListDS_Opportunity": {
									"modelConfig": {
										"path": "DocumentsListDS.Opportunity"
									}
								},
								"DocumentsListDS_Id": {
									"modelConfig": {
										"path": "DocumentsListDS.Id"
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
					"OrdersListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Order",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Date": {
									"path": "Date"
								},
								"Status": {
									"path": "Status"
								},
								"Account": {
									"path": "Account"
								},
								"Contact": {
									"path": "Contact"
								},
								"Amount": {
									"path": "Amount"
								},
								"Owner": {
									"path": "Owner"
								},
								"Currency": {
									"path": "Currency"
								}
							}
						}
					},
					"DataGrid_o1m7u6hDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Currency": {
									"path": "Currency"
								},
								"Amount": {
									"path": "Amount"
								},
								"PaymentStatus": {
									"path": "PaymentStatus"
								},
								"Opportunity": {
									"path": "Opportunity"
								},
								"Order": {
									"path": "Order"
								}
							}
						}
					},
					"DocumentsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Date": {
									"path": "Date"
								},
								"Type": {
									"path": "Type"
								},
								"Account": {
									"path": "Account"
								},
								"Owner": {
									"path": "Owner"
								},
								"State": {
									"path": "State"
								},
								"Opportunity": {
									"path": "Opportunity"
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
					"OrdersListDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Account"
						}
					],
					"DataGrid_o1m7u6hDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Account"
						}
					],
					"DocumentsListDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Account"
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