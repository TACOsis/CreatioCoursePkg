define("Accounts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
					"tagInRecordSourceSchemaName": "AccountInTag",
					"visible": true,
					"label": "$Resources.Strings.null"
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
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
					"gap": "small"
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
					"entitySchemaName": "Account"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "Account",
					"columns": [
						{
							"id": "e030f997-b0cc-49b2-81a2-2cd8e04a11db",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "RelationshipButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelationshipButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"clicked": {
						"request": "crt.ShowRelationshipsRequest",
						"params": {
							"entityName": "Account",
							"recordId": "$Id"
						}
					},
					"clickMode": "default",
					"icon": "relationship-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
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
					"type": "crt.AccountCompactProfile",
					"referenceColumn": "$Id",
					"readonly": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_bvlk9ca",
					"labelPosition": "above",
					"control": "$LookupAttribute_bvlk9ca",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Owner_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fhp55rg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fhp55rg_caption)#",
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
				"name": "PrimaryContact",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PrimaryContact",
					"labelPosition": "above",
					"control": "$PrimaryContact",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(PrimaryContact_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_3bs3f03",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3bs3f03_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "PrimaryContact",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Type",
					"labelPosition": "above",
					"control": "$Type",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Type_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AccountCategory",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AccountCategory",
					"labelPosition": "above",
					"control": "$AccountCategory",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(AccountCategory_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Industry",
				"values": {
					"layoutConfig": {},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Industry",
					"labelPosition": "above",
					"control": "$Industry",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Industry_placeholder)#",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AccountCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": false,
					"columnsCount": 1,
					"layoutConfig": {},
					"masterRecordColumnValue": "$Id",
					"masterRecordColumnName": "Account",
					"items": "$AccountCommunicationOptionsItems",
					"visible": true,
					"labelPosition": "above",
					"showNoDataPlaceholder": false
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "AccountCommunicationOptionsAddButton",
				"values": {
					"type": "crt.Button",
					"clickMode": "default",
					"menuItems": [],
					"caption": "#ResourceString(AccountCommunicationOptionsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "left-icon",
					"color": "default",
					"displayType": "text",
					"size": "extra-large",
					"clicked": {
						"request": "crt.AddCommunicationOptionsRequest",
						"params": {
							"viewElementName": "AccountCommunicationOptions"
						}
					},
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "PrimaryContactContainer",
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
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": false
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PrimaryContactExpansionPanel",
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
					"title": "#ResourceString(PrimaryContactExpansionPanel_title)#",
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
				"parentName": "PrimaryContactContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactToolsContainer",
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
				"parentName": "PrimaryContactExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactToolsFlexContainer",
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
				"parentName": "PrimaryContactToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PrimaryContactFieldContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
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
				"parentName": "PrimaryContactExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactCompactProfile",
				"values": {
					"layoutConfig": {},
					"type": "crt.ContactCompactProfile",
					"referenceColumn": "$PrimaryContact",
					"readonly": true
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactJobTitle",
				"values": {
					"layoutConfig": {},
					"type": "crt.Input",
					"label": "$Resources.Strings.PrimaryContactJobTitle",
					"labelPosition": "above",
					"control": "$PrimaryContactJobTitle",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"readonly": true
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PrimatyContactCommunicationOptions",
				"values": {
					"type": "crt.CommunicationOptions",
					"readonly": true,
					"columnsCount": 1,
					"layoutConfig": {},
					"masterRecordColumnValue": "$PrimaryContact",
					"masterRecordColumnName": "Contact",
					"items": "$PrimatyContactCommunicationOptionsItems",
					"visible": true,
					"primaryColumnName": "PrimatyContactCommunicationOptionsDS_Id",
					"labelPosition": "above",
					"showNoDataPlaceholder": false
				},
				"parentName": "PrimaryContactFieldContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AccountInfoFieldsContainer",
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
				"name": "AlternativeName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.AlternativeName",
					"labelPosition": "auto",
					"control": "$AlternativeName",
					"visible": true,
					"placeholder": "#ResourceString(AlternativeName_placeholder)#",
					"tooltip": ""
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Ownership",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.Ownership",
					"labelPosition": "auto",
					"control": "$Ownership",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(Ownership_placeholder)#",
					"tooltip": ""
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AnnualRevenue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.AnnualRevenue",
					"labelPosition": "auto",
					"control": "$AnnualRevenue",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(AnnualRevenue_placeholder)#",
					"tooltip": ""
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EmployeesNumber",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.EmployeesNumber",
					"labelPosition": "auto",
					"control": "$EmployeesNumber",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(EmployeesNumber_placeholder)#",
					"tooltip": ""
				},
				"parentName": "AccountInfoFieldsContainer",
				"propertyName": "items",
				"index": 3
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
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
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
							"entityName": "AccountAddress",
							"defaultValues": [
								{
									"attributeName": "Account",
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
							"entitySchemaName": "AccountAddress"
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
					"targetAttributes": [
						"AddressList"
					],
					"iconOnly": true
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
							"id": "380e56aa-3444-c9f4-9a06-01d2453cd40f",
							"code": "AddressListDS_AddressType",
							"path": "AddressType",
							"caption": "#ResourceString(AddressListDS_AddressType)#",
							"dataValueType": 10,
							"referenceSchemaName": "AddressType",
							"width": 174
						},
						{
							"id": "5cc016f0-a5fe-1387-fad6-503b736b8aff",
							"code": "AddressListDS_FullAddress",
							"path": "FullAddress",
							"caption": "#ResourceString(AddressListDS_FullAddress)#",
							"dataValueType": 29,
							"width": 465
						},
						{
							"id": "33fa8761-c7d0-f11d-f48a-b2e9b715bc85",
							"code": "AddressListDS_Primary",
							"path": "Primary",
							"caption": "#ResourceString(AddressListDS_Primary)#",
							"dataValueType": 12,
							"width": 114
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
				"name": "ContactsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ContactsExpansionPanel_title)#",
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
				"name": "ContactsToolsContainer",
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
				"parentName": "ContactsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsToolsFlexContainer",
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
				"parentName": "ContactsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Contact",
							"defaultValues": [
								{
									"attributeName": "Account",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsRefreshButton_caption)#",
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
							"dataSourceName": "ContactsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ContactsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ContactsList"
						}
					},
					"visible": true
				},
				"parentName": "ContactsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ContactsImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Contact"
						}
					},
					"visible": true
				},
				"parentName": "ContactsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ContactsSearchFilter_placeholder)#",
					"targetAttributes": [
						"ContactsList"
					],
					"iconOnly": true
				},
				"parentName": "ContactsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ContactsListContainer",
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
				"parentName": "ContactsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ContactsList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"visible": true,
					"items": "$ContactsList",
					"primaryColumnName": "ContactsListDS_Id",
					"columns": [
						{
							"id": "c1dd25a6-eb8e-e961-9345-a4e679bf5928",
							"code": "ContactsListDS_Name",
							"path": "Name",
							"caption": "#ResourceString(ContactsListDS_Name)#",
							"dataValueType": 28,
							"width": 235
						},
						{
							"id": "593db3fb-3bc9-5b57-df86-21d34af63600",
							"code": "ContactsListDS_JobTitle",
							"path": "JobTitle",
							"caption": "#ResourceString(ContactsListDS_JobTitle)#",
							"dataValueType": 28,
							"width": 183
						},
						{
							"id": "cdea567b-2046-de92-1417-69f7e886b567",
							"code": "ContactsListDS_MobilePhone",
							"path": "MobilePhone",
							"caption": "#ResourceString(ContactsListDS_MobilePhone)#",
							"dataValueType": 42,
							"width": 185
						},
						{
							"id": "d7adaacb-11fa-9428-a772-672d6e192781",
							"code": "ContactsListDS_Email",
							"path": "Email",
							"caption": "#ResourceString(ContactsListDS_Email)#",
							"dataValueType": 45,
							"width": 242
						},
						{
							"id": "7b46afff-2ede-19e5-2399-e84f6e320435",
							"code": "ContactsListDS_Address",
							"path": "Address",
							"caption": "#ResourceString(ContactsListDS_Address)#",
							"dataValueType": 29
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
				"parentName": "ContactsListContainer",
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
				"name": "GridContainer_7bpjdnn",
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
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
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
					"filters": [],
					"masterEntitySchemaName": "Account"
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
					"linkedColumn": "Account",
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
					"linkedColumn": "Account",
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
					"linkedColumn": "Account",
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
					"linkedColumn": "Account",
					"ownerColumn": "CreatedBy"
				},
				"parentName": "Timeline",
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
					"AlternativeName": {
						"modelConfig": {
							"path": "PDS.AlternativeName"
						}
					},
					"Ownership": {
						"modelConfig": {
							"path": "PDS.Ownership"
						}
					},
					"AnnualRevenue": {
						"modelConfig": {
							"path": "PDS.AnnualRevenue"
						}
					},
					"EmployeesNumber": {
						"modelConfig": {
							"path": "PDS.EmployeesNumber"
						}
					},
					"PrimaryContact": {
						"modelConfig": {
							"path": "PDS.PrimaryContact"
						}
					},
					"Type": {
						"modelConfig": {
							"path": "PDS.Type"
						}
					},
					"AccountCategory": {
						"modelConfig": {
							"path": "PDS.AccountCategory"
						}
					},
					"Industry": {
						"modelConfig": {
							"path": "PDS.Industry"
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
					"ContactsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ContactsListDS",
							"filterAttributes": [
								{
									"name": "ContactsList_PredefinedFilter",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ContactsListDS_Name": {
									"modelConfig": {
										"path": "ContactsListDS.Name"
									}
								},
								"ContactsListDS_JobTitle": {
									"modelConfig": {
										"path": "ContactsListDS.JobTitle"
									}
								},
								"ContactsListDS_MobilePhone": {
									"modelConfig": {
										"path": "ContactsListDS.MobilePhone"
									}
								},
								"ContactsListDS_Email": {
									"modelConfig": {
										"path": "ContactsListDS.Email"
									}
								},
								"ContactsListDS_Address": {
									"modelConfig": {
										"path": "ContactsListDS.Address"
									}
								},
								"ContactsListDS_Id": {
									"modelConfig": {
										"path": "ContactsListDS.Id"
									}
								}
							}
						}
					},
					"ContactsList_PredefinedFilter": {
						"value": null
					},
					"PrimaryContactJobTitle": {
						"modelConfig": {
							"path": "PDS.PrimaryContactJobTitle"
						}
					},
					"ImageLinkAttribute_d1f6xe3": {
						"modelConfig": {
							"path": "PDS.AccountLogo"
						}
					},
					"LookupAttribute_bvlk9ca": {
						"modelConfig": {
							"path": "PDS.Owner"
						}
					},
					"AccountCommunicationOptionsItems": {
						"isCollection": true,
						"modelConfig": {
							"path": "AccountCommunicationOptionsDS",
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
								"AccountCommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CreatedOn"
									}
								},
								"AccountCommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Number"
									}
								},
								"AccountCommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Primary"
									}
								},
								"AccountCommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.NonActual"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationType"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"AccountCommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"AccountCommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "AccountCommunicationOptionsDS.Id"
									}
								}
							}
						}
					},
					"PrimatyContactCommunicationOptionsItems": {
						"isCollection": true,
						"modelConfig": {
							"path": "PrimatyContactCommunicationOptionsDS",
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
								"PrimatyContactCommunicationOptionsDS_CreatedOn": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CreatedOn"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Number": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Number"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Primary": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Primary"
									}
								},
								"PrimatyContactCommunicationOptionsDS_NonActual": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.NonActual"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationType": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationType"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationTypeDisplayFormat"
									}
								},
								"PrimatyContactCommunicationOptionsDS_CommunicationTypeName": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.CommunicationTypeName"
									}
								},
								"PrimatyContactCommunicationOptionsDS_Id": {
									"modelConfig": {
										"path": "PrimatyContactCommunicationOptionsDS.Id"
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
								"attributePath": "Account",
								"relationPath": "PDS.Id"
							}
						],
						"ContactsListDS": [
							{
								"attributePath": "Account",
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
							"entitySchemaName": "Account",
							"attributes": {
								"PrimaryContactJobTitle": {
									"path": "PrimaryContact.JobTitle",
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
							"entitySchemaName": "AccountAddress",
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
					"ContactsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "Contact",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"JobTitle": {
									"path": "JobTitle"
								},
								"MobilePhone": {
									"path": "MobilePhone"
								},
								"Email": {
									"path": "Email"
								},
								"Address": {
									"path": "Address"
								}
							}
						}
					},
					"AccountCommunicationOptionsDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AccountCommunication",
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
					"PrimatyContactCommunicationOptionsItemsDS": {
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
					"PrimatyContactCommunicationOptionsDS": {
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
					"entitySchemaName": "AccountFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
