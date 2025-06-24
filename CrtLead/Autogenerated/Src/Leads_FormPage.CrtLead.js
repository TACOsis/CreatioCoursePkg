define("Leads_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "LeadInTag",
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
					"entitySchemaName": "Lead"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Lead",
					"columns": [
						{
							"id": "3fb963b9-dc31-43eb-b899-ecc98131cde8",
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
				"name": "SideAreaProfileFieldFlexContainer",
				"values": {
					"layoutConfig": {},
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
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_dr0vsd0",
					"labelPosition": "above",
					"control": "$LookupAttribute_dr0vsd0",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
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
					},
					"layoutConfig": {}
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LeadTypeDetails",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_rsim6pt",
					"labelPosition": "above",
					"control": "$LookupAttribute_rsim6pt",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldGridContainer",
				"propertyName": "items",
				"index": 0
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
					"gap": "none",
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
					"wrap": "wrap"
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
					"referenceColumn": "$Parameter_r8t9n2f"
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
					"label": "$Resources.Strings.QualifiedContactJobTitle",
					"control": "$QualifiedContactJobTitle",
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
					"items": "$CommunicationOptions_f87c6ae",
					"masterRecordColumnName": "Contact",
					"visible": true,
					"masterRecordColumnValue": "$Parameter_r8t9n2f"
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
					"referenceColumn": "$Parameter_3pxm4wn"
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
					"label": "$Resources.Strings.QualifiedAccountWeb",
					"control": "$QualifiedAccountWeb",
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
					"label": "$Resources.Strings.QualifiedAccountType",
					"ariaLabel": "#ResourceString(Type_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedAccountType",
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
					"label": "$Resources.Strings.QualifiedAccountIndustry",
					"ariaLabel": "#ResourceString(Industry_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedAccountIndustry",
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
					"label": "$Resources.Strings.QualifiedAccountEmployeesNumber",
					"ariaLabel": "#ResourceString(EmployeesNumber_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedAccountEmployeesNumber",
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
					"label": "$Resources.Strings.QualifiedAccountAnnualRevenue",
					"ariaLabel": "#ResourceString(AnnualRevenue_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$QualifiedAccountAnnualRevenue",
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
				"name": "OverviewFieldsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none"
				},
				"parentName": "OverviewTab",
				"propertyName": "items",
				"index": 0
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
					"layoutConfig": {}
				},
				"parentName": "OverviewFieldsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ivqsxmp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ivqsxmp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
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
					"label": "$Resources.Strings.DateTimeAttribute_1b4r79a",
					"labelPosition": "auto",
					"control": "$DateTimeAttribute_1b4r79a",
					"readonly": true
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QualifiedContact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Parameter_r8t9n2f",
					"labelPosition": "auto",
					"control": "$Parameter_r8t9n2f",
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
				"name": "addRecord_icp70f0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_icp70f0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "QualifiedContact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QualifiedAccount",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Parameter_3pxm4wn",
					"labelPosition": "auto",
					"control": "$Parameter_3pxm4wn",
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
				"name": "addRecord_hd0i1qq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_hd0i1qq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "QualifiedAccount",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeadName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(LeadName_label)#",
					"control": "$LeadName",
					"labelPosition": "auto",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 4
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
					"label": "$Resources.Strings.LookupAttribute_dzve5mq",
					"labelPosition": "auto",
					"control": "$LookupAttribute_dzve5mq",
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
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0ljkabs",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0ljkabs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_udcglv2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_udcglv2_caption)#",
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
				"name": "DetailsFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"gap": "none"
				},
				"parentName": "OverviewFieldsContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Commentary",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"multiline": true,
					"label": "#ResourceString(Commentary_label)#",
					"labelPosition": "auto",
					"control": "$StringAttribute_cg42kpk",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "DetailsFlexContainer",
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
					"LeadName": {
						"modelConfig": {
							"path": "PDS.LeadName"
						}
					},
					"Parameter_r8t9n2f": {
						"modelConfig": {
							"path": "PDS.QualifiedContact"
						}
					},
					"QualifiedContactJobTitle": {
						"modelConfig": {
							"path": "PDS.QualifiedContactJobTitle"
						}
					},
					"CommunicationOptions_f87c6ae": {
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
					"Parameter_3pxm4wn": {
						"modelConfig": {
							"path": "PDS.QualifiedAccount"
						}
					},
					"QualifiedAccountWeb": {
						"modelConfig": {
							"path": "PDS.QualifiedAccountWeb"
						}
					},
					"QualifiedAccountType": {
						"modelConfig": {
							"path": "PDS.QualifiedAccountType"
						}
					},
					"QualifiedAccountIndustry": {
						"modelConfig": {
							"path": "PDS.QualifiedAccountIndustry"
						}
					},
					"QualifiedAccountEmployeesNumber": {
						"modelConfig": {
							"path": "PDS.QualifiedAccountEmployeesNumber"
						}
					},
					"QualifiedAccountAnnualRevenue": {
						"modelConfig": {
							"path": "PDS.QualifiedAccountAnnualRevenue"
						}
					},
					"LookupAttribute_ivqsxmp": {
						"modelConfig": {
							"path": "PDS.LeadType"
						}
					},
					"DateTimeAttribute_1b4r79a": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"LookupAttribute_0ljkabs": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"StringAttribute_cg42kpk": {
						"modelConfig": {
							"path": "PDS.Commentary"
						}
					},
					"LookupAttribute_dzve5mq": {
						"modelConfig": {
							"path": "PDS.Group"
						}
					},
					"LookupAttribute_dr0vsd0": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"LookupAttribute_rsim6pt": {
						"modelConfig": {
							"path": "PDS.LeadTypeDetails"
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
					"primaryDataSourceName": "PDS"
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
						"scope": "page"
					},
					"CommunicationOptions_f87c6aeDS": {
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
					"entitySchemaName": "FileLead"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});