define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"visible": true
				},
				"parentName": "GridContainer_wn8jlf2",
				"propertyName": "items",
				"index": 0
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
									"value": "$LookupAttribute_xm7t1f4"
								},
								{
									"attributeName": "Contact",
									"value": "$LookupAttribute_zv8h198"
								},
								{
									"attributeName": "Order",
									"value": "$Id"
								}
							]
						}
					},
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
					"caption": "#ResourceString(GridDetailRefreshBtn_dlr47s5_caption)#",
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
							"dataSourceName": "GridDetail_8621dmoDS"
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
					"caption": "#ResourceString(GridDetailSettingsBtn_kju4n05_caption)#",
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
					"caption": "#ResourceString(GridDetailExportDataBtn_wwbe9d3_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8621dmo"
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
					"caption": "#ResourceString(GridDetailImportDataBtn_vi1uwfl_caption)#",
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
						"GridDetail_8621dmo"
					]
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1jgsmeg",
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
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_8621dmo",
					"selectionState": "$GridDetail_8621dmo_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_8621dmo_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_8621dmoDS_Id",
					"columns": [
						{
							"id": "4597e7a0-ac45-e2d1-18a1-e243951a7bb0",
							"code": "GridDetail_8621dmoDS_Number",
							"caption": "#ResourceString(GridDetail_8621dmoDS_Number)#",
							"dataValueType": 28,
							"width": 165
						},
						{
							"id": "386b3d60-d745-ed83-d173-a36f348af89e",
							"code": "GridDetail_8621dmoDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(GridDetail_8621dmoDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 240
						},
						{
							"id": "633cb715-3352-0a35-1b3d-e1ff1ccb6858",
							"code": "GridDetail_8621dmoDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(GridDetail_8621dmoDS_Amount)#",
							"dataValueType": 6,
							"width": 175
						},
						{
							"id": "a281054f-17e3-1eb5-713b-ed0484d42015",
							"code": "GridDetail_8621dmoDS_PaymentStatus",
							"path": "PaymentStatus",
							"caption": "#ResourceString(GridDetail_8621dmoDS_PaymentStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "InvoicePaymentStatus"
						}
					],
					"bulkActions": []
				},
				"parentName": "GridContainer_1jgsmeg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8621dmo_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8621dmo",
							"filters": "$GridDetail_8621dmo | crt.ToCollectionFilters : 'GridDetail_8621dmo' : $GridDetail_8621dmo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8621dmo_SelectionState"
						}
					}
				},
				"parentName": "InvoicesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8621dmo_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8621dmoDS",
							"filters": "$GridDetail_8621dmo | crt.ToCollectionFilters : 'GridDetail_8621dmo' : $GridDetail_8621dmo_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8621dmo_SelectionState"
						}
					}
				},
				"parentName": "InvoicesList",
				"propertyName": "bulkActions",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"GridDetail_8621dmo": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8621dmoDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Number"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8621dmoDS_Number": {
									"modelConfig": {
										"path": "GridDetail_8621dmoDS.Number"
									}
								},
								"GridDetail_8621dmoDS_Currency": {
									"modelConfig": {
										"path": "GridDetail_8621dmoDS.Currency"
									}
								},
								"GridDetail_8621dmoDS_Amount": {
									"modelConfig": {
										"path": "GridDetail_8621dmoDS.Amount"
									}
								},
								"GridDetail_8621dmoDS_PaymentStatus": {
									"modelConfig": {
										"path": "GridDetail_8621dmoDS.PaymentStatus"
									}
								},
								"GridDetail_8621dmoDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8621dmoDS.Id"
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
					"GridDetail_8621dmoDS": {
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
					"GridDetail_8621dmoDS": [
						{
							"attributePath": "Order",
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