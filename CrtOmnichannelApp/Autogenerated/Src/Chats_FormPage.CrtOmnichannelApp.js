define("Chats_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "css!Chats_FormPageCSS"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(devkit)/**SCHEMA_ARGS*/ {
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
					"tagInRecordSourceSchemaName": "OmniChatInTag",
					"visible": true,
					"label": "$Resources.Strings.null",
					"labelPosition": "auto"
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
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
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
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
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
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "OmniChat"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "OmniChat",
					"columns": [
						{
							"id": "86a8516e-c30b-3478-e4d5-223bbb8f3e6e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "07130be7-286b-166b-a763-620218b3e8db",
							"code": "AttachmentListDS_CreatedOn",
							"caption": "#ResourceString(AttachmentListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "ffb7cb3c-80fb-3abe-4446-59edc3855817",
							"code": "AttachmentListDS_CreatedBy",
							"caption": "#ResourceString(AttachmentListDS_CreatedBy)#",
							"dataValueType": 10
						},
						{
							"id": "930b5991-b918-0098-2f91-bd8b5a363372",
							"code": "AttachmentListDS_Size",
							"caption": "#ResourceString(AttachmentListDS_Size)#",
							"dataValueType": 4
						}
					],
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentAddButton",
				"values": {
					"caption": "#ResourceString(AttachmentAddButton_caption)#",
					"visible": true,
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentRefreshButton",
				"values": {
					"caption": "#ResourceString(AttachmentRefreshButton_caption)#",
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
				}
			},
			{
				"operation": "insert",
				"name": "ProgressBarContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"wrap": "nowrap",
					"padding": {
						"left": "small",
						"right": "small"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ProgressBar",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": false,
					"askUserToChangeSchema": true,
					"entityName": "OmniChat"
				},
				"parentName": "ProgressBarContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatVidgetsContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "small",
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
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatDurationIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ChatDurationIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ChatDurationIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "ChatDuration"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(ChatDurationIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "hourglass-icon",
								"color": "blue"
							}
						},
						"theme": "without-fill"
					},
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "ChatVidgetsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatFirstResponseTimeIndicatorWidget",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ChatFirstResponseTimeIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ChatFirstResponseTimeIndicatorWidget_Data",
								"schemaName": "OmniChat",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "OmniChat"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "FirstReplyTime"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "PDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(ChatFirstResponseTimeIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "small",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-blue",
							"icon": {
								"iconName": "clock-icon",
								"color": "dark-turquoise"
							}
						},
						"theme": "without-fill"
					},
					"visible": true,
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"rowSpan": 1,
						"row": 1
					}
				},
				"parentName": "ChatVidgetsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatMetricsContainer",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
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
					"layoutConfig": {
						"basis": "fit-content"
					},
					"color": "primary",
					"borderRadius": "medium",
					"items": [],
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatMetricsLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ChatMetricsLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "ChatMetricsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ChatStartDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(ChatStartDate_label)#",
					"labelPosition": "above",
					"control": "$PDS_ChatStartDate_2bu75fj",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ChatMetricsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ChatEndDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "#ResourceString(ChatEndDate_label)#",
					"labelPosition": "above",
					"control": "$PDS_ChatEndDate_6r2dk5w",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "ChatMetricsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ChatInfoLabel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(ChatInfoLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Provider",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_ChannelProvider_cqbiyhu",
					"ariaLabel": "#ResourceString(Provider_ariaLabel)#",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"readonly": true,
					"control": "$PDS_ChannelProvider_cqbiyhu"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Channel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Channel_nc9gjuh",
					"labelPosition": "above",
					"control": "$PDS_Channel_nc9gjuh",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true,
					"mode": "List",
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Queue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Queue_s29arda",
					"labelPosition": "above",
					"control": "$PDS_Queue_s29arda",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"readonly": true,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Contact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Contact_ftjpilx",
					"labelPosition": "above",
					"control": "$PDS_Contact_ftjpilx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
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
				"name": "Operator",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Operator_6leojfc",
					"labelPosition": "above",
					"control": "$PDS_Operator_6leojfc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
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
					"visible": true,
					"fitContent": false,
					"color": "transparent",
					"borderRadius": "none"
				}
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"stretch": false,
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
					"gap": "small"
				}
			},
			{
				"operation": "insert",
				"name": "ConversationContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"stretch": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation",
				"values": {
					"type": "crt.Conversation",
					"actions": [],
					"information": [],
					"messages": "$Chat_aule2w2_ChatMessages",
					"hasPreviousMessages": "$Chat_aule2w2_PreviousChatId",
					"tools": [],
					"placeholder": [],
					"typing": [],
					"disableAutoScroll": true,
					"loadPreviousMessages": {
						"request": "crt.LoadConversationRequest",
						"params": {
							"chatId": '$Id',
							"chatMessagesAttributeName": "Chat_aule2w2_ChatMessages",
							"previousChatIdAttributeName": "Chat_aule2w2_PreviousChatId",
							"loadMode": "append"
						}
					},
					"conversationEvent": "$ConversationEvent"
				},
				"parentName": "ConversationContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedInfoTab",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(RelatedInfoTab_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedInfoTabContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "RelatedInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ParentChat",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_Parent_kblakyw",
					"labelPosition": "auto",
					"control": "$PDS_Parent_kblakyw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"mode": "List",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "RelatedInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsExpansionPanel",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(RelatedChatsExpansionPanel_title)#",
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
				"parentName": "RelatedInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedChatsListToolsContainer",
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
				"parentName": "RelatedChatsExpansionPanel",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsListToolsFlexContainer",
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
				"parentName": "RelatedChatsListToolsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsRefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelatedChatsRefreshButton_caption)#",
					"icon": "reload-icon",
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
							"dataSourceName": "DS"
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "RelatedChatsListToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsSettingsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RelatedChatsSettingsButton_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": true
				},
				"parentName": "RelatedChatsListToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedChatsExportDataButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedChatsExportDataButton_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RelatedChatsList"
						}
					},
					"visible": true
				},
				"parentName": "RelatedChatsSettingsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsSearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(RelatedChatsSearchFilter_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "RelatedChatsSearchFilter_",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											""
										]
									}
								]
							},
							{
								"attribute": "RelatedChatsSearchFilter_RelatedChatsList",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"RelatedChatsList"
										]
									}
								]
							}
						],
						"from": [
							"RelatedChatsSearchFilter_SearchValue",
							"RelatedChatsSearchFilter_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "RelatedChatsListToolsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "RelatedChatsListContainer",
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
				"parentName": "RelatedChatsExpansionPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsList",
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
							},
							"numeration": true
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$RelatedChatsList",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "RelatedChatsListDS_Id",
					"columns": [
						{
							"id": "de3bad7b-fd3f-10a4-2112-ad84aa591ac9",
							"code": "RelatedChatsListDS_Name",
							"caption": "#ResourceString(RelatedChatsListDS_Name)#",
							"dataValueType": 28
						},
						{
							"id": "f19216f8-e7e4-52d9-978f-8da2685ecca9",
							"code": "RelatedChatsListDS_CreatedOn",
							"caption": "#ResourceString(RelatedChatsListDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "62c0f8f8-0633-c57a-65b0-11f2e32ec6ca",
							"code": "RelatedChatsListDS_Operator",
							"caption": "#ResourceString(RelatedChatsListDS_Operator)#",
							"dataValueType": 10
						},
						{
							"id": "abb96cc7-b142-bbad-3ad3-1d4c52317e26",
							"code": "RelatedChatsListDS_Status",
							"caption": "#ResourceString(RelatedChatsListDS_Status)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "RelatedChatsListContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsAddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedChatsAddTagsBulkAction_caption)#",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DS",
							"filters": "$ | crt.ToCollectionFilters : '' : $_SelectionState | crt.SkipIfSelectionEmpty : $_SelectionState",
							"tagInRecordSourceSchemaName": "OmniChatInTag"
						}
					},
					"items": [],
					"visible": true
				},
				"parentName": "RelatedChatsList",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsRemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedChatsRemoveTagsBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "DS",
							"filters": "$ | crt.ToCollectionFilters : '' : $_SelectionState | crt.SkipIfSelectionEmpty : $_SelectionState",
							"tagInRecordSourceSchemaName": "OmniChatInTag"
						}
					},
					"visible": true
				},
				"parentName": "RelatedChatsAddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RelatedChatsExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedChatsExportToExcelBulkAction_caption)#",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RelatedChatsList",
							"filters": "$ | crt.ToCollectionFilters : '' : $_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RelatedChatsList",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RelatedChatsDeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RelatedChatsDeleteBulkAction_caption)#",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "DS",
							"filters": "$ | crt.ToCollectionFilters : '' : $_SelectionState | crt.SkipIfSelectionEmpty : $_SelectionState"
						}
					},
					"visible": true
				},
				"parentName": "RelatedChatsList",
				"propertyName": "bulkActions",
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
					"PDS_ChannelProvider_cqbiyhu": {
						"modelConfig": {
							"path": "PDS.ChannelProvider_cqbiyhu"
						}
					},
					"PDS_Channel_nc9gjuh": {
						"modelConfig": {
							"path": "PDS.Channel"
						}
					},
					"PDS_Queue_s29arda": {
						"modelConfig": {
							"path": "PDS.Queue"
						}
					},
					"PDS_Contact_ftjpilx": {
						"modelConfig": {
							"path": "PDS.Contact"
						}
					},
					"PDS_Operator_6leojfc": {
						"modelConfig": {
							"path": "PDS.Operator"
						}
					},
					"PDS_ChatStartDate_2bu75fj": {
						"modelConfig": {
							"path": "PDS.ChatStartDate"
						}
					},
					"PDS_ChatEndDate_6r2dk5w": {
						"modelConfig": {
							"path": "PDS.ChatEndDate"
						}
					},
					"PDS_Parent_kblakyw": {
						"modelConfig": {
							"path": "PDS.Parent"
						}
					},
					"": {
						"name": ""
					},
					"Chat_aule2w2_ChatMessages": {
						"value": []
					},
					"Chat_aule2w2_PreviousChatId": {
						"value": ""
					},
					"ConversationEvent": {
						"value": []
					},
					"RelatedChatsList": {
						"isCollection": true,
						"modelConfig": {
							"path": "RelatedChatsListDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							},
							"filterAttributes": [
								{
									"name": "RelatedChatsSearchFilter_RelatedChatsList",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"RelatedChatsListDS_Name": {
									"modelConfig": {
										"path": "RelatedChatsListDS.Name"
									}
								},
								"RelatedChatsListDS_CreatedOn": {
									"modelConfig": {
										"path": "RelatedChatsListDS.CreatedOn"
									}
								},
								"RelatedChatsListDS_Operator": {
									"modelConfig": {
										"path": "RelatedChatsListDS.Operator"
									}
								},
								"RelatedChatsListDS_Status": {
									"modelConfig": {
										"path": "RelatedChatsListDS.Status"
									}
								},
								"RelatedChatsListDS_Id": {
									"modelConfig": {
										"path": "RelatedChatsListDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
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
						"DS": [
							{
								"attributePath": "Contact",
								"relationPath": "PDS.Contact"
							},
							{
								"attributePath": "Channel",
								"relationPath": "PDS.Channel"
							}
						],
						"RelatedChatsListDS": [
							{
								"attributePath": "Contact",
								"relationPath": "PDS.Contact"
							},
							{
								"attributePath": "Channel",
								"relationPath": "PDS.Channel"
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
							"entitySchemaName": "OmniChat",
							"attributes": {
								"ChannelProvider_cqbiyhu": {
									"path": "Channel.Provider",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OmniChat",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Operator": {
									"path": "Operator"
								},
								"Status": {
									"path": "Status"
								}
							}
						}
					},
					"RelatedChatsListDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "OmniChat",
							"attributes": {
								"Name": {
									"path": "Name"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"Operator": {
									"path": "Operator"
								},
								"Status": {
									"path": "Status"
								}
							}
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
					"entitySchemaName": "OmniChatFile"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: 'crt.HandleViewModelAttributeChangeRequest',
				handler: async (request, next) => {
					const attributeName = request.attributeName;
					if (attributeName === 'Id') {
							await devkit.HandlerChainService.instance.process({
							type: 'crt.LoadConversationRequest',
							chatId: await request.$context['Id'],
							chatMessagesAttributeName: "Chat_aule2w2_ChatMessages",
							previousChatIdAttributeName: "Chat_aule2w2_PreviousChatId",
							$context: request.$context
						});
					}
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});