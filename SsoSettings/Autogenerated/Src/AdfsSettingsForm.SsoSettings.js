define("AdfsSettingsForm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SetIdentityStep_ExpansionPanel",
				"values": {
					"title": "#ResourceString(AdfsSetIdentityStep_ExpansionPanel_title)#"
				}
			},
			{
				"operation": "merge",
				"name": "RegisterInIdentity_Label",
				"values": {
					"caption": "#ResourceString(AdfsRegisterInIdentity_Label_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "SamlEndpoints_ExpansionPanel",
				"values": {
					"title": "#ResourceString(AdfsSamlEndpoints_ExpansionPanel_title)#"
				}
			},
			{
				"operation": "merge",
				"name": "PartnerIdentityName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 2,
						"rowSpan": 1
					},
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				}
			},
			{
				"operation": "merge",
				"name": "SingleSignOnServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 1
					},
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				}
			},
			{
				"operation": "merge",
				"name": "SingleLogoutServiceUrl",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				}
			},
			{
				"operation": "merge",
				"name": "SetSamlParams_Label",
				"values": {
					"caption": "#ResourceString(AdfsSetSamlParams_Label_caption)#"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "AdfsUrl_Input",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(AdfsUrl_Input_label)#",
					"control": "$AdfsUrl",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GridContainer_lt5xdnm",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"AdfsUrl": {
					"validators": {
						"TenantValidator": {
							"type": "crt.AdfsTenantValidator"
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});