define("Features_MiniPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SpecificationDS_Name_3vx8z7t",
					"labelPosition": "above",
					"control": "$SpecificationDS_Name_3vx8z7t"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.SpecificationDS_Type_x88f30x",
					"labelPosition": "above",
					"control": "$SpecificationDS_Type_x88f30x",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Description",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.SpecificationDS_Description_25e5wr4",
					"labelPosition": "above",
					"control": "$SpecificationDS_Description_25e5wr4"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeatureValueExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(FeatureValueExpansionPanel_title)#",
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
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FeatureValueToolsContainer",
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
				"parentName": "FeatureValueExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeatureValueToolsFlexContainer",
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
				"parentName": "FeatureValueToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeatureValueListRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FeatureValueListRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_cz4kth1DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FeatureValueToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeatureValueListSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(FeatureValueListSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "FeatureValueToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeatureValueExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeatureValueExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FeatureValueList"
						}
					},
					"visible": true
				},
				"parentName": "FeatureValueListSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeatureValueImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(FeatureValueImportDataButton_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "SpecificationListItem"
						}
					},
					"visible": true
				},
				"parentName": "FeatureValueListSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeatureValueListSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(FeatureValueListSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "FeatureValueListSearchFilter_GridDetail_cz4kth1",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_cz4kth1"
										]
									}
								]
							}
						],
						"from": [
							"FeatureValueListSearchFilter_SearchValue",
							"FeatureValueListSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FeatureValueToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "FeatureValueListGridContainer",
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
				"parentName": "FeatureValueExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeatureValueList",
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
					"items": "$GridDetail_cz4kth1",
					"activeRow": "$GridDetail_cz4kth1_ActiveRow",
					"selectionState": "$GridDetail_cz4kth1_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_cz4kth1_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_cz4kth1DS_Id",
					"columns": [
						{
							"id": "428d518c-c551-0f61-b09e-8c4d6b0a46b4",
							"code": "GridDetail_cz4kth1DS_Name",
							"caption": "#ResourceString(GridDetail_cz4kth1DS_Name)#",
							"dataValueType": 30,
							"width": 323
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "FeatureValueListGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_cz4kth1_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_cz4kth1DS",
							"filters": "$GridDetail_cz4kth1 | crt.ToCollectionFilters : 'GridDetail_cz4kth1' : $GridDetail_cz4kth1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_cz4kth1_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "FeatureValueList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_cz4kth1_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_cz4kth1DS",
							"filters": "$GridDetail_cz4kth1 | crt.ToCollectionFilters : 'GridDetail_cz4kth1' : $GridDetail_cz4kth1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_cz4kth1_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_cz4kth1_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_cz4kth1_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "FeatureValueList",
							"filters": "$GridDetail_cz4kth1 | crt.ToCollectionFilters : 'GridDetail_cz4kth1' : $GridDetail_cz4kth1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_cz4kth1_SelectionState"
						}
					}
				},
				"parentName": "FeatureValueList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_cz4kth1_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_cz4kth1DS",
							"filters": "$GridDetail_cz4kth1 | crt.ToCollectionFilters : 'GridDetail_cz4kth1' : $GridDetail_cz4kth1_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_cz4kth1_SelectionState"
						}
					}
				},
				"parentName": "FeatureValueList",
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
					"SpecificationDS_Name_3vx8z7t": {
						"modelConfig": {
							"path": "SpecificationDS.Name"
						}
					},
					"SpecificationDS_Type_x88f30x": {
						"modelConfig": {
							"path": "SpecificationDS.Type"
						}
					},
					"SpecificationDS_Description_25e5wr4": {
						"modelConfig": {
							"path": "SpecificationDS.Description"
						}
					},
					"GridDetail_cz4kth1": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_cz4kth1DS",
							"filterAttributes": [
								{
									"name": "FeatureValueListSearchFilter_GridDetail_cz4kth1",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_cz4kth1DS_Name": {
									"modelConfig": {
										"path": "GridDetail_cz4kth1DS.Name"
									}
								},
								"GridDetail_cz4kth1DS_Id": {
									"modelConfig": {
										"path": "GridDetail_cz4kth1DS.Id"
									}
								}
							}
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
					"dataSources": {
						"SpecificationDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "Specification"
							}
						},
						"GridDetail_cz4kth1DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SpecificationListItem",
								"attributes": {
									"Name": {
										"path": "Name"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "SpecificationDS",
					"dependencies": {
						"GridDetail_cz4kth1DS": [
							{
								"attributePath": "Specification",
								"relationPath": "SpecificationDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});