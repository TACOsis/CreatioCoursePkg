define("Leads_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"size": "large"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Lead"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_LeadName",
							"caption": "#ResourceString(PDS_LeadName)#",
							"dataValueType": 1,
							"sticky": true,
							"width": 383
						},
						{
							"id": "53578099-6e84-8cba-dfdf-7dfa79399ace",
							"code": "PDS_Status",
							"path": "Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadStatus",
							"width": 202
						},
						{
							"id": "1f0f96e1-65d7-0573-a0d0-bc0a933e55e7",
							"code": "PDS_LeadTypeDetails",
							"path": "LeadTypeDetails",
							"caption": "#ResourceString(PDS_LeadTypeDetails)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadTypeDetails",
							"width": 181
						},
						{
							"id": "6e13f682-17cc-cdbf-3ff9-9062bb82b731",
							"code": "PDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(PDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 259
						},
						{
							"id": "9b3af8ec-447b-88b4-21f2-e47337695031",
							"code": "PDS_QualifiedContact",
							"path": "QualifiedContact",
							"caption": "#ResourceString(PDS_QualifiedContact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 219
						},
						{
							"id": "903980ab-3452-6f78-7083-11a61a7c2994",
							"code": "PDS_QualifiedAccount",
							"path": "QualifiedAccount",
							"caption": "#ResourceString(PDS_QualifiedAccount)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 207
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 146
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"visible": true,
					"fitContent": true,
					"selectionState": "$DataTable_SelectionState",
					"_selectionOptions": {
						"attribute": "DataTable_SelectionState"
					},
					"bulkActions": []
				}
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilterByDate",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterByDate_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterByDate_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilterByDate_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilterByOwner",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterByOwner_config_caption)#",
						"hint": "",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "Contact",
						"recordsFilter": null
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterByOwner_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Owner"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilterByOwner_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default",
					"visible": true
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"sourceSchemaName": "LeadFolder",
					"rootSchemaName": "Lead",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					],
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": ["Lead"]
									}
								]
							}
						],
						"from": [
							"FolderTree_items",
							"FolderTree_favoriteItems",
							"FolderTree_active_folder_id"
						]
					},
					"borderRadius": "none"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataTable_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_AddTagsBulkAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"tagInRecordSourceSchemaName": "LeadInTag"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataTable_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_RemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"tagInRecordSourceSchemaName": "LeadInTag"
						}
					},
					"visible": true
				},
				"parentName": "DataTable_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataTable_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_ExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataTable_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTable_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "DataTable",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ItemsSorting": {},
					"FolderTree_visible": {
						"value": false
					},
					"FolderTree_items": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Id"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Name"
									}
								},
								"ParentId": {
									"modelConfig": {
										"path": "FolderTree_items_DS.Parent.Id"
									}
								},
								"FilterData": {
									"modelConfig": {
										"path": "FolderTree_items_DS.SearchData"
									}
								}
							}
						},
						"modelConfig": {
							"path": "FolderTree_items_DS",
							"filterAttributes": [
								{
									"name": "FolderTree_items_DS_filter",
									"loadOnChange": true
								}
							]
						},
						"embeddedModel": {
							"config": {
								"type": "crt.EntityDataSource",
								"config": {
									"entitySchemaName": "LeadFolder"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
					"FolderTree_active_folder_filter": {
						"value": {}
					},
					"FolderTree_items_DS_filter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "EntitySchemaName"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "Lead"
										}
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
					"attributes",
					"Items"
				],
				"values": {
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							},
							{
								"name": "QuickFilterByDate_Items",
								"loadOnChange": true
							},
							{
								"name": "QuickFilterByOwner_Items",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_LeadName": {
						"modelConfig": {
							"path": "PDS.LeadName"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_LeadTypeDetails": {
						"modelConfig": {
							"path": "PDS.LeadTypeDetails"
						}
					},
					"PDS_QualifyStatus": {
						"modelConfig": {
							"path": "PDS.QualifyStatus"
						}
					},
					"PDS_QualifiedContact": {
						"modelConfig": {
							"path": "PDS.QualifiedContact"
						}
					},
					"PDS_QualifiedAccount": {
						"modelConfig": {
							"path": "PDS.QualifiedAccount"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
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
						"PDS": {
							"type": "crt.EntityDataSource",
							"hiddenInPageDesigner": true,
							"config": {
								"entitySchemaName": "Lead",
								"attributes": {
									"LeadName": {
										"path": "LeadName"
									},
									"Status": {
										"path": "Status"
									},
									"LeadTypeDetails": {
										"path": "LeadTypeDetails"
									},
									"QualifyStatus": {
										"path": "QualifyStatus"
									},
									"QualifiedContact": {
										"path": "QualifiedContact"
									},
									"QualifiedAccount": {
										"path": "QualifiedAccount"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							},
							"scope": "viewElement"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});