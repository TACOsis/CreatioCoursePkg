define("Products_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Owner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Tax",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Inactive",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 1,
						"rowSpan": 1
					}
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
				"operation": "insert",
				"name": "Category",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_1nnnb6d",
					"labelPosition": "above",
					"control": "$LookupAttribute_1nnnb6d",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_61u7xtp",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_61u7xtp_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Category",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnitsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(UnitsExpansionPanel_title)#",
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
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UnitsToolsContainer",
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
				"parentName": "UnitsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnitsToolsFlexContainer",
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
				"parentName": "UnitsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductUnitListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductUnitListRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_snzncmyDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "UnitsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductUnitListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductUnitListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "UnitsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductUnitListExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductUnitListExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_snzncmy"
						}
					},
					"visible": true
				},
				"parentName": "ProductUnitListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductUnitListImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductUnitListImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ProductUnit"
						}
					},
					"visible": true
				},
				"parentName": "ProductUnitListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductUnitListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ProductUnitListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductUnitListSearchFilter_GridDetail_snzncmy",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_snzncmy"
										]
									}
								]
							}
						],
						"from": [
							"ProductUnitListSearchFilter_SearchValue",
							"ProductUnitListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "UnitsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductUnitListGridContainer",
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
				"parentName": "UnitsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductUnitList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_snzncmy",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_snzncmyDS_Id",
					"columns": [
						{
							"id": "6722d364-3b3f-36ca-73da-6b2184ceebef",
							"code": "GridDetail_snzncmyDS_Unit",
							"path": "Unit",
							"caption": "#ResourceString(GridDetail_snzncmyDS_Unit)#",
							"dataValueType": 10,
							"referenceSchemaName": "Unit",
							"width": 181
						},
						{
							"id": "e98191f4-58f4-1346-38b6-8f8383f90e72",
							"code": "GridDetail_snzncmyDS_UnitShortName",
							"path": "Unit.ShortName",
							"caption": "#ResourceString(GridDetail_snzncmyDS_UnitShortName)#",
							"dataValueType": 27,
							"width": 163
						},
						{
							"id": "dd9776b4-cb41-d363-cced-9735d643d8e6",
							"code": "GridDetail_snzncmyDS_IsBase",
							"path": "IsBase",
							"caption": "#ResourceString(GridDetail_snzncmyDS_IsBase)#",
							"dataValueType": 12,
							"width": 142
						},
						{
							"id": "ec27616a-2c8e-e6c9-64a4-78c4f26c8d6e",
							"code": "GridDetail_snzncmyDS_NumberOfBaseUnits",
							"path": "NumberOfBaseUnits",
							"caption": "#ResourceString(GridDetail_snzncmyDS_NumberOfBaseUnits)#",
							"dataValueType": 33,
							"width": 197
						}
					]
				},
				"parentName": "ProductUnitListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(FeaturesTab_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeaturesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(FeaturesExpansionPanel_title)#",
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
				"parentName": "FeaturesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesToolsContainer",
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
				"parentName": "FeaturesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesToolsFlexContainer",
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
				"parentName": "FeaturesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesListAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FeaturesListAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SpecificationInProduct",
							"defaultValues": [
								{
									"attributeName": "Product",
									"value": "$Product"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FeaturesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FeaturesListRefreshButton_caption)#",
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
							"dataSourceName": "FeaturesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FeaturesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeaturesListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FeaturesListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FeaturesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeaturesExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeaturesExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FeaturesList",
							"filters": "$GridDetail_z64pwcc | crt.ToCollectionFilters : 'GridDetail_z64pwcc' : $GridDetail_z64pwcc_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "FeaturesListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeaturesImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SpecificationInProduct"
						}
					},
					"visible": true
				},
				"parentName": "FeaturesListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeatureSetUpButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeatureSetUpButton_caption)#",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Specification"
						}
					},
					"visible": true,
					"icon": "add-button-icon"
				},
				"parentName": "FeaturesListSettingsButton",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeaturesListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(FeaturesListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FeaturesListSearchFilter_GridDetail_z64pwcc",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_z64pwcc"
										]
									}
								]
							}
						],
						"from": [
							"FeaturesListSearchFilter_SearchValue",
							"FeaturesListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FeaturesToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FeaturesListGridContainer",
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
				"parentName": "FeaturesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 15
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
					"items": "$GridDetail_z64pwcc",
					"activeRow": "$GridDetail_z64pwcc_ActiveRow",
					"selectionState": "$GridDetail_z64pwcc_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_z64pwcc_SelectionState"
					},
					"primaryColumnName": "FeaturesListDS_Id",
					"columns": [
						{
							"id": "039117ad-4d3c-28fa-22d5-974f3077aac2",
							"code": "FeaturesListDS_Specification",
							"caption": "#ResourceString(FeaturesListDS_Specification)#",
							"dataValueType": 10,
							"width": 293
						},
						{
							"id": "7ccd4794-34ae-cb7f-f670-e4aa96d6ad7a",
							"code": "FeaturesListDS_StringValue",
							"caption": "#ResourceString(FeaturesListDS_StringValue)#",
							"dataValueType": 29,
							"width": 300
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "FeaturesListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesList_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "FeaturesListDS",
							"filters": "$GridDetail_z64pwcc | crt.ToCollectionFilters : 'GridDetail_z64pwcc' : $GridDetail_z64pwcc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_z64pwcc_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "FeaturesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesList_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "FeaturesListDS",
							"filters": "$GridDetail_z64pwcc | crt.ToCollectionFilters : 'GridDetail_z64pwcc' : $GridDetail_z64pwcc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_z64pwcc_SelectionState"
						}
					}
				},
				"parentName": "FeaturesList_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeaturesList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FeaturesList",
							"filters": "$GridDetail_z64pwcc | crt.ToCollectionFilters : 'GridDetail_z64pwcc' : $GridDetail_z64pwcc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_z64pwcc_SelectionState"
						}
					}
				},
				"parentName": "FeaturesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeaturesList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeaturesList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "FeaturesListDS",
							"filters": "$GridDetail_z64pwcc | crt.ToCollectionFilters : 'GridDetail_z64pwcc' : $GridDetail_z64pwcc_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_z64pwcc_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "FeaturesList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PricesTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(PricesTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PricesExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(PricesExpansionPanel_title)#",
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
				"parentName": "PricesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PricesToolsContainer",
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
				"parentName": "PricesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PricesToolsFlexContainer",
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
				"parentName": "PricesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductPriceListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductPriceListRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_5l564xcDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "PricesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductPriceListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductPriceListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "PricesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductPriceListExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductPriceListExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_5l564xc"
						}
					},
					"visible": true
				},
				"parentName": "ProductPriceListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductPriceListImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductPriceListImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ProductPrice"
						}
					},
					"visible": true
				},
				"parentName": "ProductPriceListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductPriceListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ProductPriceListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductPriceListSearchFilter_GridDetail_5l564xc",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_5l564xc"
										]
									}
								]
							}
						],
						"from": [
							"ProductPriceListSearchFilter_SearchValue",
							"ProductPriceListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "PricesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ProductPriceListGridContainer",
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
				"parentName": "PricesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductPriceList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_5l564xc",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_5l564xcDS_Id",
					"columns": [
						{
							"id": "6ff048fc-e612-e548-fc38-7a13967f5783",
							"code": "GridDetail_5l564xcDS_PriceList",
							"path": "PriceList",
							"caption": "#ResourceString(GridDetail_5l564xcDS_PriceList)#",
							"dataValueType": 10,
							"referenceSchemaName": "Pricelist"
						},
						{
							"id": "3451b62b-5179-e54c-a4d6-138a204d3104",
							"code": "GridDetail_5l564xcDS_Price",
							"path": "Price",
							"caption": "#ResourceString(GridDetail_5l564xcDS_Price)#",
							"dataValueType": 6
						},
						{
							"id": "01a31a6c-3008-c1fd-91bc-a3c8823d32eb",
							"code": "GridDetail_5l564xcDS_Currency",
							"path": "Currency",
							"caption": "#ResourceString(GridDetail_5l564xcDS_Currency)#",
							"dataValueType": 10,
							"referenceSchemaName": "Currency",
							"width": 131
						},
						{
							"id": "9d4afd4d-861d-2e4f-db2e-1d9384b8970f",
							"code": "GridDetail_5l564xcDS_Tax",
							"path": "Tax",
							"caption": "#ResourceString(GridDetail_5l564xcDS_Tax)#",
							"dataValueType": 10,
							"referenceSchemaName": "Tax"
						}
					]
				},
				"parentName": "ProductPriceListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AvailabilityExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(AvailabilityExpansionPanel_title)#",
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
				"parentName": "PricesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AvailabilityToolsContainer",
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
				"parentName": "AvailabilityExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AvailabilityToolsFlexContainer",
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
				"parentName": "AvailabilityToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductInStockRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductInStockRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_u3fligeDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AvailabilityToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductInStockListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ProductInStockListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "AvailabilityToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductInStockListExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductInStockListExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AvailabilityList"
						}
					},
					"visible": true
				},
				"parentName": "ProductInStockListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProductInStockListImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ProductInStockListImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "ProductStockBalance"
						}
					},
					"visible": true
				},
				"parentName": "ProductInStockListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ProductInStockListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ProductInStockListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ProductInStockListSearchFilter_GridDetail_u3flige",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_u3flige"
										]
									}
								]
							}
						],
						"from": [
							"ProductInStockListSearchFilter_SearchValue",
							"ProductInStockListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "AvailabilityToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "AvailabilityListGridContainer",
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
				"parentName": "AvailabilityExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AvailabilityList",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$GridDetail_u3flige",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_u3fligeDS_Id",
					"columns": [
						{
							"id": "1763f7f8-5565-17fd-da1c-114fff5bf0cb",
							"code": "GridDetail_u3fligeDS_Warehouse",
							"path": "Warehouse",
							"caption": "#ResourceString(GridDetail_u3fligeDS_Warehouse)#",
							"dataValueType": 10,
							"referenceSchemaName": "Warehouse",
							"width": 213
						},
						{
							"id": "936be66f-236e-9041-3229-cf72222ec416",
							"code": "GridDetail_u3fligeDS_TotalQuantity",
							"path": "TotalQuantity",
							"caption": "#ResourceString(GridDetail_u3fligeDS_TotalQuantity)#",
							"dataValueType": 33
						},
						{
							"id": "5b48c9d1-21ac-469f-835a-bf61c9b87511",
							"code": "GridDetail_u3fligeDS_ReserveQuantity",
							"path": "ReserveQuantity",
							"caption": "#ResourceString(GridDetail_u3fligeDS_ReserveQuantity)#",
							"dataValueType": 33
						},
						{
							"id": "d7614078-78ee-97e7-04c0-8c9c836bbfd8",
							"code": "GridDetail_u3fligeDS_AvailableQuantity",
							"path": "AvailableQuantity",
							"caption": "#ResourceString(GridDetail_u3fligeDS_AvailableQuantity)#",
							"dataValueType": 33
						}
					],
					"activeRow": "$GridDetail_u3flige_ActiveRow",
					"selectionState": "$GridDetail_u3flige_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_u3flige_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "AvailabilityListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u3flige_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u3fligeDS",
							"filters": "$GridDetail_u3flige | crt.ToCollectionFilters : 'GridDetail_u3flige' : $GridDetail_u3flige_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u3flige_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "AvailabilityList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u3flige_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u3fligeDS",
							"filters": "$GridDetail_u3flige | crt.ToCollectionFilters : 'GridDetail_u3flige' : $GridDetail_u3flige_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u3flige_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_u3flige_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_u3flige_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "AvailabilityList",
							"filters": "$GridDetail_u3flige | crt.ToCollectionFilters : 'GridDetail_u3flige' : $GridDetail_u3flige_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u3flige_SelectionState"
						}
					}
				},
				"parentName": "AvailabilityList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_u3flige_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_u3fligeDS",
							"filters": "$GridDetail_u3flige | crt.ToCollectionFilters : 'GridDetail_u3flige' : $GridDetail_u3flige_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_u3flige_SelectionState"
						}
					}
				},
				"parentName": "AvailabilityList",
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
					"GridDetail_5l564xc": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_5l564xcDS",
							"filterAttributes": [
								{
									"name": "ProductPriceListSearchFilter_GridDetail_5l564xc",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_5l564xcDS_PriceList": {
									"modelConfig": {
										"path": "GridDetail_5l564xcDS.PriceList"
									}
								},
								"GridDetail_5l564xcDS_Price": {
									"modelConfig": {
										"path": "GridDetail_5l564xcDS.Price"
									}
								},
								"GridDetail_5l564xcDS_Currency": {
									"modelConfig": {
										"path": "GridDetail_5l564xcDS.Currency"
									}
								},
								"GridDetail_5l564xcDS_Tax": {
									"modelConfig": {
										"path": "GridDetail_5l564xcDS.Tax"
									}
								},
								"GridDetail_5l564xcDS_Id": {
									"modelConfig": {
										"path": "GridDetail_5l564xcDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_u3flige": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_u3fligeDS",
							"filterAttributes": [
								{
									"name": "ProductInStockListSearchFilter_GridDetail_u3flige",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_u3fligeDS_Warehouse": {
									"modelConfig": {
										"path": "GridDetail_u3fligeDS.Warehouse"
									}
								},
								"GridDetail_u3fligeDS_TotalQuantity": {
									"modelConfig": {
										"path": "GridDetail_u3fligeDS.TotalQuantity"
									}
								},
								"GridDetail_u3fligeDS_ReserveQuantity": {
									"modelConfig": {
										"path": "GridDetail_u3fligeDS.ReserveQuantity"
									}
								},
								"GridDetail_u3fligeDS_AvailableQuantity": {
									"modelConfig": {
										"path": "GridDetail_u3fligeDS.AvailableQuantity"
									}
								},
								"GridDetail_u3fligeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_u3fligeDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_snzncmy": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_snzncmyDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_snzncmy_PredefinedFilter"
								},
								{
									"name": "ProductUnitListSearchFilter_GridDetail_snzncmy",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_snzncmyDS_Unit": {
									"modelConfig": {
										"path": "GridDetail_snzncmyDS.Unit"
									}
								},
								"GridDetail_snzncmyDS_UnitShortName": {
									"modelConfig": {
										"path": "GridDetail_snzncmyDS.UnitShortName"
									}
								},
								"GridDetail_snzncmyDS_IsBase": {
									"modelConfig": {
										"path": "GridDetail_snzncmyDS.IsBase"
									}
								},
								"GridDetail_snzncmyDS_NumberOfBaseUnits": {
									"modelConfig": {
										"path": "GridDetail_snzncmyDS.NumberOfBaseUnits"
									}
								},
								"GridDetail_snzncmyDS_Id": {
									"modelConfig": {
										"path": "GridDetail_snzncmyDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_snzncmy_PredefinedFilter": {
						"value": null
					},
					"LookupAttribute_1nnnb6d": {
						"modelConfig": {
							"path": "PDS.Category"
						}
					},
					"GridDetail_z64pwcc": {
						"isCollection": true,
						"modelConfig": {
							"path": "FeaturesListDS",
							"filterAttributes": [
								{
									"name": "FeaturesListSearchFilter_GridDetail_z64pwcc",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"FeaturesListDS_Specification": {
									"modelConfig": {
										"path": "FeaturesListDS.Specification"
									}
								},
								"FeaturesListDS_StringValue": {
									"modelConfig": {
										"path": "FeaturesListDS.StringValue"
									}
								},
								"FeaturesListDS_Id": {
									"modelConfig": {
										"path": "FeaturesListDS.Id"
									}
								}
							}
						}
					},
					"Product": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dependencies": {
						"GridDetail_5l564xcDS": [
							{
								"attributePath": "Product",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_u3fligeDS": [
							{
								"attributePath": "Product",
								"relationPath": "PDS.Id"
							}
						],
						"GridDetail_snzncmyDS": [
							{
								"attributePath": "Product",
								"relationPath": "PDS.Id"
							}
						],
						"FeaturesListDS": [
							{
								"attributePath": "Product",
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
					"GridDetail_5l564xcDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ProductPrice",
							"attributes": {
								"PriceList": {
									"path": "PriceList"
								},
								"Price": {
									"path": "Price"
								},
								"Currency": {
									"path": "Currency"
								},
								"Tax": {
									"path": "Tax"
								}
							}
						}
					},
					"GridDetail_u3fligeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ProductStockBalance",
							"attributes": {
								"Warehouse": {
									"path": "Warehouse"
								},
								"TotalQuantity": {
									"path": "TotalQuantity"
								},
								"ReserveQuantity": {
									"path": "ReserveQuantity"
								},
								"AvailableQuantity": {
									"path": "AvailableQuantity"
								}
							}
						}
					},
					"GridDetail_snzncmyDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "ProductUnit",
							"attributes": {
								"Unit": {
									"path": "Unit"
								},
								"UnitShortName": {
									"type": "ForwardReference",
									"path": "Unit.ShortName"
								},
								"IsBase": {
									"path": "IsBase"
								},
								"NumberOfBaseUnits": {
									"path": "NumberOfBaseUnits"
								}
							}
						}
					},
					"FeaturesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "SpecificationInProduct",
							"attributes": {
								"Specification": {
									"path": "Specification"
								},
								"StringValue": {
									"path": "StringValue"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});