define("LeadOppHomePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "QuarterlyAttainmentIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(QuarterlyAttainmentIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "QuarterlyAttainmentWidget_867e2243a5c636bb7dec371b008a880f",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"3b22d035-4c3e-45cd-b45a-97f2b642e7db": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "OpportunityStage",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Closed won",
																"Id": "60d5310c-5be6-df11-971b-001d60e938c6",
																"value": "60d5310c-5be6-df11-971b-001d60e938c6",
																"displayValue": "Closed won"
															}
														}
													}
												]
											},
											"dd28f998-31a5-46e3-b40f-9b098a34fa4b": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "DueDate"
												},
												"isAggregative": false,
												"dataValueType": 8,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 13
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(QuarterlyAttainmentIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TotalOpportunityCountIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 3,
						"rowSpan": 2
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalOpportunityCountIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TotalOpportunityCountWidget_56c547fa3de1a6e9713eb22494e41c50",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(TotalOpportunityCountIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OppsCreatedVSOppsClosedChartWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"row": 1,
						"colSpan": 6,
						"rowSpan": 4
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(OppsCreatedVSOppsClosedChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "dark-green",
								"type": "spline",
								"label": "#ResourceString(OppsCreatedVSOppsClosedChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "OppsCreatedVSOppsClosedWidget_7dbc69cfe354376946d8c9c3f88f3ac6",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
														"columnPath": "Amount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							},
							{
								"color": "red",
								"type": "spline",
								"label": "#ResourceString(OppsCreatedVSOppsClosedChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "OppsCreatedVSOppsClosedWidget_2548639339bd24efc4c34ae11bb1f9b1",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"3d9f22ae-3710-45ea-ba40-e7188de32485": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Stage"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityStage",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Closed lost",
																		"Id": "a9aafdfe-2242-4f42-8cd5-2ae3b9556d79",
																		"value": "a9aafdfe-2242-4f42-8cd5-2ae3b9556d79",
																		"displayValue": "Closed lost"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
														"columnPath": "Amount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							},
							{
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(OppsCreatedVSOppsClosedChartWidget_series_2)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "OppsCreatedVSOppsClosedWidget_6c240b80ef04aaae36a7cddc5ed031e4",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"3d9f22ae-3710-45ea-ba40-e7188de32485": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Stage"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityStage",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Closed won",
																		"Id": "60d5310c-5be6-df11-971b-001d60e938c6",
																		"value": "60d5310c-5be6-df11-971b-001d60e938c6",
																		"displayValue": "Closed won"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
														"columnPath": "Amount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AnnualAttainmentIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AnnualAttainmentIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_tzjalnb_244f7ca06ce687fc5a29cbf3e635f196",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"3b22d035-4c3e-45cd-b45a-97f2b642e7db": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "OpportunityStage",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Closed won",
																"Id": "60d5310c-5be6-df11-971b-001d60e938c6",
																"value": "60d5310c-5be6-df11-971b-001d60e938c6",
																"displayValue": "Closed won"
															}
														}
													}
												]
											},
											"dd28f998-31a5-46e3-b40f-9b098a34fa4b": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "DueDate"
												},
												"isAggregative": false,
												"dataValueType": 8,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 19
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(AnnualAttainmentIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TotalOpportunityAmountIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalOpportunityAmountIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_99dwoa5_a2c7031bf34d755026f304c42f22cd41",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"bb8834e1-8916-456f-b245-5e219539352b": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "DueDate"
												},
												"isAggregative": false,
												"dataValueType": 8,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 19
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(TotalOpportunityAmountIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NewVSExistingCustomersChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"rowSpan": 4,
						"row": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(NewVSExistingCustomersChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "dark-green",
								"type": "bar",
								"label": "#ResourceString(NewVSExistingCustomersChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_56fnne7_552cb5b0138d92a763147503f6981677",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 13
														}
													},
													"3dc7c3b8-07d8-493d-95b4-6f008e9995ab": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "IsPrimary"
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
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							},
							{
								"color": "celestial-blue",
								"type": "bar",
								"label": "#ResourceString(NewVSExistingCustomersChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_56fnne7_ceb26727e55563e826973b7100d360d9",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 13
														}
													},
													"10aafd92-2b4e-48a1-b438-eb3632ad537b": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "IsPrimary"
														},
														"isAggregative": false,
														"dataValueType": 12,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 12,
																"value": false
															}
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "OppAmountByCustomerNeedChartWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 4,
						"row": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(OppAmountByCustomerNeedChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "celestial-blue",
								"type": "spline",
								"label": "#ResourceString(OppAmountByCustomerNeedChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_k0gri22_d121d561d4eb1f517b76a8d2fcf9d138",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Contact.CustomerNeed"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
														"columnPath": "Amount"
													},
													"functionType": 2,
													"aggregationType": 2,
													"aggregationEvalType": 0
												}
											}
										},
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-value",
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 0,
													"columnPath": "Contact.CustomerNeed"
												}
											}
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "OpenLeadsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 5
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OpenLeadsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_lsjgse3_1d1f4c7feac7c63897efb2e880532062",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {
											"5a7aa5db-4c34-44e7-921a-b39b045dd061": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "QualifyStatus.IsFinal"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									},
									"filterAttributes": []
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(OpenLeadsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "OpenOppsCountIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 10,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 5
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OpenOppsCountIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_21hnev5_7f0c3cc06531445aafc5bbb72f26763f",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"bb8834e1-8916-456f-b245-5e219539352b": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 13
												}
											},
											"55d4902b-0450-452d-80ef-807bc0005941": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(OpenOppsCountIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "OldLeadsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 7
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OldLeadsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_0ados2g_d5bd445d3c47cd9ad1a2a8f10c35636d",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {
											"5a7aa5db-4c34-44e7-921a-b39b045dd061": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "QualifyStatus.IsFinal"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											},
											"7625a928-21f7-4ca0-8671-02b3e0e2e793": {
												"filterType": 1,
												"comparisonType": 5,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"functionArgument": {
														"expressionType": 2,
														"parameter": {
															"dataValueType": 4,
															"value": 7
														}
													},
													"macrosType": 25
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Lead"
									},
									"filterAttributes": []
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(OldLeadsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "OpenOppsAmountCountIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 10,
						"colSpan": 3,
						"rowSpan": 2,
						"row": 7
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OpenOppsAmountCountIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_tsuim1g_8eb46f3d3311a99f618e3ebcce9b9977",
								"schemaName": "Opportunity",
								"filters": {
									"filter": {
										"items": {
											"bb8834e1-8916-456f-b245-5e219539352b": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 13
												}
											},
											"55d4902b-0450-452d-80ef-807bc0005941": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Stage.End"
												},
												"isAggregative": false,
												"dataValueType": 12,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 12,
														"value": false
													}
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Opportunity"
									},
									"filterAttributes": []
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
												"columnPath": "Amount"
											},
											"functionType": 2,
											"aggregationType": 2,
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
						"dataSourceConfig": {
							"schemaName": "ClientUnit_b819dd2",
							"parameters": {}
						},
						"text": {
							"template": "#ResourceString(OpenOppsAmountCountIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "without-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "LeadConversionChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 6,
						"rowSpan": 4,
						"row": 9
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(LeadConversionChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "dark-green",
								"type": "bar",
								"label": "#ResourceString(LeadConversionChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_f8o006r_5d14b2274a853185b05a992cc8abf7f6",
										"schemaName": "Lead",
										"filters": {
											"filter": {
												"items": {
													"8be491d5-96ef-41da-a7cf-e866895a387d": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							},
							{
								"color": "celestial-blue",
								"type": "bar",
								"label": "#ResourceString(LeadConversionChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_f8o006r_983a5e8fe209bb2c32d930a27561c2ab",
										"schemaName": "Lead",
										"filters": {
											"filter": {
												"items": {
													"71c5e352-b82c-44aa-923f-582980ecac5e": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"8dc506cd-36ed-4c95-8446-2d82c686633b": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "QualifyStatus.IsFinal"
														},
														"isAggregative": false,
														"dataValueType": 12,
														"rightExpression": {
															"expressionType": 2,
															"parameter": {
																"dataValueType": 12,
																"value": false
															}
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							},
							{
								"color": "red",
								"type": "bar",
								"label": "#ResourceString(LeadConversionChartWidget_series_2)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_f8o006r_5823e026f8844e45fde09bbf8a450a98",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							},
							{
								"color": "navy-blue",
								"type": "bar",
								"label": "#ResourceString(LeadConversionChartWidget_series_3)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "LeadConversionChartWidget_0248604d58204efed268c16aabefe714",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"34ee2dec-6b35-4db8-8ba6-44d28653b5f9": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"3d9f22ae-3710-45ea-ba40-e7188de32485": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Stage"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "OpportunityStage",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Closed won",
																		"Id": "60d5310c-5be6-df11-971b-001d60e938c6",
																		"value": "60d5310c-5be6-df11-971b-001d60e938c6",
																		"displayValue": "Closed won"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 2,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "SalesPipelineFunnelWidget",
				"values": {
					"layoutConfig": {
						"row": 9,
						"rowSpan": 9,
						"column": 7,
						"colSpan": 6
					},
					"type": "crt.FunnelWidget",
					"config": {
						"title": "#ResourceString(SalesPipelineFunnelWidgete_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"sectionBindingColumn": {
							"path": null
						},
						"entities": [
							{
								"schemaName": "Opportunity",
								"calculatedOperations": [
									{
										"operation": "Amount",
										"targetColumnName": "Budget"
									}
								],
								"connectedWith": null,
								"filters": {
									"items": {},
									"logicalOperation": 0,
									"isEnabled": true,
									"filterType": 6,
									"rootSchemaName": "Opportunity"
								}
							}
						]
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "LeadsCreatedChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 13,
						"colSpan": 3,
						"rowSpan": 5
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(LeadsCreatedChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "celestial-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(LeadsCreatedChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_22hw1c9_ef670534c2e72717115adf8fb3fd5366",
										"schemaName": "Lead",
										"filters": {
											"filter": {
												"items": {
													"1713dcc8-51db-4087-be80-c07fb32115df": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Lead"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "OppsCreatedChartWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 5,
						"row": 13
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(OppsCreatedChartWidget_title)#",
						"color": "celestial-blue",
						"theme": "full-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "celestial-blue",
								"type": "horizontal-bar",
								"label": "#ResourceString(OppsCreatedChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_c7n5stp_809f28924acb2bb27218320e8085c05a",
										"schemaName": "Opportunity",
										"filters": {
											"filter": {
												"items": {
													"0158fe29-985a-435d-b676-e484f164b26c": {
														"filterType": 1,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"isAggregative": false,
														"dataValueType": 7,
														"rightExpression": {
															"expressionType": 1,
															"functionType": 1,
															"macrosType": 19
														}
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Opportunity"
											},
											"filterAttributes": []
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
										"dependencies": [],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": true
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						}
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 14
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});