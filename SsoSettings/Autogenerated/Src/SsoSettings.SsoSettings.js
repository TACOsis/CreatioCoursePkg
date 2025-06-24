define("SsoSettings", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "SsoIdentityProvider"
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"iconPosition": "left-icon",
					"clickMode": "default",
					"menuItems": [],
					"icon": "add-button-icon"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"color": "TRANSPARENT",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small"
				}
			},
			{
				"operation": "remove",
				"name": "DataTable"
			},
			{
				"operation": "insert",
				"name": "SaveButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SaveButton_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"clicked": {
						"request": "crt.SaveSpDataRequest"
					},
					"visible": "$IsSpChanged",
					"clickMode": "default",
					"icon": "save-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CloseButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(CloseButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default",
					"icon": "close-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_o0ikzko",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
						"rowGap": "none"
					},
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "none",
						"left": "medium"
					}
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_ykdbf77",
				"values": {
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
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "small",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_o0ikzko",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_qr7du0b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "small"
					}
				},
				"parentName": "GridContainer_ykdbf77",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdditionalInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#ResourceString(AdditionalInfoLabel_caption)#",
					"labelType": "headline-1-small",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0B8500",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "GridContainer_qr7du0b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_k2oal89",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					}
				},
				"parentName": "GridContainer_ykdbf77",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AzureSsoArticleButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(AzureSsoArticleButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.AcademyHelpLinkRequest",
						"params": {
							"contextHelpCode": "AzureSsoSetup"
						}
					}
				},
				"parentName": "GridContainer_k2oal89",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdfsSsoArticleButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(AdfsSsoArticleButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.AcademyHelpLinkRequest",
						"params": {
							"contextHelpCode": "AdfsSsoSetup"
						}
					}
				},
				"parentName": "GridContainer_k2oal89",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "OneLoginSsoArticleButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(OneLoginSsoArticleButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.AcademyHelpLinkRequest",
						"params": {
							"contextHelpCode": "OneLoginSsoSetup"
						}
					}
				},
				"parentName": "GridContainer_k2oal89",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "JitArticleButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(JitArticleButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"clicked": {
						"request": "crt.AcademyHelpLinkRequest",
						"params": {
							"contextHelpCode": "JitSsoSetup"
						}
					}
				},
				"parentName": "GridContainer_k2oal89",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_qm5zweg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_ykdbf77",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SsoIdentityProvider",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"loading": false,
					"control": "$SpIdentityProviderAttribute",
					"label": "$Resources.Strings.SpIdentityProviderAttribute",
					"labelPosition": "above",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"placeholder": ""
				},
				"parentName": "GridContainer_qm5zweg",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_d2dhzkl",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
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
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "large",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GridContainer_qm5zweg",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TestSsoButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(TestSsoButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.TestSsoRequest"
					},
					"visible": "$IsTestSsoVisible"
				},
				"parentName": "GridContainer_d2dhzkl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_zu5iejv",
				"values": {
					"layoutConfig": {
						"column": 2,
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
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "small"
				},
				"parentName": "GridContainer_o0ikzko",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_u8t09j0",
				"values": {
					"type": "crt.DataGrid",
					"items": "$DataGrid_u8t09j0",
					"primaryColumnName": "SsoIdentityProvider_DataGrid_Id",
					"columns": [
						{
							"id": "cc5ffeaf-4137-9b22-1055-b73d8f546bfd",
							"code": "SsoIdentityProvider_DataGrid_DisplayName",
							"caption": "#ResourceString(SsoIdentityProvider_DataGrid_DisplayName)#",
							"dataValueType": 28,
							"width": 303
						},
						{
							"id": "80ed2c04-b4d4-8fbf-8c15-d7b0f0986fcc",
							"code": "SsoIdentityProvider_DataGrid_Name",
							"caption": "#ResourceString(SsoIdentityProvider_DataGrid_Name)#",
							"dataValueType": 28
						},
						{
							"id": "1e01a23c-d740-4d05-3125-bdc8dacff0a8",
							"code": "SsoIdentityProvider_DataGrid_Type",
							"caption": "#ResourceString(SsoIdentityProvider_DataGrid_Type)#",
							"dataValueType": 10
						}
					],
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 10
					}
				},
				"parentName": "GridContainer_zu5iejv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_UseJit",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 11,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "#ResourceString(Checkbox_UseJit_label)#",
					"ariaLabel": "#ResourceString(Checkbox_UseJit_ariaLabel)#",
					"labelPosition": "right",
					"placeholder": "",
					"control": "$SpUseJitAttribute"
				},
				"parentName": "GridContainer_zu5iejv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_SamlAttributes",
				"values": {
					"type": "crt.DataGrid",
					"items": "$DataGrid_SamlAttributes",
					"primaryColumnName": "DataGrid_SamlAttributesDS_Id",
					"columns": [
						{
							"id": "53d8f061-e0e2-d394-f3df-20286b196728",
							"code": "DataGrid_SamlAttributesDS_SAMLFieldName",
							"caption": "#ResourceString(DataGrid_SamlAttributesDS_SAMLFieldName)#",
							"dataValueType": 28
						},
						{
							"id": "94223bd4-bbaa-ba81-6c02-b755816dad6b",
							"code": "DataGrid_SamlAttributesDS_ContactFieldName",
							"caption": "#ResourceString(DataGrid_SamlAttributesDS_ContactFieldName)#",
							"dataValueType": 28
						},
						{
							"id": "05718346-e27e-3cdf-04f8-230e64d6813b",
							"code": "DataGrid_SamlAttributesDS_ColumnDefaultValue",
							"caption": "#ResourceString(DataGrid_SamlAttributesDS_ColumnDefaultValue)#",
							"dataValueType": 28
						}
					],
					"layoutConfig": {
						"column": 1,
						"row": 12,
						"colSpan": 1,
						"rowSpan": 10
					},
					"visible": "$SpUseJitAttribute",
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DataGrid_RowToolbar_Open)#",
							"icon": "edit-row-action",
							"clicked": {
								"request": "crt.UpdateRecordRequest",
								"params": {
									"itemsAttributeName": "DataGrid_SamlAttributes",
									"recordId": "$DataGrid_SamlAttributes.DataGrid_SamlAttributesDS_Id",
									"scopes": [
										"SsoSettings"
									]
								},
								"useRelativeContext": true
							}
						}],
					"features": {
						"editable": false
					}
				},
				"parentName": "GridContainer_zu5iejv",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"DataGrid_u8t09j0": {
					"isCollection": true,
					"modelConfig": {
						"path": "SsoIdentityProvider_DataGrid",
						"sortingConfig": {
							"default": [
								{
									"direction": "desc",
									"columnName": "Name"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"SsoIdentityProvider_DataGrid_DisplayName": {
								"modelConfig": {
									"path": "SsoIdentityProvider_DataGrid.DisplayName"
								}
							},
							"SsoIdentityProvider_DataGrid_Name": {
								"modelConfig": {
									"path": "SsoIdentityProvider_DataGrid.Name"
								}
							},
							"SsoIdentityProvider_DataGrid_Type": {
								"modelConfig": {
									"path": "SsoIdentityProvider_DataGrid.Type"
								}
							},
							"SsoIdentityProvider_DataGrid_Id": {
								"modelConfig": {
									"path": "SsoIdentityProvider_DataGrid.Id"
								}
							}
						}
					}
				},
				"SpIdentityProviderAttribute": {
					"modelConfig": {
						"path": "SsoServiceProviderDS.SsoIdentityProvider"
					}
				},
				"SpIdAttribute": {
					"modelConfig": {
						"path": "SsoServiceProviderDS.Id"
					}
				},
				"IsSpChanged": {},
				"IsTestSsoVisible": {},
				"DataGrid_SamlAttributes": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_SamlAttributesDS",
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "DataGrid_SamlAttributes_PredefinedFilter"
							}
						]
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_SamlAttributesDS_SAMLFieldName": {
								"modelConfig": {
									"path": "DataGrid_SamlAttributesDS.SAMLFieldName"
								}
							},
							"DataGrid_SamlAttributesDS_ContactFieldName": {
								"modelConfig": {
									"path": "DataGrid_SamlAttributesDS.ContactFieldName"
								}
							},
							"DataGrid_SamlAttributesDS_ColumnDefaultValue": {
								"modelConfig": {
									"path": "DataGrid_SamlAttributesDS.ColumnDefaultValue"
								}
							},
							"DataGrid_SamlAttributesDS_Id": {
								"modelConfig": {
									"path": "DataGrid_SamlAttributesDS.Id"
								}
							}
						}
					}
				},
				"DataGrid_SamlAttributes_PredefinedFilter": {
					"value": null
				},
				"SpUseJitAttribute": {
					"modelConfig": {
						"path": "SsoServiceProviderDS.UseJit"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"SsoIdentityProvider_DataGrid": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SsoIdentityProvider",
						"attributes": {
							"DisplayName": {
								"path": "DisplayName"
							},
							"Name": {
								"path": "Name"
							},
							"Type": {
								"path": "Type"
							}
						}
					}
				},
				"SsoServiceProviderDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "SsoServiceProvider"
					}
				},
				"DataGrid_SamlAttributesDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "SAMLFieldNameConverter",
						"attributes": {
							"SAMLFieldName": {
								"path": "SAMLFieldName"
							},
							"ContactFieldName": {
								"path": "ContactFieldName"
							},
							"ColumnDefaultValue": {
								"path": "ColumnDefaultValue"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "SsoServiceProviderDS"
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});