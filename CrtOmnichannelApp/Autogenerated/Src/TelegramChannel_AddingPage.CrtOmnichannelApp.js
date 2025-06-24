define("TelegramChannel_AddingPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"operation": "remove",
				"name": "Name"
			},
			{
				"operation": "insert",
				"name": "Token",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Token_label)#",
					"control": "$TelegramToken",
					"placeholder": "#ResourceString(Token_placeholder)#",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
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
					"ChannelDS_IsActive_7heb597": {
						"modelConfig": {
							"path": "ChannelDS.IsActive"
						}
					},
					"ChannelDS_ChatQueue_s9cig3i": {
						"modelConfig": {
							"path": "ChannelDS.ChatQueue"
						}
					},
					"ChannelDS_Language_6i2g0te": {
						"modelConfig": {
							"path": "ChannelDS.Language"
						}
					},
					"ChannelDS_Source_g0te001": {
						"modelConfig": {
							"path": "ChannelDS.Source"
						}
					},
					"ChannelDS_MsgSettingsId_pis0d01": {
						"modelConfig": {
							"path": "ChannelDS.MsgSettingsId"
						}
					},
					"TelegramToken": {
						"value": "",
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						},
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