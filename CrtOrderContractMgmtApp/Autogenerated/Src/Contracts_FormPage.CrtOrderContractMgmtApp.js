define("Contracts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "ContractInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none"
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
					"entitySchemaName": "Contract"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Contract",
					"columns": [
						{
							"id": "9a108f5a-396c-4d14-ac7c-2184cca2b081",
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
					"visible": false,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "ContractApprovalProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default",
					"icon": null
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
							"processName": "PrintContractsReport",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ContractId"
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
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"justifyContent": "start",
					"alignItems": "stretch",
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
					"saveOnChange": true,
					"askUserToChangeSchema": false,
					"entityName": "Contract",
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AmountMetric",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AmountMetric_title)#",
						"data": {
							"providing": {
								"attribute": "AmountMetric_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
						"dataSourceConfig": {
							"entitySchemaName": "Contract"
						},
						"text": {
							"template": "#ResourceString(AmountMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractApprovalWidget",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "Contract",
					"approvalEntityName": "ContractVisa",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ContractInfoLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Number",
					"control": "$Number",
					"labelPosition": "above",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_5kkmz83",
					"labelPosition": "above",
					"control": "$LookupAttribute_5kkmz83",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_97lc2wr",
					"labelPosition": "above",
					"control": "$LookupAttribute_97lc2wr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Owner_tooltip)#"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_jw0oh71",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_jw0oh71_caption)#",
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
				"name": "StartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_o9wt2bg",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_o9wt2bg",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "$Resources.Strings.DateTimeAttribute_72wtn17",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_72wtn17",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Order",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Order_homf3m3",
					"labelPosition": "above",
					"control": "$PDS_Order_homf3m3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_aidjims",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aidjims_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Order",
				"propertyName": "listActions",
				"index": 0
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
								"attribute": "IndicatorWidget_qjb55uc_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
							"color": "dark-green",
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
				"name": "StartDateNewMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(StartDateNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_xyqly35_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
							"template": "#ResourceString(StartDateNewMetric_template)#",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EndDateNewMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EndDateNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_dq8r6a0_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
												"columnPath": "EndDate"
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
							"template": "#ResourceString(EndDateNewMetric_template)#",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberOfProductsNewMetric",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(NumberOfProductsNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_hne5eb1_Data",
								"schemaName": "ProductInContract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "ProductInContract"
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
										"attributePath": "Contract",
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
							"template": "#ResourceString(NumberOfProductsNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green",
							"icon": {
								"iconName": "trolley-icon"
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
				"name": "StartDateMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(StartDateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "StartDateMetric_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
						"dataSourceConfig": {
							"entitySchemaName": "Contract"
						},
						"text": {
							"template": "#ResourceString(StartDateMetric_template)#",
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EndDateMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EndDateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "EndDateMetric_Data",
								"schemaName": "Contract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contract"
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
												"columnPath": "EndDate"
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
						"dataSourceConfig": {
							"entitySchemaName": "Contract"
						},
						"text": {
							"template": "#ResourceString(EndDateMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange"
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
				"name": "NumberOfProductsMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(NumberOfProductsMetric_title)#",
						"data": {
							"providing": {
								"attribute": "NumberOfProductsMetric_Data",
								"schemaName": "ProductInContract",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "ProductInContract"
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
										"attributePath": "Contract",
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
							"template": "#ResourceString(NumberOfProductsMetric_template)#",
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
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_alcaee6",
					"labelPosition": "auto",
					"control": "$LookupAttribute_alcaee6",
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
				"name": "addRecord_yizlc6v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yizlc6v_caption)#",
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
				"name": "OurCompany",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4sfp31d",
					"labelPosition": "auto",
					"control": "$LookupAttribute_4sfp31d",
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
				"name": "addRecord_2425btr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2425btr_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OurCompany",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountBankingDetails",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_hy50i3v",
					"labelPosition": "auto",
					"control": "$LookupAttribute_hy50i3v",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(AccountBankingDetails_tooltip)#"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OurBankingDetails",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xtp0i9k",
					"labelPosition": "auto",
					"control": "$LookupAttribute_xtp0i9k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(OurBankingDetails_tooltip)#"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_o5kqigl",
					"labelPosition": "auto",
					"control": "$NumberAttribute_o5kqigl",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Currency",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_nofgcqf",
					"labelPosition": "auto",
					"control": "$LookupAttribute_nofgcqf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wy5xm9k",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wy5xm9k",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_948r1p3",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_948r1p3_caption)#",
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
				"name": "ParentContract",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_nnt793p",
					"labelPosition": "auto",
					"control": "$LookupAttribute_nnt793p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(ParentContract_tooltip)#",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "SubordinateContractsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SubordinateContractsExpansionPanel_title)#",
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
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "SubordinateContractsToolsContainer",
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
				"parentName": "SubordinateContractsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateContractsToolsFlexContainer",
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
				"parentName": "SubordinateContractsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateContractListAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Contract",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$LookupAttribute_alcaee6"
								},
								{
									"attributeName": "CustomerBillingInfo",
									"value": "$LookupAttribute_hy50i3v"
								},
								{
									"attributeName": "Contact",
									"value": "$LookupAttribute_wy5xm9k"
								},
								{
									"attributeName": "SupplierBillingInfo",
									"value": "$LookupAttribute_xtp0i9k"
								},
								{
									"attributeName": "OurCompany",
									"value": "$LookupAttribute_4sfp31d"
								},
								{
									"attributeName": "Parent",
									"value": "$Id"
								},
								{
									"attributeName": "Type",
									"value": null
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubordinateContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateContractListRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_fx2q9foDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubordinateContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubordinateContractListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "SubordinateContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubordinateContractListExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubordinateContractList",
							"filters": "$GridDetail_fx2q9fo | crt.ToCollectionFilters : 'GridDetail_fx2q9fo' : $SubordinateContractList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "SubordinateContractListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubordinateContractListImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contract"
						}
					},
					"visible": true
				},
				"parentName": "SubordinateContractListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SubordinateContractListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SubordinateContractListSearchFilter_GridDetail_fx2q9fo",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_fx2q9fo"
										]
									}
								]
							}
						],
						"from": [
							"SubordinateContractListSearchFilter_SearchValue",
							"SubordinateContractListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "SubordinateContractsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SubordinateContractListGridContainer",
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
				"parentName": "SubordinateContractsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubordinateContractList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_fx2q9fo",
					"primaryColumnName": "GridDetail_fx2q9foDS_Id",
					"columns": [
						{
							"id": "3163e3e5-b4fd-fda6-d431-4b37913e0be4",
							"code": "GridDetail_fx2q9foDS_Number",
							"caption": "#ResourceString(GridDetail_fx2q9foDS_Number)#",
							"dataValueType": 28,
							"width": 114
						},
						{
							"id": "136d10e6-2b7e-19a7-99d6-67e13fe7207a",
							"code": "GridDetail_fx2q9foDS_Account",
							"path": "Account",
							"caption": "#ResourceString(GridDetail_fx2q9foDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 146.99478149414062
						},
						{
							"id": "5f1ea6fa-57c0-df77-8666-e8c6ad690035",
							"code": "GridDetail_fx2q9foDS_Type",
							"path": "Type",
							"caption": "#ResourceString(GridDetail_fx2q9foDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "ContractType",
							"width": 114
						},
						{
							"id": "7f68dcc7-02f2-ae26-dd6d-7fce3c5d0288",
							"code": "GridDetail_fx2q9foDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(GridDetail_fx2q9foDS_Amount)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "4862b052-37cc-77ce-84c8-adb957916781",
							"code": "GridDetail_fx2q9foDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(GridDetail_fx2q9foDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 170.9973907470703
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"selectionState": "$SubordinateContractList_SelectionState",
					"_selectionOptions": {
						"attribute": "SubordinateContractList_SelectionState"
					}
				},
				"parentName": "SubordinateContractListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContractDetailsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ContractDetailsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContractDetailsGridContainer",
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
				"parentName": "ContractDetailsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsExpansionPanel",
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
				"parentName": "ContractDetailsGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductToolsContainer",
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
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"justifyContent": "space-between",
					"alignItems": "center"
				},
				"parentName": "ProductToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductToolsFlexContainer",
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
				"name": "ProductListAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductListAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ProductInContract",
							"defaultValues": [
								{
									"attributeName": "Contract",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ProductToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductListRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_eq9xc68DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ProductToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ProductToolsFlexContainer",
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
							"viewName": "ProductList",
							"filters": "$GridDetail_eq9xc68 | crt.ToCollectionFilters : 'GridDetail_eq9xc68' : $ProductList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ProductListSettingsButton",
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
							"entitySchemaName": "ProductInContract"
						}
					},
					"visible": true
				},
				"parentName": "ProductListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ProductListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductListSearchFilter_GridDetail_eq9xc68",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_eq9xc68"
										]
									}
								]
							}
						],
						"from": [
							"ProductListSearchFilter_SearchValue",
							"ProductListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ProductToolsFlexContainer",
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
						"modelName": "GridDetail_eq9xc68DS"
					},
					"expanded": "$ProductsSummaries_Expanded"
				},
				"parentName": "ProductsDividerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SummaryItem_17sk4nn",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_17sk4nn_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_17sk4nn_Value",
							"modelName": "GridDetail_eq9xc68DS",
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
				"name": "SummaryItem_tjbyatz",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_tjbyatz_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_tjbyatz_Value",
							"modelName": "GridDetail_eq9xc68DS",
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
				"name": "SummaryItem_ghzlu4x",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_ghzlu4x_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_ghzlu4x_Value",
							"modelName": "GridDetail_eq9xc68DS",
							"expression": {
								"function": "sum",
								"columns": [
									{
										"type": "Column",
										"path": "Total"
									}
								],
								"resultDataValueType": 32
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
				"name": "ProductsListGridContainer",
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
				"name": "ProductList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 16
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_eq9xc68",
					"primaryColumnName": "GridDetail_eq9xc68DS_Id",
					"columns": [
						{
							"id": "b38d966f-c5a3-fc36-9e83-e1a1fee89638",
							"code": "GridDetail_eq9xc68DS_Product",
							"path": "Product",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product"
						},
						{
							"id": "8d997023-2113-16d4-38cc-fbb7dd3dbee5",
							"code": "GridDetail_eq9xc68DS_Quantity",
							"path": "Quantity",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Quantity)#",
							"dataValueType": 33
						},
						{
							"id": "867b87ee-9d27-077e-2848-0e1923fa59e2",
							"code": "GridDetail_eq9xc68DS_Price",
							"path": "Price",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Price)#",
							"dataValueType": 32
						},
						{
							"id": "7a5937ad-e9b4-64ea-b9a8-c3cf8655dbd5",
							"code": "GridDetail_eq9xc68DS_Amount",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Amount)#",
							"dataValueType": 32
						},
						{
							"id": "657b3b03-b33a-3b23-775c-fbe24e75b6ef",
							"code": "GridDetail_eq9xc68DS_DiscountPercent",
							"path": "DiscountPercent",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_DiscountPercent)#",
							"dataValueType": 32
						},
						{
							"id": "548f3c6e-6ba9-f92a-4965-bc47c0db9eec",
							"code": "GridDetail_eq9xc68DS_Total",
							"path": "Total",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Total)#",
							"dataValueType": 32
						},
						{
							"id": "150888a5-19d1-79a2-5fa2-5ece2471ddbf",
							"code": "GridDetail_eq9xc68DS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(GridDetail_eq9xc68DS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency"
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": true
						},
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"selectionState": "$ProductList_SelectionState",
					"_selectionOptions": {
						"attribute": "ProductList_SelectionState"
					}
				},
				"parentName": "ProductsListGridContainer",
				"propertyName": "items",
				"index": 0
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_gdvkrxm",
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
				"parentName": "GridContainer_gdvkrxm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalsListToolsContainer",
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
				"name": "ApprovalsListToolsFlexContainer",
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
				"parentName": "ApprovalsListToolsContainer",
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
							"dataSourceName": "ApprovalList_jfk4ucxDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ApprovalsListToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ApprovalListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ApprovalListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ApprovalListSearchFilter_ApprovalList_jfk4ucx",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ApprovalList_jfk4ucx"
										]
									}
								]
							}
						],
						"from": [
							"ApprovalListSearchFilter_SearchValue",
							"ApprovalListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ApprovalsListToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ApprovalsListGridContainer",
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
					"entityName": "Contract",
					"approvalEntityName": "ContractVisa",
					"items": "$ApprovalList_jfk4ucx",
					"primaryColumnName": "ApprovalList_jfk4ucxDS_Id",
					"columns": [
						{
							"id": "649c76e4-4fac-b455-e8b2-ae0012aa92c2",
							"code": "ApprovalList_jfk4ucxDS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_VisaOwner)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "9710c332-09c6-eef5-434d-fedc20aa78ae",
							"code": "ApprovalList_jfk4ucxDS_Objective",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "4aec8099-6c3b-ddab-320e-a270a64797ba",
							"code": "ApprovalList_jfk4ucxDS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "88d0a2aa-34cf-68e1-fdcc-0ffe33dae408",
							"code": "ApprovalList_jfk4ucxDS_SetDate",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "f01ab584-adaf-fb24-124a-31e64f029ef8",
							"code": "ApprovalList_jfk4ucxDS_SetBy",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "64f1b2d3-34ee-583a-dcc9-2cde32ca3494",
							"code": "ApprovalList_jfk4ucxDS_Status",
							"caption": "#ResourceString(ApprovalList_jfk4ucxDS_Status)#",
							"dataValueType": 10,
							"width": 175
						}
					],
					"visible": true
				},
				"parentName": "ApprovalsListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(DocumentsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DocumentsTabGridContainer",
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
				"parentName": "DocumentsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsExpansionPanel",
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
					"title": "#ResourceString(DocumentsExpansionPanel_title)#",
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
				"parentName": "DocumentsTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsToolsContainer",
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
				"parentName": "DocumentsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsToolsFlexContainer",
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
				"parentName": "DocumentsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Document",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$LookupAttribute_alcaee6"
								},
								{
									"attributeName": "Contact",
									"value": "$LookupAttribute_wy5xm9k"
								},
								{
									"attributeName": "Contract",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsRefreshButton_caption)#",
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
							"dataSourceName": "DocumentsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DocumentsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DocumentsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DocumentsList",
							"filters": "$GridDetail_vx3pwmf | crt.ToCollectionFilters : 'GridDetail_vx3pwmf' : $GridDetail_vx3pwmf_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "DocumentsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DocumentsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Document"
						}
					},
					"visible": true
				},
				"parentName": "DocumentsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DocumentsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(DocumentsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "DocumentsSearchFilter_GridDetail_vx3pwmf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_vx3pwmf"
										]
									}
								]
							}
						],
						"from": [
							"DocumentsSearchFilter_SearchValue",
							"DocumentsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DocumentsListContainer",
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
				"parentName": "DocumentsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DocumentsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_vx3pwmf",
					"activeRow": "$GridDetail_vx3pwmf_ActiveRow",
					"selectionState": "$GridDetail_vx3pwmf_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_vx3pwmf_SelectionState"
					},
					"primaryColumnName": "DocumentsListDS_Id",
					"columns": [
						{
							"id": "ccfdeaf5-52cd-b07e-5fb7-5d3afeedb12a",
							"code": "DocumentsListDS_Number",
							"caption": "#ResourceString(DocumentsListDS_Number)#",
							"dataValueType": 28,
							"width": 173
						},
						{
							"id": "1a203f70-097f-b6a9-1bb2-52fbabb46c5a",
							"code": "DocumentsListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(DocumentsListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentType",
							"width": 240
						},
						{
							"id": "4c8c2d61-f449-ab87-9678-68dd1563b4d9",
							"code": "DocumentsListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(DocumentsListDS_Date)#",
							"dataValueType": 8,
							"width": 125
						},
						{
							"id": "c5f89733-3af9-1819-e9b7-a0eba6148eca",
							"code": "DocumentsListDS_State",
							"path": "State",
							"caption": "#ResourceString(DocumentsListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentState",
							"width": 224
						}
					]
				},
				"parentName": "DocumentsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(InvoicesExpansionPanel_title)#",
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
				"parentName": "DocumentsTabGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoicesToolsContainer",
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
				"parentName": "InvoicesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesToolsFlexContainer",
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
				"parentName": "InvoicesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Invoice",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$LookupAttribute_alcaee6"
								},
								{
									"attributeName": "Contact",
									"value": "$LookupAttribute_wy5xm9k"
								},
								{
									"attributeName": "Contract",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesRefreshButton_caption)#",
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
							"dataSourceName": "InvoicesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoicesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(InvoicesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "InvoicesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoicesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "InvoicesList",
							"filters": "$GridDetail_wvkrihv | crt.ToCollectionFilters : 'GridDetail_wvkrihv' : $GridDetail_wvkrihv_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "InvoicesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(InvoicesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Invoice"
						}
					},
					"visible": true
				},
				"parentName": "InvoicesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "InvoicesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(InvoicesSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "InvoicesSearchFilter_GridDetail_wvkrihv",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wvkrihv"
										]
									}
								]
							}
						],
						"from": [
							"InvoicesSearchFilter_SearchValue",
							"InvoicesSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "InvoicesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "InvoicesListContainer",
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
				"parentName": "InvoicesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InvoicesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_wvkrihv",
					"activeRow": "$GridDetail_wvkrihv_ActiveRow",
					"selectionState": "$GridDetail_wvkrihv_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_wvkrihv_SelectionState"
					},
					"primaryColumnName": "InvoicesListDS_Id",
					"columns": [
						{
							"id": "679c1f46-d12f-e688-a91d-a408ef5c9a1f",
							"code": "InvoicesListDS_Number",
							"caption": "#ResourceString(InvoicesListDS_Number)#",
							"dataValueType": 28,
							"width": 178
						},
						{
							"id": "ced7c4d2-a7e6-373f-b14a-5c31352c7f91",
							"code": "InvoicesListDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(InvoicesListDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 216
						},
						{
							"id": "1fd2a458-f62f-6f73-df18-2beac8817577",
							"code": "InvoicesListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(InvoicesListDS_Amount)#",
							"dataValueType": 6,
							"width": 177
						},
						{
							"id": "ca95aa84-c1e1-1a51-faf3-f2df1e65ba04",
							"code": "InvoicesListDS_PaymentStatus",
							"path": "PaymentStatus",
							"caption": "#ResourceString(InvoicesListDS_PaymentStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "InvoicePaymentStatus",
							"width": 207
						}
					]
				},
				"parentName": "InvoicesListContainer",
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
					"Number": {
						"modelConfig": {
							"path": "PDS.Number"
						}
					},
					"LookupAttribute_5kkmz83": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"LookupAttribute_97lc2wr": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"DateTimeAttribute_o9wt2bg": {
						"modelConfig": {
							"path": "PDS.StartDate"
						}
					},
					"DateTimeAttribute_72wtn17": {
						"modelConfig": {
							"path": "PDS.EndDate"
						}
					},
					"LookupAttribute_alcaee6": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"LookupAttribute_hy50i3v": {
						"modelConfig": {
							"path": "PDS.CustomerBillingInfo"
						}
					},
					"LookupAttribute_4sfp31d": {
						"modelConfig": {
							"path": "PDS.OurCompany"
						}
					},
					"LookupAttribute_xtp0i9k": {
						"modelConfig": {
							"path": "PDS.SupplierBillingInfo"
						}
					},
					"LookupAttribute_wy5xm9k": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"ApprovalList_jfk4ucx": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_jfk4ucxDS",
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
									"name": "ApprovalListSearchFilter_ApprovalList_jfk4ucx",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_jfk4ucxDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.VisaOwner"
									}
								},
								"ApprovalList_jfk4ucxDS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.Objective"
									}
								},
								"ApprovalList_jfk4ucxDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.CreatedOn"
									}
								},
								"ApprovalList_jfk4ucxDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.SetDate"
									}
								},
								"ApprovalList_jfk4ucxDS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.SetBy"
									}
								},
								"ApprovalList_jfk4ucxDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.Status"
									}
								},
								"ApprovalList_jfk4ucxDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_jfk4ucxDS.Id"
									}
								}
							}
						}
					},
					"NumberAttribute_o5kqigl": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"LookupAttribute_nofgcqf": {
						"modelConfig": {
							"path": "PDS.Currency"
						}
					},
					"LookupAttribute_nnt793p": {
						"modelConfig": {
							"path": "PDS.Parent"
						}
					},
					"GridDetail_fx2q9fo": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_fx2q9foDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Owner"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "SubordinateContractListSearchFilter_GridDetail_fx2q9fo",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_fx2q9foDS_Number": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Number"
									}
								},
								"GridDetail_fx2q9foDS_Account": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Account"
									}
								},
								"GridDetail_fx2q9foDS_Type": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Type"
									}
								},
								"GridDetail_fx2q9foDS_Amount": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Amount"
									}
								},
								"GridDetail_fx2q9foDS_Owner": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Owner"
									}
								},
								"GridDetail_fx2q9foDS_Id": {
									"modelConfig": {
										"path": "GridDetail_fx2q9foDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_eq9xc68": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_eq9xc68DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "ProductName"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "ProductListSearchFilter_GridDetail_eq9xc68",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_eq9xc68DS_Product": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Product"
									}
								},
								"GridDetail_eq9xc68DS_Quantity": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Quantity"
									}
								},
								"GridDetail_eq9xc68DS_Price": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Price"
									}
								},
								"GridDetail_eq9xc68DS_Amount": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Amount"
									}
								},
								"GridDetail_eq9xc68DS_DiscountPercent": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.DiscountPercent"
									}
								},
								"GridDetail_eq9xc68DS_Total": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Total"
									}
								},
								"GridDetail_eq9xc68DS_Currency": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Currency"
									}
								},
								"GridDetail_eq9xc68DS_Id": {
									"modelConfig": {
										"path": "GridDetail_eq9xc68DS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_vh2dd37": {
						"modelConfig": {
							"path": "PDS.State"
						}
					},
					"PDS_Order_homf3m3": {
						"modelConfig": {
							"path": "PDS.Order"
						}
					},
					"GridDetail_vx3pwmf": {
						"isCollection": true,
						"modelConfig": {
							"path": "DocumentsListDS",
							"filterAttributes": [
								{
									"name": "DocumentsSearchFilter_GridDetail_vx3pwmf",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DocumentsListDS_Number": {
									"modelConfig": {
										"path": "DocumentsListDS.Number"
									}
								},
								"DocumentsListDS_Type": {
									"modelConfig": {
										"path": "DocumentsListDS.Type"
									}
								},
								"DocumentsListDS_Date": {
									"modelConfig": {
										"path": "DocumentsListDS.Date"
									}
								},
								"DocumentsListDS_State": {
									"modelConfig": {
										"path": "DocumentsListDS.State"
									}
								},
								"DocumentsListDS_Id": {
									"modelConfig": {
										"path": "DocumentsListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_wvkrihv": {
						"isCollection": true,
						"modelConfig": {
							"path": "InvoicesListDS",
							"filterAttributes": [
								{
									"name": "InvoicesSearchFilter_GridDetail_wvkrihv",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"InvoicesListDS_Number": {
									"modelConfig": {
										"path": "InvoicesListDS.Number"
									}
								},
								"InvoicesListDS_Currency": {
									"modelConfig": {
										"path": "InvoicesListDS.Currency"
									}
								},
								"InvoicesListDS_Amount": {
									"modelConfig": {
										"path": "InvoicesListDS.Amount"
									}
								},
								"InvoicesListDS_PaymentStatus": {
									"modelConfig": {
										"path": "InvoicesListDS.PaymentStatus"
									}
								},
								"InvoicesListDS_Id": {
									"modelConfig": {
										"path": "InvoicesListDS.Id"
									}
								}
							}
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
						"ApprovalList_jfk4ucxDS": [
							{
								"attributePath": "Contract",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_fx2q9foDS": [
							{
								"attributePath": "Parent",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_eq9xc68DS": [
							{
								"attributePath": "Contract",
								"relationPath": "PDS.Id"
							}
						],
						"DocumentsListDS": [
							{
								"attributePath": "Contract",
								"relationPath": "PDS.Id"
							}
						],
						"InvoicesListDS": [
							{
								"attributePath": "Contract",
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
							"entitySchemaName": "Contract"
						},
						"scope": "page"
					},
					"ApprovalList_jfk4ucxDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContractVisa",
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
					"GridDetail_fx2q9foDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contract",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Account": {
									"path": "Account"
								},
								"Type": {
									"path": "Type"
								},
								"Amount": {
									"path": "Amount"
								},
								"Owner": {
									"path": "Owner"
								}
							}
						}
					},
					"GridDetail_eq9xc68DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ProductInContract",
							"attributes": {
								"Product": {
									"path": "Product"
								},
								"Quantity": {
									"path": "Quantity"
								},
								"Price": {
									"path": "Price"
								},
								"Amount": {
									"path": "Amount"
								},
								"DiscountPercent": {
									"path": "DiscountPercent"
								},
								"Total": {
									"path": "Total"
								},
								"Currency": {
									"path": "Currency"
								}
							}
						}
					},
					"DocumentsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Document",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Type": {
									"path": "Type"
								},
								"Date": {
									"path": "Date"
								},
								"State": {
									"path": "State"
								}
							}
						}
					},
					"InvoicesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Invoice",
							"attributes": {
								"Number": {
									"path": "Number"
								},
								"Currency": {
									"path": "Currency"
								},
								"Amount": {
									"path": "Amount"
								},
								"PaymentStatus": {
									"path": "PaymentStatus"
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
					"entitySchemaName": "ContractFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});