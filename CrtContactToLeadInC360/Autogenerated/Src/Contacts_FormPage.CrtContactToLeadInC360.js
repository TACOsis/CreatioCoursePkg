define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "LeadConversionScore",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_abx1wc7",
					"labelPosition": "above",
					"control": "$NumberAttribute_abx1wc7",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": "#ResourceString(LeadConversionScore_tooltip)#"
				},
				"parentName": "SideAreaProfileFieldFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MrktLeadExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_waeo36h_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"visible": true,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"layoutConfig": {
						"column": 1,
						"row": 10,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadToolsContainer",
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
				"parentName": "MrktLeadExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadToolsFlexContainer",
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
				"parentName": "MrktLeadToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CreateLeadButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_8lva7d5_caption)#",
					"icon": "contact-leads-icon",
					"iconPosition": "left-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "ContactToLeadManualLeadCreation",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "ProcessSchemaParameter1"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MrktLeadRefreshButton_caption)#",
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
							"dataSourceName": "MrktLeadListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_icmycs2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_icmycs2_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MrktLeadExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_rls9rem_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "MrktLeadList"
						}
					},
					"visible": true
				},
				"parentName": "GridDetailSettingsBtn_icmycs2",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_uknb3rf_caption)#",
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
				"parentName": "GridDetailSettingsBtn_icmycs2",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MrktLeadSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_m3w49bc_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_6o3sfr4"
					]
				},
				"parentName": "MrktLeadToolsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MrktLeadListContainer",
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
				"parentName": "MrktLeadExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MrktLeadList",
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
								"multiple": false
							}
						},
						"editable": {
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_6o3sfr4",
					"primaryColumnName": "MrktLeadListDS_Id",
					"columns": [
						{
							"id": "0915f977-7a62-0897-fbe0-28ce5447f1a8",
							"code": "MrktLeadListDS_LeadName",
							"caption": "#ResourceString(MrktLeadListDS_LeadName)#",
							"dataValueType": 30
						},
						{
							"id": "ccc75f66-f69e-2003-2fb2-426acebbd90e",
							"code": "MrktLeadListDS_LeadType",
							"path": "LeadType",
							"caption": "#ResourceString(MrktLeadListDS_LeadType)#",
							"dataValueType": 10,
							"referenceSchemaName": "LeadType"
						},
						{
							"id": "659d7bab-907f-b013-510d-713f9f78296b",
							"code": "MrktLeadListDS_QualifyStatus",
							"path": "QualifyStatus",
							"caption": "#ResourceString(MrktLeadListDS_QualifyStatus)#",
							"dataValueType": 10,
							"referenceSchemaName": "QualifyStatus",
							"width": 169
						},
						{
							"id": "8ccecd7d-5704-1aa6-3329-01953bb4f295",
							"code": "MrktLeadListDS_Owner",
							"path": "Owner",
							"caption": "#ResourceString(MrktLeadListDS_Owner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "bb619021-ba8d-62dd-e874-4da7d222b1f7",
							"code": "MrktLeadListDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(MrktLeadListDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "MrktLeadListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"GridDetail_6o3sfr4": {
					"isCollection": true,
					"modelConfig": {
						"path": "MrktLeadListDS"
					},
					"viewModelConfig": {
						"attributes": {
							"MrktLeadListDS_LeadName": {
								"modelConfig": {
									"path": "MrktLeadListDS.LeadName"
								}
							},
							"MrktLeadListDS_LeadType": {
								"modelConfig": {
									"path": "MrktLeadListDS.LeadType"
								}
							},
							"MrktLeadListDS_QualifyStatus": {
								"modelConfig": {
									"path": "MrktLeadListDS.QualifyStatus"
								}
							},
							"MrktLeadListDS_Owner": {
								"modelConfig": {
									"path": "MrktLeadListDS.Owner"
								}
							},
							"MrktLeadListDS_CreatedOn": {
								"modelConfig": {
									"path": "MrktLeadListDS.CreatedOn"
								}
							},
							"MrktLeadListDS_Id": {
								"modelConfig": {
									"path": "MrktLeadListDS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_abx1wc7": {
					"modelConfig": {
						"path": "PDS.LeadConversionScore"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"GridDetail_1z3gccbDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Lead",
						"attributes": {
							"LeadName": {
								"path": "LeadName"
							}
						}
					}
				},
				"MrktLeadListDS": {
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
				}
			},
			"dependencies": {
				"MrktLeadListDS": [
					{
						"attributePath": "QualifiedContact",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});