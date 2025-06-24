define("KnowledgeBase_ViewPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ActionEdit",
				"values": {
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateOpenArticleDraft",
							"processRunType": "ForTheSelectedPage",
							"showNotification": false,
							"recordIdProcessParameterName": "Article"
						}
					}
				}
			},
			{
				"operation": "move",
				"name": "LabelsContainer",
				"parentName": "TopGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "623c5a2c-5c6b-31c3-c121-8f12c955f37b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "6009b1a6-b243-54c6-2653-49574b4f5bf6",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "c4fca8c3-92db-31e2-d20c-c0dc765aa734",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "1e0f4986-88c7-3785-12c9-181a0f62c524",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionOpenVersions",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ActionOpenVersions_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "ArticleVersions_MiniPage",
							"modelInitConfigs": [
								{
									"action": "edit",
									"recordId": "$Id"
								}
							]
						}
					},
					"icon": "clock-icon"
				},
				"parentName": "ArticleActionsMenu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TopGridContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ResolutionContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_SeconDivider",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_weryhio_caption)#)#",
					"labelType": "caption",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LabelsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Label_Version",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_Version_caption)#)#",
					"labelType": "body",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LabelsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Label_VersionNumber",
				"values": {
					"type": "crt.Label",
					"caption": "$PDS_Version_fqae4nx",
					"labelType": "body",
					"labelThickness": "light",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LabelsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "DraftsContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"justifyContent": "end"
				},
				"parentName": "TopGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActionOpenDraft",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionOpenDraft_caption)#",
					"color": "default",
					"disabled": false,
					"size": "small",
					"iconPosition": "only-text",
					"visible": "$DataTable_NoItems",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "CreateOpenArticleDraft",
							"processRunType": "ForTheSelectedPage",
							"showNotification": false,
							"recordIdProcessParameterName": "Article"
						}
					},
					"clickMode": "default"
				},
				"parentName": "DraftsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ArticleDraftsList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_vi7fly1",
					"visible": false,
					"fitContent": true,
					"primaryColumnName": "DataGrid_vi7fly1DS_Id",
					"columns": [
						{
							"id": "687b0e27-cf2d-d83d-ca2f-72c33addee01",
							"code": "DataGrid_vi7fly1DS_Name",
							"caption": "#ResourceString(DataGrid_vi7fly1DS_Name)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"activeRow": "$DataGrid_vi7fly1_ActiveRow",
					"selectionState": "$DataGrid_vi7fly1_SelectionState",
					"_selectionOptions": {
						"attribute": "DataGrid_vi7fly1_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "ResolutionContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DataGrid_vi7fly1_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_vi7fly1DS",
							"filters": "$DataGrid_vi7fly1 | crt.ToCollectionFilters : 'DataGrid_vi7fly1' : $DataGrid_vi7fly1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vi7fly1_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "ArticleDraftsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vi7fly1_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_vi7fly1DS",
							"filters": "$DataGrid_vi7fly1 | crt.ToCollectionFilters : 'DataGrid_vi7fly1' : $DataGrid_vi7fly1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vi7fly1_SelectionState"
						}
					}
				},
				"parentName": "DataGrid_vi7fly1_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_vi7fly1_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ArticleDraftsList",
							"filters": "$DataGrid_vi7fly1 | crt.ToCollectionFilters : 'DataGrid_vi7fly1' : $DataGrid_vi7fly1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vi7fly1_SelectionState"
						}
					}
				},
				"parentName": "ArticleDraftsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_vi7fly1_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DataGrid_vi7fly1DS",
							"filters": "$DataGrid_vi7fly1 | crt.ToCollectionFilters : 'DataGrid_vi7fly1' : $DataGrid_vi7fly1_SelectionState | crt.SkipIfSelectionEmpty : $DataGrid_vi7fly1_SelectionState"
						}
					}
				},
				"parentName": "ArticleDraftsList",
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
					"DataTable_NoItems": {
						"from": [
							"DataGrid_vi7fly1"
						],
						"converter": "crt.DataGridHasNoItems | crt.InvertBooleanValue"
					},
					"PDS_Version_2vkp3aq": {
						"modelConfig": {
							"path": "PDS.Version"
						}
					},
					"FileList_03ugqr2": {
						"isCollection": true,
						"modelConfig": {
							"path": "FileList_03ugqr2DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"FileList_03ugqr2DS_Name": {
									"modelConfig": {
										"path": "FileList_03ugqr2DS.Name"
									}
								},
								"FileList_03ugqr2DS_CreatedOn": {
									"modelConfig": {
										"path": "FileList_03ugqr2DS.CreatedOn"
									}
								},
								"FileList_03ugqr2DS_CreatedBy": {
									"modelConfig": {
										"path": "FileList_03ugqr2DS.CreatedBy"
									}
								},
								"FileList_03ugqr2DS_Size": {
									"modelConfig": {
										"path": "FileList_03ugqr2DS.Size"
									}
								},
								"FileList_03ugqr2DS_Id": {
									"modelConfig": {
										"path": "FileList_03ugqr2DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_76nrmrk": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_76nrmrkDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ModifiedOn"
									}
								]
							},
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_76nrmrkDS_Version": {
									"modelConfig": {
										"path": "DataGrid_76nrmrkDS.Version"
									}
								},
								"DataGrid_76nrmrkDS_ModifiedOn": {
									"modelConfig": {
										"path": "DataGrid_76nrmrkDS.ModifiedOn"
									}
								},
								"DataGrid_76nrmrkDS_CreatedBy": {
									"modelConfig": {
										"path": "DataGrid_76nrmrkDS.CreatedBy"
									}
								},
								"DataGrid_76nrmrkDS_Id": {
									"modelConfig": {
										"path": "DataGrid_76nrmrkDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_76nrmrk_PredefinedFilter": {
						"value": {
							"items": {
								"f1ae0406-c0e5-4791-bbd7-a59a577e7f69": {
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
					},
					"PDS_Version_fqae4nx": {
						"modelConfig": {
							"path": "PDS.Version"
						}
					},
					"DataGrid_vi7fly1": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_vi7fly1DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_vi7fly1_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_vi7fly1DS_Name": {
									"modelConfig": {
										"path": "DataGrid_vi7fly1DS.Name"
									}
								},
								"DataGrid_vi7fly1DS_Id": {
									"modelConfig": {
										"path": "DataGrid_vi7fly1DS.Id"
									}
								}
							}
						}
					},
					"DataGrid_vi7fly1_PredefinedFilter": {
						"value": {
							"items": {
								"88af355e-cde7-4d86-be8f-0b3f428cfc72": {
									"filterType": 4,
									"comparisonType": 4,
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
								},
								"ca0f67aa-9da5-46c0-9bae-8a759573618e": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "CreatedBy"
									},
									"isAggregative": false,
									"dataValueType": 0,
									"referenceSchemaName": "Contact",
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"macrosType": 2
									}
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
					"dependencies": {
						"DataGrid_vi7fly1DS": [
							{
								"attributePath": "ParentArticle",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"FileList_03ugqr2DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "KnowledgeBaseFile",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"Size": {
									"path": "Size"
								}
							}
						}
					},
					"DataGrid_76nrmrkDS": {
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
					"DataGrid_vi7fly1DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "KnowledgeBase",
							"attributes": {
								"Name": {
									"path": "Name"
								}
							}
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