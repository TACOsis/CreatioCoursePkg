define("CopilotPanel", /**SCHEMA_DEPS*/["@creatio-devkit/common", "css!CopilotPanel"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Main",
				"values": {
					"classes": [
						"copilot-panel-main-wrapper-container"
					]
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "large",
						"left": "large"
					},
					"classes": [
						"copilot-panel-main-container"
					]
				}
			},
			{
				"operation": "insert",
				"name": "DebugInfo_Button",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(DebugInfo_Button_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": "$CanDebugSkills",
					"icon": "message-warn-button-icon",
					"clicked": {
						"request": "crt.CopilotShowDebugInfoRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RestartSessionButton",
				"values": {
					"type": "crt.Button",
					"icon": "restart-button-icon",
					"size": "medium",
					"iconPosition": "only-icon",
					"title": "#ResourceString(CopilotRestartSessionButton_title)#",
					"clicked": {
						"request": "crt.CopilotRestartSessionRequest",
						"params": {
							"chatMessagesAttributeName": "ChatMessages",
							"conversationEventAttributeName": "ConversationEvent"
						}
					},
					"color": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Chat",
				"values": {
					"type": "crt.Chat",
					"items": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation",
				"values": {
					"type": "crt.Conversation",
					"visible": true,
					"actions": [],
					"information": [],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "icon",
								"icon": "copilot-logo",
								"width": "80px",
								"height": "80px",
								"padding": "0px"
							},
							"title": null,
							"subhead": null
						},
						{
							"type": "crt.ChatDisclaimer",
							"visible": "$IsCopilotDisclaimerVisible",
							"caption": "$CopilotDisclaimer",
							"consentCode": "CopilotLegalNotice",
							"acceptClicked": {
								"request": "crt.CopilotDisclaimerAcceptRequest",
								"params": {
									"consentCode": "CopilotLegalNotice"
								}
							}
						},
						{
							"type": "crt.FlexContainer",
							"items": [
								{
									"type": "crt.Label",
									"caption": "#MacrosTemplateString(#ResourceString(CopilotTitle_text)#)#",
									"labelType": "body",
									"labelThickness": "default",
									"labelTextAlign": "center"
								},
								{
									"type": "crt.TemplateList",
									"items": "$CopilotQuickActions",
									"direction": "row",
									"gap": 8,
									"template": [
										{
											"type": "crt.Button",
											"name": "$CopilotQuickActions.Code",
											"caption": "$CopilotQuickActions.Name",
											"size": "large",
											"color": "outline",
											"clicked": {
												"request": "crt.CopilotActionRequest",
												"params": {
													"prompt": "$CopilotQuickActions.Name"
												}
											},
											"disabled": "$NavigationStateIsLoading"
										}
									],
									"classes": [
										"copilot-actions-list"
									]
								}
							],
							"direction": "column",
							"visible": "$IsCopilotChatVisible",
							"color": "transparent",
							"borderRadius": "none",
							"padding": {
								"top": "none",
								"right": "none",
								"bottom": "none",
								"left": "none"
							},
							"stretch": true,
							"alignItems": "stretch",
							"justifyContent": "start",
							"gap": "small",
							"wrap": "nowrap"
						}
					],
					"conversationEvent": "$ConversationEvent",
					"messages": "$ChatMessages",
					"isTyping": "$IsTyping",
					"tools": [],
					"typing": [
						{
							"type": "crt.ChatTyping",
							"author": "$CopilotContact",
							"message": "#ResourceString(CopilotTyping_text)#"
						}
					]
				},
				"parentName": "Chat",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MessageEditor",
				"values": {
					"type": "crt.FlexContainer",
					"visible": "$IsCopilotChatVisible",
					"direction": "row",
					"justifyContent": "start",
					"gap": "none",
					"alignItems": "center",
					"items": []
				},
				"parentName": "Conversation",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation_MessageEditor",
				"values": {
					"type": "crt.MessageEditor",
					"items": []
				},
				"parentName": "FlexContainer_MessageEditor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MessageEditorBody",
				"values": {
					"type": "crt.MessageEditorBody",
					"toolbarItems": [],
					"inputs": [],
					"isFocused": "$IsFocused",
					"chatInput": "$ChatInput",
					"sendMessage": {
						"request": "crt.MessageEditorSendRequest",
						"params": {
							"attributesMapping": "$MessageEditorAttributesMapping"
						}
					}
				},
				"parentName": "Conversation_MessageEditor",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MessageEditorCrtInput",
				"values": {
					"type": "crt.MessageEditorInput",
					"chatInput": "$ChatInput",
					"isFocused": "$IsFocused",
					"sendMessage": {
						"request": "crt.MessageEditorSendRequest",
						"params": {
							"attributesMapping": "$MessageEditorAttributesMapping"
						}
					}
				},
				"parentName": "MessageEditorBody",
				"propertyName": "inputs",
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
					"CanDebugSkills": {
						"value": false
					},
					"ChatMessages": {},
					"CopilotContact": {},
					"NavigationStateIsLoading": {
						"value": true
					},
					"IsCopilotDisclaimerVisible": {
						"value": false
					},
					"IsCopilotChatVisible": {
						"value": false
					},
					"CopilotDisclaimer": {
						"value": ""
					},
					"CopilotQuickActions": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Name": {
									"modelConfig": {
										"path": "CopilotIntentDS.Name"
									}
								}
							}
						}
					},
					"CopilotIntentPageQuickLinks": {
						"isCollection": true,
						"modelConfig": {
							"path": "CopilotIntentPageQuickLinksDS"
						},
						"viewModelConfig": {
							"attributes": {
								"PageName": {
									"modelConfig": {
										"path": "CopilotIntentPageQuickLinksDS.PageName"
									}
								},
								"IntentCode": {
									"modelConfig": {
										"path": "CopilotIntentPageQuickLinksDS.IntentCode"
									}
								}
							}
						}
					},
					"CopilotIntents": {
						"isCollection": true,
						"modelConfig": {
							"path": "CopilotIntentDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "ActiveIntents_r8uqh52_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"Id": {
									"modelConfig": {
										"path": "CopilotIntentDS.Id"
									}
								},
								"Code": {
									"modelConfig": {
										"path": "CopilotIntentDS.Code"
									}
								},
								"Name": {
									"modelConfig": {
										"path": "CopilotIntentDS.Name"
									}
								}
							}
						}
					},
					"ActiveIntents_r8uqh52_PredefinedFilter": {
						"value": {
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"filterType": 6,
							"logicalOperation": 0,
							"items": {
								"ActiveIntents": {
									"isEnabled": true,
									"trimDateTimeParameterToDate": false,
									"filterType": 1,
									"comparisonType": 3,
									"leftExpression": {
										"expressionType": 0,
										"columnPath": "Status"
									},
									"rightExpression": {
										"expressionType": 2,
										"parameter": {
											"dataValueType": 1,
											"value": "1D73B111-07A9-49E2-AA15-C9415CCE7470"
										}
									}
								}
							}
						}
					},
					"CurrentPageSchemaName": {
						"value": null
					},
					"IsTyping": {},
					"IsFocused": {},
					"ChatInput": {
						"value": ""
					},
					"ConversationEvent": {
						"value": []
					},
					"MessageEditorAttributesMapping": {
						"value": {
							"chatInput": "ChatInput",
							"chatMessages": "ChatMessages"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"CopilotIntentDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotIntent",
							"attributes": {
								"Id": {
									"path": "Id"
								},
								"Name": {
									"path": "Name"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"CopilotIntentPageQuickLinksDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CopilotIntentPageQuickLinks",
							"attributes": {
								"IntentCode": {
									"path": "IntentCode"
								},
								"PageName": {
									"path": "PageName"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					const rightsService = new sdk.RightsService();
					const canDebugSkills = await rightsService.getCanExecuteOperation('CanDebugSkills');
					request.$context.CanDebugSkills = canDebugSkills;
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});