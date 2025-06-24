define("Opportunities_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "OpportunityInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
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
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
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
					"entitySchemaName": "Opportunity"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Opportunity",
					"columns": [
						{
							"id": "220fb54b-4efc-4e32-bf37-8694219fb8df",
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
				"name": "RunOppMgmtProcButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RunOppMgmtProcButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": false,
					"icon": "process-button-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "RunOppMgmtProcManually",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "OpportunityId"
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
							"processName": "PrintQuotationReport",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "OpportunityId"
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
					"entityName": "Opportunity"
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileFieldFlexContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CloseReason",
				"values": {
					"type": "crt.ComboBox",
					"label": "#ResourceString(CloseReason_label)#",
					"labelPosition": "above",
					"control": "$LookupAttribute_juw5c8t",
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
				"name": "Winner",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_6fjncut",
					"labelPosition": "above",
					"control": "$LookupAttribute_6fjncut",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ListAction_eslrggs",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "ComboBox.AddNewRecord",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Winner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DecisionMaker",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_gnqk0kr",
					"labelPosition": "above",
					"control": "$LookupAttribute_gnqk0kr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_0hxbi4r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_0hxbi4r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "DecisionMaker",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileFieldGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Amount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(Amount_label)#",
					"labelPosition": "above",
					"control": "$NumberAttribute_on3u7ar",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(Amount_tooltip)#"
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DueDate",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "date",
					"label": "#ResourceString(DueDate_label)#",
					"labelPosition": "above",
					"control": "$DateTimeAttribute_mqsvoky",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(DueDate_tooltip)#"
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ForecastCommit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.BooleanAttribute_bkkbonf",
					"labelPosition": "above",
					"control": "$BooleanAttribute_bkkbonf",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "IsPrimary",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "#ResourceString(IsPrimary_label)#",
					"labelPosition": "above",
					"control": "$BooleanAttribute_ze0281r",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PredictiveProbability",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_vyze7s9",
					"labelPosition": "above",
					"control": "$NumberAttribute_vyze7s9",
					"visible": true,
					"placeholder": "",
					"tooltip": "#ResourceString(PredictiveProbability_tooltip)#",
					"readonly": true
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CustomerInfoFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "medium",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactFieldsFlexContainer",
				"values": {
					"layoutConfig": {},
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
						"bottom": "medium",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "CustomerInfoFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactLabelContainer",
				"values": {
					"layoutConfig": {},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"padding": {
						"bottom": "medium"
					},
					"gap": "none"
				},
				"parentName": "ContactFieldsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactLabel",
				"values": {
					"layoutConfig": {},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ContactLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ContactLabelContainer",
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
					"referenceColumn": "$Parameter_fpx7x9n"
				},
				"parentName": "ContactFieldsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "JobTitle",
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
				"parentName": "ContactFieldsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": true,
					"columnsCount": 1,
					"showNoDataPlaceholder": true,
					"labelPosition": "above",
					"layoutConfig": {},
					"items": "$CommunicationOptions_mfm26d5",
					"masterRecordColumnName": "Contact",
					"visible": true,
					"masterRecordColumnValue": "$Parameter_fpx7x9n"
				},
				"parentName": "ContactFieldsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AccountFieldsFlexContainer",
				"values": {
					"layoutConfig": {},
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
				"parentName": "CustomerInfoFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountLabelContainer",
				"values": {
					"layoutConfig": {},
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
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountLabel",
				"values": {
					"layoutConfig": {},
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
				"parentName": "AccountLabelContainer",
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
					"referenceColumn": "$Parameter_q8l08xk"
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Web",
				"values": {
					"type": "crt.WebInput",
					"label": "$Resources.Strings.AccountWeb",
					"control": "$AccountWeb",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(Web_caption)#",
					"readonly": true,
					"visible": true
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountType",
					"ariaLabel": "#ResourceString(Type_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$AccountType",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Industry",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountIndustry",
					"ariaLabel": "#ResourceString(Industry_ariaLabel)#",
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
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EmployeesNumber",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountEmployeesNumber",
					"ariaLabel": "#ResourceString(EmployeesNumber_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$AccountEmployeesNumber",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AnnualRevenue",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountAnnualRevenue",
					"ariaLabel": "#ResourceString(AnnualRevenue_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$AccountAnnualRevenue",
					"visible": true,
					"placeholder": ""
				},
				"parentName": "AccountFieldsFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "OverviewTab",
				"values": {
					"caption": "#ResourceString(OverviewTab_caption)#",
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
				"name": "OverviewNewAnalyticsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
				"name": "PredictiveProbabilityMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PredictiveProbabilityMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_uokcgxh_Data",
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
												"columnPath": "PredictiveProbability"
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
				"parentName": "OverviewNewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DaysInFunnelNewMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DaysInFunnelNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ibcp4sy_Data",
								"schemaName": "VwOpportInStageForAnalysis",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "VwOpportInStageForAnalysis"
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
												"columnPath": "DaysInStage"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Opportunity",
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
							"template": "#ResourceString(DaysInFunnelNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue",
							"icon": {
								"iconName": "filter-column-icon"
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
				"name": "DaysAtCurrentStageNewMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DaysAtCurrentStageNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_qyfsd4j_Data",
								"schemaName": "VwOpportInStageForAnalysis",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "VwOpportInStageForAnalysis"
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
												"columnPath": "DaysInStage"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Opportunity",
										"relationPath": "PDS.Id"
									},
									{
										"attributePath": "Stage",
										"relationPath": "PDS.Stage"
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
							"template": "#ResourceString(DaysAtCurrentStageNewMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue",
							"icon": {
								"iconName": "hourglass-icon"
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
				"name": "EmailsSentNewMetric",
				"values": {
					"layoutConfig": {
						"column": 4,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EmailsSentNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_qyn8vpc_Data",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"0755bfb2-5893-4292-adfb-c1da1ff8621f": {
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
											"fc4bf80c-aa65-406b-88a9-d5d02fe22f75": {
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
										"attributePath": "Opportunity",
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
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OutgoingCallsNewMetric",
				"values": {
					"layoutConfig": {
						"column": 5,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OutgoingCallsNewMetric_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_zhxfbo9_Data",
								"schemaName": "Call",
								"filters": {
									"filter": {
										"items": {
											"fe84080d-5208-4d03-92ef-695991595de8": {
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
										"attributePath": "Opportunity",
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
				"index": 4
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
				"name": "DaysInFunnelMetric",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DaysInFunnelMetric_title)#",
						"data": {
							"providing": {
								"attribute": "DaysInFunnelMetric_7d70e23910065723aca446214c41d182",
								"schemaName": "VwOpportInStageForAnalysis",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "VwOpportInStageForAnalysis"
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
												"columnPath": "DaysInStage"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Opportunity",
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
							"template": "#ResourceString(DaysInFunnelMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DaysAtCurrentStageMetric",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(DaysAtCurrentStageMetric_title)#",
						"data": {
							"providing": {
								"attribute": "DaysAtCurrentStageMetric_41dc6c4397bbb4b1c4156af44c4b8978",
								"schemaName": "VwOpportInStageForAnalysis",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "VwOpportInStageForAnalysis"
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
												"columnPath": "DaysInStage"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Opportunity",
										"relationPath": "PDS.Id"
									},
									{
										"attributePath": "Stage",
										"relationPath": "PDS.Stage"
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
							"template": "#ResourceString(DaysAtCurrentStageMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "blue"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EmailsSentMetric",
				"values": {
					"layoutConfig": {
						"column": 3,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(EmailsSentMetric_title)#",
						"data": {
							"providing": {
								"attribute": "EmailsSentMetric_b5112e10504fd00f26517e97a18ac6db",
								"schemaName": "Activity",
								"filters": {
									"filter": {
										"items": {
											"c9c358f7-42e8-4fd3-b691-77b8c5aabf84": {
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
											"126d9fca-c56e-4346-9ac6-53cda48d3447": {
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
										"attributePath": "Opportunity",
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
							"template": "#ResourceString(EmailsSentMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "orange-red"
						},
						"theme": "full-fill"
					},
					"visible": true
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OutgoingCallsMetric",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(OutgoingCallsMetric_title)#",
						"data": {
							"providing": {
								"attribute": "OutgoingCallsMetric_cc1649f7004b3d5c475abfbfa611b460",
								"schemaName": "Call",
								"filters": {
									"filter": {
										"items": {
											"39ec9de8-a94c-4558-bdfc-0884c563ddab": {
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
										"attributePath": "Opportunity",
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
							"template": "#ResourceString(OutgoingCallsMetric_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium"
						},
						"layout": {
							"color": "green"
						},
						"theme": "full-fill"
					}
				},
				"parentName": "OverviewAnalyticsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OverviewFieldsFlexContainer",
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
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OverviewFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
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
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"layoutConfig": {},
					"alignItems": "stretch"
				},
				"parentName": "OverviewFieldsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerNeed",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ContactCustomerNeed",
					"labelPosition": "auto",
					"control": "$ContactCustomerNeed",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreatedOn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.DateTimeAttribute_z2wlq6f",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_z2wlq6f",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Parameter_fpx7x9n",
					"labelPosition": "auto",
					"control": "$Parameter_fpx7x9n",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_r39nt24",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_r39nt24_caption)#",
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
				"name": "Account",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Parameter_q8l08xk",
					"labelPosition": "auto",
					"control": "$Parameter_q8l08xk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_4fhxgqr",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4fhxgqr_caption)#",
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
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Title",
					"control": "$Title",
					"labelPosition": "auto"
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OpportunityType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(OpportunityType_label)#",
					"labelPosition": "auto",
					"control": "$LookupAttribute_1d3p9t5",
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
				"name": "Group",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_5qqol6y",
					"labelPosition": "auto",
					"control": "$LookupAttribute_5qqol6y",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_85sj3qr",
					"labelPosition": "auto",
					"control": "$LookupAttribute_85sj3qr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_b045nw6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_b045nw6_caption)#",
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
				"name": "Description",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_howuyn1",
					"labelPosition": "auto",
					"control": "$StringAttribute_howuyn1",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "ClosingDetails",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_eeul0r2",
					"labelPosition": "auto",
					"control": "$StringAttribute_eeul0r2",
					"multiline": true,
					"visible": false,
					"placeholder": "#ResourceString(ClosingDetails_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "ContactRolesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ContactRolesExpansionPanel_title)#",
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
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactRolesToolsContainer",
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
				"parentName": "ContactRolesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactRolesToolsFlexContainer",
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
				"parentName": "ContactRolesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactRolesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactRolesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OpportunityContact",
							"defaultValues": [
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "ContactRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactRolesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactRolesRefreshButton_caption)#",
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
							"dataSourceName": "ContactRolesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactRolesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactRolesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ContactRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactRolesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactRolesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContactRolesList",
							"filters": "$ContactRolesList | crt.ToCollectionFilters : 'ContactRolesList' : $ContactRolesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ContactRolesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactRolesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactRolesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OpportunityContact"
						}
					},
					"visible": true
				},
				"parentName": "ContactRolesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactRolesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContactRolesSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ContactRolesSearchFilter_ContactRolesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ContactRolesList"
										]
									}
								]
							}
						],
						"from": [
							"ContactRolesSearchFilter_SearchValue",
							"ContactRolesSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ContactRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactRolesListContainer",
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
				"parentName": "ContactRolesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactRolesList",
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
					"items": "$ContactRolesList",
					"primaryColumnName": "ContactRolesListDS_Id",
					"columns": [
						{
							"id": "5fd1cb6f-9bff-59ff-18f6-977fdbe96b5a",
							"code": "ContactRolesListDS_Contact",
							"caption": "#ResourceString(ContactRolesListDS_Contact)#",
							"dataValueType": 10,
							"width": 236
						},
						{
							"id": "a3c04bdc-78db-beed-3dd4-687ad5d89fbf",
							"code": "ContactRolesListDS_IsMainContact",
							"path": "IsMainContact",
							"caption": "#ResourceString(ContactRolesListDS_IsMainContact)#",
							"dataValueType": 12,
							"width": 153
						},
						{
							"id": "bd8616db-5421-b50f-a13b-b76e08a85266",
							"code": "ContactRolesListDS_Role",
							"path": "Role",
							"caption": "#ResourceString(ContactRolesListDS_Role)#",
							"dataValueType": 10,
							"referenceSchemaName": "OppContactRole",
							"width": 140
						},
						{
							"id": "6d3c93ec-bbb3-138c-e1ea-7f12e1e13b83",
							"code": "ContactRolesListDS_ContactMobilePhone",
							"path": "Contact.MobilePhone",
							"caption": "#ResourceString(ContactRolesListDS_ContactMobilePhone)#",
							"dataValueType": 42,
							"width": 144
						},
						{
							"id": "d2ffb574-3707-ff22-62d3-87c364b4b486",
							"code": "ContactRolesListDS_ContactEmail",
							"path": "Contact.Email",
							"caption": "#ResourceString(ContactRolesListDS_ContactEmail)#",
							"dataValueType": 45,
							"width": 175
						},
						{
							"id": "639c151e-36ea-bf55-97e8-314deed050c4",
							"code": "ContactRolesListDS_Influence",
							"path": "Influence",
							"caption": "#ResourceString(ContactRolesListDS_Influence)#",
							"dataValueType": 10,
							"referenceSchemaName": "OppContactInfluence",
							"width": 114
						},
						{
							"id": "68fb4793-3ac6-bcd7-1928-0ace0d5e623d",
							"code": "ContactRolesListDS_ContactLoyality",
							"path": "ContactLoyality",
							"caption": "#ResourceString(ContactRolesListDS_ContactLoyality)#",
							"dataValueType": 10,
							"referenceSchemaName": "OppContactLoyality",
							"width": 164
						},
						{
							"id": "e688d2d9-a7d3-2cc0-7018-09bf8fc1114e",
							"code": "ContactRolesListDS_ContactMotivator",
							"path": "ContactMotivator",
							"caption": "#ResourceString(ContactRolesListDS_ContactMotivator)#",
							"dataValueType": 30
						},
						{
							"id": "0ab61161-0850-b0fe-5e20-f75bddcff5be",
							"code": "ContactRolesListDS_Opportunity",
							"path": "Opportunity",
							"caption": "#ResourceString(ContactRolesListDS_Opportunity)#",
							"dataValueType": 10,
							"referenceSchemaName": "Opportunity",
							"width": 130
						}
					],
					"selectionState": "$ContactRolesList_SelectionState",
					"_selectionOptions": {
						"attribute": "ContactRolesList_SelectionState"
					}
				},
				"parentName": "ContactRolesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OpportunityTeamExpansionPanel_title)#",
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
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamToolsContainer",
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
				"parentName": "OpportunityTeamExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamToolsFlexContainer",
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
				"parentName": "OpportunityTeamToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunityTeamAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OpportunityParticipant",
							"defaultValues": [
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "OpportunityTeamToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunityTeamRefreshButton_caption)#",
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
							"dataSourceName": "OpportunityTeamListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OpportunityTeamToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpportunityTeamSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OpportunityTeamToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunityTeamExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OpportunityTeamList",
							"filters": "$OpportunityTeamList | crt.ToCollectionFilters : 'OpportunityTeamList' : $OpportunityTeamList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "OpportunityTeamSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(OpportunityTeamImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OpportunityParticipant"
						}
					},
					"visible": true
				},
				"parentName": "OpportunityTeamSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(OpportunityTeamSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OpportunityTeamSearchFilter_OpportunityTeamList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"OpportunityTeamList"
										]
									}
								]
							}
						],
						"from": [
							"OpportunityTeamSearchFilter_SearchValue",
							"OpportunityTeamSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "OpportunityTeamToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamListContainer",
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
				"parentName": "OpportunityTeamExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpportunityTeamList",
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
					"items": "$OpportunityTeamList",
					"primaryColumnName": "OpportunityTeamListDS_Id",
					"columns": [
						{
							"id": "0f893c76-fd5d-fc66-95f1-664d38ac1237",
							"code": "OpportunityTeamListDS_Account",
							"caption": "#ResourceString(OpportunityTeamListDS_Account)#",
							"dataValueType": 10,
							"width": 235
						},
						{
							"id": "5c48b22c-7a9b-a59a-ed94-2ce0c0f8d0db",
							"code": "OpportunityTeamListDS_Contact",
							"path": "Contact",
							"caption": "#ResourceString(OpportunityTeamListDS_Contact)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 248
						},
						{
							"id": "d44dddfb-17b5-affa-cba9-bdcbd773a51b",
							"code": "OpportunityTeamListDS_Role",
							"path": "Role",
							"caption": "#ResourceString(OpportunityTeamListDS_Role)#",
							"dataValueType": 10,
							"referenceSchemaName": "OpportunityParticipantRole"
						},
						{
							"id": "a9202d26-d21f-eb84-ab51-35ab93cd3821",
							"code": "OpportunityTeamListDS_Notes",
							"path": "Notes",
							"caption": "#ResourceString(OpportunityTeamListDS_Notes)#",
							"dataValueType": 29,
							"width": 356
						}
					],
					"selectionState": "$OpportunityTeamList_SelectionState",
					"_selectionOptions": {
						"attribute": "OpportunityTeamList_SelectionState"
					}
				},
				"parentName": "OpportunityTeamListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CompetitorsExpansionPanel_title)#",
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
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CompetitorsToolsContainer",
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
				"parentName": "CompetitorsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsToolsFlexContainer",
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
				"parentName": "CompetitorsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CompetitorsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OpportunityCompetitor",
							"defaultValues": [
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "CompetitorsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CompetitorsRefreshButton_caption)#",
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
							"dataSourceName": "CompetitorsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CompetitorsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CompetitorsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CompetitorsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "CompetitorsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CompetitorsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CompetitorsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CompetitorsList",
							"filters": "$CompetitorsList | crt.ToCollectionFilters : 'CompetitorsList' : $CompetitorsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "CompetitorsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CompetitorsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "OpportunityCompetitor"
						}
					},
					"visible": true
				},
				"parentName": "CompetitorsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CompetitorsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(CompetitorsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CompetitorsSearchFilter_CompetitorsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CompetitorsList"
										]
									}
								]
							}
						],
						"from": [
							"CompetitorsSearchFilter_SearchValue",
							"CompetitorsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "CompetitorsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CompetitorsListContainer",
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
				"parentName": "CompetitorsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CompetitorsList",
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
					"items": "$CompetitorsList",
					"primaryColumnName": "CompetitorsListDS_Id",
					"columns": [
						{
							"id": "b4955f2e-f70f-4040-18d6-283e0f091a26",
							"code": "CompetitorsListDS_Competitor",
							"caption": "#ResourceString(CompetitorsListDS_Competitor)#",
							"dataValueType": 10,
							"width": 217
						},
						{
							"id": "2d6a5908-3936-5b07-8aef-00ec5a6d95aa",
							"code": "CompetitorsListDS_CompetitorProduct",
							"path": "CompetitorProduct",
							"caption": "#ResourceString(CompetitorsListDS_CompetitorProduct)#",
							"dataValueType": 10,
							"referenceSchemaName": "CompetitorProduct",
							"width": 189
						},
						{
							"id": "0286f31a-17e7-acd6-e8e2-8cf094e78dc7",
							"code": "CompetitorsListDS_Strengths",
							"path": "Strengths",
							"caption": "#ResourceString(CompetitorsListDS_Strengths)#",
							"dataValueType": 30
						},
						{
							"id": "30d9a2e9-55d6-4c74-343c-fa4856d0caa6",
							"code": "CompetitorsListDS_Weakness",
							"path": "Weakness",
							"caption": "#ResourceString(CompetitorsListDS_Weakness)#",
							"dataValueType": 30,
							"width": 238
						},
						{
							"id": "9273f5b6-89f5-4b55-73a8-42bd0ad79082",
							"code": "CompetitorsListDS_IsWinner",
							"path": "IsWinner",
							"caption": "#ResourceString(CompetitorsListDS_IsWinner)#",
							"dataValueType": 12,
							"width": 114
						},
						{
							"id": "2fd37061-1f61-2f74-4360-b398d6151e67",
							"code": "CompetitorsListDS_Supplier",
							"path": "Supplier",
							"caption": "#ResourceString(CompetitorsListDS_Supplier)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account",
							"width": 194
						}
					],
					"selectionState": "$CompetitorsList_SelectionState",
					"_selectionOptions": {
						"attribute": "CompetitorsList_SelectionState"
					}
				},
				"parentName": "CompetitorsListContainer",
				"propertyName": "items",
				"index": 0
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
					"linkedColumn": "Opportunity",
					"sortedByColumn": "StartDate",
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
					"visible": true,
					"ownerColumn": "CreatedBy"
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
					"linkedColumn": "Opportunity",
					"sortedByColumn": "SendDate",
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
					"visible": true,
					"ownerColumn": "SenderContact"
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
					"linkedColumn": "Opportunity",
					"sortedByColumn": "StartDate",
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
					"visible": true,
					"ownerColumn": "Owner"
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
					"linkedColumn": "Opportunity",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Lead",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Opportunity",
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
								"columnName": "LeadName",
								"columnLayout": null
							},
							{
								"columnName": "QualifiedAccount",
								"columnLayout": "{\"column\": 1,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "QualifiedContact",
								"columnLayout": "{\"column\": 4,\"row\": 1,\"colSpan\": 3,\"rowSpan\": 1}"
							},
							{
								"columnName": "QualifyStatus",
								"columnLayout": "{\"column\": 1,\"row\": 2,\"colSpan\": 3,\"rowSpan\": 1}"
							}
						],
						"schemaName": "Lead",
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
						"uId": "1a693a74-5707-6ec7-b994-cd8e03d9dfb3",
						"schemaType": "Email",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.EmailComposer",
						"caption": "Email"
					},
					"recordId": "$Id",
					"defaultSenderRequest": "crt.DefaultSenderComposerRequest",
					"entitySchemaName": "Opportunity"
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
						"uId": "f2704457-b42c-1e7d-8c90-e6c230f84e3a",
						"schemaType": "Feed",
						"sortedByColumn": "CreatedOn",
						"typeName": "crt.FeedComposer",
						"caption": "Feed"
					},
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"entitySchemaName": "Opportunity",
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
				"name": "OpportunityInsightsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(OpportunityInsightsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CustomerPerspectiveExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CustomerPerspectiveExpansionPanel_title)#",
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
				"parentName": "OpportunityInsightsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerPerspectiveToolsContainer",
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
				"parentName": "CustomerPerspectiveExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerPerspectiveToolsFlexContainer",
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
				"parentName": "CustomerPerspectiveToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CustomerPerspectiveFieldsContainer",
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
				"parentName": "CustomerPerspectiveExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "What",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_nxs555f",
					"labelPosition": "auto",
					"control": "$StringAttribute_nxs555f",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(What_placeholder)#",
					"tooltip": ""
				},
				"parentName": "CustomerPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Why",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_dajb4kq",
					"labelPosition": "auto",
					"control": "$StringAttribute_dajb4kq",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(Why_placeholder)#",
					"tooltip": ""
				},
				"parentName": "CustomerPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WhyNow",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_eik18nt",
					"labelPosition": "auto",
					"control": "$StringAttribute_eik18nt",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(WhyNow_placeholder)#",
					"tooltip": ""
				},
				"parentName": "CustomerPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "BuyingProcess",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_azwcsap",
					"labelPosition": "auto",
					"control": "$StringAttribute_azwcsap",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(BuyingProcess_placeholder)#",
					"tooltip": ""
				},
				"parentName": "CustomerPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OurPerspectiveExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OurPerspectiveExpansionPanel_title)#",
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
				"parentName": "OpportunityInsightsTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OurPerspectiveToolsContainer",
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
				"parentName": "OurPerspectiveExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OurPerspectiveToolsFlexContainer",
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
				"parentName": "OurPerspectiveToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OurPerspectiveFieldsContainer",
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
				"parentName": "OurPerspectiveExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Strength",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_zqldatn",
					"labelPosition": "auto",
					"control": "$StringAttribute_zqldatn",
					"visible": true,
					"placeholder": "#ResourceString(Strength_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OurPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Weaknesses",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.StringAttribute_fv5dkj9",
					"labelPosition": "auto",
					"control": "$StringAttribute_fv5dkj9",
					"visible": true,
					"placeholder": "#ResourceString(Weaknesses_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OurPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WhyOurCompany",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_pieo1nf",
					"labelPosition": "auto",
					"control": "$StringAttribute_pieo1nf",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(WhyOurCompany_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OurPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EngagementTactic",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_gnwxd1r",
					"labelPosition": "auto",
					"control": "$StringAttribute_gnwxd1r",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(EngagementTactic_placeholder)#",
					"tooltip": ""
				},
				"parentName": "OurPerspectiveFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NextKeyActionExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(NextKeyActionExpansionPanel_title)#",
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
					"visible": false
				},
				"parentName": "OpportunityInsightsTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NextKeyActionToolsContainer",
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
				"parentName": "NextKeyActionExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextKeyActionToolsFlexContainer",
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
				"parentName": "NextKeyActionToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextKeyActionContainer",
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
					"visible": false,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "NextKeyActionExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextKeyActionFeed",
				"values": {
					"type": "crt.Feed",
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"allowExternalPost": false,
					"entitySchemaName": "OpportunityKeyAction",
					"dataSourceName": "NextKeyActionListDS",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"visible": false
				},
				"parentName": "NextKeyActionContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NextKeyActionList",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"items": "$DataGrid_a2xhxnu",
					"visible": false,
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"fitContent": true,
					"primaryColumnName": "NextKeyActionListDS_Id",
					"columns": [
						{
							"id": "f0d85b51-9647-1cef-af36-a111078d1802",
							"code": "NextKeyActionListDS_Opportunity",
							"path": "Opportunity",
							"caption": "#ResourceString(NextKeyActionListDS_Opportunity)#",
							"dataValueType": 10,
							"referenceSchemaName": "Opportunity"
						},
						{
							"id": "55286216-3bcb-1212-3f60-9b5137f6f6a9",
							"code": "NextKeyActionListDS_CreatedBy",
							"caption": "#ResourceString(NextKeyActionListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "6b43afe9-b34e-017e-b45f-f0051878cc79",
							"code": "NextKeyActionListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(NextKeyActionListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "16b034fc-92cc-bf4d-d586-f2155b7f5205",
							"code": "NextKeyActionListDS_ModifiedBy",
							"path": "ModifiedBy",
							"caption": "#ResourceString(NextKeyActionListDS_ModifiedBy)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "80ed0559-cacc-227b-e5ae-608269f6e3fe",
							"code": "NextKeyActionListDS_ModifiedOn",
							"path": "ModifiedOn",
							"caption": "#ResourceString(NextKeyActionListDS_ModifiedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "NextKeyActionContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(ProductsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ProductSuggestions",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_7netrag",
					"labelPosition": "auto",
					"control": "$StringAttribute_7netrag",
					"multiline": true,
					"visible": true,
					"placeholder": "#ResourceString(ProductSuggestions_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ProductsTab",
				"propertyName": "items",
				"index": 0
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
				"parentName": "ProductsTab",
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
							"entityName": "OpportunityProductInterest",
							"defaultValues": [
								{
									"attributeName": "Opportunity",
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
							"entitySchemaName": "OpportunityProductInterest"
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
					"visible": true,
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
					"fitContent": true,
					"items": "$ProductsList",
					"primaryColumnName": "ProductsListDS_Id",
					"columns": [
						{
							"id": "b2a9f446-9fe2-62dc-5ae7-6d310c8f377c",
							"code": "ProductsListDS_Product",
							"path": "Product",
							"caption": "#ResourceString(ProductsListDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product",
							"width": 324
						},
						{
							"id": "1af65d98-9156-d1c2-ffc8-68318c020160",
							"code": "ProductsListDS_ProductCurrency",
							"path": "Product.Currency",
							"caption": "#ResourceString(ProductsListDS_ProductCurrency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 114
						},
						{
							"id": "cf847233-cd36-17c2-7af7-137d0adb9adc",
							"code": "ProductsListDS_ProductPrice",
							"path": "Product.Price",
							"caption": "#ResourceString(ProductsListDS_ProductPrice)#",
							"dataValueType": 6,
							"width": 137
						},
						{
							"id": "6e83344b-d944-cdd6-eb28-3a7b07959bec",
							"code": "ProductsListDS_OfferResult",
							"path": "OfferResult",
							"caption": "#ResourceString(ProductsListDS_OfferResult)#",
							"dataValueType": 10,
							"referenceSchemaName": "PropositionResult",
							"width": 207
						},
						{
							"id": "fbdc88c3-1804-4bd7-bcf4-d780f3266db7",
							"code": "ProductsListDS_Quantity",
							"path": "Quantity",
							"caption": "#ResourceString(ProductsListDS_Quantity)#",
							"dataValueType": 32,
							"width": 122
						},
						{
							"id": "92e6557b-0230-186b-843d-d49d84d1f0d3",
							"code": "ProductsListDS_Price",
							"path": "Price",
							"caption": "#ResourceString(ProductsListDS_Price)#",
							"dataValueType": 32,
							"width": 114
						},
						{
							"id": "7e24ec9a-fe25-b670-83e8-4b894cc28fb5",
							"code": "ProductsListDS_Amount",
							"caption": "#ResourceString(ProductsListDS_Amount)#",
							"dataValueType": 32,
							"width": 126
						}
					],
					"selectionState": "$ProductsList_SelectionState",
					"_selectionOptions": {
						"attribute": "ProductsList_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "ProductsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ProductsList",
							"filters": "$ProductsList | crt.ToCollectionFilters : 'ProductsList' : $ProductsList_SelectionState | crt.SkipIfSelectionEmpty : $ProductsList_SelectionState"
						}
					}
				},
				"parentName": "ProductsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductsList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "ProductsListDS",
							"filters": "$ProductsList | crt.ToCollectionFilters : 'ProductsList' : $ProductsList_SelectionState | crt.SkipIfSelectionEmpty : $ProductsList_SelectionState"
						}
					}
				},
				"parentName": "ProductsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RecommendedProductExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(RecommendedProductExpansionPanel_title)#",
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
				"parentName": "ProductsTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RecommendedProductToolsContainer",
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
				"parentName": "RecommendedProductExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductToolsFlexContainer",
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
				"parentName": "RecommendedProductToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RecommendedProductRefreshButton_caption)#",
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
							"dataSourceName": "RecommendedProductListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RecommendedProductSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RecommendedProductExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RecommendedProductExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RecommendedProductList",
							"filters": "$RecommendedProductList | crt.ToCollectionFilters : 'RecommendedProductList' : $RecommendedProductList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RecommendedProductSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(RecommendedProductSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "RecommendedProductSearchFilter_RecommendedProductList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"RecommendedProductList"
										]
									}
								]
							}
						],
						"from": [
							"RecommendedProductSearchFilter_SearchValue",
							"RecommendedProductSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "RecommendedProductToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RecommendedProductListContainer",
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
				"parentName": "RecommendedProductExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RecommendedProductList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"visible": true,
					"fitContent": true,
					"items": "$RecommendedProductList",
					"primaryColumnName": "RecommendedProductListDS_Id",
					"columns": [
						{
							"id": "50e32250-c48e-8c70-ed3c-109f85222e6d",
							"code": "RecommendedProductListDS_Product",
							"path": "Product",
							"caption": "#ResourceString(RecommendedProductListDS_Product)#",
							"dataValueType": 10,
							"referenceSchemaName": "Product",
							"width": 323
						},
						{
							"id": "b341a944-391a-5418-1dfd-d62940e23d90",
							"code": "RecommendedProductListDS_ProductPrice",
							"path": "Product.Price",
							"caption": "#ResourceString(RecommendedProductListDS_ProductPrice)#",
							"dataValueType": 6,
							"width": 114
						},
						{
							"id": "89f1d27b-6c93-2f76-2836-ce2aff3c38b7",
							"code": "RecommendedProductListDS_Score",
							"path": "Score",
							"caption": "#ResourceString(RecommendedProductListDS_Score)#",
							"dataValueType": 34,
							"width": 210
						},
						{
							"id": "9bcdff2c-ad2f-c130-3761-d05ee3d2fbf8",
							"code": "RecommendedProductListDS_Status",
							"path": "Status",
							"caption": "#ResourceString(RecommendedProductListDS_Status)#",
							"dataValueType": 10,
							"referenceSchemaName": "RecommendProductStatus",
							"width": 174
						},
						{
							"id": "d23569aa-896d-f1a1-25ab-ce6eea4e3774",
							"code": "RecommendedProductListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(RecommendedProductListDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"selectionState": "$RecommendedProductList_SelectionState",
					"_selectionOptions": {
						"attribute": "RecommendedProductList_SelectionState"
					}
				},
				"parentName": "RecommendedProductListContainer",
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
				"index": 4
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
							"filters": "$GridDetail_rnogu7n | crt.ToCollectionFilters : 'GridDetail_rnogu7n' : $StageHistoryList_SelectionState"
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
								"attribute": "StageHistorySearchFilter_GridDetail_rnogu7n",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_rnogu7n"
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
					"items": "$GridDetail_rnogu7n",
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
							"id": "6837ac7a-018d-2f3b-7b68-d0881dedf34e",
							"code": "StageHistoryListDS_Stage",
							"path": "Stage",
							"caption": "#ResourceString(StageHistoryListDS_Stage)#",
							"dataValueType": 10,
							"referenceSchemaName": "OpportunityStage",
							"width": 289
						},
						{
							"id": "e3bb26dc-b4e2-51a5-4570-f70b6e7a749a",
							"code": "StageHistoryListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(StageHistoryListDS_StartDate)#",
							"dataValueType": 7
						},
						{
							"id": "69d0f4a5-c285-ee6b-fba6-a5107d198d39",
							"code": "StageHistoryListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(StageHistoryListDS_DueDate)#",
							"dataValueType": 7
						},
						{
							"id": "2d996387-2c68-e919-24fd-e880b2a2ee97",
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
				"name": "LeadsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(LeadsExpansionPanel_title)#",
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
				"name": "LeadsToolsContainer",
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
				"parentName": "LeadsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsToolsFlexContainer",
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
					"justifyContent": "start",
					"wrap": "wrap"
				},
				"parentName": "LeadsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsAddButton_caption)#",
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
									"value": "$Parameter_q8l08xk"
								},
								{
									"attributeName": "Opportunity",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsRefreshButton_caption)#",
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
							"dataSourceName": "LeadsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "LeadsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LeadsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "LeadsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LeadsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LeadsList",
							"filters": "$GridDetail_n4l8edn | crt.ToCollectionFilters : 'GridDetail_n4l8edn' : $LeadsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "LeadsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(LeadsImportDataButton_caption)#",
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
				"parentName": "LeadsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(LeadsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "LeadsSearchFilter_GridDetail_n4l8edn",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_n4l8edn"
										]
									}
								]
							}
						],
						"from": [
							"LeadsSearchFilter_SearchValue",
							"LeadsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "LeadsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LeadsQuickFilterFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"justifyContent": "start",
					"alignItems": "stretch",
					"wrap": "nowrap"
				},
				"parentName": "LeadsToolsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "QuickFilterShowAllLeads",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilterShowAllLeads_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": false,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"filterType": "custom",
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilterShowAllLeads_GridDetail_n4l8edn",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_n4l8edn",
													"customFilter": null,
													"dependencyFilters": [
														{
															"attributePath": "Opportunity",
															"attributeName": "Id",
															"relationPath": "PDS.Id"
														}
													]
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilterShowAllLeads_config_caption)#",
													"hint": "",
													"defaultValue": false,
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
							"QuickFilterShowAllLeads_Value",
							"Id"
						]
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "LeadsQuickFilterFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsListContainer",
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
				"parentName": "LeadsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_n4l8edn",
					"visible": true,
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true,
					"primaryColumnName": "LeadsListDS_Id",
					"columns": [
						{
							"id": "ba4a6155-744f-ce8e-583e-af1d133e5846",
							"code": "LeadsListDS_LeadName",
							"caption": "#ResourceString(LeadsListDS_LeadName)#",
							"dataValueType": 30,
							"width": 323
						},
						{
							"id": "9495c47d-68b7-2fae-d2e4-dd9aa6253fc6",
							"code": "LeadsListDS_LeadType",
							"path": "LeadType",
							"caption": "#ResourceString(LeadsListDS_LeadType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadType"
						},
						{
							"id": "2ed0c14e-3469-b2da-c214-b5677e1cc956",
							"code": "LeadsListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(LeadsListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 237
						},
						{
							"id": "ffba4760-4936-d183-5c45-2deabc8e85dc",
							"code": "LeadsListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(LeadsListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "5a125a46-7c5c-5b01-3581-9dcede02ff8c",
							"code": "LeadsListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(LeadsListDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"selectionState": "$LeadsList_SelectionState",
					"_selectionOptions": {
						"attribute": "LeadsList_SelectionState"
					}
				},
				"parentName": "LeadsListContainer",
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
									"value": "$Parameter_q8l08xk"
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
							"filters": "$GridDetail_iwda2md | crt.ToCollectionFilters : 'GridDetail_iwda2md' : $OpportunitiesByCustomerList_SelectionState"
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
								"attribute": "OpportunitiesByCustomerSearchFilter_GridDetail_iwda2md",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_iwda2md"
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
					"items": "$GridDetail_iwda2md",
					"visible": true,
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true,
					"primaryColumnName": "OpportunitiesByCustomerListDS_Id",
					"columns": [
						{
							"id": "a6d885cc-6591-2cd1-4405-3eba937f30d4",
							"code": "OpportunitiesByCustomerListDS_Title",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Title)#",
							"dataValueType": 30,
							"width": 328
						},
						{
							"id": "b39791d3-8e1c-58aa-5281-c10c02416e8b",
							"code": "OpportunitiesByCustomerListDS_Stage",
							"path": "Stage",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Stage)#",
							"dataValueType": 10,
							"referenceSchemaName": "OpportunityStage",
							"width": 244
						},
						{
							"id": "fc73e0b4-c47b-407d-e0f0-26d33f0502f1",
							"code": "OpportunitiesByCustomerListDS_Amount",
							"path": "Amount",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Amount)#",
							"dataValueType": 32,
							"width": 173
						},
						{
							"id": "38fe1d12-5f58-e9c0-a9f8-e23618cf4df2",
							"code": "OpportunitiesByCustomerListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 210
						},
						{
							"id": "6f560cd4-465a-e398-03f9-edd098b76ad1",
							"code": "OpportunitiesByCustomerListDS_DueDate",
							"path": "DueDate",
							"caption": "#ResourceString(OpportunitiesByCustomerListDS_DueDate)#",
							"dataValueType": 8,
							"width": 183
						}
					],
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
					},
					"visible": true
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
					"masterSchemaName": "Opportunity"
				},
				"parentName": "NextStepsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PlaybookTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(PlaybookTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "open-book-tab-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PlaybookTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "PlaybookTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PlaybookTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(PlaybookTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "PlaybookTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Playbook",
				"values": {
					"type": "crt.Playbook",
					"_designOptions": {
						"sourceName": "KnowledgeBase",
						"templateValuesMapping": {
							"id": "Playbook_KnowledgeBaseDS_Id",
							"caption": "Playbook_KnowledgeBaseDS_Name",
							"content": "Playbook_KnowledgeBaseDS_Notes",
							"author": "Playbook_KnowledgeBaseDS_CreatedBy",
							"modifiedOn": "Playbook_KnowledgeBaseDS_ModifiedOn",
							"type": "Playbook_KnowledgeBaseDS_Type"
						}
					},
					"items": "$Playbook_KnowledgeBase"
				},
				"parentName": "PlaybookTabContainer",
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
					"Title": {
						"modelConfig": {
							"path": "PDS.Title"
						}
					},
					"Parameter_fpx7x9n": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"ContactJobTitle": {
						"modelConfig": {
							"path": "PDS.ContactJobTitle"
						}
					},
					"CommunicationOptions_mfm26d5": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContactCommunicationOptionsDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "asc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ContactCommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.CreatedOn"
									}
								},
								"ContactCommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.Number"
									}
								},
								"ContactCommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.Primary"
									}
								},
								"ContactCommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.NonActual"
									}
								},
								"ContactCommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.CommunicationType"
									}
								},
								"ContactCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"ContactCommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"ContactCommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "ContactCommunicationOptionsDS.Id"
									}
								}
							}
						}
					},
					"Parameter_q8l08xk": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"AccountWeb": {
						"modelConfig": {
							"path": "PDS.AccountWeb"
						}
					},
					"AccountType": {
						"modelConfig": {
							"path": "PDS.AccountType"
						}
					},
					"AccountIndustry": {
						"modelConfig": {
							"path": "PDS.AccountIndustry"
						}
					},
					"AccountEmployeesNumber": {
						"modelConfig": {
							"path": "PDS.AccountEmployeesNumber"
						}
					},
					"AccountAnnualRevenue": {
						"modelConfig": {
							"path": "PDS.AccountAnnualRevenue"
						}
					},
					"LookupAttribute_5qqol6y": {
						"modelConfig": {
							"path": "PDS.Group"
						}
					},
					"LookupAttribute_85sj3qr": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"LookupAttribute_1d3p9t5": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"StringAttribute_howuyn1": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"StringAttribute_7netrag": {
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
								"ProductsListDS_ProductCurrency": {
									"modelConfig": {
										"path": "ProductsListDS.ProductCurrency"
									}
								},
								"ProductsListDS_ProductPrice": {
									"modelConfig": {
										"path": "ProductsListDS.ProductPrice"
									}
								},
								"ProductsListDS_OfferResult": {
									"modelConfig": {
										"path": "ProductsListDS.OfferResult"
									}
								},
								"ProductsListDS_Quantity": {
									"modelConfig": {
										"path": "ProductsListDS.Quantity"
									}
								},
								"ProductsListDS_Price": {
									"modelConfig": {
										"path": "ProductsListDS.Price"
									}
								},
								"ProductsListDS_Amount": {
									"modelConfig": {
										"path": "ProductsListDS.Amount"
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
					"StringAttribute_zqldatn": {
						"modelConfig": {
							"path": "PDS.Strength"
						}
					},
					"StringAttribute_fv5dkj9": {
						"modelConfig": {
							"path": "PDS.Weaknesses"
						}
					},
					"StringAttribute_pieo1nf": {
						"modelConfig": {
							"path": "PDS.WhyOurCompany"
						}
					},
					"StringAttribute_gnwxd1r": {
						"modelConfig": {
							"path": "PDS.EngagementTactic"
						}
					},
					"StringAttribute_nxs555f": {
						"modelConfig": {
							"path": "PDS.What"
						}
					},
					"StringAttribute_dajb4kq": {
						"modelConfig": {
							"path": "PDS.Why"
						}
					},
					"StringAttribute_eik18nt": {
						"modelConfig": {
							"path": "PDS.WhyNow"
						}
					},
					"StringAttribute_azwcsap": {
						"modelConfig": {
							"path": "PDS.BuyingProcess"
						}
					},
					"RecommendedProductList": {
						"isCollection": true,
						"modelConfig": {
							"path": "RecommendedProductListDS",
							"filterAttributes": [
								{
									"name": "RecommendedProductSearchFilter_RecommendedProductList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"RecommendedProductListDS_Product": {
									"modelConfig": {
										"path": "RecommendedProductListDS.Product"
									}
								},
								"RecommendedProductListDS_ProductPrice": {
									"modelConfig": {
										"path": "RecommendedProductListDS.ProductPrice"
									}
								},
								"RecommendedProductListDS_Score": {
									"modelConfig": {
										"path": "RecommendedProductListDS.Score"
									}
								},
								"RecommendedProductListDS_Status": {
									"modelConfig": {
										"path": "RecommendedProductListDS.Status"
									}
								},
								"RecommendedProductListDS_CreatedOn": {
									"modelConfig": {
										"path": "RecommendedProductListDS.CreatedOn"
									}
								},
								"RecommendedProductListDS_Id": {
									"modelConfig": {
										"path": "RecommendedProductListDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_gnqk0kr": {
						"modelConfig": {
							"path": "PDS.DecisionMaker"
						}
					},
					"NumberAttribute_on3u7ar": {
						"modelConfig": {
							"path": "PDS.Amount"
						}
					},
					"DateTimeAttribute_mqsvoky": {
						"modelConfig": {
							"path": "PDS.DueDate"
						}
					},
					"BooleanAttribute_bkkbonf": {
						"modelConfig": {
							"path": "PDS.ForecastCommit"
						}
					},
					"BooleanAttribute_ze0281r": {
						"modelConfig": {
							"path": "PDS.IsPrimary"
						}
					},
					"ContactRolesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContactRolesListDS",
							"filterAttributes": [
								{
									"name": "ContactRolesSearchFilter_ContactRolesList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ContactRolesListDS_Contact": {
									"modelConfig": {
										"path": "ContactRolesListDS.Contact"
									}
								},
								"ContactRolesListDS_IsMainContact": {
									"modelConfig": {
										"path": "ContactRolesListDS.IsMainContact"
									}
								},
								"ContactRolesListDS_Role": {
									"modelConfig": {
										"path": "ContactRolesListDS.Role"
									}
								},
								"ContactRolesListDS_ContactMobilePhone": {
									"modelConfig": {
										"path": "ContactRolesListDS.ContactMobilePhone"
									}
								},
								"ContactRolesListDS_ContactEmail": {
									"modelConfig": {
										"path": "ContactRolesListDS.ContactEmail"
									}
								},
								"ContactRolesListDS_Influence": {
									"modelConfig": {
										"path": "ContactRolesListDS.Influence"
									}
								},
								"ContactRolesListDS_ContactLoyality": {
									"modelConfig": {
										"path": "ContactRolesListDS.ContactLoyality"
									}
								},
								"ContactRolesListDS_ContactMotivator": {
									"modelConfig": {
										"path": "ContactRolesListDS.ContactMotivator"
									}
								},
								"ContactRolesListDS_Opportunity": {
									"modelConfig": {
										"path": "ContactRolesListDS.Opportunity"
									}
								},
								"ContactRolesListDS_Id": {
									"modelConfig": {
										"path": "ContactRolesListDS.Id"
									}
								}
							}
						}
					},
					"OpportunityTeamList": {
						"isCollection": true,
						"modelConfig": {
							"path": "OpportunityTeamListDS",
							"filterAttributes": [
								{
									"name": "OpportunityTeamSearchFilter_OpportunityTeamList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"OpportunityTeamListDS_Account": {
									"modelConfig": {
										"path": "OpportunityTeamListDS.Account"
									}
								},
								"OpportunityTeamListDS_Contact": {
									"modelConfig": {
										"path": "OpportunityTeamListDS.Contact"
									}
								},
								"OpportunityTeamListDS_Role": {
									"modelConfig": {
										"path": "OpportunityTeamListDS.Role"
									}
								},
								"OpportunityTeamListDS_Notes": {
									"modelConfig": {
										"path": "OpportunityTeamListDS.Notes"
									}
								},
								"OpportunityTeamListDS_Id": {
									"modelConfig": {
										"path": "OpportunityTeamListDS.Id"
									}
								}
							}
						}
					},
					"CompetitorsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "CompetitorsListDS",
							"filterAttributes": [
								{
									"name": "CompetitorsSearchFilter_CompetitorsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"CompetitorsListDS_Competitor": {
									"modelConfig": {
										"path": "CompetitorsListDS.Competitor"
									}
								},
								"CompetitorsListDS_CompetitorProduct": {
									"modelConfig": {
										"path": "CompetitorsListDS.CompetitorProduct"
									}
								},
								"CompetitorsListDS_Strengths": {
									"modelConfig": {
										"path": "CompetitorsListDS.Strengths"
									}
								},
								"CompetitorsListDS_Weakness": {
									"modelConfig": {
										"path": "CompetitorsListDS.Weakness"
									}
								},
								"CompetitorsListDS_IsWinner": {
									"modelConfig": {
										"path": "CompetitorsListDS.IsWinner"
									}
								},
								"CompetitorsListDS_Supplier": {
									"modelConfig": {
										"path": "CompetitorsListDS.Supplier"
									}
								},
								"CompetitorsListDS_Id": {
									"modelConfig": {
										"path": "CompetitorsListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_rnogu7n": {
						"isCollection": true,
						"modelConfig": {
							"path": "StageHistoryListDS",
							"filterAttributes": [
								{
									"name": "StageHistorySearchFilter_GridDetail_rnogu7n",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"StageHistoryListDS_Stage": {
									"modelConfig": {
										"path": "StageHistoryListDS.Stage"
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
					"GridDetail_n4l8edn": {
						"isCollection": true,
						"modelConfig": {
							"path": "LeadsListDS",
							"filterAttributes": [
								{
									"name": "QuickFilterShowAllLeads_GridDetail_n4l8edn",
									"loadOnChange": true
								},
								{
									"name": "LeadsSearchFilter_GridDetail_n4l8edn",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"LeadsListDS_LeadName": {
									"modelConfig": {
										"path": "LeadsListDS.LeadName"
									}
								},
								"LeadsListDS_LeadType": {
									"modelConfig": {
										"path": "LeadsListDS.LeadType"
									}
								},
								"LeadsListDS_QualifyStatus": {
									"modelConfig": {
										"path": "LeadsListDS.QualifyStatus"
									}
								},
								"LeadsListDS_Owner": {
									"modelConfig": {
										"path": "LeadsListDS.Owner"
									}
								},
								"LeadsListDS_CreatedOn": {
									"modelConfig": {
										"path": "LeadsListDS.CreatedOn"
									}
								},
								"LeadsListDS_Id": {
									"modelConfig": {
										"path": "LeadsListDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_iwda2md": {
						"isCollection": true,
						"modelConfig": {
							"path": "OpportunitiesByCustomerListDS",
							"filterAttributes": [
								{
									"name": "OpportunitiesByCustomerSearchFilter_GridDetail_iwda2md",
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
					"DataGrid_a2xhxnu": {
						"isCollection": true,
						"modelConfig": {
							"path": "NextKeyActionListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"NextKeyActionListDS_Opportunity": {
									"modelConfig": {
										"path": "NextKeyActionListDS.Opportunity"
									}
								},
								"NextKeyActionListDS_CreatedBy": {
									"modelConfig": {
										"path": "NextKeyActionListDS.CreatedBy"
									}
								},
								"NextKeyActionListDS_CreatedOn": {
									"modelConfig": {
										"path": "NextKeyActionListDS.CreatedOn"
									}
								},
								"NextKeyActionListDS_ModifiedBy": {
									"modelConfig": {
										"path": "NextKeyActionListDS.ModifiedBy"
									}
								},
								"NextKeyActionListDS_ModifiedOn": {
									"modelConfig": {
										"path": "NextKeyActionListDS.ModifiedOn"
									}
								},
								"NextKeyActionListDS_Id": {
									"modelConfig": {
										"path": "NextKeyActionListDS.Id"
									}
								}
							}
						}
					},
					"LookupAttribute_juw5c8t": {
						"modelConfig": {
							"path": "PDS.CloseReason"
						}
					},
					"LookupAttribute_6fjncut": {
						"modelConfig": {
							"path": "PDS.Winner"
						}
					},
					"StringAttribute_eeul0r2": {
						"modelConfig": {
							"path": "PDS.ClosingDetails"
						}
					},
					"ContactCustomerNeed": {
						"modelConfig": {
							"path": "PDS.ContactCustomerNeed"
						}
					},
					"DateTimeAttribute_z2wlq6f": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"NumberAttribute_vyze7s9": {
						"modelConfig": {
							"path": "PDS.PredictiveProbability"
						}
					},
					"Playbook_KnowledgeBase": {
						"isCollection": true,
						"modelConfig": {
							"path": "Playbook_KnowledgeBaseDS"
						},
						"viewModelConfig": {
							"attributes": {
								"Playbook_KnowledgeBaseDS_Id": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.Id"
									}
								},
								"Playbook_KnowledgeBaseDS_Name": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.Name"
									}
								},
								"Playbook_KnowledgeBaseDS_Notes": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.Notes"
									}
								},
								"Playbook_KnowledgeBaseDS_CreatedBy": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.CreatedBy"
									}
								},
								"Playbook_KnowledgeBaseDS_ModifiedOn": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.ModifiedOn"
									}
								},
								"Playbook_KnowledgeBaseDS_Type": {
									"modelConfig": {
										"path": "Playbook_KnowledgeBaseDS.Type"
									}
								}
							}
						}
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
						"ProductsListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"RecommendedProductListDS": [
							{
								"attributePath": "Account",
								"relationPath": "PDS.Account"
							}
						],
						"ContactRolesListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"OpportunityTeamListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"CompetitorsListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"StageHistoryListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"OpportunitiesByCustomerListDS": [
							{
								"attributePath": "Account",
								"relationPath": "PDS.Account"
							}
						],
						"NextKeyActionListDS": [
							{
								"attributePath": "Opportunity",
								"relationPath": "PDS.Id"
							}
						],
						"LeadsListDS": [
							{
								"attributePath": "QualifiedAccount",
								"relationPath": "PDS.Account"
							}
						],
						"Playbook_KnowledgeBaseDS": [
							{
								"attributePath": "[PlaybookStage:KnowledgeBase:Id].DcmStageValue",
								"relationPath": "PDS.Stage"
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
							"entitySchemaName": "Opportunity",
							"attributes": {
								"ContactJobTitle": {
									"path": "Contact.JobTitle",
									"type": "ForwardReference"
								},
								"AccountWeb": {
									"path": "Account.Web",
									"type": "ForwardReference"
								},
								"AccountType": {
									"path": "Account.Type",
									"type": "ForwardReference"
								},
								"AccountIndustry": {
									"path": "Account.Industry",
									"type": "ForwardReference"
								},
								"AccountEmployeesNumber": {
									"path": "Account.EmployeesNumber",
									"type": "ForwardReference"
								},
								"AccountAnnualRevenue": {
									"path": "Account.AnnualRevenue",
									"type": "ForwardReference"
								},
								"ContactCustomerNeed": {
									"path": "Contact.CustomerNeed",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"CommunicationOptions_mfm26d5DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"ContactCommunicationOptionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCommunication",
							"attributes": {
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Number": {
									"path": "Number"
								},
								"Primary": {
									"path": "Primary"
								},
								"NonActual": {
									"path": "NonActual"
								},
								"CommunicationType": {
									"path": "CommunicationType"
								},
								"CommunicationTypeDisplayFormat": {
									"type": "ForwardReference",
									"path": "CommunicationType.DisplayFormat"
								},
								"CommunicationTypeName": {
									"type": "ForwardReference",
									"path": "CommunicationType.Name"
								}
							}
						}
					},
					"ProductsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityProductInterest",
							"attributes": {
								"Product": {
									"path": "Product"
								},
								"ProductCurrency": {
									"type": "ForwardReference",
									"path": "Product.Currency"
								},
								"ProductPrice": {
									"type": "ForwardReference",
									"path": "Product.Price"
								},
								"OfferResult": {
									"path": "OfferResult"
								},
								"Quantity": {
									"path": "Quantity"
								},
								"Price": {
									"path": "Price"
								},
								"Amount": {
									"path": "Amount"
								}
							}
						}
					},
					"RecommendedProductListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "RecommendedProduct",
							"attributes": {
								"Product": {
									"path": "Product"
								},
								"ProductPrice": {
									"type": "ForwardReference",
									"path": "Product.Price"
								},
								"Score": {
									"path": "Score"
								},
								"Status": {
									"path": "Status"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					},
					"ContactRolesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityContact",
							"attributes": {
								"Contact": {
									"path": "Contact"
								},
								"IsMainContact": {
									"path": "IsMainContact"
								},
								"Role": {
									"path": "Role"
								},
								"ContactMobilePhone": {
									"type": "ForwardReference",
									"path": "Contact.MobilePhone"
								},
								"ContactEmail": {
									"type": "ForwardReference",
									"path": "Contact.Email"
								},
								"Influence": {
									"path": "Influence"
								},
								"ContactLoyality": {
									"path": "ContactLoyality"
								},
								"ContactMotivator": {
									"path": "ContactMotivator"
								},
								"Opportunity": {
									"path": "Opportunity"
								}
							}
						}
					},
					"OpportunityTeamListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityParticipant",
							"attributes": {
								"Account": {
									"path": "Account"
								},
								"Contact": {
									"path": "Contact"
								},
								"Role": {
									"path": "Role"
								},
								"Notes": {
									"path": "Notes"
								}
							}
						}
					},
					"CompetitorsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityCompetitor",
							"attributes": {
								"Competitor": {
									"path": "Competitor"
								},
								"CompetitorProduct": {
									"path": "CompetitorProduct"
								},
								"Strengths": {
									"path": "Strengths"
								},
								"Weakness": {
									"path": "Weakness"
								},
								"IsWinner": {
									"path": "IsWinner"
								},
								"Supplier": {
									"path": "Supplier"
								}
							}
						}
					},
					"StageHistoryListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityInStage",
							"attributes": {
								"Stage": {
									"path": "Stage"
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
					"LeadsListDS": {
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
					},
					"NextKeyActionListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OpportunityKeyAction",
							"attributes": {
								"Opportunity": {
									"path": "Opportunity"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"ModifiedBy": {
									"path": "ModifiedBy"
								},
								"ModifiedOn": {
									"path": "ModifiedOn"
								}
							}
						}
					},
					"Playbook_KnowledgeBaseDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "KnowledgeBase",
							"attributes": [
								{
									"Id": {
										"path": "Id"
									}
								},
								{
									"Name": {
										"path": "Name"
									}
								},
								{
									"Notes": {
										"path": "Notes"
									}
								},
								{
									"Type": {
										"path": "Type"
									}
								},
								{
									"ModifiedOn": {
										"path": "ModifiedOn"
									}
								},
								{
									"CreatedBy": {
										"path": "CreatedBy"
									}
								}
							]
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
					"entitySchemaName": "OpportunityFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});