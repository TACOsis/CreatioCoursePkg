define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileFieldGridContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "LeadName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "SimilarLeadSearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SimilarLeadSearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SimilarLeadSearchFilter_SimilarLeadList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"SimilarLeadList"
										]
									}
								]
							}
						],
						"from": [
							"SimilarLeadSearchFilter_SearchValue",
							"SimilarLeadSearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProgressBar",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "Lead"
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadDisqualifyReason",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(LeadDisqualifyReason_label)#",
					"labelPosition": "above",
					"control": "$LookupAttribute_mfwvuqd",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PredictiveScore",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(PredictiveScore_label)#",
					"labelPosition": "above",
					"control": "$NumberAttribute_sgdzxor",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(PredictiveScore_tooltip)#",
					"readonly": true
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OverviewNewAnalyticsContainer",
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
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PredictiveProbabilityMetricFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none"
				},
				"parentName": "OverviewNewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PredictiveProbabilityHeaderFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"alignItems": "center",
					"padding": {
						"top": "extra-small",
						"left": "medium"
					}
				},
				"parentName": "PredictiveProbabilityMetricFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProbabilityLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_cufc9c2_caption)#)#",
					"labelType": "body-large",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "PredictiveProbabilityHeaderFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExplainProbabilityScoreButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_gobwzl9_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "copilot-rewrite-btn-icon",
					"clicked": {
						"request": "crt.CopilotActionRequest",
						"params": {
							"prompt": "Explain the lead conversion probability score"
						}
					},
					"clickMode": "default"
				},
				"parentName": "PredictiveProbabilityHeaderFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PredictiveProbabilityMetric",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PredictiveProbabilityMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_hiat35m_Data",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {},
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
												"columnPath": "PredictiveScore"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(PredictiveProbabilityMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "violet",
							"icon": {
								"iconName": "level-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "PredictiveProbabilityMetricFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailsSentNewMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EmailsSentNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_5p2zg38_Data",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"36162f02-3f07-4988-b739-96c621cc849b": {
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
																"Name": "Email",
																"Id": "e2831dec-cfc0-df11-b00f-001d60e938c6",
																"value": "e2831dec-cfc0-df11-b00f-001d60e938c6",
																"displayValue": "Email"
															}
														}
													}
												]
											},
											"5405cbfe-90f7-4210-a565-cf6764008f40": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "MessageType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EmailType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Outgoing",
																"Id": "7f6d3f94-f36b-1410-068c-20cf30b39373",
																"value": "7f6d3f94-f36b-1410-068c-20cf30b39373",
																"displayValue": "Outgoing"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Activity"
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
								"dependencies": [
									{
										"attributePath": "Lead",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(EmailsSentNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "orange-red",
							"icon": {
								"iconName": "mail-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "OverviewNewAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OutgoingCallsNewMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OutgoingCallsNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_x73skz0_Data",
								"schemaName": "Call",
								"filters": {
									"filter": {
										"items": {
											"4b580017-4f7a-458f-a0c6-c4c7845af4bc": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Direction"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CallDirection",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Outgoing",
																"Id": "53f71b5f-7e17-4cf5-bf14-6a59212db422",
																"Image": "",
																"value": "53f71b5f-7e17-4cf5-bf14-6a59212db422",
																"displayValue": "Outgoing"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Call"
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
								"dependencies": [
									{
										"attributePath": "Lead",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(OutgoingCallsNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green",
							"icon": {
								"iconName": "phone-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "OverviewNewAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CreatedOnMetric",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(CreatedOnMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_eo3onft_Data",
								"schemaName": "Lead",
								"filters": {
									"filter": {
										"items": {},
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
												"columnPath": "CreatedOn"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "datetime",
								"date": {
									"display": true
								},
								"time": {
									"display": false
								}
							}
						},
						"text": {
							"template": "#ResourceString(CreatedOnMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue",
							"icon": {
								"iconName": "calendar-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "OverviewNewAnalyticsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OverviewAnalyticsContainer",
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
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailsSentMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EmailsSentMetric_title)#",
						"data": {
							"providing": {
								"attribute": "EmailsSentMetric_Data",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"4a4c02c8-7cdf-4ae2-af98-186b362fe534": {
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
																"Name": "Email",
																"Id": "e2831dec-cfc0-df11-b00f-001d60e938c6",
																"value": "e2831dec-cfc0-df11-b00f-001d60e938c6",
																"displayValue": "Email"
															}
														}
													}
												]
											},
											"174ad6a8-31c4-4ff2-89ad-cae289883a15": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "MessageType"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "EmailType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Outgoing",
																"Id": "7f6d3f94-f36b-1410-068c-20cf30b39373",
																"value": "7f6d3f94-f36b-1410-068c-20cf30b39373",
																"displayValue": "Outgoing"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Activity"
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
								"dependencies": [
									{
										"attributePath": "Lead",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Lead",
							"attributes": {
								"QualifiedContactJobTitle": {
									"path": "QualifiedContact.JobTitle",
									"type": "ForwardReference"
								},
								"QualifiedAccountWeb": {
									"path": "QualifiedAccount.Web",
									"type": "ForwardReference"
								},
								"QualifiedAccountType": {
									"path": "QualifiedAccount.Type",
									"type": "ForwardReference"
								},
								"QualifiedAccountIndustry": {
									"path": "QualifiedAccount.Industry",
									"type": "ForwardReference"
								},
								"QualifiedAccountEmployeesNumber": {
									"path": "QualifiedAccount.EmployeesNumber",
									"type": "ForwardReference"
								},
								"QualifiedAccountAnnualRevenue": {
									"path": "QualifiedAccount.AnnualRevenue",
									"type": "ForwardReference"
								}
							}
						},
						"text": {
							"template": "#ResourceString(EmailsSentMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OutgoingCallsMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OutgoingCallsMetric_title)#",
						"data": {
							"providing": {
								"attribute": "OutgoingCallsMetric_Data",
								"schemaName": "Call",
								"filters": {
									"filter": {
										"items": {
											"1d1580c9-29f8-4362-aee9-ef5496a39df4": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Direction"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CallDirection",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Outgoing",
																"Id": "53f71b5f-7e17-4cf5-bf14-6a59212db422",
																"Image": "",
																"value": "53f71b5f-7e17-4cf5-bf14-6a59212db422",
																"displayValue": "Outgoing"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Call"
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
								"dependencies": [
									{
										"attributePath": "Lead",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Lead",
							"attributes": {
								"QualifiedContactJobTitle": {
									"path": "QualifiedContact.JobTitle",
									"type": "ForwardReference"
								},
								"QualifiedAccountWeb": {
									"path": "QualifiedAccount.Web",
									"type": "ForwardReference"
								},
								"QualifiedAccountType": {
									"path": "QualifiedAccount.Type",
									"type": "ForwardReference"
								},
								"QualifiedAccountIndustry": {
									"path": "QualifiedAccount.Industry",
									"type": "ForwardReference"
								},
								"QualifiedAccountEmployeesNumber": {
									"path": "QualifiedAccount.EmployeesNumber",
									"type": "ForwardReference"
								},
								"QualifiedAccountAnnualRevenue": {
									"path": "QualifiedAccount.AnnualRevenue",
									"type": "ForwardReference"
								}
							}
						},
						"text": {
							"template": "#ResourceString(OutgoingCallsMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SalesChannel",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1prxdry",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1prxdry",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ClosingDetails",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_1zhbdlz",
					"labelPosition": "auto",
					"control": "$StringAttribute_1zhbdlz",
					"multiline": true,
					"visible": false,
					"placeholder": "#ResourceString(ClosingDetails_placeholder)#",
					"tooltip": ""
				},
				"parentName": "DetailsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProcessingTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ProcessingTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Timeline",
				"values": {
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_caption)#",
					"label": "#ResourceString(Timeline_label)#",
					"filters": []
				},
				"parentName": "ProcessingTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Call",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Lead",
					"sortedByColumn": "StartDate",
					"ownerColumn": "CreatedBy",
					"data": {
						"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
						"schemaName": "Call",
						"schemaType": null,
						"filter": null,
						"columns": [
							{
								"columnName": "Direction",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "StartDate",
								"columnLayout": {
									"column": 5,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "EndDate",
								"columnLayout": {
									"column": 9,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Duration",
								"columnLayout": {
									"column": 13,
									"row": 1,
									"colSpan": 4,
									"rowSpan": 1
								}
							}
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Lead",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 3
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 12,
									"rowSpan": 1
								}
							},
							{
								"columnName": "Body",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 12,
									"rowSpan": 2
								}
							}
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Task",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Lead",
					"sortedByColumn": "StartDate",
					"ownerColumn": "Owner",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6",
							"comparisonType": 4
						},
						"columns": [
							{
								"columnName": "Title",
								"columnLayout": null
							},
							{
								"columnName": "Status",
								"columnLayout": {
									"column": 1,
									"row": 1,
									"colSpan": 6,
									"rowSpan": 1
								}
							},
							{
								"columnName": "DetailedResult",
								"columnLayout": {
									"column": 1,
									"row": 2,
									"colSpan": 6,
									"rowSpan": 1
								}
							}
						]
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_SysFile",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "SysFile"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"schemaType": "Feed"
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"linkedColumn": "Lead",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "MessageComposer",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					],
					"visible": true,
					"defaultChannel": "crt.FeedComposer"
				},
				"parentName": "Timeline",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "9ed26229-1d47-f18e-7648-3a90498b3bd2",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "Lead"
				},
				"parentName": "MessageComposer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "278afc55-9180-9be2-895f-5145fda538b7",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Lead",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineFilter_Entity",
				"values": {
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TimelineFilter_Date",
				"values": {
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineFilter_Owner",
				"values": {
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineFilter_SystemMessages",
				"values": {
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "filters",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SalesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(SalesTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OpportunityPlanningExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "SalesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "OpportunityPlanningExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "OpportunityPlanningToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "OpportunityPlanningExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningFieldsFlexContainerLeft",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "OpportunityPlanningFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Budget",
				"values": {
					"type": "crt.NumberInput",
					"label": "#ResourceString(Budget_label)#",
					"labelPosition": "auto",
					"control": "$NumberAttribute_6nr0xsg",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Budget_tooltip)#"
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerLeft",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Opportunity",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wl8vj23",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wl8vj23",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerLeft",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_o3h2431",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_o3h2431_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Opportunity",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityPlanningFieldsFlexContainerRight",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
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
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "OpportunityPlanningFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DecisionDate",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "#ResourceString(DecisionDate_label)#",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_q8nrp29",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(DecisionDate_tooltip)#"
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerRight",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SalesOwner",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_kyciimy",
					"labelPosition": "auto",
					"control": "$LookupAttribute_kyciimy",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OpportunityPlanningFieldsFlexContainerRight",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_quqpon1",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_quqpon1_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "SalesOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BusinessCase",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_cdi5zf7",
					"labelPosition": "auto",
					"control": "$StringAttribute_cdi5zf7",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(BusinessCase_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OpportunityPlanningFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductSuggestions",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_s73ygx6",
					"labelPosition": "auto",
					"control": "$StringAttribute_s73ygx6",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(ProductSuggestions_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OpportunityPlanningFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ProductsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ProductsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "SalesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductsToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ProductsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "ProductsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "LeadProduct",
							"defaultValues": [
								{
									"attributeName": "Lead",
									"value": "$Id"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "ProductsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductsRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "ProductsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ProductsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ProductsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ProductsList",
							"filters": "$ProductsList | crt.ToCollectionFilters : 'ProductsList' : $ProductsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ProductsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "LeadProduct"
						}
					},
					"visible": true
				},
				"parentName": "ProductsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ProductsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductsSearchFilter_ProductsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ProductsList"
										]
									}
								]
							}
						],
						"from": [
							"ProductsSearchFilter_SearchValue",
							"ProductsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ProductsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ProductsListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "ProductsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$ProductsList",
					"primaryColumnName": "ProductsListDS_Id",
					"columns": [
						{
							"id": "051bd06b-a958-d153-df6b-0e999bf6f789",
							"code": "ProductsListDS_Product",
							"path": "Product",
							"caption": "#ResourceString(ProductsListDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product",
							"width": 484
						},
						{
							"id": "a3b8f6ae-66ad-9d31-e4aa-e5c2418a143c",
							"code": "ProductsListDS_ProductPrice",
							"path": "Product.Price",
							"caption": "#ResourceString(ProductsListDS_ProductPrice)#",
							"dataValueType": 6,
							"width": 232
						}
					],
					"visible": true,
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": true
						}
					},
					"fitContent": true,
					"selectionState": "$ProductsList_SelectionState",
					"_selectionOptions": {
						"attribute": "ProductsList_SelectionState"
					}
				},
				"parentName": "ProductsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HistoryTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(HistoryTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "StageHistoryExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(StageHistoryExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistoryToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "StageHistoryExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistoryToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "StageHistoryToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistoryRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(StageHistoryRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "StageHistoryListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "StageHistoryToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistorySettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(StageHistorySettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "StageHistoryToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "StageHistoryExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(StageHistoryExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "StageHistoryList",
							"filters": "$GridDetail_q6k1kvr | crt.ToCollectionFilters : 'GridDetail_q6k1kvr' : $StageHistoryList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "StageHistorySettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistorySearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(StageHistorySearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "StageHistorySearchFilter_GridDetail_q6k1kvr",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_q6k1kvr"
										]
									}
								]
							}
						],
						"from": [
							"StageHistorySearchFilter_SearchValue",
							"StageHistorySearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "StageHistoryToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "StageHistoryListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "StageHistoryExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "StageHistoryList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_q6k1kvr",
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "StageHistoryListDS_Id",
					"columns": [
						{
							"id": "ffddf855-8c14-ffe9-b647-0835544c8d37",
							"code": "StageHistoryListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(StageHistoryListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 280
						},
						{
							"id": "8b125526-4abc-a8d5-ffe8-bdb485b3d01d",
							"code": "StageHistoryListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(StageHistoryListDS_StartDate)#",
							"dataValueType": 7
						},
						{
							"id": "29af74bd-80ec-ec12-ce02-cbc825081be8",
							"code": "StageHistoryListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(StageHistoryListDS_DueDate)#",
							"dataValueType": 7
						},
						{
							"id": "88b0898d-afbc-efed-b62c-8a4871991cff",
							"code": "StageHistoryListDS_ModifiedBy",
							"path": "ModifiedBy",
							"caption": "#ResourceString(StageHistoryListDS_ModifiedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					],
					"selectionState": "$StageHistoryList_SelectionState",
					"_selectionOptions": {
						"attribute": "StageHistoryList_SelectionState"
					}
				},
				"parentName": "StageHistoryListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(LeadsByCustomerExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "LeadsByCustomerExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "LeadsByCustomerToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsByCustomerAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Lead",
							"defaultValues": [
								{
									"attributeName": "QualifiedAccount",
									"value": "$Parameter_3pxm4wn"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadsByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsByCustomerRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "LeadsByCustomerListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadsByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsByCustomerSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "LeadsByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsByCustomerExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LeadsByCustomerList",
							"filters": "$GridDetail_yoxos8p | crt.ToCollectionFilters : 'GridDetail_yoxos8p' : $LeadsByCustomerList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "LeadsByCustomerSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsByCustomerImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Lead"
						}
					},
					"visible": true
				},
				"parentName": "LeadsByCustomerSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(LeadsByCustomerSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LeadsByCustomerSearchFilter_GridDetail_yoxos8p",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_yoxos8p"
										]
									}
								]
							}
						],
						"from": [
							"LeadsByCustomerSearchFilter_SearchValue",
							"LeadsByCustomerSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "LeadsByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "LeadsByCustomerExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsByCustomerList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_yoxos8p",
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "LeadsByCustomerListDS_Id",
					"columns": [
						{
							"id": "927598a3-3574-697c-3dca-565fb294076c",
							"code": "LeadsByCustomerListDS_LeadName",
							"caption": "#ResourceString(LeadsByCustomerListDS_LeadName)#",
							"dataValueType": 30,
							"width": 328
						},
						{
							"id": "58135ad8-a7f5-77cc-52a5-e8d06e38fd70",
							"code": "LeadsByCustomerListDS_LeadType",
							"path": "LeadType",
							"caption": "#ResourceString(LeadsByCustomerListDS_LeadType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadType",
							"width": 221
						},
						{
							"id": "8465f1b1-71cd-bea9-6bff-d9fc69f0ac5d",
							"code": "LeadsByCustomerListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(LeadsByCustomerListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 212
						},
						{
							"id": "03a78cc8-4966-3af7-5b3b-f13b2227a789",
							"code": "LeadsByCustomerListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(LeadsByCustomerListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "3c03d6a9-8d4e-35b5-50ab-4a4705c96c1d",
							"code": "LeadsByCustomerListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(LeadsByCustomerListDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"selectionState": "$LeadsByCustomerList_SelectionState",
					"_selectionOptions": {
						"attribute": "LeadsByCustomerList_SelectionState"
					}
				},
				"parentName": "LeadsByCustomerListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OpportunitiesByCustomerExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true
				},
				"parentName": "HistoryTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "OpportunitiesByCustomerExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "OpportunitiesByCustomerToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunitiesByCustomerAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Opportunity",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Parameter_3pxm4wn"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OpportunitiesByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunitiesByCustomerRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "OpportunitiesByCustomerListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OpportunitiesByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunitiesByCustomerSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OpportunitiesByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunitiesByCustomerExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OpportunitiesByCustomerList",
							"filters": "$GridDetail_qiohu6o | crt.ToCollectionFilters : 'GridDetail_qiohu6o' : $OpportunitiesByCustomerList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "OpportunitiesByCustomerSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunitiesByCustomerImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Opportunity"
						}
					},
					"visible": true
				},
				"parentName": "OpportunitiesByCustomerSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(OpportunitiesByCustomerSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunitiesByCustomerSearchFilter_GridDetail_qiohu6o",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_qiohu6o"
										]
									}
								]
							}
						],
						"from": [
							"OpportunitiesByCustomerSearchFilter_SearchValue",
							"OpportunitiesByCustomerSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "OpportunitiesByCustomerToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "OpportunitiesByCustomerExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunitiesByCustomerList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_qiohu6o",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "OpportunitiesByCustomerListDS_Id",
					"columns": [
						{
							"id": "3f9ebb5c-bd21-6360-5878-56b6a00f8167",
							"code": "OpportunitiesByCustomerListDS_Title",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Title)#",
							"dataValueType": 30,
							"width": 335
						},
						{
							"id": "30177b78-9e40-9751-0b3b-c1ba0e92b9d4",
							"code": "OpportunitiesByCustomerListDS_Stage",
							"path": "Stage",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Stage)#",
							"dataValueType": 10,
							"referenceSchemaName": "OpportunityStage",
							"width": 232
						},
						{
							"id": "4b7cbd7f-83ac-2cc7-e749-0b30da18326c",
							"code": "OpportunitiesByCustomerListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Amount)#",
							"dataValueType": 32,
							"width": 174
						},
						{
							"id": "2b1794d2-3176-c682-c44f-fecb12655cae",
							"code": "OpportunitiesByCustomerListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 212
						},
						{
							"id": "e252ad8b-286d-8b88-422d-715ce75ed0ea",
							"code": "OpportunitiesByCustomerListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_DueDate)#",
							"dataValueType": 8,
							"width": 177
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"selectionState": "$OpportunitiesByCustomerList_SelectionState",
					"_selectionOptions": {
						"attribute": "OpportunitiesByCustomerList_SelectionState"
					}
				},
				"parentName": "OpportunitiesByCustomerListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(NextStepsTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "task-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "NextStepsTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextStepsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(NextStepsTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "NextStepsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddNextStepsButton",
				"values": {
					"type": "crt.Button",
					"caption": "NextSteps.Caption",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"layoutConfig": {}
				},
				"parentName": "NextStepsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CreateTaskButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateTaskButton_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddNextStepRequest",
						"params": {
							"entityName": "Activity"
						}
					}
				},
				"parentName": "AddNextStepsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateEmailButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CreateEmailButton_caption)#",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateEmailRequest"
					}
				},
				"parentName": "AddNextStepsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NextSteps",
				"values": {
					"type": "crt.NextSteps",
					"masterSchemaId": "$Id",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"masterSchemaName": "Lead"
				},
				"parentName": "NextStepsTabContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"LookupAttribute_1prxdry": {
						"modelConfig": {
							"path": "PDS.SalesChannel"
						}
					},
					"NumberAttribute_6nr0xsg": {
						"modelConfig": {
							"path": "PDS.Budget"
						}
					},
					"LookupAttribute_wl8vj23": {
						"modelConfig": {
							"path": "PDS.Opportunity"
						}
					},
					"DateTimeAttribute_q8nrp29": {
						"modelConfig": {
							"path": "PDS.DecisionDate"
						}
					},
					"LookupAttribute_kyciimy": {
						"modelConfig": {
							"path": "PDS.SalesOwner"
						}
					},
					"StringAttribute_cdi5zf7": {
						"modelConfig": {
							"path": "PDS.BusinessCase"
						}
					},
					"StringAttribute_s73ygx6": {
						"modelConfig": {
							"path": "PDS.ProductSuggestions"
						}
					},
					"ProductsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ProductsListDS",
							"filterAttributes": [
								{
									"name": "ProductsSearchFilter_ProductsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ProductsListDS_Product": {
									"modelConfig": {
										"path": "ProductsListDS.Product"
									}
								},
								"ProductsListDS_ProductPrice": {
									"modelConfig": {
										"path": "ProductsListDS.ProductPrice"
									}
								},
								"ProductsListDS_Id": {
									"modelConfig": {
										"path": "ProductsListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_q6k1kvr": {
						"isCollection": true,
						"modelConfig": {
							"path": "StageHistoryListDS",
							"filterAttributes": [
								{
									"name": "StageHistorySearchFilter_GridDetail_q6k1kvr",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"StageHistoryListDS_QualifyStatus": {
									"modelConfig": {
										"path": "StageHistoryListDS.QualifyStatus"
									}
								},
								"StageHistoryListDS_StartDate": {
									"modelConfig": {
										"path": "StageHistoryListDS.StartDate"
									}
								},
								"StageHistoryListDS_DueDate": {
									"modelConfig": {
										"path": "StageHistoryListDS.DueDate"
									}
								},
								"StageHistoryListDS_ModifiedBy": {
									"modelConfig": {
										"path": "StageHistoryListDS.ModifiedBy"
									}
								},
								"StageHistoryListDS_Id": {
									"modelConfig": {
										"path": "StageHistoryListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_yoxos8p": {
						"isCollection": true,
						"modelConfig": {
							"path": "LeadsByCustomerListDS",
							"filterAttributes": [
								{
									"name": "LeadsByCustomerSearchFilter_GridDetail_yoxos8p",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"LeadsByCustomerListDS_LeadName": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.LeadName"
									}
								},
								"LeadsByCustomerListDS_LeadType": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.LeadType"
									}
								},
								"LeadsByCustomerListDS_QualifyStatus": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.QualifyStatus"
									}
								},
								"LeadsByCustomerListDS_Owner": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.Owner"
									}
								},
								"LeadsByCustomerListDS_CreatedOn": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.CreatedOn"
									}
								},
								"LeadsByCustomerListDS_Id": {
									"modelConfig": {
										"path": "LeadsByCustomerListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_qiohu6o": {
						"isCollection": true,
						"modelConfig": {
							"path": "OpportunitiesByCustomerListDS",
							"filterAttributes": [
								{
									"name": "OpportunitiesByCustomerSearchFilter_GridDetail_qiohu6o",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"OpportunitiesByCustomerListDS_Title": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.Title"
									}
								},
								"OpportunitiesByCustomerListDS_Stage": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.Stage"
									}
								},
								"OpportunitiesByCustomerListDS_Amount": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.Amount"
									}
								},
								"OpportunitiesByCustomerListDS_Owner": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.Owner"
									}
								},
								"OpportunitiesByCustomerListDS_DueDate": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.DueDate"
									}
								},
								"OpportunitiesByCustomerListDS_Id": {
									"modelConfig": {
										"path": "OpportunitiesByCustomerListDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_mfwvuqd": {
						"modelConfig": {
							"path": "PDS.LeadDisqualifyReason"
						}
					},
					"StringAttribute_1zhbdlz": {
						"modelConfig": {
							"path": "PDS.ClosingDetails"
						}
					},
					"NumberAttribute_sgdzxor": {
						"modelConfig": {
							"path": "PDS.PredictiveScore"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"SimilarLeadList",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "SimilarLeadSearchFilter_SimilarLeadList",
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
					"dataSources"
				],
				"values": {
					"ProductsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LeadProduct",
							"attributes": {
								"Product": {
									"path": "Product"
								},
								"ProductPrice": {
									"type": "ForwardReference",
									"path": "Product.Price"
								}
							}
						}
					},
					"StageHistoryListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "LeadInQualifyStatus",
							"attributes": {
								"QualifyStatus": {
									"path": "QualifyStatus"
								},
								"StartDate": {
									"path": "StartDate"
								},
								"DueDate": {
									"path": "DueDate"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								}
							}
						}
					},
					"LeadsByCustomerListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Lead",
							"attributes": {
								"LeadName": {
									"path": "LeadName"
								},
								"LeadType": {
									"path": "LeadType"
								},
								"QualifyStatus": {
									"path": "QualifyStatus"
								},
								"Owner": {
									"path": "Owner"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"OpportunitiesByCustomerListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Opportunity",
							"attributes": {
								"Title": {
									"path": "Title"
								},
								"Stage": {
									"path": "Stage"
								},
								"Amount": {
									"path": "Amount"
								},
								"Owner": {
									"path": "Owner"
								},
								"DueDate": {
									"path": "DueDate"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"ProductsListDS": [
						{
							"attributePath": "Lead",
							"relationPath": "PDS.Id"
						}
					],
					"StageHistoryListDS": [
						{
							"attributePath": "Lead",
							"relationPath": "PDS.Id"
						}
					],
					"LeadsByCustomerListDS": [
						{
							"attributePath": "QualifiedAccount",
							"relationPath": "PDS.QualifiedAccount"
						}
					],
					"OpportunitiesByCustomerListDS": [
						{
							"attributePath": "Account",
							"relationPath": "PDS.QualifiedAccount"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});