define("AISkills_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CopilotIntent",
							"defaultValues": [
								{
									"attributeName": "Prompt",
									"value": "Describe the user's goal clearly and concisely. Detail the steps needed to achieve the user's goal. Outline the expected result from the LLM. This should include any necessary context or information that the LLM needs to know.\r\n\r\n## General Rules\r\n1. You cannot create new objects without explicitly confirming with the user.\r\n2. Rule 2: ...\r\n3. ...\r\n\r\n## General Restrictions\r\n1. Avoid making assumptions about the user's intent; clarify requests when necessary.\r\n2. Restriction 2: ...\r\n3. ...\r\n\r\n## Requirements for Output\r\n1. The output must be less than 300 symbols and no more than 2-3 sentences.\r\n2. Requirement 2: ...\r\n3. ...\r\n\r\n## Process Flow\r\n1. Use current page context for read page data and fields. Based on that information ...\r\n2. Step 2: ...\r\n3. ..."
								}
							]
						}
					},
					"caption": "#ResourceString(AddButton_caption)#",
					"size": "large",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "remove",
				"name": "ActionButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ExportToExcel"
			},
			{
				"operation": "merge",
				"name": "MainFilterContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "LeftFilterContainer",
				"values": {
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "FolderTreeActions"
			},
			{
				"operation": "remove",
				"name": "LookupQuickFilterByTag"
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "RightFilterContainer",
				"values": {
					"padding": {
						"top": "small",
						"right": "large",
						"bottom": "none",
						"left": "none"
					},
					"gap": "small",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "DataTable_Summaries"
			},
			{
				"operation": "merge",
				"name": "RefreshButton",
				"values": {
					"caption": "#ResourceString(RefreshButton_caption)#",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "PDS"
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "ContentContainer",
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
					"alignItems": "stretch",
					"justifyContent": "start"
				}
			},
			{
				"operation": "remove",
				"name": "FolderTree"
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "3770e176-9d2f-bb25-3ea5-3b0de11e7ad3",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "87927053-2480-61b4-8dad-095198fb097f",
							"code": "PDS_Description",
							"caption": "#ResourceString(PDS_Description)#",
							"dataValueType": 28,
							"width": 700
						},
						{
							"id": "d3838a0e-48e6-4b5e-af82-a9f07bf56089",
							"code": "PDS_Mode",
							"caption": "#ResourceString(PDS_Mode)#",
							"dataValueType": 10,
							"width": 35
						},
						{
							"id": "02d1e3d3-d5bc-c92f-a521-af9b7bcd5442",
							"code": "PDS_Status",
							"caption": "#ResourceString(PDS_Status)#",
							"dataValueType": 10,
							"width": 200
						},
						{
							"id": "96347187-81f6-afe4-887b-439b174f9682",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "55c75b2e-4487-de6b-7b60-f4be07b29116",
							"code": "PDS_ModifiedOn",
							"caption": "#ResourceString(PDS_ModifiedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"features": {
						"rows": {
							"toolbar": false,
							"selection": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"columns": {
							"sorting": true,
							"adding": false
						}
					},
					"bulkActions": [],
					"visible": true,
					"fitContent": true
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Items_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"PDS_Description": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_Mode": {
						"modelConfig": {
							"path": "PDS.Mode"
						}
					},
					"PDS_Status": {
						"modelConfig": {
							"path": "PDS.Status"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_ModifiedOn": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "Name"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "CopilotIntent",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Description": {
							"path": "Description"
						},
						"Mode": {
							"path": "Mode"
						},
						"Status": {
							"path": "Status"
						},
						"CreatedBy": {
							"path": "CreatedBy"
						},
						"ModifiedOn": {
							"path": "ModifiedOn"
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