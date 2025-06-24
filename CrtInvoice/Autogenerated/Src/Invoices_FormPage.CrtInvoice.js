define("Invoices_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "InvoiceInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "Invoice"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Invoice",
					"columns": [
						{
							"id": "afdd4a59-5e84-444f-8e12-cf6ac2a33a55",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "SendForApprovalButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SendForApprovalButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"icon": null,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "InvoiceApprovalProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PrintButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PrintButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "print-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "PrintInvoiceReport",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "Invoice"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "InvoiceApprovalWidget",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "Invoice",
					"approvalEntityName": "InvoiceVisa",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileFlexContainer",
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
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"label": "$Resources.Strings.Number",
					"control": "$Number",
					"labelPosition": "above",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Number_tooltip)#"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PaymentStatus",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tynmi1q",
					"labelPosition": "above",
					"control": "$LookupAttribute_tynmi1q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PaymentAmount",
				"values": {
					"layoutConfig": {},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_r3ev1yi",
					"labelPosition": "above",
					"control": "$NumberAttribute_r3ev1yi",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_wc6f5ha",
					"labelPosition": "above",
					"control": "$NumberAttribute_wc6f5ha",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Amount_tooltip)#"
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Currency",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4aqopku",
					"labelPosition": "above",
					"control": "$LookupAttribute_4aqopku",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "PaymentAmountBaseCurrency",
				"values": {
					"layoutConfig": {},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_b3wh9ch",
					"labelPosition": "above",
					"control": "$NumberAttribute_b3wh9ch",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AmountBaseCurrency",
				"values": {
					"layoutConfig": {},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_akwtwod",
					"labelPosition": "above",
					"control": "$NumberAttribute_akwtwod",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "PaidOn",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_a3yi3sw",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_a3yi3sw",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Date",
				"values": {
					"layoutConfig": {},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_r2pt79l",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_r2pt79l",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFlexContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GeneralInformationNewAnalyticsContainer",
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
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountNewMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AmountNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_h2frwj6_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AmountNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "coins-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "GeneralInformationNewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PaymentAmounNewtMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PaymentAmounNewtMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_nubo7u0_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
												"columnPath": "PaymentAmount"
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
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(PaymentAmounNewtMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "before-after"
						},
						"layout": {
							"color": "dark-green",
							"icon": {
								"iconName": "money-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "GeneralInformationNewAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DateMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_qddpk0h_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
												"columnPath": "StartDate"
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
							"template": "#ResourceString(DateMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "violet",
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
				"parentName": "GeneralInformationNewAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DueDateNewMetric",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DueDateNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ri497qm_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
												"columnPath": "DueDate"
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
							"template": "#ResourceString(DueDateNewMetric_template)#",
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
				"parentName": "GeneralInformationNewAnalyticsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GeneralInformationAnalyticsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AmountMetric_title)#",
						"data": {
							"providing": {
								"attribute": "AmountMetric_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(AmountMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GeneralInformationAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PaymentAmountMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PaymentAmountMetric_title)#",
						"data": {
							"providing": {
								"attribute": "PaymentAmountMetric_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
												"columnPath": "PaymentAmount"
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
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"dataSourceConfig": {
							"entitySchemaName": "Invoice",
							"attributes": {
								"ContactJobTitle": {
									"path": "Contact.JobTitle",
									"type": "ForwardReference"
								},
								"ContactLanguage": {
									"path": "Contact.Language",
									"type": "ForwardReference"
								},
								"ContactMobilePhone": {
									"path": "Contact.MobilePhone",
									"type": "ForwardReference"
								},
								"ContactEmail": {
									"path": "Contact.Email",
									"type": "ForwardReference"
								},
								"AccountWeb": {
									"path": "Account.Web",
									"type": "ForwardReference"
								},
								"AccountAccountCategory": {
									"path": "Account.AccountCategory",
									"type": "ForwardReference"
								},
								"AccountIndustry": {
									"path": "Account.Industry",
									"type": "ForwardReference"
								}
							}
						},
						"text": {
							"template": "#ResourceString(PaymentAmountMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "full-fill"
					},
					"visible": true,
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "GeneralInformationAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DueDateMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DueDateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "DueDateMetric_Data",
								"schemaName": "Invoice",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Invoice"
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
												"columnPath": "DueDate"
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
							"template": "#ResourceString(DueDateMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "GeneralInformationAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Supplier",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_35lyf5c",
					"labelPosition": "auto",
					"control": "$LookupAttribute_35lyf5c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_828rar6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_828rar6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Supplier",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vuslcse",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vuslcse",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_rnfmy43",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rnfmy43_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Account",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zpz84o4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zpz84o4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Owner_tooltip)#"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_00g2j7n",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_00g2j7n_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Owner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1mwjrga",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1mwjrga",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_50cxtod",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_50cxtod_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Contact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SupplierBankingDetails",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_w364fud",
					"labelPosition": "auto",
					"control": "$LookupAttribute_w364fud",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(SupplierBankingDetails_tooltip)#"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CustomerBankingDetails",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_fl4k86d",
					"labelPosition": "auto",
					"control": "$LookupAttribute_fl4k86d",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(CustomerBankingDetails_tooltip)#"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
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
					"fullWidthHeader": true,
					"titleWidth": "10",
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
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
					},
					"alignItems": "stretch"
				},
				"parentName": "ProductsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsDividerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"gap": "none",
					"alignItems": "center",
					"justifyContent": "space-between"
				},
				"parentName": "ProductsToolsContainer",
				"propertyName": "items",
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
					"items": []
				},
				"parentName": "ProductsDividerFlexContainer",
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
							"entityName": "InvoiceProduct",
							"defaultValues": [
								{
									"attributeName": "Invoice",
									"value": "$Id"
								}
							]
						}
					},
					"clickMode": "default",
					"visible": true
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
					"menuItems": []
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
							"viewName": "ProductsList"
						}
					}
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
							"entitySchemaName": "InvoiceProduct"
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
								"attribute": "ProductsSearchFilter_GridDetail_vrpulkr",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_vrpulkr"
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
				"name": "ProductsSummaries",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"_designOptions": {
						"modelName": "ProductsListDS"
					},
					"expanded": "$ProductsSummaries_Expanded"
				},
				"parentName": "ProductsDividerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SummaryItem_z8c3iyr",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_z8c3iyr_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_z8c3iyr_Value",
							"modelName": "ProductsListDS",
							"expression": {
								"function": "count",
								"columns": [
									{
										"type": "Column",
										"path": "Id"
									}
								],
								"resultDataValueType": 4
							}
						}
					}
				},
				"parentName": "ProductsSummaries",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SummaryItem_xh3r264",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_xh3r264_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_xh3r264_Value",
							"modelName": "ProductsListDS",
							"expression": {
								"function": "sum",
								"columns": [
									{
										"type": "Column",
										"path": "Quantity"
									}
								],
								"resultDataValueType": 33
							}
						}
					}
				},
				"parentName": "ProductsSummaries",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SummaryItem_97v5pi1",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_97v5pi1_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_97v5pi1_Value",
							"modelName": "ProductsListDS",
							"expression": {
								"function": "sum",
								"columns": [
									{
										"type": "Column",
										"path": "TotalAmount"
									}
								],
								"resultDataValueType": 6
							}
						}
					}
				},
				"parentName": "ProductsSummaries",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductListGridContainer",
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
					},
					"alignItems": "stretch"
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
						"rowSpan": 8
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_vrpulkr",
					"primaryColumnName": "ProductsListDS_Id",
					"columns": [
						{
							"id": "c17ea1b2-48db-9932-1b7f-f72067d4cee8",
							"code": "ProductsListDS_Product",
							"path": "Product",
							"caption": "#ResourceString(ProductsListDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product",
							"sticky": true,
							"width": 215
						},
						{
							"id": "62de4d0d-8ffd-a9b6-9c0e-154307369fbb",
							"code": "ProductsListDS_Price",
							"path": "Price",
							"caption": "#ResourceString(ProductsListDS_Price)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "51005482-f2ec-6c7f-ebda-af341428b8d9",
							"code": "ProductsListDS_Quantity",
							"path": "Quantity",
							"caption": "#ResourceString(ProductsListDS_Quantity)#",
							"dataValueType": 33,
							"width": 114
						},
						{
							"id": "2da7b6db-a31d-2af3-9184-2db2d1e8d8eb",
							"code": "ProductsListDS_DiscountPercent",
							"path": "DiscountPercent",
							"caption": "#ResourceString(ProductsListDS_DiscountPercent)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "452fc112-97fa-7779-e3c7-d81a983b1b9e",
							"code": "ProductsListDS_Unit",
							"path": "Unit",
							"caption": "#ResourceString(ProductsListDS_Unit)#",
							"dataValueType": 10,
							"referenceSchemaName": "Unit",
							"width": 158
						},
						{
							"id": "583e61d7-640b-a45e-cbaa-ce242b081b9b",
							"code": "ProductsListDS_TotalAmount",
							"path": "TotalAmount",
							"caption": "#ResourceString(ProductsListDS_TotalAmount)#",
							"dataValueType": 6,
							"width": 114
						}
					]
				},
				"parentName": "ProductListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdditionalInfoTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AdditionalInfoTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AdditionalInfoTabContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				"parentName": "AdditionalInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountWithoutTax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_uf4t01m",
					"labelPosition": "auto",
					"control": "$NumberAttribute_uf4t01m"
				},
				"parentName": "AdditionalInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryAmountWithoutTax",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_xpnems6",
					"labelPosition": "auto",
					"control": "$NumberAttribute_xpnems6"
				},
				"parentName": "AdditionalInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PaymentAmountWithoutTax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_ug5fhjq",
					"labelPosition": "auto",
					"control": "$NumberAttribute_ug5fhjq"
				},
				"parentName": "AdditionalInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PrimaryPaymentAmountWithoutTax",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_jteafg0",
					"labelPosition": "auto",
					"control": "$NumberAttribute_jteafg0",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "AdditionalInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TimelineTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TimelineTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
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
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timeline",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Timeline",
					"items": [],
					"tools": [],
					"hideTools": false,
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_caption)#",
					"label": "#ResourceString(Timeline_label)#",
					"masterEntitySchemaName": "Invoice",
					"filters": []
				},
				"parentName": "TimelineGridContainer",
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
					"linkedColumn": "Invoice",
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
					"isDefault": false,
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
				"name": "TimelineTile_Task",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Invoice",
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
					"isDefault": false,
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
				"name": "TimelineTile_SysFile",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"data": {
						"schemaType": "SysFile"
					},
					"isDefault": false,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Feed",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"data": {
						"schemaType": "Feed"
					},
					"isDefault": false,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"linkedColumn": "Invoice",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_0o0ddai",
				"values": {
					"type": "crt.MessageComposerSelector",
					"items": [],
					"classes": [
						"view-element"
					]
				},
				"parentName": "Timeline",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailComposer_vu0d0pu",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "f7ed96e9-d1bd-6a52-ab4e-dd189a366a50",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "Invoice"
				},
				"parentName": "MessageComposerSelector_0o0ddai",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_sskpkr1",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "7ac38b64-f5d0-c3f5-f51f-dcd85de456e2",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Invoice",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposerSelector_0o0ddai",
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
				"name": "ApprovalsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ApprovalsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_fvn8hyh",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "ApprovalsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalListExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ApprovalListExpansionPanel_title)#",
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
				"parentName": "GridContainer_fvn8hyh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalsToolsContainer",
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
				"parentName": "ApprovalListExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalsToolsFlexContainer",
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
				"parentName": "ApprovalsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ApprovalListRefreshButton_caption)#",
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
							"dataSourceName": "ApprovalList_ier8867DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ApprovalsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalListSearch",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ApprovalListSearch_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ApprovalListSearch_ApprovalList_ier8867",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ApprovalList_ier8867"
										]
									}
								]
							}
						],
						"from": [
							"ApprovalListSearch_SearchValue",
							"ApprovalListSearch_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ApprovalsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ApprovalListGridContainer",
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
				"parentName": "ApprovalListExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalList",
				"values": {
					"type": "crt.ApprovalList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 10
					},
					"features": {
						"editable": false
					},
					"entityName": "Invoice",
					"approvalEntityName": "InvoiceVisa",
					"items": "$ApprovalList_ier8867",
					"primaryColumnName": "ApprovalList_ier8867DS_Id",
					"columns": [
						{
							"id": "5ef80799-d799-2c1e-4c83-115036b3c795",
							"code": "ApprovalList_ier8867DS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_ier8867DS_VisaOwner)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "19edcce5-3563-8e7a-18b2-bbc726d75d57",
							"code": "ApprovalList_ier8867DS_Objective",
							"caption": "#ResourceString(ApprovalList_ier8867DS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "1ded8d43-5e38-dc66-668a-4e01ea62b014",
							"code": "ApprovalList_ier8867DS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_ier8867DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "b68ad939-3aff-fa18-ba85-6149b605d503",
							"code": "ApprovalList_ier8867DS_SetDate",
							"caption": "#ResourceString(ApprovalList_ier8867DS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "d48cdeaa-a22f-4155-12e9-29d173b79c68",
							"code": "ApprovalList_ier8867DS_SetBy",
							"caption": "#ResourceString(ApprovalList_ier8867DS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "df3f5d47-b82a-2234-0fb3-1bb7c5f633af",
							"code": "ApprovalList_ier8867DS_Status",
							"caption": "#ResourceString(ApprovalList_ier8867DS_Status)#",
							"dataValueType": 10,
							"width": 175
						}
					],
					"visible": true
				},
				"parentName": "ApprovalListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerProfileTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(CustomerProfileTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "default-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CustomerProfileContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerProfileLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(CustomerProfileLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "CustomerProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactProfileContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile",
				"values": {
					"type": "crt.ContactCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_1mwjrga"
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactFullJobTitle",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.ContactJobTitle",
					"control": "$ContactJobTitle",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactPreferredLanguage",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactLanguage",
					"ariaLabel": "#ResourceString(ContactPreferredLanguage_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$ContactLanguage",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactMobilePhone",
				"values": {
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.ContactMobilePhone",
					"control": "$ContactMobilePhone",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ContactMobilePhone_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactEmail",
				"values": {
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.ContactEmail",
					"control": "$ContactEmail",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ContactEmail_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AccountProfileContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"visible": false,
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
					"wrap": "nowrap"
				},
				"parentName": "CustomerProfileTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AccountInfoLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "AccountInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile",
				"values": {
					"type": "crt.AccountCompactProfile",
					"readonly": true,
					"visible": true,
					"referenceColumn": "$LookupAttribute_vuslcse"
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountWeb",
				"values": {
					"type": "crt.WebInput",
					"label": "$Resources.Strings.AccountWeb",
					"control": "$AccountWeb",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(AccountWeb_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountCategory",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAccountCategory",
					"ariaLabel": "#ResourceString(AccountCategory_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$AccountAccountCategory",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AccountIndustry",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountIndustry",
					"ariaLabel": "#ResourceString(AccountIndustry_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$AccountIndustry",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "AccountProfileContainer",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Number": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"LookupAttribute_tynmi1q": {
						"modelConfig": {
							"path": "PDS.PaymentStatus"
						}
					},
					"NumberAttribute_wc6f5ha": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"NumberAttribute_r3ev1yi": {
						"modelConfig": {
							"path": "PDS.PaymentAmount"
						}
					},
					"LookupAttribute_4aqopku": {
						"modelConfig": {
							"path": "PDS.Currency"
						}
					},
					"DateTimeAttribute_a3yi3sw": {
						"modelConfig": {
							"path": "PDS.DueDate"
						}
					},
					"DateTimeAttribute_r2pt79l": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"NumberAttribute_b3wh9ch": {
						"modelConfig": {
							"path": "PDS.PrimaryPaymentAmount"
						}
					},
					"NumberAttribute_akwtwod": {
						"modelConfig": {
							"path": "PDS.PrimaryAmount"
						}
					},
					"ApprovalList_ier8867": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_ier8867DS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "ApprovalListSearch_ApprovalList_ier8867",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_ier8867DS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.VisaOwner"
									}
								},
								"ApprovalList_ier8867DS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.Objective"
									}
								},
								"ApprovalList_ier8867DS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.CreatedOn"
									}
								},
								"ApprovalList_ier8867DS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.SetDate"
									}
								},
								"ApprovalList_ier8867DS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.SetBy"
									}
								},
								"ApprovalList_ier8867DS_Status": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.Status"
									}
								},
								"ApprovalList_ier8867DS_Id": {
									"modelConfig": {
										"path": "ApprovalList_ier8867DS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_35lyf5c": {
						"modelConfig": {
							"path": "PDS.Supplier"
						}
					},
					"LookupAttribute_vuslcse": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"LookupAttribute_zpz84o4": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"LookupAttribute_1mwjrga": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"LookupAttribute_w364fud": {
						"modelConfig": {
							"path": "PDS.SupplierBillingInfo"
						}
					},
					"LookupAttribute_fl4k86d": {
						"modelConfig": {
							"path": "PDS.CustomerBillingInfo"
						}
					},
					"ContactJobTitle": {
						"modelConfig": {
							"path": "PDS.ContactJobTitle"
						}
					},
					"ContactLanguage": {
						"modelConfig": {
							"path": "PDS.ContactLanguage"
						}
					},
					"ContactMobilePhone": {
						"modelConfig": {
							"path": "PDS.ContactMobilePhone"
						}
					},
					"ContactEmail": {
						"modelConfig": {
							"path": "PDS.ContactEmail"
						}
					},
					"AccountWeb": {
						"modelConfig": {
							"path": "PDS.AccountWeb"
						}
					},
					"AccountAccountCategory": {
						"modelConfig": {
							"path": "PDS.AccountAccountCategory"
						}
					},
					"AccountIndustry": {
						"modelConfig": {
							"path": "PDS.AccountIndustry"
						}
					},
					"GridDetail_vrpulkr": {
						"isCollection": true,
						"modelConfig": {
							"path": "ProductsListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Product"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "ProductsSearchFilter_GridDetail_vrpulkr",
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
								"ProductsListDS_Price": {
									"modelConfig": {
										"path": "ProductsListDS.Price"
									}
								},
								"ProductsListDS_Quantity": {
									"modelConfig": {
										"path": "ProductsListDS.Quantity"
									}
								},
								"ProductsListDS_DiscountPercent": {
									"modelConfig": {
										"path": "ProductsListDS.DiscountPercent"
									}
								},
								"ProductsListDS_Unit": {
									"modelConfig": {
										"path": "ProductsListDS.Unit"
									}
								},
								"ProductsListDS_TotalAmount": {
									"modelConfig": {
										"path": "ProductsListDS.TotalAmount"
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
					"NumberAttribute_uf4t01m": {
						"modelConfig": {
							"path": "PDS.AmountWithoutTax"
						}
					},
					"NumberAttribute_xpnems6": {
						"modelConfig": {
							"path": "PDS.PrimaryAmountWithoutTax"
						}
					},
					"NumberAttribute_ug5fhjq": {
						"modelConfig": {
							"path": "PDS.PaymentAmountWithoutTax"
						}
					},
					"NumberAttribute_jteafg0": {
						"modelConfig": {
							"path": "PDS.PrimaryPaymentAmountWithoutTax"
						}
					},
					"ProductsSummaries_Expanded": {
						"value": true
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"ApprovalList_ier8867DS": [
							{
								"attributePath": "Invoice",
								"relationPath": "PDS.Id"
							}
						],
						"ProductsListDS": [
							{
								"attributePath": "Invoice",
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
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "Invoice",
							"attributes": {
								"ContactJobTitle": {
									"path": "Contact.JobTitle",
									"type": "ForwardReference"
								},
								"ContactLanguage": {
									"path": "Contact.Language",
									"type": "ForwardReference"
								},
								"ContactMobilePhone": {
									"path": "Contact.MobilePhone",
									"type": "ForwardReference"
								},
								"ContactEmail": {
									"path": "Contact.Email",
									"type": "ForwardReference"
								},
								"AccountWeb": {
									"path": "Account.Web",
									"type": "ForwardReference"
								},
								"AccountAccountCategory": {
									"path": "Account.AccountCategory",
									"type": "ForwardReference"
								},
								"AccountIndustry": {
									"path": "Account.Industry",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"ApprovalList_ier8867DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "InvoiceVisa",
							"attributes": {
								"VisaOwner": {
									"path": "VisaOwner"
								},
								"Objective": {
									"path": "Objective"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"SetDate": {
									"path": "SetDate"
								},
								"SetBy": {
									"path": "SetBy"
								},
								"Status": {
									"path": "Status"
								}
							}
						}
					},
					"ProductsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "InvoiceProduct",
							"attributes": {
								"Product": {
									"path": "Product"
								},
								"Price": {
									"path": "Price"
								},
								"Quantity": {
									"path": "Quantity"
								},
								"DiscountPercent": {
									"path": "DiscountPercent"
								},
								"Unit": {
									"path": "Unit"
								},
								"TotalAmount": {
									"path": "TotalAmount"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "InvoiceFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});