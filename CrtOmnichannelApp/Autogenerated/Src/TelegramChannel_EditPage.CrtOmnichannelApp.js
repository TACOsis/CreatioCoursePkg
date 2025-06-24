define("TelegramChannel_EditPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "insert",
				"name": "TelegramBot",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "#ResourceString(TelegramBot_label)#",
					"control": "$TelegramBot",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"fileEntitySchema": "",
					"caption": "#ResourceString(TelegramBot_caption)#",
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
					"ChannelDS_Name_flywnyq": {
						"modelConfig": {
							"path": "ChannelDS.Name"
						}
					},
					"ChannelDS_IsActive_lbdkgda": {
						"modelConfig": {
							"path": "ChannelDS.IsActive"
						}
					},
					"ChannelDS_ChatQueue_dcygduq": {
						"modelConfig": {
							"path": "ChannelDS.ChatQueue"
						}
					},
					"ChannelDS_Language_6a6rxpe": {
						"modelConfig": {
							"path": "ChannelDS.Language"
						}
					},
					"ChannelDS_MsgSettingsId_6a6rxpe": {
						"modelConfig": {
							"path": "ChannelDS.MsgSettingsId"
						}
					},
					"TelegramBot": {
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