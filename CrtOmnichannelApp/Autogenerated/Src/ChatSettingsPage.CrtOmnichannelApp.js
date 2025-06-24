define("ChatSettingsPage", /**SCHEMA_DEPS*/["css!ChatSettingsPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "ActionButtonsContainer",
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
					"alignItems": "center",
					"gap": "small"
				}
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "remove",
				"name": "TagSelect"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
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
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "none",
						"right": "none",
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
				"operation": "move",
				"name": "CardContentWrapper",
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "ButtonToggleGroup_dg8da7w",
				"values": {
					"for": "CardToggleTabPanel",
					"fitContent": true,
					"type": "crt.ButtonToggleGroup"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CenterContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": false,
					"wrap": "nowrap",
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
					"gap": "small",
					"stretch": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CardContentContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsExpansionPanel",
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
					"title": "#ResourceString(ChannelsExpansionPanel_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "none",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"stretch": false,
					"alignItems": "stretch"
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsToolsContainer",
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
				"parentName": "ChannelsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsToolsFlexContainer",
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
				"parentName": "ChannelsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ChannelsAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Channel"
						}
					},
					"menuItems": [],
					"clickMode": "default",
					"visible": true
				},
				"parentName": "ChannelsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ChannelsRefreshButton_caption)#",
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
							"dataSourceName": "ChannelsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ChannelsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChannelsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ChannelsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ChannelsSearchFilter_ChannelsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ChannelsList"
										]
									}
								]
							}
						],
						"from": [
							"ChannelsSearchFilter_SearchValue",
							"ChannelsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ChannelsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChannelsInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "ChannelsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ChannelsInfoLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ChannelsInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsListContainer",
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
					"alignItems": "stretch",
					"stretch": false
				},
				"parentName": "ChannelsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChannelsList",
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
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$ChannelsList",
					"selectionState": "$ChannelsList_SelectionState",
					"_selectionOptions": {
						"attribute": "ChannelsList_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ChannelsListDS_Id",
					"columns": [
						{
							"id": "68e46d79-f455-59d7-c404-5537c53d767s3",
							"code": "ValidationStatus",
							"columnType": "tools",
							"cellView": {
								"type": "crt.Placeholder",
								"image": "$ChannelsList.ValidationImage"
							},
							"width": 32
						},
						{
							"id": "498b4e9b-7f6f-d63b-7874-a4d32863ae10",
							"code": "ChannelsListDS_Name",
							"caption": "#ResourceString(ChannelsListDS_Name)#",
							"dataValueType": 30
						},
						{
							"id": "b47618a9-fd4f-d337-ff84-d12bb9cbc577",
							"code": "ChannelsListDS_Provider",
							"path": "Provider",
							"caption": "#ResourceString(ChannelsListDS_Provider)#",
							"dataValueType": 10,
							"referenceSchemaName": "ChannelProvider",
							"width": 273
						},
						{
							"id": "32f49992-df1b-64bd-8fbc-baab546d129c",
							"code": "ChannelsListDS_IsActive",
							"path": "IsActive",
							"caption": "#ResourceString(ChannelsListDS_IsActive)#",
							"dataValueType": 12,
							"width": 197
						},
						{
							"id": "921ebdb0-f89a-ceed-d6bb-dbf65aac1597",
							"code": "ChannelsListDS_ChatQueue",
							"path": "ChatQueue",
							"caption": "#ResourceString(ChannelsListDS_ChatQueue)#",
							"dataValueType": 10,
							"referenceSchemaName": "ChatQueue",
							"width": 306
						}
					],
					"rowToolbarItems": [
    					{
    						"type": "crt.MenuItem",
    						"caption": "#ResourceString(RowToolbar_OpenItem_caption)#",
    						"icon": "edit-row-action",
    						"disabled": "$ChannelsList.PrimaryModelMode | crt.IsEqual : 'create'",
    						"clicked": {
    							"request": "crt.UpdateRecordRequest",
    							"params": {
    								"itemsAttributeName": "ChannelsList",
    								"recordId": "$ChannelsList.ChannelsListDS_Id"
    							},
    							"useRelativeContext": true
    						}
    					},
    					{
    						"type": "crt.MenuItem",
    						"caption": "#ResourceString(RowToolbar_DeleteItem_caption)#",
    						"icon": "delete-row-action",
    						"clicked": {
    							"request": "crt.DeleteRecordRequest",
    							"params": {
    								"itemsAttributeName": "ChannelsList",
    								"recordId": "$ChannelsList.ChannelsListDS_Id"
    							}
    						}
    					}
    				],
				"placeholder": false,
				"bulkActions": [],
				"stretch": false
				},
				"parentName": "ChannelsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChannelsList_ExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ChannelsList",
							"filters": "$ChannelsList | crt.ToCollectionFilters : 'ChannelsList' : $ChannelsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChannelsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChannelsList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChannelsList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "ChannelsListDS",
							"filters": "$ChannelsList | crt.ToCollectionFilters : 'ChannelsList' : $ChannelsList_SelectionState | crt.SkipIfSelectionEmpty : $ChannelsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChannelsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatQueues_ExpansionPanel",
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
					"title": "#ResourceString(ChatQueues_ExpansionPanel_title)#",
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
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatQueuesToolsContainer",
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
				"parentName": "ChatQueues_ExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesToolsFlexContainer",
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
				"parentName": "ChatQueuesToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ChatQueuesAddButton_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "ChatQueue"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ChatQueuesToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ChatQueuesRefreshButton_caption)#",
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
							"dataSourceName": "ChatQueuesListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ChatQueuesToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatQueuesSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ChatQueuesSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ChatQueuesSearchFilter_ChatQueuesList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ChatQueuesList"
										]
									}
								]
							}
						],
						"from": [
							"ChatQueuesSearchFilter_SearchValue",
							"ChatQueuesSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ChatQueuesToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChatQueuesInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "ChatQueues_ExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ChatQueuesInfoLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ChatQueuesInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesListContainer",
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
					"alignItems": "stretch",
					"stretch": false
				},
				"parentName": "ChatQueues_ExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatQueuesList",
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
					"items": "$ChatQueuesList",
					"selectionState": "$ChatQueuesList_SelectionState",
					"_selectionOptions": {
						"attribute": "ChatQueuesList_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ChatQueuesListDS_Id",
					"columns": [
						{
							"id": "01c41d01-32a1-97aa-3161-3c8ccd281391",
							"code": "ChatQueuesListDS_Name",
							"caption": "#ResourceString(ChatQueuesListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "c66fc1c8-6f93-f94a-3f74-b084a7599a2f",
							"code": "ChatQueuesListDS_OperatorRoutingRule",
							"path": "OperatorRoutingRule",
							"caption": "#ResourceString(ChatQueuesListDS_OperatorRoutingRule)#",
							"dataValueType": 10,
							"referenceSchemaName": "OperatorRoutingRules",
							"width": 272
						},
						{
							"id": "a213da4d-1a1e-cf4c-3869-8ff8905116b3",
							"code": "ChatQueuesListDS_ChatTimeout",
							"path": "ChatTimeout",
							"caption": "#ResourceString(ChatQueuesListDS_ChatTimeout)#",
							"dataValueType": 4,
							"width": 286
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "ChatQueuesListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesList_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatQueuesList_AddTagsBulkAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "ChatQueuesListDS",
							"filters": "$ChatQueuesList | crt.ToCollectionFilters : 'ChatQueuesList' : $ChatQueuesList_SelectionState | crt.SkipIfSelectionEmpty : $ChatQueuesList_SelectionState"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "ChatQueuesList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesList_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatQueuesList_RemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "ChatQueuesListDS",
							"filters": "$ChatQueuesList | crt.ToCollectionFilters : 'ChatQueuesList' : $ChatQueuesList_SelectionState | crt.SkipIfSelectionEmpty : $ChatQueuesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChatQueuesList_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatQueuesList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatQueuesList_ExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ChatQueuesList",
							"filters": "$ChatQueuesList | crt.ToCollectionFilters : 'ChatQueuesList' : $ChatQueuesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChatQueuesList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatQueuesList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatQueuesList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "ChatQueuesListDS",
							"filters": "$ChatQueuesList | crt.ToCollectionFilters : 'ChatQueuesList' : $ChatQueuesList_SelectionState | crt.SkipIfSelectionEmpty : $ChatQueuesList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChatQueuesList",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChatActionsExpansionPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 3
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ChatActionsExpansionPanel_title)#",
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
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChatActionsToolsContainer",
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
				"parentName": "ChatActionsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsToolsFlexContainer",
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
				"parentName": "ChatActionsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ChatActionsRefreshButton_caption)#",
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
							"dataSourceName": "ChatActionsListDS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "ChatActionsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(ChatActionsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "ChatActionsSearchFilter_ChatActionsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"ChatActionsList"
										]
									}
								]
							}
						],
						"from": [
							"ChatActionsSearchFilter_SearchValue",
							"ChatActionsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "ChatActionsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatActionsInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "ChatActionsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsInfoLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ChatActionsInfoLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ChatActionsInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsListContainer",
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
					"alignItems": "stretch",
					"stretch": false
				},
				"parentName": "ChatActionsExpansionPanel",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatActionsList",
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
							"itemsCreation": true,
							"lookupItemsCreation": false
						}
					},
					"items": "$ChatActionsList",
					"selectionState": "$ChatActionsList_SelectionState",
					"_selectionOptions": {
						"attribute": "ChatActionsList_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "ChatActionsListDS_Id",
					"columns": [
						{
							"id": "fdfcf396-62a8-547e-5b5f-c6556b028569",
							"code": "ChatActionsListDS_Caption",
							"caption": "#ResourceString(ChatActionsListDS_Caption)#",
							"dataValueType": 28
						},
						{
							"id": "a1418b0f-ecdd-bd58-f311-4e465a6dcb9e",
							"code": "ChatActionsListDS_BusinessProcess",
							"caption": "#ResourceString(ChatActionsListDS_BusinessProcess)#",
							"dataValueType": 10,
							"width": 470
						},
						{
							"id": "aad42b0f-866b-620b-fd95-f74505c11b3b",
							"code": "ChatActionsListDS_ChatQueue",
							"caption": "#ResourceString(ChatActionsListDS_ChatQueue)#",
							"dataValueType": 10,
							"width": 305
						}
					],
					"bulkActions": [],
					"placeholder": false
				},
				"parentName": "ChatActionsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsList_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatActionsList_ExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "ChatActionsList",
							"filters": "$ChatActionsList | crt.ToCollectionFilters : 'ChatActionsList' : $ChatActionsList_SelectionState | crt.SkipIfSelectionEmpty : $ChatActionsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChatActionsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatActionsList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ChatActionsList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "ChatActionsListDS",
							"filters": "$ChatActionsList | crt.ToCollectionFilters : 'ChatActionsList' : $ChatActionsList_SelectionState | crt.SkipIfSelectionEmpty : $ChatActionsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "ChatActionsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CardToggleTabPanel",
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
					},
					"visible": true,
					"stretch": true
				},
				"parentName": "CenterContainer",
				"propertyName": "items",
				"index": 1
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
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerHeaderContainer",
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
				"name": "HelpTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(HelpTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "HelpTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HelpTabContainerFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column",
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true,
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "medium",
					"wrap": "nowrap",
					"stretch": false
				},
				"parentName": "HelpTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "medium",
					"padding": {
						"top": "12px",
						"right": "12px",
						"bottom": "medium",
						"left": "12px"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoTitle",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralHelpInfoTitle_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralHelpInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralHelpInfoDescription_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralHelpInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoActionsListContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "GeneralHelpInfoContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoAction1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralHelpInfoAction1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralHelpInfoActionsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoAction2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralHelpInfoAction2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralHelpInfoActionsListContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoAction3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(GeneralHelpInfoAction3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "GeneralHelpInfoActionsListContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GeneralHelpInfoLink",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(GeneralHelpInfoLink_caption)#",
					"href": "https://academy.creatio.com/documents?id=2382",
					"target": "_blank",
					"visible": true,
					"layoutConfig": {},
					"linkType": "body"
				},
				"parentName": "GeneralHelpInfoContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "medium",
					"padding": {
						"top": "12px",
						"right": "12px",
						"bottom": "medium",
						"left": "12px"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "HelpTabContainerFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoTitle",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoTitle_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoDescription",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoDescription_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoSettingsListContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "medium"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoSetting1",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoSetting1_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoSettingsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoSetting2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoSetting2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoSettingsListContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoSetting3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoSetting3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoSettingsListContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoDescription2",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoDescription2_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoDescription3",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(SecondaryHelpInfoDescription3_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "SecondaryHelpInfoLink",
				"values": {
					"type": "crt.Link",
					"caption": "#ResourceString(SecondaryHelpInfoLink_caption)#",
					"href": "https://academy.creatio.com/documents?id=2383",
					"target": "_blank",
					"visible": true,
					"linkType": "body"
				},
				"parentName": "SecondaryHelpInfoContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ChannelsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ChannelsListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Provider"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "ChannelsSearchFilter_ChannelsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ChannelsListDS_Name": {
									"modelConfig": {
										"path": "ChannelsListDS.Name"
									}
								},
								"ChannelsListDS_Provider": {
									"modelConfig": {
										"path": "ChannelsListDS.Provider"
									}
								},
								"ChannelsListDS_IsActive": {
									"modelConfig": {
										"path": "ChannelsListDS.IsActive"
									}
								},
								"ChannelsListDS_ChatQueue": {
									"modelConfig": {
										"path": "ChannelsListDS.ChatQueue"
									}
								},
								"ChannelsListDS_Id": {
									"modelConfig": {
										"path": "ChannelsListDS.Id"
									}
								},
								"ChannelsListDS_ErrorCode": {
									"modelConfig": {
										"path": "ChannelsListDS.ErrorCode"
									}
								},
								"ValidationImage": {
									"value": {
										"type": "icon",
										"height": "16px",
										"width": "16px",
										"padding": "0px",
										"icon": "info-icon",
										"color": "#d2310d",
										"tooltip": ""
									}
								}
							}
						}
					},
					"ChatQueuesList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ChatQueuesListDS",
							"filterAttributes": [
								{
									"name": "ChatQueuesSearchFilter_ChatQueuesList",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": []
							}
						},
						"viewModelConfig": {
							"attributes": {
								"ChatQueuesListDS_Name": {
									"modelConfig": {
										"path": "ChatQueuesListDS.Name"
									}
								},
								"ChatQueuesListDS_OperatorRoutingRule": {
									"modelConfig": {
										"path": "ChatQueuesListDS.OperatorRoutingRule"
									}
								},
								"ChatQueuesListDS_ChatTimeout": {
									"modelConfig": {
										"path": "ChatQueuesListDS.ChatTimeout"
									}
								},
								"ChatQueuesListDS_Id": {
									"modelConfig": {
										"path": "ChatQueuesListDS.Id"
									}
								}
							}
						}
					},
					"ChatActionsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "ChatActionsListDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ChatActionsList_PredefinedFilter"
								},
								{
									"name": "ChatActionsSearchFilter_ChatActionsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"ChatActionsListDS_Caption": {
									"modelConfig": {
										"path": "ChatActionsListDS.Caption"
									}
								},
								"ChatActionsListDS_BusinessProcess": {
									"modelConfig": {
										"path": "ChatActionsListDS.BusinessProcess"
									}
								},
								"ChatActionsListDS_ChatQueue": {
									"modelConfig": {
										"path": "ChatActionsListDS.ChatQueue"
									}
								},
								"ChatActionsListDS_Id": {
									"modelConfig": {
										"path": "ChatActionsListDS.Id"
									}
								}
							}
						}
					},
					"ChatActionsList_PredefinedFilter": {
						"value": null
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
						"ChannelsListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "Channel",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"Provider": {
										"path": "Provider"
									},
									"IsActive": {
										"path": "IsActive"
									},
									"ChatQueue": {
										"path": "ChatQueue"
									}
								}
							}
						},
						"ChatQueuesListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "ChatQueue",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"OperatorRoutingRule": {
										"path": "OperatorRoutingRule"
									},
									"ChatTimeout": {
										"path": "ChatTimeout"
									}
								}
							}
						},
						"ChatActionsListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "OmniChatAction",
								"attributes": {
									"Caption": {
										"path": "Caption"
									},
									"BusinessProcess": {
										"path": "BusinessProcess"
									},
									"ChatQueue": {
										"path": "ChatQueue"
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