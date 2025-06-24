define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "SimilarLeadExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SimilarLeadExpansionPanel_title)#",
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
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SimilarLeadToolsContainer",
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
				"parentName": "SimilarLeadExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SimilarLeadToolsFlexContainer",
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
				"parentName": "SimilarLeadToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SimilarLeadRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SimilarLeadRefreshButton_caption)#",
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
							"dataSourceName": "SimilarLeadListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SimilarLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SimilarLeadSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SimilarLeadSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "SimilarLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SimilarLeadExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SimilarLeadExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SimilarLeadList",
							"filters": "$SimilarLeadList | crt.ToCollectionFilters : 'SimilarLeadList' : $SimilarLeadList_SelectionState"
						}
					}
				},
				"parentName": "SimilarLeadSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SimilarLeadSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SimilarLeadSearchFilter_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"SimilarLeadList"
					]
				},
				"parentName": "SimilarLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SimilarLeadListContainer",
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
				"parentName": "SimilarLeadExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SimilarLeadList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$SimilarLeadList",
					"primaryColumnName": "SimilarLeadListDS_Id",
					"columns": [
						{
							"id": "45c62464-d133-5858-df87-14ad6c0e1840",
							"code": "SimilarLeadListDS_LeadName",
							"caption": "#ResourceString(SimilarLeadListDS_LeadName)#",
							"dataValueType": 30,
							"sticky": true
						},
						{
							"id": "c630c167-17a0-e0fb-cf4c-82bf667c741a",
							"code": "SimilarLeadListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(SimilarLeadListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"sticky": true
						},
						{
							"id": "71ac2dc1-9155-6b88-7e91-5207bea6da95",
							"code": "SimilarLeadListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(SimilarLeadListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "b8bd990e-fcd1-15a7-ee80-bfb5e09e9e32",
							"code": "SimilarLeadListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(SimilarLeadListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "706c2640-8ee5-f238-87ce-1d714a7c0d52",
							"code": "SimilarLeadListDS_QualifiedAccount",
							"path": "QualifiedAccount",
							"caption": "#ResourceString(SimilarLeadListDS_QualifiedAccount)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						},
						{
							"id": "632c0495-294d-b50f-5860-a18f0a83081b",
							"code": "SimilarLeadListDS_QualifiedContact",
							"path": "QualifiedContact",
							"caption": "#ResourceString(SimilarLeadListDS_QualifiedContact)#",
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
					"selectionState": "$SimilarLeadList_SelectionState",
					"_selectionOptions": {
						"attribute": "SimilarLeadList_SelectionState"
					}
				},
				"parentName": "SimilarLeadListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"SimilarLeadList": {
					"isCollection": true,
					"modelConfig": {
						"path": "SimilarLeadListDS",
						"sortingConfig": {
							"default": [
								{
									"direction": "asc",
									"columnName": "LeadName"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"SimilarLeadListDS_LeadName": {
								"modelConfig": {
									"path": "SimilarLeadListDS.LeadName"
								}
							},
							"SimilarLeadListDS_QualifyStatus": {
								"modelConfig": {
									"path": "SimilarLeadListDS.QualifyStatus"
								}
							},
							"SimilarLeadListDS_CreatedOn": {
								"modelConfig": {
									"path": "SimilarLeadListDS.CreatedOn"
								}
							},
							"SimilarLeadListDS_Owner": {
								"modelConfig": {
									"path": "SimilarLeadListDS.Owner"
								}
							},
							"SimilarLeadListDS_QualifiedAccount": {
								"modelConfig": {
									"path": "SimilarLeadListDS.QualifiedAccount"
								}
							},
							"SimilarLeadListDS_QualifiedContact": {
								"modelConfig": {
									"path": "SimilarLeadListDS.QualifiedContact"
								}
							},
							"SimilarLeadListDS_Id": {
								"modelConfig": {
									"path": "SimilarLeadListDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"SimilarLeadListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SimilarLead",
						"attributes": {
							"LeadName": {
								"path": "LeadName"
							},
							"QualifyStatus": {
								"path": "QualifyStatus"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"Owner": {
								"path": "Owner"
							},
							"QualifiedAccount": {
								"path": "QualifiedAccount"
							},
							"QualifiedContact": {
								"path": "QualifiedContact"
							}
						}
					}
				}
			},
			"dependencies": {
				"SimilarLeadListDS": [
					{
						"attributePath": "Id",
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