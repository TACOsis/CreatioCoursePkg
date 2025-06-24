define("ChatQueues_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"fitContent": false,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "TopAreaProfileContainer"
			},
			{
				"operation": "insert",
				"name": "CenterFlexContainer",
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
					"fitContent": true,
					"visible": true,
					"color": "primary",
					"borderRadius": "medium",
					"padding": {
						"top": "large",
						"right": "large",
						"bottom": "large",
						"left": "large"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "CardContentWrapper",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QueueFieldsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
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
				"parentName": "CenterFlexContainer",
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
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ChatQueueDS_Name_57sz4fz",
					"labelPosition": "auto",
					"control": "$ChatQueueDS_Name_57sz4fz"
				},
				"parentName": "QueueFieldsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RoutingRule",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.ChatQueueDS_OperatorRoutingRule_mtslosf",
					"labelPosition": "auto",
					"control": "$ChatQueueDS_OperatorRoutingRule_mtslosf",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(RoutingRule_tooltip)#"
				},
				"parentName": "QueueFieldsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatTimeout",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.ChatQueueDS_ChatTimeout_hmzg6oo",
					"labelPosition": "auto",
					"control": "$ChatQueueDS_ChatTimeout_hmzg6oo",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(ChatTimeout_tooltip)#"
				},
				"parentName": "QueueFieldsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QueueAgentsExpansionPanel",
				"values": {
					"layoutConfig": {},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(QueueAgentsExpansionPanel_title)#",
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
					"fitContent": false,
					"visible": true,
					"alignItems": "stretch",
					"stretch": true
				},
				"parentName": "CenterFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QueueAgentsToolsContainer",
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
				"parentName": "QueueAgentsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QueueAgentsToolsFlexContainer",
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
				"parentName": "QueueAgentsToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QueueAgentsAddButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(QueueAgentsAddButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "add-button-icon",
					"clicked": {
						"request": "crt.CreateQueueAgentHandlerRequest",
						"params": {
							"entityName": "ChatQueueOperator",
							"defaultValues": [
								{
									"attributeName": "Queue",
									"value": "$Id"
								}
							]
						}
					},
				},
				"parentName": "QueueAgentsToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QueueAgentsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(QueueAgentsRefreshButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": true,
					"icon": "reload-button-icon",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload",
								"useLastLoadParameters": true
							},
							"dataSourceName": "QueueAgentsListDS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "QueueAgentsToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "QueueAgentsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(QueueAgentsSearchFilter_placeholder)#",
					"targetAttributes": [
						"QueueAgentsList"
					],
					"iconOnly": true
				},
				"parentName": "QueueAgentsToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "QueueAgentsList",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						}
					},
					"items": "$QueueAgentsList",
					"selectionState": "$QueueAgentsList_SelectionState",
					"_selectionOptions": {
						"attribute": "QueueAgentsList_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "QueueAgentsListDS_Id",
					"columns": [
						{
							"id": "4eb3e14e-e988-4eff-ceab-8c86f466da86",
							"code": "QueueAgentsListDS_Operator",
							"path": "Operator",
							"caption": "#ResourceString(QueueAgentsListDS_Operator)#",
							"dataValueType": 10,
							"referenceSchemaName": "SysAdminUnit",
							"width": 367
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"stretch": true
				},
				"parentName": "QueueAgentsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "QueueAgentsList_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(QueueAgentsList_DeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "QueueAgentsListDS",
							"filters": "$QueueAgentsList | crt.ToCollectionFilters : 'QueueAgentsList' : $QueueAgentsList_SelectionState | crt.SkipIfSelectionEmpty : $QueueAgentsList_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "QueueAgentsList",
				"propertyName": "bulkActions",
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
					"ChatQueueDS_Name_57sz4fz": {
						"modelConfig": {
							"path": "ChatQueueDS.Name"
						}
					},
					"ChatQueueDS_OperatorRoutingRule_mtslosf": {
						"modelConfig": {
							"path": "ChatQueueDS.OperatorRoutingRule"
						}
					},
					"ChatQueueDS_SimultaneousChats_xucgtju": {
						"modelConfig": {
							"path": "ChatQueueDS.SimultaneousChats"
						}
					},
					"ChatQueueDS_ChatTimeout_hmzg6oo": {
						"modelConfig": {
							"path": "ChatQueueDS.ChatTimeout"
						}
					},
					"QueueAgentsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "QueueAgentsListDS"
						},
						"viewModelConfig": {
							"attributes": {
								"QueueAgentsListDS_Operator": {
									"modelConfig": {
										"path": "QueueAgentsListDS.Operator"
									}
								},
								"QueueAgentsListDS_Id": {
									"modelConfig": {
										"path": "QueueAgentsListDS.Id"
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
					"dataSources": {
						"ChatQueueDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "ChatQueue"
							}
						},
						"QueueAgentsListDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "ChatQueueOperator",
								"attributes": {
									"Operator": {
										"path": "Operator"
									}
								}
							}
						}
					},
					"primaryDataSourceName": "ChatQueueDS",
					"dependencies": {
						"QueueAgentsListDS": [
							{
								"attributePath": "ChatQueue",
								"relationPath": "ChatQueueDS.Id"
							}
						]
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});