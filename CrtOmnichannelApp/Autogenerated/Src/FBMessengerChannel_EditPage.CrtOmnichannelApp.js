define("FBMessengerChannel_EditPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "ChatQueue",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Language",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "IsActive",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "move",
				"name": "IsActive",
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "FacebookPage",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "#ResourceString(FacebookPage_label)#",
					"control": "$FacebookLink",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"fileEntitySchema": "",
					"caption": "#ResourceString(FacebookPage_caption)#",
					"visible": true,
					"readonly": true,
					"toolbarDisplayMode": null
				},
				"parentName": "MainContainer",
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
					"ChannelDS_Name_habw2lr": {
						"modelConfig": {
							"path": "ChannelDS.Name"
						}
					},
					"ChannelDS_IsActive_zk3tiwz": {
						"modelConfig": {
							"path": "ChannelDS.IsActive"
						}
					},
					"ChannelDS_ChatQueue_zk6ormp": {
						"modelConfig": {
							"path": "ChannelDS.ChatQueue"
						}
					},
					"ChannelDS_Language_zya39tf": {
						"modelConfig": {
							"path": "ChannelDS.Language"
						}
					},
					"ChannelDS_Source_zya39tf": {
						"modelConfig": {
							"path": "ChannelDS.Source"
						}
					},
					"ChannelDS_MsgSettingsId_bar51ga": {
						"modelConfig": {
							"path": "ChannelDS.MsgSettingsId"
						}
					},
					"FacebookLink": {
						"value": "",
						"modelConfig": {}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});