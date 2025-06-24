define("Playbooks_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "TagInRecord"
				}
			},
			{
				"operation": "remove",
				"name": "MainContainer"
			},
			{
				"operation": "remove",
				"name": "CardContentWrapper"
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "remove",
				"name": "CenterContainer"
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
				"name": "CenterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"layoutConfig": {},
					"stretch": true,
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "small",
						"bottom": "none",
						"left": "small"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CardContentContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"fitContent": false,
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
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CardContentTopContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
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
					"label": "$Resources.Strings.CrtPlaybookDS_Name_h04v63v",
					"labelPosition": "above",
					"control": "$CrtPlaybookDS_Name_h04v63v",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CardContentTopContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Object",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CrtPlaybookDS_Object_zqbpkep",
					"labelPosition": "above",
					"control": "$CrtPlaybookDS_Object_zqbpkep",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "CardContentTopContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DynamicCase",
				"values": {
					"layoutConfig": {
						"column": 3,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(DynamicCase_label)#",
					"labelPosition": "above",
					"control": "$CrtPlaybookDS_DcmCase",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"mode": "List"
				},
				"parentName": "CardContentTopContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_RelatedArticles",
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
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"alignItems": "stretch",
					"layoutConfig": {},
					"stretch": true
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(RelatedArticlesExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "none",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_RelatedArticles",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesToolsContainer",
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
				"parentName": "RelatedArticlesExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesToolsFlexContainer",
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
				"parentName": "RelatedArticlesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelatedArticlesRefreshButton_caption)#",
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
							"dataSourceName": "RelatedArticlesListDS"
						}
					},
					"layoutConfig": {},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "RelatedArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelatedArticlesSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"layoutConfig": {},
					"visible": true
				},
				"parentName": "RelatedArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesExportDataMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesExportDataMenuItem_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RelatedArticlesList",
							"filters": "$RelatedArticlesList | crt.ToCollectionFilters : 'RelatedArticlesList' : $RelatedArticlesList_SelectionState"
						}
					}
				},
				"parentName": "RelatedArticlesSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesImportDataMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesImportDataMenuItem_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "PlaybookStage"
						}
					},
					"visible": true
				},
				"parentName": "RelatedArticlesSettingsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(RelatedArticlesSearchFilter_placeholder)#",
					"iconOnly": true,
					"layoutConfig": {},
					"targetAttributes": [
						"RelatedArticlesList"
					]
				},
				"parentName": "RelatedArticlesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesList",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$RelatedArticlesList",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "RelatedArticlesListDS_Id",
					"columns": [
						{
							"id": "dfad2fd4-197e-9e44-03cd-5e8949722645",
							"code": "RelatedArticlesListDS_DcmStageValue",
							"path": "DcmStageValue",
							"caption": "#ResourceString(RelatedArticlesListDS_DcmStageValue)#",
							"dataValueType": 0,
							"width": 358
						},
						{
							"id": "27e82608-51d3-b6b0-d393-e7ad84845839",
							"code": "RelatedArticlesListDS_KnowledgeBase",
							"path": "KnowledgeBase",
							"caption": "#ResourceString(RelatedArticlesListDS_KnowledgeBase)#",
							"dataValueType": 10,
							"referenceSchemaName": "KnowledgeBase",
							"width": 358
						}
					],
					"activeRow": "$RelatedArticlesList_ActiveRow",
					"selectionState": "$RelatedArticlesList_SelectionState",
					"_selectionOptions": {
						"attribute": "RelatedArticlesList_SelectionState"
					},
					"bulkActions": []
				},
				"parentName": "RelatedArticlesExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesList_AddTagAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesAddTagAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "RelatedArticlesListDS",
							"filters": "$RelatedArticlesList | crt.ToCollectionFilters : 'RelatedArticlesList' : $RelatedArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $RelatedArticlesList_SelectionState"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "RelatedArticlesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesList_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesRemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "RelatedArticlesListDS",
							"filters": "$RelatedArticlesList | crt.ToCollectionFilters : 'RelatedArticlesList' : $RelatedArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $RelatedArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RelatedArticlesList_AddTagAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RelatedArticlesList",
							"filters": "$RelatedArticlesList | crt.ToCollectionFilters : 'RelatedArticlesList' : $RelatedArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RelatedArticlesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedArticlesList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedArticlesList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "RelatedArticlesListDS",
							"filters": "$RelatedArticlesList | crt.ToCollectionFilters : 'RelatedArticlesList' : $RelatedArticlesList_SelectionState | crt.SkipIfSelectionEmpty : $RelatedArticlesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RelatedArticlesList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
				"values": {
					"type": "crt.TabPanel",
					"items": [],
					"mode": "toggle",
					"layoutConfig": {
						"maxWidth": 368,
						"minWidth": 368
					},
					"stretch": true,
					"classes": [
						"card-toggle-tab-panel",
						"container-background-color-primary",
						"container-border-area"
					],
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FeedTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"tools": [],
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"iconPosition": "left-icon",
					"icon": "feed-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Feed",
				"values": {
					"type": "crt.Feed",
					"feedType": "Record",
					"primaryColumnValue": "$Id",
					"cardState": "$CardState",
					"dataSourceName": "CrtPlaybookDS",
					"entitySchemaName": "CrtPlaybook"
				},
				"parentName": "FeedTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "FeedTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FeedTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(FeedTabContainerCaption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "FeedTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"iconPosition": "left-icon",
					"icon": "attachments-icon",
					"tools": []
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AttachmentList",
				"values": {
					"type": "crt.FileList",
					"masterRecordColumnValue": "$Id",
					"recordColumnName": "RecordId",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"items": "$AttachmentList",
					"primaryColumnName": "AttachmentListDS_Id",
					"columns": [
						{
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					],
					"viewType": "gallery",
					"tileSize": "small"
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "AttachmentsTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentsTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#ResourceString(AttachmentsTabContainerCaption)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start"
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AttachmentAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AttachmentAddButton_caption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "AttachmentList"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AttachmentRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(AttachmentRefreshButton_caption)#",
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
							"dataSourceName": "AttachmentListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "AttachmentsTabContainerHeaderContainer",
				"propertyName": "items",
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
					"CrtPlaybookDS_Name_h04v63v": {
						"modelConfig": {
							"path": "CrtPlaybookDS.Name"
						}
					},
					"CrtPlaybookDS_Object_zqbpkep": {
						"modelConfig": {
							"path": "CrtPlaybookDS.Object"
						}
					},
					"CrtPlaybookDS_DcmCase": {
						"modelConfig": {
							"path": "CrtPlaybookDS.DcmCase"
						}
					},
					"RelatedArticlesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "RelatedArticlesListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "DcmStageValue"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"RelatedArticlesListDS_DcmStageValue": {
									"modelConfig": {
										"path": "RelatedArticlesListDS.DcmStageValue"
									}
								},
								"RelatedArticlesListDS_KnowledgeBase": {
									"modelConfig": {
										"path": "RelatedArticlesListDS.KnowledgeBase"
									}
								},
								"RelatedArticlesListDS_Id": {
									"modelConfig": {
										"path": "RelatedArticlesListDS.Id"
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
					"primaryDataSourceName": "CrtPlaybookDS",
					"dependencies": {
						"RelatedArticlesListDS": [
							{
								"attributePath": "Playbook",
								"relationPath": "CrtPlaybookDS.Id"
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
					"CrtPlaybookDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "CrtPlaybook"
						}
					},
					"RelatedArticlesListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "PlaybookStage",
							"attributes": {
								"DcmStageValue": {
									"path": "DcmStageValue"
								},
								"KnowledgeBase": {
									"path": "KnowledgeBase"
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