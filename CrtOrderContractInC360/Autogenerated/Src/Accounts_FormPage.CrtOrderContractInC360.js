define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ContactsRefreshButton",
				"values": {
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "ContactsListDS"
						}
					}
				}
			},
			{
				"operation": "insert",
				"name": "BankingDetailsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(BillingInfoExpansionPanel_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BankingDetailsToolsContainer",
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
				"parentName": "BankingDetailsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BankingDetailsToolsFlexContainer",
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
				"parentName": "BankingDetailsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BankingDetailsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BankingDetailsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "AccountBillingInfo",
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
				"parentName": "BankingDetailsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BankingDetailsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BankingDetailsRefreshButton_caption)#",
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
							"dataSourceName": "BillingInfoListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "BankingDetailsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BankingDetailsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(BankingDetailsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "BankingDetailsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BankingDetailsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(BankingDetailsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "BankingDetailsList"
						}
					},
					"visible": true
				},
				"parentName": "BankingDetailsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BankingDetailsDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(BankingDetailsDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "AccountBillingInfo"
						}
					},
					"visible": true
				},
				"parentName": "BankingDetailsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "BankingDetailsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(BankingDetailsSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_qpp45xn"
					]
				},
				"parentName": "BankingDetailsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_8wcf7f2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "BankingDetailsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BankingDetailsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_qpp45xn",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "BillingInfoListDS_Id",
					"columns": [
						{
							"id": "6d9cb713-2b23-e8e5-b8b9-03ee31fe7a88",
							"code": "BillingInfoListDS_Name",
							"caption": "#ResourceString(BillingInfoListDS_Name)#",
							"dataValueType": 28,
							"width": 203
						},
						{
							"id": "38509e76-baa6-37e9-924b-d72261f4ff21",
							"code": "BillingInfoListDS_BillingInfo",
							"path": "BillingInfo",
							"caption": "#ResourceString(BillingInfoListDS_BillingInfo)#",
							"dataValueType": 29,
							"width": 536
						}
					]
				},
				"parentName": "GridContainer_8wcf7f2",
				"propertyName": "items",
				"index": 0
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
									"attributeName": "Account",
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
							"id": "56a2523a-9db6-ede5-5a97-82a1104deb82",
							"code": "OrderListDS_Number",
							"path": "Number",
							"caption": "#ResourceString(OrderListDS_Number)#",
							"dataValueType": 28
						},
						{
							"id": "58ca3d08-0e40-b085-d229-0a76b13f0fef",
							"code": "OrderListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(OrderListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "OrderStatus"
						},
						{
							"id": "8bdd8a62-7fed-85ea-c424-3a346be48474",
							"code": "OrderListDS_PrimaryAmount",
							"path": "PrimaryAmount",
							"caption": "#ResourceString(OrderListDS_PrimaryAmount)#",
							"dataValueType": 6
						},
						{
							"id": "610fdd47-acbe-e6f4-8088-04fd6dc95102",
							"code": "OrderListDS_PaymentType",
							"path": "PaymentType",
							"caption": "#ResourceString(OrderListDS_PaymentType)#",
							"dataValueType": 10,
							"referenceSchemaName": "PaymentType"
						},
						{
							"id": "25b86ba0-efea-53b0-fc41-bc84f1cffa6a",
							"code": "OrderListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OrderListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "bb381203-e993-bd39-619e-99fff0563747",
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
			},
			{
				"operation": "insert",
				"name": "DocumentExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(DocumentExpansionPanel_title)#",
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
				"name": "DocumentToolsContainer",
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
				"parentName": "DocumentExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentToolsFlexContainer",
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
				"parentName": "DocumentToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentAddButton_caption)#",
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
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentRefreshButton_caption)#",
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
							"dataSourceName": "DocumentListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DocumentExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DocumentList"
						}
					},
					"visible": true
				},
				"parentName": "DocumentSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentmportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentmportDataButton_caption)#",
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
				"parentName": "DocumentSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(DocumentSearchFilter_placeholder)#",
					"targetAttributes": [
						"DocumentList"
					],
					"iconOnly": true
				},
				"parentName": "DocumentToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DocumentListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "DocumentExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$DocumentList",
					"primaryColumnName": "DocumentListDS_Id",
					"columns": [
						{
							"id": "75d4f2ce-77ff-f980-792c-2cbe5efb8d70",
							"code": "DocumentListDS_Number",
							"caption": "#ResourceString(DocumentListDS_Number)#",
							"dataValueType": 28,
							"width": 215
						},
						{
							"id": "597cfc43-128c-f390-a0b4-d44c8f75c0b9",
							"code": "DocumentListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(DocumentListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentType",
							"width": 168
						},
						{
							"id": "991c5142-4910-e2a6-a379-1473f5096dd7",
							"code": "DocumentListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(DocumentListDS_Date)#",
							"dataValueType": 8
						},
						{
							"id": "b2421ea8-be94-5c26-f416-3b0b8cace630",
							"code": "DocumentListDS_State",
							"path": "State",
							"caption": "#ResourceString(DocumentListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentState",
							"width": 188
						},
						{
							"id": "c273ae2a-ad9d-43f7-1523-786ca91ba938",
							"code": "DocumentListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(DocumentListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
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
				"parentName": "DocumentListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ContractExpansionPanel_title)#",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContractToolsContainer",
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
				"parentName": "ContractExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractToolsFlexContainer",
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
				"parentName": "ContractToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Contract",
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
				"parentName": "ContractToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractRefreshButton_caption)#",
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
							"dataSourceName": "ContractListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContractToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ContractToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContractExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContractExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContractList"
						}
					},
					"visible": true
				},
				"parentName": "ContractSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContractImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contract"
						}
					},
					"visible": true
				},
				"parentName": "ContractSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContractSearchFilter_placeholder)#",
					"targetAttributes": [
						"ContractList"
					],
					"iconOnly": true
				},
				"parentName": "ContractToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContractListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "ContractExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$ContractList",
					"primaryColumnName": "ContractListDS_Id",
					"columns": [
						{
							"id": "4540b7f6-48d1-661d-0f0d-8c15be664a71",
							"code": "ContractListDS_Number",
							"caption": "#ResourceString(ContractListDS_Number)#",
							"dataValueType": 28,
							"width": 208
						},
						{
							"id": "a9e806f8-b30e-47c1-b065-fdf594e2ecf9",
							"code": "ContractListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(ContractListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractType",
							"width": 153
						},
						{
							"id": "d0897ac6-98e7-32e2-1d53-ae2be597be75",
							"code": "ContractListDS_State",
							"path": "State",
							"caption": "#ResourceString(ContractListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractState"
						},
						{
							"id": "4f56e248-b1fd-45eb-dbe0-5d18b0d36572",
							"code": "ContractListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(ContractListDS_StartDate)#",
							"dataValueType": 8
						},
						{
							"id": "3ddb2f6e-42e0-58e2-cd9f-277e027e7f3e",
							"code": "ContractListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(ContractListDS_Amount)#",
							"dataValueType": 6,
							"width": 134
						},
						{
							"id": "ffc5ca40-38ac-efec-edef-0f1742af0407",
							"code": "ContractListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(ContractListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
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
				"parentName": "ContractListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"DocumentList": {
						"isCollection": true,
						"modelConfig": {
							"path": "DocumentListDS",
							"filterAttributes": [
								{
									"name": "DocumentList_PredefinedFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DocumentListDS_Number": {
									"modelConfig": {
										"path": "DocumentListDS.Number"
									}
								},
								"DocumentListDS_Type": {
									"modelConfig": {
										"path": "DocumentListDS.Type"
									}
								},
								"DocumentListDS_State": {
									"modelConfig": {
										"path": "DocumentListDS.State"
									}
								},
								"DocumentListDS_Date": {
									"modelConfig": {
										"path": "DocumentListDS.Date"
									}
								},
								"DocumentListDS_Id": {
									"modelConfig": {
										"path": "DocumentListDS.Id"
									}
								}
							}
						}
					}
				}
			},
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
					},
					"ContractList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContractListDS",
							"filterAttributes": [
								{
									"name": "ContractList_PredefinedFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ContractListDS_Number": {
									"modelConfig": {
										"path": "ContractListDS.Number"
									}
								},
								"ContractListDS_Type": {
									"modelConfig": {
										"path": "ContractListDS.Type"
									}
								},
								"ContractListDS_State": {
									"modelConfig": {
										"path": "ContractListDS.State"
									}
								},
								"ContractListDS_StartDate": {
									"modelConfig": {
										"path": "ContractListDS.StartDate"
									}
								},
								"ContractListDS_Amount": {
									"modelConfig": {
										"path": "ContractListDS.Amount"
									}
								},
								"ContractListDS_Owner": {
									"modelConfig": {
										"path": "ContractListDS.Owner"
									}
								},
								"ContractListDS_Id": {
									"modelConfig": {
										"path": "ContractListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qpp45xn": {
						"isCollection": true,
						"modelConfig": {
							"path": "BillingInfoListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"BillingInfoListDS_Name": {
									"modelConfig": {
										"path": "BillingInfoListDS.Name"
									}
								},
								"BillingInfoListDS_BillingInfo": {
									"modelConfig": {
										"path": "BillingInfoListDS.BillingInfo"
									}
								},
								"BillingInfoListDS_Id": {
									"modelConfig": {
										"path": "BillingInfoListDS.Id"
									}
								}
							}
						}
					},
					"DocumentList": {
						"isCollection": true,
						"modelConfig": {
							"path": "DocumentListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DocumentListDS_Number": {
									"modelConfig": {
										"path": "DocumentListDS.Number"
									}
								},
								"DocumentListDS_Type": {
									"modelConfig": {
										"path": "DocumentListDS.Type"
									}
								},
								"DocumentListDS_Date": {
									"modelConfig": {
										"path": "DocumentListDS.Date"
									}
								},
								"DocumentListDS_State": {
									"modelConfig": {
										"path": "DocumentListDS.State"
									}
								},
								"DocumentListDS_Owner": {
									"modelConfig": {
										"path": "DocumentListDS.Owner"
									}
								},
								"DocumentListDS_Id": {
									"modelConfig": {
										"path": "DocumentListDS.Id"
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
					},
					"ContractListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Type": {
									"path": "Type"
								},
								"State": {
									"path": "State"
								},
								"StartDate": {
									"path": "StartDate"
								},
								"Amount": {
									"path": "Amount"
								},
								"Owner": {
									"path": "Owner"
								}
							}
						}
					},
					"BillingInfoListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountBillingInfo",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"BillingInfo": {
									"path": "BillingInfo"
								}
							}
						}
					},
					"DocumentListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Type": {
									"path": "Type"
								},
								"Date": {
									"path": "Date"
								},
								"State": {
									"path": "State"
								},
								"Owner": {
									"path": "Owner"
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
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"ContractListDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"BillingInfoListDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.Id"
						}
					],
					"DocumentListDS": [
						{
							"attributePath": "Account",
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