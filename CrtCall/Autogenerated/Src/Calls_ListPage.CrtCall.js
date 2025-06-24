define("Calls_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddButton"
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
							"entitySchemaName": "Call"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"wrap": "wrap",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainerInner",
				"values": {
					"wrap": "wrap",
					"visible": true
				}
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
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": null,
						"recordsFilter": null
					}
				}
			},
			{
				"operation": "merge",
				"name": "RightFilterContainer",
				"values": {
					"wrap": "wrap",
					"visible": true
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
					"rootSchemaName": "Call"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "fd4b3485-a46e-4219-b775-adef1210fe51",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "54cda3fa-2e67-a6d8-361d-403178016d96",
							"code": "PDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "fecb5c2c-4647-d43d-661b-d86e113354d0",
							"code": "PDS_Direction",
							"path": "Direction",
							"caption": "#ResourceString(PDS_Direction)#",
							"dataValueType": 10,
							"referenceSchemaName": "CallDirection"
						},
						{
							"id": "702bcd12-09cb-da3a-d3f3-5865fdaefaeb",
							"code": "PDS_CallerId",
							"path": "CallerId",
							"caption": "#ResourceString(PDS_CallerId)#",
							"dataValueType": 28,
							"width": 192
						},
						{
							"id": "355a0544-cfb4-92b3-5d9e-90445191ffdf",
							"code": "PDS_CalledId",
							"path": "CalledId",
							"caption": "#ResourceString(PDS_CalledId)#",
							"dataValueType": 28,
							"width": 145
						},
						{
							"id": "fc89daee-d61d-0095-9d65-19b11e24e1ca",
							"code": "PDS_Duration",
							"path": "Duration",
							"caption": "#ResourceString(PDS_Duration)#",
							"dataValueType": 4,
							"width": 114
						},
						{
							"id": "34ca1e3b-5533-e11c-00c5-eaaae00ea8c6",
							"code": "PDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(PDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "9623086d-3244-008b-b5f4-20d7a250067a",
							"code": "PDS_Account",
							"path": "Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						}
					],
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
				"name": "QuickFilter_Date",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_Date_config_caption)#",
						"hint": "#ResourceString(QuickFilter_Date_config_hint)#",
						"icon": "date",
						"iconPosition": "left-icon",
						"defaultValue": "[#currentWeek#]"
					},
					"filterType": "date-range",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_Date_Items",
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
						"from": "QuickFilter_Date_Value"
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QuickFilter_Employee",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_Employee_config_caption)#",
						"hint": "#ResourceString(QuickFilter_Employee_config_hint)#",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]",
								"checkedState": true
							}
						],
						"entitySchemaName": "Contact",
						"recordsFilter": {
							"items": {
								"e5ed7396-9398-4dfe-83fa-fc64d2e4dd51": {
									"filterType": 5,
									"comparisonType": 15,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "[SysAdminUnit:Contact].Id"
									},
									"isAggregative": true,
									"dataValueType": 4,
									"subFilters": {
										"items": {
											"0d808c18-17a0-44cd-a47b-424b43815dfa": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Active"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": true
													}
												}
											},
											"13ffc45b-23b2-4994-ac8f-1bd825c0c2a6": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "ConnectionType"
												},
												"isAggregative": false,
												"dataValueType": 4,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 4,
														"value": 0
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "SysAdminUnit",
										"key": "64a18a69-33bd-4064-81d3-8d48dd6d59c9"
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Contact"
						}
					},
					"filterType": "lookup",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_Employee_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "CreatedBy"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_Employee_Value"
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_MyCalls",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_MyCalls_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_MyCalls_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"0ed6db32-f109-4b61-94a4-f7cd602cff09": {
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
														"rootSchemaName": "Call"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_n8634ha_caption)#",
													"defaultValue": false,
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_MyCalls_Value"
						]
					}
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
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
							"tagInRecordSourceSchemaName": "CallInTag"
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
							"tagInRecordSourceSchemaName": "CallInTag"
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
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState"
						}
					}
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
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState"
						}
					}
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
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_Direction": {
						"modelConfig": {
							"path": "PDS.Direction"
						}
					},
					"PDS_CallerId": {
						"modelConfig": {
							"path": "PDS.CallerId"
						}
					},
					"PDS_CalledId": {
						"modelConfig": {
							"path": "PDS.CalledId"
						}
					},
					"PDS_Duration": {
						"modelConfig": {
							"path": "PDS.Duration"
						}
					},
					"PDS_Contact": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Account": {
						"modelConfig": {
							"path": "PDS.Account"
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
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_Date_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_Employee_Items",
							"loadOnChange": true
						},
						{
							"name": "QuickFilter_MyCalls_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
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
							"direction": "asc",
							"columnName": "Caption"
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
					"entitySchemaName": "Call",
					"attributes": {
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"Direction": {
							"path": "Direction"
						},
						"CallerId": {
							"path": "CallerId"
						},
						"CalledId": {
							"path": "CalledId"
						},
						"Duration": {
							"path": "Duration"
						},
						"Contact": {
							"path": "Contact"
						},
						"Account": {
							"path": "Account"
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