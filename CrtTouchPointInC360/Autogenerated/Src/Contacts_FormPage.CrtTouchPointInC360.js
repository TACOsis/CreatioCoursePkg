define("Contacts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "GridContainer_74mryv5"
			},
			{
				"operation": "insert",
				"name": "MarketingFieldsContainer",
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
					}
				},
				"parentName": "MarketingTabGridContainer",
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
					"label": "$Resources.Strings.LookupAttribute_o0xkxq8",
					"labelPosition": "auto",
					"control": "$LookupAttribute_o0xkxq8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(CustomerNeed_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MarketingFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RegisterMethod",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_ibsaoqz",
					"labelPosition": "auto",
					"control": "$LookupAttribute_ibsaoqz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(RegisterMethod_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MarketingFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Channel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_q0alkbc",
					"labelPosition": "auto",
					"control": "$LookupAttribute_q0alkbc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(ComboBox_3zub1m3_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MarketingFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Source",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_oqrhxz3",
					"labelPosition": "auto",
					"control": "$LookupAttribute_oqrhxz3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "#ResourceString(ComboBox_268yz1f_placeholder)#",
					"tooltip": ""
				},
				"parentName": "MarketingFieldsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SubmittedFormExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(SubmittedFormExpansionPanel_title)#",
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
						"row": 20,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "MarketingTabGridContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormToolContainer",
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
				"parentName": "SubmittedFormExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormToolFlexContainer",
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
				"parentName": "SubmittedFormToolContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SubmittedFormRefreshButton_caption)#",
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
							"dataSourceName": "GridDetail_dm1myagDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_weylxjf_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(SubmittedFormExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "SubmittedFormList"
						}
					},
					"visible": true
				},
				"parentName": "SubmittedFormSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormImportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_czhqpwi_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "FormSubmit"
						}
					},
					"visible": true
				},
				"parentName": "SubmittedFormSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SubmittedFormSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_769sr56_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_dm1myag"
					]
				},
				"parentName": "SubmittedFormToolFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SubmittedFormListContainer",
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
				"parentName": "SubmittedFormExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SubmittedFormList",
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
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_dm1myag",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_dm1myagDS_Id",
					"columns": [
						{
							"id": "0a984e77-d4c2-ce00-fd89-fefc1e0cc1d4",
							"code": "GridDetail_dm1myagDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_dm1myagDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 147
						},
						{
							"id": "279f81f2-912c-f36e-c352-828e9ae8c315",
							"code": "GridDetail_dm1myagDS_FullName",
							"path": "FullName",
							"caption": "#ResourceString(GridDetail_dm1myagDS_FullName)#",
							"dataValueType": 28,
							"width": 144
						},
						{
							"id": "c887b45d-5d3e-70a5-43f6-50e8302942b7",
							"code": "GridDetail_dm1myagDS_Email",
							"path": "Email",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Email)#",
							"dataValueType": 28,
							"width": 168
						},
						{
							"id": "c4a0364c-1fad-15a5-b092-b0352624d910",
							"code": "GridDetail_dm1myagDS_PhoneNumber",
							"path": "PhoneNumber",
							"caption": "#ResourceString(GridDetail_dm1myagDS_PhoneNumber)#",
							"dataValueType": 28,
							"width": 198
						},
						{
							"id": "4ba54823-9f3f-30be-5b3c-a2404aaadb6a",
							"code": "GridDetail_dm1myagDS_Account",
							"path": "Account",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Account)#",
							"dataValueType": 28,
							"width": 185
						},
						{
							"id": "c950ad06-0433-fd73-6c18-8d35e9db8c47",
							"code": "GridDetail_dm1myagDS_Country",
							"path": "Country",
							"caption": "#ResourceString(GridDetail_dm1myagDS_Country)#",
							"dataValueType": 10,
							"referenceSchemaName": "Country"
						}
					]
				},
				"parentName": "SubmittedFormListContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"LookupAttribute_o0xkxq8": {
					"modelConfig": {
						"path": "PDS.CustomerNeed"
					}
				},
				"LookupAttribute_ibsaoqz": {
					"modelConfig": {
						"path": "PDS.RegisterMethod"
					}
				},
				"LookupAttribute_q0alkbc": {
					"modelConfig": {
						"path": "PDS.Channel"
					}
				},
				"LookupAttribute_oqrhxz3": {
					"modelConfig": {
						"path": "PDS.Source"
					}
				},
				"GridDetail_dm1myag": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_dm1myagDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_dm1myagDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.CreatedOn"
								}
							},
							"GridDetail_dm1myagDS_FullName": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.FullName"
								}
							},
							"GridDetail_dm1myagDS_Email": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.Email"
								}
							},
							"GridDetail_dm1myagDS_PhoneNumber": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.PhoneNumber"
								}
							},
							"GridDetail_dm1myagDS_Account": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.Account"
								}
							},
							"GridDetail_dm1myagDS_Country": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.Country"
								}
							},
							"GridDetail_dm1myagDS_Id": {
								"modelConfig": {
									"path": "GridDetail_dm1myagDS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"GridDetail_dm1myagDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "FormSubmit",
						"attributes": {
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"FullName": {
								"path": "FullName"
							},
							"Email": {
								"path": "Email"
							},
							"PhoneNumber": {
								"path": "PhoneNumber"
							},
							"Account": {
								"path": "Account"
							},
							"Country": {
								"path": "Country"
							}
						}
					}
				}
			},
			"dependencies": {
				"GridDetail_dm1myagDS": [
					{
						"attributePath": "Contact",
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