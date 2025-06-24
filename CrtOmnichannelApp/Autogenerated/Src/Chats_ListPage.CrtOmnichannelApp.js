define("Chats_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "AddButton"
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "MainFilterContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
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
						"entitySchemaName": "OmniChatTag",
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
													"filterColumn": "[OmniChatInTag:Entity].Tag"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "LookupQuickFilterByTag_AverageFirstResponseTimeIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageFirstResponseTimeIndicatorWidget_Data",
													"filterColumn": "[OmniChatInTag:Entity].Tag"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "LookupQuickFilterByTag_AverageChatDurationIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageChatDurationIndicatorWidget_Data",
													"filterColumn": "[OmniChatInTag:Entity].Tag"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "LookupQuickFilterByTag_WaitingForProcessingIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WaitingForProcessingIndicatorWidget_Data",
													"filterColumn": "[OmniChatInTag:Entity].Tag"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "LookupQuickFilterByTag_ChatsInProgressIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChatsInProgressIndicatorWidget_Data",
													"filterColumn": "[OmniChatInTag:Entity].Tag"
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
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
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
					"sourceSchemaName": "OmniChatFolder",
					"rootSchemaName": "OmniChat"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"sticky": true
						},
						{
							"id": "10dd1bba-1029-9a86-eb43-b966febb39ca",
							"code": "PDS_Channel",
							"caption": "#ResourceString(PDS_Channel)#",
							"dataValueType": 10
						},
						{
							"id": "ef34001e-b972-4adc-2ceb-90f6a60776b3",
							"code": "PDS_Contact",
							"caption": "#ResourceString(PDS_Contact)#",
							"dataValueType": 10
						},
						{
							"id": "528c7788-98f0-8a59-b32a-33e425d81faa",
							"code": "PDS_Operator",
							"caption": "#ResourceString(PDS_Operator)#",
							"dataValueType": 10
						},
						{
							"id": "e113a796-e59f-a772-6dd9-f518c5db1adb",
							"code": "PDS_Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10
						},
						{
							"id": "710bdb35-3f52-936a-f914-2d39461c1707",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
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
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(RowToolbar_OpenItem_caption)#",
							"icon": "edit-row-action",
							"disabled": "$Items.PrimaryModelMode | crt.IsEqual : 'create'",
							"clicked": {
								"request": "crt.UpdateRecordRequest",
								"params": {
									"itemsAttributeName": "DataTable",
									"recordId": "$Items.PDS_Id"
								},
								"useRelativeContext": true
							}
						},
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(RowToolbar_DeleteItem_caption)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteRecordRequest",
								"params": {
									"itemsAttributeName": "DataTable",
									"recordId": "$Items.PDS_Id"
								}
							}
						}
					],
					"selectionState": "$DataTable_SelectionState",
					"_selectionOptions": {
						"attribute": "DataTable_SelectionState"
					},
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "insert",
				"name": "DateFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(DateFilter_config_caption)#",
						"hint": "",
						"icon": "date",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DateFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumnStart": "CreatedOn",
													"filterColumnEnd": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateFilter_WaitingForProcessingIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WaitingForProcessingIndicatorWidget_Data",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateFilter_ChatsInProgressIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChatsInProgressIndicatorWidget_Data",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateFilter_AverageChatDurationIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageChatDurationIndicatorWidget_Data",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							},
							{
								"attribute": "DateFilter_AverageFirstResponseTimeIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageFirstResponseTimeIndicatorWidget_Data",
													"filterColumn": "CreatedOn"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "DateFilter_Value"
					},
					"filterType": "date-range",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AgentFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(AgentFilter_config_caption)#",
						"hint": "",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "SysAdminUnit",
						"recordsFilter": {
							"items": {
								"77b72b8d-a3f0-407a-b8f5-f56a44202d7d": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysAdminUnitTypeValue"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 4
										}
									}
								},
								"5ce97ec1-d43f-4560-a2d7-f18fcde7372a": {
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
							"rootSchemaName": "SysAdminUnit"
						}
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AgentFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Operator"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "AgentFilter_WaitingForProcessingIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WaitingForProcessingIndicatorWidget_Data",
													"filterColumn": "Operator"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "AgentFilter_ChatsInProgressIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChatsInProgressIndicatorWidget_Data",
													"filterColumn": "Operator"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "AgentFilter_AverageChatDurationIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageChatDurationIndicatorWidget_Data",
													"filterColumn": "Operator"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "AgentFilter_AverageFirstResponseTimeIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageFirstResponseTimeIndicatorWidget_Data",
													"filterColumn": "Operator"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "AgentFilter_Value"
					},
					"filterType": "lookup"
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "StatusFilter",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(StatusFilter_config_caption)#",
						"hint": "",
						"icon": "filter-column-icon",
						"iconPosition": "left-icon",
						"defaultValue": [],
						"entitySchemaName": "OmnichannelChatStatus",
						"recordsFilter": null
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "StatusFilter_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "StatusFilter_WaitingForProcessingIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "WaitingForProcessingIndicatorWidget_Data",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "StatusFilter_ChatsInProgressIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "ChatsInProgressIndicatorWidget_Data",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "StatusFilter_AverageChatDurationIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageChatDurationIndicatorWidget_Data",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							},
							{
								"attribute": "StatusFilter_AverageFirstResponseTimeIndicatorWidget_Data",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "AverageFirstResponseTimeIndicatorWidget_Data",
													"filterColumn": "Status"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "StatusFilter_Value"
					},
					"filterType": "lookup",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "VidgetsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"alignItems": "stretch"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AverageFirstResponseTimeIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AverageFirstResponseTimeIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "AverageFirstResponseTimeIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {
											"b5471a3b-84ab-4fdb-847e-137cbbf4b0ee": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "FirstReplyTime"
												},
												"isAggregative": false,
												"dataValueType": 4,
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": [
										{
											"attribute": "FolderTree_active_folder_filter",
											"loadOnChange": true
										},
										{
											"attribute": "DateFilter_AverageFirstResponseTimeIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "AgentFilter_AverageFirstResponseTimeIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "StatusFilter_AverageFirstResponseTimeIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "LookupQuickFilterByTag_AverageFirstResponseTimeIndicatorWidget_Data",
											"loadOnChange": true
										}
									]
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "FirstReplyTime"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AverageFirstResponseTimeIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "hourglass-icon",
								"color": "blue"
							}
						},
						"theme": "without-fill"
					},
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"visible": true
				},
				"parentName": "VidgetsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AverageChatDurationIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AverageChatDurationIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "AverageChatDurationIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {
											"15c73651-fc07-47aa-b7cc-57086a3a628c": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "ChatDuration"
												},
												"isAggregative": false,
												"dataValueType": 4,
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": [
										{
											"attribute": "FolderTree_active_folder_filter",
											"loadOnChange": true
										},
										{
											"attribute": "DateFilter_AverageChatDurationIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "AgentFilter_AverageChatDurationIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "StatusFilter_AverageChatDurationIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "LookupQuickFilterByTag_AverageChatDurationIndicatorWidget_Data",
											"loadOnChange": true
										}
									]
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "ChatDuration"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AverageChatDurationIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "clock-icon",
								"color": "green"
							}
						},
						"theme": "without-fill"
					},
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"visible": true
				},
				"parentName": "VidgetsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WaitingForProcessingIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(WaitingForProcessingIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "WaitingForProcessingIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {
											"58e2364f-2bcf-4609-b304-43913ca637c8": {
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
												"referenceSchemaName": "OmnichannelChatStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Waiting for processing",
																"Id": "79bccffa-8c8b-4863-b376-a69d2244182b",
																"value": "79bccffa-8c8b-4863-b376-a69d2244182b",
																"displayValue": "Waiting for processing"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": [
										{
											"attribute": "FolderTree_active_folder_filter",
											"loadOnChange": true
										},
										{
											"attribute": "DateFilter_WaitingForProcessingIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "AgentFilter_WaitingForProcessingIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "StatusFilter_WaitingForProcessingIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "LookupQuickFilterByTag_WaitingForProcessingIndicatorWidget_Data",
											"loadOnChange": true
										}
									]
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(WaitingForProcessingIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "bell-icon",
								"color": "cadmium-red"
							}
						},
						"theme": "without-fill"
					},
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"visible": true
				},
				"parentName": "VidgetsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChatsInProgressIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ChatsInProgressIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ChatsInProgressIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {
											"58e2364f-2bcf-4609-b304-43913ca637c8": {
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
												"referenceSchemaName": "OmnichannelChatStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "In progress",
																"Id": "81737bdd-60c7-4ef7-bb75-52c53d5c38c1",
																"value": "81737bdd-60c7-4ef7-bb75-52c53d5c38c1",
																"displayValue": "In progress"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": [
										{
											"attribute": "DateFilter_ChatsInProgressIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "AgentFilter_ChatsInProgressIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "StatusFilter_ChatsInProgressIndicatorWidget_Data",
											"loadOnChange": true
										},
										{
											"attribute": "FolderTree_active_folder_filter",
											"loadOnChange": true
										},
										{
											"attribute": "LookupQuickFilterByTag_ChatsInProgressIndicatorWidget_Data",
											"loadOnChange": true
										}
									]
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(ChatsInProgressIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "level-icon",
								"color": "dark-green"
							}
						},
						"theme": "without-fill"
					},
					"layoutConfig": {
						"column": 4,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"visible": true
				},
				"parentName": "VidgetsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DataTableAddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTableAddTagsBulkAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"tagInRecordSourceSchemaName": "OmniChatInTag"
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
				"name": "DataTableRemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTableRemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "PDS",
							"filters": "$Items | crt.ToCollectionFilters : 'Items' : $DataTable_SelectionState | crt.SkipIfSelectionEmpty : $DataTable_SelectionState",
							"tagInRecordSourceSchemaName": "OmniChatInTag"
						}
					},
					"visible": true
				},
				"parentName": "DataTableAddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataTableExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTableExportToExcelBulkAction_caption)#",
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
				"name": "DataTableDeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DataTableDeleteBulkAction_caption)#",
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
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Channel": {
						"modelConfig": {
							"path": "PDS.Channel"
						}
					},
					"PDS_Contact": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Operator": {
						"modelConfig": {
							"path": "PDS.Operator"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
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
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "DateFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "AgentFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "StatusFilter_Items",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
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
							"direction": "desc",
							"columnName": "CreatedOn"
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
					"entitySchemaName": "OmniChat",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Channel": {
							"path": "Channel"
						},
						"Contact": {
							"path": "Contact"
						},
						"Operator": {
							"path": "Operator"
						},
						"Status": {
							"path": "Status"
						},
						"CreatedOn": {
							"path": "CreatedOn"
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