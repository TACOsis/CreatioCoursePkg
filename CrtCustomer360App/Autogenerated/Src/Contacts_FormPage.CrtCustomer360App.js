define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"tagInRecordSourceSchemaName": "ContactInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
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
					"iconPosition": "only-text",
					"visible": true
				}
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
					"entitySchemaName": "Contact"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Contact",
					"columns": [
						{
							"id": "31e923f6-8015-4059-8a45-5a84ba61ce07",
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
				"name": "CompactProfile",
				"values": {
					"layoutConfig": {},
					"type": "crt.ContactCompactProfile",
					"referenceColumn": "$Id",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Account",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Account",
					"labelPosition": "above",
					"control": "$Account",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Account_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_oz5z1xx",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_oz5z1xx_caption)#",
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
				"name": "JobTitle",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.JobTitle",
					"labelPosition": "above",
					"control": "$JobTitle",
					"visible": true,
					"placeholder": "#ResourceString(JobTitle_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": false,
					"columnsCount": 1,
					"layoutConfig": {},
					"masterRecordColumnValue": "$Id",
					"masterRecordColumnName": "Contact",
					"items": "$ContactCommunicationOptionsItems",
					"visible": true,
					"labelPosition": "above",
					"showNoDataPlaceholder": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactCommunicationOptionsAddButton",
				"values": {
					"type": "crt.Button",
					"clickMode": "default",
					"menuItems": [],
					"caption": "#ResourceString(ContactCommunicationOptionsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "left-icon",
					"color": "default",
					"displayType": "text",
					"size": "extra-large",
					"clicked": {
						"request": "crt.AddCommunicationOptionsRequest",
						"params": {
							"viewElementName": "ContactCommunicationOptions"
						}
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AccountInfoContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": false
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountInfoExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AccountInfoExpansionPanel_title)#",
					"toggleType": "material",
					"togglePosition": "after",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "AccountInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountInfoToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AccountInfoExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountInfoToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "AccountInfoToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountInfoFieldContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
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
					"alignItems": "stretch",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "AccountInfoExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountCompactProfile",
				"values": {
					"layoutConfig": {},
					"type": "crt.AccountCompactProfile",
					"referenceColumn": "$Account",
					"readonly": true
				},
				"parentName": "AccountInfoFieldContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccountWeb",
				"values": {
					"layoutConfig": {},
					"type": "crt.WebInput",
					"label": "$Resources.Strings.AccountWeb",
					"labelPosition": "above",
					"control": "$AccountWeb",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "AccountInfoFieldContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AccountCategory",
				"values": {
					"layoutConfig": {},
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
				"parentName": "AccountInfoFieldContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountIndustry",
				"values": {
					"layoutConfig": {},
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
				"parentName": "AccountInfoFieldContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactInfoFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Type",
					"labelPosition": "auto",
					"control": "$Type",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Type_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Owner",
					"labelPosition": "auto",
					"control": "$Owner",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Owner_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_e9kbl5o",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e9kbl5o_caption)#",
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
				"name": "Dear",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.Dear",
					"labelPosition": "auto",
					"control": "$Dear",
					"visible": true,
					"placeholder": "#ResourceString(Dear_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Gender",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Gender",
					"labelPosition": "auto",
					"control": "$Gender",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Gender_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SalutationType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SalutationType",
					"labelPosition": "auto",
					"control": "$SalutationType",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(SalutationType_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Language",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Language",
					"labelPosition": "auto",
					"control": "$Language",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Language_placeholder)#",
					"tooltip": ""
				},
				"parentName": "ContactInfoFieldsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AddressExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AddressExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AddressToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AddressExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddressToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
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
					"alignItems": "center",
					"wrap": "wrap"
				},
				"parentName": "AddressToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddressAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AddressAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ContactAddress",
							"defaultValues": [
								{
									"attributeName": "Contact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AddressToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddressRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AddressRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "AddressListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AddressToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AddressSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AddressSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "AddressToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AddressExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AddressExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AddressList"
						}
					},
					"visible": true
				},
				"parentName": "AddressSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddressImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(AddressImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ContactAddress"
						}
					},
					"visible": true
				},
				"parentName": "AddressSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AddressSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(AddressSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AddressSearchFilter_AddressList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"AddressList"
										]
									}
								]
							}
						],
						"from": [
							"AddressSearchFilter_SearchValue",
							"AddressSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "AddressToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AddressListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "AddressExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AddressList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$AddressList",
					"primaryColumnName": "AddressListDS_Id",
					"columns": [
						{
							"id": "f23578a3-5240-8392-aef6-3253dff5ae76",
							"code": "AddressListDS_AddressType",
							"path": "AddressType",
							"caption": "#ResourceString(AddressListDS_AddressType)#",
							"dataValueType": 10,
							"referenceSchemaName": "AddressType"
						},
						{
							"id": "4be2e359-5a70-b554-e073-8a29454f5534",
							"code": "AddressListDS_FullAddress",
							"path": "FullAddress",
							"caption": "#ResourceString(AddressListDS_FullAddress)#",
							"dataValueType": 29,
							"width": 426
						},
						{
							"id": "8da98b54-1433-0020-cd5b-1bf019a13f42",
							"code": "AddressListDS_Primary",
							"path": "Primary",
							"caption": "#ResourceString(AddressListDS_Primary)#",
							"dataValueType": 12
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "AddressListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(CareerExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "#0D2E4E",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CareerToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "CareerExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
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
					"alignItems": "center",
					"wrap": "wrap"
				},
				"parentName": "CareerToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CareerAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ContactCareer",
							"defaultValues": [
								{
									"attributeName": "Contact",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CareerToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CareerRefreshButton_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "CareerListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "CareerToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CareerSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CareerSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "CareerToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CareerExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CareerExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "CareerList"
						}
					},
					"visible": true
				},
				"parentName": "CareerSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CareerImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ContactCareer"
						}
					},
					"visible": true
				},
				"parentName": "CareerSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CareerSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(CareerSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "CareerSearchFilter_CareerList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"CareerList"
										]
									}
								]
							}
						],
						"from": [
							"CareerSearchFilter_SearchValue",
							"CareerSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "CareerToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CareerListContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax( 32px, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "CareerExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$CareerList",
					"primaryColumnName": "CareerListDS_Id",
					"columns": [
						{
							"id": "5f12a33b-1971-47cf-2291-9b8226ddbb38",
							"code": "CareerListDS_Account",
							"path": "Account",
							"caption": "#ResourceString(CareerListDS_Account)#",
							"dataValueType": 10,
							"referenceSchemaName": "Account"
						},
						{
							"id": "f56f5260-89c1-3146-4c80-85eaf323e05f",
							"code": "CareerListDS_JobTitle",
							"path": "JobTitle",
							"caption": "#ResourceString(CareerListDS_JobTitle)#",
							"dataValueType": 28,
							"width": 198
						},
						{
							"id": "79eb5526-8214-2bb8-d059-9b07cdda5382",
							"code": "CareerListDS_Department",
							"path": "Department",
							"caption": "#ResourceString(CareerListDS_Department)#",
							"dataValueType": 10,
							"referenceSchemaName": "Department",
							"width": 163
						},
						{
							"id": "b3aecd98-0d92-2fdf-d5bf-d6293f4e879d",
							"code": "CareerListDS_Current",
							"path": "Current",
							"caption": "#ResourceString(CareerListDS_Current)#",
							"dataValueType": 12,
							"width": 114
						},
						{
							"id": "fc22e37c-73b7-38c1-a1a7-0de6d61367dc",
							"code": "CareerListDS_StartDate",
							"path": "StartDate",
							"caption": "#ResourceString(CareerListDS_StartDate)#",
							"dataValueType": 8,
							"width": 127
						}
					],
					"features": {
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"fitContent": true
				},
				"parentName": "CareerListContainer",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4fm3l31",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
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
					"masterSchemaId": "$Id",
					"caption": "#ResourceString(Timeline_caption)#",
					"label": "#ResourceString(Timeline_label)#",
					"timelineName": "Timeline",
					"tools": [],
					"filters": []
				},
				"parentName": "TimelineTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TimelineTile_Email",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "SendDate",
					"ownerColumn": "SenderContact",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Email",
						"filter": {
							"columnName": "Type",
							"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6"
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
					"linkedColumn": "Contact",
					"sortedByColumn": "StartDate",
					"ownerColumn": "Owner",
					"data": {
						"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
						"schemaName": "Activity",
						"schemaType": "Activity",
						"filter": {
							"columnName": "Type",
							"columnValue": "fbe0acdc-cfc0-df11-b00f-001d60e938c6"
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
					"linkedColumn": "Contact",
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
					"linkedColumn": "Contact",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "TimelineTile_OmniChat",
				"values": {
					"type": "crt.TimelineTile",
					"classes": [
						"view-element"
					],
					"linkedColumn": "Contact",
					"sortedByColumn": "CreatedOn",
					"data": {
						"columns": [
							{
								"columnName": "CreatedOn",
								"columnLayout": null
							},
							{
								"columnName": "Name",
								"columnLayout": null
							}
						],
						"schemaName": "OmniChat",
						"isDefault": false
					},
					"isDefault": true,
					"iconPosition": "only-icon",
					"icon": "star-tab-icon",
					"visible": true,
					"ownerColumn": "Contact"
				},
				"parentName": "Timeline",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"Owner": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"Dear": {
						"modelConfig": {
							"path": "PDS.Dear"
						}
					},
					"Gender": {
						"modelConfig": {
							"path": "PDS.Gender"
						}
					},
					"SalutationType": {
						"modelConfig": {
							"path": "PDS.SalutationType"
						}
					},
					"Language": {
						"modelConfig": {
							"path": "PDS.Language"
						}
					},
					"AddressList": {
						"isCollection": true,
						"modelConfig": {
							"path": "AddressListDS",
							"filterAttributes": [
								{
									"name": "AddressList_PredefinedFilter",
									"loadOnChange": true
								},
								{
									"name": "AddressSearchFilter_AddressList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"AddressListDS_AddressType": {
									"modelConfig": {
										"path": "AddressListDS.AddressType"
									}
								},
								"AddressListDS_FullAddress": {
									"modelConfig": {
										"path": "AddressListDS.FullAddress"
									}
								},
								"AddressListDS_Primary": {
									"modelConfig": {
										"path": "AddressListDS.Primary"
									}
								},
								"AddressListDS_Id": {
									"modelConfig": {
										"path": "AddressListDS.Id"
									}
								}
							}
						}
					},
					"CareerList": {
						"isCollection": true,
						"modelConfig": {
							"path": "CareerListDS",
							"filterAttributes": [
								{
									"name": "CareerSearchFilter_CareerList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"CareerListDS_Account": {
									"modelConfig": {
										"path": "CareerListDS.Account"
									}
								},
								"CareerListDS_JobTitle": {
									"modelConfig": {
										"path": "CareerListDS.JobTitle"
									}
								},
								"CareerListDS_Department": {
									"modelConfig": {
										"path": "CareerListDS.Department"
									}
								},
								"CareerListDS_Current": {
									"modelConfig": {
										"path": "CareerListDS.Current"
									}
								},
								"CareerListDS_StartDate": {
									"modelConfig": {
										"path": "CareerListDS.StartDate"
									}
								},
								"CareerListDS_Id": {
									"modelConfig": {
										"path": "CareerListDS.Id"
									}
								}
							}
						}
					},
					"Account": {
						"modelConfig": {
							"path": "PDS.Account"
						}
					},
					"JobTitle": {
						"modelConfig": {
							"path": "PDS.JobTitle"
						}
					},
					"AccountIndustry": {
						"modelConfig": {
							"path": "PDS.AccountIndustry"
						}
					},
					"AccountAccountCategory": {
						"modelConfig": {
							"path": "PDS.AccountAccountCategory"
						}
					},
					"AccountWeb": {
						"modelConfig": {
							"path": "PDS.AccountWeb"
						}
					},
					"ContactCommunicationOptionsItems": {
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
						"AddressListDS": [
							{
								"attributePath": "Contact",
								"relationPath": "PDS.Id"
							}
						],
						"CareerListDS": [
							{
								"attributePath": "Contact",
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
							"entitySchemaName": "Contact",
							"attributes": {
								"AccountIndustry": {
									"path": "Account.Industry",
									"type": "ForwardReference"
								},
								"AccountAccountCategory": {
									"path": "Account.AccountCategory",
									"type": "ForwardReference"
								},
								"AccountWeb": {
									"path": "Account.Web",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"AddressListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactAddress",
							"attributes": {
								"AddressType": {
									"path": "AddressType"
								},
								"FullAddress": {
									"path": "FullAddress"
								},
								"Primary": {
									"path": "Primary"
								}
							}
						}
					},
					"CareerListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactCareer",
							"attributes": {
								"Account": {
									"path": "Account"
								},
								"JobTitle": {
									"path": "JobTitle"
								},
								"Department": {
									"path": "Department"
								},
								"Current": {
									"path": "Current"
								},
								"StartDate": {
									"path": "StartDate"
								}
							}
						}
					},
					"ContactCommunicationOptionsItemsDS": {
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
					"entitySchemaName": "ContactFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});