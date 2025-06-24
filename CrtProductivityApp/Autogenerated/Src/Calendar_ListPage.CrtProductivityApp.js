define("Calendar_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateCalendarRecordRequest",
						"params": {
							"entityName": "Activity",
							"defaultValues": [
								{
									"attributeName": "Type",
									"value": "fbe0acdc-cfc0-df11-b00f-001d60e938c6"
								},
								{
									"attributeName": "ShowInScheduler",
									"value": "true"
								},
								{
									"attributeName": "ActivityCategory",
									"value": "42c74c49-58e6-df11-971b-001d60e938c6"
								}
							]
						}
					},
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
							"entitySchemaName": "Activity"
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
						"bottom": "medium",
						"left": "none"
					},
					"fitContent": true,
					"visible": true
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
					"wrap": "wrap",
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
					"alignItems": "center",
					"visible": true
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
					"folderTree": "FolderTree",
					"layoutConfig": {}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
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
								"attribute": "QuickFilter_Date_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Calendar_n8j0xn9",
													"filterColumnStart": "StartDate",
													"filterColumnEnd": "DueDate"
												},
												"quickFilterType": "date-range"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_Date_Value"
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LeftFilterContainer",
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
								"d9ec68ed-38bd-4833-8bd7-b5eb1a8b32c2": {
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
											"c2d97e79-e2c4-43a3-ab42-daca24a7d6f4": {
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
											"48882832-e05f-4d4e-ab53-609631420857": {
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
										"key": "100e2b9c-75e7-488a-b788-a7fb79a79a85"
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
								"attribute": "QuickFilter_Employee_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Calendar_n8j0xn9",
													"filterColumn": "[ActivityParticipant:Activity].Participant"
												},
												"quickFilterType": "lookup"
											}
										]
									}
								]
							}
						],
						"from": "QuickFilter_Employee_Value"
					},
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QuickFilter_CanceledTasks",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_CanceledTasks_config_caption)#",
						"hint": "",
						"defaultValue": true,
						"approachState": false,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_CanceledTasks_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Calendar_n8j0xn9",
													"customFilter": {
														"items": {
															"9a125318-648e-4697-96e0-847992432ad1": {
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
																"referenceSchemaName": "ActivityStatus",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Canceled",
																				"Id": "201cfba8-58e6-df11-971b-001d60e938c6",
																				"value": "201cfba8-58e6-df11-971b-001d60e938c6",
																				"displayValue": "Canceled"
																			}
																		}
																	}
																]
															},
															"4c1b02ef-fc92-44fa-8482-90aeab08244e": {
																"filterType": 5,
																"comparisonType": 16,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "[ActivityParticipant:Activity].Id"
																},
																"isAggregative": true,
																"dataValueType": 4,
																"subFilters": {
																	"items": {
																		"7a0f5ffb-aa2a-4290-b092-015f86845745": {
																			"filterType": 1,
																			"comparisonType": 3,
																			"isEnabled": true,
																			"trimDateTimeParameterToDate": false,
																			"leftExpression": {
																				"expressionType": 0,
																				"columnPath": "Participant"
																			},
																			"isAggregative": false,
																			"dataValueType": 0,
																			"referenceSchemaName": "Contact",
																			"rightExpression": {
																				"expressionType": 1,
																				"functionType": 1,
																				"macrosType": 2
																			}
																		},
																		"3ef72aa6-354b-46a5-b81a-0c2d61ab2141": {
																			"filterType": 4,
																			"comparisonType": 3,
																			"isEnabled": true,
																			"trimDateTimeParameterToDate": false,
																			"leftExpression": {
																				"expressionType": 0,
																				"columnPath": "InviteResponse"
																			},
																			"isAggregative": false,
																			"dataValueType": 10,
																			"referenceSchemaName": "ParticipantResponse",
																			"rightExpressions": [
																				{
																					"expressionType": 2,
																					"parameter": {
																						"dataValueType": 10,
																						"value": {
																							"Name": "Declined",
																							"Id": "cc256758-4051-4021-9c51-216e37635c46",
																							"value": "cc256758-4051-4021-9c51-216e37635c46",
																							"displayValue": "Declined"
																						}
																					}
																				}
																			]
																		}
																	},
																	"logicalOperation": 0,
																	"isEnabled": true,
																	"filterType": 6,
																	"rootSchemaName": "ActivityParticipant",
																	"key": "f1f08017-edc8-40db-bacd-b901434812a4"
																}
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_CanceledTasks_config_caption)#",
													"hint": "",
													"defaultValue": true,
													"approachState": false,
													"icon": "settings-button-icon",
													"iconPosition": "left-icon"
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_CanceledTasks_Value"
						]
					},
					"visible": true
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_MyTasks",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_MyTasks_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_MyTasks_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Calendar_n8j0xn9",
													"customFilter": {
														"items": {
															"0b66ecc1-5f5f-4cce-99d7-3c5357cafa49": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Owner"
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
														"rootSchemaName": "Activity"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_ro08tuf_caption)#",
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
							"QuickFilter_MyTasks_Value"
						]
					}
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d767isz",
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
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"alignItems": "flex-end",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"layoutConfig": {},
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Calendar_n8j0xn9",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Calendar_n8j0xn9"
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
				},
				"parentName": "FlexContainer_d767isz",
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
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "Calendar_n8j0xn9DS"
						}
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "FlexContainer_d767isz",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CalendarSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CalendarSettingsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "settings-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "FlexContainer_d767isz",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarShowWeekends",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarShowWeekends_caption)#",
					"visible": true,
					"icon": "date",
					"clicked": {
						"request": "crt.ToggleShowWeekendsRequest",
						"params": {
							"showWeekendsAttributeName": "Calendar_showweekends"
						}
					}
				},
				"parentName": "CalendarSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarTimescale1",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarTimescale1_caption)#",
					"visible": true,
					"items": [],
					"icon": "date-time"
				},
				"parentName": "CalendarSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarScale5min",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarScale5min_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SetCalendarTimeScaleRequest",
						"params": {
							"timeScaleAttributeName": "Calendar_Tasks_TimeScale",
							"timeScale": "00:05:00"
						}
					}
				},
				"parentName": "MenuItem_CalendarTimescale1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarScale10min",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarScale10min_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SetCalendarTimeScaleRequest",
						"params": {
							"timeScaleAttributeName": "Calendar_Tasks_TimeScale",
							"timeScale": "00:10:00"
						}
					}
				},
				"parentName": "MenuItem_CalendarTimescale1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarScale15min",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarScale15min_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SetCalendarTimeScaleRequest",
						"params": {
							"timeScaleAttributeName": "Calendar_Tasks_TimeScale",
							"timeScale": "00:15:00"
						}
					}
				},
				"parentName": "MenuItem_CalendarTimescale1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarScale30min",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarScale30min_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SetCalendarTimeScaleRequest",
						"params": {
							"timeScaleAttributeName": "Calendar_Tasks_TimeScale",
							"timeScale": "00:30:00"
						}
					}
				},
				"parentName": "MenuItem_CalendarTimescale1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MenuItem_CalendarScale1hour",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_CalendarScale1hour_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.SetCalendarTimeScaleRequest",
						"params": {
							"timeScaleAttributeName": "Calendar_Tasks_TimeScale",
							"timeScale": "01:00:00"
						}
					}
				},
				"parentName": "MenuItem_CalendarTimescale1",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MenuItem_AddSyncAccount",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_AddSyncAccount_caption)#",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.AddCalendarSyncAccountRequest"
					}
				},
				"parentName": "CalendarSettingsButton",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_SetupSync",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_SetupSync_caption)#",
					"clicked": {
						"request": "crt.SetupCalendarSyncAccountRequest"
					},
					"icon": "gear-button-icon"
				},
				"parentName": "CalendarSettingsButton",
				"propertyName": "menuItems",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"sourceSchemaName": "ActivityFolder",
					"rootSchemaName": "Activity",
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
										"args": [
											"Activity"
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
					"borderRadius": "none"
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_pjbaoz2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": false
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Calendar_Tasks",
				"values": {
					"layoutConfig": {},
					"showWeekends": "$Calendar_showweekends",
					"highlightedStartDate": "Calendar_n8j0xn9_highlightedStartDate",
					"hightlightedEndDate": "Calendar_n8j0xn9_highlightedEndDate",
					"type": "crt.Calendar",
					"tileContent": [],
					"templateValuesMapping": {
						"startColumn": "Calendar_n8j0xn9DS_StartDate",
						"endColumn": "Calendar_n8j0xn9DS_DueDate",
						"titleColumn": "Calendar_n8j0xn9DS_Title",
						"Label_t6oa43h": "Calendar_n8j0xn9DS_Account",
						"Label_11cnx3j": "Calendar_n8j0xn9DS_Location",
						"notesColumn": "Calendar_n8j0xn9DS_Notes"
					},
					"useAutoScrollToCurrentTime": true,
					"miniPageSchemaName": "AddTaskMiniPage",
					"visible": true,
					"fitContent": true,
					"items": "$Calendar_n8j0xn9",
					"primaryColumnName": "Calendar_n8j0xn9DS_Id",
					"timeScale": "$Calendar_Tasks_TimeScale"
				},
				"parentName": "FlexContainer_pjbaoz2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_1s2wish",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "Calendar_Tasks",
				"propertyName": "tileContent",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_e2kfdbk",
				"values": {
					"type": "crt.Label",
					"labelColor": "#0D2E4E",
					"labelType": "caption",
					"labelThickness": "semibold",
					"caption": "$Calendar_n8j0xn9.Calendar_n8j0xn9DS_Title | crt.ToDisplayValue"
				},
				"parentName": "FlexContainer_1s2wish",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_t6oa43h",
				"values": {
					"type": "crt.Label",
					"labelColor": "#0D2E4E",
					"labelType": "caption",
					"labelThickness": "default",
					"caption": "$Calendar_n8j0xn9.Calendar_n8j0xn9DS_Account | crt.ToDisplayValue",
					"visible": "$Calendar_n8j0xn9.Calendar_n8j0xn9DS_Account | crt.ToBoolean"
				},
				"parentName": "FlexContainer_1s2wish",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_11cnx3j",
				"values": {
					"type": "crt.Label",
					"labelColor": "#0D2E4E",
					"labelType": "caption",
					"labelThickness": "default",
					"caption": "$Calendar_n8j0xn9.Calendar_n8j0xn9DS_Location | crt.ToDisplayValue",
					"visible": "$Calendar_n8j0xn9.Calendar_n8j0xn9DS_Location | crt.ToBoolean"
				},
				"parentName": "FlexContainer_1s2wish",
				"propertyName": "items",
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
					"Calendar_showweekends": {
						"value": false
					},
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
									"entitySchemaName": "ActivityFolder"
								}
							},
							"name": "FolderTree_items_DS"
						}
					},
					"FolderTree_active_folder_id": {},
					"FolderTree_active_folder_name": {},
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
											"value": "Activity"
										}
									}
								}
							}
						}
					},
					"Calendar_n8j0xn9": {
						"isCollection": true,
						"modelConfig": {
							"path": "Calendar_n8j0xn9DS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "Calendar_n8j0xn9_PredefinedFilter"
								},
								{
									"name": "QuickFilter_Date_Calendar_n8j0xn9",
									"loadOnChange": true
								},
								{
									"name": "FolderTree_active_folder_filter",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_Employee_Calendar_n8j0xn9",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_CanceledTasks_Calendar_n8j0xn9",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_MyTasks_Calendar_n8j0xn9",
									"loadOnChange": true
								},
								{
									"name": "SearchFilter_Calendar_n8j0xn9",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"Calendar_n8j0xn9DS_Title": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.Title"
									}
								},
								"Calendar_n8j0xn9DS_Id": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.Id"
									}
								},
								"Calendar_n8j0xn9DS_StartDate": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.StartDate"
									}
								},
								"Calendar_n8j0xn9DS_DueDate": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.DueDate"
									}
								},
								"Calendar_n8j0xn9DS_Account": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.Account"
									}
								},
								"Calendar_n8j0xn9DS_Location": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.Location"
									}
								},
								"Calendar_n8j0xn9DS_Notes": {
									"modelConfig": {
										"path": "Calendar_n8j0xn9DS.Notes"
									}
								}
							}
						}
					},
					"Calendar_n8j0xn9_PredefinedFilter": {
						"value": {
							"items": {
								"c6d0caa2-0bdc-4075-804c-8395b9fdbd5a": {
									"filterType": 4,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Type"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "ActivityType",
									"rightExpressions": [
										{
											"expressionType": 2,
											"parameter": {
												"dataValueType": 10,
												"value": {
													"Name": "Task",
													"Id": "fbe0acdc-cfc0-df11-b00f-001d60e938c6",
													"value": "fbe0acdc-cfc0-df11-b00f-001d60e938c6",
													"displayValue": "Task"
												}
											}
										}
									]
								},
								"456505d2-62b9-4ae3-aa0b-253089358747": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "ShowInScheduler"
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
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Activity"
						}
					},
					"Calendar_Tasks_TimeScale": {
						"value": "00:30:00"
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
						"filterAttributes": []
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
					"PDS_Id": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					},
					"PDS_Title": {
						"modelConfig": {
							"path": "PDS.Title"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
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
								"entitySchemaName": "Activity"
							},
							"scope": "viewElement"
						},
						"Calendar_n8j0xn9DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Activity",
								"attributes": {
									"Title": {
										"path": "Title"
									},
									"StartDate": {
										"path": "StartDate"
									},
									"DueDate": {
										"path": "DueDate"
									},
									"Owner": {
										"path": "Owner"
									},
									"Location": {
										"path": "Location"
									},
									"Account": {
										"path": "Account"
									},
									"Notes": {
										"path": "Notes"
									}
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