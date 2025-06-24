define("PageWithTabsFreedomTemplate", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"columns": [
						"298px",
						"minmax(64px, 1fr)"
					]
				}
			},
			{
				"operation": "insert",
				"name": "TagSelect",
				"values": {
					"type": "crt.TagSelect",
					"recordId": "$Id"
				},
				"parentName": "CardToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CardButtonToggleGroup",
				"values": {
					"for": "CardToggleTabPanel",
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"stretch": true,
					"items": []
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SideAreaProfileContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": "minmax(64px, 1fr)",
					"gap": {
						"columnGap": "large"
					},
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": []
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CenterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"stretch": true,
					"items": []
				},
				"parentName": "CardContentWrapper",
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
					"items": []
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabs",
				"values": {
					"type": "crt.TabPanel",
					"items": []
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTab",
				"values": {
					"caption": "#ResourceString(GeneralInfoTab_caption)#",
					"type": "crt.TabContainer",
					"items": []
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralInfoTabContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(64px, 1fr)",
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large"
					},
					"items": []
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
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
					]
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
					"dataSourceName": null,
					"entitySchemaName": "#DataSourceEntityName()#"
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
					"caption": "#ResourceString(AttachmentAddButtonCaption)#",
					"icon": "upload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.UploadFileRequest",
						"params": {
							"viewElementName": "AttachmentList"
						}
					}
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
					"caption": "#ResourceString(AttachmentRefreshButtonCaption)#",
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
							"dataSourceName": "AttachmentListDS"
						}
					}
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
					"AttachmentList": {
						"isCollection": true,
						"modelConfig": {
							"path": "AttachmentListDS",
							"sortingConfig": {
								"default": [
									{
										"columnName": "CreatedOn",
										"direction": "desc"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"AttachmentListDS_Name": {
									"modelConfig": {
										"path": "AttachmentListDS.Name"
									}
								},
								"AttachmentListDS_CreatedOn": {
									"modelConfig": {
										"path": "AttachmentListDS.CreatedOn"
									}
								},
								"AttachmentListDS_CreatedBy": {
									"modelConfig": {
										"path": "AttachmentListDS.CreatedBy"
									}
								},
								"AttachmentListDS_Size": {
									"modelConfig": {
										"path": "AttachmentListDS.Size"
									}
								},
								"AttachmentListDS_Id": {
									"modelConfig": {
										"path": "AttachmentListDS.Id"
									}
								}
							}
						}
					},
					"Id": {
						"modelConfig": {
							"path": "#PrimaryDataSourceName()#.Id"
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
						"AttachmentListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SysFile",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									},
									"CreatedBy": {
										"path": "CreatedBy"
									},
									"Size": {
										"path": "Size"
									}
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