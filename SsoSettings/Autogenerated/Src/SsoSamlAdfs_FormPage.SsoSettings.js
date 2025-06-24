define("SsoSamlAdfs_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PartnerIdentityName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 4,
						"rowSpan": 1
					},
					"readonly": true
				}
			},
			{
				"operation": "merge",
				"name": "SingleSignOnServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 4,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "SingleLogoutServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 8,
						"colSpan": 4,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "insert",
				"name": "AdfsUrlInput",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "#ResourceString(AdfsUrl_Input_label)#",
					"labelPosition": "auto",
					"control": "$AdfsUrl"
				},
				"parentName": "SamlEndpointsGridContainer",
				"propertyName": "items",
				"index": 5
			},
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"AdfsUrl": {
						"validators": {
							"TenantValidator": {
								"type": "crt.AdfsTenantValidator"
							}
						},
						"modelConfig": {}
					},
					"SingleLogoutServiceUrl": {
						"validators": {
							"IsUrlValidator": {
								"params": {
									"SkipEmptyValues": false
								}
							}
						}
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