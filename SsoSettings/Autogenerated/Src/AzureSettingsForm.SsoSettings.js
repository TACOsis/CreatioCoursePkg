define("AzureSettingsForm", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SetIdentityStep_ExpansionPanel",
				"values": {
					"title": "#ResourceString(AzureSetIdentityStep_ExpansionPanel_title)#"
				}
			},
			{
				"operation": "merge",
				"name": "RegisterInIdentity_Label",
				"values": {
					"caption": "#ResourceString(AzureRegisterInIdentity_Label_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "SamlEndpoints_ExpansionPanel",
				"values": {
					"title": "#ResourceString(AzureSamlEndpoints_ExpansionPanel_title)#"
				}
			},
			{
				"operation": "merge",
				"name": "SetSamlParams_Label",
				"values": {
					"caption": "#ResourceString(AzureSetSamlParams_Label_caption)#"
				}
			},
			{
				"operation": "merge",
				"name": "PartnerIdentityName",
				"values": {
					"label": "#ResourceString(AzurePartnerIdentityName_Input_caption)#"
				}
			},
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});