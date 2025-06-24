define("ArticleVersions_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "FooterContainer"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "VersionsList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": false,
							"toolbar": false,
							"numeration": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_omf5rch",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_omf5rchDS_Id",
					"columns": [
						{
							"id": "104fed69-fee4-a948-84d0-a818f4db3fb9",
							"code": "DataGrid_omf5rchDS_Version",
							"caption": "#ResourceString(DataGrid_omf5rchDS_Version)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "7e300c48-18dc-b78f-d28e-2795e7dec6c5",
							"code": "DataGrid_omf5rchDS_ModifiedOn",
							"caption": "#ResourceString(DataGrid_omf5rchDS_ModifiedOn)#",
							"dataValueType": 7,
							"width": 147
						},
						{
							"id": "a522f00e-8582-4014-fbc9-ddeb4533051e",
							"code": "DataGrid_omf5rchDS_CreatedBy",
							"caption": "#ResourceString(DataGrid_omf5rchDS_CreatedBy)#",
							"dataValueType": 10,
							"width": 153
						}
					],
					"placeholder": false,
					"activeRow": "$DataGrid_omf5rch_ActiveRow",
					"selectionState": "$DataGrid_omf5rch_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_omf5rch_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_omf5rch_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_omf5rchDS",
							"filters": "$DataGrid_omf5rch | crt.ToCollectionFilters : 'DataGrid_omf5rch' : $DataGrid_omf5rch_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_omf5rch_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VersionsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_omf5rch_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_omf5rchDS",
							"filters": "$DataGrid_omf5rch | crt.ToCollectionFilters : 'DataGrid_omf5rch' : $DataGrid_omf5rch_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_omf5rch_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_omf5rch_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_omf5rch_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VersionsList",
							"filters": "$DataGrid_omf5rch | crt.ToCollectionFilters : 'DataGrid_omf5rch' : $DataGrid_omf5rch_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_omf5rch_SelectionState"
						}
					}
				},
				"parentName": "VersionsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_omf5rch_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_omf5rchDS",
							"filters": "$DataGrid_omf5rch | crt.ToCollectionFilters : 'DataGrid_omf5rch' : $DataGrid_omf5rch_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_omf5rch_SelectionState"
						}
					}
				},
				"parentName": "VersionsList",
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
					"DataGrid_omf5rch": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_omf5rchDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_omf5rch_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_omf5rchDS_Version": {
									"modelConfig": {
										"path": "DataGrid_omf5rchDS.Version"
									}
								},
								"DataGrid_omf5rchDS_ModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_omf5rchDS.ModifiedOn"
									}
								},
								"DataGrid_omf5rchDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_omf5rchDS.CreatedBy"
									}
								},
								"DataGrid_omf5rchDS_Id": {
									"modelConfig": {
										"path": "DataGrid_omf5rchDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_omf5rch_PredefinedFilter": {
						"value": {
							"items": {
								"8e0f6465-0d56-4cd3-9195-9f926f9072c1": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Status"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ArticlePublicationStatus",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Published",
													"Id": "767612dd-f372-4f03-97d4-14bc0c744719",
													"value": "767612dd-f372-4f03-97d4-14bc0c744719",
													"displayValue": "Published"
												}
											}
										}
									]
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "KnowledgeBase"
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
						"DataGrid_omf5rchDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "KnowledgeBase",
								"attributes": {
									"Version": {
										"path": "Version"
									},
									"ModifiedOn": {
										"path": "ModifiedOn"
									},
									"CreatedBy": {
										"path": "CreatedBy"
									}
								}
							}
						},
						"KnowledgeBaseDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "KnowledgeBase"
							}
						}
					},
					"primaryDataSourceName": "KnowledgeBaseDS",
					"dependencies": {
						"DataGrid_omf5rchDS": [
							{
								"attributePath": "ParentArticle",
								"relationPath": "KnowledgeBaseDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});