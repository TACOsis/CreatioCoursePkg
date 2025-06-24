define("AppFeature_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text",
					"clicked": [
						{
							"request": "crt.SaveRecordRequest"
						},
						{
							"request": "crt.LoadDataRequest",
							"params": {
								"config": {
									"loadType": "reload",
									"useLastLoadParameters": true
								},
								"dataSourceName": "PDS"
							}
						}
					]
				}
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "remove",
				"name": "CardButtonToggleGroup"
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"columns": [
						"298px",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
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
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "remove",
				"name": "CardContentContainer"
			},
			{
				"operation": "remove",
				"name": "Tabs"
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
				"operation": "remove",
				"name": "CardToggleTabPanel"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "Label_56ivm9v",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_56ivm9v_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true,
					"layoutConfig": {}
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_lhecmj6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_lhecmj6_caption)#",
					"color": "default",
					"disabled": false,
					"iconPosition": "left-icon",
					"clicked": {
						"request": "ft.RefreshCurrentFeatureCacheRequest"
					},
					"clickMode": "default",
					"icon": "reload-button-icon"
				},
				"parentName": "MainHeaderBottom",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Input_bmj6xsw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.Code",
					"labelPosition": "above",
					"control": "$Code",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_8diuphi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_Source_w1xq78q",
					"labelPosition": "above",
					"control": "$PDS_Source_w1xq78q",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_3heb02b",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 3
					},
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.PDS_Description_43u612b",
					"labelPosition": "above",
					"control": "$PDS_Description_43u612b",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Checkbox_ph0l6v3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_State_w8zq4id",
					"labelPosition": "right",
					"control": "$PDS_State_w8zq4id",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Checkbox_c3drkj6",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_StateForCurrentUser_my4tlvy",
					"labelPosition": "right",
					"control": "$PDS_StateForCurrentUser_my4tlvy",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_3ucdpjq",
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
					"alignItems": "stretch",
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 5,
						"rowSpan": 1
					}
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_car4a7t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_car4a7t_caption)#)#",
					"labelType": "headline-2",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GridContainer_3ucdpjq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_umrgng3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_umrgng3_title)#",
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
				"parentName": "GridContainer_3ucdpjq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_w2py4t8",
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
				"parentName": "ExpansionPanel_umrgng3",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3bvquxf",
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
				"parentName": "GridContainer_w2py4t8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_qfdv96u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_qfdv96u_caption)#",
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
							"dataSourceName": "GridDetail_j8q9zz4DS"
						}
					}
				},
				"parentName": "FlexContainer_3bvquxf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_p6qft87",
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
				"parentName": "ExpansionPanel_umrgng3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DataGrid_z88uf4i",
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
							"selection": false
						}
					},
					"rowToolbarItems": [
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(OpenFeatureStateActionCaption)#",
							"icon": "edit-row-action",
							"visible": true,
							"disabled": "$Items.PrimaryModelMode | crt.IsEqual : 'create'",
							"clicked": {
								"request": "crt.UpdateRecordRequest",
								"params": {
									"itemsAttributeName": "DataGrid_z88uf4i",
									"recordId": "$GridDetail_j8q9zz4_ActiveRow"
								},
								"useRelativeContext": true
							}
						},
						{
							"type": "crt.MenuItem",
							"caption": "#ResourceString(DeleteFeatureStateFromDbActionCaption)#",
							"icon": "delete-row-action",
							"clicked": {
								"request": "crt.DeleteFeatureStateRequest",
								"params": {
									"itemsAttributeName": "DataGrid_z88uf4i",
									"recordId": "$GridDetail_j8q9zz4_ActiveRow"
								},
								"useRelativeContext": false
							}
						}
					],
					"items": "$GridDetail_j8q9zz4",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_j8q9zz4DS_Id",
					"columns": [
						{
							"id": "be530c95-8bc2-5e9a-d59e-0cf996a824de",
							"code": "GridDetail_j8q9zz4DS_AdminUnit",
							"path": "AdminUnit",
							"caption": "#ResourceString(GridDetail_j8q9zz4DS_AdminUnit)#",
							"dataValueType": 10,
							"referenceSchemaName": "SysAdminUnit",
							"width": 388
						},
						{
							"id": "87c9b1c9-2f10-8195-9246-34b7d37f6d71",
							"code": "GridDetail_j8q9zz4DS_FeatureState",
							"path": "FeatureState",
							"caption": "#ResourceString(GridDetail_j8q9zz4DS_FeatureState)#",
							"dataValueType": 12
						}
					],
					"activeRow": "$GridDetail_j8q9zz4_ActiveRow",
					"selectionState": "$GridDetail_j8q9zz4_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_j8q9zz4_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "GridContainer_p6qft87",
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
					"Code": {
						"modelConfig": {
							"path": "PDS.Code"
						},
						"validators": {
							"CodeAllowedSymbolsValidator": {
								"type": "usr.CodeValidator",
								"params": {
									"message": "#ResourceString(InvalidCode)#"
								}
							}
						}
					},
					"PDS_Source_w1xq78q": {
						"modelConfig": {
							"path": "PDS.Source"
						}
					},
					"PDS_Description_43u612b": {
						"modelConfig": {
							"path": "PDS.Description"
						}
					},
					"PDS_State_w8zq4id": {
						"modelConfig": {
							"path": "PDS.State"
						}
					},
					"PDS_StateForCurrentUser_my4tlvy": {
						"modelConfig": {
							"path": "PDS.StateForCurrentUser"
						}
					},
					"GridDetail_j8q9zz4": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_j8q9zz4DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "AdminUnit"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_j8q9zz4DS_AdminUnit": {
									"modelConfig": {
										"path": "GridDetail_j8q9zz4DS.AdminUnit"
									}
								},
								"GridDetail_j8q9zz4DS_FeatureState": {
									"modelConfig": {
										"path": "GridDetail_j8q9zz4DS.FeatureState"
									}
								},
								"GridDetail_j8q9zz4DS_Id": {
									"modelConfig": {
										"path": "GridDetail_j8q9zz4DS.Id"
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
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_j8q9zz4DS": [
							{
								"attributePath": "Feature",
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
							"entitySchemaName": "AppFeature"
						},
						"scope": "page"
					},
					"GridDetail_j8q9zz4DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "AppFeatureState",
							"attributes": {
								"AdminUnit": {
									"path": "AdminUnit"
								},
								"FeatureState": {
									"path": "FeatureState"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "ft.RefreshCurrentFeatureCacheRequest",
				handler: async (request, next) => {
					const httpClientService = new devkit.HttpClientService();
					const featureCode = btoa(await request.$context.Code);
					const endpoint = `/rest/FeatureService/ClearFeaturesCacheForAllUsers/${featureCode}`;
					const response = await httpClientService.get(endpoint);
					const handlerChain = devkit.HandlerChainService.instance;
					await handlerChain.process({
						type: 'crt.CancelRecordChangesRequest',
						$context: request.$context
					});
					Terrasoft.showInformation(response.body);
					return next?.handle(request);
				}
			},
			{
				request: "crt.DeleteFeatureStateRequest",
				handler: async (request) => {
					const handlerChain = devkit.HandlerChainService.instance;
					try {
						const result = await handlerChain.process({
							type: 'crt.DeleteDataRequest',
							$context: request.$context,
							dataSourceName: "GridDetail_j8q9zz4DS",
							parameters: [
								{
									type: devkit.ModelParameterType.PrimaryColumnValue,
									value: '@requestPayload.primaryColumnValue',
								},
							],
							config: {
								payload: {
									primaryColumnValue: request.recordId,
								},
							},
						});
						if (!result.success) {
							Terrasoft.showErrorMessage(result.errorInfo);
							return;
						}
					} catch (e) {
						Terrasoft.showErrorMessage(e?.errorInfo);
						return;
					}
					await handlerChain.process({
						type: 'crt.LoadDataRequest',
						"config": {
							"loadType": "reload"
						},
						"dataSourceName": "GridDetail_j8q9zz4DS",
						$context: request.$context
					});
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
		    "usr.CodeValidator": {
				"validator": function (config) {
					return function (control) {
						if(!/^[a-zA-Z]+[a-zA-Z0-9-_.]*$/.test(control.value)) {
							return { "usr.CodeValidator": { message: config.message } };
						}
						return null;
					};
				},
			    "params": [
			        {
			            "name": "message"
			        }
			    ],
			    "async": false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});