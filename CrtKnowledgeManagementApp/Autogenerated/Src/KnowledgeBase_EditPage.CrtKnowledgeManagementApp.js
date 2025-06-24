define("KnowledgeBase_EditPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TagSelect",
				"values": {
					"tagInRecordSourceSchemaName": "KnowledgeBaseInTagV2"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"columns": [
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
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
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
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "KnowledgeBase",
					"columns": [
						{
							"id": "d0a08d71-4046-3691-5173-304759730367",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "b1f8b6de-2b38-c5eb-d1f9-437fde443644",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "0f4c3a9b-d4d5-6ffe-f3b0-ab46c15afddf",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "3a2f72d3-611f-591e-aeb6-d9160ac2e566",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true
				}
			},
			{
				"operation": "insert",
				"name": "ArticleHeaderPropertiesContainer",
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
					"layoutConfig": {}
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.StringAttribute_bp9x9vo",
					"labelPosition": "above",
					"control": "$StringAttribute_bp9x9vo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ArticleHeaderPropertiesContainer",
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
					"label": "$Resources.Strings.LookupAttribute_gv59zcz",
					"labelPosition": "above",
					"control": "$LookupAttribute_gv59zcz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ArticleHeaderPropertiesContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_u9rrs6z",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_u9rrs6z_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_MainArea",
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
					"borderRadius": "small",
					"visible": true,
					"alignItems": "stretch",
					"stretch": true
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MainAreaFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_MainArea",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExportedNoficationArea",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"color": "primary",
					"visible": false,
					"borderRadius": "medium",
					"padding": {
						"top": "small",
						"right": "small",
						"bottom": "small",
						"left": "small"
					},
					"styles": {
						"border-color": "#B3CAF3"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "MainAreaFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotificationIcon",
				"values": {
					"type": "crt.ImageInput",
					"label": "#ResourceString(ImageInput_oz7tq48_label)#",
					"value": "../img/entity/hash/SysImage/Data/f115f828-db08-6462-7421-e18671b62f93",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"customWidth": "16px",
					"customHeight": "16px",
					"borderRadius": "medium",
					"positioning": "cover",
					"visible": true,
					"tooltip": ""
				},
				"parentName": "ExportedNoficationArea",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExportedNoficationText",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ExportedNoficationText_caption)#)#",
					"labelType": "caption-large",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ExportedNoficationArea",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Resolution",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_uo3a61k",
					"labelPosition": "hidden",
					"control": "$StringAttribute_uo3a61k",
					"visible": true,
					"placeholder": "",
					"tooltip": "",
					"toolbarDisplayMode": null,
					"readonly": false,
					"plainText": "$StringAttribute_fg3e4gh",
					"fileEntitySchema": "KnowledgeBaseFile",
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "KnowledgeBaseFile",
						"recordEntitySchemaName": "KnowledgeBase",
						"recordColumnName": "KnowledgeBase"
					},
					"alwaysShowToolbar": true,
					"extraPlugins": [
						"codesnippet",
						"blockquote",
						"crttableofcontents",
						"creatiovideo"
					]
				},
				"parentName": "MainAreaFlexContainer",
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
					"StringAttribute_uo3a61k": {
						"modelConfig": {
							"path": "KnowledgeBaseDS.Notes"
						}
					},
					"LookupAttribute_gv59zcz": {
						"modelConfig": {
							"path": "KnowledgeBaseDS.Type"
						}
					},
					"StringAttribute_bp9x9vo": {
						"modelConfig": {
							"path": "KnowledgeBaseDS.Name"
						}
					},
					"StringAttribute_fg3e4gh": {
						"modelConfig": {
							"path": "KnowledgeBaseDS.NotHtmlNote"
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
					"primaryDataSourceName": "KnowledgeBaseDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"KnowledgeBaseDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "KnowledgeBase"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"AttachmentListDS",
					"config"
				],
				"values": {
					"entitySchemaName": "KnowledgeBaseFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});