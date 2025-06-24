define("TechnicalUsers_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
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
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
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
						"bottom": "small"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
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
					"entitySchemaName": "SysAdminUnit"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "403996ee-6394-4b45-b854-b0598dac9d28",
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
				"name": "FlexContainer_NameContact",
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
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.Name",
					"control": "$Name",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "FlexContainer_NameContact",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"type": "crt.ComboBox",
					"visible": "$ShowContactInAdminUnit",
					"label": "$Resources.Strings.PDS_Contact_6i6hnpx",
					"labelPosition": "auto",
					"control": "$PDS_Contact_6i6hnpx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "FlexContainer_NameContact",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_tr7xsgz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_tr7xsgz_caption)#",
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
				"name": "Active",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_Active_zcf7bmi",
					"labelPosition": "auto",
					"control": "$PDS_Active_zcf7bmi"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SideSettingsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "small"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"stretch": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SideSettingsContainerTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SideSettingsContainerTitle_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideSettingsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SettingsDescriptionLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SettingsDescriptionLabel_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideSettingsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Language",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_SysCulture_8eoa8hj",
					"labelPosition": "auto",
					"control": "$PDS_SysCulture_8eoa8hj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideSettingsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_3uyxgzg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3uyxgzg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Language",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_f9wu8r4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_TimeZone_sjf6yfs",
					"labelPosition": "auto",
					"control": "$PDS_TimeZone_sjf6yfs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "SideSettingsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_1exmoiy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1exmoiy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_f9wu8r4",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AccessRightsTab",
				"values": {
					"caption": "#ResourceString(AccessRightsTab_caption)#",
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
				"name": "AccessRightsTabContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "medium"
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
				"parentName": "AccessRightsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsExpansionPanel",
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
					"title": "#ResourceString(OAuthIntegrationsExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "AccessRightsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsToolsContainer",
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
				"parentName": "OAuthIntegrationsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsToolsFlexContainer",
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
				"parentName": "OAuthIntegrationsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OAuthIntegrationsRefreshButton_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_zuruedfDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OAuthIntegrationsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
            {
          	"operation": "insert",
				"name": "ButtonAddIntegration",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MenuItem_nhhhcse_caption)#",
					"icon": "add-button-icon",
                   "iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "OAuthClientApp",
							"defaultValues": [
								{
									"attributeName": "SystemUser",
									"value": "$Id"
								}
							]
						}
					},
					"visible": "$ShowAddOAuthIntegrationButton",
					"clickMode": "default"
				},
				"parentName": "OAuthIntegrationsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OAuthIntegrationsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OAuthIntegrationsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsExportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_srw3rae_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OAuthIntegrationsList"
						}
					}
				},
				"parentName": "OAuthIntegrationsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_8znztm4_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OAuthIntegrationsSearchButton_GridDetail_zuruedf",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_zuruedf"
										]
									}
								]
							}
						],
						"from": [
							"OAuthIntegrationsSearchButton_SearchValue",
							"OAuthIntegrationsSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "OAuthIntegrationsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OAuthIntegrationsExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "OAuthIntegrationsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsListContainer",
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
				"parentName": "OAuthIntegrationsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OAuthIntegrationsList",
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
							},
							"toolbar": true
						},
						"editable": {
							"enable": true,
							"itemsCreation": false,
							"floatingEditPanel": true
						}
					},
					"items": "$GridDetail_zuruedf",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_zuruedfDS_Id",
					"columns": [
						{
							"id": "7338c66e-be43-184a-6440-4463749a1e6d",
							"code": "GridDetail_zuruedfDS_Name",
							"caption": "#ResourceString(GridDetail_zuruedfDS_Name)#",
							"dataValueType": 28,
							"width": 197
						},
						{
							"id": "7dd8e15d-e09a-37f7-45f2-7719bd871b56",
							"code": "GridDetail_zuruedfDS_IsActive",
							"caption": "#ResourceString(GridDetail_zuruedfDS_IsActive)#",
							"dataValueType": 12
						},
						{
							"id": "391f27ba-e033-eff6-6e08-50624e63491b",
							"code": "GridDetail_zuruedfDS_ApplicationUrl",
							"caption": "#ResourceString(GridDetail_zuruedfDS_ApplicationUrl)#",
							"dataValueType": 28
						}
					],
                  	"rowToolbarItems": [
						{
							"type": 'crt.MenuItem',
							"caption": '#ResourceString(RowToolbar_OpenItem_caption)#',
							"icon": 'edit-row-action',
							"disabled": "$GridDetail_zuruedf.PrimaryModelMode | crt.IsEqual : 'create'",
							"clicked": {
								"request": 'crt.UpdateRecordRequest',
								"params": {
									"itemsAttributeName": "Items",
									"recordId": "$GridDetail_zuruedf.GridDetail_zuruedfDS_Id",
								},
								"useRelativeContext": "true",
							},
						},
						{
							"type": 'crt.MenuItem',
							"caption": '#ResourceString(RowToolbar_DeleteItem_caption)#',
							"icon": 'delete-row-action',
							"clicked": {
								"request": 'crt.DeleteRecordRequest',
								"params": {
									"itemsAttributeName": "GridDetail_zuruedf",
									"recordId": "$GridDetail_zuruedf.GridDetail_zuruedfDS_Id",
								}
							},
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_zuruedf_ActiveRow",
					"selectionState": "$GridDetail_zuruedf_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_zuruedf_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "OAuthIntegrationsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zuruedf_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zuruedfDS",
							"filters": "$GridDetail_zuruedf | crt.ToCollectionFilters : 'GridDetail_zuruedf' : $GridDetail_zuruedf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zuruedf_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "OAuthIntegrationsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zuruedf_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zuruedfDS",
							"filters": "$GridDetail_zuruedf | crt.ToCollectionFilters : 'GridDetail_zuruedf' : $GridDetail_zuruedf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zuruedf_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_zuruedf_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zuruedf_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OAuthIntegrationsList",
							"filters": "$GridDetail_zuruedf | crt.ToCollectionFilters : 'GridDetail_zuruedf' : $GridDetail_zuruedf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zuruedf_SelectionState"
						}
					}
				},
				"parentName": "OAuthIntegrationsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_zuruedf_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zuruedfDS",
							"filters": "$GridDetail_zuruedf | crt.ToCollectionFilters : 'GridDetail_zuruedf' : $GridDetail_zuruedf_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zuruedf_SelectionState"
						}
					}
				},
				"parentName": "OAuthIntegrationsList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ObjectPermissionsExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					}
				},
				"parentName": "AccessRightsTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rxorv93",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "extra-small",
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
				"parentName": "ObjectPermissionsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 8,
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
				"parentName": "GridContainer_rxorv93",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ObjectPermissionsRefreshButton_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_4sgsz13DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ObjectPermissionsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_78g0sti_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "ObjectPermissionsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_93gnkbl",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_93gnkbl_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ObjectPermissionsList"
						}
					}
				},
				"parentName": "ObjectPermissionsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_39g3007_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ObjectPermissionsSearchButton_GridDetail_4sgsz13",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_4sgsz13"
										]
									}
								]
							}
						],
						"from": [
							"ObjectPermissionsSearchButton_SearchValue",
							"ObjectPermissionsSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ObjectPermissionsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ObjectPermissionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "crt.OpenObjectsPermissionsSection"
					},
					"icon": "contact-lock-icon",
					"clickMode": "default"
				},
				"parentName": "ObjectPermissionsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ObjectPermissionsExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ObjectPermissionsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_py1ovk2",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "ObjectPermissionsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ObjectPermissionsList",
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
							"selection": false,
							"numeration": true,
							"toolbar": false
						},
						"columns": {
							"adding": false,
							"dragAndDrop": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_4sgsz13",
					"primaryColumnName": "GridDetail_4sgsz13DS_Id",
					"columns": [
						{
							"id": "7f3d6549-606f-04b2-7089-e13d9f1aec29",
							"code": "GridDetail_4sgsz13DS_Object",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_Object)#",
							"dataValueType": 28,
							"cellView": {
								"type": "crt.Link",
								"href": "$GridDetail_4sgsz13.GridDetail_4sgsz13DS_ObjectPermissionsUrl",
								"caption": "$GridDetail_4sgsz13.GridDetail_4sgsz13DS_Object",
								"target": "_blank"
							}
						},
						{
							"id": "99246d2e-db60-4081-4d00-d9464f8b16b9",
							"code": "GridDetail_4sgsz13DS_CanRead",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_CanRead)#",
							"dataValueType": 12
						},
						{
							"id": "825fbd54-ab2a-038c-5e0a-b4efd5be4ce7",
							"code": "GridDetail_4sgsz13DS_CanAppend",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_CanAppend)#",
							"dataValueType": 12
						},
						{
							"id": "0a8a4729-c675-1e6d-b1ed-faa9b45e0666",
							"code": "GridDetail_4sgsz13DS_CanEdit",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_CanEdit)#",
							"dataValueType": 12
						},
						{
							"id": "c325b01e-f93c-b204-8779-d7c30dead5dc",
							"code": "GridDetail_4sgsz13DS_CanDelete",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_CanDelete)#",
							"dataValueType": 12
						},
						{
							"id": "cdb21455-2f49-a41c-b35a-5686dcd6b4e9",
							"code": "GridDetail_4sgsz13DS_AdministratedByRecords",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_AdministratedByRecords)#",
							"dataValueType": 12,
							"width": 190
						},
						{
							"id": "d5de820a-c9d4-d500-7a94-460522cc9813",
							"code": "GridDetail_4sgsz13DS_AdministratedByColumns",
							"caption": "#ResourceString(GridDetail_4sgsz13DS_AdministratedByColumns)#",
							"dataValueType": 12,
							"width": 210
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true,
					"activeRow": "$GridDetail_4sgsz13_ActiveRow",
					"selectionState": "$GridDetail_4sgsz13_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_4sgsz13_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "GridContainer_py1ovk2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4sgsz13_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4sgsz13DS",
							"filters": "$GridDetail_4sgsz13 | crt.ToCollectionFilters : 'GridDetail_4sgsz13' : $GridDetail_4sgsz13_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4sgsz13_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "ObjectPermissionsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4sgsz13_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4sgsz13DS",
							"filters": "$GridDetail_4sgsz13 | crt.ToCollectionFilters : 'GridDetail_4sgsz13' : $GridDetail_4sgsz13_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4sgsz13_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_4sgsz13_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_4sgsz13_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ObjectPermissionsList",
							"filters": "$GridDetail_4sgsz13 | crt.ToCollectionFilters : 'GridDetail_4sgsz13' : $GridDetail_4sgsz13_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4sgsz13_SelectionState"
						}
					}
				},
				"parentName": "ObjectPermissionsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_4sgsz13_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_4sgsz13DS",
							"filters": "$GridDetail_4sgsz13 | crt.ToCollectionFilters : 'GridDetail_4sgsz13' : $GridDetail_4sgsz13_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_4sgsz13_SelectionState"
						}
					}
				},
				"parentName": "ObjectPermissionsList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GrantedOperationsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(GrantedOperationsExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "AccessRightsTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_nduh9ez",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
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
				"parentName": "GrantedOperationsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_l2u8nc5",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 8,
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
				"parentName": "GridContainer_nduh9ez",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_9kqz4j7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_9kqz4j7_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GrantedOperationsGridDetailDS"
						}
					}
				},
				"parentName": "FlexContainer_l2u8nc5",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_lucyxlh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_lucyxlh_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FlexContainer_l2u8nc5",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_t406m5a",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_t406m5a_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GrantedOperationsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_lucyxlh",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jkhnmz5",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jkhnmz5_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_jkhnmz5_GridDetail_6vxhbxx",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_6vxhbxx"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_jkhnmz5_SearchValue",
							"GridDetailSearchFilter_jkhnmz5_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_l2u8nc5",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OperationPermissionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OperationPermissionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "contact-lock-icon",
					"clicked": {
						"request": "crt.OpenOperationPermissionsSection"
					}
				},
				"parentName": "FlexContainer_l2u8nc5",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GrantedOperationsExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GrantedOperationsExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GrantedOperationsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_e3lcnc6",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
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
				"parentName": "GrantedOperationsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GrantedOperationsGridDetail",
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
							"selection": false,
							"numeration": true,
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_6vxhbxx",
					"activeRow": "$GridDetail_6vxhbxx_ActiveRow",
					"selectionState": "$GridDetail_6vxhbxx_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GrantedOperationsGridDetailDS_Id",
					"columns": [
						{
							"id": "26f301c9-94cb-e997-35fc-4406800793d2",
							"code": "GrantedOperationsGridDetailDS_SysAdminOperation",
							"caption": "#ResourceString(GrantedOperationsGridDetailDS_SysAdminOperation)#",
							"dataValueType": 10,
							"width": 404
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_e3lcnc6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AllowedIPExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "AccessRightsTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "AllowedIPToolsContainer",
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
				"parentName": "AllowedIPExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPToolsFlexContainer",
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
				"parentName": "AllowedIPToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AllowedIPRefreshButton_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_wuxjkmeDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AllowedIPToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_0wvq33m_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "AllowedIPToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AllowedIPExportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_wnw65fu_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AllowedIPList"
						}
					}
				},
				"parentName": "AllowedIPSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPImportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_zui024l_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SysAdminUnitIPRange"
						}
					}
				},
				"parentName": "AllowedIPSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AllowedIPSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_8sqlzpv_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "AllowedIPSearchButton_GridDetail_wuxjkme",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wuxjkme"
										]
									}
								]
							}
						],
						"from": [
							"AllowedIPSearchButton_SearchValue",
							"AllowedIPSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "AllowedIPToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AllowedIPExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AllowedIPExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AllowedIPExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AllowedIPListContainer",
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
				"parentName": "AllowedIPExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AllowedIPList",
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
						}
					},
					"items": "$GridDetail_wuxjkme",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_wuxjkmeDS_Id",
					"columns": [
						{
							"id": "8ac0dc4d-49df-1afe-26c4-3893ea276fdb",
							"code": "GridDetail_wuxjkmeDS_BeginIP",
							"caption": "#ResourceString(GridDetail_wuxjkmeDS_BeginIP)#",
							"dataValueType": 27,
							"width": 234
						},
						{
							"id": "a12dd9f3-2f4d-a5f9-208e-cb742e4db556",
							"code": "GridDetail_wuxjkmeDS_EndIP",
							"caption": "#ResourceString(GridDetail_wuxjkmeDS_EndIP)#",
							"dataValueType": 27
						}
					],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(RowToolbar_DeleteItem_caption)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteRecordRequest",
								"params": {
									"itemsAttributeName": "GridDetail_wuxjkme",
									"recordId": "$GridDetail_wuxjkme.GridDetail_wuxjkmeDS_Id"
								}
							},
							"useRelativeContext": true
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_wuxjkme_ActiveRow",
					"selectionState": "$GridDetail_wuxjkme_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_wuxjkme_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "AllowedIPListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wuxjkme_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_wuxjkmeDS",
							"filters": "$GridDetail_wuxjkme | crt.ToCollectionFilters : 'GridDetail_wuxjkme' : $GridDetail_wuxjkme_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_wuxjkme_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "AllowedIPList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wuxjkme_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_wuxjkmeDS",
							"filters": "$GridDetail_wuxjkme | crt.ToCollectionFilters : 'GridDetail_wuxjkme' : $GridDetail_wuxjkme_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_wuxjkme_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_wuxjkme_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wuxjkme_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AllowedIPList",
							"filters": "$GridDetail_wuxjkme | crt.ToCollectionFilters : 'GridDetail_wuxjkme' : $GridDetail_wuxjkme_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_wuxjkme_SelectionState"
						}
					}
				},
				"parentName": "AllowedIPList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_wuxjkme_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_wuxjkmeDS",
							"filters": "$GridDetail_wuxjkme | crt.ToCollectionFilters : 'GridDetail_wuxjkme' : $GridDetail_wuxjkme_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_wuxjkme_SelectionState"
						}
					}
				},
				"parentName": "AllowedIPList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RolesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(RolesTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RolesTabContainer",
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
						"rowGap": "medium"
					},
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
				"parentName": "RolesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
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
					"padding": {
						"top": "small",
						"right": "medium",
						"bottom": "small",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch",
					"styles": {
						"border-color": "#B3CAF3"
					}
				},
				"parentName": "RolesTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionTitleContainer",
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "center",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "TabDescriptionContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionTitleIconContainer",
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
						"right": "4px",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "center",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "TabDescriptionTitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionTitleIcon",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageLabel)#",
					"value": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Ikljb24gfCBJbmZvIC0gMTZ4MTYgfCBoZWF2eSI+CjxnIGlkPSJWZWN0b3IiPgo8cGF0aCBkPSJNNy4xNjE1OCA1LjM5NTkxQzcuMTYxNTggNC45MzQ3NiA3LjUzNTQzIDQuNTYwOTEgNy45OTY1OCA0LjU2MDkxSDguMDAzMjVDOC40NjQ0MSA0LjU2MDkxIDguODM4MjUgNC45MzQ3NiA4LjgzODI1IDUuMzk1OTFDOC44MzgyNSA1Ljg1NzA3IDguNDY0NDEgNi4yMzA5MSA4LjAwMzI1IDYuMjMwOTFINy45OTY1OEM3LjUzNTQzIDYuMjMwOTEgNy4xNjE1OCA1Ljg1NzA3IDcuMTYxNTggNS4zOTU5MVoiIGZpbGw9IiMwMDRGRDYiLz4KPHBhdGggZD0iTTcuOTk5NzEgNi45NTM1N0M4LjQ2MDg3IDYuOTUzOTcgOC44MzQzOCA3LjMyODE0IDguODMzOTggNy43ODkzTDguODMxNTQgMTAuNjA1NUM4LjgzMTE0IDExLjA2NjYgOC40NTY5OCAxMS40NDAyIDcuOTk1ODIgMTEuNDM5OEM3LjUzNDY2IDExLjQzOTQgNy4xNjExNCAxMS4wNjUyIDcuMTYxNTQgMTAuNjA0TDcuMTYzOTkgNy43ODc4NUM3LjE2NDM5IDcuMzI2NjkgNy41Mzg1NSA2Ljk1MzE3IDcuOTk5NzEgNi45NTM1N1oiIGZpbGw9IiMwMDRGRDYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk5OTkxIDEuNUMxMS41ODkzIDEuNSAxNC40OTkxIDQuNDA5NzggMTQuNDk5MSA3Ljk5OTE4QzE0LjQ5OTEgMTEuNTg4NiAxMS41ODkzIDE0LjQ5ODQgNy45OTk5MSAxNC40OTg0QzQuNDEwNTEgMTQuNDk4NCAxLjUwMDczIDExLjU4ODYgMS41MDA3MyA3Ljk5OTE4QzEuNTAwNzMgNC40MDk3OCA0LjQxMDUxIDEuNSA3Ljk5OTkxIDEuNVpNMTMuMTU5MSA3Ljk5OTE4QzEzLjE1OTEgNS4xNDk4NCAxMC44NDkzIDIuODQgNy45OTk5MSAyLjg0QzUuMTUwNTggMi44NCAyLjg0MDczIDUuMTQ5ODQgMi44NDA3MyA3Ljk5OTE4QzIuODQwNzMgMTAuODQ4NSA1LjE1MDU4IDEzLjE1ODQgNy45OTk5MSAxMy4xNTg0QzEwLjg0OTMgMTMuMTU4NCAxMy4xNTkxIDEwLjg0ODUgMTMuMTU5MSA3Ljk5OTE4WiIgZmlsbD0iIzAwNEZENiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "100%",
					"customHeight": "100%",
					"borderRadius": "none",
					"positioning": "cover",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "TabDescriptionTitleIconContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionTitleLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabDescriptionTitleLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionTitleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDescriptionContentContainer",
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
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "nowrap"
				},
				"parentName": "TabDescriptionContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDescriptionLabel1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabDescriptionLabel1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionListItemContainer1",
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
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "TabDescriptionContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDescriptionItemBullit1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_zcpsm49_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionLabel2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabDescriptionLabel2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDescriptionListItemContainer2",
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
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "TabDescriptionContentContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabDescriptionItemBullit2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_nt0b5tj_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionLabel3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabDescriptionLabel3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDescriptionListItemContainer3",
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
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "TabDescriptionContentContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabDescriptionItemBullit3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_5n6kn6b_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabDescriptionLabel4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabDescriptionLabel4_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabDescriptionListItemContainer3",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_Roles",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
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
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "RolesTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(OrganizationalRolesExpansionPanel_title)#",
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
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_Roles",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesToolsContainer",
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
				"parentName": "OrganizationalRolesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesToolsFlexContainer",
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
				"parentName": "OrganizationalRolesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrganizationalRolesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddRolesToTechnicalUserRequest",
						"params": {
							"userId": "$Id",
							"rolesType": 0,
							"dataSourceNames": [
								"GridDetail_utinh4aDS",
								"GridDetail_4sgsz13DS",
								"GrantedOperationsGridDetailDS"
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrganizationalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_81csmcm_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_utinh4aDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "OrganizationalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OrganizationalRolesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "OrganizationalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesExportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_vkajm2x_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OrganizationalRolesList"
						}
					}
				},
				"parentName": "OrganizationalRolesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_v4gofjk_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "OrganizationalRolesSearchButton_GridDetail_utinh4a",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_utinh4a"
										]
									}
								]
							}
						],
						"from": [
							"OrganizationalRolesSearchButton_SearchValue",
							"OrganizationalRolesSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "OrganizationalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(OrganizationalRolesExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "OrganizationalRolesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesListContainer",
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
				"parentName": "OrganizationalRolesExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OrganizationalRolesList",
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
							"selection": false,
							"toolbar": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_utinh4a",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_utinh4aDS_Id",
					"columns": [
						{
							"id": "64006ea6-d838-40b6-ec1d-7782b5ddf724",
							"code": "GridDetail_utinh4aDS_SysRole",
							"caption": "#ResourceString(GridDetail_utinh4aDS_SysRole)#",
							"dataValueType": 10,
							"width": 340
						}
					],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(RowToolbar_DeleteItem_caption)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.RemoveRoleFromTechnicalUserRequest",
								"params": {
									"recordId": "$GridDetail_utinh4a.GridDetail_utinh4aDS_Id",
									"dataSourceNames": [
										"GridDetail_utinh4aDS",
										"GridDetail_4sgsz13DS",
										"GrantedOperationsGridDetailDS"
									]
								}
							}
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_utinh4a_ActiveRow",
					"selectionState": "$GridDetail_utinh4a_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_utinh4a_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "OrganizationalRolesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_utinh4a_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_utinh4aDS",
							"filters": "$GridDetail_utinh4a | crt.ToCollectionFilters : 'GridDetail_utinh4a' : $GridDetail_utinh4a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_utinh4a_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "OrganizationalRolesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_utinh4a_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_utinh4aDS",
							"filters": "$GridDetail_utinh4a | crt.ToCollectionFilters : 'GridDetail_utinh4a' : $GridDetail_utinh4a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_utinh4a_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_utinh4a_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_utinh4a_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "OrganizationalRolesList",
							"filters": "$GridDetail_utinh4a | crt.ToCollectionFilters : 'GridDetail_utinh4a' : $GridDetail_utinh4a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_utinh4a_SelectionState"
						}
					}
				},
				"parentName": "OrganizationalRolesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_utinh4a_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_utinh4aDS",
							"filters": "$GridDetail_utinh4a | crt.ToCollectionFilters : 'GridDetail_utinh4a' : $GridDetail_utinh4a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_utinh4a_SelectionState"
						}
					}
				},
				"parentName": "OrganizationalRolesList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(FunctionalRolesExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_Roles",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesToolsContainer",
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
				"parentName": "FunctionalRolesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesToolsFlexContainer",
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
				"parentName": "FunctionalRolesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FunctionalRolesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.AddRolesToTechnicalUserRequest",
						"params": {
							"userId": "$Id",
							"rolesType": 1,
							"dataSourceNames": [
								"GridDetail_zaqnqmhDS",
								"GridDetail_4sgsz13DS",
								"GrantedOperationsGridDetailDS"
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FunctionalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_8fg7ruq_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_zaqnqmhDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FunctionalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FunctionalRolesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FunctionalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesExportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_9k419sz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FunctionalRolesList"
						}
					}
				},
				"parentName": "FunctionalRolesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0xu24vq_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FunctionalRolesSearchButton_GridDetail_zaqnqmh",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_zaqnqmh"
										]
									}
								]
							}
						],
						"from": [
							"FunctionalRolesSearchButton_SearchValue",
							"FunctionalRolesSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FunctionalRolesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesExpansionPanelDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(FunctionalRolesExpansionPanelDescription_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FunctionalRolesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesListContainer",
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
				"parentName": "FunctionalRolesExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FunctionalRolesList",
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
							"selection": false,
							"toolbar": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_zaqnqmh",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_zaqnqmhDS_Id",
					"columns": [
						{
							"id": "cd500f5c-70fc-ee8c-3e2c-672b65318a74",
							"code": "GridDetail_zaqnqmhDS_SysRole",
							"caption": "#ResourceString(GridDetail_zaqnqmhDS_SysRole)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_zaqnqmh_ActiveRow",
					"selectionState": "$GridDetail_zaqnqmh_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_zaqnqmh_SelectionState"
					},
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(RowToolbar_DeleteItem_caption)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.RemoveRoleFromTechnicalUserRequest",
								"params": {
									"recordId": "$GridDetail_zaqnqmh.GridDetail_zaqnqmhDS_Id",
									"dataSourceNames": [
										"GridDetail_zaqnqmhDS",
										"GridDetail_4sgsz13DS",
										"GrantedOperationsGridDetailDS"
									]
								}
							}
						}
					],
					"bulkActions": []
				},
				"parentName": "FunctionalRolesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zaqnqmh_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zaqnqmhDS",
							"filters": "$GridDetail_zaqnqmh | crt.ToCollectionFilters : 'GridDetail_zaqnqmh' : $GridDetail_zaqnqmh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zaqnqmh_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "FunctionalRolesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zaqnqmh_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zaqnqmhDS",
							"filters": "$GridDetail_zaqnqmh | crt.ToCollectionFilters : 'GridDetail_zaqnqmh' : $GridDetail_zaqnqmh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zaqnqmh_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_zaqnqmh_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_zaqnqmh_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FunctionalRolesList",
							"filters": "$GridDetail_zaqnqmh | crt.ToCollectionFilters : 'GridDetail_zaqnqmh' : $GridDetail_zaqnqmh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zaqnqmh_SelectionState"
						}
					}
				},
				"parentName": "FunctionalRolesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_zaqnqmh_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_zaqnqmhDS",
							"filters": "$GridDetail_zaqnqmh | crt.ToCollectionFilters : 'GridDetail_zaqnqmh' : $GridDetail_zaqnqmh_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_zaqnqmh_SelectionState"
						}
					}
				},
				"parentName": "FunctionalRolesList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UserSessionsTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(UserSessionsTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UserSessionsTabContainer",
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
						"rowGap": "medium"
					},
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
				"parentName": "UserSessionsTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsChart",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 9
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ChartWidget_i0xu1xd_title)#",
						"color": "dark-turquoise",
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
								"color": "dark-turquoise",
								"type": "bar",
								"label": "#ResourceString(ChartWidget_i0xu1xd_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "ChartWidget_i0xu1xd_SeriesData_0",
										"schemaName": "SysUserSession",
										"filters": {
											"filter": {
												"items": {
													"97e8b134-a2a6-434c-9e61-90c49d5280d0": {
														"filterType": 1,
														"comparisonType": 8,
														"isEnabled": true,
														"trimDateTimeParameterToDate": true,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "SessionStartDate"
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
																	"value": 10
																}
															},
															"macrosType": 25
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
															"columnPath": "SessionStartDate"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "SysUserSession"
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
												"attributePath": "SysUser",
												"relationPath": "PDS.Id"
											}
										],
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
															"columnPath": "SessionStartDate"
														},
														"functionType": 3,
														"datePartType": 1
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
															"columnPath": "SessionStartDate"
														},
														"functionType": 3,
														"datePartType": 3
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
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "UserSessionsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(UserSessionsExpansionPanel_title)#",
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
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "UserSessionsTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UserSessionsToolsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
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
				"parentName": "UserSessionsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsToolsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 5,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "UserSessionsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(UserSessionsRefreshButton_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "GridDetail_tt05sztDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "UserSessionsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(UserSessionsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "UserSessionsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_CompleteAllSessions",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(Button_CompleteAllSessions_caption)#",
					"color": "default",
					"disabled": "$CompleteAllSessionsButtonDisabled",
					"size": "medium",
					"clicked": {
						"request": "crt.CompleteAllUserSessionsRequest",
						"params": {
							"userId": "$Id",
							"dataSourceName": "GridDetail_tt05sztDS"
						}
					},
					"icon": "go-out-icon"
				},
				"parentName": "UserSessionsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsExportButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rn596hu_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "UserSessionsList"
						}
					}
				},
				"parentName": "UserSessionsSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UserSessionsSearchButton",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0evzixp_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "UserSessionsSearchButton_GridDetail_tt05szt",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_tt05szt"
										]
									}
								]
							}
						],
						"from": [
							"UserSessionsSearchButton_SearchValue",
							"UserSessionsSearchButton_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "UserSessionsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FlexContainer_QuickFilter",
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
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "flex-start",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "UserSessionsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "QuickFilter_ActiveSessions",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_ActiveSessions_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_ActiveSessions_GridDetail_tt05szt",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "GridDetail_tt05szt",
													"customFilter": {
														"items": {
															"99cb6a62-2f93-451c-bb87-5128f998d631": {
																"filterType": 2,
																"comparisonType": 1,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "SessionEndDate"
																},
																"isAggregative": false,
																"dataValueType": 7,
																"isNull": true
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "SysUserSession"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_2ocxj77_caption)#",
													"defaultValue": false,
													"approachState": true
												}
											}
										]
									}
								]
							}
						],
						"from": [
							"QuickFilter_ActiveSessions_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "FlexContainer_QuickFilter",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_SessionList",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_SessionList_caption)#)#",
					"labelType": "button-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "UserSessionsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UserSessionsListContainer",
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
				"parentName": "UserSessionsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UserSessionsList",
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
							},
							"toolbar": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_tt05szt",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_tt05sztDS_Id",
					"columns": [
						{
							"id": "c02764b5-aea2-4b44-a0b0-e7d4111be244",
							"code": "GridDetail_tt05sztDS_SessionStartDate",
							"caption": "#ResourceString(GridDetail_tt05sztDS_SessionStartDate)#",
							"dataValueType": 7
						},
						{
							"id": "450a0182-bd2e-60b2-c402-620af2badfa4",
							"code": "GridDetail_tt05sztDS_SessionEndDate",
							"caption": "#ResourceString(GridDetail_tt05sztDS_SessionEndDate)#",
							"dataValueType": 7,
							"width": 160
						},
						{
							"id": "ae3b2e25-1c50-e8f2-a796-a00c2c0f603d",
							"code": "GridDetail_tt05sztDS_ClientIP",
							"caption": "#ResourceString(GridDetail_tt05sztDS_ClientIP)#",
							"dataValueType": 28,
							"width": 179
						},
						{
							"id": "38fb9d81-0675-93a4-c592-4cdab781e10b",
							"code": "GridDetail_tt05sztDS_Agent",
							"caption": "#ResourceString(GridDetail_tt05sztDS_Agent)#",
							"dataValueType": 30,
							"width": 161
						}
					],
					"placeholder": false,
					"activeRow": "$GridDetail_tt05szt_ActiveRow",
					"selectionState": "$GridDetail_tt05szt_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_tt05szt_SelectionState"
					},
					"bulkActions": [],
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"icon": "go-out-icon",
							"caption": "#ResourceString(RowToolbar_CompleteSession_caption)#",
							"disabled": "$GridDetail_tt05szt.GridDetail_tt05sztDS_SessionEndDate | crt.ToBoolean",
							"clicked": {
								"request": "crt.CompleteUserSessionRequest",
								"params": {
									"sessionId": "$GridDetail_tt05szt.GridDetail_tt05sztDS_Id",
									"dataSourceName": "GridDetail_tt05sztDS",
									"scopes": [
										"GridDetail_utinh4aDS"
									]
								}
							}
						}
					]
				},
				"parentName": "UserSessionsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tt05szt_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_tt05sztDS",
							"filters": "$GridDetail_tt05szt | crt.ToCollectionFilters : 'GridDetail_tt05szt' : $GridDetail_tt05szt_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tt05szt_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "UserSessionsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tt05szt_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_tt05sztDS",
							"filters": "$GridDetail_tt05szt | crt.ToCollectionFilters : 'GridDetail_tt05szt' : $GridDetail_tt05szt_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tt05szt_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_tt05szt_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tt05szt_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "UserSessionsList",
							"filters": "$GridDetail_tt05szt | crt.ToCollectionFilters : 'GridDetail_tt05szt' : $GridDetail_tt05szt_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tt05szt_SelectionState"
						}
					}
				},
				"parentName": "UserSessionsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_tt05szt_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_tt05sztDS",
							"filters": "$GridDetail_tt05szt | crt.ToCollectionFilters : 'GridDetail_tt05szt' : $GridDetail_tt05szt_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_tt05szt_SelectionState"
						}
					}
				},
				"parentName": "UserSessionsList",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ShowContactInAdminUnit": {
						"value": false
					},
                  "ShowAddOAuthIntegrationButton": {
						"value": false
					},
					"CompleteAllSessionsButtonDisabled": {
						"value": false
					},
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"SysAdminUnitId": {
						"path": "PDS.Id"
					},
					"PDS_Contact_6i6hnpx": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Active_zcf7bmi": {
						"modelConfig": {
							"path": "PDS.Active"
						}
					},
					"PDS_SysCulture_8eoa8hj": {
						"modelConfig": {
							"path": "PDS.SysCulture"
						}
					},
					"PDS_TimeZoneId_quq7rd9": {
						"modelConfig": {
							"path": "PDS.TimeZone"
						}
					},
					"GridDetail_utinh4a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_utinh4aDS",
							"filterAttributes": [
								{
									"name": "OrganizationalRolesSearchButton_GridDetail_utinh4a",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_utinh4a_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_utinh4aDS_SysRole": {
									"modelConfig": {
										"path": "GridDetail_utinh4aDS.SysRole"
									}
								},
								"GridDetail_utinh4aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_utinh4aDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_utinh4a_PredefinedFilter": {
						"value": {
							"items": {
								"dc78f091-1196-4bf2-b59f-d76843fce3d5": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysRole.SysAdminUnitTypeValue"
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
								},
								"11b4cbbf-b0be-4a17-b8ad-45c78bbf2c89": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysRole.SysAdminUnitTypeValue"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 1
										}
									}
								},
								"b02d0d79-7fdb-4210-aac2-4fe7435290fd": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysRole.SysAdminUnitTypeValue"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 2
										}
									}
								},
								"c3c8786a-7370-4b22-a850-f6d0004f64e0": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysRole.SysAdminUnitTypeValue"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 3
										}
									}
								}
							},
							"logicalOperation": 1,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "SysUserInRole"
						}
					},
					"GridDetail_zuruedf": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zuruedfDS",
							"filterAttributes": [
								{
									"name": "OAuthIntegrationsSearchButton_GridDetail_zuruedf",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_zuruedf_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "IsActive"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zuruedfDS_Name": {
									"modelConfig": {
										"path": "GridDetail_zuruedfDS.Name"
									}
								},
								"GridDetail_zuruedfDS_IsActive": {
									"modelConfig": {
										"path": "GridDetail_zuruedfDS.IsActive"
									}
								},
								"GridDetail_zuruedfDS_ApplicationUrl": {
									"modelConfig": {
										"path": "GridDetail_zuruedfDS.ApplicationUrl"
									}
								},
								"GridDetail_zuruedfDS_Id": {
									"modelConfig": {
										"path": "GridDetail_zuruedfDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_wuxjkme": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wuxjkmeDS",
							"filterAttributes": [
								{
									"name": "AllowedIPSearchButton_GridDetail_wuxjkme",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "BeginIP"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wuxjkmeDS_BeginIP": {
									"modelConfig": {
										"path": "GridDetail_wuxjkmeDS.BeginIP"
									}
								},
								"GridDetail_wuxjkmeDS_EndIP": {
									"modelConfig": {
										"path": "GridDetail_wuxjkmeDS.EndIP"
									}
								},
								"GridDetail_wuxjkmeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wuxjkmeDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zaqnqmh": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_zaqnqmhDS",
							"filterAttributes": [
								{
									"name": "FunctionalRolesSearchButton_GridDetail_zaqnqmh",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_zaqnqmh_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_zaqnqmhDS_SysRole": {
									"modelConfig": {
										"path": "GridDetail_zaqnqmhDS.SysRole"
									}
								},
								"GridDetail_zaqnqmhDS_Id": {
									"modelConfig": {
										"path": "GridDetail_zaqnqmhDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zaqnqmh_PredefinedFilter": {
						"value": {
							"items": {
								"1c1a827f-7563-4466-89cd-404063dd05e1": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SysRole.SysAdminUnitTypeValue"
									},
									"isAggregative": false,
									"dataValueType": 4,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 4,
											"value": 6
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "SysUserInRole"
						}
					},
					"GridDetail_tt05szt": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tt05sztDS",
							"filterAttributes": [
								{
									"name": "UserSessionsSearchButton_GridDetail_tt05szt",
									"loadOnChange": true
								},
								{
									"name": "QuickFilter_ActiveSessions_GridDetail_tt05szt",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "SessionStartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tt05sztDS_SessionStartDate": {
									"modelConfig": {
										"path": "GridDetail_tt05sztDS.SessionStartDate"
									}
								},
								"GridDetail_tt05sztDS_SessionEndDate": {
									"modelConfig": {
										"path": "GridDetail_tt05sztDS.SessionEndDate"
									}
								},
								"GridDetail_tt05sztDS_ClientIP": {
									"modelConfig": {
										"path": "GridDetail_tt05sztDS.ClientIP"
									}
								},
								"GridDetail_tt05sztDS_Agent": {
									"modelConfig": {
										"path": "GridDetail_tt05sztDS.Agent"
									}
								},
								"GridDetail_tt05sztDS_Id": {
									"modelConfig": {
										"path": "GridDetail_tt05sztDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_zuruedf_PredefinedFilter": {
						"value": {
							"items": {
								"91b022f2-e41e-4187-8f3f-7983911729b3": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "SystemUser"
									},
									"isAggregative": false,
									"dataValueType": 10,
									"referenceSchemaName": "SysAdminUnit",
									"rightExpression": {
										"expressionType": 1,
										"functionType": 1,
										"macrosType": 1
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": false,
							"filterType": 6,
							"rootSchemaName": "OAuthClientApp"
						}
					},
					"DataGrid_mutu3ia": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_mutu3iaDS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_mutu3iaDS_Zip": {
									"modelConfig": {
										"path": "DataGrid_mutu3iaDS.Zip"
									}
								},
								"DataGrid_mutu3iaDS_Id": {
									"modelConfig": {
										"path": "DataGrid_mutu3iaDS.Id"
									}
								}
							}
						}
					},
					"PDS_TimeZone_sjf6yfs": {
						"modelConfig": {
							"path": "PDS.TimeZone"
						}
					},
					"GridDetail_4sgsz13": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_4sgsz13DS",
							"filterAttributes": [
								{
									"name": "ObjectPermissionsSearchButton_GridDetail_4sgsz13",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_4sgsz13DS_Object": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.Object"
									}
								},
								"GridDetail_4sgsz13DS_CanRead": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.CanRead"
									}
								},
								"GridDetail_4sgsz13DS_CanAppend": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.CanAppend"
									}
								},
								"GridDetail_4sgsz13DS_CanEdit": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.CanEdit"
									}
								},
								"GridDetail_4sgsz13DS_CanDelete": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.CanDelete"
									}
								},
								"GridDetail_4sgsz13DS_AdministratedByRecords": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.AdministratedByRecords"
									}
								},
								"GridDetail_4sgsz13DS_AdministratedByColumns": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.AdministratedByColumns"
									}
								},
								"GridDetail_4sgsz13DS_ObjectPermissionsUrl": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.ObjectPermissionsUrl"
									}
								},
								"GridDetail_4sgsz13DS_Id": {
									"modelConfig": {
										"path": "GridDetail_4sgsz13DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_6vxhbxx": {
						"isCollection": true,
						"modelConfig": {
							"path": "GrantedOperationsGridDetailDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_6vxhbxx_PredefinedFilter"
								}
							],
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GrantedOperationsGridDetailDS_SysAdminOperation": {
									"modelConfig": {
										"path": "GrantedOperationsGridDetailDS.SysAdminOperation"
									}
								},
								"GrantedOperationsGridDetailDS_Id": {
									"modelConfig": {
										"path": "GrantedOperationsGridDetailDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_6vxhbxx_PredefinedFilter": {
						"value": {
							"items": {
								"16b3a3d6-5dcf-47dd-a136-1097ed07b693": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "CanExecute"
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
							"rootSchemaName": "VwSysAdminOperationGrantee"
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
						"GridDetail_tt05sztDS": [
							{
								"attributePath": "SysUser",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_utinh4aDS": [
							{
								"attributePath": "SysUser",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_zaqnqmhDS": [
							{
								"attributePath": "SysUser",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_zuruedfDS": [
							{
								"attributePath": "SystemUser",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_wuxjkmeDS": [
							{
								"attributePath": "SysAdminUnit",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_4sgsz13DS": [
							{
								"attributePath": "TechnicalUserId",
								"relationPath": "PDS.Id"
							}
						],
						"GrantedOperationsGridDetailDS": [
							{
								"attributePath": "SysAdminUnit",
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
							"entitySchemaName": "VwTechnicalUser"
						},
						"scope": "page"
					},
					"GridDetail_utinh4aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysUserInRole",
							"attributes": {
								"SysRole": {
									"path": "SysRole"
								}
							}
						}
					},
					"GridDetail_zuruedfDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OAuthClientApp",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"IsActive": {
									"path": "IsActive"
								},
								"ApplicationUrl": {
									"path": "ApplicationUrl"
								}
							}
						}
					},
					"GridDetail_wuxjkmeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysAdminUnitIPRange",
							"attributes": {
								"BeginIP": {
									"path": "BeginIP"
								},
								"EndIP": {
									"path": "EndIP"
								}
							}
						}
					},
					"GridDetail_zaqnqmhDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysUserInRole",
							"attributes": {
								"SysRole": {
									"path": "SysRole"
								}
							}
						}
					},
					"GridDetail_tt05sztDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SysUserSession",
							"attributes": {
								"SessionStartDate": {
									"path": "SessionStartDate"
								},
								"SessionEndDate": {
									"path": "SessionEndDate"
								},
								"ClientIP": {
									"path": "ClientIP"
								},
								"Agent": {
									"path": "Agent"
								}
							}
						}
					},
					"DataGrid_mutu3iaDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ContactAddress",
							"attributes": {
								"Zip": {
									"path": "Zip"
								}
							}
						}
					},
					"GridDetail_4sgsz13DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "TechnicalUsersObjectPermissions",
							"attributes": {
								"Object": {
									"path": "Object"
								},
								"CanRead": {
									"path": "CanRead"
								},
								"CanAppend": {
									"path": "CanAppend"
								},
								"CanEdit": {
									"path": "CanEdit"
								},
								"CanDelete": {
									"path": "CanDelete"
								},
								"AdministratedByRecords": {
									"path": "AdministratedByRecords"
								},
								"AdministratedByColumns": {
									"path": "AdministratedByColumns"
								},
								"ObjectPermissionsUrl": {
									"path": "ObjectPermissionsUrl"
								}
							}
						}
					},
					"GrantedOperationsGridDetailDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "VwSysAdminOperationGrantee",
							"attributes": {
								"SysAdminOperation": {
									"path": "SysAdminOperation"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					await next?.handle(request);
					const featureService = new devkit.FeatureService();
					const showContactInAdminUnit = await featureService.getFeatureState("SysAdminUnitFeatures.ShowContactInAdminUnit");
                    const showAddOAuthIntegrationButton = await featureService.getFeatureState("EnableFreedomUIOAuthSection");
                    request.$context.ShowAddOAuthIntegrationButton = showAddOAuthIntegrationButton;
					request.$context.ShowContactInAdminUnit = showContactInAdminUnit;
				}
			},
			{
				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					const httpClientService = new devkit.HttpClientService();
					const endpoint = "/rest/AdministrationService/UpdateOrCreateTechnicalUser";
					let data = {
						Id : request.$context.attributes["Id"],
						Name : request.$context.attributes["Name"]
					};
					const active = request.$context.attributes["PDS_Active_zcf7bmi"];
					if (active != undefined) {
						data["Active"] = active;
					}
					const sysCultureId = request.$context.attributes["PDS_SysCulture_8eoa8hj"];
					if (sysCultureId != undefined) {
						data["SysLanguageId"] = sysCultureId.value;
					}
					const contactId = request.$context.attributes["PDS_Contact_6i6hnpx"];
					if (contactId != undefined) {
						data["ContactId"] = contactId.value;
					}
					const timeZoneId = request.$context.attributes["PDS_TimeZone_sjf6yfs"];
					if (timeZoneId != undefined) {
						data["TimeZoneId"] = timeZoneId.value;
					}
					const response = await httpClientService.post(endpoint, data);
					if (response?.status === 200) {
						var errorMessage = response?.body;
						if (!errorMessage){
							return await next?.handle(request);
						}
						Terrasoft.showErrorMessage(errorMessage);
					}
				}
			},
			{
				request: "crt.LoadDataRequest",
				handler: async (request, next) => {
					var activeSessionsDataSourceName = "GridDetail_tt05sztDS";
					if(request.dataSourceName === activeSessionsDataSourceName) {
						const result = await next?.handle(request);
						const gridData = request.$context.formApiModel.controls["GridDetail_tt05szt"].value;
						const hasEmptyColumns = gridData.some(row => row.GridDetail_tt05sztDS_SessionEndDate === null);
						request.$context.CompleteAllSessionsButtonDisabled = !hasEmptyColumns;
						return result ;
					}
					var languageDataSourceName = "PDS_SysCulture_8eoa8hj_List_DS";
					if(request.dataSourceName !== languageDataSourceName) {
						return await next?.handle(request);
					}
					request.parameters.push({
						type: "filter",
						value: {
							"items": {
								"8533d26b-cedc-4a3f-b701-c58775182a8d": {
									"filterType": 1,
									"comparisonType": 3,
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "[SysCulture:Language].Active"
									},
									"isAggregative": false,
									"dataValueType": 1,
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 12,
											"value": 1
										}
									}
								}
							},
							"logicalOperation": 0,
							"isEnabled": true,
							"filterType": 6,
							"rootSchemaName": "SysLanguage"
						}
					});
					return await next?.handle(request);
				}
			},
			{
				request: "crt.OpenObjectsPermissionsSection",
				handler: async (request, next) => {
					const url = Terrasoft.workspaceBaseUrl + "/ClientApp/#/AdministratedObjects";
					window.open(url, "_blank").focus();
				}
			},
			{
				request: "crt.OpenOperationPermissionsSection",
				handler: async (request, next) => {
					const url = Terrasoft.workspaceBaseUrl + "/Shell/#SectionModuleV2/SysAdminOperationSectionV2";
					window.open(url, "_blank").focus();
				}
			},
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});