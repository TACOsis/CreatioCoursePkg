define("KnowledgeBase_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "KnowledgeBase_EditPage"
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "DataImportButton",
				"values": {
					"caption": "#ResourceString(DataImportButton_caption)#",
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "#DataSourceEntityName(PDS)#"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "ActionButton",
				"values": {
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"wrap": "wrap",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"alignItems": "center"
				}
			},
			{
				"operation": "remove",
				"name": "LeftFilterContainerInner"
			},
			{
				"operation": "move",
				"name": "FolderTreeActions",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "KnowledgeBaseTagV2",
						"defaultValue": [],
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LookupQuickFilterByTag_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "[KnowledgeBaseInTagV2:Entity].Tag"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "LookupQuickFilterByTag_Value"
					}
				}
			},
			{
				"operation": "move",
				"name": "LookupQuickFilterByTag",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "move",
				"name": "SearchFilter",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "KnowledgeBaseFolder",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": [
											"KnowledgeBase"
										]
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
					"rootSchemaName": "KnowledgeBase",
					"borderRadius": "none"
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
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList",
				"values": {
					"type": "crt.DataGrid",
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"width": 462
						},
						{
							"id": "2c8f1e93-3441-3b18-d644-8cca61b5a851",
							"code": "PDS_Type",
							"path": "Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "KnowledgeBaseType"
						},
						{
							"id": "dff858cf-010d-3bb9-589b-05f0cd7a0ca2",
							"code": "PDS_ModifiedOn",
							"path": "ModifiedOn",
							"caption": "#ResourceString(PDS_ModifiedOn)#",
							"dataValueType": 7,
							"width": 177
						},
						{
							"id": "8609e52e-a5e3-8b81-77b7-69cf0459d87e",
							"code": "PDS_ModifiedBy",
							"path": "ModifiedBy",
							"caption": "#ResourceString(PDS_ModifiedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					],
					"items": "$Items",
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"classes": [
						"section-data-grid"
					],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "search"
							},
							"title": "#ResourceString(FilteredEmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(FilteredEmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoFilteredItems"
						},
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "cat"
							},
							"title": "#ResourceString(EmptySectionPlaceholderTitle)#",
							"subhead": "#ResourceString(EmptySectionPlaceholderSubHead)#",
							"visible": "$DataTable_NoItems"
						}
					],
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"toolbar": false,
							"numeration": true
						},
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"visible": true,
					"fitContent": true,
					"selectionState": "$KnowledgeBaseArticlesList_SelectionState",
					"_selectionOptions": {
						"attribute": "KnowledgeBaseArticlesList_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesList_AddTagsBulkAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"tagInRecordSourceSchemaName": "KnowledgeBaseInTagV2",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $KnowledgeBaseArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $KnowledgeBaseArticlesList_SelectionState",
							"dataSourceName": "PDS"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesList_RemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"tagInRecordSourceSchemaName": "KnowledgeBaseInTagV2",
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $KnowledgeBaseArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $KnowledgeBaseArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesList_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesList_ExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "KnowledgeBaseArticlesList",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $KnowledgeBaseArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $KnowledgeBaseArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "KnowledgeBaseArticlesList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(KnowledgeBaseArticlesList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $KnowledgeBaseArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $KnowledgeBaseArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "KnowledgeBaseArticlesList",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"PDS_ModifiedOn": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					},
					"PDS_ModifiedBy": {
						"modelConfig": {
							"path": "PDS.ModifiedBy"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "desc",
							"columnName": "ModifiedOn"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "KnowledgeBase",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Type": {
							"path": "Type"
						},
						"ModifiedOn": {
							"path": "ModifiedOn"
						},
						"ModifiedBy": {
							"path": "ModifiedBy"
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
