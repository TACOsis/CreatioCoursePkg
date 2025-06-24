define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "RecommendedProductExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(RecommendedProductExpansionPanel_title)#",
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
				"name": "RecommendedProductToolsContainer",
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
				"parentName": "RecommendedProductExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductToolsFlexContainer",
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
				"parentName": "RecommendedProductToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RecommendedProductRefreshButton_caption)#",
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
							"dataSourceName": "RecommendedProductListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RecommendedProductSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RecommendedProductExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RecommendedProductExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RecommendedProductList"
						}
					},
					"visible": true
				},
				"parentName": "RecommendedProductSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(RecommendedProductSearchFilter_placeholder)#",
					"targetAttributes": [
						"RecommendedProductList"
					],
					"iconOnly": true
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RecommendedProductListContainer",
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
				"parentName": "RecommendedProductExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$RecommendedProductList",
					"primaryColumnName": "RecommendedProductListDS_Id",
					"columns": [
						{
							"id": "e2db728d-c9ea-bdd2-839e-17c28b9f1b89",
							"code": "RecommendedProductListDS_Product",
							"path": "Product",
							"caption": "#ResourceString(RecommendedProductListDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product"
						},
						{
							"id": "0cae429b-bbb6-e344-1e12-7e7772087e83",
							"code": "RecommendedProductListDS_ProductPrice",
							"path": "Product.Price",
							"caption": "#ResourceString(RecommendedProductListDS_ProductPrice)#",
							"dataValueType": 6
						},
						{
							"id": "ea164e8e-37d2-a945-84e2-f6bb3bdd5d2e",
							"code": "RecommendedProductListDS_Score",
							"path": "Score",
							"caption": "#ResourceString(RecommendedProductListDS_Score)#",
							"dataValueType": 34
						},
						{
							"id": "baf91562-bfbb-77d4-ee3f-4de919f97e16",
							"code": "RecommendedProductListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(RecommendedProductListDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "baf91562-bfbb-77d4-ee3f-4de919f97e17",
							"code": "RecommendedProductListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(RecommendedProductListDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"editable": false,
						"rows": {
							"toolbar": false
						}
					},
					"rowDoubleClick": {}
				},
				"parentName": "RecommendedProductListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OpportunityExpansionPanel_title)#",
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
				"name": "OpportunityToolsContainer",
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
				"parentName": "OpportunityExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityToolsFlexContainer",
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
				"parentName": "OpportunityToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunityAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Opportunity",
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
				"parentName": "OpportunityToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunityRefreshButton_caption)#",
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
							"dataSourceName": "OpportunityListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OpportunityToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunitySettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunitySettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OpportunityToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunityExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunityExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OpportunityList"
						}
					},
					"visible": true
				},
				"parentName": "OpportunitySettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunityImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Opportunity"
						}
					},
					"visible": true
				},
				"parentName": "OpportunitySettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunitySearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(OpportunitySearchFilter_placeholder)#",
					"targetAttributes": [
						"OpportunityList"
					],
					"iconOnly": true
				},
				"parentName": "OpportunityToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OpportunityListContainer",
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
				"parentName": "OpportunityExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$OpportunityList",
					"primaryColumnName": "OpportunityListDS_Id",
					"columns": [
						{
							"id": "09041b5b-d884-52af-65f5-aa65301177d8",
							"code": "OpportunityListDS_Title",
							"caption": "#ResourceString(OpportunityListDS_Title)#",
							"dataValueType": 30
						},
						{
							"id": "a4aedb7f-d24a-b4d3-e436-032695ccdeec",
							"code": "OpportunityListDS_Stage",
							"path": "Stage",
							"caption": "#ResourceString(OpportunityListDS_Stage)#",
							"dataValueType": 10,
							"referenceSchemaName": "OpportunityStage"
						},
						{
							"id": "870308a0-8d61-20b5-edf6-aea7cffae147",
							"code": "OpportunityListDS_Probability",
							"path": "Probability",
							"caption": "#ResourceString(OpportunityListDS_Probability)#",
							"dataValueType": 4
						},
						{
							"id": "9138e16b-b86c-9506-d168-58b5e66f1c33",
							"code": "OpportunityListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(OpportunityListDS_Amount)#",
							"dataValueType": 32
						},
						{
							"id": "0d067a16-714a-4c15-9612-9249adbbdc48",
							"code": "OpportunityListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OpportunityListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e077e95c-0faa-e2ac-ccf5-6a19303b9724",
							"code": "OpportunityListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(OpportunityListDS_DueDate)#",
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
				"parentName": "OpportunityListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"RecommendedProductList": {
					"isCollection": true,
					"modelConfig": {
						"path": "RecommendedProductListDS",
						"filterAttributes": [
							{
								"name": "RecommendedProductList_PredefinedFilter",
								"loadOnChange": true
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"RecommendedProductListDS_Product": {
								"modelConfig": {
									"path": "RecommendedProductListDS.Product"
								}
							},
							"RecommendedProductListDS_ProductPrice": {
								"modelConfig": {
									"path": "RecommendedProductListDS.ProductPrice"
								}
							},
							"RecommendedProductListDS_Status": {
								"modelConfig": {
									"path": "RecommendedProductListDS.Status"
								}
							},
							"RecommendedProductListDS_CreatedOn": {
								"modelConfig": {
									"path": "RecommendedProductListDS.CreatedOn"
								}
							},
							"RecommendedProductListDS_Score": {
								"modelConfig": {
									"path": "RecommendedProductListDS.Score"
								}
							},
							"RecommendedProductListDS_Id": {
								"modelConfig": {
									"path": "RecommendedProductListDS.Id"
								}
							}
						}
					}
				},
				"OpportunityList": {
					"isCollection": true,
					"modelConfig": {
						"path": "OpportunityListDS",
						"filterAttributes": [
							{
								"name": "OpportunityList_PredefinedFilter",
								"loadOnChange": true
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"OpportunityListDS_Title": {
								"modelConfig": {
									"path": "OpportunityListDS.Title"
								}
							},
							"OpportunityListDS_Stage": {
								"modelConfig": {
									"path": "OpportunityListDS.Stage"
								}
							},
							"OpportunityListDS_Probability": {
								"modelConfig": {
									"path": "OpportunityListDS.Probability"
								}
							},
							"OpportunityListDS_Amount": {
								"modelConfig": {
									"path": "OpportunityListDS.Amount"
								}
							},
							"OpportunityListDS_Owner": {
								"modelConfig": {
									"path": "OpportunityListDS.Owner"
								}
							},
							"OpportunityListDS_DueDate": {
								"modelConfig": {
									"path": "OpportunityListDS.DueDate"
								}
							},
							"OpportunityListDS_Id": {
								"modelConfig": {
									"path": "OpportunityListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"RecommendedProductListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "RecommendedProduct",
						"attributes": {
							"Product": {
								"path": "Product"
							},
							"ProductPrice": {
								"path": "Product.Price",
								"type": "ForwardReference"
							},
							"Status": {
								"path": "Status"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"Score": {
								"path": "Score"
							}
						}
					}
				},
				"OpportunityListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Opportunity",
						"attributes": {
							"Title": {
								"path": "Title"
							},
							"Stage": {
								"path": "Stage"
							},
							"Probability": {
								"path": "Probability"
							},
							"Amount": {
								"path": "Amount"
							},
							"Owner": {
								"path": "Owner"
							},
							"DueDate": {
								"path": "DueDate"
							}
						}
					}
				}
			},
			"dependencies": {
				"RecommendedProductListDS": [
					{
						"attributePath": "Account",
						"relationPath": "PDS.Id"
					}
				],
				"OpportunityListDS": [
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