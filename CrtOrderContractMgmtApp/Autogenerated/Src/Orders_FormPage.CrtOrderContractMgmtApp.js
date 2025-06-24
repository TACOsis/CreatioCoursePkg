define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "small",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesAddButton",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesRefreshButton",
				"values": {
					"caption": "#ResourceString(InvoicesRefreshButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesSettingsButton",
				"values": {
					"caption": "#ResourceString(InvoicesSettingsButton_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesExportDataButton",
				"values": {
					"caption": "#ResourceString(InvoicesExportDataButton_caption)#",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InvoicesList",
							"filters": "$GridDetail_8621dmo | crt.ToCollectionFilters : 'GridDetail_8621dmo' : $GridDetail_8621dmo_SelectionState"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "InvoicesImportDataButton",
				"values": {
					"caption": "#ResourceString(InvoicesImportDataButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "more-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MenuItemCreateInvoice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItemCreateInvoice_caption)#",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateNewInvoiceFromOrder",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "OrderId"
						}
					},
					"icon": "disk-warn-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItemCreateContract",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItemCreateContract_caption)#",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateNewContractFromOrder",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "OrderId"
						}
					},
					"icon": "document-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(InstallmentPlanExpansionPanel_title)#",
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
				"parentName": "PaymentDeliveryTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanToolsContainer",
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
				"parentName": "InstallmentPlanExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanToolsFlexContainer",
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
				"parentName": "InstallmentPlanToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InstallmentPlanAddButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": false,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SupplyPaymentElement",
							"defaultValues": [
								{
									"attributeName": "Order",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default"
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InstallmentPlanRefreshButton_caption)#",
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
							"dataSourceName": "InstallmentPlanListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InstallmentPlanSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InstallmentPlanExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InstallmentPlanList",
							"filters": "$InstallmentPlanList | crt.ToCollectionFilters : 'InstallmentPlanList' : $InstallmentPlanList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "InstallmentPlanSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InstallmentPlanImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SupplyPaymentElement"
						}
					},
					"visible": true
				},
				"parentName": "InstallmentPlanSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(InstallmentPlanSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"InstallmentPlanList"
					]
				},
				"parentName": "InstallmentPlanToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanGridContainer",
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
				"parentName": "InstallmentPlanExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InstallmentPlanList",
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
							"selection": false
						}
					},
					"items": "$InstallmentPlanList",
					"selectionState": "$InstallmentPlanList_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "InstallmentPlanListDS_Id",
					"columns": [
						{
							"id": "a16202e5-253c-65c0-f822-69c6e8a07c73",
							"code": "InstallmentPlanListDS_Name",
							"path": "Name",
							"caption": "#ResourceString(InstallmentPlanListDS_Name)#",
							"dataValueType": 27,
							"width": 171,
							"sticky": true
						},
						{
							"id": "0db7d313-0230-74d3-881e-cc584fbf4392",
							"code": "InstallmentPlanListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(InstallmentPlanListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "SupplyPaymentType",
							"width": 132
						},
						{
							"id": "ed5e7e03-f0e8-c7a9-1db7-cdec46671c1b",
							"code": "InstallmentPlanListDS_State",
							"path": "State",
							"caption": "#ResourceString(InstallmentPlanListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "SupplyPaymentState",
							"width": 139
						},
						{
							"id": "26134f9f-1405-1fe2-036a-3cdea07edafe",
							"code": "InstallmentPlanListDS_Percentage",
							"path": "Percentage",
							"caption": "#ResourceString(InstallmentPlanListDS_Percentage)#",
							"dataValueType": 32,
							"width": 152
						},
						{
							"id": "f013bf53-8870-fbb1-bc5b-172ca4628b2c",
							"code": "InstallmentPlanListDS_Invoice",
							"path": "Invoice",
							"caption": "#ResourceString(InstallmentPlanListDS_Invoice)#",
							"dataValueType": 10,
							"referenceSchemaName": "Invoice",
							"width": 114
						}
					],
					"_selectionOptions": {
						"attribute": "InstallmentPlanList_SelectionState"
					}
				},
				"parentName": "InstallmentPlanGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ContractsExpansionPanel_title)#",
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
					"fitContent": true
				},
				"parentName": "DocumentsTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractsToolsContainer",
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
				"parentName": "ContractsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsToolsFlexContainer",
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
				"parentName": "ContractsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractsAddButton_caption)#",
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
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractsRefreshButton_caption)#",
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
							"dataSourceName": "ContractsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContractsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "ContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContractsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContractsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContractsList",
							"filters": "$GridDetail_pveyv0v | crt.ToCollectionFilters : 'GridDetail_pveyv0v' : $GridDetail_pveyv0v_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ContractsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContractsImportDataButton_caption)#",
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
				"parentName": "ContractsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContractsSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_pveyv0v"
					]
				},
				"parentName": "ContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContractsListContainer",
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
				"parentName": "ContractsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractsList",
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
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_pveyv0v",
					"activeRow": "$GridDetail_pveyv0v_ActiveRow",
					"selectionState": "$GridDetail_pveyv0v_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_pveyv0v_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ContractsListDS_Id",
					"columns": [
						{
							"id": "602e5e1e-4fc0-69ba-e5bb-20f7f955bc97",
							"code": "ContractsListDS_Number",
							"caption": "#ResourceString(ContractsListDS_Number)#",
							"dataValueType": 28,
							"width": 152
						},
						{
							"id": "d8d1ec1b-b784-ba26-8cad-3dc7d37aca5a",
							"code": "ContractsListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(ContractsListDS_StartDate)#",
							"dataValueType": 8,
							"width": 124
						},
						{
							"id": "272da466-c3c2-5af5-ec6f-278b2cb2df9c",
							"code": "ContractsListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(ContractsListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractType",
							"width": 136
						},
						{
							"id": "d064c22c-a9de-538f-6bea-292a67e9afd2",
							"code": "ContractsListDS_Account",
							"path": "Account",
							"caption": "#ResourceString(ContractsListDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						},
						{
							"id": "ee4cb62b-ff57-9412-740f-325b2d5441af",
							"code": "ContractsListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(ContractsListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e927e058-5076-4aba-5289-658f49cf6fd7",
							"code": "ContractsListDS_State",
							"path": "State",
							"caption": "#ResourceString(ContractsListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractState"
						}
					]
				},
				"parentName": "ContractsListContainer",
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
					"InstallmentPlanList": {
						"isCollection": true,
						"modelConfig": {
							"path": "InstallmentPlanListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Type"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"InstallmentPlanListDS_Name": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.Name"
									}
								},
								"InstallmentPlanListDS_Type": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.Type"
									}
								},
								"InstallmentPlanListDS_State": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.State"
									}
								},
								"InstallmentPlanListDS_Percentage": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.Percentage"
									}
								},
								"InstallmentPlanListDS_Invoice": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.Invoice"
									}
								},
								"InstallmentPlanListDS_Id": {
									"modelConfig": {
										"path": "InstallmentPlanListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_pveyv0v": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContractsListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"ContractsListDS_Number": {
									"modelConfig": {
										"path": "ContractsListDS.Number"
									}
								},
								"ContractsListDS_StartDate": {
									"modelConfig": {
										"path": "ContractsListDS.StartDate"
									}
								},
								"ContractsListDS_Type": {
									"modelConfig": {
										"path": "ContractsListDS.Type"
									}
								},
								"ContractsListDS_Account": {
									"modelConfig": {
										"path": "ContractsListDS.Account"
									}
								},
								"ContractsListDS_Owner": {
									"modelConfig": {
										"path": "ContractsListDS.Owner"
									}
								},
								"ContractsListDS_State": {
									"modelConfig": {
										"path": "ContractsListDS.State"
									}
								},
								"ContractsListDS_Id": {
									"modelConfig": {
										"path": "ContractsListDS.Id"
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
					"InstallmentPlanListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SupplyPaymentElement",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"Type": {
									"path": "Type"
								},
								"State": {
									"path": "State"
								},
								"Percentage": {
									"path": "Percentage"
								},
								"Invoice": {
									"path": "Invoice"
								}
							}
						}
					},
					"ContractsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"StartDate": {
									"path": "StartDate"
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
					"InstallmentPlanListDS": [
						{
							"attributePath": "Order",
							"relationPath": "PDS.Id"
						}
					],
					"ContractsListDS": [
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