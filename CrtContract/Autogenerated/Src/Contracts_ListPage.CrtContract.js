define("Contracts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contract"
						}
					}
				}
			},
			{
				"operation": "move",
				"name": "MenuItem_ImportFromExcel",
				"parentName": "ActionButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
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
						"entitySchemaName": "ContractTag"
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
													"filterColumn": "[ContractInTag:Entity].Tag"
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
				"index": 3
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "move",
				"name": "SearchFilter",
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "RefreshButton",
				"values": {
					"caption": "#ResourceString(RefreshButton_caption)#",
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
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"sourceSchemaName": "ContractFolder",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FolderTree_active_folder_filter",
								"converters": [
									{
										"converter": "crt.FolderTreeActiveFilterAttributeConverter",
										"args": [
											"Contract"
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
					"rootSchemaName": "Contract",
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
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Number",
							"caption": "#ResourceString(PDS_Number)#",
							"dataValueType": 1,
							"width": 175
						},
						{
							"id": "f2a3b40f-1b70-1281-d7a4-934694a48871",
							"code": "PDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(PDS_StartDate)#",
							"dataValueType": 8,
							"width": 153
						},
						{
							"id": "227f904a-0fd3-433e-df26-35d44e92fdb9",
							"code": "PDS_Type",
							"path": "Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractType",
							"width": 190
						},
						{
							"id": "2ed8aa30-bbc7-a3d6-436e-1c2bc4ee4532",
							"code": "PDS_Account",
							"path": "Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 223
						},
						{
							"id": "85c35032-a7bf-a307-dc3a-25c23844510f",
							"code": "PDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(PDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 179
						},
						{
							"id": "68e22120-5968-a980-a59c-bf551ed310f6",
							"code": "PDS_State",
							"path": "State",
							"caption": "#ResourceString(PDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractState",
							"width": 241
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
				"name": "InactiveContractsQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(InactiveContractsQuickFilter_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": false,
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "InactiveContractsQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"c17547c9-68f6-4368-9bb7-43b166105bf7": {
																"filterType": 1,
																"comparisonType": 6,
																"isEnabled": true,
																"trimDateTimeParameterToDate": true,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "StartDate"
																},
																"isAggregative": false,
																"dataValueType": 8,
																"rightExpression": {
																	"expressionType": 1,
																	"functionType": 1,
																	"macrosType": 4
																}
															},
															"8543b600-831b-481d-8c04-dfd75a96b0ac": {
																"items": {
																	"7e9bde13-234b-457e-afd3-72e605b9080b": {
																		"filterType": 2,
																		"comparisonType": 1,
																		"isEnabled": true,
																		"trimDateTimeParameterToDate": false,
																		"leftExpression": {
																			"expressionType": 0,
																			"columnPath": "EndDate"
																		},
																		"isAggregative": false,
																		"dataValueType": 8,
																		"isNull": true
																	},
																	"b299c431-47d0-4176-a959-21f68b8c946d": {
																		"filterType": 1,
																		"comparisonType": 8,
																		"isEnabled": true,
																		"trimDateTimeParameterToDate": true,
																		"leftExpression": {
																			"expressionType": 0,
																			"columnPath": "EndDate"
																		},
																		"isAggregative": false,
																		"dataValueType": 8,
																		"rightExpression": {
																			"expressionType": 1,
																			"functionType": 1,
																			"macrosType": 4
																		}
																	}
																},
																"logicalOperation": 1,
																"isEnabled": true,
																"filterType": 6,
																"rootSchemaName": "Contract",
																"key": "8543b600-831b-481d-8c04-dfd75a96b0ac"
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Contract"
													}
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_3yx1va4_config_caption)#",
													"hint": "",
													"defaultValue": false,
													"approachState": false,
													"icon": "date",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": "InactiveContractsQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DurationQuickFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(DurationQuickFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DurationQuickFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumnStart": "StartDate",
													"filterColumnEnd": "EndDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "DurationQuickFilter_Value"
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
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
							"tagInRecordSourceSchemaName": "ContractInTag"
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
							"tagInRecordSourceSchemaName": "ContractInTag"
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
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Number": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"PDS_StartDate": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"PDS_Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"PDS_Owner": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"PDS_State": {
						"modelConfig": {
							"path": "PDS.State"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
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
							"name": "InactiveContractsQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "DurationQuickFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
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
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});