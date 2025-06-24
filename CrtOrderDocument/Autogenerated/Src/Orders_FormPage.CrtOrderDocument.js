define("Orders_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"fitContent": true
				},
				"parentName": "GridContainer_wn8jlf2",
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
					"caption": "#ResourceString(GridDetailAddBtn_n0rv6tu_caption)#",
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
									"attributeName": "Order",
									"value": "$Id"
								},
								{
									"attributeName": "Account",
									"value": "$LookupAttribute_xm7t1f4"
								},
								{
									"attributeName": "Contact",
									"value": "$LookupAttribute_zv8h198"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
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
					"caption": "#ResourceString(GridDetailSettingsBtn_i02a9fi_caption)#",
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
							"viewName": "DocumentsList"
						}
					}
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
					"placeholder": "#ResourceString(DocumentsSearch_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_lv59e1l"
					]
				},
				"parentName": "DocumentsToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_pfas9qt",
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
					"items": "$GridDetail_lv59e1l",
					"primaryColumnName": "DocumentsListDS_Id",
					"columns": [
						{
							"id": "17114736-3fc8-23bd-17d8-eed3369e9e50",
							"code": "DocumentsListDS_Number",
							"caption": "#ResourceString(DocumentsListDS_Number)#",
							"dataValueType": 28,
							"width": 146
						},
						{
							"id": "6fc3df5c-db76-65c1-4838-70f9ba7eb4af",
							"code": "DocumentsListDS_Type",
							"path": "Type",
							"caption": "#ResourceString(DocumentsListDS_Type)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentType",
							"width": 228
						},
						{
							"id": "449139a0-e19b-be60-c89e-f9ea7c27d7db",
							"code": "DocumentsListDS_Date",
							"path": "Date",
							"caption": "#ResourceString(DocumentsListDS_Date)#",
							"dataValueType": 8
						},
						{
							"id": "805b42a6-48d0-8043-34df-8d687f32f8de",
							"code": "DocumentsListDS_State",
							"path": "State",
							"caption": "#ResourceString(DocumentsListDS_State)#",
							"dataValueType": 10,
							"referenceSchemaName": "DocumentState"
						}
					]
				},
				"parentName": "GridContainer_pfas9qt",
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
					"GridDetail_lv59e1l": {
						"isCollection": true,
						"modelConfig": {
							"path": "DocumentsListDS"
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
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
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
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dependencies"
				],
				"values": {
					"DocumentsListDS": [
						{
							"attributePath": "Order",
							"relationPath": "PDS.Id"
						}
					]
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});