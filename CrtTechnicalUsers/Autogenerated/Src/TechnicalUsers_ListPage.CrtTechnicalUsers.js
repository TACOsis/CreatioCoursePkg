define("TechnicalUsers_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"direction": "column",
					"alignItems": "stretch",
					"visible": true,
					"borderRadius": "none",
					"gap": "none"
				}
			},
			{
				"operation": "move",
				"name": "TitleContainer",
				"parentName": "TopHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "remove",
				"name": "ActionButtonsContainer",
				"properties": [
					"layoutConfig"
				]
			},
			{
				"operation": "move",
				"name": "ActionButtonsContainer",
				"parentName": "TopHeaderContainer",
				"propertyName": "items",
				"index": 1
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
				"name": "MainContainer",
				"values": {
					"color": "transparent",
					"visible": true,
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "move",
				"name": "MainFilterContainer",
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
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
				"name": "LeftFilterContainerInner",
				"values": {
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "LookupQuickFilterByTag",
				"values": {
					"config": {
						"caption": "#ResourceString(LookupQuickFilterByTag_config_caption)#",
						"hint": "#ResourceString(LookupQuickFilterByTag_config_hint)#",
						"icon": "tag-icon",
						"iconPosition": "left-icon",
						"entitySchemaName": "Tag_Virtual_Schema",
						"defaultValue": [],
						"recordsFilter": null
					}
				}
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
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "center",
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
					"gap": "small",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start"
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "VwTechnicalUser",
					"borderRadius": "medium"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"visible": true,
					"borderRadius": "medium",
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
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "1be45308-25b8-09ff-3d25-d05ffbdba310",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "62347dcc-0a73-93b1-3a5e-b17d8b64e592",
							"code": "PDS_Active",
							"caption": "#ResourceString(PDS_Active)#",
							"dataValueType": 12
						},
						{
							"id": "7cb7a77c-9ad4-bc67-334b-507222801aea",
							"code": "PDS_SysCulture",
							"caption": "#ResourceString(PDS_SysCulture)#",
							"dataValueType": 10
						},
						{
							"id": "90e5cc07-2b8d-af1a-7620-7eb4162361cc",
							"code": "PDS_TimeZone",
							"caption": "#ResourceString(PDS_TimeZone)#",
							"dataValueType": 10
						},
						{
							"id": "88fced5d-d3aa-a71c-a67f-3a578f39adc4",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "1375d5e3-ed30-d362-9b43-079b25dab610",
							"code": "PDS_CreatedBy",
							"caption": "#ResourceString(PDS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"fitContent": true
				}
			},
			{
				"operation": "insert",
				"name": "TopHeaderContainer",
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
					"alignItems": "center",
					"justifyContent": "space-between",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_Back",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Back_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"icon": "back-button-icon",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QuickFilter_ActiveUsers",
				"values": {
					"type": "crt.QuickFilter",
					"config": {
						"caption": "#ResourceString(QuickFilter_ActiveUsers_config_caption)#",
						"hint": "",
						"defaultValue": false,
						"approachState": true,
						"icon": "settings-button-icon",
						"iconPosition": "left-icon"
					},
					"_filterOptions": {
						"expose": [
							{
								"attribute": "QuickFilter_ActiveUsers_Items",
								"converters": [
									{
										"converter": "crt.QuickFilterAttributeConverter",
										"args": [
											{
												"target": {
													"viewAttributeName": "Items",
													"customFilter": {
														"items": {
															"5aa36d9e-f590-4d9d-9ec5-057990e87920": {
																"filterType": 1,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "Active"
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
														"rootSchemaName": "VwTechnicalUser"
													},
													"dependencyFilters": null
												},
												"quickFilterType": "custom",
												"config": {
													"caption": "#ResourceString(QuickFilter_wxi6or9_caption)#",
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
							"QuickFilter_ActiveUsers_Value"
						]
					},
					"filterType": "custom",
					"visible": true
				},
				"parentName": "LeftFilterContainerInner",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CurrentLimitStateLabel",
				"values": {
					"type": "crt.Label",
					"caption": "$CurrentLimitStateLabelCaption",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CurrentLimitStateValue",
				"values": {
					"type": "crt.Label",
					"caption": "$CurrentLimitStateLabelValue",
					"labelType": "body",
					"labelThickness": "bold",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainButtonToggleGroup",
				"values": {
					"for": "HelpTabPanel",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "HelpTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"fitContent": true,
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"layoutConfig": {
						"width": 368
					}
				},
				"parentName": "ContentContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "HelpTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(HelpTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "book-open-icon"
				},
				"parentName": "HelpTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTopFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "HelpTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabTitleLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(TabTitleLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TabTopFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpContentFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "HelpTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpContentLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpContentLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpContentLabel2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpContentLabel2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "HelpContentLabel3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpContentLabel3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "HelpContentLabel4",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpContentLabel4_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "HelpContentLabel5",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpContentLabel5_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "AcademyLinkFlexContainer",
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
					"alignItems": "flex-start",
					"justifyContent": "start",
					"gap": "extra-small",
					"wrap": "wrap"
				},
				"parentName": "HelpContentFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "AcademyLinkCaptionLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(AcademyLinkCaptionLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "AcademyLinkFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AcademyURL",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(AcademyLink)#",
					"href": "https://academy.creatio.com/documents?id=2532&target=_blank",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "AcademyLinkFlexContainer",
				"propertyName": "items",
				"index": 1
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
					},
					"CurrentLimitStateLabelCaption": {
						"value": "demo"
					},
					"CurrentLimitStateLabelValue": {
						"value": "demo"
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
					"PDS_Active": {
						"modelConfig": {
							"path": "PDS.Active"
						}
					},
					"PDS_SysCulture": {
						"modelConfig": {
							"path": "PDS.SysCulture"
						}
					},
					"PDS_TimeZone": {
						"modelConfig": {
							"path": "PDS.TimeZone"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"PDS_CreatedBy": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
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
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						},
						{
							"loadOnChange": true,
							"name": "Items_PredefinedFilter"
						},
						{
							"name": "QuickFilter_ActiveUsers_Items",
							"loadOnChange": true
						},
						{
							"name": "FolderTree_active_folder_filter",
							"loadOnChange": true
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
					"entitySchemaName": "VwTechnicalUser",
					"attributes": {
						"Name": {
							"path": "Name"
						},
						"Active": {
							"path": "Active"
						},
						"SysCulture": {
							"path": "SysCulture"
						},
						"TimeZone": {
							"path": "TimeZone"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						},
						"CreatedBy": {
							"path": "CreatedBy"
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
                const handlerChain = sdk.HandlerChainService.instance;
                return await handlerChain.process({
							type: 'crt.UpdateTechnicalUserLimitStateRequest', 
							$context: request.$context
						});
			}
		},
          {
			request: "crt.LoadDataRequest",
			handler: async (request, next) => {
                await next?.handle(request);
                const handlerChain = sdk.HandlerChainService.instance;
                return await handlerChain.process({
							type: 'crt.UpdateTechnicalUserLimitStateRequest', 
							$context: request.$context
						});
			}
		},
           {
			request: "crt.HandleViewModelResumeRequest",
			handler: async (request, next) => {
                await next?.handle(request);
                const handlerChain = sdk.HandlerChainService.instance;
                return await handlerChain.process({
							type: 'crt.UpdateTechnicalUserLimitStateRequest', 
							$context: request.$context
						});
			}
		},
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});