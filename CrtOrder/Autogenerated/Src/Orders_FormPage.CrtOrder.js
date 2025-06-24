define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "OrderInTag",
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
					"visible": true,
					"alignItems": "stretch"
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
				"operation": "remove",
				"name": "GeneralInfoTab"
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
				"operation": "move",
				"name": "GeneralInfoTabContainer",
				"parentName": "ProductsTab",
				"propertyName": "items",
				"index": 1
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
					"entitySchemaName": "Order"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Order",
					"columns": [
						{
							"id": "45b8c991-8179-4734-b97b-6fe6b6a817df",
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
					"icon": null,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "OrderApprovalProcess",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default",
					"visible": false
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
						"right": "small",
						"bottom": "none",
						"left": "small"
					}
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
					"askUserToChangeSchema": true,
					"entityName": "Order",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TotalWidget",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TotalMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalMetric_title)#",
						"data": {
							"providing": {
								"attribute": "TotalMetric_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
							"template": "#ResourceString(TotalMetric_template)#",
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
				"parentName": "TotalWidget",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrderApprovalWidget",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "Order",
					"approvalEntityName": "OrderVisa",
					"visible": true,
					"hiddenWhenNoData": true,
					"layoutConfig": {}
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrderInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OrderInfoLabel_caption)#)#",
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
				"name": "RecipientName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_fwsxmc2",
					"labelPosition": "above",
					"control": "$StringAttribute_fwsxmc2",
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
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_xm7t1f4",
					"labelPosition": "auto",
					"control": "$LookupAttribute_xm7t1f4",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_dbyq7n8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_dbyq7n8_caption)#",
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
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_zv8h198",
					"labelPosition": "auto",
					"control": "$LookupAttribute_zv8h198",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_xx9pdmu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xx9pdmu_caption)#",
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
				"name": "PaymentAmount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_4ji1um5",
					"labelPosition": "above",
					"control": "$NumberAttribute_4ji1um5",
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
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_mbt3exn",
					"labelPosition": "above",
					"control": "$LookupAttribute_mbt3exn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_mb4zwk4",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_mb4zwk4_caption)#",
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
				"name": "Currency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_tnq0vc3",
					"labelPosition": "above",
					"control": "$LookupAttribute_tnq0vc3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "PlannedEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 9,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_sie48pt",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_sie48pt",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "OrderChannel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_jfhlrnc",
					"labelPosition": "above",
					"control": "$LookupAttribute_jfhlrnc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ProductsNewAnalyticsContainer",
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
				"name": "TotalNewMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_f4rcki4_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
							"template": "#ResourceString(TotalNewMetric_template)#",
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
				"parentName": "ProductsNewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PlannedDateNewMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PlannedDateNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_3mbdaay_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
							"template": "#ResourceString(PlannedDateNewMetric_template)#",
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
				"parentName": "ProductsNewAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActualEndDateNewMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ActualEndDateNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_6zil24b_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
												"columnPath": "ActualDate"
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
							"template": "#ResourceString(ActualEndDateNewMetric_template)#",
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
				"parentName": "ProductsNewAnalyticsContainer",
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
								"attribute": "IndicatorWidget_yede0co_Data",
								"schemaName": "OrderProduct",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OrderProduct"
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
										"attributePath": "Order",
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
				"parentName": "ProductsNewAnalyticsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ProductsTab",
				"values": {
					"caption": "#ResourceString(GeneralInfoTab_caption)#",
					"type": "crt.TabContainer",
					"items": [],
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsAnalyticsContainer",
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
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ProductsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PlannedDateMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PlannedDateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "PlannedDateMetric_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
							"template": "#ResourceString(PlannedDateMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "ProductsAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActualEndDateMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ActualEndDateMetric_title)#",
						"data": {
							"providing": {
								"attribute": "ActualEndDateMetric_Data",
								"schemaName": "Order",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Order"
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
												"columnPath": "ActualDate"
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
							"template": "#ResourceString(ActualEndDateMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "celestial-blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "ProductsAnalyticsContainer",
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
								"schemaName": "OrderProduct",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OrderProduct"
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
										"attributePath": "Order",
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
				"parentName": "ProductsAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 15
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
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
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
				"name": "ProductsCatalogButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductsCatalogButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": false,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.OpenPageRequest",
						"params": {
							"schemaName": "OrderProductCatalogPage",
							"skipUnsavedData": false,
							"parameters": {
								"Order": "$Id"
							}
						}
					},
					"clickMode": "default"
				},
				"parentName": "ProductsToolsFlexContainer",
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
							"entityName": "OrderProduct",
							"defaultValues": [
								{
									"attributeName": "Order",
									"value": "$Id"
								},
								{
									"attributeName": "Currency",
									"value": "$LookupAttribute_tnq0vc3"
								},
								{
									"attributeName": "CurrencyRate",
									"value": "$Parameter_q3y0k0o"
								}
							]
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
							"dataSourceName": "GridDetail_tviz7gfDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ProductsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
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
				"index": 3
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
							"filters": "$GridDetail_tviz7gf | crt.ToCollectionFilters : 'GridDetail_tviz7gf' : $GridDetail_tviz7gf_SelectionState"
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
							"entitySchemaName": "OrderProduct"
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
								"attribute": "ProductsSearchFilter_GridDetail_tviz7gf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_tviz7gf"
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ProductsSummaries",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"_designOptions": {
						"modelName": "GridDetail_tviz7gfDS"
					},
					"expanded": "$ProductsSummaries_Expanded"
				},
				"parentName": "ProductsDividerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SummaryItem_92b6rcy",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_92b6rcy_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_92b6rcy_Value",
							"modelName": "GridDetail_tviz7gfDS",
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
				"name": "SummaryItem_k4qeeqy",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_k4qeeqy_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_k4qeeqy_Value",
							"modelName": "GridDetail_tviz7gfDS",
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
				"name": "SummaryItem_edmth77",
				"values": {
					"type": "crt.SummaryItem",
					"label": "#ResourceString(SummaryItem_edmth77_label)#",
					"_designOptions": {
						"value": {
							"attribute": "SummaryItem_edmth77_Value",
							"modelName": "GridDetail_tviz7gfDS",
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
				"name": "ProductsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 13
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_tviz7gf",
					"activeRow": "$GridDetail_tviz7gf_ActiveRow",
					"selectionState": "$GridDetail_tviz7gf_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_tviz7gfDS_Id",
					"columns": [
						{
							"id": "bf951c36-8c39-90fb-92fe-70524acf7c8c",
							"code": "GridDetail_tviz7gfDS_Product",
							"path": "Product",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product",
							"sticky": true
						},
						{
							"id": "737ca79e-5a71-e143-e7c3-d0d8bb72b094",
							"code": "GridDetail_tviz7gfDS_Price",
							"path": "Price",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Price)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "72ad842a-357b-74aa-6cf3-8d36146cc858",
							"code": "GridDetail_tviz7gfDS_Quantity",
							"path": "Quantity",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Quantity)#",
							"dataValueType": 33,
							"width": 114
						},
						{
							"id": "68f57e87-24bf-59aa-af49-a8a5a37e9e1b",
							"code": "GridDetail_tviz7gfDS_Unit",
							"path": "Unit",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_Unit)#",
							"dataValueType": 10,
							"referenceSchemaName": "Unit",
							"width": 157
						},
						{
							"id": "6f7fc0d1-b20a-3ca6-a0cb-92e5f473803d",
							"code": "GridDetail_tviz7gfDS_DiscountPercent",
							"path": "DiscountPercent",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_DiscountPercent)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "74579cd2-5640-75b2-dac4-6cc89979bc69",
							"code": "GridDetail_tviz7gfDS_TotalAmount",
							"path": "TotalAmount",
							"caption": "#ResourceString(GridDetail_tviz7gfDS_TotalAmount)#",
							"dataValueType": 6,
							"width": 114
						}
					],
					"bulkActions": [],
					"_selectionOptions": {
						"attribute": "GridDetail_tviz7gf_SelectionState"
					}
				},
				"parentName": "ProductsListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tviz7gf_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_tviz7gf",
							"filters": "$GridDetail_tviz7gf | crt.ToCollectionFilters : 'GridDetail_tviz7gf' : $GridDetail_tviz7gf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tviz7gf_SelectionState"
						}
					}
				},
				"parentName": "ProductsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tviz7gf_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_tviz7gfDS",
							"filters": "$GridDetail_tviz7gf | crt.ToCollectionFilters : 'GridDetail_tviz7gf' : $GridDetail_tviz7gf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tviz7gf_SelectionState"
						}
					}
				},
				"parentName": "ProductsList",
				"propertyName": "bulkActions",
				"index": 1
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_gxnm1ff",
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
				"parentName": "GridContainer_gxnm1ff",
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
							"dataSourceName": "ApprovalList_eo00aksDS"
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
								"attribute": "ApprovalListSearch_ApprovalList_eo00aks",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ApprovalList_eo00aks"
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
					"entityName": "Order",
					"approvalEntityName": "OrderVisa",
					"items": "$ApprovalList_eo00aks",
					"primaryColumnName": "ApprovalList_eo00aksDS_Id",
					"columns": [
						{
							"id": "c006c5d0-ad3d-8605-cd50-fdcd22fa09e1",
							"code": "ApprovalList_eo00aksDS_VisaOwner",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_VisaOwner)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "eb7cc038-74c0-0c97-95dc-5f9246fe7b2f",
							"code": "ApprovalList_eo00aksDS_Objective",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_Objective)#",
							"dataValueType": 30,
							"width": 175
						},
						{
							"id": "322150b1-a141-61ad-8113-a0a4df970d4d",
							"code": "ApprovalList_eo00aksDS_CreatedOn",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "89b77217-e484-a51c-4270-7bca3e18b3ed",
							"code": "ApprovalList_eo00aksDS_SetDate",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_SetDate)#",
							"dataValueType": 7,
							"width": 175
						},
						{
							"id": "82f69bba-7027-01d7-eefd-a83e9dc3ae85",
							"code": "ApprovalList_eo00aksDS_SetBy",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_SetBy)#",
							"dataValueType": 10,
							"width": 175
						},
						{
							"id": "43d348ef-cf70-be9b-0975-a6f8fade08e6",
							"code": "ApprovalList_eo00aksDS_Status",
							"caption": "#ResourceString(ApprovalList_eo00aksDS_Status)#",
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
				"name": "PaymentDeliveryTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(PaymentDeliveryTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PaymentDeliveryGridContainer",
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
				"parentName": "PaymentDeliveryTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DeliveryStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_n1ckeg1",
					"labelPosition": "auto",
					"control": "$LookupAttribute_n1ckeg1",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DeliveryType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_5a97cwx",
					"labelPosition": "auto",
					"control": "$LookupAttribute_5a97cwx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PaymentStatus",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_vz3hq6b",
					"labelPosition": "auto",
					"control": "$LookupAttribute_vz3hq6b",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PaymentType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sc9ibnn",
					"labelPosition": "auto",
					"control": "$LookupAttribute_sc9ibnn",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ActualEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_7qa6p3t",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_7qa6p3t"
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Date",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_ew2cxlt",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_ew2cxlt"
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AddressFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "PaymentDeliveryGridContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "AccountAddress",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"label": "#ResourceString(AccountAddress_label)#",
					"control": "$AccountAddress",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "AddressFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactAddress",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"label": "#ResourceString(ContactAddress_label)#",
					"control": "$ContactAddress",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": false
				},
				"parentName": "AddressFlexContainer",
				"propertyName": "items",
				"index": 1
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
				"name": "GridContainer_wn8jlf2",
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
				"index": 4
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
					"masterEntitySchemaName": "Order",
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
					"linkedColumn": "Order",
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
					"linkedColumn": "Order",
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
				"name": "TimelineTile_Call",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Order",
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
					"isDefault": false,
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
					"data": {
						"schemaType": "SysFile"
					},
					"isDefault": false,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy",
					"linkedColumn": "Order"
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
					"data": {
						"schemaType": "Feed"
					},
					"isDefault": false,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"linkedColumn": "Order",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Document",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Order",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Type",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Document",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Contract",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Order",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "State",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "StartDate",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "EndDate",
								"columnLayout": "{\"column\": 2,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Contract",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Invoice",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Order",
					"sortedByColumn": "CreatedOn",
					"ownerColumn": "Owner",
					"iconId": null,
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Number",
								"columnLayout": null
							},
							{
								"columnName": "Account",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Contact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "PaymentStatus",
								"columnLayout": "{\"column\": 7,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "Amount",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "DueDate",
								"columnLayout": "{\"column\": 4,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Invoice",
						"isDefault": false
					},
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "MessageComposerSelector_u2b3uht",
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
				"name": "EmailComposer_exzwo4r",
				"values": {
					"type": "crt.EmailComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "97dfda4c-bc83-825b-ec17-bce118ec6c77",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "Order"
				},
				"parentName": "MessageComposerSelector_u2b3uht",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedComposer_u1qo85m",
				"values": {
					"type": "crt.FeedComposer",
					"classes": [
						"view-element"
					],
					"sortedByColumn": "CreatedOn",
					"data": {
						"uId": "be29f6eb-3920-3868-ff20-0b1c6c098cf2",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Order",
					"dataSourceName": "PDS"
				},
				"parentName": "MessageComposerSelector_u2b3uht",
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
					"caption": "#MacrosTemplateString(#ResourceString(CustomerProfileTabContainerHeaderLabel_caption)#)#",
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
					"referenceColumn": "$LookupAttribute_zv8h198"
				},
				"parentName": "ContactProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactJobTitle",
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
					"gap": "none",
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
				"name": "AccountLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AccountLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
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
					"layoutConfig": {},
					"visible": true,
					"referenceColumn": "$LookupAttribute_xm7t1f4"
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
					"StringAttribute_fwsxmc2": {
						"modelConfig": {
							"path": "PDS.ReceiverName"
						}
					},
					"LookupAttribute_xm7t1f4": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"LookupAttribute_zv8h198": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"NumberAttribute_4ji1um5": {
						"modelConfig": {
							"path": "PDS.PaymentAmount"
						}
					},
					"NumberAttribute_5ji1um4": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"LookupAttribute_vz3hq6b": {
						"modelConfig": {
							"path": "PDS.PaymentStatus"
						}
					},
					"LookupAttribute_sc9ibnn": {
						"modelConfig": {
							"path": "PDS.PaymentType"
						}
					},
					"LookupAttribute_mbt3exn": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"LookupAttribute_tnq0vc3": {
						"modelConfig": {
							"path": "PDS.Currency"
						}
					},
					"DateTimeAttribute_ew2cxlt": {
						"modelConfig": {
							"path": "PDS.Date"
						}
					},
					"DateTimeAttribute_sie48pt": {
						"modelConfig": {
							"path": "PDS.DueDate"
						}
					},
					"DateTimeAttribute_7qa6p3t": {
						"modelConfig": {
							"path": "PDS.ActualDate"
						}
					},
					"LookupAttribute_jfhlrnc": {
						"modelConfig": {
							"path": "PDS.SourceOrder"
						}
					},
					"GridDetail_tviz7gf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tviz7gfDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "ProductsSearchFilter_GridDetail_tviz7gf",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tviz7gfDS_Product": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.Product"
									}
								},
								"GridDetail_tviz7gfDS_Price": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.Price"
									}
								},
								"GridDetail_tviz7gfDS_Quantity": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.Quantity"
									}
								},
								"GridDetail_tviz7gfDS_Unit": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.Unit"
									}
								},
								"GridDetail_tviz7gfDS_DiscountPercent": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.DiscountPercent"
									}
								},
								"GridDetail_tviz7gfDS_TotalAmount": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.TotalAmount"
									}
								},
								"GridDetail_tviz7gfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_tviz7gfDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_n1ckeg1": {
						"modelConfig": {
							"path": "PDS.DeliveryStatus"
						}
					},
					"LookupAttribute_5a97cwx": {
						"modelConfig": {
							"path": "PDS.DeliveryType"
						}
					},
					"StringAttribute_t5nf9nb": {
						"modelConfig": {
							"path": "PDS.DeliveryAddress"
						}
					},
					"StringAttribute_38c7wsi": {
						"modelConfig": {
							"path": "PDS.Comment"
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
					"ApprovalList_eo00aks": {
						"isCollection": true,
						"modelConfig": {
							"path": "ApprovalList_eo00aksDS",
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
									"name": "ApprovalListSearch_ApprovalList_eo00aks",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ApprovalList_eo00aksDS_VisaOwner": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.VisaOwner"
									}
								},
								"ApprovalList_eo00aksDS_Objective": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.Objective"
									}
								},
								"ApprovalList_eo00aksDS_CreatedOn": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.CreatedOn"
									}
								},
								"ApprovalList_eo00aksDS_SetDate": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.SetDate"
									}
								},
								"ApprovalList_eo00aksDS_SetBy": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.SetBy"
									}
								},
								"ApprovalList_eo00aksDS_Status": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.Status"
									}
								},
								"ApprovalList_eo00aksDS_Id": {
									"modelConfig": {
										"path": "ApprovalList_eo00aksDS.Id"
									}
								}
							}
						}
					},
					"AccountAddress": {
						"modelConfig": {
							"path": "PDS.AccountAddress"
						}
					},
					"ContactAddress": {
						"modelConfig": {
							"path": "PDS.ContactAddress"
						}
					},
					"Parameter_q3y0k0o": {
						"modelConfig": {
							"path": "PDS.CurrencyRate"
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
						"GridDetail_tviz7gfDS": [
							{
								"attributePath": "Order",
								"relationPath": "PDS.Id"
							}
						],
						"ApprovalList_eo00aksDS": [
							{
								"attributePath": "Order",
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
							"entitySchemaName": "Order",
							"attributes": {
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
								},
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
								"AccountAddress": {
									"path": "Account.Address",
									"type": "ForwardReference"
								},
								"ContactAddress": {
									"path": "Contact.Address",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_tviz7gfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OrderProduct",
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
								"Unit": {
									"path": "Unit"
								},
								"DiscountPercent": {
									"path": "DiscountPercent"
								},
								"TotalAmount": {
									"path": "TotalAmount"
								}
							}
						}
					},
					"ApprovalList_eo00aksDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OrderVisa",
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
					"entitySchemaName": "OrderFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});