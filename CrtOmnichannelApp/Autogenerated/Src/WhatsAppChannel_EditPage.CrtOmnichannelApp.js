define("WhatsAppChannel_EditPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "WhatsAppChannel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.RichTextEditor",
					"label": "#ResourceString(WhatsAppChannel_label)#",
					"control": "$WhatsAppLink",
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"fileEntitySchema": "",
					"caption": "#ResourceString(WhatsApp_caption)#",
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
					"ChannelDS_Name_x93kh7n": {
						"modelConfig": {
							"path": "ChannelDS.Name"
						}
					},
					"ChannelDS_IsActive_jtg85yn": {
						"modelConfig": {
							"path": "ChannelDS.IsActive"
						}
					},
					"ChannelDS_ChatQueue_4zgstb0": {
						"modelConfig": {
							"path": "ChannelDS.ChatQueue"
						}
					},
					"ChannelDS_Language_09jkyfu": {
						"modelConfig": {
							"path": "ChannelDS.Language"
						}
					},
					"ChannelDS_Source_10fhytr": {
						"modelConfig": {
							"path": "ChannelDS.Source"
						}
					},
					"WhatsAppLink": {
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