define("BasePageTemplate", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainHeader",
				"values": {
					"padding": {
						"bottom": "large",
						"right": "large",
						"left": "large"
					},
					"borderRadius": "medium",
					"gap": "small"
				}
			},
			{
				"operation": "insert",
				"name": "SaveButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.SaveRecordRequest"
					},
					"color": "accent",
					"caption": "$Resources.Strings.SaveButton",
					"visible": "$HasUnsavedData"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CancelButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.CancelRecordChangesRequest"
					},
					"caption": "$Resources.Strings.CancelButton",
					"visible": "$HasUnsavedData"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CloseButton",
				"values": {
					"type": "crt.Button",
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"color": "primary",
					"caption": "$Resources.Strings.CloseButton",
					"visible": "$HasUnsavedData | crt.InvertBooleanValue"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CardToggleContainer",
				"values": {
					"type": "crt.FlexContainer",
					"justifyContent": "end",
					"items": []
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"CardState": {}
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