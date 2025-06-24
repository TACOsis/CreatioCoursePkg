[
	{
		"operation": "insert",
		"values": {
			"viewConfig": {
				"type": "crt.Screen",
				"header": [{
					"name": "QuickFilter_Employee",
					"type": "crt.QuickFilter",
					"filterType": "lookup",
					"config": {
						"caption": "Employee",
						"icon": "person-button-icon",
						"iconPosition": "left-icon",
						"defaultValue": [
							{
								"value": "[#currentUserContact#]"
							}
						],
						"setDefaultOnReset": true,
						"entitySchemaName": "Contact",
						"cacheConfig": {
							"syncRuleName": "EmployeeLookup",
							"useImportOptionsFromOperation": true
						},
						"recordsFilter": {
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "Contact",
							"items": {
								"SysAdminUnit_Filter": {
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
											"isActive": {
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
											"isUser": {
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
							}
						}
					}
				}],
				"body": {
					"type": "crt.PositionedExpansionPanel",
					"title": "$CalendarPickerFocusDate | crt.DateToMonthString",
					"toggleItems": [
						{
							"type": "crt.CalendarDatePicker",
							"value": "CalendarStartDateAttribute",
							"focusDate": "CalendarPickerFocusDate"
						}
					],
					"tools": [
						{
							"type": "crt.Button",
							"icon": "calendar-icon",
							"size": "medium",
							"text": "$CalendarViewModeCaptions | crt.ToObjectProp : $CalendarViewMode",
							"color": "secondary",
							"iconPosition": "left-icon",
							"menuTitle": "#ResourceString(CalendarViewModeMenuTitle)#",
							"menuItems": [
								{
									"type": "crt.MenuItem",
									"caption": "#ResourceString(CalendarViewMode.Day)#",
									"clicked": [
										{
											"request": "crt.SetViewModelAttributeRequest",
											"params": {
												"attributeName": "CalendarViewMode",
												"value": "day"
											}
										},
										{
											"request": "crt.SaveAttributeToProfileRequest",
											"params": {
												"profileAttributeName": "CalendarViewMode"
											}
										}
									]
								},
								{
									"type": "crt.MenuItem",
									"caption": "#ResourceString(CalendarViewMode.ThreeDays)#",
									"clicked": [
										{
											"request": "crt.SetViewModelAttributeRequest",
											"params": {
												"attributeName": "CalendarViewMode",
												"value": "threeDays"
											}
										},
										{
											"request": "crt.SaveAttributeToProfileRequest",
											"params": {
												"profileAttributeName": "CalendarViewMode"
											}
										}
									]
								},
								{
									"type": "crt.MenuItem",
									"caption": "#ResourceString(CalendarViewMode.Week)#",
									"clicked": [
										{
											"request": "crt.SetViewModelAttributeRequest",
											"params": {
												"attributeName": "CalendarViewMode",
												"value": "week"
											}
										},
										{
											"request": "crt.SaveAttributeToProfileRequest",
											"params": {
												"profileAttributeName": "CalendarViewMode"
											}
										}
									]
								}
							]
						}
					],
					"items": [
						{
							"type": "crt.Calendar",
							"templateValuesMapping": {
								"startColumn": "StartDate",
								"endColumn": "DueDate",
								"titleColumn": "Title",
								"notesColumn": "Notes"
							},
							"highlightedStartDate": "Calendar_highlightedStartDate",
							"dateRange": "CalendarStartDateAttribute",
							"viewMode": "CalendarViewMode",
							"focusDate": "CalendarPickerFocusDate",
							"items": "Items",
							"createItem": {
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
										},
										{
											"attributeName": "StartDate",
											"value": "$Calendar_highlightedStartDate"
										}
									]
								}
							}
						}
					]
				},
				"title": "Calendar",
				"actions": [],
				"floatAction": {
					"type": "crt.Button",
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
									"value": true
								},
								{
									"attributeName": "ActivityCategory",
									"value": "42c74c49-58e6-df11-971b-001d60e938c6"
								}
							]
						}
					},
					"isFloat": true,
					"icon": {
						"type": "crt.Icon",
						"resourceName": "action_add"
					},
					"name": "Calendar_FloatActionButton"
				},
				"name": "ViewConfig"
			},
			"viewModelConfig": {
				"attributes": {
					"Items": {
						"modelConfig": {
							"path": "PDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "Calendar_PredefinedFilter"
								},
								{
									"loadOnChange": true,
									"name": "Calendar_ParticipantFilter"
								}
							],
							"cacheConfig": {
								"syncRuleName": "CalendarActivityModule",
								"useImportOptionsFromOperation": true
							}
						},
						"viewModelConfig": {
							"attributes": {
								"PDS_Title": {
									"modelConfig": {
										"path": "PDS.Title"
									}
								},
								"PDS_Id": {
									"modelConfig": {
										"path": "PDS.Id"
									}
								},
								"PDS_StartDate": {
									"modelConfig": {
										"path": "PDS.StartDate"
									}
								},
								"PDS_DueDate": {
									"modelConfig": {
										"path": "PDS.DueDate"
									}
								},
								"PDS_Notes": {
									"modelConfig": {
										"path": "PDS.Notes"
									}
								}
							}
						}
					},
					"QuickFilter_Employee_Value": {
						"value": [
							{"value": "[#currentUserContact#]"}
						]
					},
					"Calendar_ParticipantFilter_Converter_Arg": {
						"value": {
							"target": {
								"viewAttributeName": "Items",
								"filterColumn": "[ActivityParticipant:Activity].Participant"
							},
							"quickFilterType": "lookup"
						}
					},
					"Calendar_ParticipantFilter": {
						"from": "QuickFilter_Employee_Value",
						"converter": "crt.QuickFilterAttributeConverter : $Calendar_ParticipantFilter_Converter_Arg"
					},
					"Calendar_PredefinedFilter": {
						"value": {
							"items": {
								"TypeFilter": {
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
								"ShowInSchedulerFilter": {
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
					"CalendarViewModeCaptions": {
						"value": {
							"day": "#ResourceString(CalendarViewMode.Day)#",
							"threeDays": "#ResourceString(CalendarViewMode.ThreeDays)#",
							"week": "#ResourceString(CalendarViewMode.Week)#"
						}
					},
					"name": "Attributes"
				},
				"name": "ViewModelConfig"
			},
			"modelConfig": {
				"primaryDataSourceName": "PDS",
				"dataSources": {
					"PDS": {
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
								"Notes": {
									"path": "Notes"
								},
								"ShowInScheduler": {
									"path": "ShowInScheduler"
								},
								"Type": {
									"path": "Type"
								}
							}
						}
					},
					"name": "DataSources"
				},
				"dependencies": {},
				"name": "ModelConfig"
			}
		}
	}
]